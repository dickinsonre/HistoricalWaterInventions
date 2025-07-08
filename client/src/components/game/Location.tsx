import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import Artifact from "./Artifact";
import { LocationData } from "../../data/gameData";
import { useProgress } from "../../lib/stores/useProgress";
import { useGameState } from "../../lib/stores/useGameState";

interface LocationProps {
  location: LocationData;
  regionId: string;
  position: [number, number, number];
}

export default function Location({ location, regionId, position }: LocationProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);
  const [showArtifacts, setShowArtifacts] = useState(false);
  const { progress, exploreLocation } = useProgress();
  const { setSelectedLocation } = useGameState();

  const isExplored = progress.exploredLocations.includes(location.id);
  const discoveredArtifacts = progress.discoveredArtifacts.filter(id => 
    location.artifacts.some(artifact => artifact.id === id)
  );

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 3 + position[0]) * 0.1;
    }
    
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  const handleClick = () => {
    console.log("Location clicked:", location.id);
    setSelectedLocation(location.id);
    setShowArtifacts(!showArtifacts);
    
    if (!isExplored) {
      exploreLocation(location.id, regionId);
    }
  };

  const getLocationColor = () => {
    if (!isExplored) return "#8B4513"; // Brown for unexplored
    if (discoveredArtifacts.length === location.artifacts.length) return "#FFD700"; // Gold for completed
    return "#4169E1"; // Blue for explored
  };

  return (
    <group>
      {/* Location marker */}
      <mesh
        ref={meshRef}
        position={position}
        onClick={handleClick}
        castShadow
      >
        <cylinderGeometry args={[0.8, 0.8, 1.5, 8]} />
        <meshLambertMaterial color={getLocationColor()} />
      </mesh>

      {/* Location name */}
      <Text
        ref={textRef}
        position={[position[0], position[1] + 2, position[2]]}
        fontSize={0.6}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.1}
        outlineColor="#000000"
      >
        {location.name}
      </Text>

      {/* Artifacts discovered indicator */}
      {isExplored && (
        <Text
          position={[position[0], position[1] + 1.5, position[2]]}
          fontSize={0.4}
          color="#00ff00"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.05}
          outlineColor="#000000"
        >
          {discoveredArtifacts.length}/{location.artifacts.length} artifacts
        </Text>
      )}

      {/* Artifacts (when location is selected) */}
      {showArtifacts && isExplored && (
        <group>
          {location.artifacts.map((artifact, index) => (
            <Artifact
              key={artifact.id}
              artifact={artifact}
              locationId={location.id}
              position={[
                position[0] + (index - 1) * 1.5,
                position[1] + 1,
                position[2] + 2
              ]}
            />
          ))}
        </group>
      )}
    </group>
  );
}
