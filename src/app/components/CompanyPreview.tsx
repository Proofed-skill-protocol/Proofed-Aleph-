'use client';

// ── Drop this component into src/app/components/CompanyPreview.tsx ──
// Then render it inside the company view in page.tsx, replacing the
// existing company-features + istrip block.

export default function CompanyPreview() {
  const steps = [
    {
      num: '01',
      icon: '◈',
      title: 'Create a challenge',
      desc: 'Define a real task — a feature to build, a bug to fix, or a system to design. Set the evaluation criteria.',
      tag: 'Coming soon',
      tagColor: '#8a5cf6',
    },
    {
      num: '02',
      icon: '⚡',
      title: 'Receive submissions',
      desc: 'Candidates submit their GitHub repo. Claude AI and 3 GenLayer validators evaluate every submission automatically.',
      tag: 'Live now',
      tagColor: '#00e5a0',
    },
    {
      num: '03',
      icon: '⬡',
      title: 'Review verified scores',
      desc: 'See ranked results with on-chain proof. Every score is tamper-proof — no resumes, no bias, just real work.',
      tag: 'Coming soon',
      tagColor: '#8a5cf6',
    },
  ];

  const features = [
    { ico: '⬡', title: 'On-chain verified',       desc: 'Every proof is stored on GenLayer — impossible to fake' },
    { ico: '◈', title: 'Real work, not resumes',  desc: 'Candidates prove skills by building actual projects'    },
    { ico: '⚡', title: 'Instant verification',    desc: 'One link. No back-and-forth. No interviews needed'      },
  ];

  return (
    <>
      {/* Existing features list */}
      <div className="company-features">
        {features.map((f, i) => (
          <div key={i} className="cfeat">
            <div className="cfeat-ico">{f.ico}</div>
            <div className="cfeat-text">
              <div className="cfeat-title">{f.title}</div>
              <div className="cfeat-desc">{f.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* How it works — pipeline preview */}
      <div style={{ marginTop: 36 }}>
        <div style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: 2, fontFamily: 'var(--mono)', marginBottom: 18 }}>
          ⬡ HOW IT WORKS FOR COMPANIES
        </div>

        <div className="cp-steps">
          {steps.map((s, i) => (
            <div key={i} className="cp-step">
              <div className="cp-step-num">{s.num}</div>
              <div className="cp-step-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: '1rem' }}>{s.ico}</span>
                  <span className="cp-step-title">{s.title}</span>
                  <span className="cp-tag" style={{ borderColor: `${s.tagColor}55`, color: s.tagColor }}>
                    {s.tag}
                  </span>
                </div>
                <div className="cp-step-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coming soon strip */}
      <div className="istrip" style={{ marginTop: 24 }}>
        <b>Coming soon:</b> Create your own challenges, receive candidate submissions, and review verified performance scores — all in one place.
      </div>

      <style>{`
        .cp-steps { display: flex; flex-direction: column; gap: 0; }
        .cp-step {
          display: flex; gap: 16px; padding: 20px 0;
          border-bottom: 1px solid var(--border);
        }
        .cp-step:first-child { border-top: 1px solid var(--border); }
        .cp-step-num {
          font-family: var(--mono); font-size: 0.72rem; color: var(--muted);
          min-width: 24px; padding-top: 2px;
        }
        .cp-step-title { font-size: 0.9rem; font-weight: 600; color: var(--text); }
        .cp-step-desc  { font-size: 0.82rem; color: var(--muted); line-height: 1.6; }
        .cp-tag {
          font-size: 0.62rem; font-family: var(--mono); font-weight: 700;
          letter-spacing: 0.8px; padding: 2px 7px; border-radius: 20px;
          border: 1px solid; margin-left: auto;
        }
      `}</style>
    </>
  );
}