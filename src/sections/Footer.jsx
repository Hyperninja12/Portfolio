import { Code2, Heart } from 'lucide-react'
import SocialLinks from '../components/SocialLinks'

const footerLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="text-lg font-bold text-white">
              Ashton Mark G. <span className="gradient-text">Pino-on</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-gray-500 hover:text-primary-400 transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end">
            <SocialLinks size={16} />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Ashton Mark G. Pino-on. Built with
            <Heart size={12} className="text-primary-500 fill-primary-500" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
