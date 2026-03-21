'use client';
// src/components/GoalScreen.tsx

import { TASKS, GoalKey } from '@/lib/tasks';

interface Props {
  goal: GoalKey | null;
  onSelect: (key: GoalKey) => void;
  onNext: () => void;
}

const TRACK_COLORS: Record<string, string> = {
  frontend: '#6C63FF',
  solidity: '#4A9EFF',
  api:      '#A78BFA',
  react:    '#60A5FA',
};

export default function GoalScreen({ goal, onSelect, onNext }: Props) {
  return (
    <div className="fade-up">
      <div style={{ marginBottom: 40 }}>
        <p style={{ fontSize: 11, color: 'var(--purple-light)', letterSpacing: 3, fontWeight: 500, marginBottom: 12 }}>
          STEP 01 · SELECT TRACK
        </p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 46, fontWeight: 700, lineHeight: 1.1,
          color: 'var(--text)', marginBottom: 14, letterSpacing: -0.5,
        }}>
          What skill will<br />
          you <em style={{
            fontStyle: 'italic',
            background: 'linear-gradient(135deg, #6C63FF, #4A9EFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>prove?</em>
        </h1>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: 440 }}>
          Pick a track. We generate a challenge, you build it, we verify it permanently on-chain.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }} className="grid-2">
        {(Object.entries(TASKS) as [GoalKey, typeof TASKS[GoalKey]][]).map(([key, t]) => {
          const selected = goal === key;
          const color = TRACK_COLORS[key];
          return (
            <button key={key} onClick={() => onSelect(key)} style={{
              background: selected ? `${color}12` : 'var(--surface)',
              border: `1.5px solid ${selected ? color : 'var(--border)'}`,
              borderRadius: 'var(--radius-lg)',
              padding: '20px 22px', textAlign: 'left',
              cursor: 'pointer', transition: 'var(--transition)',
              boxShadow: selected ? `0 4px 20px ${color}25` : 'var(--shadow)',
              animation: selected ? 'purple-pulse 2.5s ease-in-out infinite' : 'none',
            }}
              onMouseEnter={e => { if (!selected) { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${color}60`; el.style.background = 'var(--surface2)'; }}}
              onMouseLeave={e => { if (!selected) { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(108,99,255,0.12)'; el.style.background = 'var(--surface)'; }}}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 8, marginBottom: 14,
                background: `${color}18`,
                border: `1px solid ${color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, color,
              }}>{t.icon}</div>
              <p style={{
                fontSize: 14, fontWeight: 600, marginBottom: 4,
                fontFamily: 'var(--font-display)',
                color: selected ? color : 'var(--text)',
              }}>{t.trackShort}</p>
              <p style={{ fontSize: 10, letterSpacing: 1.5, color: 'var(--text-muted)' }}>
                {t.track}
              </p>
              {selected && (
                <div style={{ marginTop: 10, fontSize: 10, color, letterSpacing: 1 }}>✓ SELECTED</div>
              )}
            </button>
          );
        })}
      </div>

      <button disabled={!goal} onClick={onNext} style={{
        width: '100%', padding: '15px 0',
        background: goal ? 'linear-gradient(135deg, #6C63FF, #4A9EFF)' : 'var(--surface2)',
        color: goal ? '#fff' : 'var(--text-muted)',
        border: 'none', borderRadius: 'var(--radius)',
        fontSize: 12, fontWeight: 600, letterSpacing: 2,
        cursor: goal ? 'pointer' : 'not-allowed',
        fontFamily: 'var(--font-mono)', transition: 'var(--transition)',
        boxShadow: goal ? 'var(--shadow-purple)' : 'none',
      }}
        onMouseEnter={e => { if (goal) (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
        onMouseLeave={e => { if (goal) (e.currentTarget as HTMLElement).style.opacity = '1'; }}
      >
        GENERATE TASK →
      </button>
    </div>
  );
}