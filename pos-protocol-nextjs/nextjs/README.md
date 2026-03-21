# Proof-of-Skill Protocol — MVP

> Turn real work into tamper-proof, verifiable proof of skill — evaluated by AI, validated by consensus, stored on-chain.

## Quick Start

```bash
npm install
cp .env.example .env.local
# Add ANTHROPIC_API_KEY to .env.local (optional — simulated mode works without it)
npm run dev
# Open http://localhost:3000
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx              ← Full 5-screen MVP flow (UI)
│   ├── layout.tsx            ← Root layout
│   ├── globals.css
│   └── api/
│       └── evaluate/
│           └── route.ts      ← POST /api/evaluate (Claude + GenLayer sim + Avalanche sim)
└── lib/
    └── rewardSplit.ts        ← Pure reward distribution math
```

## What's Real vs Simulated

| Feature | Status | Notes |
|---|---|---|
| GitHub URL input | ✅ Real | Validated on the frontend |
| AI evaluation | ✅ Real (if API key set) | Falls back to simulated if no key |
| Reward split math | ✅ Real | Pure JS proportional distribution |
| GenLayer consensus | 🟡 Simulated | Score ±4 per validator. Replace with GenLayer SDK when deploying to Bradbury |
| Avalanche proof | 🟡 Simulated | Hash generated locally. Replace with ethers.js + ProofStorage.sol on Fuji |

## Next Steps for Production

### GenLayer (Mauro)
1. Write `SkillEvaluator.py` intelligent contract using `genlayer-project-boilerplate`
2. Implement Optimistic Democracy consensus + Equivalence Principle
3. Deploy to Bradbury testnet
4. Replace simulated validators in `route.ts` with GenLayer SDK calls

### Avalanche (Roheemah)
1. Write `ProofStorage.sol`:
```solidity
contract ProofStorage {
  event ProofStored(address indexed wallet, bytes32 hash, uint score, uint timestamp);
  function store(bytes32 hash, uint score) external { emit ProofStored(msg.sender, hash, score, block.timestamp); }
}
```
2. Deploy to Avalanche Fuji C-Chain via `build.avax.network`
3. Replace simulated Avalanche block in `route.ts` with ethers.js call

### Reward Split (Harshita)
- `src/lib/rewardSplit.ts` is production-ready
- For on-chain distribution: pass `rewards[]` to a `RewardDistributor.sol` contract

## Hackathon Tracks
- **Avalanche**: `ProofStorage.sol` deployed on Avalanche L1
- **GenLayer**: `SkillEvaluator.py` on Bradbury testnet with Optimistic Democracy
- **PL_Genesis**: Submit to Crecimiento Track at pl-genesis hackathon
