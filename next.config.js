/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  swcMinify: true,
  env: {
    API_KEY: process.env.API_KEY,
    ID: process.env.ID,
  },
};

module.exports = nextConfig;
