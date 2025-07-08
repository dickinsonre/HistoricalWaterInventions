import { useState } from "react";
import { useGameState } from "../../lib/stores/useGameState";
import { useProgress } from "../../lib/stores/useProgress";
import { useAudio } from "../../lib/stores/useAudio";
import Inventory from "./Inventory";
import ProgressTracker from "./ProgressTracker";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Volume2, VolumeX, Package, Trophy, BookOpen } from "lucide-react";

export default function GameUI() {
  const { selectedRegion, selectedLocation, phase } = useGameState();
  const { progress } = useProgress();
  const { isMuted, toggleMute } = useAudio();
  const [showInventory, setShowInventory] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const totalArtifacts = progress.discoveredArtifacts.length;
  const totalLocations = progress.exploredLocations.length;
  const totalRegions = progress.unlockedRegions.length;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top HUD */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-auto">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMute}
            className="bg-black/50 border-white/20 text-white hover:bg-black/70"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowInventory(!showInventory)}
            className="bg-black/50 border-white/20 text-white hover:bg-black/70"
          >
            <Package size={16} />
            <span className="ml-1">{totalArtifacts}</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowProgress(!showProgress)}
            className="bg-black/50 border-white/20 text-white hover:bg-black/70"
          >
            <Trophy size={16} />
            <span className="ml-1">{totalLocations}</span>
          </Button>
        </div>

        <div className="flex gap-2">
          <Badge variant="secondary" className="bg-black/50 text-white">
            Regions: {totalRegions}
          </Badge>
          <Badge variant="secondary" className="bg-black/50 text-white">
            Locations: {totalLocations}
          </Badge>
          <Badge variant="secondary" className="bg-black/50 text-white">
            Artifacts: {totalArtifacts}
          </Badge>
        </div>
      </div>

      {/* Game Instructions */}
      <div className="absolute bottom-4 left-4 pointer-events-auto">
        <Card className="bg-black/70 border-white/20">
          <CardContent className="p-4">
            <p className="text-white text-sm">
              🏛️ Click on regions to explore historical locations<br/>
              ✨ Discover magical artifacts hidden throughout the world<br/>
              📚 Learn about ancient civilizations and their mysteries
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Info Panel */}
      {showInfo && (
        <div className="absolute bottom-4 right-4 pointer-events-auto">
          <Card className="bg-black/70 border-white/20 max-w-md">
            <CardHeader>
              <CardTitle className="text-white">Game Guide</CardTitle>
            </CardHeader>
            <CardContent className="text-white text-sm">
              <p className="mb-2">
                Welcome to the Enchanted History Explorer! Journey through time and discover the magical secrets of ancient civilizations.
              </p>
              <p className="mb-2">
                • Click on glowing regions to unlock new areas
              </p>
              <p className="mb-2">
                • Explore locations to find hidden artifacts
              </p>
              <p>
                • Collect artifacts to learn about historical periods
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Inventory Modal */}
      {showInventory && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-auto">
          <Inventory onClose={() => setShowInventory(false)} />
        </div>
      )}

      {/* Progress Modal */}
      {showProgress && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-auto">
          <ProgressTracker onClose={() => setShowProgress(false)} />
        </div>
      )}

      {/* Help button */}
      <div className="absolute bottom-4 right-4 pointer-events-auto">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowInfo(!showInfo)}
          className="bg-black/50 border-white/20 text-white hover:bg-black/70"
        >
          <BookOpen size={16} />
        </Button>
      </div>
    </div>
  );
}
