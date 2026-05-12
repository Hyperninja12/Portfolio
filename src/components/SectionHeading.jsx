import { motion } from 'framer-motion'
import { fadeInUp } from '../animations/variants'

export default function SectionHeading({ label, title, subtitle }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-gray-400 text-lg">{subtitle}</p>
      )}
    </motion.div>
  )
}
