import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface DamReservoirSimulatorProps {
  onClose?: () => void;
}

export default function DamReservoirSimulator({ onClose }: DamReservoirSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [damHeight, setDamHeight] = useState(30);
  const [spillwayWidth, setSpillwayWidth] = useState(10);
  const [inflowRate, setInflowRate] = useState(80);
  const [gateOpening, setGateOpening] = useState(50);
  const [waterHead, setWaterHead] = useState(15);
  const [reservoirVolume, setReservoirVolume] = useState(5000);
  const [time, setTime] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const g = 9.81;
  const outflowRate = (gateOpening / 100) * spillwayWidth * Math.sqrt(2 * g * Math.max(waterHead, 0));
  const netFlow = inflowRate - outflowRate;
  const floodRisk = waterHead >= damHeight * 0.9 ? "CRITICAL" : waterHead >= damHeight * 0.7 ? "HIGH" : waterHead >= damHeight * 0.5 ? "MODERATE" : "LOW";

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setTime(prev => prev + delta);

      setWaterHead(prev => {
        const reservoirArea = 1000;
        const dh = (inflowRate - (gateOpening / 100) * spillwayWidth * Math.sqrt(2 * g * Math.max(prev, 0))) / reservoirArea * delta * 10;
        const newHead = Math.max(0, Math.min(damHeight, prev + dh));
        return newHead;
      });

      setReservoirVolume(prev => {
        const change = netFlow * delta * 5;
        return Math.max(0, prev + change);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isPlaying, inflowRate, gateOpening, spillwayWidth, damHeight]);

  const reset = () => {
    setIsPlaying(false);
    setWaterHead(15);
    setReservoirVolume(5000);
    setTime(0);
    lastTimeRef.current = 0;
  };

  const waterLevelY = 200 - (waterHead / damHeight) * 140;
  const damX = 220;
  const spillwayY = 200 - (damHeight * 0.8 / damHeight) * 140;

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Dam & Reservoir Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Ancient Yemen ~750 BCE</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#87CEEB] to-[#4682B4] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            <rect x="0" y="200" width="400" height="50" fill="#8B4513" />

            <rect x="0" y={waterLevelY} width={damX} height={200 - waterLevelY} fill="#4169E1" opacity="0.7" />

            {isPlaying && [...Array(15)].map((_, i) => (
              <circle
                key={`wave-${i}`}
                cx={10 + (i * 14)}
                cy={waterLevelY + Math.sin(time * 2 + i) * 3}
                r={2}
                fill="#00BFFF"
                opacity={0.8}
              />
            ))}

            {isPlaying && [...Array(8)].map((_, i) => (
              <circle
                key={`inflow-${i}`}
                cx={5 + ((time * 30 + i * 12) % 40)}
                cy={waterLevelY + 5 + i * 3}
                r={2.5}
                fill="#1E90FF"
                opacity={0.9}
              />
            ))}

            <polygon
              points={`${damX},60 ${damX + 25},60 ${damX + 35},200 ${damX - 10},200`}
              fill="#808080"
              stroke="#606060"
              strokeWidth="2"
            />

            <rect x={damX + 5} y={spillwayY} width={15} height={8} fill="#FFD700" opacity={gateOpening / 100} />

            {gateOpening > 0 && isPlaying && [...Array(10)].map((_, i) => (
              <circle
                key={`outflow-${i}`}
                cx={damX + 35 + ((time * 40 + i * 15) % 80)}
                cy={spillwayY + 10 + Math.sin(time * 3 + i) * 8 + i * 2}
                r={2}
                fill="#00BFFF"
                opacity={0.7}
              />
            ))}

            {gateOpening > 0 && isPlaying && (
              <path
                d={`M${damX + 35},${spillwayY + 5} Q${damX + 60},${spillwayY + 15} ${damX + 80},${190}`}
                fill="none"
                stroke="#4169E1"
                strokeWidth="3"
                opacity="0.5"
              />
            )}

            <rect x={damX + 80} y="190" width="120" height="10" fill="#4169E1" opacity="0.5" />

            <text x={damX + 12} y="55" textAnchor="middle" fill="#333" fontSize="9" fontWeight="bold">DAM</text>
            <text x="20" y="25" fill="#333" fontSize="10" fontWeight="bold">
              Water Level: {waterHead.toFixed(1)}m
            </text>

            <line x1={damX - 20} y1={waterLevelY} x2={damX - 20} y2="200" stroke="#FF4444" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x={damX - 35} y={(waterLevelY + 200) / 2} textAnchor="middle" fill="#FF4444" fontSize="8" transform={`rotate(-90, ${damX - 35}, ${(waterLevelY + 200) / 2})`}>
              {waterHead.toFixed(1)}m
            </text>

            {floodRisk === "CRITICAL" && (
              <text x="200" y="20" textAnchor="middle" fill="#FF0000" fontSize="14" fontWeight="bold">
                ⚠️ FLOOD RISK!
              </text>
            )}
          </svg>

          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            Net Flow: {netFlow.toFixed(1)} m³/s
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Dam Height: {damHeight} m</label>
                <input type="range" min="5" max="50" value={damHeight}
                  onChange={(e) => setDamHeight(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Spillway Width: {spillwayWidth} m</label>
                <input type="range" min="2" max="20" value={spillwayWidth}
                  onChange={(e) => setSpillwayWidth(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Inflow Rate: {inflowRate} m³/s</label>
                <input type="range" min="10" max="200" value={inflowRate}
                  onChange={(e) => setInflowRate(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Gate Opening: {gateOpening}%</label>
                <input type="range" min="0" max="100" value={gateOpening}
                  onChange={(e) => setGateOpening(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Results</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between">
                <span>🌊 Water Level:</span>
                <span className="font-mono">{waterHead.toFixed(1)} m</span>
              </div>
              <div className="flex justify-between">
                <span>💧 Outflow Rate:</span>
                <span className="font-mono">{outflowRate.toFixed(1)} m³/s</span>
              </div>
              <div className="flex justify-between">
                <span>📦 Volume:</span>
                <span className="font-mono">{reservoirVolume.toFixed(0)} m³</span>
              </div>
              <div className="flex justify-between">
                <span>⚠️ Flood Risk:</span>
                <span className={`font-mono ${floodRisk === 'CRITICAL' ? 'text-red-400' : floodRisk === 'HIGH' ? 'text-orange-400' : floodRisk === 'MODERATE' ? 'text-yellow-400' : 'text-green-400'}`}>
                  {floodRisk}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                The Marib Dam in Yemen (750 BCE) irrigated 9,600 hectares. Modern dams like Three Gorges store 39.3 billion m³.
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