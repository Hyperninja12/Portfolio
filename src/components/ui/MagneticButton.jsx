import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({
  children,
  className = '',
  onClick,
  strength = 0.3,
  ...props
}) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setPos({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    })
  }

  const handleLeave = () => setPos({ x: 0, y: 0 })

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.5 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  )
}
