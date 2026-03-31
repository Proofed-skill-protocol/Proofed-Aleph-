'use client';

import { useState } from 'react';

type Level = 'beginner' | 'intermediate' | 'advanced';

interface ScreenCourseProps {
  category: string;
  level:    Level;
  onSubmit: () => void;
  onBack:   () => void;
}

interface CourseStep {
  type:  'READ' | 'BUILD' | 'PROVE';
  title: string;
  desc:  string;
  dur:   string;
}

const TYPE_COLOR: Record<string, string> = {
  READ:  '#60a5fa',
  BUILD: 'var(--green)',
  PROVE: 'var(--purple, #8a5cf6)',
};

const COURSES: Record<Level, CourseStep[]> = {
  beginner: [
    { type: 'READ',  title: 'Core concepts',         desc: 'Read through the fundamentals of the track.',              dur: '~30 min' },
    { type: 'BUILD', title: 'Guided mini-project',   desc: 'Follow the step-by-step instructions to build the project.', dur: '~1 hr'   },
    { type: 'READ',  title: 'Best practices',         desc: 'Review code quality patterns and common pitfalls.',        dur: '~20 min' },
    { type: 'BUILD', title: 'Independent challenge',  desc: 'Build the final project on your own using what you\'ve learned.',  dur: '~2 hrs'},
  ],
  intermediate: [
    { type: 'READ',  title: 'Advanced patterns',      desc: 'Study real-world architecture and system design.',         dur: '~20 min' },
    { type: 'BUILD', title: 'Production challenge',   desc: 'Build a production-grade project from the brief.',         dur: '~3 hrs'  },
    { type: 'BUILD', title: 'Code review simulation', desc: 'Identify and fix issues in a broken codebase.',            dur: '~1 hr'   },
  ],
  advanced: [
    { type: 'BUILD', title: 'Expert challenge',       desc: 'Tackle the open-ended engineering problem in the brief.',  dur: '~4 hrs'  },
    { type: 'BUILD', title: 'Optimisation round',     desc: 'Improve your solution for performance and edge cases.',    dur: '~1 hr'   },
  ],
};

export default function ScreenCourse({ category, level, onSubmit, onBack }: ScreenCourseProps) {
  const steps = COURSES[level];
  const [checked, setChecked] = useState<boolean[]>(steps.map(() => false));

  const toggle = (i: number) => {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
  };

  const allDone    = checked.every(Boolean);
  const doneCount  = checked.filter(Boolean).length;

  return (
    <div className="screen on">
      <button className="btn btn-ghost" style={{ marginBottom: 28 }} onClick={onBack}>← Back</button>
      <p className="ey">{category} · course</p>
      <h1>Complete the <em>steps</em></h1>
      <p className="lead">Tick each step once you&apos;ve done it. When all are complete, submit your project for verification.</p>

      {/* Progress */}
      <div className="cs-prog-wrap">
        <div className="cs-prog-bar" style={{ width: `${(doneCount / steps.length) * 100}%` }} />
      </div>
      <div className="cs-prog-label">{doneCount} / {steps.length} steps complete</div>

      {/* Steps */}
      <div className="cs-steps">
        {steps.map((s, i) => {
          const color = TYPE_COLOR[s.type];
          return (
            <div
              key={i}
              className={`cs-step ${checked[i] ? 'cs-step-done' : ''}`}
              onClick={() => toggle(i)}
            >
              <div className="cs-checkbox" style={{ borderColor: checked[i] ? 'var(--green)' : 'var(--border)', background: checked[i] ? 'var(--green)' : 'transparent' }}>
                {checked[i] && <span className="cs-check">✓</span>}
              </div>
              <div className="cs-step-body">
                <div className="cs-step-type" style={{ color }}>{s.type}</div>
                <div className="cs-step-title" style={{ color: checked[i] ? 'var(--muted)' : 'var(--text)', textDecoration: checked[i] ? 'line-through' : 'none' }}>
                  {s.title}
                </div>
                <div className="cs-step-desc">{s.desc}</div>
                <div className="cs-step-dur">{s.dur}</div>
              </div>
            </div>
          );
        })}
      </div>

      {!allDone && (
        <div className="istrip" style={{ marginTop: 16 }}>
          Tick each step above once you&apos;ve completed it, then submit for your on-chain proof.
        </div>
      )}

      {allDone && (
        <div className="istrip" style={{ marginTop: 16, borderColor: 'var(--green)', color: 'var(--green)' }}>
          ✓ All steps complete — you&apos;re ready to submit your project for verification.
        </div>
      )}

      <button
        className="btn btn-main"
        style={{ width: '100%', marginTop: 20, opacity: allDone ? 1 : 0.45, cursor: allDone ? 'pointer' : 'not-allowed' }}
        onClick={() => allDone && onSubmit()}
        disabled={!allDone}
      >
        Submit for proof →
      </button>

      <style>{`
        .cs-prog-wrap  { height: 3px; background: var(--border); border-radius: 2px; margin-bottom: 6px; }
        .cs-prog-bar   { height: 3px; background: var(--green); border-radius: 2px; transition: width 0.3s ease; }
        .cs-prog-label { font-size: 0.72rem; color: var(--muted); font-family: var(--mono); margin-bottom: 24px; }
        .cs-steps      { display: flex; flex-direction: column; gap: 2px; }
        .cs-step {
          display: flex; gap: 16px; padding: 18px 0;
          border-bottom: 1px solid var(--border); cursor: pointer;
          transition: background 0.15s; border-radius: 4px;
        }
        .cs-step:first-child { border-top: 1px solid var(--border); }
        .cs-step:hover { background: rgba(255,255,255,0.02); }
        .cs-checkbox {
          width: 20px; height: 20px; border-radius: 4px; border: 1px solid;
          flex-shrink: 0; margin-top: 2px; display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, border-color 0.2s;
        }
        .cs-check      { font-size: 0.7rem; color: #000; font-weight: 700; }
        .cs-step-body  { flex: 1; display: flex; flex-direction: column; gap: 3px; }
        .cs-step-type  { font-size: 0.65rem; font-family: var(--mono); font-weight: 700; letter-spacing: 1px; }
        .cs-step-title { font-size: 0.92rem; font-weight: 600; transition: color 0.2s; }
        .cs-step-desc  { font-size: 0.8rem; color: var(--muted); line-height: 1.5; }
        .cs-step-dur   { font-size: 0.7rem; color: var(--muted); font-family: var(--mono); }
      `}</style>
    </div>
  );
}