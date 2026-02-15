import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { X, Map, ArrowRight, Globe, Clock, Waves, Share2, ChevronDown, Droplets, Navigation } from "lucide-react";

interface DiffusionMapProps {
  onClose: () => void;
  onSelectCivilization?: (id: string) => void;
}

interface DiffusionStop {
  civilization: string;
  civilizationId?: string;
  date: string;
  year: number;
  note: string;
}

interface TechnologyDiffusion {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  origin: DiffusionStop;
  path: DiffusionStop[];
}

const getEraColor = (year: number): string => {
  if (year <= -2000) return "var(--terracotta)";
  if (year <= -500) return "var(--gold)";
  if (year <= 500) return "var(--cerulean)";
  return "var(--aqua)";
};

const getEraLabel = (year: number): string => {
  if (year <= -2000) return "Ancient";
  if (year <= -500) return "Bronze/Iron Age";
  if (year <= 500) return "Classical";
  return "Medieval/Modern";
};

const formatYear = (year: number): string => {
  if (year < 0) return `${Math.abs(year)} BCE`;
  return `${year} CE`;
};

const TECHNOLOGIES: TechnologyDiffusion[] = [
  {
    id: "qanat",
    name: "Qanat / Foggara",
    description: "Underground water channels that transport water from mountain aquifers to lowland settlements without pumps, using gravity flow through gently sloping tunnels.",
    icon: <Droplets className="w-5 h-5" />,
    color: "var(--cerulean)",
    origin: { civilization: "Persia", civilizationId: "ancient-persia", date: "1000 BCE", year: -1000, note: "Invented in ancient Persia for arid irrigation" },
    path: [
      { civilization: "Arabia", date: "700 BCE", year: -700, note: "Spread via trade routes across Arabian Peninsula" },
      { civilization: "North Africa (Foggara)", date: "200 BCE", year: -200, note: "Adapted as foggara systems in Saharan oases" },
      { civilization: "Spain (Alcantarilla)", civilizationId: "al-andalus", date: "800 CE", year: 800, note: "Brought by Moors during Islamic conquest" },
      { civilization: "Afghanistan", date: "500 BCE", year: -500, note: "Karez systems in Afghan highlands" },
      { civilization: "China (Karez)", civilizationId: "ancient-china", date: "100 BCE", year: -100, note: "Adopted in Turpan Depression via Silk Road" },
    ],
  },
  {
    id: "noria",
    name: "Noria (Water Wheel)",
    description: "A large undershot water wheel with containers on its rim that lifts water from rivers to aqueducts or irrigation channels using only the current's force.",
    icon: <Waves className="w-5 h-5" />,
    color: "var(--aqua)",
    origin: { civilization: "Syria / Mesopotamia", civilizationId: "mesopotamia", date: "200 BCE", year: -200, note: "Earliest water wheels on the Orontes River" },
    path: [
      { civilization: "Rome", civilizationId: "ancient-rome", date: "100 BCE", year: -100, note: "Adopted for milling and irrigation" },
      { civilization: "Islamic World", date: "700 CE", year: 700, note: "Refined and scaled across caliphate" },
      { civilization: "Spain", civilizationId: "al-andalus", date: "900 CE", year: 900, note: "Massive norias at Córdoba and Hama" },
      { civilization: "China", civilizationId: "ancient-china", date: "200 CE", year: 200, note: "Chain pump and noria variants developed" },
      { civilization: "Southeast Asia", civilizationId: "southeast-asia", date: "1200 CE", year: 1200, note: "Water wheels for rice paddy irrigation" },
    ],
  },
  {
    id: "aqueduct",
    name: "Aqueduct Technology",
    description: "Engineered channels and bridges for transporting water over long distances using gravity, including arched stone structures spanning valleys.",
    icon: <Navigation className="w-5 h-5" />,
    color: "var(--gold)",
    origin: { civilization: "Assyria", civilizationId: "mesopotamia", date: "700 BCE", year: -700, note: "Jerwan aqueduct—first large-scale stone aqueduct" },
    path: [
      { civilization: "Rome", civilizationId: "ancient-rome", date: "312 BCE", year: -312, note: "Aqua Appia, first of 11 major aqueducts" },
      { civilization: "Islamic World", date: "700 CE", year: 700, note: "Maintained and expanded Roman systems" },
      { civilization: "Spain", civilizationId: "al-andalus", date: "800 CE", year: 800, note: "Acequias and water distribution networks" },
      { civilization: "Americas (Inca)", civilizationId: "inca-empire", date: "1400 CE", year: 1400, note: "Independent invention—stone-channel aqueducts" },
      { civilization: "Americas (Aztec)", civilizationId: "mesoamerica", date: "1420 CE", year: 1420, note: "Chapultepec aqueduct to Tenochtitlan" },
    ],
  },
  {
    id: "shaduf",
    name: "Shaduf",
    description: "A counterweighted lever device for lifting water from rivers or canals, consisting of a pole balanced on a fulcrum with a bucket on one end and a counterweight on the other.",
    icon: <Share2 className="w-5 h-5" />,
    color: "var(--terracotta)",
    origin: { civilization: "Mesopotamia", civilizationId: "mesopotamia", date: "2000 BCE", year: -2000, note: "Earliest mechanical water-lifting device" },
    path: [
      { civilization: "Egypt", civilizationId: "ancient-egypt", date: "1700 BCE", year: -1700, note: "Adopted for Nile irrigation, still used today" },
      { civilization: "India", civilizationId: "ancient-india", date: "1000 BCE", year: -1000, note: "Used across Indo-Gangetic plains" },
      { civilization: "China", civilizationId: "ancient-china", date: "600 BCE", year: -600, note: "Known as jiegao, used in rice farming" },
    ],
  },
  {
    id: "dam",
    name: "Dam Technology",
    description: "Barriers constructed across waterways to control flow, create reservoirs, prevent flooding, and store water for irrigation and drinking.",
    icon: <Map className="w-5 h-5" />,
    color: "#8B5CF6",
    origin: { civilization: "Jordan / Mesopotamia", civilizationId: "mesopotamia", date: "3000 BCE", year: -3000, note: "Jawa Dam—oldest known dam structure" },
    path: [
      { civilization: "Egypt", civilizationId: "ancient-egypt", date: "2600 BCE", year: -2600, note: "Sadd el-Kafara, first large-scale dam" },
      { civilization: "Rome", civilizationId: "ancient-rome", date: "200 BCE", year: -200, note: "Concrete arch dams and reservoir systems" },
      { civilization: "Persia", civilizationId: "ancient-persia", date: "500 CE", year: 500, note: "Band-e Amir and arch dam innovations" },
      { civilization: "Sri Lanka", civilizationId: "sri-lanka", date: "300 BCE", year: -300, note: "Massive tank cascade systems" },
      { civilization: "Islamic World", date: "800 CE", year: 800, note: "Advanced dam engineering across caliphate" },
    ],
  },
  {
    id: "canal",
    name: "Canal Systems",
    description: "Artificial waterways for irrigation, transportation, and drainage, ranging from simple ditches to massive navigable channels linking rivers and seas.",
    icon: <Globe className="w-5 h-5" />,
    color: "#06B6D4",
    origin: { civilization: "Mesopotamia", civilizationId: "mesopotamia", date: "4000 BCE", year: -4000, note: "First irrigation canals between Tigris and Euphrates" },
    path: [
      { civilization: "Egypt", civilizationId: "ancient-egypt", date: "3100 BCE", year: -3100, note: "Nile canal networks and Joseph's Canal" },
      { civilization: "China", civilizationId: "ancient-china", date: "600 BCE", year: -600, note: "Dujiangyan and Grand Canal systems" },
      { civilization: "Khmer Empire", civilizationId: "khmer-empire", date: "800 CE", year: 800, note: "Barays and canal networks at Angkor" },
      { civilization: "Rome", civilizationId: "ancient-rome", date: "300 BCE", year: -300, note: "Navigation and irrigation canals" },
      { civilization: "Netherlands", civilizationId: "dutch-netherlands", date: "1200 CE", year: 1200, note: "Polder and drainage canal systems" },
    ],
  },
  {
    id: "sanitation",
    name: "Sanitation / Sewers",
    description: "Systems for collecting, transporting, and disposing of human waste and stormwater, from household drains to city-wide underground sewer networks.",
    icon: <Droplets className="w-5 h-5" />,
    color: "#10B981",
    origin: { civilization: "Indus Valley", civilizationId: "indus-valley", date: "2500 BCE", year: -2500, note: "First covered drains and flush toilets" },
    path: [
      { civilization: "Crete (Minoan)", civilizationId: "minoan-crete", date: "1900 BCE", year: -1900, note: "Palace drainage and terracotta pipes" },
      { civilization: "Rome", civilizationId: "ancient-rome", date: "600 BCE", year: -600, note: "Cloaca Maxima and city-wide sewers" },
      { civilization: "Islamic World", date: "800 CE", year: 800, note: "Hammam bathhouses and water recycling" },
      { civilization: "Modern Europe", date: "1800 CE", year: 1800, note: "London sewer system after Great Stink" },
    ],
  },
  {
    id: "water-clock",
    name: "Water Clocks",
    description: "Timekeeping devices that measure time by the regulated flow of water into or out of a vessel, from simple outflow clocks to elaborate automata.",
    icon: <Clock className="w-5 h-5" />,
    color: "#F59E0B",
    origin: { civilization: "Egypt", civilizationId: "ancient-egypt", date: "1500 BCE", year: -1500, note: "Clepsydra—first accurate timekeeping device" },
    path: [
      { civilization: "Babylon", civilizationId: "mesopotamia", date: "1400 BCE", year: -1400, note: "Refined for astronomical observations" },
      { civilization: "Greece", civilizationId: "ancient-greece", date: "400 BCE", year: -400, note: "Ctesibius improved with float regulators" },
      { civilization: "Rome", civilizationId: "ancient-rome", date: "200 BCE", year: -200, note: "Used in courts and public timekeeping" },
      { civilization: "China", civilizationId: "ancient-china", date: "200 BCE", year: -200, note: "Su Song's astronomical clock tower" },
      { civilization: "Islamic World", date: "800 CE", year: 800, note: "Al-Jazari's elaborate automata clocks" },
    ],
  },
];

