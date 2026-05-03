import { createConfig, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'   
import { injected } from 'wagmi/connectors'

// GenLayer uses its own RPC, not Avalanche/mainnet for tx submission
// We only need wagmi for wallet identity (address + signing)
export const config = createConfig({
  chains: [mainnet],
  connectors: [injected()],   // MetaMask / any injected wallet
  transports: {
    [mainnet.id]: http(),
  },
  ssr: true,   // Required for Next.js
})