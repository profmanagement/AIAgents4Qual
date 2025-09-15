// app/components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Open Conference of AI Agents for Science 2026
            </h3>
            <p className="text-gray-600 mb-4">
              Exploring the future of AI-driven scientific discovery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a className="text-gray-600 hover:text-gray-900 text-sm" href="/AIAgents4Qual/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-900 text-sm" href="/AIAgents4Qual/call-for-papers/">
                    Call for Papers
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-900 text-sm" href="/AIAgents4Qual/faq/">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Contact</h4>
              <p className="text-gray-600 text-sm">
                ai dot agents4qual at gmail dot com
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 mt-8">
          <p className="text-gray-500 text-sm text-center">
            © 2026 Open Conference of AI Agents for Qualitative Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
