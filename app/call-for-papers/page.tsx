// app/call-for-papers/page.tsx
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function CallForPapersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Call for Papers
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Submit your AI-generated research to the 1st Open Conference of AI Agents for Science
          </p>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Conference Scope Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Conference Scope</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Agents4Science welcomes AI-generated computational research that advances scientific discovery across all domains. We take a broad view of "AI for Computational Sciences," encompassing both methodological innovations (e.g., AI agents developing new models or algorithms) and domain-specific applications (e.g., in biology, chemistry, or mathematics).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Submissions should be primarily authored by AI systems, which are expected to lead the hypothesis generation, experimentation, and writing processes. The AI should be listed as the sole first author of the paper. Human researchers may be included as secondary authors to support or oversee the work. Submission to Agents4Science does not preclude parallel or subsequent submission to other venues. At the time of submission, authors will be asked to detail the role and extent of AI participation in the project. Each human author can be a part of at most three submissions. Please see FAQ for more information. The conference will be free to attend.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Submission Requirements</h2>
            </div>

            {/* Main Paper Section */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Main Paper</h3>
              
              <div className="space-y-4 mb-6">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Page Limit:</strong> Submissions must be no more than 8 pages, excluding references and required statements.</li>
                  <li>• <strong>Template Requirement:</strong> All papers must use the official conference LaTeX template, which includes a mandatory AI Contribution Disclosure checklist.</li>
                  <li>• <strong>Submission Platform:</strong> Submissions must be made via <a href="https://openreview.net" className="text-blue-600 underline hover:text-blue-800">OpenReview</a>.</li>
                  <li>• <strong>Anonymity:</strong> Submissions must be anonymous and should not include author names, affiliations, or other identifying information in the main text.</li>
                </ul>
              </div>

              {/* Template Download Section */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2 flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Template
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Download the official LaTeX template with AI Contribution Disclosure checklist
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors flex items-center mx-auto">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download LaTeX Template
                  </button>
                  <div className="mt-4 flex items-center justify-center text-red-600 text-sm">
                    <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    Please make sure to carefully complete the required checklist and the statements (see below)
                  </div>
                </div>
              </div>
            </div>

            {/* Three Statement Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* AI Research Autonomy Disclosure */}
              <div className="card text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">AI Research Autonomy Disclosure</h4>
                <p className="text-gray-700 text-sm">
                  We will provide an AI usage checklist that authors must complete for each submission. This checklist will document the roles of both AI and human contributors across various aspects of the research project, including hypothesis generation, method development, data handling and analysis, results interpretation, writing, and visualization.
                </p>
              </div>
              
              {/* Responsible AI Statement */}
              <div className="card text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Responsible AI Statement</h4>
                <p className="text-gray-700 text-sm">
                  Each submission must adhere to the <a href="#" className="text-blue-600 underline hover:text-blue-800">NeurIPS Code of Ethics</a> and include a statement discussing the broader impact of the research, as well as any precautions taken to ensure the safe deployment of the AI scientist. This statement will not count toward the page limit.
                </p>
              </div>
              
              {/* Reproducibility Statement */}
              <div className="card text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Reproducibility Statement</h4>
                <p className="text-gray-700 text-sm">
                  Authors are strongly encouraged to include a paragraph-long Reproducibility Statement at the end of the main text to discuss the efforts that have been made to ensure reproducibility. This does not count toward the page limit.
                </p>
              </div>
            </div>

            {/* Review Process Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Review Process</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1: Multi-AI Review Panel */}
                <div className="card text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Multi-AI Review Panel</h4>
                  <p className="text-gray-700">
                    Each paper will be evaluated by multiple AI systems to avoid biases from one particular model.
                  </p>
                </div>
                
                {/* Card 2: Human Oversight Committee */}
                <div className="card text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Human Oversight Committee</h4>
                  <p className="text-gray-700">
                    A committee of human experts will evaluate top-chosen papers after the AI review panels.
                  </p>
                </div>
                
                {/* Card 3: Awards */}
                <div className="card text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Awards</h4>
                  <p className="text-gray-700">
                    Awards will be determined by the human review committee, including Spotlight and Oral selections.
                  </p>
                </div>
              </div>
            </div>

            {/* Review Template & Scoring Section */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Review Template & Scoring</h3>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Reviews will follow the <a href="#" className="text-blue-600 underline hover:text-blue-800">NeurIPS 2025 template</a>, which consists of the following sections: summary, strengths, weaknesses, and questions.
                </p>
                
                <p className="text-gray-700">
                  Every paper will also be scored on the following components: quality, clarity, significance, and originality.
                </p>
                
                <p className="text-gray-700">
                  For each paper, multiple LLM systems will independently assess the paper following the <a href="#" className="text-blue-600 underline hover:text-blue-800">Neurips review guidelines and template</a>. Details of the LLM reviewers will be provided after the conference. The human expert advisory board and PCs will make the final selections taking into account the LLM reviews.
                </p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Model Requirements</h3>
              <p className="text-gray-700">
                You may use any open-source or proprietary models, multiple agents, tools (e.g., Virtual Lab, Claude Code), or build your own research agent. The key requirement is that the research must be primarily conducted and written by AI agents.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact</h3>
              <p className="text-gray-700">
                For questions about submissions or the conference, please contact us at{' '}
                <a href="mailto:agents4science@gmail.com" className="text-blue-600 hover:text-blue-800">
                  agents4science@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
