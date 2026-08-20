
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react'; import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PORTFOLIO_DATA } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative z-10 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Intelligent</h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm interested in opportunities involving AI automation, AI agents, software development, technical applications and innovative problem solving.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={PORTFOLIO_DATA.personalInfo.github}
              target="_blank" rel="noopener noreferrer"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full glass-card hover:bg-gray-800 hover:border-gray-600 transition-all text-lg font-medium"
            >
              <FaGithub className="w-6 h-6" />
              GitHub
            </a>
            
            {PORTFOLIO_DATA.personalInfo.email && (
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PORTFOLIO_DATA.personalInfo.email}`}
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all text-lg font-medium"
              >
                <Mail className="w-6 h-6" />
                Email Me
              </a>
            )}
            
            {PORTFOLIO_DATA.personalInfo.linkedin && (
              <a
                href={PORTFOLIO_DATA.personalInfo.linkedin}
                target="_blank" rel="noopener noreferrer"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full glass-card hover:bg-gray-800 hover:border-gray-600 transition-all text-lg font-medium"
              >
                <FaLinkedin className="w-6 h-6 text-blue-400" />
                LinkedIn
              </a>
            )}

            {PORTFOLIO_DATA.personalInfo.phone && (
              <a
                href={`tel:${PORTFOLIO_DATA.personalInfo.phone}`}
                className="flex items-center gap-3 px-8 py-4 rounded-full glass-card hover:bg-gray-800 hover:border-gray-600 transition-all text-lg font-medium"
              >
                <Phone className="w-6 h-6 text-green-400" />
                Call Me
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
