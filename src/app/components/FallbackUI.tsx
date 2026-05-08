'use client';

import React from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FallbackProps {
  onRetry?: () => void;
  onBack?: () => void;
  detail?: string;
}

// ─── Shared inner styles (injected once per render) ───────────────────────────

const S = `
  .fb-wrap {
    display: flex; flex-direction: column; align-items: center;
    justify-content: center; padding: 48px 24px; text-align: center;
    border: 1px solid var(--border); border-radius: 12px;
    background: rgba(255,255,255,0.02); margin: 24px 0;
  }
  .fb-icon { font-size: 2rem; margin-bottom: 16px; }
  .fb-title { font-size: 1rem; font-weight: 700; color: var(--text); margin: 0 0 8px; }
  .fb-lead { font-size: 0.85rem; color: var(--muted); line-height: 1.7; max-width: 340px; margin: 0 0 8px; }
  .fb-detail { font-size: 0.75rem; color: var(--muted); font-family: var(--mono); margin: 0 0 24px; opacity: 0.6; }
  .fb-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .fb-warn { color: orange; }
  .fb-err  { color: #f87171; }
  .fb-info { color: var(--green); }

  /* inline warning strip */
  .fb-strip {
    display: flex; align-items: flex-start; gap: 12px;
    border: 1px solid rgba(251,146,60,0.3); border-radius: 10px;
    background: rgba(251,146,60,0.05); padding: 14px 16px;
    margin: 16px 0; text-align: left;
  }
  .fb-strip-ico { font-size: 1rem; color: orange; margin-top: 1px; min-width: 18px; }
  .fb-strip-title { font-size: 0.85rem; font-weight: 600; color: var(--text); margin-bottom: 3px; }
  .fb-strip-body  { font-size: 0.82rem; color: var(--muted); line-height: 1.6; }

  /* spinner */
  .fb-spinner {
    width: 32px; height: 32px;
    border: 2px solid var(--border);
    border-top-color: var(--green);
    border-radius: 50%;
    animation: fb-spin 0.8s linear infinite;
    margin-bottom: 16px;
  }
  @keyframes fb-spin { to { transform: rotate(360deg); } }
`;

// ─── 1. Consensus round failure ───────────────────────────────────────────────

export function ConsensusFailureFallback({ onRetry, onBack, detail }: FallbackProps) {
  return (
    <div className="fb-wrap">
      <div className="fb-icon fb-warn">⬡</div>
      <p className="fb-title">Consensus round failed</p>
      <p className="fb-lead">
        The GenLayer validators could not reach agreement on your submission.
        This happens occasionally on testnet — your work was not lost.
      </p>
      {detail && <p className="fb-detail">{detail}</p>}
      <div className="fb-actions">
        {onRetry && <button className="btn btn-main" onClick={onRetry}>Retry evaluation →</button>}
        {onBack  && <button className="btn btn-ghost" onClick={onBack}>← Back</button>}
      </div>
      <style>{S}</style>
    </div>
  );
}

// ─── 2. AI evaluation timeout ─────────────────────────────────────────────────

export function EvalTimeoutFallback({ onRetry, onBack, detail }: FallbackProps) {
  return (
    <div className="fb-wrap">
      <div className="fb-icon fb-warn">⏱</div>
      <p className="fb-title">Evaluation timed out</p>
      <p className="fb-lead">
        The AI validators took too long to respond. The testnet may be under load.
        Your submission is safe — try again in a moment.
      </p>
      {detail && <p className="fb-detail">{detail}</p>}
      <div className="fb-actions">
        {onRetry && <button className="btn btn-main" onClick={onRetry}>Retry →</button>}
        {onBack  && <button className="btn btn-ghost" onClick={onBack}>← Back</button>}
      </div>
      <style>{S}</style>
    </div>
  );
}

// ─── 3. Chain write failure ───────────────────────────────────────────────────

