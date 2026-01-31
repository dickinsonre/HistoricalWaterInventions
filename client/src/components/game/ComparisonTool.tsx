import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { X, Scale, ChevronDown, Calendar, MapPin, Droplets, Sparkles } from "lucide-react";
import { gameData, getAllArtifacts, ArtifactData } from "../../data/gameData";

interface ComparisonToolProps {
  onClose: () => void;
}

export default function ComparisonTool({ onClose }: ComparisonToolProps) {
  const [selectedLeft, setSelectedLeft] = useState<ArtifactData | null>(null);
  const [selectedRight, setSelectedRight] = useState<ArtifactData | null>(null);
  const [showLeftDropdown, setShowLeftDropdown] = useState(false);
  const [showRightDropdown, setShowRightDropdown] = useState(false);

  const allArtifacts = getAllArtifacts();

  const getArtifactRegion = (artifact: ArtifactData) => {
    const region = gameData.regions.find(r => 
      r.locations.some(l => l.artifacts.some(a => a.id === artifact.id))
    );
    return region;
  };

  const getArtifactLocation = (artifact: ArtifactData) => {
    for (const region of gameData.regions) {
      const location = region.locations.find(l => 
        l.artifacts.some(a => a.id === artifact.id)
      );
      if (location) return location;
    }
    return null;
  };

  const getRarityClass = (rarity: string) => {
    switch (rarity) {
      case "common": return "bg-gray-500/30 text-gray-300";
      case "rare": return "bg-[var(--cerulean)]/30 text-[var(--aqua)]";
      case "epic": return "bg-purple-500/30 text-purple-300";
      case "legendary": return "bg-[var(--gold)]/30 text-[var(--gold)]";
      default: return "";
    }
  };

  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      "irrigation": "Irrigation",
      "aqueduct": "Aqueduct",
      "water-lifting": "Water Lifting",
      "sanitation": "Sanitation",
      "dam": "Dam/Reservoir",
      "water-clock": "Water Clock",
      "fountain": "Fountain",
      "canal": "Canal"
    };
    return labels[category] || category;
  };

  const renderSelector = (
    selected: ArtifactData | null,
    onSelect: (artifact: ArtifactData) => void,
    showDropdown: boolean,
    setShowDropdown: (show: boolean) => void,
    label: string
  ) => (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setShowDropdown(!showDropdown)}
        className="w-full justify-between water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
      >
        <span>{selected ? selected.name : label}</span>
        <ChevronDown size={16} />
      </Button>
      
      {showDropdown && (
        <Card className="absolute z-50 w-full mt-1 water-card max-h-60 overflow-hidden">
          <ScrollArea className="h-60">
            <div className="p-2 space-y-1">
              {allArtifacts.map((artifact) => (
                <Button
                  key={artifact.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    onSelect(artifact);
                    setShowDropdown(false);
                  }}
                  className="w-full justify-start text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 text-left"
                >
                  <span className="truncate">{artifact.name}</span>
                  <Badge className={`ml-2 text-xs ${getRarityClass(artifact.rarity)}`}>
                    {artifact.rarity}
                  </Badge>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </Card>
      )}
    </div>
  );

  const renderArtifactCard = (artifact: ArtifactData | null, placeholder: string) => {
    if (!artifact) {
      return (
        <Card className="bg-[var(--deep-ocean)]/30 border-[var(--aqua)]/20 border-dashed h-full">
          <CardContent className="p-6 flex items-center justify-center h-64">
            <p className="text-[var(--parchment)]/50 text-center">{placeholder}</p>
          </CardContent>
        </Card>
      );
    }

    const region = getArtifactRegion(artifact);
    const location = getArtifactLocation(artifact);

    return (
      <Card className="bg-[var(--deep-ocean)]/50 border-[var(--aqua)]/30 h-full">
        <CardContent className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-[var(--gold)] text-lg">{artifact.name}</h3>
            <Badge className={`${getRarityClass(artifact.rarity)} capitalize`}>
              {artifact.rarity}
            </Badge>
          </div>

          <p className="text-[var(--parchment)]/80 text-sm">{artifact.description}</p>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-[var(--aqua)]">
              <Droplets size={14} />
              <span>{getCategoryLabel(artifact.category)}</span>
            </div>
            
            <div className="flex items-center gap-2 text-[var(--parchment)]/70">
              <Calendar size={14} />
              <span>{artifact.historicalPeriod}</span>
            </div>
            
            {region && (
              <div className="flex items-center gap-2 text-[var(--parchment)]/70">
                <MapPin size={14} />
                <span>{region.name}</span>
              </div>
            )}
            
            {location && (
              <div className="flex items-center gap-2 text-[var(--parchment)]/70">
                <Sparkles size={14} />
                <span>{location.name}</span>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-[var(--aqua)]/20">
            <p className="text-[var(--parchment)]/60 text-xs">
              <strong className="text-[var(--aqua)]">Historical Significance:</strong><br />
              {artifact.significance}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Card className="w-full max-w-4xl max-h-[90vh] water-card">
      <CardHeader className="flex flex-row items-center justify-between border-b border-[var(--aqua)]/20">
        <div>
          <CardTitle className="font-heading text-[var(--gold)] text-xl flex items-center gap-2">
            <Scale className="w-5 h-5" />
            Compare Water Inventions
          </CardTitle>
          <p className="text-[var(--parchment)]/70 text-sm mt-1">
            Select two inventions to compare side by side
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
        <div className="grid grid-cols-2 gap-4 mb-4">
          {renderSelector(selectedLeft, setSelectedLeft, showLeftDropdown, setShowLeftDropdown, "Select first invention...")}
          {renderSelector(selectedRight, setSelectedRight, showRightDropdown, setShowRightDropdown, "Select second invention...")}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {renderArtifactCard(selectedLeft, "Select an invention on the left to begin comparison")}
          {renderArtifactCard(selectedRight, "Select an invention on the right to compare")}
        </div>

        {selectedLeft && selectedRight && (
          <Card className="mt-4 bg-[var(--deep-ocean)]/30 border-[var(--aqua)]/20">
            <CardContent className="p-4">
              <h4 className="text-[var(--aqua)] font-medium mb-3 flex items-center gap-2">
                <Scale size={16} /> Comparison Summary
              </h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-[var(--parchment)]/50 text-xs mb-1">Category</p>
                  <p className="text-[var(--parchment)]">
                    {selectedLeft.category === selectedRight.category 
                      ? `Both: ${getCategoryLabel(selectedLeft.category)}`
                      : `${getCategoryLabel(selectedLeft.category)} vs ${getCategoryLabel(selectedRight.category)}`}
                  </p>
                </div>
                <div>
                  <p className="text-[var(--parchment)]/50 text-xs mb-1">Era</p>
                  <p className="text-[var(--parchment)]">
                    {getArtifactRegion(selectedLeft)?.era === getArtifactRegion(selectedRight)?.era
                      ? `Same era: ${getArtifactRegion(selectedLeft)?.era}`
                      : `${getArtifactRegion(selectedLeft)?.era} vs ${getArtifactRegion(selectedRight)?.era}`}
                  </p>
                </div>
                <div>
                  <p className="text-[var(--parchment)]/50 text-xs mb-1">Rarity</p>
                  <p className="text-[var(--parchment)]">
                    {selectedLeft.rarity === selectedRight.rarity 
                      ? `Both: ${selectedLeft.rarity}`
                      : `${selectedLeft.rarity} vs ${selectedRight.rarity}`}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}