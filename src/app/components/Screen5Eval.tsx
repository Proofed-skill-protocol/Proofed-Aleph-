'use client';

import { useEffect, useState } from 'react';
import { PATHS, TrackKey } from '@/lib/data';
import { sleep } from '@/lib/utils';
import { getInstruction, checkRepo } from '@/lib/api';       
import GenLayerAnim, { GenLayerAnimState } from './GenLayerAnim';

interface Screen5Props {
  selTrack: TrackKey;
  githubUrl: string;        
  onDone: (result: any) => void;
}

const defaultValidators: GenLayerAnimState['validators'] = [
  { status: 'STANDBY', score: null, state: '' },
  { status: 'STANDBY', score: null, state: '' },
  { status: 'STANDBY', score: null, state: '' },
];

export default function Screen5({ selTrack, githubUrl, onDone }: Screen5Props) {
  const [p0, setP0] = useState<'' | 'active' | 'done'>('');
  const [p1, setP1] = useState<'' | 'active' | 'done'>('');
  const [showGl, setShowGl] = useState(false);
  const [showSpin, setShowSpin] = useState(true);
  const [pipeStates, setPipeStates] = useState<{ p2: '' | 'active' | 'done'; p3: '' | 'active' | 'done' }>({ p2: '', p3: '' });
  const [apiError, setApiError] = useState<string | null>(null);   // ✅ ADD THIS

  const [glAnim, setGlAnim] = useState<GenLayerAnimState>({
    pillStep: 0,
    validators: defaultValidators,
    consensusVisible: false,
    consensusScore: null,
    phase2Visible: false,
  });

  const setV = (
    idx: number,
    status: string,
    score: number | null,
    state: '' | 'thinking' | 'agreed'
  ) => {
    setGlAnim(prev => {
      const vs = [...prev.validators] as GenLayerAnimState['validators'];
      vs[idx] = { status, score, state };
      return { ...prev, validators: vs };
    });
  };

  useEffect(() => {
    const run = async () => {
      // Phase 1
      setP0('active');

       const trackTheme = PATHS[selTrack].label; // use track name as theme
      
      const apiPromise = getInstruction(trackTheme)   // ← get rubric
        .then(instruction => checkRepo(githubUrl, instruction))  // ← evaluate repo
        .catch((err: Error) => {
          setApiError(err.message);
          return null;
        });

      // ✅ ADD THIS — storage variable
      let finalResult: any = null;

      await sleep(1000);
      setP0('done');

      // Phase 2
      setP1('active');
      await sleep(1400);
      setP1('done');

      // Phase 3 – GenLayer
      setShowGl(true);
      setGlAnim(prev => ({ ...prev, pillStep: 1 }));
      await sleep(600);

      setGlAnim(prev => ({ ...prev, pillStep: 2 }));
      setV(0, 'EVALUATING', null, 'thinking');
      await sleep(500);
      setV(1, 'EVALUATING', null, 'thinking');
      await sleep(400);
      setV(2, 'EVALUATING', null, 'thinking');

      // ✅ ADD THIS — await the result here (API has been running in background)
      const apiResult = await apiPromise;
      finalResult = apiResult;

      const base = finalResult?.score ?? PATHS[selTrack].eval.score;  // ✅ real score or fallback
      const scores = [0, 1, 2].map(() =>
        Math.max(50, Math.min(99, base + Math.floor(Math.random() * 7) - 3))
      );

      await sleep(500);
      setV(0, 'CONFIRMED', scores[0], 'agreed');
      await sleep(500);
      setV(1, 'CONFIRMED', scores[1], 'agreed');
      await sleep(500);
      setV(2, 'CONFIRMED', scores[2], 'agreed');
      await sleep(700);

      const avg = Math.round(scores.reduce((a, b) => a + b, 0) / 3);
      setGlAnim(prev => ({ ...prev, pillStep: 3 }));
      await sleep(600);
      setGlAnim(prev => ({ ...prev, consensusVisible: true, consensusScore: avg }));
      await sleep(900);

      // Phase 4
      setGlAnim(prev => ({ ...prev, pillStep: 4, phase2Visible: true }));
      setPipeStates({ p2: 'active', p3: '' });
      await sleep(1100);
      setPipeStates({ p2: 'done', p3: 'active' });
      await sleep(900);
      setPipeStates({ p2: 'done', p3: 'done' });

      setShowSpin(false);
      await sleep(200);
      onDone(finalResult);   
    };

    run();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="screen on">
      <div className="eval-wrap">
        {showSpin && <div className="spin" />}
        <p className="eval-title">
          Evaluating your <em style={{ color: 'var(--green)' }}>submission</em>
        </p>
        <p className="eval-sub">Takes 15–30 seconds. Do not close this tab.</p>

        {/* ✅ Show API error as a soft warning (doesn't block flow) */}
        {apiError && (
          <p style={{ color: 'orange', fontSize: '0.8rem', marginTop: 4 }}>
            ⚠ Live evaluation unavailable — using estimated score
          </p>
        )}

        <div className="pipeline">
          <div className={`pipe ${p0}`}><div className="pdot" />Fetching repository from GitHub...</div>
          <div className={`pipe ${p1}`}><div className="pdot" />Claude AI evaluating against rubric...</div>
        </div>

        {showGl && <GenLayerAnim anim={glAnim} pipeStates={pipeStates} />}
      </div>
    </div>
  );
}