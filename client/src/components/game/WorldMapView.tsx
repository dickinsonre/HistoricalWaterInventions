import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { MapPin, ChevronRight, X, Home, Droplets } from "lucide-react";
import { gameData } from "../../data/gameData";
import CivilizationDetail from "./CivilizationDetail";

interface WorldMapViewProps {
  onBack: () => void;
}

const civilizationLocations: Record<string, { x: number; y: number; region: string }> = {
  "ancient-egypt": { x: 55, y: 45, region: "Nile Valley" },
  "mesopotamia": { x: 58, y: 38, region: "Iraq/Syria" },
  "ancient-persia": { x: 62, y: 40, region: "Iran" },
  "indus-valley": { x: 68, y: 42, region: "Pakistan/India" },
  "ancient-greece": { x: 52, y: 36, region: "Greece" },
  "ancient-rome": { x: 50, y: 34, region: "Italy" },
  "minoan-crete": { x: 53, y: 38, region: "Crete" },
  "byzantine": { x: 54, y: 34, region: "Turkey" },
  "ancient-china": { x: 78, y: 38, region: "China" },
  "khmer-empire": { x: 76, y: 52, region: "Cambodia" },
  "sri-lanka": { x: 70, y: 55, region: "Sri Lanka" },
  "islamic-golden-age": { x: 60, y: 42, region: "Middle East" },
  "mesoamerica": { x: 22, y: 48, region: "Mexico" },
  "ancestral-puebloans": { x: 18, y: 38, region: "US Southwest" },
  "nubia": { x: 56, y: 52, region: "Sudan" },
  "nabataean": { x: 57, y: 42, region: "Jordan" },
  "phoenicia": { x: 56, y: 38, region: "Lebanon" },
  "carthage": { x: 48, y: 40, region: "Tunisia" },
  "medieval-europe": { x: 48, y: 30, region: "Western Europe" },
  "modern-era": { x: 38, y: 32, region: "Global" }
};

export default function WorldMapView({ onBack }: WorldMapViewProps) {
  const [selectedCiv, setSelectedCiv] = useState<string | null>(null);
  const [hoveredCiv, setHoveredCiv] = useState<string | null>(null);

  const selectedRegion = selectedCiv ? gameData.regions.find(r => r.id === selectedCiv) : null;

  if (selectedCiv) {
    return (
      <div className="min-h-screen bg-[var(--deep-ocean)] flex items-center justify-center p-4">
        <CivilizationDetail 
          regionId={selectedCiv}
          onClose={() => setSelectedCiv(null)}
          onNavigate={(id) => setSelectedCiv(id)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--deep-ocean)] p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-heading text-2xl text-[var(--gold)]">World Map</h1>
            <p className="text-[var(--parchment)]/70 text-sm">Click on any civilization to explore</p>
          </div>
          <Button
            onClick={onBack}
            variant="outline"
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
          >
            <Home size={16} className="mr-2" />
            Back to Home
          </Button>
        </div>

        <Card className="water-card overflow-hidden">
          <CardContent className="p-0">
            <div 
              className="relative w-full aspect-[2/1] bg-[#0d2538]"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 50% 50%, rgba(46, 92, 138, 0.3) 0%, transparent 50%),
                  linear-gradient(to bottom, #0d2538 0%, #1a3a52 100%)
                `
              }}
            >
              <svg 
                viewBox="0 0 100 50" 
                className="absolute inset-0 w-full h-full"
                style={{ opacity: 0.3 }}
              >
                <path
                  d="M 15 20 Q 20 18, 25 22 Q 30 25, 28 30 Q 25 35, 20 38 Q 15 40, 12 35 Q 10 30, 15 20"
                  fill="#3d5a4a"
                  opacity="0.5"
                />
                <path
                  d="M 45 25 Q 50 20, 55 22 Q 60 25, 58 35 Q 55 42, 48 40 Q 42 38, 45 25"
                  fill="#3d5a4a"
                  opacity="0.5"
                />
                <path
                  d="M 52 40 Q 58 38, 62 42 Q 65 48, 60 52 Q 55 54, 52 50 Q 50 46, 52 40"
                  fill="#3d5a4a"
                  opacity="0.5"
                />
                <path
                  d="M 65 30 Q 75 25, 85 30 Q 90 40, 82 50 Q 75 55, 68 50 Q 62 45, 65 30"
                  fill="#3d5a4a"
                  opacity="0.5"
                />
              </svg>

              {gameData.regions.map(region => {
                const loc = civilizationLocations[region.id];
                if (!loc) return null;

                const isHovered = hoveredCiv === region.id;
                const inventionCount = region.locations.reduce((acc, l) => acc + l.artifacts.length, 0);

                return (
                  <div
                    key={region.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    onMouseEnter={() => setHoveredCiv(region.id)}
                    onMouseLeave={() => setHoveredCiv(null)}
                    onClick={() => setSelectedCiv(region.id)}
                  >
                    <div 
                      className={`
                        w-4 h-4 rounded-full border-2 transition-all duration-300
                        ${isHovered ? 'scale-150' : 'scale-100'}
                      `}
                      style={{ 
                        backgroundColor: region.color,
                        borderColor: isHovered ? '#c9a227' : region.color,
                        boxShadow: isHovered 
                          ? `0 0 20px ${region.color}, 0 0 40px ${region.color}50`
                          : `0 0 10px ${region.color}50`
                      }}
                    />

                    <div 
                      className={`
                        absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2
                        transition-all duration-200 pointer-events-none z-10
                        ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                      `}
                    >
                      <div className="bg-[var(--deep-ocean)] border border-[var(--aqua)]/30 rounded-lg p-3 min-w-[180px] shadow-xl">
                        <h3 className="font-heading text-[var(--gold)] text-sm mb-1">{region.name}</h3>
                        <p className="text-[var(--parchment)]/60 text-xs mb-2">{region.dateRange}</p>
                        <div className="flex items-center gap-2 text-xs text-[var(--aqua)]">
                          <Droplets size={12} />
                          <span>{inventionCount} inventions</span>
                        </div>
                        <div className="flex items-center gap-1 mt-2 text-xs text-[var(--parchment)]/80">
                          <span>Click to explore</span>
                          <ChevronRight size={12} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {["ancient", "classical", "medieval", "modern"].map(era => (
                  <span 
                    key={era}
                    className="px-2 py-1 bg-[var(--deep-ocean)]/80 rounded text-xs text-[var(--parchment)]/70 border border-[var(--aqua)]/20"
                  >
                    {era.charAt(0).toUpperCase() + era.slice(1)}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-4 right-4 text-xs text-[var(--parchment)]/50">
                {gameData.regions.length} civilizations
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {gameData.regions.map(region => {
            const loc = civilizationLocations[region.id];
            const inventionCount = region.locations.reduce((acc, l) => acc + l.artifacts.length, 0);

            return (
              <Card 
                key={region.id}
                className="water-card cursor-pointer hover:border-[var(--gold)] transition-all"
                onClick={() => setSelectedCiv(region.id)}
              >
                <CardContent className="p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: region.color }}
                    />
                    <h3 className="font-heading text-sm text-[var(--parchment)] truncate">{region.name}</h3>
                  </div>
                  <p className="text-[var(--parchment)]/60 text-xs">{region.dateRange}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-[var(--aqua)]">{inventionCount} inventions</span>
                    <ChevronRight size={14} className="text-[var(--parchment)]/40" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
