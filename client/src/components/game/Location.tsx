import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import Artifact from "./Artifact";
import { LocationData } from "../../data/gameData";
import { useProgress } from "../../lib/stores/useProgress";
import { useGameState } from "../../lib/stores/useGameState";
import { useAudio } from "../../lib/stores/useAudio";

interface LocationProps {
  location: LocationData;
  regionId: string;
  position: [number, number, number];
}

export default function Location({ location, regionId, position }: LocationProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);
  const [showArtifacts, setShowArtifacts] = useState(false);
  const { progress, exploreLocation } = useProgress();
  const { setSelectedLocation } = useGameState();
  const { playHit } = useAudio();

  const isExplored = progress.exploredLocations.includes(location.id);
  const discoveredArtifacts = progress.discoveredArtifacts.filter(id => 
    location.artifacts.some(artifact => artifact.id === id)
  );

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.8;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 3 + position[0]) * 0.15;
    }
    
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 2;
      ringRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 3 + position[0]) * 0.15;
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
      playHit();
    }
  };

  const getLocationColor = () => {
    if (!isExplored) return "#7bb3d9";
    if (discoveredArtifacts.length === location.artifacts.length) return "#c9a227";
    return "#4a90c2";
  };

  return (
    <group>
      <mesh
        ref={ringRef}
        position={position}
      >
        <torusGeometry args={[1.2, 0.05, 8, 32]} />
        <meshBasicMaterial 
          color={getLocationColor()} 
          transparent 
          opacity={0.5}
        />
      </mesh>

      <mesh
        ref={meshRef}
        position={position}
        onClick={handleClick}
        castShadow
      >
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial 
          color={getLocationColor()}
          metalness={0.4}
          roughness={0.3}
          emissive={getLocationColor()}
          emissiveIntensity={0.2}
        />
      </mesh>

      <Text
        ref={textRef}
        position={[position[0], position[1] + 2, position[2]]}
        fontSize={0.5}
        color="#f5f0e1"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="#1a3a52"
        maxWidth={4}
      >
        {location.name}
      </Text>

      {isExplored && (
        <Text
          position={[position[0], position[1] + 1.5, position[2]]}
          fontSize={0.3}
          color={discoveredArtifacts.length === location.artifacts.length ? "#c9a227" : "#48bb78"}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.03}
          outlineColor="#1a3a52"
        >
          {discoveredArtifacts.length}/{location.artifacts.length} inventions
        </Text>
      )}

      {showArtifacts && isExplored && (
        <group>
          {location.artifacts.map((artifact, index) => {
            const angle = (index / location.artifacts.length) * Math.PI * 2;
            const radius = 2.5;
            return (
              <Artifact
                key={artifact.id}
                artifact={artifact}
                locationId={location.id}
                position={[
                  position[0] + Math.cos(angle) * radius,
                  position[1] + 0.5,
                  position[2] + Math.sin(angle) * radius
                ]}
              />
            );
          })}
        </group>
      )}
    </group>
  );
}