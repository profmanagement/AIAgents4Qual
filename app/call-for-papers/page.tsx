// app/call-for-papers/page.tsx
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Italic } from 'lucide-react'

// Helper function for GitHub Pages asset paths
const getAssetPath = (path: string) => {
  // For custom domain (www.aiagents4qual.org), use root paths
  // For GitHub Pages project mode, use repo base path
  const isCustomDomain = typeof window !== 'undefined' ? 
    window.location.hostname === 'www.aiagents4qual.org' || window.location.hostname === 'aiagents4qual.org' :
    process.env.NODE_ENV === 'production' && process.env.GITHUB_REPOSITORY === 'profmanagement/AIAgents4Qual';
  
  const basePath = (process.env.NODE_ENV === 'production' && !isCustomDomain) ? '/AIAgents4Qual' : '';
  return `${basePath}${path}`;
};

export default function CallForPapersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="section-padding relative overflow-hidden"
        style={{
          backgroundImage: `url(${getAssetPath("/images/hero-background-bubbles.svg")})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Call for Papers
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Submit your AI-generated research to the Open Conference of AI Agents for Qualitative Research (AI Agents4Qual) 2026!
          </p>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Important Dates Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Dates</h2>
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between items-center">
                    <span className="font-semibold">Paper submission deadline:</span>
                    <span className="text-blue-700 font-bold">31st January 2026</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-semibold">Conference Registration Start:</span>
                    <span className="text-blue-700 font-bold">24th November 2025</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-semibold">Paper decision released:</span>
                    <span className="text-blue-700 font-bold">28th February 2026</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-semibold">Virtual Conference takes place:</span>
                    <span className="text-blue-700 font-bold">13th March 2026</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-semibold">Conference fee:</span>
                    <span className="text-gray-600 font-bold">TBA</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Conference Scope Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Conference Scope</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                </p>
              <h4 className="text-lg font-bold text-gray-900 mb-3">AI Conducts Research and Writes, Humans Reflect</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI Agents4Qual 2026 is the first open conference where AI acts as both co-researcher, author and reviewer in the field of qualitative research. It is also an experiment: What happens when generative AI takes the lead in qualitative inquiry, and humans step back —to reflect on the process and its implications? The goal is to explore the future of AI-driven qualitative discovery through critical reflection on AI-authored research and AI-mediated peer review.
              </p>

              <h4 className="text-lg font-bold text-gray-900 mb-3">Experimentation at the Forefront</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI Agents4Qual invites a different kind of experiment. It's for those ready to push boundaries — to see what happens when AI is given genuine creative and analytic autonomy. The challenge is to flip the script: let AI take the lead, while you stay in the background as a guide. Steer the process, but don't drive it.
              </p>
              <h4 className="text-lg font-bold text-gray-900 mb-3">The Challenge</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                We invite AI-generated qualitative research papers where at least half of the research process — and nearly all of the writing — is conducted by large language models (LLMs). Human contribution to content should be kept to a minimum.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Each paper must include an autoethnographic reflection: a critical account of your interaction with the AI. Explain how you prompted it, what unfolded as you handed over agency, and how this shaped your sense of authorship. Where did you resist, intervene, or let go? What surprised you — or unsettled you?
              </p>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Reflective Focus</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                This is not about polished results. It is about creativity, experimentation, and rethinking authorship, agency, and knowledge creation in qualitative research. Failures, glitches, and contradictions are not only welcome but essential — provided they include reflective analysis of the human–AI process. Together, we aim to surface both the potential and the limitations of AI-led qualitative research.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Participation</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                The summit will be held entirely online. Accepted papers will be presented orally and published in the experimental proceedings. The event will conclude with a collective reflection: What did we learn when AI took the helm of qualitative research?
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="text-blue-600 font-semibold">Conference registration starts November 24, 2025. Watch the website for further details.</span>
              </p>

              <h4 className="text-lg font-bold text-gray-900 mb-3">Join the Experiment</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI Agents4Qual 2026 is not about incremental improvement. It's about turning qualitative research upside down. Let AI do most of the research and writing. Let humans step back, observe, and reflect.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Participants are also welcome to experiment with existing data they have already collected. Not all data need to be AI-generated — the key then is to explore what happens when AI takes the analytic lead.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Together, we'll see what emerges when qualitative inquiry is radically reimagined.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6 mb-6">
                <p className="text-blue-800 font-semibold text-lg">
                  Submit your contribution by 31 January 2026
                </p>
                <p className="text-blue-700 mt-2">
                  Submission possible from November 24, 2025 (see below)
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Submission Requirements</h2>
            </div>

            {/* Main Paper Section */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Main Paper</h3>

              <div className="space-y-4 mb-6">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Papers must be predominantly authored by generative AI systems</strong> (ChatGPT, Claude, LLaMA, etc.).</li>
                  <li>• <strong>Authors must disclose and reflect</strong> on the distribution of roles between AI and human.</li>
                  <li>• <strong>Each submission must include an autoethnographic reflection:</strong> What happened when you gave AI the lead, and how did it affect you as a scholar?</li>
                  <li>• <strong>Submissions that reduce AI to a mere assistant or tool</strong> (e.g. coding support, summarization) will not be considered.</li>
                  <li>• <strong>Page Limit:</strong> Submissions must be no more than 8 pages, excluding references and required statements.</li>
                  <li>• <strong>Template Requirement:</strong> All papers must use the official conference template (Link to page), which includes a mandatory AI Contribution Disclosure checklist.</li>
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
                    Download the official Word template with AI Contribution Disclosure checklist
                  </p>
                  <a 
                    href={getAssetPath("/templates/Template_Paper Submission_AI Agents4QualResearch_2025.docx")}
                    download="Template_Paper Submission_AI Agents4QualResearch_2025.docx"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors flex items-center mx-auto inline-flex"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Word Template
                  </a>
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
                  Each submission must adhere to the <a href="https://www.apa.org/ethics/code" className="text-blue-600 underline hover:text-blue-800">APA Code of Ethics</a> and include a statement discussing the broader impact of the research, as well as any precautions taken to ensure the safe deployment of the AI scientist. This statement will not count toward the page limit.
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1: Multi-AI Review Panel */}
                <div className="card text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Multi-AI Review Panel</h4>
                  <p className="text-gray-700">
                    Each paper will be evaluated by multiple AI systems to avoid biases from one particular model, guided by a shared framework.
                  </p>
                </div>

                {/* Card 2: Human Oversight Committee */}
                <div className="card text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Minimal Human Oversight</h4>
                  <p className="text-gray-700">
                    Human organizers will only look at the top-ranked submissions and may select from them for presentation. 
                  </p>
                </div>
                
              </div>
            </div>

            {/* Review Template & Scoring Section */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Review Template & Scoring</h3>

              <div className="space-y-4">
                <p className="text-gray-700">
                  Reviews will be carried out by three large language models, guided by a shared framework. So, each paper will be evaluated by multiple AI systems to avoid biases from one particular model. Human organizers will only look at the top-ranked submissions and may select from them for presentation. The review process itself is part of the experiment: after the conference, the community will reflect on the quality of AI reviews compared to human judgment. Each paper will be evaluated by multiple AI systems to avoid biases from one particular model.
                </p>

                <p className="text-gray-700">
                  Every paper will also be scored on according to the <strong><a href={getAssetPath("/templates/AI Reviewer Checklist AIAgent4QualResearch.pdf")} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">CASP instructions and rubric</a></strong>.
                </p>

              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Model Requirements</h3>
              <p className="text-gray-700">
                You may use any open-source or proprietary models, multiple agents, tools (e.g., ChatGPT, Claude, Gemini), or build your own research agent. The key requirement is that the research must be primarily conducted and written by AI agents.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact</h3>
              <p className="text-gray-700">
                For questions about submissions or the conference, please contact us at{' '}
                <a href="mailto:ai.agents4qual@gmail.com" className="text-blue-600 hover:text-blue-800">
                  ai.agents4qual@gmail.com
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
