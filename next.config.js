/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoBase = '/AIAgents4Qual'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Use basePath/assetPrefix only in production (GitHub Pages). Locally keep root for simpler dev.
  assetPrefix: isProd ? repoBase : '',
  basePath: isProd ? repoBase : ''
}

module.exports = nextConfig
