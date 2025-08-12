// AnimatedLogo.tsx
// Rotating white-dot Earth map logo in React + Tailwind

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
    mountRef.current!.appendChild(renderer.domElement);

    // Create sphere points (white dots)
    const radius = 2;
    const sphereGeometry = new THREE.SphereGeometry(radius, 64, 64);
    const dotMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.025 });
    const spherePoints = new THREE.Points(sphereGeometry, dotMaterial);
    scene.add(spherePoints);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      spherePoints.rotation.y += 0.002; // slow rotation
      renderer.render(scene, camera);
    };
    animate();

    // Resize handling
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

  return (
    <div className="w-16 h-16" ref={mountRef}></div>
  );
}
