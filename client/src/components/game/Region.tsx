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
  const textRef = useRef<THREE.Mesh>(null);
  const [showLocations, setShowLocations] = useState(false);
  const { progress } = useProgress();

  const isUnlocked = progress.unlockedRegions.includes(region.id);
  const completionPercentage = progress.regionProgress[region.id] || 0;

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = region.position[1] + Math.sin(state.clock.elapsedTime * 2 + region.position[0]) * 0.2;
      
      // Scale animation when hovered or selected
      const targetScale = isHovered || isSelected ? 1.2 : 1.0;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
    
    if (textRef.current) {
      // Make text always face camera
      textRef.current.lookAt(state.camera.position);
    }
  });

  const handleClick = () => {
    if (!isUnlocked) return;
    onClick(region.id);
    setShowLocations(!showLocations);
  };

  const getRegionColor = () => {
    if (!isUnlocked) return "#666666";
    if (completionPercentage >= 100) return "#00ff00";
    if (completionPercentage >= 50) return "#ffff00";
    return region.color;
  };

  return (
    <group>
      {/* Region marker */}
      <mesh
        ref={meshRef}
        position={region.position}
        onClick={handleClick}
        onPointerEnter={() => onHover(region.id)}
        onPointerLeave={() => onHover(null)}
        castShadow
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshLambertMaterial 
          color={getRegionColor()} 
          opacity={isUnlocked ? 1.0 : 0.5}
          transparent={!isUnlocked}
        />
      </mesh>

      {/* Region name */}
      <Text
        ref={textRef}
        position={[region.position[0], region.position[1] + 2, region.position[2]]}
        fontSize={0.8}
        color={isUnlocked ? "#ffffff" : "#888888"}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.1}
        outlineColor="#000000"
      >
        {region.name}
      </Text>

      {/* Progress indicator */}
      {isUnlocked && completionPercentage > 0 && (
        <Text
          position={[region.position[0], region.position[1] + 1.5, region.position[2]]}
          fontSize={0.5}
          color="#00ff00"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.05}
          outlineColor="#000000"
        >
          {completionPercentage}% Complete
        </Text>
      )}

      {/* Locations (when region is selected) */}
      {showLocations && isSelected && isUnlocked && (
        <group>
          {region.locations.map((location, index) => (
            <Location
              key={location.id}
              location={location}
              regionId={region.id}
              position={[
                region.position[0] + (index - 1) * 3,
                region.position[1] + 1,
                region.position[2] + 3
              ]}
            />
          ))}
        </group>
      )}
    </group>
  );
}
