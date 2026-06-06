import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (id) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Desktop Nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-dark-950/70 backdrop-blur-2xl border-b border-white/[0.04]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="group flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-emerald/20 border border-neon-cyan/20 flex items-center justify-center group-hover:border-neon-cyan/40 transition-colors">
              <span className="text-sm font-bold font-mono text-neon-cyan">&lt;/&gt;</span>
            </div>
            <span className="hidden sm:block text-sm font-semibold text-white">
              Ashton <span className="text-neon-cyan">Pino-on</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                  activeSection === id
                    ? 'text-neon-cyan'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full"
                    style={{ background: 'linear-gradient(90deg, #00f0ff, #10b981)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="hidden md:block px-5 py-2 text-sm font-semibold text-dark-950 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-emerald hover:shadow-glow transition-shadow duration-300"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg glass"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} className="text-white" /> : <Menu size={18} className="text-white" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-950/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map(({ id, label }, i) => (
              <motion.button
                key={id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                onClick={() => scrollTo(id)}
                className={`text-2xl font-semibold transition-colors ${
                  activeSection === id ? 'text-neon-cyan' : 'text-gray-400'
                }`}
              >
                {label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              onClick={() => scrollTo('contact')}
              className="mt-4 px-8 py-3 text-lg font-semibold text-dark-950 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-emerald"
            >
              Let's Talk
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
