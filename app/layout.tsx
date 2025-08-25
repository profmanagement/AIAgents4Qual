// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import PasswordProtection from './components/PasswordProtection'

export const metadata: Metadata = {
  title: 'Agents4Science 2026',
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
        <PasswordProtection>
          {children}
        </PasswordProtection>
      </body>
    </html>
  )
}
