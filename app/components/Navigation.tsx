// app/components/Navigation.tsx
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Agents4Science 2025
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/call-for-papers" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Call for Papers
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
