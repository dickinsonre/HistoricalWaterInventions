import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface WaterClockSimulatorProps {
  onClose?: () => void;
}

export default function WaterClockSimulator({ onClose }: WaterClockSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [orificeSize, setOrificeSize] = useState(5);
  const [vesselHeight, setVesselHeight] = useState(30);
  const [waterLevel, setWaterLevel] = useState(100);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [drainTime, setDrainTime] = useState(12);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const flowCoefficient = 0.6;
  const gravity = 9.81;
  const currentHeight = (waterLevel / 100) * vesselHeight;
  const velocity = flowCoefficient * Math.sqrt(2 * gravity * currentHeight / 100);
  const flowRate = Math.PI * Math.pow(orificeSize / 1000, 2) * velocity * 1000 * 3600;

  useEffect(() => {
    if (!isPlaying || waterLevel <= 0) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      const timeMultiplier = 12 / drainTime;
      
      setWaterLevel(prev => {
        const drainRate = Math.sqrt(prev / 100) * 2 * timeMultiplier;
        const newLevel = Math.max(0, prev - drainRate * delta);
        return newLevel;
      });
      
      setElapsedTime(prev => prev + delta * timeMultiplier);

      if (waterLevel > 0) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, waterLevel, drainTime]);

  const reset = () => {
    setIsPlaying(false);
    setWaterLevel(100);
    setElapsedTime(0);
    lastTimeRef.current = 0;
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hrs}h ${mins}m ${secs}s`;
  };

  const hourMarkers = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const vesselTop = 40;
  const vesselBottom = 200;
  const vesselLeft = 150;
  const vesselRight = 250;
  const vesselHeightPx = vesselBottom - vesselTop;

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Water Clock (Clepsydra)</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Ancient Egypt ~1500 BCE</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            <defs>
              <linearGradient id="vesselGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B4513" />
                <stop offset="50%" stopColor="#CD853F" />
                <stop offset="100%" stopColor="#8B4513" />
              </linearGradient>
              <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4169E1" />
                <stop offset="100%" stopColor="#000080" />
              </linearGradient>
            </defs>
            
            <path 
              d={`M ${vesselLeft - 10} ${vesselTop - 10} 
                  L ${vesselLeft - 20} ${vesselTop} 
                  L ${vesselLeft - 30} ${vesselBottom} 
                  L ${vesselLeft - 20} ${vesselBottom + 20}
                  L ${vesselRight + 20} ${vesselBottom + 20}
                  L ${vesselRight + 30} ${vesselBottom}
                  L ${vesselRight + 20} ${vesselTop}
                  L ${vesselRight + 10} ${vesselTop - 10}
                  Z`}
              fill="url(#vesselGradient)"
              stroke="#654321"
              strokeWidth="3"
            />
            
            {hourMarkers.map((hour, i) => {
              const y = vesselTop + 10 + (i / 12) * (vesselHeightPx - 20);
              return (
                <g key={hour}>
                  <line 
                    x1={vesselLeft - 25} 
                    y1={y} 
                    x2={vesselLeft - 15} 
                    y2={y} 
                    stroke="#FFD700" 
                    strokeWidth="2"
                  />
                  <text 
                    x={vesselLeft - 40} 
                    y={y + 4} 
                    fill="#FFD700" 
                    fontSize="10"
                    textAnchor="middle"
                  >
                    {hour}
                  </text>
                </g>
              );
            })}
            
            <rect 
              x={vesselLeft - 15}
              y={vesselTop + 5 + vesselHeightPx * (1 - waterLevel / 100)}
              width={vesselRight - vesselLeft + 30}
              height={vesselHeightPx * (waterLevel / 100) - 10}
              fill="url(#waterGradient)"
              opacity="0.8"
              rx="5"
            />
            
            <circle 
              cx={(vesselLeft + vesselRight) / 2}
              cy={vesselBottom + 10}
              r={orificeSize}
              fill="#333"
              stroke="#FFD700"
              strokeWidth="1"
            />
            
            {isPlaying && waterLevel > 0 && (
              <g>
                {[...Array(5)].map((_, i) => (
                  <circle 
                    key={i}
                    cx={(vesselLeft + vesselRight) / 2 + (Math.random() - 0.5) * 10}
                    cy={vesselBottom + 20 + i * 8}
                    r={2}
                    fill="#4169E1"
                    opacity={0.7}
                  >
                    <animate 
                      attributeName="cy" 
                      values={`${vesselBottom + 20};${vesselBottom + 60}`} 
                      dur={`${0.3 + i * 0.1}s`} 
                      repeatCount="indefinite" 
                    />
                    <animate 
                      attributeName="opacity" 
                      values="0.8;0" 
                      dur={`${0.3 + i * 0.1}s`} 
                      repeatCount="indefinite" 
                    />
                  </circle>
                ))}
              </g>
            )}
            
            <rect 
              x="280" 
              y="30" 
              width="100" 
              height="80" 
              fill="#1a1a2e"
              stroke="#FFD700"
              strokeWidth="2"
              rx="5"
            />
            <text x="330" y="55" textAnchor="middle" fill="#FFD700" fontSize="12" fontWeight="bold">
              ELAPSED
            </text>
            <text x="330" y="85" textAnchor="middle" fill="#00FF00" fontSize="16" fontFamily="monospace">
              {formatTime(elapsedTime)}
            </text>
            
            <text x="200" y="240" textAnchor="middle" fill="#FFD700" fontSize="12">
              Water Level: {waterLevel.toFixed(1)}%
            </text>
          </svg>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Orifice Size: {orificeSize} mm</label>
                <input 
                  type="range" 
                  min="2" 
                  max="10" 
                  value={orificeSize}
                  onChange={(e) => setOrificeSize(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Vessel Height: {vesselHeight} cm</label>
                <input 
                  type="range" 
                  min="20" 
                  max="50" 
                  value={vesselHeight}
                  onChange={(e) => setVesselHeight(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Drain Time: {drainTime} hours</label>
                <input 
                  type="range" 
                  min="1" 
                  max="24" 
                  value={drainTime}
                  onChange={(e) => setDrainTime(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Physics</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between">
                <span>🕐 Simulated Time:</span>
                <span className="font-mono">{formatTime(elapsedTime)}</span>
              </div>
              <div className="flex justify-between">
                <span>💧 Current Height:</span>
                <span className="font-mono">{currentHeight.toFixed(1)} cm</span>
              </div>
              <div className="flex justify-between">
                <span>⚡ Flow Velocity:</span>
                <span className="font-mono">{(velocity * 100).toFixed(2)} cm/s</span>
              </div>
              <div className="flex justify-between">
                <span>📊 Remaining:</span>
                <span className="font-mono">{waterLevel.toFixed(1)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                The Clepsydra uses Torricelli's law: water drains faster when the vessel is fuller. Ancient Egyptians marked hour lines accounting for this non-linear drainage. Used for timing speeches in Greek courts!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-4 justify-center">
        <Button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-[var(--cerulean)] hover:bg-[var(--cerulean)]/80"
          disabled={waterLevel <= 0}
        >
          {isPlaying ? <><Pause size={16} className="mr-1" /> Pause</> : <><Play size={16} className="mr-1" /> Play</>}
        </Button>
        <Button 
          onClick={reset}
          variant="outline"
          className="border-[var(--aqua)]/50 text-[var(--parchment)]"
        >
          <RotateCcw size={16} className="mr-1" /> Reset
        </Button>
      </div>
    </div>
  );
}
