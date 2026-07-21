import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, FolderGit2, Brain, Eye, MessageSquare, Cpu, Layers, Star, GitFork, Zap, Code } from 'lucide-react'

const projects = [
  // AI Projects
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
    featured: false,
    category: 'Machine Learning'
  },
  
  // Web Development Projects
  {
    title: 'HyperCatalog (React Forms)',
    subtitle: 'Web Development',
    description: 'An advanced product catalog featuring custom React hooks, controlled form state, local image file uploads, and a premium UI theme.',
    icon: Code,
    technologies: ['React', 'Vite', 'JavaScript', 'CSS'],
    github: 'https://github.com/Uzi-gpu/full-stack-portfolio-/tree/main/project%202%20HyperCatalog',
    demo: 'https://uzi-gpu.github.io/full-stack-portfolio-/project%202%20HyperCatalog/dist/index.html',
    stars: 12,
    forks: 3,
    featured: true,
    category: 'Web App'
  },
  {
    title: 'Product Catalog Store',
    subtitle: 'Web Development',
    description: 'A beautiful e-commerce storefront built with React and Vite, featuring data fetching via useEffect, cart state management, and modern CSS.',
    icon: Code,
    technologies: ['React', 'Vite', 'JavaScript'],
    github: 'https://github.com/Uzi-gpu/full-stack-portfolio-/tree/main/project%201%20product-store',
    demo: 'https://uzi-gpu.github.io/full-stack-portfolio-/project%201%20product-store/dist/index.html',
    stars: 8,
    forks: 2,
    featured: false,
    category: 'Web App'
  },
  {
    title: 'React Pizza Shop',
    subtitle: 'Web Development',
    description: 'A full-stack React application featuring TanStack Router, TanStack Query, and a local SQLite API backend.',
    icon: FolderGit2,
    technologies: ['React', 'Node.js', 'SQLite'],
    github: 'https://github.com/Uzi-gpu/full-stack-portfolio-/tree/main/Pizza%20project',
    demo: null,
    stars: 15,
    forks: 5,
    featured: false,
    category: 'Full-Stack'
  },
  {
    title: 'iOS Style Calculator',
    subtitle: 'Web Development',
    description: 'A fully functional interactive calculator built with vanilla JavaScript, featuring state management and logic.',
    icon: Code,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Uzi-gpu/full-stack-portfolio-/tree/main/calculator%20project',
    demo: 'https://uzi-gpu.github.io/full-stack-portfolio-/calculator%20project/index.html',
    stars: 5,
    forks: 1,
    featured: false,
    category: 'Web App'
  },
  {
    title: 'Coffee Masters',
    subtitle: 'Web Development',
    description: 'A responsive e-commerce menu and checkout page utilizing modern UI aesthetics and glassmorphism.',
    icon: Layers,
    technologies: ['HTML', 'CSS', 'UI/UX'],
    github: 'https://github.com/Uzi-gpu/full-stack-portfolio-/tree/main/coffee%20shop%20project',
    demo: 'https://uzi-gpu.github.io/full-stack-portfolio-/coffee%20shop%20project/index.html',
    stars: 7,
    forks: 2,
    featured: false,
    category: 'Web Design'
  },
  {
    title: 'Class Dashboard',
    subtitle: 'Web Development',
    description: 'A JavaScript data-processing application that parses student scores and injects a dynamic dashboard into the DOM.',
    icon: Code,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Uzi-gpu/full-stack-portfolio-/tree/main/JS%20assessment',
    demo: 'https://uzi-gpu.github.io/full-stack-portfolio-/JS%20assessment/index.html',
    stars: 4,
    forks: 1,
    featured: false,
    category: 'Web App'
  },
  {
    title: 'The News Times',
    subtitle: 'Web Development',
    description: 'A digital newspaper layout demonstrating advanced CSS Grid, flexbox positioning, and typography scaling.',
    icon: Layers,
    technologies: ['HTML', 'CSS Grid', 'Flexbox'],
    github: 'https://github.com/Uzi-gpu/full-stack-portfolio-/tree/main/second%20project',
    demo: 'https://uzi-gpu.github.io/full-stack-portfolio-/second%20project/index.html',
    stars: 6,
    forks: 2,
    featured: false,
    category: 'Web Design'
  },
  {
    title: 'Uzair\'s Dev Log',
    subtitle: 'Web Development',
    description: 'A clean, structural semantic HTML blog with modern CSS typography and a focus on clean coding practices.',
    icon: Code,
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/Uzi-gpu/full-stack-portfolio-/tree/main/first%20project',
    demo: 'https://uzi-gpu.github.io/full-stack-portfolio-/first%20project/index.html',
    stars: 3,
    forks: 0,
    featured: false,
    category: 'Web Design'
  }
]

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <section id="projects" className="min-h-screen py-24 relative overflow-hidden bg-white border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b-4 border-black pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-black"></div>
              <span className="text-black text-sm font-bold uppercase tracking-widest">
                03 // Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black uppercase tracking-tight">
              Featured <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--border-primary)' }}>Projects</span>
            </h2>
          </div>
          <p className="text-black font-medium max-w-md leading-relaxed text-lg bg-gray-50 border-2 border-black p-4 shadow-[4px_4px_0px_0px_var(--shadow-color)]">
            A showcase of my work in AI, Machine Learning, and Full-Stack Web Development.
            From research to production-ready solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        {projects.filter(p => p.featured).map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="border-4 border-black bg-white shadow-[12px_12px_0px_0px_var(--shadow-color)] hover:shadow-[16px_16px_0px_0px_var(--shadow-color)] hover:-translate-y-1 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Info */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center border-b-4 lg:border-b-0 ${idx % 2 !== 0 ? 'lg:order-2' : 'lg:border-r-4'} border-black`}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-4 text-xs font-bold text-black uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <Star size={14} />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={14} />
                        {project.forks}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-black uppercase tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-black font-medium mb-8 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-bold border-2 border-black text-black uppercase tracking-wider bg-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border-2 border-black bg-white text-black font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-200"
                    >
                      <Github size={20} strokeWidth={2.5} />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border-2 border-black bg-black text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-200 shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:shadow-none"
                      >
                        <ExternalLink size={20} strokeWidth={2.5} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Preview */}
                <div className={`bg-gray-100 flex items-center justify-center p-12 min-h-[400px] relative overflow-hidden ${idx % 2 !== 0 ? 'lg:order-1 lg:border-r-4 border-black' : ''}`}>
                  {/* Schematic grid */}
                  <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  
                  <div className="w-48 h-48 border-4 border-black bg-white flex flex-col items-center justify-center relative z-10 shadow-[8px_8px_0px_0px_var(--shadow-color)] hover:scale-105 transition-transform duration-300">
                    <project.icon size={64} strokeWidth={1.5} className="text-black mb-4" />
                    <span className="font-extrabold uppercase tracking-widest text-sm">{project.subtitle}</span>
                    
                    {/* Decorative corners */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-4 border-l-4 border-black"></div>
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-4 border-r-4 border-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Projects Grid */}
        <div className="flex items-center gap-4 mb-10 mt-24">
          <div className="w-8 h-1 bg-black"></div>
          <h3 className="text-2xl font-extrabold text-black uppercase tracking-tight">More Projects</h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={project.title}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              className="border-4 border-black bg-white flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_var(--shadow-color)] group"
            >
              {/* Header/Icon */}
              <div className="flex justify-between items-start p-6 border-b-4 border-black bg-gray-50 group-hover:bg-black transition-colors duration-300">
                <div className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center">
                  <project.icon size={24} strokeWidth={2} className="text-black" />
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black group-hover:text-white transition-colors duration-300"
                >
                  <Github size={24} strokeWidth={2.5} />
                </a>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold bg-black text-white px-2 py-1 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-bold text-black uppercase">
                    <span className="flex items-center gap-1"><Star size={12} strokeWidth={3} /> {project.stars}</span>
                    <span className="flex items-center gap-1"><GitFork size={12} strokeWidth={3} /> {project.forks}</span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold mb-3 text-black uppercase tracking-tight">
                  {project.title}
                </h3>

                <p className="text-gray-700 font-medium text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-[10px] font-bold border-2 border-black text-black uppercase tracking-wider bg-white"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-[10px] font-bold border-2 border-black text-white bg-black uppercase tracking-wider">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Demo Link if available */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2 border-2 border-black bg-black text-white font-bold uppercase text-xs tracking-wider hover:bg-white hover:text-black transition-colors duration-200 mt-auto"
                  >
                    <ExternalLink size={14} strokeWidth={2.5} />
                    View Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <a
            href="https://github.com/Uzi-gpu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-8 py-4 border-4 border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300 group shadow-[8px_8px_0px_0px_var(--shadow-color)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            <Github size={28} strokeWidth={2.5} />
            <div className="text-left flex flex-col">
              <span className="font-extrabold uppercase tracking-widest text-lg leading-tight">View All Projects</span>
              <span className="text-xs font-bold uppercase tracking-widest opacity-70">On GitHub</span>
            </div>
            <ExternalLink size={20} strokeWidth={3} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
