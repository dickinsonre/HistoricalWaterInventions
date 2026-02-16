import { useState, useEffect, useRef, useMemo, useCallback, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text, Stars, Float } from "@react-three/drei";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Glasses, Play, Pause, RotateCcw, Info, ChevronLeft, ChevronRight, MapPin, Navigation, Eye, Layers, Volume2, VolumeX } from "lucide-react";
import { gameData } from "../../data/gameData";
import * as THREE from "three";

interface MuseumExhibit {
  id: string;
  name: string;
  description: string;
  civilization: string;
  era: string;
  yearBCE?: number;
  category: string;
  rarity: string;
  significance: string;
  position: [number, number, number];
  color: string;
  hallIndex: number;
}

interface TourStop {
  name: string;
  description: string;
  position: [number, number, number];
  lookAt: [number, number, number];
  duration: number;
}

const eraColors: Record<string, string> = {
  ancient: "#DAA520",
  classical: "#c17f4e",
  medieval: "#2e5c8a",
  modern: "#4a90c2",
};

const eraLabels: Record<string, string> = {
  ancient: "Ancient Period (6000-500 BCE)",
  classical: "Classical Period (500 BCE-500 CE)",
  medieval: "Medieval Period (500-1400 CE)",
  modern: "Modern Era (1400 CE-Present)",
};

const categoryIcons: Record<string, string> = {
  irrigation: "💧",
  aqueduct: "🏛️",
  "water-lifting": "⬆️",
  sanitation: "🚿",
  dam: "🏗️",
  "water-clock": "⏰",
  fountain: "⛲",
  canal: "🌊",
};

function buildExhibits(): MuseumExhibit[] {
  const exhibits: MuseumExhibit[] = [];
  const hallMap: Record<string, number> = { ancient: 0, classical: 1, medieval: 2, modern: 3 };
  const hallCounts: Record<string, number> = { ancient: 0, classical: 0, medieval: 0, modern: 0 };

  for (const region of gameData.regions) {
    for (const location of region.locations) {
      for (const artifact of location.artifacts) {
        const era = region.era || "ancient";
        const hallIdx = hallMap[era] ?? 0;
        const idx = hallCounts[era];
        hallCounts[era]++;

        const hallZ = hallIdx * -30;
        const col = idx % 6;
        const row = Math.floor(idx / 6);
        const x = (col - 2.5) * 6;
        const z = hallZ - 5 - row * 6;

        exhibits.push({
          id: artifact.id,
          name: artifact.name,
          description: artifact.description,
          civilization: region.name,
          era,
          yearBCE: artifact.yearBCE,
          category: artifact.category,
          rarity: artifact.rarity,
          significance: artifact.significance,
          position: [x, 1.5, z],
          color: eraColors[era] || "#4a90c2",
          hallIndex: hallIdx,
        });
      }
    }
  }

  return exhibits;
}

const tourStops: TourStop[] = [
  { name: "Museum Entrance", description: "Welcome to the Ancient Waters Virtual Museum. Explore 40,000 years of water engineering across four grand halls.", position: [0, 4, 12], lookAt: [0, 3, -5], duration: 6000 },
  { name: "Ancient Hall", description: "The Ancient Period (6000-500 BCE): Where humanity first learned to control water. Discover shaduf devices, qanats, and the earliest irrigation systems.", position: [0, 4, -5], lookAt: [0, 2, -15], duration: 7000 },
  { name: "Classical Gallery", description: "The Classical Period (500 BCE-500 CE): Roman aqueducts, Greek hydraulics, and the engineering marvels that built empires.", position: [0, 4, -35], lookAt: [0, 2, -45], duration: 7000 },
  { name: "Medieval Wing", description: "The Medieval Period (500-1400 CE): Islamic water gardens, Khmer barays, and innovations that sustained civilizations.", position: [0, 4, -65], lookAt: [0, 2, -75], duration: 7000 },
  { name: "Modern Pavilion", description: "The Modern Era (1400 CE-Present): From Renaissance fountains to industrial water systems that shaped our world.", position: [0, 4, -95], lookAt: [0, 2, -105], duration: 7000 },
  { name: "Grand Overview", description: "You've explored the full museum! Each invention represents humanity's enduring quest to harness water.", position: [0, 12, -50], lookAt: [0, 2, -50], duration: 6000 },
];

function WaterParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 800;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = Math.random() * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 150;
    }
    return pos;
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      const arr = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        arr[i * 3 + 1] -= 0.015;
        if (arr[i * 3 + 1] < 0) arr[i * 3 + 1] = 25;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#7bb3d9" transparent opacity={0.5} />
    </points>
  );
}

function Column({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.6, 0.3, 16]} />
        <meshStandardMaterial color="#8a7d6b" metalness={0.2} roughness={0.7} />
      </mesh>
      <mesh position={[0, 4, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 7.5, 12]} />
        <meshStandardMaterial color="#a09080" metalness={0.1} roughness={0.6} />
      </mesh>
      <mesh position={[0, 8, 0]}>
        <boxGeometry args={[1.2, 0.4, 1.2]} />
        <meshStandardMaterial color="#8a7d6b" metalness={0.2} roughness={0.7} />
      </mesh>
    </group>
  );
}

function HallArch({ position, label, color }: { position: [number, number, number]; label: string; color: string }) {
  return (
    <group position={position}>
      <Column position={[-10, 0, 0]} />
      <Column position={[10, 0, 0]} />
      <mesh position={[0, 8.5, 0]}>
        <boxGeometry args={[22, 0.8, 2]} />
        <meshStandardMaterial color="#6b5d4f" metalness={0.3} roughness={0.5} />
      </mesh>
      <Text position={[0, 9.5, 1.1]} fontSize={0.8} color={color} anchorX="center" anchorY="middle" outlineWidth={0.03} outlineColor="#1a1a1a">
        {label}
      </Text>
      <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 0.3]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function WaterChannel({ startZ, endZ }: { startZ: number; endZ: number }) {
  const len = Math.abs(endZ - startZ);
  const midZ = (startZ + endZ) / 2;
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.15 + Math.sin(state.clock.elapsedTime * 2) * 0.08;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -1.85, midZ]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[1.5, len]} />
      <meshStandardMaterial color="#1a4a6b" emissive="#2a6a9b" emissiveIntensity={0.2} transparent opacity={0.8} metalness={0.9} roughness={0.1} />
    </mesh>
  );
}

