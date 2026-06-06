import { motion } from 'framer-motion'
import { ExternalLink, Code2 } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import { projects } from '../data/projects'
import { staggerContainer, fadeInUp } from '../utils/animations'

const colorMap = {
  'from-emerald-500/20 to-cyan-500/20': '#10b981',
  'from-cyan-500/20 to-blue-500/20': '#00f0ff',
  'from-violet-500/20 to-emerald-500/20': '#a855f7',
  'from-amber-500/20 to-rose-500/20': '#f59e0b',
}

function ProjectCard({ project, index }) {
  const accentColor = colorMap[project.color] || '#00f0ff'
  const isEven = index % 2 === 0

  return (
    <motion.div
      variants={fadeInUp}
      className="group"
    >
      <GlassCard hover padding="p-0" className="overflow-hidden">
        {/* Accent stripe */}
        <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors duration-300">
                {project.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0 ml-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/[0.15] transition-all"
                aria-label="GitHub"
              >
                <Code2 size={15} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/20 transition-all"
                aria-label="Live Demo"
              >
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium rounded-md border transition-colors duration-300"
                style={{
                  color: accentColor,
                  borderColor: `${accentColor}20`,
                  backgroundColor: `${accentColor}08`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          subtitle="A selection of projects that showcase my skills in building modern web applications."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
