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
import Onboarding from "./components/game/Onboarding";
import "@fontsource/inter";
import "./index.css";

const queryClient = new QueryClient();

function GameContent() {
  const { setBackgroundMusic, setHitSound, setSuccessSound } = useAudio();
  const { phase } = useGameState();
  const { loadProgress } = useProgress();
  const [showOnboarding, setShowOnboarding] = useState(() => {
    const hasSeenOnboarding = localStorage.getItem("historical-mystery-onboarding");
    return !hasSeenOnboarding;
  });

  const handleOnboardingComplete = () => {
    localStorage.setItem("historical-mystery-onboarding", "true");
    setShowOnboarding(false);
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

  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
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
      
      <GameUI />
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