function ExhibitPedestal({ exhibit, isSelected, onSelect }: {
  exhibit: MuseumExhibit;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  const rarityScale = exhibit.rarity === "legendary" ? 1.3 : exhibit.rarity === "epic" ? 1.15 : exhibit.rarity === "rare" ? 1.05 : 0.95;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.008;
      meshRef.current.position.y = exhibit.position[1] + 0.8 + Math.sin(state.clock.elapsedTime * 1.5 + exhibit.position[0]) * 0.1;
    }
    if (glowRef.current) {
      const s = isSelected ? 1.8 : 1.2;
      glowRef.current.scale.setScalar(s + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  const rarityColor = exhibit.rarity === "legendary" ? "#FFD700" : exhibit.rarity === "epic" ? "#9B59B6" : exhibit.rarity === "rare" ? "#3498DB" : "#95A5A6";

  return (
    <group position={exhibit.position}>
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.8, 0.9, 1.6, 8]} />
        <meshStandardMaterial color="#3a3028" metalness={0.4} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.9, 0.8, 0.15, 8]} />
        <meshStandardMaterial color={rarityColor} metalness={0.6} roughness={0.3} emissive={rarityColor} emissiveIntensity={0.3} />
      </mesh>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh ref={meshRef} onClick={onSelect} scale={rarityScale}>
          {exhibit.category === "aqueduct" ? (
            <torusGeometry args={[0.5, 0.15, 12, 24]} />
          ) : exhibit.category === "dam" ? (
            <boxGeometry args={[0.8, 0.6, 0.4]} />
          ) : exhibit.category === "water-lifting" ? (
            <coneGeometry args={[0.4, 0.9, 8]} />
          ) : exhibit.category === "sanitation" ? (
            <cylinderGeometry args={[0.4, 0.4, 0.7, 12]} />
          ) : exhibit.category === "water-clock" ? (
            <octahedronGeometry args={[0.5, 0]} />
          ) : exhibit.category === "fountain" ? (
            <sphereGeometry args={[0.45, 16, 16]} />
          ) : exhibit.category === "canal" ? (
            <capsuleGeometry args={[0.25, 0.6, 8, 16]} />
          ) : (
            <dodecahedronGeometry args={[0.5, 0]} />
          )}
          <meshStandardMaterial
            color={exhibit.color}
            emissive={exhibit.color}
            emissiveIntensity={isSelected ? 0.6 : 0.2}
            metalness={0.4}
            roughness={0.3}
          />
        </mesh>
      </Float>

      <mesh ref={glowRef} position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.6, 8, 8]} />
        <meshBasicMaterial color={exhibit.color} transparent opacity={0.08} />
      </mesh>

      <Text position={[0, 3, 0]} fontSize={0.28} color="#f5f0e1" anchorX="center" anchorY="middle" outlineWidth={0.015} outlineColor="#1a1a1a" maxWidth={4} textAlign="center">
        {exhibit.name}
      </Text>
      <Text position={[0, 2.5, 0]} fontSize={0.18} color={rarityColor} anchorX="center" anchorY="middle">
        {exhibit.rarity.toUpperCase()} • {categoryIcons[exhibit.category] || "💧"} {exhibit.category}
      </Text>
      <Text position={[0, 2.1, 0]} fontSize={0.16} color="#7bb3d9" anchorX="center" anchorY="middle">
        {exhibit.civilization}
      </Text>

      {isSelected && (
        <group position={[0, -1.5, 2]}>
          <mesh position={[0, 1.5, 0]}>
            <planeGeometry args={[5, 3.5]} />
            <meshStandardMaterial color="#0a1a2a" transparent opacity={0.92} side={THREE.DoubleSide} />
          </mesh>
          <mesh position={[0, 1.5, -0.01]}>
            <planeGeometry args={[5.1, 3.6]} />
            <meshBasicMaterial color={rarityColor} transparent opacity={0.3} side={THREE.DoubleSide} />
          </mesh>
          <Text position={[0, 2.8, 0.01]} fontSize={0.22} color="#FFD700" anchorX="center" anchorY="middle" maxWidth={4.5} textAlign="center" fontWeight="bold">
            {exhibit.name}
          </Text>
          <Text position={[0, 2.3, 0.01]} fontSize={0.14} color="#7bb3d9" anchorX="center" anchorY="middle">
            {exhibit.civilization} • {exhibit.yearBCE ? `${exhibit.yearBCE} BCE` : exhibit.era}
          </Text>
          <Text position={[0, 1.5, 0.01]} fontSize={0.13} color="#e8dcc8" anchorX="center" anchorY="middle" maxWidth={4.5} textAlign="center">
            {exhibit.description.length > 200 ? exhibit.description.slice(0, 200) + "..." : exhibit.description}
          </Text>
          <Text position={[0, 0.4, 0.01]} fontSize={0.12} color="#c9a227" anchorX="center" anchorY="middle" maxWidth={4.5} textAlign="center">
            Significance: {exhibit.significance.length > 100 ? exhibit.significance.slice(0, 100) + "..." : exhibit.significance}
          </Text>
        </group>
      )}
    </group>
  );
}

function MuseumFloor() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, -60]}>
        <planeGeometry args={[40, 160]} />
        <meshStandardMaterial color="#1a1510" metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.99, -60]}>
        <planeGeometry args={[38, 158]} />
        <meshStandardMaterial color="#2a2018" metalness={0.4} roughness={0.6} />
      </mesh>
    </group>
  );
}

function MuseumWalls() {
  const wallColor = "#1a150f";
  return (
    <group>
      <mesh position={[-20, 4, -60]}>
        <boxGeometry args={[0.5, 12, 160]} />
        <meshStandardMaterial color={wallColor} metalness={0.2} roughness={0.8} />
      </mesh>
      <mesh position={[20, 4, -60]}>
        <boxGeometry args={[0.5, 12, 160]} />
        <meshStandardMaterial color={wallColor} metalness={0.2} roughness={0.8} />
      </mesh>
      <mesh position={[0, 4, -140]}>
        <boxGeometry args={[40, 12, 0.5]} />
        <meshStandardMaterial color={wallColor} metalness={0.2} roughness={0.8} />
      </mesh>
      <mesh position={[0, 10, -60]}>
        <boxGeometry args={[40, 0.5, 160]} />
        <meshStandardMaterial color="#0f0d0a" metalness={0.3} roughness={0.6} />
      </mesh>
    </group>
  );
}

