/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export in production
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  images: { 
    // Only disable optimization for production static export
    unoptimized: process.env.NODE_ENV === 'production',
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // For custom domain - no basePath/assetPrefix needed
  assetPrefix: '',
  basePath: '',
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Remove experimental optimizeCss as it requires critters package
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
