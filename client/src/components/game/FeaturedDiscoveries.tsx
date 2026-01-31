import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { X, Droplets, MapPin, Calendar } from "lucide-react";
import { gameData, getAllArtifacts } from "../../data/gameData";

interface FeaturedDiscoveriesProps {
  onClose: () => void;
  onViewInvention?: (id: string) => void;
}

const featuredInventions = [
  {
    id: "shaduf",
    emoji: "🇪🇬",
    region: "Ancient Egypt",
    year: "2000 BCE",
    highlight: "The lever-based water lifting device that made Nile agriculture possible"
  },
  {
    id: "aqua-appia",
    emoji: "🇮🇹",
    region: "Roman Empire", 
    year: "312 BCE",
    highlight: "Engineering marvels that delivered 1 million cubic meters daily to Rome"
  },
  {
    id: "qanat-plans",
    emoji: "🇮🇷",
    region: "Mesopotamia",
    year: "1000 BCE",
    highlight: "Underground channels spanning 50+ kilometers without pumps"
  }
];

export default function FeaturedDiscoveries({ onClose, onViewInvention }: FeaturedDiscoveriesProps) {
  const allArtifacts = getAllArtifacts();

  const getFeaturedArtifact = (id: string) => {
    return allArtifacts.find(a => a.id === id);
  };

  return (
    <Card className="water-card max-w-2xl w-full max-h-[80vh] overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Droplets className="text-[var(--aqua)]" size={24} />
            <h2 className="font-heading text-2xl text-[var(--gold)]">Featured Discoveries</h2>
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

        <p className="text-[var(--parchment)]/80 mb-6">
          Explore these remarkable water engineering achievements that transformed ancient civilizations.
        </p>

        <div className="space-y-4">
          {featuredInventions.map((featured) => {
            const artifact = getFeaturedArtifact(featured.id);
            if (!artifact) return null;

            return (
              <Card 
                key={featured.id} 
                className="bg-[var(--deep-ocean)]/60 border-[var(--aqua)]/20 cursor-pointer hover:border-[var(--aqua)]/50 transition-colors"
                onClick={() => onViewInvention?.(featured.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{featured.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-heading text-lg text-[var(--gold)]">{artifact.name}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          artifact.rarity === 'legendary' ? 'bg-[var(--gold)]/20 text-[var(--gold)]' :
                          artifact.rarity === 'epic' ? 'bg-purple-500/20 text-purple-300' :
                          artifact.rarity === 'rare' ? 'bg-[var(--cerulean)]/20 text-[var(--cerulean)]' :
                          'bg-gray-500/20 text-gray-300'
                        }`}>
                          {artifact.rarity}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-[var(--parchment)]/60 mb-2">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {featured.region}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {featured.year}
                        </span>
                      </div>
                      <p className="text-[var(--parchment)]/90 text-sm">{featured.highlight}</p>
                      <p className="text-[var(--aqua)] text-xs mt-2">Click to learn more →</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-[var(--cerulean)]/10 rounded-lg border border-[var(--aqua)]/20">
          <h4 className="font-heading text-[var(--aqua)] mb-2">Why Ancient Water Engineering Matters Today</h4>
          <p className="text-[var(--parchment)]/80 text-sm">
            Modern cities face the same challenges ancient civilizations solved. Roman drainage still works in modern Rome. 
            Persian qanats inspire sustainable design. Understanding ancient solutions helps us build better futures.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
