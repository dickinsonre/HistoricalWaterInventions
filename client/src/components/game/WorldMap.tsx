import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import Region from "./Region";
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
  "minoan-crete": [6, 0.5, -3],
  "ancient-persia": [16, 0.5, -2],
  "khmer-empire": [24, 0.5, 4],
  "nubia": [10, 0.5, 6],
  "nabataean": [11, 0.5, 0],
  "sri-lanka": [20, 0.5, 6],
  "ancestral-puebloans": [-26, 0.5, -2],
  "byzantine": [6, 0.5, -6],
  "phoenicia": [9, 0.5, -2],
  "carthage": [4, 0.5, 2],
  "medieval-europe": [-2, 0.5, -8],
  "inca-empire": [-20, 0.5, 8],
  "balinese": [26, 0.5, 8],
  "aboriginal-australia": [30, 0.5, 14],
  "austronesian": [32, 0.5, 10],
  "ancient-japan": [32, 0.5, -4],
  "dutch-netherlands": [0, 0.5, -8],
  "ancient-india": [20, 0.5, 2],
  "hawaiian": [-38, 0.5, -2],
  "ethiopian": [12, 0.5, 4],
  "korean": [30, 0.5, -4],
  "great-zimbabwe": [10, 0.5, 12],
  "engaruka": [12, 0.5, 8],
  "sahel": [4, 0.5, 4],
  "nan-madol": [36, 0.5, 6],
  "chamorro": [34, 0.5, 4],
  "tokyo-underground": [34, 0.5, -4],
  "siam-thailand": [24, 0.5, 2],
  "medieval-india": [22, 0.5, 0],
  "cambodia-khmer": [26, 0.5, 4],
  "burma-myanmar": [22, 0.5, 2],
  "vietnam": [26, 0.5, 0],
  "pre-roman-europe": [-4, 0.5, -8],
  "philippines": [28, 0.5, 4],
  "singapore": [24, 0.5, 8],
  "malaysia": [24, 0.5, 6],
  "dubai-uae": [14, 0.5, 0],
  "israel": [10, 0.5, -2],
  "ottoman-empire": [8, 0.5, -6],
  "safavid-persia": [16, 0.5, -1],
  "ptolemaic-egypt": [8, 0.5, 0],
  "aksumite-empire": [12, 0.5, 5],
  "tiwanaku-empire": [-18, 0.5, 10],
  "chimu-empire": [-20, 0.5, 6],
  "wari-empire": [-19, 0.5, 8],
  "joseon-korea": [31, 0.5, -5],
  "polynesian-voyaging": [-40, 0.5, 8],
  "southern-african-kingdoms": [10, 0.5, 14],
  "garamantes": [6, 0.5, 2],
  "mapuche": [-20, 0.5, 16],
  "maori-new-zealand": [38, 0.5, 16],
  "tibetan-civilizations": [22, 0.5, -4],
  "georgian-kingdom": [14, 0.5, -6],
  "nuragic-sardinia": [2, 0.5, -4],
  "lapita-culture": [38, 0.5, 10],
  "toltec-empire": [-24, 0.5, 2],
  "khwarezmian-empire": [16, 0.5, -4],
  "liao-jin-yuan": [30, 0.5, -2],
  "urartu": [14, 0.5, -4],
  "dilmun": [14, 0.5, 1],
  "bactria": [18, 0.5, -2],
  "majapahit": [26, 0.5, 7],
  "kanem-bornu": [6, 0.5, 4],
  "benin-kingdom": [2, 0.5, 6],
  "moche-civilization": [-21, 0.5, 7],
  "yoruba-civilization": [2, 0.5, 5],
  "funan-kingdom": [25, 0.5, 5],
};

export default function WorldMap() {
  const waterRef = useRef<THREE.Mesh>(null);
  const { selectedRegion, setSelectedRegion } = useGameState();
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  useFrame((state) => {
    if (waterRef.current) {
      const material = waterRef.current.material as THREE.MeshStandardMaterial;
      material.opacity = 0.2 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
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
        <planeGeometry args={[120, 60]} />
        <meshStandardMaterial color="#0d2538" />
      </mesh>

      <mesh 
        ref={waterRef}
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -1.5, 0]}
      >
        <planeGeometry args={[120, 60]} />
        <meshStandardMaterial 
          color="#2e5c8a" 
          transparent 
          opacity={0.25}
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
