# ⬡ Proofed Protocol

> The verification layer for the Web3 talent economy.

**Aleph Hackathon 2026** · Avalanche · GenLayer · PL_Genesis

---

## The Problem

Hundreds of thousands of people are trying to break into Web3. They find scattered YouTube videos, outdated tutorials, and courses that hand out certificates for watching content.

That certificate doesn't prove they can build anything.

At the same time, AI can now write code. So the question is no longer "can you memorize syntax" — it's "can you actually build something real, understand what you built, and prove it."

There is no tamper-proof, verifiable way to answer that question. Until now.

---

## The Numbers

| Stat | Data |
|---|---|
| Average online course completion rate | 5–15% |
| Web3 developers active globally (2024) | ~25,000 |
| Projected Web3 market size by 2034 | $226 billion |
| CAGR of Web3 market | 48.2% |
| Developers who say certificates don't reflect real skill | 87% |
| Companies that struggle to verify candidate skills | 74% |

The market needs hundreds of thousands of verified Web3 builders. The tools to verify them don't exist yet.

---

## What is Proofed Protocol?

Proofed Protocol is a coordination layer between real work, AI evaluation, decentralized validation, and on-chain proof.

We don't create content. We curate personalized learning paths, evaluate real work, and convert the result into a permanent, tamper-proof credential stored on-chain.

Not a certificate for watching a video. Proof that you can actually build.

---

## Our Value Proposition

**1. Personalized learning path based on your goals**
The user defines what they want to learn. The AI builds a curated path — structured resources in the right order, matched to their track and level.

**2. A community where real progress is measured**
Progress isn't self-reported. It's verified. Every completion, every score, every proof is on-chain — visible, comparable, and real.

**3. On-chain validation of tasks and projects**
When a user completes a task, the result is evaluated by AI, validated by decentralized consensus, and stored permanently on Avalanche. Anyone can verify it. No one can fake it.

**4. Gamification centered on real learning**
Reward pools incentivize genuine effort — not just finishing. Rewards are distributed proportionally by score. The better you actually build, the more you earn. Organizations can fund bounties for specific skills they need.

---

## How we compare

| | Proofed Protocol | Coursera / Udemy | HackerRank / Coderbyte | ChatGPT / AI tools | LearnWeb3 / Alchemy U | Layer3 / RabbitHole |
|---|---|---|---|---|---|---|
| Personalized learning path | ✅ | ❌ | ❌ | ⚠️ No structure | ⚠️ Fixed curriculum | ❌ |
| Evaluates real work | ✅ | ❌ | ⚠️ Coding tests only | ⚠️ No verification | ❌ | ❌ |
| Decentralized AI consensus | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| On-chain tamper-proof proof | ✅ | ❌ | ❌ | ❌ | ❌ | ⚠️ Activity only |
| Verifiable by anyone | ✅ | ❌ | ❌ | ❌ | ❌ | ⚠️ Partial |
| Real economic rewards by score | ✅ | ❌ | ❌ | ❌ | ❌ | ⚠️ Quizzes only |
| Web3 native | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Credential can be faked | ❌ Never | ✅ Easily | ✅ Easily | ✅ Screenshot | ✅ Easily | ⚠️ Partially |

---

## How it works

```
User picks a Web3 category
        ↓
Picks a learning track
        ↓
Receives a curated path — 3 resources in order
        ↓
Completes resources → task unlocks
        ↓
Builds the task and pushes to GitHub
        ↓
Optionally joins a reward pool ($2 or $5 entry)
        ↓
Claude AI evaluates against a visible rubric (0–100)
        ↓
3 GenLayer validators reach independent consensus
        ↓
Cryptographic hash stored permanently on Avalanche
        ↓
Proof-of-Skill badge issued + rewards split by score
```

---

## Evaluation Rubric

| Criteria | Weight |
|---|---|
| Task requirements met | 40% |
| Code structure & cleanliness | 30% |
| Responsiveness / correctness | 20% |
| Bonus polish | 10% |

Rubric is visible to the user before they start. No black box.

---

## Reward Pool

Organizations or users fund skill bounties. Participants optionally enter ($2 or $5 USDC). Rewards are distributed proportionally by score — the better you build, the more you earn.

```js
const total = scores.reduce((a, b) => a + b, 0);
const rewards = scores.map(score => (score / total) * pool);
```

This creates real economic incentive to do genuine work — not just finish a course.

---

## Available Tracks (MVP)

**Tech** ✅ Active
- Smart Contracts — Solidity · EVM · Deployment
- Web3 Frontend — React · ethers.js · Wagmi
- Web3 Backend — Node · APIs · Indexing

**Marketing** — Coming soon

**Design** — Coming soon

---

## Tech Stack

| Layer | Technology | Role |
|---|---|---|
| AI Agent | Claude API (Anthropic) | Learning path curation, rubric evaluation, structured feedback |
| Decentralized Validation | GenLayer · Bradbury Testnet | 3-validator consensus, Optimistic Democracy, Equivalence Principle |
| Blockchain | Avalanche Fuji C-Chain | Tamper-proof hash storage, badge linkage, reward distribution |
| Frontend | Next.js 14 · Tailwind CSS | Full product flow, leaderboard, public verification page |
| Reward Logic | TypeScript | Proportional score-based pool distribution |

API Repository: https://github.com/mauroradino/Proofed_API · Live: https://proofed-api.vercel.app

---

## Hackathon Track Alignment

### ⬡ Avalanche
- `ProofStorage.sol` deployed on Avalanche Fuji C-Chain
- Evaluation result hashed and stored on-chain
- Public verification page — anyone can verify any proof

### ⬡ GenLayer
- `SkillEvaluator.py` intelligent contract deployed on Bradbury testnet
- Implements Optimistic Democracy consensus
- Implements Equivalence Principle
- 3 validators independently score — consensus finalizes the result
- Directly aligned with GenLayer Future of Work use case
- Rally.fun listed as reference project in GenLayer docs — we are building the next layer

### ⬡ PL_Genesis
- Submitted to Crecimiento Track in PL_Genesis Hackathon
- AI + crypto with strong real-world use case
- Scalable infrastructure for the Web3 talent economy

---

## Key Differentiator

HackerRank tells you someone passed a test on their platform. Proofed tells the whole world — permanently, on-chain, trustlessly — that a person built something real and earned a score for it.

- Existing platforms issue certificates for completing courses
- We issue proof for completing real work
- The credential is cryptographically verifiable and lives forever on-chain

---

## Business Model

| Stream | Model | Potential |
|---|---|---|
| Sponsored Bounties | 10–15% fee on pool | Core engine at scale |
| Entry-Based Pools | Cut of $2–$5 entries | Recurring user engagement |
| Verification API | $99–$499/mo subscription | High-margin B2B hiring layer |
| Premium Evaluation | Per-use or subscription | Upsell on engaged users |

Unit economics: 10% fee × $1,000 pool × 100 active bounties/month = $10,000 MRR from fees alone, before any B2B revenue.

---

## Getting Started

```bash
git clone https://github.com/Proofed-skill-protocol/Proofed-Aleph-
cd Proofed-Aleph-
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

```bash
# .env.local
ANTHROPIC_API_KEY=sk-ant-...
```

Without an API key the app runs in simulated mode with realistic pre-set results.

---

## One-Line Pitch

*"Proofed Protocol is the first skill verification layer for Web3 — where anyone trying to break into blockchain can prove they can actually build, not just that they watched a course."*

---

Built at Aleph Hackathon 2026 · GenLayer · Avalanche
