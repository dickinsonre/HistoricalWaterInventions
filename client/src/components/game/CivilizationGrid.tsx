import { Card, CardContent } from "../ui/card";
import { MapPin, Droplets, ChevronRight } from "lucide-react";
import { gameData } from "../../data/gameData";

interface CivilizationGridProps {
  onSelectCivilization: (id: string) => void;
}

const civilizationMeta: Record<string, { region: string; keyInvention: string; description: string }> = {
  "ancient-egypt": {
    region: "Nile Valley",
    keyInvention: "Shaduf",
    description: "The Nile's predictable floods enabled history's longest-lasting civilization."
  },
  "mesopotamia": {
    region: "Iraq/Syria",
    keyInvention: "Irrigation Canals",
    description: "Where agriculture—and civilization—began with controlled water."
  },
  "ancient-persia": {
    region: "Iran/Central Asia",
    keyInvention: "Qanat",
    description: "Underground aqueducts brought mountain water across deserts—still operating today."
  },
  "indus-valley": {
    region: "Pakistan/India",
    keyInvention: "Urban Drainage",
    description: "The world's first planned cities with sophisticated water and sanitation systems."
  },
  "ancient-greece": {
    region: "Greece/Aegean",
    keyInvention: "Hydraulic Engineering",
    description: "Philosophy met engineering: understanding water's behavior through observation."
  },
  "ancient-rome": {
    region: "Mediterranean",
    keyInvention: "Aqueducts",
    description: "Engineering at imperial scale: supplying a million people with fresh water daily."
  },
  "ancient-china": {
    region: "East Asia",
    keyInvention: "Grand Canal",
    description: "Connecting rivers, moving grain, and unifying an empire through waterways."
  },
  "islamic-golden-age": {
    region: "Middle East/Spain",
    keyInvention: "Water Wheels",
    description: "Preserving Roman knowledge while inventing new irrigation technologies."
  },
  "mesoamerica": {
    region: "Central America",
    keyInvention: "Chinampas",
    description: "Floating gardens that fed empires in the heart of a lake."
  },
  "minoan-crete": {
    region: "Crete, Greece",
    keyInvention: "Flush Toilets",
    description: "Palace plumbing 3,700 years ago that Europe wouldn't match for millennia."
  },
  "khmer-empire": {
    region: "Cambodia",
    keyInvention: "Baray Reservoirs",
    description: "Massive reservoirs that sustained a civilization of over a million people."
  },
  "nubia": {
    region: "Sudan/Egypt",
    keyInvention: "Sakia Water Wheel",
    description: "Adapted and innovated Egyptian techniques for the Upper Nile."
  },
  "nabataean": {
    region: "Jordan/Arabia",
    keyInvention: "Desert Cisterns",
    description: "Masters of capturing every drop in one of Earth's driest regions."
  },
  "sri-lanka": {
    region: "Sri Lanka",
    keyInvention: "Tank Cascades",
    description: "Interconnected reservoir systems that created 'hydraulic civilizations.'"
  },
  "ancestral-puebloans": {
    region: "US Southwest",
    keyInvention: "Check Dams",
    description: "Desert farmers who made the arid landscape bloom."
  },
  "byzantine": {
    region: "Turkey/Eastern Med",
    keyInvention: "Underground Cisterns",
    description: "Preserved Roman engineering while Constantinople flourished."
  },
  "modern-era": {
    region: "Global",
    keyInvention: "Mega Dams",
    description: "Industrial-scale water management with both triumphs and challenges."
  }
};

export default function CivilizationGrid({ onSelectCivilization }: CivilizationGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {gameData.regions.map(region => {
        const meta = civilizationMeta[region.id] || {
          region: "Unknown",
          keyInvention: "Various",
          description: "Ancient water engineering civilization."
        };
        
        const inventionCount = region.locations.reduce(
          (acc, loc) => acc + loc.artifacts.length, 0
        );

        return (
          <Card 
            key={region.id}
            className="water-card cursor-pointer hover:border-[var(--gold)] transition-all hover:scale-[1.02] group"
            style={{ borderLeftColor: region.color, borderLeftWidth: '4px' }}
            onClick={() => onSelectCivilization(region.id)}
          >
            <CardContent className="p-4">
              <div 
                className="rounded-lg px-3 py-2 mb-3"
                style={{ backgroundColor: `${region.color}20` }}
              >
                <h3 className="font-heading text-[var(--gold)] text-lg">{region.name}</h3>
                <span className="text-[var(--parchment)]/60 text-xs">{region.dateRange}</span>
              </div>

              <div className="space-y-2 mb-3">
                <p className="flex items-center gap-2 text-[var(--parchment)]/80 text-sm">
                  <MapPin size={14} className="text-[var(--aqua)]" />
                  {meta.region}
                </p>
                <p className="text-[var(--parchment)]/70 text-sm">
                  {meta.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs border-t border-[var(--aqua)]/20 pt-3">
                <span className="flex items-center gap-1 text-[var(--aqua)]">
                  <Droplets size={12} />
                  {inventionCount} inventions
                </span>
                <span className="text-[var(--parchment)]/60">
                  Key: {meta.keyInvention}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-end text-[var(--gold)] text-sm group-hover:translate-x-1 transition-transform">
                Explore <ChevronRight size={16} />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
