import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import FloatingGeometry from './FloatingGeometry'
import Particles from './Particles'
import SceneLights from './SceneLights'
import ScrollCamera from './ScrollCamera'

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ScrollCamera />
          <SceneLights />
          <FloatingGeometry />
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  )
}
