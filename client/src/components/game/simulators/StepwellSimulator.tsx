import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface StepwellSimulatorProps {
  onClose?: () => void;
}

export default function StepwellSimulator({ onClose }: StepwellSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [depth, setDepth] = useState(15);
  const [numSteps, setNumSteps] = useState(80);
  const [waterTableDepth, setWaterTableDepth] = useState(10);
  const [monsoonIntensity, setMonsoonIntensity] = useState(50);
  const [waterLevel, setWaterLevel] = useState(0);
  const [season, setSeason] = useState<'monsoon' | 'dry'>('monsoon');
  const [dayCount, setDayCount] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const topWidth = 20 + depth * 1.5;
  const bottomWidth = 4;
  const topArea = topWidth * topWidth;
  const bottomArea = bottomWidth * bottomWidth;
  const volume = (1 / 3) * depth * (topArea + bottomArea + Math.sqrt(topArea * bottomArea));
  const rechargeRate = monsoonIntensity < 33 ? 500 : monsoonIntensity < 66 ? 2000 : 5000;
  const stepsUnderwater = Math.floor(numSteps * (waterLevel / 100));
  const accessibleLevel = Math.min(waterTableDepth, depth);
  const storedWater = volume * (waterLevel / 100) * 0.3;

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }
    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setDayCount(prev => {
        const newDay = prev + delta * 10;
        const cyclePos = newDay % 365;
        if (cyclePos < 120) setSeason('monsoon');
        else setSeason('dry');
        return newDay;
      });

      setWaterLevel(prev => {
        if (season === 'monsoon') {
          const maxLevel = Math.min((waterTableDepth / depth) * 100, 100);
          const rate = (monsoonIntensity / 50) * 15;
          return Math.min(prev + rate * delta, maxLevel);
        } else {
          return Math.max(prev - 3 * delta, 5);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isPlaying, season, monsoonIntensity, waterTableDepth, depth]);

  const reset = () => {
    setIsPlaying(false);
    setWaterLevel(0);
    setDayCount(0);
    setSeason('monsoon');
    lastTimeRef.current = 0;
  };

  const svgTopLeft = 200 - (80 + depth * 2);
  const svgTopRight = 200 + (80 + depth * 2);
  const svgBottomLeft = 200 - 30;
  const svgBottomRight = 200 + 30;
  const svgTop = 40;
  const svgBottom = 40 + Math.min(depth * 6, 180);
  const waterY = svgBottom - (svgBottom - svgTop) * (waterLevel / 100);
  const waterTableY = svgTop + (svgBottom - svgTop) * (waterTableDepth / depth);

  const stepCount = Math.min(Math.floor(numSteps / 5), 30);
  const steps = [];
  for (let i = 0; i < stepCount; i++) {
    const t = i / stepCount;
    const x = svgTopLeft + (svgBottomLeft - svgTopLeft) * t;
    const y = svgTop + (svgBottom - svgTop) * t;
    const w = (svgTopRight - svgTopLeft) * (1 - t * 0.7);
    steps.push({ x, y, w });
  }

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Stepwell Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Ancient India ~3000 BCE</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#87CEEB] to-[#C2B280] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            <rect x="0" y="0" width="400" height="250" fill="#D2B48C" opacity="0.3" />
            <rect x="0" y={svgTop - 10} width="400" height="10" fill="#8B7355" />

            <polygon
              points={`${svgTopLeft},${svgTop} ${svgTopRight},${svgTop} ${svgBottomRight},${svgBottom} ${svgBottomLeft},${svgBottom}`}
              fill="#6B4226"
              stroke="#4A2E1A"
              strokeWidth="2"
            />

            {steps.map((step, i) => (
              <rect
                key={`step-${i}`}
                x={step.x}
                y={step.y}
                width={step.w}
                height={3}
                fill={step.y > waterY ? "#3A7BD5" : "#8B7355"}
                stroke="#5D4037"
                strokeWidth="0.5"
                opacity={step.y > waterY ? 0.6 : 1}
              />
            ))}

            {waterLevel > 0 && (
              <polygon
                points={`
                  ${svgTopLeft + (svgBottomLeft - svgTopLeft) * (1 - waterLevel / 100)},${waterY}
                  ${svgTopRight + (svgBottomRight - svgTopRight) * (1 - waterLevel / 100)},${waterY}
                  ${svgBottomRight},${svgBottom}
                  ${svgBottomLeft},${svgBottom}
                `}
                fill="#2196F3"
                opacity={0.6}
              />
            )}

            {isPlaying && season === 'monsoon' && [...Array(8)].map((_, i) => (
              <line
                key={`rain-${i}`}
                x1={svgTopLeft + 20 + i * ((svgTopRight - svgTopLeft - 40) / 7)}
                y1={svgTop - 8 + Math.sin(dayCount * 0.5 + i) * 3}
                x2={svgTopLeft + 22 + i * ((svgTopRight - svgTopLeft - 40) / 7)}
                y2={svgTop - 2 + Math.sin(dayCount * 0.5 + i) * 3}
                stroke="#4FC3F7"
                strokeWidth="1.5"
                opacity={0.8}
              />
            ))}

            <line
              x1={svgTopLeft - 20}
              y1={Math.min(waterTableY, svgBottom)}
              x2={svgTopRight + 20}
              y2={Math.min(waterTableY, svgBottom)}
              stroke="#1976D2"
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
            <text
              x={svgTopRight + 25}
              y={Math.min(waterTableY, svgBottom) + 4}
              fill="#1976D2"
              fontSize="8"
            >Water Table</text>

            {isPlaying && waterLevel > 5 && [...Array(6)].map((_, i) => (
              <circle
                key={`ripple-${i}`}
                cx={200 + Math.sin(dayCount * 0.3 + i * 1.5) * 15}
                cy={waterY + 3}
                r={2 + Math.sin(dayCount + i) * 1}
                fill="#64B5F6"
                opacity={0.5}
              />
            ))}

            <rect x="10" y="8" width="80" height="22" rx="3" fill="rgba(0,0,0,0.5)" />
            <text x="50" y="17" textAnchor="middle" fill={season === 'monsoon' ? '#4FC3F7' : '#FFB74D'} fontSize="8">
              {season === 'monsoon' ? '🌧️ Monsoon' : '☀️ Dry Season'}
            </text>
            <text x="50" y="26" textAnchor="middle" fill="white" fontSize="7">
              Day {Math.floor(dayCount % 365)}
            </text>
          </svg>

          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            Water Level: {waterLevel.toFixed(0)}%
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Depth: {depth} m</label>
                <input type="range" min="5" max="30" value={depth}
                  onChange={(e) => setDepth(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Steps: {numSteps}</label>
                <input type="range" min="20" max="200" value={numSteps}
                  onChange={(e) => setNumSteps(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Water Table: {waterTableDepth} m</label>
                <input type="range" min="3" max="25" value={waterTableDepth}
                  onChange={(e) => setWaterTableDepth(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">
                  Monsoon: {monsoonIntensity < 33 ? 'Light' : monsoonIntensity < 66 ? 'Moderate' : 'Heavy'}
                </label>
                <input type="range" min="0" max="100" value={monsoonIntensity}
                  onChange={(e) => setMonsoonIntensity(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Results</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between">
                <span>💧 Water Stored:</span>
                <span className="font-mono">{storedWater.toFixed(0)} m³</span>
              </div>
              <div className="flex justify-between">
                <span>📏 Accessible Level:</span>
                <span className="font-mono">{accessibleLevel.toFixed(1)} m</span>
              </div>
              <div className="flex justify-between">
                <span>🪜 Steps Underwater:</span>
                <span className="font-mono">{stepsUnderwater}</span>
              </div>
              <div className="flex justify-between">
                <span>🌧️ Recharge Rate:</span>
                <span className="font-mono">{rechargeRate.toLocaleString()} L/day</span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                India's Rani ki Vav stepwell (1063 CE) descends 7 stories with 800+ sculptures. Chand Baori has 3,500 steps in 13 stories — one of the deepest structures in the world.
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
