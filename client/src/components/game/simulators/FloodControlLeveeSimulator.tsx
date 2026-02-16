import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface FloodControlLeveeSimulatorProps {
  onClose?: () => void;
}

export default function FloodControlLeveeSimulator({ onClose }: FloodControlLeveeSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [leveeHeight, setLeveeHeight] = useState(8);
  const [riverWidth, setRiverWidth] = useState(100);
  const [floodStage, setFloodStage] = useState(6);
  const [leveeMaterial, setLeveeMaterial] = useState<'earthen' | 'reinforced' | 'concrete'>('earthen');
  const [currentWaterLevel, setCurrentWaterLevel] = useState(2);
  const [time, setTime] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const rho = 1000;
  const g = 9.81;
  const hydrostaticPressure = 0.5 * rho * g * Math.pow(currentWaterLevel, 2) / 1000;
  const safetyFactor = leveeHeight / Math.max(currentWaterLevel, 0.1);
  const isOvertopped = currentWaterLevel > leveeHeight;
  const materialStrength = leveeMaterial === 'concrete' ? 1.0 : leveeMaterial === 'reinforced' ? 0.7 : 0.4;
  const seepageRisk = currentWaterLevel > leveeHeight * materialStrength
    ? "HIGH"
    : currentWaterLevel > leveeHeight * materialStrength * 0.6
    ? "MODERATE"
    : "LOW";
  const status = isOvertopped ? "OVERTOPPED" : safetyFactor > 2 ? "PROTECTED" : safetyFactor > 1.2 ? "AT RISK" : "CRITICAL";

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

      setCurrentWaterLevel(prev => {
        const targetLevel = floodStage;
        const riseRate = 0.5;
        if (prev < targetLevel) {
          return Math.min(prev + riseRate * delta, targetLevel);
        } else if (prev > targetLevel) {
          return Math.max(prev - riseRate * delta, targetLevel);
        }
        return prev;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isPlaying, floodStage]);

  const reset = () => {
    setIsPlaying(false);
    setCurrentWaterLevel(2);
    setTime(0);
    lastTimeRef.current = 0;
  };

  const maxH = 20;
  const groundY = 200;
  const leveePixelH = (leveeHeight / maxH) * 120;
  const waterPixelH = (currentWaterLevel / maxH) * 120;
  const leveeTopY = groundY - leveePixelH;
  const waterTopY = groundY - waterPixelH;

  const leftLeveeX = 100;
  const rightLeveeX = 300;
  const leveeBaseWidth = 40;

  const materialColor = leveeMaterial === 'concrete' ? '#808080' : leveeMaterial === 'reinforced' ? '#A0522D' : '#CD853F';

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Flood Control Levee Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Ancient Mesopotamia ~3000 BCE</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#87CEEB] to-[#4682B4] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            <rect x="0" y={groundY} width="400" height="50" fill="#8B4513" />

            <polygon
              points={`${leftLeveeX - leveeBaseWidth / 2},${groundY} ${leftLeveeX - 8},${leveeTopY} ${leftLeveeX + 8},${leveeTopY} ${leftLeveeX + leveeBaseWidth / 2},${groundY}`}
              fill={materialColor}
              stroke="#333"
              strokeWidth="1.5"
            />
            <polygon
              points={`${rightLeveeX - leveeBaseWidth / 2},${groundY} ${rightLeveeX - 8},${leveeTopY} ${rightLeveeX + 8},${leveeTopY} ${rightLeveeX + leveeBaseWidth / 2},${groundY}`}
              fill={materialColor}
              stroke="#333"
              strokeWidth="1.5"
            />

            {leveeMaterial === 'reinforced' && (
              <>
                {[0, 1, 2].map(i => (
                  <g key={`reinforce-${i}`}>
                    <line x1={leftLeveeX - 5} y1={leveeTopY + 10 + i * 15} x2={leftLeveeX + 5} y2={leveeTopY + 10 + i * 15} stroke="#666" strokeWidth="2" />
                    <line x1={rightLeveeX - 5} y1={leveeTopY + 10 + i * 15} x2={rightLeveeX + 5} y2={leveeTopY + 10 + i * 15} stroke="#666" strokeWidth="2" />
                  </g>
                ))}
              </>
            )}

            {leveeMaterial === 'concrete' && (
              <>
                {[0, 1, 2, 3].map(i => (
                  <g key={`concrete-${i}`}>
                    <rect x={leftLeveeX - 6} y={leveeTopY + 5 + i * 12} width="12" height="8" fill="none" stroke="#555" strokeWidth="0.5" />
                    <rect x={rightLeveeX - 6} y={leveeTopY + 5 + i * 12} width="12" height="8" fill="none" stroke="#555" strokeWidth="0.5" />
                  </g>
                ))}
              </>
            )}

            <rect
              x={leftLeveeX + leveeBaseWidth / 2}
              y={Math.max(waterTopY, leveeTopY - 10)}
              width={rightLeveeX - leftLeveeX - leveeBaseWidth}
              height={groundY - Math.max(waterTopY, leveeTopY - 10)}
              fill="#4169E1"
              opacity="0.7"
            />

            {isPlaying && [...Array(12)].map((_, i) => (
              <circle
                key={`wave-${i}`}
                cx={leftLeveeX + leveeBaseWidth / 2 + 10 + i * 14}
                cy={Math.max(waterTopY, leveeTopY - 10) + Math.sin(time * 3 + i) * 3}
                r={2}
                fill="#00BFFF"
                opacity={0.7}
              />
            ))}

            {isOvertopped && isPlaying && (
              <>
                <rect x={0} y={waterTopY} width={leftLeveeX - leveeBaseWidth / 2} height={groundY - waterTopY} fill="#4169E1" opacity="0.4" />
                <rect x={rightLeveeX + leveeBaseWidth / 2} y={waterTopY} width={400 - rightLeveeX - leveeBaseWidth / 2} height={groundY - waterTopY} fill="#4169E1" opacity="0.4" />

                {[...Array(6)].map((_, i) => (
                  <circle key={`flood-${i}`}
                    cx={30 + i * 15 + Math.sin(time * 2 + i) * 5}
                    cy={waterTopY + 5 + Math.sin(time * 3 + i) * 3}
                    r={2}
                    fill="#00BFFF"
                    opacity={0.6}
                  />
                ))}
              </>
            )}

            <rect x="10" y={groundY - 30} width="35" height="30" fill="#DEB887" stroke="#8B4513" strokeWidth="1" />
            <polygon points="8,{groundY - 30} 27,{groundY - 45} 47,{groundY - 30}" fill="#A0522D" />
            <polygon points={`8,${groundY - 30} 27,${groundY - 45} 47,${groundY - 30}`} fill="#A0522D" />
            <rect x="22" y={groundY - 18} width="10" height="18" fill="#8B4513" />

            <rect x="355" y={groundY - 28} width="30" height="28" fill="#DEB887" stroke="#8B4513" strokeWidth="1" />
            <polygon points={`353,${groundY - 28} 370,${groundY - 42} 387,${groundY - 28}`} fill="#A0522D" />

            <text x="27" y={groundY - 48} textAnchor="middle" fill="#333" fontSize="7">Settlement</text>
            <text x="370" y={groundY - 45} textAnchor="middle" fill="#333" fontSize="7">Settlement</text>

            <line x1={leftLeveeX + 25} y1={leveeTopY} x2={leftLeveeX + 25} y2={groundY} stroke="#FFD700" strokeWidth="1" strokeDasharray="3,2" />
            <text x={leftLeveeX + 30} y={(leveeTopY + groundY) / 2} fill="#FFD700" fontSize="7">
              {leveeHeight}m
            </text>

            <text x="200" y="20" textAnchor="middle" fill="#333" fontSize="11" fontWeight="bold">
              {status === "OVERTOPPED" ? "⚠️ LEVEE OVERTOPPED!" : status === "CRITICAL" ? "⚠️ CRITICAL!" : `Safety Factor: ${safetyFactor.toFixed(1)}`}
            </text>

            <text x="200" y="35" textAnchor="middle" fill="#555" fontSize="8">
              Water: {currentWaterLevel.toFixed(1)}m | Levee: {leveeHeight}m ({leveeMaterial})
            </text>
          </svg>

          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            Pressure: {hydrostaticPressure.toFixed(1)} kPa
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Levee Height: {leveeHeight} m</label>
                <input type="range" min="2" max="15" value={leveeHeight}
                  onChange={(e) => setLeveeHeight(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">River Width: {riverWidth} m</label>
                <input type="range" min="20" max="200" value={riverWidth}
                  onChange={(e) => setRiverWidth(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Flood Stage: {floodStage} m</label>
                <input type="range" min="1" max="20" value={floodStage}
                  onChange={(e) => setFloodStage(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Material: {leveeMaterial}</label>
                <select
                  value={leveeMaterial}
                  onChange={(e) => setLeveeMaterial(e.target.value as 'earthen' | 'reinforced' | 'concrete')}
                  className="w-full h-8 bg-[var(--deep-ocean)] border border-[var(--aqua)]/30 rounded text-[var(--parchment)] text-xs px-2"
                >
                  <option value="earthen">Earthen</option>
                  <option value="reinforced">Reinforced</option>
                  <option value="concrete">Concrete</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Results</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between">
                <span>🛡️ Safety Factor:</span>
                <span className={`font-mono ${safetyFactor > 2 ? 'text-green-400' : safetyFactor > 1.2 ? 'text-yellow-400' : 'text-red-400'}`}>
                  {safetyFactor.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>💪 Pressure:</span>
                <span className="font-mono">{hydrostaticPressure.toFixed(1)} kPa</span>
              </div>
              <div className="flex justify-between">
                <span>🏠 Status:</span>
                <span className={`font-mono ${status === 'PROTECTED' ? 'text-green-400' : status === 'AT RISK' ? 'text-yellow-400' : 'text-red-400'}`}>
                  {status}
                </span>
              </div>
              <div className="flex justify-between">
                <span>💧 Seepage:</span>
                <span className={`font-mono ${seepageRisk === 'LOW' ? 'text-green-400' : seepageRisk === 'MODERATE' ? 'text-yellow-400' : 'text-red-400'}`}>
                  {seepageRisk}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                Ancient Mesopotamians built the first levees along the Tigris and Euphrates 5,000 years ago. The modern Mississippi levee system stretches 5,600 km.
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