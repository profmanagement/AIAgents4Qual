// app/components/Navigation.tsx
'use client'
import Link from 'next/link'
import { useState, useCallback } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-150" href="/">
              AI Agents4Qual 2026
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-150" 
              href="/"
              prefetch={true}
            >
              Home
            </Link>
            <Link 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-150" 
              href="/call-for-papers/"
              prefetch={true}
            >
              Call for Papers
            </Link>
            <Link 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-150" 
              href="/faq/"
              prefetch={true}
            >
              FAQ
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 p-2"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-sm font-medium" 
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-sm font-medium" 
                href="/call-for-papers/"
                onClick={() => setIsMenuOpen(false)}
              >
                Call for Papers
              </Link>
              <Link 
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-sm font-medium" 
                href="/faq/"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
