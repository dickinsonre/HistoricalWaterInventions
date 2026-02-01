import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAudio } from "./lib/stores/useAudio";
import { useGameState } from "./lib/stores/useGameState";
import { useProgress } from "./lib/stores/useProgress";
import WorldMap from "./components/game/WorldMap";
import GameUI from "./components/game/GameUI";
import Lights from "./components/game/Lights";
import Camera from "./components/game/Camera";
import LandingPage from "./components/game/LandingPage";
import MuseumMode from "./components/game/MuseumMode";
import TimelineFilter from "./components/game/TimelineFilter";
import "@fontsource/inter";
import "./index.css";

const queryClient = new QueryClient();

type JourneyMode = "landing" | "3d-world" | "encyclopedia" | "timeline";

function GameContent() {
  const { setBackgroundMusic, setHitSound, setSuccessSound } = useAudio();
  const { phase } = useGameState();
  const { loadProgress } = useProgress();
  const [journeyMode, setJourneyMode] = useState<JourneyMode>("landing");

  const handleSelectJourney = (journey: "3d-world" | "encyclopedia" | "timeline") => {
    setJourneyMode(journey);
  };

  const handleBackToLanding = () => {
    setJourneyMode("landing");
  };

  useEffect(() => {
    const bgMusic = new Audio("/sounds/background.mp3");
    const hitSound = new Audio("/sounds/hit.mp3");
    const successSound = new Audio("/sounds/success.mp3");
    
    bgMusic.loop = true;
    bgMusic.volume = 0.3;
    
    setBackgroundMusic(bgMusic);
    setHitSound(hitSound);
    setSuccessSound(successSound);

    loadProgress();
  }, [setBackgroundMusic, setHitSound, setSuccessSound, loadProgress]);

  if (journeyMode === "landing") {
    return <LandingPage onSelectJourney={handleSelectJourney} />;
  }

  if (journeyMode === "encyclopedia") {
    return (
      <div className="min-h-screen bg-[var(--deep-ocean)]">
        <MuseumMode onClose={handleBackToLanding} />
      </div>
    );
  }

  if (journeyMode === "timeline") {
    return (
      <div className="min-h-screen bg-[var(--deep-ocean)] flex items-center justify-center">
        <TimelineFilter onClose={handleBackToLanding} />
      </div>
    );
  }

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Canvas
        shadows
        camera={{
          position: [0, 25, 30],
          fov: 45,
          near: 0.1,
          far: 1000
        }}
        gl={{
          antialias: true,
          powerPreference: "default"
        }}
      >
        <color attach="background" args={["#1a3a52"]} />
        <fog attach="fog" args={["#1a3a52", 30, 100]} />
        
        <Lights />
        <Camera />
        
        <Suspense fallback={null}>
          <WorldMap />
        </Suspense>
      </Canvas>
      
      <GameUI onBackToLanding={handleBackToLanding} />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GameContent />
    </QueryClientProvider>
  );
}

export default App;
