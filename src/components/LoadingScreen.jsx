import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0B1120] flex items-center justify-center">
      <motion.div className="flex flex-col items-center gap-6">
        {/* Animated logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 rounded-xl border-2 border-primary-500/30 border-t-primary-500 flex items-center justify-center"
        />
        {/* Loading text */}
        <motion.div className="flex gap-1">
          {['L', 'o', 'a', 'd', 'i', 'n', 'g'].map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
              className="text-sm font-mono text-primary-400 tracking-widest"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
