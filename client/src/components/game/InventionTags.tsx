import { useState, useMemo } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { X, Tag, Search, Hash, Filter, Droplets, Globe } from "lucide-react";
import { gameData, type ArtifactData } from "../../data/gameData";

interface InventionTagsProps {
  onClose: () => void;
  onSelectInvention?: (id: string) => void;
  onSelectCivilization?: (id: string) => void;
}

interface TagDefinition {
  id: string;
  label: string;
  categories: string[];
  keywords: string[];
  color: string;
}

const DISCOVERY_TAGS: TagDefinition[] = [
  { id: "floodcontrol", label: "#floodcontrol", categories: [], keywords: ["flood", "levee", "dike", "dyke", "embankment", "barrier", "overflow"], color: "var(--terracotta)" },
  { id: "watersupply", label: "#watersupply", categories: ["aqueduct"], keywords: ["supply", "conveyance", "conduit", "pipeline", "water supply", "distribution"], color: "var(--cerulean)" },
  { id: "sanitation", label: "#sanitation", categories: ["sanitation"], keywords: ["sewer", "toilet", "bath", "latrine", "hygiene", "waste", "purification"], color: "var(--aqua)" },
  { id: "irrigation", label: "#irrigation", categories: ["irrigation"], keywords: ["irrigat", "farm", "agriculture", "field", "crop", "terrace"], color: "#4CAF50" },
  { id: "groundwater", label: "#groundwater", categories: [], keywords: ["qanat", "well", "spring", "groundwater", "foggara", "khettara", "falaj", "underground", "subterranean"], color: "#795548" },
  { id: "waterlifting", label: "#waterlifting", categories: ["water-lifting"], keywords: ["shaduf", "noria", "pump", "chain pump", "screw", "lifting", "sakia", "water wheel"], color: "#FF9800" },
  { id: "navigation", label: "#navigation", categories: [], keywords: ["navigat", "ship", "harbor", "port", "dock", "canal lock", "lock", "boat", "maritime", "longship", "canoe"], color: "#03A9F4" },
  { id: "hydropower", label: "#hydropower", categories: [], keywords: ["mill", "turbine", "hydropower", "water wheel", "watermill", "water-powered", "mechanical power"], color: "#F44336" },
  { id: "waterclock", label: "#waterclock", categories: ["water-clock"], keywords: ["clock", "clepsydra", "timekeep", "suikinkutsu"], color: "var(--gold)" },
  { id: "aqueduct", label: "#aqueduct", categories: ["aqueduct"], keywords: ["aqueduct", "tunnel", "siphon", "conduit", "suido"], color: "#9C27B0" },
  { id: "dam", label: "#dam", categories: ["dam"], keywords: ["dam", "barrage", "weir", "anicut"], color: "#607D8B" },
  { id: "canal", label: "#canal", categories: ["canal"], keywords: ["canal", "channel", "klong", "waterway"], color: "#00BCD4" },
  { id: "fountain", label: "#fountain", categories: ["fountain"], keywords: ["fountain", "bath", "thermae", "nymphaeum", "garden"], color: "#E91E63" },
  { id: "rainwater", label: "#rainwater", categories: [], keywords: ["cistern", "rainwater", "rain harvest", "chultun", "aguada", "roof drain", "rain collect"], color: "#8BC34A" },
  { id: "desalination", label: "#desalination", categories: [], keywords: ["desalinat", "salt", "reverse osmosis", "newater", "distill", "brackish"], color: "#FF5722" },
  { id: "drainage", label: "#drainage", categories: [], keywords: ["drain", "culvert", "sewer", "stormwater", "runoff", "cloaca"], color: "#9E9E9E" },
  { id: "reservoir", label: "#reservoir", categories: ["dam"], keywords: ["reservoir", "tank", "baray", "storage", "impound", "lake", "pond", "basin"], color: "#3F51B5" },
  { id: "well", label: "#well", categories: [], keywords: ["well", "stepwell", "vav", "kund", "borehole", "johad"], color: "#CDDC39" },
  { id: "filtration", label: "#filtration", categories: [], keywords: ["filter", "filtrat", "purif", "treatment", "sediment", "sand filter", "hippocratic"], color: "#00E676" },
  { id: "ceremonial", label: "#ceremonial", categories: [], keywords: ["sacred", "ritual", "ceremon", "temple", "holy", "spiritual", "religious", "prayer"], color: "#FFD700" },
];

