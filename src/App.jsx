import { useState, useEffect, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/ui/Navbar'
import LoadingScreen from './components/ui/LoadingScreen'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

// Lazy load the 3D scene for performance
const Scene = lazy(() => import('./components/canvas/Scene'))

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadProgress, setLoadProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')

  // Simulated loading progress
  useEffect(() => {
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setTimeout(() => setIsLoading(false), 400)
      }
      setLoadProgress(Math.min(progress, 100))
    }, 200)
    return () => clearInterval(interval)
  }, [])

  // Lenis smooth scrolling
  useEffect(() => {
    if (isLoading) return
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [isLoading])

  // Section observer
  useEffect(() => {
    if (isLoading) return
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -60% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => sections.forEach((s) => observer.unobserve(s))
  }, [isLoading])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen progress={loadProgress} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* 3D Background Canvas */}
          <Suspense fallback={null}>
            <Scene />
          </Suspense>

          {/* HTML Content */}
          <div className="relative z-10">
            <Navbar activeSection={activeSection} />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </div>
        </>
      )}
    </>
  )
}

export default App
