
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';

const Skills = () => {
  const skillCategories = [
    { title: "Programming", items: PORTFOLIO_DATA.skills.programming },
    { title: "AI & Automation", items: PORTFOLIO_DATA.skills.ai },
    { title: "Data", items: PORTFOLIO_DATA.skills.data },
    { title: "Engineering / Technical", items: PORTFOLIO_DATA.skills.engineering },
    { title: "Development Tools", items: PORTFOLIO_DATA.skills.tools },
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technology stack spans across software engineering, artificial intelligence, data analytics, and civil engineering computational tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-blue-400 border-b border-gray-800 pb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 rounded-md text-sm text-gray-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
