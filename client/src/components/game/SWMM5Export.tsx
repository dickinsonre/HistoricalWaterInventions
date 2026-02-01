import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Download, Wrench, ExternalLink, Check } from "lucide-react";
import { downloadSWMM5Model, hasSwmm5Model } from "../../lib/swmm5Export";

interface SWMM5ExportProps {
  inventionId: string;
  inventionName: string;
  compact?: boolean;
}

export default function SWMM5Export({ inventionId, inventionName, compact = false }: SWMM5ExportProps) {
  const [downloaded, setDownloaded] = useState(false);
  const [complexity, setComplexity] = useState<"simple" | "detailed">("simple");

  const handleDownload = () => {
    downloadSWMM5Model(inventionId, inventionName);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  if (compact) {
    return (
      <Button
        onClick={handleDownload}
        variant="outline"
        size="sm"
        className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
      >
        {downloaded ? (
          <>
            <Check size={14} className="mr-1 text-green-400" />
            Downloaded
          </>
        ) : (
          <>
            <Download size={14} className="mr-1" />
            SWMM5
          </>
        )}
      </Button>
    );
  }

  return (
    <Card className="water-card border-[var(--terracotta)]/30">
      <CardContent className="p-4">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-[var(--terracotta)]/20 flex items-center justify-center border border-[var(--terracotta)]/30">
            <Wrench className="w-5 h-5 text-[var(--terracotta)]" />
          </div>
          <div className="flex-1">
            <h4 className="font-heading text-[var(--gold)] text-sm flex items-center gap-2">
              Simulate This System
            </h4>
            <p className="text-[var(--parchment)]/70 text-xs">
              Download a SWMM5 model to explore the hydraulics of ancient engineering
            </p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <label className="flex items-center gap-3 p-2 rounded-lg bg-[var(--deep-ocean)]/50 border border-[var(--aqua)]/20 cursor-pointer hover:border-[var(--aqua)]/40 transition-colors">
            <input
              type="radio"
              name="complexity"
              value="simple"
              checked={complexity === "simple"}
              onChange={() => setComplexity("simple")}
              className="accent-[var(--aqua)]"
            />
            <div>
              <span className="text-[var(--parchment)] text-sm font-medium">Simplified Model</span>
              <p className="text-[var(--parchment)]/60 text-xs">Basic hydraulics, quick to run</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-2 rounded-lg bg-[var(--deep-ocean)]/50 border border-[var(--aqua)]/20 cursor-pointer hover:border-[var(--aqua)]/40 transition-colors">
            <input
              type="radio"
              name="complexity"
              value="detailed"
              checked={complexity === "detailed"}
              onChange={() => setComplexity("detailed")}
              className="accent-[var(--aqua)]"
            />
            <div>
              <span className="text-[var(--parchment)] text-sm font-medium">Detailed Model</span>
              <p className="text-[var(--parchment)]/60 text-xs">Realistic parameters, educational annotations</p>
            </div>
          </label>
        </div>

        <Button
          onClick={handleDownload}
          className="w-full bg-gradient-to-r from-[var(--terracotta)] to-[var(--gold)] hover:from-[var(--gold)] hover:to-[var(--terracotta)] text-white"
        >
          {downloaded ? (
            <>
              <Check size={16} className="mr-2" />
              Model Downloaded!
            </>
          ) : (
            <>
              <Download size={16} className="mr-2" />
              Export SWMM5 Model (.inp)
            </>
          )}
        </Button>

        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="text-[var(--parchment)]/60 italic">
            Created by Robert Dickinson
          </span>
          <a 
            href="https://swmm5.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--aqua)] hover:text-[var(--gold)] flex items-center gap-1"
          >
            Open in SWMM5.org <ExternalLink size={10} />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export function SWMM5ExportBadge({ inventionId }: { inventionId: string }) {
  if (!hasSwmm5Model(inventionId)) return null;
  
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[var(--terracotta)]/20 rounded text-xs text-[var(--terracotta)] border border-[var(--terracotta)]/30">
      <Wrench size={10} />
      SWMM5 Model
    </span>
  );
}
