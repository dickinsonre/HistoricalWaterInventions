import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAudio } from "./lib/stores/useAudio";
import { useProgress } from "./lib/stores/useProgress";
import WorldMapView from "./components/game/WorldMapView";
import CivilizationPage from "./components/game/CivilizationPage";
import InventionPage from "./components/game/InventionPage";
import MiniGames from "./components/game/MiniGames";
import "@fontsource/inter";
import "./index.css";

const queryClient = new QueryClient();

function GameContent() {
  const { setBackgroundMusic, setHitSound, setSuccessSound } = useAudio();
  const { loadProgress } = useProgress();

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

  return (
    <Routes>
      <Route path="/" element={<WorldMapView onBack={() => {}} />} />
      <Route path="/minigames" element={<MiniGames onBack={() => window.location.href = '/'} />} />
      <Route path="/:civilizationId" element={<CivilizationPage />} />
      <Route path="/:civilizationId/:inventionId" element={<InventionPage />} />
      <Route path="/:civilizationId/:inventionId/details" element={<InventionPage />} />
      <Route path="/:civilizationId/:inventionId/details/diagram" element={<InventionPage showDiagram />} />
    </Routes>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GameContent />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
