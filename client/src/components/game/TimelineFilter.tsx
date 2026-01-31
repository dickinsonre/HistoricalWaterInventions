import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { X, Calendar, Droplets, Filter, ChevronRight } from "lucide-react";
import { gameData, eraFilters, categoryFilters, getAllArtifacts, getArtifactsByCategory, getArtifactsByEra, getRegionByEra } from "../../data/gameData";

interface TimelineFilterProps {
  onClose: () => void;
}

export default function TimelineFilter({ onClose }: TimelineFilterProps) {
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const allArtifacts = getAllArtifacts();
  
  const filteredArtifacts = allArtifacts.filter(artifact => {
    if (selectedCategory && artifact.category !== selectedCategory) return false;
    if (selectedEra) {
      const artifactRegion = gameData.regions.find(r => 
        r.locations.some(l => l.artifacts.some(a => a.id === artifact.id))
      );
      if (artifactRegion && artifactRegion.era !== selectedEra) return false;
    }
    return true;
  });

  const getCategoryIcon = (iconName: string) => {
    return <Droplets className="w-4 h-4" />;
  };

  const getRarityClass = (rarity: string) => {
    switch (rarity) {
      case "common": return "rarity-common";
      case "rare": return "rarity-rare";
      case "epic": return "rarity-epic";
      case "legendary": return "rarity-legendary";
      default: return "";
    }
  };

  return (
    <Card className="w-full max-w-4xl max-h-[90vh] water-card">
      <CardHeader className="flex flex-row items-center justify-between border-b border-[var(--aqua)]/20">
        <div>
          <CardTitle className="font-heading text-[var(--gold)] text-xl flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Timeline of Water Inventions
          </CardTitle>
          <p className="text-[var(--parchment)]/70 text-sm mt-1">
            Explore 5,000+ years of water engineering history
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
        <div className="mb-4">
          <h4 className="text-[var(--aqua)] text-sm font-medium mb-2 flex items-center gap-1">
            <Filter size={14} /> Filter by Era
          </h4>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedEra === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedEra(null)}
              className={selectedEra === null 
                ? "water-button text-white" 
                : "water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"}
            >
              All Eras
            </Button>
            {eraFilters.map((era) => (
              <Button
                key={era.id}
                variant={selectedEra === era.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedEra(era.id)}
                className={selectedEra === era.id 
                  ? "water-button text-white" 
                  : "water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"}
              >
                {era.label}
                <span className="ml-1 text-xs opacity-70">({era.range})</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-[var(--aqua)] text-sm font-medium mb-2 flex items-center gap-1">
            <Droplets size={14} /> Filter by Technology
          </h4>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className={selectedCategory === null 
                ? "water-button text-white" 
                : "water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"}
            >
              All Types
            </Button>
            {categoryFilters.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat.id)}
                className={selectedCategory === cat.id 
                  ? "water-button text-white" 
                  : "water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="border-t border-[var(--aqua)]/20 pt-4">
          <h4 className="text-[var(--parchment)] text-sm font-medium mb-3">
            Showing {filteredArtifacts.length} inventions
          </h4>
          <ScrollArea className="h-[40vh]">
            <div className="space-y-2">
              {filteredArtifacts.map((artifact) => {
                const region = gameData.regions.find(r => 
                  r.locations.some(l => l.artifacts.some(a => a.id === artifact.id))
                );
                const location = region?.locations.find(l => 
                  l.artifacts.some(a => a.id === artifact.id)
                );
                
                return (
                  <Card 
                    key={artifact.id} 
                    className="bg-[var(--deep-ocean)]/50 border-[var(--aqua)]/20 hover:border-[var(--aqua)]/50 transition-colors"
                  >
                    <CardContent className="p-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h5 className={`font-medium ${getRarityClass(artifact.rarity)}`}>
                              {artifact.name}
                            </h5>
                            <Badge className="text-xs bg-[var(--cerulean)]/30 text-[var(--aqua)]">
                              {artifact.category}
                            </Badge>
                          </div>
                          <p className="text-[var(--parchment)]/70 text-sm mb-2">
                            {artifact.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-[var(--parchment)]/50">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {artifact.historicalPeriod}
                            </span>
                            {region && (
                              <span className="flex items-center gap-1">
                                <ChevronRight size={12} />
                                {region.name}
                              </span>
                            )}
                          </div>
                        </div>
                        <Badge 
                          className={`text-xs capitalize ${
                            artifact.rarity === 'legendary' ? 'bg-[var(--gold)]/30 text-[var(--gold)]' :
                            artifact.rarity === 'epic' ? 'bg-purple-500/30 text-purple-300' :
                            artifact.rarity === 'rare' ? 'bg-[var(--cerulean)]/30 text-[var(--aqua)]' :
                            'bg-gray-500/30 text-gray-300'
                          }`}
                        >
                          {artifact.rarity}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
}