'use client';

import { useState, useEffect } from 'react';
import { PATHS, TrackKey } from '@/lib/data';
import type { Challenge } from '@/lib/genlayer/client';

interface CuratedData {
  resources: any[];
  challenge: Challenge;
}

interface Screen3Props {
  selTrack: TrackKey;
  doneSteps: Set<number>;
  onMarkDone: (i: number) => void;
  onNext: () => void;
  onBack: () => void;
  onCuratedChallenge: (challenge: Challenge) => void;
}

export default function Screen3({
  selTrack,
  doneSteps,
  onMarkDone,
  onNext,
  onBack,
  onCuratedChallenge,
}: Screen3Props) {
  const fallbackData = PATHS[selTrack];
  const [openSteps, setOpenSteps] = useState<Set<number>>(new Set([0]));
  const [curatedData, setCuratedData] = useState<CuratedData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/curate-path', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ track: selTrack })
    })
      .then(res => res.json())
      .then((data: CuratedData) => {
        setCuratedData(data);
        onCuratedChallenge(data.challenge);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [selTrack, onCuratedChallenge]);

  const toggleStep = (i: number) => {
    setOpenSteps(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const handleMarkDone = (i: number) => {
    onMarkDone(i);
    setOpenSteps(prev => {
      const next = new Set(prev);
      next.add(i + 1);
      return next;
    });
  };

  if (loading || !curatedData) {
    return (
      <div className="screen on">
         <p className="ey">AI Curation</p>
         <h1>Generating your <em>personalized path</em>...</h1>
         <div className="spin" style={{ margin: '40px auto' }} />
         <p style={{ textAlign: 'center', color: 'var(--muted)' }}>This takes a few seconds.</p>
      </div>
    );
  }

  const resources = curatedData.resources || fallbackData.resources;
  const challenge = curatedData.challenge;
  const isAllDone = resources.length > 0 && doneSteps.size >= resources.length;

  return (
    <div className="screen on">
      <p className="ey">step 03 — your learning path</p>
      <h1>Your <em>curated path</em></h1>
      <p className="lead">
        Your dynamic {selTrack} learning path. Complete all resources to unlock your proof task.
      </p>

      <div className="path-intro">
        <b>AI-curated for your track.</b> Each resource was selected because it directly
        prepares you for your proof task. Complete them in order — mark each one done as you finish.
      </div>

      <div className="path-steps">
        {resources.map((r, i) => (
          <div key={i} className={`path-step ${doneSteps.has(i) ? 'done-step' : ''}`}>
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
      {!isAllDone ? (
        <div className="task-locked">
          <div className="task-locked-ico">🔒</div>
          <p className="task-locked-text">
            Complete all resources above to unlock your task.
            <br />Your personalized proof challenge will appear here.
          </p>
        </div>
      ) : (
        <div className="task-unlocked">
          <div className="tu-head">
            <span>✓ TASK UNLOCKED</span>
            <span className="chip chip-amber">24h Limit</span>
          </div>
          <div className="tu-body">
            <p className="tu-title">{challenge.title}</p>
            <p className="tu-desc" style={{fontSize: '0.85rem', color: 'var(--muted)', marginTop: '8px'}}>{challenge.description}</p>
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
        <button className="btn btn-main" disabled={!isAllDone} onClick={onNext}>
          Submit my work →
        </button>
      </div>
    </div>
  );
}
