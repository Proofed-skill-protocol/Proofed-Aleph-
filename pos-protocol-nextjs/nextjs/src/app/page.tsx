'use client';
// src/app/page.tsx
// Full 5-screen MVP flow

import { useState, useEffect } from 'react';
import { buildLeaderboard, RewardEntry } from '@/lib/rewardSplit';
import type { EvaluationResult } from './api/evaluate/route';

// ── Task data ──────────────────────────────────────────────────────────────────
const TASKS = {
  frontend: {
    title: 'Build a responsive landing page with a fixed navbar, full-width hero section with headline + CTA button, and a 3-column features grid. Must work on mobile.',
    time: '2–3 hours',
    track: 'FRONTEND DEVELOPMENT',
    resource: 'Responsive Landing Page — Kevin Powell',
    resourceUrl: 'https://www.youtube.com/watch?v=p0bGHP-PXD4',
  },
  solidity: {
    title: 'Build an ERC-20 token with mint, burn, and transfer. Add an owner-only mint guard and emit custom events for every action.',
    time: '3–4 hours',
    track: 'SMART CONTRACT',
    resource: 'ERC-20 From Scratch — Patrick Collins',
    resourceUrl: 'https://www.youtube.com/watch?v=8rpir_ZSK1g',
  },
  api: {
    title: 'Build a REST API with GET/POST/PUT/DELETE /items endpoints, in-memory storage, input validation, and correct HTTP status codes.',
    time: '2–3 hours',
    track: 'BACKEND API',
    resource: 'REST API Tutorial — Traversy Media',
    resourceUrl: 'https://www.youtube.com/watch?v=l8WPWK9mS5M',
  },
  react: {
    title: 'Build a React todo app with add, complete, and delete. Use useState + useEffect. Persist to localStorage. Include all/active/done filter tabs.',
    time: '2–3 hours',
    track: 'REACT DEVELOPMENT',
    resource: 'React Hooks Crash Course — Fireship',
    resourceUrl: 'https://www.youtube.com/watch?v=TNhaISOUy6Q',
  },
} as const;

type GoalKey = keyof typeof TASKS;

type Screen = 'goal' | 'task' | 'submit' | 'evaluating' | 'results';

const PIPE_STEPS = [
  'Fetching repository from GitHub...',
  'Claude AI evaluating against rubric...',
  '3 GenLayer validators reaching consensus...',
  'Writing cryptographic proof to Avalanche...',
  'Minting Proof-of-Skill badge...',
];

