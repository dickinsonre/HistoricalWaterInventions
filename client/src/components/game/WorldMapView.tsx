import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { 
  MapPin, ChevronRight, X, Home, Droplets, VolumeX, Volume2, Search, 
  Backpack, Trophy, Clock, BookOpen, BarChart3, Play, Star, Image, 
  Lightbulb, Info, Globe, Grid3X3, Download, Route, Scroll, Filter
} from "lucide-react";
import { gameData } from "../../data/gameData";
import CivilizationDetail from "./CivilizationDetail";
import Inventory from "./Inventory";
import ProgressTracker from "./ProgressTracker";
import Achievements from "./Achievements";
import TimelineFilter from "./TimelineFilter";
import ComparisonTool from "./ComparisonTool";
import FeaturedDiscoveries from "./FeaturedDiscoveries";
import DidYouKnow from "./DidYouKnow";
import AboutSection from "./AboutSection";
import SmartSearch from "./SmartSearch";
import TimeTravel from "./TimeTravel";
import ChallengeModes from "./ChallengeModes";
import TechnologyLibrary from "./TechnologyLibrary";
import SWMM5Models from "./SWMM5Models";
import ThematicPathways from "./ThematicPathways";
import QuestSystem from "./QuestSystem";
import { useAudio } from "../../lib/stores/useAudio";
import { useProgress } from "../../lib/stores/useProgress";

interface WorldMapViewProps {
  onBack: () => void;
}

