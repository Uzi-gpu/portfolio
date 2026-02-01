import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, Terminal } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/90 backdrop-blur-2xl border-b border-slate-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Uzi-Gpu */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(59, 130, 246, 0.2)",
                    "0 0 25px rgba(16, 185, 129, 0.2)",
                    "0 0 15px rgba(59, 130, 246, 0.2)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-700/50"
              >
                <Terminal size={18} className="text-slate-300" />
              </motion.div>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-base tracking-tight">
                <span className="text-white">Uzi</span>
                <span className="text-slate-500">-</span>
                <span className="text-slate-400">Gpu</span>
              </span>
              <span className="text-[10px] text-slate-600 font-medium uppercase tracking-wider">AI Engineer</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 text-sm text-slate-400 font-medium transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/5 to-emerald-500/5 opacity-0 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com/Uzi-gpu", color: "hover:text-blue-400", delay: 0 },
              { icon: Linkedin, href: "https://linkedin.com/in/uzair-bin-mubasher-208ba5164", color: "hover:text-indigo-400", delay: 0.05 },
              { icon: Mail, href: "mailto:uzairmubasher5@gmail.com", color: "hover:text-emerald-400", delay: 0.1 }
            ].map((social) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + social.delay }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 ${social.color} transition-all duration-300`}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#030712]/95 backdrop-blur-xl border-b border-slate-800/50"
          >
            <div className="px-4 py-5 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left px-4 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-300 flex items-center gap-2 text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  {item.name}
                </motion.button>
              ))}
              <div className="flex items-center gap-2 pt-4 border-t border-slate-800/50 mt-4">
                {[
                  { icon: Github, href: "https://github.com/Uzi-gpu", color: "hover:text-blue-400" },
                  { icon: Linkedin, href: "https://linkedin.com/in/uzair-bin-mubasher-208ba5164", color: "hover:text-indigo-400" },
                  { icon: Mail, href: "mailto:uzairmubasher5@gmail.com", color: "hover:text-emerald-400" }
                ].map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 ${social.color} transition-all duration-300`}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