function TorchLight({ position }: { position: [number, number, number] }) {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.intensity = 0.6 + Math.sin(state.clock.elapsedTime * 3 + position[0]) * 0.15;
    }
  });

  return (
    <group position={position}>
      <pointLight ref={lightRef} color="#ff9933" intensity={0.6} distance={15} decay={2} />
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 0.5, 8]} />
        <meshStandardMaterial color="#4a3828" />
      </mesh>
      <mesh position={[0, 0.1, 0]}>
        <sphereGeometry args={[0.12, 8, 8]} />
        <meshBasicMaterial color="#ff9933" />
      </mesh>
    </group>
  );
}

function CameraController({ target, isAnimating }: {
  target: { position: [number, number, number]; lookAt: [number, number, number] } | null;
  isAnimating: boolean;
}) {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 4, 12));
  const targetLook = useRef(new THREE.Vector3(0, 2, -5));

  useEffect(() => {
    if (target) {
      targetPos.current.set(...target.position);
      targetLook.current.set(...target.lookAt);
    }
  }, [target]);

  useFrame(() => {
    if (isAnimating && target) {
      camera.position.lerp(targetPos.current, 0.02);
      const currentLook = new THREE.Vector3();
      camera.getWorldDirection(currentLook);
      const desiredLook = targetLook.current.clone().sub(camera.position).normalize();
      currentLook.lerp(desiredLook, 0.02);
      camera.lookAt(camera.position.clone().add(currentLook.multiplyScalar(10)));
    }
  });

  return null;
}

function VRScene({ exhibits, selectedExhibit, onSelectExhibit, tourTarget, isTourActive }: {
  exhibits: MuseumExhibit[];
  selectedExhibit: string | null;
  onSelectExhibit: (id: string) => void;
  tourTarget: TourStop | null;
  isTourActive: boolean;
}) {
  const eras = ["ancient", "classical", "medieval", "modern"];

  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight position={[0, 15, 10]} intensity={0.6} />
      <directionalLight position={[0, 15, -100]} intensity={0.4} />

      <Stars radius={200} depth={100} count={3000} factor={3} saturation={0} fade speed={0.5} />

      <WaterParticles />
      <MuseumFloor />
      <MuseumWalls />

      <WaterChannel startZ={5} endZ={-140} />

      {eras.map((era, i) => (
        <HallArch
          key={era}
          position={[0, -2, i * -30 + 2]}
          label={eraLabels[era]}
          color={eraColors[era]}
        />
      ))}

      {[-19, 19].map((x) =>
        Array.from({ length: 10 }, (_, i) => (
          <TorchLight key={`${x}-${i}`} position={[x, 6, -i * 14]} />
        ))
      )}

      {eras.map((era, i) => {
        const hallZ = i * -30;
        return [-16, -8, 8, 16].map((x) => (
          <Column key={`col-${era}-${x}`} position={[x, -2, hallZ - 2]} />
        ));
      })}

      {exhibits.map((exhibit) => (
        <ExhibitPedestal
          key={exhibit.id}
          exhibit={exhibit}
          isSelected={selectedExhibit === exhibit.id}
          onSelect={() => onSelectExhibit(exhibit.id)}
        />
      ))}

      <Text position={[0, 7, 5]} fontSize={1.2} color="#c9a227" anchorX="center" anchorY="middle" outlineWidth={0.04} outlineColor="#1a1a1a">
        Ancient Waters Museum
      </Text>
      <Text position={[0, 5.5, 5]} fontSize={0.45} color="#7bb3d9" anchorX="center" anchorY="middle">
        40,000 Years of Water Engineering
      </Text>

      <CameraController
        target={tourTarget ? { position: tourTarget.position, lookAt: tourTarget.lookAt } : null}
        isAnimating={isTourActive}
      />

      {!isTourActive && (
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} minDistance={3} maxDistance={80} target={[0, 2, -20]} />
      )}
    </>
  );
}