export default function DiffusionMap({ onClose, onSelectCivilization }: DiffusionMapProps) {
  const [selectedTechId, setSelectedTechId] = useState<string>("all");
  const [showDropdown, setShowDropdown] = useState(false);

  const selectedTech = TECHNOLOGIES.find(t => t.id === selectedTechId);
  const displayTechnologies = selectedTechId === "all" ? TECHNOLOGIES : selectedTech ? [selectedTech] : [];

  const getTotalStats = (tech: TechnologyDiffusion) => {
    const allStops = [tech.origin, ...tech.path];
    const years = Math.abs(allStops[allStops.length - 1].year - tech.origin.year);
    return { civilizations: allStops.length, years };
  };

  const getTimelinePosition = (year: number, minYear: number, maxYear: number) => {
    const range = maxYear - minYear;
    if (range === 0) return 50;
    return ((year - minYear) / range) * 100;
  };

  const handleCivClick = (civId?: string) => {
    if (civId && onSelectCivilization) {
      onSelectCivilization(civId);
    }
  };

  const renderDiffusionFlow = (tech: TechnologyDiffusion) => {
    const allStops = [tech.origin, ...tech.path];
    const stats = getTotalStats(tech);
    const minYear = Math.min(...allStops.map(s => s.year));
    const maxYear = Math.max(...allStops.map(s => s.year));

    return (
      <div key={tech.id} className="mb-8 last:mb-0">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
            style={{ backgroundColor: tech.color }}
          >
            {tech.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-[var(--parchment)] text-lg">{tech.name}</h3>
            <p className="text-[var(--parchment)]/60 text-xs">{tech.description}</p>
          </div>
          <Badge
            className="text-xs"
            style={{ backgroundColor: `${tech.color}20`, color: tech.color, border: `1px solid ${tech.color}40` }}
          >
            {stats.civilizations} civilizations • {stats.years.toLocaleString()} years
          </Badge>
        </div>

        <div className="relative pl-6">
          {allStops.map((stop, index) => {
            const isOrigin = index === 0;
            const eraColor = getEraColor(stop.year);

            return (
              <div key={index} className="relative mb-1 last:mb-0">
                {index < allStops.length - 1 && (
                  <div
                    className="absolute left-[11px] top-[28px] w-[2px] h-[calc(100%)]"
                    style={{
                      backgroundImage: `repeating-linear-gradient(to bottom, ${tech.color} 0px, ${tech.color} 4px, transparent 4px, transparent 8px)`,
                    }}
                  />
                )}

                <div className="flex items-start gap-3">
                  <div
                    className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 ${
                      stop.civilizationId ? "cursor-pointer hover:scale-125 transition-transform" : ""
                    }`}
                    style={{
                      backgroundColor: isOrigin ? tech.color : `${eraColor}`,
                      border: isOrigin ? "2px solid var(--gold)" : "2px solid var(--deep-ocean)",
                      boxShadow: isOrigin ? `0 0 8px ${tech.color}60` : "none",
                    }}
                    onClick={() => handleCivClick(stop.civilizationId)}
                  >
                    {isOrigin ? (
                      <Globe className="w-3 h-3 text-white" />
                    ) : (
                      <ArrowRight className="w-3 h-3 text-white" />
                    )}
                  </div>

                  <Card
                    className={`flex-1 water-card mb-2 ${
                      stop.civilizationId
                        ? "cursor-pointer hover:border-[var(--gold)] transition-all"
                        : ""
                    }`}
                    onClick={() => handleCivClick(stop.civilizationId)}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="font-heading text-[var(--parchment)] text-sm">
                            {stop.civilization}
                          </span>
                          {isOrigin && (
                            <Badge className="text-[10px] bg-[var(--gold)]/20 text-[var(--gold)] border border-[var(--gold)]/40">
                              Origin
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Badge
                            className="text-[10px]"
                            style={{
                              backgroundColor: `${eraColor}20`,
                              color: eraColor,
                              border: `1px solid ${eraColor}40`,
                            }}
                          >
                            {getEraLabel(stop.year)}
                          </Badge>
                          <span className="text-xs text-[var(--aqua)] font-mono">
                            {formatYear(stop.year)}
                          </span>
                        </div>
                      </div>
                      <p className="text-[var(--parchment)]/60 text-xs">{stop.note}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 px-6">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-3 h-3 text-[var(--aqua)]" />
            <span className="text-[10px] text-[var(--parchment)]/60 uppercase tracking-wider">
              Diffusion Timeline
            </span>
          </div>
          <div className="relative h-8 rounded-full bg-[var(--deep-ocean)]/50 border border-[var(--aqua)]/20 overflow-hidden">
            {allStops.map((stop, index) => {
              const pos = getTimelinePosition(stop.year, minYear, maxYear);
              return (
                <div
                  key={index}
                  className="absolute top-1/2 -translate-y-1/2 group"
                  style={{ left: `${Math.max(2, Math.min(pos, 98))}%` }}
                >
                  <div
                    className="w-3 h-3 rounded-full -translate-x-1/2 cursor-pointer hover:scale-150 transition-transform"
                    style={{
                      backgroundColor: index === 0 ? tech.color : getEraColor(stop.year),
                      border: "1px solid var(--deep-ocean)",
                    }}
                    onClick={() => handleCivClick(stop.civilizationId)}
                  />
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden group-hover:block z-20 whitespace-nowrap">
                    <div className="bg-[var(--deep-ocean)] border border-[var(--aqua)]/30 rounded px-2 py-1 text-[10px] text-[var(--parchment)]">
                      {stop.civilization} ({formatYear(stop.year)})
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="absolute left-1 top-1/2 -translate-y-1/2 text-[8px] text-[var(--parchment)]/40">
              {formatYear(minYear)}
            </div>
            <div className="absolute right-1 top-1/2 -translate-y-1/2 text-[8px] text-[var(--parchment)]/40">
              {formatYear(maxYear)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="w-full max-w-4xl max-h-[90vh] water-card">
      <CardHeader className="border-b border-[var(--aqua)]/20">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-heading text-[var(--gold)] text-xl flex items-center gap-2">
              <Share2 className="w-5 h-5 text-[var(--aqua)]" />
              Technology Diffusion Map
            </CardTitle>
            <p className="text-[var(--parchment)]/70 text-sm mt-1">
              How water technologies spread across civilizations over millennia
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X size={18} />
          </Button>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              className="border-[var(--aqua)]/30 text-[var(--parchment)] hover:border-[var(--gold)] min-w-[220px] justify-between"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="flex items-center gap-2">
                {selectedTechId === "all" ? (
                  <>
                    <Globe className="w-4 h-4 text-[var(--aqua)]" />
                    View All Technologies
                  </>
                ) : (
                  <>
                    {selectedTech?.icon}
                    {selectedTech?.name}
                  </>
                )}
              </span>
              <ChevronDown size={14} className={`transition-transform ${showDropdown ? "rotate-180" : ""}`} />
            </Button>

            {showDropdown && (
              <div className="absolute top-full left-0 mt-1 w-[280px] z-50 bg-[var(--deep-ocean)] border border-[var(--aqua)]/30 rounded-lg shadow-xl overflow-hidden">
                <div
                  className={`px-3 py-2 text-sm cursor-pointer hover:bg-[var(--aqua)]/10 flex items-center gap-2 ${
                    selectedTechId === "all" ? "bg-[var(--aqua)]/20 text-[var(--gold)]" : "text-[var(--parchment)]"
                  }`}
                  onClick={() => { setSelectedTechId("all"); setShowDropdown(false); }}
                >
                  <Globe className="w-4 h-4" />
                  View All Technologies
                </div>
                {TECHNOLOGIES.map(tech => (
                  <div
                    key={tech.id}
                    className={`px-3 py-2 text-sm cursor-pointer hover:bg-[var(--aqua)]/10 flex items-center gap-2 ${
                      selectedTechId === tech.id ? "bg-[var(--aqua)]/20 text-[var(--gold)]" : "text-[var(--parchment)]"
                    }`}
                    onClick={() => { setSelectedTechId(tech.id); setShowDropdown(false); }}
                  >
                    <span style={{ color: tech.color }}>{tech.icon}</span>
                    {tech.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 ml-auto text-xs text-[var(--parchment)]/60">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--terracotta)" }} />
              <span>Ancient</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
              <span>Bronze/Iron Age</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--cerulean)" }} />
              <span>Classical</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--aqua)" }} />
              <span>Medieval+</span>
            </div>
          </div>
        </div>

        {selectedTechId === "all" && (
          <div className="flex items-center gap-2 mt-3 text-xs text-[var(--aqua)]">
            <Map className="w-3 h-3" />
            <span>
              Showing {TECHNOLOGIES.length} technologies •{" "}
              {TECHNOLOGIES.reduce((acc, t) => acc + t.path.length + 1, 0)} civilization adoptions tracked
            </span>
          </div>
        )}
      </CardHeader>

      <CardContent className="p-4">
        <ScrollArea className="h-[calc(90vh-220px)]">
          <div className="space-y-2">
            {displayTechnologies.map(tech => renderDiffusionFlow(tech))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
