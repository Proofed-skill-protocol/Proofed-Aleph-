'use client';

import { useState } from 'react';

type Level = 'beginner' | 'intermediate' | 'advanced';

interface ScreenLearnAssessProps {
  category: string;
  onResult: (level: Level, githubUrl?: string) => void;
  onBack:   () => void;
}

const QUESTIONS: { q: string; a: string[]; weights: Level[] }[] = [
  {
    q: 'How would you describe your coding experience?',
    a: [
      'I\'m just getting started',
      'I\'ve built a few personal projects',
      'I\'ve shipped production code professionally',
    ],
    weights: ['beginner', 'intermediate', 'advanced'],
  },
  {
    q: 'Have you worked with APIs or external data sources before?',
    a: [
      'No, not yet',
      'Yes, in tutorials or small projects',
      'Yes, in real-world or client projects',
    ],
    weights: ['beginner', 'intermediate', 'advanced'],
  },
  {
    q: 'How comfortable are you with version control (Git)?',
    a: [
      'I\'m not familiar with it',
      'I use basic commits and pushes',
      'I use branches, PRs, and code reviews regularly',
    ],
    weights: ['beginner', 'intermediate', 'advanced'],
  },
  {
    q: 'Do you have a GitHub profile with public projects?',
    a: [
      'No GitHub yet',
      'Yes, a few repos',
      'Yes, multiple active projects',
    ],
    weights: ['beginner', 'intermediate', 'advanced'],
  },
];

function deriveLevel(answers: number[]): Level {
  const score = answers.reduce((sum, a) => sum + a, 0);
  const max   = (QUESTIONS.length - 1) * 2;
  const pct   = score / max;
  if (pct < 0.35) return 'beginner';
  if (pct < 0.70) return 'intermediate';
  return 'advanced';
}

export default function ScreenLearnAssess({ category, onResult, onBack }: ScreenLearnAssessProps) {
  const [step,    setStep]    = useState<'quiz' | 'github'>('quiz');
  const [answers, setAnswers] = useState<number[]>([]);
  const [current, setCurrent] = useState(0);
  const [level,   setLevel]   = useState<Level>('beginner');
  const [github,  setGithub]  = useState('');

  const handleAnswer = (idx: number) => {
    const next = [...answers, idx];
    setAnswers(next);
    if (current + 1 < QUESTIONS.length) {
      setCurrent(current + 1);
    } else {
      setLevel(deriveLevel(next));
      setStep('github');
    }
  };

  const LEVEL_META: Record<Level, { label: string; color: string; desc: string }> = {
    beginner:     { label: 'Beginner',     color: '#00e5a0', desc: "We'll start from the fundamentals and build up step by step." },
    intermediate: { label: 'Intermediate', color: '#f59e0b', desc: "You've got the basics. We'll push you into real-world patterns." },
    advanced:     { label: 'Advanced',     color: '#8a5cf6', desc: "You're ready for complex challenges. Let's prove it on-chain." },
  };

  const meta = LEVEL_META[level];

  if (step === 'quiz') {
    const q = QUESTIONS[current];
    const progress = ((current) / QUESTIONS.length) * 100;

    return (
      <div className="screen on">
        <button className="btn btn-ghost" style={{ marginBottom: 28 }} onClick={onBack}>← Back</button>
        <p className="ey">{category} · skill assessment</p>
        <h1>Let&apos;s find your <em>level</em></h1>
        <p className="lead">Answer a few quick questions so we can build the right path for you.</p>

        {/* Progress bar */}
        <div className="assess-progress-wrap">
          <div className="assess-progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="assess-step-label">{current + 1} / {QUESTIONS.length}</div>

        <div className="assess-card">
          <div className="assess-q">{q.q}</div>
          <div className="assess-answers">
            {q.a.map((ans, i) => (
              <button key={i} className="assess-answer-btn" onClick={() => handleAnswer(i)}>
                <span className="assess-answer-idx">{String.fromCharCode(65 + i)}</span>
                {ans}
              </button>
            ))}
          </div>
        </div>

        <style>{assessStyles}</style>
      </div>
    );
  }

  // GitHub step
  return (
    <div className="screen on">
      <p className="ey">{category} · assessment complete</p>
      <h1>You&apos;re a <em style={{ color: meta.color }}>{meta.label}</em></h1>
      <p className="lead">{meta.desc}</p>

      <div className="assess-result-card" style={{ borderColor: `${meta.color}44` }}>
        <div className="assess-level-badge" style={{ color: meta.color }}>
          ◎ {meta.label.toUpperCase()}
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
          Based on your answers, we&apos;ve selected a tailored path for you. You can adjust this later.
        </p>
      </div>

      <div className="field" style={{ marginTop: 28 }}>
        <label className="fl">Your GitHub profile URL <span style={{ color: 'var(--muted)', fontWeight: 400 }}>(optional)</span></label>
        <input
          className="inp"
          type="text"
          placeholder="https://github.com/yourusername"
          value={github}
          onChange={e => setGithub(e.target.value)}
        />
        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: 6 }}>
          Sharing your profile helps us personalise your path further.
        </div>
      </div>

      <button
        className="btn btn-main"
        style={{ width: '100%', marginTop: 20 }}
        onClick={() => onResult(level, github || undefined)}
      >
        See my learning path →
      </button>
      <button className="btn btn-ghost" style={{ width: '100%', marginTop: 10 }}
        onClick={() => { setStep('quiz'); setCurrent(0); setAnswers([]); }}>
        ← Retake assessment
      </button>

      <style>{assessStyles}</style>
    </div>
  );
}

const assessStyles = `
  .assess-progress-wrap { height: 3px; background: var(--border); border-radius: 2px; margin-bottom: 6px; }
  .assess-progress-bar  { height: 3px; background: var(--green); border-radius: 2px; transition: width 0.3s ease; }
  .assess-step-label    { font-size: 0.72rem; color: var(--muted); font-family: var(--mono); margin-bottom: 28px; }
  .assess-card { border: 1px solid var(--border); border-radius: 12px; padding: 28px 22px; background: var(--surface, rgba(255,255,255,0.03)); }
  .assess-q { font-size: 1.05rem; font-weight: 600; color: var(--text); line-height: 1.5; margin-bottom: 20px; }
  .assess-answers { display: flex; flex-direction: column; gap: 10px; }
  .assess-answer-btn {
    display: flex; align-items: center; gap: 14px;
    background: transparent; border: 1px solid var(--border);
    border-radius: 8px; padding: 14px 18px; cursor: pointer;
    color: var(--text); font-size: 0.9rem; text-align: left;
    transition: border-color 0.15s, background 0.15s;
  }
  .assess-answer-btn:hover { border-color: var(--green); background: rgba(0,229,160,0.04); }
  .assess-answer-idx {
    font-family: var(--mono); font-size: 0.72rem; color: var(--muted);
    border: 1px solid var(--border); border-radius: 4px;
    padding: 2px 6px; min-width: 22px; text-align: center;
  }
  .assess-result-card {
    border: 1px solid; border-radius: 12px; padding: 22px;
    background: rgba(255,255,255,0.02); display: flex; flex-direction: column; gap: 10px;
  }
  .assess-level-badge { font-size: 0.8rem; font-family: var(--mono); font-weight: 700; letter-spacing: 1px; }
`;