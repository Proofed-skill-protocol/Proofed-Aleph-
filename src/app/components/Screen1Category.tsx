'use client';

import { CATEGORIES } from '../../lib/data';

interface Screen1Props {
  selCat: string | null;
  onPickCat: (cat: string) => void;
  onNext: () => void;
}

export default function Screen1({ selCat, onPickCat, onNext }: Screen1Props) {
  return (
    <div className="screen on">
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
            className={`cat ${cat.locked ? 'locked' : ''} ${selCat === cat.key ? 'sel' : ''}`}
            onClick={() => !cat.locked && onPickCat(cat.key)}
          >
            {cat.locked && <span className="soon-badge">SOON</span>}
            <div className="cat-ico">{cat.icon}</div>
            <div className="cat-name">{cat.name}</div>
            <div className="cat-desc">{cat.desc}</div>
          </div>
        ))}
      </div>

      <button
        className="btn btn-main"
        disabled={!selCat}
        onClick={onNext}
        style={{ width: '100%' }}
      >
        Continue →
      </button>
    </div>
  );
}
