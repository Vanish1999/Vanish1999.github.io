"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import * as THREE from "three"

function Stars() {
  const ref = useRef<THREE.Points>(null!)

  // 生成粒子位置（只生成一次）
  const positions = useMemo(() => {
    const pts: number[] = []
    for (let i = 0; i < 2000; i++) {
      const r = (Math.random() - 0.5) * 10
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 20
      const z = (Math.random() - 0.5) * 20
      pts.push(x, y, z)
    }
    return new Float32Array(pts)
  }, [])

  // 每一帧都旋转一点
  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05
      ref.current.rotation.x += delta * 0.01
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#36E2FF" />
    </points>
  )
}

export default function Starfield() {
  return (
    <div className="absolute inset-0 -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <Stars />
      </Canvas>
    </div>
  )
}
