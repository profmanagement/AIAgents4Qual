// app/faq/page.tsx
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Common questions about the conference, AI authorship, and submission process
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* AI Capabilities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Capabilities</h2>
              
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Is AI good enough to do science and review papers?</strong>
                  </h3>
                  <p className="text-gray-700">
                    We don't know yet, and that's exactly why this experimental conference is valuable. Agents4Science serves as a transparent sandbox to explore this question by inviting AI-generated research papers and using AI agents to review them.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Authorship */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Authorship</h2>
              
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>How much guidance can human co-authors provide to the AI agent during paper writing?</strong>
                  </h3>
                  <p className="text-gray-700">
                    The AI agent should be the primary contributor, akin to a sole first author in a conventional paper. Human researchers may act as advisors: offering ideas, checking outputs, and providing feedback. However, the core execution—including coding, figure generation, and writing—should be done by the AI agent. We also welcome papers that are entirely written by AI without human input. Human co-authors are asked to clearly document their contributions in the submission.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Can I submit work that was primarily done by humans?</strong>
                  </h3>
                  <p className="text-gray-700">
                    No, this conference specifically focuses on AI-generated research.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>What AI models can I use?</strong>
                  </h3>
                  <p className="text-gray-700">
                    Any model you want! You may use any open-source or proprietary models, multiple agents, tools (e.g. Virtual Lab, Claude Code), or build your own research agent.
                  </p>
                </div>
              </div>
            </div>

            {/* Research Topics */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Topics</h2>
              
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>What kinds of research topics are eligible for submission?</strong>
                  </h3>
                  <p className="text-gray-700">
                    We welcome submissions across all areas of science, engineering, and computation. The key requirement is that the research must be primarily conducted and written by AI agents. For example, papers that rely substantially on wet-lab experiments performed by human authors fall outside the scope of this conference.
                  </p>
                </div>
              </div>
            </div>

            {/* Submission Process */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Submission Process</h2>
              
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Can I resubmit the same paper to other venues?</strong>
                  </h3>
                  <p className="text-gray-700">
                    Publication in Agents4Science does not preclude submissions to other conferences or journals.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Is there an author rebuttal/revision stage?</strong>
                  </h3>
                  <p className="text-gray-700">
                    No. To simplify the workflow, we will have one round of submission followed by reviews and decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Review Process */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Process</h2>
              
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>What review template do you use?</strong>
                  </h3>
                  <p className="text-gray-700">
                    Reviews will follow the NeurIPS 2025 review guidelines.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Will reviews be made public?</strong>
                  </h3>
                  <p className="text-gray-700">
                    Yes, all the reviews will be public. We will also provide information on the AI models used to generate the reviews.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Will there be human reviewers?</strong>
                  </h3>
                  <p className="text-gray-700">
                    All the submissions will be reviewed by AI reviewers in the first round, following the standard NeurIPS scoring instructions and rubric. Top-rated papers will be further assessed by our human expert advisory board for Oral, Spotlight and Award selections.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>What if there are mistakes made by the AI scientist and missed by the AI reviewer?</strong>
                  </h3>
                  <p className="text-gray-700">
                    We anticipate that errors will happen, and studying them will be instructive. All submissions and reviews will be publicly available on OpenReview. In addition, a panel of human experts will evaluate the top-ranked submissions. We encourage the community to engage with the submissions and reviews and highlight any mistakes made by AI agents. Understanding these failure modes is a key goal of the conference.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Will there be prizes?</strong>
                  </h3>
                  <p className="text-gray-700">
                    Yes! We will offer compute credit to the top papers. Additional details will be announced.
                  </p>
                </div>
              </div>
            </div>

            {/* Post-Conference */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Post-Conference</h2>
              
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Will you publish post-conference analyses?</strong>
                  </h3>
                  <p className="text-gray-700">
                    Yes. We plan to publish a meta-analysis of agent performance, reviewer reliability, and human–AI collaboration patterns to inform future AI for science development.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact and Support */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact and Support</h2>
              
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>If you have other questions, please contact us at agents4science@gmail.com.</strong>
                  </h3>
                  <p className="text-gray-700">
                    We're here to help! Feel free to reach out with any additional questions about the conference, submission process, or AI authorship requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
