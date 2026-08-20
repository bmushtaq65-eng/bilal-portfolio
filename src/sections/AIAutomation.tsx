
import { motion } from 'framer-motion';
import { Brain, Mic, Globe, Monitor, Eye, HardDrive, Zap, Database } from 'lucide-react';

const AIAutomation = () => {
  return (
    <section id="ai-automation" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-y border-gray-800">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-800/50 text-indigo-400 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            AI Ecosystem Architecture
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">BRO</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            An advanced AI assistant and automation ecosystem designed for autonomous task execution, continuous learning, and multi-modal interactions.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="max-w-5xl mx-auto mb-20 relative">
          <div className="absolute inset-0 bg-indigo-600/5 blur-[100px] rounded-full"></div>
          
          <div className="relative glass-card border border-indigo-900/30 p-8 md:p-12 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              
              {/* Input Layer */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 w-full md:w-1/4"
              >
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 text-center md:text-left">Input Layer</h4>
                <div className="glass-card p-4 flex items-center gap-3 bg-gray-900/80 border-gray-700">
                  <Mic className="w-5 h-5 text-indigo-400" />
                  <span className="text-sm text-gray-300">Voice / Whisper</span>
                </div>
                <div className="glass-card p-4 flex items-center gap-3 bg-gray-900/80 border-gray-700">
                  <Eye className="w-5 h-5 text-indigo-400" />
                  <span className="text-sm text-gray-300">Vision / Camera</span>
                </div>
              </motion.div>

              {/* Connector */}
              <div className="hidden md:flex w-16 h-0.5 bg-gradient-to-r from-gray-700 to-indigo-600 relative">
                <div className="absolute right-0 -top-1 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"></div>
              </div>

              {/* Core Brain */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center justify-center w-full md:w-1/3"
              >
                <div className="relative w-48 h-48 rounded-full border border-indigo-500/30 flex items-center justify-center bg-indigo-900/10 shadow-[0_0_30px_rgba(99,102,241,0.15)] group hover:border-indigo-400/50 transition-all">
                  <div className="absolute inset-2 rounded-full border border-purple-500/20 animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-4 rounded-full border border-blue-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                  <Brain className="w-16 h-16 text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-1">AI Brain (BRO)</h3>
                  <p className="text-xs text-indigo-300 font-mono">OpenJarvis • Ollama</p>
                </div>
              </motion.div>

              {/* Connector */}
              <div className="hidden md:flex w-16 h-0.5 bg-gradient-to-r from-indigo-600 to-gray-700 relative">
                <div className="absolute right-0 -top-1 w-2.5 h-2.5 rounded-full bg-gray-500"></div>
              </div>

              {/* Execution Layer */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-4 w-full md:w-1/4"
              >
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 text-center md:text-right">Execution Layer</h4>
                <div className="glass-card p-4 flex items-center gap-3 bg-gray-900/80 border-gray-700 justify-end">
                  <span className="text-sm text-gray-300">Browser Auto</span>
                  <Globe className="w-5 h-5 text-purple-400" />
                </div>
                <div className="glass-card p-4 flex items-center gap-3 bg-gray-900/80 border-gray-700 justify-end">
                  <span className="text-sm text-gray-300">Desktop Ctrl</span>
                  <Monitor className="w-5 h-5 text-purple-400" />
                </div>
              </motion.div>
            </div>
            
            {/* Memory Base */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex justify-center"
            >
              <div className="glass-card py-3 px-8 rounded-full border-indigo-900/50 bg-indigo-950/20 flex items-center gap-4">
                <Database className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium text-gray-300">Long-term Memory & Project Context</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { icon: Mic, title: "Voice Interaction", desc: "Whisper & Edge TTS" },
            { icon: Eye, title: "Vision Capabilities", desc: "OCR & Screenshots" },
            { icon: Zap, title: "Task Planning", desc: "Autonomous Execution" },
            { icon: HardDrive, title: "Memory System", desc: "Context Management" },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-900/40 border border-gray-800 p-6 rounded-xl hover:bg-gray-800/50 transition-colors text-center group"
            >
              <feature.icon className="w-8 h-8 text-indigo-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-gray-200 font-medium mb-1">{feature.title}</h4>
              <p className="text-xs text-gray-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAutomation;
