const API_URL = process.env.NEXT_PUBLIC_PROOFED_API_URL || 'https://proofed-api.vercel.app';

// ── Types ────────────────────────────────────────────────────────────────────

export interface Challenge {
  id:          string;
  title:       string;
  description: string;
  rubric:      string;
  creator:     string;
  pool_amount: number;
  is_open:     boolean;
}

export interface Submission {
  challenge_id:   string;
  submitter:      string;
  github_url:     string;
  has_evaluated:  boolean;
  score:          number;
  feedback:       string;
  passed:         boolean;
  reward_claimed: boolean;
}

export interface Feedback {
  strengths:          string;
  improvements:       string;
  category_breakdown: string;
}

// ── Functions ────────────────────────────────────────────────────────────────

export async function submitAndEvaluate(challengeId: string, githubUrl: string): Promise<any> {
  const params = new URLSearchParams({ challenge_id: challengeId, url: githubUrl });
  const res = await fetch(`${API_URL}/submit_and_evaluate?${params}`, { method: 'POST' });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail || 'Submission failed');
  }
  return res.json();
}

export async function getResult(challengeId: string, userAddress: string): Promise<Submission> {
  const params = new URLSearchParams({ challenge_id: challengeId, user_address: userAddress });
  const res = await fetch(`${API_URL}/get_result?${params}`);
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail || 'Failed to fetch result');
  }
  return res.json();
}

export async function submitToChallenge(
  challengeId: string,
  githubUrl: string,
  walletAddress: string
): Promise<any> {
  const res = await fetch(`${API_URL}/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      challenge_id: challengeId,
      github_url: githubUrl,
      wallet_address: walletAddress,
    }),
  });
  if (!res.ok) throw new Error((await res.json()).detail || 'Submit failed');
  return res.json();
}

export async function evaluateSubmission(
  challengeId: string,
  walletAddress: string
): Promise<any> {
  const res = await fetch(`${API_URL}/evaluate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ challenge_id: challengeId, wallet_address: walletAddress }),
  });
  if (!res.ok) throw new Error((await res.json()).detail || 'Evaluate failed');
  return res.json();
}

export async function claimReward(
  challengeId: string,
  walletAddress: string
): Promise<any> {
  const res = await fetch(`${API_URL}/claim_reward`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ challenge_id: challengeId, wallet_address: walletAddress }),
  });
  if (!res.ok) throw new Error((await res.json()).detail || 'Claim failed');
  return res.json();
}

export async function pollForResult(
  challengeId: string,
  userAddress: string,
  onUpdate?: (attempt: number, max: number) => void
): Promise<Submission & { feedback: Feedback }> {
  const MAX_ATTEMPTS = 25;
  const INTERVAL_MS  = 5000;

  for (let i = 0; i < MAX_ATTEMPTS; i++) {
    try {
      const result = await getResult(challengeId, userAddress);
      if (result?.has_evaluated === true) {
        (result as any).feedback = JSON.parse((result.feedback as string) || '{}');
        return result as Submission & { feedback: Feedback };
      }
    } catch {
      // not ready yet, keep polling
    }
    onUpdate?.(i + 1, MAX_ATTEMPTS);
    await new Promise(r => setTimeout(r, INTERVAL_MS));
  }

  throw new Error('Evaluation timed out. The consensus may still be running — check back later.');
}

export async function getSubmission({
  challengeId,
  submitterAddress,
}: {
  challengeId:      string;
  submitterAddress: string;
}): Promise<Submission | null> {
  const params = new URLSearchParams({
    challenge_id: challengeId,
    user_address: submitterAddress,
  });
  const res = await fetch(`${API_URL}/get_result?${params}`);
  if (!res.ok) return null;
  return res.json();
}

export function parseFeedback(raw: string): Feedback {
  try { return JSON.parse(raw); }
  catch { return { strengths: '', improvements: '', category_breakdown: '' }; }
}

export async function getAllChallenges(): Promise<Challenge[]> {
  const res = await fetch(`${API_URL}/get_all_challenges`);
  if (!res.ok) return [];
  return res.json();
}