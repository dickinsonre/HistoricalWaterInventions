import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface RomanAqueductSimulatorProps {
  onClose?: () => void;
}

export default function RomanAqueductSimulator({ onClose }: RomanAqueductSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [channelWidth, setChannelWidth] = useState(1.5);
  const [channelDepth, setChannelDepth] = useState(0.8);
  const [gradient, setGradient] = useState(0.3);
  const [archHeight, setArchHeight] = useState(25);
  const [particleOffset, setParticleOffset] = useState(0);
  const [totalDelivered, setTotalDelivered] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const manningN = 0.015;
  const flowDepth = channelDepth * 0.75;
  const area = channelWidth * flowDepth;
  const wettedPerimeter = channelWidth + 2 * flowDepth;
  const hydraulicRadius = area / wettedPerimeter;
  const velocity = (1 / manningN) * Math.pow(hydraulicRadius, 2/3) * Math.pow(gradient / 1000, 0.5);
  const discharge = area * velocity;
  const dailyVolume = discharge * 86400;
  const froudeNumber = velocity / Math.sqrt(9.81 * flowDepth);
  const reynoldsNumber = velocity * hydraulicRadius / 1e-6;
  const peopleServed = Math.floor(dailyVolume / 0.5);

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setParticleOffset(prev => (prev + velocity * 30 * delta) % 40);
      setTotalDelivered(prev => prev + discharge * delta);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isPlaying, velocity, discharge]);

  const reset = () => {
    setIsPlaying(false);
    setTotalDelivered(0);
    setParticleOffset(0);
    lastTimeRef.current = 0;
  };

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Roman Aqueduct Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Ancient Rome ~300 BCE</p>
        </div>
        {onClose && <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#87CEEB] to-[#90EE90] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            <rect x="0" y="200" width="400" height="50" fill="#8B7D3C" />
            <text x="200" y="20" textAnchor="middle" fill="#333" fontSize="10" fontWeight="bold">Elevation View: Gravity-Fed Aqueduct</text>

            {Array.from({ length: 5 }, (_, i) => {
              const x = 40 + i * 80;
              const h = archHeight * 3 + 10;
              return (
                <g key={i}>
                  <rect x={x - 8} y={200 - h} width={8} height={h} fill="#C2A27A" stroke="#8B7D3C" strokeWidth="1" />
                  <rect x={x + 64} y={200 - h} width={8} height={h} fill="#C2A27A" stroke="#8B7D3C" strokeWidth="1" />
                  <path
                    d={`M ${x} ${200 - h + 20} Q ${x + 32} ${200 - h + 50} ${x + 64} ${200 - h + 20}`}
                    fill="none"
                    stroke="#C2A27A"
                    strokeWidth="3"
                  />
                  {archHeight > 15 && (
                    <path
                      d={`M ${x + 10} ${200 - h + 55} Q ${x + 32} ${200 - h + 75} ${x + 54} ${200 - h + 55}`}
                      fill="none"
                      stroke="#C2A27A"
                      strokeWidth="2"
                      opacity="0.7"
                    />
                  )}
                </g>
              );
            })}

            {(() => {
              const topY = 200 - archHeight * 3 - 10;
              return (
                <g>
                  <rect x="30" y={topY - 12} width="350" height={12 + channelDepth * 10} fill="#C2A27A" stroke="#8B7D3C" strokeWidth="1" />
                  <rect x="35" y={topY - 8} width="340" height={flowDepth * 10} fill="#4169E1" opacity="0.7" />
                  {isPlaying && Array.from({ length: 15 }, (_, i) => (
                    <circle
                      key={i}
                      cx={40 + ((i * 25 + particleOffset) % 330)}
                      cy={topY - 8 + flowDepth * 5}
                      r={1.5}
                      fill="#00BFFF"
                      opacity={0.9}
                    />
                  ))}
                </g>
              );
            })()}

            <rect x="5" y="140" width="30" height="60" fill="#8B6914" opacity="0.5" rx="2" />
            <text x="20" y="155" textAnchor="middle" fill="#654321" fontSize="7">Source</text>

            <rect x="370" y="150" width="25" height="50" fill="#C2A27A" opacity="0.7" rx="2" />
            <text x="382" y="165" textAnchor="middle" fill="#654321" fontSize="6">City</text>

            <text x="200" y="240" textAnchor="middle" fill="#654321" fontSize="9">
              Height: {archHeight}m | Gradient: {gradient} m/km
            </text>
          </svg>

          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            Flow: {discharge.toFixed(2)} m³/s
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Channel Width: {channelWidth.toFixed(1)} m</label>
                <input type="range" min="0.5" max="3.0" step="0.1" value={channelWidth}
                  onChange={(e) => setChannelWidth(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Channel Depth: {channelDepth.toFixed(1)} m</label>
                <input type="range" min="0.3" max="1.5" step="0.1" value={channelDepth}
                  onChange={(e) => setChannelDepth(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Gradient: {gradient.toFixed(1)} m/km</label>
                <input type="range" min="0.1" max="2.0" step="0.1" value={gradient}
                  onChange={(e) => setGradient(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Arch Height: {archHeight} m</label>
                <input type="range" min="5" max="50" value={archHeight}
                  onChange={(e) => setArchHeight(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Results</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between"><span>💧 Discharge:</span><span className="font-mono">{discharge.toFixed(3)} m³/s</span></div>
              <div className="flex justify-between"><span>🌊 Velocity:</span><span className="font-mono">{velocity.toFixed(2)} m/s</span></div>
              <div className="flex justify-between"><span>📏 Daily Volume:</span><span className="font-mono">{(dailyVolume/1000).toFixed(0)} m³/day</span></div>
              <div className="flex justify-between"><span>🏛️ Froude No.:</span><span className="font-mono">{froudeNumber.toFixed(3)}</span></div>
              <div className="flex justify-between"><span>👥 People Served:</span><span className="font-mono">{peopleServed.toLocaleString()}</span></div>
              <div className="flex justify-between"><span>📊 Total:</span><span className="font-mono">{(totalDelivered/1000).toFixed(1)} m³</span></div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                Rome's 11 aqueducts delivered over 1 million m³ daily. The Pont du Gard drops only 2.5 cm per kilometer over 50 km — extraordinary precision for 19 BCE!
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
