import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import useScrollProgress from '../../hooks/useScrollProgress'

function MainTorus() {
  const meshRef = useRef()
  const scroll = useScrollProgress()
  const scrollRef = useRef(0)

  useFrame((state, delta) => {
    if (!meshRef.current) return
    // Smooth scroll interpolation
    scrollRef.current += (scroll - scrollRef.current) * 2 * delta

    const s = scrollRef.current
    const t = state.clock.elapsedTime

    // Continuous rotation
    meshRef.current.rotation.x = t * 0.08 + s * Math.PI * 0.5
    meshRef.current.rotation.y = t * 0.12 + s * Math.PI * 0.3
    meshRef.current.rotation.z = t * 0.05

    // Scale down as user scrolls deeper
    const scale = THREE.MathUtils.lerp(1.8, 0.8, s)
    meshRef.current.scale.setScalar(scale)

    // Drift position based on scroll
    meshRef.current.position.x = THREE.MathUtils.lerp(2, -1.5, s)
    meshRef.current.position.y = THREE.MathUtils.lerp(0.5, -0.5, s)
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.35, 128, 32]} />
        <MeshDistortMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.15}
          roughness={0.3}
          metalness={0.8}
          wireframe
          distort={0.15}
          speed={2}
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  )
}

function SmallIcosahedron({ position, color, speed = 1, size = 0.3 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime * speed
    meshRef.current.rotation.x = t * 0.5
    meshRef.current.rotation.y = t * 0.7
    meshRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.3
  })

  return (
    <Float speed={speed * 2} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[size, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </Float>
  )
}

export default function FloatingGeometry() {
  const helpers = useMemo(() => [
    { position: [-4, 2, -3], color: '#10b981', speed: 0.6, size: 0.25 },
    { position: [4.5, -1.5, -4], color: '#a855f7', speed: 0.8, size: 0.2 },
    { position: [-3, -2, -2], color: '#00f0ff', speed: 0.5, size: 0.18 },
    { position: [3, 3, -5], color: '#ec4899', speed: 0.7, size: 0.22 },
  ], [])

  return (
    <group>
      <MainTorus />
      {helpers.map((props, i) => (
        <SmallIcosahedron key={i} {...props} />
      ))}
    </group>
  )
}
