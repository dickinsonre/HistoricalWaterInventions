import { useState, useMemo, useRef, useEffect } from "react";
import { Search, Droplets, Building, ArrowRight, X, Filter } from "lucide-react";
import { gameData, getAllArtifacts } from "../../data/gameData";

interface QuickSearchBarProps {
  onSelectCivilization?: (id: string) => void;
  onSelectInvention?: (civilizationId: string, inventionId: string) => void;
}

type QuickResult = {
  type: "invention" | "civilization";
  id: string;
  name: string;
  subtitle: string;
  civilizationId?: string;
  category?: string;
};

const categoryFilters = [
  { id: "all", label: "All", icon: "🌊" },
  { id: "irrigation", label: "Irrigation", icon: "🌾" },
  { id: "aqueduct", label: "Aqueducts", icon: "🏛️" },
  { id: "canal", label: "Canals", icon: "⛵" },
  { id: "dam", label: "Dams", icon: "🏔️" },
  { id: "sanitation", label: "Sanitation", icon: "🚿" },
  { id: "fountain", label: "Fountains", icon: "⛲" },
  { id: "water-lifting", label: "Water Lifting", icon: "⚙️" },
  { id: "water-clock", label: "Clocks", icon: "⏰" }
];

export default function QuickSearchBar({ onSelectCivilization, onSelectInvention }: QuickSearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const allArtifacts = getAllArtifacts();

  const findRegionForArtifact = (artifactId: string) => {
    for (const region of gameData.regions) {
      for (const location of region.locations) {
        for (const artifact of location.artifacts) {
          if (artifact.id === artifactId) {
            return region;
          }
        }
      }
    }
    return null;
  };

  const results = useMemo((): QuickResult[] => {
    const q = query.toLowerCase().trim();
    const matches: QuickResult[] = [];

    allArtifacts.forEach(artifact => {
      const matchesCategory = activeCategory === "all" || artifact.category === activeCategory;
      const matchesQuery = !q || artifact.name.toLowerCase().includes(q) || artifact.category.toLowerCase().includes(q);
      
      if (matchesCategory && matchesQuery) {
        const region = findRegionForArtifact(artifact.id);
        matches.push({
          type: "invention",
          id: artifact.id,
          name: artifact.name,
          subtitle: region?.name || "Unknown",
          civilizationId: region?.id,
          category: artifact.category
        });
      }
    });

    if (activeCategory === "all") {
      gameData.regions.forEach(region => {
        if (!q || region.name.toLowerCase().includes(q) || 
            region.era.toLowerCase().includes(q)) {
          matches.push({
            type: "civilization",
            id: region.id,
            name: region.name,
            subtitle: region.dateRange
          });
        }
      });
    }

    return matches.slice(0, 12);
  }, [query, allArtifacts, activeCategory]);

  const handleSelect = (result: QuickResult) => {
    if (result.type === "invention" && result.civilizationId) {
      if (onSelectInvention) {
        onSelectInvention(result.civilizationId, result.id);
      }
    } else if (result.type === "civilization") {
      if (onSelectCivilization) {
        onSelectCivilization(result.id);
      }
    }
    setQuery("");
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      handleSelect(results[selectedIndex]);
    } else if (e.key === "Escape") {
      setQuery("");
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  const inventionCount = activeCategory === "all" 
    ? allArtifacts.length 
    : allArtifacts.filter(a => a.category === activeCategory).length;

  return (
    <div className="relative max-w-2xl mx-auto mb-4">
      <div className="relative flex gap-2">
        <div className="relative flex-1">
          <Search 
            size={20} 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--aqua)]" 
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={activeCategory === "all" ? "Search 235+ inventions & 74 civilizations..." : `Search ${inventionCount} ${activeCategory} inventions...`}
            className="w-full pl-12 pr-12 py-3 rounded-full bg-[var(--deep-ocean)]/80 border-2 border-[var(--aqua)]/40 text-[var(--parchment)] placeholder-[var(--parchment)]/50 focus:outline-none focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/50 text-base"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setIsOpen(false);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--parchment)]/50 hover:text-[var(--parchment)]"
            >
              <X size={20} />
            </button>
          )}
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`px-4 py-3 rounded-full transition-colors flex items-center gap-2 ${
            showFilters || activeCategory !== "all"
              ? 'bg-[var(--cerulean)] text-white'
              : 'bg-[var(--deep-ocean)]/80 border-2 border-[var(--aqua)]/40 text-[var(--parchment)]'
          }`}
          title="Filter by category"
        >
          <Filter size={20} />
          <span className="hidden sm:inline text-sm">Filter</span>
        </button>
      </div>

      {showFilters && (
        <div className="flex flex-wrap gap-2 mt-3 p-3 bg-[var(--deep-ocean)]/90 rounded-xl border border-[var(--aqua)]/30">
          {categoryFilters.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setIsOpen(activeCategory !== cat.id);
              }}
              className={`px-3 py-2 rounded-full text-sm transition-colors flex items-center gap-1 ${
                activeCategory === cat.id
                  ? 'bg-[var(--cerulean)] text-white'
                  : 'bg-[var(--deep-ocean)] text-[var(--parchment)]/80 hover:bg-[var(--cerulean)]/30 border border-[var(--aqua)]/30'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      )}

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--deep-ocean)] border-2 border-[var(--aqua)]/30 rounded-xl shadow-xl z-50 overflow-hidden">
          {results.map((result, idx) => (
            <button
              key={`${result.type}-${result.id}`}
              onClick={() => handleSelect(result)}
              className={`w-full px-5 py-4 flex items-center gap-4 text-left transition-colors ${
                idx === selectedIndex 
                  ? 'bg-[var(--cerulean)]/20' 
                  : 'hover:bg-[var(--cerulean)]/10'
              }`}
            >
              {result.type === "invention" ? (
                <Droplets size={20} className="text-[var(--aqua)] flex-shrink-0" />
              ) : (
                <Building size={20} className="text-[var(--gold)] flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--parchment)] text-base font-medium truncate">
                    {result.name}
                  </span>
                  {result.category && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--cerulean)]/20 text-[var(--cerulean)] hidden sm:inline">
                      {result.category}
                    </span>
                  )}
                </div>
                <div className="text-[var(--parchment)]/60 text-sm truncate">
                  {result.subtitle}
                </div>
              </div>
              <ArrowRight size={18} className="text-[var(--aqua)]/50 flex-shrink-0" />
            </button>
          ))}
        </div>
      )}

      {isOpen && (query || activeCategory !== "all") && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--deep-ocean)] border-2 border-[var(--aqua)]/30 rounded-xl shadow-xl z-50 p-5 text-center">
          <p className="text-[var(--parchment)]/60 text-base">
            {query ? `No results for "${query}"` : `No ${activeCategory} inventions found`}
            {activeCategory !== "all" && query && ` in ${activeCategory} category`}
          </p>
        </div>
      )}
    </div>
  );
}
