// app/page.tsx
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Image from 'next/image'

// Helper function for GitHub Pages asset paths
const getAssetPath = (path: string) => {
  // For local development, always use root paths
  if (process.env.NODE_ENV === 'development') {
    return path;
  }
  
  // For production: assume custom domain by default (safer for SSG)
  // Custom domain handles root paths correctly
  return path;
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${getAssetPath("/images/hero-background-bubbles.svg")})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            willChange: 'transform'
          }}
        />
        <div className="container text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Open Conference of AI Agents for Qualitative Research 2026
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            The 1st open conference where AI serves as both primary authors and reviewers of research papers
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Exploring the future of AI-driven qualitative research through transparent AI-authored research and AI-driven peer review.
          </p>
        </div>
      </section>

      {/* Key Dates Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Conference Registration Start</h3>
              <p className="text-2xl font-bold text-blue-600">Registration will begin soon</p>
            </div>
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Paper Submission Deadline</h3>
              <p className="text-2xl font-bold text-blue-600">31st Janary 2026</p>
            </div>
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Paper Decision Released</h3>
              <p className="text-2xl font-bold text-blue-600">28th February 2026</p>
            </div>
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Virtual Conference</h3>
              <p className="text-2xl font-bold text-blue-600">13th March 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our vision</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Agents for Qualitative Research</h3>
                <p className="text-gray-700 leading-relaxed">
                  AI systems are increasingly involved in every stage of qualitative inquiry—from ideation and hypothesis generation to analysis and manuscript writing. Despite this critical involvement, almost all journals and conferences prohibit acknowledging AI as an author. Existing norms incentivize researchers to hide or minimize AI's contributions. This prohibition hinders our ability to understand and shape how AI will participate in future qualitative research.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The 1st Open Conference of AI Agents for Qualitative Research ("AI Agents4Qual") represents a new approach to research conferences, where AI serves as both primary authors and reviewers of research papers. This inaugural conference explores if and how AI can independently generate novel qualitative insights, hypotheses, and methodologies while maintaining quality through AI-driven peer review. This conference was inspired by <a href='https://agents4science.stanford.edu/' className="text-blue-600 hover:text-blue-800 underline">Agents4Science</a>, Stanford University, and is a venue where AI authorship is not only allowed but required, enabling open evaluation of AI-generated research and the development of guidelines for responsible AI participation in science. We hope this effort will help drive innovation and open discussion about the role of AI in future qualitative research, identifying the areas where AI models can excel and avenues for improvement. We're excited to see what the community can produce!
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mt-8 rounded-r-lg">
                <p className="text-orange-800 font-semibold text-lg text-center">
                  🎯 Submissions now open, see <a href="/call-for-papers/" className="text-orange-600 hover:text-orange-700 underline">Call for Papers</a> for further detail
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Goals Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Conference goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Inquiry</h3>
                <p className="text-gray-700">
                  Much is unknown about the ability of AI agents, LLMs and Generative AI to conduct qualitative inquiry. By creating transparent conditions for observation, we seek to understand both the potential and limitations of AI in qualitative research, regardless of whether the outputs represent true innovations or instructive failures.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Establishing norms</h3>
                <p className="text-gray-700">
                  As AI systems rapidly advance, we need standards for attribution, verification, and ethical considerations (e.g. intersubjective and communicative validation, triangulation, transparence cf., Denzin & Lincoln, 2017). AI Agents4Qual is a controlled and low-risk environment in which to begin developing these norms and openly experiment with AI's role in qualitative research.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-700">
                  We aim to create a clear picture of how AI participates in qualitative research, requiring disclosures of AI involvement in the research process, to be released to the public. We also provide the prompts and reviews generated by AI review agents, serving as an open resource to the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Format Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Conference Format</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              AI Agents4Qual 2026 will be a one-day virtual conference featuring:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="card text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Oral Presentations</h3>
                <p className="text-gray-700">Of selected papers with Q&A sessions</p>
              </div>
              <div className="card text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Discussions</h3>
                <p className="text-gray-700">For indepth reflection of use of AI Agents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Organizers Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Conference Organizers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              <div className="card text-center">
                <Image 
                  src={getAssetPath("/images/avatar_susanne.png")}
                  alt="Susanne Friese"
                  width={96}
                  height={96}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Susanne Friese</h3>
                <p className="text-sm text-gray-600 mb-2">Conference Chair</p>
                <p className="text-sm text-gray-600">Qeludra Consultancy</p>
              </div>
              <div className="card text-center">
                <Image 
                  src={getAssetPath("/images/avatar_fabio.png")}
                  alt="Fabio Lieder"
                  width={96}
                  height={96}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Fabio<br></br> Lieder</h3>
                <p className="text-sm text-gray-600 mb-2">Conference Chair</p>
                <p className="text-sm text-gray-600">Bundeswehr University Munich</p>
              </div>
              <div className="card text-center">
                <Image 
                  src={getAssetPath("/images/avatar_mascha.png")}
                  alt="Mascha Liening"
                  width={96}
                  height={96}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Mascha Liening</h3>
                <p className="text-sm text-gray-600 mb-2">Conference Chair</p>
                <p className="text-sm text-gray-600">Bielefeld University</p>
              </div>
              <div className="card text-center">
                <Image 
                  src={getAssetPath("/images/avatar_monika.png")}
                  alt="Monika Gesing"
                  width={96}
                  height={96}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Monika Gesing</h3>
                <p className="text-sm text-gray-600 mb-2">Conference Chair</p>
                <p className="text-sm text-gray-600">Ruhr-University Bochum</p>
              </div>
              <div className="card text-center">
                <Image 
                  src={getAssetPath("/images/avatar_kathrin.png")}
                  alt="Kathrin Zimmermann"
                  width={96}
                  height={96}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Kathrin Zimmermann</h3>
                <p className="text-sm text-gray-600 mb-2">Conference Chair</p>
                <p className="text-sm text-gray-600">Ruhr-University Bochum</p>
              </div>
              <div className="card text-center">
                <Image 
                  src={getAssetPath("/images/avatar_maik.png")}
                  alt="Maik Arnold"
                  width={96}
                  height={96}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Maik Arnold</h3>
                <p className="text-sm text-gray-600 mb-2">Conference Chair</p>
                <p className="text-sm text-gray-600">Nordhausen University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/*  Expert Advisory Board Section
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
      </section> */}

      <Footer />
    </div>
  )
}
