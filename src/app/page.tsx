'use client';

import { useState, useCallback } from 'react';
import { useAppState } from '@/lib/useAppState';
import { TrackKey } from '@/lib/data';
import type { Challenge } from '@/lib/genlayer/client';

import Topbar          from './components/Topbar';
import StepBar         from './components/StepBar';
import Toast           from './components/Toast';
import Screen1Category from './components/Screen1Category';
import Screen2Track    from './components/Screen2Track';
import Screen3Path     from './components/Screen3Path';
import Screen4Submit   from './components/Screen4Submit';
import Screen5Eval     from './components/Screen5Eval';
import Screen6Results  from './components/Screen6Results';

export default function Home() {
  const {
    state, goTo, pickCat, pickTrack, markStepDone,
    selectPool, setGithubUrl, setWalletAddress,
    restart, isFormValid, allStepsDone,
  } = useAppState();

  const [toastMsg,          setToastMsg]          = useState<string | null>(null);
  const [evalResult,        setEvalResult]        = useState<any>(null);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [mode, setMode] = useState<'hero' | 'builder' | 'company'>('hero');

  const showToast  = useCallback((msg: string) => setToastMsg(msg), []);
  const clearToast = useCallback(() => setToastMsg(null), []);

  const handleRestart = useCallback(() => {
    setEvalResult(null);
    setSelectedChallenge(null);
    setMode('hero');
    restart();
  }, [restart]);

  // ── Hero landing ────────────────────────────────────────────────────────
  if (mode === 'hero') {
    return (
      <>
        <div className="shell">
          <Topbar />
          <div className="hero-wrap">
            <div className="hero-eyebrow">⬡ PROOFED PROTOCOL · BRADBURY TESTNET</div>
            <h1 className="hero-title">
              Prove what you<br />
              can <em className="hero-em">build.</em>
            </h1>
            <p className="hero-not">Not what you&apos;ve learned.</p>
            <p className="hero-desc">
              Complete real tasks, get evaluated by AI, and generate
              verifiable proof of skill — stored on-chain forever.
            </p>

            <div className="entry-grid">
              <div className="entry-card entry-builder" onClick={() => setMode('builder')}>
                <div className="entry-icon">⚡</div>
                <div className="entry-label">For Builders</div>
                <div className="entry-desc">
                  Start proving your skills. Complete challenges, get scored by AI validators, earn a verifiable badge.
                </div>
                <div className="entry-cta entry-cta-green">Start proving →</div>
              </div>

              <div className="entry-card entry-company" onClick={() => setMode('company')}>
                <div className="entry-icon">◈</div>
                <div className="entry-label">For Companies</div>
                <div className="entry-desc">
                  Evaluate candidates through real work — not interviews. Verify any Proof badge instantly.
                </div>
                <div className="entry-cta entry-cta-purple">Verify a candidate →</div>
              </div>
            </div>

            <div className="hero-stats">
              <div className="hstat">
                <span className="hstat-num">3</span>
                <span className="hstat-label">AI Validators</span>
              </div>
              <div className="hstat-div" />
              <div className="hstat">
                <span className="hstat-num">On-chain</span>
                <span className="hstat-label">Proof Storage</span>
              </div>
              <div className="hstat-div" />
              <div className="hstat">
                <span className="hstat-num">0%</span>
                <span className="hstat-label">Bias</span>
              </div>
            </div>
          </div>
        </div>
        <Toast message={toastMsg} onDone={clearToast} />
        <style>{styles}</style>
      </>
    );
  }

  // ── Company view ────────────────────────────────────────────────────────
  if (mode === 'company') {
    return (
      <>
        <div className="shell">
          <Topbar />
          <div className="company-wrap">
            <button className="btn btn-ghost" style={{ marginBottom: 24 }} onClick={() => setMode('hero')}>← Back</button>
            <p className="ey">for companies</p>
            <h1>Verify a candidate&apos;s <em>proof</em></h1>
            <p className="lead">
              Paste a candidate&apos;s Proof link. We&apos;ll show their verified score,
              the GitHub repo they submitted, and the on-chain consensus that confirmed it.
            </p>

            <div className="field">
              <label className="fl">Proof verification link</label>
              <input className="inp" type="text" placeholder="https://verify.proofed.xyz/abc123ef" />
            </div>
            <button className="btn btn-main" style={{ width: '100%' }}>Verify Proof →</button>

            <div className="company-features">
              {[
                { ico: '⬡', title: 'On-chain verified', desc: 'Every proof is stored on GenLayer — impossible to fake' },
                { ico: '◈', title: 'Real work, not resumes', desc: 'Candidates prove skills by building actual projects' },
                { ico: '⚡', title: 'Instant verification', desc: 'One link. No back-and-forth. No interviews needed' },
              ].map((f, i) => (
                <div key={i} className="cfeat">
                  <div className="cfeat-ico">{f.ico}</div>
                  <div className="cfeat-text">
                    <div className="cfeat-title">{f.title}</div>
                    <div className="cfeat-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="istrip" style={{ marginTop: 32 }}>
              <b>Ask every candidate:</b> &quot;Add your Proof badge to your application.&quot;
              Verify in seconds — no interviews, no subjective judgment.
            </div>
          </div>
        </div>
        <Toast message={toastMsg} onDone={clearToast} />
        <style>{styles}</style>
      </>
    );
  }

  // ── Builder flow ────────────────────────────────────────────────────────
  return (
    <>
      <div className="shell">
        <Topbar />
        <StepBar current={state.step} />

        {state.step === 1 && (
          <Screen1Category
            selCat={state.selCat}
            onPickCat={pickCat}
            onPickChallenge={(c) => setSelectedChallenge(c)}
            onNext={() => goTo(2)}
          />
        )}
        {state.step === 2 && (
          <Screen2Track
            selTrack={state.selTrack}
            onPickTrack={(track: TrackKey, total: number) => pickTrack(track, total)}
            onNext={() => goTo(3)}
            onBack={() => goTo(1)}
          />
        )}
        {state.step === 3 && state.selTrack && (
          <Screen3Path
            selTrack={state.selTrack}
            doneSteps={state.doneSteps}
            allStepsDone={allStepsDone}
            onMarkDone={markStepDone}
            onNext={() => goTo(4)}
            onBack={() => goTo(2)}
          />
        )}
        {state.step === 4 && (
          <Screen4Submit
            poolEntry={state.poolEntry}
            githubUrl={state.githubUrl}
            walletAddress={state.walletAddress}
            isFormValid={isFormValid}
            onSelectPool={selectPool}
            onGithubChange={setGithubUrl}
            onWalletChange={setWalletAddress}
            onSubmit={() => goTo(5)}
            onBack={() => goTo(3)}
          />
        )}
        {state.step === 5 && state.selTrack && (
          <Screen5Eval
            selTrack={state.selTrack}
            githubUrl={state.githubUrl}
            walletAddress={state.walletAddress}
            challengeId={selectedChallenge?.id ?? 'default'}
            onDone={(result) => {
              setEvalResult(result);
              goTo(6);
              showToast('✓ Proof-of-Skill verified on GenLayer');
            }}
          />
        )}
        {state.step === 6 && state.selTrack && (
          <Screen6Results
            selTrack={state.selTrack}
            walletAddress={state.walletAddress}
            poolEntry={state.poolEntry}
            evalResult={evalResult}
            onRestart={handleRestart}
            onToast={showToast}
          />
        )}
      </div>
      <Toast message={toastMsg} onDone={clearToast} />
      <style>{styles}</style>
    </>
  );
}

const styles = `
.hero-wrap {
  padding: 48px 0 64px;
}
.hero-eyebrow {
  font-size: 11px;
  letter-spacing: 2px;
  color: var(--green);
  margin-bottom: 28px;
  font-family: var(--mono);
}
.hero-title {
  font-size: clamp(3rem, 9vw, 5.5rem);
  font-weight: 800;
  line-height: 1.0;
  margin: 0 0 4px;
  letter-spacing: -2px;
}
.hero-em {
  color: var(--green);
  font-style: normal;
}
.hero-not {
  font-size: clamp(1.4rem, 4vw, 2.2rem);
  font-weight: 700;
  color: var(--muted);
  margin: 0 0 20px;
  letter-spacing: -1px;
}
.hero-desc {
  font-size: 1rem;
  color: var(--muted);
  line-height: 1.7;
  max-width: 500px;
  margin: 0 0 40px;
}
.entry-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 40px;
}
@media (max-width: 540px) {
  .entry-grid { grid-template-columns: 1fr; }
}
.entry-card {
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 28px 22px;
  cursor: pointer;
  transition: border-color 0.2s, transform 0.15s, background 0.2s;
  background: var(--surface, rgba(255,255,255,0.03));
}
.entry-card:hover { transform: translateY(-3px); }
.entry-builder:hover { border-color: var(--green); background: rgba(0,229,160,0.04); }
.entry-company:hover { border-color: var(--purple, #8a5cf6); background: rgba(138,92,246,0.04); }
.entry-icon { font-size: 1.5rem; margin-bottom: 14px; }
.entry-label { font-size: 1rem; font-weight: 700; margin-bottom: 8px; color: var(--text); }
.entry-desc { font-size: 0.83rem; color: var(--muted); line-height: 1.6; margin-bottom: 18px; }
.entry-cta { font-size: 0.82rem; font-weight: 600; font-family: var(--mono); }
.entry-cta-green { color: var(--green); }
.entry-cta-purple { color: var(--purple, #8a5cf6); }
.hero-stats {
  display: flex;
  align-items: center;
  gap: 28px;
  padding: 24px 0 0;
  border-top: 1px solid var(--border);
}
.hstat { display: flex; flex-direction: column; gap: 3px; }
.hstat-num { font-size: 1rem; font-weight: 700; color: var(--text); font-family: var(--mono); }
.hstat-label { font-size: 0.72rem; color: var(--muted); letter-spacing: 0.5px; text-transform: uppercase; }
.hstat-div { width: 1px; height: 30px; background: var(--border); }
.company-wrap { padding: 32px 0 64px; }
.company-features { margin-top: 32px; }
.cfeat {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 18px 0;
  border-bottom: 1px solid var(--border);
}
.cfeat:first-child { border-top: 1px solid var(--border); }
.cfeat-ico { font-size: 1.2rem; margin-top: 1px; min-width: 24px; }
.cfeat-title { font-size: 0.9rem; font-weight: 600; color: var(--text); margin-bottom: 3px; }
.cfeat-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.5; }
`;