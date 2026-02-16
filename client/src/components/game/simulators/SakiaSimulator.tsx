import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface SakiaSimulatorProps {
  onClose?: () => void;
}

export default function SakiaSimulator({ onClose }: SakiaSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [wheelDiameter, setWheelDiameter] = useState(4);
  const [bucketCount, setBucketCount] = useState(12);
  const [bucketVolume, setBucketVolume] = useState(8);
  const [rpm, setRpm] = useState(3);
  const [wheelAngle, setWheelAngle] = useState(0);
  const [oxAngle, setOxAngle] = useState(0);
  const [totalLifted, setTotalLifted] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const liftHeight = wheelDiameter * 0.85;
  const flowRate = bucketCount * (bucketVolume / 1000) * rpm * 60;
  const dailyOutput = flowRate * 12;
  const gearRatio = 2.5;
  const oxSpeed = (rpm / gearRatio) * Math.PI * 6;
  const power = (flowRate / 3600) * 9.81 * liftHeight * 1000;
  const efficiency = 0.55;
  const usefulPower = power * efficiency;

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setWheelAngle(prev => (prev + rpm * 6 * delta * 3) % 360);
      setOxAngle(prev => (prev + (rpm / gearRatio) * 6 * delta * 3) % 360);
      setTotalLifted(prev => prev + (flowRate / 3600) * delta * 1000);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isPlaying, rpm, flowRate]);

  const reset = () => {
    setIsPlaying(false);
    setWheelAngle(0);
    setOxAngle(0);
    setTotalLifted(0);
    lastTimeRef.current = 0;
  };

  const centerX = 200;
  const centerY = 130;
  const radius = 70;

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Sakia Waterwheel Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Ancient Egypt ~400 BCE</p>
        </div>
        {onClose && <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#87CEEB] to-[#8B7D3C] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            <rect x="0" y="200" width="400" height="50" fill="#8B4513" />
            <rect x="0" y="190" width="180" height="10" fill="#4169E1" opacity="0.6" />
            <rect x="300" y="170" width="100" height="10" fill="#4169E1" opacity="0.4" />

            <text x="90" y="188" textAnchor="middle" fill="#4169E1" fontSize="8">River Level</text>
            <text x="350" y="168" textAnchor="middle" fill="#4169E1" fontSize="8">Irrigation Channel</text>

            <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#8B4513" strokeWidth="4" />
            <circle cx={centerX} cy={centerY} r={radius - 3} fill="none" stroke="#654321" strokeWidth="1" />

            {Array.from({ length: bucketCount }, (_, i) => {
              const angle = (i * (360 / bucketCount) + wheelAngle) * Math.PI / 180;
              const bx = centerX + radius * Math.cos(angle);
              const by = centerY + radius * Math.sin(angle);
              const isInWater = by > 185;
              const isAtTop = by < centerY - radius * 0.5;
              return (
                <g key={i}>
                  <rect
                    x={bx - 5}
                    y={by - 4}
                    width={10}
                    height={8}
                    fill={isInWater || (by < centerY) ? "#654321" : "#8B6914"}
                    stroke="#4a3520"
                    strokeWidth="1"
                    transform={`rotate(${(i * (360 / bucketCount) + wheelAngle)}, ${bx}, ${by})`}
                  />
                  {(isInWater || (by < centerY && !isAtTop)) && (
                    <rect
                      x={bx - 3}
                      y={by - 2}
                      width={6}
                      height={4}
                      fill="#4169E1"
                      opacity="0.8"
                      transform={`rotate(${(i * (360 / bucketCount) + wheelAngle)}, ${bx}, ${by})`}
                    />
                  )}
                  {isAtTop && (
                    <circle cx={bx + 5} cy={by + 5} r={2} fill="#4169E1" opacity="0.7" />
                  )}
                </g>
              );
            })}

            {Array.from({ length: 4 }, (_, i) => {
              const angle = (i * 90 + wheelAngle) * Math.PI / 180;
              return (
                <line
                  key={i}
                  x1={centerX}
                  y1={centerY}
                  x2={centerX + radius * Math.cos(angle)}
                  y2={centerY + radius * Math.sin(angle)}
                  stroke="#654321"
                  strokeWidth="2"
                />
              );
            })}

            <circle cx={centerX} cy={centerY} r={8} fill="#696969" stroke="#4a4a4a" strokeWidth="2" />

            <line x1={centerX} y1={centerY} x2={centerX + 50} y2={centerY + 5} stroke="#8B4513" strokeWidth="3" />

            {(() => {
              const oxX = 310 + 20 * Math.cos(oxAngle * Math.PI / 180);
              const oxY = 210 + 10 * Math.sin(oxAngle * Math.PI / 180);
              return (
                <g>
                  <circle cx="310" cy="215" r="25" fill="none" stroke="#8B4513" strokeWidth="1" strokeDasharray="3" opacity="0.3" />
                  <ellipse cx={oxX} cy={oxY} rx="12" ry="8" fill="#8B6914" />
                  <circle cx={oxX + 10} cy={oxY - 3} r={4} fill="#8B6914" />
                  <line x1={oxX + 13} y1={oxY - 5} x2={oxX + 16} y2={oxY - 8} stroke="#654321" strokeWidth="1" />
                  <line x1={oxX + 13} y1={oxY - 1} x2={oxX + 16} y2={oxY + 1} stroke="#654321" strokeWidth="1" />
                  <text x="310" y="245" textAnchor="middle" fill="#654321" fontSize="8">Ox path</text>
                </g>
              );
            })()}

            <rect x={centerX - 4} y={centerY + 8} width={8} height={70} fill="#654321" />
          </svg>

          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            Lifted: {totalLifted.toFixed(0)} L
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Wheel Diameter: {wheelDiameter.toFixed(1)} m</label>
                <input type="range" min="2" max="8" step="0.5" value={wheelDiameter}
                  onChange={(e) => setWheelDiameter(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Buckets: {bucketCount}</label>
                <input type="range" min="6" max="24" value={bucketCount}
                  onChange={(e) => setBucketCount(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Bucket Volume: {bucketVolume} L</label>
                <input type="range" min="3" max="15" value={bucketVolume}
                  onChange={(e) => setBucketVolume(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Speed: {rpm} RPM</label>
                <input type="range" min="1" max="6" value={rpm}
                  onChange={(e) => setRpm(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Results</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between"><span>💧 Flow Rate:</span><span className="font-mono">{flowRate.toFixed(0)} L/hr</span></div>
              <div className="flex justify-between"><span>⬆️ Lift Height:</span><span className="font-mono">{liftHeight.toFixed(1)} m</span></div>
              <div className="flex justify-between"><span>📊 Daily (12h):</span><span className="font-mono">{(dailyOutput/1000).toFixed(1)} m³</span></div>
              <div className="flex justify-between"><span>⚡ Power:</span><span className="font-mono">{usefulPower.toFixed(0)} W</span></div>
              <div className="flex justify-between"><span>🐂 Ox Speed:</span><span className="font-mono">{oxSpeed.toFixed(1)} m/min</span></div>
              <div className="flex justify-between"><span>⚙️ Efficiency:</span><span className="font-mono">{(efficiency * 100).toFixed(0)}%</span></div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                The sakia was the workhorse of Egyptian irrigation from 400 BCE onward. A single ox-driven wheel could lift 100,000 liters per day, irrigating fields up to 4 meters above the Nile.
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
