import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info, Volume2 } from "lucide-react";

interface ShishiOdoshiSimulatorProps {
  onClose?: () => void;
}

export default function ShishiOdoshiSimulator({ onClose }: ShishiOdoshiSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [flowRate, setFlowRate] = useState(0.5);
  const [bambooLength, setBambooLength] = useState(40);
  const [pivotPosition, setPivotPosition] = useState(0.6);
  const [waterLevel, setWaterLevel] = useState(0);
  const [angle, setAngle] = useState(15);
  const [knockCount, setKnockCount] = useState(0);
  const [lastKnock, setLastKnock] = useState<number | null>(null);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const fillTime = (bambooLength * pivotPosition * 0.3) / flowRate;
  const tipAngle = 35;
  const restoreAngle = 15;

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setWaterLevel(prev => {
        if (angle < tipAngle) {
          const newLevel = prev + (100 / fillTime) * delta;
          
          if (newLevel >= 100) {
            setAngle(-tipAngle);
            setKnockCount(c => c + 1);
            setLastKnock(Date.now());
            return 0;
          }
          return newLevel;
        }
        return 0;
      });

      setAngle(prev => {
        if (prev < restoreAngle && waterLevel < 10) {
          return Math.min(prev + 60 * delta, restoreAngle);
        }
        return prev;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, flowRate, fillTime, angle, waterLevel]);

  const reset = () => {
    setIsPlaying(false);
    setWaterLevel(0);
    setAngle(15);
    setKnockCount(0);
    setLastKnock(null);
    lastTimeRef.current = 0;
  };

  const pivotX = 200;
  const pivotY = 120;
  const bambooPxLength = 120;
  const waterSourceX = pivotX - bambooPxLength * pivotPosition + 20;
  
  const showKnockEffect = lastKnock && Date.now() - lastKnock < 300;

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Shishi-odoshi Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Japanese Deer Scarer ~1600 CE</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#2d5a27] to-[#1a3518] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 260" className="w-full h-64">
            <defs>
              <linearGradient id="bambooGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8B7355" />
                <stop offset="50%" stopColor="#9C8B6E" />
                <stop offset="100%" stopColor="#7A6548" />
              </linearGradient>
            </defs>
            
            <ellipse cx="200" cy="240" rx="180" ry="20" fill="#2d5a27" />
            <rect x="20" y="220" width="360" height="40" fill="#1a3518" />
            
            {[50, 100, 300, 350].map((x, i) => (
              <g key={i}>
                <rect x={x} y="150" width="8" height="90" fill="#228B22" />
                <polygon points={`${x+4},130 ${x-10},170 ${x+18},170`} fill="#228B22" />
              </g>
            ))}
            
            <rect x={waterSourceX - 5} y="60" width="10" height="60" fill="url(#bambooGradient)" />
            <rect x={waterSourceX - 15} y="50" width="30" height="15" fill="#654321" />
            
            {isPlaying && (
              <g>
                {[...Array(5)].map((_, i) => (
                  <circle 
                    key={i}
                    cx={waterSourceX}
                    cy={120 + i * 3}
                    r={2}
                    fill="#87CEEB"
                    opacity={0.8}
                  >
                    <animate 
                      attributeName="cy" 
                      values={`${70 + i * 10};${pivotY - 15}`}
                      dur={`${0.3 + i * 0.05}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </g>
            )}
            
            <g transform={`rotate(${angle}, ${pivotX}, ${pivotY})`}>
              <rect 
                x={pivotX - bambooPxLength * pivotPosition} 
                y={pivotY - 8} 
                width={bambooPxLength} 
                height="16" 
                fill="url(#bambooGradient)"
                rx="8"
              />
              
              <ellipse 
                cx={pivotX - bambooPxLength * pivotPosition + 10} 
                cy={pivotY} 
                rx="12" 
                ry="8" 
                fill="#7A6548"
              />
              
              <rect 
                x={pivotX - bambooPxLength * pivotPosition + 5} 
                y={pivotY - 6 + (12 * (1 - waterLevel / 100))} 
                width="20" 
                height={12 * waterLevel / 100} 
                fill="#87CEEB"
                opacity="0.8"
              />
            </g>
            
            <circle cx={pivotX} cy={pivotY} r="6" fill="#654321" stroke="#8B7355" strokeWidth="2" />
            
            <rect x={pivotX - 5} y={pivotY} width="10" height="60" fill="#654321" />
            <rect x={pivotX - 15} y={pivotY + 55} width="30" height="15" fill="#4a3520" />
            
            <g transform={`translate(${pivotX + 60}, 180)`}>
              <rect x="-15" y="-20" width="30" height="40" fill="#696969" rx="5" />
              <rect x="-12" y="-17" width="24" height="34" fill="#808080" rx="3" />
              {showKnockEffect && (
                <>
                  <circle cx="0" cy="0" r="25" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.8">
                    <animate attributeName="r" values="15;35" dur="0.3s" />
                    <animate attributeName="opacity" values="0.8;0" dur="0.3s" />
                  </circle>
                  <text x="35" y="5" fill="#FFD700" fontSize="14" fontWeight="bold">KNOCK!</text>
                </>
              )}
            </g>
            
            <text x="20" y="25" fill="#90EE90" fontSize="12" fontWeight="bold">
              Zen Garden • {knockCount} knocks
            </text>
          </svg>
          
          {showKnockEffect && (
            <div className="absolute top-2 right-2 bg-[var(--gold)]/20 px-2 py-1 rounded flex items-center gap-1">
              <Volume2 size={14} className="text-[var(--gold)]" />
              <span className="text-[var(--gold)] text-xs">CLACK!</span>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Water Flow: {flowRate.toFixed(1)} L/min</label>
                <input 
                  type="range" 
                  min="0.1" 
                  max="2" 
                  step="0.1"
                  value={flowRate}
                  onChange={(e) => setFlowRate(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Bamboo Length: {bambooLength} cm</label>
                <input 
                  type="range" 
                  min="20" 
                  max="60" 
                  value={bambooLength}
                  onChange={(e) => setBambooLength(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Pivot Position: {(pivotPosition * 100).toFixed(0)}%</label>
                <input 
                  type="range" 
                  min="0.4" 
                  max="0.8" 
                  step="0.05"
                  value={pivotPosition}
                  onChange={(e) => setPivotPosition(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Timing</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between">
                <span>🕐 Cycle Time:</span>
                <span className="font-mono">{fillTime.toFixed(1)} sec</span>
              </div>
              <div className="flex justify-between">
                <span>🔔 Knocks/Hour:</span>
                <span className="font-mono">{(3600 / fillTime).toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span>💧 Fill Level:</span>
                <span className="font-mono">{waterLevel.toFixed(0)}%</span>
              </div>
              <div className="flex justify-between">
                <span>📊 Total Knocks:</span>
                <span className="font-mono">{knockCount}</span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                Originally designed to scare deer (shishi) from gardens, the rhythmic "clack" became prized for its meditative quality in Zen gardens. The bamboo fills, tips, empties, and strikes a stone - a perfect metaphor for impermanence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-4 justify-center">
        <Button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-[var(--cerulean)] hover:bg-[var(--cerulean)]/80"
        >
          {isPlaying ? <><Pause size={16} className="mr-1" /> Pause</> : <><Play size={16} className="mr-1" /> Play</>}
        </Button>
        <Button 
          onClick={reset}
          variant="outline"
          className="border-[var(--aqua)]/50 text-[var(--parchment)]"
        >
          <RotateCcw size={16} className="mr-1" /> Reset
        </Button>
      </div>
    </div>
  );
}
