import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGameState } from "../../lib/stores/useGameState";
import * as THREE from "three";

export default function Camera() {
  const { camera } = useThree();
  const { selectedRegion, selectedLocation } = useGameState();
  const targetPosition = useRef(new THREE.Vector3(0, 20, 20));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    // Update target position based on selected region
    if (selectedRegion) {
      // Move camera closer to selected region
      targetPosition.current.set(5, 15, 15);
      targetLookAt.current.set(0, 0, 0);
    } else {
      // Default world view
      targetPosition.current.set(0, 20, 20);
      targetLookAt.current.set(0, 0, 0);
    }

    // Smooth camera movement
    camera.position.lerp(targetPosition.current, 0.02);
    camera.lookAt(targetLookAt.current);
  });

  return null;
}
