
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';

const WhyWorkWithMe = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My unique combination of skills allows me to tackle complex problems from multiple angles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {PORTFOLIO_DATA.whyWorkWithMe.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 border-t-4 border-t-blue-500 hover:bg-gray-800/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-100">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
