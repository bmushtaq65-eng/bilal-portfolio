
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

const ExperienceEducation = () => {
  return (
    <section id="background" className="py-20 bg-gray-900/30 relative z-10 border-y border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Engineering Background / Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl font-bold">Engineering Background</h2>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 bg-gray-900 text-blue-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 glass-card group-hover:border-blue-900/50 transition-colors">
                    <div className="flex flex-col mb-2">
                      <span className="text-sm text-blue-400 font-medium mb-1">{edu.period}</span>
                      <h4 className="text-lg font-bold text-gray-100">{edu.degree}</h4>
                      <span className="text-gray-400 text-sm">{edu.institution}</span>
                    </div>
                    {edu.details && (
                      <p className="text-sm text-gray-400 leading-relaxed mt-3 border-t border-gray-800 pt-3">
                        {edu.details}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            
            <div className="space-y-6">
              {PORTFOLIO_DATA.experience.map((job, idx) => (
                <div key={idx} className="glass-card p-6 border-l-4 border-l-purple-500">
                  <div className="flex justify-between items-start mb-2 flex-col sm:flex-row sm:items-center gap-2">
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <span className="text-sm text-purple-400 bg-purple-900/20 px-3 py-1 rounded-full border border-purple-800/30">
                      {job.period}
                    </span>
                  </div>
                  <div className="text-gray-400 mb-4 font-medium">
                    {job.company} {job.location && `• ${job.location}`}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.highlights.map((highlight, hIdx) => (
                      <span key={hIdx} className="text-xs bg-gray-800/80 text-gray-300 px-2.5 py-1 rounded-md">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
