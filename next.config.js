/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = nextConfig
