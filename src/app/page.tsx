'use client';
// src/app/page.tsx — Clean orchestrator, all UI split into components

import { useState, useEffect } from 'react';
import { buildLeaderboard, RewardEntry } from '@/lib/rewardSplit';
import { GoalKey } from '@/lib/tasks';
import type { EvaluationResult } from './api/evaluate/route';

import Topbar from '@/components/Topbar';
import ProgressBar from '@/components/ProgressBar';
import GoalScreen from '@/components/GoalScreen';
import TaskScreen from '@/components/TaskScreen';
import SubmitScreen from '@/components/SubmitScreen';
import EvaluatingScreen from '@/components/EvaluatingScreen';
import ResultsScreen from '@/components/ResultsScreen';

type Screen = 'goal' | 'task' | 'submit' | 'evaluating' | 'results';
const SCREEN_IDX: Record<Screen, number> = {
  goal: 0, task: 1, submit: 2, evaluating: 3, results: 5,
};

export default function Home() {
  const [screen, setScreen] = useState<Screen>('goal');
  const [goal, setGoal] = useState<GoalKey | null>(null);
  const [githubUrl, setGithubUrl] = useState('');
  const [wallet, setWallet] = useState('');
  const [pipeStep, setPipeStep] = useState(-1);
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const [leaderboard, setLeaderboard] = useState<RewardEntry[]>([]);
  const [scoreDisplay, setScoreDisplay] = useState(0);
  const [urlError, setUrlError] = useState('');
  const [walletError, setWalletError] = useState('');
  const [apiError, setApiError] = useState('');

  const formValid =
    githubUrl.startsWith('https://github.com/') &&
    wallet.startsWith('0x') &&
    wallet.length >= 10;

  useEffect(() => {
    if (!result) return;
    let c = 0;
    const iv = setInterval(() => {
      c = Math.min(c + 2, result.score);
      setScoreDisplay(c);
      if (c >= result.score) clearInterval(iv);
    }, 18);
    return () => clearInterval(iv);
  }, [result]);

  function handleUrlChange(val: string) {
    setGithubUrl(val);
    if (!val) return setUrlError('');
    if (!val.startsWith('https://github.com/')) {
      setUrlError('Must be a valid GitHub URL — https://github.com/username/repo');
    } else {
      setUrlError('');
    }
  }

  function handleWalletChange(val: string) {
    setWallet(val);
    if (!val) return setWalletError('');
    if (!val.startsWith('0x') || val.length < 10) {
      setWalletError('Must be a valid Ethereum wallet address starting with 0x');
    } else {
      setWalletError('');
    }
  }

  async function runEvaluation() {
    setScreen('evaluating');
    setApiError('');
    setPipeStep(0);

    const delays = [900, 1400, 1800, 1100, 900];
    let t = 0;
    delays.forEach((d, i) => {
      t += d;
      setTimeout(() => setPipeStep(i + 1), t);
    });

    try {
      const res = await fetch('/api/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ githubUrl, goal }),
      });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data: EvaluationResult = await res.json();
      if (!data?.score) throw new Error('Invalid response');

      const totalDelay = delays.reduce((a, b) => a + b, 0) + 600;
      setTimeout(() => {
        setResult(data);
        setLeaderboard(buildLeaderboard(wallet, data.score));
        setScoreDisplay(0);
        setScreen('results');
      }, totalDelay);
    } catch {
      setApiError('Evaluation failed. Please check your GitHub URL and try again.');
      setScreen('submit');
    }
  }

  function restart() {
    setGoal(null); setGithubUrl(''); setWallet('');
    setResult(null); setLeaderboard([]); setScoreDisplay(0);
    setPipeStep(-1); setApiError(''); setUrlError(''); setWalletError('');
    setScreen('goal');
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Topbar />
      <ProgressBar current={SCREEN_IDX[screen]} />
      <main style={{ maxWidth: 760, margin: '0 auto', padding: '36px 32px 80px' }}>
        {screen === 'goal' && (
          <GoalScreen goal={goal} onSelect={setGoal} onNext={() => setScreen('task')} />
        )}
        {screen === 'task' && goal && (
          <TaskScreen goal={goal} onBack={() => setScreen('goal')} onNext={() => setScreen('submit')} />
        )}
        {screen === 'submit' && (
          <SubmitScreen
            githubUrl={githubUrl} wallet={wallet}
            urlError={urlError} walletError={walletError} apiError={apiError}
            formValid={formValid}
            onUrlChange={handleUrlChange} onWalletChange={handleWalletChange}
            onBack={() => setScreen('task')} onSubmit={runEvaluation}
          />
        )}
        {screen === 'evaluating' && <EvaluatingScreen pipeStep={pipeStep} />}
        {screen === 'results' && result && goal && (
          <ResultsScreen
            result={result} leaderboard={leaderboard}
            scoreDisplay={scoreDisplay} goal={goal} onRestart={restart}
          />
        )}
      </main>
    </div>
  );
}