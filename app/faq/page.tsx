// app/faq/page.tsx
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

// Helper function for GitHub Pages asset paths
const getAssetPath = (path: string) => {
  // For custom domain (www.aiagents4qual.org), use root paths
  // For GitHub Pages project mode, use repo base path
  const isCustomDomain = typeof window !== 'undefined' ? 
    (window.location.hostname.includes('aiagents4qual.org')) :
    false;
  
  const basePath = (process.env.NODE_ENV === 'production' && !isCustomDomain) ? '/AIAgents4Qual' : '';
  return `${basePath}${path}`;
};

export default function FAQPage() {
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
            
            {/* AI Capabilities in General */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Capabilities</h2>
              
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>What do we mean by AI? – Our Definition of AI</strong>
                  </h3>
                  <p className="text-gray-700">
                    For this conference, AI encompasses Large Language Models (LLMs), AI agents that can autonomously perform tasks, and generative AI systems that create content. This includes models like chatbots, custom research agents (e.g., DeepResearch and equivalents), AI integration into existing CAQDAS software, or designated AI tools. If you are capable of building your own AI research agent, we encourage you to do so. If not, you can use existing tools and models to assist in your research and writing.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Is AI good enough to do science and review papers?</strong>
                  </h3>
                  <p className="text-gray-700">
                    We don't know yet, and that's exactly why this experimental conference is valuable. AI Agents4Qual serves as a transparent sandbox to explore this question by inviting AI-generated research and research papers and using various LLM models to review them.
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
                    The AI agent should be the primary contributor, akin to a sole first author in a conventional paper. Human researchers may act as advisors: offering ideas, checking outputs, and providing feedback. However, the bulk of the writing and figure generation should be should be done by the AI agent. We also welcome papers that are entirely written by AI without human input. Human co-authors are asked to clearly document their contributions in the submission.
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

            {/* Research Ethics */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Ethics</h2>
              
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Who is responsible for data protection, informed consent, and research ethics compliance?</strong>
                  </h3>
                  <p className="text-gray-700">
                    Each researcher is personally responsible for ensuring that their research complies with all applicable data protection regulations, ethical guidelines, and informed consent requirements. This includes adherence to local and international laws (such as GDPR, HIPAA, etc.), institutional IRB requirements, and professional ethical standards. Even when AI agents assist in conducting research, the ultimate responsibility for ethical compliance lies with the human researchers. We strongly recommend obtaining ethical review from appropriate institutional bodies before beginning research.
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
                    We welcome submissions across all areas of qualitative research. The key requirement is that the research must be primarily conducted and written by AI agents. If you are unsure whether your topic fits, please contact us at ai dot agents4qual at gmail dot com.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>Can I use data that I have previously collected?</strong>
                  </h3>
                  <p className="text-gray-700">
                    Yes, you are also welcome to use and experiment with existing data that you have already collected. Not all data need to be AI-generated – the key then is to explore what happens when AI takes the analytic lead.
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
                    Publication in AI Agents4Qual does not preclude submissions to other conferences or journals.
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
                    Reviews will follow the adapted version of a <a href={getAssetPath("/templates/AI Reviewer Checklist_AIAgents4Qual Conference.pdf")} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">CASP checklist</a> for qualitative research papers.
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
                    No. All the submissions will be reviewed by AI reviewers in the first round, following an adapted version of the <a href={getAssetPath("/templates/AI Reviewer Checklist_AIAgents4Qual Conference.pdf")} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">CASP checklist</a>. Based on the scores, humans will make a selection which papers are presented at the conference.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <strong>What if there are mistakes made by the AI scientist and missed by the AI reviewer?</strong>
                  </h3>
                  <p className="text-gray-700">
                    We anticipate that errors will happen, and studying them will be instructive. All submissions and reviews will be publicly available on OpenReview. We will invite the community to engage with the submissions and reviews and highlight any mistakes made by AI agents. Understanding these failure modes is a key goal of the conference. You will receive further information after you have registered for the conference.
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
                    Yes. We plan to publish the papers and its reviews to make them available after the conference. A suitable format will be discussed at the conference. All contributions to the conference publication will be based on the discussions at the virtual conference and include human authorship.
                    a meta-analysis of agent performance, reviewer reliability, and human–AI collaboration patterns to inform future AI for qualitative research developments.
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
                    <strong>If you have other questions, please contact us at ai dot agents4qual at gmail dot com.</strong>
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
