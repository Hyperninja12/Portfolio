import { CodeXml, UserRound, MessageCircle, Mail } from 'lucide-react'

const socials = [
  { icon: CodeXml, href: 'https://github.com', label: 'GitHub' },
  { icon: UserRound, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
]

export default function SocialLinks({ size = 20, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
        >
          <s.icon size={size} />
        </a>
      ))}
    </div>
  )
}
