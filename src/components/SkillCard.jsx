import { motion } from 'framer-motion'

export default function SkillCard({ skill, index }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: index * 0.05 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="group relative p-5 rounded-xl glass hover:border-primary-500/30 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-white group-hover:text-primary-400 transition-colors">
          {skill.name}
        </h4>
        <span className="text-xs font-mono text-primary-400">{skill.level}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
        />
      </div>
      <span className="block mt-2 text-[10px] uppercase tracking-wider text-gray-500 font-medium">
        {skill.category}
      </span>
    </motion.div>
  )
}
