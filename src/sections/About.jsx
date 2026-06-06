import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import { skills, techStack } from '../data/skills'
import { staggerContainer, fadeInUp } from '../utils/animations'

const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Built' },
  { value: '1', label: 'Internship' },
  { value: '100%', label: 'Dedication' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Passionate Developer"
          subtitle="I build digital experiences that make a difference. Here's a glimpse into my skills and expertise."
        />

        {/* Intro */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <GlassCard>
            <p className="text-gray-300 text-lg leading-relaxed">
              With over <span className="text-white font-semibold">one year</span> of experience building web applications and websites, I <span className="text-neon-cyan font-semibold">completed a three-month internship as a Technical Support and Programmer Intern at Tagum City Hall,</span> where I gained hands-on experience in system development, troubleshooting, and IT support. I am passionate about creating efficient, user-friendly solutions and continuously improving my technical skills.
            </p>
          </GlassCard>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              variants={fadeInUp}
            >
              <GlassCard hover padding="p-6" className="text-center">
                <motion.span
                  className="text-3xl sm:text-4xl font-black gradient-text block mb-1"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                >
                  {value}
                </motion.span>
                <span className="text-sm text-gray-500">{label}</span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-16"
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={fadeInUp}>
              <GlassCard hover padding="p-4" className="group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-white group-hover:text-neon-cyan transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #00f0ff, #10b981)' }}
                    initial={{ width: '0%' }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-center text-sm font-semibold font-mono text-gray-500 mb-6 uppercase tracking-widest">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-3 py-1.5 text-xs font-medium text-gray-400 bg-white/[0.03] border border-white/[0.06] rounded-lg hover:border-neon-cyan/20 hover:text-neon-cyan hover:bg-neon-cyan/[0.04] transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
