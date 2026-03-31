'use client';

import { useEffect, useState } from 'react';
import { getAllChallenges, type Challenge } from '@/lib/genlayer/client';
import { CATEGORIES } from '../../lib/data';

interface Screen1Props {
  selCat:          string | null;
  onPickCat:       (cat: string) => void;
  onNext:          () => void;
  onPickChallenge: (challenge: Challenge | null) => void;
}

const COMING_SOON: Record<string, { title: string; items: string[] }> = {
  marketing: {
    title: 'Marketing',
    items: [
      'Campaign analysis',
      'Creative tasks',
      'Performance evaluation',
    ],
  },
  design: {
    title: 'Design',
    items: [
      'Web3 UI/UX challenges',
      'dApp and on-chain product design tasks',
      'Evaluation of usability, clarity, and user flows',
    ],
  },
};

export default function Screen1({ selCat, onPickCat, onPickChallenge, onNext }: Screen1Props) {
  const [challenges,    setChallenges]    = useState<Challenge[]>([]);
  const [loadingChain,  setLoadingChain]  = useState(true);
  const [selChallenge,  setSelChallenge]  = useState<Challenge | null>(null);
  const [comingSoon,    setComingSoon]    = useState<string | null>(null);

  useEffect(() => {
    getAllChallenges()
      .then(setChallenges)
      .finally(() => setLoadingChain(false));
  }, []);

  const handlePickCat = (key: string) => {
    setSelChallenge(null);
    onPickChallenge(null);
    onPickCat(key);
  };

  const handlePickChallenge = (c: Challenge) => {
    setSelChallenge(c);
    onPickChallenge(c);
    onPickCat('tech');
  };

  const canContinue = !!selCat || !!selChallenge;

  // ── Coming soon overlay ─────────────────────────────────────────────────
  if (comingSoon && COMING_SOON[comingSoon]) {
    const cs = COMING_SOON[comingSoon];
    return (
      <div className="screen on">
        <button
          className="btn btn-ghost"
          style={{ marginBottom: 28 }}
          onClick={() => setComingSoon(null)}
        >
          ← Back
        </button>

        <p className="ey">coming soon</p>
        <h1><em>{cs.title}</em></h1>

        <p className="lead">
          This category is under construction. Here&apos;s what&apos;s coming:
        </p>

        <div className="cs-list">
          {cs.items.map((item, i) => (
            <div key={i} className="cs-item">
              <span className="cs-dot">→</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="istrip" style={{ marginTop: 32 }}>
          Want to be notified when {cs.title} launches?
          Join our community on Discord or follow us on X.
        </div>

        <button
          className="btn btn-ghost"
          style={{ width: '100%', marginTop: 16 }}
          onClick={() => setComingSoon(null)}
        >
          ← Back to categories
        </button>

        <style>{`
          .cs-list { display: flex; flex-direction: column; gap: 0; margin-top: 8px; }
          .cs-item {
            display: flex; align-items: baseline; gap: 14px;
            padding: 16px 0; border-bottom: 1px solid var(--border);
            font-size: 0.95rem; color: var(--text); line-height: 1.5;
          }
          .cs-item:first-child { border-top: 1px solid var(--border); }
          .cs-dot { color: var(--green); font-family: var(--mono); font-size: 0.85rem; min-width: 16px; }
        `}</style>
      </div>
    );
  }

  // ── Normal category screen ──────────────────────────────────────────────
  return (
    <div className="screen on">
      <p className="ey">step 01 — set your goal</p>
      <h1>What do you want to <em>learn?</em></h1>
      <p className="lead">
        Pick a category. We curate your learning path, you prove you can do it,
        and we verify it on-chain.
      </p>

      {/* Hardcoded categories */}
      <div className="cat-grid">
        {CATEGORIES.map(cat => {
          const isComingSoon = !!COMING_SOON[cat.key];
          return (
            <div
              key={cat.key}
              className={`cat ${cat.locked && !isComingSoon ? 'locked' : ''} ${selCat === cat.key && !selChallenge ? 'sel' : ''}`}
              style={{ cursor: cat.locked && !isComingSoon ? 'default' : 'pointer' }}
              onClick={() => {
                if (isComingSoon) {
                  setComingSoon(cat.key);
                } else if (!cat.locked) {
                  handlePickCat(cat.key);
                }
              }}
            >
              {cat.locked && <span className="soon-badge">SOON</span>}
              <div className="cat-ico">{cat.icon}</div>
              <div className="cat-name">{cat.name}</div>
              <div className="cat-desc">{cat.desc}</div>
            </div>
          );
        })}
      </div>

      {/* Live on-chain challenges */}
      {!loadingChain && challenges.length > 0 && (
        <div style={{ marginTop: 32 }}>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 12, letterSpacing: 1 }}>
            ⬡ LIVE ON-CHAIN CHALLENGES
          </p>
          <div className="cat-grid">
            {challenges.map(c => (
              <div
                key={c.id}
                className={`cat ${!c.is_open ? 'locked' : ''} ${selChallenge?.id === c.id ? 'sel' : ''}`}
                onClick={() => c.is_open && handlePickChallenge(c)}
              >
                {!c.is_open && <span className="soon-badge">CLOSED</span>}
                <div className="cat-ico">⬡</div>
                <div className="cat-name">{c.title}</div>
                <div className="cat-desc">{c.description}</div>
                <div style={{ fontSize: 11, color: 'var(--green)', marginTop: 6 }}>
                  Pool: {c.pool_amount > 0 ? `${c.pool_amount} GEN` : 'Free'}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        className="btn btn-main"
        disabled={!canContinue}
        onClick={onNext}
        style={{ width: '100%', marginTop: 24 }}
      >
        Continue →
      </button>
    </div>
  );
}