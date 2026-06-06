import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import { skills } from '../data/skills'
import { staggerContainer, fadeInUp } from '../utils/animations'
import useMousePosition from '../hooks/useMousePosition'

const categoryColors = {
  Frontend: '#00f0ff',
  Backend: '#10b981',
  Database: '#a855f7',
  DevOps: '#ec4899',
  Cloud: '#4d7cff',
  Tools: '#f59e0b',
}

const categoryEmojis = {
  Frontend: '⚛️',
  Backend: '⚙️',
  Database: '🗄️',
  DevOps: '🐳',
  Cloud: '☁️',
  Tools: '🛠️',
}

export default function Skills() {
  const mouse = useMousePosition()

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="My Expertise"
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        {/* Central glowing orb */}
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0,240,255,0.3) 0%, transparent 70%)',
              transform: `translate(calc(-50% + ${mouse.x * 20}px), calc(-50% + ${mouse.y * 20}px))`,
              transition: 'transform 0.3s ease-out',
            }}
          />

          {/* Skills Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {skills.map((skill, i) => {
              const color = categoryColors[skill.category] || '#00f0ff'
              const emoji = categoryEmojis[skill.category] || '💻'

              return (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    transition: { duration: 0.3 },
                  }}
                  style={{
                    transform: `translate(${mouse.x * (i % 2 === 0 ? 3 : -3)}px, ${mouse.y * (i % 2 === 0 ? 2 : -2)}px)`,
                    transition: 'transform 0.4s ease-out',
                  }}
                >
                  <GlassCard padding="p-5" className="group relative overflow-hidden">
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${color}10, transparent 70%)`,
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg">{emoji}</span>
                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded-md"
                          style={{
                            color,
                            backgroundColor: `${color}10`,
                            border: `1px solid ${color}20`,
                          }}
                        >
                          {skill.category}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                        {skill.name}
                      </h3>
                      {/* Progress ring */}
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1 bg-white/[0.06] rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }}
                            initial={{ width: '0%' }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                        <span className="text-xs font-mono text-gray-500 w-8 text-right">{skill.level}%</span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
