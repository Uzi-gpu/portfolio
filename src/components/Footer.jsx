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
      delay: 0
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/uzair-bin-mubasher-208ba5164',
      label: 'LinkedIn',
      delay: 0.05
    },
    {
      icon: Mail,
      href: 'mailto:uzairmubasher5@gmail.com',
      label: 'Email',
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
      { name: 'Full-Stack Web', href: '#skills' },
      { name: 'GenAI', href: '#skills' }
    ],
    Projects: [
      { name: 'MeetMind AI', href: '#projects' },
      { name: 'Web Dev Portfolio', href: '#projects' },
      { name: 'Computer Vision', href: '#projects' },
      { name: 'NLP Projects', href: '#projects' }
    ]
  }

  return (
    <footer className="relative border-t-8 border-black overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 bg-black flex items-center justify-center border-2 border-black">
                <Terminal size={24} className="text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-black uppercase">
                  Uzair
                </span>
                <span className="text-[10px] text-black font-bold uppercase tracking-widest bg-gray-200 px-1">AI Engineer</span>
              </div>
            </motion.div>
            
            <p className="text-black font-medium text-sm leading-relaxed mb-6">
              BSAI Graduate passionate about building intelligent systems that make
              a real impact. Specializing in Deep Learning, Computer Vision, and Full-Stack Development.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-start-2">
            <h4 className="font-extrabold mb-6 text-black text-lg uppercase tracking-wider border-b-2 border-black pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.QuickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-700 text-sm font-bold uppercase tracking-wider hover:text-black hover:underline decoration-2 underline-offset-4 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 border border-black bg-transparent group-hover:bg-black transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h4 className="font-extrabold mb-6 text-black text-lg uppercase tracking-wider border-b-2 border-black pb-2 inline-block">Focus Areas</h4>
            <ul className="space-y-3">
              {footerLinks.Skills.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-700 text-sm font-bold uppercase tracking-wider hover:text-black hover:underline decoration-2 underline-offset-4 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 border border-black bg-transparent group-hover:bg-black transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-extrabold mb-6 text-black text-lg uppercase tracking-wider border-b-2 border-black pb-2 inline-block">Portfolio</h4>
            <ul className="space-y-3">
              {footerLinks.Projects.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-700 text-sm font-bold uppercase tracking-wider hover:text-black hover:underline decoration-2 underline-offset-4 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 border border-black bg-transparent group-hover:bg-black transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-4 border-black my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-black font-bold uppercase tracking-wider text-xs">
            © {currentYear} Uzair Bin Mubasher.
            All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-black font-bold uppercase tracking-wider text-xs">
            <span>Made with</span>
            <Heart size={14} fill="currentColor" className="text-black" />
            <span>and</span>
            <span className="bg-black text-white px-2 py-0.5">Coffee</span>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-3 px-4 py-2 border-2 border-black bg-gray-50 text-xs font-bold uppercase tracking-widest text-black">
            <span>Built with</span>
            <span className="w-1.5 h-1.5 bg-black" />
            <span>React</span>
            <span className="w-1.5 h-1.5 bg-black" />
            <span>Tailwind CSS</span>
            <span className="w-1.5 h-1.5 bg-black" />
            <span>Framer Motion</span>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
