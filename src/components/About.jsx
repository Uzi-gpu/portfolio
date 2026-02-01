import React from 'react'
import { motion } from 'framer-motion'
import { Award, Rocket, Lightbulb, Globe, Target, Sparkles } from 'lucide-react'

const highlights = [
  {
    icon: Award,
    title: 'BSAI Graduate',
    description: 'Bachelor of Science in Artificial Intelligence',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    delay: 0
  },
  {
    icon: Rocket,
    title: 'Full-Stack AI Engineer',
    description: 'Building complete ML systems from training to deployment',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
    delay: 0.1
  },
  {
    icon: Lightbulb,
    title: 'Innovation Focus',
    description: 'Working on cutting-edge MedTech solutions',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-400/10',
    delay: 0.2
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Based in Pakistan, serving clients worldwide',
    color: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
    delay: 0.3
  },
]

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-0 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[80px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-4"
          >
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              About Me
            </span>
          </motion.div>
          <h2 className="section-title mt-4">
            Passionate About AI
            <span className="block text-blue-400 mt-1">Innovation</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into intelligent solutions through cutting-edge AI technologies
            and machine learning expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8">
              <div className="flex items-center gap-2 mb-4">
                <Target size={18} className="text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">Full-Stack AI Engineer</span>
              </div>

              <h3 className="text-2xl font-semibold mb-6 text-white">
                Building the Future with <span className="gradient-text">AI</span>
              </h3>

              <div className="space-y-5">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-slate-400 leading-relaxed"
                >
                  I'm a <span className="text-white font-medium">BSAI graduate</span> with a passion
                  for building intelligent systems that make a real impact. My expertise spans
                  <span className="text-blue-400"> Deep Learning</span>,
                  <span className="text-emerald-400"> Computer Vision</span>, and
                  <span className="text-indigo-400"> Natural Language Processing</span>.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-400 leading-relaxed"
                >
                  Currently, I'm working on <span className="text-blue-400 font-medium">MedTech</span>,
                  applying AI to solve healthcare challenges. I believe in building complete,
                  production-ready ML systems that bridge the gap between research and real-world
                  applications.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-slate-400 leading-relaxed"
                >
                  My tech stack includes Python, PyTorch, TensorFlow, OpenCV, and various
                  deployment tools. I'm constantly exploring new technologies to stay at the
                  forefront of AI innovation.
                </motion.p>
              </div>

              {/* Tech stack badges */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-2 mt-6"
              >
                {['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'NLP', 'Computer Vision', 'GenAI', 'Keras'].map((tech) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.03, y: -1 }}
                    className="skill-tag cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                whileHover={{ y: -3 }}
                className="glass-card-hover p-6 cursor-pointer group"
              >
                {/* Subtle glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${item.bgColor.replace('/10', '/15')} 0%, transparent 70%)`
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center mb-4`}
                  >
                    <item.icon className={item.color} size={20} />
                  </motion.div>

                  <h4 className="text-lg font-medium mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h4>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="glass-card p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={16} className="text-blue-400" />
                  <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
                    Currently Working On
                  </span>
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  MeetMind <span className="gradient-text">AI</span>
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  My final year project is an intelligent meeting assistant powered by GenAI.
                  It listens to meetings, summarizes discussions, and extracts actionable
                  items automatically. This project combines NLP, Speech-to-Text, and
                  Generative AI to create a seamless meeting experience.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {['GenAI', 'NLP', 'Speech-to-Text', 'Python'].map((tech) => (
                    <span key={tech} className="badge-premium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual element */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="relative w-48 h-48"
                >
                  {/* Outer ring */}
                  <div className="absolute inset-0 border border-slate-700/50 rounded-full" />

                  {/* Middle ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border border-dashed border-slate-700/50 rounded-full"
                  />

                  {/* Inner ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 border border-dashed border-slate-700/50 rounded-full"
                  />

                  {/* Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-slate-700/50 flex items-center justify-center backdrop-blur-sm"
                    >
                      <span className="text-xl font-semibold text-white">AI</span>
                    </motion.div>
                  </div>

                  {/* Floating dots */}
                  {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-2 h-2 rounded-full bg-blue-400/50"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translateX(calc(cos(${angle}deg) * 100px)) translateY(calc(sin(${angle}deg) * 100px))`
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.15
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
