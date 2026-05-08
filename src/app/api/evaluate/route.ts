// src/app/api/evaluate/route.ts
import { NextRequest, NextResponse } from 'next/server';

export interface EvaluationResult {
  score:        number;
  breakdown:    number[];
  strengths:    string[];
  improvements: string[];
  summary:      string;
  githubError?: boolean; // surface to client so it can show GithubFetchWarning
  evalMode?:    'ai' | 'simulated' | 'fallback';
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function varyScore(base: number, delta = 4): number {
  return Math.max(50, Math.min(99, base + Math.floor(Math.random() * delta * 2) - delta));
}

/** Fetch with a hard timeout so GitHub calls never hang the route */
async function fetchWithTimeout(url: string, opts: RequestInit = {}, ms = 8_000): Promise<Response> {
  const ac = new AbortController();
  const id = setTimeout(() => ac.abort(), ms);
  try {
    return await fetch(url, { ...opts, signal: ac.signal });
  } finally {
    clearTimeout(id);
  }
}

async function fetchFileContent(owner: string, repo: string, path: string): Promise<string> {
  try {
    const res = await fetchWithTimeout(
      `https://raw.githubusercontent.com/${owner}/${repo}/main/${path}`,
      {},
      5_000,
    );
    if (!res.ok) return '';
    return (await res.text()).slice(0, 2000);
  } catch {
    return '';
  }
}

// ─── GitHub repo fetcher ──────────────────────────────────────────────────────

interface RepoFetchResult {
  content: string;
  error: 'private' | 'not-found' | 'timeout' | null;
}

async function fetchRepoContent(githubUrl: string): Promise<RepoFetchResult> {
  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) return { content: '', error: 'not-found' };

  const [, owner, repo] = match;
  const cleanRepo = repo.replace(/\.git$/, '');

