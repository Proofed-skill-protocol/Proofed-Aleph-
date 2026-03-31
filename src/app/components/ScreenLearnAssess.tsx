'use client';

import { useState } from 'react';

type Level = 'beginner' | 'intermediate' | 'advanced';

interface ScreenLearnAssessProps {
  category: string;
  onResult: (level: Level, githubUrl?: string) => void;
  onBack:   () => void;
}

const QUESTIONS = [
  {
    q: 'How would you describe your coding experience?',
    a: ['Just getting started', 'Built a few personal projects', 'Shipped production code professionally'],
  },
  {
    q: 'Have you worked with APIs or external data sources before?',
    a: ['Not yet', 'Yes, in tutorials or small projects', 'Yes, in real-world or client projects'],
  },
  {
    q: 'How comfortable are you with version control (Git)?',
    a: ['Not familiar with it', 'Basic commits and pushes', 'Branches, PRs, and code reviews regularly'],
  },
  {
    q: 'Do you have a GitHub profile with public projects?',
    a: ['No GitHub yet', 'Yes, a few repos', 'Yes, multiple active projects'],
  },
];

function deriveLevel(answers: number[]): Level {
  const score = answers.reduce((s, a) => s + a, 0);
  const max   = (QUESTIONS.length - 1) * 2;
  const pct   = score / max;
  if (pct < 0.35) return 'beginner';
  if (pct < 0.70) return 'intermediate';
  return 'advanced';
}

export default function ScreenLearnAssess({ category, onResult, onBack }: ScreenLearnAssessProps) {
  const [answers, setAnswers] = useState<number[]>([]);
  const [current, setCurrent] = useState(0);
  const [step,    setStep]    = useState<'quiz' | 'github'>('quiz');
  const [level,   setLevel]   = useState<Level>('beginner');
  const [github,  setGithub]  = useState('');

  const handleAnswer = (idx: number) => {
    const next = [...answers, idx];
    setAnswers(next);
    if (current + 1 < QUESTIONS.length) {
      setCurrent(current + 1);
    } else {
      const derived = deriveLevel(next);
      setLevel(derived);
      setStep('github');
    }
  };

  const retake = () => { setAnswers([]); setCurrent(0); setStep('quiz'); };

  const LEVEL_META: Record<Level, { color: string; desc: string }> = {
    beginner:     { color: 'var(--green)',           desc: "We'll start from the fundamentals and build up step by step." },
    intermediate: { color: '#f59e0b',                desc: "You've got the basics. We'll push you into real-world patterns." },
    advanced:     { color: 'var(--purple, #8a5cf6)', desc: "You're ready for complex challenges. Let's prove it on-chain." },
  };

  const meta = LEVEL_META[level];
  const progress = (current / QUESTIONS.length) * 100;

  if (step === 'quiz') {
    const q = QUESTIONS[current];
    return (
      <div className="screen on">
        <button className="btn btn-ghost" style={{ marginBottom: 28 }} onClick={onBack}>← Back</button>
        <p className="ey">{category} · skill assessment</p>
        <h1>Let&apos;s find your <em>level</em></h1>
        <p className="lead">Answer 4 quick questions so we can build the right path for you.</p>

        <div className="la-progress-wrap">
          <div className="la-progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="la-counter">{current + 1} / {QUESTIONS.length}</div>

        <div className="la-card">
          <div className="la-q">{q.q}</div>
          <div className="la-opts">
            {q.a.map((ans, i) => (
              <button key={i} className="la-opt" onClick={() => handleAnswer(i)}>
                <span className="la-idx">{String.fromCharCode(65 + i)}</span>
                {ans}
              </button>
            ))}
          </div>
        </div>

        <style>{laStyles}</style>
      </div>
    );
  }

  return (
    <div className="screen on">
      <p className="ey">{category} · assessment complete</p>
      <h1>You&apos;re a <em style={{ color: meta.color }}>{level.charAt(0).toUpperCase() + level.slice(1)}</em></h1>
      <p className="lead">{meta.desc}</p>

      <div className="la-result-card" style={{ borderColor: `${meta.color === 'var(--green)' ? 'rgba(0,229,160' : meta.color === '#f59e0b' ? 'rgba(245,158,11' : 'rgba(138,92,246'}, 0.25)` }}>
        <div className="la-result-badge" style={{ color: meta.color }}>
          ◎ {level.toUpperCase()}
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
          Based on your answers, we&apos;ve selected a tailored path. You can retake the assessment to change it.
        </p>
      </div>

      <div className="field" style={{ marginTop: 28 }}>
        <label className="fl">
          Your GitHub profile URL{' '}
          <span style={{ color: 'var(--muted)', fontWeight: 400 }}>(optional)</span>
        </label>
        <input
          className="inp"
          type="text"
          placeholder="https://github.com/yourusername"
          value={github}
          onChange={e => setGithub(e.target.value)}
        />
        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: 6 }}>
          Helps us personalise your path further.
        </div>
      </div>

      <button
        className="btn btn-main"
        style={{ width: '100%', marginTop: 20 }}
        onClick={() => onResult(level, github || undefined)}
      >
        See my learning path →
      </button>
      <button
        className="btn btn-ghost"
        style={{ width: '100%', marginTop: 10 }}
        onClick={retake}
      >
        ← Retake assessment
      </button>

      <style>{laStyles}</style>
    </div>
  );
}

const laStyles = `
  .la-progress-wrap { height: 3px; background: var(--border); border-radius: 2px; margin-bottom: 6px; }
  .la-progress-bar  { height: 3px; background: var(--green); border-radius: 2px; transition: width 0.3s ease; }
  .la-counter       { font-size: 0.72rem; color: var(--muted); font-family: var(--mono); margin-bottom: 28px; }
  .la-card {
    border: 1px solid var(--border); border-radius: 12px; padding: 28px 22px;
    background: var(--surface, rgba(255,255,255,0.03));
  }
  .la-q    { font-size: 1.05rem; font-weight: 600; color: var(--text); line-height: 1.5; margin-bottom: 20px; }
  .la-opts { display: flex; flex-direction: column; gap: 10px; }
  .la-opt  {
    display: flex; align-items: center; gap: 14px;
    background: transparent; border: 1px solid var(--border);
    border-radius: 8px; padding: 14px 18px; cursor: pointer;
    color: var(--text); font-size: 0.9rem; text-align: left;
    transition: border-color 0.15s, background 0.15s;
  }
  .la-opt:hover { border-color: var(--green); background: rgba(0,229,160,0.04); }
  .la-idx {
    font-family: var(--mono); font-size: 0.72rem; color: var(--muted);
    border: 1px solid var(--border); border-radius: 4px;
    padding: 2px 6px; min-width: 22px; text-align: center; flex-shrink: 0;
  }
  .la-result-card {
    border: 1px solid; border-radius: 12px; padding: 22px;
    background: rgba(255,255,255,0.02); display: flex; flex-direction: column; gap: 10px;
  }
  .la-result-badge { font-size: 0.8rem; font-family: var(--mono); font-weight: 700; letter-spacing: 1px; }
`;