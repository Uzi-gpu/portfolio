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
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    description: 'Building and training sophisticated neural networks'
  },
  {
    title: 'Computer Vision',
    icon: Eye,
    skills: ['OpenCV', 'Object Detection', 'CNN', 'Image Processing', 'YOLO'],
    color: 'from-emerald-500 to-teal-500',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    description: 'Teaching machines to understand visual data'
  },
  {
    title: 'Natural Language Processing',
    icon: MessageSquare,
    skills: ['NLP', 'Text Processing', 'Sentiment Analysis', 'Text Generation', 'NLTK'],
    color: 'from-indigo-500 to-violet-500',
    glowColor: 'rgba(99, 102, 241, 0.15)',
    description: 'Enabling computers to understand human language'
  },
  {
    title: 'AI & Generative AI',
    icon: Cpu,
    skills: ['Deep Learning', 'Reinforcement Learning', 'GenAI', 'Speech-to-Text'],
    color: 'from-amber-500 to-orange-500',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    description: 'Creating intelligent systems that learn and adapt'
  },
  {
    title: 'Programming & Tools',
    icon: Code2,
    skills: ['Python', 'Git', 'Jupyter', 'PostgreSQL', 'Docker'],
    color: 'from-green-500 to-emerald-500',
    glowColor: 'rgba(34, 197, 94, 0.15)',
    description: 'Essential tools for modern development'
  },
  {
    title: 'Data & Analytics',
    icon: LineChart,
    skills: ['Data Mining', 'Data Preprocessing', 'Clustering', 'Data Visualization'],
    color: 'from-blue-500 to-indigo-500',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    description: 'Extracting insights from complex datasets'
  }
]

function Skills() {
  const [expandedCategory, setExpandedCategory] = useState(null)

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index)
  }

  return (
    <section id="skills" className="min-h-screen flex items-center py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[80px]"
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
              Expertise
            </span>
          </motion.div>
          <h2 className="section-title mt-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for building intelligent systems, from data preprocessing
            to model deployment.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => toggleCategory(categoryIndex)}
              className="glass-card-hover overflow-hidden group cursor-pointer"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0"
                style={{
                  background: `radial-gradient(circle at center, ${category.glowColor} 0%, transparent 70%)`
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Header */}
              <div className="relative p-6 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <motion.div
                    className={`p-2.5 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <category.icon size={20} className="text-white" />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: expandedCategory === categoryIndex ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-slate-500"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </div>

                <h3 className="font-medium text-lg text-white group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{category.description}</p>
              </div>

              {/* Expandable skills */}
              <AnimatePresence>
                {expandedCategory === categoryIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="pt-4 border-t border-slate-700/50">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.05 }}
                            whileHover={{ scale: 1.03 }}
                            className="skill-tag cursor-default"
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
                          className="skill-tag cursor-default text-slate-400"
                        >
                          {skill}
                        </motion.span>
                      ))}
                      <span className="skill-tag cursor-default text-slate-500">
                        +{category.skills.length - 3}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom accent line */}
              <motion.div
                className={`h-0.5 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Years Experience', value: '2+', icon: '⏱️' },
            { label: 'Projects Completed', value: '10+', icon: '🚀' },
            { label: 'Technologies', value: '20+', icon: '⚡' },
            { label: 'Coffee Consumed', value: '∞', icon: '☕' }
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -3, scale: 1.02 }}
              className="glass-card p-5 text-center"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-semibold gradient-text">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
