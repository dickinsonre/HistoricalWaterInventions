import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { X, ChevronLeft, ChevronRight, Wrench, Sparkles, History, MessageSquare, MapPin, Calendar, Droplets, Image, FileCode, Download, Eye, FileSpreadsheet, FileText, Copy, Check, BookOpen, ExternalLink } from "lucide-react";
import { getAllArtifacts, gameData, ArtifactData } from "../../data/gameData";
import { getInventionDetail, inventionDiagrams } from "../../data/inventionDetails";
import { getSwmmModelForInvention, downloadSWMM5Model, generateSWMM5File } from "../../lib/swmm5Export";
import { generateICMCSV, generateCivil3DScript, downloadExport } from "../../lib/civil3dExport";
import { getReferencesForInvention, getReferenceTypeLabel, getReferenceTypeColor } from "../../data/inventionReferences";

type PreviewType = "swmm5" | "icm" | "civil3d" | null;

interface InventionDetailProps {
  artifactId: string;
  onClose: () => void;
  onNavigate: (artifactId: string) => void;
}

export default function InventionDetail({ artifactId, onClose, onNavigate }: InventionDetailProps) {
  const [activePreview, setActivePreview] = useState<PreviewType>(null);
  const [copied, setCopied] = useState(false);
  const allArtifacts = getAllArtifacts();
  const currentIndex = allArtifacts.findIndex(a => a.id === artifactId);
  const artifact = allArtifacts[currentIndex];
  const details = getInventionDetail(artifactId);
  const swmmModel = getSwmmModelForInvention(artifactId);
  const references = getReferencesForInvention(artifactId);

  const getPreviewContent = (): string => {
    if (activePreview === "swmm5") return generateSWMM5File(artifactId) || "";
    if (activePreview === "icm") return generateICMCSV(artifactId);
    if (activePreview === "civil3d") return generateCivil3DScript(artifactId, artifact?.name || "");
    return "";
  };

  const getPreviewTitle = (): { title: string; ext: string; color: string } => {
    if (activePreview === "swmm5") return { title: "SWMM5 Model", ext: ".inp", color: "var(--cerulean)" };
    if (activePreview === "icm") return { title: "ICM CSV Export", ext: ".csv", color: "var(--gold)" };
    if (activePreview === "civil3d") return { title: "Civil 3D Script", ext: ".scr", color: "var(--terracotta)" };
    return { title: "", ext: "", color: "" };
  };

  const handleCopy = async () => {
    const content = getPreviewContent();
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const content = getPreviewContent();
    if (activePreview === "swmm5") {
      downloadSWMM5Model(artifactId, swmmModel?.name || artifact?.name || "model");
    } else if (activePreview === "icm") {
      downloadExport(content, `${artifactId}_ICM.csv`);
    } else if (activePreview === "civil3d") {
      downloadExport(content, `${artifactId}_Civil3D.scr`);
    }
  };

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
              {swmmModel && (
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--cerulean)]/20 text-[var(--cerulean)] flex items-center gap-1">
                  <FileCode size={12} />
                  SWMM5
                </span>
              )}
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

        {swmmModel && (
          <div className="bg-[var(--cerulean)]/10 border border-[var(--cerulean)]/30 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <FileCode size={18} className="text-[var(--cerulean)]" />
              <div>
                <p className="text-[var(--parchment)] text-sm font-medium">SWMM5, ICM, Civil 3D Network Available</p>
                <p className="text-[var(--parchment)]/60 text-xs">{swmmModel.name} • {swmmModel.period}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="bg-[var(--cerulean)]/20 border border-[var(--cerulean)]/40 rounded-lg p-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[var(--cerulean)] text-sm font-medium">SWMM5</span>
                  <span className="text-[var(--parchment)]/50 text-xs">.inp</span>
                </div>
                <div className="flex gap-1">
                  <Button 
                    size="sm" 
                    onClick={() => setActivePreview("swmm5")}
                    className="flex-1 bg-[var(--deep-ocean)] hover:bg-[var(--deep-ocean)]/80 text-[var(--parchment)] border border-[var(--cerulean)]/50 text-xs px-2"
                  >
                    <Eye size={12} className="mr-1" />
                    Preview
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => downloadSWMM5Model(artifactId, swmmModel.name)}
                    className="bg-[var(--cerulean)] hover:bg-[var(--cerulean)]/80 text-white text-xs px-2"
                  >
                    <Download size={12} />
                  </Button>
                </div>
              </div>
              <div className="bg-[var(--gold)]/20 border border-[var(--gold)]/40 rounded-lg p-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[var(--gold)] text-sm font-medium">ICM</span>
                  <span className="text-[var(--parchment)]/50 text-xs">.csv</span>
                </div>
                <div className="flex gap-1">
                  <Button 
                    size="sm" 
                    onClick={() => setActivePreview("icm")}
                    className="flex-1 bg-[var(--deep-ocean)] hover:bg-[var(--deep-ocean)]/80 text-[var(--parchment)] border border-[var(--gold)]/50 text-xs px-2"
                  >
                    <Eye size={12} className="mr-1" />
                    Preview
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => {
                      const content = generateICMCSV(artifactId);
                      downloadExport(content, `${artifactId}_ICM.csv`);
                    }}
                    className="bg-[var(--gold)] hover:bg-[var(--gold)]/80 text-[var(--deep-ocean)] text-xs px-2"
                  >
                    <Download size={12} />
                  </Button>
                </div>
              </div>
              <div className="bg-[var(--terracotta)]/20 border border-[var(--terracotta)]/40 rounded-lg p-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[var(--terracotta)] text-sm font-medium">Civil 3D</span>
                  <span className="text-[var(--parchment)]/50 text-xs">.scr</span>
                </div>
                <div className="flex gap-1">
                  <Button 
                    size="sm" 
                    onClick={() => setActivePreview("civil3d")}
                    className="flex-1 bg-[var(--deep-ocean)] hover:bg-[var(--deep-ocean)]/80 text-[var(--parchment)] border border-[var(--terracotta)]/50 text-xs px-2"
                  >
                    <Eye size={12} className="mr-1" />
                    Preview
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => {
                      const content = generateCivil3DScript(artifactId, artifact.name);
                      downloadExport(content, `${artifactId}_Civil3D.scr`);
                    }}
                    className="bg-[var(--terracotta)] hover:bg-[var(--terracotta)]/80 text-white text-xs px-2"
                  >
                    <Download size={12} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePreview && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div 
              className="bg-[var(--deep-ocean)] border rounded-lg shadow-2xl flex flex-col"
              style={{ 
                width: '80%', 
                maxWidth: '900px', 
                height: '80%', 
                maxHeight: '700px', 
                resize: 'both', 
                overflow: 'auto', 
                minWidth: '400px', 
                minHeight: '300px',
                borderColor: getPreviewTitle().color 
              }}
            >
              <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: `${getPreviewTitle().color}50` }}>
                <div className="flex items-center gap-2">
                  <FileCode size={20} style={{ color: getPreviewTitle().color }} />
                  <h3 className="font-heading text-lg text-[var(--gold)]">{getPreviewTitle().title} Preview</h3>
                  <span className="text-[var(--parchment)]/60 text-sm">({getPreviewTitle().ext} file)</span>
                </div>
                <Button 
                  size="sm" 
                  variant="ghost"
                  onClick={() => setActivePreview(null)}
                  className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
                >
                  <X size={20} />
                </Button>
              </div>
              <div className="flex-1 p-4 overflow-hidden">
                <textarea
                  readOnly
                  value={getPreviewContent()}
                  className="w-full h-full bg-[#1a2a3a] text-[#e0e8f0] font-mono text-sm p-4 rounded border resize-none"
                  style={{ minHeight: '100%', borderColor: `${getPreviewTitle().color}50` }}
                />
              </div>
              <div className="flex justify-end gap-2 p-4 border-t" style={{ borderColor: `${getPreviewTitle().color}50` }}>
                <Button 
                  size="sm" 
                  onClick={handleCopy}
                  className="bg-[var(--deep-ocean)] hover:bg-[var(--deep-ocean)]/80 text-[var(--parchment)] border"
                  style={{ borderColor: `${getPreviewTitle().color}50` }}
                >
                  {copied ? <Check size={14} className="mr-1 text-green-400" /> : <Copy size={14} className="mr-1" />}
                  {copied ? "Copied!" : "Copy to Clipboard"}
                </Button>
                <Button 
                  size="sm" 
                  onClick={handleDownload}
                  style={{ backgroundColor: getPreviewTitle().color }}
                  className="hover:opacity-80 text-white"
                >
                  <Download size={14} className="mr-1" />
                  Download {getPreviewTitle().ext}
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost"
                  onClick={() => setActivePreview(null)}
                  className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}

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

        {references.length > 0 && (
          <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/20 mt-6">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="text-[var(--cerulean)]" size={20} />
              <h3 className="font-heading text-lg text-[var(--aqua)]">References & Citations</h3>
              <span className="text-[var(--parchment)]/50 text-xs ml-auto">{references.length} source{references.length !== 1 ? "s" : ""}</span>
            </div>
            <div className="space-y-3">
              {references.map((ref, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2 rounded-lg bg-[var(--deep-ocean)]/40 hover:bg-[var(--deep-ocean)]/60 transition-colors">
                  <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap mt-0.5 ${getReferenceTypeColor(ref.type)}`}>
                    {getReferenceTypeLabel(ref.type)}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[var(--parchment)]/90 text-sm font-medium leading-snug">
                      {ref.url ? (
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--aqua)] transition-colors inline-flex items-center gap-1">
                          {ref.title}
                          <ExternalLink size={11} className="text-[var(--aqua)] flex-shrink-0" />
                        </a>
                      ) : ref.title}
                    </p>
                    <p className="text-[var(--parchment)]/50 text-xs mt-0.5">
                      {[ref.author, ref.year, ref.publisher].filter(Boolean).join(" · ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
