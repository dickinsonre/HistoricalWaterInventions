import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAudio } from "./lib/stores/useAudio";
import { useGameState } from "./lib/stores/useGameState";
import { useProgress } from "./lib/stores/useProgress";
import WorldMap from "./components/game/WorldMap";
import GameUI from "./components/game/GameUI";
import Lights from "./components/game/Lights";
import Camera from "./components/game/Camera";
import "@fontsource/inter";
import "./index.css";

const queryClient = new QueryClient();

function GameContent() {
  const { setBackgroundMusic, setHitSound, setSuccessSound } = useAudio();
  const { phase } = useGameState();
  const { loadProgress } = useProgress();

  useEffect(() => {
    // Initialize audio
    const bgMusic = new Audio("/sounds/background.mp3");
    const hitSound = new Audio("/sounds/hit.mp3");
    const successSound = new Audio("/sounds/success.mp3");
    
    bgMusic.loop = true;
    bgMusic.volume = 0.3;
    
    setBackgroundMusic(bgMusic);
    setHitSound(hitSound);
    setSuccessSound(successSound);

    // Load saved progress
    loadProgress();
  }, [setBackgroundMusic, setHitSound, setSuccessSound, loadProgress]);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Canvas
        shadows
        camera={{
          position: [0, 20, 20],
          fov: 45,
          near: 0.1,
          far: 1000
        }}
        gl={{
          antialias: true,
          powerPreference: "default"
        }}
      >
        <color attach="background" args={["#87CEEB"]} />
        
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