// ── Component ──────────────────────────────────────────────────────────────────
export default function Home() {
  const [screen, setScreen] = useState<Screen>('goal');
  const [goal, setGoal] = useState<GoalKey | null>(null);
  const [githubUrl, setGithubUrl] = useState('');
  const [wallet, setWallet] = useState('');
  const [pipeStep, setPipeStep] = useState(-1);
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const [leaderboard, setLeaderboard] = useState<RewardEntry[]>([]);
  const [scoreDisplay, setScoreDisplay] = useState(0);

  const formValid = githubUrl.includes('github.com') && wallet.startsWith('0x') && wallet.length >= 10;

  // animate score counter
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

  async function runEvaluation() {
    setScreen('evaluating');
    setPipeStep(0);

    // Animate pipeline steps
    const delays = [900, 1400, 1800, 1100, 900];
    let t = 0;
    delays.forEach((d, i) => {
      t += d;
      setTimeout(() => setPipeStep(i + 1), t);
    });

    // Call API
    const res = await fetch('/api/evaluate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ githubUrl, goal }),
    });
    const data: EvaluationResult = await res.json();

    // Wait for pipeline animation to finish
    const totalDelay = delays.reduce((a, b) => a + b, 0) + 600;
    setTimeout(() => {
      setResult(data);
      setLeaderboard(buildLeaderboard(wallet, data.score));
      setScoreDisplay(0);
      setScreen('results');
    }, totalDelay);
  }

  function restart() {
    setGoal(null); setGithubUrl(''); setWallet('');
    setResult(null); setLeaderboard([]); setScoreDisplay(0); setPipeStep(-1);
    setScreen('goal');
  }

  const progressIdx = { goal: 0, task: 1, submit: 2, evaluating: 3, results: 4 };

  return (
    <main className="min-h-screen bg-[#05070A] text-[#EEF2FF]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
      <div className="max-w-2xl mx-auto px-5 pb-20">

        {/* topbar */}
        <div className="flex items-center justify-between py-5 border-b border-[#1E2535] mb-10">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#00E5A0]" style={{ clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)' }} />
            <span className="text-[#00E5A0] text-xs tracking-widest uppercase">PoS Protocol</span>
          </div>
          <span className="text-xs text-[#6B7A99] border border-[#1E2535] px-3 py-1 rounded-sm tracking-wider">
            BRADBURY TESTNET
          </span>
        </div>

        {/* progress */}
        <div className="flex gap-1 mb-10">
          {[0,1,2,3,4].map(i => (
            <div key={i} className={`flex-1 h-0.5 rounded transition-all duration-500 ${
              i < progressIdx[screen] ? 'bg-[#00E5A0]' :
              i === progressIdx[screen] ? 'bg-[#00E5A0] opacity-50' : 'bg-[#283044]'
            }`} />
          ))}
        </div>

        {/* ── SCREEN: GOAL ── */}
        {screen === 'goal' && (
          <div>
            <p className="text-xs text-[#6B7A99] tracking-widest uppercase mb-3">step 01 — select goal</p>
            <h1 className="text-4xl font-bold mb-3 leading-tight tracking-tight">
              What skill will you <span className="text-[#00E5A0]">prove?</span>
            </h1>
            <p className="text-sm text-[#6B7A99] mb-8 leading-relaxed">
              Pick a track. We generate a task, you build it, we verify it on-chain.
            </p>
            <div className="grid gap-2 mb-7">
              {(Object.entries(TASKS) as [GoalKey, typeof TASKS[GoalKey]][]).map(([key, t]) => (
                <button key={key} onClick={() => setGoal(key)}
                  className={`flex items-center gap-3 p-4 rounded border text-left transition-all ${
                    goal === key
                      ? 'border-[#00E5A0] bg-[rgba(0,229,160,0.07)]'
                      : 'border-[#283044] bg-[#0C1018] hover:border-[#00E5A0] hover:bg-[rgba(0,229,160,0.04)]'
                  }`}>
                  <div className="w-9 h-9 rounded bg-[#171D2B] flex items-center justify-center text-base flex-shrink-0">
                    {key === 'frontend' ? '🌐' : key === 'solidity' ? '📜' : key === 'api' ? '⚡' : '⚛️'}
                  </div>
                  <div>
                    <p className={`text-sm font-semibold mb-0.5 ${goal === key ? 'text-[#00E5A0]' : ''}`}>{t.track.replace(/_/g,' ')}</p>
                    <p className="text-xs text-[#6B7A99] tracking-wider">{key.toUpperCase()} TRACK</p>
                  </div>
                </button>
              ))}
            </div>
            <button disabled={!goal} onClick={() => setScreen('task')}
              className="w-full py-3 rounded bg-[#00E5A0] text-black font-bold text-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#00ffb0] transition-colors">
              Generate Task →
            </button>
          </div>
        )}

        {/* ── SCREEN: TASK ── */}
        {screen === 'task' && goal && (
          <div>
            <p className="text-xs text-[#6B7A99] tracking-widest uppercase mb-3">step 02 — your task</p>
            <h1 className="text-4xl font-bold mb-3 tracking-tight">Your <span className="text-[#00E5A0]">challenge</span></h1>
            <p className="text-sm text-[#6B7A99] mb-6 leading-relaxed">Complete this task and push your code to GitHub before submitting.</p>

            <div className="rounded border border-[#283044] overflow-hidden mb-6 bg-[#0C1018]">
              <div className="flex items-center justify-between px-5 py-3 bg-[#111620] border-b border-[#1E2535]">
                <span className="text-xs text-[#6B7A99] tracking-widest uppercase">Task Brief</span>
                <span className="text-xs text-[#F59E0B] border border-[rgba(245,158,11,0.3)] px-2 py-0.5 rounded-sm">⏱ {TASKS[goal].time}</span>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold leading-relaxed mb-5">{TASKS[goal].title}</p>
                <div className="mb-4">
                  {[['Task requirements met','40%'],['Code structure & cleanliness','30%'],['Responsiveness / correctness','20%'],['Bonus polish','10%']].map(([label, pct]) => (
                    <div key={label} className="flex justify-between items-center py-2 border-b border-[#1E2535] text-sm last:border-0">
                      <span className="text-[#6B7A99]">{label}</span>
                      <span className="text-[#00E5A0] text-xs">{pct}</span>
                    </div>
                  ))}
                </div>
                <a href={TASKS[goal].resourceUrl} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 p-3 bg-[#171D2B] border border-[#1E2535] rounded text-xs text-[#60A5FA] hover:border-[#60A5FA] transition-colors">
                  <span>📺</span><span>{TASKS[goal].resource}</span>
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setScreen('goal')} className="px-4 py-3 rounded border border-[#283044] text-[#6B7A99] text-sm hover:text-white transition-colors">← Back</button>
              <button onClick={() => setScreen('submit')} className="flex-1 py-3 rounded bg-[#00E5A0] text-black font-bold text-sm hover:bg-[#00ffb0] transition-colors">
                I built it, submit →
              </button>
            </div>
          </div>
        )}

        {/* ── SCREEN: SUBMIT ── */}
        {screen === 'submit' && (
          <div>
            <p className="text-xs text-[#6B7A99] tracking-widest uppercase mb-3">step 03 — submit work</p>
            <h1 className="text-4xl font-bold mb-3 tracking-tight">Submit your <span className="text-[#00E5A0]">GitHub link</span></h1>
            <p className="text-sm text-[#6B7A99] mb-6 leading-relaxed">
              Paste your repo URL. AI evaluates it, GenLayer validates, Avalanche stores the proof.
            </p>

            <div className="mb-4">
              <label className="block text-xs text-[#6B7A99] tracking-widest uppercase mb-2">Repository URL</label>
              <input value={githubUrl} onChange={e => setGithubUrl(e.target.value)}
                type="url" placeholder="https://github.com/username/repo"
                className="w-full bg-[#0C1018] border border-[#283044] rounded px-4 py-3 text-sm text-white placeholder-[#3D4A63] outline-none focus:border-[#00E5A0] transition-colors" />
            </div>
            <div className="mb-5">
              <label className="block text-xs text-[#6B7A99] tracking-widest uppercase mb-2">Wallet Address</label>
              <input value={wallet} onChange={e => setWallet(e.target.value)}
                type="text" placeholder="0x..."
                className="w-full bg-[#0C1018] border border-[#283044] rounded px-4 py-3 text-sm text-white placeholder-[#3D4A63] outline-none focus:border-[#00E5A0] transition-colors" />
            </div>

            <div className="bg-[#0C1018] border border-[#1E2535] border-l-[3px] border-l-[#00E5A0] rounded p-4 mb-6 text-xs text-[#6B7A99] leading-relaxed">
              <strong className="text-white">Pipeline:</strong> Claude AI evaluates →{' '}
              <span className="text-[#8B5CF6]">3 GenLayer validators</span> reach consensus →
              hash stored on <span className="text-[#FF7A7A]">Avalanche Fuji</span> → badge minted
            </div>

            <div className="flex gap-3">
              <button onClick={() => setScreen('task')} className="px-4 py-3 rounded border border-[#283044] text-[#6B7A99] text-sm hover:text-white transition-colors">← Back</button>
              <button disabled={!formValid} onClick={runEvaluation}
                className="flex-1 py-3 rounded bg-[#00E5A0] text-black font-bold text-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#00ffb0] transition-colors">
                Evaluate & Verify →
              </button>
            </div>
          </div>
        )}

        {/* ── SCREEN: EVALUATING ── */}
        {screen === 'evaluating' && (
          <div className="py-10 text-center">
            <div className="w-14 h-14 border-2 border-[#1E2535] border-t-[#00E5A0] rounded-full animate-spin mx-auto mb-7" />
            <h2 className="text-2xl font-bold mb-2">Evaluating your <span className="text-[#00E5A0]">submission</span></h2>
            <p className="text-xs text-[#6B7A99] mb-9">Takes 15–30 seconds. Do not close this tab.</p>
            <div className="text-left">
              {PIPE_STEPS.map((label, i) => (
                <div key={i} className={`flex items-center gap-3 py-3 border-b border-[#1E2535] text-xs last:border-0 transition-colors ${
                  i < pipeStep ? 'text-[#00E5A0]' : i === pipeStep ? 'text-white' : 'text-[#3D4A63]'
                }`}>
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    i < pipeStep ? 'bg-[#00E5A0]' : i === pipeStep ? 'bg-[#00E5A0] animate-pulse' : 'bg-[#283044]'
                  }`} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SCREEN: RESULTS ── */}
        {screen === 'results' && result && (
          <div>
            <p className="text-xs text-[#6B7A99] tracking-widest uppercase mb-3">step 05 — proof issued</p>
            <h1 className="text-4xl font-bold mb-3 tracking-tight">Skill <span className="text-[#00E5A0]">verified</span></h1>
            <p className="text-xs text-[#6B7A99] tracking-wider mb-6">Evaluated by AI · Validated by consensus · Stored on-chain</p>

            {/* score */}
            <div className="flex items-center gap-6 bg-[#0C1018] border border-[#283044] rounded-lg p-5 mb-4">
              <div className="relative flex-shrink-0">
                <svg width="96" height="96" viewBox="0 0 96 96" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="48" cy="48" r="40" fill="none" stroke="#1E2535" strokeWidth="7"/>
                  <circle cx="48" cy="48" r="40" fill="none" stroke="#00E5A0" strokeWidth="7" strokeLinecap="round"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (result.score / 100) * 251.2}
                    style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.16,1,0.3,1)' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-semibold leading-none">{scoreDisplay}</span>
                  <span className="text-[9px] text-[#6B7A99] tracking-wider mt-0.5">/100</span>
                </div>
              </div>
              <div>
                <p className={`text-xl font-bold mb-1.5 ${result.score >= 90 ? 'text-[#00E5A0]' : result.score >= 75 ? 'text-[#60A5FA]' : result.score >= 60 ? 'text-[#F59E0B]' : 'text-[#EF4444]'}`}>
                  {result.score >= 90 ? '⬡ ELITE' : result.score >= 75 ? '◆ PROFICIENT' : result.score >= 60 ? '◇ DEVELOPING' : '○ BEGINNER'}
                </p>
                <p className="text-xs text-[#6B7A99] leading-relaxed">{result.summary}</p>
              </div>
            </div>

            {/* GenLayer */}
            <div className="bg-[#0C1018] border border-[#283044] rounded-lg overflow-hidden mb-4">
              <div className="flex items-center justify-between px-5 py-3 bg-[#111620] border-b border-[#1E2535]">
                <span className="text-xs text-[#8B5CF6] tracking-widest uppercase">⬡ GenLayer · Bradbury Testnet</span>
                <span className="text-xs text-[#00E5A0] border border-[rgba(0,229,160,0.2)] bg-[rgba(0,229,160,0.08)] px-2 py-0.5 rounded-sm">CONSENSUS REACHED</span>
              </div>
              <div className="grid grid-cols-3 gap-3 p-4">
                {result.validators.map(v => (
                  <div key={v.id} className="bg-[#111620] border border-[#1E2535] rounded p-3 text-center">
                    <p className="text-[9px] text-[#6B7A99] tracking-wider mb-2">{v.id}</p>
                    <p className="text-2xl font-semibold text-[#8B5CF6] mb-1">{v.score}</p>
                    <p className="text-[9px] text-[#00E5A0] tracking-wider">✓ confirmed</p>
                  </div>
                ))}
              </div>
            </div>

            {/* breakdown */}
            <div className="bg-[#0C1018] border border-[#283044] rounded-lg overflow-hidden mb-4">
              <div className="px-5 py-3 bg-[#111620] border-b border-[#1E2535]">
                <span className="text-xs text-[#6B7A99] tracking-widest uppercase">Score Breakdown</span>
              </div>
              <div className="p-5 space-y-3">
                {([
                  ['Task requirements', result.breakdown.task_requirements],
                  ['Code structure', result.breakdown.code_structure],
                  ['Responsiveness', result.breakdown.responsiveness],
                  ['Bonus polish', result.breakdown.polish],
                ] as [string, number][]).map(([label, val]) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="text-xs text-[#6B7A99] min-w-[140px]">{label}</span>
                    <div className="flex-1 h-1 bg-[#283044] rounded overflow-hidden">
                      <div className="h-full bg-[#00E5A0] rounded transition-all duration-1000" style={{ width: `${val}%` }} />
                    </div>
                    <span className="text-xs text-[#00E5A0] min-w-[24px] text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* feedback */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[#0C1018] border border-[#283044] rounded-lg overflow-hidden">
                <div className="px-4 py-2.5 bg-[#111620] border-b border-[#1E2535] text-xs text-[#00E5A0] tracking-widest uppercase">✓ Strengths</div>
                <div className="p-3 space-y-2">
                  {result.strengths.map((s, i) => (
                    <div key={i} className="flex gap-2 text-[11px] text-[#6B7A99] leading-snug">
                      <span className="text-[#00E5A0] flex-shrink-0">+</span><span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#0C1018] border border-[#283044] rounded-lg overflow-hidden">
                <div className="px-4 py-2.5 bg-[#111620] border-b border-[#1E2535] text-xs text-[#F59E0B] tracking-widest uppercase">↑ Improvements</div>
                <div className="p-3 space-y-2">
                  {result.improvements.map((s, i) => (
                    <div key={i} className="flex gap-2 text-[11px] text-[#6B7A99] leading-snug">
                      <span className="text-[#F59E0B] flex-shrink-0">→</span><span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* avalanche */}
            <div className="bg-[#0C1018] border border-[#283044] rounded-lg overflow-hidden mb-4">
              <div className="flex items-center justify-between px-5 py-3 bg-[#111620] border-b border-[#1E2535]">
                <span className="text-xs text-[#FF7A7A] tracking-widest uppercase">△ Avalanche · On-Chain Proof</span>
                <span className="text-xs text-[#FF7A7A] border border-[rgba(255,100,100,0.25)] px-2 py-0.5 rounded-sm">STORED</span>
              </div>
              <div className="p-5">
                <div className="bg-[#111620] border border-[#1E2535] rounded p-3 text-xs text-[#00E5A0] break-all leading-relaxed mb-3">
                  {result.avalanche.hash}
                </div>
                <div className="flex flex-wrap gap-4 text-xs">
                  <span className="text-[#6B7A99]">TX <span className="text-white">{result.avalanche.txHash.slice(0,10)}...{result.avalanche.txHash.slice(-6)}</span></span>
                  <span className="text-[#6B7A99]">BLOCK <span className="text-white">{result.avalanche.block.toLocaleString()}</span></span>
                  <span className="text-[#6B7A99]">CHAIN <span className="text-white">Avalanche Fuji C-Chain</span></span>
                </div>
              </div>
            </div>

            {/* leaderboard */}
            <div className="bg-[#0C1018] border border-[#283044] rounded-lg overflow-hidden mb-4">
              <div className="flex items-center justify-between px-5 py-3 bg-[#111620] border-b border-[#1E2535]">
                <span className="text-xs text-[#F59E0B] tracking-widest uppercase">◈ Reward Distribution</span>
                <span className="text-xs text-[#6B7A99]">Pool: $1,000 USDC</span>
              </div>
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-[#111620] border-b border-[#1E2535]">
                    {['Rank','Address','Score','Reward'].map(h => (
                      <th key={h} className="text-left px-5 py-2.5 text-[#6B7A99] tracking-widest uppercase font-normal">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((entry, i) => (
                    <tr key={i} className={`border-b border-[#1E2535] last:border-0 ${entry.you ? 'text-[#00E5A0]' : ''}`}>
                      <td className="px-5 py-2.5 text-[#3D4A63]">#{i+1}</td>
                      <td className="px-5 py-2.5">{entry.address}</td>
                      <td className="px-5 py-2.5">{entry.score}</td>
                      <td className="px-5 py-2.5 font-semibold text-[#F59E0B]">${entry.reward.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* badge */}
            <div className="rounded-lg border border-[rgba(0,229,160,0.2)] p-7 text-center mb-5"
              style={{ background: 'linear-gradient(135deg,rgba(0,229,160,0.05),rgba(139,92,246,0.05))' }}>
              <div className="w-12 h-12 bg-[#00E5A0] mx-auto mb-3 text-xl flex items-center justify-center"
                style={{ clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)' }}>⬡</div>
              <p className="text-lg font-bold text-[#00E5A0] mb-1">PROOF-OF-SKILL</p>
              <p className="text-xs text-[#6B7A99] tracking-wider mb-3">{goal && TASKS[goal].track} · VERIFIED ON-CHAIN</p>
              <button className="text-xs text-[#60A5FA] border border-[rgba(96,165,250,0.3)] px-4 py-1.5 rounded-sm hover:border-[#60A5FA] transition-colors">
                🔗 verify.pos-protocol.xyz/{result.avalanche.hash.slice(2,10)}
              </button>
            </div>

            <button onClick={restart}
              className="w-full py-3 rounded bg-[#00E5A0] text-black font-bold text-sm hover:bg-[#00ffb0] transition-colors">
              ↺ Try another challenge
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
