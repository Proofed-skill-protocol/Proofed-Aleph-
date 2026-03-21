You're right to be confused, let me clarify this once and for all.

---

**There are two READMEs I made:**

**README #1** — The technical one (inside the zip file)
- Written for the **team** (Mauro, Roheemah, Harshita)
- Has "simulated vs real", next steps, names, internal notes
- Lives inside `src/` folder
- Judges should NOT see this as the main README

**README #2** — The public one (I sent as text to copy paste)
- Written for **judges and the public**
- Has problem, solution, how it works, business model, track alignment
- This is what should be the main `README.md` at the root of the repo
- **This is the one based on your original document** ✅

---

**What to do right now — one action:**

Go to the repo → click `README.md` → pencil icon → delete everything → paste this:

---

# ⬡ Proofed Protocol

> Turn real work into tamper-proof, verifiable proof of skill — evaluated by AI, validated by consensus, stored on-chain.

**Aleph Hackathon 2026** · Avalanche · GenLayer · PL_Genesis

---

## What is this?

Most online courses have completion rates below 15% — not because people are lazy, but because there is no feedback loop, no clear progression, and no proof that they actually learned anything.

**Proofed Protocol** doesn't create content. It evaluates real work and converts it into tamper-proof, verifiable proof of skill.

We are a coordination layer between:
- real work (GitHub submissions)
- AI evaluation (Claude API with a visible rubric)
- decentralized validation (GenLayer · Bradbury testnet)
- on-chain proof (Avalanche Fuji C-Chain)
- performance-based rewards (proportional reward split)

---

## How it works

```
User picks a goal
      ↓
AI generates a structured task + curated resource
      ↓
User builds it and pushes to GitHub
      ↓
Claude AI evaluates against a visible rubric (0–100)
      ↓
3 GenLayer validators reach consensus on the score
      ↓
Cryptographic hash stored on Avalanche
      ↓
Proof-of-Skill badge issued + reward distributed
```

---

## Evaluation Rubric

| Criteria | Weight |
|---|---|
| Task requirements met | 40% |
| Code structure & cleanliness | 30% |
| Responsiveness / correctness | 20% |
| Bonus polish | 10% |

---

## Reward Distribution

Reward pools are distributed proportionally by score:

```js
const total = scores.reduce((a, b) => a + b, 0);
const rewards = scores.map(score => (score / total) * pool);
```

---

## Tech Stack

| Layer | Technology | Role |
|---|---|---|
| AI | Claude API (Anthropic) | Task generation, rubric evaluation, feedback |
| Decentralized Validation | GenLayer · Bradbury Testnet | Multi-LLM consensus, Optimistic Democracy |
| Blockchain | Avalanche Fuji C-Chain | On-chain proof storage, badge linkage |
| Frontend | Next.js 14 · Tailwind CSS | Submission flow, leaderboard, verification page |
| Reward Logic | TypeScript (pure math) | Proportional score-based distribution |

---

## Hackathon Track Alignment

### ⬡ Avalanche Track
- Smart contract ProofStorage.sol deployed on Avalanche Fuji C-Chain
- Evaluation result hashed and stored on-chain
- Public verification page linked to on-chain proof

### ⬡ GenLayer Track
- Intelligent Contract SkillEvaluator.py deployed on Bradbury testnet
- Implements Optimistic Democracy consensus
- Implements Equivalence Principle
- 3 validators independently score each submission — consensus finalizes the result
- Directly aligned with GenLayer's Future of Work use case (Rally.fun listed as reference)

### ⬡ PL_Genesis Track
- Submitted to Crecimiento Track in PL_Genesis Hackathon
- AI + crypto project with strong real-world use case
- Scalable decentralized verification infrastructure

---

## Key Differentiator

We don't reward course completion. We verify that you can actually build something.

- Existing platforms (Coursera, Udemy) issue certificates for watching videos
- We issue proof for completing real work, evaluated by AI, validated by consensus, stored on-chain
- Credentials are cryptographically verifiable — not a PDF with a logo

---

## Business Model

| Stream | Model | Potential |
|---|---|---|
| Sponsored Bounties | 10–15% fee on pool | Core engine at scale |
| Entry-Based Pools | Cut of entry fees | Recurring engagement |
| Verification API | $99–$499/mo | High-margin B2B |
| Premium Evaluation | Per-use or subscription | Upsell on base users |

Unit economics: 10% fee × $1,000 pool × 100 bounties/month = $10,000 MRR from bounties alone.

---

## One-Line Pitch

"We turn real work into tamper-proof, verifiable proof of skill — evaluated by AI, validated by consensus, stored on-chain."

---

Built at Aleph Hackathon 2026 · GenLayer · Avalanche
