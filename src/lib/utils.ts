// ── Random hex string ────────────────────────────────────────────────────

export function randomHex(len: number): string {
  return [...Array(len)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');
}

// ── Grade from score ─────────────────────────────────────────────────────

export function getGrade(score: number): { label: string; color: string } {
  if (score >= 90) return { label: '⬡ ELITE',      color: '#00E5A0' };
  if (score >= 75) return { label: '◆ PROFICIENT',  color: '#60A5FA' };
  if (score >= 60) return { label: '◇ DEVELOPING',  color: '#F59E0B' };
  return              { label: '○ BEGINNER',     color: '#FF6B6B' };
}

// ── Sleep util for async animations ──────────────────────────────────────

export function sleep(ms: number): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}

// ── Copy to clipboard ─────────────────────────────────────────────────────

export async function copyToClipboard(text: string): Promise<void> {
  await navigator.clipboard?.writeText(text);
}