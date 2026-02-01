import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Quote, AlertTriangle, Lightbulb, ArrowRight, MessageSquare } from "lucide-react";
import { gameData } from "../../data/gameData";
import { getCivilizationDetail } from "../../data/civilizationDetails";

interface CivilizationDetailProps {
  regionId: string;
  onClose: () => void;
  onNavigate: (regionId: string) => void;
  onViewInvention?: (artifactId: string) => void;
}

export default function CivilizationDetail({ regionId, onClose, onNavigate, onViewInvention }: CivilizationDetailProps) {
  const regions = gameData.regions;
  const currentIndex = regions.findIndex(r => r.id === regionId);
  const region = regions[currentIndex];
  const details = getCivilizationDetail(regionId);

  const prevRegion = currentIndex > 0 ? regions[currentIndex - 1] : null;
  const nextRegion = currentIndex < regions.length - 1 ? regions[currentIndex + 1] : null;

  if (!region) {
    return (
      <Card className="water-card max-w-4xl w-full">
        <CardContent className="p-6">
          <p className="text-[var(--parchment)]">Civilization not found</p>
          <Button onClick={onClose} className="mt-4">Close</Button>
        </CardContent>
      </Card>
    );
  }

  const allArtifacts = region.locations.flatMap(loc => loc.artifacts);

  return (
    <Card className="water-card max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
      <CardContent className="p-6 overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="font-heading text-3xl text-[var(--gold)]">{region.name}</h2>
            {details && (
              <p className="text-[var(--aqua)] text-lg">{details.tagline}</p>
            )}
            <div className="flex items-center gap-4 text-sm text-[var(--parchment)]/70 mt-2">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {region.dateRange}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {region.locations.length} historical sites
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

        {details?.quote && (
          <div className="mb-6 p-4 bg-[var(--deep-ocean)]/60 rounded-lg border-l-4 border-[var(--gold)]">
            <div className="flex items-start gap-2">
              <Quote className="text-[var(--gold)] flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-[var(--parchment)] italic text-lg">"{details.quote.text}"</p>
                <p className="text-[var(--parchment)]/60 text-sm mt-1">— {details.quote.author}</p>
              </div>
            </div>
          </div>
        )}

        <p className="text-[var(--parchment)]/90 mb-6">{region.description}</p>

        {details && (
          <div className="space-y-6">
            <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--terracotta)]/30">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="text-[var(--terracotta)]" size={20} />
                <h3 className="font-heading text-lg text-[var(--terracotta)]">The Challenge</h3>
              </div>
              <ul className="space-y-2 text-[var(--parchment)]/90 text-sm">
                {details.challenge.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[var(--terracotta)]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[var(--gold)] text-sm mt-4 font-medium">{details.summary}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {details.keyFacts.map((fact, idx) => (
                <div key={idx} className="bg-[var(--deep-ocean)]/60 rounded-lg p-3 text-center border border-[var(--aqua)]/20">
                  <p className="text-[var(--gold)] font-heading text-xl">{fact.value}</p>
                  <p className="text-[var(--parchment)]/70 text-xs">{fact.label}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-heading text-lg text-[var(--aqua)] mb-3 flex items-center gap-2">
                <Lightbulb size={20} />
                Key Water Inventions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {allArtifacts.map(artifact => (
                  <div 
                    key={artifact.id}
                    onClick={() => onViewInvention?.(artifact.id)}
                    className="bg-[var(--deep-ocean)]/60 rounded-lg p-3 border border-[var(--aqua)]/20 cursor-pointer hover:border-[var(--aqua)]/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-heading text-[var(--gold)] text-sm">{artifact.name}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        artifact.rarity === 'legendary' ? 'bg-[var(--gold)]/20 text-[var(--gold)]' :
                        artifact.rarity === 'epic' ? 'bg-purple-500/20 text-purple-300' :
                        artifact.rarity === 'rare' ? 'bg-[var(--cerulean)]/20 text-[var(--cerulean)]' :
                        'bg-gray-500/20 text-gray-300'
                      }`}>
                        {artifact.rarity}
                      </span>
                    </div>
                    <p className="text-[var(--parchment)]/70 text-xs mb-2">{artifact.description}</p>
                    <button className="w-full bg-[var(--cerulean)] hover:bg-[var(--river-blue)] text-white text-xs py-1.5 px-3 rounded flex items-center justify-center gap-1 transition-colors">
                      View Details & Diagram <ArrowRight size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/20">
              <h3 className="font-heading text-lg text-[var(--aqua)] mb-3">Legacy Today</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--aqua)]/20">
                      <th className="text-left text-[var(--gold)] py-2 pr-4">Ancient Innovation</th>
                      <th className="text-left text-[var(--cerulean)] py-2">Modern Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    {details.legacyTable.map((row, idx) => (
                      <tr key={idx} className="border-b border-[var(--aqua)]/10">
                        <td className="text-[var(--parchment)]/90 py-2 pr-4">{row.ancient}</td>
                        <td className="text-[var(--parchment)]/70 py-2">{row.modern}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[var(--river-blue)]/30 to-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--gold)]/30">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="text-[var(--gold)]" size={20} />
                <h3 className="font-heading text-lg text-[var(--gold)]">Robert's Note</h3>
              </div>
              <blockquote className="text-[var(--parchment)]/90 text-sm italic leading-relaxed">
                "{details.expertNote}"
              </blockquote>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-8 pt-4 border-t border-[var(--aqua)]/20">
          <Button
            variant="outline"
            size="sm"
            onClick={() => prevRegion && onNavigate(prevRegion.id)}
            disabled={!prevRegion}
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30 disabled:opacity-50"
          >
            <ChevronLeft size={16} />
            {prevRegion ? prevRegion.name : "Previous"}
          </Button>

          <span className="text-[var(--parchment)]/50 text-sm">
            {currentIndex + 1} of {regions.length} civilizations
          </span>

          <Button
            variant="outline"
            size="sm"
            onClick={() => nextRegion && onNavigate(nextRegion.id)}
            disabled={!nextRegion}
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30 disabled:opacity-50"
          >
            {nextRegion ? nextRegion.name : "Next"}
            <ChevronRight size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
