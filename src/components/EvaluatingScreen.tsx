'use client';
// src/components/EvaluatingScreen.tsx

const STEPS = [
  { label: 'Fetching repository from GitHub', icon: '⬡' },
  { label: 'Claude AI evaluating against rubric', icon: '◎' },
  { label: '3 GenLayer validators reaching consensus', icon: '◈' },
  { label: 'Writing cryptographic proof to Avalanche', icon: '△' },
  { label: 'Minting Proof-of-Skill badge', icon: '✓' },
];

interface Props { pipeStep: number; }

export default function EvaluatingScreen({ pipeStep }: Props) {
  return (
    <div style={{ paddingTop: 32, textAlign: 'center' }} className="fade-up">
      {/* Gradient spinner */}
      <div style={{ position: 'relative', width: 56, height: 56, margin: '0 auto 28px' }}>
        <div style={{ width: 56, height: 56, border: '2px solid var(--surface2)', borderTop: '2px solid var(--purple)', borderRight: '2px solid var(--blue)', borderRadius: '50%', animation: 'spin 0.9s linear infinite' }} />
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>
        Evaluating your{' '}
        <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #6C63FF, #4A9EFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>submission</em>
      </h2>
      <p style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 36, letterSpacing: 1 }}>
        TAKES 15–30 SECONDS · DO NOT CLOSE THIS TAB
      </p>

      <div style={{ textAlign: 'left', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
        {STEPS.map((step, i) => {
          const done = i < pipeStep;
          const active = i === pipeStep;
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px', borderBottom: i < STEPS.length - 1 ? '1px solid var(--border)' : 'none', background: active ? 'var(--purple-dim)' : 'transparent', transition: 'background 0.3s' }}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: done ? 'linear-gradient(135deg, #6C63FF, #4A9EFF)' : 'var(--surface2)', border: `1.5px solid ${done ? 'var(--purple)' : active ? 'var(--purple)' : 'var(--border)'}`, transition: 'all 0.3s', boxShadow: active ? 'var(--shadow-purple)' : 'none' }}>
                {done
                  ? <span style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>✓</span>
                  : <span style={{ color: active ? 'var(--purple-light)' : 'var(--text-muted)', fontSize: 12 }}>{step.icon}</span>
                }
              </div>
              <p style={{ fontSize: 12, margin: 0, flex: 1, color: done ? 'var(--purple-light)' : active ? 'var(--text)' : 'var(--text-muted)', fontWeight: active ? 500 : 400, transition: 'color 0.3s' }}>{step.label}</p>
              {active && (
                <div style={{ display: 'flex', gap: 4 }}>
                  {[0, 1, 2].map(j => (
                    <div key={j} style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--purple)', animation: `bounce-dot 1.2s ease-in-out ${j * 0.2}s infinite` }} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}