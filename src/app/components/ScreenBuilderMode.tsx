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

      <div className="bm-grid">
        <div className="bm-card bm-learn" onClick={onLearn}>
          <div className="bm-icon">◎</div>
          <div className="bm-label">Learn</div>
          <div className="bm-desc">
            Get a curated, adaptive learning path based on your current level.
            Complete tasks, then prove your skills.
          </div>
          <div className="bm-tags">
            <span className="bm-tag">Beginners welcome</span>
            <span className="bm-tag">Guided</span>
            <span className="bm-tag">Adaptive</span>
          </div>
          <div className="bm-cta bm-cta-green">Start learning →</div>
        </div>

        <div className="bm-card bm-prove" onClick={onProve}>
          <div className="bm-icon">⬡</div>
          <div className="bm-label">Prove</div>
          <div className="bm-desc">
            Already have the skills? Skip learning and go straight to proof.
            Submit your work and get a verifiable on-chain badge.
          </div>
          <div className="bm-tags">
            <span className="bm-tag">For experienced builders</span>
            <span className="bm-tag">Fast track</span>
          </div>
          <div className="bm-cta bm-cta-purple">Prove my skills →</div>
        </div>
      </div>

      <style>{`
        .bm-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 8px; }
        @media (max-width: 540px) { .bm-grid { grid-template-columns: 1fr; } }
        .bm-card {
          border: 1px solid var(--border); border-radius: 12px; padding: 28px 22px;
          cursor: pointer; transition: border-color 0.2s, transform 0.15s, background 0.2s;
          background: var(--surface, rgba(255,255,255,0.03));
          display: flex; flex-direction: column; gap: 10px;
        }
        .bm-card:hover  { transform: translateY(-3px); }
        .bm-learn:hover { border-color: var(--green); background: rgba(0,229,160,0.04); }
        .bm-prove:hover { border-color: var(--purple, #8a5cf6); background: rgba(138,92,246,0.04); }
        .bm-icon  { font-size: 1.6rem; }
        .bm-label { font-size: 1.1rem; font-weight: 700; color: var(--text); }
        .bm-desc  { font-size: 0.83rem; color: var(--muted); line-height: 1.6; }
        .bm-tags  { display: flex; flex-wrap: wrap; gap: 6px; }
        .bm-tag {
          font-size: 0.7rem; padding: 3px 8px; border-radius: 4px;
          border: 1px solid var(--border); color: var(--muted); font-family: var(--mono);
        }
        .bm-cta        { font-size: 0.82rem; font-weight: 600; font-family: var(--mono); margin-top: 4px; }
        .bm-cta-green  { color: var(--green); }
        .bm-cta-purple { color: var(--purple, #8a5cf6); }
      `}</style>
    </div>
  );
}