'use client'
import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Points, PointMaterial } from '@react-three/drei'
import { inSphere } from 'maath/random'

export function Galaxy({ count = 5000, radius = 5 }) {
  const points = useRef()
  const [sphere] = useState(() => new Float32Array(count * 3))

  useEffect(() => {
    inSphere(sphere, { radius })
  }, [sphere, radius])

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x -= delta / 10
      points.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={points} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}
