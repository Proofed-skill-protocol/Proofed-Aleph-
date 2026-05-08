'use client';

import { useState, useCallback } from 'react';
import { useAppState } from '@/lib/useAppState';
import { TrackKey } from '@/lib/data';

import Topbar             from './components/Topbar';
import StepBar            from './components/StepBar';
import Toast              from './components/Toast';
import Screen1Category    from './components/Screen1Category';
import Screen2Track       from './components/Screen2Track';
import Screen3Path        from './components/Screen3Path';
import Screen4Submit      from './components/Screen4Submit';
import Screen5Eval        from './components/Screen5Eval';
import Screen6Results     from './components/Screen6Results';
import ScreenBuilderMode  from './components/ScreenBuilderMode';
import ScreenLearnAssess  from './components/ScreenLearnAssess';
import ScreenAdaptivePath from './components/ScreenAdaptivePath';
import CompanyPreview     from './components/CompanyPreview';
import ScreenCourse       from './components/ScreenCourse';
import ScreenProveIntro   from './components/ScreenProveIntro';
import ErrorBoundary      from './components/ErrorBoundary';
import {
  RpcFailureFallback,
  VerifyNotFoundFallback,
  ApiErrorStrip,
} from './components/FallbackUI';
import type { Challenge } from '@/lib/proofedApi';

// ─── Types ────────────────────────────────────────────────────────────────────

type AppMode     = 'hero' | 'builder' | 'company';
type BuilderStep =
  | 'category' | 'mode' | 'assess' | 'adaptive'
  | 'course'   | 'proveintro'      | 'flow';

interface VerifyResult {
  found:       boolean;
  score?:      number;
  track?:      string;
  github?:     string;
  summary?:    string;
  passed?:     boolean;
  txHash?:     string;
  date?:       string;
  validators?: number[];
}

// Single state machine for the verify flow — replaces three separate useState calls.
// This makes every branch explicit so the UI never shows a stale previous state.
type VerifyState =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'found';       result: VerifyResult }
  | { kind: 'not-found';   txHash: string }
  | { kind: 'rpc-error';   message: string }
  | { kind: 'input-error'; message: string };

