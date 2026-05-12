import { motion } from 'framer-motion'
import { ExternalLink, CodeXml, ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden glass hover:border-primary-500/30 transition-all duration-500"
    >
      {/* Project Preview */}
      <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-black text-white/5 group-hover:text-white/10 transition-all duration-500 group-hover:scale-110">
            {project.title.charAt(0)}
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <a href={project.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-black/50 backdrop-blur-sm text-white hover:bg-primary-500/80 transition-all">
            <CodeXml size={16} />
          </a>
          <a href={project.live} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-black/50 backdrop-blur-sm text-white hover:bg-primary-500/80 transition-all">
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
            {project.title}
          </h3>
          <ArrowUpRight size={18} className="text-gray-500 group-hover:text-primary-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium text-primary-300 bg-primary-500/10 border border-primary-500/15 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
