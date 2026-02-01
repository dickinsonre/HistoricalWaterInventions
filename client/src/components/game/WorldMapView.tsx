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
  "ancient-egypt": { x: 58, y: 38, region: "Nile Valley" },
  "mesopotamia": { x: 63, y: 34, region: "Iraq/Syria" },
  "ancient-persia": { x: 67, y: 35, region: "Iran" },
  "indus-valley": { x: 70, y: 38, region: "Pakistan/India" },
  "ancient-greece": { x: 55, y: 32, region: "Greece" },
  "ancient-rome": { x: 52, y: 30, region: "Italy" },
  "minoan-crete": { x: 55, y: 33, region: "Crete" },
  "byzantine": { x: 58, y: 30, region: "Turkey" },
  "ancient-china": { x: 80, y: 34, region: "China" },
  "khmer-empire": { x: 78, y: 48, region: "Cambodia" },
  "sri-lanka": { x: 72, y: 52, region: "Sri Lanka" },
  "islamic-golden-age": { x: 62, y: 36, region: "Middle East" },
  "mesoamerica": { x: 25, y: 44, region: "Mexico" },
  "ancestral-puebloans": { x: 22, y: 34, region: "US Southwest" },
  "nubia": { x: 59, y: 44, region: "Sudan" },
  "nabataean": { x: 60, y: 36, region: "Jordan" },
  "phoenicia": { x: 59, y: 33, region: "Lebanon" },
  "carthage": { x: 52, y: 34, region: "Tunisia" },
  "medieval-europe": { x: 50, y: 26, region: "Western Europe" },
  "modern-era": { x: 48, y: 28, region: "Global" },
  "inca-empire": { x: 28, y: 56, region: "Peru" },
  "balinese": { x: 80, y: 54, region: "Indonesia" },
  "aboriginal-australia": { x: 84, y: 64, region: "Australia" },
  "austronesian": { x: 86, y: 52, region: "Pacific" },
  "ancient-japan": { x: 84, y: 32, region: "Japan" },
  "dutch-netherlands": { x: 51, y: 24, region: "Netherlands" },
  "ancient-india": { x: 72, y: 44, region: "India" },
  "hawaiian": { x: 12, y: 44, region: "Hawaii" },
  "ethiopian": { x: 60, y: 48, region: "Ethiopia" },
  "korean": { x: 82, y: 32, region: "Korea" },
  "great-zimbabwe": { x: 59, y: 58, region: "Zimbabwe" },
  "engaruka": { x: 60, y: 52, region: "Tanzania" },
  "sahel": { x: 52, y: 42, region: "Sahel Africa" },
  "nan-madol": { x: 90, y: 50, region: "Micronesia" },
  "chamorro": { x: 88, y: 46, region: "Guam" },
  "tokyo-underground": { x: 85, y: 33, region: "Japan" }
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
              className="relative w-full aspect-[2/1] bg-[#1a4a6e]"
              style={{
                backgroundImage: `url('/images/world-map.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, rgba(26, 58, 82, 0.3) 0%, rgba(13, 37, 56, 0.4) 100%)'
                }}
              />

              {gameData.regions.map(region => {
                const loc = civilizationLocations[region.id];
                if (!loc) return null;

                const isHovered = hoveredCiv === region.id;
                const inventionCount = region.locations.reduce((acc, l) => acc + l.artifacts.length, 0);

                return (
                  <div
                    key={region.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    onMouseEnter={() => setHoveredCiv(region.id)}
                    onMouseLeave={() => setHoveredCiv(null)}
                    onClick={() => setSelectedCiv(region.id)}
                  >
                    <div 
                      className={`
                        w-5 h-5 rounded-full border-2 transition-all duration-300
                        ${isHovered ? 'scale-150' : 'scale-100'}
                      `}
                      style={{ 
                        backgroundColor: region.color,
                        borderColor: isHovered ? '#c9a227' : '#ffffff',
                        boxShadow: isHovered 
                          ? `0 0 20px ${region.color}, 0 0 40px ${region.color}50`
                          : `0 0 12px ${region.color}, 0 0 4px rgba(255,255,255,0.5)`
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

              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-20">
                {["ancient", "classical", "medieval", "modern"].map(era => (
                  <span 
                    key={era}
                    className="px-2 py-1 bg-[var(--deep-ocean)]/80 rounded text-xs text-[var(--parchment)]/70 border border-[var(--aqua)]/20"
                  >
                    {era.charAt(0).toUpperCase() + era.slice(1)}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-4 right-4 text-xs text-[var(--parchment)]/50 z-20">
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
