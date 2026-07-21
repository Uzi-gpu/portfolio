import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Send, MessageSquare, User, AtSign, FileText, CheckCircle, AlertCircle } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ message: '', type: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ message: '', type: '' })

    // Use Web3Forms to send emails without a backend.
    const accessKey = "d9f6ff01-2ef6-438f-85b4-fb7926ecd64d"

    if (!accessKey) {
       setStatus({ message: 'Action required: Please add your Web3Forms Access Key in Contact.jsx (line 21)', type: 'error' })
       setIsSubmitting(false)
       return
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact',
          message: formData.message,
        }),
      });
      const result = await response.json();
      
      if (result.success) {
        setStatus({ message: 'Message sent successfully!', type: 'success' })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus({ message: 'Failed to send message. Please try again.', type: 'error' })
      }
    } catch (error) {
      setStatus({ message: 'An error occurred. Please try again later.', type: 'error' })
    }

    setIsSubmitting(false)
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
      delay: 0
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Uzi-gpu',
      href: 'https://github.com/Uzi-gpu',
      delay: 0.1
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/uzair-bin-mubasher',
      href: 'https://linkedin.com/in/uzair-bin-mubasher-208ba5164',
      delay: 0.2
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pakistan',
      href: '#',
      delay: 0.3
    }
  ]

  const inputFields = [
    { icon: User, name: 'name', label: 'Your Name', placeholder: 'John Doe', delay: 0.1 },
    { icon: AtSign, name: 'email', label: 'Email Address', placeholder: 'john@example.com', delay: 0.2 },
    { icon: FileText, name: 'subject', label: 'Subject', placeholder: 'Project Inquiry', delay: 0.3 },
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center py-24 relative overflow-hidden bg-gray-50 border-t-4 border-black">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

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
              04 // Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black uppercase tracking-tight">
            Let's Build Something <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>Amazing</span>
          </h2>
          <p className="text-black font-medium mt-6 max-w-2xl leading-relaxed text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something innovative together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_var(--shadow-color)] h-full relative">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-black"></div>

              <div className="flex items-center gap-3 mb-8 border-b-2 border-black pb-4 inline-flex">
                <MessageSquare size={24} strokeWidth={3} className="text-black" />
                <span className="text-black text-sm font-bold uppercase tracking-wider">Contact Information</span>
              </div>

              <h3 className="text-3xl font-extrabold mb-8 text-black uppercase leading-tight tracking-tight">
                Let's Start a <br/><span className="bg-black text-white px-2">Conversation</span>
              </h3>

              <p className="text-black font-medium text-lg mb-10 leading-relaxed">
                Feel free to reach out for collaboration opportunities, project inquiries,
                or just to say hello. I'm always excited to discuss AI, Web Development, and machine learning
                projects and explore new possibilities.
              </p>

              <div className="space-y-6">
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
                    className="flex items-center gap-6 p-4 border-2 border-black bg-gray-50 hover:bg-white transition-all duration-300 group shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                  >
                    <div className="w-12 h-12 border-2 border-black flex items-center justify-center bg-black text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <item.icon size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{item.label}</p>
                      <p className="text-black font-extrabold text-lg group-hover:underline decoration-2 underline-offset-4 transition-all duration-300">
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
                className="mt-10 p-6 border-2 border-black bg-black text-white flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                  </span>
                  <span className="font-bold uppercase tracking-wider text-sm">Available for opportunities</span>
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
            <div className="border-4 border-black p-8 md:p-12 bg-white shadow-[8px_8px_0px_0px_var(--shadow-color)] relative">
              <div className="flex items-center gap-3 mb-8 border-b-2 border-black pb-4 inline-flex">
                <Send size={24} strokeWidth={3} className="text-black" />
                <span className="text-black text-sm font-bold uppercase tracking-wider">Send a Message</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {inputFields.slice(0, 2).map((field) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: field.delay }}
                    >
                      <label htmlFor={field.name} className="block text-sm font-bold uppercase tracking-wider text-black mb-2 flex items-center gap-2">
                        <field.icon size={16} strokeWidth={2.5} />
                        {field.label}
                      </label>
                      <input
                        type="text"
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-50 border-2 border-black text-black font-medium focus:outline-none focus:bg-white focus:ring-2 focus:ring-black transition-all"
                        placeholder={field.placeholder}
                      />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                >
                  <label htmlFor="subject" className="block text-sm font-bold uppercase tracking-wider text-black mb-2 flex items-center gap-2">
                    <FileText size={16} strokeWidth={2.5} />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-50 border-2 border-black text-black font-medium focus:outline-none focus:bg-white focus:ring-2 focus:ring-black transition-all"
                    placeholder="What would you like to discuss?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider text-black mb-2 flex items-center gap-2">
                    <MessageSquare size={16} strokeWidth={2.5} />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full p-3 bg-gray-50 border-2 border-black text-black font-medium focus:outline-none focus:bg-white focus:ring-2 focus:ring-black transition-all resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                  />
                </motion.div>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 p-4 border-2 border-black ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-red-50 text-red-700'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle size={18} />
                    ) : (
                      <AlertCircle size={18} />
                    )}
                    <span className="font-bold text-sm uppercase tracking-wider">{status.message}</span>
                  </motion.div>
                )}

                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white border-2 border-black font-bold uppercase tracking-widest py-4 flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-400 border-t-white rounded-full animate-spin group-hover:border-t-black" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} strokeWidth={2.5} />
                      <span>Send Message</span>
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
