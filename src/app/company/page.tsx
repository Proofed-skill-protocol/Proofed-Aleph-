'use client';

import { useState } from 'react';
import Topbar from '../components/Topbar';
import Toast from '../components/Toast';
import Link from 'next/link';

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

export default function CompanyPage() {
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [verifyInput,  setVerifyInput]  = useState('');
  const [verifyResult, setVerifyResult] = useState<VerifyResult | null>(null);
  const [verifying,    setVerifying]    = useState(false);
  const [verifyError,  setVerifyError]  = useState<string | null>(null);

  const clearToast = () => setToastMsg(null);

  const handleVerify = async () => {
    if (!verifyInput.trim()) return;
    setVerifying(true);
    setVerifyResult(null);
    setVerifyError(null);
    try {
      const parts = verifyInput.trim().split('/');
      const verifyId = parts[parts.length - 1];
      if (!verifyId || verifyId.length < 6) {
        setVerifyError('Invalid proof link — please paste the full URL.');
        setVerifying(false);
        return;
      }
      const res = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ verifyId }),
      });
      if (res.ok) {
        const data = await res.json();
        setVerifyResult(data);
      } else {
        setVerifyResult({ found: false, txHash: verifyId });
      }
    } catch {
      setVerifyError('Could not verify proof — check your connection and try again.');
    } finally {
      setVerifying(false);
    }
  };

  return (
    <>
      <div className="shell">
        <Topbar />
        <div className="company-wrap">
          <Link href="/">
            <button className="btn btn-ghost" style={{ marginBottom: 24 }}>
              ← Back
            </button>
          </Link>
          <p className="ey">for companies</p>
          <h1>Verify a candidate&apos;s <em>proof</em></h1>
          <p className="lead">Paste a candidate&apos;s Proof link. We&apos;ll show their verified score, the GitHub repo they submitted, and the on-chain consensus that confirmed it.</p>

          <div className="field">
            <label className="fl">Proof verification link</label>
            <input className="inp" type="text" placeholder="https://verify.proofed.xyz/abc123ef"
              value={verifyInput}
              onChange={e => setVerifyInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleVerify()}
            />
          </div>
          <button className="btn btn-main" style={{ width: '100%', marginBottom: 24 }}
            disabled={!verifyInput.trim() || verifying} onClick={handleVerify}>
            {verifying ? 'Verifying on-chain...' : 'Verify Proof →'}
          </button>

          {verifyError && <div style={{ color: 'orange', fontSize: '0.85rem', marginBottom: 16 }}>⚠ {verifyError}</div>}

          {verifyResult && (
            <div className="verify-result-card">
              {!verifyResult.found ? (
                <div className="vr-notfound">
                  <div className="vr-notfound-icon">⚠</div>
                  <div className="vr-notfound-title">Proof not found</div>
                  <div className="vr-notfound-desc">No on-chain proof found for this ID. The candidate may not have completed evaluation yet, or the link may be incorrect.</div>
                </div>
              ) : (
                <>
                  <div className="vr-header">
                    <span className="chip chip-green">✓ VERIFIED ON-CHAIN</span>
                    <div className="vr-score-big">{verifyResult.score}<span style={{ fontSize: '1rem', color: 'var(--muted)' }}>/100</span></div>
                  </div>
                  <div className="vr-rows">
                    {verifyResult.track    && <div className="vr-row"><span className="vr-key">TRACK</span><span className="vr-val">{verifyResult.track}</span></div>}
                    {verifyResult.passed !== undefined && <div className="vr-row"><span className="vr-key">STATUS</span><span className="vr-val" style={{ color: verifyResult.passed ? 'var(--green)' : 'orange' }}>{verifyResult.passed ? '✓ PASSED' : '✗ DID NOT PASS'}</span></div>}
                    {verifyResult.github   && <div className="vr-row"><span className="vr-key">REPO</span><a href={verifyResult.github} target="_blank" rel="noreferrer" className="vr-val vr-link">{verifyResult.github}</a></div>}
                    {verifyResult.date     && <div className="vr-row"><span className="vr-key">DATE</span><span className="vr-val">{verifyResult.date}</span></div>}
                    {verifyResult.txHash   && <div className="vr-row"><span className="vr-key">TX</span><span className="vr-val" style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem' }}>{verifyResult.txHash.slice(0,14)}...{verifyResult.txHash.slice(-8)}</span></div>}
                  </div>
                  {verifyResult.summary && <div className="vr-summary">&quot;{verifyResult.summary}&quot;</div>}
                  {verifyResult.validators && (
                    <div className="vr-validators">
                      <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: 8, letterSpacing: 1 }}>⬡ GENLAYER VALIDATORS</div>
                      <div style={{ display: 'flex', gap: 10 }}>
                        {verifyResult.validators.map((s, i) => (
                          <div key={i} className="vr-val-chip">
                            <div style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>V-0{i+1}</div>
                            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--green)', fontFamily: 'var(--mono)' }}>{s}</div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--green)' }}>✓</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {!verifyResult && (
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
          )}
        </div>
      </div>
      <Toast message={toastMsg} onDone={clearToast} />
      <style>{styles}</style>
    </>
  );
}

const styles = `
.company-wrap { padding: 32px 0 64px; }
.company-features { margin-top: 32px; }
.cfeat { display: flex; align-items: flex-start; gap: 16px; padding: 18px 0; border-bottom: 1px solid var(--border); }
.cfeat:first-child { border-top: 1px solid var(--border); }
.cfeat-ico { font-size: 1.2rem; margin-top: 1px; min-width: 24px; }
.cfeat-title { font-size: 0.9rem; font-weight: 600; color: var(--text); margin-bottom: 3px; }
.cfeat-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.5; }
.verify-result-card { border: 1px solid rgba(0,229,160,0.3); border-radius: 12px; padding: 24px; margin-bottom: 24px; background: rgba(0,229,160,0.03); }
.vr-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
.vr-score-big { font-size: 2.5rem; font-weight: 800; color: var(--green); font-family: var(--mono); }
.vr-rows { display: flex; flex-direction: column; gap: 0; margin-bottom: 16px; }
.vr-row { display: flex; align-items: baseline; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--border); }
.vr-row:last-child { border-bottom: none; }
.vr-key { font-size: 0.68rem; letter-spacing: 1.5px; color: var(--muted); font-family: var(--mono); min-width: 60px; }
.vr-val { font-size: 0.88rem; color: var(--text); }
.vr-link { color: var(--green); text-decoration: none; }
.vr-link:hover { text-decoration: underline; }
.vr-summary { font-size: 0.85rem; color: var(--muted); font-style: italic; line-height: 1.6; padding: 12px 0; border-top: 1px solid var(--border); margin-bottom: 16px; }
.vr-validators { padding-top: 12px; border-top: 1px solid var(--border); }
.vr-val-chip { background: rgba(0,229,160,0.06); border: 1px solid rgba(0,229,160,0.2); border-radius: 8px; padding: 10px 16px; text-align: center; }
.vr-notfound { text-align: center; padding: 24px 0; }
.vr-notfound-icon { font-size: 2rem; margin-bottom: 12px; color: orange; }
.vr-notfound-title { font-size: 1rem; font-weight: 700; color: var(--text); margin-bottom: 8px; }
.vr-notfound-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.6; }
`;
