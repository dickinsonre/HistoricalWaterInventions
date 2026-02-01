import { useState, useMemo } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { X, Building2, ChevronLeft, ChevronRight, Droplets, Calendar, MapPin, Sparkles, Filter, Grid, List, User, Lightbulb, CheckCircle, Globe } from "lucide-react";
import { getAllArtifacts, gameData, ArtifactData } from "../../data/gameData";
import { getExpertInventionById, ExpertInvention, formatYear as formatExpertYear } from "../../data/expertInventions";

interface MuseumModeProps {
  onClose: () => void;
  onSelectInvention?: (id: string) => void;
}

type ViewMode = "gallery" | "timeline" | "civilization";
type SortMode = "age" | "name" | "rarity";

const rarityColors: Record<string, string> = {
  common: "from-gray-500 to-gray-600",
  rare: "from-blue-500 to-blue-600",
  epic: "from-purple-500 to-purple-600",
  legendary: "from-amber-500 to-amber-600"
};

const rarityBorders: Record<string, string> = {
  common: "border-gray-500/50",
  rare: "border-blue-500/50",
  epic: "border-purple-500/50",
  legendary: "border-amber-500/50"
};

const categoryIcons: Record<string, string> = {
  irrigation: "🌾",
  aqueduct: "🏛️",
  "water-lifting": "⚙️",
  sanitation: "🚿",
  dam: "🏗️",
  "water-clock": "⏰",
  fountain: "⛲",
  canal: "🚢"
};

