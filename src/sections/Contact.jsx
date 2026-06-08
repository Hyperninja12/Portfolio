import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Mail, Phone } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import MagneticButton from '../components/ui/MagneticButton'
import { fadeInLeft, fadeInRight } from '../utils/animations'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'Ashtonmark04516@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+64 992 262 9418' },
  { icon: MapPin, label: 'Location', value: 'Barangay Maniki, Kapalong, Davao Del Norte' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState('')

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <GlassCard>
              <h3 className="text-lg font-bold text-white mb-6">Let's work together</h3>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-neon-cyan/[0.06] border border-neon-cyan/[0.12] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-neon-cyan" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-600 uppercase tracking-widest font-mono">{label}</p>
                      <p className="text-sm text-gray-300">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard padding="p-5">
              <p className="text-xs text-gray-600 mb-3 font-mono uppercase tracking-widest">Find me on</p>
              <div className="flex gap-2">
                {['GitHub', 'LinkedIn', 'Twitter'].map((name) => (
                  <a
                    key={name}
                    href="#"
                    className="px-3 py-1.5 text-xs font-medium text-gray-400 rounded-lg glass hover:text-neon-cyan hover:border-neon-cyan/20 transition-all"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <GlassCard>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused('')}
                      placeholder="Your name"
                      className="input-glow"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                      placeholder="your@email.com"
                      className="input-glow"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    placeholder="Tell me about your project..."
                    className="input-glow resize-none"
                  />
                </div>
                <MagneticButton
                  onClick={undefined}
                  className="btn-primary w-full"
                  type="submit"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Send size={16} />
                    Send Message
                  </span>
                </MagneticButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
