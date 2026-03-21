'use client';
// src/components/ProgressBar.tsx

const STEPS = ['Goal', 'Task', 'Submit', 'Verify', 'Result'];

interface Props { current: number; }

export default function ProgressBar({ current }: Props) {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 32px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {STEPS.map((label, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <div key={label} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: done
                    ? 'linear-gradient(135deg, #6C63FF, #4A9EFF)'
                    : active ? 'var(--surface2)' : 'var(--surface)',
                  border: `1.5px solid ${done ? 'var(--purple)' : active ? 'var(--purple)' : 'var(--border)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.4s ease',
                  boxShadow: active ? 'var(--shadow-purple)' : done ? '0 2px 12px rgba(108,99,255,0.35)' : 'none',
                }}>
                  {done
                    ? <span style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>✓</span>
                    : <span style={{ fontSize: 10, color: active ? 'var(--purple-light)' : 'var(--text-muted)', fontWeight: 600 }}>{i + 1}</span>
                  }
                </div>
                <span style={{
                  fontSize: 9, letterSpacing: 1.5, fontWeight: 500,
                  color: done || active ? 'var(--purple-light)' : 'var(--text-muted)',
                  transition: 'color 0.3s',
                }}>{label.toUpperCase()}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div style={{
                  flex: 1, height: 1, margin: '0 4px', marginBottom: 24,
                  background: done ? 'linear-gradient(90deg, var(--purple), var(--blue))' : 'var(--border)',
                  transition: 'background 0.4s ease',
                }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}