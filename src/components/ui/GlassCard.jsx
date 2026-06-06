import { motion } from 'framer-motion'

export default function GlassCard({
  children,
  className = '',
  hover = false,
  glow = false,
  padding = 'p-6 sm:p-8',
  ...props
}) {
  const baseClass = hover ? 'glass-hover' : 'glass'
  const glowClass = glow ? 'glow-border' : ''

  return (
    <motion.div
      className={`${baseClass} ${glowClass} ${padding} ${className}`}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  )
}
