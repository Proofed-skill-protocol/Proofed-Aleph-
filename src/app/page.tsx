'use client';

import { useState, useCallback } from 'react';
import { useAppState } from '@/lib/useAppState';
import { TrackKey } from '@/lib/data';

import { checkRepo } from '@/lib/api';

import Topbar from './components/Topbar';
import StepBar from './components/StepBar';
import Toast from './components/Toast';
import Screen1Category from './components/Screen1Category';
import Screen2Track from './components/Screen2Track';
import Screen3Path from './components/Screen3Path';
import Screen4Submit from './components/Screen4Submit';
import Screen5Eval from './components/Screen5Eval';
import Screen6Results from './components/Screen6Results';

export default function Home() {
  const {
    state,
    goTo,
    pickCat,
    pickTrack,
    markStepDone,
    selectPool,
    setGithubUrl,
    setWalletAddress,
    restart,
    isFormValid,
    allStepsDone,
  } = useAppState();

  const [toastMsg, setToastMsg] = useState<string | null>(null);
  // ✅ ADD THESE TWO
  const [evalResult, setEvalResult] = useState<any>(null);
  const [evalLoading, setEvalLoading] = useState(false);

  const showToast = useCallback((msg: string) => setToastMsg(msg), []);
  const clearToast = useCallback(() => setToastMsg(null), []);


  const handleEval = useCallback(async () => {
    if (!state.githubUrl) return;
    setEvalLoading(true);
    try {
      const result = await checkRepo(state.githubUrl);
      setEvalResult(result);
      goTo(6);
      showToast('✓ Proof-of-Skill minted on Avalanche Fuji');
    } catch (err: any) {
      showToast('❌ Evaluation failed: ' + err.message);
    } finally {
      setEvalLoading(false);
    }
  }, [state.githubUrl, goTo, showToast]);

  return (
    <>
      <div className="shell">
        <Topbar />
        <StepBar current={state.step} />

        {state.step === 1 && (
          <Screen1Category
            selCat={state.selCat}
            onPickCat={pickCat}
            onNext={() => goTo(2)}
          />
        )}

        {state.step === 2 && (
          <Screen2Track
            selTrack={state.selTrack}
            onPickTrack={(track: TrackKey, total: number) => pickTrack(track, total)}
            onNext={() => goTo(3)}
            onBack={() => goTo(1)}
          />
        )}

        {state.step === 3 && state.selTrack && (
          <Screen3Path
            selTrack={state.selTrack}
            doneSteps={state.doneSteps}
            allStepsDone={allStepsDone}
            onMarkDone={markStepDone}
            onNext={() => goTo(4)}
            onBack={() => goTo(2)}
          />
        )}

        {state.step === 4 && (
          <Screen4Submit
            poolEntry={state.poolEntry}
            githubUrl={state.githubUrl}
            walletAddress={state.walletAddress}
            isFormValid={isFormValid}
            onSelectPool={selectPool}
            onGithubChange={setGithubUrl}
            onWalletChange={setWalletAddress}
            onSubmit={() => goTo(5)}
            onBack={() => goTo(3)}
          />
        )}

        {/* ✅ UPDATED — pass loading state and real handler */}
        {state.step === 5 && state.selTrack && (
         <Screen5Eval
          selTrack={state.selTrack}
          githubUrl={state.githubUrl}
          onDone={(result) => {        // ✅ receive result
          setEvalResult(result);     // ✅ store it
          goTo(6);
      showToast('✓ Proof-of-Skill minted on Avalanche Fuji');
    }}
  />
)}

        {/* ✅ UPDATED — pass evalResult to Screen6 */}
        {state.step === 6 && state.selTrack && (
          <Screen6Results
            selTrack={state.selTrack}
            walletAddress={state.walletAddress}
            poolEntry={state.poolEntry}
            evalResult={evalResult}
            onRestart={restart}
            onToast={showToast}
          />
        )}
      </div>

      <Toast message={toastMsg} onDone={clearToast} />
    </>
  );
}