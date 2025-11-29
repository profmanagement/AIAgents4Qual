// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import PerformanceMonitor from './components/PerformanceMonitor'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'AI Agents4Qual 2026',
  description: 'Open Conference of AI Agents for Science 2026 - Exploring the future of AI-driven scientific discovery through transparent AI-authored research and AI-driven peer review.',
  keywords: 'AI agents, artificial intelligence, scientific discovery, peer review, machine learning, research conference, AI for science, automation',
  authors: [{ name: 'AI Agents4Qual 2026 Organizing Committee' }],
  creator: 'AI Agents4Qual 2026',
  publisher: 'AI Agents4Qual 2026',
  metadataBase: new URL('https://aiagents4qual.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aiagents4qual.org',
    title: 'AI Agents4Qual 2026 - Open Conference of AI Agents for Science',
    description: 'Join us for the premier conference exploring AI-driven scientific discovery through transparent AI-authored research and AI-driven peer review. Submit your papers now!',
    siteName: 'AI Agents4Qual 2026',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Agents4Qual 2026 Conference - AI Agents for Scientific Discovery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents4Qual 2026 - Open Conference of AI Agents for Science',
    description: 'Join us for the premier conference exploring AI-driven scientific discovery through transparent AI-authored research and AI-driven peer review.',
    images: ['/images/og-image.png'],
    creator: '@aiagents4qual',
    site: '@aiagents4qual',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#2563eb' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/images/hero-background-bubbles.svg" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://openreview.net" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <PerformanceMonitor />
        {children}
      </body>
    </html>
  )
}
