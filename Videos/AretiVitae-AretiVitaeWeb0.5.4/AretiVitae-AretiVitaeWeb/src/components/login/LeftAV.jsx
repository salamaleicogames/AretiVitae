import React, { useRef, useEffect } from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import styles from './modules/LeftAV.module.css'

export default function LeftAV() {

  const mountRef = useRef(null);

  useEffect(() => {
   
    const mount = mountRef.current;
    if (!mount) return;
    if (mount.childElementCount > 0) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x01172F);

    const camera = new THREE.PerspectiveCamera(
      40,        
      width / height, 
      0.1,
      1000
    );
    camera.position.set(0, 5, 40);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    mount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xf0f4ff, 0.5);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xf0f4ff, 0x223344, 0.5);
    scene.add(hemiLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 2.0);
    fillLight.position.set(5, 10, 5);
    fillLight.castShadow = true;
    scene.add(fillLight);

    /*const gridHelper = new THREE.GridHelper(200, 50);
    scene.add(gridHelper);*/

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;    // sem movimentação lateral
    controls.enableZoom = false;   // sem zoom
    controls.target.set(0, 0, 0);
    controls.update();

    const loader = new GLTFLoader();
    loader.load(
      "/models/PROJECTLOGOARETITHREEJS.glb",
      (gltf) => {
        const model = gltf.scene;

        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.roughness = 0.9;
            child.material.metalness = 0.0;
            child.material.needsUpdate = true;
            if (child.material.map) {
              child.material.map.colorSpace = THREE.SRGBColorSpace;
            }
          }
        });

        model.scale.set(5, 5, 5);
        scene.add(model);

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        model.position.sub(center); // centraliza na origem para rotação correta

        const maxDim = Math.max(size.x, size.y, size.z);
        camera.position.set(0, 0, maxDim * 1.8);
        camera.lookAt(0, 0, 0);

        controls.target.set(0, 0, 0);
        controls.update();
      },
      undefined,
      (error) => {
        console.error("ERRO AO CARREGAR MODELO!:", error);
      }
    );

    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    let animId;
    function animate() {
      animId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };

  }, []);

  return (
    <div ref={mountRef} className={styles.divCanvas} />
  );
}