export function ChainWriteFailureFallback({ onRetry, onBack, detail }: FallbackProps) {
  return (
    <div className="fb-wrap">
      <div className="fb-icon fb-err">⛓</div>
      <p className="fb-title">On-chain write failed</p>
      <p className="fb-lead">
        Your result was evaluated but could not be written to the chain.
        This is a testnet issue — retry to attempt the write again.
        Your score has been saved locally.
      </p>
      {detail && <p className="fb-detail">{detail}</p>}
      <div className="fb-actions">
        {onRetry && <button className="btn btn-main" onClick={onRetry}>Retry chain write →</button>}
        {onBack  && <button className="btn btn-ghost" onClick={onBack}>← Back</button>}
      </div>
      <style>{S}</style>
    </div>
  );
}

// ─── 4. GitHub fetch failure (inline strip) ───────────────────────────────────

export function GithubFetchWarning({ url }: { url?: string }) {
  return (
    <div className="fb-strip">
      <div className="fb-strip-ico">⚠</div>
      <div>
        <div className="fb-strip-title">Could not read repository</div>
        <div className="fb-strip-body">
          {url
            ? <>The repo at <code style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem' }}>{url}</code> is private or does not exist. Make it public and resubmit.</>
            : <>Make sure your GitHub URL is correct and the repository is public.</>
          }
        </div>
      </div>
      <style>{S}</style>
    </div>
  );
}

// ─── 5. Verification not found ────────────────────────────────────────────────

export function VerifyNotFoundFallback({ verifyId }: { verifyId?: string }) {
  return (
    <div className="fb-wrap">
      <div className="fb-icon fb-warn">◈</div>
      <p className="fb-title">Proof not found on-chain</p>
      <p className="fb-lead">
        No verified proof exists for this ID. The candidate may not have completed
        evaluation yet, or the link may be incorrect.
      </p>
      {verifyId && <p className="fb-detail">ID: {verifyId.slice(0, 16)}…</p>}
      <div className="fb-actions">
        <button className="btn btn-ghost" onClick={() => window.location.reload()}>Try another link</button>
      </div>
      <style>{S}</style>
    </div>
  );
}

// ─── 6. RPC / network failure (verify page) ──────────────────────────────────

export function RpcFailureFallback({ onRetry }: { onRetry?: () => void }) {
  return (
    <div className="fb-wrap">
      <div className="fb-icon fb-err">⚡</div>
      <p className="fb-title">Chain RPC unreachable</p>
      <p className="fb-lead">
        Could not connect to the GenLayer testnet RPC. This may be a temporary outage.
        The proof may still exist — try again shortly.
      </p>
      <div className="fb-actions">
        {onRetry && <button className="btn btn-main" onClick={onRetry}>Retry →</button>}
      </div>
      <style>{S}</style>
    </div>
  );
}

// ─── 7. Generic API error strip ──────────────────────────────────────────────

export function ApiErrorStrip({
  message,
  onRetry,
}: {
  message: string;
  onRetry?: () => void;
}) {
  return (
    <div className="fb-strip">
      <div className="fb-strip-ico">⚠</div>
      <div style={{ flex: 1 }}>
        <div className="fb-strip-title">Request failed</div>
        <div className="fb-strip-body">{message}</div>
      </div>
      {onRetry && (
        <button
          className="btn btn-ghost"
          style={{ fontSize: '0.78rem', padding: '6px 14px', whiteSpace: 'nowrap', marginTop: 2 }}
          onClick={onRetry}
        >
          Retry
        </button>
      )}
      <style>{S}</style>
    </div>
  );
}

// ─── 8. Polling / loading state ───────────────────────────────────────────────

export function ConsensusPollingState({
  attempt,
  max,
  label,
}: {
  attempt: number;
  max: number;
  label?: string;
}) {
  const pct = Math.round((attempt / max) * 100);
  return (
    <div style={{ padding: '40px 0', textAlign: 'center' }}>
      <div className="fb-spinner" style={{ margin: '0 auto 16px' }} />
      <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', margin: '0 0 6px' }}>
        {label ?? 'Consensus in progress'}
      </p>
      <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: '0 0 20px' }}>
        Attempt {attempt} of {max} — validators evaluating independently
      </p>
      <div style={{
        height: 3, background: 'var(--border)', borderRadius: 99,
        maxWidth: 280, margin: '0 auto', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', width: `${pct}%`,
          background: 'var(--green)', borderRadius: 99,
          transition: 'width 0.4s ease',
        }} />
      </div>
      <style>{S}</style>
    </div>
  );
}