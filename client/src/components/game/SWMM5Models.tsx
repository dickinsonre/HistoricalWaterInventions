import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { X, Download, FileCode, Search, Globe, Clock, Droplets, Info, ExternalLink, Archive } from "lucide-react";
import { SWMM5_MODELS, downloadSWMM5Model, getAllModelContents } from "../../lib/swmm5Export";
import JSZip from "jszip";

interface SWMM5ModelsProps {
  onClose: () => void;
}

const civilizationColors: Record<string, string> = {
  "Roman Empire": "bg-red-600",
  "Ancient Persia": "bg-amber-600",
  "Ancient Egypt": "bg-yellow-600",
  "Ancient China": "bg-red-700",
  "Khmer Empire": "bg-emerald-600",
  "Minoan Crete": "bg-blue-600",
  "Carthage": "bg-purple-600",
  "Medieval Europe": "bg-stone-600",
  "Indus Valley": "bg-orange-600",
  "Nabataean Kingdom": "bg-rose-600",
  "Ancient Greece": "bg-sky-600",
  "Ancient Greece/Egypt": "bg-teal-600",
  "Mesoamerica": "bg-lime-600",
  "Ancient Sri Lanka": "bg-green-600",
  "Inca Empire": "bg-amber-700",
  "Balinese (Subak)": "bg-green-500",
  "Aboriginal Australia": "bg-orange-700",
  "Ancient Japan": "bg-red-500",
  "Dutch Netherlands": "bg-orange-500",
  "Ancient India": "bg-orange-600",
  "Hawaiian": "bg-teal-500",
  "Ethiopian Highlands": "bg-green-700"
};

