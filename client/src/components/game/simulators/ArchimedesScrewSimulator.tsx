import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface ArchimedesScrewSimulatorProps {
  onClose?: () => void;
}

export default function ArchimedesScrewSimulator({ onClose }: ArchimedesScrewSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(30);
  const [screwAngle, setScrewAngle] = useState(30);
  const [diameter, setDiameter] = useState(0.5);
  const [rotation, setRotation] = useState(0);
  const [waterParticles, setWaterParticles] = useState<{x: number, y: number, phase: number}[]>([]);
  const [totalLifted, setTotalLifted] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const length = 3.0;
  const pitch = 0.3;
  const fillFactor = 0.25;
  const numberOfTurns = length / pitch;
  const volumePerTurn = Math.PI * Math.pow(diameter / 2, 2) * pitch * fillFactor * 1000;
  const flowRate = volumePerTurn * rotationSpeed * 60;
  const liftHeight = length * Math.sin(screwAngle * Math.PI / 180);
  const efficiency = Math.max(0.4, 0.7 - (screwAngle - 30) * 0.01);

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

      setRotation(prev => (prev + rotationSpeed * 6 * delta) % 360);
      
      setWaterParticles(prev => {
        const newParticles = prev.map(p => ({
          ...p,
          phase: p.phase + rotationSpeed * 0.1 * delta,
          y: p.y - rotationSpeed * 0.5 * delta
        })).filter(p => p.y > -50);
        
        if (Math.random() < 0.3) {
          newParticles.push({
            x: 280 + Math.random() * 30,
            y: 180,
            phase: Math.random() * Math.PI * 2
          });
        }
        
        return newParticles;
      });
      
      setTotalLifted(prev => prev + (flowRate / 3600) * delta);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, rotationSpeed, flowRate]);

  const reset = () => {
    setIsPlaying(false);
    setRotation(0);
    setWaterParticles([]);
    setTotalLifted(0);
    lastTimeRef.current = 0;
  };

  const screwLength = 200;
  const screwWidth = 40 + diameter * 60;
  const startX = 100;
  const startY = 50;
  const endX = startX + screwLength * Math.cos(screwAngle * Math.PI / 180);
  const endY = startY + screwLength * Math.sin(screwAngle * Math.PI / 180);

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Archimedes Screw Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Ancient Greece ~250 BCE</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#87CEEB] to-[#4682B4] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            <rect x="0" y="180" width="400" height="70" fill="#8B4513" />
            <rect x="250" y="160" width="150" height="25" fill="#4169E1" opacity="0.8" />
            <rect x="0" y="30" width="120" height="30" fill="#654321" />
            <rect x="20" y="10" width="80" height="30" fill="#4169E1" opacity="0.6" />
            
            <g transform={`rotate(${screwAngle}, ${startX}, ${startY})`}>
              <rect 
                x={startX} 
                y={startY - screwWidth/2} 
                width={screwLength} 
                height={screwWidth} 
                fill="#8B4513"
                stroke="#654321"
                strokeWidth="3"
                rx="5"
              />
              
              {[...Array(Math.floor(numberOfTurns))].map((_, i) => {
                const offset = (i * 360 / numberOfTurns + rotation) % 360;
                const xPos = startX + (i / numberOfTurns) * screwLength;
                return (
                  <g key={i}>
                    <ellipse 
                      cx={xPos + screwLength / numberOfTurns / 2}
                      cy={startY}
                      rx={screwLength / numberOfTurns / 2}
                      ry={screwWidth / 2 - 5}
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="3"
                      opacity={0.8}
                      transform={`rotate(${offset}, ${xPos + screwLength / numberOfTurns / 2}, ${startY})`}
                    />
                  </g>
                );
              })}
              
              {waterParticles.map((p, i) => (
                <circle 
                  key={i}
                  cx={startX + (180 - p.y) / 180 * screwLength}
                  cy={startY + Math.sin(p.phase) * (screwWidth / 3)}
                  r={4}
                  fill="#00BFFF"
                  opacity={0.8}
                />
              ))}
            </g>
            
            <circle 
              cx={startX} 
              cy={startY} 
              r="15" 
              fill="#654321" 
              stroke="#FFD700" 
              strokeWidth="3"
            />
            <line 
              x1={startX} 
              y1={startY - 10} 
              x2={startX} 
              y2={startY + 10} 
              stroke="#FFD700" 
              strokeWidth="3"
              transform={`rotate(${rotation}, ${startX}, ${startY})`}
            />
            
            <text x="20" y="220" fill="white" fontSize="12" fontWeight="bold">
              Rotation: {rotationSpeed} RPM
            </text>
            
            {isPlaying && (
              <g>
                <circle cx="350" cy="170" r="3" fill="#00BFFF">
                  <animate attributeName="cy" values="170;150;170" dur="0.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="360" cy="165" r="2" fill="#00BFFF">
                  <animate attributeName="cy" values="165;145;165" dur="0.6s" repeatCount="indefinite" />
                </circle>
              </g>
            )}
          </svg>
          
          <div className="absolute top-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            Angle: {screwAngle}°
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Rotation Speed: {rotationSpeed} RPM</label>
                <input 
                  type="range" 
                  min="10" 
                  max="60" 
                  value={rotationSpeed}
                  onChange={(e) => setRotationSpeed(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Screw Angle: {screwAngle}°</label>
                <input 
                  type="range" 
                  min="15" 
                  max="45" 
                  value={screwAngle}
                  onChange={(e) => setScrewAngle(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Diameter: {diameter.toFixed(2)} m</label>
                <input 
                  type="range" 
                  min="0.3" 
                  max="0.8" 
                  step="0.05"
                  value={diameter}
                  onChange={(e) => setDiameter(Number(e.target.value))}
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
                <span className="font-mono">{liftHeight.toFixed(2)} m</span>
              </div>
              <div className="flex justify-between">
                <span>⚡ Efficiency:</span>
                <span className="font-mono">{(efficiency * 100).toFixed(0)}%</span>
              </div>
              <div className="flex justify-between">
                <span>📊 Total Lifted:</span>
                <span className="font-mono">{totalLifted.toFixed(1)} L</span>
              </div>
              <div className="flex justify-between">
                <span>🔄 Turns:</span>
                <span className="font-mono">{numberOfTurns.toFixed(0)}</span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                Invented by Archimedes in the 3rd century BCE. The screw lifts water through helical chambers. Optimal angle is 30° for maximum efficiency. Still used worldwide for irrigation and wastewater treatment!
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
