import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { ArtifactData } from "../../data/gameData";
import { useProgress } from "../../lib/stores/useProgress";
import { useInventory } from "../../lib/stores/useInventory";
import { useAudio } from "../../lib/stores/useAudio";

interface ArtifactProps {
  artifact: ArtifactData;
  locationId: string;
  position: [number, number, number];
}

export default function Artifact({ artifact, locationId, position }: ArtifactProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { progress, discoverArtifact } = useProgress();
  const { addArtifact } = useInventory();
  const { playSuccess } = useAudio();

  const isDiscovered = progress.discoveredArtifacts.includes(artifact.id);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 4 + position[0]) * 0.15;
      
      const targetScale = isHovered ? 1.4 : 1.0;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
    
    if (glowRef.current) {
      glowRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 4 + position[0]) * 0.15;
      const pulseScale = 1.3 + Math.sin(state.clock.elapsedTime * 4) * 0.2;
      glowRef.current.scale.set(pulseScale, pulseScale, pulseScale);
      const material = glowRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 4) * 0.1;
    }
    
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  const handleClick = () => {
    if (isDiscovered) return;
    
    console.log("Water invention discovered:", artifact.id);
    discoverArtifact(artifact.id, locationId);
    addArtifact(artifact);
    playSuccess();
  };

  const getArtifactColor = () => {
    if (isDiscovered) return "#4a5568";
    switch (artifact.rarity) {
      case "common": return "#a0aec0";
      case "rare": return "#4a90c2";
      case "epic": return "#9f7aea";
      case "legendary": return "#c9a227";
      default: return "#a0aec0";
    }
  };

  const getCategoryIcon = () => {
    switch (artifact.category) {
      case "irrigation": return "droplet";
      case "aqueduct": return "waves";
      case "water-lifting": return "arrow-up";
      case "sanitation": return "filter";
      case "dam": return "container";
      case "water-clock": return "clock";
      case "fountain": return "sparkles";
      case "canal": return "route";
      default: return "droplet";
    }
  };

  if (isDiscovered) {
    return null;
  }

  return (
    <group>
      <mesh
        ref={glowRef}
        position={position}
      >
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshBasicMaterial 
          color={getArtifactColor()} 
          transparent 
          opacity={0.4}
        />
      </mesh>

      <mesh
        ref={meshRef}
        position={position}
        onClick={handleClick}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        castShadow
      >
        <icosahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial 
          color={getArtifactColor()}
          metalness={0.6}
          roughness={0.2}
          emissive={getArtifactColor()}
          emissiveIntensity={0.4}
        />
      </mesh>

      {isHovered && (
        <>
          <Text
            ref={textRef}
            position={[position[0], position[1] + 1.8, position[2]]}
            fontSize={0.35}
            color="#f5f0e1"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.04}
            outlineColor="#1a3a52"
            maxWidth={3}
          >
            {artifact.name}
          </Text>
          <Text
            position={[position[0], position[1] + 1.4, position[2]]}
            fontSize={0.25}
            color={getArtifactColor()}
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.03}
            outlineColor="#1a3a52"
          >
            {artifact.rarity.toUpperCase()}
          </Text>
        </>
      )}

      <pointLight 
        position={position} 
        color={getArtifactColor()} 
        intensity={0.6} 
        distance={4} 
      />
    </group>
  );
}