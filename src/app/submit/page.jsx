'use client';
import { useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { submitAndEvaluate, pollForResult } from '@/lib/proofedApi';

export default function SubmitPage() {
  const [githubUrl, setGithubUrl]     = useState('');
  const [challengeId, setChallengeId] = useState('challenge_web3_frontend_1');
  const [status, setStatus]           = useState(null);
  const [progress, setProgress]       = useState(null);
  const [result, setResult]           = useState(null);
  const [error, setError]             = useState(null);

  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  async function handleSubmit() {
    if (!githubUrl || !isConnected) return;
    setStatus('submitting');
    setError(null);
    setResult(null);

    try {
      await submitAndEvaluate(challengeId, githubUrl);

      setStatus('polling');
      const verdict = await pollForResult(
        challengeId,
        address,
        (attempt, max) => setProgress(`Waiting for consensus... (${attempt}/${max})`)
      );

      setResult(verdict);
      setStatus('done');
    } catch (e) {
      setError(e.message);
      setStatus('error');
    }
  }

  async function handleClaimReward() {
    // TODO: wire up claim_reward contract call via API
    alert('Claim reward coming soon!');
  }

  const feedback = (() => {
    if (!result?.feedback) return null;
    if (typeof result.feedback === 'object') return result.feedback;
    try { return JSON.parse(result.feedback); }
    catch { return null; }
  })();

  const isLoading = status === 'submitting' || status === 'polling';

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Submit Your Work</h1>
          <p className="text-gray-400 mt-1 text-sm">
            Your GitHub repo will be evaluated by AI and validated by on-chain consensus.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Challenge ID</label>
            <input
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400"
              placeholder="e.g. challenge_web3_frontend_1"
              value={challengeId}
              onChange={e => setChallengeId(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">GitHub Repo URL</label>
            <input
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400"
              placeholder="https://github.com/you/your-project"
              value={githubUrl}
              onChange={e => setGithubUrl(e.target.value)}
            />
          </div>

          {/* Wallet connect */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Wallet</label>
            {isConnected ? (
              <div className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm flex items-center justify-between">
                <span className="font-mono text-zinc-200">{address}</span>
                <button
                  onClick={() => disconnect()}
                  className="text-xs text-zinc-500 hover:text-white ml-4"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={() => connect({ connector: injected() })}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-400 hover:text-white hover:border-zinc-400 transition text-left"
              >
                Connect Wallet (MetaMask)
              </button>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading || !githubUrl || !isConnected}
            className="w-full bg-white text-black font-semibold rounded-lg px-4 py-3 text-sm hover:bg-zinc-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Submitting to blockchain...' :
             status === 'polling'    ? progress || 'Evaluating...' :
             'Submit & Evaluate'}
          </button>
        </div>

        {/* Polling state */}
        {status === 'polling' && (
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg px-5 py-4 flex items-center gap-3">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <div>
              <p className="text-sm font-medium">Consensus in progress</p>
              <p className="text-xs text-zinc-400 mt-0.5">
                3 validators are independently evaluating your submission on GenLayer testnet.
              </p>
            </div>
          </div>
        )}

        {/* Error */}
        {status === 'error' && (
          <div className="bg-red-950 border border-red-700 rounded-lg px-5 py-4">
            <p className="text-sm font-semibold text-red-400">Submission failed</p>
            <p className="text-xs text-red-300 mt-1">{error}</p>
          </div>
        )}

        {/* Result card */}
        {status === 'done' && result && (
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden">

            {/* Score header */}
            <div className={`px-6 py-5 flex items-center justify-between ${result.passed ? 'bg-emerald-950 border-b border-emerald-800' : 'bg-red-950 border-b border-red-900'}`}>
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Final Score</p>
                <p className="text-4xl font-bold">{result.score}<span className="text-xl text-zinc-400 font-normal"> / 100</span></p>
              </div>
              <div className={`text-sm font-semibold px-4 py-2 rounded-full ${result.passed ? 'bg-emerald-500 text-black' : 'bg-red-600 text-white'}`}>
                {result.passed ? '✅ Passed' : '❌ Did not pass'}
              </div>
            </div>

            <div className="px-6 py-5 space-y-5">

              {feedback && (
                <>
                  <div>
                    <p className="text-xs text-zinc-400 uppercase tracking-widest mb-2">Strengths</p>
                    <p className="text-sm text-zinc-200 leading-relaxed">{feedback.strengths || '—'}</p>
                  </div>

                  <div className="border-t border-zinc-800 pt-5">
                    <p className="text-xs text-zinc-400 uppercase tracking-widest mb-2">Areas to Improve</p>
                    <p className="text-sm text-zinc-200 leading-relaxed">{feedback.improvements || '—'}</p>
                  </div>

                  <div className="border-t border-zinc-800 pt-5">
                    <p className="text-xs text-zinc-400 uppercase tracking-widest mb-2">Category Breakdown</p>
                    <p className="text-sm text-zinc-200 leading-relaxed">{feedback.category_breakdown || '—'}</p>
                  </div>
                </>
              )}

              {/* On-chain info */}
              <div className="border-t border-zinc-800 pt-5 space-y-1">
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-2">On-chain Proof</p>
                <p className="text-xs text-zinc-400">
                  Submitter: <span className="text-zinc-200 font-mono">{result.submitter}</span>
                </p>
                <p className="text-xs text-zinc-400">
                  Reward claimed: <span className="text-zinc-200">{result.reward_claimed ? 'Yes' : 'No'}</span>
                </p>
              </div>

              {/* Claim reward */}
              {result.passed && !result.reward_claimed && (
                <div className="border-t border-zinc-800 pt-5">
                  <p className="text-xs text-zinc-400 mb-3">
                    You passed! Once the challenge is closed by the creator, you can claim your proportional reward from the pool.
                  </p>
                  <button
                    onClick={handleClaimReward}
                    className="w-full bg-emerald-500 text-black font-semibold rounded-lg px-4 py-3 text-sm hover:bg-emerald-400 transition"
                  >
                    Claim Reward
                  </button>
                </div>
              )}

              {result.reward_claimed && (
                <div className="border-t border-zinc-800 pt-5">
                  <p className="text-sm text-emerald-400 font-medium">🏆 Reward already claimed</p>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
}