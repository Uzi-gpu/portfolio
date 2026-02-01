import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, AlertCircle, Sparkles, MessageSquare, User, AtSign, FileText } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setStatus({
      type: 'success',
      message: 'Message sent successfully! I\'ll get back to you soon.'
    })
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)

    // Clear status after 5 seconds
    setTimeout(() => setStatus({ type: '', message: '' }), 5000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'uzairmubasher5@gmail.com',
      href: 'mailto:uzairmubasher5@gmail.com',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      delay: 0
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Uzi-gpu',
      href: 'https://github.com/Uzi-gpu',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      delay: 0.1
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/uzair-bin-mubasher',
      href: 'https://linkedin.com/in/uzair-bin-mubasher-208ba5164',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-400/10',
      delay: 0.2
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pakistan',
      href: '#',
      color: 'text-amber-400',
      bgColor: 'bg-amber-400/10',
      delay: 0.3
    }
  ]

  const inputFields = [
    { icon: User, name: 'name', label: 'Your Name', placeholder: 'John Doe', delay: 0.1 },
    { icon: AtSign, name: 'email', label: 'Email Address', placeholder: 'john@example.com', delay: 0.2 },
    { icon: FileText, name: 'subject', label: 'Subject', placeholder: 'Project Inquiry', delay: 0.3 },
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[80px]"
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
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              Get In Touch
            </span>
          </motion.div>
          <h2 className="section-title mt-4">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something innovative together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 h-full">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare size={18} className="text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">Contact Information</span>
              </div>

              <h3 className="text-xl font-semibold mb-6 text-white">
                Let's Start a <span className="gradient-text">Conversation</span>
              </h3>

              <p className="text-slate-400 mb-8 leading-relaxed">
                Feel free to reach out for collaboration opportunities, project inquiries,
                or just to say hello. I'm always excited to discuss AI and machine learning
                projects and explore new possibilities.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`p-2.5 rounded-lg ${item.bgColor} ${item.color}`}
                    >
                      <item.icon size={18} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-slate-500">{item.label}</p>
                      <p className="text-white group-hover:text-blue-400 transition-colors duration-300 font-medium">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30"
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </span>
                  <span className="text-emerald-400 font-medium text-sm">Available for opportunities</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8">
              <div className="flex items-center gap-2 mb-3">
                <Send size={18} className="text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">Send a Message</span>
              </div>

              <h3 className="text-xl font-semibold mb-6 text-white">
                Send Me a <span className="gradient-text">Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {inputFields.slice(0, 2).map((field) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: field.delay }}
                    >
                      <label htmlFor={field.name} className="block text-sm text-slate-400 mb-2 flex items-center gap-2">
                        <field.icon size={14} />
                        {field.label}
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          required
                          className="input-glass"
                          placeholder={field.placeholder}
                        />
                        <field.icon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                >
                  <label htmlFor="subject" className="block text-sm text-slate-400 mb-2 flex items-center gap-2">
                    <FileText size={14} />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-glass"
                    placeholder="What would you like to discuss?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm text-slate-400 mb-2 flex items-center gap-2">
                    <MessageSquare size={14} />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="input-glass resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                  />
                </motion.div>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                      status.type === 'success'
                        ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle size={18} />
                    ) : (
                      <AlertCircle size={18} />
                    )}
                    <span className="font-medium text-sm">{status.message}</span>
                  </motion.div>
                )}

                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed py-3.5 text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span className="font-semibold">Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
