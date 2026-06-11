// Model.jsx
import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';

export const FLOOR_HEIGHT = 9.3;
export const NB_FLOORS = 3;

export function Model(props) {
  const { nodes, materials } = useGLTF('models/thetruescruture.glb')
  const ref = useRef();
  const tl = useRef();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // 1. Subida rápida - 1/4 da timeline
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
        ease: 'power2.out',
      },
      0
    )

    // 2. Aproximação
    tl.current.to(
      ref.current.scale,
      {
        duration: 1.5,
        x: 1.2,
        y: 1.2,
        z: 1.2,
        ease: 'power1.inOut',
      },
      1
    )

    // 3. Rotação para direita
    tl.current.to(
      ref.current.rotation,
      {
        duration: 2,
        y: -Math.PI * 2,
        ease: 'none',
      },
      1
    )
  }, []);

  return (
    <group {...props} dispose={null} ref={ref}>
      <group
        position={[-0.37, 17.83, -6.221]}
        rotation={[Math.PI, -0.347, Math.PI]}
        scale={[0.8845, 0.693, 0.8845]}
      >
        <mesh geometry={nodes.Icosphere042.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Icosphere042_1.geometry} material={materials['Material.003']} />
      </group>
    </group>
  )
}

useGLTF.preload('models/thetruescruture.glb')