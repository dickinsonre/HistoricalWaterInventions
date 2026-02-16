import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface WindmillPumpSimulatorProps {
  onClose?: () => void;
}

export default function WindmillPumpSimulator({ onClose }: WindmillPumpSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [windSpeed, setWindSpeed] = useState(6);
  const [bladeLength, setBladeLength] = useState(12);
  const [screwDiameter, setScrewDiameter] = useState(1.2);
  const [liftHeight, setLiftHeight] = useState(1.5);
  const [bladeAngle, setBladeAngle] = useState(0);
  const [waterLevel, setWaterLevel] = useState(0);
  const [totalPumped, setTotalPumped] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const sweptArea = Math.PI * Math.pow(bladeLength, 2);
  const airDensity = 1.225;
  const powerCoeff = 0.25;
  const windPower = 0.5 * airDensity * sweptArea * Math.pow(windSpeed, 3);
  const capturedPower = windPower * powerCoeff;
  const pumpEfficiency = 0.6;
  const usefulPower = capturedPower * pumpEfficiency;
  const discharge = usefulPower / (9.81 * 1000 * liftHeight);
  const dailyOutput = discharge * 86400;
  const polderArea = dailyOutput / 0.005;
  const bladeRpm = windSpeed * 2.5;

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setBladeAngle(prev => (prev + bladeRpm * 6 * delta) % 360);
      setWaterLevel(prev => {
        const newLevel = prev + discharge * 10 * delta;
        return newLevel > 100 ? 0 : newLevel;
      });
      setTotalPumped(prev => prev + discharge * delta * 1000);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isPlaying, bladeRpm, discharge]);

  const reset = () => {
    setIsPlaying(false);
    setBladeAngle(0);
    setWaterLevel(0);
    setTotalPumped(0);
    lastTimeRef.current = 0;
  };

  const millX = 200;
  const millY = 70;
  const bladeR = 55;

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Dutch Windmill Pump Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Netherlands ~1400 CE</p>
        </div>
        {onClose && <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#87CEEB] to-[#90EE90] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            <rect x="0" y="190" width="400" height="60" fill="#228B22" opacity="0.3" />
            <rect x="0" y="180" width="400" height="10" fill="#8B7D3C" />

            <rect x="0" y="170" width="150" height="20" fill="#4169E1" opacity={0.3 + waterLevel / 200} />
            <text x="75" y="183" textAnchor="middle" fill="#4169E1" fontSize="8">Polder (Low Land)</text>

            <rect x="280" y="160" width="120" height="15" fill="#4169E1" opacity="0.4" />
            <text x="340" y="172" textAnchor="middle" fill="#4169E1" fontSize="8">Canal / Sea Level</text>

            <rect x="150" y="165" width="130" height="25" fill="#8B7D3C" />
            <text x="215" y="182" textAnchor="middle" fill="#654321" fontSize="7">Dike</text>

            <rect x={millX - 15} y={millY + 20} width={30} height={145} fill="#654321" />
            <polygon points={`${millX - 25},${millY + 20} ${millX + 25},${millY + 20} ${millX + 15},${millY + 165} ${millX - 15},${millY + 165}`}
              fill="#8B6914" stroke="#654321" strokeWidth="1" />

            <polygon points={`${millX - 20},${millY + 20} ${millX},${millY - 5} ${millX + 20},${millY + 20}`}
              fill="#C2A27A" stroke="#654321" strokeWidth="1" />

            <circle cx={millX} cy={millY + 20} r={5} fill="#696969" />
            {Array.from({ length: 4 }, (_, i) => {
              const angle = (i * 90 + bladeAngle) * Math.PI / 180;
              const endX = millX + bladeR * Math.cos(angle);
              const endY = millY + 20 + bladeR * Math.sin(angle);
              const perpX = 6 * Math.cos(angle + Math.PI/2);
              const perpY = 6 * Math.sin(angle + Math.PI/2);
              return (
                <g key={i}>
                  <line x1={millX} y1={millY + 20} x2={endX} y2={endY}
                    stroke="#654321" strokeWidth="2" />
                  <polygon
                    points={`${millX + (endX-millX)*0.3},${millY+20 + (endY-millY-20)*0.3} ${endX},${endY} ${endX + perpX},${endY + perpY} ${millX + (endX-millX)*0.3 + perpX},${millY+20 + (endY-millY-20)*0.3 + perpY}`}
                    fill="#D2B48C"
                    stroke="#8B6914"
                    strokeWidth="0.5"
                    opacity="0.7"
                  />
                </g>
              );
            })}

            <line x1={millX - 10} y1={millY + 165} x2={millX - 30} y2={millY + 180}
              stroke="#8B4513" strokeWidth="3" />
            {isPlaying && (
              <g>
                <circle cx={millX - 25} cy={millY + 175} r={2} fill="#4169E1" opacity="0.7">
                  <animate attributeName="cy" values={`${millY+175};${millY+160};${millY+175}`} dur="1s" repeatCount="indefinite" />
                </circle>
                <circle cx={millX - 20} cy={millY + 170} r={1.5} fill="#00BFFF" opacity="0.5">
                  <animate attributeName="cy" values={`${millY+170};${millY+155};${millY+170}`} dur="1.2s" repeatCount="indefinite" />
                </circle>
              </g>
            )}

            {isPlaying && Array.from({ length: 5 }, (_, i) => (
              <text key={i} x={320 + i * 5} y={30 + i * 8} fill="#87CEEB" fontSize="12" opacity={0.4}>
                →
              </text>
            ))}
            <text x="350" y="25" fill="#87CEEB" fontSize="8">Wind {windSpeed} m/s →</text>

            {Array.from({ length: 6 }, (_, i) => (
              <rect key={i} x={310 + i * 15} y="195" width="8" height="12" fill="#228B22" opacity="0.5" rx="1" />
            ))}
            <text x="345" y="218" textAnchor="middle" fill="#228B22" fontSize="7">Farmland</text>
          </svg>

          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            Pumped: {totalPumped.toFixed(0)} L
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Wind Speed: {windSpeed} m/s</label>
                <input type="range" min="2" max="15" value={windSpeed}
                  onChange={(e) => setWindSpeed(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Blade Length: {bladeLength} m</label>
                <input type="range" min="6" max="20" value={bladeLength}
                  onChange={(e) => setBladeLength(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Screw Diameter: {screwDiameter.toFixed(1)} m</label>
                <input type="range" min="0.6" max="2.0" step="0.1" value={screwDiameter}
                  onChange={(e) => setScrewDiameter(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Lift Height: {liftHeight.toFixed(1)} m</label>
                <input type="range" min="0.5" max="4.0" step="0.1" value={liftHeight}
                  onChange={(e) => setLiftHeight(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Results</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between"><span>💧 Discharge:</span><span className="font-mono">{(discharge*1000).toFixed(1)} L/s</span></div>
              <div className="flex justify-between"><span>⚡ Wind Power:</span><span className="font-mono">{(windPower/1000).toFixed(1)} kW</span></div>
              <div className="flex justify-between"><span>🔧 Captured:</span><span className="font-mono">{(capturedPower/1000).toFixed(1)} kW</span></div>
              <div className="flex justify-between"><span>📊 Daily Volume:</span><span className="font-mono">{(dailyOutput).toFixed(0)} m³</span></div>
              <div className="flex justify-between"><span>🌾 Polder Area:</span><span className="font-mono">{(polderArea/10000).toFixed(1)} ha</span></div>
              <div className="flex justify-between"><span>💨 Blade RPM:</span><span className="font-mono">{bladeRpm.toFixed(0)}</span></div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                By 1850, over 9,000 windmills drained the Dutch polders. Networks of windmills in series could lift water 4+ meters, reclaiming 17% of the Netherlands from the sea — an area larger than Lebanon!
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
