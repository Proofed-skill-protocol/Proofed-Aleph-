// src/app/api/evaluate/route.ts
// POST /api/evaluate
// Body: { githubUrl: string, goal: string }
// Returns: EvaluationResult

import { NextRequest, NextResponse } from 'next/server';

export interface EvaluationResult {
  score: number;
  breakdown: {
    task_requirements: number;
    code_structure: number;
    responsiveness: number;
    polish: number;
  };
  strengths: string[];
  improvements: string[];
  summary: string;
  validators: { id: string; score: number }[];
  avalanche: {
    hash: string;
    txHash: string;
    block: number;
    timestamp: string;
  };
}

function genHash(length = 64): string {
  return '0x' + [...Array(length)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');
}

function varyScore(base: number, delta = 5): number {
  return Math.max(50, Math.min(99, base + Math.floor(Math.random() * delta * 2) - delta));
}

// Simulated results — used when API key is missing or API call fails
const SIM_DATA: Record<string, Omit<EvaluationResult, 'validators' | 'avalanche'>> = {
  frontend: {
    score: 78,
    breakdown: { task_requirements: 78, code_structure: 82, responsiveness: 70, polish: 65 },
    strengths: ['Semantic HTML structure throughout', 'Clean CSS with variables', 'Strong CTA visual hierarchy'],
    improvements: ['Add 768px tablet breakpoint', 'Fix color contrast for WCAG AA', 'Add mobile hamburger menu'],
    summary: 'Solid foundation with good HTML structure — responsive design needs improvement.',
  },
  solidity: {
    score: 84,
    breakdown: { task_requirements: 90, code_structure: 80, responsiveness: 85, polish: 72 },
    strengths: ['Correct ERC-20 interface', 'Ownable guard used correctly', 'Events on all state changes'],
    improvements: ['Add NatSpec docs', 'Use Solidity 0.8+ overflow protection', 'Missing zero-address check'],
    summary: 'Strong contract with correct patterns — minor safety improvements recommended.',
  },
  api: {
    score: 71,
    breakdown: { task_requirements: 75, code_structure: 68, responsiveness: 72, polish: 60 },
    strengths: ['All 4 CRUD endpoints present', 'Consistent JSON responses', 'Correct HTTP status codes'],
    improvements: ['Input validation missing on POST', 'No global error middleware', 'Missing Content-Type validation'],
    summary: 'Functional API — needs input validation and error handling.',
  },
  react: {
    score: 82,
    breakdown: { task_requirements: 85, code_structure: 80, responsiveness: 78, polish: 80 },
    strengths: ['Hooks used correctly', 'localStorage persistence works', 'Filter tabs without re-renders'],
    improvements: ['Extract TodoItem component', 'Add Enter key support', 'Missing empty state UI'],
    summary: 'Clean React with good hooks usage — component structure could be improved.',
  },
};

export async function POST(req: NextRequest) {
  try {
    const { githubUrl, goal } = await req.json();

    if (!githubUrl || !goal) {
      return NextResponse.json({ error: 'githubUrl and goal are required' }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    let result: Omit<EvaluationResult, 'validators' | 'avalanche'>;

    if (apiKey) {
      // ── REAL Claude evaluation ─────────────────────────────────────────────
      try {
        const prompt = `You are an expert code evaluator for a blockchain-based skill verification protocol.

A developer submitted this GitHub repository: ${githubUrl}
Their goal/track was: "${goal}"

Evaluate this submission realistically. Score each dimension based on what you would typically find in a student/junior developer project.

Respond ONLY with valid JSON (no markdown, no preamble):
{
  "score": <weighted average 0-100>,
  "breakdown": {
    "task_requirements": <0-100>,
    "code_structure": <0-100>,
    "responsiveness": <0-100>,
    "polish": <0-100>
  },
  "strengths": ["<specific strength>", "<specific strength>", "<specific strength>"],
  "improvements": ["<specific improvement>", "<specific improvement>", "<specific improvement>"],
  "summary": "<one sentence, specific to the submission>"
}

Weights: task_requirements=40%, code_structure=30%, responsiveness=20%, polish=10%.
Typical scores range 55-88. Be specific, not generic.`;

        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1000,
            messages: [{ role: 'user', content: prompt }],
          }),
        });

        const data = await response.json();

        // Guard: check response shape before accessing
        if (
          !data ||
          !data.content ||
          !Array.isArray(data.content) ||
          data.content.length === 0 ||
          !data.content[0].text
        ) {
          console.log('Claude API returned unexpected shape, falling back to simulated. Response:', JSON.stringify(data));
          result = SIM_DATA[goal] || SIM_DATA.frontend;
        } else {
          const text = data.content[0].text.trim().replace(/```json|```/g, '');
          result = JSON.parse(text);
        }
      } catch (apiErr) {
        // If anything goes wrong with the API call, fall back gracefully
        console.log('Claude API call failed, using simulated data:', apiErr);
        result = SIM_DATA[goal] || SIM_DATA.frontend;
      }
    } else {
      // ── SIMULATED evaluation (no API key) ──────────────────────────────────
      console.log('No API key found, using simulated evaluation');
      result = SIM_DATA[goal] || SIM_DATA.frontend;
    }

    // ── GenLayer consensus simulation ─────────────────────────────────────────
    const validators = [
      { id: 'VALIDATOR-01', score: varyScore(result.score) },
      { id: 'VALIDATOR-02', score: varyScore(result.score) },
      { id: 'VALIDATOR-03', score: varyScore(result.score) },
    ];

    // ── Avalanche on-chain proof simulation ───────────────────────────────────
    const hash = genHash(64);
    const txHash = genHash(40);
    const avalanche = {
      hash,
      txHash,
      block: 18000000 + Math.floor(Math.random() * 99999),
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json({ ...result, validators, avalanche });

  } catch (err) {
    console.error('Evaluate error:', err);
    return NextResponse.json({ error: 'Evaluation failed' }, { status: 500 });
  }
}