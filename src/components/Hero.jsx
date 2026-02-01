import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, Cpu, Sparkles } from 'lucide-react'

// Refined animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12
    }
  }
}

function Hero() {
  const techStack = ['PyTorch', 'TensorFlow', 'OpenCV', 'NLP', 'Deep Learning']

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-blue-500/8 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-emerald-500/6 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Status indicator */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-sm text-slate-300 font-medium">Available for opportunities</span>
              <Sparkles size={14} className="text-slate-400" />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 leading-tight"
            >
              <span className="text-slate-400">Hello, I'm</span>
              <br />
              <span className="text-white">Uzair Mubasher</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div variants={itemVariants} className="relative mb-6 inline-block">
              <p className="text-xl text-slate-300">
                Full-Stack AI Engineer
              </p>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{ delay: 0.6, duration: 0.5 }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              BSAI Graduate specializing in Deep Learning, Computer Vision, and NLP.
              Building intelligent systems from training to deployment.
              Currently focused on cutting-edge <span className="text-blue-400">MedTech solutions</span>.
            </motion.p>

            {/* Tech stack tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2.5 mb-10 justify-center lg:justify-start"
            >
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3.5 py-1.5 text-sm rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary flex items-center gap-2"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 mt-12 max-w-lg mx-auto lg:mx-0"
            >
              {[
                { value: "5+", label: "Projects", color: "text-blue-400" },
                { value: "Deep Learning", label: "Specialization", color: "text-emerald-400" },
                { value: "MedTech", label: "Focus Area", color: "text-indigo-400" }
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="glass-card p-4 text-center"
                >
                  <motion.div
                    className={`text-2xl font-semibold ${stat.color}`}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Outer glow */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl"
              />

              {/* Main card */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative w-full h-full glass-card flex items-center justify-center overflow-hidden"
              >
                {/* Subtle pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.5) 0%, transparent 50%)`,
                    backgroundSize: '20px 20px'
                  }}
                />

                {/* Central icon */}
                <div className="flex flex-col items-center gap-4 relative z-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 rounded-full border border-slate-700/50 flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="w-24 h-24 rounded-full border border-slate-700/50 flex items-center justify-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                        <Brain size={32} className="text-blue-400" />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Floating icons */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -left-8 top-1/2 -translate-y-1/2 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50"
                  >
                    <Cpu size={20} className="text-emerald-400" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                    className="absolute -right-8 top-1/2 -translate-y-1/2 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50"
                  >
                    <Sparkles size={20} className="text-indigo-400" />
                  </motion.div>
                </div>

                {/* Corner accents */}
                {[
                  { pos: "top-0 left-0", border: "border-t border-l", color: "border-blue-500/30", rounded: "rounded-tl-lg" },
                  { pos: "top-0 right-0", border: "border-t border-r", color: "border-emerald-500/30", rounded: "rounded-tr-lg" },
                  { pos: "bottom-0 left-0", border: "border-b border-l", color: "border-indigo-500/30", rounded: "rounded-bl-lg" },
                  { pos: "bottom-0 right-0", border: "border-b border-r", color: "border-blue-500/30", rounded: "rounded-br-lg" }
                ].map((corner, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${corner.pos} w-6 h-6 ${corner.border} ${corner.color} ${corner.rounded}`}
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
          onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm text-slate-500">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border border-slate-700 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 4, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1.5 bg-gradient-to-b from-blue-400 to-emerald-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
