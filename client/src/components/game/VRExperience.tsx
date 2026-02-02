import { useState, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { XR, createXRStore, useXRInputSourceState } from "@react-three/xr";
import { OrbitControls, Text, Environment, useTexture, Float, Stars } from "@react-three/drei";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Glasses, Play, Pause, RotateCcw, Info, ChevronLeft, ChevronRight, Droplets, MapPin } from "lucide-react";
import { gameData } from "../../data/gameData";
import * as THREE from "three";

const xrStore = createXRStore();

interface WaterInvention {
  id: string;
  name: string;
  description: string;
  civilization: string;
  position: [number, number, number];
  color: string;
}

const featuredInventions: WaterInvention[] = [
  { id: "roman-aqueduct", name: "Roman Aqueduct", description: "Gravity-fed water channels spanning valleys", civilization: "Roman Empire", position: [-8, 2, -5], color: "#c17f4e" },
  { id: "qanat", name: "Persian Qanat", description: "Underground tunnels tapping mountain aquifers", civilization: "Ancient Persia", position: [-4, 1, -8], color: "#2e5c8a" },
  { id: "archimedes-screw", name: "Archimedes Screw", description: "Helical pump lifting water upward", civilization: "Ancient Greece", position: [0, 3, -6], color: "#c9a227" },
  { id: "stepwell", name: "Indian Stepwell", description: "Elaborate stepped wells reaching the water table", civilization: "Medieval India", position: [4, 1.5, -7], color: "#7bb3d9" },
  { id: "noria", name: "Noria Water Wheel", description: "River-powered lifting wheels", civilization: "Ancient Middle East", position: [8, 2.5, -5], color: "#4a90c2" },
  { id: "cloaca-maxima", name: "Cloaca Maxima", description: "Ancient Rome's great sewer system", civilization: "Roman Empire", position: [-6, 0.5, 0], color: "#6b5344" },
  { id: "baray", name: "Khmer Baray", description: "Massive water reservoirs of Angkor", civilization: "Khmer Empire", position: [6, 1, 0], color: "#1a3a52" },
  { id: "subak", name: "Subak Irrigation", description: "Balinese cooperative water temple system", civilization: "Bali, Indonesia", position: [0, 2, 2], color: "#2e8b57" },
];

function WaterParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 500;
  
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 1] = Math.random() * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] -= 0.02;
        if (positions[i * 3 + 1] < 0) {
          positions[i * 3 + 1] = 20;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#7bb3d9" transparent opacity={0.6} />
    </points>
  );
}

function InventionMarker({ invention, isSelected, onSelect }: { 
  invention: WaterInvention; 
  isSelected: boolean;
  onSelect: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = invention.position[1] + Math.sin(state.clock.elapsedTime + invention.position[0]) * 0.2;
    }
  });

  return (
    <group position={invention.position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh 
          ref={meshRef}
          onClick={onSelect}
          scale={isSelected ? 1.5 : 1}
        >
          <dodecahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial 
            color={invention.color} 
            emissive={invention.color}
            emissiveIntensity={isSelected ? 0.5 : 0.2}
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      </Float>
      
      <Text
        position={[0, 2, 0]}
        fontSize={0.4}
        color="#f5f0e1"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#1a3a52"
      >
        {invention.name}
      </Text>
      
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.2}
        color="#7bb3d9"
        anchorX="center"
        anchorY="middle"
      >
        {invention.civilization}
      </Text>
      
      {isSelected && (
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.18}
          color="#e8dcc8"
          anchorX="center"
          anchorY="middle"
          maxWidth={4}
          textAlign="center"
        >
          {invention.description}
        </Text>
      )}
      
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.8, 1.2, 32]} />
        <meshBasicMaterial color={invention.color} transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function WaterFloor() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      material.displacementScale = 0.1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[100, 100, 50, 50]} />
      <meshStandardMaterial 
        color="#1a3a52" 
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

