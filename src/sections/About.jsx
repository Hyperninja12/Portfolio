import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'
import GradientBlob from '../components/GradientBlob'
import { skills, techStack } from '../data/skills'
import { staggerContainer, fadeInUp } from '../animations/variants'

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <GradientBlob className="inset-0 opacity-50" />

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
          <div className="p-8 rounded-2xl glass">
            <p className="text-gray-300 text-lg leading-relaxed">
              With over <span className="text-white font-semibold">4+ years</span> of experience in web development,
              I specialize in building <span className="text-primary-400 font-semibold">high-performance</span> web
              applications using modern technologies. I'm passionate about clean code, beautiful interfaces, and
              creating solutions that solve real-world problems.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16"
        >
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-center text-lg font-semibold text-white mb-6">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-lg hover:border-primary-500/30 hover:text-primary-400 hover:bg-primary-500/5 transition-all duration-300 cursor-default"
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
