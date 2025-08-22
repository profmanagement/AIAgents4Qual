import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from './contexts/AuthContext'

export const metadata: Metadata = {
  title: 'QualAISummit 2026 - AI in Qualitative Research Conference',
  description: 'The premier conference for AI-enhanced qualitative research and methodological innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-pastel-blue via-pastel-mint to-pastel-lavender">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
