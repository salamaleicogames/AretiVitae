// NetworkDemo.jsx
import { Canvas } from '@react-three/fiber'
import GeneralDisplay from './GeneralDisplay'
import styles from './modules/NetworkDemo.module.css'
import * as THREE from 'three';

export default function Networkdemo() {
  return (
    <div className={styles.back}>
      <Canvas
        camera={{
          fov: 64,
          position: [0, 0, 9.5],
        }}
        scene={{background: new THREE.Color(0x01172F)}}
        onCreated={({ gl }) => gl.setClearAlpha(0)}
        className={styles.canva}
        style={{ position: 'absolute', inset: 0, zIndex: 1 }}
        gl={{ alpha: true }}
      >
        <GeneralDisplay />

        
      </Canvas>
    </div>
  )
}