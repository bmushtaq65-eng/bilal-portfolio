
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-20 bg-gray-900/30 relative z-10 border-y border-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Build</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combining engineering problem-solving with modern software and AI capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PORTFOLIO_DATA.capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-800/50 transition-colors">
                <cap.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">{cap.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
