import { useParams, useNavigate, Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Droplets, Lightbulb, Image } from "lucide-react";
import { gameData } from "../../data/gameData";
import { getCivilizationDetail } from "../../data/civilizationDetails";
import { inventionDiagrams } from "../../data/inventionDetails";
import { getCivilizationImage } from "../../data/civilizationImages";

export default function CivilizationPage() {
  const { civilizationId } = useParams<{ civilizationId: string }>();
  const navigate = useNavigate();
  
  const region = gameData.regions.find(r => r.id === civilizationId);
  const details = civilizationId ? getCivilizationDetail(civilizationId) : null;
  
  if (!region) {
    return (
      <div className="min-h-screen bg-[var(--deep-ocean)] flex items-center justify-center p-4">
        <Card className="water-card max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-[var(--gold)] font-heading text-xl mb-4">Civilization Not Found</h2>
            <p className="text-[var(--parchment)]/70 mb-4">The civilization "{civilizationId}" was not found.</p>
            <Button onClick={() => navigate("/")} className="bg-[var(--cerulean)]">
              <ArrowLeft size={16} className="mr-2" /> Back to World Map
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const allArtifacts = region.locations.flatMap(loc => loc.artifacts);

  return (
    <div className="min-h-screen bg-[var(--deep-ocean)] p-4">
      <div className="max-w-4xl mx-auto">
        <Button 
          onClick={() => navigate("/")} 
          variant="outline" 
          className="mb-4 water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to World Map
        </Button>

        <Card className="water-card overflow-hidden">
          <div className="relative h-40 md:h-52 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url('${getCivilizationImage(civilizationId || "")}')`,
                backgroundSize: 'cover'
              }}
            />
            <div 
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, rgba(26, 58, 82, 0.4) 0%, rgba(26, 58, 82, 0.9) 100%)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <div className="flex items-center gap-3">
                <Droplets className="text-[var(--aqua)]" size={32} />
                <div>
                  <h1 className="font-heading text-2xl text-[var(--gold)]">{region.name}</h1>
                  <p style={{ color: 'rgba(245, 240, 225, 0.7)', fontSize: '0.875rem' }}>{region.dateRange} • {region.era}</p>
                </div>
              </div>
            </div>
          </div>
          <CardContent className="p-6">
            <p style={{ color: 'rgba(245, 240, 225, 0.9)' }} className="mb-6">{region.description}</p>

            {details && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {details.keyFacts.map((fact: { value: string; label: string }, idx: number) => (
                  <div key={idx} className="bg-[var(--deep-ocean)]/60 rounded-lg p-3 text-center border border-[var(--aqua)]/20">
                    <p className="text-[var(--gold)] font-heading text-xl">{fact.value}</p>
                    <p className="text-[var(--parchment)]/70 text-xs">{fact.label}</p>
                  </div>
                ))}
              </div>
            )}

            <div>
              <h2 className="font-heading text-lg text-[var(--aqua)] mb-4 flex items-center gap-2">
                <Lightbulb size={20} />
                Water Inventions ({allArtifacts.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allArtifacts.map(artifact => {
                  const hasDiagram = !!inventionDiagrams[artifact.id];
                  return (
                    <Link
                      key={artifact.id}
                      to={`/${civilizationId}/${artifact.id}/details`}
                      className="block bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/20 hover:border-[var(--aqua)]/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-heading text-[var(--gold)]">{artifact.name}</h3>
                        <div className="flex items-center gap-2">
                          {hasDiagram && (
                            <span className="text-xs bg-[var(--gold)]/20 text-[var(--gold)] px-2 py-0.5 rounded-full flex items-center gap-1">
                              <Image size={10} /> Diagram
                            </span>
                          )}
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            artifact.rarity === 'legendary' ? 'bg-[var(--gold)]/20 text-[var(--gold)]' :
                            artifact.rarity === 'epic' ? 'bg-purple-500/20 text-purple-300' :
                            artifact.rarity === 'rare' ? 'bg-[var(--cerulean)]/20 text-[var(--cerulean)]' :
                            'bg-gray-500/20 text-gray-300'
                          }`}>
                            {artifact.rarity}
                          </span>
                        </div>
                      </div>
                      <p className="text-[var(--parchment)]/70 text-sm mb-3">{artifact.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[var(--parchment)]/50 text-xs">{artifact.historicalPeriod}</span>
                        <span className="text-[var(--cerulean)] text-sm flex items-center gap-1">
                          View Details <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
