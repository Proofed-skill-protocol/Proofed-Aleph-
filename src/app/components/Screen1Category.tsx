'use client';

import { useEffect, useState } from 'react';
import { getAllChallenges, type Challenge } from '@/lib/genlayer/client';
import { CATEGORIES } from '../../lib/data';

interface Screen1Props {
  selCat:          string | null;
  onPickCat:       (cat: string) => void;
  onNext:          () => void;
  onBack?:         () => void;
  onPickChallenge: (challenge: Challenge | null) => void;
}

export default function Screen1({ selCat, onPickCat, onPickChallenge, onNext, onBack }: Screen1Props) {
  const [challenges,   setChallenges]   = useState<Challenge[]>([]);
  const [loadingChain, setLoadingChain] = useState(true);
  const [selChallenge, setSelChallenge] = useState<Challenge | null>(null);

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

  return (
    <div className="screen on">
      {onBack && (
        <button className="btn btn-ghost" style={{ marginBottom: 28 }} onClick={onBack}>← Back</button>
      )}
      <p className="ey">step 01 — set your goal</p>
      <h1>What do you want to <em>learn?</em></h1>
      <p className="lead">
        Pick a category. We curate your learning path, you prove you can do it,
        and we verify it on-chain.
      </p>

      <div className="cat-grid">
        {CATEGORIES.map(cat => (
          <div
            key={cat.key}
            className={`cat ${selCat === cat.key && !selChallenge ? 'sel' : ''}`}
            style={{ cursor: 'pointer' }}
            onClick={() => handlePickCat(cat.key)}
          >
            {cat.locked && <span className="soon-badge">SOON</span>}
            <div className="cat-ico">{cat.icon}</div>
            <div className="cat-name">{cat.name}</div>
            <div className="cat-desc">{cat.desc}</div>
          </div>
        ))}
      </div>

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