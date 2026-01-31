import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import Region from "./Region";
import { gameData } from "../../data/gameData";
import { useGameState } from "../../lib/stores/useGameState";

export default function WorldMap() {
  const meshRef = useRef<THREE.Mesh>(null);
  const waterRef = useRef<THREE.Mesh>(null);
  const grassTexture = useTexture("/textures/grass.png");
  const { camera } = useThree();
  const { selectedRegion, setSelectedRegion } = useGameState();
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;
  grassTexture.repeat.set(20, 20);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
    if (waterRef.current) {
      const material = waterRef.current.material as THREE.MeshStandardMaterial;
      material.opacity = 0.6 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  const handleRegionClick = (regionId: string) => {
    console.log("Region clicked:", regionId);
    setSelectedRegion(regionId);
  };

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
        <planeGeometry args={[150, 150]} />
        <meshStandardMaterial color="#1a3a52" />
      </mesh>

      <mesh 
        ref={waterRef}
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -1.4, 0]} 
        receiveShadow
      >
        <planeGeometry args={[150, 150]} />
        <meshStandardMaterial 
          color="#2e5c8a" 
          transparent 
          opacity={0.6}
          metalness={0.3}
          roughness={0.2}
        />
      </mesh>

      <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshLambertMaterial map={grassTexture} />
      </mesh>

      {gameData.regions.map((region) => (
        <Region
          key={region.id}
          region={region}
          isSelected={selectedRegion === region.id}
          isHovered={hoveredRegion === region.id}
          onHover={setHoveredRegion}
          onClick={handleRegionClick}
        />
      ))}
    </group>
  );
}