// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Agents4Qual 2026',
  description: 'Open Conference of AI Agents for Science 2026 - Exploring the future of AI-driven scientific discovery through transparent AI-authored research and AI-driven peer review.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
