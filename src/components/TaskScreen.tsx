'use client';
// src/components/TaskScreen.tsx

import { TASKS, GoalKey } from '@/lib/tasks';

interface Props { goal: GoalKey; onBack: () => void; onNext: () => void; }

const RUBRIC = [
  { label: 'Task requirements met', pct: '40%', color: '#6C63FF' },
  { label: 'Code structure & cleanliness', pct: '30%', color: '#4A9EFF' },
  { label: 'Responsiveness / correctness', pct: '20%', color: '#A78BFA' },
  { label: 'Bonus polish', pct: '10%', color: '#60A5FA' },
];

export default function TaskScreen({ goal, onBack, onNext }: Props) {
  const t = TASKS[goal];
  return (
    <div className="fade-up">
      <p style={{ fontSize: 11, color: 'var(--purple-light)', letterSpacing: 3, fontWeight: 500, marginBottom: 12 }}>STEP 02 · YOUR CHALLENGE</p>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 42, fontWeight: 700, color: 'var(--text)', marginBottom: 8, letterSpacing: -0.5 }}>
        Your <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #6C63FF, #4A9EFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>challenge</em>
      </h1>
      <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 28, lineHeight: 1.8 }}>
        Build this task and push your code to GitHub before submitting.
      </p>

      <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', marginBottom: 20 }}>
        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #6C63FF22, #4A9EFF11)', borderBottom: '1px solid var(--border)', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: 'var(--purple-light)', fontSize: 16 }}>{t.icon}</span>
            <span style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: 2 }}>TASK BRIEF</span>
          </div>
          <span style={{ fontSize: 10, color: 'var(--blue)', background: 'var(--blue-dim)', border: '1px solid rgba(74,158,255,0.25)', borderRadius: 4, padding: '3px 10px', letterSpacing: 1 }}>
            ⏱ {t.time}
          </span>
        </div>

        <div style={{ padding: 24 }}>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: 'var(--text)', marginBottom: 24 }}>{t.title}</p>
          <p style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 12 }}>SCORING RUBRIC</p>
          {RUBRIC.map(({ label, pct, color }) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: 12, color: 'var(--text)' }}>{label}</span>
              <span style={{ fontSize: 11, fontWeight: 600, color, background: `${color}15`, border: `1px solid ${color}30`, borderRadius: 4, padding: '2px 10px' }}>{pct}</span>
            </div>
          ))}
          <a href={t.resourceUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20, padding: '12px 16px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', color: 'var(--text-muted)', fontSize: 12, transition: 'var(--transition)' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--purple)'; el.style.color = 'var(--purple-light)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(108,99,255,0.12)'; el.style.color = 'var(--text-muted)'; }}
          >
            <span>📺</span><span>{t.resource}</span>
            <span style={{ marginLeft: 'auto', fontSize: 10 }}>↗</span>
          </a>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={onBack} style={{ padding: '13px 20px', borderRadius: 'var(--radius)', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 12, transition: 'var(--transition)' }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--purple)'; el.style.color = 'var(--purple-light)'; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(108,99,255,0.12)'; el.style.color = 'var(--text-muted)'; }}
        >← Back</button>
        <button onClick={onNext} style={{ flex: 1, padding: '13px', borderRadius: 'var(--radius)', background: 'linear-gradient(135deg, #6C63FF, #4A9EFF)', border: 'none', color: '#fff', fontWeight: 600, fontSize: 12, letterSpacing: 1.5, cursor: 'pointer', fontFamily: 'var(--font-mono)', transition: 'var(--transition)', boxShadow: 'var(--shadow-purple)' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.85'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
        >I BUILT IT, SUBMIT →</button>
      </div>
    </div>
  );
}