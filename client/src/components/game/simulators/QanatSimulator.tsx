import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface QanatSimulatorProps {
  onClose?: () => void;
}

export default function QanatSimulator({ onClose }: QanatSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tunnelLength, setTunnelLength] = useState(5000);
  const [slope, setSlope] = useState(0.5);
  const [tunnelDiameter, setTunnelDiameter] = useState(1.2);
  const [waterTableDepth, setWaterTableDepth] = useState(30);
  const [waterFlow, setWaterFlow] = useState(0);
  const [totalDelivered, setTotalDelivered] = useState(0);
  const [particleOffset, setParticleOffset] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const crossSectionArea = Math.PI * Math.pow(tunnelDiameter / 2, 2) * 0.6;
  const hydraulicRadius = (tunnelDiameter / 2) * 0.6;
  const manningN = 0.025;
  const velocity = (1 / manningN) * Math.pow(hydraulicRadius, 2/3) * Math.pow(slope / 1000, 0.5);
  const discharge = crossSectionArea * velocity * 1000;
  const dailyOutput = discharge * 3.6 * 24;
  const shaftCount = Math.floor(tunnelLength / 50);
  const elevationDrop = tunnelLength * (slope / 1000);

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setParticleOffset(prev => (prev + velocity * 20 * delta) % 50);
      setWaterFlow(discharge);
      setTotalDelivered(prev => prev + discharge * delta);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isPlaying, discharge, velocity]);

  const reset = () => {
    setIsPlaying(false);
    setTotalDelivered(0);
    setParticleOffset(0);
    lastTimeRef.current = 0;
  };

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Qanat Tunnel Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Ancient Persia ~1000 BCE</p>
        </div>
        {onClose && <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#87CEEB] via-[#C2B280] to-[#8B6914] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            <rect x="0" y="0" width="400" height="60" fill="#87CEEB" />
            <text x="200" y="20" textAnchor="middle" fill="#333" fontSize="10" fontWeight="bold">Cross-Section View: Qanat Underground Tunnel</text>

            <rect x="0" y="60" width="400" height="190" fill="#C2B280" />
            <rect x="0" y="60" width="400" height="15" fill="#8B7D3C" opacity="0.3" />

            {Array.from({ length: shaftCount > 8 ? 8 : shaftCount }, (_, i) => {
              const x = 30 + i * 45;
              const depth = waterTableDepth + (i * elevationDrop / (shaftCount || 1));
              const shaftH = Math.min(140, 60 + depth * 2);
              return (
                <g key={i}>
                  <rect x={x - 3} y={60} width={6} height={shaftH} fill="#4a3520" opacity="0.8" />
                  <rect x={x - 5} y={55} width={10} height={8} fill="#654321" rx="1" />
                  <circle cx={x} cy={60 + shaftH - 5} r={3} fill="#4169E1" opacity="0.6" />
                </g>
              );
            })}

            <line x1="20" y1={60 + waterTableDepth * 2} x2="380" y2={60 + waterTableDepth * 2 + elevationDrop * 0.5} stroke="#4169E1" strokeWidth="2" strokeDasharray="4" opacity="0.4" />
            <text x="385" y={60 + waterTableDepth * 2 + 5} fill="#4169E1" fontSize="8" opacity="0.5">water table</text>

            {isPlaying && (
              <g>
                <rect x="20" y={60 + waterTableDepth * 2 + 5} width="360" height={tunnelDiameter * 8} fill="#2C1810" rx="3" opacity="0.7" />
                <rect x="22" y={60 + waterTableDepth * 2 + 5 + tunnelDiameter * 3} width="356" height={tunnelDiameter * 4} fill="#4169E1" opacity="0.7" />
                {Array.from({ length: 12 }, (_, i) => (
                  <circle
                    key={i}
                    cx={30 + ((i * 30 + particleOffset) % 350)}
                    cy={60 + waterTableDepth * 2 + 5 + tunnelDiameter * 5}
                    r={1.5}
                    fill="#00BFFF"
                    opacity={0.9}
                  />
                ))}
              </g>
            )}
            {!isPlaying && (
              <rect x="20" y={60 + waterTableDepth * 2 + 5} width="360" height={tunnelDiameter * 8} fill="#2C1810" rx="3" opacity="0.7" />
            )}

            <rect x="350" y={60 + waterTableDepth * 2 - 20} width="40" height="40" fill="#228B22" opacity="0.3" rx="5" />
            <text x="370" y={60 + waterTableDepth * 2 - 5} textAnchor="middle" fill="#228B22" fontSize="8">Oasis</text>

            <rect x="5" y={50} width="30" height="25" fill="#D2B48C" opacity="0.6" />
            <polygon points="5,50 20,38 35,50" fill="#C2A27A" />
            <text x="20" y="35" textAnchor="middle" fill="#8B6914" fontSize="7">Mother Well</text>
          </svg>

          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            Flow: {waterFlow.toFixed(1)} L/s
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Tunnel Length: {(tunnelLength/1000).toFixed(1)} km</label>
                <input type="range" min="1000" max="20000" step="500" value={tunnelLength}
                  onChange={(e) => setTunnelLength(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Slope: {slope.toFixed(1)} m/km</label>
                <input type="range" min="0.2" max="2.0" step="0.1" value={slope}
                  onChange={(e) => setSlope(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Diameter: {tunnelDiameter.toFixed(1)} m</label>
                <input type="range" min="0.6" max="2.0" step="0.1" value={tunnelDiameter}
                  onChange={(e) => setTunnelDiameter(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Water Table: {waterTableDepth} m deep</label>
                <input type="range" min="10" max="60" value={waterTableDepth}
                  onChange={(e) => setWaterTableDepth(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Results</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between"><span>💧 Flow Rate:</span><span className="font-mono">{discharge.toFixed(1)} L/s</span></div>
              <div className="flex justify-between"><span>🌊 Velocity:</span><span className="font-mono">{velocity.toFixed(2)} m/s</span></div>
              <div className="flex justify-between"><span>📏 Elevation Drop:</span><span className="font-mono">{elevationDrop.toFixed(1)} m</span></div>
              <div className="flex justify-between"><span>🕳️ Access Shafts:</span><span className="font-mono">{shaftCount}</span></div>
              <div className="flex justify-between"><span>📊 Daily Output:</span><span className="font-mono">{(dailyOutput/1000).toFixed(0)} m³/day</span></div>
              <div className="flex justify-between"><span>🏺 Total Delivered:</span><span className="font-mono">{(totalDelivered/1000).toFixed(1)} m³</span></div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                Qanats are gravity-fed underground channels that tap mountain aquifers. Iran alone had 270,000 km of qanats — enough to circle Earth nearly 7 times. Many still operate after 3,000 years!
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
