import { Wrench, Lightbulb } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface EngineerPerspectiveProps {
  insight: string;
  modernParallel?: {
    title: string;
    description: string;
  };
}

export default function EngineerPerspective({ insight, modernParallel }: EngineerPerspectiveProps) {
  return (
    <Card className="water-card border-[var(--terracotta)]/50">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-[var(--terracotta)]/20 flex items-center justify-center border border-[var(--terracotta)]/30">
            <Wrench className="w-5 h-5 text-[var(--terracotta)]" />
          </div>
          <div>
            <h4 className="font-heading text-[var(--gold)] text-sm">Engineer's Perspective</h4>
            <p className="text-[var(--parchment)]/60 text-xs">Robert Dickinson, 50+ years experience</p>
          </div>
        </div>

        <blockquote className="text-[var(--parchment)]/90 text-sm italic border-l-2 border-[var(--terracotta)]/50 pl-3 mb-4">
          "{insight}"
        </blockquote>

        {modernParallel && (
          <div className="bg-[var(--river-blue)]/20 rounded-lg p-3 border border-[var(--aqua)]/20">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-4 h-4 text-[var(--aqua)]" />
              <h5 className="font-heading text-[var(--aqua)] text-xs">{modernParallel.title}</h5>
            </div>
            <p className="text-[var(--parchment)]/80 text-xs">
              {modernParallel.description}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
