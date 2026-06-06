import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Gradient divider */}
      <div className="glow-line mb-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-emerald/20 border border-neon-cyan/20 flex items-center justify-center">
              <span className="text-xs font-bold font-mono text-neon-cyan">&lt;/&gt;</span>
            </div>
            <span className="text-sm font-semibold text-gray-400">
              Ashton <span className="text-gray-300">Pino-on</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-600 font-mono">
            © {new Date().getFullYear()} — Built with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              ❤️
            </motion.span>{' '}
            and React
          </p>

          {/* Links */}
          <div className="flex gap-4">
            {['GitHub', 'LinkedIn', 'Twitter'].map((name) => (
              <a
                key={name}
                href="#"
                className="text-xs text-gray-600 hover:text-neon-cyan transition-colors font-mono"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
