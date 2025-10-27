'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Text } from '@react-three/drei'
import * as THREE from 'three'

interface ProjectPreview3DProps {
  title: string
  color?: string
}

export default function ProjectPreview3D({
  title,
  color = '#2dd4bf',
}: ProjectPreview3DProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return

    // Gentle rotation
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.1

    // Floating
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
  })

  return (
    <group ref={groupRef}>
      {/* Device mockup - laptop */}
      <group position={[0, 0, 0]}>
        {/* Screen */}
        <RoundedBox args={[3, 2, 0.1]} radius={0.05} position={[0, 0.5, 0]}>
          <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
        </RoundedBox>

        {/* Screen content */}
        <mesh position={[0, 0.5, 0.06]}>
          <planeGeometry args={[2.7, 1.7]} />
          <meshBasicMaterial color="#0b1020" />
        </mesh>

        {/* Base */}
        <RoundedBox args={[3.2, 0.1, 2]} radius={0.05} position={[0, -0.55, 0.5]}>
          <meshStandardMaterial color="#1e2740" metalness={0.5} roughness={0.3} />
        </RoundedBox>

        {/* Keyboard area */}
        <mesh position={[0, -0.49, 0.3]}>
          <planeGeometry args={[2.8, 1.5]} />
          <meshStandardMaterial color="#141b2e" metalness={0.2} roughness={0.8} />
        </mesh>
      </group>

      {/* Floating elements */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 2.5
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = (Math.random() - 0.5) * 2

        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color={color} transparent opacity={0.6} />
          </mesh>
        )
      })}

      {/* Ambient glow */}
      <pointLight position={[0, 0, 2]} intensity={0.5} color={color} distance={5} />
    </group>
  )
}
