import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { X, Globe, Droplets, Building, CloudRain, ArrowRight } from "lucide-react";

interface WhyThisMattersProps {
  onClose: () => void;
}

const modernChallenges = [
  {
    ancient: "Roman drainage",
    modern: "Urban flooding",
    legacy: "Rome's Cloaca Maxima still works after 2,600 years",
    icon: Building
  },
  {
    ancient: "Persian qanats",
    modern: "Water scarcity",
    legacy: "Qanat principles inspire sustainable desert water harvesting",
    icon: Droplets
  },
  {
    ancient: "Egyptian irrigation",
    modern: "Food security",
    legacy: "Nile management principles feed 100 million people today",
    icon: Globe
  },
  {
    ancient: "Mayan reservoirs",
    modern: "Climate resilience",
    legacy: "Rainwater harvesting returns as a modern sustainable practice",
    icon: CloudRain
  }
];

export default function WhyThisMatters({ onClose }: WhyThisMattersProps) {
  return (
    <Card className="water-card max-w-2xl w-full max-h-[80vh] overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Globe className="text-[var(--aqua)]" size={24} />
            <h2 className="font-heading text-2xl text-[var(--gold)]">Why This Matters Today</h2>
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

        <p className="text-[var(--parchment)]/90 mb-6 text-lg">
          Modern cities face the same challenges ancient civilizations solved. Their solutions still work today.
        </p>

        <div className="space-y-4">
          {modernChallenges.map((challenge, idx) => {
            const IconComponent = challenge.icon;
            return (
              <div 
                key={idx}
                className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--cerulean)]/20 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-[var(--aqua)]" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[var(--gold)] font-heading">{challenge.ancient}</span>
                      <ArrowRight size={14} className="text-[var(--parchment)]/50" />
                      <span className="text-[var(--terracotta)]">{challenge.modern}</span>
                    </div>
                    <p className="text-[var(--parchment)]/80 text-sm">{challenge.legacy}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-[var(--cerulean)]/20 to-[var(--river-blue)]/20 rounded-lg border border-[var(--aqua)]/30">
          <p className="text-[var(--parchment)] text-center font-heading text-lg">
            Understanding ancient solutions helps us build better futures.
          </p>
          <p className="text-[var(--aqua)] text-center text-sm mt-2">
            Water didn't just shape history—it enabled civilization itself.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
