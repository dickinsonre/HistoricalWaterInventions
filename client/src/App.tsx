import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAudio } from "./lib/stores/useAudio";
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

function LoadingScreen() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[var(--deep-ocean)]">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[var(--aqua)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[var(--parchment)] font-heading">Loading 3D World...</p>
      </div>
    </div>
  );
}

function GameContent() {
  const { setBackgroundMusic, setHitSound, setSuccessSound } = useAudio();
  const { loadProgress } = useProgress();
  const [journeyMode, setJourneyMode] = useState<JourneyMode>("landing");
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectJourney = (journey: "3d-world" | "encyclopedia" | "timeline") => {
    if (journey === "3d-world") {
      setIsLoading(true);
      setTimeout(() => {
        setJourneyMode(journey);
        setIsLoading(false);
      }, 100);
    } else {
      setJourneyMode(journey);
    }
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

  if (isLoading) {
    return (
      <div className="w-screen h-screen bg-[var(--deep-ocean)] flex items-center justify-center">
        <LoadingScreen />
      </div>
    );
  }

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
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', background: '#1a3a52' }}>
      <Canvas
        shadows
        camera={{
          position: [0, 20, 35],
          fov: 50,
          near: 0.1,
          far: 200
        }}
        gl={{
          antialias: false,
          powerPreference: "default",
          preserveDrawingBuffer: true
        }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["#1a3a52"]} />
        <fog attach="fog" args={["#1a3a52", 40, 120]} />
        
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
