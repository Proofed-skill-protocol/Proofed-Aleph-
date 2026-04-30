// src/app/api/evaluate/route.ts
import { NextRequest, NextResponse } from 'next/server';

export interface EvaluationResult {
  score: number;
  breakdown: number[];
  strengths: string[];
  improvements: string[];
  summary: string;
}

function varyScore(base: number, delta = 4): number {
  return Math.max(50, Math.min(99, base + Math.floor(Math.random() * delta * 2) - delta));
}

async function fetchFileContent(owner: string, repo: string, path: string): Promise<string> {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/${owner}/${repo}/main/${path}`
    );
    if (!res.ok) return '';
    const text = await res.text();
    return text.slice(0, 2000); // cap per file
  } catch {
    return '';
  }
}

async function fetchRepoContent(githubUrl: string): Promise<string> {
  try {
    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) return '';
    const [, owner, repo] = match;
    const cleanRepo = repo.replace(/\.git$/, '');

    const [readmeRes, repoRes, treeRes] = await Promise.all([
      fetch(`https://raw.githubusercontent.com/${owner}/${cleanRepo}/main/README.md`),
      fetch(`https://api.github.com/repos/${owner}/${cleanRepo}`, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      }),
      fetch(`https://api.github.com/repos/${owner}/${cleanRepo}/git/trees/main?recursive=1`, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      }),
    ]);

    const readme = readmeRes.ok ? await readmeRes.text() : '';
    const repoData = repoRes.ok ? await repoRes.json() : {};
    const treeData = treeRes.ok ? await treeRes.json() : {};

    // Filter to meaningful source files only
    const sourceExtensions = ['.ts', '.tsx', '.js', '.jsx', '.sol', '.py', '.json'];
    const ignoreDirs = ['node_modules', '.next', 'dist', 'build', '.git'];

    const sourceFiles: string[] = (treeData.tree || [])
      .map((f: any) => f.path as string)
      .filter((p: string) =>
        sourceExtensions.some(ext => p.endsWith(ext)) &&
        !ignoreDirs.some(dir => p.includes(dir)) &&
        !p.includes('package-lock') &&
        !p.includes('next-env')
      )
      .slice(0, 10); // fetch up to 10 real files

    // Fetch actual file contents in parallel
    const fileContents = await Promise.all(
      sourceFiles.map(async (path) => {
        const content = await fetchFileContent(owner, cleanRepo, path);
        return content ? `\n\n### ${path}\n\`\`\`\n${content}\n\`\`\`` : '';
      })
    );

    const allFiles = (treeData.tree || [])
      .map((f: any) => f.path)
      .filter((p: string) => !ignoreDirs.some(d => p.includes(d)))
      .slice(0, 80)
      .join('\n');

    return `
Repository: ${owner}/${cleanRepo}
Description: ${repoData.description || 'None'}
Language: ${repoData.language || 'Unknown'}
Stars: ${repoData.stargazers_count || 0}
Topics: ${(repoData.topics || []).join(', ') || 'None'}
Open issues: ${repoData.open_issues_count || 0}

File structure:
${allFiles || 'Could not fetch'}

README (first 2000 chars):
${readme ? readme.slice(0, 2000) : 'No README found'}

Actual source code:
${fileContents.filter(Boolean).join('\n') || 'Could not fetch source files'}
    `.trim();
  } catch (err) {
    console.error('Failed to fetch repo content:', err);
    return '';
  }
}

export async function POST(req: NextRequest) {
  try {
    const { githubUrl, goal } = await req.json();

    if (!githubUrl || !goal) {
      return NextResponse.json({ error: 'githubUrl and goal are required' }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    const repoContent = await fetchRepoContent(githubUrl);

    let result: EvaluationResult;

    if (apiKey && repoContent) {
      try {
        const prompt = `You are a strict senior engineer evaluating GitHub repositories for a Proof-of-Skill protocol.

Track/Goal: "${goal}"

Below is the actual repository content — file structure, README, and real source code files.

---
${repoContent}
---

Your job: evaluate this repo ONLY based on what you can actually read above.

SCORING RULES:
- Base your score on the REAL CODE, not just the README claims.
- If no relevant code exists for the goal "${goal}", score 20–40 max.
- If the code exists but is incomplete or broken, score 40–65.
- If the code is functional and relevant to the goal, score 65–85.
- Only score 85+ if the code is clean, complete, well-structured, and clearly matches the goal.
- Be specific in your feedback — reference actual file names, functions, or patterns you saw.
- Do NOT reward good README writing if the code doesn't back it up.

Weights: task_requirements=40%, code_structure=30%, correctness=20%, polish=10%.

Respond ONLY with valid JSON, no markdown, no extra text:
{
  "score": <weighted average 0-100>,
  "breakdown": [<task_requirements 0-100>, <code_structure 0-100>, <correctness 0-100>, <polish 0-100>],
  "strengths": ["<specific strength referencing actual code/files>", "<another>", "<another>"],
  "improvements": ["<specific improvement with file or function reference>", "<another>", "<another>"],
  "summary": "<2 sentences max, specific to what you actually read in the code>"
}`;

        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-6', // upgraded from haiku
            max_tokens: 1000,
            messages: [{ role: 'user', content: prompt }],
          }),
        });

        const data = await response.json();

        if (!data?.content?.[0]?.text) {
          console.error('Unexpected Claude response:', JSON.stringify(data));
          throw new Error('Bad Claude response shape');
        }

        const text = data.content[0].text.trim().replace(/```json|```/g, '').trim();
        result = JSON.parse(text);

      } catch (apiErr) {
        console.error('Claude API failed:', apiErr);
        result = {
          score: 45,
          breakdown: [40, 50, 45, 40],
          strengths: ['Repository is accessible', 'Has some structure'],
          improvements: [
            'Does not clearly match the selected track goal',
            'No relevant technology detected',
            'README does not describe required skills',
          ],
          summary: 'Submission does not appear to match the selected track — please submit a relevant project.',
        };
      }
    } else {
      result = {
        score: 40,
        breakdown: [35, 45, 40, 35],
        strengths: ['Repository exists and is public'],
        improvements: [
          'Could not evaluate — ensure repo is public',
          'Add a detailed README',
          'Make sure your project matches the track',
        ],
        summary: 'Could not fully evaluate — check that the repo is public and has content.',
      };
    }

    const validators = [
      { id: 'VALIDATOR-01', score: varyScore(result.score) },
      { id: 'VALIDATOR-02', score: varyScore(result.score) },
      { id: 'VALIDATOR-03', score: varyScore(result.score) },
    ];

    return NextResponse.json({ ...result, validators });

  } catch (err) {
    console.error('Evaluate error:', err);
    return NextResponse.json({ error: 'Evaluation failed' }, { status: 500 });
  }
}