interface InventionWithContext {
  artifact: ArtifactData;
  regionId: string;
  regionName: string;
  era: string;
}

function getAllInventionsWithContext(): InventionWithContext[] {
  const results: InventionWithContext[] = [];
  for (const region of gameData.regions) {
    for (const location of region.locations) {
      for (const artifact of location.artifacts) {
        results.push({
          artifact,
          regionId: region.id,
          regionName: region.name,
          era: region.era,
        });
      }
    }
  }
  return results;
}

function matchesTag(inv: InventionWithContext, tag: TagDefinition): boolean {
  if (tag.categories.length > 0 && tag.categories.includes(inv.artifact.category)) {
    return true;
  }
  const searchText = `${inv.artifact.name} ${inv.artifact.description}`.toLowerCase();
  return tag.keywords.some(kw => searchText.includes(kw.toLowerCase()));
}

function getRarityBadgeClass(rarity: string): string {
  switch (rarity) {
    case "legendary": return "bg-[var(--gold)]/30 text-[var(--gold)]";
    case "epic": return "bg-purple-500/30 text-purple-300";
    case "rare": return "bg-[var(--cerulean)]/30 text-[var(--aqua)]";
    default: return "bg-gray-500/30 text-gray-300";
  }
}

function getRarityTextClass(rarity: string): string {
  switch (rarity) {
    case "common": return "rarity-common";
    case "rare": return "rarity-rare";
    case "epic": return "rarity-epic";
    case "legendary": return "rarity-legendary";
    default: return "";
  }
}

