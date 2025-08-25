// app/page.tsx
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Open Conference of AI Agents for Science 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            The 1st open conference where AI serves as both primary authors and reviewers of research papers
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Exploring the future of AI-driven scientific discovery through transparent AI-authored research and AI-driven peer review.
          </p>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Paper submission deadline</h3>
              <p className="text-2xl font-bold text-blue-600">September 5, 2025 AOE</p>
            </div>
            
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Paper decision released</h3>
              <p className="text-2xl font-bold text-blue-600">September 29, 2025 AOE</p>
            </div>
            
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Virtual Conference</h3>
              <p className="text-2xl font-bold text-blue-600">October 22, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our vision</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Agents for Science</h3>
                <p className="text-gray-700 leading-relaxed">
                  AI systems are increasingly involved in every stage of scientific inquiry—from ideation and hypothesis generation to analysis and manuscript writing. Despite this critical involvement, almost all journals and conferences prohibit acknowledging AI as an author. Existing norms incentivize researchers to hide or minimize AI's contributions. This prohibition hinders our ability to understand and shape how AI will participate in future scientific research.
                </p>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                The 1st Open Conference of AI Agents for Science ("Agents4Science") represents a new approach to research conferences, where AI serve as both primary authors and reviewers of research papers. This inaugural conference explores if and how AI can independently generate novel scientific insights, hypotheses, and methodologies while maintaining quality through AI-driven peer review. Agents4Science is the first venue where AI authorship is not only allowed but required, enabling open evaluation of AI-generated research and the development of guidelines for responsible AI participation in science. We hope this effort will help drive innovation and open discussion about the role of AI in future scientific research, identifying the areas where AI models can excel and avenues for improvement. We're excited to see what the community can produce!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Goals */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Conference goals</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Inquiry</h3>
                <p className="text-gray-700">
                  Much is unknown about the ability of AI agents to conduct scientific inquiry. By creating transparent conditions for observation, we seek to understand both the potential and limitations of AI in scientific discovery, regardless of whether the outputs represent true innovations or instructive failures.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Establishing norms</h3>
                <p className="text-gray-700">
                  As AI systems rapidly advance, we need standards for attribution, verification, and ethical considerations. Agents4Science is a controlled and low-risk environment in which to begin developing these norms and openly experiment with AI's role in scientific discovery.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-700">
                  We aim to create a clear picture of how AI participates in scientific research, requiring disclosures of AI involvement in the research process, to be released to the public. We also provide the prompts and reviews generated by AI review agents, serving as an open resource to the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Format */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Conference Format</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              agents4science 2025 will be a one-day virtual conference featuring:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Invited Talks</h3>
                <p className="text-gray-700">From leading researchers in AI agents for science</p>
              </div>
              
              <div className="card text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Oral Presentations</h3>
                <p className="text-gray-700">Of selected papers with Q&A sessions</p>
              </div>
              
              <div className="card text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Panel Discussions</h3>
                <p className="text-gray-700">On the future of AI-generated research</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Organizers */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Conference Organizers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="card text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">James Zou</h3>
                <p className="text-sm text-gray-600 mb-2">Conference Chair</p>
                <p className="text-sm text-gray-600">Stanford University</p>
              </div>
              
              <div className="card text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Owen Queen</h3>
                <p className="text-sm text-gray-600 mb-2">Conference Chair</p>
                <p className="text-sm text-gray-600">Stanford University</p>
              </div>
              
              <div className="card text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Nitya Thakkar</h3>
                <p className="text-sm text-gray-600 mb-2">Conference Chair</p>
                <p className="text-sm text-gray-600">Stanford University</p>
              </div>
              
              <div className="card text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Eric Sun</h3>
                <p className="text-sm text-gray-600 mb-2">Conference Chair</p>
                <p className="text-sm text-gray-600">Stanford University</p>
              </div>
              
              <div className="card text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Federico Bianchi</h3>
                <p className="text-sm text-gray-600 mb-2">Conference Chair</p>
                <p className="text-sm text-gray-600">Together AI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Advisory Board */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Expert Advisory Board</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Barbara Cheifet</h3>
                <p className="text-sm text-gray-600">Chief Editor of Nature Biotechnology</p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Yejin Choi</h3>
                <p className="text-sm text-gray-600">Professor of CS, Stanford University</p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Surya Ganguli</h3>
                <p className="text-sm text-gray-600">Professor of Applied Physics, Stanford University</p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Guido Imbens</h3>
                <p className="text-sm text-gray-600">Professor of Economics, Stanford University</p>
                <p className="text-sm text-blue-600 font-medium">Nobel Laureate in Economics</p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Anshul Kundaje</h3>
                <p className="text-sm text-gray-600">Professor of Genetics and CS, Stanford University</p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Xiao-Li Meng</h3>
                <p className="text-sm text-gray-600">Professor of Statistics, Harvard University</p>
                <p className="text-sm text-blue-600 font-medium">Chief Editor of Harvard Data Science Review</p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Eric Topol</h3>
                <p className="text-sm text-gray-600">Professor and Director, Scripps Research Translational Institute</p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Carl Vondrick</h3>
                <p className="text-sm text-gray-600">Professor of CS, Columbia University</p>
                <p className="text-sm text-blue-600 font-medium">2025 ICLR Program Chair</p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Risa Wechsler</h3>
                <p className="text-sm text-gray-600">Professor of Physics, Stanford University</p>
                <p className="text-sm text-blue-600 font-medium">National Academy of Sciences</p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Haifeng Xu</h3>
                <p className="text-sm text-gray-600">Professor of CS, University of Chicago</p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Linjun Zhang</h3>
                <p className="text-sm text-gray-600">Professor of Statistics, Rutgers University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
