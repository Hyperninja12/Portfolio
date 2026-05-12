import SectionHeading from '../components/SectionHeading'
import TimelineItem from '../components/TimelineItem'
import GradientBlob from '../components/GradientBlob'
import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
      <GradientBlob className="inset-0 opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Career Journey"
          subtitle="A timeline of my professional growth and the companies I've had the privilege to work with."
        />

        <div className="relative">
          {/* Center line (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/30 via-primary-500/10 to-transparent -translate-x-1/2" />

          {experiences.map((exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} isLast={i === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
