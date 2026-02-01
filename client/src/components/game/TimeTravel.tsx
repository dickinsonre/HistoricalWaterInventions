import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { X, Play, Pause, SkipBack, SkipForward, FastForward, Rewind, Clock, Droplets } from "lucide-react";
import { getAllArtifacts, eraFilters } from "../../data/gameData";

interface TimeTravelProps {
  onClose: () => void;
  onSelectInvention: (id: string) => void;
}

export default function TimeTravel({ onClose, onSelectInvention }: TimeTravelProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speed, setSpeed] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const allArtifacts = getAllArtifacts()
    .filter(a => a.yearBCE !== undefined)
    .sort((a, b) => (b.yearBCE || 0) - (a.yearBCE || 0));

  const currentArtifact = allArtifacts[currentIndex];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev >= allArtifacts.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 3000 / speed);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, speed, allArtifacts.length]);

  const formatYear = (year?: number) => {
    if (!year) return "Unknown";
    if (year > 0) return `${year} BCE`;
    return `${Math.abs(year)} CE`;
  };

  const getEraForYear = (year?: number) => {
    if (!year) return "Unknown Era";
    if (year > 500) return "Ancient Period";
    if (year > 0 && year <= 500) return "Classical Period";
    if (year > -1400 && year <= 0) return "Medieval Period";
    return "Modern Era";
  };

  const skipToEra = (eraId: string) => {
    let targetIndex = 0;
    switch (eraId) {
      case "ancient": 
        targetIndex = 0;
        break;
      case "classical": 
        targetIndex = allArtifacts.findIndex(a => (a.yearBCE || 0) <= 500);
        break;
      case "medieval": 
        targetIndex = allArtifacts.findIndex(a => (a.yearBCE || 0) < 0);
        break;
      case "modern": 
        targetIndex = allArtifacts.findIndex(a => (a.yearBCE || 0) < -1400);
        break;
    }
    if (targetIndex >= 0) setCurrentIndex(targetIndex);
  };

  const progress = ((currentIndex + 1) / allArtifacts.length) * 100;

  return (
    <Card className="water-card max-w-2xl w-full">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-heading text-2xl text-[var(--gold)]">
            <Clock className="inline mr-2" size={24} />
            Time Travel Mode
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
          >
            <X size={20} />
          </Button>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm text-[var(--parchment)]/70 mb-2">
            <span>6000 BCE</span>
            <span>Present</span>
          </div>
          <div className="h-2 bg-[var(--deep-ocean)]/60 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[var(--cerulean)] to-[var(--gold)] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-center mt-2 text-[var(--aqua)]">
            {currentIndex + 1} of {allArtifacts.length} inventions
          </div>
        </div>

        {currentArtifact && (
          <div 
            className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/30 mb-6 cursor-pointer hover:border-[var(--gold)]/50 transition-colors"
            onClick={() => onSelectInvention(currentArtifact.id)}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-[var(--cerulean)] to-[var(--river-blue)] flex items-center justify-center">
                <Droplets size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-heading text-xl text-[var(--gold)]">{currentArtifact.name}</h3>
                  <span className="text-xs bg-[var(--cerulean)]/20 text-[var(--cerulean)] px-2 py-0.5 rounded-full">
                    {currentArtifact.category}
                  </span>
                </div>
                <p className="text-[var(--aqua)] text-sm mb-2">
                  {formatYear(currentArtifact.yearBCE)} • {getEraForYear(currentArtifact.yearBCE)}
                </p>
                <p className="text-[var(--parchment)]/80 text-sm line-clamp-2">
                  {currentArtifact.description}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center gap-3 mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentIndex(0)}
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
          >
            <SkipBack size={16} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
          >
            <Rewind size={16} />
          </Button>
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-gradient-to-r from-[var(--cerulean)] to-[var(--river-blue)] hover:from-[var(--aqua)] hover:to-[var(--cerulean)] text-white px-6"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentIndex(prev => Math.min(allArtifacts.length - 1, prev + 1))}
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
          >
            <FastForward size={16} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentIndex(allArtifacts.length - 1)}
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
          >
            <SkipForward size={16} />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-[var(--parchment)]/70 text-sm">Speed:</span>
          {[0.5, 1, 2, 5].map(s => (
            <Button
              key={s}
              variant="outline"
              size="sm"
              onClick={() => setSpeed(s)}
              className={`water-card border-[var(--aqua)]/30 ${
                speed === s 
                  ? "bg-[var(--cerulean)]/30 text-[var(--gold)]" 
                  : "text-[var(--parchment)] hover:bg-[var(--cerulean)]/20"
              }`}
            >
              {s}x
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          <span className="text-[var(--parchment)]/70 text-sm w-full text-center mb-2">Skip to Era:</span>
          {eraFilters.map(era => (
            <Button
              key={era.id}
              variant="outline"
              size="sm"
              onClick={() => skipToEra(era.id)}
              className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
            >
              {era.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