export default function InventionTags({ onClose, onSelectInvention, onSelectCivilization }: InventionTagsProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filterMode, setFilterMode] = useState<"OR" | "AND">("OR");
  const [searchQuery, setSearchQuery] = useState("");

  const allInventions = useMemo(() => getAllInventionsWithContext(), []);

  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const tag of DISCOVERY_TAGS) {
      counts[tag.id] = allInventions.filter(inv => matchesTag(inv, tag)).length;
    }
    return counts;
  }, [allInventions]);

  const filteredTags = useMemo(() => {
    if (!searchQuery) return DISCOVERY_TAGS;
    const q = searchQuery.toLowerCase();
    return DISCOVERY_TAGS.filter(tag =>
      tag.label.toLowerCase().includes(q) ||
      tag.keywords.some(kw => kw.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const filteredInventions = useMemo(() => {
    let results = allInventions;

    if (selectedTags.length > 0) {
      const activeTags = DISCOVERY_TAGS.filter(t => selectedTags.includes(t.id));
      if (filterMode === "OR") {
        results = results.filter(inv => activeTags.some(tag => matchesTag(inv, tag)));
      } else {
        results = results.filter(inv => activeTags.every(tag => matchesTag(inv, tag)));
      }
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      results = results.filter(inv =>
        inv.artifact.name.toLowerCase().includes(q) ||
        inv.artifact.description.toLowerCase().includes(q) ||
        inv.regionName.toLowerCase().includes(q)
      );
    }

    const seen = new Set<string>();
    return results.filter(inv => {
      if (seen.has(inv.artifact.id)) return false;
      seen.add(inv.artifact.id);
      return true;
    });
  }, [allInventions, selectedTags, filterMode, searchQuery]);

  const toggleTag = (tagId: string) => {
    setSelectedTags(prev =>
      prev.includes(tagId) ? prev.filter(t => t !== tagId) : [...prev, tagId]
    );
  };

  return (
    <Card className="w-full max-w-4xl max-h-[90vh] water-card flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between border-b border-[var(--aqua)]/20 shrink-0">
        <div>
          <CardTitle className="font-heading text-[var(--gold)] text-xl flex items-center gap-2">
            <Tag className="w-5 h-5 text-[var(--aqua)]" />
            Discovery Tags
          </CardTitle>
          <p className="text-[var(--parchment)]/70 text-sm mt-1">
            Explore {allInventions.length} inventions across {gameData.regions.length} civilizations by topic
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
        >
          <X size={16} />
        </Button>
      </CardHeader>

      <CardContent className="p-4 flex flex-col flex-1 overflow-hidden">
        <div className="relative mb-3 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--parchment)]/50" />
          <input
            type="text"
            placeholder="Search tags, inventions, or civilizations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-[var(--deep-ocean)]/60 border border-[var(--aqua)]/20 text-[var(--parchment)] text-sm placeholder:text-[var(--parchment)]/40 focus:outline-none focus:border-[var(--cerulean)]"
          />
        </div>

        <div className="flex items-center gap-2 mb-3 shrink-0">
          <Filter size={14} className="text-[var(--aqua)]" />
          <span className="text-[var(--parchment)]/70 text-xs">Mode:</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFilterMode(prev => prev === "OR" ? "AND" : "OR")}
            className={`text-xs h-6 px-2 ${filterMode === "OR" ? "bg-[var(--cerulean)]/30 text-[var(--aqua)]" : "bg-[var(--terracotta)]/30 text-[var(--terracotta)]"} border-[var(--aqua)]/20`}
          >
            {filterMode === "OR" ? "Any tag (OR)" : "All tags (AND)"}
          </Button>
          {selectedTags.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedTags([])}
              className="text-xs h-6 px-2 text-[var(--parchment)]/60 hover:text-[var(--parchment)]"
            >
              Clear ({selectedTags.length})
            </Button>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4 shrink-0">
          {filteredTags.map(tag => {
            const isSelected = selectedTags.includes(tag.id);
            const count = tagCounts[tag.id] || 0;
            return (
              <button
                key={tag.id}
                onClick={() => toggleTag(tag.id)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-all cursor-pointer border"
                style={{
                  backgroundColor: isSelected ? tag.color : "transparent",
                  borderColor: tag.color,
                  color: isSelected ? "#fff" : tag.color,
                  opacity: count === 0 ? 0.4 : 1,
                }}
              >
                <Hash size={10} />
                {tag.id}
                <span className="ml-0.5 opacity-75">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between mb-3 shrink-0 border-t border-[var(--aqua)]/20 pt-3">
          <p className="text-[var(--parchment)]/70 text-sm flex items-center gap-1">
            <Droplets size={14} className="text-[var(--aqua)]" />
            Showing {filteredInventions.length} inventions
            {selectedTags.length > 0 && ` matching ${selectedTags.length} tag${selectedTags.length > 1 ? "s" : ""}`}
          </p>
        </div>

        <ScrollArea className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pr-2">
            {filteredInventions.map((inv) => (
              <Card
                key={inv.artifact.id}
                className="bg-[var(--deep-ocean)]/50 border-[var(--aqua)]/20 hover:border-[var(--aqua)]/50 transition-colors cursor-pointer"
                onClick={() => onSelectInvention?.(inv.artifact.id)}
              >
                <CardContent className="p-3">
                  <div className="flex items-start justify-between mb-1">
                    <h5 className={`font-medium text-sm ${getRarityTextClass(inv.artifact.rarity)}`}>
                      {inv.artifact.name}
                    </h5>
                    <Badge className={`${getRarityBadgeClass(inv.artifact.rarity)} capitalize text-[10px] shrink-0 ml-1`}>
                      {inv.artifact.rarity}
                    </Badge>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCivilization?.(inv.regionId);
                    }}
                    className="flex items-center gap-1 text-xs text-[var(--cerulean)] hover:text-[var(--aqua)] transition-colors mb-1.5"
                  >
                    <Globe size={11} />
                    {inv.regionName}
                  </button>

                  <div className="flex items-center gap-1.5 flex-wrap mb-1.5">
                    <Badge className="bg-[var(--cerulean)]/20 text-[var(--aqua)] text-[10px]">
                      {inv.artifact.category}
                    </Badge>
                    <span className="text-[10px] text-[var(--parchment)]/50">
                      {inv.artifact.historicalPeriod}
                    </span>
                  </div>

                  <p className="text-[var(--parchment)]/60 text-[11px] line-clamp-2">
                    {inv.artifact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
            {filteredInventions.length === 0 && (
              <div className="col-span-2 text-center py-12 text-[var(--parchment)]/50">
                <Tag className="w-8 h-8 mx-auto mb-2 opacity-30" />
                <p className="text-sm">No inventions match the selected tags</p>
                <p className="text-xs mt-1">Try selecting different tags or adjusting the filter mode</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}