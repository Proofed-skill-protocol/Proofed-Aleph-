/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Ignore the entire porto.js connector file from wagmi
    config.plugins.push(
      new (require('webpack').IgnorePlugin)({
        resourceRegExp: /porto/,
        contextRegExp: /@wagmi\/connectors/,
      })
    );
    return config;
  },
};

module.exports = nextConfig;