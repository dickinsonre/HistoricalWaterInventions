import { useState, useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Play, Pause, RotateCcw, Info } from "lucide-react";

interface WaterFiltrationSimulatorProps {
  onClose?: () => void;
}

export default function WaterFiltrationSimulator({ onClose }: WaterFiltrationSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [flowRate, setFlowRate] = useState(10);
  const [sandDepth, setSandDepth] = useState(50);
  const [gravelDepth, setGravelDepth] = useState(20);
  const [charcoalDepth, setCharcoalDepth] = useState(25);
  const [animTime, setAnimTime] = useState(0);
  const [totalFiltered, setTotalFiltered] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const totalDepth = sandDepth + gravelDepth + charcoalDepth;
  const darcyK = 0.0005;
  const headLoss = totalDepth / 100;
  const maxFlow = darcyK * (1 / headLoss) * 1000 * 3600;
  const actualOutput = Math.min(flowRate, maxFlow) * (1 - totalDepth / 500);

  const charcoalEff = Math.min(charcoalDepth / 50 * 40, 40);
  const sandEff = Math.min(sandDepth / 100 * 45, 45);
  const gravelEff = Math.min(gravelDepth / 50 * 15, 15);
  const speedPenalty = Math.max(0, (flowRate - 10) / 40 * 20);
  const filtrationEfficiency = Math.min(charcoalEff + sandEff + gravelEff - speedPenalty, 99.5);
  const turbidityRemoval = Math.min(sandEff * 2 + gravelEff, 99);
  const pathogenReduction = Math.min((charcoalDepth / 50 * 2) + (sandDepth / 100 * 2) - (flowRate / 50), 4);

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }
    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;
      setAnimTime(prev => prev + delta);
      setTotalFiltered(prev => prev + actualOutput * delta / 3600);
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [isPlaying, actualOutput]);

  const reset = () => {
    setIsPlaying(false);
    setAnimTime(0);
    setTotalFiltered(0);
    lastTimeRef.current = 0;
  };

  const containerTop = 20;
  const containerBottom = 230;
  const containerH = containerBottom - containerTop;
  const totalLayerUnits = charcoalDepth + sandDepth + gravelDepth;
  const waterZoneH = 35;
  const layerZoneH = containerH - waterZoneH - 25;
  const charcoalH = (charcoalDepth / totalLayerUnits) * layerZoneH;
  const sandH = (sandDepth / totalLayerUnits) * layerZoneH;
  const gravelH = (gravelDepth / totalLayerUnits) * layerZoneH;

  const charcoalTop = containerTop + waterZoneH;
  const sandTop = charcoalTop + charcoalH;
  const gravelTop = sandTop + sandH;
  const collectionTop = gravelTop + gravelH;

  const particleSpeed = 0.5 + flowRate * 0.05;

  return (
    <div className="bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-4 max-w-4xl w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-[var(--gold)] text-xl font-cinzel">Water Filtration Simulator</h3>
          <p className="text-[var(--parchment)]/60 text-sm">Multi-Layer Sand Filtration</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]">✕</button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-b from-[#87CEEB] to-[#4682B4] rounded-lg p-4 relative overflow-hidden">
          <svg viewBox="0 0 400 250" className="w-full h-64">
            <rect x="0" y="0" width="400" height="250" fill="#e8e0d0" />

            <rect x="120" y={containerTop} width="160" height={containerH} fill="none" stroke="#5D4037" strokeWidth="3" rx="2" />

            <rect x="122" y={containerTop + 2} width="156" height={waterZoneH - 2} fill="#8B6914" opacity="0.4" />
            <rect x="122" y={containerTop + 8} width="156" height={waterZoneH - 10} fill="#A0522D" opacity="0.3" />
            <text x="200" y={containerTop + waterZoneH / 2 + 3} textAnchor="middle" fill="#5D4037" fontSize="8">DIRTY WATER</text>

            {isPlaying && [...Array(10)].map((_, i) => (
              <circle
                key={`dirty-${i}`}
                cx={135 + (i % 5) * 28}
                cy={containerTop + 5 + Math.floor(i / 5) * 12 + Math.sin(animTime * 2 + i) * 3}
                r={2.5}
                fill="#8B4513"
                opacity={0.7}
              />
            ))}

            <rect x="122" y={charcoalTop} width="156" height={charcoalH} fill="#2C2C2C" />
            {[...Array(30)].map((_, i) => (
              <circle
                key={`char-${i}`}
                cx={130 + (i % 10) * 15}
                cy={charcoalTop + 5 + Math.floor(i / 10) * (charcoalH / 3)}
                r={3}
                fill="#1a1a1a"
                opacity={0.6}
              />
            ))}
            <text x="105" y={charcoalTop + charcoalH / 2 + 3} textAnchor="end" fill="#555" fontSize="7">CHARCOAL</text>
            <text x="105" y={charcoalTop + charcoalH / 2 + 12} textAnchor="end" fill="#777" fontSize="6">{charcoalDepth}cm</text>

            <rect x="122" y={sandTop} width="156" height={sandH} fill="#DEB887" />
            {[...Array(50)].map((_, i) => (
              <circle
                key={`sand-${i}`}
                cx={125 + (i % 15) * 10}
                cy={sandTop + 3 + Math.floor(i / 15) * (sandH / 4)}
                r={1.5}
                fill="#C4A35A"
                opacity={0.5}
              />
            ))}
            <text x="105" y={sandTop + sandH / 2 + 3} textAnchor="end" fill="#8B7355" fontSize="7">SAND</text>
            <text x="105" y={sandTop + sandH / 2 + 12} textAnchor="end" fill="#8B7355" fontSize="6">{sandDepth}cm</text>

            <rect x="122" y={gravelTop} width="156" height={gravelH} fill="#A0A0A0" />
            {[...Array(20)].map((_, i) => (
              <ellipse
                key={`gravel-${i}`}
                cx={130 + (i % 8) * 19}
                cy={gravelTop + 4 + Math.floor(i / 8) * (gravelH / 3)}
                rx={5}
                ry={3.5}
                fill="#888"
                stroke="#666"
                strokeWidth="0.5"
              />
            ))}
            <text x="105" y={gravelTop + gravelH / 2 + 3} textAnchor="end" fill="#666" fontSize="7">GRAVEL</text>
            <text x="105" y={gravelTop + gravelH / 2 + 12} textAnchor="end" fill="#888" fontSize="6">{gravelDepth}cm</text>

            <rect x="130" y={collectionTop} width="140" height={containerBottom - collectionTop - 2} fill="#E3F2FD" opacity="0.5" />
            <text x="200" y={collectionTop + 12} textAnchor="middle" fill="#1976D2" fontSize="7">COLLECTION</text>

            {isPlaying && [...Array(6)].map((_, i) => {
              const yPos = ((animTime * 30 * particleSpeed + i * 40) % containerH) + containerTop;
              const brownOpacity = yPos < sandTop ? 0.8 : yPos < gravelTop ? 0.4 : 0.1;
              return (
                <circle
                  key={`particle-${i}`}
                  cx={155 + i * 18 + Math.sin(animTime + i) * 5}
                  cy={yPos}
                  r={2}
                  fill={yPos > gravelTop ? "#42A5F5" : "#8B4513"}
                  opacity={brownOpacity}
                />
              );
            })}

            {isPlaying && [...Array(4)].map((_, i) => (
              <circle
                key={`trapped-${i}`}
                cx={140 + i * 30 + Math.sin(i * 3) * 10}
                cy={charcoalTop + charcoalH * 0.3 + i * 5}
                r={1.5}
                fill="#8B4513"
                opacity={0.6}
              />
            ))}

            {isPlaying && (
              <g>
                <line x1="185" y1={containerBottom + 2} x2="185" y2={containerBottom + 15} stroke="#42A5F5" strokeWidth="2" />
                <line x1="200" y1={containerBottom + 2} x2="200" y2={containerBottom + 15} stroke="#42A5F5" strokeWidth="2" />
                <line x1="215" y1={containerBottom + 2} x2="215" y2={containerBottom + 15} stroke="#42A5F5" strokeWidth="2" />
                {[...Array(3)].map((_, i) => (
                  <circle
                    key={`drip-${i}`}
                    cx={185 + i * 15}
                    cy={containerBottom + 10 + ((animTime * 20) % 10)}
                    r={2}
                    fill="#42A5F5"
                    opacity={0.8}
                  />
                ))}
              </g>
            )}

            <rect x="295" y="80" width="95" height="50" rx="5" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1" />
            <text x="342" y="98" textAnchor="middle" fill="#2E7D32" fontSize="8">CLEAN WATER</text>
            <text x="342" y="112" textAnchor="middle" fill="#4CAF50" fontSize="10">{actualOutput.toFixed(1)} L/hr</text>
            <text x="342" y="124" textAnchor="middle" fill="#66BB6A" fontSize="7">{filtrationEfficiency.toFixed(1)}% pure</text>

            <line x1="280" y1={collectionTop + 10} x2="295" y2="105" stroke="#42A5F5" strokeWidth="2" strokeDasharray="4 2" />
          </svg>

          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
            Total Filtered: {totalFiltered.toFixed(1)} L
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/20 rounded p-3">
            <h4 className="text-[var(--aqua)] text-sm font-medium mb-3">Parameters</h4>
            <div className="space-y-3">
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Flow Rate: {flowRate} L/hr</label>
                <input type="range" min="1" max="50" value={flowRate}
                  onChange={(e) => setFlowRate(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Sand Layer: {sandDepth} cm</label>
                <input type="range" min="10" max="100" value={sandDepth}
                  onChange={(e) => setSandDepth(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Gravel Layer: {gravelDepth} cm</label>
                <input type="range" min="5" max="50" value={gravelDepth}
                  onChange={(e) => setGravelDepth(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[var(--parchment)]/70 text-xs">Charcoal Layer: {charcoalDepth} cm</label>
                <input type="range" min="5" max="50" value={charcoalDepth}
                  onChange={(e) => setCharcoalDepth(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--deep-ocean)] rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/30 rounded p-3">
            <h4 className="text-[var(--terracotta)] text-sm font-medium mb-2">Results</h4>
            <div className="space-y-1 text-xs text-[var(--parchment)]/80">
              <div className="flex justify-between">
                <span>✨ Filtration Efficiency:</span>
                <span className="font-mono">{filtrationEfficiency.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>💧 Output Flow Rate:</span>
                <span className="font-mono">{actualOutput.toFixed(1)} L/hr</span>
              </div>
              <div className="flex justify-between">
                <span>🌫️ Turbidity Removal:</span>
                <span className="font-mono">{turbidityRemoval.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>🦠 Pathogen Reduction:</span>
                <span className="font-mono">{Math.max(pathogenReduction, 0).toFixed(1)} log</span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-[var(--gold)] mt-0.5" />
              <p className="text-[var(--parchment)]/70 text-xs">
                The ancient Egyptians used alum as a coagulant by 1500 BCE. Sir Francis Bacon described sand filtration in 1627. John Snow's 1854 cholera investigation proved the link between water quality and disease.
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
