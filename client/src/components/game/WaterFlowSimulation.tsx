import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Play, Pause, RotateCcw, Droplets, Gauge, ArrowDown, Info } from "lucide-react";

interface WaterParticle {
  id: number;
  x: number;
  y: number;
  speed: number;
  size: number;
}

type SimulationType = "aqueduct" | "qanat" | "siphon" | "reservoir";

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
  }
};

export default function WaterFlowSimulation() {
  const [activeSimulation, setActiveSimulation] = useState<SimulationType>("aqueduct");
  const [isPlaying, setIsPlaying] = useState(true);
  const [particles, setParticles] = useState<WaterParticle[]>([]);
  const [flowMultiplier, setFlowMultiplier] = useState(1);
  const [gradientMultiplier, setGradientMultiplier] = useState(1);

  const baseSim = simulations[activeSimulation];
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
