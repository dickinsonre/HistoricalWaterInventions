import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface DesalinationSimulatorProps {
  onClose?: () => void;
}

export default function DesalinationSimulator({ onClose }: DesalinationSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [feedPressure, setFeedPressure] = useState(55);
  const [membraneArea, setMembraneArea] = useState(20);
  const [feedSalinity, setFeedSalinity] = useState(35000);
  const [temperature, setTemperature] = useState(25);
  const [animTime, setAnimTime] = useState(0);
  const [totalProduced, setTotalProduced] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const osmoticPressure = 0.7 * (feedSalinity / 1000);
  const permeability = 2.5 + (temperature - 15) * 0.1;
  const netDrivingPressure = Math.max(feedPressure - osmoticPressure, 0);
  const permeateFlow = membraneArea * permeability * netDrivingPressure * 0.01;
  const recoveryRate = Math.min(0.4 * (feedPressure / osmoticPressure), 0.85) * 100;
  const saltRejection = Math.min(99.5 - (feedSalinity / 45000) * 2 + (feedPressure / 80) * 1.5, 99.8);
  const energyUse = (feedPressure * 100) / (permeateFlow > 0 ? permeateFlow : 1) * 0.06;

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
      setTotalProduced(prev => prev + permeateFlow * delta / 3600);
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isPlaying, permeateFlow]);

  const reset = () => {
    setIsPlaying(false);
    setAnimTime(0);
    setTotalProduced(0);
    lastTimeRef.current = 0;
  };

  const particleSpeed = netDrivingPressure > 0 ? 2 + netDrivingPressure * 0.1 : 0;

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Desalination Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Reverse Osmosis Technology</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#87CEEB] to-[#4682B4] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            <rect x="0" y="0" width="400" height="250" fill="#1a3a5c" />
            <rect x="10" y="30" width="80" height="180" fill="#2a5a8c" stroke="#4a8abd" strokeWidth="1" rx="3" />
            <text x="50" y="20" textAnchor="middle" fill="#87CEEB" fontSize="8">SEAWATER</text>
            <text x="50" y="28" textAnchor="middle" fill="#87CEEB" fontSize="7">INTAKE</text>
            {[...Array(15)].map((_, i) => (
              <circle
                key={`salt-in-${i}`}
                cx={20 + (i % 5) * 14 + Math.sin(animTime * 2 + i) * 3}
                cy={50 + Math.floor(i / 5) * 45 + Math.cos(animTime * 1.5 + i) * 5}
                r={2}
                fill="#FFD700"
                opacity={0.7}
              />
            ))}
            {[...Array(20)].map((_, i) => (
              <circle
                key={`water-in-${i}`}
                cx={15 + (i % 6) * 12}
                cy={40 + Math.floor(i / 6) * 40 + Math.sin(animTime + i) * 3}
                r={3}
                fill="#4169E1"
                opacity={0.5}
              />
            ))}

            <rect x="100" y="80" width="50" height="100" fill="#555" stroke="#777" strokeWidth="2" rx="5" />
            <text x="125" y="125" textAnchor="middle" fill="white" fontSize="7">HIGH-P</text>
            <text x="125" y="135" textAnchor="middle" fill="white" fontSize="7">PUMP</text>
            <text x="125" y="150" textAnchor="middle" fill="#FFD700" fontSize="8">{feedPressure} bar</text>
            {isPlaying && (
              <g>
                <circle cx="125" cy="110" r="12" fill="none" stroke="#4fc3f7" strokeWidth="2" strokeDasharray="6 3"
                  transform={`rotate(${animTime * 180}, 125, 110)`} />
              </g>
            )}
            <line x1="90" y1="130" x2="100" y2="130" stroke="#4a8abd" strokeWidth="4" />

            <rect x="160" y="40" width="12" height="170" fill="#2196F3" opacity="0.6" />
            <text x="166" y="35" textAnchor="middle" fill="#90CAF9" fontSize="7">FEED</text>
            {isPlaying && [...Array(8)].map((_, i) => (
              <g key={`feed-${i}`}>
                <circle
                  cx={166}
                  cy={((animTime * 40 * particleSpeed + i * 25) % 170) + 40}
                  r={2.5}
                  fill="#1565C0"
                  opacity={0.8}
                />
                <circle
                  cx={166}
                  cy={((animTime * 40 * particleSpeed + i * 25 + 8) % 170) + 40}
                  r={1.5}
                  fill="#FFD700"
                  opacity={0.6}
                />
              </g>
            ))}

            <rect x="185" y="30" width="6" height="190" fill="#8D6E63" />
            <rect x="191" y="30" width="4" height="190" fill="#A1887F" strokeDasharray="3 2" stroke="#6D4C41" />
            <rect x="195" y="30" width="6" height="190" fill="#8D6E63" />
            <text x="193" y="25" textAnchor="middle" fill="#FFCC80" fontSize="7">RO MEMBRANE</text>
            {isPlaying && netDrivingPressure > 0 && [...Array(6)].map((_, i) => (
              <circle
                key={`through-${i}`}
                cx={191 + Math.sin(animTime * 3 + i) * 2}
                cy={50 + i * 28 + Math.sin(animTime * 5 + i * 2) * 5}
                r={1.5}
                fill="#64B5F6"
                opacity={0.9}
              />
            ))}

            <rect x="210" y="40" width="80" height="170" fill="#1565C0" opacity="0.15" />
            <text x="250" y="55" textAnchor="middle" fill="#64B5F6" fontSize="8">FRESHWATER</text>
            {isPlaying && [...Array(12)].map((_, i) => (
              <circle
                key={`fresh-${i}`}
                cx={220 + (i % 4) * 18 + Math.sin(animTime * 1.5 + i) * 3}
                cy={65 + Math.floor(i / 4) * 45 + Math.cos(animTime + i) * 4}
                r={3}
                fill="#42A5F5"
                opacity={0.4}
              />
            ))}

            <rect x="300" y="40" width="90" height="80" fill="#1B5E20" opacity="0.3" stroke="#4CAF50" strokeWidth="1" rx="3" />
            <text x="345" y="55" textAnchor="middle" fill="#81C784" fontSize="8">PERMEATE</text>
            <text x="345" y="65" textAnchor="middle" fill="#81C784" fontSize="7">OUTPUT</text>
            <text x="345" y="85" textAnchor="middle" fill="#A5D6A7" fontSize="10">{permeateFlow.toFixed(0)} L/hr</text>
            {isPlaying && [...Array(5)].map((_, i) => (
              <circle
                key={`out-${i}`}
                cx={310 + i * 16}
                cy={100 + Math.sin(animTime * 2 + i) * 5}
                r={3}
                fill="#66BB6A"
                opacity={0.6}
              />
            ))}

            <rect x="300" y="140" width="90" height="70" fill="#B71C1C" opacity="0.2" stroke="#EF5350" strokeWidth="1" rx="3" />
            <text x="345" y="155" textAnchor="middle" fill="#EF9A9A" fontSize="8">BRINE</text>
            <text x="345" y="165" textAnchor="middle" fill="#EF9A9A" fontSize="7">REJECT</text>
            {isPlaying && [...Array(8)].map((_, i) => (
              <circle
                key={`brine-${i}`}
                cx={310 + (i % 4) * 20}
                cy={175 + Math.floor(i / 4) * 15 + Math.sin(animTime * 1.2 + i) * 3}
                r={2}
                fill="#FFD700"
                opacity={0.8}
              />
            ))}

            <line x1="290" y1="80" x2="300" y2="80" stroke="#4CAF50" strokeWidth="3" />
            <line x1="290" y1="175" x2="300" y2="175" stroke="#EF5350" strokeWidth="3" />

            {netDrivingPressure > 0 && (
              <>
                <line x1="175" y1="120" x2="205" y2="120" stroke="#FFD700" strokeWidth="1.5" markerEnd="url(#arrowhead)" opacity={isPlaying ? 1 : 0.3} />
                <defs>
                  <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
                    <polygon points="0 0, 6 2, 0 4" fill="#FFD700" />
                  </marker>
                </defs>
              </>
            )}

            <text x="20" y="228" fill="#90CAF9" fontSize="9">
              {isPlaying ? `Recovery: ${recoveryRate.toFixed(1)}%` : "Press Play to start"}
            </text>
          </svg>

          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            Net Pressure: {netDrivingPressure.toFixed(1)} bar
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Feed Pressure: {feedPressure} bar</label>
                <input type="range" min="10" max="80" value={feedPressure}
                  onChange={(e) => setFeedPressure(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Membrane Area: {membraneArea} m²</label>
                <input type="range" min="1" max="50" value={membraneArea}
                  onChange={(e) => setMembraneArea(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Feed Salinity: {feedSalinity.toLocaleString()} ppm</label>
                <input type="range" min="10000" max="45000" step="1000" value={feedSalinity}
                  onChange={(e) => setFeedSalinity(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Temperature: {temperature}°C</label>
                <input type="range" min="15" max="35" value={temperature}
                  onChange={(e) => setTemperature(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Results</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between">
                <span>💧 Freshwater Output:</span>
                <span className="font-mono">{permeateFlow.toFixed(1)} L/hr</span>
              </div>
              <div className="flex justify-between">
                <span>🧂 Salt Rejection:</span>
                <span className="font-mono">{saltRejection.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>⚡ Energy Use:</span>
                <span className="font-mono">{energyUse.toFixed(1)} kWh/m³</span>
              </div>
              <div className="flex justify-between">
                <span>♻️ Recovery Rate:</span>
                <span className="font-mono">{recoveryRate.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>📊 Total Produced:</span>
                <span className="font-mono">{totalProduced.toFixed(1)} L</span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                Ancient Greeks used evaporation for desalination in the 4th century BCE. Today, Saudi Arabia produces 1.5 billion gallons of desalinated water daily through reverse osmosis.
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
