import React, { useRef, useEffect } from 'react'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import styles from './modules/Topdisplay.module.css'

export default function Topdisplay() {

    const mountRef = useRef(null);

    useEffect(() => {
   
    const mount = mountRef.current;
    if (!mount) return;
    if (mount.childElementCount > 0) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x01172F);

    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
    camera.position.set(0, 5, 20);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.8;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    mount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xd0e8ff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.5);
    keyLight.position.set(-8, 12, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 50;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x8ab4ff, 1.5);
    rimLight.position.set(6, -4, -10);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xaac8ff, 1.0);
    fillLight.position.set(0, -8, 4);
    scene.add(fillLight);

    const centerGlow = new THREE.PointLight(0xd0e4ff, 2.0, 10);
    centerGlow.position.set(0, 0, 2);
    scene.add(centerGlow);

    const starCount = 2026;
    const geometry = new THREE.IcosahedronGeometry(0.1, 0);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 0.7,
      roughness: 0.2,
      metalness: 0.3
    });
    const stars = new THREE.InstancedMesh(geometry, material, starCount);
    const dummy = new THREE.Object3D();
    const minDist = 55;
    const maxDist = 70;

    for (let i = 0; i < starCount; i++) {
      let x, y, z, dist;
      do {
        x = (Math.random() - 0.5) * 200;
        y = (Math.random() - 0.5) * 100;
        z = (Math.random() - 0.5) * 200;
        dist = Math.sqrt(x*x + y*y + z*z);
      } while (dist < minDist || dist > maxDist);

      dummy.position.set(x, y, z);
      dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      dummy.updateMatrix();
      stars.setMatrixAt(i, dummy.matrix);
    }

   
    const starsGroup = new THREE.Group();
    starsGroup.add(stars);
    scene.add(starsGroup);

    const loader = new GLTFLoader();
    loader.load(
      "/models/TouchingHands.glb",
      (gltf) => {
        const model = gltf.scene;
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.roughness = 0.75;
            child.material.metalness = 0.15;
            child.material.needsUpdate = true;
            if (child.material.map) {
              child.material.map.colorSpace = THREE.SRGBColorSpace;
            }
          }
        });

        model.scale.set(5, 5, -5);
        scene.add(model);

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        model.position.sub(center);

        const maxDim = Math.max(size.x, size.y, size.z);
        camera.position.set(0, 0, maxDim * 0.5);
        camera.lookAt(0, 0, 0);
      },
      undefined,
      (error) => console.error("ERRO AO CARREGAR MODELO!:", error)
    );

    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();

    let animId;
    function animate() {
      animId = requestAnimationFrame(animate);

      const delta = clock.getDelta();

      starsGroup.rotation.y += delta * 0.01;
      starsGroup.rotation.x += delta * 0.003;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };

  }, []);

  return (
    <div ref={mountRef} className={styles.divCanvas} />
  )
}