export default function SWMM5Models({ onClose }: SWMM5ModelsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCivilization, setSelectedCivilization] = useState<string | null>(null);
  const [downloading, setDownloading] = useState<string | null>(null);

  const models = Object.entries(SWMM5_MODELS);
  const [downloadingAll, setDownloadingAll] = useState(false);
  
  const civilizations = Array.from(new Set(models.map(([, model]) => model.civilization))).sort();
  
  const filteredModels = models.filter(([id, model]) => {
    const matchesSearch = 
      model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      model.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      model.civilization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCiv = !selectedCivilization || model.civilization === selectedCivilization;
    return matchesSearch && matchesCiv;
  });

  const handleDownload = async (modelId: string, modelName: string) => {
    setDownloading(modelId);
    try {
      downloadSWMM5Model(modelId, modelName);
    } finally {
      setTimeout(() => setDownloading(null), 1000);
    }
  };

  const handleDownloadAllAsZip = async () => {
    setDownloadingAll(true);
    try {
      const allModels = getAllModelContents();
      
      const combinedContent = `ANCIENT WATER ENGINEERING - SWMM5 EDUCATIONAL MODELS
====================================================
Historical Mystery - Water Inventions Explorer
Educational Hydraulic Simulation Data

This document contains ${allModels.length} EPA SWMM5 hydraulic models
recreating ancient water engineering systems for educational purposes.

HOW TO USE:
1. Download EPA SWMM5 free from: https://www.epa.gov/water-research/storm-water-management-model-swmm
2. Copy the content between START and END markers for each model
3. Save as a .inp file and open in SWMM5

====================================================

${allModels.map(({ filename, content }) => `
${'='.repeat(60)}
MODEL: ${filename.replace('_SWMM5_Model.txt', '')}
${'='.repeat(60)}
--- START OF MODEL ---
${content}
--- END OF MODEL ---
`).join('\n')}

====================================================
END OF EDUCATIONAL MODELS DOCUMENT
====================================================
`;
      
      const blob = new Blob([combinedContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Water_History_Educational_Models.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error creating file:', error);
      alert('Failed to create file');
    } finally {
      setDownloadingAll(false);
    }
  };

  return (
    <Card className="absolute top-16 left-4 right-4 bottom-4 water-card overflow-hidden z-50 pointer-events-auto">
      <CardHeader className="pb-2 border-b border-[var(--aqua)]/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileCode className="text-[var(--cerulean)]" size={24} />
            <div>
              <CardTitle className="font-heading text-xl text-[var(--gold)]">
                SWMM5 Hydraulic Models
              </CardTitle>
              <p className="text-xs text-[var(--parchment)]/70">
                Download simulation files for EPA SWMM5 software
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleDownloadAllAsZip}
              disabled={downloadingAll}
              size="sm"
              className="bg-[var(--gold)] hover:bg-[var(--gold)]/80 text-[var(--deep-ocean)] font-semibold"
            >
              <Download size={16} className="mr-2" />
              {downloadingAll ? "Creating..." : `Download All Models (.txt)`}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/20"
            >
              <X size={18} />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 h-[calc(100%-80px)] overflow-hidden flex flex-col">
        <div className="mb-4 p-3 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/20">
          <div className="flex items-start gap-2">
            <Info size={16} className="text-[var(--cerulean)] mt-0.5 flex-shrink-0" />
            <div className="text-xs text-[var(--parchment)]/80">
              <p className="font-semibold text-[var(--aqua)] mb-1">What is SWMM5?</p>
              <p>
                EPA SWMM (Storm Water Management Model) is industry-standard software for hydraulic simulation. 
                These models let you simulate how ancient water systems actually worked - flow rates, water levels, and system behavior.
              </p>
              <a 
                href="https://www.epa.gov/water-research/storm-water-management-model-swmm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[var(--cerulean)] hover:text-[var(--aqua)] mt-1"
              >
                Download free SWMM5 software <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mb-4 flex-wrap">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--aqua)]/50" size={16} />
            <Input
              placeholder="Search models..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 bg-[var(--deep-ocean)]/40 border-[var(--aqua)]/30 text-[var(--parchment)] placeholder:text-[var(--parchment)]/40"
            />
          </div>
          <select
            value={selectedCivilization || ""}
            onChange={(e) => setSelectedCivilization(e.target.value || null)}
            className="px-3 py-2 rounded-md bg-[var(--deep-ocean)]/40 border border-[var(--aqua)]/30 text-[var(--parchment)] text-sm"
          >
            <option value="">All Civilizations</option>
            {civilizations.map(civ => (
              <option key={civ} value={civ}>{civ}</option>
            ))}
          </select>
          <Button
            onClick={handleDownloadAllAsZip}
            disabled={downloadingAll}
            className="bg-[var(--terracotta)] hover:bg-[var(--terracotta)]/80 text-white"
          >
            <Download size={16} className="mr-2" />
            {downloadingAll ? "Creating..." : `Download All (${models.length}) as .txt`}
          </Button>
        </div>

        <div className="text-xs text-[var(--parchment)]/60 mb-2">
          {filteredModels.length} of {models.length} models
        </div>

        <div className="flex-1 overflow-y-auto space-y-3 pr-2">
          {filteredModels.map(([id, model]) => (
            <div
              key={id}
              className="p-3 bg-[var(--deep-ocean)]/40 rounded-lg border border-[var(--aqua)]/20 hover:border-[var(--cerulean)]/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 className="font-heading text-[var(--gold)] text-sm truncate">
                      {model.name}
                    </h4>
                    <Badge 
                      variant="outline" 
                      className={`text-[10px] text-white border-0 ${civilizationColors[model.civilization] || 'bg-gray-600'}`}
                    >
                      {model.civilization}
                    </Badge>
                  </div>
                  
                  <p className="text-xs text-[var(--parchment)]/70 mb-2 line-clamp-2">
                    {model.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-[10px] text-[var(--parchment)]/50">
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {model.period}
                    </span>
                    {model.parameters.length && (
                      <span className="flex items-center gap-1">
                        <Droplets size={10} />
                        {model.parameters.length >= 1000 
                          ? `${(model.parameters.length / 1000).toFixed(0)}km` 
                          : `${model.parameters.length}m`}
                      </span>
                    )}
                  </div>
                  
                  {model.engineeringNotes && (
                    <p className="text-[10px] text-[var(--aqua)]/70 mt-2 italic line-clamp-2">
                      "{model.engineeringNotes}"
                    </p>
                  )}
                </div>
                
                <Button
                  size="sm"
                  onClick={() => handleDownload(id, model.name)}
                  disabled={downloading === id}
                  className="bg-[var(--cerulean)] hover:bg-[var(--river-blue)] text-white flex-shrink-0"
                >
                  {downloading === id ? (
                    <span className="animate-pulse">...</span>
                  ) : (
                    <>
                      <Download size={14} className="mr-1" />
                      .inp
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
          
          {filteredModels.length === 0 && (
            <div className="text-center py-8 text-[var(--parchment)]/50">
              <FileCode size={32} className="mx-auto mb-2 opacity-50" />
              <p>No models match your search</p>
            </div>
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-[var(--aqua)]/20 text-center">
          <p className="text-[10px] text-[var(--parchment)]/50">
            Models created by Robert Dickinson | 50+ years water engineering expertise
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
