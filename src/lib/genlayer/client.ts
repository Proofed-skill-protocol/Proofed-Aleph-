import { createClient } from 'genlayer-js';
import { testnetBradbury } from 'genlayer-js/chains';
import type { Address } from 'genlayer-js/types';

const CONTRACT = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x5D0f832B8B8220CB422ea8fdd3856cEcAE74B03f';

interface EthereumProvider {
  isMetaMask?: boolean;
  request: (args: { method: string; params?: any[] }) => Promise<any>;
}
declare global { interface Window { ethereum?: EthereumProvider; } }

export async function connectWallet(): Promise<string> {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error("MetaMask is not installed. Please install it to continue.");
  }
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    if (!accounts || accounts.length === 0) throw new Error("No accounts found");
    return accounts[0];
  } catch (err: any) {
    if (err.code === 4001) throw new Error("Connection request cancelled by user.");
    throw new Error(`Connection failed: ${err.message}`);
  }
}

export function getClient(address?: string) {
  const config: any = { chain: testnetBradbury };
  if (address) config.account = address as Address;
  return createClient(config);
}

export interface Challenge {
  id:           string;
  title:        string;
  description:  string;
  rubric:       string;
  creator:      string;
  pool_amount:  number;
  is_open:      boolean;
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

export function parseFeedback(raw: string): Feedback {
  try { return JSON.parse(raw); }
  catch { return { strengths: '', improvements: '', category_breakdown: '' }; }
}

export async function createChallenge(params: {
  challengeId: string; title: string; description: string; rubric: string; walletAddress: string;
}): Promise<string> {
  if (!CONTRACT) throw new Error("Contract address is not configured");
  const tx = await getClient(params.walletAddress).writeContract({
    address: CONTRACT as Address,
    functionName: 'create_challenge',
    args: [params.challengeId, params.title, params.description, params.rubric],
    value: BigInt(0),
  });
  return String(tx);
}

export async function submitToChallenge(params: {
  challengeId: string; githubUrl: string; walletAddress: string;
}): Promise<string> {
  if (!CONTRACT) throw new Error("Contract address is not configured");
  const tx = await getClient(params.walletAddress).writeContract({
    address: CONTRACT as Address,
    functionName: 'submit',
    args: [params.challengeId, params.githubUrl],
    value: BigInt(0),
  });
  return String(tx);
}

export async function evaluateSubmission(params: {
  challengeId: string; walletAddress: string;
}): Promise<string> {
  if (!CONTRACT) throw new Error("Contract address is not configured");
  const tx = await getClient(params.walletAddress).writeContract({
    address: CONTRACT as Address,
    functionName: 'evaluate',
    args: [params.challengeId],
    value: BigInt(0),
  });
  return String(tx);
}

export async function claimReward(params: {
  challengeId: string; walletAddress: string;
}): Promise<string> {
  if (!CONTRACT) throw new Error("Contract address is not configured");
  const tx = await getClient(params.walletAddress).writeContract({
    address: CONTRACT as Address,
    functionName: 'claim_reward',
    args: [params.challengeId],
    value: BigInt(0),
  });
  return String(tx);
}

export async function getAllChallenges(): Promise<Challenge[]> {
  if (!CONTRACT) return [];
  try {
    const result = await getClient().readContract({
      address: CONTRACT as Address,
      functionName: 'get_all_challenges',
      args: [],
    });
    return (result as unknown as Challenge[]) ?? [];
  } catch (err) { console.error('get_all_challenges failed:', err); return []; }
}

export async function getChallenge(challengeId: string): Promise<Challenge | null> {
  if (!CONTRACT) return null;
  try {
    const result = await getClient().readContract({
      address: CONTRACT as Address,
      functionName: 'get_challenge',
      args: [challengeId],
    });
    return (result as unknown as Challenge) ?? null;
  } catch (err) { console.error('get_challenge failed:', err); return null; }
}

export async function getSubmission(params: {
  challengeId: string; submitterAddress: string;
}): Promise<Submission | null> {
  if (!CONTRACT) return null;
  try {
    const result = await getClient().readContract({
      address: CONTRACT as Address,
      functionName: 'get_submission',
      args: [params.challengeId, params.submitterAddress],
    });
    return (result as unknown as Submission) ?? null;
  } catch (err) { console.error('get_submission failed:', err); return null; }
}

export async function getReputation(address: string): Promise<{
  cumulative_score: number; challenges_passed: number;
} | null> {
  if (!CONTRACT) return null;
  try {
    const result = await getClient().readContract({
      address: CONTRACT as Address,
      functionName: 'get_reputation',
      args: [address],
    });
    return result as unknown as { cumulative_score: number; challenges_passed: number };
  } catch (err) { console.error('get_reputation failed:', err); return null; }
}

export async function getLeaderboard(): Promise<{
  address: string; cumulative_score: number; challenges_passed: number;
}[]> {
  if (!CONTRACT) return [];
  try {
    const result = await getClient().readContract({
      address: CONTRACT as Address,
      functionName: 'get_leaderboard',
      args: [],
    });
    return result as unknown as { address: string; cumulative_score: number; challenges_passed: number; }[];
  } catch (err) { console.error('get_leaderboard failed:', err); return []; }
}