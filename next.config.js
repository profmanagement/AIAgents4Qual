/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // For custom domain - no basePath/assetPrefix needed
  assetPrefix: '',
  basePath: ''
}

module.exports = nextConfig
