'use client';

import Topbar from './components/Topbar';
import Link from 'next/link';

export default function Home() {
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
            <Link href="/builder" style={{ textDecoration: 'none' }}>
              <div className="entry-card entry-builder">
                <div className="entry-icon">⚡</div>
                <div className="entry-label">For Builders</div>
                <div className="entry-desc">Start proving your skills. Complete challenges, get scored by AI validators, earn a verifiable badge.</div>
                <div className="entry-cta entry-cta-green">Start proving →</div>
              </div>
            </Link>
            <Link href="/company" style={{ textDecoration: 'none' }}>
              <div className="entry-card entry-company">
                <div className="entry-icon">◈</div>
                <div className="entry-label">For Companies</div>
                <div className="entry-desc">Evaluate candidates through real work — not interviews. Verify any Proof badge instantly.</div>
                <div className="entry-cta entry-cta-purple">Verify a candidate →</div>
              </div>
            </Link>
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
      <style>{styles}</style>
    </>
  );
}

const styles = `
.hero-wrap { padding: 48px 0 64px; }
.hero-eyebrow { font-size: 11px; letter-spacing: 2px; color: var(--green); margin-bottom: 28px; font-family: var(--mono); }
.hero-title { font-size: clamp(3rem, 9vw, 5.5rem); font-weight: 800; line-height: 1.0; margin: 0 0 4px; letter-spacing: -2px; }
.hero-em { color: var(--green); font-style: normal; }
.hero-not { font-size: clamp(1.4rem, 4vw, 2.2rem); font-weight: 700; color: var(--muted); margin: 0 0 20px; letter-spacing: -1px; }
.hero-desc { font-size: 1rem; color: var(--muted); line-height: 1.7; max-width: 500px; margin: 0 0 40px; }
.entry-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 40px; }
@media (max-width: 540px) { .entry-grid { grid-template-columns: 1fr; } }
.entry-card { height: 100%; border: 1px solid var(--border); border-radius: 12px; padding: 28px 22px; cursor: pointer; transition: border-color 0.2s, transform 0.15s, background 0.2s; background: var(--surface, rgba(255,255,255,0.03)); }
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
`;