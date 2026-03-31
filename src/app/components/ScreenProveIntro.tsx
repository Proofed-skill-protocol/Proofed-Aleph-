'use client';

interface ScreenProveIntroProps {
  category: string;
  onNext:   () => void;
  onBack:   () => void;
}

const STEPS = [
  {
    num:   '01',
    title: 'Pick a track',
    desc:  'Choose the skill category you want to prove — frontend, backend, web3, and more.',
  },
  {
    num:   '02',
    title: 'Submit your repo',
    desc:  'Paste your GitHub link. Any existing project that fits the challenge criteria qualifies.',
  },
  {
    num:   '03',
    title: 'Get verified on-chain',
    desc:  'Claude AI scores it. 3 GenLayer validators reach consensus. Your badge is minted on-chain.',
  },
  {
    num:   '04',
    title: 'Share your proof',
    desc:  'Add it to LinkedIn. Send the link to recruiters. Companies can verify it instantly.',
    highlight: true,
  },
];

export default function ScreenProveIntro({ category, onNext, onBack }: ScreenProveIntroProps) {
  return (
    <div className="screen on">
      <button className="btn btn-ghost" style={{ marginBottom: 28 }} onClick={onBack}>← Back</button>
      <p className="ey">{category} · fast track</p>
      <h1>Prove your <em style={{ color: 'var(--purple, #8a5cf6)' }}>skills</em></h1>
      <p className="lead">
        Already built something? Submit it directly — skip the course and go straight to your verifiable on-chain badge.
      </p>

      <div className="pi-steps">
        {STEPS.map((s, i) => (
          <div
            key={i}
            className="pi-step"
            style={s.highlight ? { border: '1px solid rgba(138,92,246,0.3)', background: 'rgba(138,92,246,0.04)', borderRadius: 8 } : {}}
          >
            <div className="pi-num" style={{ color: s.highlight ? 'var(--purple, #8a5cf6)' : 'var(--muted)' }}>
              {s.num}
            </div>
            <div className="pi-body">
              <div className="pi-title" style={{ color: s.highlight ? 'var(--purple, #8a5cf6)' : 'var(--text)' }}>
                {s.title}
              </div>
              <div className="pi-desc">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="istrip" style={{ marginTop: 16, borderColor: 'var(--purple, #8a5cf6)' }}>
        The entire process takes 15–30 minutes. You&apos;ll need a GitHub repo ready to submit.
      </div>

      <button
        className="btn btn-main"
        style={{ width: '100%', marginTop: 24, background: 'var(--purple, #8a5cf6)', color: '#fff' }}
        onClick={onNext}
      >
        Continue →
      </button>

      <style>{`
        .pi-steps { display: flex; flex-direction: column; gap: 2px; }
        .pi-step  {
          display: flex; gap: 16px; padding: 18px 12px;
          border-bottom: 1px solid var(--border);
        }
        .pi-step:first-child { border-top: 1px solid var(--border); }
        .pi-num   { font-family: var(--mono); font-size: 0.72rem; min-width: 22px; padding-top: 2px; font-weight: 700; }
        .pi-body  { flex: 1; }
        .pi-title { font-size: 0.92rem; font-weight: 600; margin-bottom: 4px; }
        .pi-desc  { font-size: 0.82rem; color: var(--muted); line-height: 1.5; }
      `}</style>
    </div>
  );
}