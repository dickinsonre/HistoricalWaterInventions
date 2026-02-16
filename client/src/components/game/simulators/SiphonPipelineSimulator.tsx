import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface SiphonPipelineSimulatorProps {
  onClose?: () => void;
}

export default function SiphonPipelineSimulator({ onClose }: SiphonPipelineSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [valleyDepth, setValleyDepth] = useState(100);
  const [pipeDiameter, setPipeDiameter] = useState(0.5);
  const [sourceElevation, setSourceElevation] = useState(200);
  const [destElevation, setDestElevation] = useState(150);
  const [time, setTime] = useState(0);
  const [flowParticles, setFlowParticles] = useState<Array<{t: number; speed: number}>>([]);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const rho = 1000;
  const g = 9.81;
  const valleyBottom = Math.min(sourceElevation, destElevation) - valleyDepth;
  const headDifference = sourceElevation - destElevation;
  const siphonWorks = headDifference > 0;
  const pressureAtBottom = rho * g * (sourceElevation - valleyBottom);
  const pressureAtm = pressureAtBottom / 101325;
  const pipeArea = Math.PI * Math.pow(pipeDiameter / 2, 2);
  const velocity = siphonWorks ? Math.sqrt(2 * g * headDifference) * 0.7 : 0;
  const flowRate = velocity * pipeArea;

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    if (flowParticles.length === 0 && siphonWorks) {
      const initial: Array<{t: number; speed: number}> = [];
      for (let i = 0; i < 12; i++) {
        initial.push({ t: i / 12, speed: 0.8 + Math.random() * 0.4 });
      }
      setFlowParticles(initial);
    }

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setTime(prev => prev + delta);

      if (siphonWorks) {
        setFlowParticles(prev => prev.map(p => {
          let newT = p.t + delta * velocity * 0.02 * p.speed;
          if (newT > 1) newT -= 1;
          return { ...p, t: newT };
        }));
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isPlaying, siphonWorks, velocity]);

  const reset = () => {
    setIsPlaying(false);
    setTime(0);
    setFlowParticles([]);
    lastTimeRef.current = 0;
  };

  const maxElev = Math.max(sourceElevation, destElevation, 300);
  const toY = (elev: number) => 30 + (1 - elev / maxElev) * 180;

  const sourceY = toY(sourceElevation);
  const destY = toY(destElevation);
  const valleyY = toY(Math.max(valleyBottom, 0));

  const pipePath = `M 60,${sourceY} C 60,${sourceY + 30} 120,${valleyY} 200,${valleyY} C 280,${valleyY} 340,${destY + 30} 340,${destY}`;

  const getPointOnPath = (t: number) => {
    const bezier = (p0: number, p1: number, p2: number, p3: number, t: number) => {
      const mt = 1 - t;
      return mt * mt * mt * p0 + 3 * mt * mt * t * p1 + 3 * mt * t * t * p2 + t * t * t * p3;
    };
    if (t < 0.5) {
      const lt = t * 2;
      return {
        x: bezier(60, 60, 120, 200, lt),
        y: bezier(sourceY, sourceY + 30, valleyY, valleyY, lt)
      };
    } else {
      const lt = (t - 0.5) * 2;
      return {
        x: bezier(200, 280, 340, 340, lt),
        y: bezier(valleyY, valleyY, destY + 30, destY, lt)
      };
    }
  };

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Siphon Pipeline Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Ancient Pergamon ~200 BCE</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#87CEEB] to-[#4682B4] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            <polygon points={`0,${sourceY + 20} 0,230 140,230 200,${valleyY + 10}`} fill="#8B6914" />
            <polygon points={`200,${valleyY + 10} 260,230 400,230 400,${destY + 20}`} fill="#8B6914" />

            <polygon points={`0,${sourceY + 20} 0,230 140,230 200,${valleyY + 10}`} fill="#228B22" opacity="0.3" />
            <polygon points={`200,${valleyY + 10} 260,230 400,230 400,${destY + 20}`} fill="#228B22" opacity="0.3" />

            <rect x="0" y="230" width="400" height="20" fill="#654321" />

            <rect x="30" y={sourceY - 15} width="60" height="15" fill="#4169E1" opacity="0.7" />

            <rect x="310" y={destY - 10} width="60" height="10" fill="#4169E1" opacity="0.5" />

            <path d={pipePath} fill="none" stroke="#808080" strokeWidth="8" strokeLinecap="round" />
            <path d={pipePath} fill="none" stroke="#666" strokeWidth="6" strokeLinecap="round" />

            {isPlaying && siphonWorks && flowParticles.map((p, i) => {
              const pos = getPointOnPath(p.t);
              return (
                <circle
                  key={i}
                  cx={pos.x}
                  cy={pos.y}
                  r={3}
                  fill="#00BFFF"
                  opacity={0.9}
                />
              );
            })}

            <text x="60" y={sourceY - 20} textAnchor="middle" fill="#333" fontSize="9" fontWeight="bold">
              Source: {sourceElevation}m
            </text>
            <text x="340" y={destY - 15} textAnchor="middle" fill="#333" fontSize="9" fontWeight="bold">
              Dest: {destElevation}m
            </text>
            <text x="200" y={valleyY + 25} textAnchor="middle" fill="#333" fontSize="8">
              Valley: {Math.max(valleyBottom, 0).toFixed(0)}m
            </text>

            <line x1="200" y1={valleyY} x2="200" y2={valleyY - 15} stroke="#FF4444" strokeWidth="1" />
            <text x="200" y={valleyY - 18} textAnchor="middle" fill="#FF4444" fontSize="8" fontWeight="bold">
              {pressureAtm.toFixed(1)} atm
            </text>

            {!siphonWorks && (
              <text x="200" y="20" textAnchor="middle" fill="#FF0000" fontSize="12" fontWeight="bold">
                ⚠️ Siphon Cannot Work — Destination Higher Than Source!
              </text>
            )}

            {siphonWorks && (
              <text x="200" y="15" textAnchor="middle" fill="#006400" fontSize="10" fontWeight="bold">
                ✓ Siphon Active — Δh = {headDifference.toFixed(0)}m
              </text>
            )}

            {[40, 80, 320, 360].map((x, i) => (
              <line key={i} x1={x} y1={toY(0)} x2={x} y2={toY(0) - 8} stroke="#228B22" strokeWidth="3" />
            ))}
          </svg>

          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            Pressure at bottom: {pressureAtm.toFixed(1)} atm
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Valley Depth: {valleyDepth} m</label>
                <input type="range" min="10" max="200" value={valleyDepth}
                  onChange={(e) => setValleyDepth(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Pipe Ø: {pipeDiameter.toFixed(1)} m</label>
                <input type="range" min="1" max="10" value={pipeDiameter * 10}
                  onChange={(e) => setPipeDiameter(Number(e.target.value) / 10)}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Source Elev: {sourceElevation} m</label>
                <input type="range" min="50" max="300" value={sourceElevation}
                  onChange={(e) => setSourceElevation(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Dest Elev: {destElevation} m</label>
                <input type="range" min="40" max="290" value={destElevation}
                  onChange={(e) => setDestElevation(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Results</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between">
                <span>🔴 Pressure:</span>
                <span className="font-mono">{pressureAtm.toFixed(1)} atm</span>
              </div>
              <div className="flex justify-between">
                <span>💧 Flow Rate:</span>
                <span className="font-mono">{flowRate.toFixed(2)} m³/s</span>
              </div>
              <div className="flex justify-between">
                <span>🏃 Velocity:</span>
                <span className="font-mono">{velocity.toFixed(1)} m/s</span>
              </div>
              <div className="flex justify-between">
                <span>✅ Works:</span>
                <span className={`font-mono ${siphonWorks ? 'text-green-400' : 'text-red-400'}`}>
                  {siphonWorks ? 'YES' : 'NO'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                Pergamon's pressure pipeline crossed a 190m-deep valley under 20 atmospheres of pressure — an engineering marvel not replicated until modern times.
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