const COMING_SOON: Record<string, { title: string; items: string[] }> = {
  marketing: {
    title: 'Marketing',
    items: ['Campaign analysis', 'Creative tasks', 'Performance evaluation'],
  },
  design: {
    title: 'Design',
    items: [
      'Web3 UI/UX challenges',
      'dApp and on-chain product design tasks',
      'Evaluation of usability, clarity, and user flows',
    ],
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function Home() {
  const {
    state, goTo, pickCat, pickTrack, markStepDone,
    selectPool, setGithubUrl,
    restart, isFormValid, allStepsDone,
  } = useAppState();

  const [toastMsg,          setToastMsg]          = useState<string | null>(null);
  const [evalResult,        setEvalResult]        = useState<any>(null);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

  const [appMode,     setAppMode]     = useState<AppMode>('hero');
  const [builderStep, setBuilderStep] = useState<BuilderStep>('category');
  const [selCategory, setSelCategory] = useState<string>('');
  const [userLevel,   setUserLevel]   = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [comingSoon,  setComingSoon]  = useState<string | null>(null);

  const [verifyInput, setVerifyInput] = useState('');
  const [verifyState, setVerifyState] = useState<VerifyState>({ kind: 'idle' });

  const showToast  = useCallback((msg: string) => setToastMsg(msg), []);
  const clearToast = useCallback(() => setToastMsg(null), []);

  const fullReset = useCallback(() => {
    setEvalResult(null);
    setSelectedChallenge(null);
    setAppMode('hero');
    setBuilderStep('category');
    setSelCategory('');
    setComingSoon(null);
    restart();
  }, [restart]);

  const resetVerify = () => {
    setVerifyState({ kind: 'idle' });
    setVerifyInput('');
  };

  // ── Verify handler ────────────────────────────────────────────────────────

  const handleVerify = async () => {
    const raw      = verifyInput.trim();
    if (!raw) return;

    const parts    = raw.split('/');
    const verifyId = parts[parts.length - 1];

    if (!verifyId || verifyId.length < 6) {
      setVerifyState({ kind: 'input-error', message: 'Invalid proof link — paste the full URL.' });
      return;
    }

    setVerifyState({ kind: 'loading' });

    try {
      const res = await fetch('/api/verify', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ verifyId }),
      });

      // 503 = RPC/chain is down — explicitly different from "proof not found"
      if (res.status === 503) {
        const body = await res.json().catch(() => ({}));
        setVerifyState({
          kind:    'rpc-error',
          message: body?.error ?? 'Chain RPC unavailable — try again shortly.',
        });
        return;
      }

      // Other server errors (400, 500)
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setVerifyState({
          kind:    'rpc-error',
          message: body?.error ?? `Request failed (HTTP ${res.status}).`,
        });
        return;
      }

      const data: VerifyResult = await res.json();
      if (!data.found) {
        setVerifyState({ kind: 'not-found', txHash: verifyId });
      } else {
        setVerifyState({ kind: 'found', result: data });
      }
    } catch {
      setVerifyState({
        kind:    'rpc-error',
        message: 'Could not reach verification service — check your connection.',
      });
    }
  };

  // ── Coming soon overlay ───────────────────────────────────────────────────

  if (appMode === 'builder' && comingSoon && COMING_SOON[comingSoon]) {
    const cs = COMING_SOON[comingSoon];
    return (
      <>
        <div className="shell">
          <Topbar />
          <div className="screen on">
            <button className="btn btn-ghost" style={{ marginBottom: 28 }}
              onClick={() => setComingSoon(null)}>← Back</button>
            <p className="ey">coming soon</p>
            <h1><em>{cs.title}</em></h1>
            <p className="lead">This category is under construction. Here&apos;s what&apos;s coming:</p>
            <div className="cs-list">
              {cs.items.map((item, i) => (
                <div key={i} className="cs-item">
                  <span style={{ color: 'var(--green)', fontFamily: 'var(--mono)', fontSize: '0.85rem', minWidth: 16 }}>→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="istrip" style={{ marginTop: 32 }}>
              Want to be notified when {cs.title} launches? Join our community on Discord or follow us on X.
            </div>
            <button className="btn btn-ghost" style={{ width: '100%', marginTop: 16 }}
              onClick={() => setComingSoon(null)}>← Back to categories</button>
          </div>
        </div>
        <Toast message={toastMsg} onDone={clearToast} />
        <style>{`
          .cs-list { display: flex; flex-direction: column; gap: 0; margin-top: 8px; }
          .cs-item { display: flex; align-items: baseline; gap: 14px; padding: 16px 0; border-bottom: 1px solid var(--border); font-size: 0.95rem; color: var(--text); line-height: 1.5; }
          .cs-item:first-child { border-top: 1px solid var(--border); }
        `}</style>
      </>
    );
  }

  // ── Hero ──────────────────────────────────────────────────────────────────

  if (appMode === 'hero') {
    return (
      <>
        <div className="shell">
          <Topbar />
          <div className="hero-wrap">
            <div className="hero-eyebrow">⬡ PROOFED PROTOCOL · BRADBURY TESTNET</div>
            <h1 className="hero-title">Prove what you<br />can <em className="hero-em">build.</em></h1>
            <p className="hero-not">Not what you&apos;ve learned.</p>
            <p className="hero-desc">Complete real tasks, get evaluated by AI, and generate verifiable proof of skill — stored on-chain forever.</p>
            <div className="entry-grid">
              <div className="entry-card entry-builder"
                onClick={() => { setAppMode('builder'); setBuilderStep('category'); }}>
                <div className="entry-icon">⚡</div>
                <div className="entry-label">For Builders</div>
                <div className="entry-desc">Start proving your skills. Complete challenges, get scored by AI validators, earn a verifiable badge.</div>
                <div className="entry-cta entry-cta-green">Start proving →</div>
              </div>
              <div className="entry-card entry-company" onClick={() => setAppMode('company')}>
                <div className="entry-icon">◈</div>
                <div className="entry-label">For Companies</div>
                <div className="entry-desc">Evaluate candidates through real work — not interviews. Verify any Proof badge instantly.</div>
                <div className="entry-cta entry-cta-purple">Verify a candidate →</div>
              </div>
            </div>
            <div className="hero-stats">
              <div className="hstat"><span className="hstat-num">3</span><span className="hstat-label">AI Validators</span></div>
              <div className="hstat-div" />
              <div className="hstat"><span className="hstat-num">On-chain</span><span className="hstat-label">Proof Storage</span></div>
              <div className="hstat-div" />
              <div className="hstat"><span className="hstat-num">0%</span><span className="hstat-label">Bias</span></div>
            </div>
          </div>
        </div>
        <Toast message={toastMsg} onDone={clearToast} />
        <style>{sharedStyles}</style>
      </>
    );
  }

  // ── Company ───────────────────────────────────────────────────────────────

  if (appMode === 'company') {
    return (
      <>
        <div className="shell">
          <Topbar />
          <div className="company-wrap">
            <button className="btn btn-ghost" style={{ marginBottom: 24 }}
              onClick={() => { setAppMode('hero'); resetVerify(); }}>
              ← Back
            </button>
            <p className="ey">for companies</p>
            <h1>Verify a candidate&apos;s <em>proof</em></h1>
            <p className="lead">Paste a candidate&apos;s Proof link. We&apos;ll show their verified score, the GitHub repo they submitted, and the on-chain consensus that confirmed it.</p>

            {/* Input always visible unless we already have a result */}
            {verifyState.kind !== 'found' && (
              <>
                <div className="field">
                  <label className="fl">Proof verification link</label>
                  <input
                    className="inp"
                    type="text"
                    placeholder="https://verify.proofed.xyz/abc123ef"
                    value={verifyInput}
                    onChange={e => {
                      setVerifyInput(e.target.value);
                      // Clear error state when user edits the input
                      if (verifyState.kind === 'input-error') setVerifyState({ kind: 'idle' });
                    }}
                    onKeyDown={e => e.key === 'Enter' && handleVerify()}
                  />
                </div>

                {verifyState.kind === 'input-error' && (
                  <ApiErrorStrip message={verifyState.message} />
                )}

                <button
                  className="btn btn-main"
                  style={{ width: '100%', marginBottom: 24 }}
                  disabled={!verifyInput.trim() || verifyState.kind === 'loading'}
                  onClick={handleVerify}
                >
                  {verifyState.kind === 'loading' ? 'Verifying on-chain…' : 'Verify Proof →'}
                </button>
              </>
            )}

            {/* RPC / network failure — NOT the same as "not found" */}
            {verifyState.kind === 'rpc-error' && (
              <RpcFailureFallback onRetry={handleVerify} />
            )}

            {/* Proof genuinely does not exist on this chain */}
            {verifyState.kind === 'not-found' && (
              <>
                <VerifyNotFoundFallback verifyId={verifyState.txHash} />
                <button className="btn btn-ghost" style={{ width: '100%', marginTop: 8 }}
                  onClick={resetVerify}>
                  ← Try a different link
                </button>
              </>
            )}

            {/* Proof found and verified */}
            {verifyState.kind === 'found' && (
              <>
                <VerifyResultCard result={verifyState.result} />
                <button className="btn btn-ghost" style={{ width: '100%', marginTop: 16 }}
                  onClick={resetVerify}>
                  ← Verify another candidate
                </button>
              </>
            )}

            {verifyState.kind === 'idle' && <CompanyPreview />}
          </div>
        </div>
        <Toast message={toastMsg} onDone={clearToast} />
        <style>{sharedStyles}</style>
      </>
    );
  }

  // ── Builder: Category ─────────────────────────────────────────────────────

  if (appMode === 'builder' && builderStep === 'category') {
    return (
      <>
        <div className="shell">
          <Topbar />
          <ErrorBoundary context="Screen1Category" onReset={() => setBuilderStep('category')}>
            <Screen1Category
              selCat={state.selCat}
              onPickCat={(cat) => {
                if (COMING_SOON[cat]) { setComingSoon(cat); return; }
                setSelCategory(cat);
                pickCat(cat);
                setBuilderStep('mode');
              }}
              onPickChallenge={(c) => {
                setSelectedChallenge(c);
                if (c) { setSelCategory('tech'); pickCat('tech'); setBuilderStep('mode'); }
              }}
              onNext={() => setBuilderStep('mode')}
              onBack={() => setAppMode('hero')}
            />
          </ErrorBoundary>
        </div>
        <Toast message={toastMsg} onDone={clearToast} />
        <style>{sharedStyles}</style>
      </>
    );
  }

  // ── Builder: Learn vs Prove ───────────────────────────────────────────────

  if (appMode === 'builder' && builderStep === 'mode') {
    return (
      <>
        <div className="shell">
          <Topbar />
          <ErrorBoundary context="ScreenBuilderMode" onReset={() => setBuilderStep('mode')}>
            <ScreenBuilderMode
              category={selCategory || 'Tech'}
              onLearn={() => setBuilderStep('assess')}
              onProve={() => setBuilderStep('proveintro')}
              onBack={() => setBuilderStep('category')}
            />
          </ErrorBoundary>
        </div>
        <Toast message={toastMsg} onDone={clearToast} />
        <style>{sharedStyles}</style>
      </>
    );
  }

  // ── Builder: Skill Assessment ─────────────────────────────────────────────

  if (appMode === 'builder' && builderStep === 'assess') {
    return (
      <>
        <div className="shell">
          <Topbar />
          <ErrorBoundary context="ScreenLearnAssess" onReset={() => setBuilderStep('assess')}>
            <ScreenLearnAssess
              category={selCategory || 'Tech'}
              onResult={(level: 'beginner' | 'intermediate' | 'advanced', url?: string) => {
                setUserLevel(level);
                if (url) setGithubUrl(url);
                pickTrack('smartcontracts', 5);
                setBuilderStep('adaptive');
              }}
              onBack={() => setBuilderStep('mode')}
            />
          </ErrorBoundary>
        </div>
        <Toast message={toastMsg} onDone={clearToast} />
        <style>{sharedStyles}</style>
      </>
    );
  }

  // ── Builder: Adaptive Path ────────────────────────────────────────────────

  if (appMode === 'builder' && builderStep === 'adaptive') {
    return (
      <>
        <div className="shell">
          <Topbar />
          <ErrorBoundary context="ScreenAdaptivePath" onReset={() => setBuilderStep('adaptive')}>
            <ScreenAdaptivePath
              category={selCategory || 'Tech'}
              level={userLevel}
              onStart={() => setBuilderStep('course')}
              onProve={() => setBuilderStep('course')}
              onBack={() => setBuilderStep('assess')}
            />
          </ErrorBoundary>
        </div>
        <Toast message={toastMsg} onDone={clearToast} />
        <style>{sharedStyles}</style>
      </>
    );
  }

  // ── Builder: Course ───────────────────────────────────────────────────────

  if (appMode === 'builder' && builderStep === 'course') {
    return (
      <>
        <div className="shell">
          <Topbar />
          <ErrorBoundary context="ScreenCourse" onReset={() => setBuilderStep('course')}>
            <ScreenCourse
              category={selCategory || 'Tech'}
              level={userLevel}
              onSubmit={() => {
                pickTrack('smartcontracts', 5);
                setBuilderStep('flow');
                goTo(4);
              }}
              onBack={() => setBuilderStep('adaptive')}
            />
          </ErrorBoundary>
        </div>
        <Toast message={toastMsg} onDone={clearToast} />
        <style>{sharedStyles}</style>
      </>
    );
  }

  // ── Builder: Prove Intro ──────────────────────────────────────────────────

  if (appMode === 'builder' && builderStep === 'proveintro') {
    return (
      <>
        <div className="shell">
          <Topbar />
          <ErrorBoundary context="ScreenProveIntro" onReset={() => setBuilderStep('proveintro')}>
            <ScreenProveIntro
              category={selCategory || 'Tech'}
              onNext={() => {
                pickTrack('smartcontracts', 5);
                setBuilderStep('flow');
                goTo(4);
              }}
              onBack={() => setBuilderStep('mode')}
            />
          </ErrorBoundary>
        </div>
        <Toast message={toastMsg} onDone={clearToast} />
        <style>{sharedStyles}</style>
      </>
    );
  }

  // ── Builder: Main flow (Submit → Eval → Results) ─────────────────────────

  return (
    <>
      <div className="shell">
        <Topbar />
        <StepBar current={state.step} />

        {state.step === 2 && (
          <ErrorBoundary context="Screen2Track" onReset={() => goTo(2)}>
            <Screen2Track
              selTrack={state.selTrack}
              onPickTrack={(track: TrackKey, total: number) => pickTrack(track, total)}
              onNext={() => goTo(3)}
              onBack={() => setBuilderStep('mode')}
            />
          </ErrorBoundary>
        )}

        {state.step === 3 && state.selTrack && (
          <ErrorBoundary context="Screen3Path" onReset={() => goTo(3)}>
            <Screen3Path
              selTrack={state.selTrack}
              doneSteps={state.doneSteps}
              allStepsDone={allStepsDone}
              onMarkDone={markStepDone}
              onNext={() => goTo(4)}
              onBack={() => goTo(2)}
            />
          </ErrorBoundary>
        )}

        {state.step === 4 && (
          <ErrorBoundary context="Screen4Submit" onReset={() => goTo(4)}>
            <Screen4Submit
              poolEntry={state.poolEntry}
              githubUrl={state.githubUrl}
              isFormValid={isFormValid}
              onSelectPool={selectPool}
              onGithubChange={setGithubUrl}
              onSubmit={() => goTo(5)}
              onBack={() =>
                builderStep === 'adaptive' ? setBuilderStep('adaptive') : goTo(3)
              }
            />
          </ErrorBoundary>
        )}

        {state.step === 5 && state.selTrack && (
          // Screen5Eval handles its own eval errors internally (timeout, consensus,
          // chain write). This boundary catches unexpected render/JS crashes only.
          <ErrorBoundary
            context="Screen5Eval"
            onReset={() => goTo(5)}
            fallback={
              <div style={{ padding: '48px 0', textAlign: 'center' }}>
                <p style={{ color: 'orange', fontSize: '1rem', fontWeight: 700, marginBottom: 12 }}>
                  ⚠ Evaluation crashed unexpectedly
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: 24 }}>
                  An internal error occurred during evaluation. Your submission was not lost.
                </p>
                <button className="btn btn-ghost" onClick={() => goTo(4)}>
                  ← Back to submit
                </button>
              </div>
            }
          >
            <Screen5Eval
              selTrack={state.selTrack}
              githubUrl={state.githubUrl}
              challengeId={selectedChallenge?.id ?? 'default'}
              onDone={(result) => {
                setEvalResult(result);
                goTo(6);
                showToast('✓ Proof-of-Skill verified on GenLayer');
              }}
            />
          </ErrorBoundary>
        )}

        {state.step === 6 && state.selTrack && (
          <ErrorBoundary context="Screen6Results" onReset={fullReset}>
            <Screen6Results
              selTrack={state.selTrack}
              poolEntry={state.poolEntry}
              evalResult={evalResult}
              onRestart={fullReset}
              onToast={showToast}
            />
          </ErrorBoundary>
        )}
      </div>
      <Toast message={toastMsg} onDone={clearToast} />
      <style>{sharedStyles}</style>
    </>
  );
}

