'use client';

import { useState } from 'react';
import { PATHS } from '@/lib/data';

type Level = 'beginner' | 'intermediate' | 'advanced';

interface ScreenCourseProps {
  category: string;
  level:    Level;
  onSubmit: () => void;
  onBack:   () => void;
}

const TYPE_COLOR: Record<string, string> = {
  ARTICLE:  '#60a5fa',
  VIDEO:    '#f59e0b',
  TUTORIAL: 'var(--green)',
  TASK:     'var(--purple, #8a5cf6)',
};

export default function ScreenCourse({ category, level, onSubmit, onBack }: ScreenCourseProps) {
  // Map category to the closest track key
  const trackKey =
    category?.toLowerCase().includes('contract') ? 'smartcontracts' :
    category?.toLowerCase().includes('backend')  ? 'backend' :
    category?.toLowerCase().includes('front')    ? 'frontend' :
    'smartcontracts'; // default for 'tech'

  const track = PATHS[trackKey as keyof typeof PATHS] ?? PATHS.smartcontracts;

  // Build steps from real resources + the task
  const resourceSteps = track.resources.map(r => ({
    type:     r.type.split('·')[0].trim().toUpperCase(),
    title:    r.title,
    desc:     r.desc,
    dur:      r.type.includes('·') ? r.type.split('·')[1]?.trim() : '',
    url:      r.url,
    linkLabel: r.linkLabel,
  }));

  const taskStep = {
    type:      'TASK',
    title:     'Build the project',
    desc:      track.task.title,
    dur:       track.task.time,
    url:       '',
    linkLabel: '',
  };

  const allSteps = [...resourceSteps, taskStep];

  const [checked, setChecked] = useState<boolean[]>(allSteps.map(() => false));
  const [expanded, setExpanded] = useState<boolean[]>(allSteps.map((_, i) => i === 0));

  const toggle = (i: number) => {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
  };

  const toggleExpand = (i: number) => {
  // Can only open step i if all previous steps are checked
  if (i > 0 && !checked[i - 1]) return;
  const next = [...expanded];
  next[i] = !next[i];
  setExpanded(next);
};

  const doneCount = checked.filter(Boolean).length;
  const allDone   = checked.every(Boolean);

  return (
    <div className="screen on">
      <button className="btn btn-ghost" style={{ marginBottom: 28 }} onClick={onBack}>← Back</button>

      <p className="ey">{track.label} · {level} path</p>
      <h1>Your learning <em>path</em></h1>
      <p className="lead">{track.lead}</p>

      {/* Progress bar */}
      <div className="cs-prog-wrap">
        <div className="cs-prog-bar" style={{ width: `${(doneCount / allSteps.length) * 100}%` }} />
      </div>
      <div className="cs-prog-label">{doneCount} / {allSteps.length} steps complete</div>

      {/* Steps */}
      <div className="cs-steps">
        {allSteps.map((s, i) => {
          const color   = TYPE_COLOR[s.type] ?? 'var(--muted)';
          const isDone  = checked[i];
          const isOpen  = expanded[i];
          const isTask  = s.type === 'TASK';

          return (
            <div key={i} className={`cs-step ${isDone ? 'cs-step-done' : ''}`}>
              {/* Header row */}
              <div
                    className="cs-step-header"
                    onClick={() => toggleExpand(i)}
                     style={{ opacity: i > 0 && !checked[i - 1] ? 0.4 : 1, cursor: i > 0 && !checked[i - 1] ? 'not-allowed' : 'pointer' }}
                >
                <div
                  className="cs-checkbox"
                  style={{
                    borderColor: isDone ? 'var(--green)' : 'var(--border)',
                    background:  isDone ? 'var(--green)' : 'transparent',
                  }}
                  onClick={e => { e.stopPropagation(); toggle(i); }}
                >
                  {isDone && <span className="cs-check">✓</span>}
                </div>

                <div className="cs-step-meta">
                  <div className="cs-step-type" style={{ color }}>{s.type}</div>
                  <div
                    className="cs-step-title"
                    style={{
                      color:          isDone ? 'var(--muted)' : 'var(--text)',
                      textDecoration: isDone ? 'line-through' : 'none',
                    }}
                  >
                    {s.title}
                  </div>
                  {s.dur && <div className="cs-step-dur">{s.dur}</div>}
                </div>

                <div className="cs-chevron">{isOpen ? '▲' : '▼'}</div>
              </div>

              {/* Expanded content */}
              {isOpen && (
                <div className="cs-step-body">
                  <p className="cs-step-desc">{s.desc}</p>

                  {s.url && (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="cs-resource-link"
                    >
                      {s.linkLabel || '→ Open resource'}
                    </a>
                  )}

                  {isTask && (
                    <div className="cs-task-box">
                      <div className="cs-task-label">⬡ Your task</div>
                      <p className="cs-task-desc">{s.desc}</p>
                    </div>
                  )}

                  <button
                    className={`btn ${isDone ? 'btn-ghost' : 'btn-main'}`}
                    style={{ marginTop: 12, fontSize: '0.82rem', padding: '8px 16px' }}
                    onClick={() => toggle(i)}
                  >
                    {isDone ? '✓ Mark as incomplete' : '✓ Mark as done'}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Status strip */}
      {!allDone && (
        <div className="istrip" style={{ marginTop: 20 }}>
          Complete all steps above, then submit your project for on-chain verification.
        </div>
      )}
      {allDone && (
        <div className="istrip" style={{ marginTop: 20, borderColor: 'var(--green)', color: 'var(--green)' }}>
          ✓ All steps complete — you&apos;re ready to submit your project for verification!
        </div>
      )}

      <button
        className="btn btn-main"
        style={{ width: '100%', marginTop: 20, opacity: allDone ? 1 : 0.45 }}
        disabled={!allDone}
        onClick={() => allDone && onSubmit()}
      >
        Submit for proof →
      </button>

      <style>{`
        .cs-prog-wrap  { height: 3px; background: var(--border); border-radius: 2px; margin-bottom: 6px; }
        .cs-prog-bar   { height: 3px; background: var(--green); border-radius: 2px; transition: width 0.3s; }
        .cs-prog-label { font-size: 0.72rem; color: var(--muted); font-family: var(--mono); margin-bottom: 24px; }
        .cs-steps      { display: flex; flex-direction: column; gap: 0; }
        .cs-step       { border-bottom: 1px solid var(--border); }
        .cs-step:first-child { border-top: 1px solid var(--border); }
        .cs-step-header {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 0; cursor: pointer;
          transition: background 0.15s;
        }
        .cs-step-header:hover { background: rgba(255,255,255,0.02); }
        .cs-checkbox {
          width: 20px; height: 20px; border-radius: 4px; border: 1px solid;
          flex-shrink: 0; display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, border-color 0.2s; cursor: pointer;
        }
        .cs-check      { font-size: 0.7rem; color: #000; font-weight: 700; }
        .cs-step-meta  { flex: 1; display: flex; flex-direction: column; gap: 2px; }
        .cs-step-type  { font-size: 0.65rem; font-family: var(--mono); font-weight: 700; letter-spacing: 1px; }
        .cs-step-title { font-size: 0.9rem; font-weight: 600; transition: color 0.2s; }
        .cs-step-dur   { font-size: 0.7rem; color: var(--muted); font-family: var(--mono); }
        .cs-chevron    { font-size: 0.6rem; color: var(--muted); }
        .cs-step-body  { padding: 0 0 16px 34px; display: flex; flex-direction: column; gap: 10px; }
        .cs-step-desc  { font-size: 0.83rem; color: var(--muted); line-height: 1.6; margin: 0; }
        .cs-resource-link {
          display: inline-block; font-size: 0.82rem; color: var(--green);
          font-family: var(--mono); text-decoration: none; padding: 6px 12px;
          border: 1px solid rgba(0,229,160,0.3); border-radius: 6px;
          transition: background 0.15s;
        }
        .cs-resource-link:hover { background: rgba(0,229,160,0.06); }
        .cs-task-box {
          background: rgba(138,92,246,0.06); border: 1px solid rgba(138,92,246,0.2);
          border-radius: 8px; padding: 14px 16px;
        }
        .cs-task-label { font-size: 0.72rem; font-weight: 700; color: var(--purple, #8a5cf6); margin-bottom: 6px; letter-spacing: 1px; font-family: var(--mono); }
        .cs-task-desc  { font-size: 0.83rem; color: var(--text); line-height: 1.6; margin: 0; }
      `}</style>
    </div>
  );
}