export default function MuseumMode({ onClose, onSelectInvention }: MuseumModeProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("gallery");
  const [sortMode, setSortMode] = useState<SortMode>("age");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRarity, setSelectedRarity] = useState<string | null>(null);
  const [selectedCiv, setSelectedCiv] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [detailArtifact, setDetailArtifact] = useState<ArtifactData | null>(null);

  const allArtifacts = getAllArtifacts();
  const itemsPerPage = 12;

  const categories = useMemo(() => {
    const cats = new Set(allArtifacts.map(a => a.category));
    return Array.from(cats);
  }, []);

  const filteredArtifacts = useMemo(() => {
    let filtered = [...allArtifacts];
    
    if (selectedCategory) {
      filtered = filtered.filter(a => a.category === selectedCategory);
    }
    if (selectedRarity) {
      filtered = filtered.filter(a => a.rarity === selectedRarity);
    }
    if (selectedCiv) {
      const region = gameData.regions.find(r => r.id === selectedCiv);
      if (region) {
        const artifactIds = new Set(region.locations.flatMap(l => l.artifacts.map(a => a.id)));
        filtered = filtered.filter(a => artifactIds.has(a.id));
      }
    }

    if (sortMode === "age") {
      filtered.sort((a, b) => (b.yearBCE || 0) - (a.yearBCE || 0));
    } else if (sortMode === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortMode === "rarity") {
      const rarityOrder = { legendary: 0, epic: 1, rare: 2, common: 3 };
      filtered.sort((a, b) => rarityOrder[a.rarity as keyof typeof rarityOrder] - rarityOrder[b.rarity as keyof typeof rarityOrder]);
    }

    return filtered;
  }, [selectedCategory, selectedRarity, selectedCiv, sortMode]);

  const totalPages = Math.ceil(filteredArtifacts.length / itemsPerPage);
  const paginatedArtifacts = filteredArtifacts.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const getArtifactCivilization = (artifactId: string) => {
    for (const region of gameData.regions) {
      for (const location of region.locations) {
        if (location.artifacts.some(a => a.id === artifactId)) {
          return region.name;
        }
      }
    }
    return "Unknown";
  };

  const formatYear = (year: number | undefined) => {
    if (!year) return "Unknown";
    return year > 0 ? `${year} BCE` : `${Math.abs(year)} CE`;
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedRarity(null);
    setSelectedCiv(null);
    setCurrentPage(0);
  };

  if (detailArtifact) {
    const expertData = getExpertInventionById(detailArtifact.id);
    
    return (
      <Card className="water-card max-w-3xl w-full max-h-[85vh] overflow-hidden">
        <CardContent className="p-6 overflow-y-auto max-h-[80vh]">
          <div className="flex justify-between items-center mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDetailArtifact(null)}
              className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
            >
              <ChevronLeft size={20} className="mr-1" />
              Back to Gallery
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
            >
              <X size={20} />
            </Button>
          </div>

          <div className="flex flex-col items-center">
            <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${rarityColors[detailArtifact.rarity]} flex items-center justify-center mb-4 shadow-lg`}>
              <span className="text-5xl">{categoryIcons[detailArtifact.category] || "💧"}</span>
            </div>

            <h2 className="font-heading text-2xl text-[var(--gold)] text-center mb-2">
              {expertData?.name || detailArtifact.name}
            </h2>
            
            {expertData?.alternateNames && expertData.alternateNames.length > 0 && (
              <p className="text-[var(--parchment)]/60 text-xs italic mb-2">
                Also known as: {expertData.alternateNames.slice(0, 3).join(", ")}
              </p>
            )}

            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${rarityColors[detailArtifact.rarity]} text-white capitalize`}>
                {detailArtifact.rarity}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--cerulean)]/30 text-[var(--aqua)] capitalize">
                {detailArtifact.category.replace("-", " ")}
              </span>
              {expertData?.stillInUse && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-600/30 text-green-300 flex items-center gap-1">
                  <CheckCircle size={12} />
                  Still In Use
                </span>
              )}
            </div>

            <div className="w-full space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/30">
                  <Calendar className="text-[var(--gold)] shrink-0" size={20} />
                  <div>
                    <p className="text-[var(--parchment)]/70 text-xs">Time Period</p>
                    <p className="text-[var(--parchment)] text-sm">
                      {expertData ? formatExpertYear(expertData.dateInvented) : formatYear(detailArtifact.yearBCE)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/30">
                  <MapPin className="text-[var(--terracotta)] shrink-0" size={20} />
                  <div>
                    <p className="text-[var(--parchment)]/70 text-xs">Region</p>
                    <p className="text-[var(--parchment)] text-sm">
                      {expertData?.region || getArtifactCivilization(detailArtifact.id)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="text-[var(--gold)]" size={18} />
                  <p className="text-[var(--gold)] font-medium">Historical Significance</p>
                </div>
                <p className="text-[var(--parchment)]/90 text-sm leading-relaxed">
                  {expertData?.description || detailArtifact.description}
                </p>
              </div>

              {expertData?.engineerNotes && (
                <div className="p-4 bg-gradient-to-br from-[var(--terracotta)]/20 to-[var(--deep-ocean)]/60 rounded-lg border border-[var(--terracotta)]/40">
                  <div className="flex items-center gap-2 mb-3">
                    <User className="text-[var(--terracotta)]" size={18} />
                    <div>
                      <p className="text-[var(--terracotta)] font-medium text-sm">Expert Commentary</p>
                      <p className="text-[var(--parchment)]/60 text-xs">Robert Dickinson, 50+ years water engineering</p>
                    </div>
                  </div>
                  <p className="text-[var(--parchment)]/90 text-sm leading-relaxed italic">
                    "{expertData.engineerNotes}"
                  </p>
                </div>
              )}

              {expertData?.modernRelevance && (
                <div className="p-4 bg-[var(--cerulean)]/20 rounded-lg border border-[var(--cerulean)]/40">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="text-[var(--aqua)]" size={18} />
                    <p className="text-[var(--aqua)] font-medium text-sm">Modern Relevance</p>
                  </div>
                  <p className="text-[var(--parchment)]/90 text-sm leading-relaxed">
                    {expertData.modernRelevance}
                  </p>
                </div>
              )}

              {expertData?.useLocations && expertData.useLocations.length > 0 && (
                <div className="p-3 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="text-[var(--gold)]" size={16} />
                    <p className="text-[var(--gold)] font-medium text-xs">Where It's Used Today</p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {expertData.useLocations.map((loc, i) => (
                      <span key={i} className="px-2 py-1 bg-[var(--river-blue)]/30 rounded text-[var(--parchment)]/80 text-xs">
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {expertData?.tags && expertData.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {expertData.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-[var(--deep-ocean)]/40 rounded-full text-[var(--parchment)]/60 text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {onSelectInvention && (
                <Button
                  onClick={() => {
                    onSelectInvention(detailArtifact.id);
                    onClose();
                  }}
                  className="w-full bg-gradient-to-r from-[var(--cerulean)] to-[var(--river-blue)] hover:from-[var(--aqua)] hover:to-[var(--cerulean)] text-white"
                >
                  <Droplets size={16} className="mr-2" />
                  View in 3D World
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="water-card max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <Building2 className="text-[var(--gold)]" size={28} />
            <div>
              <h2 className="font-heading text-2xl text-[var(--gold)]">Water Museum</h2>
              <p className="text-[var(--parchment)]/70 text-sm">
                {filteredArtifacts.length} inventions on display
              </p>
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

        <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-[var(--aqua)]/20">
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSortMode("age")}
              className={`text-xs ${sortMode === "age" ? "bg-[var(--cerulean)]/30 border-[var(--gold)]" : "water-card border-[var(--aqua)]/30"} text-[var(--parchment)]`}
            >
              By Age
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSortMode("name")}
              className={`text-xs ${sortMode === "name" ? "bg-[var(--cerulean)]/30 border-[var(--gold)]" : "water-card border-[var(--aqua)]/30"} text-[var(--parchment)]`}
            >
              A-Z
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSortMode("rarity")}
              className={`text-xs ${sortMode === "rarity" ? "bg-[var(--cerulean)]/30 border-[var(--gold)]" : "water-card border-[var(--aqua)]/30"} text-[var(--parchment)]`}
            >
              By Rarity
            </Button>
          </div>

          <div className="h-6 w-px bg-[var(--aqua)]/30 mx-1" />

          <select
            value={selectedCategory || ""}
            onChange={(e) => { setSelectedCategory(e.target.value || null); setCurrentPage(0); }}
            className="text-xs px-2 py-1 rounded bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/30 text-[var(--parchment)]"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{categoryIcons[cat]} {cat.replace("-", " ")}</option>
            ))}
          </select>

          <select
            value={selectedRarity || ""}
            onChange={(e) => { setSelectedRarity(e.target.value || null); setCurrentPage(0); }}
            className="text-xs px-2 py-1 rounded bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/30 text-[var(--parchment)]"
          >
            <option value="">All Rarities</option>
            <option value="legendary">Legendary</option>
            <option value="epic">Epic</option>
            <option value="rare">Rare</option>
            <option value="common">Common</option>
          </select>

          <select
            value={selectedCiv || ""}
            onChange={(e) => { setSelectedCiv(e.target.value || null); setCurrentPage(0); }}
            className="text-xs px-2 py-1 rounded bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/30 text-[var(--parchment)]"
          >
            <option value="">All Civilizations</option>
            {gameData.regions.map(r => (
              <option key={r.id} value={r.id}>{r.name}</option>
            ))}
          </select>

          {(selectedCategory || selectedRarity || selectedCiv) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-xs text-[var(--aqua)] hover:text-[var(--gold)]"
            >
              Clear Filters
            </Button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto pr-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {paginatedArtifacts.map(artifact => (
              <button
                key={artifact.id}
                onClick={() => setDetailArtifact(artifact)}
                className={`p-3 rounded-lg bg-[var(--deep-ocean)]/60 border ${rarityBorders[artifact.rarity]} hover:border-[var(--gold)]/50 transition-all hover:scale-[1.02] text-left`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${rarityColors[artifact.rarity]} flex items-center justify-center mb-2 mx-auto`}>
                  <span className="text-2xl">{categoryIcons[artifact.category] || "💧"}</span>
                </div>
                <h4 className="font-heading text-sm text-[var(--gold)] text-center line-clamp-2 mb-1">
                  {artifact.name}
                </h4>
                <p className="text-[var(--parchment)]/60 text-xs text-center">
                  {formatYear(artifact.yearBCE)}
                </p>
                <div className="flex justify-center mt-2">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] bg-gradient-to-r ${rarityColors[artifact.rarity]} text-white capitalize`}>
                    {artifact.rarity}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {filteredArtifacts.length === 0 && (
            <div className="text-center py-12">
              <Droplets className="mx-auto text-[var(--aqua)]/50 mb-4" size={48} />
              <p className="text-[var(--parchment)]/70">No inventions match your filters</p>
              <Button
                variant="ghost"
                onClick={clearFilters}
                className="mt-2 text-[var(--aqua)]"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-4 pt-4 border-t border-[var(--aqua)]/20">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 disabled:opacity-30"
            >
              <ChevronLeft size={20} />
            </Button>
            <span className="text-[var(--parchment)]">
              Page {currentPage + 1} of {totalPages}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 disabled:opacity-30"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
