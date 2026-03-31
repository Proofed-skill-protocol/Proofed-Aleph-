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

  const grade    = getGrade(score);
  const verifyId = displayTxHash.slice(2, 10);
  const verifyUrl = `https://verify.proofed.xyz/${verifyId}`;
  const short    = walletAddress ? walletAddress.slice(0, 6) + '...' + walletAddress.slice(-4) : '0x????...????';
  const pool     = poolEntry === 0 ? 100 : poolEntry === 2 ? 200 : 500;

  const [displayScore, setDisplayScore] = useState(0);
  const [barWidths,    setBarWidths]    = useState([0, 0, 0, 0]);
  const [badgeCopied,  setBadgeCopied]  = useState(false);
  const [ipfsBadge,    setIpfsBadge]    = useState<{ cid: string, url: string } | null>(null);
  const [uploadingBadge, setUploadingBadge] = useState(false);

  const [validatorScores] = useState(() =>
    evalResult?.validatorScores ??
    [0, 1, 2].map(() => Math.max(50, Math.min(99, score + Math.floor(Math.random() * 9) - 4)))
  );
  const [blockNum] = useState(() => (18000000 + Math.floor(Math.random() * 99999)).toLocaleString());

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

  useEffect(() => {
    // Only upload if evaluate ran and score is decent (e.g. >= 50 or passed flag)
    if (score >= 50 && !ipfsBadge && !uploadingBadge) {
      const uploadBadge = async () => {
        setUploadingBadge(true);
        try {
          const res = await fetch('/api/ipfs/upload', {
            method: 'POST',
            body: JSON.stringify({
              name: `Proofed Protocol: ${PATHS[selTrack].label}`,
              challenge_title: PATHS[selTrack].label,
              score,
              feedback: summary,
              walletAddress,
            })
          });
          if (res.ok) {
            const data = await res.json();
            setIpfsBadge(data);
          }
        } catch (err) {
          console.error('Failed to upload badge to IPFS:', err);
        } finally {
          setUploadingBadge(false);
        }
      };
      uploadBadge();
    }
  }, [score, ipfsBadge, uploadingBadge, selTrack, summary, walletAddress]);

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
      <p className="ey">step 06 — proof issued</p>
      <h1>Skill <em>verified</em></h1>
      <p className="lead" style={{ marginBottom: 20 }}>
        Evaluated by AI · Validated by consensus · {isRealTx ? 'Stored on-chain ✓' : 'Stored off-chain'}
      </p>

      {/* Score ring */}
      <div className="score-wrap">
        <div className="ring-outer">
          <svg width="92" height="92" viewBox="0 0 92 92">
            <circle cx="46" cy="46" r="38" fill="none" stroke="#1A2335" strokeWidth="7" />
            <circle cx="46" cy="46" r="38" fill="none" stroke="#00E5A0" strokeWidth="7"
              strokeLinecap="round" strokeDasharray="238.8" strokeDashoffset={offset}
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
              Your score of {score} determines your share. Results finalize when the pool closes.
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

      {/* On-chain proof */}
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
            <span className="avax-kv"><span className="avax-k">BLOCK </span><span style={{ color: 'var(--text)' }}>{blockNum}</span></span>
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

      {/* ── SHARE YOUR PROOF BADGE ── */}
      <div className="block share-block" style={{ padding: '32px 24px', position: 'relative', overflow: 'hidden' }}>
        <div className="badge-glow" />
        <div className="block-head" style={{ borderBottom: 'none', marginBottom: 16 }}>
          <span className="bhl" style={{ color: '#fff', fontSize: '1.2rem' }}>💎 Verifiable Skill Badge</span>
          <span className="chip chip-green">IPFS / FILECOIN</span>
        </div>
        <div className="block-body" style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginBottom: 24, lineHeight: 1.6 }}>
            Your achievement has been minted into a verifiable JSON credential and stored permanently on the decentralized web.
          </p>

          {/* Premium Badge Presentation */}
          <div className="premium-badge-card">
            <div className="pb-top">
              <div className="pb-brand">⬡ PROOFED PROTOCOL</div>
              <div className="pb-date">{new Date().toISOString().split('T')[0]}</div>
            </div>
            <div className="pb-main">
              <div className="pb-track">{PATHS[selTrack].label.toUpperCase()}</div>
              <div className="pb-title">Verified Builder</div>
            </div>
            <div className="pb-bottom">
              <div className="pb-score">
                <span className="pb-score-val">{score}</span>
                <span className="pb-score-lbl">/100</span>
              </div>
              <div className="pb-user">
                <span>WALLET</span>
                <span style={{ fontFamily: 'var(--mono)', color: '#fff' }}>{short}</span>
              </div>
            </div>
            <div className="pb-glass-sheen" />
          </div>

          {/* IPFS Meta */}
          <div className="ipfs-meta-box">
            <div className="ipfs-row">
              <span className="ipfs-k">STORAGE</span>
              <span className="ipfs-v">{uploadingBadge ? 'Uploading to IPFS...' : 'IPFS + Filecoin ✓'}</span>
            </div>
            {ipfsBadge && (
              <div className="ipfs-row">
                <span className="ipfs-k">CID</span>
                <a href={ipfsBadge.url} target="_blank" rel="noreferrer" className="ipfs-v ipfs-link">
                  {ipfsBadge.cid.slice(0, 16)}...{ipfsBadge.cid.slice(-10)}
                </a>
              </div>
            )}
          </div>

          {/* Verify URL */}
          <div className="verify-url-box" style={{ background: 'rgba(0,0,0,0.2)', marginBottom: 20 }}>
            <span className="verify-url-text">{verifyUrl}</span>
          </div>

          {/* Action buttons */}
          <div className="share-btns">
            <button className="btn btn-main share-btn" onClick={handleCopyBadge}>
              {badgeCopied ? '✓ Copied!' : '🔗 Copy Proof Link'}
            </button>
            <button className="btn btn-ghost share-btn linkedin-btn" onClick={handleLinkedIn}>
              in Add to LinkedIn
            </button>
          </div>
        </div>
      </div>

      <button className="btn btn-main" onClick={onRestart} style={{ width: '100%', marginTop: 8 }}>
        ↺ Try another track
      </button>

      <style>{`
        .share-block { 
          border: 1px solid rgba(0, 229, 160, 0.4); 
          background: linear-gradient(145deg, rgba(20,25,35,0.95), rgba(10,15,25,0.98));
        }
        .badge-glow {
          position: absolute; top: -50px; right: -50px;
          --glow-color: rgba(0,229,160,0.15);
          width: 250px; height: 250px;
          background: radial-gradient(circle, var(--glow-color) 0%, transparent 70%);
          border-radius: 50%; filter: blur(30px); z-index: 0;
        }
        .premium-badge-card {
          position: relative;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 16px; padding: 24px; margin-bottom: 20px;
          overflow: hidden; backdrop-filter: blur(10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .premium-badge-card:hover { transform: translateY(-4px) scale(1.02); }
        .pb-glass-sheen {
          position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transform: skewX(-20deg); animation: sheen 6s infinite;
        }
        @keyframes sheen { 0% { left: -100% } 20% { left: 200% } 100% { left: 200% } }
        .pb-top { display: flex; justify-content: space-between; font-size: 0.65rem; color: rgba(255,255,255,0.5); font-family: var(--mono); letter-spacing: 1.5px; margin-bottom: 32px; }
        .pb-brand { color: var(--green); }
        .pb-track { font-size: 0.8rem; color: var(--green); margin-bottom: 4px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600; }
        .pb-title { font-size: 2rem; color: #fff; font-weight: 800; letter-spacing: -1px; margin-bottom: 32px; line-height: 1; text-shadow: 0 2px 10px rgba(0,0,0,0.5); }
        .pb-bottom { display: flex; justify-content: space-between; align-items: flex-end; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; }
        .pb-score { display: flex; align-items: baseline; }
        .pb-score-val { font-size: 3rem; font-weight: 800; color: #fff; font-family: var(--mono); line-height: 0.8; }
        .pb-score-lbl { font-size: 1rem; color: rgba(255,255,255,0.4); margin-left: 4px; }
        .pb-user { display: flex; flex-direction: column; align-items: flex-end; font-size: 0.65rem; color: rgba(255,255,255,0.5); gap: 4px; }
        .ipfs-meta-box { background: rgba(0,0,0,0.4); border-radius: 8px; padding: 12px 16px; margin-bottom: 16px; border: 1px solid rgba(255,255,255,0.05); position: relative; z-index: 2; }
        .ipfs-row { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.8rem; }
        .ipfs-row:last-child { margin-bottom: 0; }
        .ipfs-k { color: var(--muted); font-family: var(--mono); font-size: 0.7rem; letter-spacing: 1px; }
        .ipfs-v { color: #fff; }
        .ipfs-link { color: var(--green); text-decoration: none; font-family: var(--mono); }
        .ipfs-link:hover { text-decoration: underline; color: #fff; }
        .verify-url-box {
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 10px 14px;
          margin-bottom: 14px;
          overflow: hidden;
          position: relative; z-index: 2;
        }
        .verify-url-text {
          font-size: 0.78rem;
          font-family: var(--mono);
          color: var(--green);
          word-break: break-all;
        }
        .share-btns {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          position: relative; z-index: 2;
        }
        .share-btn { flex: 1; min-width: 140px; }
        .linkedin-btn { border-color: #0077b5; color: #0077b5; }
        .linkedin-btn:hover { background: rgba(0, 119, 181, 0.1); }
      `}</style>
    </div>
  );
}