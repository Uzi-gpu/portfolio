import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, FolderGit2, Brain, Eye, MessageSquare, Cpu, Layers, Star, GitFork, Zap } from 'lucide-react'

const projects = [
  {
    title: 'MeetMind AI',
    subtitle: 'Final Year Project',
    description: 'An intelligent meeting assistant powered by Generative AI. Listen, summarize, and extract action items from meetings automatically using NLP and Speech-to-Text technologies.',
    icon: Brain,
    technologies: ['GenAI', 'NLP', 'Speech-to-Text', 'Python'],
    github: 'https://github.com/Uzi-gpu/meetmind-ai',
    demo: 'https://meetmind-demo.vercel.app',
    stars: 45,
    forks: 12,
    gradient: 'from-blue-500 to-cyan-500',
    featured: true,
    category: 'AI Assistant'
  },
  {
    title: 'Computer Vision Projects',
    subtitle: 'Repository',
    description: 'Comprehensive collection of CNNs, OpenCV tutorials, object detection, and image processing projects. Perfect for learning computer vision fundamentals.',
    icon: Eye,
    technologies: ['OpenCV', 'CNN', 'TensorFlow', 'Python'],
    github: 'https://github.com/Uzi-gpu/computer-vision-projects',
    demo: null,
    stars: 128,
    forks: 34,
    gradient: 'from-emerald-500 to-teal-500',
    featured: false,
    category: 'Computer Vision'
  },
  {
    title: 'NLP Projects',
    subtitle: 'Repository',
    description: 'Text generation, sentiment analysis, and various NLP implementations using TensorFlow and NLTK. Covers essential NLP techniques and architectures.',
    icon: MessageSquare,
    technologies: ['NLP', 'TensorFlow', 'NLTK', 'Python'],
    github: 'https://github.com/Uzi-gpu/nlp-projects',
    demo: null,
    stars: 89,
    forks: 21,
    gradient: 'from-indigo-500 to-violet-500',
    featured: false,
    category: 'NLP'
  },
  {
    title: 'Reinforcement Learning',
    subtitle: 'Repository',
    description: 'Implementation of Q-Learning, Actor-Critic, and REINFORCE algorithms using PyTorch and OpenAI Gym. A practical guide to RL fundamentals.',
    icon: Cpu,
    technologies: ['PyTorch', 'OpenAI Gym', 'RL', 'Python'],
    github: 'https://github.com/Uzi-gpu/reinforcement-learning',
    demo: null,
    stars: 67,
    forks: 18,
    gradient: 'from-amber-500 to-orange-500',
    featured: false,
    category: 'Machine Learning'
  },
  {
    title: 'Data Mining Advanced',
    subtitle: 'Repository',
    description: 'Advanced data mining concepts including neural network theory, clustering algorithms, loss functions, and computer vision pipelines.',
    icon: Layers,
    technologies: ['Data Mining', 'Neural Networks', 'Python', 'ML'],
    github: 'https://github.com/Uzi-gpu/data-mining-advanced',
    demo: null,
    stars: 45,
    forks: 11,
    gradient: 'from-green-500 to-emerald-500',
    featured: false,
    category: 'Data Science'
  },
  {
    title: 'Machine Learning Projects',
    subtitle: 'Repository',
    description: 'Diverse collection of classification, regression, and data preprocessing projects using scikit-learn. Great for ML fundamentals.',
    icon: FolderGit2,
    technologies: ['Scikit-learn', 'Classification', 'Regression', 'Python'],
    github: 'https://github.com/Uzi-gpu/machine-learning-projects',
    demo: null,
    stars: 156,
    forks: 42,
    gradient: 'from-blue-500 to-indigo-500',
    featured: false,
    category: 'Machine Learning'
  }
]

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <section id="projects" className="min-h-screen py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[80px]"
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
            <Zap size={14} className="text-blue-400" />
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              Portfolio
            </span>
          </motion.div>
          <h2 className="section-title mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            A showcase of my work in AI, Machine Learning, and Deep Learning.
            From research to production-ready solutions.
          </p>
        </motion.div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="glass-card overflow-hidden relative">
              {/* Subtle glow */}
              <motion.div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 0% 50%, ${project.gradient.includes('cyan') ? 'rgba(59, 130, 246,' : 'rgba(16, 185, 129,'}0.2) 0%, transparent 50%)`
                }}
              />

              <div className="grid lg:grid-cols-2 gap-0 relative z-10">
                {/* Project Preview */}
                <motion.div
                  className={`p-8 bg-gradient-to-br ${project.gradient} flex items-center justify-center min-h-[320px] relative overflow-hidden`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Subtle pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
                      backgroundSize: '30px 30px'
                    }}
                  />

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-32 h-32 rounded-xl bg-slate-900/50 backdrop-blur-xl flex items-center justify-center relative"
                  >
                    <project.icon size={60} className="text-white" />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-white/5 blur-xl"
                      animate={{ opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Category badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-slate-900/50 backdrop-blur-sm text-xs font-medium text-white"
                  >
                    {project.category}
                  </motion.div>
                </motion.div>

                {/* Project Info */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-slate-500">
                      {project.subtitle}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Star size={12} className="text-amber-400" fill="currentColor" />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={12} className="text-slate-400" />
                        {project.forks}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.03 }}
                        className="skill-tag cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300 group"
                    >
                      <Github size={16} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                      <span className="font-medium text-sm">View Code</span>
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:opacity-90 transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        <span className="font-semibold text-sm">Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              onHoverStart={() => setHoveredProject(project.title)}
              onHoverEnd={() => setHoveredProject(null)}
              className="project-card group relative"
            >
              {/* Subtle glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${project.gradient.includes('cyan') ? 'rgba(59, 130, 246, 0.08)' : project.gradient.includes('emerald') ? 'rgba(16, 185, 129, 0.08)' : 'rgba(99, 102, 241, 0.08)'} 0%, transparent 70%)`
                }}
              />

              {/* Icon */}
              <div className="flex justify-between items-start mb-4 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`p-2.5 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-10`}
                >
                  <project.icon size={20} className="text-white" />
                </motion.div>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Github size={18} />
                </motion.a>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300 relative z-10">
                {project.title}
              </h3>

              <p className="text-slate-500 text-sm mb-4 line-clamp-2 relative z-10">
                {project.description}
              </p>

              {/* GitHub stats */}
              <div className="flex items-center gap-4 mb-4 text-xs text-slate-500 relative z-10">
                <span className="flex items-center gap-1">
                  <Star size={12} className="text-amber-400" fill="currentColor" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={12} className="text-slate-400" />
                  {project.forks}
                </span>
                <span className="px-2 py-0.5 rounded-lg bg-slate-800/50 text-xs">
                  {project.category}
                </span>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.03 }}
                    className="skill-tag cursor-default text-xs"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Bottom accent */}
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                style={{ width: '100%' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/Uzi-gpu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-slate-700/50 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300 group"
          >
            <Github size={20} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
            <div className="text-left">
              <div className="font-medium text-sm">View All Projects</div>
              <div className="text-xs text-slate-500">on GitHub</div>
            </div>
            <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
