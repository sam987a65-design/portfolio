'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

interface GlassCardStackProps {
  isInteractive?: boolean
}

export default function GlassCardStack({ isInteractive = true }: GlassCardStackProps) {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!groupRef.current) return

    if (isInteractive) {
      // Mouse-based rotation
      const x = state.mouse.x * 0.3
      const y = state.mouse.y * 0.3
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        y,
        0.05
      )
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        x,
        0.05
      )
    } else {
      // Auto-rotation
      groupRef.current.rotation.y += 0.003
    }

    // Gentle floating animation
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15
  })

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Laptop Base */}
      <RoundedBox
        args={[4, 0.15, 2.8]}
        radius={0.05}
        position={[0, -1.2, 0.6]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color="#1e2740"
          metalness={0.6}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Keyboard Area */}
      <mesh position={[0, -1.12, 0.4]}>
        <planeGeometry args={[3.6, 2.2]} />
        <meshStandardMaterial color="#141b2e" metalness={0.2} roughness={0.8} />
      </mesh>

      {/* Trackpad */}
      <RoundedBox
        args={[1.2, 0.02, 0.8]}
        radius={0.02}
        position={[0, -1.1, 1.2]}
      >
        <meshStandardMaterial color="#0b1020" metalness={0.4} roughness={0.6} />
      </RoundedBox>

      {/* Laptop Screen */}
      <RoundedBox
        args={[3.8, 2.4, 0.1]}
        radius={0.08}
        position={[0, 0.3, -0.5]}
        rotation={[-0.2, 0, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color="#2dd4bf"
          metalness={0.4}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Screen Display - Glass Effect */}
      <mesh position={[0, 0.3, -0.45]} rotation={[-0.2, 0, 0]}>
        <planeGeometry args={[3.4, 2.1]} />
        <meshPhysicalMaterial
          color="#0b1020"
          metalness={0.1}
          roughness={0.2}
          transmission={0.3}
          thickness={0.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Screen Glow */}
      <mesh position={[0, 0.3, -0.44]} rotation={[-0.2, 0, 0]}>
        <planeGeometry args={[3.2, 2.0]} />
        <meshBasicMaterial color="#2dd4bf" transparent opacity={0.3} />
      </mesh>

      {/* Code Lines on Screen */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[-1.2 + (i % 2) * 0.1, 0.8 - i * 0.25, -0.43]}
          rotation={[-0.2, 0, 0]}
        >
          <planeGeometry args={[2 + Math.random() * 0.5, 0.08]} />
          <meshBasicMaterial color="#5eead4" transparent opacity={0.6} />
        </mesh>
      ))}

      {/* Accent particles */}
      {[...Array(20)].map((_, i) => {
        const angle = (i / 20) * Math.PI * 2
        const radius = 4 + Math.random() * 0.5
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = (Math.random() - 0.5) * 3

        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color="#2dd4bf" transparent opacity={0.5} />
          </mesh>
        )
      })}

      {/* Lighting */}
      <pointLight position={[0, 2, 2]} intensity={0.6} color="#2dd4bf" />
      <pointLight position={[0, -2, -2]} intensity={0.4} color="#ff8a65" />
      <spotLight
        position={[0, 0.3, -0.4]}
        angle={0.5}
        penumbra={1}
        intensity={0.5}
        color="#5eead4"
        target-position={[0, 0, 0]}
      />
    </group>
  )
}
