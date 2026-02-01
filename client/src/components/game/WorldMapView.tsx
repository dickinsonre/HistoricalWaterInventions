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
  "ancient-egypt": { x: 58, y: 42, region: "Nile Valley" },
  "mesopotamia": { x: 62, y: 36, region: "Iraq/Syria" },
  "ancient-persia": { x: 67, y: 38, region: "Iran" },
  "indus-valley": { x: 72, y: 42, region: "Pakistan/India" },
  "ancient-greece": { x: 55, y: 34, region: "Greece" },
  "ancient-rome": { x: 51, y: 32, region: "Italy" },
  "minoan-crete": { x: 56, y: 36, region: "Crete" },
  "byzantine": { x: 58, y: 32, region: "Turkey" },
  "ancient-china": { x: 82, y: 36, region: "China" },
  "khmer-empire": { x: 80, y: 52, region: "Cambodia" },
  "sri-lanka": { x: 74, y: 54, region: "Sri Lanka" },
  "islamic-golden-age": { x: 64, y: 40, region: "Middle East" },
  "mesoamerica": { x: 22, y: 48, region: "Mexico" },
  "ancestral-puebloans": { x: 18, y: 36, region: "US Southwest" },
  "nubia": { x: 59, y: 50, region: "Sudan" },
  "nabataean": { x: 60, y: 40, region: "Jordan" },
  "phoenicia": { x: 59, y: 35, region: "Lebanon" },
  "carthage": { x: 52, y: 38, region: "Tunisia" },
  "medieval-europe": { x: 50, y: 28, region: "Western Europe" },
  "modern-era": { x: 40, y: 30, region: "Global" },
  "inca-empire": { x: 24, y: 62, region: "Peru" },
  "balinese": { x: 80, y: 56, region: "Indonesia" },
  "aboriginal-australia": { x: 86, y: 68, region: "Australia" },
  "austronesian": { x: 88, y: 58, region: "Pacific" },
  "ancient-japan": { x: 88, y: 34, region: "Japan" },
  "dutch-netherlands": { x: 50, y: 26, region: "Netherlands" },
  "ancient-india": { x: 70, y: 46, region: "India" },
  "hawaiian": { x: 10, y: 48, region: "Hawaii" },
  "ethiopian": { x: 60, y: 52, region: "Ethiopia" }
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
                backgroundImage: `
                  radial-gradient(circle at 30% 40%, rgba(74, 144, 194, 0.2) 0%, transparent 40%),
                  radial-gradient(circle at 70% 60%, rgba(74, 144, 194, 0.15) 0%, transparent 35%),
                  linear-gradient(to bottom, #1a4a6e 0%, #0d2538 100%)
                `
              }}
            >
              <svg 
                viewBox="0 0 360 180" 
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <path
                  d="M 40 25 L 55 20 L 70 22 L 85 18 L 95 25 L 90 35 L 85 45 L 75 55 L 65 60 L 55 58 L 45 52 L 38 45 L 35 35 Z"
                  fill="#4a6b52"
                  opacity="0.7"
                />
                <path
                  d="M 95 55 L 110 50 L 125 52 L 135 48 L 140 55 L 138 65 L 130 75 L 118 80 L 105 78 L 95 72 L 92 62 Z"
                  fill="#4a6b52"
                  opacity="0.7"
                />
                <path
                  d="M 15 55 L 35 48 L 55 52 L 70 58 L 75 70 L 70 85 L 60 100 L 45 115 L 30 125 L 20 118 L 18 100 L 22 80 L 18 65 Z"
                  fill="#5a7b62"
                  opacity="0.7"
                />
                <path
                  d="M 50 75 L 75 68 L 95 72 L 105 80 L 100 95 L 90 108 L 75 115 L 60 112 L 52 100 L 48 85 Z"
                  fill="#5a7b62"
                  opacity="0.7"
                />
                <path
                  d="M 160 25 L 200 20 L 240 22 L 270 28 L 280 40 L 275 55 L 260 65 L 230 68 L 200 72 L 175 68 L 160 58 L 155 42 Z"
                  fill="#4a6b52"
                  opacity="0.7"
                />
                <path
                  d="M 175 75 L 195 70 L 220 72 L 245 78 L 255 90 L 250 105 L 235 118 L 210 125 L 185 122 L 168 112 L 165 95 L 170 82 Z"
                  fill="#5a7b62"
                  opacity="0.7"
                />
                <path
                  d="M 220 130 L 250 125 L 275 130 L 290 142 L 285 155 L 268 165 L 245 168 L 225 162 L 215 150 L 218 138 Z"
                  fill="#4a6b52"
                  opacity="0.7"
                />
                <path
                  d="M 255 50 L 285 45 L 320 48 L 345 55 L 355 70 L 350 90 L 335 105 L 310 112 L 280 108 L 260 95 L 250 75 L 252 60 Z"
                  fill="#4a6b52"
                  opacity="0.7"
                />
                <path
                  d="M 295 115 L 320 110 L 345 115 L 355 130 L 348 148 L 330 160 L 305 165 L 285 158 L 280 142 L 288 125 Z"
                  fill="#5a7b62"
                  opacity="0.7"
                />
                <path
                  d="M 280 55 L 295 52 L 308 58 L 312 72 L 305 82 L 290 85 L 278 78 L 275 65 Z"
                  fill="#6a8b72"
                  opacity="0.6"
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
