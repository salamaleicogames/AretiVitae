import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Clone } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'

const chosenModel = Math.random() < 0.01
  ? '/models/cerberus.glb'
  : '/models/cerberuspose.glb'

function CerberusModel({ hovered }) {
  const { scene } = useGLTF(chosenModel)
  const groupRef = useRef()
  const currentScale = useRef(1)

  const box = new THREE.Box3().setFromObject(scene)
  const center = new THREE.Vector3()
  box.getCenter(center)
  const size = new THREE.Vector3()
  box.getSize(size)
  const maxDim = Math.max(size.x, size.y, size.z)
  const baseScale = 1 / maxDim * 2

  useFrame((_, delta) => {
    if (!groupRef.current) return
    if (!hovered) groupRef.current.rotation.y += delta * 0.4
    const target = hovered ? baseScale * 1.15 : baseScale
    currentScale.current += (target - currentScale.current) * 0.1
    groupRef.current.scale.setScalar(currentScale.current)
  })

  return (
    <group ref={groupRef}>
      <Clone object={scene} deep position={[-center.x, -center.y, -center.z]} />
    </group>
  )
}

export default function CerberusDisplay() {
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()

  return (
    <div
      style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate('/account')}
    >
      <Canvas
        style={{ width: '72px', height: '72px', background: 'transparent', flexShrink: 0 }}
        camera={{ position: [0, 0, 3], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} color="#ddeeff" />
        <directionalLight position={[2, 4, 6]} intensity={2} color="#eef4ff" />
        <directionalLight position={[-2, -1, -3]} intensity={0.4} color="#8aaabb" />
        <React.Suspense fallback={null}>
          <CerberusModel hovered={hovered} />
        </React.Suspense>
      </Canvas>

      <span style={{
        position: 'absolute',
        left: '70%',
        bottom: '110%',
        transform: hovered ? 'translateX(-30%) translateY(0)' : 'translateX(-30%) translateY(4px)',
        fontSize: '13px',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 600,
        color: '#fff',
        whiteSpace: 'nowrap',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.25s ease, transform 0.25s ease',
        pointerEvents: 'none',
        letterSpacing: '0.04em',
        background: 'rgba(150, 170, 230, 0.92)',
        backdropFilter: 'blur(8px)',
        padding: '7px 14px',
        borderRadius: '10px',
        border: 'none',
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
      }}>
        Configurações de conta
      </span>
    </div>
  )
}

useGLTF.preload('/models/cerberus.glb')
useGLTF.preload('/models/cerberuspose.glb')