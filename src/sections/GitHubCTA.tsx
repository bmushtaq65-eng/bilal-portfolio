
import { motion } from 'framer-motion';
import { Star, GitFork, BookOpen } from 'lucide-react'; import { FaGithub } from 'react-icons/fa';
import { PORTFOLIO_DATA } from '../data/portfolio';

const GitHubCTA = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto glass-card border-gray-700 bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden relative"
        >
          {/* Decorative background logo */}
          <div className="absolute -right-10 -bottom-10 text-gray-800 opacity-20 pointer-events-none">
            <FaGithub className="w-96 h-96" />
          </div>

          <div className="p-10 md:p-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-sm font-medium mb-6">
                <FaGithub className="w-4 h-4" />
                Open Source
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Building in Public</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl">
                Explore my repositories, experiments, applications and ongoing development work. I believe in learning by building and sharing code.
              </p>
              <a
                href={PORTFOLIO_DATA.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-black hover:bg-gray-200 font-bold transition-colors text-lg"
              >
                Explore My GitHub
                <FaGithub className="w-5 h-5" />
              </a>
            </div>

            {/* Mock Repo Cards for Visuals */}
            <div className="flex-1 w-full max-w-md space-y-4">
              {[
                { name: "stock-analyzer", lang: "Python", stars: 12 },
                { name: "waterlab", lang: "TypeScript", stars: 8 },
              ].map((repo, idx) => (
                <div key={idx} className="glass-card p-5 bg-gray-900/80 border-gray-700 transform md:translate-x-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-blue-400 font-medium">
                      <BookOpen className="w-4 h-4" />
                      <span>{repo.name}</span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full border border-gray-700 text-gray-400">
                      Public
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <span className={`w-2.5 h-2.5 rounded-full ${repo.lang === 'Python' ? 'bg-blue-500' : 'bg-blue-600'}`}></span>
                      {repo.lang}
                    </div>
                    <div className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-pointer">
                      <Star className="w-3.5 h-3.5" /> {repo.stars}
                    </div>
                    <div className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-pointer">
                      <GitFork className="w-3.5 h-3.5" /> 2
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubCTA;
