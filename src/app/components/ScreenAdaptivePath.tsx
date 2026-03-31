'use client';

type Level = 'beginner' | 'intermediate' | 'advanced';

interface ScreenAdaptivePathProps {
  category: string;
  level:    Level;
  onProve:  () => void;
  onBack:   () => void;
}

interface PathStep {
  title:    string;
  desc:     string;
  duration: string;
  type:     'read' | 'build' | 'prove';
}

const PATHS: Record<Level, PathStep[]> = {
  beginner: [
    { type: 'read',  title: 'Core Concepts',          desc: 'Learn the fundamental building blocks of the track.',     duration: '~30 min' },
    { type: 'build', title: 'Guided Mini-Project',     desc: 'Build a small project with step-by-step instructions.',   duration: '~1 hr'   },
    { type: 'read',  title: 'Best Practices',          desc: 'Review code quality, structure, and common patterns.',    duration: '~20 min' },
    { type: 'build', title: 'Independent Challenge',   desc: 'Apply what you\'ve learned in a solo build.',             duration: '~2 hrs'  },
    { type: 'prove', title: 'Submit & Get Verified',   desc: 'Push to GitHub and earn your on-chain Proof badge.',      duration: '~10 min' },
  ],
  intermediate: [
    { type: 'read',  title: 'Advanced Patterns',       desc: 'Deepen your knowledge with real-world architecture.',    duration: '~20 min' },
    { type: 'build', title: 'Real-World Challenge',    desc: 'Build something production-grade from a brief.',          duration: '~3 hrs'  },
    { type: 'build', title: 'Code Review Simulation',  desc: 'Refactor and improve an existing broken codebase.',       duration: '~1 hr'   },
    { type: 'prove', title: 'Submit & Get Verified',   desc: 'Push to GitHub and earn your on-chain Proof badge.',      duration: '~10 min' },
  ],
  advanced: [
    { type: 'build', title: 'Expert-Level Challenge',  desc: 'Tackle a complex, open-ended engineering problem.',       duration: '~4 hrs'  },
    { type: 'build', title: 'Optimisation Round',      desc: 'Refine your solution for performance and reliability.',   duration: '~1 hr'   },
    { type: 'prove', title: 'Submit & Get Verified',   desc: 'Push to GitHub and earn your on-chain Proof badge.',      duration: '~10 min' },
  ],
};

const TYPE_META = {
  read:  { icon: '◎', label: 'READ',  color: '#60a5fa' },
  build: { icon: '⚡', label: 'BUILD', color: '#00e5a0' },
  prove: { icon: '⬡', label: 'PROVE', color: '#8a5cf6' },
};

const LEVEL_META: Record<Level, { label: string; color: string; tagline: string }> = {
  beginner:     { label: 'Beginner',     color: '#00e5a0', tagline: 'A step-by-step path designed to build solid foundations.' },
  intermediate: { label: 'Intermediate', color: '#f59e0b', tagline: 'A focused path that pushes you into real-world territory.'  },
  advanced:     { label: 'Advanced',     color: '#8a5cf6', tagline: 'A direct path to demonstrating expert-level skills.'         },
};

export default function ScreenAdaptivePath({ category, level, onProve, onBack }: ScreenAdaptivePathProps) {
  const steps = PATHS[level];
  const meta  = LEVEL_META[level];

  return (
    <div className="screen on">
      <button className="btn btn-ghost" style={{ marginBottom: 28 }} onClick={onBack}>← Back</button>
      <p className="ey">{category} · your adaptive path</p>
      <h1>Your <em style={{ color: meta.color }}>{meta.label}</em> path</h1>
      <p className="lead">{meta.tagline}</p>

      {/* Level badge */}
      <div className="ap-badge" style={{ borderColor: `${meta.color}44`, color: meta.color }}>
        ◎ {meta.label.toUpperCase()} · {steps.length} STEPS · {category.toUpperCase()}
      </div>

      {/* Steps */}
      <div className="ap-steps">
        {steps.map((s, i) => {
          const tm = TYPE_META[s.type];
          const isLast = i === steps.length - 1;
          return (
            <div key={i} className="ap-step">
              <div className="ap-step-left">
                <div className="ap-step-num" style={{ color: tm.color, borderColor: `${tm.color}55` }}>
                  {i + 1}
                </div>
                {!isLast && <div className="ap-step-line" />}
              </div>
              <div className="ap-step-body">
                <div className="ap-step-type" style={{ color: tm.color }}>
                  {tm.icon} {tm.label}
                </div>
                <div className="ap-step-title">{s.title}</div>
                <div className="ap-step-desc">{s.desc}</div>
                <div className="ap-step-dur">{s.duration}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info strip */}
      <div className="istrip" style={{ marginTop: 28 }}>
        <b>How it works:</b> Complete each step at your own pace. When you&apos;re ready, push your project to GitHub and submit it for AI evaluation and on-chain verification.
      </div>

      <button className="btn btn-main" style={{ width: '100%', marginTop: 24 }} onClick={onProve}>
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
        .ap-step { display: flex; gap: 16px; }
        .ap-step-left { display: flex; flex-direction: column; align-items: center; min-width: 32px; }
        .ap-step-num {
          width: 32px; height: 32px; border-radius: 50%; border: 1px solid;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--mono); font-size: 0.78rem; font-weight: 700;
          flex-shrink: 0; background: rgba(0,0,0,0.4);
        }
        .ap-step-line { flex: 1; width: 1px; background: var(--border); margin: 4px 0; min-height: 24px; }
        .ap-step-body { padding-bottom: 28px; flex: 1; }
        .ap-step-type { font-size: 0.68rem; font-family: var(--mono); font-weight: 700; letter-spacing: 1px; margin-bottom: 4px; }
        .ap-step-title { font-size: 0.95rem; font-weight: 600; color: var(--text); margin-bottom: 4px; }
        .ap-step-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.5; margin-bottom: 6px; }
        .ap-step-dur { font-size: 0.72rem; color: var(--muted); font-family: var(--mono); }
      `}</style>
    </div>
  );
}