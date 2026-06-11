import { ScrollControls } from '@react-three/drei'
import { Model } from './Model'
import ScrollCards from './ScrollCards'

export default function GeneralDisplay() {
  return (
    <>
      <ScrollControls pages={3} damping={0.25}>
        <Model />
        <ScrollCards />  
      </ScrollControls>

      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 8, 4]} intensity={1.2} castShadow />
      <directionalLight position={[-4, 2, -2]} intensity={0.3} />
    </>
  )
}