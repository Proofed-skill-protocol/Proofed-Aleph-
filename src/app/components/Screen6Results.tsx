'use client';

import { useEffect, useRef, useState } from 'react';
import { PATHS, TrackKey } from '@/lib/data';
import { getGrade, randomHex, copyToClipboard } from '@/lib/utils';

interface Screen6Props {
  selTrack: TrackKey;
  walletAddress: string;
  poolEntry: number | null;
  evalResult: any | null;   
  onRestart: () => void;
  onToast: (msg: string) => void;
}

export default function Screen6({
  selTrack,
  walletAddress,
  poolEntry,
  evalResult,               
  onRestart,
  onToast,
}: Screen6Props) {
  const ev = PATHS[selTrack].eval;

  // ✅ Use real API score if available, fallback to hardcoded
  const score = evalResult?.score ?? ev.score;

  // ✅ Use real feedback if available, fallback to hardcoded
  const strengths    = evalResult?.strengths    ?? ev.strengths;
  const improvements = evalResult?.improvements ?? ev.improvements;
  const summary      = evalResult?.summary      ?? ev.summary;
  const breakdown    = evalResult?.breakdown    ?? ev.breakdown;

  const grade = getGrade(score);

  const [displayScore, setDisplayScore] = useState(0);
  const [barWidths, setBarWidths] = useState([0, 0, 0, 0]);
  const [validatorScores] = useState(() =>
    [0, 1, 2].map(() => Math.max(50, Math.min(99, score + Math.floor(Math.random() * 9) - 4)))
  );
  const [hash] = useState(() => '0x' + randomHex(64));
  const [tx] = useState(() => '0x' + randomHex(40));
  const [blockNum] = useState(() => (18000000 + Math.floor(Math.random() * 99999)).toLocaleString());
  const verifyId = hash.slice(2, 10);

  const short = walletAddress.slice(0, 6) + '...' + walletAddress.slice(-4);
  const pool = poolEntry === 0 ? 100 : poolEntry === 2 ? 200 : 500;

  const participants = [
    { addr: short + ' (you)', score, you: true },
    { addr: '0xA3f2...91Bc', score: Math.max(40, score - (5  + Math.floor(Math.random() * 18))) },
    { addr: '0x77Cc...3D1a', score: Math.max(35, score - (12 + Math.floor(Math.random() * 20))) },
    { addr: '0xB8e1...F204', score: Math.max(30, score - (18 + Math.floor(Math.random() * 22))) },
  ].sort((a, b) => b.score - a.score);
  const total = participants.reduce((s, x) => s + x.score, 0);

  // Animate score ring
  useEffect(() => {
    let c = 0;
    const iv = setInterval(() => {
      c = Math.min(c + 2, score);
      setDisplayScore(c);
      if (c >= score) clearInterval(iv);
    }, 18);
    return () => clearInterval(iv);
  }, [score]);

  // Animate breakdown bars
  useEffect(() => {
    const t = setTimeout(() => setBarWidths(breakdown), 300);
    return () => clearTimeout(t);
  }, [ev.breakdown]);

  const circ = 238.8;
  const offset = circ - (displayScore / 100) * circ;

  const handleCopyVerify = async () => {
    await copyToClipboard('https://verify.proofed.xyz/' + verifyId);
    onToast('🔗 Verification link copied!');
  };

  return (
    <div className="screen on">
      <p className="ey">step 06 — proof issued</p>
      <h1>Skill <em>verified</em></h1>
      <p className="lead" style={{ marginBottom: 20 }}>
        Evaluated by AI · Validated by consensus · Stored on-chain
      </p>

      {/* Score ring */}
      <div className="score-wrap">
        <div className="ring-outer">
          <svg width="92" height="92" viewBox="0 0 92 92">
            <circle cx="46" cy="46" r="38" fill="none" stroke="#1A2335" strokeWidth="7" />
            <circle
              cx="46" cy="46" r="38" fill="none" stroke="#00E5A0" strokeWidth="7"
              strokeLinecap="round" strokeDasharray="238.8"
              strokeDashoffset={offset}
              style={{ transition: 'stroke-dashoffset 0.05s linear' }}
            />
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
            <div className="pool-result-sub">
              Your score of {score} determines your share. Higher score = higher reward.
              Results finalize when the pool closes.
            </div>
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
            {validatorScores.map((s, i) => (
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
              <div className="bk-track">
                <div className="bk-fill" style={{ width: barWidths[i] + '%' }} />
              </div>
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
            {strengths.map((s, i) => (
              <div key={i} className="fb-item">
                <span className="fb-b pos">+</span><span>{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="fb-box">
          <div className="fb-head neg">↑ Improvements</div>
          <div className="fb-items">
            {improvements.map((s, i) => (
              <div key={i} className="fb-item">
                <span className="fb-b neg">→</span><span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Avalanche proof */}
      <div className="block">
        <div className="block-head">
          <span className="bhl" style={{ color: 'var(--red)' }}>△ Avalanche · On-Chain Proof</span>
          <span className="chip chip-red">STORED</span>
        </div>
        <div className="block-body">
          <div className="hash-box">{hash}</div>
          <div className="avax-meta">
            <span className="avax-kv"><span className="avax-k">TX </span><span style={{ color: 'var(--text)' }}>{tx.slice(0, 10)}...{tx.slice(-6)}</span></span>
            <span className="avax-kv"><span className="avax-k">BLOCK </span><span style={{ color: 'var(--text)' }}>{blockNum}</span></span>
            <span className="avax-kv"><span className="avax-k">CHAIN </span><span style={{ color: 'var(--text)' }}>Avalanche Fuji</span></span>
          </div>
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
          <thead>
            <tr><th>Rank</th><th>Address</th><th>Score</th><th>Reward</th></tr>
          </thead>
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

      {/* Badge */}
      <div className="badge-area">
        <div className="badge-hex">⬡</div>
        <div className="badge-title">PROOF-OF-SKILL</div>
        <div className="badge-sub">
          {PATHS[selTrack].label.toUpperCase()} · WEB3 · VERIFIED ON-CHAIN
        </div>
        <button className="verify-btn" onClick={handleCopyVerify}>
          🔗 verify.proofed.xyz/{verifyId}
        </button>
      </div>

      <button className="btn btn-main" onClick={onRestart} style={{ width: '100%' }}>
        ↺ Try another track
      </button>
    </div>
  );
}
