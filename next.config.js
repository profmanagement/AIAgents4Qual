/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '/AiAgents4Qual',
  basePath: '/AiAgents4Qual'
}

module.exports = nextConfig
