'use client';

import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from '@/lib/wagmi.config'
import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css' 

const queryClient = new QueryClient()

export const metadata: Metadata = {
  title: 'Proofed Protocol',
  description: 'Tamper-proof, verifiable proof of skill',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  )
}