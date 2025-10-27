'use client'

import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import { isWebGLAvailable, prefersReducedMotion } from '@/lib/utils'

interface Scene3DProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  enableControls?: boolean
  cameraPosition?: [number, number, number]
  className?: string
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-midnight-light/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-azure border-t-transparent rounded-full animate-spin" />
        <p className="text-soft/70 text-sm">Loading 3D scene...</p>
      </div>
    </div>
  )
}

export default function Scene3D({
  children,
  fallback,
  enableControls = true,
  cameraPosition = [0, 0, 8],
  className = '',
}: Scene3DProps) {
  const [webGLSupported, setWebGLSupported] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable())
    setReducedMotion(prefersReducedMotion())
  }, [])

  if (!webGLSupported) {
    return (
      <div className={`relative ${className}`}>
        {fallback || (
          <div className="absolute inset-0 flex items-center justify-center bg-midnight-light/50 backdrop-blur-sm rounded-xl border border-soft/10">
            <div className="text-center p-8">
              <p className="text-soft/70 text-sm">
                WebGL is not supported in your browser.
              </p>
              <p className="text-soft/50 text-xs mt-2">
                Please use a modern browser to view 3D content.
              </p>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <Canvas
        shadows
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <PerspectiveCamera makeDefault position={cameraPosition} fov={50} />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <spotLight
          position={[-10, 10, -5]}
          intensity={0.5}
          angle={0.3}
          penumbra={1}
          castShadow
        />

        {/* Environment */}
        <Environment preset="city" />

        {/* Scene content */}
        <Suspense fallback={null}>{children}</Suspense>

        {/* Controls */}
        {enableControls && !reducedMotion && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            autoRotate={false}
            autoRotateSpeed={0.5}
          />
        )}
      </Canvas>

      <Suspense fallback={<LoadingFallback />} />
    </div>
  )
}
