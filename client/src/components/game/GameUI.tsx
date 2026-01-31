import { useState } from "react";
import { useGameState } from "../../lib/stores/useGameState";
import { useProgress } from "../../lib/stores/useProgress";
import { useAudio } from "../../lib/stores/useAudio";
import Inventory from "./Inventory";
import ProgressTracker from "./ProgressTracker";
import Achievements from "./Achievements";
import TimelineFilter from "./TimelineFilter";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Volume2, VolumeX, Package, Trophy, BookOpen, Award, Clock, Droplets } from "lucide-react";
import { gameData, getAllArtifacts } from "../../data/gameData";

export default function GameUI() {
  const { selectedRegion, selectedLocation, phase } = useGameState();
  const { progress } = useProgress();
  const { isMuted, toggleMute } = useAudio();
  const [showInventory, setShowInventory] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const totalArtifacts = progress.discoveredArtifacts.length;
  const totalLocations = progress.exploredLocations.length;
  const totalRegions = progress.unlockedRegions.length;
  const allArtifacts = getAllArtifacts();

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-auto">
        <div className="flex gap-2 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMute}
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowInventory(!showInventory)}
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
          >
            <Droplets size={16} className="text-[var(--aqua)]" />
            <span className="ml-1">{totalArtifacts}</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowProgress(!showProgress)}
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
          >
            <Trophy size={16} className="text-[var(--gold)]" />
            <span className="ml-1">{totalLocations}</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAchievements(!showAchievements)}
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
          >
            <Award size={16} className="text-[var(--terracotta)]" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowTimeline(!showTimeline)}
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
          >
            <Clock size={16} className="text-[var(--aqua)]" />
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap justify-end">
          <Badge variant="secondary" className="water-card text-[var(--parchment)] border-[var(--aqua)]/30">
            <span className="text-[var(--aqua)]">{totalRegions}</span>
            <span className="ml-1 text-[var(--parchment)]/70">Civilizations</span>
          </Badge>
          <Badge variant="secondary" className="water-card text-[var(--parchment)] border-[var(--aqua)]/30">
            <span className="text-[var(--cerulean)]">{totalLocations}</span>
            <span className="ml-1 text-[var(--parchment)]/70">Sites</span>
          </Badge>
          <Badge variant="secondary" className="water-card text-[var(--parchment)] border-[var(--aqua)]/30">
            <span className="text-[var(--gold)]">{totalArtifacts}</span>
            <span className="ml-1 text-[var(--parchment)]/70">of {allArtifacts.length} Inventions</span>
          </Badge>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 pointer-events-auto max-w-md">
        <Card className="water-card">
          <CardContent className="p-4">
            <h3 className="font-heading text-lg text-[var(--gold)] mb-2">
              Discover How Water Shaped History
            </h3>
            <p className="text-[var(--parchment)]/90 text-sm">
              Explore 8 ancient civilizations and discover 25+ water inventions that transformed human history. From Egyptian shaduf to Roman aqueducts, uncover the genius of ancient hydraulic engineering.
            </p>
          </CardContent>
        </Card>
      </div>

      {showInfo && (
        <div className="absolute bottom-4 right-20 pointer-events-auto">
          <Card className="water-card max-w-md">
            <CardContent className="p-4">
              <h3 className="font-heading text-lg text-[var(--gold)] mb-2">Explorer's Guide</h3>
              <ul className="text-[var(--parchment)]/90 text-sm space-y-1">
                <li>Click on glowing regions to explore civilizations</li>
                <li>Discover water inventions at historical sites</li>
                <li>Use the timeline to filter by era</li>
                <li>Collect achievements as you explore</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )}

      {showInventory && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto">
          <Inventory onClose={() => setShowInventory(false)} />
        </div>
      )}

      {showProgress && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto">
          <ProgressTracker onClose={() => setShowProgress(false)} />
        </div>
      )}

      {showAchievements && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto">
          <Achievements onClose={() => setShowAchievements(false)} />
        </div>
      )}

      {showTimeline && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto">
          <TimelineFilter onClose={() => setShowTimeline(false)} />
        </div>
      )}

      <div className="absolute bottom-4 right-4 pointer-events-auto">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowInfo(!showInfo)}
          className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
        >
          <BookOpen size={16} />
        </Button>
      </div>
    </div>
  );
}