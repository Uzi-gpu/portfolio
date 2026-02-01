import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Uzi-gpu',
      label: 'GitHub',
      color: 'hover:text-blue-400',
      delay: 0
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/uzair-bin-mubasher-208ba5164',
      label: 'LinkedIn',
      color: 'hover:text-indigo-400',
      delay: 0.05
    },
    {
      icon: Mail,
      href: 'mailto:uzairmubasher5@gmail.com',
      label: 'Email',
      color: 'hover:text-emerald-400',
      delay: 0.1
    }
  ]

  const footerLinks = {
    QuickLinks: [
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ],
    Skills: [
      { name: 'Deep Learning', href: '#skills' },
      { name: 'Computer Vision', href: '#skills' },
      { name: 'NLP', href: '#skills' },
      { name: 'GenAI', href: '#skills' }
    ],
    Projects: [
      { name: 'MeetMind AI', href: '#projects' },
      { name: 'Computer Vision', href: '#projects' },
      { name: 'NLP Projects', href: '#projects' },
      { name: 'Reinforcement Learning', href: '#projects' }
    ]
  }

  return (
    <footer className="relative border-t border-slate-800/50 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-[#030712]" />

      {/* Animated elements */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-[60px]"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-[60px]"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-700/50"
                >
                  <Terminal size={16} className="text-slate-300" />
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="font-medium text-base tracking-tight">
                  <span className="text-white">Uzi</span>
                  <span className="text-slate-600">-</span>
                  <span className="text-slate-400">Gpu</span>
                </span>
                <span className="text-[10px] text-slate-600 font-medium uppercase tracking-wider">AI Engineer</span>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-slate-400 text-sm leading-relaxed mb-5"
            >
              BSAI Graduate passionate about building intelligent systems that make
              a real impact. Specializing in Deep Learning, Computer Vision, and NLP.
            </motion.p>
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + social.delay }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-medium mb-4 text-white text-sm">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.QuickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-500 text-sm hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h4 className="font-medium mb-4 text-white text-sm">Skills</h4>
            <ul className="space-y-2.5">
              {footerLinks.Skills.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-500 text-sm hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-emerald-400 transition-colors" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-medium mb-4 text-white text-sm">Projects</h4>
            <ul className="space-y-2.5">
              {footerLinks.Projects.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-500 text-sm hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-indigo-400 transition-colors" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-slate-800/50 my-8 origin-left"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-slate-500 text-sm"
          >
            © {currentYear} <span className="text-white font-medium">Uzair Mubasher</span>.
            All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 text-slate-500 text-sm"
          >
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-amber-400"
            >
              <Heart size={14} fill="currentColor" />
            </motion.span>
            <span>and</span>
            <span className="font-mono text-blue-400">☕ Coffee</span>
          </motion.div>
        </div>

        {/* Tech Stack Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/30 border border-slate-700/50 text-sm text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Built with</span>
            <span className="text-blue-400 font-medium">React</span>
            <span>+</span>
            <span className="text-emerald-400 font-medium">Tailwind CSS</span>
            <span>+</span>
            <span className="text-indigo-400 font-medium">Framer Motion</span>
          </span>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
