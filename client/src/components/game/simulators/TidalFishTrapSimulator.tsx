import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface TidalFishTrapSimulatorProps {
  onClose?: () => void;
}

export default function TidalFishTrapSimulator({ onClose }: TidalFishTrapSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [wallHeight, setWallHeight] = useState(1.5);
  const [enclosureArea, setEnclosureArea] = useState(1000);
  const [tidalRange, setTidalRange] = useState(4);
  const [wallPorosity, setWallPorosity] = useState(15);
  const [animTime, setAnimTime] = useState(0);
  const [totalCatch, setTotalCatch] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const tidePeriod = 12.42;
  const tideLevel = (Math.sin(animTime * Math.PI * 2 / tidePeriod) + 1) / 2;
  const waterHeight = tideLevel * tidalRange;
  const isRising = Math.cos(animTime * Math.PI * 2 / tidePeriod) > 0;
  const waterVolume = Math.min(waterHeight, wallHeight) * enclosureArea;
  const trappingEfficiency = Math.max(100 - wallPorosity * 2.5, 20);
  const fishDensity = 0.02;
  const fishInEnclosure = Math.floor(waterVolume * fishDensity * (trappingEfficiency / 100));
  const dailyCatch = fishInEnclosure * 0.3 * 2;
  const tidePhase = waterHeight > wallHeight * 0.8 ? 'High Tide' : waterHeight > wallHeight * 0.3 ? (isRising ? 'Rising' : 'Falling') : 'Low Tide';

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }
    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;
      setAnimTime(prev => prev + delta * 2);
      if (!isRising && waterHeight < wallHeight * 0.3) {
        setTotalCatch(prev => prev + dailyCatch * delta / 86400);
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isPlaying, isRising, waterHeight, wallHeight, dailyCatch]);

  const reset = () => {
    setIsPlaying(false);
    setAnimTime(0);
    setTotalCatch(0);
    lastTimeRef.current = 0;
  };

  const shoreY = 200;
  const waterFillRatio = Math.min(tideLevel * tidalRange / Math.max(wallHeight, 0.5), 1);
  const oceanLevel = 80 + (1 - tideLevel) * 80;

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Tidal Fish Trap Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Aboriginal Australia ~4600 BCE</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#87CEEB] to-[#4682B4] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            <rect x="0" y="0" width="400" height="250" fill="#87CEEB" />

            <rect x="0" y={oceanLevel} width="160" height={250 - oceanLevel} fill="#1565C0" opacity="0.6" />
            {[...Array(8)].map((_, i) => (
              <path
                key={`wave-${i}`}
                d={`M${i * 25},${oceanLevel} Q${i * 25 + 12},${oceanLevel - 3 + Math.sin(animTime * 2 + i) * 2} ${(i + 1) * 25},${oceanLevel}`}
                fill="none"
                stroke="#42A5F5"
                strokeWidth="1.5"
              />
            ))}

            <rect x="250" y={shoreY - 10} width="150" height="60" fill="#D2B48C" />
            <polygon points={`160,${shoreY + 50} 250,${shoreY - 10} 250,${shoreY + 50}`} fill="#C4A882" />
            <polygon points={`160,${shoreY + 10} 250,${shoreY - 10} 160,${shoreY + 50} 250,${shoreY + 50}`} fill="#D2B48C" />

            <line x1="170" y1={shoreY - 5} x2="220" y2={shoreY - 30} stroke="#8D6E63" strokeWidth="3" />
            <line x1="250" y1={shoreY - 10} x2="220" y2={shoreY - 30} stroke="#8D6E63" strokeWidth="3" />
            <line x1="170" y1={shoreY - 5} x2="250" y2={shoreY - 10} stroke="#8D6E63" strokeWidth="2" />

            {[...Array(Math.floor(wallPorosity / 3))].map((_, i) => (
              <circle
                key={`gap-${i}`}
                cx={175 + i * (70 / Math.floor(wallPorosity / 3))}
                cy={shoreY - 3 + Math.sin(i) * 3}
                r={2}
                fill="#87CEEB"
              />
            ))}

            {[...Array(8)].map((_, i) => (
              <g key={`stone-${i}`}>
                <ellipse
                  cx={175 + i * 9}
                  cy={shoreY - 4 + (i % 2) * 3}
                  rx={5}
                  ry={3}
                  fill="#795548"
                  stroke="#5D4037"
                  strokeWidth="0.5"
                />
              </g>
            ))}
            {[...Array(6)].map((_, i) => (
              <ellipse
                key={`stone2-${i}`}
                cx={225 + i * 5}
                cy={shoreY - 10 - i * 3}
                rx={4}
                ry={3}
                fill="#795548"
                stroke="#5D4037"
                strokeWidth="0.5"
              />
            ))}

            {waterFillRatio > 0.1 && (
              <polygon
                points={`175,${shoreY - 3} 245,${shoreY - 8} 220,${shoreY - 28 * waterFillRatio} 175,${shoreY - 3}`}
                fill="#1976D2"
                opacity={0.5}
              />
            )}

            {isPlaying && waterFillRatio > 0.2 && [...Array(Math.min(fishInEnclosure, 8))].map((_, i) => {
              const fx = 185 + (i % 4) * 14 + Math.sin(animTime * 3 + i * 2) * 5;
              const fy = shoreY - 8 - i * 2 + Math.cos(animTime * 2 + i) * 3;
              const facingLeft = Math.sin(animTime * 3 + i * 2) > 0;
              return (
                <g key={`fish-${i}`} transform={facingLeft ? `translate(${fx * 2}, 0) scale(-1, 1)` : ''}>
                  <ellipse
                    cx={fx}
                    cy={fy}
                    rx={5}
                    ry={2.5}
                    fill="#FF8A65"
                    opacity={0.9}
                  />
                  <polygon
                    points={`${fx + 4},${fy} ${fx + 8},${fy - 3} ${fx + 8},${fy + 3}`}
                    fill="#FF7043"
                    opacity={0.8}
                  />
                  <circle cx={fx - 2} cy={fy - 0.5} r={0.8} fill="#333" />
                </g>
              );
            })}

            {isPlaying && tideLevel > 0.3 && [...Array(5)].map((_, i) => {
              const fx = 40 + i * 25 + Math.sin(animTime * 2.5 + i * 3) * 15;
              const fy = oceanLevel + 10 + i * 8 + Math.cos(animTime * 1.5 + i) * 5;
              return (
                <g key={`ocean-fish-${i}`}>
                  <ellipse cx={fx} cy={fy} rx={4} ry={2} fill="#FFA726" opacity={0.7} />
                  <polygon points={`${fx + 3},${fy} ${fx + 6},${fy - 2} ${fx + 6},${fy + 2}`} fill="#FF9800" opacity={0.6} />
                </g>
              );
            })}

            {isPlaying && isRising && tideLevel > 0.5 && (
              <g>
                <line x1="160" y1={shoreY + 5} x2="175" y2={shoreY} stroke="#42A5F5" strokeWidth="2" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1s" repeatCount="indefinite" />
                </line>
              </g>
            )}
            {isPlaying && !isRising && tideLevel < 0.5 && (
              <g>
                <line x1="175" y1={shoreY} x2="160" y2={shoreY + 5} stroke="#42A5F5" strokeWidth="1.5" opacity="0.6" strokeDasharray="3 2">
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1s" repeatCount="indefinite" />
                </line>
              </g>
            )}

            <rect x="10" y="8" width="100" height="30" rx="4" fill="rgba(0,0,0,0.5)" />
            <text x="60" y="20" textAnchor="middle" fill={isRising ? '#4FC3F7' : '#FFB74D'} fontSize="9">
              {tidePhase}
            </text>
            <text x="60" y="32" textAnchor="middle" fill="white" fontSize="8">
              {waterHeight.toFixed(1)}m / {tidalRange}m
            </text>

            <rect x="290" y="8" width="100" height="22" rx="4" fill="rgba(0,0,0,0.5)" />
            <text x="340" y="22" textAnchor="middle" fill="#FF8A65" fontSize="9">
              🐟 Fish: {fishInEnclosure}
            </text>
          </svg>

          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            Tide: {(tideLevel * 100).toFixed(0)}% | Catch: {totalCatch.toFixed(2)} kg
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Wall Height: {wallHeight.toFixed(1)} m</label>
                <input type="range" min="5" max="30" value={wallHeight * 10}
                  onChange={(e) => setWallHeight(Number(e.target.value) / 10)}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Enclosure Area: {enclosureArea} m²</label>
                <input type="range" min="100" max="5000" step="100" value={enclosureArea}
                  onChange={(e) => setEnclosureArea(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Tidal Range: {tidalRange} m</label>
                <input type="range" min="1" max="12" value={tidalRange}
                  onChange={(e) => setTidalRange(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Wall Porosity: {wallPorosity}%</label>
                <input type="range" min="5" max="30" value={wallPorosity}
                  onChange={(e) => setWallPorosity(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Results</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between">
                <span>🌊 Volume at High Tide:</span>
                <span className="font-mono">{waterVolume.toFixed(0)} m³</span>
              </div>
              <div className="flex justify-between">
                <span>🐟 Trapping Efficiency:</span>
                <span className="font-mono">{trappingEfficiency.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>🎣 Est. Daily Catch:</span>
                <span className="font-mono">{dailyCatch.toFixed(1)} kg</span>
              </div>
              <div className="flex justify-between">
                <span>⏱️ Tidal Cycle:</span>
                <span className="font-mono">{tidePeriod.toFixed(1)} hrs</span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                Aboriginal Australians built the Budj Bim fish traps 6,600+ years ago — older than the Pyramids and Stonehenge. The Gunditjmara people engineered these eel traps across volcanic lava flows, earning UNESCO World Heritage status in 2019.
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
