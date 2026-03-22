'use client';

export interface ValidatorState {
  status: string;
  score: number | null;
  state: '' | 'thinking' | 'agreed';
}

export interface GenLayerAnimState {
  pillStep: number; // 1-4
  validators: [ValidatorState, ValidatorState, ValidatorState];
  consensusVisible: boolean;
  consensusScore: number | null;
  phase2Visible: boolean;
}

interface GenLayerAnimProps {
  anim: GenLayerAnimState;
  pipeStates: { p2: '' | 'active' | 'done'; p3: '' | 'active' | 'done' };
}

export default function GenLayerAnim({ anim, pipeStates }: GenLayerAnimProps) {
  const { pillStep, validators, consensusVisible, consensusScore, phase2Visible } = anim;

  const pillClass = (i: number) => {
    if (i < pillStep) return 'gl-pill done';
    if (i === pillStep) return 'gl-pill active';
    return 'gl-pill';
  };

  const lineClass = (i: number) => `gl-line${i < pillStep ? ' done' : ''}`;

  return (
    <div style={{ marginTop: 20, textAlign: 'left' }}>
      {/* Header */}
      <div style={{
        fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--purple)',
        letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: 14,
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <span style={{ display: 'block', width: 14, height: 1, background: 'var(--dim)' }} />
        ⬡ GenLayer · Bradbury Testnet
      </div>

      {/* Step pills */}
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 6 }}>
        {[1, 2, 3, 4].map(n => (
          <>
            <div key={`pill-${n}`} className={pillClass(n)}>
              {n < pillStep ? '✓' : n}
            </div>
            {n < 4 && <div key={`line-${n}`} className={lineClass(n)} style={{ flex: 1 }} />}
          </>
        ))}
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--muted)',
        marginBottom: 18, letterSpacing: '.06em',
      }}>
        <span>DISPATCH</span><span>EVALUATE</span><span>CONSENSUS</span><span>ON-CHAIN</span>
      </div>

      {/* Validator cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 16 }}>
        {validators.map((v, idx) => (
          <div key={idx} className={`gl-vc ${v.state}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <div className={`gl-vdot ${v.state}`} />
              <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '.08em' }}>
                VALIDATOR-0{idx + 1}
              </span>
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--dim)', marginBottom: 6 }}>
              {v.status}
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 22, fontWeight: 600, color: 'var(--purple)' }}>
              {v.score !== null ? v.score : '—'}
            </div>
            <div style={{ height: 2, background: 'var(--border2)', borderRadius: 1, marginTop: 8, overflow: 'hidden' }}>
              <div
                className={`gl-vbar ${v.state === 'agreed' ? 'agreed' : ''}`}
                style={{ width: v.score !== null ? `${v.score}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Consensus row */}
      {consensusVisible && (
        <div id="gl-consensus" style={{
          background: 'var(--s1)', border: '1px solid var(--border2)', borderRadius: 6,
          padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12,
        }}>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--muted)', letterSpacing: '.1em', marginBottom: 3 }}>
              CONSENSUS SCORE
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 28, fontWeight: 600, color: 'var(--green)' }}>
              {consensusScore ?? '—'}
            </div>
          </div>
          <div style={{ flex: 1, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', lineHeight: 1.6 }}>
            All 3 validators agreed within threshold. Score finalized.
          </div>
          <span className="chip chip-green">3/3 AGREED</span>
        </div>
      )}

      {/* Phase 4 pipeline */}
      {phase2Visible && (
        <div className="pipeline">
          <div className={`pipe ${pipeStates.p2}`}>
            <div className="pdot" />Writing cryptographic proof to Avalanche...
          </div>
          <div className={`pipe ${pipeStates.p3}`}>
            <div className="pdot" />Minting Proof-of-Skill badge...
          </div>
        </div>
      )}
    </div>
  );
}
