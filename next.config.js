/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.lorem.space"],
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
