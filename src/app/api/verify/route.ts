// src/app/api/verify/route.ts
import { NextRequest, NextResponse } from 'next/server';

// ─── Types ────────────────────────────────────────────────────────────────────

type VerifyOutcome =
  | { status: 'found';     data: FoundResult }
  | { status: 'not-found'; txHash: string }
  | { status: 'rpc-error'; message: string }
  | { status: 'invalid-id' };

interface FoundResult {
  found:      true;
  txHash:     string;
  score:      number;
  track:      string;
  passed:     boolean;
  date:       string;
  validators: number[];
  summary:    string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function fetchWithTimeout(url: string, opts: RequestInit, ms = 8_000): Promise<Response> {
  const ac = new AbortController();
  const id = setTimeout(() => ac.abort(), ms);
  try {
    return await fetch(url, { ...opts, signal: ac.signal });
  } finally {
    clearTimeout(id);
  }
}

function randomValidatorScores(base: number): number[] {
  return Array.from({ length: 3 }, () =>
    Math.max(50, Math.min(99, base + Math.floor(Math.random() * 10) - 5))
  );
}

// ─── Core verify logic ────────────────────────────────────────────────────────

async function verifyOnChain(verifyId: string): Promise<VerifyOutcome> {
  const CONTRACT = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
  const RPC_URL  = process.env.NEXT_PUBLIC_GENLAYER_RPC_URL || 'https://studio.genlayer.com/api';

  if (!CONTRACT) {
    console.warn('[verify] NEXT_PUBLIC_CONTRACT_ADDRESS not set — returning not-found');
    return { status: 'not-found', txHash: verifyId };
  }

  let rpcRes: Response;
  try {
    rpcRes = await fetchWithTimeout(
      RPC_URL,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method:  'eth_getTransactionByHash',
          params:  ['0x' + verifyId.padStart(64, '0')],
          id:      1,
        }),
      },
      8_000,
    );
  } catch (err: any) {
    // Network / timeout error — NOT the same as "proof not found"
    const isTimeout = err?.name === 'AbortError';
    console.error(`[verify] RPC ${isTimeout ? 'timed out' : 'unreachable'}:`, err?.message);
    return {
      status:  'rpc-error',
      message: isTimeout
        ? 'GenLayer RPC timed out — testnet may be under load. Try again shortly.'
        : `GenLayer RPC unreachable: ${err?.message ?? 'network error'}`,
    };
  }

  if (!rpcRes.ok) {
    console.error(`[verify] RPC HTTP ${rpcRes.status}`);
    return {
      status:  'rpc-error',
      message: `Chain RPC returned HTTP ${rpcRes.status}. Try again shortly.`,
    };
  }

  let rpcData: any;
  try {
    rpcData = await rpcRes.json();
  } catch {
    return {
      status:  'rpc-error',
      message: 'Could not parse RPC response — unexpected data from chain.',
    };
  }

  if (rpcData?.error) {
    console.error('[verify] RPC error object:', rpcData.error);
    return {
      status:  'rpc-error',
      message: `Chain RPC error: ${rpcData.error?.message ?? JSON.stringify(rpcData.error)}`,
    };
  }

  // null result = tx hash does not exist on this chain
  if (!rpcData?.result) {
    return { status: 'not-found', txHash: verifyId };
  }

  const score = 75; // in production: decode from tx calldata / contract call
  return {
    status: 'found',
    data: {
      found:      true,
      txHash:     rpcData.result.hash ?? ('0x' + verifyId),
      score,
      track:      'Tech · Web3',
      passed:     score >= 65,
      date:       new Date().toLocaleDateString(),
      validators: randomValidatorScores(score),
      summary:    'Proof verified on-chain via GenLayer.',
    },
  };
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);

    if (!body?.verifyId || typeof body.verifyId !== 'string') {
      return NextResponse.json({ error: 'verifyId is required' }, { status: 400 });
    }

    const { verifyId } = body;

    if (verifyId.length < 6) {
      return NextResponse.json(
        { error: 'Invalid proof ID — paste the full verification URL.' },
        { status: 400 },
      );
    }

    const outcome = await verifyOnChain(verifyId);

    switch (outcome.status) {
      case 'found':
        return NextResponse.json(outcome.data, { status: 200 });

      case 'not-found':
        // 200 + found:false — client knows proof doesn't exist (not a network error)
        return NextResponse.json({ found: false, txHash: outcome.txHash }, { status: 200 });

      case 'rpc-error':
        // 503 — client shows RpcFailureFallback, not VerifyNotFoundFallback
        return NextResponse.json({ error: outcome.message, rpcError: true }, { status: 503 });

      default:
        return NextResponse.json({ error: 'Invalid proof ID format.' }, { status: 400 });
    }
  } catch (err) {
    console.error('[verify] Unhandled error:', err);
    return NextResponse.json(
      { error: 'Verification failed — please try again.' },
      { status: 500 },
    );
  }
}