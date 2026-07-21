import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2,
  Brain,
  Eye,
  MessageSquare,
  Cpu,
  LineChart,
  Zap,
  ChevronDown
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Machine Learning & Deep Learning',
    icon: Brain,
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Neural Networks'],
    description: 'Building and training sophisticated neural networks'
  },
  {
    title: 'Computer Vision',
    icon: Eye,
    skills: ['OpenCV', 'Object Detection', 'CNN', 'Image Processing', 'YOLO'],
    description: 'Teaching machines to understand visual data'
  },
  {
    title: 'Natural Language Processing',
    icon: MessageSquare,
    skills: ['NLP', 'Text Processing', 'Sentiment Analysis', 'Text Generation', 'NLTK'],
    description: 'Enabling computers to understand human language'
  },
  {
    title: 'AI & Generative AI',
    icon: Cpu,
    skills: ['Deep Learning', 'Reinforcement Learning', 'GenAI', 'Speech-to-Text'],
    description: 'Creating intelligent systems that learn and adapt'
  },
  {
    title: 'Programming & Tools',
    icon: Code2,
    skills: ['Python', 'Git', 'Jupyter', 'PostgreSQL', 'Docker'],
    description: 'Essential tools for modern development'
  },
  {
    title: 'Data & Analytics',
    icon: LineChart,
    skills: ['Data Mining', 'Data Preprocessing', 'Clustering', 'Data Visualization'],
    description: 'Extracting insights from complex datasets'
  }
]

function Skills() {
  const [expandedCategory, setExpandedCategory] = useState(null)

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index)
  }

  return (
    <section id="skills" className="min-h-screen flex items-center py-24 relative overflow-hidden bg-gray-50 border-t-4 border-black">
      {/* Schematic background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

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
                02 // Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black uppercase tracking-tight">
              Skills & <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>Technologies</span>
            </h2>
          </div>
          <p className="text-black font-medium max-w-md leading-relaxed text-lg bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_var(--shadow-color)]">
            A comprehensive toolkit for building intelligent systems, from data preprocessing
            to model deployment.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.08 }}
              onClick={() => toggleCategory(categoryIndex)}
              className="border-4 border-black bg-white group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_var(--shadow-color)]"
            >
              {/* Header */}
              <div className="relative p-6 pb-4 border-b-4 border-transparent group-hover:border-black transition-colors duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 border-4 border-black flex items-center justify-center bg-black text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <category.icon size={24} strokeWidth={2.5} />
                  </div>
                  <motion.div
                    animate={{ rotate: expandedCategory === categoryIndex ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-black border-2 border-black p-1"
                  >
                    <ChevronDown size={20} strokeWidth={3} />
                  </motion.div>
                </div>

                <h3 className="font-extrabold text-xl text-black uppercase tracking-tight mb-2">
                  {category.title}
                </h3>
                <p className="text-sm font-medium text-gray-600">{category.description}</p>
              </div>

              {/* Expandable skills */}
              <AnimatePresence>
                {expandedCategory === categoryIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 overflow-hidden"
                  >
                    <div className="pt-4 border-t-2 border-black">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 text-sm font-bold border-2 border-black text-white bg-black uppercase tracking-wider"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Default visible skills */}
              <AnimatePresence>
                {expandedCategory !== categoryIndex && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="px-6 pb-6"
                  >
                    <div className="flex flex-wrap gap-2">
                      {category.skills.slice(0, 3).map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: categoryIndex * 0.08 + skillIndex * 0.05 }}
                          className="px-2 py-1 text-xs font-bold border-2 border-black text-black uppercase tracking-wider bg-white"
                        >
                          {skill}
                        </motion.span>
                      ))}
                      <span className="px-2 py-1 text-xs font-bold border-2 border-black text-white bg-black">
                        +{category.skills.length - 3}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Years Experience', value: '2+', icon: 'T-01' },
            { label: 'Projects Completed', value: '10+', icon: 'P-02' },
            { label: 'Technologies', value: '20+', icon: 'S-03' },
            { label: 'System Uptime', value: '99%', icon: 'M-04' }
          ].map((stat) => (
            <div
              key={stat.label}
              className="border-4 border-black bg-white p-6 relative group hover:bg-black transition-colors duration-300"
            >
              <div className="absolute top-2 right-2 text-xs font-extrabold tracking-widest text-gray-400 group-hover:text-gray-600">
                {stat.icon}
              </div>
              <div className="text-4xl font-extrabold text-black mb-2 group-hover:text-white group-hover:text-transparent group-hover:[-webkit-text-stroke:2px_white] transition-all duration-300">
                {stat.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-wider text-gray-500 group-hover:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
