import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture, Text } from "@react-three/drei";
import * as THREE from "three";
import Region from "./Region";
import WaterParticles from "./WaterParticles";
import { gameData } from "../../data/gameData";
import { useGameState } from "../../lib/stores/useGameState";

const geographicPositions: Record<string, [number, number, number]> = {
  "ancient-egypt": [8, 0.5, 2],
  "ancient-rome": [2, 0.5, -6],
  "mesopotamia": [12, 0.5, -4],
  "indus-valley": [18, 0.5, 0],
  "ancient-greece": [4, 0.5, -4],
  "ancient-china": [28, 0.5, -2],
  "islamic-golden-age": [14, 0.5, 2],
  "mesoamerica": [-22, 0.5, 4],
  "modern-era": [-18, 0.5, -6],
};

export default function WorldMap() {
  const mapRef = useRef<THREE.Mesh>(null);
  const waterRef = useRef<THREE.Mesh>(null);
  const worldMapTexture = useTexture("/textures/world-map.jpg");
  const { camera } = useThree();
  const { selectedRegion, setSelectedRegion } = useGameState();
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  useFrame((state) => {
    if (waterRef.current) {
      const material = waterRef.current.material as THREE.MeshStandardMaterial;
      material.opacity = 0.15 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
    }
  });

  const handleRegionClick = (regionId: string) => {
    console.log("Region clicked:", regionId);
    setSelectedRegion(regionId);
  };

  return (
    <group>
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -2, 0]} 
        receiveShadow
      >
        <planeGeometry args={[100, 50]} />
        <meshStandardMaterial color="#1a3a52" />
      </mesh>

      <mesh 
        ref={mapRef}
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -1.5, 0]} 
        receiveShadow
      >
        <planeGeometry args={[80, 40]} />
        <meshStandardMaterial 
          map={worldMapTexture}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      <mesh 
        ref={waterRef}
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -1.4, 0]}
      >
        <planeGeometry args={[100, 50]} />
        <meshStandardMaterial 
          color="#2e5c8a" 
          transparent 
          opacity={0.15}
          metalness={0.3}
          roughness={0.2}
        />
      </mesh>

      {gameData.regions.map((region) => {
        const geoPos = geographicPositions[region.id] || region.position;
        return (
          <group key={region.id}>
            <Region
              region={{...region, position: geoPos}}
              isSelected={selectedRegion === region.id}
              isHovered={hoveredRegion === region.id}
              onHover={setHoveredRegion}
              onClick={handleRegionClick}
            />
            <Text
              position={[geoPos[0], geoPos[1] + 2.5, geoPos[2]]}
              fontSize={1}
              color={hoveredRegion === region.id || selectedRegion === region.id ? "#c9a227" : "#f5f0e1"}
              anchorX="center"
              anchorY="middle"
              font="/fonts/Inter-Bold.woff"
              outlineWidth={0.05}
              outlineColor="#1a3a52"
            >
              {region.name}
            </Text>
          </group>
        );
      })}

      <WaterParticles count={150} spread={70} />

      <Text
        position={[0, 0.5, 22]}
        fontSize={2}
        color="#c9a227"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
        outlineWidth={0.08}
        outlineColor="#1a3a52"
      >
        Ancient Water Civilizations
      </Text>
      <Text
        position={[0, 0.5, 24]}
        fontSize={0.8}
        color="#7bb3d9"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        Click on a region to explore
      </Text>
    </group>
  );
}
