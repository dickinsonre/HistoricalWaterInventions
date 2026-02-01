import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { X, Route, ChevronRight, Droplets, Mountain, Building, Leaf, Zap, Clock, MapPin, CheckCircle } from "lucide-react";
import { gameData, getAllArtifacts } from "../../data/gameData";

interface ThematicPathwaysProps {
  onClose: () => void;
  onSelectCivilization: (id: string) => void;
}

interface Pathway {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  civilizations: string[];
  inventionTypes: string[];
  estimatedTime: string;
  difficulty: "beginner" | "intermediate" | "advanced";
}

const PATHWAYS: Pathway[] = [
  {
    id: "desert-masters",
    title: "Desert Water Masters",
    subtitle: "How civilizations thrived where rain never falls",
    description: "Explore the ingenious solutions of desert peoples who created oases from barren sand. From Persian qanats to Nabataean cisterns, discover how water was harvested from the most unlikely places.",
    icon: <Mountain className="w-6 h-6" />,
    color: "bg-amber-500",
    civilizations: ["ancient-persia", "nabataean", "ancient-egypt", "sahel", "ancestral-puebloans"],
    inventionTypes: ["qanat", "cistern", "underground", "rainwater"],
    estimatedTime: "20-30 min",
    difficulty: "intermediate"
  },
  {
    id: "monsoon-tamers",
    title: "Monsoon Tamers",
    subtitle: "Capturing 4 months of rain for 12 months of life",
    description: "The monsoon civilizations faced a unique challenge: overwhelming floods followed by long droughts. See how they turned chaos into order through massive reservoirs and intricate canal systems.",
    icon: <Droplets className="w-6 h-6" />,
    color: "bg-blue-500",
    civilizations: ["khmer-empire", "ancient-india", "medieval-india", "sri-lanka", "balinese"],
    inventionTypes: ["reservoir", "baray", "tank", "cascade"],
    estimatedTime: "25-35 min",
    difficulty: "intermediate"
  },
  {
    id: "urban-engineers",
    title: "Ancient Urban Engineers",
    subtitle: "Water systems that made cities possible",
    description: "Cities need massive water infrastructure. Explore how ancient urban centers from Rome to Angkor to Tenochtitlan supplied millions with clean water and managed waste.",
    icon: <Building className="w-6 h-6" />,
    color: "bg-purple-500",
    civilizations: ["ancient-rome", "ancient-greece", "indus-valley", "mesoamerica", "tokyo-underground"],
    inventionTypes: ["aqueduct", "sanitation", "sewer", "fountain"],
    estimatedTime: "30-40 min",
    difficulty: "advanced"
  },
  {
    id: "terrace-farmers",
    title: "Mountain Terrace Builders",
    subtitle: "Carving agriculture from steep slopes",
    description: "In mountainous regions, flat land is rare. Discover how civilizations from Peru to Philippines to Bali transformed steep hillsides into productive farmland using gravity-fed irrigation.",
    icon: <Leaf className="w-6 h-6" />,
    color: "bg-green-500",
    civilizations: ["inca-empire", "philippines", "balinese", "ancient-china", "ethiopian"],
    inventionTypes: ["terrace", "irrigation", "canal"],
    estimatedTime: "20-25 min",
    difficulty: "beginner"
  },
  {
    id: "flood-controllers",
    title: "Flood Controllers",
    subtitle: "Living with rivers that overflow",
    description: "Great rivers bring life—and destruction. Learn how civilizations along the Nile, Yellow River, and Mekong learned to control and benefit from annual floods.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-cyan-500",
    civilizations: ["ancient-egypt", "ancient-china", "vietnam", "dutch-netherlands", "mesopotamia"],
    inventionTypes: ["dam", "dike", "flood control", "diversion"],
    estimatedTime: "25-30 min",
    difficulty: "intermediate"
  },
  {
    id: "island-innovators",
    title: "Island Water Innovators",
    subtitle: "Survival on islands with limited freshwater",
    description: "Islands present unique water challenges. Explore how Pacific islanders, from Hawaii to Nan Madol to Guam, developed creative solutions for freshwater scarcity.",
    icon: <MapPin className="w-6 h-6" />,
    color: "bg-teal-500",
    civilizations: ["hawaiian", "nan-madol", "chamorro", "austronesian", "balinese"],
    inventionTypes: ["pondfield", "rainwater", "aquaculture"],
    estimatedTime: "15-20 min",
    difficulty: "beginner"
  },
  {
    id: "ancient-megaprojects",
    title: "Ancient Megaprojects",
    subtitle: "Water infrastructure that still amazes engineers",
    description: "Some ancient water projects rival modern engineering. Explore the Grand Anicut (1,900 years old and still working), Roman aqueducts spanning continents, and Angkor's city-sized reservoirs.",
    icon: <Building className="w-6 h-6" />,
    color: "bg-red-500",
    civilizations: ["ancient-rome", "ancient-india", "khmer-empire", "ancient-china", "inca-empire"],
    inventionTypes: ["aqueduct", "dam", "reservoir", "canal"],
    estimatedTime: "30-40 min",
    difficulty: "advanced"
  },
  {
    id: "still-working",
    title: "Still Working Today",
    subtitle: "Ancient systems that never stopped",
    description: "Some ancient water systems have operated continuously for centuries or millennia. Discover engineering so good it's still serving communities today.",
    icon: <Clock className="w-6 h-6" />,
    color: "bg-emerald-500",
    civilizations: ["ancient-india", "ancient-persia", "balinese", "ancient-china", "philippines"],
    inventionTypes: ["qanat", "subak", "terrace", "dam"],
    estimatedTime: "20-25 min",
    difficulty: "beginner"
  }
];