export default function VRExperience() {
  const [selectedExhibit, setSelectedExhibit] = useState<string | null>(null);
  const [currentHall, setCurrentHall] = useState(0);
  const [isTourActive, setIsTourActive] = useState(false);
  const [tourStopIndex, setTourStopIndex] = useState(0);
  const [showMinimap, setShowMinimap] = useState(true);
  const tourTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const exhibits = useMemo(() => buildExhibits(), []);
  const hallNames = ["Ancient", "Classical", "Medieval", "Modern"];
  const filteredExhibits = useMemo(
    () => exhibits.filter((e) => e.hallIndex === currentHall),
    [exhibits, currentHall]
  );

  const selectedData = useMemo(
    () => (selectedExhibit ? exhibits.find((e) => e.id === selectedExhibit) : null),
    [selectedExhibit, exhibits]
  );

  const startTour = useCallback(() => {
    setIsTourActive(true);
    setTourStopIndex(0);
    setSelectedExhibit(null);
  }, []);

  const stopTour = useCallback(() => {
    setIsTourActive(false);
    if (tourTimerRef.current) clearTimeout(tourTimerRef.current);
  }, []);

  useEffect(() => {
    if (isTourActive) {
      tourTimerRef.current = setTimeout(() => {
        if (tourStopIndex < tourStops.length - 1) {
          setTourStopIndex((i) => i + 1);
        } else {
          setIsTourActive(false);
        }
      }, tourStops[tourStopIndex].duration);
    }
    return () => {
      if (tourTimerRef.current) clearTimeout(tourTimerRef.current);
    };
  }, [isTourActive, tourStopIndex]);

  const tourTarget = isTourActive ? tourStops[tourStopIndex] : null;

  return (
    <Card className="water-card">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[var(--cerulean)]/20 rounded-lg">
              <Glasses className="text-[var(--cerulean)]" size={24} />
            </div>
            <div>
              <h3 className="font-heading text-xl text-[var(--gold)]">Virtual Museum Experience</h3>
              <p className="text-sm text-[var(--parchment)]/70">
                {exhibits.length} exhibits across 4 halls • Click inventions to explore
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!isTourActive ? (
              <Button onClick={startTour} size="sm" className="bg-[var(--gold)] hover:bg-[var(--gold)]/80 text-[var(--deep-ocean)]">
                <Navigation size={14} className="mr-1" />
                Guided Tour
              </Button>
            ) : (
              <Button onClick={stopTour} size="sm" variant="outline" className="border-[var(--terracotta)] text-[var(--terracotta)]">
                <Pause size={14} className="mr-1" />
                Exit Tour
              </Button>
            )}
          </div>
        </div>

        <div className="flex gap-1 mb-3">
          {hallNames.map((name, i) => (
            <Button
              key={name}
              size="sm"
              variant={currentHall === i ? "default" : "outline"}
              onClick={() => { setCurrentHall(i); setSelectedExhibit(null); }}
              className={currentHall === i
                ? "flex-1 text-xs"
                : "flex-1 text-xs border-[var(--cerulean)]/30 text-[var(--parchment)]/70 hover:bg-[var(--cerulean)]/20"
              }
              style={currentHall === i ? { backgroundColor: Object.values(eraColors)[i] } : {}}
            >
              <Layers size={12} className="mr-1" />
              {name} ({exhibits.filter(e => e.hallIndex === i).length})
            </Button>
          ))}
        </div>

        {isTourActive && tourTarget && (
          <div className="mb-3 p-3 bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Navigation size={14} className="text-[var(--gold)]" />
              <span className="text-[var(--gold)] font-heading text-sm">
                Tour Stop {tourStopIndex + 1}/{tourStops.length}: {tourTarget.name}
              </span>
            </div>
            <p className="text-xs text-[var(--parchment)]/80">{tourTarget.description}</p>
            <div className="flex gap-1 mt-2">
              {tourStops.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded ${i <= tourStopIndex ? "bg-[var(--gold)]" : "bg-[var(--parchment)]/20"}`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="relative rounded-lg overflow-hidden border border-[var(--aqua)]/30" style={{ height: "450px" }}>
          <Canvas camera={{ position: [0, 4, 12], fov: 65 }}>
            <Suspense fallback={null}>
              <VRScene
                exhibits={exhibits}
                selectedExhibit={selectedExhibit}
                onSelectExhibit={setSelectedExhibit}
                tourTarget={tourTarget}
                isTourActive={isTourActive}
              />
            </Suspense>
          </Canvas>

          {showMinimap && (
            <div className="absolute top-2 right-2 bg-[var(--deep-ocean)]/90 rounded-lg p-2 border border-[var(--aqua)]/30" style={{ width: 120 }}>
              <p className="text-[8px] text-[var(--parchment)]/60 mb-1 text-center">Museum Layout</p>
              <div className="space-y-1">
                {hallNames.map((name, i) => (
                  <div
                    key={name}
                    className={`text-[8px] px-1 py-0.5 rounded cursor-pointer text-center ${currentHall === i ? "text-white" : "text-[var(--parchment)]/50 bg-[var(--parchment)]/5"}`}
                    style={currentHall === i ? { backgroundColor: Object.values(eraColors)[i] + "80" } : {}}
                    onClick={() => setCurrentHall(i)}
                  >
                    {name} Hall
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="absolute top-2 left-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowMinimap(!showMinimap)}
              className="bg-[var(--deep-ocean)]/80 text-[var(--parchment)] text-xs h-7 px-2"
            >
              <Eye size={12} className="mr-1" />
              Map
            </Button>
          </div>
        </div>

        {selectedData && (
          <div className="mt-3 p-3 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/20">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 p-2 rounded-lg" style={{ backgroundColor: selectedData.color + "30" }}>
                <span className="text-xl">{categoryIcons[selectedData.category] || "💧"}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-heading text-lg text-[var(--gold)]">{selectedData.name}</h4>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${selectedData.rarity === "legendary" ? "bg-yellow-500/20 text-yellow-400" : selectedData.rarity === "epic" ? "bg-purple-500/20 text-purple-400" : selectedData.rarity === "rare" ? "bg-blue-500/20 text-blue-400" : "bg-gray-500/20 text-gray-400"}`}>
                    {selectedData.rarity.toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-[var(--aqua)] mb-1">
                  {selectedData.civilization} • {selectedData.yearBCE ? `${selectedData.yearBCE} BCE` : selectedData.era} • {selectedData.category}
                </p>
                <p className="text-sm text-[var(--parchment)]/80 mb-2">
                  {selectedData.description.length > 300 ? selectedData.description.slice(0, 300) + "..." : selectedData.description}
                </p>
                <p className="text-xs text-[var(--gold)]/80 italic">
                  {selectedData.significance}
                </p>
              </div>
            </div>
          </div>
        )}

        {!selectedData && !isTourActive && (
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-1.5 max-h-32 overflow-y-auto">
            {filteredExhibits.slice(0, 16).map((exhibit) => (
              <Button
                key={exhibit.id}
                variant="outline"
                size="sm"
                onClick={() => setSelectedExhibit(exhibit.id)}
                className="border-[var(--cerulean)]/30 text-[var(--parchment)] text-[10px] hover:bg-[var(--cerulean)]/20 h-auto py-1 px-2 justify-start"
              >
                <span className="mr-1">{categoryIcons[exhibit.category] || "💧"}</span>
                <span className="truncate">{exhibit.name}</span>
              </Button>
            ))}
          </div>
        )}

        <div className="mt-3 p-2 bg-[var(--deep-ocean)]/40 rounded-lg border border-[var(--aqua)]/10">
          <div className="flex items-start gap-2">
            <Info size={14} className="text-[var(--aqua)] mt-0.5 flex-shrink-0" />
            <div className="text-xs text-[var(--parchment)]/70">
              <p><strong>Controls:</strong> Click & drag to rotate • Scroll to zoom • Click exhibits to inspect</p>
              <p><strong>Guided Tour:</strong> Click the tour button for an automated walkthrough of all 4 halls</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
