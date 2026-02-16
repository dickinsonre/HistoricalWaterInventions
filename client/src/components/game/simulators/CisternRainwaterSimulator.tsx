import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface CisternRainwaterSimulatorProps {
  onClose?: () => void;
}

export default function CisternRainwaterSimulator({ onClose }: CisternRainwaterSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [roofArea, setRoofArea] = useState(100);
  const [rainfallIntensity, setRainfallIntensity] = useState(30);
  const [cisternCapacity, setCisternCapacity] = useState(10000);
  const [householdUsage, setHouseholdUsage] = useState(200);
  const [cisternLevel, setCisternLevel] = useState(3000);
  const [time, setTime] = useState(0);
  const [raindrops, setRaindrops] = useState<Array<{x: number; y: number; speed: number}>>([]);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const runoffCoeff = 0.85;
  const collectionRate = roofArea * (rainfallIntensity / 1000) * runoffCoeff;
  const collectionLPerHr = collectionRate * 1000;
  const usagePerHr = householdUsage / 24;
  const netPerHr = collectionLPerHr - usagePerHr;
  const fillPercent = (cisternLevel / cisternCapacity) * 100;
  const daysOfSupply = cisternLevel / householdUsage;
  const isOverflowing = cisternLevel >= cisternCapacity;

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    if (raindrops.length === 0) {
      const initial: Array<{x: number; y: number; speed: number}> = [];
      for (let i = 0; i < 40; i++) {
        initial.push({
          x: 20 + Math.random() * 200,
          y: Math.random() * 80,
          speed: 100 + Math.random() * 100
        });
      }
      setRaindrops(initial);
    }

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setTime(prev => prev + delta);

      setRaindrops(prev => prev.map(drop => {
        let newY = drop.y + drop.speed * delta * (rainfallIntensity / 30);
        if (newY > 85) {
          newY = -10;
          return { ...drop, y: newY, x: 20 + Math.random() * 200 };
        }
        return { ...drop, y: newY };
      }));

      setCisternLevel(prev => {
        const change = netPerHr * delta * 20;
        return Math.max(0, Math.min(cisternCapacity, prev + change));
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isPlaying, rainfallIntensity, netPerHr, cisternCapacity]);

  const reset = () => {
    setIsPlaying(false);
    setCisternLevel(3000);
    setTime(0);
    setRaindrops([]);
    lastTimeRef.current = 0;
  };

  const cisternFillHeight = (fillPercent / 100) * 60;

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Cistern & Rainwater Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Ancient Carthage ~300 BCE</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#708090] to-[#4682B4] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            {isPlaying && raindrops.map((drop, i) => (
              <line
                key={i}
                x1={drop.x}
                y1={drop.y}
                x2={drop.x - 1}
                y2={drop.y + 5}
                stroke="#87CEFA"
                strokeWidth="1.5"
                opacity="0.7"
              />
            ))}

            <polygon points="50,85 200,85 225,60 25,60" fill="#8B4513" stroke="#654321" strokeWidth="2" />
            <line x1="50" y1="85" x2="200" y2="85" stroke="#654321" strokeWidth="2" />

            <rect x="80" y="85" width="10" height="15" fill="#808080" />
            <rect x="160" y="85" width="10" height="15" fill="#808080" />

            <line x1="50" y1="85" x2="50" y2="95" stroke="#808080" strokeWidth="3" />
            <line x1="50" y1="95" x2="70" y2="95" stroke="#808080" strokeWidth="3" />
            <line x1="200" y1="85" x2="200" y2="95" stroke="#808080" strokeWidth="3" />
            <line x1="200" y1="95" x2="180" y2="95" stroke="#808080" strokeWidth="3" />

            <line x1="125" y1="95" x2="125" y2="140" stroke="#808080" strokeWidth="4" />

            {isPlaying && rainfallIntensity > 0 && (
              <>
                <circle cx="125" cy={(time * 40) % 45 + 100} r="2" fill="#4169E1" opacity="0.8" />
                <circle cx="125" cy={((time * 40 + 15) % 45) + 100} r="2" fill="#4169E1" opacity="0.8" />
                <circle cx="125" cy={((time * 40 + 30) % 45) + 100} r="2" fill="#4169E1" opacity="0.8" />
              </>
            )}

            <rect x="60" y="150" width="130" height="80" fill="#654321" stroke="#4a3520" strokeWidth="2" rx="3" />
            <rect x="65" y="155" width="120" height="70" fill="#333" rx="2" />

            <rect
              x="65"
              y={155 + 70 - cisternFillHeight}
              width="120"
              height={cisternFillHeight}
              fill="#4169E1"
              opacity="0.8"
              rx="2"
            />

            {isPlaying && cisternFillHeight > 5 && [...Array(6)].map((_, i) => (
              <circle
                key={`bubble-${i}`}
                cx={80 + i * 18}
                cy={155 + 70 - cisternFillHeight + Math.sin(time * 2 + i) * 5 + 10}
                r={1.5}
                fill="#87CEEB"
                opacity="0.6"
              />
            ))}

            {isOverflowing && isPlaying && (
              <>
                <line x1="190" y1="155" x2="210" y2="160" stroke="#4169E1" strokeWidth="3" />
                <circle cx="215" cy="163" r="3" fill="#4169E1" opacity="0.7" />
                <text x="220" y="158" fill="#FF4444" fontSize="9" fontWeight="bold">OVERFLOW!</text>
              </>
            )}

            <rect x="250" y="100" width="120" height="100" fill="#DEB887" stroke="#8B4513" strokeWidth="2" />
            <rect x="295" y="160" width="30" height="40" fill="#8B4513" />
            <rect x="265" y="120" width="25" height="20" fill="#87CEEB" stroke="#666" strokeWidth="1" />
            <rect x="330" y="120" width="25" height="20" fill="#87CEEB" stroke="#666" strokeWidth="1" />
            <polygon points="245,100 310,75 375,100" fill="#A0522D" />

            <line x1="190" y1="200" x2="250" y2="180" stroke="#808080" strokeWidth="2" strokeDasharray="4,2" />

            <rect x="0" y="230" width="400" height="20" fill="#8B4513" />

            <text x="125" y="148" textAnchor="middle" fill="#FFD700" fontSize="9" fontWeight="bold">
              {fillPercent.toFixed(0)}%
            </text>
          </svg>

          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            Cistern: {cisternLevel.toFixed(0)} L / {cisternCapacity} L
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Roof Area: {roofArea} m²</label>
                <input type="range" min="20" max="200" value={roofArea}
                  onChange={(e) => setRoofArea(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Rainfall: {rainfallIntensity} mm/hr</label>
                <input type="range" min="5" max="100" value={rainfallIntensity}
                  onChange={(e) => setRainfallIntensity(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Cistern: {(cisternCapacity / 1000).toFixed(0)}k L</label>
                <input type="range" min="1000" max="20000" step="1000" value={cisternCapacity}
                  onChange={(e) => setCisternCapacity(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Usage: {householdUsage} L/day</label>
                <input type="range" min="50" max="500" value={householdUsage}
                  onChange={(e) => setHouseholdUsage(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Results</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between">
                <span>💧 Collection:</span>
                <span className="font-mono">{collectionLPerHr.toFixed(0)} L/hr</span>
              </div>
              <div className="flex justify-between">
                <span>📅 Days Supply:</span>
                <span className="font-mono">{daysOfSupply.toFixed(1)} days</span>
              </div>
              <div className="flex justify-between">
                <span>📊 Fill Level:</span>
                <span className="font-mono">{fillPercent.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>🚰 Overflow:</span>
                <span className={`font-mono ${isOverflowing ? 'text-red-400' : 'text-green-400'}`}>
                  {isOverflowing ? 'YES' : 'NO'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                Carthage had the ancient world's largest cistern network — enough to supply 50,000 people. Byzantine Constantinople had 100+ underground cisterns.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-4 justify-center">
        <Button onClick={() => setIsPlaying(!isPlaying)} className="bg-[var(--cerulean)] hover:bg-[var(--cerulean)]/80">
          {isPlaying ? <><Pause size={16} className="mr-1" /> Pause</> : <><Play size={16} className="mr-1" /> Play</>}
        </Button>
        <Button onClick={reset} variant="outline" className="border-[var(--aqua)]/50 text-[var(--parchment)]">
          <RotateCcw size={16} className="mr-1" /> Reset
        </Button>
      </div>
    </div>
  );
}