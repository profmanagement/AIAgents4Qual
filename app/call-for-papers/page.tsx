'use client'

import { useState } from 'react'
import { FileText, Calendar, Users, Globe, Mail, ArrowLeft, CheckCircle, AlertCircle, Clock, Award, BookOpen, Code, Brain, Database, LogOut, Lock } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/app/contexts/AuthContext'

export default function CallForPapers() {
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
            <p className="text-gray-600">Enter password to access the Call for Papers</p>
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
              Access Call for Papers
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm flex items-center justify-center space-x-2 font-medium">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
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
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
              <span className="text-blue-700 font-semibold bg-blue-50 px-3 py-1 rounded-md">Call for Papers</span>
              <Link href="/faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">FAQ</Link>
              {isAuthenticated && (
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors font-medium"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pastel-blue/20 to-pastel-purple/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="section-title text-5xl md:text-6xl">
            Call for Papers
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            QualAISummit 2026 invites submissions exploring the intersection of AI and qualitative research
          </p>
          <div className="flex items-center justify-center space-x-8 text-lg text-gray-700">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-pastel-blue" />
              <span>Submission Deadline: October 23, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-pastel-green" />
              <span>Decisions: November 16, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Conference Overview</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                QualAISummit 2026 is the premier conference dedicated to exploring how artificial intelligence can enhance and transform qualitative research methodologies. We invite researchers, practitioners, and innovators to submit papers that demonstrate novel approaches, applications, and insights in this rapidly evolving field.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our conference aims to bring together experts from diverse disciplines to share cutting-edge research, discuss methodological innovations, and establish best practices for integrating AI tools in qualitative research while maintaining the rigor and depth that makes qualitative inquiry valuable.
              </p>
            </div>
            
            <div className="card bg-pastel-mint/30">
              <h4 className="subsection-title">Why Submit to QualAISummit?</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pastel-green mt-0.5" />
                  <span className="text-gray-700">Showcase innovative AI-qualitative research methods</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pastel-green mt-0.5" />
                  <span className="text-gray-700">Connect with leading researchers in the field</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pastel-green mt-0.5" />
                  <span className="text-gray-700">Contribute to establishing best practices</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-pastel-green mt-0.5" />
                  <span className="text-gray-700">Get published in our conference proceedings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Research Areas</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            We welcome submissions across a broad range of topics related to AI in qualitative research
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-pastel-blue/30">
              <div className="w-16 h-16 bg-pastel-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="subsection-title text-center">Data Collection & Management</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• AI-assisted interview techniques</li>
                <li>• Automated transcription and coding</li>
                <li>• Smart sampling strategies</li>
                <li>• Data quality assessment</li>
              </ul>
            </div>
            
            <div className="card bg-pastel-green/30">
              <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="subsection-title text-center">Analysis & Interpretation</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Thematic analysis with AI</li>
                <li>• Narrative pattern recognition</li>
                <li>• Sentiment and emotion analysis</li>
                <li>• Cross-cultural interpretation</li>
              </ul>
            </div>
            
            <div className="card bg-pastel-purple/30">
              <div className="w-16 h-16 bg-pastel-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="subsection-title text-center">Methodological Innovation</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• New AI-qualitative hybrid methods</li>
                <li>• Ethical AI integration frameworks</li>
                <li>• Validation and reliability measures</li>
                <li>• Mixed-methods approaches</li>
              </ul>
            </div>
            
            <div className="card bg-pastel-orange/30">
              <div className="w-16 h-16 bg-pastel-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="subsection-title text-center">Applications & Case Studies</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Healthcare and medical research</li>
                <li>• Education and learning sciences</li>
                <li>• Social sciences and policy</li>
                <li>• Business and organizational research</li>
              </ul>
            </div>
            
            <div className="card bg-pastel-pink/30">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="subsection-title text-center">Ethics & Quality</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Bias detection and mitigation</li>
                <li>• Transparency and reproducibility</li>
                <li>• Human-AI collaboration ethics</li>
                <li>• Quality assurance frameworks</li>
              </ul>
            </div>
            
            <div className="card bg-pastel-yellow/30">
              <div className="w-16 h-16 bg-pastel-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="subsection-title text-center">Emerging Trends</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Multimodal data analysis</li>
                <li>• Real-time qualitative research</li>
                <li>• Collaborative AI systems</li>
                <li>• Future methodological directions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Submission Guidelines</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="card bg-pastel-lavender/30">
                <h3 className="subsection-title">Paper Types</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Full Papers (8-10 pages)</h4>
                    <p className="text-gray-600 text-sm">Complete research with novel contributions, comprehensive methodology, and significant results</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Short Papers (4-6 pages)</h4>
                    <p className="text-gray-600 text-sm">Work-in-progress, preliminary results, or focused contributions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Position Papers (4-6 pages)</h4>
                    <p className="text-gray-600 text-sm">Novel perspectives, critiques, or visions for the field</p>
                  </div>
                </div>
              </div>
              
              <div className="card bg-pastel-mint/30">
                <h3 className="subsection-title">Formatting Requirements</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Use ACM SIGCHI format (double-column)</li>
                  <li>• Include abstract (max 250 words)</li>
                  <li>• Provide keywords (3-5 terms)</li>
                  <li>• Ensure anonymity for blind review</li>
                  <li>• Submit as PDF format</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="card bg-pastel-blue/30">
                <h3 className="subsection-title">Review Criteria</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pastel-blue rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Novelty & Innovation</h5>
                      <p className="text-gray-600 text-sm">Original contribution to the field</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pastel-blue rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Methodological Rigor</h5>
                      <p className="text-gray-600 text-sm">Sound research design and execution</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pastel-blue rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Practical Impact</h5>
                      <p className="text-gray-600 text-sm">Relevance to qualitative research practice</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pastel-blue rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Clarity & Presentation</h5>
                      <p className="text-gray-600 text-sm">Well-written and clearly presented</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card bg-pastel-green/30">
                <h3 className="subsection-title">Important Dates</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Abstract Submission</span>
                    <span className="font-semibold text-gray-800">September 15, 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Full Paper Submission</span>
                    <span className="font-semibold text-gray-800">October 23, 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Notification of Decision</span>
                    <span className="font-semibold text-gray-800">November 16, 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Camera Ready Due</span>
                    <span className="font-semibold text-gray-800">December 1, 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Conference</span>
                    <span className="font-semibold text-gray-800">December 10, 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Submission Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Prepare</h3>
              <p className="text-gray-600 text-sm">Format your paper according to guidelines and ensure anonymity</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Submit</h3>
              <p className="text-gray-600 text-sm">Upload your paper through our submission system</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Review</h3>
              <p className="text-gray-600 text-sm">Expert reviewers evaluate your submission</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Present</h3>
              <p className="text-gray-600 text-sm">Share your research at the conference</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="card bg-pastel-yellow/30 max-w-2xl mx-auto">
              <h3 className="subsection-title">Ready to Submit?</h3>
              <p className="text-gray-700 mb-6">
                Join us in shaping the future of AI-enhanced qualitative research. Submit your paper and be part of this groundbreaking conference.
              </p>
              <button className="btn-primary">
                Submit Paper (Coming Soon)
              </button>
            </div>
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
                  <Link href="/" className="text-gray-200 hover:text-white transition-colors font-medium">Home</Link>
                  <span className="text-blue-200 font-semibold bg-blue-900/30 px-2 py-1 rounded">Call for Papers</span>
                  <Link href="/faq" className="text-gray-200 hover:text-white transition-colors font-medium">FAQ</Link>
                </div>
                {isAuthenticated && (
                  <div className="pt-2">
                    <button
                      onClick={logout}
                      className="text-gray-300 hover:text-red-200 text-sm transition-colors font-medium"
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
