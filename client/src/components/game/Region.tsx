import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import Location from "./Location";
import { RegionData } from "../../data/gameData";
import { useProgress } from "../../lib/stores/useProgress";

interface RegionProps {
  region: RegionData;
  isSelected: boolean;
  isHovered: boolean;
  onHover: (regionId: string | null) => void;
  onClick: (regionId: string) => void;
}

export default function Region({ region, isSelected, isHovered, onHover, onClick }: RegionProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);
  const [showLocations, setShowLocations] = useState(false);
  const { progress } = useProgress();

  const isUnlocked = progress.unlockedRegions.includes(region.id);
  const completionPercentage = progress.regionProgress[region.id] || 0;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = region.position[1] + Math.sin(state.clock.elapsedTime * 2 + region.position[0]) * 0.3;
      
      const targetScale = isHovered || isSelected ? 1.3 : 1.0;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
    
    if (glowRef.current) {
      glowRef.current.position.y = region.position[1] + Math.sin(state.clock.elapsedTime * 2 + region.position[0]) * 0.3;
      const pulseScale = 1.5 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
      glowRef.current.scale.set(pulseScale, pulseScale, pulseScale);
      const material = glowRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
    }
    
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  const handleClick = () => {
    if (!isUnlocked) return;
    onClick(region.id);
    setShowLocations(!showLocations);
  };

  const getRegionColor = () => {
    if (!isUnlocked) return "#4a5568";
    if (completionPercentage >= 100) return "#48bb78";
    if (completionPercentage >= 50) return "#ecc94b";
    return region.color;
  };

  const getEraColor = () => {
    switch (region.era) {
      case "ancient": return "#c9a227";
      case "classical": return "#4a90c2";
      case "medieval": return "#48bb78";
      default: return "#7bb3d9";
    }
  };

  return (
    <group>
      {isUnlocked && (
        <mesh
          ref={glowRef}
          position={region.position}
        >
          <sphereGeometry args={[1.8, 16, 16]} />
          <meshBasicMaterial 
            color={getRegionColor()} 
            transparent 
            opacity={0.3}
          />
        </mesh>
      )}

      <mesh
        ref={meshRef}
        position={region.position}
        onClick={handleClick}
        onPointerEnter={() => onHover(region.id)}
        onPointerLeave={() => onHover(null)}
        castShadow
      >
        <dodecahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial 
          color={getRegionColor()} 
          opacity={isUnlocked ? 1.0 : 0.4}
          transparent={!isUnlocked}
          metalness={0.3}
          roughness={0.4}
          emissive={isHovered || isSelected ? getRegionColor() : "#000000"}
          emissiveIntensity={0.3}
        />
      </mesh>

      <Text
        ref={textRef}
        position={[region.position[0], region.position[1] + 3, region.position[2]]}
        fontSize={0.7}
        color={isUnlocked ? "#f5f0e1" : "#666666"}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.08}
        outlineColor="#1a3a52"
        font="/fonts/inter-bold.woff"
      >
        {region.name}
      </Text>

      <Text
        position={[region.position[0], region.position[1] + 2.3, region.position[2]]}
        fontSize={0.4}
        color={getEraColor()}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.04}
        outlineColor="#1a3a52"
      >
        {region.dateRange}
      </Text>

      {isUnlocked && completionPercentage > 0 && (
        <Text
          position={[region.position[0], region.position[1] + 1.8, region.position[2]]}
          fontSize={0.35}
          color="#48bb78"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.03}
          outlineColor="#1a3a52"
        >
          {completionPercentage}% Complete
        </Text>
      )}

      {showLocations && isSelected && isUnlocked && (
        <group>
          {region.locations.map((location, index) => {
            const angle = (index / region.locations.length) * Math.PI * 2;
            const radius = 5;
            return (
              <Location
                key={location.id}
                location={location}
                regionId={region.id}
                position={[
                  region.position[0] + Math.cos(angle) * radius,
                  region.position[1] + 1,
                  region.position[2] + Math.sin(angle) * radius
                ]}
              />
            );
          })}
        </group>
      )}
    </group>
  );
}