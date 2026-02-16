import { useState, useMemo } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { X, Search, Monitor, Cpu, Waves, Droplets, Globe, Zap, FlaskConical, Mountain, Anchor, PenTool, Brain, GitBranch, ArrowRight } from "lucide-react";
import { waterSimModels, waterSimCategories, ancientModernConnections } from "../../data/waterSimModels";

interface WaterSimModelsProps {
  onClose: () => void;
}

const categoryIcons: Record<string, any> = {
  "Urban Drainage & Stormwater": Waves,
  "River & Flood Modeling": Droplets,
  "Integrated Catchment Modeling": Globe,
  "Water Distribution": Zap,
  "Groundwater": Mountain,
  "Water Quality": FlaskConical,
  "Hydrologic/Watershed Models": Droplets,
  "Coastal & Ocean": Anchor,
  "Hydraulic Design": PenTool,
  "Real-Time & AI": Brain,
  "Specialized & Emerging": Cpu,
  "The SWMM Family Tree": GitBranch
};

const categoryColors: Record<string, string> = {
  "Urban Drainage & Stormwater": "bg-blue-600",
  "River & Flood Modeling": "bg-cyan-600",
  "Integrated Catchment Modeling": "bg-emerald-600",
  "Water Distribution": "bg-violet-600",
  "Groundwater": "bg-amber-700",
  "Water Quality": "bg-green-600",
  "Hydrologic/Watershed Models": "bg-teal-600",
  "Coastal & Ocean": "bg-sky-600",
  "Hydraulic Design": "bg-orange-600",
  "Real-Time & AI": "bg-purple-600",
  "Specialized & Emerging": "bg-rose-600",
  "The SWMM Family Tree": "bg-red-600"
};

