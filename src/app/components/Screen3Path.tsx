'use client';

import { useState } from 'react';
import { PATHS, TrackKey } from '@/lib/data';

interface Screen3Props {
  selTrack: TrackKey;
  doneSteps: Set<number>;
  allStepsDone: boolean;
  onMarkDone: (i: number) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Screen3({
  selTrack,
  doneSteps,
  allStepsDone,
  onMarkDone,
  onNext,
  onBack,
}: Screen3Props) {
  const data = PATHS[selTrack];
  const [openSteps, setOpenSteps] = useState<Set<number>>(new Set([0]));

  const toggleStep = (i: number) => {
    setOpenSteps(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const handleMarkDone = (i: number) => {
    onMarkDone(i);
    // auto-open next step
    setOpenSteps(prev => {
      const next = new Set(prev);
      next.add(i + 1);
      return next;
    });
  };

  return (
    <div className="screen on">
      <p className="ey">step 03 — your learning path</p>
      <h1>Your <em>curated path</em></h1>
      <p className="lead">
        Your {data.label} learning path. Complete all resources to unlock your proof task.
      </p>

      <div className="path-intro">
        <b>AI-curated for your track.</b> Each resource was selected because it directly
        prepares you for your proof task. Complete them in order — mark each one done as you finish.
      </div>

      <div className="path-steps">
        {data.resources.map((r, i) => (
          <div
            key={i}
            className={`path-step ${doneSteps.has(i) ? 'done-step' : ''}`}
          >
            <div className="ps-head" onClick={() => toggleStep(i)}>
              <div className="ps-num">{doneSteps.has(i) ? '✓' : i + 1}</div>
              <div className="ps-info">
                <div className="ps-title">{r.title}</div>
                <div className="ps-meta">{r.type}</div>
              </div>
            </div>
            {openSteps.has(i) && (
              <div className="ps-body open">
                <p className="ps-desc">{r.desc}</p>
                <a className="ps-link" href={r.url} target="_blank" rel="noreferrer">
                  {r.linkLabel}
                </a>
                <br />
                {!doneSteps.has(i) && (
                  <button className="mark-done-btn undone" onClick={() => handleMarkDone(i)}>
                    Mark as done
                  </button>
                )}
                {doneSteps.has(i) && (
                  <button className="mark-done-btn" disabled>✓ Done</button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Task lock/unlock */}
      {!allStepsDone ? (
        <div className="task-locked">
          <div className="task-locked-ico">🔒</div>
          <p className="task-locked-text">
            Complete all resources above to unlock your task.
            <br />Your proof challenge will appear here.
          </p>
        </div>
      ) : (
        <div className="task-unlocked">
          <div className="tu-head">
            <span>✓ TASK UNLOCKED</span>
            <span className="chip chip-amber">{data.task.time}</span>
          </div>
          <div className="tu-body">
            <p className="tu-title">{data.task.title}</p>
            <div className="rubric">
              <div className="rrow"><span className="rlabel">Task requirements met</span><span className="rpct">40%</span></div>
              <div className="rrow"><span className="rlabel">Code structure &amp; cleanliness</span><span className="rpct">30%</span></div>
              <div className="rrow"><span className="rlabel">Responsiveness / correctness</span><span className="rpct">20%</span></div>
              <div className="rrow"><span className="rlabel">Bonus polish</span><span className="rpct">10%</span></div>
            </div>
          </div>
        </div>
      )}

      <div className="btn-row" style={{ marginTop: 20 }}>
        <button className="btn btn-ghost" onClick={onBack}>← Back</button>
        <button className="btn btn-main" disabled={!allStepsDone} onClick={onNext}>
          Submit my work →
        </button>
      </div>
    </div>
  );
}
