// src/lib/rewardSplit.ts
// Pure function — no dependencies
// Distributes a reward pool proportionally based on scores

export interface Participant {
  address: string;
  score: number;
  you?: boolean;
}

export interface RewardEntry extends Participant {
  share: number;   // 0–1
  reward: number;  // in pool currency
}

/**
 * Distribute a reward pool proportionally by score.
 * Returns entries sorted by score descending.
 */
export function splitRewards(
  participants: Participant[],
  poolAmount: number
): RewardEntry[] {
  if (!participants.length || poolAmount <= 0) return [];

  const total = participants.reduce((sum, p) => sum + p.score, 0);
  if (total === 0) return participants.map(p => ({ ...p, share: 0, reward: 0 }));

  return participants
    .map(p => ({
      ...p,
      share: p.score / total,
      reward: parseFloat(((p.score / total) * poolAmount).toFixed(2)),
    }))
    .sort((a, b) => b.score - a.score);
}

/**
 * Generate simulated leaderboard entries for demo.
 * Places `yourScore` as the first entry, rest are random competitors.
 */
export function buildLeaderboard(
  yourAddress: string,
  yourScore: number,
  poolAmount = 1000
): RewardEntry[] {
  const competitors: Participant[] = [
    { address: '0xA3f2...91Bc', score: Math.max(40, yourScore - (5 + Math.floor(Math.random() * 18))) },
    { address: '0x77Cc...3D1a', score: Math.max(35, yourScore - (12 + Math.floor(Math.random() * 20))) },
    { address: '0xB8e1...F204', score: Math.max(30, yourScore - (18 + Math.floor(Math.random() * 22))) },
  ];

  const you: Participant = {
    address: yourAddress.slice(0, 6) + '...' + yourAddress.slice(-4) + ' (you)',
    score: yourScore,
    you: true,
  };

  return splitRewards([you, ...competitors], poolAmount);
}
