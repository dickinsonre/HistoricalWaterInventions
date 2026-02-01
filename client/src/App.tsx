import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAudio } from "./lib/stores/useAudio";
import { useProgress } from "./lib/stores/useProgress";
import Onboarding from "./components/game/Onboarding";
import LandingPage from "./components/game/LandingPage";
import WorldMapView from "./components/game/WorldMapView";
import MuseumMode from "./components/game/MuseumMode";
import TimelineFilter from "./components/game/TimelineFilter";
import MiniGames from "./components/game/MiniGames";
import "@fontsource/inter";
import "./index.css";

const queryClient = new QueryClient();

type JourneyMode = "onboarding" | "landing" | "3d-world" | "encyclopedia" | "timeline" | "minigames";

function GameContent() {
  const { setBackgroundMusic, setHitSound, setSuccessSound } = useAudio();
  const { loadProgress } = useProgress();
  const [journeyMode, setJourneyMode] = useState<JourneyMode>("3d-world");

  const handleSelectJourney = (journey: "3d-world" | "encyclopedia" | "timeline" | "minigames") => {
    setJourneyMode(journey);
  };

  const handleBackToLanding = () => {
    setJourneyMode("landing");
  };

  const handleOnboardingComplete = () => {
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

  if (journeyMode === "onboarding") {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  if (journeyMode === "landing") {
    return <LandingPage onSelectJourney={handleSelectJourney} />;
  }

  if (journeyMode === "3d-world") {
    return <WorldMapView onBack={handleBackToLanding} />;
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

  if (journeyMode === "minigames") {
    return <MiniGames onBack={handleBackToLanding} />;
  }

  return <LandingPage onSelectJourney={handleSelectJourney} />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GameContent />
    </QueryClientProvider>
  );
}

export default App;
