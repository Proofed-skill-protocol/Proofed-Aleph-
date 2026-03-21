'use client';
// src/components/ResultsScreen.tsx

import type { EvaluationResult } from '@/app/api/evaluate/route';
import { RewardEntry } from '@/lib/rewardSplit';
import { TASKS, GoalKey } from '@/lib/tasks';

interface Props {
  result: EvaluationResult;
  leaderboard: RewardEntry[];
  scoreDisplay: number;
  goal: GoalKey;
  onRestart: () => void;
}

function getBadge(score: number) {
  if (score >= 90) return { label: 'ELITE', color: '#4ADE80' };
  if (score >= 75) return { label: 'PROFICIENT', color: '#6C63FF' };
  if (score >= 60) return { label: 'DEVELOPING', color: '#4A9EFF' };
  return { label: 'BEGINNER', color: '#F87171' };
}

const card = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-lg)',
  overflow: 'hidden' as const,
  boxShadow: 'var(--shadow)',
  marginBottom: 14,
};

const cardHeader = (color = 'var(--text-muted)') => ({
  background: 'var(--surface2)',
  borderBottom: '1px solid var(--border)',
  padding: '10px 20px',
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
});

export default function ResultsScreen({ result, leaderboard, scoreDisplay, goal, onRestart }: Props) {
  const badge = getBadge(result.score);
  const circ = 2 * Math.PI * 44;
  const offset = circ - (scoreDisplay / 100) * circ;

  return (
    <div className="fade-up">
      <p style={{ fontSize: 11, color: 'var(--purple-light)', letterSpacing: 3, fontWeight: 500, marginBottom: 12 }}>STEP 05 · PROOF ISSUED</p>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 42, fontWeight: 700, color: 'var(--text)', marginBottom: 4, letterSpacing: -0.5 }}>
        Skill{' '}
        <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #6C63FF, #4A9EFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>verified</em>
      </h1>
      <p style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 28 }}>
        EVALUATED BY AI · VALIDATED BY CONSENSUS · STORED ON-CHAIN
      </p>

      {/* Score */}
      <div style={{ ...card, padding: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <div style={{ position: 'relative', width: 100, height: 100, flexShrink: 0 }}>
            <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="50" cy="50" r="44" fill="none" stroke="var(--surface2)" strokeWidth="7" />
              <circle cx="50" cy="50" r="44" fill="none" stroke="url(#scoreGrad)" strokeWidth="7"
                strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
                style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)' }} />
              <defs>
                <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6C63FF" />
                  <stop offset="100%" stopColor="#4A9EFF" />
                </linearGradient>
              </defs>
            </svg>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 26, fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-display)', lineHeight: 1 }}>{scoreDisplay}</span>
              <span style={{ fontSize: 9, color: 'var(--text-muted)', marginTop: 2 }}>/100</span>
            </div>
          </div>
          <div>
            <div style={{ display: 'inline-block', background: `${badge.color}18`, border: `1px solid ${badge.color}40`, borderRadius: 4, padding: '4px 12px', marginBottom: 10 }}>
              <span style={{ color: badge.color, fontSize: 10, letterSpacing: 2, fontWeight: 700 }}>{badge.label}</span>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.7 }}>{result.summary}</p>
          </div>
        </div>
      </div>

      {/* Breakdown */}
      <div style={card}>
        <div style={cardHeader()}>
          <span style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: 2, fontWeight: 600 }}>SCORE BREAKDOWN</span>
        </div>
        <div style={{ padding: 20 }}>
          {([
            ['Task requirements', result.breakdown.task_requirements, '#6C63FF'],
            ['Code structure', result.breakdown.code_structure, '#4A9EFF'],
            ['Responsiveness', result.breakdown.responsiveness, '#A78BFA'],
            ['Bonus polish', result.breakdown.polish, '#60A5FA'],
          ] as [string, number, string][]).map(([label, val, color]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', minWidth: 130 }}>{label}</span>
              <div style={{ flex: 1, height: 4, background: 'var(--surface2)', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ height: '100%', background: color, borderRadius: 2, width: `${val}%`, transition: 'width 1.3s cubic-bezier(0.16,1,0.3,1)' }} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color, minWidth: 28, textAlign: 'right' }}>{val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths + Improvements */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }} className="grid-2">
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ background: 'var(--green-dim)', borderBottom: '1px solid rgba(74,222,128,0.2)', padding: '10px 16px' }}>
            <span style={{ fontSize: 9, color: 'var(--green)', letterSpacing: 2, fontWeight: 600 }}>✓ STRENGTHS</span>
          </div>
          <div style={{ padding: 16 }}>
            {(result.strengths ?? []).map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 10, fontSize: 11, color: 'var(--text)', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--green)', flexShrink: 0, fontWeight: 700 }}>+</span><span>{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ background: 'var(--purple-dim)', borderBottom: '1px solid rgba(108,99,255,0.2)', padding: '10px 16px' }}>
            <span style={{ fontSize: 9, color: 'var(--purple-light)', letterSpacing: 2, fontWeight: 600 }}>↑ IMPROVEMENTS</span>
          </div>
          <div style={{ padding: 16 }}>
            {(result.improvements ?? []).map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 10, fontSize: 11, color: 'var(--text)', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--purple-light)', flexShrink: 0, fontWeight: 700 }}>→</span><span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GenLayer */}
      <div style={card}>
        <div style={cardHeader()}>
          <span style={{ fontSize: 9, color: 'var(--blue)', letterSpacing: 2, fontWeight: 600 }}>⬡ GENLAYER · BRADBURY TESTNET</span>
          <span style={{ fontSize: 9, color: 'var(--green)', background: 'var(--green-dim)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: 4, padding: '2px 8px', letterSpacing: 1 }}>CONSENSUS REACHED</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          {(result.validators ?? []).map((v, i) => (
            <div key={v.id} style={{ padding: '18px 12px', textAlign: 'center', borderRight: i < 2 ? '1px solid var(--border)' : 'none' }}>
              <p style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: 1.5, marginBottom: 8 }}>{v.id}</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, background: 'linear-gradient(135deg, #6C63FF, #4A9EFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '0 0 6px' }}>{v.score}</p>
              <p style={{ fontSize: 9, color: 'var(--green)', letterSpacing: 1 }}>✓ CONFIRMED</p>
            </div>
          ))}
        </div>
      </div>

      {/* Avalanche */}
      <div style={card}>
        <div style={cardHeader()}>
          <span style={{ fontSize: 9, color: 'var(--red)', letterSpacing: 2, fontWeight: 600 }}>△ AVALANCHE · ON-CHAIN PROOF</span>
          <span style={{ fontSize: 9, color: 'var(--red)', background: 'var(--red-dim)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: 4, padding: '2px 8px' }}>STORED</span>
        </div>
        <div style={{ padding: 18 }}>
          <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '10px 14px', fontSize: 11, color: 'var(--purple-light)', wordBreak: 'break-all', lineHeight: 1.6, marginBottom: 12, fontWeight: 500 }}>
            {result.avalanche.hash}
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              ['TX', `${result.avalanche.txHash.slice(0, 10)}...${result.avalanche.txHash.slice(-6)}`],
              ['BLOCK', result.avalanche.block.toLocaleString()],
              ['CHAIN', 'Avalanche Fuji C-Chain'],
            ].map(([label, val]) => (
              <span key={label} style={{ fontSize: 11 }}>
                <span style={{ color: 'var(--text-muted)', letterSpacing: 1 }}>{label} </span>
                <span style={{ color: 'var(--text)', fontWeight: 600 }}>{val}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div style={card}>
        <div style={cardHeader()}>
          <span style={{ fontSize: 9, color: 'var(--gold)', letterSpacing: 2, fontWeight: 600 }}>◈ REWARD DISTRIBUTION</span>
          <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>POOL: $1,000 USDC</span>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
          <thead>
            <tr>
              {['Rank', 'Address', 'Score', 'Reward'].map(h => (
                <th key={h} style={{ textAlign: 'left', padding: '10px 20px', fontSize: 9, color: 'var(--text-muted)', letterSpacing: 2, fontWeight: 500, borderBottom: '1px solid var(--border)' }}>{h.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, i) => (
              <tr key={i} style={{ borderBottom: i < leaderboard.length - 1 ? '1px solid var(--border)' : 'none', background: entry.you ? 'var(--purple-dim)' : 'transparent' }}>
                <td style={{ padding: '13px 20px', color: entry.you ? 'var(--purple-light)' : 'var(--text-muted)', fontWeight: entry.you ? 700 : 400 }}>#{i + 1}</td>
                <td style={{ padding: '13px 20px', color: entry.you ? 'var(--purple-light)' : 'var(--text)', fontWeight: entry.you ? 600 : 400 }}>{entry.address}</td>
                <td style={{ padding: '13px 20px', color: 'var(--text)' }}>{entry.score}</td>
                <td style={{ padding: '13px 20px', color: 'var(--gold)', fontWeight: 700 }}>${entry.reward.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Badge */}
      <div style={{ background: 'linear-gradient(135deg, #6C63FF15, #4A9EFF10)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-hover)', padding: '36px 24px', textAlign: 'center', marginBottom: 16, boxShadow: 'var(--shadow-purple)' }}>
        <div style={{ width: 56, height: 56, margin: '0 auto 16px', borderRadius: 12, background: 'linear-gradient(135deg, #6C63FF, #4A9EFF)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(108,99,255,0.4)' }}>
          <span style={{ color: '#fff', fontSize: 26, fontWeight: 700 }}>✓</span>
        </div>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>PROOF-OF-SKILL</p>
        <p style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 20 }}>{TASKS[goal].track} · VERIFIED ON-CHAIN</p>
        <button style={{ fontSize: 11, color: 'var(--purple-light)', background: 'transparent', border: '1px solid var(--border-hover)', borderRadius: 4, padding: '8px 18px', cursor: 'pointer', fontFamily: 'var(--font-mono)', letterSpacing: 1, transition: 'var(--transition)' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--purple-dim)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
        >🔗 verify.pos-protocol.xyz/{result.avalanche.hash.slice(2, 10)}</button>
      </div>

      <button onClick={onRestart} style={{ width: '100%', padding: '15px', borderRadius: 'var(--radius)', background: 'linear-gradient(135deg, #6C63FF, #4A9EFF)', border: 'none', color: '#fff', fontWeight: 600, fontSize: 12, letterSpacing: 2, cursor: 'pointer', fontFamily: 'var(--font-mono)', transition: 'var(--transition)', boxShadow: 'var(--shadow-purple)' }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.85'}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
      >↺ TRY ANOTHER CHALLENGE</button>
    </div>
  );
}