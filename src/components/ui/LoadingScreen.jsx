import { motion } from 'framer-motion'

export default function LoadingScreen({ progress = 0 }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-dark-950 flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Glow orb */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,240,255,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-12"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-emerald/20 border border-neon-cyan/20 flex items-center justify-center">
          <span className="text-2xl font-bold font-mono text-neon-cyan">&lt;/&gt;</span>
        </div>
      </motion.div>

      {/* Progress bar */}
      <div className="relative z-10 w-48">
        <div className="h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #00f0ff, #10b981)',
              boxShadow: '0 0 15px rgba(0, 240, 255, 0.5)',
            }}
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs text-gray-500 font-mono mt-4 tracking-widest uppercase"
        >
          Loading
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ...
          </motion.span>
        </motion.p>
      </div>
    </motion.div>
  )
}
