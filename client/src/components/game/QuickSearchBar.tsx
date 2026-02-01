import { useState, useMemo, useRef, useEffect } from "react";
import { Search, Droplets, Building, ArrowRight, X } from "lucide-react";
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
};

export default function QuickSearchBar({ onSelectCivilization, onSelectInvention }: QuickSearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
    if (!query.trim()) return [];
    
    const q = query.toLowerCase();
    const matches: QuickResult[] = [];

    allArtifacts.forEach(artifact => {
      if (artifact.name.toLowerCase().includes(q) || 
          artifact.category.toLowerCase().includes(q)) {
        const region = findRegionForArtifact(artifact.id);
        matches.push({
          type: "invention",
          id: artifact.id,
          name: artifact.name,
          subtitle: region?.name || "Unknown",
          civilizationId: region?.id
        });
      }
    });

    gameData.regions.forEach(region => {
      if (region.name.toLowerCase().includes(q) || 
          region.era.toLowerCase().includes(q)) {
        matches.push({
          type: "civilization",
          id: region.id,
          name: region.name,
          subtitle: region.dateRange
        });
      }
    });

    return matches.slice(0, 8);
  }, [query, allArtifacts]);

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

  return (
    <div className="relative max-w-md mx-auto mb-4">
      <div className="relative">
        <Search 
          size={18} 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--aqua)]" 
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
          placeholder="Find invention: qanat, shaduf, aqueduct..."
          className="w-full pl-10 pr-10 py-2 rounded-full bg-[var(--deep-ocean)]/80 border border-[var(--aqua)]/30 text-[var(--parchment)] placeholder-[var(--parchment)]/50 focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/50 text-sm"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--parchment)]/50 hover:text-[var(--parchment)]"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--deep-ocean)] border border-[var(--aqua)]/30 rounded-lg shadow-xl z-50 overflow-hidden">
          {results.map((result, idx) => (
            <button
              key={`${result.type}-${result.id}`}
              onClick={() => handleSelect(result)}
              className={`w-full px-4 py-3 flex items-center gap-3 text-left transition-colors ${
                idx === selectedIndex 
                  ? 'bg-[var(--cerulean)]/20' 
                  : 'hover:bg-[var(--cerulean)]/10'
              }`}
            >
              {result.type === "invention" ? (
                <Droplets size={16} className="text-[var(--aqua)] flex-shrink-0" />
              ) : (
                <Building size={16} className="text-[var(--gold)] flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="text-[var(--parchment)] text-sm font-medium truncate">
                  {result.name}
                </div>
                <div className="text-[var(--parchment)]/60 text-xs truncate">
                  {result.subtitle}
                </div>
              </div>
              <ArrowRight size={14} className="text-[var(--aqua)]/50 flex-shrink-0" />
            </button>
          ))}
        </div>
      )}

      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--deep-ocean)] border border-[var(--aqua)]/30 rounded-lg shadow-xl z-50 p-4 text-center">
          <p className="text-[var(--parchment)]/60 text-sm">No results for "{query}"</p>
        </div>
      )}
    </div>
  );
}
