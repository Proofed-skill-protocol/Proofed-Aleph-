const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['porto/internal'] = false;
    return config;
  },
};

module.exports = nextConfig;