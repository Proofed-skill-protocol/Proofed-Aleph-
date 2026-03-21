'use client';
// src/components/SubmitScreen.tsx

interface Props {
  githubUrl: string; wallet: string;
  urlError: string; walletError: string; apiError: string;
  formValid: boolean;
  onUrlChange: (val: string) => void;
  onWalletChange: (val: string) => void;
  onBack: () => void; onSubmit: () => void;
}

export default function SubmitScreen({ githubUrl, wallet, urlError, walletError, apiError, formValid, onUrlChange, onWalletChange, onBack, onSubmit }: Props) {
  const inputStyle = (hasVal: boolean, hasErr: boolean) => ({
    width: '100%', padding: '13px 16px',
    background: 'var(--surface2)',
    border: `1.5px solid ${hasErr ? 'var(--red)' : hasVal && !hasErr ? 'var(--purple)' : 'var(--border)'}`,
    borderRadius: 'var(--radius)', fontSize: 13, color: 'var(--text)',
    transition: 'all 0.2s', boxSizing: 'border-box' as const,
  });

  return (
    <div className="fade-up">
      <p style={{ fontSize: 11, color: 'var(--purple-light)', letterSpacing: 3, fontWeight: 500, marginBottom: 12 }}>STEP 03 · SUBMIT PROOF</p>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 42, fontWeight: 700, color: 'var(--text)', marginBottom: 8, letterSpacing: -0.5 }}>
        Submit your <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #6C63FF, #4A9EFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>work</em>
      </h1>
      <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 32, lineHeight: 1.8 }}>
        Paste your GitHub repo. Claude evaluates it, GenLayer validates, Avalanche stores the proof.
      </p>

      {apiError && (
        <div style={{ background: 'var(--red-dim)', border: '1px solid rgba(248,113,113,0.3)', borderLeft: '3px solid var(--red)', borderRadius: 'var(--radius)', padding: '12px 16px', marginBottom: 24 }}>
          <p style={{ color: 'var(--red)', fontSize: 12 }}>⚠ {apiError}</p>
        </div>
      )}

      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'block', fontSize: 10, color: 'var(--purple-light)', letterSpacing: 2, fontWeight: 600, marginBottom: 8 }}>REPOSITORY URL</label>
        <input value={githubUrl} onChange={e => onUrlChange(e.target.value)} type="url" placeholder="https://github.com/username/repo" style={inputStyle(!!githubUrl, !!urlError)} />
        {urlError && <p style={{ color: 'var(--red)', fontSize: 11, marginTop: 6 }}>{urlError}</p>}
      </div>

      <div style={{ marginBottom: 28 }}>
        <label style={{ display: 'block', fontSize: 10, color: 'var(--purple-light)', letterSpacing: 2, fontWeight: 600, marginBottom: 8 }}>WALLET ADDRESS</label>
        <input value={wallet} onChange={e => onWalletChange(e.target.value)} type="text" placeholder="0x..." style={inputStyle(!!wallet, !!walletError)} />
        {walletError && <p style={{ color: 'var(--red)', fontSize: 11, marginTop: 6 }}>{walletError}</p>}
      </div>

      {/* Pipeline */}
      <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', borderLeft: '3px solid var(--purple)', padding: '16px 20px', marginBottom: 28 }}>
        <p style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 10 }}>VERIFICATION PIPELINE</p>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'Claude AI', color: 'var(--purple-light)' },
            { label: '→', color: 'var(--text-muted)' },
            { label: '3 GenLayer validators', color: 'var(--blue)' },
            { label: '→', color: 'var(--text-muted)' },
            { label: 'Avalanche Fuji', color: 'var(--red)' },
            { label: '→', color: 'var(--text-muted)' },
            { label: 'Badge issued', color: 'var(--green)' },
          ].map((item, i) => (
            <span key={i} style={{ fontSize: 12, color: item.color, fontWeight: item.label === '→' ? 400 : 500 }}>{item.label}</span>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={onBack} style={{ padding: '13px 20px', borderRadius: 'var(--radius)', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 12, transition: 'var(--transition)' }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--purple)'; el.style.color = 'var(--purple-light)'; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(108,99,255,0.12)'; el.style.color = 'var(--text-muted)'; }}
        >← Back</button>
        <button disabled={!formValid} onClick={onSubmit} style={{ flex: 1, padding: '13px', borderRadius: 'var(--radius)', background: formValid ? 'linear-gradient(135deg, #6C63FF, #4A9EFF)' : 'var(--surface2)', color: formValid ? '#fff' : 'var(--text-muted)', border: 'none', fontWeight: 600, fontSize: 12, letterSpacing: 1.5, cursor: formValid ? 'pointer' : 'not-allowed', fontFamily: 'var(--font-mono)', transition: 'var(--transition)', boxShadow: formValid ? 'var(--shadow-purple)' : 'none' }}
          onMouseEnter={e => { if (formValid) (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
          onMouseLeave={e => { if (formValid) (e.currentTarget as HTMLElement).style.opacity = '1'; }}
        >EVALUATE & VERIFY →</button>
      </div>
    </div>
  );
}