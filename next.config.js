/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'pino-pretty': false,
      'accounts': false,
      '@metamask/connect-evm': false,
    };
    return config;
  },
};

module.exports = nextConfig;