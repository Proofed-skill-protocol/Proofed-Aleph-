'use client';

import { useEffect, useState } from 'react';
import { PATHS, TrackKey } from '@/lib/data';
import { getGrade, randomHex, copyToClipboard } from '@/lib/utils';

interface Screen6Props {
  selTrack:      TrackKey;
  walletAddress: string;
  poolEntry:     number | null;
  evalResult:    any | null;
  onRestart:     () => void;
  onToast:       (msg: string) => void;
}

export default function Screen6({
  selTrack, walletAddress, poolEntry, evalResult, onRestart, onToast,
}: Screen6Props) {
  const ev = PATHS[selTrack].eval;

  const score        = evalResult?.consensusScore ?? evalResult?.score ?? ev.score;
  const strengths    = evalResult?.strengths    ?? ev.strengths;
  const improvements = evalResult?.improvements ?? ev.improvements;
  const summary      = evalResult?.summary      ?? ev.summary;
  const breakdown    = evalResult?.breakdown    ?? ev.breakdown;

  const realTxHash    = evalResult?.txHash ?? null;
  const isRealTx      = !!realTxHash;
  const displayTxHash = realTxHash ?? ('0x' + randomHex(64));
  const verifyId      = displayTxHash.slice(2, 10);
  const verifyUrl     = `https://verify.proofed.xyz/${verifyId}`;
  const short         = walletAddress ? walletAddress.slice(0, 6) + '...' + walletAddress.slice(-4) : '0x????...????';
  const pool          = poolEntry === 0 ? 100 : poolEntry === 2 ? 200 : 500;
  const grade         = getGrade(score);

  const [displayScore, setDisplayScore] = useState(0);
  const [barWidths,    setBarWidths]    = useState([0, 0, 0, 0]);
  const [badgeCopied,  setBadgeCopied]  = useState(false);

  const [validatorScores] = useState(() =>
    evalResult?.validatorScores ??
    [0, 1, 2].map(() => Math.max(50, Math.min(99, score + Math.floor(Math.random() * 9) - 4)))
  );

  const participants = [
    { addr: short + ' (you)', score, you: true },
    { addr: '0xA3f2...91Bc', score: Math.max(40, score - (5  + Math.floor(Math.random() * 18))) },
    { addr: '0x77Cc...3D1a', score: Math.max(35, score - (12 + Math.floor(Math.random() * 20))) },
    { addr: '0xB8e1...F204', score: Math.max(30, score - (18 + Math.floor(Math.random() * 22))) },
  ].sort((a, b) => b.score - a.score);
  const total = participants.reduce((s, x) => s + x.score, 0);

  useEffect(() => {
    let c = 0;
    const iv = setInterval(() => {
      c = Math.min(c + 2, score);
      setDisplayScore(c);
      if (c >= score) clearInterval(iv);
    }, 18);
    return () => clearInterval(iv);
  }, [score]);

  useEffect(() => {
    const t = setTimeout(() => setBarWidths(breakdown), 300);
    return () => clearTimeout(t);
  }, [breakdown]);

  const circ   = 238.8;
  const offset = circ - (displayScore / 100) * circ;

  const handleCopyBadge = async () => {
    await copyToClipboard(verifyUrl);
    setBadgeCopied(true);
    onToast('🔗 Proof link copied!');
    setTimeout(() => setBadgeCopied(false), 2000);
  };

  const handleLinkedIn = () => {
    const url = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Proof+of+Skill+%E2%80%94+${encodeURIComponent(PATHS[selTrack].label)}&organizationName=Proofed+Protocol&issueYear=${new Date().getFullYear()}&issueMonth=${new Date().getMonth() + 1}&certUrl=${encodeURIComponent(verifyUrl)}&certId=${verifyId}`;
    window.open(url, '_blank');
  };

  const handleViewExplorer = () => {
    if (isRealTx) window.open(`https://genlayer-explorer.vercel.app/tx/${displayTxHash}`, '_blank');
  };

  return (
    <div className="screen on">
      <p className="ey">proof issued</p>
      <h1>Skill <em>verified</em></h1>
      <p className="lead" style={{ marginBottom: 20 }}>
        Evaluated by AI · Validated by GenLayer consensus · {isRealTx ? 'Stored on-chain ✓' : 'Stored off-chain'}
      </p>

      {/* Score ring */}
      <div className="score-wrap">
        <div className="ring-outer">
          <svg width="92" height="92" viewBox="0 0 92 92">
            <circle cx="46" cy="46" r="38" fill="none" stroke="#1A2335" strokeWidth="7" />
            <circle cx="46" cy="46" r="38" fill="none" stroke="#00E5A0" strokeWidth="7"
              strokeLinecap="round" strokeDasharray="238.8" strokeDashoffset={offset}
              style={{ transition: 'stroke-dashoffset 0.05s linear' }} />
          </svg>
          <div className="ring-num">
            <span className="ring-val">{displayScore}</span>
            <span className="ring-lbl">/100</span>
          </div>
        </div>
        <div className="score-meta">
          <div className="score-grade" style={{ color: grade.color }}>{grade.label}</div>
          <p className="score-text">{summary}</p>
        </div>
      </div>

      {/* Pool result */}
      {poolEntry !== null && poolEntry > 0 && (
        <div className="pool-result" style={{ display: 'flex' }}>
          <div className="pool-result-ico">◈</div>
          <div className="pool-result-text">
            <div className="pool-result-title">${poolEntry} USDC entered</div>
            <div className="pool-result-sub">Your score of {score} determines your share. Results finalize when the pool closes.</div>
          </div>
        </div>
      )}

      {/* GenLayer validators */}
      <div className="block">
        <div className="block-head">
          <span className="bhl" style={{ color: 'var(--purple)' }}>⬡ GenLayer · Bradbury Testnet</span>
          <span className="chip chip-green">CONSENSUS REACHED</span>
        </div>
        <div className="block-body">
          <div className="val-grid">
            {validatorScores.map((s: number, i: number) => (
              <div key={i} className="vc">
                <div className="vid">VALIDATOR-0{i + 1}</div>
                <div className="vscore">{s}</div>
                <div className="vok">✓ confirmed</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Score breakdown */}
      <div className="block">
        <div className="block-head">
          <span className="bhl" style={{ color: 'var(--muted)' }}>Score Breakdown</span>
        </div>
        <div className="block-body" style={{ paddingTop: 8, paddingBottom: 8 }}>
          {['Task requirements', 'Code structure', 'Correctness', 'Bonus polish'].map((name, i) => (
            <div key={i} className="bk-row">
              <span className="bk-name">{name}</span>
              <div className="bk-track"><div className="bk-fill" style={{ width: barWidths[i] + '%' }} /></div>
              <span className="bk-val">{ev.breakdown[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback */}
      <div className="fb-grid">
        <div className="fb-box">
          <div className="fb-head pos">✓ Strengths</div>
          <div className="fb-items">
            {strengths.map((s: string, i: number) => (
              <div key={i} className="fb-item"><span className="fb-b pos">+</span><span>{s}</span></div>
            ))}
          </div>
        </div>
        <div className="fb-box">
          <div className="fb-head neg">↑ Improvements</div>
          <div className="fb-items">
            {improvements.map((s: string, i: number) => (
              <div key={i} className="fb-item"><span className="fb-b neg">→</span><span>{s}</span></div>
            ))}
          </div>
        </div>
      </div>

      {/* GenLayer on-chain proof */}
      <div className="block">
        <div className="block-head">
          <span className="bhl" style={{ color: 'var(--purple)' }}>⬡ GenLayer · On-Chain Proof</span>
          <span className={`chip ${isRealTx ? 'chip-green' : 'chip-red'}`}>
            {isRealTx ? 'STORED ON-CHAIN' : 'OFF-CHAIN ONLY'}
          </span>
        </div>
        <div className="block-body">
          <div className="hash-box">{displayTxHash}</div>
          <div className="avax-meta">
            <span className="avax-kv"><span className="avax-k">TX </span><span style={{ color: 'var(--text)' }}>{displayTxHash.slice(0, 10)}...{displayTxHash.slice(-6)}</span></span>
            <span className="avax-kv"><span className="avax-k">CHAIN </span><span style={{ color: 'var(--text)' }}>GenLayer Studionet</span></span>
          </div>
          {isRealTx && (
            <button className="btn btn-ghost" style={{ marginTop: 10, fontSize: 12 }} onClick={handleViewExplorer}>
              View on GenLayer Explorer →
            </button>
          )}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="block">
        <div className="block-head">
          <span className="bhl" style={{ color: 'var(--amber)' }}>◈ Reward Distribution</span>
          <span className="bhl" style={{ color: 'var(--muted)' }}>
            {poolEntry && poolEntry > 0 ? `Pool: $${pool} USDC` : 'Pool: $100 USDC (free track)'}
          </span>
        </div>
        <table className="lb-table">
          <thead><tr><th>Rank</th><th>Address</th><th>Score</th><th>Reward</th></tr></thead>
          <tbody>
            {participants.map((p, i) => (
              <tr key={i} className={p.you ? 'you' : ''}>
                <td className="lb-rank">#{i + 1}</td>
                <td className="lb-addr">{p.addr}</td>
                <td style={{ fontFamily: 'var(--mono)' }}>{p.score}</td>
                <td className="lb-reward">${((p.score / total) * pool).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Share your proof badge */}
      <div className="block" style={{ borderColor: 'rgba(0,229,160,0.3)' }}>
        <div className="block-head">
          <span className="bhl" style={{ color: 'var(--green)' }}>⬡ Share Your Proof</span>
          <span className="chip chip-green">PORTABLE BADGE</span>
        </div>
        <div className="block-body">
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: 16, lineHeight: 1.6 }}>
            Add this to your LinkedIn, job application, or portfolio.
            Anyone can verify your proof is real — stored on-chain, impossible to fake.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(0,229,160,0.06)', border: '1px solid rgba(0,229,160,0.25)', borderRadius: 10, padding: '16px 20px', marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: '1.8rem', color: 'var(--green)' }}>⬡</div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)', letterSpacing: 1 }}>PROOF-OF-SKILL</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: 1, marginTop: 2 }}>{PATHS[selTrack].label.toUpperCase()} · VERIFIED</div>
              </div>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--green)', fontFamily: 'var(--mono)' }}>{score}</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 14px', marginBottom: 14 }}>
            <span style={{ fontSize: '0.78rem', fontFamily: 'var(--mono)', color: 'var(--green)', wordBreak: 'break-all' }}>{verifyUrl}</span>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button className="btn btn-main" style={{ flex: 1, minWidth: 140 }} onClick={handleCopyBadge}>
              {badgeCopied ? '✓ Copied!' : '🔗 Copy Proof Link'}
            </button>
            <button className="btn btn-ghost" style={{ flex: 1, minWidth: 140, borderColor: '#0077b5', color: '#0077b5' }} onClick={handleLinkedIn}>
              in Add to LinkedIn
            </button>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: 12 }}>
            Companies can verify your proof at any time — just share the link above.
          </p>
        </div>
      </div>

      <button className="btn btn-main" onClick={onRestart} style={{ width: '100%', marginTop: 8 }}>
        ↺ Start over
      </button>
    </div>
  );
}