// Convert lat/lng to x/y percentage (equirectangular projection)
function latLngToXY(lat: number, lng: number): { x: number; y: number } {
  const x = ((lng + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;
  return { x, y };
}

// Civilization coordinates using real lat/lng
const civilizationCoords: Record<string, { lat: number; lng: number; region: string }> = {
  "ancient-egypt": { lat: 26.8, lng: 30.8, region: "Nile Valley" },
  "mesopotamia": { lat: 33.3, lng: 44.4, region: "Iraq/Syria" },
  "ancient-persia": { lat: 32.4, lng: 53.7, region: "Iran" },
  "indus-valley": { lat: 27.3, lng: 68.0, region: "Pakistan/India" },
  "ancient-greece": { lat: 37.98, lng: 23.73, region: "Greece" },
  "ancient-rome": { lat: 41.9, lng: 12.5, region: "Italy" },
  "minoan-crete": { lat: 35.24, lng: 24.90, region: "Crete" },
  "byzantine": { lat: 41.0, lng: 29.0, region: "Turkey" },
  "ancient-china": { lat: 34.0, lng: 108.9, region: "China" },
  "khmer-empire": { lat: 13.4, lng: 103.9, region: "Cambodia" },
  "sri-lanka": { lat: 7.9, lng: 80.6, region: "Sri Lanka" },
  "islamic-golden-age": { lat: 33.3, lng: 44.4, region: "Middle East" },
  "mesoamerica": { lat: 19.4, lng: -99.1, region: "Mexico" },
  "ancestral-puebloans": { lat: 36.0, lng: -108.0, region: "US Southwest" },
  "nubia": { lat: 19.0, lng: 33.0, region: "Sudan" },
  "nabataean": { lat: 30.3, lng: 35.4, region: "Jordan" },
  "phoenicia": { lat: 33.9, lng: 35.5, region: "Lebanon" },
  "carthage": { lat: 36.8, lng: 10.2, region: "Tunisia" },
  "medieval-europe": { lat: 48.8, lng: 2.3, region: "Western Europe" },
  "modern-era": { lat: 51.5, lng: -0.1, region: "Global" },
  "inca-empire": { lat: -13.5, lng: -72.0, region: "Peru" },
  "balinese": { lat: -8.4, lng: 115.2, region: "Indonesia" },
  "aboriginal-australia": { lat: -25.0, lng: 134.0, region: "Australia" },
  "austronesian": { lat: -5.0, lng: 145.0, region: "Pacific" },
  "ancient-japan": { lat: 35.0, lng: 135.8, region: "Japan" },
  "dutch-netherlands": { lat: 52.4, lng: 4.9, region: "Netherlands" },
  "ancient-india": { lat: 20.6, lng: 78.9, region: "India" },
  "hawaiian": { lat: 20.8, lng: -156.3, region: "Hawaii" },
  "ethiopian": { lat: 9.0, lng: 38.7, region: "Ethiopia" },
  "korean": { lat: 37.5, lng: 127.0, region: "Korea" },
  "great-zimbabwe": { lat: -20.3, lng: 30.9, region: "Zimbabwe" },
  "engaruka": { lat: -3.0, lng: 35.9, region: "Tanzania" },
  "sahel": { lat: 14.0, lng: -1.5, region: "Sahel Africa" },
  "nan-madol": { lat: 6.8, lng: 158.3, region: "Micronesia" },
  "chamorro": { lat: 13.4, lng: 144.8, region: "Guam" },
  "tokyo-underground": { lat: 35.9, lng: 139.8, region: "Japan" },
  "siam-thailand": { lat: 13.75, lng: 100.5, region: "Thailand" },
  "medieval-india": { lat: 23.0, lng: 72.6, region: "India" },
  "cambodia-khmer": { lat: 13.4, lng: 103.9, region: "Cambodia" },
  "burma-myanmar": { lat: 21.6, lng: 96.1, region: "Myanmar" },
  "vietnam": { lat: 21.0, lng: 105.9, region: "Vietnam" },
  "pre-roman-europe": { lat: 53.3, lng: -6.3, region: "Ireland" },
  "philippines": { lat: 16.9, lng: 121.1, region: "Philippines" }
};

// Convert to x/y percentages
const civilizationLocations: Record<string, { x: number; y: number; region: string }> = 
  Object.fromEntries(
    Object.entries(civilizationCoords).map(([id, { lat, lng, region }]) => {
      const { x, y } = latLngToXY(lat, lng);
      return [id, { x, y, region }];
    })
  );

// Continent mapping for filtering
const civilizationContinents: Record<string, string> = {
  "ancient-egypt": "Africa", "nubia": "Africa", "carthage": "Africa", 
  "great-zimbabwe": "Africa", "engaruka": "Africa", "sahel": "Africa", "ethiopian": "Africa",
  "mesopotamia": "Asia", "ancient-persia": "Asia", "indus-valley": "Asia", 
  "ancient-china": "Asia", "khmer-empire": "Asia", "sri-lanka": "Asia",
  "islamic-golden-age": "Asia", "ancient-japan": "Asia", "korean": "Asia",
  "siam-thailand": "Asia", "medieval-india": "Asia", "cambodia-khmer": "Asia",
  "burma-myanmar": "Asia", "vietnam": "Asia", "ancient-india": "Asia",
  "balinese": "Asia", "nabataean": "Asia", "philippines": "Asia", "tokyo-underground": "Asia",
  "ancient-greece": "Europe", "ancient-rome": "Europe", "minoan-crete": "Europe",
  "byzantine": "Europe", "medieval-europe": "Europe", "dutch-netherlands": "Europe",
  "pre-roman-europe": "Europe", "phoenicia": "Europe", "modern-era": "Europe",
  "mesoamerica": "Americas", "ancestral-puebloans": "Americas", "inca-empire": "Americas",
  "hawaiian": "Pacific", "aboriginal-australia": "Pacific", "austronesian": "Pacific",
  "nan-madol": "Pacific", "chamorro": "Pacific"
};

export default function WorldMapView({ onBack }: WorldMapViewProps) {
  const [selectedCiv, setSelectedCiv] = useState<string | null>(null);
  const [hoveredCiv, setHoveredCiv] = useState<string | null>(null);
  
  const { isMuted, toggleMute } = useAudio();
  const { progress } = useProgress();
  
  const [showInventory, setShowInventory] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [showFeatured, setShowFeatured] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showFacts, setShowFacts] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showTimeTravel, setShowTimeTravel] = useState(false);
  const [showChallenges, setShowChallenges] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showSWMM5, setShowSWMM5] = useState(false);
  const [showPathways, setShowPathways] = useState(false);
  const [showQuests, setShowQuests] = useState(false);
  const [eraFilter, setEraFilter] = useState<string | null>(null);
  const [continentFilter, setContinentFilter] = useState<string | null>(null);

  const allArtifacts = gameData.regions.flatMap(r => r.locations.flatMap(l => l.artifacts));
  const totalLocations = gameData.regions.reduce((acc, r) => acc + r.locations.length, 0);

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
    <TooltipProvider>
    <div className="min-h-screen bg-[var(--deep-ocean)] p-4">
      <div className="max-w-6xl mx-auto">
        {/* Toolbar */}
        <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={onBack} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Home size={16} className="text-[var(--gold)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">Back to Home</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={toggleMute} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                {isMuted ? <VolumeX size={16} className="text-[var(--terracotta)]" /> : <Volume2 size={16} className="text-[var(--cerulean)]" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{isMuted ? "Unmute" : "Mute"}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowSearch(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Search size={16} className="text-[var(--cerulean)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">Smart Search</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowInventory(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Backpack size={16} className="text-[var(--aqua)]" />
                <span className="ml-1 text-[var(--gold)]">{allArtifacts.length}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">Inventions ({allArtifacts.length})</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowProgress(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Trophy size={16} className="text-[var(--gold)]" />
                <span className="ml-1">{totalLocations}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">Progress</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowAchievements(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Star size={16} className="text-[var(--gold)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">Achievements</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowTimeline(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Clock size={16} className="text-[var(--cerulean)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">Timeline</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowLibrary(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <BookOpen size={16} className="text-[var(--aqua)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">Encyclopedia</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowComparison(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <BarChart3 size={16} className="text-[var(--cerulean)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">Compare</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowTimeTravel(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Play size={16} className="text-[var(--gold)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">Time Travel</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowFeatured(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Image size={16} className="text-[var(--terracotta)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">Featured</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowFacts(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Lightbulb size={16} className="text-[var(--gold)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">Did You Know</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowAbout(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Info size={16} className="text-[var(--cerulean)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">About</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowSWMM5(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Download size={16} className="text-[var(--aqua)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">SWMM5 Models</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowPathways(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Route size={16} className="text-[var(--cerulean)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">Thematic Pathways</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowQuests(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Scroll size={16} className="text-[var(--gold)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">Story Quests</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowChallenges(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Grid3X3 size={16} className="text-[var(--terracotta)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">Mini-Games</TooltipContent>
          </Tooltip>
        </div>

        {/* Quick Filters */}
        <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
          <span className="text-[var(--parchment)]/60 text-xs mr-2">Filter by Era:</span>
          {["Ancient", "Classical", "Medieval", "Modern"].map(era => (
            <Button 
              key={era}
              variant="outline" 
              size="sm" 
              onClick={() => setEraFilter(eraFilter === era ? null : era)}
              className={`text-xs px-2 py-1 h-7 ${eraFilter === era ? 'bg-[var(--cerulean)] text-white' : 'water-card text-[var(--parchment)]/70'}`}
            >
              {era}
            </Button>
          ))}
          <span className="text-[var(--parchment)]/40 mx-2">|</span>
          <span className="text-[var(--parchment)]/60 text-xs mr-2">Region:</span>
          {["Africa", "Asia", "Europe", "Americas", "Pacific"].map(continent => (
            <Button 
              key={continent}
              variant="outline" 
              size="sm" 
              onClick={() => setContinentFilter(continentFilter === continent ? null : continent)}
              className={`text-xs px-2 py-1 h-7 ${continentFilter === continent ? 'bg-[var(--terracotta)] text-white' : 'water-card text-[var(--parchment)]/70'}`}
            >
              {continent}
            </Button>
          ))}
          {(eraFilter || continentFilter) && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => { setEraFilter(null); setContinentFilter(null); }}
              className="text-xs text-[var(--aqua)] hover:text-[var(--gold)]"
            >
              Clear
            </Button>
          )}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-heading text-2xl text-[var(--gold)]">World Map</h1>
            <p className="text-[var(--parchment)]/70 text-sm">Click on any civilization to explore</p>
          </div>
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

                // Apply era filter
                if (eraFilter) {
                  const regionEra = region.era.toLowerCase();
                  if (!regionEra.includes(eraFilter.toLowerCase())) return null;
                }

                // Apply continent filter
                if (continentFilter) {
                  const civContinent = civilizationContinents[region.id];
                  if (civContinent !== continentFilter) return null;
                }

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

      {/* Modal Components */}
      {showInventory && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowInventory(false)}>
          <div onClick={(e) => e.stopPropagation()}><Inventory onClose={() => setShowInventory(false)} /></div>
        </div>
      )}
      {showProgress && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowProgress(false)}>
          <div onClick={(e) => e.stopPropagation()}><ProgressTracker onClose={() => setShowProgress(false)} /></div>
        </div>
      )}
      {showAchievements && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowAchievements(false)}>
          <div onClick={(e) => e.stopPropagation()}><Achievements onClose={() => setShowAchievements(false)} /></div>
        </div>
      )}
      {showTimeline && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowTimeline(false)}>
          <div onClick={(e) => e.stopPropagation()}><TimelineFilter onClose={() => setShowTimeline(false)} /></div>
        </div>
      )}
      {showComparison && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowComparison(false)}>
          <div onClick={(e) => e.stopPropagation()}><ComparisonTool onClose={() => setShowComparison(false)} /></div>
        </div>
      )}
      {showFeatured && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowFeatured(false)}>
          <div onClick={(e) => e.stopPropagation()}><FeaturedDiscoveries onClose={() => setShowFeatured(false)} /></div>
        </div>
      )}
      {showFacts && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowFacts(false)}>
          <div onClick={(e) => e.stopPropagation()}><DidYouKnow onClose={() => setShowFacts(false)} /></div>
        </div>
      )}
      {showAbout && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowAbout(false)}>
          <div onClick={(e) => e.stopPropagation()}><AboutSection onClose={() => setShowAbout(false)} /></div>
        </div>
      )}
      {showSearch && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowSearch(false)}>
          <div onClick={(e) => e.stopPropagation()}><SmartSearch onClose={() => setShowSearch(false)} onSelectInvention={() => setShowSearch(false)} onSelectCivilization={(id) => { setShowSearch(false); setSelectedCiv(id); }} /></div>
        </div>
      )}
      {showTimeTravel && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowTimeTravel(false)}>
          <div onClick={(e) => e.stopPropagation()}><TimeTravel onClose={() => setShowTimeTravel(false)} onSelectInvention={() => setShowTimeTravel(false)} /></div>
        </div>
      )}
      {showChallenges && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowChallenges(false)}>
          <div onClick={(e) => e.stopPropagation()}><ChallengeModes onClose={() => setShowChallenges(false)} /></div>
        </div>
      )}
      {showLibrary && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowLibrary(false)}>
          <div onClick={(e) => e.stopPropagation()}><TechnologyLibrary isOpen={showLibrary} onClose={() => setShowLibrary(false)} /></div>
        </div>
      )}
      {showSWMM5 && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowSWMM5(false)}>
          <div onClick={(e) => e.stopPropagation()}><SWMM5Models onClose={() => setShowSWMM5(false)} /></div>
        </div>
      )}
      {showPathways && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowPathways(false)}>
          <div onClick={(e) => e.stopPropagation()}><ThematicPathways onClose={() => setShowPathways(false)} onSelectCivilization={(id) => { setShowPathways(false); setSelectedCiv(id); }} /></div>
        </div>
      )}
      {showQuests && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowQuests(false)}>
          <div onClick={(e) => e.stopPropagation()}><QuestSystem onClose={() => setShowQuests(false)} onNavigateToCivilization={(id) => { setShowQuests(false); setSelectedCiv(id); }} /></div>
        </div>
      )}
    </div>
    </TooltipProvider>
  );
}
