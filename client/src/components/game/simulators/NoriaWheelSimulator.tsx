import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface NoriaWheelSimulatorProps {
  onClose?: () => void;
}

export default function NoriaWheelSimulator({ onClose }: NoriaWheelSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [wheelDiameter, setWheelDiameter] = useState(10);
  const [bucketCount, setBucketCount] = useState(24);
  const [rotationSpeed, setRotationSpeed] = useState(2);
  const [rotation, setRotation] = useState(0);
  const [totalLifted, setTotalLifted] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const bucketVolume = 15;
  const liftHeight = wheelDiameter * 0.9;
  const bucketsPerRotation = bucketCount / 2;
  const flowRate = bucketVolume * bucketsPerRotation * rotationSpeed * 60;
  const efficiency = 0.75;

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

      setRotation(prev => {
        const newRotation = (prev + rotationSpeed * 36 * delta) % 360;
        
        const prevBucket = Math.floor(prev / (360 / bucketCount));
        const newBucket = Math.floor(newRotation / (360 / bucketCount));
        if (newBucket !== prevBucket && newRotation > prev) {
          setTotalLifted(t => t + bucketVolume * efficiency);
        }
        
        return newRotation;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, rotationSpeed, bucketCount]);

  const reset = () => {
    setIsPlaying(false);
    setRotation(0);
    setTotalLifted(0);
    lastTimeRef.current = 0;
  };

  const centerX = 200;
  const centerY = 130;
  const radius = 80;

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Noria Water Wheel Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Islamic Golden Age ~800 CE</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#87CEEB] to-[#4682B4] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 260" className="w-full h-64">
            <rect x="0" y="200" width="400" height="60" fill="#8B4513" />
            <rect x="0" y="180" width="180" height="25" fill="#4169E1" opacity="0.8" />
            
            <rect x="280" y="50" width="100" height="15" fill="#654321" stroke="#8B4513" strokeWidth="2" />
            <rect x="280" y="50" width="100" height="10" fill="#4169E1" opacity="0.6" />
            
            <g transform={`rotate(${rotation}, ${centerX}, ${centerY})`}>
              <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#8B4513" strokeWidth="8" />
              <circle cx={centerX} cy={centerY} r={radius - 10} fill="none" stroke="#654321" strokeWidth="4" />
              
              {[...Array(bucketCount)].map((_, i) => {
                const angle = (i * 360 / bucketCount) * Math.PI / 180;
                const x = centerX + (radius - 5) * Math.cos(angle);
                const y = centerY + (radius - 5) * Math.sin(angle);
                const bucketAngle = (i * 360 / bucketCount);
                
                const isRising = bucketAngle > 90 && bucketAngle < 270;
                const waterFill = isRising ? 0.8 : 0.2;
                
                return (
                  <g key={i} transform={`rotate(${i * 360 / bucketCount}, ${centerX}, ${centerY})`}>
                    <rect 
                      x={centerX + radius - 20} 
                      y={centerY - 8} 
                      width="16" 
                      height="16" 
                      fill="#8B4513"
                      stroke="#654321"
                      strokeWidth="1"
                    />
                    <rect 
                      x={centerX + radius - 18} 
                      y={centerY - 6 + (12 * (1 - waterFill))} 
                      width="12" 
                      height={12 * waterFill} 
                      fill="#4169E1"
                      opacity="0.8"
                    />
                  </g>
                );
              })}
              
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45) * Math.PI / 180;
                return (
                  <line 
                    key={i}
                    x1={centerX}
                    y1={centerY}
                    x2={centerX + (radius - 15) * Math.cos(angle)}
                    y2={centerY + (radius - 15) * Math.sin(angle)}
                    stroke="#654321"
                    strokeWidth="3"
                  />
                );
              })}
            </g>
            
            <circle cx={centerX} cy={centerY} r="12" fill="#654321" stroke="#FFD700" strokeWidth="3" />
            <circle cx={centerX} cy={centerY} r="5" fill="#333" />
            
            <rect x={centerX - 8} y={centerY} width="16" height="80" fill="#8B4513" />
            <rect x={centerX - 20} y={centerY + 70} width="40" height="20" fill="#654321" />
            
            {isPlaying && (
              <g>
                <circle cx="290" cy="58" r="3" fill="#00BFFF" opacity="0.8">
                  <animate attributeName="cx" values="290;370" dur="0.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="310" cy="56" r="2" fill="#00BFFF" opacity="0.6">
                  <animate attributeName="cx" values="310;370" dur="0.6s" repeatCount="indefinite" />
                </circle>
              </g>
            )}
            
            <text x="20" y="245" fill="white" fontSize="12" fontWeight="bold">
              Wheel: {wheelDiameter}m diameter • {bucketCount} buckets
            </text>
          </svg>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Wheel Diameter: {wheelDiameter} m</label>
                <input 
                  type="range" 
                  min="5" 
                  max="20" 
                  value={wheelDiameter}
                  onChange={(e) => setWheelDiameter(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Bucket Count: {bucketCount}</label>
                <input 
                  type="range" 
                  min="12" 
                  max="48" 
                  step="4"
                  value={bucketCount}
                  onChange={(e) => setBucketCount(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Rotation Speed: {rotationSpeed} RPM</label>
                <input 
                  type="range" 
                  min="0.5" 
                  max="5" 
                  step="0.5"
                  value={rotationSpeed}
                  onChange={(e) => setRotationSpeed(Number(e.target.value))}
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
                <span className="font-mono">{flowRate.toFixed(0)} L/hr</span>
              </div>
              <div className="flex justify-between">
                <span>⬆️ Lift Height:</span>
                <span className="font-mono">{liftHeight.toFixed(1)} m</span>
              </div>
              <div className="flex justify-between">
                <span>🪣 Bucket Volume:</span>
                <span className="font-mono">{bucketVolume} L</span>
              </div>
              <div className="flex justify-between">
                <span>📊 Total Lifted:</span>
                <span className="font-mono">{totalLifted.toFixed(0)} L</span>
              </div>
              <div className="flex justify-between">
                <span>⚡ Efficiency:</span>
                <span className="font-mono">{(efficiency * 100).toFixed(0)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                The Noria is a water-lifting wheel powered by river current. Giant versions in Hama, Syria reach 20m diameter and have operated for over 1000 years. Current-powered = no fuel needed!
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
