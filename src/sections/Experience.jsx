import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import { experiences } from '../data/experience'
import { fadeInLeft, fadeInRight } from '../utils/animations'

function TimelineItem({ exp, index, isInView }) {
  const isLeft = index % 2 === 0
  const variants = isLeft ? fadeInLeft : fadeInRight

  return (
    <div className={`relative flex items-start gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      {/* Content */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-1"
      >
        <GlassCard hover padding="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono text-neon-cyan px-2.5 py-1 rounded-md bg-neon-cyan/[0.06] border border-neon-cyan/[0.12]">
              {exp.period}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
          <p className="text-sm font-medium text-neon-emerald mb-3">{exp.company}</p>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-medium text-gray-400 bg-white/[0.03] border border-white/[0.06] rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Timeline dot — visible only on desktop */}
      <div className="hidden lg:flex flex-col items-center w-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
          className="relative z-10"
        >
          <div className="glow-dot !w-3 !h-3" />
        </motion.div>
      </div>

      {/* Spacer for other side */}
      <div className="hidden lg:block flex-1" />
    </div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Career Journey"
          subtitle="A timeline of my professional growth and key milestones."
        />

        <div ref={ref} className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2">
            <motion.div
              className="w-full h-full origin-top"
              style={{ background: 'linear-gradient(to bottom, rgba(0,240,255,0.3), rgba(0,240,255,0.05), transparent)' }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.company} exp={exp} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
