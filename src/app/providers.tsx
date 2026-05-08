'use client';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '@/lib/wagmi.config';
import ErrorBoundary from '@/app/components/ErrorBoundary';

// ── QueryClient with sane retry/error defaults for a Web3 app ─────────────────
//
// Default TanStack Query behaviour retries 3× immediately — bad for chain calls
// because a failed RPC usually stays failed for several seconds, not milliseconds.
// We back off exponentially and cap at 2 retries for queries, 0 for mutations
// (mutations = writes; retrying a failed tx automatically can cause double-sends).

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      retryDelay: (attempt) => Math.min(1_000 * 2 ** attempt, 10_000), // 1s → 2s → 4s … cap 10s
      staleTime: 30_000,       // treat chain data as fresh for 30s
      refetchOnWindowFocus: false, // don't slam the RPC when user tabs back in
    },
    mutations: {
      retry: 0,                // never auto-retry writes — user must confirm
      onError: (error: unknown) => {
        // Global mutation error handler — log for now, hook up Sentry here
        console.error('[QueryClient:mutation]', error);
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // Top-level error boundary catches anything that blows up before routing
    <ErrorBoundary context="Providers" onReset={() => window.location.reload()}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </ErrorBoundary>
  );
}