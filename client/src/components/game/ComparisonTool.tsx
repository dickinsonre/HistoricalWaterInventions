import { useState, useMemo } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { X, Scale, ChevronDown, Calendar, MapPin, Droplets, Sparkles, Globe, Users, Search } from "lucide-react";
import { gameData, getAllArtifacts, ArtifactData, RegionData } from "../../data/gameData";

type CompareMode = "inventions" | "civilizations";

interface ComparisonToolProps {
  onClose: () => void;
  onSelectArtifact?: (artifactId: string) => void;
}

export default function ComparisonTool({ onClose, onSelectArtifact }: ComparisonToolProps) {
  const [mode, setMode] = useState<CompareMode>("inventions");
  const [selectedLeftArtifact, setSelectedLeftArtifact] = useState<ArtifactData | null>(null);
  const [selectedRightArtifact, setSelectedRightArtifact] = useState<ArtifactData | null>(null);
  const [selectedLeftCiv, setSelectedLeftCiv] = useState<RegionData | null>(null);
  const [selectedRightCiv, setSelectedRightCiv] = useState<RegionData | null>(null);
  const [showLeftDropdown, setShowLeftDropdown] = useState(false);
  const [showRightDropdown, setShowRightDropdown] = useState(false);
  const [searchLeft, setSearchLeft] = useState("");
  const [searchRight, setSearchRight] = useState("");

  const allArtifacts = getAllArtifacts();
  const allRegions = gameData.regions;

  const getArtifactRegion = (artifact: ArtifactData) => {
    return gameData.regions.find(r =>
      r.locations.some(l => l.artifacts.some(a => a.id === artifact.id))
    );
  };

  const getArtifactLocation = (artifact: ArtifactData) => {
    for (const region of gameData.regions) {
      const location = region.locations.find(l =>
        l.artifacts.some(a => a.id === artifact.id)
      );
      if (location) return location;
    }
    return null;
  };

  const getCivStats = (region: RegionData) => {
    const totalArtifacts = region.locations.reduce((sum, l) => sum + l.artifacts.length, 0);
    const categories: Record<string, number> = {};
    const rarities: Record<string, number> = {};
    region.locations.forEach(l => {
      l.artifacts.forEach(a => {
        categories[a.category] = (categories[a.category] || 0) + 1;
        rarities[a.rarity] = (rarities[a.rarity] || 0) + 1;
      });
    });
    const topCategory = Object.entries(categories).sort((a, b) => b[1] - a[1])[0];
    return { totalArtifacts, categories, rarities, topCategory, locationCount: region.locations.length };
  };

  const getRarityClass = (rarity: string) => {
    switch (rarity) {
      case "common": return "bg-gray-500/30 text-gray-300";
      case "rare": return "bg-[var(--cerulean)]/30 text-[var(--aqua)]";
      case "epic": return "bg-purple-500/30 text-purple-300";
      case "legendary": return "bg-[var(--gold)]/30 text-[var(--gold)]";
      default: return "";
    }
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      "irrigation": "Irrigation",
      "aqueduct": "Aqueduct",
      "water-lifting": "Water Lifting",
      "sanitation": "Sanitation",
      "dam": "Dam/Reservoir",
      "water-clock": "Water Clock",
      "fountain": "Fountain",
      "canal": "Canal"
    };
    return labels[category] || category;
  };

  const getEraLabel = (era: string) => {
    const labels: Record<string, string> = {
      ancient: "Ancient Period",
      classical: "Classical Period",
      medieval: "Medieval Period",
      modern: "Modern Era",
    };
    return labels[era] || era;
  };

  const filteredLeftArtifacts = useMemo(() =>
    allArtifacts.filter(a => a.name.toLowerCase().includes(searchLeft.toLowerCase())),
    [searchLeft, allArtifacts]
  );

  const filteredRightArtifacts = useMemo(() =>
    allArtifacts.filter(a => a.name.toLowerCase().includes(searchRight.toLowerCase())),
    [searchRight, allArtifacts]
  );

  const filteredLeftCivs = useMemo(() =>
    allRegions.filter(r => r.name.toLowerCase().includes(searchLeft.toLowerCase())),
    [searchLeft, allRegions]
  );

  const filteredRightCivs = useMemo(() =>
    allRegions.filter(r => r.name.toLowerCase().includes(searchRight.toLowerCase())),
    [searchRight, allRegions]
  );

  const renderArtifactSelector = (
    selected: ArtifactData | null,
    onSelect: (artifact: ArtifactData) => void,
    showDropdown: boolean,
    setShowDD: (show: boolean) => void,
    search: string,
    setSearch: (s: string) => void,
    filtered: ArtifactData[],
    label: string
  ) => (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => { setShowDD(!showDropdown); }}
        className="w-full justify-between water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
      >
        <span className="truncate">{selected ? selected.name : label}</span>
        <ChevronDown size={16} />
      </Button>
      {showDropdown && (
        <Card className="absolute z-50 w-full mt-1 water-card max-h-72 overflow-hidden">
          <div className="p-2 border-b border-[var(--aqua)]/20">
            <div className="flex items-center gap-2 px-2 py-1 bg-[var(--deep-ocean)]/50 rounded border border-[var(--aqua)]/20">
              <Search size={14} className="text-[var(--parchment)]/50" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search inventions..."
                className="bg-transparent text-[var(--parchment)] text-sm w-full outline-none placeholder:text-[var(--parchment)]/30"
                autoFocus
              />
            </div>
          </div>
          <ScrollArea className="h-56">
            <div className="p-2 space-y-1">
              {filtered.map((artifact) => (
                <Button
                  key={artifact.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    onSelect(artifact);
                    setShowDD(false);
                    setSearch("");
                  }}
                  className="w-full justify-start text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 text-left"
                >
                  <span className="truncate">{artifact.name}</span>
                  <Badge className={`ml-2 text-xs ${getRarityClass(artifact.rarity)}`}>
                    {artifact.rarity}
                  </Badge>
                </Button>
              ))}
              {filtered.length === 0 && (
                <p className="text-[var(--parchment)]/40 text-sm text-center py-4">No results found</p>
              )}
            </div>
          </ScrollArea>
        </Card>
      )}
    </div>
  );

  const renderCivSelector = (
    selected: RegionData | null,
    onSelect: (civ: RegionData) => void,
    showDropdown: boolean,
    setShowDD: (show: boolean) => void,
    search: string,
    setSearch: (s: string) => void,
    filtered: RegionData[],
    label: string
  ) => (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setShowDD(!showDropdown)}
        className="w-full justify-between water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
      >
        <span className="truncate">{selected ? selected.name : label}</span>
        <ChevronDown size={16} />
      </Button>
      {showDropdown && (
        <Card className="absolute z-50 w-full mt-1 water-card max-h-72 overflow-hidden">
          <div className="p-2 border-b border-[var(--aqua)]/20">
            <div className="flex items-center gap-2 px-2 py-1 bg-[var(--deep-ocean)]/50 rounded border border-[var(--aqua)]/20">
              <Search size={14} className="text-[var(--parchment)]/50" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search civilizations..."
                className="bg-transparent text-[var(--parchment)] text-sm w-full outline-none placeholder:text-[var(--parchment)]/30"
                autoFocus
              />
            </div>
          </div>
          <ScrollArea className="h-56">
            <div className="p-2 space-y-1">
              {filtered.map((region) => (
                <Button
                  key={region.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    onSelect(region);
                    setShowDD(false);
                    setSearch("");
                  }}
                  className="w-full justify-start text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 text-left"
                >
                  <span className="truncate">{region.name}</span>
                  <Badge className="ml-2 text-xs bg-[var(--river-blue)]/30 text-[var(--aqua)]">
                    {region.era}
                  </Badge>
                </Button>
              ))}
              {filtered.length === 0 && (
                <p className="text-[var(--parchment)]/40 text-sm text-center py-4">No results found</p>
              )}
            </div>
          </ScrollArea>
        </Card>
      )}
    </div>
  );

  const renderArtifactCard = (artifact: ArtifactData | null, placeholder: string) => {
    if (!artifact) {
      return (
        <Card className="bg-[var(--deep-ocean)]/30 border-[var(--aqua)]/20 border-dashed h-full">
          <CardContent className="p-6 flex items-center justify-center h-64">
            <p className="text-[var(--parchment)]/50 text-center">{placeholder}</p>
          </CardContent>
        </Card>
      );
    }

    const region = getArtifactRegion(artifact);
    const location = getArtifactLocation(artifact);

    return (
      <Card className="bg-[var(--deep-ocean)]/50 border-[var(--aqua)]/30 h-full">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3
              className="font-heading text-[var(--gold)] text-base cursor-pointer hover:text-[var(--aqua)] transition-colors"
              onClick={() => onSelectArtifact?.(artifact.id)}
            >
              {artifact.name}
            </h3>
            <Badge className={`${getRarityClass(artifact.rarity)} capitalize text-xs`}>
              {artifact.rarity}
            </Badge>
          </div>

          <p className="text-[var(--parchment)]/80 text-xs leading-relaxed line-clamp-4">{artifact.description}</p>

          <div className="space-y-1.5 text-xs">
            <div className="flex items-center gap-2 text-[var(--aqua)]">
              <Droplets size={12} />
              <span>{getCategoryLabel(artifact.category)}</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--parchment)]/70">
              <Calendar size={12} />
              <span>{artifact.historicalPeriod}</span>
            </div>
            {region && (
              <div className="flex items-center gap-2 text-[var(--parchment)]/70">
                <MapPin size={12} />
                <span>{region.name}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center gap-2 text-[var(--parchment)]/70">
                <Sparkles size={12} />
                <span>{location.name}</span>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-[var(--aqua)]/20">
            <p className="text-[var(--parchment)]/60 text-xs">
              <strong className="text-[var(--aqua)]">Significance:</strong> {artifact.significance}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderCivCard = (region: RegionData | null, placeholder: string) => {
    if (!region) {
      return (
        <Card className="bg-[var(--deep-ocean)]/30 border-[var(--aqua)]/20 border-dashed h-full">
          <CardContent className="p-6 flex items-center justify-center h-64">
            <p className="text-[var(--parchment)]/50 text-center">{placeholder}</p>
          </CardContent>
        </Card>
      );
    }

    const stats = getCivStats(region);

    return (
      <Card className="bg-[var(--deep-ocean)]/50 border-[var(--aqua)]/30 h-full">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-[var(--gold)] text-base">{region.name}</h3>
            <Badge className="bg-[var(--river-blue)]/30 text-[var(--aqua)] text-xs capitalize">{region.era}</Badge>
          </div>

          <p className="text-[var(--parchment)]/80 text-xs leading-relaxed line-clamp-3">{region.description}</p>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-[var(--deep-ocean)]/40 rounded p-2">
              <p className="text-[var(--parchment)]/50 mb-0.5">Period</p>
              <p className="text-[var(--parchment)] font-medium">{region.dateRange}</p>
            </div>
            <div className="bg-[var(--deep-ocean)]/40 rounded p-2">
              <p className="text-[var(--parchment)]/50 mb-0.5">Era</p>
              <p className="text-[var(--parchment)] font-medium">{getEraLabel(region.era)}</p>
            </div>
            <div className="bg-[var(--deep-ocean)]/40 rounded p-2">
              <p className="text-[var(--parchment)]/50 mb-0.5">Inventions</p>
              <p className="text-[var(--aqua)] font-medium">{stats.totalArtifacts}</p>
            </div>
            <div className="bg-[var(--deep-ocean)]/40 rounded p-2">
              <p className="text-[var(--parchment)]/50 mb-0.5">Sites</p>
              <p className="text-[var(--parchment)] font-medium">{stats.locationCount}</p>
            </div>
          </div>

          {stats.topCategory && (
            <div className="pt-2 border-t border-[var(--aqua)]/20">
              <p className="text-[var(--parchment)]/50 text-xs mb-1.5">Technology Focus</p>
              <div className="flex flex-wrap gap-1">
                {Object.entries(stats.categories)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 4)
                  .map(([cat, count]) => (
                    <Badge key={cat} className="bg-[var(--cerulean)]/20 text-[var(--aqua)] text-xs">
                      {getCategoryLabel(cat)} ({count})
                    </Badge>
                  ))}
              </div>
            </div>
          )}

          <div className="pt-2 border-t border-[var(--aqua)]/20">
            <p className="text-[var(--parchment)]/50 text-xs mb-1.5">Notable Inventions</p>
            <div className="flex flex-wrap gap-1">
              {region.locations
                .flatMap(l => l.artifacts)
                .filter(a => a.rarity === "legendary" || a.rarity === "epic")
                .slice(0, 3)
                .map(a => (
                  <Badge
                    key={a.id}
                    className={`${getRarityClass(a.rarity)} text-xs cursor-pointer hover:opacity-80`}
                    onClick={() => onSelectArtifact?.(a.id)}
                  >
                    {a.name}
                  </Badge>
                ))}
              {region.locations.flatMap(l => l.artifacts).filter(a => a.rarity === "legendary" || a.rarity === "epic").length === 0 && (
                <span className="text-[var(--parchment)]/40 text-xs italic">No epic/legendary items</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderComparisonSummary = () => {
    if (mode === "inventions" && selectedLeftArtifact && selectedRightArtifact) {
      const leftRegion = getArtifactRegion(selectedLeftArtifact);
      const rightRegion = getArtifactRegion(selectedRightArtifact);
      const sameCategory = selectedLeftArtifact.category === selectedRightArtifact.category;
      const sameEra = leftRegion?.era === rightRegion?.era;
      const sameRarity = selectedLeftArtifact.rarity === selectedRightArtifact.rarity;
      const sameRegion = leftRegion?.id === rightRegion?.id;

      return (
        <Card className="mt-4 bg-[var(--deep-ocean)]/30 border-[var(--aqua)]/20">
          <CardContent className="p-4">
            <h4 className="text-[var(--aqua)] font-medium mb-3 flex items-center gap-2">
              <Scale size={16} /> Comparison Insights
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm mb-3">
              <div className="bg-[var(--deep-ocean)]/40 rounded p-2">
                <p className="text-[var(--parchment)]/50 text-xs mb-1">Category</p>
                <p className={`text-sm ${sameCategory ? "text-green-400" : "text-[var(--parchment)]"}`}>
                  {sameCategory ? `Both: ${getCategoryLabel(selectedLeftArtifact.category)}` : `${getCategoryLabel(selectedLeftArtifact.category)} vs ${getCategoryLabel(selectedRightArtifact.category)}`}
                </p>
              </div>
              <div className="bg-[var(--deep-ocean)]/40 rounded p-2">
                <p className="text-[var(--parchment)]/50 text-xs mb-1">Era</p>
                <p className={`text-sm ${sameEra ? "text-green-400" : "text-[var(--parchment)]"}`}>
                  {sameEra ? `Same: ${leftRegion?.era}` : `${leftRegion?.era || "?"} vs ${rightRegion?.era || "?"}`}
                </p>
              </div>
              <div className="bg-[var(--deep-ocean)]/40 rounded p-2">
                <p className="text-[var(--parchment)]/50 text-xs mb-1">Rarity</p>
                <p className={`text-sm ${sameRarity ? "text-green-400" : "text-[var(--parchment)]"}`}>
                  {sameRarity ? `Both: ${selectedLeftArtifact.rarity}` : `${selectedLeftArtifact.rarity} vs ${selectedRightArtifact.rarity}`}
                </p>
              </div>
              <div className="bg-[var(--deep-ocean)]/40 rounded p-2">
                <p className="text-[var(--parchment)]/50 text-xs mb-1">Region</p>
                <p className={`text-sm ${sameRegion ? "text-green-400" : "text-[var(--parchment)]"}`}>
                  {sameRegion ? "Same civilization" : "Different civilizations"}
                </p>
              </div>
            </div>
            {sameCategory && !sameRegion && (
              <p className="text-[var(--aqua)]/80 text-xs italic bg-[var(--cerulean)]/10 rounded p-2">
                These civilizations independently developed similar {getCategoryLabel(selectedLeftArtifact.category).toLowerCase()} technology — a fascinating example of parallel innovation across cultures.
              </p>
            )}
          </CardContent>
        </Card>
      );
    }

    if (mode === "civilizations" && selectedLeftCiv && selectedRightCiv) {
      const leftStats = getCivStats(selectedLeftCiv);
      const rightStats = getCivStats(selectedRightCiv);
      const sameEra = selectedLeftCiv.era === selectedRightCiv.era;

      const leftCategories = new Set(Object.keys(leftStats.categories));
      const rightCategories = new Set(Object.keys(rightStats.categories));
      const sharedCategories = Array.from(leftCategories).filter(c => rightCategories.has(c));

      return (
        <Card className="mt-4 bg-[var(--deep-ocean)]/30 border-[var(--aqua)]/20">
          <CardContent className="p-4">
            <h4 className="text-[var(--aqua)] font-medium mb-3 flex items-center gap-2">
              <Scale size={16} /> Civilization Comparison
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm mb-3">
              <div className="bg-[var(--deep-ocean)]/40 rounded p-2">
                <p className="text-[var(--parchment)]/50 text-xs mb-1">Era</p>
                <p className={`text-sm ${sameEra ? "text-green-400" : "text-[var(--parchment)]"}`}>
                  {sameEra ? `Both: ${getEraLabel(selectedLeftCiv.era)}` : `${getEraLabel(selectedLeftCiv.era)} vs ${getEraLabel(selectedRightCiv.era)}`}
                </p>
              </div>
              <div className="bg-[var(--deep-ocean)]/40 rounded p-2">
                <p className="text-[var(--parchment)]/50 text-xs mb-1">Inventions</p>
                <p className="text-[var(--parchment)] text-sm">{leftStats.totalArtifacts} vs {rightStats.totalArtifacts}</p>
              </div>
              <div className="bg-[var(--deep-ocean)]/40 rounded p-2">
                <p className="text-[var(--parchment)]/50 text-xs mb-1">Sites</p>
                <p className="text-[var(--parchment)] text-sm">{leftStats.locationCount} vs {rightStats.locationCount}</p>
              </div>
            </div>
            {sharedCategories.length > 0 && (
              <div className="mb-3">
                <p className="text-[var(--parchment)]/50 text-xs mb-1.5">Shared Technology Areas</p>
                <div className="flex flex-wrap gap-1">
                  {sharedCategories.map(cat => (
                    <Badge key={cat} className="bg-green-500/20 text-green-300 text-xs">
                      {getCategoryLabel(cat)}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {sharedCategories.length > 0 && (
              <p className="text-[var(--aqua)]/80 text-xs italic bg-[var(--cerulean)]/10 rounded p-2">
                Both civilizations developed {sharedCategories.map(c => getCategoryLabel(c).toLowerCase()).join(", ")} technologies — showing how universal water challenges drove similar innovations across {sameEra ? "contemporary" : "different"} societies.
              </p>
            )}
          </CardContent>
        </Card>
      );
    }

    return null;
  };

  return (
    <Card className="w-full max-w-4xl max-h-[90vh] water-card overflow-hidden flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between border-b border-[var(--aqua)]/20 flex-shrink-0">
        <div>
          <CardTitle className="font-heading text-[var(--gold)] text-xl flex items-center gap-2">
            <Scale className="w-5 h-5" />
            Side-by-Side Comparison
          </CardTitle>
          <p className="text-[var(--parchment)]/70 text-sm mt-1">
            Compare {mode === "inventions" ? "water inventions" : "civilizations"} to discover engineering parallels
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

      <div className="flex-shrink-0 px-4 pt-3">
        <div className="flex gap-2 p-1 bg-[var(--deep-ocean)]/40 rounded-lg border border-[var(--aqua)]/20 w-fit">
          <Button
            size="sm"
            variant={mode === "inventions" ? "default" : "ghost"}
            onClick={() => { setMode("inventions"); setShowLeftDropdown(false); setShowRightDropdown(false); }}
            className={mode === "inventions"
              ? "bg-[var(--cerulean)] text-white"
              : "text-[var(--parchment)]/70 hover:bg-[var(--cerulean)]/20"}
          >
            <Droplets size={14} className="mr-1.5" />
            Inventions
          </Button>
          <Button
            size="sm"
            variant={mode === "civilizations" ? "default" : "ghost"}
            onClick={() => { setMode("civilizations"); setShowLeftDropdown(false); setShowRightDropdown(false); }}
            className={mode === "civilizations"
              ? "bg-[var(--cerulean)] text-white"
              : "text-[var(--parchment)]/70 hover:bg-[var(--cerulean)]/20"}
          >
            <Globe size={14} className="mr-1.5" />
            Civilizations
          </Button>
        </div>
      </div>

      <CardContent className="p-4 overflow-y-auto flex-1">
        <div className="grid grid-cols-2 gap-4 mb-4">
          {mode === "inventions" ? (
            <>
              {renderArtifactSelector(selectedLeftArtifact, setSelectedLeftArtifact, showLeftDropdown, setShowLeftDropdown, searchLeft, setSearchLeft, filteredLeftArtifacts, "Select first invention...")}
              {renderArtifactSelector(selectedRightArtifact, setSelectedRightArtifact, showRightDropdown, setShowRightDropdown, searchRight, setSearchRight, filteredRightArtifacts, "Select second invention...")}
            </>
          ) : (
            <>
              {renderCivSelector(selectedLeftCiv, setSelectedLeftCiv, showLeftDropdown, setShowLeftDropdown, searchLeft, setSearchLeft, filteredLeftCivs, "Select first civilization...")}
              {renderCivSelector(selectedRightCiv, setSelectedRightCiv, showRightDropdown, setShowRightDropdown, searchRight, setSearchRight, filteredRightCivs, "Select second civilization...")}
            </>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {mode === "inventions" ? (
            <>
              {renderArtifactCard(selectedLeftArtifact, "Select an invention on the left to begin comparison")}
              {renderArtifactCard(selectedRightArtifact, "Select an invention on the right to compare")}
            </>
          ) : (
            <>
              {renderCivCard(selectedLeftCiv, "Select a civilization on the left to begin comparison")}
              {renderCivCard(selectedRightCiv, "Select a civilization on the right to compare")}
            </>
          )}
        </div>

        {renderComparisonSummary()}
      </CardContent>
    </Card>
  );
}
