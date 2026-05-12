export default function GradientBlob({ className = '' }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
      <div className="absolute top-0 -left-40 w-80 h-80 bg-primary-500/20 rounded-full blur-[128px] animate-blob" />
      <div className="absolute top-20 -right-40 w-80 h-80 bg-secondary-500/20 rounded-full blur-[128px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-20 w-80 h-80 bg-primary-500/10 rounded-full blur-[128px] animate-blob-slow animation-delay-4000" />
    </div>
  )
}
