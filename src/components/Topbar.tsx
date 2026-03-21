'use client';
// src/components/Topbar.tsx

export default function Topbar() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(13,15,26,0.92)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)',
      padding: '0 32px',
    }}>
      <div style={{
        maxWidth: 760, margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: 62,
      }}>
        {/* Logo — matches the app logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, #6C63FF, #4A9EFF)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 12px rgba(108,99,255,0.4)',
          }}>
            <span style={{ color: '#fff', fontSize: 16, fontWeight: 700 }}>✓</span>
          </div>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 18, fontWeight: 700,
            color: 'var(--text)', letterSpacing: 0.3,
          }}>Proofed</span>
        </div>

        {/* Status pill */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 7,
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 20, padding: '5px 14px',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--green)', display: 'inline-block',
            animation: 'pulse-dot 2s ease-in-out infinite',
          }} />
          <span style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: 1.5 }}>
            BRADBURY TESTNET
          </span>
        </div>
      </div>
    </nav>
  );
}