import { useParams, useNavigate, Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Droplets, Wrench, Sparkles, History, MessageSquare, Image, ChevronLeft, ChevronRight } from "lucide-react";
import { gameData, getAllArtifacts } from "../../data/gameData";
import { getInventionDetail, inventionDiagrams } from "../../data/inventionDetails";

interface InventionPageProps {
  showDiagram?: boolean;
}

export default function InventionPage({ showDiagram }: InventionPageProps) {
  const { civilizationId, inventionId } = useParams<{ civilizationId: string; inventionId: string }>();
  const navigate = useNavigate();
  
  const allArtifacts = getAllArtifacts();
  const currentIndex = allArtifacts.findIndex(a => a.id === inventionId);
  const artifact = allArtifacts.find(a => a.id === inventionId);
  const details = inventionId ? getInventionDetail(inventionId) : null;
  const diagramUrl = inventionId ? inventionDiagrams[inventionId] : null;

  const findRegionForArtifact = (artifactId: string) => {
    for (const region of gameData.regions) {
      for (const location of region.locations) {
        for (const art of location.artifacts) {
          if (art.id === artifactId) {
            return { region, location };
          }
        }
      }
    }
    return null;
  };

  const regionInfo = inventionId ? findRegionForArtifact(inventionId) : null;
  const prevArtifact = currentIndex > 0 ? allArtifacts[currentIndex - 1] : null;
  const nextArtifact = currentIndex < allArtifacts.length - 1 ? allArtifacts[currentIndex + 1] : null;

  if (!artifact) {
    return (
      <div className="min-h-screen bg-[var(--deep-ocean)] flex items-center justify-center p-4">
        <Card className="water-card max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-[var(--gold)] font-heading text-xl mb-4">Invention Not Found</h2>
            <p className="text-[var(--parchment)]/70 mb-4">The invention "{inventionId}" was not found.</p>
            <Button onClick={() => navigate("/")} className="bg-[var(--cerulean)]">
              <ArrowLeft size={16} className="mr-2" /> Back to World Map
            </Button>
          </CardContent>
        </Card>
      </div>
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

  const getPrevArtifactRegion = () => {
    if (!prevArtifact) return null;
    const info = findRegionForArtifact(prevArtifact.id);
    return info?.region.id;
  };

  const getNextArtifactRegion = () => {
    if (!nextArtifact) return null;
    const info = findRegionForArtifact(nextArtifact.id);
    return info?.region.id;
  };

  return (
    <div className="min-h-screen bg-[var(--deep-ocean)] p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Button 
            onClick={() => navigate(civilizationId ? `/${civilizationId}` : "/")} 
            variant="outline" 
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to {regionInfo?.region.name || "Civilization"}
          </Button>
          
          <div className="flex gap-2">
            {prevArtifact && (
              <Button
                onClick={() => navigate(`/${getPrevArtifactRegion()}/${prevArtifact.id}/details`)}
                variant="outline"
                size="sm"
                className="water-card text-[var(--parchment)]"
              >
                <ChevronLeft size={16} /> Previous
              </Button>
            )}
            {nextArtifact && (
              <Button
                onClick={() => navigate(`/${getNextArtifactRegion()}/${nextArtifact.id}/details`)}
                variant="outline"
                size="sm"
                className="water-card text-[var(--parchment)]"
              >
                Next <ChevronRight size={16} />
              </Button>
            )}
          </div>
        </div>

        <Card className="water-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <Droplets className="text-[var(--aqua)]" size={32} />
              <div>
                <h1 className="font-heading text-2xl text-[var(--gold)]">{artifact.name}</h1>
                <div className="flex items-center gap-3 text-sm text-[var(--parchment)]/70">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {regionInfo?.region.name || "Unknown"}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {formatYear(artifact.yearBCE)}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${rarityColors[artifact.rarity]}`}>
                    {artifact.rarity}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[var(--parchment)]/90 mb-2">{artifact.description}</p>
            <p className="text-[var(--aqua)] text-sm italic mb-6">{artifact.significance}</p>

            {diagramUrl && (
              <div className="mb-6 bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--gold)]/30">
                <div className="flex items-center gap-2 mb-3">
                  <Image className="text-[var(--gold)]" size={20} />
                  <h2 className="font-heading text-lg text-[var(--gold)]">Technical Diagram</h2>
                </div>
                <div className="flex justify-center">
                  <img 
                    src={diagramUrl} 
                    alt={`Diagram of ${artifact.name}`}
                    className="max-w-full h-auto rounded-lg border border-[var(--aqua)]/20 max-h-[400px] object-contain"
                  />
                </div>
                <p className="text-center text-[var(--parchment)]/60 text-sm mt-2">
                  Technical illustration showing how the {artifact.name} works
                </p>
              </div>
            )}

            {details && (
              <div className="space-y-6">
                <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench className="text-[var(--cerulean)]" size={20} />
                    <h2 className="font-heading text-lg text-[var(--aqua)]">How It Works</h2>
                  </div>
                  <ol className="space-y-2 text-[var(--parchment)]/90">
                    {details.howItWorks.map((step, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-[var(--gold)] font-bold min-w-[24px]">{idx + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="text-[var(--gold)]" size={20} />
                    <h2 className="font-heading text-lg text-[var(--aqua)]">Why It Mattered</h2>
                  </div>
                  <ul className="space-y-2 text-[var(--parchment)]/90">
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
                    <h2 className="font-heading text-lg text-[var(--aqua)]">Legacy Today</h2>
                  </div>
                  <ul className="space-y-2 text-[var(--parchment)]/90">
                    {details.legacyToday.map((point, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-[var(--cerulean)]">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[var(--terracotta)]/10 rounded-lg p-4 border border-[var(--terracotta)]/30">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="text-[var(--terracotta)]" size={20} />
                    <h2 className="font-heading text-lg text-[var(--terracotta)]">Expert Commentary</h2>
                    <span className="text-xs text-[var(--parchment)]/60">— Robert Dickinson, Water Engineer (50+ years)</span>
                  </div>
                  <p className="text-[var(--parchment)]/90 italic">"{details.robertsNote}"</p>
                </div>
              </div>
            )}

            {!details && (
              <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-6 border border-[var(--aqua)]/20 text-center">
                <p className="text-[var(--parchment)]/70">
                  Detailed technical information for this invention is coming soon.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
