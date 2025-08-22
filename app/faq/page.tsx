'use client'

import { useState } from 'react'
import { FileText, Globe, Mail, ArrowLeft, HelpCircle, LogOut } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/app/contexts/AuthContext'

export default function FAQ() {
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
              <HelpCircle className="w-8 h-8 text-gray-700" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">QualAISummit 2026</h1>
            <p className="text-gray-600">Enter password to access the FAQ</p>
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
              Access FAQ
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
              <Link href="/call-for-papers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Call for Papers</Link>
              <span className="text-blue-700 font-semibold bg-blue-50 px-3 py-1 rounded-md">FAQ</span>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pastel-purple/20 to-pastel-pink/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-20 h-20 bg-pastel-purple rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-purple-600" />
          </div>
          <h1 className="section-title text-5xl md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Common questions about the conference, AI in qualitative research, and submission process
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* AI Capabilities */}
          <div>
            <h2 className="section-title text-3xl">AI Capabilities</h2>
            <div className="space-y-8">
              <div className="card bg-pastel-blue/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-3">
                  <HelpCircle className="w-6 h-6 text-pastel-blue" />
                  <span>Is AI good enough to enhance qualitative research?</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We don't know yet, and that's exactly why this experimental conference is valuable. QualAISummit serves as a transparent platform to explore this question by inviting research papers that demonstrate how AI can enhance qualitative research methodologies, from data collection to analysis and interpretation.
                </p>
              </div>
            </div>
          </div>

          {/* AI Integration in Research */}
          <div>
            <h2 className="section-title text-3xl">AI Integration in Research</h2>
            <div className="space-y-8">
              <div className="card bg-pastel-green/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-3">
                  <HelpCircle className="w-6 h-6 text-pastel-green" />
                  <span>How much AI assistance is allowed in qualitative research submissions?</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We welcome a spectrum of AI integration approaches. Papers can range from AI-assisted data collection and analysis to fully AI-enhanced qualitative research methodologies. The key requirement is that the research demonstrates innovative use of AI tools while maintaining the rigor and depth that makes qualitative research valuable. Human researchers should clearly document their AI usage and maintain oversight of the research process.
                </p>
              </div>
              
              <div className="card bg-pastel-purple/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-3">
                  <HelpCircle className="w-6 h-6 text-pastel-purple" />
                  <span>Can I submit work that was primarily done by humans with minimal AI assistance?</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, but the AI integration should be meaningful and innovative. We're particularly interested in submissions that demonstrate novel ways of combining human expertise with AI capabilities in qualitative research. The focus should be on how AI enhances rather than replaces human research skills.
                </p>
              </div>
              
              <div className="card bg-pastel-orange/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-3">
                  <HelpCircle className="w-6 h-6 text-pastel-orange" />
                  <span>What AI models and tools can I use?</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Any models and tools you want! You may use any open-source or proprietary AI models, multiple AI systems, specialized tools (e.g., transcription services, coding assistants, analysis platforms), or build your own AI-enhanced research workflow. We encourage innovation and experimentation with different AI approaches.
                </p>
              </div>
            </div>
          </div>

          {/* Research Topics */}
          <div>
            <h2 className="section-title text-3xl">Research Topics</h2>
            <div className="space-y-8">
              <div className="card bg-pastel-pink/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-3">
                  <HelpCircle className="w-6 h-6 text-pastel-pink" />
                  <span>What kinds of research topics are eligible for submission?</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We welcome submissions across all areas where qualitative research is conducted, including social sciences, healthcare, education, business, psychology, anthropology, and more. The key requirement is that the research must demonstrate innovative use of AI tools in qualitative research processes. This includes AI-assisted data collection, analysis, interpretation, and methodological innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Submission Process */}
          <div>
            <h2 className="section-title text-3xl">Submission Process</h2>
            <div className="space-y-8">
              <div className="card bg-pastel-mint/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-3">
                  <HelpCircle className="w-6 h-6 text-pastel-mint" />
                  <span>Can I resubmit the same paper to other venues?</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Publication in QualAISummit does not preclude submissions to other conferences or journals. However, please ensure you comply with the submission policies of other venues regarding prior publication.
                </p>
              </div>
              
              <div className="card bg-pastel-lavender/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-3">
                  <HelpCircle className="w-6 h-6 text-pastel-lavender" />
                  <span>Is there an author rebuttal/revision stage?</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  No. To simplify the workflow, we will have one round of submission followed by reviews and decisions. Authors will receive detailed feedback but will not have the opportunity to submit revised versions.
                </p>
              </div>
            </div>
          </div>

          {/* Review Process */}
          <div>
            <h2 className="section-title text-3xl">Review Process</h2>
            <div className="space-y-8">
              <div className="card bg-pastel-blue/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-3">
                  <HelpCircle className="w-6 h-6 text-pastel-blue" />
                  <span>What review template do you use?</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Reviews will follow standard academic conference review guidelines, adapted for AI-enhanced qualitative research. Reviewers will evaluate submissions based on novelty, methodological rigor, practical impact, and clarity of presentation.
                </p>
              </div>
              
              <div className="card bg-pastel-green/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-3">
                  <HelpCircle className="w-6 h-6 text-pastel-green" />
                  <span>Will reviews be made public?</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, all reviews will be made public to promote transparency and learning. We believe that sharing review feedback helps the community understand evaluation criteria and improve future submissions.
                </p>
              </div>
              
              <div className="card bg-pastel-purple/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-3">
                  <HelpCircle className="w-6 h-6 text-pastel-purple" />
                  <span>Will there be human reviewers?</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, all submissions will be reviewed by human experts with expertise in qualitative research and AI. Our expert advisory board will ensure that submissions meet high academic standards and contribute meaningfully to the field.
                </p>
              </div>
              
              <div className="card bg-pastel-orange/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-3">
                  <HelpCircle className="w-6 h-6 text-pastel-orange" />
                  <span>What if there are mistakes in AI-enhanced research that reviewers miss?</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We anticipate that errors may occur, and studying them will be instructive for the field. All submissions and reviews will be publicly available. We encourage the community to engage with the submissions and highlight any issues. Understanding these challenges is a key goal of the conference and will help improve AI integration in qualitative research.
                </p>
              </div>
              
              <div className="card bg-pastel-pink/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-3">
                  <HelpCircle className="w-6 h-6 text-pastel-pink" />
                  <span>Will there be prizes?</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! We will offer recognition and awards to the top papers. Additional details about prizes and recognition will be announced closer to the conference date.
                </p>
              </div>
            </div>
          </div>

          {/* Post-Conference */}
          <div>
            <h2 className="section-title text-3xl">Post-Conference</h2>
            <div className="space-y-8">
              <div className="card bg-pastel-yellow/20">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-3">
                  <HelpCircle className="w-6 h-6 text-pastel-yellow" />
                  <span>Will you publish post-conference analyses?</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes. We plan to publish a meta-analysis of AI integration patterns, methodological innovations, and human-AI collaboration approaches in qualitative research. This will help inform future development of AI-enhanced qualitative research methodologies.
                </p>
              </div>
            </div>
          </div>

          {/* Contact and Support */}
          <div>
            <h2 className="section-title text-3xl">Contact and Support</h2>
            <div className="card bg-pastel-mint/20">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-3">
                <HelpCircle className="w-6 h-6 text-pastel-mint" />
                <span>If you have other questions, please contact us at qualaisummit@gmail.com.</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We're here to help! Feel free to reach out with any additional questions about the conference, submission process, or AI integration requirements in qualitative research.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Need More Information?</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Link href="/call-for-papers" className="card bg-pastel-blue/30 hover:bg-pastel-blue/40 transition-colors group">
              <FileText className="w-16 h-16 text-pastel-blue mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Call for Papers</h3>
              <p className="text-gray-600">Learn about submission guidelines and research areas</p>
            </Link>
            
            <Link href="/" className="card bg-pastel-green/30 hover:bg-pastel-green/40 transition-colors group">
              <Globe className="w-16 h-16 text-pastel-green mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Conference Home</h3>
              <p className="text-gray-600">Return to the main conference page</p>
            </Link>
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
                  <Link href="/call-for-papers" className="text-gray-200 hover:text-white transition-colors font-medium">Call for Papers</Link>
                  <span className="text-blue-200 font-semibold bg-blue-900/30 px-2 py-1 rounded">FAQ</span>
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
