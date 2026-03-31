'use client';

import { useState, useCallback } from 'react';
import { useAppState } from '@/lib/useAppState';
import { TrackKey } from '@/lib/data';
import type { Challenge } from '@/lib/genlayer/client';

import Topbar          from '../components/Topbar';
import StepBar         from '../components/StepBar';
import Toast           from '../components/Toast';
import Screen1Category from '../components/Screen1Category';
import Screen2Track    from '../components/Screen2Track';
import Screen3Path     from '../components/Screen3Path';
import Screen4Submit   from '../components/Screen4Submit';
import Screen5Eval     from '../components/Screen5Eval';
import Screen6Results  from '../components/Screen6Results';
import { useRouter } from 'next/navigation';

export default function BuilderPage() {
  const router = useRouter();

  const {
    state, isHydrated, goTo, pickCat, pickTrack, markStepDone,
    selectPool, setGithubUrl, setWalletAddress,
    restart, isFormValid, allStepsDone,
  } = useAppState();

  const [toastMsg,          setToastMsg]          = useState<string | null>(null);
  const [evalResult,        setEvalResult]        = useState<any>(null);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

  const showToast  = useCallback((msg: string) => setToastMsg(msg), []);
  const clearToast = useCallback(() => setToastMsg(null), []);

  const handleRestart = useCallback(() => {
    setEvalResult(null);
    setSelectedChallenge(null);
    restart();
    router.push('/');
  }, [restart, router]);

  // Prevent flashing default state before hydration
  if (!isHydrated) {
    return (
      <div className="shell" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="spin" />
        <style>{`.spin { width: 32px; height: 32px; border: 3px solid rgba(0,229,160,0.2); border-top-color: var(--green); border-radius: 50%; animation: spin 0.8s linear infinite; } @keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <>
      <div className="shell">
        <Topbar />
        <StepBar current={state.step} />
        {state.step === 1 && (<Screen1Category selCat={state.selCat} onPickCat={pickCat} onPickChallenge={(c) => setSelectedChallenge(c)} onNext={() => goTo(2)} />)}
        {state.step === 2 && (<Screen2Track selTrack={state.selTrack} onPickTrack={(track: TrackKey, total: number) => pickTrack(track, total)} onNext={() => goTo(3)} onBack={() => goTo(1)} />)}
        {state.step === 3 && state.selTrack && (<Screen3Path selTrack={state.selTrack} doneSteps={state.doneSteps} onMarkDone={markStepDone} onNext={() => goTo(4)} onBack={() => goTo(2)} onCuratedChallenge={(c) => setSelectedChallenge(c)} />)}
        {state.step === 4 && (<Screen4Submit poolEntry={state.poolEntry} githubUrl={state.githubUrl} walletAddress={state.walletAddress} isFormValid={isFormValid} onSelectPool={selectPool} onGithubChange={setGithubUrl} onWalletChange={setWalletAddress} onSubmit={() => goTo(5)} onBack={() => goTo(3)} />)}
        {state.step === 5 && state.selTrack && (
          <Screen5Eval selTrack={state.selTrack} githubUrl={state.githubUrl} walletAddress={state.walletAddress} challengeId={selectedChallenge?.id ?? 'default'} dynamicChallenge={selectedChallenge}
            onDone={(result) => { setEvalResult(result); goTo(6); showToast('✓ Proof-of-Skill verified on GenLayer'); }} />
        )}
        {state.step === 6 && state.selTrack && (
          <Screen6Results selTrack={state.selTrack} walletAddress={state.walletAddress} poolEntry={state.poolEntry} evalResult={evalResult} onRestart={handleRestart} onToast={showToast} />
        )}
      </div>
      <Toast message={toastMsg} onDone={clearToast} />
    </>
  );
}
