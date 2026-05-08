'use client';

import { useState, useCallback, useRef } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { submitAndEvaluate, pollForResult } from '@/lib/proofedApi';
import {
  ConsensusFailureFallback,
  EvalTimeoutFallback,
  ChainWriteFailureFallback,
  ConsensusPollingState,
  ApiErrorStrip,
} from '@/app/components/FallbackUI';

// ─── Types ────────────────────────────────────────────────────────────────────

type SubmitPhase =
  | 'idle'
  | 'submitting'
  | 'polling'
  | 'done'
  | 'error:timeout'
  | 'error:consensus'
  | 'error:chain'
  | 'error:wallet'
  | 'error:generic';

const SUBMIT_TIMEOUT_MS  = 50_000;
const MAX_POLL_ATTEMPTS  = 20;

// ─── Component ────────────────────────────────────────────────────────────────

export default function SubmitPage() {
  const [githubUrl,    setGithubUrl]    = useState('');
  const [challengeId,  setChallengeId]  = useState('challenge_web3_frontend_1');
  const [phase,        setPhase]        = useState<SubmitPhase>('idle');
  const [pollAttempt,  setPollAttempt]  = useState(0);
  const [result,       setResult]       = useState<any>(null);
  const [errorMsg,     setErrorMsg]     = useState<string | null>(null);

  const abortRef   = useRef<AbortController | null>(null);
  const retryCount = useRef(0);

  const { address, isConnected } = useAccount();
  const { connect }              = useConnect();
  const { disconnect }           = useDisconnect();

  // ── Core submit flow ────────────────────────────────────────────────────────

  const runSubmit = useCallback(async () => {
    abortRef.current?.abort();
    const abort = new AbortController();
    abortRef.current = abort;

    setPhase('submitting');
    setErrorMsg(null);
    setResult(null);
    setPollAttempt(0);

    // Hard timeout
    const timeoutId = setTimeout(() => {
      abort.abort();
      setPhase('error:timeout');
    }, SUBMIT_TIMEOUT_MS);

    try {
      await submitAndEvaluate(challengeId, githubUrl);

      setPhase('polling');

      const verdict = await pollForResult(
        challengeId,
        address,
        (attempt: number, max: number) => {
          if (abort.signal.aborted) return;
          setPollAttempt(attempt);
        }
      );

      if (abort.signal.aborted) return;
      clearTimeout(timeoutId);
      setResult(verdict);
      setPhase('done');

    } catch (err: any) {
      clearTimeout(timeoutId);
      if (abort.signal.aborted) return;

      const msg: string = err?.message ?? 'Unknown error';

      // Classify the failure so we can show the right recovery UI
      if (msg.toLowerCase().includes('consensus') || msg.toLowerCase().includes('validator')) {
        setPhase('error:consensus');
      } else if (msg.toLowerCase().includes('chain') || msg.toLowerCase().includes('write') || msg.toLowerCase().includes('tx')) {
        setPhase('error:chain');
      } else if (msg.toLowerCase().includes('wallet') || msg.toLowerCase().includes('rejected') || msg.toLowerCase().includes('user denied')) {
        setPhase('error:wallet');
        setErrorMsg('Wallet transaction was rejected. Approve the transaction in MetaMask to continue.');
      } else {
        setErrorMsg(msg);
        setPhase('error:generic');
      }
    }
  }, [githubUrl, challengeId, address]);

  const handleSubmit = () => {
    if (!githubUrl || !isConnected) return;
    retryCount.current = 0;
    runSubmit();
  };

  const handleRetry = () => {
    retryCount.current += 1;
    runSubmit();
  };

  const handleReset = () => {
    abortRef.current?.abort();
    setPhase('idle');
    setResult(null);
    setErrorMsg(null);
    retryCount.current = 0;
  };

  // ── Claim reward ────────────────────────────────────────────────────────────

  const handleClaimReward = async () => {
    // TODO: wire up claim_reward contract call via API
    alert('Claim reward coming soon!');
  };

  // ── Feedback helper ─────────────────────────────────────────────────────────

  const feedback = (() => {
    if (!result?.feedback) return null;
    if (typeof result.feedback === 'object') return result.feedback;
    try { return JSON.parse(result.feedback); } catch { return null; }
  })();

  const isLoading = phase === 'submitting' || phase === 'polling';

  // ── Error screens ───────────────────────────────────────────────────────────

  if (phase === 'error:timeout') {
    return (
      <PageShell>
        <EvalTimeoutFallback
          onRetry={handleRetry}
          onBack={handleReset}
          detail={`Timed out after ${SUBMIT_TIMEOUT_MS / 1000}s`}
        />
      </PageShell>
    );
  }

  if (phase === 'error:consensus') {
    return (
      <PageShell>
        <ConsensusFailureFallback onRetry={handleRetry} onBack={handleReset} />
      </PageShell>
    );
  }

  if (phase === 'error:chain') {
    return (
      <PageShell>
        <ChainWriteFailureFallback onRetry={handleRetry} onBack={handleReset} />
      </PageShell>
    );
  }

  // ── Main render ─────────────────────────────────────────────────────────────

  return (
    <PageShell>
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Submit Your Work</h1>
        <p className="text-gray-400 mt-1 text-sm">
          Your GitHub repo will be evaluated by AI and validated by on-chain consensus.
        </p>
      </div>

      {/* Form — hide while loading or done */}
      {(phase === 'idle' || phase === 'error:wallet' || phase === 'error:generic') && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Challenge ID</label>
            <input
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400"
              placeholder="e.g. challenge_web3_frontend_1"
              value={challengeId}
              onChange={e => setChallengeId(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">GitHub Repo URL</label>
            <input
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400"
              placeholder="https://github.com/you/your-project"
              value={githubUrl}
              onChange={e => setGithubUrl(e.target.value)}
            />
          </div>

          {/* Wallet */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Wallet</label>
            {isConnected ? (
              <div className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm flex items-center justify-between">
                <span className="font-mono text-zinc-200">{address}</span>
                <button onClick={() => disconnect()} className="text-xs text-zinc-500 hover:text-white ml-4">
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={() => connect({ connector: injected() })}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-400 hover:text-white hover:border-zinc-400 transition text-left"
              >
                Connect Wallet (MetaMask)
              </button>
            )}
          </div>

          {/* Wallet rejection or generic error strip */}
          {(phase === 'error:wallet' || phase === 'error:generic') && errorMsg && (
            <ApiErrorStrip message={errorMsg} onRetry={handleRetry} />
          )}

          <button
            onClick={handleSubmit}
            disabled={!githubUrl || !isConnected}
            className="w-full bg-white text-black font-semibold rounded-lg px-4 py-3 text-sm hover:bg-zinc-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Submit &amp; Evaluate
          </button>
        </div>
      )}

      {/* Submitting state */}
      {phase === 'submitting' && (
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg px-5 py-4 flex items-center gap-3">
          <Spinner />
          <div>
            <p className="text-sm font-medium">Submitting to blockchain…</p>
            <p className="text-xs text-zinc-400 mt-0.5">Broadcasting your transaction to GenLayer testnet.</p>
          </div>
        </div>
      )}

      {/* Polling state */}
      {phase === 'polling' && (
        <>
          <ConsensusPollingState
            attempt={pollAttempt}
            max={MAX_POLL_ATTEMPTS}
            label="Validators evaluating your submission"
          />
          <p className="text-xs text-zinc-500 text-center mt-2">
            3 validators are independently scoring your work on-chain.
          </p>
        </>
      )}

      {/* Result card */}
      {phase === 'done' && result && (
        <ResultCard
          result={result}
          feedback={feedback}
          address={address}
          onClaimReward={handleClaimReward}
          onReset={handleReset}
        />
      )}
    </PageShell>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-2xl mx-auto space-y-8">
        {children}
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin flex-shrink-0" />
  );
}

function ResultCard({
  result, feedback, address, onClaimReward, onReset,
}: {
  result: any;
  feedback: any;
  address?: string;
  onClaimReward: () => void;
  onReset: () => void;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden">
      {/* Score header */}
      <div className={`px-6 py-5 flex items-center justify-between ${result.passed ? 'bg-emerald-950 border-b border-emerald-800' : 'bg-red-950 border-b border-red-900'}`}>
        <div>
          <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Final Score</p>
          <p className="text-4xl font-bold">{result.score}<span className="text-xl text-zinc-400 font-normal"> / 100</span></p>
        </div>
        <div className={`text-sm font-semibold px-4 py-2 rounded-full ${result.passed ? 'bg-emerald-500 text-black' : 'bg-red-600 text-white'}`}>
          {result.passed ? '✅ Passed' : '❌ Did not pass'}
        </div>
      </div>

      <div className="px-6 py-5 space-y-5">
        {feedback && (
          <>
            <div>
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-2">Strengths</p>
              <p className="text-sm text-zinc-200 leading-relaxed">{feedback.strengths || '—'}</p>
            </div>
            <div className="border-t border-zinc-800 pt-5">
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-2">Areas to Improve</p>
              <p className="text-sm text-zinc-200 leading-relaxed">{feedback.improvements || '—'}</p>
            </div>
            <div className="border-t border-zinc-800 pt-5">
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-2">Category Breakdown</p>
              <p className="text-sm text-zinc-200 leading-relaxed">{feedback.category_breakdown || '—'}</p>
            </div>
          </>
        )}

        {/* On-chain info */}
        <div className="border-t border-zinc-800 pt-5 space-y-1">
          <p className="text-xs text-zinc-400 uppercase tracking-widest mb-2">On-chain Proof</p>
          <p className="text-xs text-zinc-400">
            Submitter: <span className="text-zinc-200 font-mono">{result.submitter ?? address}</span>
          </p>
          <p className="text-xs text-zinc-400">
            Reward claimed: <span className="text-zinc-200">{result.reward_claimed ? 'Yes' : 'No'}</span>
          </p>
        </div>

        {/* Claim reward */}
        {result.passed && !result.reward_claimed && (
          <div className="border-t border-zinc-800 pt-5">
            <p className="text-xs text-zinc-400 mb-3">
              You passed! Once the challenge is closed by the creator, you can claim your proportional reward.
            </p>
            <button
              onClick={onClaimReward}
              className="w-full bg-emerald-500 text-black font-semibold rounded-lg px-4 py-3 text-sm hover:bg-emerald-400 transition"
            >
              Claim Reward
            </button>
          </div>
        )}

        {result.reward_claimed && (
          <div className="border-t border-zinc-800 pt-5">
            <p className="text-sm text-emerald-400 font-medium">🏆 Reward already claimed</p>
          </div>
        )}

        <div className="border-t border-zinc-800 pt-5">
          <button
            onClick={onReset}
            className="w-full bg-zinc-800 text-zinc-300 font-semibold rounded-lg px-4 py-3 text-sm hover:bg-zinc-700 transition"
          >
            Submit another project
          </button>
        </div>
      </div>
    </div>
  );
}