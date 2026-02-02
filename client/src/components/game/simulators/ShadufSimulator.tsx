import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface ShadufSimulatorProps {
  onClose?: () => void;
}

export default function ShadufSimulator({ onClose }: ShadufSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [counterweightMass, setCounterweightMass] = useState(25);
  const [armRatio, setArmRatio] = useState(2.7);
  const [bucketVolume, setBucketVolume] = useState(20);
  const [cyclesPerMin, setCyclesPerMin] = useState(5);
  const [angle, setAngle] = useState(0);
  const [waterLevel, setWaterLevel] = useState(0);
  const [totalLifted, setTotalLifted] = useState(0);
  const [cyclePhase, setCyclePhase] = useState<'lowering' | 'filling' | 'lifting' | 'emptying'>('lowering');
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const pivotHeight = 3.0;
  const longArmLength = 4.0;
  const shortArmLength = longArmLength / armRatio;
  const maxWaterMass = (counterweightMass * shortArmLength) / longArmLength - 2;
  const liftHeight = pivotHeight + longArmLength * Math.sin(Math.PI / 3);
  const flowRate = (bucketVolume / 1000) * cyclesPerMin * 60;
  const cycleTime = 60 / cyclesPerMin;

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

      const phaseTime = cycleTime / 4;
      
      setAngle(prev => {
        let newAngle = prev;
        
        if (cyclePhase === 'lowering') {
          newAngle = Math.min(prev + (60 / phaseTime) * delta, 60);
          if (newAngle >= 60) {
            setCyclePhase('filling');
            setWaterLevel(0);
          }
        } else if (cyclePhase === 'filling') {
          setWaterLevel(prev => {
            const newLevel = Math.min(prev + (100 / phaseTime) * delta, 100);
            if (newLevel >= 100) {
              setCyclePhase('lifting');
            }
            return newLevel;
          });
        } else if (cyclePhase === 'lifting') {
          newAngle = Math.max(prev - (60 / phaseTime) * delta, -30);
          if (newAngle <= -30) {
            setCyclePhase('emptying');
          }
        } else if (cyclePhase === 'emptying') {
          setWaterLevel(prev => {
            const newLevel = Math.max(prev - (100 / phaseTime) * delta, 0);
            if (newLevel <= 0) {
              setCyclePhase('lowering');
              setTotalLifted(t => t + bucketVolume);
            }
            return newLevel;
          });
        }
        
        return newAngle;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, cyclePhase, cycleTime, bucketVolume]);

  const reset = () => {
    setIsPlaying(false);
    setAngle(0);
    setWaterLevel(0);
    setTotalLifted(0);
    setCyclePhase('lowering');
    lastTimeRef.current = 0;
  };

  const pivotX = 200;
  const pivotY = 80;
  const armLength = 150;
  const shortArm = armLength / armRatio;
  
  const bucketX = pivotX + armLength * Math.cos((angle - 90) * Math.PI / 180);
  const bucketY = pivotY + armLength * Math.sin((angle - 90) * Math.PI / 180);
  const counterX = pivotX - shortArm * Math.cos((angle - 90) * Math.PI / 180);
  const counterY = pivotY - shortArm * Math.sin((angle - 90) * Math.PI / 180);

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Shaduf Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Ancient Egypt ~1550 BCE</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#87CEEB] to-[#4682B4] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            <rect x="0" y="200" width="400" height="50" fill="#8B4513" />
            <rect x="0" y="180" width="400" height="20" fill="#4169E1" opacity="0.8" />
            
            {[...Array(20)].map((_, i) => (
              <circle 
                key={i}
                cx={50 + (i * 15) + Math.sin(Date.now() / 1000 + i) * 5}
                cy={188}
                r={2}
                fill="#00BFFF"
                opacity={0.6}
              />
            ))}
            
            <rect x={pivotX - 5} y={pivotY} width="10" height="120" fill="#8B4513" />
            <rect x={pivotX - 15} y={pivotY + 110} width="30" height="20" fill="#654321" />
            
            <line 
              x1={counterX} 
              y1={counterY} 
              x2={bucketX} 
              y2={bucketY} 
              stroke="#8B4513" 
              strokeWidth="6"
            />
            
            <circle cx={pivotX} cy={pivotY} r="8" fill="#654321" stroke="#4a3520" strokeWidth="2" />
            
            <rect 
              x={counterX - 15} 
              y={counterY - 10} 
              width="30" 
              height="20" 
              fill="#696969"
              rx="3"
            />
            <text x={counterX} y={counterY + 5} textAnchor="middle" fill="white" fontSize="10">{counterweightMass}kg</text>
            
            <line x1={bucketX} y1={bucketY} x2={bucketX} y2={bucketY + 30} stroke="#8B4513" strokeWidth="2" />
            <rect 
              x={bucketX - 15} 
              y={bucketY + 30} 
              width="30" 
              height="25" 
              fill="#654321"
              stroke="#4a3520"
              strokeWidth="2"
            />
            <rect 
              x={bucketX - 12} 
              y={bucketY + 33 + (22 * (1 - waterLevel / 100))} 
              width="24" 
              height={22 * waterLevel / 100} 
              fill="#4169E1"
              opacity="0.8"
            />
            
            <text x="20" y="30" fill="#333" fontSize="12" fontWeight="bold">
              Phase: {cyclePhase.charAt(0).toUpperCase() + cyclePhase.slice(1)}
            </text>
          </svg>
          
          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            Bucket: {waterLevel.toFixed(0)}% full
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Counterweight: {counterweightMass} kg</label>
                <input 
                  type="range" 
                  min="10" 
                  max="50" 
                  value={counterweightMass}
                  onChange={(e) => setCounterweightMass(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Arm Ratio: {armRatio.toFixed(1)}:1</label>
                <input 
                  type="range" 
                  min="2" 
                  max="4" 
                  step="0.1"
                  value={armRatio}
                  onChange={(e) => setArmRatio(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Bucket Volume: {bucketVolume} L</label>
                <input 
                  type="range" 
                  min="10" 
                  max="40" 
                  value={bucketVolume}
                  onChange={(e) => setBucketVolume(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Cycles/min: {cyclesPerMin}</label>
                <input 
                  type="range" 
                  min="3" 
                  max="8" 
                  value={cyclesPerMin}
                  onChange={(e) => setCyclesPerMin(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Results</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between">
                <span>💧 Flow Rate:</span>
                <span className="font-mono">{flowRate.toFixed(1)} L/hr</span>
              </div>
              <div className="flex justify-between">
                <span>⬆️ Lift Height:</span>
                <span className="font-mono">{liftHeight.toFixed(1)} m</span>
              </div>
              <div className="flex justify-between">
                <span>🏋️ Lift Capacity:</span>
                <span className="font-mono">{maxWaterMass.toFixed(1)} kg</span>
              </div>
              <div className="flex justify-between">
                <span>📊 Total Lifted:</span>
                <span className="font-mono">{totalLifted} L</span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                The shaduf was used in ancient Egypt from 1550 BCE. It allowed one person to lift 2,500 liters per day for irrigation. Still used in Egypt and India today!
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
