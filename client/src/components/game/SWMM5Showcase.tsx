import { useState } from "react";
import { FileCode, Download, Copy, Check, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { SWMM5_MODELS, generateSWMM5File, downloadSWMM5Model } from "../../lib/swmm5Export";

interface SWMM5ShowcaseProps {
  onViewAll: () => void;
}

const featuredModels = [
  { id: 'roman-aqueduct', diagram: '/diagrams/aqueduct.png' },
  { id: 'qanat', diagram: '/diagrams/qanat.png' },
  { id: 'archimedes-screw', diagram: '/diagrams/archimedes-screw.png' },
  { id: 'dujiangyan', diagram: '/diagrams/dujiangyan.png' },
  { id: 'cloaca-maxima', diagram: '/diagrams/cloaca-maxima.png' },
  { id: 'baray', diagram: '/diagrams/baray.png' },
  { id: 'inverted-siphon', diagram: '/diagrams/inverted-siphon.png' },
  { id: 'indian-stepwell', diagram: '/diagrams/stepwell.png' },
  { id: 'shaduf', diagram: '/diagrams/shaduf.png' },
  { id: 'minoan-drainage', diagram: '/diagrams/cloaca-maxima.png' },
];

export default function SWMM5Showcase({ onViewAll }: SWMM5ShowcaseProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (modelId: string) => {
    const content = generateSWMM5File(modelId);
    if (content) {
      try {
        await navigator.clipboard.writeText(content);
        setCopiedId(modelId);
        setTimeout(() => setCopiedId(null), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const modelCount = Object.keys(SWMM5_MODELS).length;

  return (
    <div className="bg-gradient-to-r from-[var(--deep-ocean)] to-[var(--river-blue)]/50 rounded-xl border border-[var(--cerulean)]/30 p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[var(--cerulean)]/20 rounded-lg">
            <FileCode className="text-[var(--cerulean)]" size={24} />
          </div>
          <div>
            <h3 className="font-heading text-lg text-[var(--gold)]">SWMM5 Hydraulic Models</h3>
            <p className="text-xs text-[var(--parchment)]/70">
              {modelCount}+ EPA SWMM5 simulation files for educational use
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onViewAll}
          className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--cerulean)]/50"
        >
          View All
          <ChevronRight size={16} className="ml-1" />
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {featuredModels.slice(0, 8).map(({ id, diagram }) => {
          const model = SWMM5_MODELS[id];
          if (!model) return null;
          
          return (
            <div 
              key={id}
              className="bg-[var(--deep-ocean)]/80 rounded-lg border border-[var(--aqua)]/20 overflow-hidden hover:border-[var(--cerulean)]/50 transition-colors group"
            >
              <div className="h-20 overflow-hidden bg-[var(--river-blue)]/30">
                <img 
                  src={diagram} 
                  alt={model.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="p-2">
                <h4 className="text-xs font-medium text-[var(--parchment)] truncate mb-1">
                  {model.name}
                </h4>
                <p className="text-[10px] text-[var(--parchment)]/60 mb-2 truncate">
                  {model.civilization}
                </p>
                <div className="flex gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleCopy(id)}
                    className="flex-1 h-6 text-[10px] bg-[var(--cerulean)]/20 hover:bg-[var(--cerulean)]/40 text-[var(--parchment)]"
                  >
                    {copiedId === id ? (
                      <>
                        <Check size={10} className="mr-1" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={10} className="mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => downloadSWMM5Model(id, model.name)}
                    className="h-6 px-2 bg-[var(--deep-ocean)] hover:bg-[var(--cerulean)]/30 text-[var(--parchment)]"
                  >
                    <Download size={10} />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex items-center justify-center gap-4 text-xs text-[var(--parchment)]/60">
        <a 
          href="https://www.epa.gov/water-research/storm-water-management-model-swmm"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-[var(--cerulean)]"
        >
          <ExternalLink size={12} />
          Get EPA SWMM5 (Free)
        </a>
        <span>•</span>
        <span>Copy models to clipboard to avoid antivirus issues</span>
      </div>
    </div>
  );
}
