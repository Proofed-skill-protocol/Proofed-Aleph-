'use client';

interface ScreenBuilderModeProps {
  category: string;
  onLearn:  () => void;
  onProve:  () => void;
  onBack:   () => void;
}

export default function ScreenBuilderMode({ category, onLearn, onProve, onBack }: ScreenBuilderModeProps) {
  return (
    <div className="screen on">
      <button className="btn btn-ghost" style={{ marginBottom: 28 }} onClick={onBack}>← Back</button>
      <p className="ey">{category} · choose your path</p>
      <h1>How do you want to <em>proceed?</em></h1>
      <p className="lead">
        Already have skills to prove? Go straight to validation.
        Want to build them first? Start with a guided learning path.
      </p>

      <div className="mode-grid">
        {/* Learn */}
        <div className="mode-card mode-learn" onClick={onLearn}>
          <div className="mode-icon">◎</div>
          <div className="mode-label">Learn</div>
          <div className="mode-desc">
            Get a curated, adaptive learning path based on your current level.
            Complete tasks, then prove your skills.
          </div>
          <div className="mode-tags">
            <span className="mode-tag">Beginners welcome</span>
            <span className="mode-tag">Guided</span>
            <span className="mode-tag">Adaptive</span>
          </div>
          <div className="mode-cta mode-cta-green">Start learning →</div>
        </div>

        {/* Prove */}
        <div className="mode-card mode-prove" onClick={onProve}>
          <div className="mode-icon">⬡</div>
          <div className="mode-label">Prove</div>
          <div className="mode-desc">
            Already have the skills? Skip learning and go straight to proof.
            Submit your work and get a verifiable on-chain badge.
          </div>
          <div className="mode-tags">
            <span className="mode-tag">For experienced builders</span>
            <span className="mode-tag">Fast track</span>
          </div>
          <div className="mode-cta mode-cta-purple">Prove my skills →</div>
        </div>
      </div>

      <style>{`
        .mode-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 8px; }
        @media (max-width: 540px) { .mode-grid { grid-template-columns: 1fr; } }
        .mode-card {
          border: 1px solid var(--border); border-radius: 12px; padding: 28px 22px;
          cursor: pointer; transition: border-color 0.2s, transform 0.15s, background 0.2s;
          background: var(--surface, rgba(255,255,255,0.03));
          display: flex; flex-direction: column; gap: 10px;
        }
        .mode-card:hover { transform: translateY(-3px); }
        .mode-learn:hover { border-color: var(--green); background: rgba(0,229,160,0.04); }
        .mode-prove:hover { border-color: var(--purple, #8a5cf6); background: rgba(138,92,246,0.04); }
        .mode-icon { font-size: 1.6rem; }
        .mode-label { font-size: 1.1rem; font-weight: 700; color: var(--text); }
        .mode-desc { font-size: 0.83rem; color: var(--muted); line-height: 1.6; }
        .mode-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .mode-tag {
          font-size: 0.7rem; padding: 3px 8px; border-radius: 4px;
          border: 1px solid var(--border); color: var(--muted);
          font-family: var(--mono); letter-spacing: 0.3px;
        }
        .mode-cta { font-size: 0.82rem; font-weight: 600; font-family: var(--mono); margin-top: 4px; }
        .mode-cta-green { color: var(--green); }
        .mode-cta-purple { color: var(--purple, #8a5cf6); }
      `}</style>
    </div>
  );
}