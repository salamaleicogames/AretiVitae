import React, { useRef, useState, Suspense, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Clone, Html } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

const count = 2026
const starData = Array.from({ length: count }, () => ({
  x: (Math.random() - 0.5) * 200,
  y: (Math.random() - 0.5) * 200,
  z: (Math.random() - 0.5) * 200,
  size: Math.random() * 0.8 + 0.2,
}))

const models = [
  { path: '/models/PCICON.glb',          label: 'PC Icon',    tooltip: 'Criar Network',        route: '/index',         position: [ 9.0,  3.5,  0], scale: 0.36, rotationY: 60  * (Math.PI / 180),               floatSpeed: 0.6,  floatAmp: 0.12, floatPhase: Math.random() * Math.PI * 2 },
  { path: '/models/COMPUTADOR.glb',      label: 'Computador', tooltip: 'Notas',  route: '/notes', position: [ 9.0, -4.0,  0], scale: 0.36, rotationY: Math.PI + (40 * (Math.PI / 180)),    floatSpeed: 0.5,  floatAmp: 0.10, floatPhase: Math.random() * Math.PI * 2 },
  { path: '/models/thetruescruture.glb', label: 'Estrutura',  tooltip: 'Visualizar Módulos',   route: '/NetworkDemo',   position: [ 5.2,  0.0,  0], scale: 0.06, rotationY: -50 * (Math.PI / 180),               floatSpeed: 0.7,  floatAmp: 0.09, floatPhase: Math.random() * Math.PI * 2 },
  { path: '/models/interrogacao.glb',    label: 'Sobre',      tooltip: 'Sobre o projeto',      route: '/sobre',         position: [9.5, 0, 0], scale: 0.08, rotationY: -90 * (Math.PI / 180),               floatSpeed: 0.55, floatAmp: 0.11, floatPhase: Math.random() * Math.PI * 2 },
]

const tooltipStyle = {
  fontSize: '13px',
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 600,
  color: '#fff',
  whiteSpace: 'nowrap',
  letterSpacing: '0.04em',
  background: 'rgba(150, 170, 230, 0.92)',
  backdropFilter: 'blur(8px)',
  padding: '7px 14px',
  borderRadius: '10px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
  pointerEvents: 'none',
  userSelect: 'none',
  transition: 'opacity 0.25s ease, transform 0.25s ease',
}

function Star({ x, y, z, size }) {
  return (
    <mesh position={[x, y, z]}>
      <sphereGeometry args={[size * 0.1, 4, 4]} />
      <meshBasicMaterial color="white" />
    </mesh>
  )
}

function Stars() {
  const groupRef = useRef()
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.01
      groupRef.current.rotation.x += delta * 0.003
    }
  })
  return (
    <group ref={groupRef}>
      {starData.map((star, i) => <Star key={i} {...star} />)}
    </group>
  )
}

function Model({ path, position, tooltip, route, scale, rotationY, floatSpeed, floatAmp, floatPhase, onNavigate }) {
  const { scene } = useGLTF(path)
  const groupRef     = useRef()
  const htmlRef      = useRef()
  const targetScale  = useRef(scale)
  const [hovered, setHovered] = useState(false)
  const clock = useRef(floatPhase)


  const pendingNav = useRef(null)

  useFrame((_, delta) => {
    if (!groupRef.current) return

   
    if (pendingNav.current) {
      const route = pendingNav.current
      pendingNav.current = null
    
      setTimeout(() => onNavigate(route), 0)
    }

    clock.current += delta * floatSpeed
    const newY = position[1] + Math.sin(clock.current) * floatAmp
    groupRef.current.position.y = newY
    if (htmlRef.current) htmlRef.current.position.y = newY + 1.2

    const goal = hovered ? scale * 1.08 : scale
    targetScale.current += (goal - targetScale.current) * 0.08
    groupRef.current.scale.setScalar(targetScale.current)
  })

  const handleClick = useCallback((e) => {
    e.stopPropagation()
    pendingNav.current = route
  }, [route])

  const handlePointerOver = useCallback((e) => {
    e.stopPropagation()
    setHovered(true)
    document.body.style.cursor = 'pointer'
  }, [])

  const handlePointerOut = useCallback((e) => {
    e.stopPropagation()
    setHovered(false)
    document.body.style.cursor = 'default'
  }, [])

  return (
    <>
      <group
        ref={groupRef}
        position={position}
        rotation={[0, rotationY, 0]}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        {/* hitbox invisível para área de clique maior */}
        <mesh visible={false}>
          <boxGeometry args={[2, 2, 2]} />
          <meshBasicMaterial />
        </mesh>
        <Clone object={scene} deep />
      </group>

      <group ref={htmlRef} position={[position[0], position[1] + 1.2, position[2]]}>
        <Html center style={{ pointerEvents: 'none' }} zIndexRange={[10, 0]}>
          <span style={{
            ...tooltipStyle,
            opacity: hovered && tooltip ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(6px)',
          }}>
            {tooltip}
          </span>
        </Html>
      </group>
    </>
  )
}

export default function BackDisplay() {
  const navigate = useNavigate()


  const handleNavigate = useCallback((route) => {
    navigate(route)
  }, [navigate])

  return (
    <Canvas
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        background: '#01172F',
        pointerEvents: 'auto',
      }}
      camera={{ position: [0, 0, 12], fov: 50, near: 0.1, far: 500 }}
      gl={{ antialias: true }}
      onPointerMissed={() => { document.body.style.cursor = 'default' }}
    >
      <ambientLight intensity={0.6} color="#ddeeff" />
      <directionalLight position={[2,  4,  6]} intensity={1.8} color="#eef4ff" />
      <directionalLight position={[8,  2,  2]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-4, -2, -6]} intensity={0.3} color="#8aaabb" />

      <Stars />

      <Suspense fallback={null}>
        {models.map((m, i) => (
          <Model key={i} {...m} onNavigate={handleNavigate} />
        ))}
      </Suspense>
    </Canvas>
  )
}

useGLTF.preload('/models/COMPUTADOR.glb')
useGLTF.preload('/models/PCICON.glb')
useGLTF.preload('/models/thetruescruture.glb')
useGLTF.preload('/models/interrogacao.glb')