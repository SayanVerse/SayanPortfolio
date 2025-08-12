// AnimatedLogo.tsx
// Rotating dotted Earth map with transparent background in React + Tailwind

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function AnimatedLogo() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current!.clientWidth / mountRef.current!.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current!.appendChild(renderer.domElement);

    // Load dotted Earth texture (replace with your transparent dotted map image)
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("/textures/dotted-earth.png"); // Your dotted map image

    // Create sphere with dotted Earth texture
    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      map: earthTexture,
      transparent: true,
    });
    const earth = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(earth);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.002; // Slow rotation
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = mountRef.current!.clientWidth / mountRef.current!.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current!.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="w-24 h-24" ref={mountRef}></div>;
}
