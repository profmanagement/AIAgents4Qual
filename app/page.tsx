'use client'

import { useState } from 'react'
import { Lock, Calendar, Users, Award, FileText, MessageSquare, Globe, Mail, LogOut } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/app/contexts/AuthContext'

export default function Home() {
  const { isAuthenticated, login, logout } = useAuth()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (login(password)) {
      setError('')
      setPassword('')
    } else {
      setError('Incorrect password. Please try again.')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pastel-blue via-pastel-mint to-pastel-lavender">
        <div className="card max-w-md w-full mx-4">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-pastel-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-gray-700" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">QualAISummit 2026</h1>
            <p className="text-gray-600">Enter password to access the conference website</p>
          </div>
          
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pastel-blue focus:border-transparent"
                required
              />
            </div>
            
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Access Website
            </button>
          </form>
          

        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Globe className="w-8 h-8 text-pastel-blue" />
              <h1 className="text-xl font-bold text-gray-800">QualAISummit 2026</h1>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#home" className="text-gray-600 hover:text-gray-800 transition-colors">Home</a>
              <Link href="/call-for-papers" className="text-gray-600 hover:text-gray-800 transition-colors">Call for Papers</Link>
              <Link href="/faq" className="text-gray-600 hover:text-gray-800 transition-colors">FAQ</Link>
              {isAuthenticated && (
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="section-title text-5xl md:text-6xl">
            QualAISummit 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            The premier conference for AI-enhanced qualitative research and methodological innovation
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Exploring the transformative potential of AI in qualitative research, from data collection and analysis to interpretation and reporting.
          </p>
          
          {/* Key Dates */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="card bg-pastel-yellow/50">
              <Calendar className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="subsection-title">Paper submission deadline</h3>
              <p className="text-2xl font-bold text-gray-800">October 23, 2025</p>
              <p className="text-gray-600">AOE</p>
            </div>
            
            <div className="card bg-pastel-green/50">
              <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="subsection-title">Paper decision released</h3>
              <p className="text-2xl font-bold text-gray-800">November 16, 2025</p>
              <p className="text-gray-600">AOE</p>
            </div>
            
            <div className="card bg-pastel-pink/50">
              <Users className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="subsection-title">Virtual Conference</h3>
              <p className="text-2xl font-bold text-gray-800">December 10, 2025</p>
              <p className="text-gray-600">Online Event</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Our Vision</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">AI in Qualitative Research</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                AI systems are increasingly involved in every stage of qualitative research—from interview transcription and coding to thematic analysis and narrative interpretation. Despite this critical involvement, many researchers are still exploring how to effectively integrate AI tools while maintaining the rigor and depth that qualitative research requires. This conference addresses the need to understand and shape how AI can enhance qualitative research methodologies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                QualAISummit represents a pioneering approach to research conferences, where we explore how AI can serve as a powerful tool to augment qualitative research processes. This conference examines how AI can enhance data collection, analysis, and interpretation while preserving the human-centered approach that makes qualitative research unique and valuable.
              </p>
            </div>
            
            <div className="card bg-pastel-purple/30">
              <h4 className="subsection-title">Conference Goals</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pastel-purple rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Methodology</h5>
                    <p className="text-gray-600 text-sm">Exploring AI tools for qualitative data collection and analysis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pastel-purple rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Best Practices</h5>
                    <p className="text-gray-600 text-sm">Developing guidelines for AI integration in qualitative research</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pastel-purple rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Ethics & Quality</h5>
                    <p className="text-gray-600 text-sm">Ensuring AI enhances rather than compromises research rigor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Format */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Conference Format</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            QualAISummit 2025 will be a one-day virtual conference featuring:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-pastel-blue/30 text-center">
              <MessageSquare className="w-16 h-16 text-pastel-blue mx-auto mb-6" />
              <h3 className="subsection-title">Invited Talks</h3>
              <p className="text-gray-700">From leading researchers in AI-enhanced qualitative research</p>
            </div>
            
            <div className="card bg-pastel-green/30 text-center">
              <FileText className="w-16 h-16 text-pastel-green mx-auto mb-6" />
              <h3 className="subsection-title">Oral Presentations</h3>
              <p className="text-gray-700">Of selected papers on AI in qualitative research</p>
            </div>
            
            <div className="card bg-pastel-orange/30 text-center">
              <Users className="w-16 h-16 text-pastel-orange mx-auto mb-6" />
              <h3 className="subsection-title">Panel Discussions</h3>
              <p className="text-gray-700">On the future of AI in qualitative research</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Conference Organizers</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-pastel-mint/30 text-center">
              <div className="w-20 h-20 bg-pastel-mint rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-700">AZ</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Aria Zenith</h3>
              <p className="text-gray-600 mb-2">Conference Chair</p>
              <p className="text-sm text-gray-500">Quantum University</p>
            </div>
            
            <div className="card bg-pastel-lavender/30 text-center">
              <div className="w-20 h-20 bg-pastel-lavender rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-700">NL</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Nova Luminary</h3>
              <p className="text-gray-600 mb-2">Conference Chair</p>
              <p className="text-sm text-gray-500">Stellar Institute</p>
            </div>
            
            <div className="card bg-pastel-pink/30 text-center">
              <div className="w-20 h-20 bg-pastel-pink rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-700">CS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cipher Storm</h3>
              <p className="text-gray-600 mb-2">Conference Chair</p>
              <p className="text-sm text-gray-500">Neural Academy</p>
            </div>
            
            <div className="card bg-pastel-yellow/30 text-center">
              <div className="w-20 h-20 bg-pastel-yellow rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-700">EP</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Echo Phoenix</h3>
              <p className="text-gray-600 mb-2">Conference Chair</p>
              <p className="text-sm text-gray-500">Cybernetics College</p>
            </div>
            
            <div className="card bg-pastel-blue/30 text-center">
              <div className="w-20 h-20 bg-pastel-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-700">QM</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quantum Mirage</h3>
              <p className="text-gray-600 mb-2">Conference Chair</p>
              <p className="text-sm text-gray-500">Digital Dynamics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Advisory Board */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Expert Advisory Board</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Seraphina Crystal', title: 'Chief Editor of Quantum Biotech Journal' },
              { name: 'Zephyr Nova', title: 'Professor of Cybernetics, Quantum University' },
              { name: 'Luna Stardust', title: 'Professor of Applied Quantum Physics, Stellar Institute' },
              { name: 'Atlas Quantum', title: 'Professor of Digital Economics, Neural Academy', note: 'Nobel Laureate in Digital Sciences' },
              { name: 'Iris Nexus', title: 'Professor of Genetic Algorithms, Cybernetics College' },
              { name: 'Phoenix Data', title: 'Professor of Statistical AI, Digital Dynamics', note: 'Chief Editor of AI Science Review' },
              { name: 'Orion Tech', title: 'Professor and Director, Quantum Research Institute' },
              { name: 'Nova Vector', title: 'Professor of AI Systems, Stellar Academy', note: '2026 ICLR Program Chair' },
              { name: 'Celeste Quantum', title: 'Professor of Quantum Physics, Neural Institute', note: 'National Academy of AI Sciences' },
              { name: 'Zenith Matrix', title: 'Professor of AI Ethics, Quantum College' },
              { name: 'Echo Algorithm', title: 'Professor of Statistical AI, Digital Academy' }
            ].map((member, index) => (
              <div key={index} className="card bg-white/80 hover:bg-white transition-colors">
                <h3 className="font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-1">{member.title}</p>
                {member.note && (
                  <p className="text-xs text-pastel-blue font-medium">{member.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">QualAISummit 2026</h3>
              <p className="text-gray-300 mb-4">Exploring the future of AI-enhanced qualitative research</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold">Quick Links</h4>
                               <div className="flex space-x-4">
                 <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                 <Link href="/call-for-papers" className="text-gray-300 hover:text-white transition-colors">Call for Papers</Link>
                 <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
               </div>
                {isAuthenticated && (
                  <div className="pt-2">
                    <button
                      onClick={logout}
                      className="text-gray-400 hover:text-red-300 text-sm transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <div className="space-y-2">
                <h4 className="font-semibold">Contact</h4>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>qualaisummit at gmail dot com</span>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-gray-400 text-sm">
                  © 2026 QualAISummit. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
