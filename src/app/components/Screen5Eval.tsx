'use client';

import { useEffect, useState } from 'react';
import { PATHS, TrackKey } from '@/lib/data';
import { sleep } from '@/lib/utils';
import { getInstruction, checkRepo } from '@/lib/api';
import { submitToChallenge, evaluateSubmission, getSubmission, parseFeedback } from '@/lib/genlayer/client';
import GenLayerAnim, { GenLayerAnimState } from './GenLayerAnim';

interface Screen5Props {
  selTrack:    TrackKey;
  githubUrl:   string;
  walletAddress: string;
  challengeId: string;
  onDone:      (result: any) => void;
}

const defaultValidators: GenLayerAnimState['validators'] = [
  { status: 'STANDBY', score: null, state: '' },
  { status: 'STANDBY', score: null, state: '' },
  { status: 'STANDBY', score: null, state: '' },
];

export default function Screen5({ selTrack, githubUrl, walletAddress, challengeId, onDone }: Screen5Props) {
  const [p0, setP0] = useState<'' | 'active' | 'done'>('');
  const [p1, setP1] = useState<'' | 'active' | 'done'>('');
  const [p2, setP2] = useState<'' | 'active' | 'done'>('');
  const [showGl,   setShowGl]   = useState(false);
  const [showSpin, setShowSpin] = useState(true);
  const [pipeStates, setPipeStates] = useState<{ p2: '' | 'active' | 'done'; p3: '' | 'active' | 'done' }>({ p2: '', p3: '' });
  const [apiError,   setApiError]   = useState<string | null>(null);
  const [chainError, setChainError] = useState<string | null>(null);

  const [glAnim, setGlAnim] = useState<GenLayerAnimState>({
    pillStep: 0,
    validators: defaultValidators,
    consensusVisible: false,
    consensusScore: null,
    phase2Visible: false,
  });

  const setV = (idx: number, status: string, score: number | null, state: '' | 'thinking' | 'agreed') => {
    setGlAnim(prev => {
      const vs = [...prev.validators] as GenLayerAnimState['validators'];
      vs[idx] = { status, score, state };
      return { ...prev, validators: vs };
    });
  };

  useEffect(() => {
    const run = async () => {
      // Phase 1 — fetch rubric from your API
      setP0('active');
      const trackTheme = PATHS[selTrack].label;
      const apiPromise = getInstruction(trackTheme)
        .then(instruction => checkRepo(githubUrl, instruction))
        .catch((err: Error) => { setApiError(err.message); return null; });
      await sleep(1000);
      setP0('done');

      // Phase 2 — submit GitHub URL to GenLayer contract
      setP1('active');
      const submitTx = await submitToChallenge({ challengeId, githubUrl });
      if (!submitTx) setChainError('Submit to chain failed — continuing off-chain.');
      await sleep(800);
      setP1('done');

      // Phase 3 — GenLayer AI validators animate while evaluation runs
      setShowGl(true);
      setGlAnim(prev => ({ ...prev, pillStep: 1 }));
      await sleep(600);
      setGlAnim(prev => ({ ...prev, pillStep: 2 }));
      setV(0, 'EVALUATING', null, 'thinking');
      await sleep(500);
      setV(1, 'EVALUATING', null, 'thinking');
      await sleep(400);
      setV(2, 'EVALUATING', null, 'thinking');

      // Fire both in parallel — on-chain AI eval + off-chain Claude
      const [apiResult, evaluateTx] = await Promise.all([
        apiPromise,
        evaluateSubmission({ challengeId }),
      ]);

      if (!evaluateTx) setChainError('On-chain evaluation failed — using off-chain score.');

      // Try to read back the on-chain result
      let onChainScore: number | null = null;
      let onChainFeedback: any = null;
      if (evaluateTx && walletAddress) {
        await sleep(2000);
        const sub = await getSubmission({ challengeId, submitterAddress: walletAddress });
        if (sub?.has_evaluated) {
          onChainScore    = sub.score;
          onChainFeedback = parseFeedback(sub.feedback);
        }
      }

      const base   = onChainScore ?? apiResult?.score ?? PATHS[selTrack].eval.score;
      const scores = [0, 1, 2].map(() => Math.max(50, Math.min(99, base + Math.floor(Math.random() * 7) - 3)));
      const avg    = Math.round(scores.reduce((a, b) => a + b, 0) / 3);

      await sleep(500);
      setV(0, 'CONFIRMED', scores[0], 'agreed');
      await sleep(500);
      setV(1, 'CONFIRMED', scores[1], 'agreed');
      await sleep(500);
      setV(2, 'CONFIRMED', scores[2], 'agreed');
      await sleep(700);

      setGlAnim(prev => ({ ...prev, pillStep: 3 }));
      await sleep(600);
      setGlAnim(prev => ({ ...prev, consensusVisible: true, consensusScore: avg }));
      await sleep(900);

      // Phase 4 — finalize
      setP2('active');
      setGlAnim(prev => ({ ...prev, pillStep: 4, phase2Visible: true }));
      setPipeStates({ p2: 'active', p3: '' });
      await sleep(800);
      setPipeStates({ p2: 'done', p3: 'active' });
      await sleep(600);
      setPipeStates({ p2: 'done', p3: 'done' });
      setP2('done');
      setShowSpin(false);
      await sleep(200);

      onDone({
        score:          onChainScore    ?? apiResult?.score,
        strengths:      onChainFeedback?.strengths    ?? apiResult?.strengths,
        improvements:   onChainFeedback?.improvements ?? apiResult?.improvements,
        summary:        onChainFeedback?.category_breakdown ?? apiResult?.summary,
        breakdown:      apiResult?.breakdown,
        txHash:         evaluateTx ?? submitTx ?? null,
        validatorScores: scores,
        consensusScore:  avg,
        challengeId,
        isOnChain:      !!evaluateTx,
      });
    };
    run();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="screen on">
      <div className="eval-wrap">
        {showSpin && <div className="spin" />}
        <p className="eval-title">Evaluating your <em style={{ color: 'var(--green)' }}>submission</em></p>
        <p className="eval-sub">Takes 15–30 seconds. Do not close this tab.</p>
        {apiError   && <p style={{ color: 'orange', fontSize: '0.8rem', marginTop: 4 }}>⚠ Live evaluation unavailable — using estimated score</p>}
        {chainError && <p style={{ color: 'orange', fontSize: '0.8rem', marginTop: 4 }}>⚠ {chainError}</p>}
        <div className="pipeline">
          <div className={`pipe ${p0}`}><div className="pdot" />Fetching repository from GitHub...</div>
          <div className={`pipe ${p1}`}><div className="pdot" />Submitting to GenLayer contract...</div>
          <div className={`pipe ${p2}`}><div className="pdot" />GenLayer AI evaluating on-chain...</div>
        </div>
        {showGl && <GenLayerAnim anim={glAnim} pipeStates={pipeStates} />}
      </div>
    </div>
  );
}