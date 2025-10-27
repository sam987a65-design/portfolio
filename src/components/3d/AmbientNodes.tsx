'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function AmbientNodes() {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)

  // Generate random node positions
  const { positions, connections } = useMemo(() => {
    const nodeCount = 50
    const positions = new Float32Array(nodeCount * 3)
    const connections: number[] = []

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (distance < 5) {
          connections.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2]
          )
        }
      }
    }

    return { positions, connections: new Float32Array(connections) }
  }, [])

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return

    const time = state.clock.elapsedTime * 0.1

    // Slow rotation
    pointsRef.current.rotation.y = time
    linesRef.current.rotation.y = time

    // Gentle movement
    pointsRef.current.position.y = Math.sin(time * 0.5) * 0.5
    linesRef.current.position.y = Math.sin(time * 0.5) * 0.5
  })

  return (
    <group>
      {/* Nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color="#2dd4bf"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Connections */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length / 3}
            array={connections}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#2dd4bf" transparent opacity={0.2} />
      </lineSegments>
    </group>
  )
}
