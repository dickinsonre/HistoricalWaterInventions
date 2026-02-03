import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Play, Pause, RotateCcw, Droplets, Gauge, ArrowDown, Info, Calculator, Eye, EyeOff } from "lucide-react";

interface WaterParticle {
  id: number;
  x: number;
  y: number;
  speed: number;
  size: number;
}

type SimulationType = "aqueduct" | "qanat" | "siphon" | "reservoir" | "screw" | "noria" | "cloaca" | "spillway" | "subak" | "shafts" | "cascade" | "stepwell" | "dujiangyan" | "aztec-dike" | "chain-pump" | "shaduf" | "angkor-baray" | "venetian-cistern" | "inca-fountain" | "dutch-polder" | "hohokam" | "khettara";

const simulations: Record<SimulationType, {
  title: string;
  description: string;
  gradient: number;
  flowRate: number;
  pathPoints: { x: number; y: number }[];
}> = {
  aqueduct: {
    title: "Roman Aqueduct",
    description: "Gravity-fed water channel with precise 0.5% gradient carrying water from mountain springs to cities.",
    gradient: 0.5,
    flowRate: 1.2,
    pathPoints: [
      { x: 10, y: 20 }, { x: 25, y: 25 }, { x: 40, y: 30 },
      { x: 55, y: 35 }, { x: 70, y: 40 }, { x: 85, y: 45 }, { x: 95, y: 48 }
    ]
  },
  qanat: {
    title: "Persian Qanat",
    description: "Underground tunnel tapping mountain aquifer, gently sloping to deliver water to desert oasis.",
    gradient: 0.3,
    flowRate: 0.8,
    pathPoints: [
      { x: 10, y: 25 }, { x: 20, y: 50 }, { x: 30, y: 52 },
      { x: 50, y: 55 }, { x: 70, y: 58 }, { x: 85, y: 60 }, { x: 95, y: 62 }
    ]
  },
  siphon: {
    title: "Inverted Siphon",
    description: "Pressurized pipe crossing valleys—water descends, builds pressure, then rises on the other side.",
    gradient: 2.0,
    flowRate: 1.5,
    pathPoints: [
      { x: 10, y: 25 }, { x: 25, y: 30 }, { x: 40, y: 60 },
      { x: 55, y: 70 }, { x: 70, y: 55 }, { x: 85, y: 35 }, { x: 95, y: 30 }
    ]
  },
  reservoir: {
    title: "Ancient Reservoir",
    description: "Water storage system collecting seasonal rainfall, releasing controlled flow during dry periods.",
    gradient: 0.8,
    flowRate: 1.0,
    pathPoints: [
      { x: 10, y: 20 }, { x: 30, y: 25 }, { x: 35, y: 40 },
      { x: 40, y: 50 }, { x: 45, y: 50 }, { x: 60, y: 55 }, { x: 95, y: 65 }
    ]
  },
  screw: {
    title: "Archimedes Screw",
    description: "Helical pump attributed to Archimedes (287-212 BCE). Still used today for pumping water, grain, and wastewater due to gentle handling and self-priming capability.",
    gradient: 1.5,
    flowRate: 1.3,
    pathPoints: [
      { x: 10, y: 65 }, { x: 25, y: 55 }, { x: 40, y: 45 },
      { x: 55, y: 35 }, { x: 70, y: 28 }, { x: 85, y: 22 }, { x: 95, y: 18 }
    ]
  },
  noria: {
    title: "Noria Wheel",
    description: "Water-powered lifting wheel using river current. Syrian city of Hama still operates 2000-year-old norias on the Orontes River. Lifted water up to 20m without any external power.",
    gradient: 3.0,
    flowRate: 0.9,
    pathPoints: [
      { x: 10, y: 70 }, { x: 20, y: 55 }, { x: 30, y: 35 },
      { x: 40, y: 20 }, { x: 50, y: 15 }, { x: 70, y: 18 }, { x: 95, y: 22 }
    ]
  },
  cloaca: {
    title: "Cloaca Maxima",
    description: "One of the oldest sewer systems in the world, dating to 600 BCE. The name means 'Greatest Sewer'. Sections remain in use today after 2,600 years in Rome.",
    gradient: 0.3,
    flowRate: 1.4,
    pathPoints: [
      { x: 10, y: 25 }, { x: 25, y: 28 }, { x: 40, y: 32 },
      { x: 55, y: 38 }, { x: 70, y: 45 }, { x: 85, y: 52 }, { x: 95, y: 60 }
    ]
  },
  spillway: {
    title: "Stepped Spillway",
    description: "Energy-dissipating spillway design prevents erosion at dam bases. Ancient stepped spillways at Marib Dam (Yemen, 750 BCE) show remarkable engineering sophistication.",
    gradient: 4.0,
    flowRate: 1.8,
    pathPoints: [
      { x: 10, y: 15 }, { x: 20, y: 22 }, { x: 30, y: 30 },
      { x: 40, y: 38 }, { x: 50, y: 46 }, { x: 60, y: 54 }, { x: 70, y: 62 }, { x: 80, y: 68 }, { x: 95, y: 72 }
    ]
  },
  subak: {
    title: "Subak Irrigation",
    description: "UNESCO World Heritage Balinese water temple system. Coordinates planting schedules and water sharing among thousands of farmers without central authority since 9th century CE.",
    gradient: 1.2,
    flowRate: 0.7,
    pathPoints: [
      { x: 10, y: 15 }, { x: 25, y: 25 }, { x: 35, y: 32 },
      { x: 50, y: 40 }, { x: 65, y: 50 }, { x: 80, y: 58 }, { x: 95, y: 65 }
    ]
  },
  shafts: {
    title: "Qanat Shafts",
    description: "Vertical access and ventilation shafts spaced 20-50m apart allowed construction and maintenance of underground qanats. Spoil mounds around each shaft are visible for kilometers.",
    gradient: 0.4,
    flowRate: 0.6,
    pathPoints: [
      { x: 10, y: 55 }, { x: 25, y: 45 }, { x: 35, y: 50 },
      { x: 50, y: 42 }, { x: 65, y: 48 }, { x: 80, y: 40 }, { x: 95, y: 55 }
    ]
  },
  cascade: {
    title: "Tank Cascade",
    description: "Ancient Sri Lanka built over 30,000 interconnected tanks. The cascade maximizes water use—runoff from one tank becomes supply for the next. Biso Kotuwa valve pits controlled releases.",
    gradient: 2.5,
    flowRate: 1.1,
    pathPoints: [
      { x: 10, y: 12 }, { x: 20, y: 18 }, { x: 25, y: 25 },
      { x: 35, y: 32 }, { x: 45, y: 40 }, { x: 55, y: 48 }, { x: 65, y: 55 }, { x: 80, y: 62 }, { x: 95, y: 70 }
    ]
  },
  stepwell: {
    title: "Indian Stepwell",
    description: "Elaborate stepped wells (vav/baoli) of India provided year-round water access. Descending steps follow the water table, often with ornate pavilions for rest and worship.",
    gradient: 5.0,
    flowRate: 0.5,
    pathPoints: [
      { x: 10, y: 10 }, { x: 20, y: 20 }, { x: 30, y: 32 },
      { x: 40, y: 42 }, { x: 50, y: 52 }, { x: 60, y: 60 }, { x: 70, y: 68 }, { x: 80, y: 72 }, { x: 90, y: 72 }
    ]
  },
  dujiangyan: {
    title: "Dujiangyan Fish Mouth",
    description: "Ancient China's 2,270-year-old irrigation system (256 BCE). The Fish Mouth divides the Min River: 60% outer channel for flood discharge, 40% inner channel for irrigation. Still waters 5.3 million hectares today.",
    gradient: 1.8,
    flowRate: 2.0,
    pathPoints: [
      { x: 5, y: 25 }, { x: 20, y: 30 }, { x: 35, y: 28 },
      { x: 45, y: 35 }, { x: 55, y: 42 }, { x: 65, y: 38 }, { x: 75, y: 45 }, { x: 90, y: 55 }
    ]
  },
  "aztec-dike": {
    title: "Aztec Nezahualcóyotl Dike",
    description: "16km stone dike (1449 CE) separating fresh western from saline eastern Lake Texcoco. Protected Tenochtitlan's chinampas and drinking water. Sluice gates managed water levels for 100,000+ residents.",
    gradient: 0.2,
    flowRate: 0.6,
    pathPoints: [
      { x: 5, y: 40 }, { x: 20, y: 42 }, { x: 35, y: 40 },
      { x: 50, y: 38 }, { x: 65, y: 42 }, { x: 80, y: 40 }, { x: 95, y: 38 }
    ]
  },
  "chain-pump": {
    title: "Chinese Chain Pump",
    description: "Dragon backbone water-lift (龙骨水车) from Han Dynasty (200 CE). Continuous chain of wooden pallets lifts water 3-5m. Human, ox, or water-powered versions produced 45-65,000 liters/day.",
    gradient: 4.5,
    flowRate: 1.2,
    pathPoints: [
      { x: 10, y: 70 }, { x: 20, y: 62 }, { x: 30, y: 52 },
      { x: 40, y: 42 }, { x: 50, y: 32 }, { x: 60, y: 25 }, { x: 70, y: 20 }, { x: 85, y: 18 }, { x: 95, y: 20 }
    ]
  },
  shaduf: {
    title: "Egyptian Shaduf",
    description: "Counterweighted lever for lifting irrigation water (1500 BCE). A single operator lifts 2,500 liters/day up to 3m. Simple yet efficient—still used along the Nile today after 3,500 years.",
    gradient: 2.5,
    flowRate: 0.4,
    pathPoints: [
      { x: 10, y: 65 }, { x: 25, y: 50 }, { x: 35, y: 35 },
      { x: 45, y: 28 }, { x: 55, y: 32 }, { x: 70, y: 38 }, { x: 85, y: 45 }, { x: 95, y: 52 }
    ]
  },
  "angkor-baray": {
    title: "Angkor Baray Reservoir",
    description: "Khmer Empire's massive reservoirs (800-1200 CE). West Baray stored 40 million m³, supporting 750,000 people—world's largest pre-industrial city. Seasonal monsoon storage fed year-round rice irrigation.",
    gradient: 0.15,
    flowRate: 1.5,
    pathPoints: [
      { x: 5, y: 30 }, { x: 15, y: 32 }, { x: 30, y: 35 },
      { x: 45, y: 38 }, { x: 60, y: 42 }, { x: 75, y: 48 }, { x: 90, y: 55 }
    ]
  },
  "venetian-cistern": {
    title: "Venetian Cistern",
    description: "Venice built 6,000+ underground cisterns (800 CE onwards). Sloped campo pavements collected rain, sand-filtered through clay-lined chambers. Self-sufficient freshwater despite salt lagoon location.",
    gradient: 0.8,
    flowRate: 0.3,
    pathPoints: [
      { x: 10, y: 15 }, { x: 20, y: 25 }, { x: 30, y: 38 },
      { x: 45, y: 48 }, { x: 55, y: 52 }, { x: 65, y: 52 }, { x: 80, y: 55 }, { x: 95, y: 58 }
    ]
  },
  "inca-fountain": {
    title: "Inca Fountain Cascade",
    description: "Machu Picchu's 16 fountains (1450 CE) fed by 749m stone-lined canal. Each fountain's carved orifice regulated flow—royal fountain first (25 L/min), common people last (10 L/min). 90% water delivery efficiency.",
    gradient: 2.4,
    flowRate: 0.8,
    pathPoints: [
      { x: 5, y: 12 }, { x: 15, y: 18 }, { x: 25, y: 26 },
      { x: 35, y: 34 }, { x: 45, y: 42 }, { x: 55, y: 50 }, { x: 65, y: 56 }, { x: 75, y: 62 }, { x: 85, y: 66 }, { x: 95, y: 70 }
    ]
  },
  "dutch-polder": {
    title: "Dutch Polder System",
    description: "Reclaimed land protected by dikes and drained by windmills (1200 CE onwards). Ring canals at multiple levels pump water uphill to sea level. Netherlands reclaimed 17% of its land from the sea.",
    gradient: 0.5,
    flowRate: 1.0,
    pathPoints: [
      { x: 5, y: 65 }, { x: 15, y: 58 }, { x: 25, y: 50 },
      { x: 40, y: 42 }, { x: 55, y: 35 }, { x: 70, y: 28 }, { x: 85, y: 22 }, { x: 95, y: 18 }
    ]
  },
  hohokam: {
    title: "Hohokam Canal System",
    description: "Pre-Columbian Arizona canals (300-1450 CE) stretched 800+ km. Hand-dug earthen channels with drop structures and headgates irrigated 40,000+ hectares of desert. Largest ancient canal system in North America.",
    gradient: 0.4,
    flowRate: 1.1,
    pathPoints: [
      { x: 5, y: 22 }, { x: 20, y: 28 }, { x: 35, y: 35 },
      { x: 50, y: 42 }, { x: 65, y: 48 }, { x: 80, y: 55 }, { x: 95, y: 62 }
    ]
  },
  khettara: {
    title: "Moroccan Khettara",
    description: "North African qanat variant (800 CE) tapping Atlas Mountain aquifers. Underground galleries up to 15km long with vertical shafts every 10-20m. Tafilalet oasis supported by 400+ khettaras for over 1,000 years.",
    gradient: 0.25,
    flowRate: 0.7,
    pathPoints: [
      { x: 5, y: 28 }, { x: 15, y: 45 }, { x: 25, y: 48 },
      { x: 40, y: 52 }, { x: 55, y: 55 }, { x: 70, y: 58 }, { x: 85, y: 60 }, { x: 95, y: 62 }
    ]
  }
};

