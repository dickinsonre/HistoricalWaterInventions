import { useProgress } from "../../lib/stores/useProgress";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { X, Globe, MapPin, Droplets, Lock, CheckCircle } from "lucide-react";
import { gameData } from "../../data/gameData";

interface ProgressTrackerProps {
  onClose: () => void;
}

export default function ProgressTracker({ onClose }: ProgressTrackerProps) {
  const { progress } = useProgress();

  const totalRegions = gameData.regions.length;
  const totalLocations = gameData.regions.reduce((sum, region) => sum + region.locations.length, 0);
  const totalArtifacts = gameData.regions.reduce((sum, region) => 
    sum + region.locations.reduce((locationSum, location) => locationSum + location.artifacts.length, 0), 0
  );

  const exploredRegions = progress.unlockedRegions.length;
  const exploredLocations = progress.exploredLocations.length;
  const discoveredArtifacts = progress.discoveredArtifacts.length;

  const overallProgress = Math.round(((exploredRegions + exploredLocations + discoveredArtifacts) / (totalRegions + totalLocations + totalArtifacts)) * 100);

  const getEraLabel = (era: string) => {
    const labels: { [key: string]: string } = {
      ancient: "Ancient Period",
      classical: "Classical Period",
      medieval: "Medieval Period",
      modern: "Modern Era"
    };
    return labels[era] || era;
  };

  return (
    <Card className="w-full max-w-3xl max-h-[85vh] water-card">
      <CardHeader className="flex flex-row items-center justify-between border-b border-[var(--aqua)]/20">
        <div>
          <CardTitle className="font-heading text-[var(--gold)] text-xl flex items-center gap-2">
            <Globe className="w-5 h-5 text-[var(--aqua)]" />
            Exploration Progress
          </CardTitle>
          <p className="text-[var(--parchment)]/70 text-sm mt-1">
            Journey through 5,000 years of water engineering
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
        >
          <X size={16} />
        </Button>
      </CardHeader>
      <CardContent className="p-4">
        <ScrollArea className="h-[60vh]">
          <div className="mb-6 p-4 bg-[var(--deep-ocean)]/50 rounded-lg border border-[var(--aqua)]/20">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[var(--parchment)] font-medium">Overall Progress</span>
              <Badge className="bg-[var(--gold)]/30 text-[var(--gold)]">{overallProgress}%</Badge>
            </div>
            <Progress value={overallProgress} className="h-3 bg-[var(--deep-ocean)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="bg-[var(--deep-ocean)]/50 border-[var(--aqua)]/20">
              <CardContent className="p-4 text-center">
                <Globe className="w-8 h-8 mx-auto mb-2 text-[var(--aqua)]" />
                <h3 className="text-[var(--parchment)] font-medium mb-1">Civilizations</h3>
                <p className="text-2xl font-bold text-[var(--aqua)]">{exploredRegions}</p>
                <p className="text-[var(--parchment)]/60 text-sm">of {totalRegions}</p>
              </CardContent>
            </Card>

            <Card className="bg-[var(--deep-ocean)]/50 border-[var(--aqua)]/20">
              <CardContent className="p-4 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-[var(--cerulean)]" />
                <h3 className="text-[var(--parchment)] font-medium mb-1">Sites</h3>
                <p className="text-2xl font-bold text-[var(--cerulean)]">{exploredLocations}</p>
                <p className="text-[var(--parchment)]/60 text-sm">of {totalLocations}</p>
              </CardContent>
            </Card>

            <Card className="bg-[var(--deep-ocean)]/50 border-[var(--aqua)]/20">
              <CardContent className="p-4 text-center">
                <Droplets className="w-8 h-8 mx-auto mb-2 text-[var(--gold)]" />
                <h3 className="text-[var(--parchment)] font-medium mb-1">Inventions</h3>
                <p className="text-2xl font-bold text-[var(--gold)]">{discoveredArtifacts}</p>
                <p className="text-[var(--parchment)]/60 text-sm">of {totalArtifacts}</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-[var(--parchment)] font-medium flex items-center gap-2">
              <Globe size={16} className="text-[var(--aqua)]" />
              Civilizations by Era
            </h3>
            {gameData.regions.map((region) => {
              const isUnlocked = progress.unlockedRegions.includes(region.id);
              const regionProgress = progress.regionProgress[region.id] || 0;
              
              return (
                <Card 
                  key={region.id} 
                  className={`border-[var(--aqua)]/20 ${isUnlocked ? 'bg-[var(--deep-ocean)]/50' : 'bg-[var(--deep-ocean)]/30 opacity-60'}`}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        {isUnlocked ? (
                          <CheckCircle size={16} className="text-[var(--aqua)]" />
                        ) : (
                          <Lock size={16} className="text-[var(--parchment)]/50" />
                        )}
                        <div>
                          <span className="text-[var(--parchment)] font-medium">{region.name}</span>
                          <p className="text-[var(--parchment)]/50 text-xs">{region.dateRange}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge className="text-xs bg-[var(--river-blue)]/50 text-[var(--aqua)]">
                          {getEraLabel(region.era)}
                        </Badge>
                        <Badge className={isUnlocked 
                          ? "bg-[var(--aqua)]/30 text-[var(--aqua)]" 
                          : "bg-[var(--parchment)]/10 text-[var(--parchment)]/50"
                        }>
                          {isUnlocked ? `${regionProgress}%` : "Locked"}
                        </Badge>
                      </div>
                    </div>
                    {isUnlocked && (
                      <>
                        <Progress value={regionProgress} className="h-1 bg-[var(--deep-ocean)]" />
                        <p className="text-[var(--parchment)]/60 text-xs mt-2">{region.description}</p>
                      </>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}