/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      "porto": "./src/lib/empty-module.js",
      // add these too if you get similar errors later:
      "@coinbase/wallet-sdk": "./src/lib/empty-module.js",
      "@gemini-wallet/core": "./src/lib/empty-module.js",
    },
  },
};

export default nextConfig;