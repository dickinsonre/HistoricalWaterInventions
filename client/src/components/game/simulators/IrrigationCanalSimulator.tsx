import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface IrrigationCanalSimulatorProps {
  onClose?: () => void;
}

export default function IrrigationCanalSimulator({ onClose }: IrrigationCanalSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [canalSlope, setCanalSlope] = useState(0.1);
  const [canalWidth, setCanalWidth] = useState(5);
  const [canalDepth, setCanalDepth] = useState(1.5);
  const [manningN, setManningN] = useState(0.025);
  const [time, setTime] = useState(0);
  const [particles, setParticles] = useState<Array<{x: number; y: number; branch: number; speed: number}>>([]);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const area = canalWidth * canalDepth;
  const wettedPerimeter = canalWidth + 2 * canalDepth;
  const hydraulicRadius = area / wettedPerimeter;
  const slopeDecimal = canalSlope / 100;
  const flowRate = (1 / manningN) * area * Math.pow(hydraulicRadius, 2 / 3) * Math.pow(slopeDecimal, 0.5);
  const velocity = flowRate / area;
  const irrigatedArea = flowRate * 3600 * 24 / 5000;
  const efficiency = Math.min(95, 60 + (1 / manningN) * 0.5);

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    if (particles.length === 0) {
      const initial: Array<{x: number; y: number; branch: number; speed: number}> = [];
      for (let i = 0; i < 30; i++) {
        initial.push({
          x: Math.random() * 400,
          y: 60 + Math.random() * 10,
          branch: 0,
          speed: 0.5 + Math.random() * 0.5
        });
      }
      for (let b = 1; b <= 3; b++) {
        for (let i = 0; i < 8; i++) {
          initial.push({
            x: 180 + (b - 1) * 80 + Math.random() * 20,
            y: 70 + Math.random() * 80,
            branch: b,
            speed: 0.3 + Math.random() * 0.3
          });
        }
      }
      setParticles(initial);
    }

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setTime(prev => prev + delta);

      setParticles(prev => prev.map(p => {
        const speed = velocity * 15 * p.speed * delta * 60;
        if (p.branch === 0) {
          let newX = p.x + speed;
          if (newX > 400) newX = 0;
          return { ...p, x: newX };
        } else {
          let newY = p.y + speed * 0.7;
          if (newY > 200) newY = 70;
          return { ...p, y: newY };
        }
      }));

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isPlaying, velocity]);

  const reset = () => {
    setIsPlaying(false);
    setTime(0);
    setParticles([]);
    lastTimeRef.current = 0;
  };

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Irrigation Canal Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Hohokam Civilization ~600 CE</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#90EE90] to-[#228B22] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            <rect x="0" y="0" width="400" height="250" fill="#8FBC8F" opacity="0.3" />

            <rect x="0" y="55" width="400" height="20" fill="#4169E1" opacity="0.6" rx="2" />
            <rect x="0" y="53" width="400" height="4" fill="#8B4513" />
            <rect x="0" y="75" width="400" height="4" fill="#8B4513" />

            {[0, 1, 2].map(b => {
              const bx = 100 + b * 100;
              return (
                <g key={`branch-${b}`}>
                  <rect x={bx - 1} y="75" width="12" height="15" fill="#8B4513" stroke="#654321" strokeWidth="1" />
                  <rect x={bx + 1} y="78" width="8" height="9" fill="#FFD700" opacity="0.8" />

                  <rect x={bx + 3} y="90" width="8" height="120" fill="#4169E1" opacity="0.5" rx="1" />
                  <rect x={bx + 1} y="90" width="2" height="120" fill="#8B4513" />
                  <rect x={bx + 11} y="90" width="2" height="120" fill="#8B4513" />

                  <rect x={bx - 20} y="210" width="50" height="30" fill="#90EE90" opacity="0.5" stroke="#228B22" strokeWidth="1" strokeDasharray="3,3" />
                  <text x={bx + 5} y="230" textAnchor="middle" fill="#333" fontSize="7">Field {b + 1}</text>
                </g>
              );
            })}

            {isPlaying && particles.map((p, i) => (
              <circle
                key={i}
                cx={p.branch === 0 ? p.x : (100 + (p.branch - 1) * 100 + 7)}
                cy={p.branch === 0 ? p.y : p.y}
                r={p.branch === 0 ? 3 : 2}
                fill="#00BFFF"
                opacity={0.8}
              />
            ))}

            <polygon points="10,50 25,40 25,50" fill="#4169E1" opacity="0.8" />
            <text x="30" y="48" fill="#333" fontSize="9" fontWeight="bold">Flow →</text>

            <text x="200" y="20" textAnchor="middle" fill="#333" fontSize="11" fontWeight="bold">
              Manning's Q = {flowRate.toFixed(2)} m³/s
            </text>

            <text x="200" y="35" textAnchor="middle" fill="#555" fontSize="8">
              v = {velocity.toFixed(2)} m/s | A = {area.toFixed(1)} m²
            </text>
          </svg>

          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            Flow: {flowRate.toFixed(2)} m³/s
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Canal Slope: {canalSlope.toFixed(2)}%</label>
                <input type="range" min="1" max="50" value={canalSlope * 100}
                  onChange={(e) => setCanalSlope(Number(e.target.value) / 100)}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Canal Width: {canalWidth} m</label>
                <input type="range" min="1" max="10" value={canalWidth}
                  onChange={(e) => setCanalWidth(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Canal Depth: {canalDepth.toFixed(1)} m</label>
                <input type="range" min="5" max="30" value={canalDepth * 10}
                  onChange={(e) => setCanalDepth(Number(e.target.value) / 10)}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Manning's n: {manningN.toFixed(3)}</label>
                <input type="range" min="10" max="50" value={manningN * 1000}
                  onChange={(e) => setManningN(Number(e.target.value) / 1000)}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Results</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between">
                <span>💧 Flow Rate:</span>
                <span className="font-mono">{flowRate.toFixed(2)} m³/s</span>
              </div>
              <div className="flex justify-between">
                <span>🏃 Velocity:</span>
                <span className="font-mono">{velocity.toFixed(2)} m/s</span>
              </div>
              <div className="flex justify-between">
                <span>🌾 Irrigated Area:</span>
                <span className="font-mono">{irrigatedArea.toFixed(0)} ha</span>
              </div>
              <div className="flex justify-between">
                <span>⚡ Efficiency:</span>
                <span className="font-mono">{efficiency.toFixed(0)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                The Hohokam people built 1,000+ km of irrigation canals in the Phoenix basin by 600 CE — the largest pre-Columbian canal system in North America.
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