import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface FogCollectorSimulatorProps {
  onClose?: () => void;
}

export default function FogCollectorSimulator({ onClose }: FogCollectorSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [netArea, setNetArea] = useState(40);
  const [meshDensity, setMeshDensity] = useState(50);
  const [windSpeed, setWindSpeed] = useState(5);
  const [fogDensity, setFogDensity] = useState(50);
  const [animTime, setAnimTime] = useState(0);
  const [totalCollected, setTotalCollected] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const fogWaterContent = fogDensity < 33 ? 0.1 : fogDensity < 66 ? 0.3 : 0.6;
  const optimalDensity = 50;
  const densityFactor = 1 - Math.abs(meshDensity - optimalDensity) / 50 * 0.6;
  const collectionEfficiency = densityFactor * 100;
  const dailyCollection = fogWaterContent * windSpeed * netArea * (collectionEfficiency / 100) * 24 * 0.1;
  const annualYield = dailyCollection * 365 / 1000;
  const householdsServed = Math.floor(dailyCollection / 50);

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }
    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;
      setAnimTime(prev => prev + delta);
      setTotalCollected(prev => prev + dailyCollection * delta / 86400);
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isPlaying, dailyCollection]);

  const reset = () => {
    setIsPlaying(false);
    setAnimTime(0);
    setTotalCollected(0);
    lastTimeRef.current = 0;
  };

  const fogParticleCount = fogDensity < 33 ? 8 : fogDensity < 66 ? 15 : 25;
  const fogSpeed = windSpeed * 3;

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Fog Collector Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Atmospheric Water Harvesting</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#B0BEC5] to-[#78909C] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            <rect x="0" y="0" width="400" height="250" fill="#90A4AE" opacity="0.3" />
            <rect x="0" y="200" width="400" height="50" fill="#795548" />
            <rect x="0" y="195" width="400" height="8" fill="#8D6E63" />

            <rect x="185" y="60" width="6" height="140" fill="#5D4037" />
            <rect x="210" y="60" width="6" height="140" fill="#5D4037" />
            <line x1="185" y1="55" x2="215" y2="55" stroke="#5D4037" strokeWidth="4" />

            <rect x="188" y="65" width="25" height="125" fill="#B0BEC5" opacity="0.3" />
            {[...Array(Math.floor(meshDensity / 5))].map((_, i) => (
              <line
                key={`mesh-h-${i}`}
                x1="188"
                y1={68 + i * (120 / (meshDensity / 5))}
                x2="213"
                y2={68 + i * (120 / (meshDensity / 5))}
                stroke="#78909C"
                strokeWidth="0.8"
                opacity="0.8"
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <line
                key={`mesh-v-${i}`}
                x1={190 + i * 5}
                y1="65"
                x2={190 + i * 5}
                y2="190"
                stroke="#78909C"
                strokeWidth="0.8"
                opacity="0.8"
              />
            ))}

            {isPlaying && [...Array(fogParticleCount)].map((_, i) => {
              const baseX = ((animTime * fogSpeed * 8 + i * (400 / fogParticleCount)) % 200);
              const y = 70 + (i % 8) * 15 + Math.sin(animTime * 0.5 + i) * 8;
              return (
                <g key={`fog-${i}`}>
                  <ellipse
                    cx={baseX}
                    cy={y}
                    rx={8 + Math.sin(animTime + i) * 2}
                    ry={4}
                    fill="white"
                    opacity={0.3 + Math.sin(animTime * 0.8 + i) * 0.1}
                  />
                  <circle
                    cx={baseX - 3}
                    cy={y - 2}
                    r={3}
                    fill="white"
                    opacity={0.2}
                  />
                </g>
              );
            })}

            {isPlaying && [...Array(6)].map((_, i) => {
              const dropY = 130 + ((animTime * 25 + i * 12) % 70);
              return (
                <g key={`drop-${i}`}>
                  <circle
                    cx={192 + (i % 3) * 8}
                    cy={dropY}
                    r={2}
                    fill="#42A5F5"
                    opacity={0.8}
                  />
                  <path
                    d={`M${192 + (i % 3) * 8} ${dropY - 3} Q${193 + (i % 3) * 8} ${dropY - 5} ${192 + (i % 3) * 8} ${dropY - 2}`}
                    fill="#42A5F5"
                    opacity={0.6}
                  />
                </g>
              );
            })}

            <rect x="175" y="195" width="50" height="8" fill="#455A64" stroke="#37474F" strokeWidth="1" rx="1" />
            <text x="200" y="212" textAnchor="middle" fill="#B0BEC5" fontSize="7">COLLECTION TROUGH</text>

            {isPlaying && (
              <rect x="177" y="196" width="46" height={Math.min(5, totalCollected * 0.5)} fill="#42A5F5" opacity="0.7" rx="1" />
            )}

            <rect x="235" y="195" width="40" height="30" fill="#455A64" stroke="#37474F" strokeWidth="1" rx="3" />
            <text x="255" y="208" textAnchor="middle" fill="#90CAF9" fontSize="7">STORAGE</text>
            <text x="255" y="218" textAnchor="middle" fill="#64B5F6" fontSize="8">{dailyCollection.toFixed(0)}L</text>
            <line x1="225" y1="199" x2="235" y2="199" stroke="#42A5F5" strokeWidth="1.5" />

            {[...Array(3)].map((_, i) => (
              <g key={`arrow-${i}`}>
                <line
                  x1={30 + i * 50}
                  y1={130}
                  x2={50 + i * 50}
                  y2={130}
                  stroke="white"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
                <polygon
                  points={`${50 + i * 50},${127} ${55 + i * 50},${130} ${50 + i * 50},${133}`}
                  fill="white"
                  opacity="0.5"
                />
              </g>
            ))}
            <text x="60" y="145" fill="white" opacity="0.6" fontSize="8">Wind {windSpeed} m/s →</text>

            <text x="20" y="25" fill="#37474F" fontSize="10">
              {fogDensity < 33 ? '🌫️ Light Fog' : fogDensity < 66 ? '🌫️ Moderate Fog' : '🌫️ Dense Fog'}
            </text>
          </svg>

          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            Collected: {totalCollected.toFixed(2)} L
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Net Area: {netArea} m²</label>
                <input type="range" min="1" max="100" value={netArea}
                  onChange={(e) => setNetArea(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Mesh Density: {meshDensity}%</label>
                <input type="range" min="30" max="70" value={meshDensity}
                  onChange={(e) => setMeshDensity(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Wind Speed: {windSpeed} m/s</label>
                <input type="range" min="1" max="15" value={windSpeed}
                  onChange={(e) => setWindSpeed(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">
                  Fog: {fogDensity < 33 ? 'Light' : fogDensity < 66 ? 'Moderate' : 'Dense'}
                </label>
                <input type="range" min="0" max="100" value={fogDensity}
                  onChange={(e) => setFogDensity(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Results</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between">
                <span>💧 Water Collected:</span>
                <span className="font-mono">{dailyCollection.toFixed(1)} L/day</span>
              </div>
              <div className="flex justify-between">
                <span>📊 Collection Efficiency:</span>
                <span className="font-mono">{collectionEfficiency.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>📅 Annual Yield:</span>
                <span className="font-mono">{annualYield.toFixed(1)} m³/yr</span>
              </div>
              <div className="flex justify-between">
                <span>🏠 Households Served:</span>
                <span className="font-mono">{householdsServed}</span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                Chile's Atacama Desert fog collectors gather 10,000+ liters per day. Morocco's Mount Boutmezguida project provides water to 400 villagers using fog nets inspired by the Darkling beetle.
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
