import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { X, Droplets, User, Award, ExternalLink } from "lucide-react";

interface AboutSectionProps {
  onClose: () => void;
}

export default function AboutSection({ onClose }: AboutSectionProps) {
  return (
    <Card className="water-card max-w-lg w-full max-h-[80vh] overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <User className="text-[var(--aqua)]" size={24} />
            <h2 className="font-heading text-2xl text-[var(--gold)]">About This Project</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
          >
            <X size={20} />
          </Button>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--cerulean)] to-[var(--deep-ocean)] flex items-center justify-center">
              <Droplets size={40} className="text-[var(--aqua)]" />
            </div>
            <h3 className="font-heading text-xl text-[var(--parchment)]">Created by Robert Dickinson</h3>
            <p className="text-[var(--parchment)]/60 text-sm">50+ years in water infrastructure modeling</p>
          </div>

          <div className="p-4 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/20">
            <div className="flex items-center gap-2 mb-2">
              <Award className="text-[var(--gold)]" size={18} />
              <h4 className="font-heading text-[var(--gold)]">Expertise</h4>
            </div>
            <p className="text-[var(--parchment)]/80 text-sm">
              Autodesk/Innovyze veteran with decades of experience in hydraulic modeling and water infrastructure design.
            </p>
          </div>

          <blockquote className="italic text-[var(--parchment)]/90 text-center px-4 py-3 border-l-4 border-[var(--gold)] bg-[var(--deep-ocean)]/40">
            "Ancient engineers solved problems we still face today. Their ingenuity inspires modern hydraulic design."
          </blockquote>

          <div className="space-y-2">
            <h4 className="font-heading text-[var(--aqua)] text-sm">Why This Project?</h4>
            <p className="text-[var(--parchment)]/80 text-sm">
              Water didn't just shape history—it enabled civilization itself. This interactive experience explores 
              how ancient cultures solved the same water challenges we face today: supply, storage, sanitation, 
              and flood control.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center pt-4 border-t border-[var(--aqua)]/20">
            <a 
              href="https://swmm5.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-[var(--cerulean)] hover:text-[var(--aqua)] transition-colors"
            >
              <ExternalLink size={14} />
              swmm5.org
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
