import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { X, ChevronLeft, ChevronRight, Wrench, Sparkles, History, MessageSquare, MapPin, Calendar, Droplets, Image } from "lucide-react";
import { getAllArtifacts, gameData, ArtifactData } from "../../data/gameData";
import { getInventionDetail, inventionDiagrams } from "../../data/inventionDetails";

interface InventionDetailProps {
  artifactId: string;
  onClose: () => void;
  onNavigate: (artifactId: string) => void;
}

export default function InventionDetail({ artifactId, onClose, onNavigate }: InventionDetailProps) {
  const allArtifacts = getAllArtifacts();
  const currentIndex = allArtifacts.findIndex(a => a.id === artifactId);
  const artifact = allArtifacts[currentIndex];
  const details = getInventionDetail(artifactId);

  const findRegionAndLocation = (artifactId: string) => {
    for (const region of gameData.regions) {
      for (const location of region.locations) {
        for (const art of location.artifacts) {
          if (art.id === artifactId) {
            return { region: region.name, location: location.name };
          }
        }
      }
    }
    return { region: "Unknown", location: "Unknown" };
  };

  const { region, location } = findRegionAndLocation(artifactId);

  const prevArtifact = currentIndex > 0 ? allArtifacts[currentIndex - 1] : null;
  const nextArtifact = currentIndex < allArtifacts.length - 1 ? allArtifacts[currentIndex + 1] : null;

  if (!artifact) {
    return (
      <Card className="water-card max-w-3xl w-full">
        <CardContent className="p-6">
          <p className="text-[var(--parchment)]">Invention not found</p>
          <Button onClick={onClose} className="mt-4">Close</Button>
        </CardContent>
      </Card>
    );
  }

  const formatYear = (yearBCE?: number) => {
    if (!yearBCE) return "Unknown";
    if (yearBCE > 0) return `${yearBCE} BCE`;
    return `${Math.abs(yearBCE)} CE`;
  };

  const rarityColors: Record<string, string> = {
    common: "bg-gray-500/20 text-gray-300",
    rare: "bg-[var(--cerulean)]/20 text-[var(--cerulean)]",
    epic: "bg-purple-500/20 text-purple-300",
    legendary: "bg-[var(--gold)]/20 text-[var(--gold)]"
  };

  return (
    <Card className="water-card max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
      <CardContent className="p-6 overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Droplets className="text-[var(--aqua)]" size={28} />
              <h2 className="font-heading text-2xl text-[var(--gold)]">{artifact.name}</h2>
              <span className={`text-xs px-2 py-1 rounded-full ${rarityColors[artifact.rarity]}`}>
                {artifact.rarity}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-[var(--parchment)]/70">
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {region}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {formatYear(artifact.yearBCE)}
              </span>
            </div>
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

        <div className="mb-6">
          <p className="text-[var(--parchment)]/90">{artifact.description}</p>
          <p className="text-[var(--aqua)] text-sm mt-2 italic">{artifact.significance}</p>
        </div>

        {inventionDiagrams[artifactId] && (
          <div className="mb-6 bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--gold)]/30">
            <div className="flex items-center gap-2 mb-3">
              <Image className="text-[var(--gold)]" size={20} />
              <h3 className="font-heading text-lg text-[var(--gold)]">Technical Diagram</h3>
            </div>
            <div className="flex justify-center">
              <img 
                src={inventionDiagrams[artifactId]} 
                alt={`Diagram of ${artifact.name}`}
                className="max-w-full h-auto rounded-lg border border-[var(--aqua)]/20 max-h-[300px] object-contain"
              />
            </div>
          </div>
        )}

        {details && (
          <div className="space-y-6">
            <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/20">
              <div className="flex items-center gap-2 mb-3">
                <Wrench className="text-[var(--cerulean)]" size={20} />
                <h3 className="font-heading text-lg text-[var(--aqua)]">How It Works</h3>
              </div>
              <ol className="space-y-2 text-[var(--parchment)]/90 text-sm">
                {details.howItWorks.map((step, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[var(--gold)] font-bold min-w-[20px]">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/20">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="text-[var(--gold)]" size={20} />
                <h3 className="font-heading text-lg text-[var(--aqua)]">Why It Mattered</h3>
              </div>
              <ul className="space-y-2 text-[var(--parchment)]/90 text-sm">
                {details.whyItMattered.map((point, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[var(--terracotta)]">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/20">
              <div className="flex items-center gap-2 mb-3">
                <History className="text-[var(--terracotta)]" size={20} />
                <h3 className="font-heading text-lg text-[var(--aqua)]">Legacy Today</h3>
              </div>
              <ul className="space-y-2 text-[var(--parchment)]/90 text-sm">
                {details.legacyToday.map((legacy, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[var(--cerulean)]">→</span>
                    <span>{legacy}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[var(--river-blue)]/30 to-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--gold)]/30">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="text-[var(--gold)]" size={20} />
                <h3 className="font-heading text-lg text-[var(--gold)]">Robert's Note</h3>
              </div>
              <blockquote className="text-[var(--parchment)]/90 text-sm italic leading-relaxed">
                "{details.robertsNote}"
              </blockquote>
            </div>
          </div>
        )}

        {!details && (
          <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/20">
            <p className="text-[var(--parchment)]/70 text-sm italic">
              Detailed information for this invention is being researched. Check back soon!
            </p>
          </div>
        )}

        <div className="flex items-center justify-between mt-8 pt-4 border-t border-[var(--aqua)]/20">
          <Button
            variant="outline"
            size="sm"
            onClick={() => prevArtifact && onNavigate(prevArtifact.id)}
            disabled={!prevArtifact}
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30 disabled:opacity-50"
          >
            <ChevronLeft size={16} />
            {prevArtifact ? prevArtifact.name : "Previous"}
          </Button>

          <span className="text-[var(--parchment)]/50 text-sm">
            {currentIndex + 1} of {allArtifacts.length}
          </span>

          <Button
            variant="outline"
            size="sm"
            onClick={() => nextArtifact && onNavigate(nextArtifact.id)}
            disabled={!nextArtifact}
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30 disabled:opacity-50"
          >
            {nextArtifact ? nextArtifact.name : "Next"}
            <ChevronRight size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
