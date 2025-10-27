'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

interface FloatingSkillIconProps {
  icon: string
  position: [number, number, number]
  delay?: number
}

export default function FloatingSkillIcon({
  icon,
  position,
  delay = 0,
}: FloatingSkillIconProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const textRef = useRef<any>(null)

  useFrame((state) => {
    if (!meshRef.current || !textRef.current) return

    const time = state.clock.elapsedTime + delay

    // Floating animation
    meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.2
    
    // Gentle rotation
    meshRef.current.rotation.y = time * 0.3
    meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.1

    // Text always faces camera
    textRef.current.quaternion.copy(state.camera.quaternion)
  })

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshPhysicalMaterial
          color="#2dd4bf"
          metalness={0.2}
          roughness={0.2}
          transmission={0.7}
          thickness={0.5}
          clearcoat={1}
          transparent
          opacity={0.8}
        />
      </mesh>
      <Text
        ref={textRef}
        position={[0, 0, 0.3]}
        fontSize={0.4}
        color="#e6eef6"
        anchorX="center"
        anchorY="middle"
      >
        {icon}
      </Text>
    </group>
  )
}
