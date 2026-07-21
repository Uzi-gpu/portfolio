import React from 'react'
import { motion } from 'framer-motion'
import { Award, Rocket, Lightbulb, Globe, Target, Sparkles } from 'lucide-react'

const highlights = [
  {
    icon: Award,
    title: 'BSAI Graduate',
    description: 'Bachelor of Science in Artificial Intelligence',
    delay: 0
  },
  {
    icon: Rocket,
    title: 'Full-Stack AI Engineer',
    description: 'Building complete ML systems from training to deployment',
    delay: 0.1
  },
  {
    icon: Lightbulb,
    title: 'Innovation Focus',
    description: 'Working on cutting-edge MedTech solutions',
    delay: 0.2
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Based in Pakistan, serving clients worldwide',
    delay: 0.3
  },
]

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-24 relative overflow-hidden bg-white border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b-4 border-black pb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-black"></div>
            <span className="text-black text-sm font-bold uppercase tracking-widest">
              01 // About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black uppercase tracking-tight">
            Passionate About AI <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>Innovation</span>
          </h2>
          <p className="text-black font-medium mt-6 max-w-2xl leading-relaxed text-lg">
            Transforming ideas into intelligent solutions through cutting-edge AI technologies
            and machine learning expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_var(--shadow-color)] relative">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-black"></div>

              <div className="flex items-center gap-3 mb-8 border-b-2 border-black pb-4 inline-flex">
                <Target size={24} strokeWidth={3} className="text-black" />
                <span className="text-black text-sm font-bold uppercase tracking-wider">Full-Stack AI Engineer</span>
              </div>

              <h3 className="text-3xl font-extrabold mb-8 text-black uppercase leading-tight tracking-tight">
                Building the Future with <span className="bg-black text-white px-2">AI</span>
              </h3>

              <div className="space-y-6 text-black font-medium text-lg leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  I'm a <span className="font-extrabold bg-white px-1">BSAI graduate</span> with a passion
                  for building intelligent systems that make a real impact. My expertise spans
                  <span className="font-bold underline decoration-2 underline-offset-4"> Deep Learning</span>,
                  <span className="font-bold underline decoration-2 underline-offset-4"> Computer Vision</span>, and
                  <span className="font-bold underline decoration-2 underline-offset-4"> Natural Language Processing</span>.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Currently, I'm working on <span className="font-bold uppercase tracking-wider border-2 border-black px-1">MedTech</span>,
                  applying AI to solve healthcare challenges. I believe in building complete,
                  production-ready ML systems that bridge the gap between research and real-world
                  applications.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
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
                className="flex flex-wrap gap-3 mt-10"
              >
                {['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'NLP', 'Computer Vision', 'GenAI', 'React'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-bold rounded-none border-2 border-black text-black uppercase tracking-wider bg-white"
                  >
                    {tech}
                  </span>
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
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                whileHover={{ y: -5, boxShadow: "4px 4px 0px 0px var(--shadow-color)" }}
                className="border-4 border-black p-6 bg-white transition-all duration-300 group cursor-pointer flex flex-col"
              >
                <div className="w-12 h-12 border-2 border-black bg-black flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                  <item.icon className="text-white group-hover:text-black transition-colors duration-300" size={24} strokeWidth={2.5} />
                </div>

                <h4 className="text-xl font-extrabold mb-3 text-black uppercase tracking-tight">
                  {item.title}
                </h4>

                <p className="text-gray-700 font-medium text-sm leading-relaxed mt-auto">
                  {item.description}
                </p>
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
          className="mt-20"
        >
          <div className="border-4 border-black p-8 md:p-12 bg-gray-50 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6 inline-flex bg-white border-2 border-black px-4 py-2">
                  <Sparkles size={18} strokeWidth={3} className="text-black" />
                  <span className="text-black text-sm font-bold uppercase tracking-wider">
                    Currently Working On
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-black uppercase tracking-tight">
                  MeetMind <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>AI</span>
                </h3>

                <p className="text-black font-medium text-lg leading-relaxed mb-8 max-w-2xl">
                  My final year project is an intelligent meeting assistant powered by GenAI.
                  It listens to meetings, summarizes discussions, and extracts actionable
                  items automatically. This project combines NLP, Speech-to-Text, and
                  Generative AI to create a seamless meeting experience.
                </p>

                <div className="flex flex-wrap gap-3">
                  {['GenAI', 'NLP', 'Speech-to-Text', 'Python'].map((tech) => (
                    <span key={tech} className="px-4 py-2 border-2 border-black bg-black text-white font-bold uppercase text-xs tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual element - Architectural Blueprint Graphic */}
              <div className="flex-1 flex justify-center lg:justify-end w-full">
                <div className="relative w-full max-w-sm aspect-square border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_var(--shadow-color)]">
                  {/* Schematic grid */}
                  <div className="absolute inset-0 border-[1px] border-gray-200" style={{ backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  
                  {/* Abstract diagram */}
                  <div className="relative z-10 w-full h-full border-2 border-black flex flex-col justify-between p-4">
                     <div className="flex justify-between items-start">
                       <div className="w-16 h-16 border-4 border-black rounded-full flex items-center justify-center bg-white z-20 relative">
                         <span className="font-extrabold text-xs tracking-widest">AUDIO</span>
                         <div className="absolute top-1/2 left-full w-12 h-1 bg-black -translate-y-1/2"></div>
                       </div>
                       <div className="w-24 h-24 border-4 border-black flex items-center justify-center bg-black text-white z-20">
                         <span className="font-extrabold tracking-widest">GenAI</span>
                       </div>
                     </div>
                     <div className="flex justify-between items-end mt-4">
                       <div className="w-full h-24 border-4 border-black flex items-center justify-center bg-gray-100 relative">
                         <div className="absolute bottom-full left-1/2 w-1 h-12 bg-black -translate-x-1/2"></div>
                         <span className="font-extrabold uppercase tracking-widest">Summaries & Action Items</span>
                       </div>
                     </div>
                  </div>
                  
                  {/* Decorative corner brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-4 border-l-4 border-black"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-4 border-r-4 border-black"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