// ─── VerifyResultCard ─────────────────────────────────────────────────────────

function VerifyResultCard({ result }: { result: VerifyResult }) {
  return (
    <div className="verify-result-card">
      <div className="vr-header">
        <span className="chip chip-green">✓ VERIFIED ON-CHAIN</span>
        <div className="vr-score-big">
          {result.score}
          <span style={{ fontSize: '1rem', color: 'var(--muted)' }}>/100</span>
        </div>
      </div>
      <div className="vr-rows">
        {result.track && (
          <div className="vr-row">
            <span className="vr-key">TRACK</span>
            <span className="vr-val">{result.track}</span>
          </div>
        )}
        {result.passed !== undefined && (
          <div className="vr-row">
            <span className="vr-key">STATUS</span>
            <span className="vr-val" style={{ color: result.passed ? 'var(--green)' : 'orange' }}>
              {result.passed ? '✓ PASSED' : '✗ DID NOT PASS'}
            </span>
          </div>
        )}
        {result.github && (
          <div className="vr-row">
            <span className="vr-key">REPO</span>
            <a href={result.github} target="_blank" rel="noreferrer"
              style={{ color: 'var(--green)', textDecoration: 'none' }}>
              {result.github}
            </a>
          </div>
        )}
        {result.date && (
          <div className="vr-row">
            <span className="vr-key">DATE</span>
            <span className="vr-val">{result.date}</span>
          </div>
        )}
        {result.txHash && (
          <div className="vr-row">
            <span className="vr-key">TX</span>
            <span className="vr-val" style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem' }}>
              {result.txHash.slice(0, 14)}…{result.txHash.slice(-8)}
            </span>
          </div>
        )}
      </div>
      {result.summary && (
        <div className="vr-summary">&quot;{result.summary}&quot;</div>
      )}
      {result.validators && (
        <div style={{ paddingTop: 12, borderTop: '1px solid var(--border)' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: 8, letterSpacing: 1 }}>
            ⬡ GENLAYER VALIDATORS
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {result.validators.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(0,229,160,0.06)',
                border: '1px solid rgba(0,229,160,0.2)',
                borderRadius: 8, padding: '10px 16px', textAlign: 'center',
              }}>
                <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>V-0{i + 1}</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--green)', fontFamily: 'var(--mono)' }}>{s}</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--green)' }}>✓</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Shared styles ────────────────────────────────────────────────────────────

