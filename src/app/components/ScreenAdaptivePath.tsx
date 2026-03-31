'use client';

type Level = 'beginner' | 'intermediate' | 'advanced';

interface ScreenAdaptivePathProps {
  category: string;
  level:    'beginner' | 'intermediate' | 'advanced';
  onProve:  () => void;
  onStart?: () => void;
  onBack:   () => void;
}

interface PathStep {
  type:     'READ' | 'BUILD' | 'PROVE';
  title:    string;
  desc:     string;
  duration: string;
}

const TYPE_COLOR: Record<string, string> = {
  READ:  '#60a5fa',
  BUILD: 'var(--green)',
  PROVE: 'var(--purple, #8a5cf6)',
};

const PATHS: Record<Level, PathStep[]> = {
  beginner: [
    { type: 'READ',  title: 'Core concepts',         desc: 'Fundamentals of the track.',               duration: '~30 min' },
    { type: 'BUILD', title: 'Guided mini-project',   desc: 'Build with step-by-step instructions.',    duration: '~1 hr'   },
    { type: 'READ',  title: 'Best practices',         desc: 'Code quality and common patterns.',        duration: '~20 min' },
    { type: 'BUILD', title: 'Independent challenge',  desc: 'Apply your knowledge solo.',               duration: '~2 hrs'  },
    { type: 'PROVE', title: 'Submit & get verified',  desc: 'Push to GitHub, earn your badge.',         duration: '~10 min' },
  ],
  intermediate: [
    { type: 'READ',  title: 'Advanced patterns',      desc: 'Real-world architecture deep-dive.',       duration: '~20 min' },
    { type: 'BUILD', title: 'Production challenge',   desc: 'Build something production-grade.',        duration: '~3 hrs'  },
    { type: 'BUILD', title: 'Code review simulation', desc: 'Refactor and fix a broken codebase.',      duration: '~1 hr'   },
    { type: 'PROVE', title: 'Submit & get verified',  desc: 'Push to GitHub, earn your badge.',         duration: '~10 min' },
  ],
  advanced: [
    { type: 'BUILD', title: 'Expert challenge',       desc: 'Tackle a complex engineering problem.',    duration: '~4 hrs'  },
    { type: 'BUILD', title: 'Optimisation round',     desc: 'Refine for performance and reliability.',  duration: '~1 hr'   },
    { type: 'PROVE', title: 'Submit & get verified',  desc: 'Push to GitHub, earn your badge.',         duration: '~10 min' },
  ],
};

const LEVEL_META: Record<Level, { color: string; tagline: string }> = {
  beginner:     { color: 'var(--green)',           tagline: 'A step-by-step path designed to build solid foundations.'     },
  intermediate: { color: '#f59e0b',                tagline: 'A focused path that pushes you into real-world territory.'    },
  advanced:     { color: 'var(--purple, #8a5cf6)', tagline: 'A direct path to demonstrating expert-level skills on-chain.' },
};

export default function ScreenAdaptivePath({ category, level, onProve, onStart, onBack }: ScreenAdaptivePathProps) {
  const steps = PATHS[level];
  const meta  = LEVEL_META[level];
  const label = level.charAt(0).toUpperCase() + level.slice(1);

  return (
    <div className="screen on">
      <button className="btn btn-ghost" style={{ marginBottom: 28 }} onClick={onBack}>← Back</button>
      <p className="ey">{category} · your adaptive path</p>
      <h1>Your <em style={{ color: meta.color }}>{label}</em> path</h1>
      <p className="lead">{meta.tagline}</p>

      <div className="ap-badge" style={{ borderColor: `${meta.color === 'var(--green)' ? 'rgba(0,229,160' : meta.color === '#f59e0b' ? 'rgba(245,158,11' : 'rgba(138,92,246'}, 0.3)`, color: meta.color }}>
        ◎ {label.toUpperCase()} · {steps.length} STEPS · {category.toUpperCase()}
      </div>

      <div className="ap-steps">
        {steps.map((s, i) => {
          const isLast = i === steps.length - 1;
          const color  = TYPE_COLOR[s.type];
          return (
            <div key={i} className="ap-step">
              <div className="ap-step-left">
                <div className="ap-step-num" style={{ color, borderColor: `${color === 'var(--green)' ? 'rgba(0,229,160' : color === '#60a5fa' ? 'rgba(96,165,250' : 'rgba(138,92,246'}, 0.4)` }}>
                  {i + 1}
                </div>
                {!isLast && <div className="ap-step-line" />}
              </div>
              <div className="ap-step-body">
                <div className="ap-step-type" style={{ color }}>{s.type}</div>
                <div className="ap-step-title">{s.title}</div>
                <div className="ap-step-desc">{s.desc}</div>
                <div className="ap-step-dur">{s.duration}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="istrip" style={{ marginTop: 24 }}>
        Complete each step at your own pace. When ready, push your project to GitHub and submit for AI evaluation and on-chain verification.
      </div>

      <button className="btn btn-main" style={{ width: '100%', marginTop: 24 }} onClick={onStart ?? onProve}>
        Start this path →
      </button>
      <button className="btn btn-ghost" style={{ width: '100%', marginTop: 10 }} onClick={onBack}>
        ← Change level
      </button>

      <style>{`
        .ap-badge {
          display: inline-block; font-size: 0.7rem; font-family: var(--mono);
          letter-spacing: 1px; font-weight: 700; padding: 5px 12px;
          border: 1px solid; border-radius: 20px; margin-bottom: 28px;
        }
        .ap-steps { display: flex; flex-direction: column; }
        .ap-step  { display: flex; gap: 16px; }
        .ap-step-left { display: flex; flex-direction: column; align-items: center; min-width: 32px; }
        .ap-step-num {
          width: 32px; height: 32px; border-radius: 50%; border: 1px solid;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--mono); font-size: 0.78rem; font-weight: 700;
          flex-shrink: 0; background: rgba(0,0,0,0.4);
        }
        .ap-step-line  { flex: 1; width: 1px; background: var(--border); margin: 4px 0; min-height: 20px; }
        .ap-step-body  { padding-bottom: 24px; flex: 1; }
        .ap-step-type  { font-size: 0.68rem; font-family: var(--mono); font-weight: 700; letter-spacing: 1px; margin-bottom: 4px; }
        .ap-step-title { font-size: 0.95rem; font-weight: 600; color: var(--text); margin-bottom: 4px; }
        .ap-step-desc  { font-size: 0.82rem; color: var(--muted); line-height: 1.5; margin-bottom: 4px; }
        .ap-step-dur   { font-size: 0.72rem; color: var(--muted); font-family: var(--mono); }
      `}</style>
    </div>
  );
}