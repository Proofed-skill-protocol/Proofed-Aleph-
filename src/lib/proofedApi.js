const API_URL = process.env.NEXT_PUBLIC_PROOFED_API_URL || 'https://proofed-api.vercel.app';

export async function submitAndEvaluate(challengeId, githubUrl) {
  const params = new URLSearchParams({ challenge_id: challengeId, url: githubUrl });
  const res = await fetch(`${API_URL}/submit_and_evaluate?${params}`, { method: 'POST' });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail || 'Submission failed');
  }
  return res.json();
}

export async function getResult(challengeId, userAddress) {
  const params = new URLSearchParams({ challenge_id: challengeId, user_address: userAddress });
  const res = await fetch(`${API_URL}/get_result?${params}`);
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail || 'Failed to fetch result');
  }
  return res.json();
}

/** Poll until has_evaluated is true (consensus complete) */
export async function pollForResult(challengeId, userAddress, onUpdate) {
  const MAX_ATTEMPTS = 25;
  const INTERVAL_MS = 5000;

  for (let i = 0; i < MAX_ATTEMPTS; i++) {
    try {
      const result = await getResult(challengeId, userAddress);
      if (result?.has_evaluated === true) {
        // Parse the feedback JSON string from the contract
        result.feedback = JSON.parse(result.feedback || '{}');
        return result;
      }
    } catch (e) {
      // not ready yet, keep polling
    }
    onUpdate?.(i + 1, MAX_ATTEMPTS);
    await new Promise(r => setTimeout(r, INTERVAL_MS));
  }

  throw new Error('Evaluation timed out. The consensus may still be running — check back later.');
}