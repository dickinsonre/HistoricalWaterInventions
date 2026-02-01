import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface WaterParticlesProps {
  count?: number;
  spread?: number;
}

export default function WaterParticles({ count = 200, spread = 60 }: WaterParticlesProps) {
  const meshRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count);
    const sizes = new Float32Array(count);
    const opacities = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = Math.random() * 8 - 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.6;
      
      velocities[i] = 0.02 + Math.random() * 0.03;
      sizes[i] = 0.1 + Math.random() * 0.2;
      opacities[i] = 0.3 + Math.random() * 0.4;
    }
    
    return { positions, velocities, sizes, opacities };
  }, [count, spread]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 1] -= particles.velocities[i];
      
      if (positions[i * 3 + 1] < -2) {
        positions[i * 3 + 1] = 6;
        positions[i * 3] = (Math.random() - 0.5) * spread;
        positions[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.6;
      }
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    
    const material = meshRef.current.material as THREE.PointsMaterial;
    material.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#7bb3d9"
        transparent
        opacity={0.5}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}