export default function WaterSimModels({ onClose }: WaterSimModelsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showConnections, setShowConnections] = useState(false);
  const [expandedModel, setExpandedModel] = useState<string | null>(null);

  const filteredModels = useMemo(() => {
    return waterSimModels.filter(model => {
      const matchesSearch = !searchTerm ||
        model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        model.developer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        model.firstBecause.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || model.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    waterSimCategories.forEach(cat => {
      counts[cat] = waterSimModels.filter(m => m.category === cat).length;
    });
    return counts;
  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[var(--deep-ocean)] border border-[var(--aqua)]/30 rounded-xl w-full max-w-6xl max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="p-4 border-b border-[var(--aqua)]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Monitor className="w-6 h-6 text-[var(--aqua)]" />
            <div>
              <h2 className="text-xl font-bold text-[var(--parchment)]" style={{ fontFamily: 'Cinzel' }}>
                Water Computer Models
              </h2>
              <p className="text-sm text-[var(--aqua)]/70">
                {waterSimModels.length} pioneering simulation models that transformed water engineering
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowConnections(!showConnections)}
              className={`border-[var(--gold)]/50 ${showConnections ? 'bg-[var(--gold)]/20 text-[var(--gold)]' : 'text-[var(--gold)]/70'}`}
            >
              <ArrowRight className="w-4 h-4 mr-1" />
              Ancient ↔ Modern
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-[var(--parchment)]">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {showConnections && (
          <div className="p-4 border-b border-[var(--gold)]/20 bg-[var(--gold)]/5">
            <h3 className="text-sm font-bold text-[var(--gold)] mb-3" style={{ fontFamily: 'Cinzel' }}>
              Ancient Inventions → Modern Simulation Models
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {ancientModernConnections.map((conn, i) => (
                <div key={i} className="flex items-center gap-2 text-xs bg-black/20 rounded-lg p-2">
                  <span className="text-[var(--terracotta)] font-medium min-w-[140px]">{conn.ancient}</span>
                  <ArrowRight className="w-3 h-3 text-[var(--gold)] flex-shrink-0" />
                  <span className="text-[var(--aqua)] font-medium min-w-[140px]">{conn.modern}</span>
                  <span className="text-[var(--parchment)]/50 hidden lg:inline">— {conn.connection}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="p-4 border-b border-[var(--aqua)]/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--aqua)]/50" />
              <Input
                placeholder="Search models, developers..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-9 bg-black/30 border-[var(--aqua)]/30 text-[var(--parchment)]"
              />
            </div>
            <Badge className="bg-[var(--cerulean)]/30 text-[var(--aqua)]">
              {filteredModels.length} models
            </Badge>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Badge
              className={`cursor-pointer text-xs ${!selectedCategory ? 'bg-[var(--cerulean)] text-white' : 'bg-black/20 text-[var(--parchment)]/60 hover:bg-black/30'}`}
              onClick={() => setSelectedCategory(null)}
            >
              All ({waterSimModels.length})
            </Badge>
            {waterSimCategories.map(cat => {
              const Icon = categoryIcons[cat] || Monitor;
              return (
                <Badge
                  key={cat}
                  className={`cursor-pointer text-xs ${selectedCategory === cat ? `${categoryColors[cat]} text-white` : 'bg-black/20 text-[var(--parchment)]/60 hover:bg-black/30'}`}
                  onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                >
                  <Icon className="w-3 h-3 mr-1" />
                  {cat} ({categoryCounts[cat]})
                </Badge>
              );
            })}
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-280px)] p-4">
          {selectedCategory || searchTerm ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredModels.map(model => (
                <ModelCard
                  key={model.id}
                  model={model}
                  expanded={expandedModel === model.id}
                  onToggle={() => setExpandedModel(expandedModel === model.id ? null : model.id)}
                />
              ))}
            </div>
          ) : (
            waterSimCategories.map(cat => {
              const models = waterSimModels.filter(m => m.category === cat);
              if (models.length === 0) return null;
              const Icon = categoryIcons[cat] || Monitor;
              return (
                <div key={cat} className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-8 h-8 rounded-lg ${categoryColors[cat]} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--parchment)]" style={{ fontFamily: 'Cinzel' }}>
                      {cat}
                    </h3>
                    <Badge className="bg-black/20 text-[var(--aqua)]/70 text-xs">{models.length}</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {models.map(model => (
                      <ModelCard
                        key={model.id}
                        model={model}
                        expanded={expandedModel === model.id}
                        onToggle={() => setExpandedModel(expandedModel === model.id ? null : model.id)}
                      />
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="p-3 border-t border-[var(--aqua)]/20 bg-black/20">
          <p className="text-xs text-center text-[var(--parchment)]/40">
            From stone channels to silicon chips — the tools changed but the questions remain the same: How does water move? How do we manage it?
          </p>
        </div>
      </div>
    </div>
  );
}

function ModelCard({ model, expanded, onToggle }: { model: any; expanded: boolean; onToggle: () => void }) {
  const isActive = model.statusToday.toLowerCase().startsWith("active");
  const isHistorical = model.statusToday.toLowerCase().startsWith("historical") || model.statusToday.toLowerCase().startsWith("superseded") || model.statusToday.toLowerCase().startsWith("evolved") || model.statusToday.toLowerCase().startsWith("foundation");

  return (
    <Card
      className="bg-black/30 border-[var(--aqua)]/20 hover:border-[var(--aqua)]/40 transition-all cursor-pointer"
      onClick={onToggle}
    >
      <CardContent className="p-3">
        <div className="flex items-start justify-between mb-1">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="text-sm font-bold text-[var(--parchment)]">{model.name}</h4>
              <Badge className="text-[10px] bg-[var(--cerulean)]/20 text-[var(--cerulean)]">{model.year}</Badge>
              {isActive && <Badge className="text-[10px] bg-green-600/30 text-green-400">Active</Badge>}
              {isHistorical && <Badge className="text-[10px] bg-amber-600/30 text-amber-400">Historical</Badge>}
            </div>
            <p className="text-xs text-[var(--aqua)]/60 mt-0.5">{model.developer}</p>
          </div>
        </div>
        <p className="text-xs text-[var(--parchment)]/70 mt-1 line-clamp-2">{model.firstBecause}</p>
        {expanded && (
          <div className="mt-3 space-y-2 border-t border-[var(--aqua)]/10 pt-2">
            <div>
              <span className="text-[10px] uppercase tracking-wide text-[var(--aqua)]/50">Why It Was First</span>
              <p className="text-xs text-[var(--parchment)]/80">{model.firstBecause}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wide text-[var(--aqua)]/50">Status Today</span>
              <p className="text-xs text-[var(--parchment)]/80">{model.statusToday}</p>
            </div>
            {model.ancientConnection && (
              <div className="bg-[var(--gold)]/10 rounded p-2">
                <span className="text-[10px] uppercase tracking-wide text-[var(--gold)]">Ancient Connection</span>
                <p className="text-xs text-[var(--parchment)]/80">{model.ancientConnection}</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