export default function ThematicPathways({ onClose, onSelectCivilization }: ThematicPathwaysProps) {
  const [selectedPathway, setSelectedPathway] = useState<Pathway | null>(null);
  const [visitedCivs, setVisitedCivs] = useState<Set<string>>(new Set());

  const allArtifacts = getAllArtifacts();

  const getPathwayCivilizations = (pathway: Pathway) => {
    return pathway.civilizations
      .map(civId => gameData.regions.find(r => r.id === civId))
      .filter(Boolean);
  };

  const getPathwayInventionCount = (pathway: Pathway) => {
    return pathway.civilizations.reduce((count, civId) => {
      const region = gameData.regions.find(r => r.id === civId);
      if (region) {
        return count + region.locations.reduce((acc, loc) => acc + loc.artifacts.length, 0);
      }
      return count;
    }, 0);
  };

  const handleVisitCivilization = (civId: string) => {
    setVisitedCivs(prev => new Set(Array.from(prev).concat([civId])));
    onSelectCivilization(civId);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-green-500/20 text-green-300";
      case "intermediate": return "bg-yellow-500/20 text-yellow-300";
      case "advanced": return "bg-red-500/20 text-red-300";
      default: return "bg-gray-500/20 text-gray-300";
    }
  };

  if (selectedPathway) {
    const civilizations = getPathwayCivilizations(selectedPathway);
    const pathwayProgress = civilizations.filter(c => c && visitedCivs.has(c.id)).length;

    return (
      <Card className="w-full max-w-3xl max-h-[85vh] water-card">
        <CardHeader className="border-b border-[var(--aqua)]/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-lg ${selectedPathway.color} flex items-center justify-center text-white`}>
                {selectedPathway.icon}
              </div>
              <div>
                <CardTitle className="font-heading text-[var(--gold)] text-xl">
                  {selectedPathway.title}
                </CardTitle>
                <p className="text-[var(--parchment)]/70 text-sm">{selectedPathway.subtitle}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setSelectedPathway(null)}>
              <X size={18} />
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <Badge className={getDifficultyColor(selectedPathway.difficulty)}>
              {selectedPathway.difficulty}
            </Badge>
            <span className="text-xs text-[var(--parchment)]/60 flex items-center gap-1">
              <Clock size={12} /> {selectedPathway.estimatedTime}
            </span>
            <span className="text-xs text-[var(--aqua)]">
              Progress: {pathwayProgress}/{civilizations.length} civilizations
            </span>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-[var(--parchment)]/80 text-sm mb-6">{selectedPathway.description}</p>
          
          <h4 className="font-heading text-[var(--parchment)] mb-4">Civilizations to Explore</h4>
          <ScrollArea className="h-[45vh]">
            <div className="space-y-3">
              {civilizations.map((civ, index) => {
                if (!civ) return null;
                const isVisited = visitedCivs.has(civ.id);
                const inventionCount = civ.locations.reduce((acc, loc) => acc + loc.artifacts.length, 0);
                
                return (
                  <Card 
                    key={civ.id}
                    className={`water-card cursor-pointer hover:border-[var(--gold)] transition-all ${isVisited ? 'border-green-500/50' : ''}`}
                    onClick={() => handleVisitCivilization(civ.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                            style={{ backgroundColor: civ.color }}
                          >
                            {isVisited ? <CheckCircle size={16} /> : index + 1}
                          </div>
                          <div>
                            <h5 className="text-[var(--parchment)] font-medium">{civ.name}</h5>
                            <p className="text-[var(--parchment)]/60 text-xs">{civ.dateRange}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-[var(--aqua)]">{inventionCount} inventions</span>
                          <ChevronRight size={16} className="text-[var(--parchment)]/40" />
                        </div>
                      </div>
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

  return (
    <Card className="w-full max-w-4xl max-h-[85vh] water-card">
      <CardHeader className="border-b border-[var(--aqua)]/20">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-heading text-[var(--gold)] text-xl flex items-center gap-2">
              <Route className="w-5 h-5 text-[var(--aqua)]" />
              Thematic Pathways
            </CardTitle>
            <p className="text-[var(--parchment)]/70 text-sm mt-1">
              Guided journeys through water history by theme
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X size={18} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <ScrollArea className="h-[60vh]">
          <div className="grid md:grid-cols-2 gap-4">
            {PATHWAYS.map(pathway => {
              const inventionCount = getPathwayInventionCount(pathway);
              
              return (
                <Card 
                  key={pathway.id}
                  className="water-card cursor-pointer hover:border-[var(--gold)] transition-all group"
                  onClick={() => setSelectedPathway(pathway)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-lg ${pathway.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                        {pathway.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-[var(--parchment)] text-lg mb-1">{pathway.title}</h3>
                        <p className="text-[var(--aqua)] text-xs">{pathway.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-[var(--parchment)]/70 text-sm mb-3 line-clamp-2">{pathway.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Badge className={getDifficultyColor(pathway.difficulty)}>{pathway.difficulty}</Badge>
                        <span className="text-[var(--parchment)]/60 flex items-center gap-1">
                          <Clock size={10} /> {pathway.estimatedTime}
                        </span>
                      </div>
                      <span className="text-[var(--aqua)]">
                        {pathway.civilizations.length} civs • {inventionCount} inventions
                      </span>
                    </div>
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