function VRScene({ selectedInvention, onSelectInvention }: {
  selectedInvention: string | null;
  onSelectInvention: (id: string) => void;
}) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 20, 10]} intensity={1} castShadow />
      <pointLight position={[0, 10, 0]} intensity={0.5} color="#c9a227" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <WaterParticles />
      <WaterFloor />
      
      {featuredInventions.map((invention) => (
        <InventionMarker
          key={invention.id}
          invention={invention}
          isSelected={selectedInvention === invention.id}
          onSelect={() => onSelectInvention(invention.id)}
        />
      ))}
      
      <Text
        position={[0, 8, -10]}
        fontSize={1.2}
        color="#c9a227"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.04}
        outlineColor="#1a3a52"
      >
        Ancient Waters VR Experience
      </Text>
      
      <Text
        position={[0, 6.5, -10]}
        fontSize={0.5}
        color="#7bb3d9"
        anchorX="center"
        anchorY="middle"
      >
        Explore 40,000 Years of Water Engineering
      </Text>
      
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={50}
        target={[0, 2, 0]}
      />
    </>
  );
}

export default function VRExperience() {
  const [selectedInvention, setSelectedInvention] = useState<string | null>(null);
  const [isVRSupported, setIsVRSupported] = useState<boolean | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useState(() => {
    if (navigator.xr) {
      navigator.xr.isSessionSupported('immersive-vr').then(setIsVRSupported);
    } else {
      setIsVRSupported(false);
    }
  });

  const selectedData = selectedInvention 
    ? featuredInventions.find(i => i.id === selectedInvention) 
    : null;

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + featuredInventions.length) % featuredInventions.length;
    setCurrentIndex(newIndex);
    setSelectedInvention(featuredInventions[newIndex].id);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % featuredInventions.length;
    setCurrentIndex(newIndex);
    setSelectedInvention(featuredInventions[newIndex].id);
  };

  const enterVR = async () => {
    xrStore.enterVR();
  };

  return (
    <Card className="water-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[var(--cerulean)]/20 rounded-lg">
              <Glasses className="text-[var(--cerulean)]" size={24} />
            </div>
            <div>
              <h3 className="font-heading text-xl text-[var(--gold)]">Virtual Reality Experience</h3>
              <p className="text-sm text-[var(--parchment)]/70">
                Immersive 3D exploration of ancient water innovations
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {isVRSupported && (
              <Button
                onClick={enterVR}
                className="bg-[var(--cerulean)] hover:bg-[var(--cerulean)]/80 text-white"
              >
                <Glasses size={16} className="mr-2" />
                Enter VR
              </Button>
            )}
            {isVRSupported === false && (
              <span className="text-xs text-[var(--parchment)]/50 bg-[var(--deep-ocean)] px-3 py-1 rounded">
                VR not supported - 3D view available
              </span>
            )}
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden border border-[var(--aqua)]/30" style={{ height: '400px' }}>
          <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
            <XR store={xrStore}>
              <Suspense fallback={null}>
                <VRScene 
                  selectedInvention={selectedInvention}
                  onSelectInvention={setSelectedInvention}
                />
              </Suspense>
            </XR>
          </Canvas>
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePrev}
              className="bg-[var(--deep-ocean)]/80 text-[var(--parchment)] hover:bg-[var(--deep-ocean)]"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="bg-[var(--deep-ocean)]/80 px-4 py-2 rounded-lg text-center">
              <p className="text-[var(--gold)] font-heading text-sm">
                {selectedData?.name || "Click an invention to explore"}
              </p>
              {selectedData && (
                <p className="text-[var(--parchment)]/70 text-xs">
                  {selectedData.civilization}
                </p>
              )}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleNext}
              className="bg-[var(--deep-ocean)]/80 text-[var(--parchment)] hover:bg-[var(--deep-ocean)]"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        <div className="mt-4 p-3 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/20">
          <div className="flex items-start gap-2">
            <Info size={16} className="text-[var(--aqua)] mt-0.5 flex-shrink-0" />
            <div className="text-sm text-[var(--parchment)]/80">
              <p className="mb-1"><strong>Controls:</strong> Click and drag to rotate view • Scroll to zoom • Click inventions to select</p>
              <p><strong>VR Mode:</strong> {isVRSupported ? "Put on your VR headset and click 'Enter VR' for immersive exploration" : "VR headset not detected - enjoy 3D preview mode"}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2">
          {featuredInventions.slice(0, 8).map((invention, idx) => (
            <Button
              key={invention.id}
              variant={selectedInvention === invention.id ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setSelectedInvention(invention.id);
                setCurrentIndex(idx);
              }}
              className={selectedInvention === invention.id 
                ? "bg-[var(--cerulean)] text-white text-xs" 
                : "border-[var(--cerulean)]/50 text-[var(--parchment)] text-xs hover:bg-[var(--cerulean)]/20"
              }
            >
              {invention.name.length > 12 ? invention.name.slice(0, 12) + "..." : invention.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
