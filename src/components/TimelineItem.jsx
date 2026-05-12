import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

export default function TimelineItem({ exp, index, isLast }) {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: isLeft ? -50 : 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: index * 0.15 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="relative flex items-center mb-12 last:mb-0"
    >
      {/* Desktop layout */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center gap-8">
        {/* Left content */}
        <div className={isLeft ? '' : 'order-3'}>
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className={`p-6 rounded-xl glass hover:border-primary-500/30 transition-all duration-300 ${isLeft ? 'text-right' : 'text-left'}`}
          >
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full">
              {exp.period}
            </span>
            <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
            <p className="text-primary-400 text-sm font-medium mb-3">{exp.company}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
            <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
              {exp.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 text-[11px] font-medium text-secondary-300 bg-secondary-500/10 border border-secondary-500/15 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Center dot */}
        <div className="relative flex flex-col items-center order-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg shadow-primary-500/25 z-10">
            <Briefcase size={18} className="text-white" />
          </div>
          {!isLast && <div className="w-px h-20 bg-gradient-to-b from-primary-500/50 to-transparent mt-2" />}
        </div>

        {/* Right spacer */}
        <div className={isLeft ? 'order-3' : ''} />
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden flex gap-4 w-full">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg shadow-primary-500/25 z-10 shrink-0">
            <Briefcase size={14} className="text-white" />
          </div>
          {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-primary-500/50 to-transparent mt-2" />}
        </div>
        <div className="pb-8 flex-1">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-5 rounded-xl glass hover:border-primary-500/30 transition-all duration-300"
          >
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full">
              {exp.period}
            </span>
            <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
            <p className="text-primary-400 text-sm font-medium mb-3">{exp.company}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 text-[11px] font-medium text-secondary-300 bg-secondary-500/10 border border-secondary-500/15 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
