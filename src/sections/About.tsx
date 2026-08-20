
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              About Me
            </span>
          </h2>
          
          <div className="glass-card p-8 md:p-12 text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              I am a multidisciplinary builder with a background in <strong>Civil Engineering</strong> and <strong>Water Resources Engineering</strong>. My engineering education instilled in me a strong foundation in analytical thinking, computational modeling, and complex problem-solving.
            </p>
            <p>
              Currently, my work focuses on building practical <strong>software solutions, AI-powered applications, and automation systems</strong>. I leverage AI to enhance workflows, create intelligent tools, and build data-driven applications that solve real-world problems efficiently.
            </p>
            <p>
              Whether it's developing a stock analysis platform using AI, creating engineering computational tools, or architecting intelligent agent ecosystems, I combine my engineering rigor with modern software development practices to deliver robust, scalable, and intelligent applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
