import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 180

export default function Particles() {
  const pointsRef = useRef()

  const { positions, sizes } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    const sz = new Float32Array(PARTICLE_COUNT)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15
      sz[i] = Math.random() * 0.015 + 0.005
    }
    return { positions: pos, sizes: sz }
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return
    const t = state.clock.elapsedTime
    const posAttr = pointsRef.current.geometry.attributes.position
    const arr = posAttr.array

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 3
      arr[ix + 1] += Math.sin(t * 0.3 + i * 0.1) * 0.001
      arr[ix] += Math.cos(t * 0.2 + i * 0.15) * 0.0005
    }
    posAttr.needsUpdate = true

    pointsRef.current.rotation.y = t * 0.015
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={PARTICLE_COUNT}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#00f0ff"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
