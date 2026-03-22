// ── Types ──────────────────────────────────────────────────────────────────

export interface Resource {
  title: string;
  type: string;
  desc: string;
  url: string;
  linkLabel: string;
}

export interface EvalData {
  score: number;
  breakdown: number[];
  strengths: string[];
  improvements: string[];
  summary: string;
}

export interface TrackData {
  label: string;
  lead: string;
  resources: Resource[];
  task: { title: string; time: string };
  eval: EvalData;
}

export type TrackKey = 'smartcontracts' | 'frontend' | 'backend';

// ── Track & Path Data ──────────────────────────────────────────────────────

export const PATHS: Record<TrackKey, TrackData> = {
  smartcontracts: {
    label: 'Smart Contracts',
    lead: 'Master Solidity and deploy your first smart contract on a testnet.',
    resources: [
      {
        title: 'What is a Smart Contract?',
        type: 'ARTICLE · 15 MIN',
        desc: 'Understand what smart contracts are, how they work on the EVM, and why they matter for Web3. No code required for this first step.',
        url: 'https://ethereum.org/en/smart-contracts/',
        linkLabel: '→ Read on ethereum.org',
      },
      {
        title: 'Solidity in 1 Hour',
        type: 'VIDEO · 60 MIN',
        desc: 'A hands-on walkthrough of Solidity syntax, data types, functions, and events. Follow along and write your first contract.',
        url: 'https://www.youtube.com/watch?v=ipwxYa-F1uY',
        linkLabel: '→ Watch on YouTube',
      },
      {
        title: 'Deploy to a Testnet with Remix',
        type: 'TUTORIAL · 30 MIN',
        desc: 'Use Remix IDE to compile and deploy a contract to a testnet. Understand gas, transactions, and block explorers.',
        url: 'https://remix.ethereum.org/',
        linkLabel: '→ Open Remix IDE',
      },
    ],
    task: {
      title:
        'Build an ERC-20 token with mint, burn, and transfer functions. Add an owner-only mint guard. Emit custom events for every state-changing action. Deploy to a testnet.',
      time: '⏱ 3–4 hours',
    },
    eval: {
      score: 82,
      breakdown: [88, 80, 82, 70],
      strengths: [
        'Correct ERC-20 interface implementation',
        'Owner guard uses Ownable pattern correctly',
        'Events emitted on all state-changing functions',
      ],
      improvements: [
        'Add NatSpec documentation to public functions',
        'Missing zero-address check in transfer',
        'Consider adding a max supply cap',
      ],
      summary:
        'Strong smart contract with correct patterns — minor safety improvements recommended.',
    },
  },

  frontend: {
    label: 'Web3 Frontend',
    lead: 'Build a frontend that connects to the blockchain using ethers.js and React.',
    resources: [
      {
        title: 'How Web3 Frontends Work',
        type: 'ARTICLE · 20 MIN',
        desc: 'Learn how a React app connects to a wallet, reads from a smart contract, and sends transactions using ethers.js or wagmi.',
        url: 'https://docs.ethers.org/v6/',
        linkLabel: '→ Read ethers.js docs',
      },
      {
        title: 'Build a Web3 App with React + ethers.js',
        type: 'VIDEO · 45 MIN',
        desc: 'Follow along to build a complete Web3 frontend — wallet connect button, contract read, and contract write.',
        url: 'https://www.youtube.com/watch?v=a0osIaAOFSE',
        linkLabel: '→ Watch on YouTube',
      },
      {
        title: 'Connect MetaMask to Your React App',
        type: 'TUTORIAL · 25 MIN',
        desc: 'Step-by-step guide to integrating MetaMask wallet detection, connection, and account display in a React app.',
        url: 'https://docs.metamask.io/wallet/get-started/set-up-dev-environment/',
        linkLabel: '→ Open MetaMask docs',
      },
    ],
    task: {
      title:
        'Build a responsive landing page that connects to MetaMask, displays the connected wallet address, and reads a value from a deployed smart contract using ethers.js.',
      time: '⏱ 3–4 hours',
    },
    eval: {
      score: 76,
      breakdown: [80, 74, 72, 65],
      strengths: [
        'Wallet connection works correctly',
        'Clean React component structure',
        'Contract read function implemented',
      ],
      improvements: [
        'Add loading state while wallet connects',
        'Handle MetaMask not installed case',
        'Improve mobile responsiveness',
      ],
      summary:
        'Functional Web3 frontend with correct wallet integration — UX needs improvement.',
    },
  },

  backend: {
    label: 'Web3 Backend',
    lead: 'Build a backend API that reads blockchain data and indexes on-chain events.',
    resources: [
      {
        title: 'Web3 Backend Architecture',
        type: 'ARTICLE · 20 MIN',
        desc: 'Understand how backends in Web3 work — RPC nodes, event indexing, and APIs that serve on-chain data to frontends.',
        url: 'https://docs.alchemy.com/docs/how-to-build-a-web3-backend',
        linkLabel: '→ Read on Alchemy docs',
      },
      {
        title: 'Read Blockchain Data with Node.js',
        type: 'VIDEO · 40 MIN',
        desc: 'Build a Node.js script that connects to an RPC node, reads contract state, and listens for events using ethers.js.',
        url: 'https://www.youtube.com/watch?v=gyMwXuJrbJQ',
        linkLabel: '→ Watch on YouTube',
      },
      {
        title: 'Build a REST API for On-Chain Data',
        type: 'TUTORIAL · 35 MIN',
        desc: 'Create an Express API that exposes blockchain data through REST endpoints — get balance, get transactions, get events.',
        url: 'https://docs.alchemy.com/reference/api-overview',
        linkLabel: '→ Open Alchemy API docs',
      },
    ],
    task: {
      title:
        'Build a REST API with 3 endpoints: GET /balance/:address, GET /transactions/:address, GET /events. Use ethers.js and a free RPC endpoint.',
      time: '⏱ 3–4 hours',
    },
    eval: {
      score: 74,
      breakdown: [78, 72, 74, 62],
      strengths: [
        'All 3 endpoints implemented and returning data',
        'ethers.js used correctly for RPC calls',
        'Consistent JSON response format',
      ],
      improvements: [
        'Add error handling for invalid addresses',
        'Missing rate limiting on endpoints',
        'No input validation on address format',
      ],
      summary:
        'Functional Web3 API covering all required endpoints — needs error handling and validation.',
    },
  },
};

// ── Category Data ──────────────────────────────────────────────────────────

export interface CategoryItem {
  key: string;
  icon: string;
  name: string;
  desc: string;
  locked: boolean;
}

export const CATEGORIES: CategoryItem[] = [
  { key: 'tech', icon: '⚡', name: 'Tech', desc: 'DEV · CONTRACTS · WEB3', locked: false },
  { key: 'marketing', icon: '📣', name: 'Marketing', desc: 'COMMUNITY · GROWTH', locked: true },
  { key: 'design', icon: '🎨', name: 'Design', desc: 'UI · UX · BRANDING', locked: true },
];