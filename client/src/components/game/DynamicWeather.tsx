import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { 
  Cloud, CloudRain, CloudSnow, Sun, Wind, Thermometer, 
  Droplets, AlertTriangle, X, ChevronRight, Pause, Play
} from "lucide-react";

interface WeatherPattern {
  id: string;
  name: string;
  icon: "sun" | "rain" | "storm" | "drought" | "monsoon" | "snow" | "flood" | "fog";
  description: string;
  effects: string[];
  affectedRegions: string[];
  resourceModifier: { water: number; crops: number; risk: number };
  historicalExample: string;
  color: string;
}

const weatherPatterns: WeatherPattern[] = [
  {
    id: "clear",
    name: "Clear Skies",
    icon: "sun",
    description: "Stable weather with moderate temperatures. Ideal for construction and trade.",
    effects: ["Normal water availability", "Standard crop growth", "Safe for construction"],
    affectedRegions: ["Mediterranean", "Middle East"],
    resourceModifier: { water: 0, crops: 0, risk: 0 },
    historicalExample: "Mediterranean civilizations like Rome and Greece relied on predictable dry summers for construction seasons — building aqueducts, temples, and harbors.",
    color: "#FFD700"
  },
  {
    id: "monsoon",
    name: "Monsoon Season",
    icon: "monsoon",
    description: "Intense seasonal rains bringing massive water volumes. Critical for rice cultivation but dangerous flooding risk.",
    effects: ["+80% water availability", "+60% crop yield (rice)", "High flood risk", "River levels surge"],
    affectedRegions: ["South Asia", "Southeast Asia", "East Asia"],
    resourceModifier: { water: 80, crops: 60, risk: 70 },
    historicalExample: "The Khmer Empire built the West Baray (8km × 2.1km) specifically to capture monsoon water for dry-season rice irrigation. Without monsoon management, Angkor could not have sustained 1 million people.",
    color: "#1E90FF"
  },
  {
    id: "drought",
    name: "Severe Drought",
    icon: "drought",
    description: "Extended period of minimal rainfall. Water sources shrink, crops fail, and communities face existential crisis.",
    effects: ["-70% water availability", "-80% crop yield", "Wells and springs dry up", "Population migration"],
    affectedRegions: ["North Africa", "Middle East", "Central Asia"],
    resourceModifier: { water: -70, crops: -80, risk: 60 },
    historicalExample: "The collapse of the Old Kingdom of Egypt (~2200 BCE) coincided with decades of Nile flood failures. Civilizations with qanats (Persia) or cisterns (Nabataea) survived droughts that destroyed others.",
    color: "#CD853F"
  },
  {
    id: "flood",
    name: "River Flooding",
    icon: "flood",
    description: "Rivers overflow their banks, inundating farmland and settlements. Destructive but deposits fertile silt.",
    effects: ["+40% water (post-flood)", "Immediate crop destruction", "Fertile silt deposits", "Infrastructure damage"],
    affectedRegions: ["Mesopotamia", "Egypt", "China", "South Asia"],
    resourceModifier: { water: 40, crops: -30, risk: 80 },
    historicalExample: "Ancient Egypt depended on annual Nile floods to deposit rich silt. The Nilometer measured flood height — too low meant famine, too high meant destruction. Li Bing's Dujiangyan (256 BCE) solved China's catastrophic Min River flooding without a dam.",
    color: "#4169E1"
  },
  {
    id: "storm",
    name: "Severe Storm",
    icon: "storm",
    description: "Violent winds and heavy precipitation. Threatens harbors, ships, and exposed infrastructure.",
    effects: ["+30% short-term water", "Harbor damage risk", "Ship losses", "Aqueduct stress"],
    affectedRegions: ["Mediterranean", "Caribbean", "Pacific Islands"],
    resourceModifier: { water: 30, crops: -20, risk: 90 },
    historicalExample: "Phoenician harbor engineers built massive ashlar breakwaters (50-tonne blocks) to protect Tyre and Sidon from Mediterranean storms. The circular cothon harbor design shielded warships from wave damage.",
    color: "#708090"
  },
  {
    id: "snow",
    name: "Heavy Snowfall",
    icon: "snow",
    description: "Mountain snowpack builds, storing water for spring/summer melt. Critical for downstream irrigation.",
    effects: ["Snowpack water storage", "Spring melt surge coming", "Frozen canals", "Reduced immediate supply"],
    affectedRegions: ["Central Asia", "Andes", "Alps", "Himalayas"],
    resourceModifier: { water: -20, crops: -40, risk: 20 },
    historicalExample: "Incan terraces at Moray relied on snowmelt from the Andes. Persian qanats tapped mountain aquifers fed by snowmelt. The Zaghouan aqueduct to Carthage was fed by mountain springs replenished by winter snow.",
    color: "#B0C4DE"
  },
  {
    id: "fog",
    name: "Coastal Fog",
    icon: "fog",
    description: "Dense fog rolls in from the ocean. Reduces visibility but provides moisture in arid coastal regions.",
    effects: ["Fog water collection possible", "Reduced navigation", "Moisture for coastal plants", "Cool temperatures"],
    affectedRegions: ["Peru Coast", "Chile", "Morocco", "Namibia"],
    resourceModifier: { water: 15, crops: 10, risk: 10 },
    historicalExample: "The Atacama Desert in Chile receives almost no rain but gets dense fog (camanchaca). Modern fog nets — inspired by ancient observation — can collect 5-15 liters per square meter per day, sustaining entire communities.",
    color: "#A9A9A9"
  }
];

