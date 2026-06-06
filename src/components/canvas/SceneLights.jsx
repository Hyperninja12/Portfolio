import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import useScrollProgress from '../../hooks/useScrollProgress'

export default function SceneLights() {
  const light1 = useRef()
  const light2 = useRef()
  const scroll = useScrollProgress()

  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (light1.current) {
      light1.current.position.x = Math.sin(t * 0.4) * 5
      light1.current.position.y = Math.cos(t * 0.3) * 3 + 2
      light1.current.position.z = Math.sin(t * 0.2) * 3
      light1.current.intensity = 1.5 + Math.sin(t * 0.5) * 0.3
    }

    if (light2.current) {
      light2.current.position.x = Math.cos(t * 0.35) * 4
      light2.current.position.y = Math.sin(t * 0.25) * 3 - 1
      light2.current.position.z = Math.cos(t * 0.3) * 4
      light2.current.intensity = 1.2 + Math.cos(t * 0.4) * 0.3
    }
  })

  return (
    <>
      <ambientLight intensity={0.08} color="#1a1a3e" />
      <pointLight ref={light1} color="#00f0ff" intensity={1.5} distance={20} decay={2} />
      <pointLight ref={light2} color="#10b981" intensity={1.2} distance={18} decay={2} />
      <pointLight position={[0, 5, -5]} color="#a855f7" intensity={0.6} distance={15} decay={2} />
    </>
  )
}
