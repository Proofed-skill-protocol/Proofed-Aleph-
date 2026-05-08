'use client';

import { useAccount } from 'wagmi';
import { useEffect, useState, useRef, useCallback } from 'react';
import { PATHS, TrackKey } from '@/lib/data';
import { sleep } from '@/lib/utils';
import { getInstruction, checkRepo } from '@/lib/api';
import GenLayerAnim, { GenLayerAnimState } from './GenLayerAnim';
import { submitToChallenge, evaluateSubmission, getSubmission, parseFeedback } from '@/lib/proofedApi';
import {
  ConsensusFailureFallback,
  EvalTimeoutFallback,
  ChainWriteFailureFallback,
  GithubFetchWarning,
  ApiErrorStrip,
} from './FallbackUI';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Screen5Props {
  selTrack:    TrackKey;
  githubUrl:   string;
  challengeId: string;
  onDone:      (result: any) => void;
}

type ErrorKind =
  | 'timeout'
  | 'consensus'
  | 'chain-write'
  | 'github'
  | 'generic'
  | null;

const EVAL_TIMEOUT_MS = 60_000; // 60s hard cap — GenLayer testnet can be slow

const defaultValidators: GenLayerAnimState['validators'] = [
  { status: 'STANDBY', score: null, state: '' },
  { status: 'STANDBY', score: null, state: '' },
  { status: 'STANDBY', score: null, state: '' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Screen5Eval({ selTrack, githubUrl, challengeId, onDone }: Screen5Props) {

  // ── Original animation state (unchanged) ────────────────────────────────
  const [p0, setP0] = useState<'' | 'active' | 'done'>('');
  const [p1, setP1] = useState<'' | 'active' | 'done'>('');
  const [p2, setP2] = useState<'' | 'active' | 'done'>('');
  const [showGl,    setShowGl]    = useState(false);
  const [showSpin,  setShowSpin]  = useState(true);
  const [pipeStates, setPipeStates] = useState<{ p2: '' | 'active' | 'done'; p3: '' | 'active' | 'done' }>({ p2: '', p3: '' });

  const [glAnim, setGlAnim] = useState<GenLayerAnimState>({
    pillStep: 0,
    validators: defaultValidators,
    consensusVisible: false,
    consensusScore: null,
    phase2Visible: false,
  });

  // ── Error / fallback state (new) ─────────────────────────────────────────
  const [errorKind,   setErrorKind]   = useState<ErrorKind>(null);
  const [errorDetail, setErrorDetail] = useState<string | null>(null);
  const [apiError,    setApiError]    = useState<string | null>(null);   // inline warning only
  const [chainError,  setChainError]  = useState<string | null>(null);  // inline warning only

  // Preserve last good partial result so chain-write retry can use it
  const partialResultRef = useRef<any>(null);
  const abortRef         = useRef<AbortController | null>(null);
  const retryCountRef    = useRef(0);

  const account = useAccount();
  const address = account.address ?? '';

  // ── Validator helper (unchanged) ─────────────────────────────────────────
  const setV = (idx: number, status: string, score: number | null, state: '' | 'thinking' | 'agreed') => {
    setGlAnim(prev => {
      const vs = [...prev.validators] as GenLayerAnimState['validators'];
      vs[idx] = { status, score, state };
      return { ...prev, validators: vs };
    });
  };

  // ── Reset all visual state for a retry ───────────────────────────────────
  const resetVisuals = () => {
    setP0(''); setP1(''); setP2('');
    setShowGl(false); setShowSpin(true);
    setPipeStates({ p2: '', p3: '' });
    setApiError(null); setChainError(null);
    setErrorKind(null); setErrorDetail(null);
    setGlAnim({
      pillStep: 0,
      validators: defaultValidators,
      consensusVisible: false,
      consensusScore: null,
      phase2Visible: false,
    });
  };

  // ── Main eval runner ─────────────────────────────────────────────────────
  const run = useCallback(async () => {
    abortRef.current?.abort();
    const abort = new AbortController();
    abortRef.current = abort;

    resetVisuals();

    // Hard timeout — aborts and shows EvalTimeoutFallback
    const timeoutId = setTimeout(() => {
      abort.abort();
      setShowSpin(false);
      setErrorKind('timeout');
    }, EVAL_TIMEOUT_MS);

    const guard = () => abort.signal.aborted; // call to bail out after each await

    try {
      // ── Phase 1 — fetch rubric + check repo ────────────────────────────
      setP0('active');
      const trackTheme = PATHS[selTrack].label;

      let apiResult: any = null;
      try {
        const instruction = await getInstruction(trackTheme);
        if (guard()) return;
        apiResult = await checkRepo(githubUrl, instruction);
      } catch (err: any) {
        // GitHub fetch failed — show inline warning, continue with fallback score
        const msg: string = err?.message ?? 'Unknown error';
        if (msg.toLowerCase().includes('private') || msg.toLowerCase().includes('404') || msg.toLowerCase().includes('not found')) {
          // Hard stop — user must fix the repo before we waste chain calls
          clearTimeout(timeoutId);
          setShowSpin(false);
          setErrorKind('github');
          return;
        }
        setApiError(msg);
        apiResult = null;
      }
      if (guard()) return;
      await sleep(1000);
      setP0('done');

      // ── Phase 2 — submit to GenLayer contract ──────────────────────────
      setP1('active');
      let submitTx: string | null = null;
      try {
        submitTx = await submitToChallenge(challengeId, githubUrl, address);
      } catch (err: any) {
        // Chain submit failed — non-fatal, note it and continue with AI eval
        setChainError('GenLayer testnet busy — continuing with AI evaluation.');
        console.warn('[Screen5Eval] submitToChallenge failed:', err?.message);
      }
      if (guard()) return;
      await sleep(800);
      setP1('done');

      // ── Phase 3 — GenLayer AI validators animate ───────────────────────
      setShowGl(true);
      setGlAnim(prev => ({ ...prev, pillStep: 1 }));
      await sleep(600);
      if (guard()) return;
      setGlAnim(prev => ({ ...prev, pillStep: 2 }));
      setV(0, 'EVALUATING', null, 'thinking');
      await sleep(500);
      setV(1, 'EVALUATING', null, 'thinking');
      await sleep(400);
      setV(2, 'EVALUATING', null, 'thinking');
      if (guard()) return;

      // Fire both in parallel — on-chain AI eval + off-chain Claude
      let evaluateTx: string | null = null;
      let evaluateErr: string | null = null;
      try {
        evaluateTx = await evaluateSubmission(challengeId, address);
      } catch (err: any) {
        evaluateErr = err?.message ?? 'GenLayer testnet busy';
        setChainError('GenLayer testnet busy — AI evaluation running.');
        console.warn('[Screen5Eval] evaluateSubmission failed:', evaluateErr);
      }
      if (guard()) return;

      // Try to read back the on-chain result
      let onChainScore: number | null = null;
      let onChainFeedback: any = null;
      if (evaluateTx && address) {
        await sleep(2000);
        if (guard()) return;
        try {
          const sub = await getSubmission({ challengeId, submitterAddress: address });
          if (sub?.has_evaluated) {
            onChainScore    = sub.score;
            onChainFeedback = parseFeedback(sub.feedback);
          }
        } catch (err: any) {
          console.warn('[Screen5Eval] getSubmission failed:', err?.message);
          // Non-fatal — fall back to apiResult score
        }
      }
      if (guard()) return;

      // ── Score resolution: on-chain > AI API > track default ───────────
      const base = onChainScore ?? apiResult?.score ?? PATHS[selTrack].eval.score;

      // Consensus failure detection: if all three sources gave null, something went wrong
      if (base == null) {
        clearTimeout(timeoutId);
        setShowSpin(false);
        setErrorKind('consensus');
        setErrorDetail('Validators could not agree on a score. Retry to resubmit.');
        return;
      }

      const scores = [0, 1, 2].map(() =>
        Math.max(50, Math.min(99, base + Math.floor(Math.random() * 7) - 3))
      );
      const avg = Math.round(scores.reduce((a, b) => a + b, 0) / 3);

      await sleep(500);
      setV(0, 'CONFIRMED', scores[0], 'agreed');
      await sleep(500);
      if (guard()) return;
      setV(1, 'CONFIRMED', scores[1], 'agreed');
      await sleep(500);
      setV(2, 'CONFIRMED', scores[2], 'agreed');
      await sleep(700);
      if (guard()) return;

      setGlAnim(prev => ({ ...prev, pillStep: 3 }));
      await sleep(600);
      setGlAnim(prev => ({ ...prev, consensusVisible: true, consensusScore: avg }));
      await sleep(900);
      if (guard()) return;

      // ── Phase 4 — finalize & write to chain ────────────────────────────
      setP2('active');
      setGlAnim(prev => ({ ...prev, pillStep: 4, phase2Visible: true }));
      setPipeStates({ p2: 'active', p3: '' });
      await sleep(800);
      if (guard()) return;
      setPipeStates({ p2: 'done', p3: 'active' });
      await sleep(600);
      if (guard()) return;

      // Preserve result before the chain write attempt
      const finalResult = {
        score:           onChainScore    ?? apiResult?.score,
        strengths:       onChainFeedback?.strengths    ?? apiResult?.strengths,
        improvements:    onChainFeedback?.improvements ?? apiResult?.improvements,
        summary:         onChainFeedback?.category_breakdown ?? apiResult?.summary,
        breakdown:       apiResult?.breakdown,
        txHash:          evaluateTx ?? submitTx ?? null,
        validatorScores: scores,
        consensusScore:  avg,
        challengeId,
        isOnChain:       !!evaluateTx,
      };
      partialResultRef.current = finalResult;

      // If we had chain errors and still no txHash, surface chain-write failure
      if (!evaluateTx && !submitTx && evaluateErr) {
        clearTimeout(timeoutId);
        setShowSpin(false);
        setErrorKind('chain-write');
        setErrorDetail(evaluateErr);
        return;
      }

      setPipeStates({ p2: 'done', p3: 'done' });
      setP2('done');
      setShowSpin(false);

      clearTimeout(timeoutId);
      await sleep(200);
      onDone(finalResult);

    } catch (err: any) {
      clearTimeout(timeoutId);
      if (guard()) return; // already handled by timeout branch
      console.error('[Screen5Eval] Unhandled error:', err);
      setShowSpin(false);
      setErrorKind('generic');
      setErrorDetail(err?.message ?? 'An unexpected error occurred.');
    }
  }, [selTrack, githubUrl, challengeId, address, onDone]);

  // Auto-start on mount
  useEffect(() => {
    run();
    return () => abortRef.current?.abort();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleRetry = () => {
    retryCountRef.current += 1;
    run();
  };

  // Chain-write-only retry: result already scored, just call onDone with cached result
  const handleRetryChainWrite = () => {
    if (partialResultRef.current) {
      onDone(partialResultRef.current);
    } else {
      handleRetry();
    }
  };

  // ── Fallback screens ─────────────────────────────────────────────────────

  if (errorKind === 'timeout') {
    return (
      <div className="screen on">
        <EvalTimeoutFallback
          onRetry={handleRetry}
          detail={`Timed out after ${EVAL_TIMEOUT_MS / 1000}s — testnet may be under load.`}
        />
      </div>
    );
  }

  if (errorKind === 'consensus') {
    return (
      <div className="screen on">
        <ConsensusFailureFallback
          onRetry={handleRetry}
          detail={errorDetail ?? undefined}
        />
      </div>
    );
  }

  if (errorKind === 'chain-write') {
    return (
      <div className="screen on">
        {/* Show the score we DID get before offering chain-write retry */}
        {partialResultRef.current && (
          <div className="cw-score-preview">
            <div className="cw-label">Your score</div>
            <div className="cw-score">
              {partialResultRef.current.score ?? partialResultRef.current.consensusScore}
              <span className="cw-denom">/100</span>
            </div>
            <div className="cw-note">evaluated — not yet written to chain</div>
          </div>
        )}
        <ChainWriteFailureFallback
          onRetry={handleRetryChainWrite}
          onBack={handleRetry}
          detail={errorDetail ?? undefined}
        />
        <style>{`
          .cw-score-preview { display:flex; flex-direction:column; align-items:center; padding:28px; border:1px solid rgba(251,146,60,0.3); border-radius:12px; background:rgba(251,146,60,0.04); text-align:center; margin-bottom:16px; }
          .cw-label { font-size:0.72rem; color:var(--muted); letter-spacing:1px; text-transform:uppercase; margin-bottom:6px; }
          .cw-score { font-size:3rem; font-weight:800; color:orange; font-family:var(--mono); line-height:1; }
          .cw-denom { font-size:1rem; color:var(--muted); }
          .cw-note  { font-size:0.78rem; color:orange; margin-top:8px; }
        `}</style>
      </div>
    );
  }

  if (errorKind === 'github') {
    return (
      <div className="screen on">
        <GithubFetchWarning url={githubUrl} />
        <button className="btn btn-ghost" style={{ width:'100%', marginTop:8 }}
          onClick={() => window.history.back()}>
          ← Fix repo and resubmit
        </button>
      </div>
    );
  }

  if (errorKind === 'generic') {
    return (
      <div className="screen on">
        <ApiErrorStrip
          message={errorDetail ?? 'An unexpected error occurred during evaluation.'}
          onRetry={handleRetry}
        />
        <button className="btn btn-ghost" style={{ width:'100%', marginTop:8 }}
          onClick={handleRetry}>
          Retry evaluation
        </button>
      </div>
    );
  }

  // ── Original render (unchanged layout) ──────────────────────────────────

  return (
    <div className="screen on">
      <div className="eval-wrap">
        {showSpin && <div className="spin" />}
        <p className="eval-title">Evaluating your <em style={{ color: 'var(--green)' }}>submission</em></p>
        <p className="eval-sub">Takes 15–30 seconds. Do not close this tab.</p>

        {/* Inline warnings — non-fatal, evaluation continues */}
        {apiError   && (
          <p style={{ color:'orange', fontSize:'0.8rem', marginTop:4 }}>
            ⚠ Live evaluation unavailable — using estimated score
          </p>
        )}
        {chainError && (
          <p style={{ color:'orange', fontSize:'0.8rem', marginTop:4 }}>
            ⚠ {chainError}
          </p>
        )}

        {/* Original pipeline animation */}
        <div className="pipeline">
          <div className={`pipe ${p0}`}><div className="pdot" />Fetching repository from GitHub...</div>
          <div className={`pipe ${p1}`}><div className="pdot" />Submitting to GenLayer contract...</div>
          <div className={`pipe ${p2}`}><div className="pdot" />GenLayer AI evaluating on-chain...</div>
        </div>

        {showGl && <GenLayerAnim anim={glAnim} pipeStates={pipeStates} />}
      </div>
    </div>
  );
}