const sharedStyles = `
.hero-wrap { padding: 48px 0 64px; }
.hero-eyebrow { font-size: 11px; letter-spacing: 2px; color: var(--green); margin-bottom: 28px; font-family: var(--mono); }
.hero-title { font-size: clamp(3rem, 9vw, 5.5rem); font-weight: 800; line-height: 1.0; margin: 0 0 4px; letter-spacing: -2px; }
.hero-em { color: var(--green); font-style: normal; }
.hero-not { font-size: clamp(1.4rem, 4vw, 2.2rem); font-weight: 700; color: var(--muted); margin: 0 0 20px; letter-spacing: -1px; }
.hero-desc { font-size: 1rem; color: var(--muted); line-height: 1.7; max-width: 500px; margin: 0 0 40px; }
.entry-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 40px; }
@media (max-width: 540px) { .entry-grid { grid-template-columns: 1fr; } }
.entry-card { border: 1px solid var(--border); border-radius: 12px; padding: 28px 22px; cursor: pointer; transition: border-color 0.2s, transform 0.15s, background 0.2s; background: var(--surface, rgba(255,255,255,0.03)); }
.entry-card:hover { transform: translateY(-3px); }
.entry-builder:hover { border-color: var(--green); background: rgba(0,229,160,0.04); }
.entry-company:hover { border-color: var(--purple, #8a5cf6); background: rgba(138,92,246,0.04); }
.entry-icon { font-size: 1.5rem; margin-bottom: 14px; }
.entry-label { font-size: 1rem; font-weight: 700; margin-bottom: 8px; color: var(--text); }
.entry-desc { font-size: 0.83rem; color: var(--muted); line-height: 1.6; margin-bottom: 18px; }
.entry-cta { font-size: 0.82rem; font-weight: 600; font-family: var(--mono); }
.entry-cta-green { color: var(--green); }
.entry-cta-purple { color: var(--purple, #8a5cf6); }
.hero-stats { display: flex; align-items: center; gap: 28px; padding: 24px 0 0; border-top: 1px solid var(--border); }
.hstat { display: flex; flex-direction: column; gap: 3px; }
.hstat-num { font-size: 1rem; font-weight: 700; color: var(--text); font-family: var(--mono); }
.hstat-label { font-size: 0.72rem; color: var(--muted); letter-spacing: 0.5px; text-transform: uppercase; }
.hstat-div { width: 1px; height: 30px; background: var(--border); }
.company-wrap { padding: 32px 0 64px; }
.verify-result-card { border: 1px solid rgba(0,229,160,0.3); border-radius: 12px; padding: 24px; margin-bottom: 24px; background: rgba(0,229,160,0.03); }
.vr-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
.vr-score-big { font-size: 2.5rem; font-weight: 800; color: var(--green); font-family: var(--mono); }
.vr-rows { display: flex; flex-direction: column; gap: 0; margin-bottom: 16px; }
.vr-row { display: flex; align-items: baseline; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--border); }
.vr-row:last-child { border-bottom: none; }
.vr-key { font-size: 0.68rem; letter-spacing: 1.5px; color: var(--muted); font-family: var(--mono); min-width: 60px; }
.vr-val { font-size: 0.88rem; color: var(--text); }
.vr-summary { font-size: 0.85rem; color: var(--muted); font-style: italic; line-height: 1.6; padding: 12px 0; border-top: 1px solid var(--border); margin-bottom: 16px; }
`;