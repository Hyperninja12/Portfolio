import { motion } from 'framer-motion'
import { ArrowDown, Download, Sparkles } from 'lucide-react'
import TypeWriter from '../components/ui/TypeWriter'
import MagneticButton from '../components/ui/MagneticButton'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-neon-cyan/[0.06] border border-neon-cyan/[0.12]"
            >
              <Sparkles size={14} className="text-neon-cyan" />
              <span className="text-sm font-medium text-neon-cyan">Available for hire</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] mb-6"
            >
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="gradient-text">
                Ashton Mark G.
                <br />
                Pino-on
              </span>
            </motion.h1>

            {/* Typing subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-lg sm:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                A{' '}
                <TypeWriter
                  strings={[
                    'Full Stack Developer',
                    'UI/UX Enthusiast',
                    'Creative Problem Solver',
                  ]}
                  className="text-white font-semibold"
                />
              </p>
              <p className="text-base text-gray-500 mt-2 max-w-lg mx-auto lg:mx-0">
                crafting modern, scalable web applications with clean code and stunning interfaces.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-8 justify-center lg:justify-start"
            >
              <MagneticButton
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <ArrowDown size={16} />
                </span>
              </MagneticButton>
              <MagneticButton
                onClick={() => {}}
                className="btn-secondary"
              >
                <Download size={16} />
                Resume
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {[
                { label: 'GitHub', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z', href: 'https://github.com' },
                { label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', href: 'https://linkedin.com' },
              ].map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/20 transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d={icon} /></svg>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image / Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full blur-3xl scale-110" style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.12) 0%, transparent 70%)' }} />
              <div className="absolute -inset-4 rounded-full border border-neon-cyan/[0.08] animate-spin-slow" />
              <div className="absolute -inset-8 rounded-full border border-neon-emerald/[0.04] animate-spin-reverse" />

              {/* Avatar container — replace with your photo */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-neon-cyan/20 shadow-glow">
                <img src="/profile.png" alt="Ashton Mark G. Pino-on" className="w-full h-full object-cover" />
              </div>

              {/* Floating tech badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-3 -right-3 px-3 py-1.5 rounded-lg glass text-xs font-semibold text-neon-cyan border-neon-cyan/20"
              >
                React ⚛️
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-lg glass text-xs font-semibold text-neon-emerald border-neon-emerald/20"
              >
                Node.js 🚀
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-lg glass text-xs font-semibold text-neon-purple border-neon-purple/20"
              >
                TypeScript 💎
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1"
        >
          <motion.div className="w-1 h-1 rounded-full bg-neon-cyan" />
        </motion.div>
      </motion.div>
    </section>
  )
}
