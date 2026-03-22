'use client';

import { useState } from 'react';
import type { TrackKey } from './data';

export type Step = 1 | 2 | 3 | 4 | 5 | 6;

export interface AppState {
  step: Step;
  selCat: string | null;
  selTrack: TrackKey | null;
  poolEntry: number | null;
  doneSteps: Set<number>;
  totalResources: number;
  githubUrl: string;
  walletAddress: string;
}

const initialState: AppState = {
  step: 1,
  selCat: null,
  selTrack: null,
  poolEntry: null,
  doneSteps: new Set(),
  totalResources: 0,
  githubUrl: '',
  walletAddress: '',
};

export function useAppState() {
  const [state, setState] = useState<AppState>(initialState);

  const goTo = (step: Step) => {
    setState(s => ({ ...s, step }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pickCat = (cat: string) => {
    setState(s => ({ ...s, selCat: cat }));
  };

  const pickTrack = (track: TrackKey, totalResources: number) => {
    setState(s => ({
      ...s,
      selTrack: track,
      totalResources,
      doneSteps: new Set(),
    }));
  };

  const markStepDone = (i: number) => {
    setState(s => {
      const next = new Set(s.doneSteps);
      next.add(i);
      return { ...s, doneSteps: next };
    });
  };

  const selectPool = (amount: number) => {
    setState(s => ({ ...s, poolEntry: amount }));
  };

  const setGithubUrl = (url: string) => {
    setState(s => ({ ...s, githubUrl: url }));
  };

  const setWalletAddress = (addr: string) => {
    setState(s => ({ ...s, walletAddress: addr }));
  };

  const restart = () => {
    setState(initialState);
  };

  const isFormValid =
    state.githubUrl.includes('github.com') &&
    state.walletAddress.startsWith('0x') &&
    state.walletAddress.length >= 10;

  const allStepsDone =
    state.totalResources > 0 && state.doneSteps.size >= state.totalResources;

  return {
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
  };
}