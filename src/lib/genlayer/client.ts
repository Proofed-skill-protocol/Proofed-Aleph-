import { createClient, createAccount } from 'genlayer-js';
import type { Address } from 'genlayer-js/types';

const RPC_URL  = process.env.NEXT_PUBLIC_GENLAYER_RPC_URL  || 'https://studio.genlayer.com/api';
const CONTRACT = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS  || '';

let _account: ReturnType<typeof createAccount> | null = null;

function getAccount() {
  if (!_account) _account = createAccount();
  return _account;
}

function getClient() {
  return createClient({
    endpoint: RPC_URL,
    account:  getAccount(),
  });
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
  challengeId: string; title: string; description: string; rubric: string;
}): Promise<string | null> {
  if (!CONTRACT) return null;
  try {
    const tx = await getClient().writeContract({
      address: CONTRACT as Address,
      functionName: 'create_challenge',
      args: [params.challengeId, params.title, params.description, params.rubric],
      value: BigInt(0),
    });
    return String(tx);
  } catch (err) { console.error('create_challenge failed:', err); return null; }
}

export async function submitToChallenge(params: {
  challengeId: string; githubUrl: string;
}): Promise<string | null> {
  if (!CONTRACT) return null;
  try {
    const tx = await getClient().writeContract({
      address: CONTRACT as Address,
      functionName: 'submit',
      args: [params.challengeId, params.githubUrl],
      value: BigInt(0),
    });
    return String(tx);
  } catch (err) { console.error('submit failed:', err); return null; }
}

export async function evaluateSubmission(params: {
  challengeId: string;
}): Promise<string | null> {
  if (!CONTRACT) return null;
  try {
    const tx = await getClient().writeContract({
      address: CONTRACT as Address,
      functionName: 'evaluate',
      args: [params.challengeId],
      value: BigInt(0),
    });
    return String(tx);
  } catch (err) { console.error('evaluate failed:', err); return null; }
}

export async function claimReward(params: {
  challengeId: string;
}): Promise<string | null> {
  if (!CONTRACT) return null;
  try {
    const tx = await getClient().writeContract({
      address: CONTRACT as Address,
      functionName: 'claim_reward',
      args: [params.challengeId],
      value: BigInt(0),
    });
    return String(tx);
  } catch (err) { console.error('claim_reward failed:', err); return null; }
}

export async function getAllChallenges(): Promise<Challenge[]> {
  if (!CONTRACT) return [];
  try {
    const result = await getClient().readContract({
      address: CONTRACT as Address,
      functionName: 'get_all_challenges',
      args: [],
    });
    return (result as Challenge[]) ?? [];
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
    return (result as Challenge) ?? null;
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
    return (result as Submission) ?? null;
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
    return result as { cumulative_score: number; challenges_passed: number };
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
    return result as { address: string; cumulative_score: number; challenges_passed: number; }[];
  } catch (err) { console.error('get_leaderboard failed:', err); return []; }
}

export function getSessionAddress(): string {
  return getAccount().address;
}