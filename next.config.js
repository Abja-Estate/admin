/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
  experimental: {
    forceSwcTransforms: true,
  },
  swcMinify: true,
  env: {
    API_KEY: process.env.API_KEY,
    ID: process.env.ID,
  },
}

module.exports = nextConfig
