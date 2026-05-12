import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import GradientBlob from '../components/GradientBlob'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      <GradientBlob className="inset-0 opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          subtitle="A selection of projects I've built that showcase my skills and passion for development."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
