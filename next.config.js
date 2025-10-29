/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const isCustomDomain = process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY === 'profmanagement/AIAgents4Qual'
const repoBase = '/AIAgents4Qual'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Use basePath/assetPrefix only for GitHub Pages project mode, not for custom domain
  assetPrefix: (isProd && !isCustomDomain) ? repoBase : '',
  basePath: (isProd && !isCustomDomain) ? repoBase : ''
}

module.exports = nextConfig
