import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import useScrollProgress from '../../hooks/useScrollProgress'
import useMousePosition from '../../hooks/useMousePosition'

export default function ScrollCamera() {
  const { camera } = useThree()
  const scroll = useScrollProgress()
  const mouse = useMousePosition()
  const smoothScroll = useRef(0)
  const smoothMouse = useRef({ x: 0, y: 0 })

  useFrame((_, delta) => {
    // Smooth interpolation
    smoothScroll.current += (scroll - smoothScroll.current) * 1.5 * delta
    smoothMouse.current.x += (mouse.x - smoothMouse.current.x) * 3 * delta
    smoothMouse.current.y += (mouse.y - smoothMouse.current.y) * 3 * delta

    const s = smoothScroll.current

    // Camera path through the scene
    const baseX = THREE.MathUtils.lerp(0, -1, s)
    const baseY = THREE.MathUtils.lerp(0.5, -0.5, s)
    const baseZ = THREE.MathUtils.lerp(8, 6, s)

    // Mouse parallax offset
    const mx = smoothMouse.current.x * 0.3
    const my = smoothMouse.current.y * 0.15

    camera.position.x = baseX + mx
    camera.position.y = baseY + my
    camera.position.z = baseZ

    // Look slightly ahead of center
    camera.lookAt(0, 0, 0)
  })

  return null
}
