// src/lib/tasks.ts
// Shared task data used across components

export const TASKS = {
  frontend: {
    title: 'Build a responsive landing page with a fixed navbar, full-width hero section with headline + CTA button, and a 3-column features grid. Must work on mobile.',
    time: '2–3 hours',
    track: 'FRONTEND DEVELOPMENT',
    trackShort: 'Frontend',
    icon: '⬡',
    resource: 'Responsive Landing Page — Kevin Powell',
    resourceUrl: 'https://www.youtube.com/watch?v=p0bGHP-PXD4',
  },
  solidity: {
    title: 'Build an ERC-20 token with mint, burn, and transfer. Add an owner-only mint guard and emit custom events for every action.',
    time: '3–4 hours',
    track: 'SMART CONTRACT',
    trackShort: 'Solidity',
    icon: '◈',
    resource: 'ERC-20 From Scratch — Patrick Collins',
    resourceUrl: 'https://www.youtube.com/watch?v=8rpir_ZSK1g',
  },
  api: {
    title: 'Build a REST API with GET/POST/PUT/DELETE /items endpoints, in-memory storage, input validation, and correct HTTP status codes.',
    time: '2–3 hours',
    track: 'BACKEND API',
    trackShort: 'API',
    icon: '⚡',
    resource: 'REST API Tutorial — Traversy Media',
    resourceUrl: 'https://www.youtube.com/watch?v=l8WPWK9mS5M',
  },
  react: {
    title: 'Build a React todo app with add, complete, and delete. Use useState + useEffect. Persist to localStorage. Include all/active/done filter tabs.',
    time: '2–3 hours',
    track: 'REACT DEVELOPMENT',
    trackShort: 'React',
    icon: '◎',
    resource: 'React Hooks Crash Course — Fireship',
    resourceUrl: 'https://www.youtube.com/watch?v=TNhaISOUy6Q',
  },
} as const;

export type GoalKey = keyof typeof TASKS;