export default function WaterFlowSimulation() {
  const [activeSimulation, setActiveSimulation] = useState<SimulationType>("aqueduct");
  const [isPlaying, setIsPlaying] = useState(true);
  const [particles, setParticles] = useState<WaterParticle[]>([]);
  const [flowMultiplier, setFlowMultiplier] = useState(1);
  const [gradientMultiplier, setGradientMultiplier] = useState(1);
  const [showPhysics, setShowPhysics] = useState(false);

  const baseSim = simulations[activeSimulation];

  const calculatePhysics = useCallback(() => {
    const gradient = baseSim.gradient * gradientMultiplier / 100;
    const baseFlowRate = baseSim.flowRate * flowMultiplier;
    const channelWidth = 1.5;
    const channelDepth = 0.8;
    const area = channelWidth * channelDepth;
    const wetPerimeter = channelWidth + 2 * channelDepth;
    const hydraulicRadius = area / wetPerimeter;
    const manningsN = 0.015;
    const velocity = (1 / manningsN) * Math.pow(hydraulicRadius, 2/3) * Math.pow(gradient, 0.5);
    const discharge = velocity * area * baseFlowRate;
    const froudeNumber = velocity / Math.sqrt(9.81 * channelDepth);
    const reynoldsNumber = (velocity * hydraulicRadius * 1000) / 0.001;
    
    return {
      velocity: velocity.toFixed(2),
      discharge: (discharge * 1000).toFixed(1),
      froudeNumber: froudeNumber.toFixed(3),
      reynoldsNumber: (reynoldsNumber / 1000).toFixed(0),
      flowRegime: froudeNumber < 1 ? "Subcritical" : froudeNumber > 1 ? "Supercritical" : "Critical",
      hydraulicRadius: hydraulicRadius.toFixed(3)
    };
  }, [baseSim.gradient, baseSim.flowRate, gradientMultiplier, flowMultiplier]);
  const sim = {
    ...baseSim,
    gradient: baseSim.gradient * gradientMultiplier,
    pathPoints: baseSim.pathPoints.map((p, i) => {
      const baseY = baseSim.pathPoints[0].y;
      const adjustedY = baseY + (p.y - baseY) * gradientMultiplier;
      return {
        x: p.x,
        y: Math.min(Math.max(adjustedY, 5), 75)
      };
    })
  };

  const interpolatePath = useCallback((progress: number) => {
    const points = sim.pathPoints;
    const totalSegments = points.length - 1;
    const segmentProgress = progress * totalSegments;
    const segmentIndex = Math.min(Math.floor(segmentProgress), totalSegments - 1);
    const localProgress = segmentProgress - segmentIndex;

    const p1 = points[segmentIndex];
    const p2 = points[segmentIndex + 1];

    return {
      x: p1.x + (p2.x - p1.x) * localProgress,
      y: p1.y + (p2.y - p1.y) * localProgress
    };
  }, [sim.pathPoints]);

  useEffect(() => {
    setParticles([]);
  }, [activeSimulation]);

  useEffect(() => {
    if (!isPlaying) return;

    const spawnInterval = setInterval(() => {
      setParticles(prev => {
        const particlesToAdd = Math.ceil(flowMultiplier * 2);
        const newParticles: WaterParticle[] = [];
        for (let i = 0; i < particlesToAdd; i++) {
          newParticles.push({
            id: Date.now() + Math.random() + i,
            x: i * 0.02,
            y: 0,
            speed: (0.004 + Math.random() * 0.003) * baseSim.flowRate * flowMultiplier * gradientMultiplier,
            size: 5 + Math.random() * 4
          });
        }
        return [...prev.slice(-80), ...newParticles];
      });
    }, 80 / flowMultiplier);

    return () => clearInterval(spawnInterval);
  }, [isPlaying, baseSim.flowRate, flowMultiplier, gradientMultiplier]);

  useEffect(() => {
    if (!isPlaying) return;

    const animationFrame = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => {
            const progress = Math.min(1, p.x + p.speed);
            const position = interpolatePath(progress);
            return { ...p, x: progress, y: position.y };
          })
          .filter(p => p.x < 1)
      );
    }, 16);

    return () => clearInterval(animationFrame);
  }, [isPlaying, interpolatePath]);

  const getParticlePosition = (particle: WaterParticle) => {
    const position = interpolatePath(particle.x);
    return { left: `${position.x}%`, top: `${position.y}%` };
  };

  return (
    <Card className="water-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Droplets className="text-[var(--aqua)]" size={24} />
            <h3 className="font-heading text-xl text-[var(--gold)]">Interactive Water Flow Simulation</h3>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setParticles([])}
              className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
            >
              <RotateCcw size={18} />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {(Object.keys(simulations) as SimulationType[]).map(type => (
            <Button
              key={type}
              variant={activeSimulation === type ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveSimulation(type)}
              className={activeSimulation === type 
                ? "bg-[var(--cerulean)] text-white" 
                : "border-[var(--cerulean)]/50 text-[var(--parchment)]"
              }
            >
              {simulations[type].title}
            </Button>
          ))}
        </div>

        <div className="relative bg-gradient-to-b from-[var(--deep-ocean)] to-[var(--river-blue)] rounded-lg h-48 overflow-hidden border border-[var(--aqua)]/30">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="channelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--terracotta)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="var(--terracotta)" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path
              d={`M ${sim.pathPoints.map(p => `${p.x},${p.y}`).join(' L ')}`}
              fill="none"
              stroke="url(#channelGradient)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d={`M ${sim.pathPoints.map(p => `${p.x},${p.y}`).join(' L ')}`}
              fill="none"
              stroke="var(--aqua)"
              strokeWidth="2"
              strokeOpacity="0.3"
              strokeLinecap="round"
            />
          </svg>

          {particles.map(particle => {
            const pos = getParticlePosition(particle);
            return (
              <div
                key={particle.id}
                className="absolute rounded-full bg-[var(--aqua)] animate-pulse"
                style={{
                  left: pos.left,
                  top: pos.top,
                  width: particle.size,
                  height: particle.size,
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 8px var(--aqua), 0 0 16px var(--cerulean)',
                  opacity: 0.9
                }}
              />
            );
          })}

          <div className="absolute top-2 left-2 text-xs text-[var(--parchment)]/70 flex items-center gap-1">
            <ArrowDown size={12} />
            Source
          </div>
          <div className="absolute bottom-2 right-2 text-xs text-[var(--parchment)]/70 flex items-center gap-1">
            Destination
            <ArrowDown size={12} className="rotate-[-90deg]" />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Gauge size={16} className="text-[var(--terracotta)]" />
              <span className="text-sm text-[var(--parchment)]/70">Flow Rate:</span>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.1"
                value={flowMultiplier}
                onChange={(e) => setFlowMultiplier(parseFloat(e.target.value))}
                className="w-24 accent-[var(--cerulean)]"
              />
              <span className="text-sm text-[var(--aqua)] w-12">{(flowMultiplier * 100).toFixed(0)}%</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowDown size={16} className="text-[var(--gold)]" />
              <span className="text-sm text-[var(--parchment)]/70">Gradient:</span>
              <input
                type="range"
                min="0.2"
                max="3"
                step="0.1"
                value={gradientMultiplier}
                onChange={(e) => setGradientMultiplier(parseFloat(e.target.value))}
                className="w-24 accent-[var(--gold)]"
              />
              <span className="text-sm text-[var(--gold)] w-12">{(baseSim.gradient * gradientMultiplier).toFixed(1)}%</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowPhysics(!showPhysics)}
            className={`${showPhysics ? 'bg-[var(--gold)]/20 border-[var(--gold)]' : 'border-[var(--aqua)]/30'} text-[var(--parchment)]`}
          >
            <Calculator size={14} className="mr-1" />
            {showPhysics ? 'Hide' : 'Show'} Physics
          </Button>
        </div>

        {showPhysics && (
          <div className="mt-4 p-4 bg-[var(--deep-ocean)]/80 rounded-lg border border-[var(--gold)]/40">
            <div className="flex items-center gap-2 mb-3">
              <Calculator size={18} className="text-[var(--gold)]" />
              <h4 className="font-heading text-sm text-[var(--gold)]">Real-Time Hydraulic Calculations</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/60 text-xs">Velocity (m/s)</p>
                <p className="text-[var(--aqua)] font-mono">{calculatePhysics().velocity}</p>
                <p className="text-[var(--parchment)]/40 text-xs mt-1">v = (1/n) × R^(2/3) × S^(1/2)</p>
              </div>
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/60 text-xs">Discharge (L/s)</p>
                <p className="text-[var(--aqua)] font-mono">{calculatePhysics().discharge}</p>
                <p className="text-[var(--parchment)]/40 text-xs mt-1">Q = v × A</p>
              </div>
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/60 text-xs">Froude Number</p>
                <p className="text-[var(--aqua)] font-mono">{calculatePhysics().froudeNumber}</p>
                <p className="text-[var(--parchment)]/40 text-xs mt-1">Fr = v / √(g×d)</p>
              </div>
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/60 text-xs">Reynolds (×10³)</p>
                <p className="text-[var(--aqua)] font-mono">{calculatePhysics().reynoldsNumber}</p>
                <p className="text-[var(--parchment)]/40 text-xs mt-1">Re = v×R×ρ/μ</p>
              </div>
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/60 text-xs">Flow Regime</p>
                <p className={`font-mono ${calculatePhysics().flowRegime === 'Subcritical' ? 'text-green-400' : calculatePhysics().flowRegime === 'Supercritical' ? 'text-red-400' : 'text-yellow-400'}`}>
                  {calculatePhysics().flowRegime}
                </p>
                <p className="text-[var(--parchment)]/40 text-xs mt-1">Fr {'<'} 1 or Fr {'>'} 1</p>
              </div>
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/60 text-xs">Hydraulic Radius (m)</p>
                <p className="text-[var(--aqua)] font-mono">{calculatePhysics().hydraulicRadius}</p>
                <p className="text-[var(--parchment)]/40 text-xs mt-1">R = A / P</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-[var(--parchment)]/50 italic">
              Manning's equation used for open channel flow. n = 0.015 (smooth stone channel)
            </p>
          </div>
        )}

        <div className="mt-4 p-3 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/20">
          <div className="flex items-start gap-2">
            <Info size={16} className="text-[var(--aqua)] mt-0.5 flex-shrink-0" />
            <p className="text-sm text-[var(--parchment)]/80">{sim.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
