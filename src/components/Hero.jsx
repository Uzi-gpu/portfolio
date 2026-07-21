import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import profileImg from '../assets/profile.jpg'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

function Hero() {
  const techStack = ['PyTorch', 'TensorFlow', 'OpenCV', 'NLP', 'React', 'Node.js']

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Status indicator */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border-2 border-black mb-8 shadow-[4px_4px_0px_0px_var(--shadow-color)]"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full bg-black opacity-75" />
                <span className="relative inline-flex h-3 w-3 bg-black" />
              </span>
              <span className="text-sm text-black font-bold uppercase tracking-wider">Available for opportunities</span>
              <Sparkles size={16} className="text-black" />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] uppercase tracking-tight text-black"
            >
              <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--border-primary)' }}>Hello, I'm</span>
              <br />
              Uzair Bin Mubasher
            </motion.h1>

            {/* Subtitle */}
            <motion.div variants={itemVariants} className="mb-8 inline-block bg-black text-white px-4 py-2">
              <p className="text-xl sm:text-2xl font-bold uppercase tracking-widest">
                Full-Stack AI Engineer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-black font-medium max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed text-lg"
            >
              BSAI Graduate specializing in Deep Learning, Computer Vision, and NLP.
              Building intelligent systems from training to deployment.
              Currently focused on cutting-edge MedTech solutions and scalable web architectures.
            </motion.p>

            {/* Tech stack tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start"
            >
              {techStack.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-bold rounded-none border-2 border-black text-black uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            >
              <button
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                VIEW PROJECTS
                <ArrowRight size={20} strokeWidth={3} />
              </button>
              <button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                GET IN TOUCH
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Structural Frame */}
              <div className="absolute inset-0 border-4 border-black translate-x-4 translate-y-4"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full border-4 border-black bg-white overflow-hidden z-10">
                <img 
                  src={profileImg} 
                  alt="Uzair Bin Mubasher" 
                  className="w-full h-full object-cover grayscale-0 dark:grayscale transition-all duration-500"
                />
              </div>

              {/* Decorative architectural marks */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-t-4 border-l-4 border-black"></div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-4 border-r-4 border-black"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
          onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-black">Scroll</span>
          <div className="w-1 h-12 bg-gray-200 relative overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-black"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
