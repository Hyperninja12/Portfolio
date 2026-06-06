import { motion } from 'framer-motion'

export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="text-center mb-16 lg:mb-20">
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-neon-cyan/[0.06] border border-neon-cyan/[0.12]"
        >
          <div className="glow-dot !w-1.5 !h-1.5" />
          <span className="text-xs font-semibold font-mono text-neon-cyan uppercase tracking-widest">
            {label}
          </span>
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