interface DynamicWeatherProps {
  onClose: () => void;
}

const WeatherIcon = ({ type, size = 24, className = "" }: { type: string; size?: number; className?: string }) => {
  switch (type) {
    case "sun": return <Sun size={size} className={className} />;
    case "rain": return <CloudRain size={size} className={className} />;
    case "storm": return <CloudRain size={size} className={className} />;
    case "drought": return <Thermometer size={size} className={className} />;
    case "monsoon": return <CloudRain size={size} className={className} />;
    case "snow": return <CloudSnow size={size} className={className} />;
    case "flood": return <Droplets size={size} className={className} />;
    case "fog": return <Cloud size={size} className={className} />;
    default: return <Sun size={size} className={className} />;
  }
};

export default function DynamicWeather({ onClose }: DynamicWeatherProps) {
  const [currentWeatherIndex, setCurrentWeatherIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);
  const [resources, setResources] = useState({ water: 100, crops: 100, population: 1000 });
  const [history, setHistory] = useState<{ weather: string; water: number; crops: number }[]>([]);

  const currentWeather = weatherPatterns[currentWeatherIndex];

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentWeatherIndex(prev => {
        const next = (prev + 1) % weatherPatterns.length;
        return next;
      });
      setCycleCount(prev => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  useEffect(() => {
    const mod = currentWeather.resourceModifier;
    setResources(prev => ({
      water: Math.max(0, Math.min(200, prev.water + mod.water * 0.3)),
      crops: Math.max(0, Math.min(200, prev.crops + mod.crops * 0.3)),
      population: Math.max(100, prev.population + Math.floor((mod.crops - mod.risk) * 0.5))
    }));
    setHistory(prev => [...prev.slice(-6), { 
      weather: currentWeather.name, 
      water: Math.round(resources.water), 
      crops: Math.round(resources.crops) 
    }]);
  }, [currentWeatherIndex]);

  const selectWeather = (index: number) => {
    setCurrentWeatherIndex(index);
    setIsAutoPlay(false);
  };

  const getBarColor = (value: number) => {
    if (value >= 120) return "bg-blue-400";
    if (value >= 80) return "bg-green-400";
    if (value >= 40) return "bg-yellow-400";
    return "bg-red-400";
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-start justify-center p-4 overflow-y-auto">
      <div className="max-w-4xl w-full my-8">
        <Card className="water-card border-[var(--aqua)]/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-heading text-2xl text-[var(--gold)] flex items-center gap-2">
                  <Cloud className="text-[var(--aqua)]" />
                  Dynamic Weather Patterns
                </h2>
                <p className="text-[var(--parchment)]/70 text-sm mt-1">
                  See how weather shaped ancient water engineering decisions
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="water-card text-[var(--parchment)] border-[var(--aqua)]/30"
                >
                  {isAutoPlay ? <Pause size={14} className="mr-1" /> : <Play size={14} className="mr-1" />}
                  {isAutoPlay ? "Pause" : "Auto-Cycle"}
                </Button>
                <Button variant="outline" size="sm" onClick={onClose} className="water-card text-[var(--parchment)] border-[var(--aqua)]/30">
                  <X size={16} />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {weatherPatterns.map((wp, index) => (
                <button
                  key={wp.id}
                  onClick={() => selectWeather(index)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${
                    currentWeatherIndex === index
                      ? 'border-[var(--gold)] bg-[var(--gold)]/20'
                      : 'border-[var(--aqua)]/20 bg-[var(--deep-ocean)]/50 hover:border-[var(--aqua)]/50'
                  }`}
                >
                  <WeatherIcon type={wp.icon} size={16} className={currentWeatherIndex === index ? "text-[var(--gold)]" : "text-[var(--parchment)]/60"} />
                  <span className={`text-sm ${currentWeatherIndex === index ? 'text-[var(--gold)]' : 'text-[var(--parchment)]/70'}`}>{wp.name}</span>
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="rounded-xl p-6 border border-[var(--aqua)]/20 mb-4" style={{ background: `linear-gradient(135deg, ${currentWeather.color}15, ${currentWeather.color}05)` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: `${currentWeather.color}30` }}>
                      <WeatherIcon type={currentWeather.icon} size={32} className="text-[var(--parchment)]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-[var(--gold)]">{currentWeather.name}</h3>
                      <p className="text-[var(--parchment)]/60 text-xs">Affects: {currentWeather.affectedRegions.join(", ")}</p>
                    </div>
                  </div>
                  <p className="text-[var(--parchment)]/80 text-sm mb-4">{currentWeather.description}</p>

                  <div className="space-y-2">
                    {currentWeather.effects.map((effect, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <ChevronRight size={14} className="text-[var(--aqua)]" />
                        <span className="text-[var(--parchment)]/80">{effect}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-4 border border-[var(--gold)]/20 bg-[var(--gold)]/5">
                  <h4 className="text-[var(--gold)] font-medium text-sm mb-2 flex items-center gap-2">
                    <AlertTriangle size={14} />
                    Historical Example
                  </h4>
                  <p className="text-[var(--parchment)]/80 text-sm leading-relaxed">{currentWeather.historicalExample}</p>
                </div>
              </div>

              <div>
                <h4 className="text-[var(--aqua)] font-medium text-sm mb-3">Resource Impact Dashboard</h4>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[var(--parchment)]/70 text-sm flex items-center gap-1">
                        <Droplets size={14} className="text-blue-400" /> Water Supply
                      </span>
                      <span className="text-[var(--parchment)] text-sm font-mono">{Math.round(resources.water)}%</span>
                    </div>
                    <div className="h-4 bg-[var(--deep-ocean)] rounded-full overflow-hidden border border-[var(--aqua)]/20">
                      <div className={`h-full ${getBarColor(resources.water)} transition-all duration-1000 rounded-full`} style={{ width: `${Math.min(100, resources.water / 2 * 100 / 100)}%` }} />
                    </div>
                    <span className="text-xs text-[var(--parchment)]/50">
                      {currentWeather.resourceModifier.water > 0 ? `+${currentWeather.resourceModifier.water}%` : currentWeather.resourceModifier.water === 0 ? "No change" : `${currentWeather.resourceModifier.water}%`}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[var(--parchment)]/70 text-sm flex items-center gap-1">
                        <Sun size={14} className="text-green-400" /> Crop Yield
                      </span>
                      <span className="text-[var(--parchment)] text-sm font-mono">{Math.round(resources.crops)}%</span>
                    </div>
                    <div className="h-4 bg-[var(--deep-ocean)] rounded-full overflow-hidden border border-[var(--aqua)]/20">
                      <div className={`h-full ${getBarColor(resources.crops)} transition-all duration-1000 rounded-full`} style={{ width: `${Math.min(100, resources.crops / 2 * 100 / 100)}%` }} />
                    </div>
                    <span className="text-xs text-[var(--parchment)]/50">
                      {currentWeather.resourceModifier.crops > 0 ? `+${currentWeather.resourceModifier.crops}%` : currentWeather.resourceModifier.crops === 0 ? "No change" : `${currentWeather.resourceModifier.crops}%`}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[var(--parchment)]/70 text-sm flex items-center gap-1">
                        <AlertTriangle size={14} className="text-red-400" /> Disaster Risk
                      </span>
                      <span className="text-[var(--parchment)] text-sm font-mono">{currentWeather.resourceModifier.risk}%</span>
                    </div>
                    <div className="h-4 bg-[var(--deep-ocean)] rounded-full overflow-hidden border border-[var(--aqua)]/20">
                      <div className={`h-full bg-red-400 transition-all duration-1000 rounded-full`} style={{ width: `${currentWeather.resourceModifier.risk}%` }} />
                    </div>
                  </div>

                  <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-3 border border-[var(--aqua)]/20">
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--parchment)]/70 text-sm">Population</span>
                      <span className="text-[var(--gold)] font-heading text-lg">{resources.population.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {history.length > 1 && (
                  <div>
                    <h4 className="text-[var(--aqua)] font-medium text-sm mb-2">Weather History</h4>
                    <div className="space-y-1">
                      {history.slice(-5).map((h, i) => (
                        <div key={i} className="flex items-center justify-between text-xs py-1 px-2 rounded bg-[var(--deep-ocean)]/40">
                          <span className="text-[var(--parchment)]/60">{h.weather}</span>
                          <div className="flex gap-3">
                            <span className="text-blue-400">W: {h.water}%</span>
                            <span className="text-green-400">C: {h.crops}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {isAutoPlay && (
                  <div className="mt-4 p-3 rounded-lg bg-[var(--cerulean)]/10 border border-[var(--cerulean)]/20">
                    <p className="text-[var(--aqua)] text-xs flex items-center gap-1">
                      <Wind size={12} className="animate-spin" />
                      Weather cycling... Season {cycleCount + 1}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--aqua)]/10">
              <p className="text-[var(--parchment)]/50 text-xs text-center">
                Ancient civilizations that mastered weather adaptation — building reservoirs for droughts, levees for floods, and qanats for deserts — thrived for millennia. Those that didn't collapsed within generations.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function WeatherOverlay({ weatherId }: { weatherId: string }) {
  if (weatherId === "clear" || !weatherId) return null;

  const particles = Array.from({ length: weatherId === "monsoon" || weatherId === "storm" ? 80 : weatherId === "rain" ? 40 : weatherId === "snow" ? 30 : 0 }, (_, i) => i);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {(weatherId === "rain" || weatherId === "monsoon" || weatherId === "storm") && particles.map(i => (
        <div
          key={i}
          className="absolute w-0.5 bg-blue-300/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
            height: weatherId === "storm" ? "20px" : "12px",
            animation: `rainfall ${0.5 + Math.random() * 0.5}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      {weatherId === "snow" && particles.map(i => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-5%`,
            animation: `snowfall ${2 + Math.random() * 3}s linear infinite`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}
      {weatherId === "fog" && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-400/20 via-gray-300/10 to-transparent" />
      )}
      {weatherId === "drought" && (
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/15 to-yellow-900/10" />
      )}
      {weatherId === "storm" && (
        <div className="absolute inset-0 bg-gray-800/20" />
      )}
    </div>
  );
}