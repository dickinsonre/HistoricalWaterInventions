import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface ChainPumpSimulatorProps {
  onClose?: () => void;
}

export default function ChainPumpSimulator({ onClose }: ChainPumpSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tubeAngle, setTubeAngle] = useState(45);
  const [palletSpacing, setPalletSpacing] = useState(0.3);
  const [palletWidth, setPalletWidth] = useState(0.15);
  const [crankSpeed, setCrankSpeed] = useState(30);
  const [chainOffset, setChainOffset] = useState(0);
  const [totalLifted, setTotalLifted] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const tubeLength = 3.0;
  const liftHeight = tubeLength * Math.sin(tubeAngle * Math.PI / 180);
  const horizontalSpan = tubeLength * Math.cos(tubeAngle * Math.PI / 180);
  const chainSpeed = crankSpeed * Math.PI * 0.2 / 60;
  const volumePerPallet = palletWidth * palletWidth * palletSpacing * 0.7;
  const palletsPerMeter = 1 / palletSpacing;
  const flowRate = volumePerPallet * palletsPerMeter * chainSpeed * 1000;
  const dailyOutput = flowRate * 3600 * 10;
  const humanPower = 75;
  const efficiency = Math.min(0.7, 0.5 + (tubeAngle / 180) * 0.3);
  const actualPower = (flowRate / 1000) * 9.81 * liftHeight / efficiency;
  const workersNeeded = Math.ceil(actualPower / humanPower);

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setChainOffset(prev => (prev + chainSpeed * 60 * delta) % 30);
      setTotalLifted(prev => prev + flowRate * delta);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isPlaying, chainSpeed, flowRate]);

  const reset = () => {
    setIsPlaying(false);
    setChainOffset(0);
    setTotalLifted(0);
    lastTimeRef.current = 0;
  };

  const tubeStartX = 100;
  const tubeStartY = 210;
  const tubeEndX = tubeStartX + 180 * Math.cos(tubeAngle * Math.PI / 180);
  const tubeEndY = tubeStartY - 180 * Math.sin(tubeAngle * Math.PI / 180);

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Chain Pump Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Han Dynasty China ~200 BCE</p>
        </div>
        {onClose && <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#87CEEB] to-[#90EE90] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            <rect x="0" y="210" width="400" height="40" fill="#8B4513" />
            <rect x="0" y="195" width="120" height="15" fill="#4169E1" opacity="0.5" />
            <text x="60" y="207" textAnchor="middle" fill="#4169E1" fontSize="7">Water Source</text>

            <rect x="280" y={tubeEndY + 10} width="100" height="8" fill="#4169E1" opacity="0.4" />
            <text x="330" y={tubeEndY + 7} textAnchor="middle" fill="#228B22" fontSize="7">Irrigation</text>

            <line x1={tubeStartX - 8} y1={tubeStartY} x2={tubeEndX - 8} y2={tubeEndY}
              stroke="#8B6914" strokeWidth="14" opacity="0.5" />
            <line x1={tubeStartX} y1={tubeStartY} x2={tubeEndX} y2={tubeEndY}
              stroke="#654321" strokeWidth="10" />

            {Array.from({ length: 8 }, (_, i) => {
              const t = ((i * 25 + chainOffset) % 200) / 200;
              const px = tubeStartX + (tubeEndX - tubeStartX) * t;
              const py = tubeStartY + (tubeEndY - tubeStartY) * t;
              return (
                <g key={i}>
                  <rect
                    x={px - 6}
                    y={py - 3}
                    width={12}
                    height={6}
                    fill="#8B4513"
                    stroke="#4a3520"
                    strokeWidth="1"
                    transform={`rotate(${-tubeAngle}, ${px}, ${py})`}
                    rx="1"
                  />
                  {t < 0.9 && (
                    <rect
                      x={px - 4}
                      y={py - 1}
                      width={8}
                      height={3}
                      fill="#4169E1"
                      opacity="0.6"
                      transform={`rotate(${-tubeAngle}, ${px}, ${py})`}
                    />
                  )}
                </g>
              );
            })}

            <circle cx={tubeEndX + 5} cy={tubeEndY} r={12} fill="none" stroke="#696969" strokeWidth="3" />
            <circle cx={tubeEndX + 5} cy={tubeEndY} r={4} fill="#696969" />
            {isPlaying && (
              <line
                x1={tubeEndX + 5}
                y1={tubeEndY}
                x2={tubeEndX + 5 + 10 * Math.cos(chainOffset * 0.3)}
                y2={tubeEndY + 10 * Math.sin(chainOffset * 0.3)}
                stroke="#4a4a4a"
                strokeWidth="2"
              />
            )}

            <circle cx={tubeStartX - 5} cy={tubeStartY} r={10} fill="none" stroke="#696969" strokeWidth="3" />
            <circle cx={tubeStartX - 5} cy={tubeStartY} r={3} fill="#696969" />

            <line x1={tubeEndX + 17} y1={tubeEndY} x2={tubeEndX + 40} y2={tubeEndY - 10}
              stroke="#8B4513" strokeWidth="2" />
            <circle cx={tubeEndX + 45} cy={tubeEndY - 15} r={6} fill="#DEB887" stroke="#8B4513" strokeWidth="1" />
            <line x1={tubeEndX + 45} y1={tubeEndY - 9} x2={tubeEndX + 45} y2={tubeEndY + 5}
              stroke="#8B4513" strokeWidth="2" />
            <text x={tubeEndX + 45} y={tubeEndY + 15} textAnchor="middle" fill="#654321" fontSize="7">Crank</text>

            {isPlaying && (
              <g>
                <circle cx={tubeEndX + 15} cy={tubeEndY + 10} r={2} fill="#4169E1" opacity="0.7" />
                <circle cx={tubeEndX + 25} cy={tubeEndY + 15} r={1.5} fill="#4169E1" opacity="0.5" />
              </g>
            )}

            <text x="200" y="18" textAnchor="middle" fill="#333" fontSize="10" fontWeight="bold">
              Square-Pallet Chain Pump (翻車)
            </text>
          </svg>

          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            Lift: {liftHeight.toFixed(1)}m | Flow: {flowRate.toFixed(1)} L/s
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Tube Angle: {tubeAngle}°</label>
                <input type="range" min="20" max="70" value={tubeAngle}
                  onChange={(e) => setTubeAngle(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Pallet Spacing: {(palletSpacing*100).toFixed(0)} cm</label>
                <input type="range" min="0.15" max="0.5" step="0.05" value={palletSpacing}
                  onChange={(e) => setPalletSpacing(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Pallet Width: {(palletWidth*100).toFixed(0)} cm</label>
                <input type="range" min="0.1" max="0.25" step="0.01" value={palletWidth}
                  onChange={(e) => setPalletWidth(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Crank Speed: {crankSpeed} RPM</label>
                <input type="range" min="15" max="60" value={crankSpeed}
                  onChange={(e) => setCrankSpeed(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Results</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between"><span>💧 Flow Rate:</span><span className="font-mono">{flowRate.toFixed(1)} L/s</span></div>
              <div className="flex justify-between"><span>⬆️ Lift Height:</span><span className="font-mono">{liftHeight.toFixed(1)} m</span></div>
              <div className="flex justify-between"><span>📊 Daily (10h):</span><span className="font-mono">{(dailyOutput/1000).toFixed(0)} m³</span></div>
              <div className="flex justify-between"><span>⚡ Power Req:</span><span className="font-mono">{actualPower.toFixed(0)} W</span></div>
              <div className="flex justify-between"><span>👷 Workers:</span><span className="font-mono">{workersNeeded}</span></div>
              <div className="flex justify-between"><span>⚙️ Efficiency:</span><span className="font-mono">{(efficiency*100).toFixed(0)}%</span></div>
              <div className="flex justify-between"><span>🏺 Total:</span><span className="font-mono">{(totalLifted/1000).toFixed(1)} m³</span></div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                The chain pump (翻車, fānchē) was China's most important irrigation tool for 2,000 years. Powered by foot treadles, hand cranks, or even water current, it could lift water 1–5 meters to flood rice paddies.
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