  try {
    const [readmeRes, repoRes, treeRes] = await Promise.all([
      fetchWithTimeout(`https://raw.githubusercontent.com/${owner}/${cleanRepo}/main/README.md`, {}, 6_000),
      fetchWithTimeout(`https://api.github.com/repos/${owner}/${cleanRepo}`, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      }, 6_000),
      fetchWithTimeout(`https://api.github.com/repos/${owner}/${cleanRepo}/git/trees/main?recursive=1`, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      }, 8_000),
    ]);

    // 404 = repo not found or private
    if (repoRes.status === 404) return { content: '', error: 'not-found' };
    if (repoRes.status === 403) return { content: '', error: 'private' };

    const readme    = readmeRes.ok ? await readmeRes.text() : '';
    const repoData  = repoRes.ok   ? await repoRes.json()   : {};
    const treeData  = treeRes.ok   ? await treeRes.json()   : {};

    const sourceExtensions = ['.ts', '.tsx', '.js', '.jsx', '.sol', '.py', '.json'];
    const ignoreDirs       = ['node_modules', '.next', 'dist', 'build', '.git'];

    const sourceFiles: string[] = (treeData.tree || [])
      .map((f: any) => f.path as string)
      .filter((p: string) =>
        sourceExtensions.some(ext => p.endsWith(ext)) &&
        !ignoreDirs.some(dir => p.includes(dir)) &&
        !p.includes('package-lock') &&
        !p.includes('next-env')
      )
      .slice(0, 10);

    const fileContents = await Promise.all(
      sourceFiles.map(async (path) => {
        const c = await fetchFileContent(owner, cleanRepo, path);
        return c ? `\n\n### ${path}\n\`\`\`\n${c}\n\`\`\`` : '';
      })
    );

    const allFiles = (treeData.tree || [])
      .map((f: any) => f.path)
      .filter((p: string) => !ignoreDirs.some(d => p.includes(d)))
      .slice(0, 80)
      .join('\n');

    return {
      error: null,
      content: `
Repository: ${owner}/${cleanRepo}
Description: ${repoData.description || 'None'}
Language: ${repoData.language || 'Unknown'}
Stars: ${repoData.stargazers_count || 0}
Topics: ${(repoData.topics || []).join(', ') || 'None'}

File structure:
${allFiles || 'Could not fetch'}

README (first 2000 chars):
${readme ? readme.slice(0, 2000) : 'No README found'}

Actual source code:
${fileContents.filter(Boolean).join('\n') || 'Could not fetch source files'}
      `.trim(),
    };
  } catch (err: any) {
    console.error('[evaluate] fetchRepoContent error:', err);
    const isTimeout = err?.name === 'AbortError';
    return { content: '', error: isTimeout ? 'timeout' : 'not-found' };
  }
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);

    if (!body?.githubUrl || !body?.goal) {
      return NextResponse.json(
        { error: 'githubUrl and goal are required' },
        { status: 400 },
      );
    }

    const { githubUrl, goal } = body;
    const apiKey = process.env.ANTHROPIC_API_KEY;

    // ── Step 1: Fetch repo ────────────────────────────────────────────────────
    const { content: repoContent, error: repoError } = await fetchRepoContent(githubUrl);

    // Surface GitHub errors to the client with a specific flag
    if (repoError === 'private' || repoError === 'not-found') {
      return NextResponse.json(
        {
          githubError: true,
          error: repoError === 'private'
            ? 'Repository is private — make it public and resubmit.'
            : 'Repository not found — check the URL and resubmit.',
          score: 0, breakdown: [], strengths: [], improvements: [], summary: '',
        },
        { status: 422 }, // Unprocessable — client should show GithubFetchWarning
      );
    }

    // Timeout fetching repo — continue with partial eval, flag it
    const repoFetchFailed = repoError === 'timeout' || !repoContent;

    // ── Step 2: AI evaluation ─────────────────────────────────────────────────
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

        // Claude call with its own timeout
        const claudeAc = new AbortController();
        const claudeTimeout = setTimeout(() => claudeAc.abort(), 30_000);

        let response: Response;
        try {
          response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': apiKey,
              'anthropic-version': '2023-06-01',
            },
            body: JSON.stringify({
              model: 'claude-sonnet-4-6',
              max_tokens: 1000,
              messages: [{ role: 'user', content: prompt }],
            }),
            signal: claudeAc.signal,
          });
        } finally {
          clearTimeout(claudeTimeout);
        }

        if (!response.ok) {
          throw new Error(`Claude API ${response.status}`);
        }

        const data = await response.json();
        if (!data?.content?.[0]?.text) throw new Error('Bad Claude response shape');

        const text = data.content[0].text.trim().replace(/```json|```/g, '').trim();
        result = { ...JSON.parse(text), evalMode: 'ai' };

      } catch (apiErr: any) {
        console.error('[evaluate] Claude API failed:', apiErr);

        // Distinguish timeout vs other Claude failures — both get a simulated fallback
        // but we log differently so you can alert on elevated Claude error rates.
        const isClaudeTimeout = apiErr?.name === 'AbortError';
        console.error(`[evaluate] Claude ${isClaudeTimeout ? 'timed out' : 'errored'}`);

        result = {
          evalMode: 'fallback',
          score: 45,
          breakdown: [40, 50, 45, 40],
          strengths: ['Repository is accessible', 'Has some structure'],
          improvements: [
            'Does not clearly match the selected track goal',
            'No relevant technology detected',
            'README does not describe required skills',
          ],
          summary: 'AI evaluation temporarily unavailable — score is a fallback estimate.',
        };
      }
    } else {
      // No API key or repo content — simulated mode
      result = {
        evalMode: repoFetchFailed ? 'fallback' : 'simulated',
        score: 40,
        breakdown: [35, 45, 40, 35],
        strengths: ['Repository exists and is public'],
        improvements: [
          repoFetchFailed
            ? 'Repository could not be read — check it is public'
            : 'Could not fully evaluate — ensure repo is public',
          'Add a detailed README',
          'Make sure your project matches the track',
        ],
        summary: repoFetchFailed
          ? 'Repository fetch timed out — score is an estimate only.'
          : 'Running in simulated mode — set ANTHROPIC_API_KEY for real AI evaluation.',
      };
    }

    const validators = [
      { id: 'VALIDATOR-01', score: varyScore(result.score) },
      { id: 'VALIDATOR-02', score: varyScore(result.score) },
      { id: 'VALIDATOR-03', score: varyScore(result.score) },
    ];

    return NextResponse.json({ ...result, validators });

  } catch (err) {
    console.error('[evaluate] Unhandled error:', err);
    return NextResponse.json(
      { error: 'Evaluation failed — please try again.' },
      { status: 500 },
    );
  }
}