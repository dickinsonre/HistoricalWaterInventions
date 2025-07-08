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
  const textRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { progress, discoverArtifact } = useProgress();
  const { addArtifact } = useInventory();
  const { playSuccess } = useAudio();

  const isDiscovered = progress.discoveredArtifacts.includes(artifact.id);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotation animation
      meshRef.current.rotation.y = state.clock.elapsedTime * 2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 4 + position[0]) * 0.15;
      
      // Scale animation when hovered
      const targetScale = isHovered ? 1.3 : 1.0;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
    
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  const handleClick = () => {
    if (isDiscovered) return;
    
    console.log("Artifact discovered:", artifact.id);
    discoverArtifact(artifact.id, locationId);
    addArtifact(artifact);
    playSuccess();
  };

  const getArtifactColor = () => {
    if (isDiscovered) return "#888888"; // Gray for discovered
    switch (artifact.rarity) {
      case "common": return "#FFFFFF";
      case "rare": return "#0000FF";
      case "epic": return "#800080";
      case "legendary": return "#FFD700";
      default: return "#FFFFFF";
    }
  };

  if (isDiscovered) {
    return null; // Don't render discovered artifacts
  }

  return (
    <group>
      {/* Artifact */}
      <mesh
        ref={meshRef}
        position={position}
        onClick={handleClick}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        castShadow
      >
        <octahedronGeometry args={[0.5, 0]} />
        <meshLambertMaterial 
          color={getArtifactColor()} 
          emissive={getArtifactColor()}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Artifact name (when hovered) */}
      {isHovered && (
        <Text
          ref={textRef}
          position={[position[0], position[1] + 1.5, position[2]]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.05}
          outlineColor="#000000"
        >
          {artifact.name}
        </Text>
      )}

      {/* Magical glow effect */}
      <pointLight 
        position={position} 
        color={getArtifactColor()} 
        intensity={0.5} 
        distance={5} 
      />
    </group>
  );
}
