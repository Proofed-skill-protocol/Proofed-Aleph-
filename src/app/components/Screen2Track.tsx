'use client';

import { PATHS, TrackKey } from '@/lib/data';

const TRACKS: { key: TrackKey; icon: string; tag: string }[] = [
  { key: 'smartcontracts', icon: '📜', tag: 'SOLIDITY · EVM · DEPLOYMENT' },
  { key: 'frontend',       icon: '🌐', tag: 'REACT · ETHERS.JS · WAGMI'  },
  { key: 'backend',        icon: '⚙️', tag: 'NODE · APIs · INDEXING'      },
];

interface Screen2Props {
  selTrack: TrackKey | null;
  onPickTrack: (track: TrackKey, total: number) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Screen2({ selTrack, onPickTrack, onNext, onBack }: Screen2Props) {
  return (
    <div className="screen on">
      <p className="ey">step 02 — pick your track</p>
      <h1>Choose your <em>Web3 track</em></h1>
      <p className="lead">Pick what you want to master. AI will build your learning path and task.</p>

      <div className="track-grid">
        {TRACKS.map(t => (
          <div
            key={t.key}
            className={`track ${selTrack === t.key ? 'sel' : ''}`}
            onClick={() => onPickTrack(t.key, PATHS[t.key].resources.length)}
          >
            <div className="track-ico">{t.icon}</div>
            <div>
              <div className="track-name">{PATHS[t.key].label}</div>
              <div className="track-tag">{t.tag}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="btn-row">
        <button className="btn btn-ghost" onClick={onBack}>← Back</button>
        <button className="btn btn-main" disabled={!selTrack} onClick={onNext}>
          Build my path →
        </button>
      </div>
    </div>
  );
}
