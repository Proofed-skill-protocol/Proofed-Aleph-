'use client';

interface Screen4Props {
  poolEntry: number | null;
  githubUrl: string;
  walletAddress: string;
  isFormValid: boolean;
  onSelectPool: (amount: number) => void;
  onGithubChange: (val: string) => void;
  onWalletChange: (val: string) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export default function Screen4({
  poolEntry,
  githubUrl,
  walletAddress,
  isFormValid,
  onSelectPool,
  onGithubChange,
  onWalletChange,
  onSubmit,
  onBack,
}: Screen4Props) {
  const poolBarText =
    poolEntry === null
      ? ''
      : poolEntry === 0
      ? "Skipping the pool — you can still get your proof badge."
      : `$${poolEntry} USDC entry selected. You'll compete for rewards proportional to your score.`;

  return (
    <div className="screen on">
      <p className="ey">step 04 — submit + pool</p>
      <h1>Submit your <em>GitHub link</em></h1>
      <p className="lead">Paste your repo. Optionally join the reward pool — top scores earn USDC.</p>

      {/* Pool CTA */}
      <div className="pool-cta">
        <div className="pool-cta-top">
          <span className="pool-cta-title">◈ Join the Reward Pool</span>
          <span className="pool-cta-badge">OPTIONAL</span>
        </div>
        <p className="pool-cta-desc">
          Put in $2 or $5 USDC. Rewards are distributed proportionally by score — the better you
          build, the more you earn. Top performers can earn 3–5x their entry.
        </p>
        <div className="pool-options">
          <div
            className={`pool-opt ${poolEntry === 2 ? 'sel' : ''}`}
            onClick={() => onSelectPool(2)}
          >
            <div className="pool-opt-amount">$2</div>
            <div className="pool-opt-label">ENTRY</div>
          </div>
          <div
            className={`pool-opt ${poolEntry === 5 ? 'sel' : ''}`}
            onClick={() => onSelectPool(5)}
          >
            <div className="pool-opt-amount">$5</div>
            <div className="pool-opt-label">ENTRY</div>
          </div>
          <div
            className={`pool-opt ${poolEntry === 0 ? 'sel' : ''}`}
            style={{ flex: 0.6 }}
            onClick={() => onSelectPool(0)}
          >
            <div className="pool-opt-amount" style={{ fontSize: 12 }}>Skip</div>
            <div className="pool-opt-label">NO ENTRY</div>
          </div>
        </div>
        {poolEntry !== null && (
          <div className="pool-selected-bar show">{poolBarText}</div>
        )}
      </div>

      {/* Form */}
      <div className="field">
        <label className="fl">Repository URL</label>
        <input
          className="inp"
          type="url"
          placeholder="https://github.com/username/repo"
          value={githubUrl}
          onChange={e => onGithubChange(e.target.value)}
        />
      </div>
      <div className="field">
        <label className="fl">Your wallet address</label>
        <input
          className="inp"
          type="text"
          placeholder="0x..."
          value={walletAddress}
          onChange={e => onWalletChange(e.target.value)}
        />
      </div>

      <div className="istrip">
        <b>Evaluation pipeline:</b> Claude AI evaluates →{' '}
        <span style={{ color: 'var(--purple)' }}>3 GenLayer validators</span> reach consensus → 
          badge minted
      </div>

      <div className="btn-row">
        <button className="btn btn-ghost" onClick={onBack}>← Back</button>
        <button className="btn btn-main" disabled={!isFormValid} onClick={onSubmit}>
          Evaluate &amp; Verify →
        </button>
      </div>
    </div>
  );
}
