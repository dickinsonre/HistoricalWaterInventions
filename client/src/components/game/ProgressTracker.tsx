import { useProgress } from "../../lib/stores/useProgress";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { X } from "lucide-react";
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

  return (
    <Card className="w-full max-w-2xl max-h-[80vh] bg-black/90 border-white/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">Exploration Progress</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-white hover:bg-white/20"
        >
          <X size={16} />
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[60vh]">
          {/* Overall Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-medium">Overall Progress</span>
              <Badge variant="secondary">{overallProgress}%</Badge>
            </div>
            <Progress value={overallProgress} className="h-2" />
          </div>

          {/* Category Progress */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-4 text-center">
                <h3 className="text-white font-medium mb-2">Regions</h3>
                <p className="text-2xl font-bold text-blue-400">{exploredRegions}</p>
                <p className="text-white/60 text-sm">of {totalRegions}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-4 text-center">
                <h3 className="text-white font-medium mb-2">Locations</h3>
                <p className="text-2xl font-bold text-green-400">{exploredLocations}</p>
                <p className="text-white/60 text-sm">of {totalLocations}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-4 text-center">
                <h3 className="text-white font-medium mb-2">Artifacts</h3>
                <p className="text-2xl font-bold text-yellow-400">{discoveredArtifacts}</p>
                <p className="text-white/60 text-sm">of {totalArtifacts}</p>
              </CardContent>
            </Card>
          </div>

          {/* Region Details */}
          <div className="space-y-4">
            <h3 className="text-white font-medium">Region Progress</h3>
            {gameData.regions.map((region) => {
              const isUnlocked = progress.unlockedRegions.includes(region.id);
              const regionProgress = progress.regionProgress[region.id] || 0;
              
              return (
                <Card key={region.id} className="bg-white/10 border-white/20">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{region.name}</span>
                      <Badge variant={isUnlocked ? "secondary" : "outline"}>
                        {isUnlocked ? `${regionProgress}%` : "Locked"}
                      </Badge>
                    </div>
                    {isUnlocked && (
                      <Progress value={regionProgress} className="h-1" />
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
