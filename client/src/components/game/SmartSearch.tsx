import { useState, useMemo, useRef, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { X, Search, Droplets, Building, Clock, MapPin } from "lucide-react";
import { gameData, getAllArtifacts, eraFilters, categoryFilters } from "../../data/gameData";

interface SmartSearchProps {
  onClose: () => void;
  onSelectInvention: (id: string) => void;
  onSelectCivilization: (id: string) => void;
}

type SearchResult = {
  type: "invention" | "civilization" | "era" | "category";
  id: string;
  name: string;
  subtitle: string;
};

export default function SmartSearch({ onClose, onSelectInvention, onSelectCivilization }: SmartSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const allArtifacts = getAllArtifacts();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = useMemo((): SearchResult[] => {
    if (!query.trim()) return [];
    
    const q = query.toLowerCase();
    const matches: SearchResult[] = [];

    allArtifacts.forEach(artifact => {
      if (artifact.name.toLowerCase().includes(q) || 
          artifact.description.toLowerCase().includes(q) ||
          artifact.category.toLowerCase().includes(q)) {
        const region = gameData.regions.find(r => 
          r.locations.some(l => l.artifacts.some(a => a.id === artifact.id))
        );
        matches.push({
          type: "invention",
          id: artifact.id,
          name: artifact.name,
          subtitle: `${region?.name || "Unknown"} • ${artifact.yearBCE ? `${artifact.yearBCE} BCE` : artifact.historicalPeriod}`
        });
      }
    });

    gameData.regions.forEach(region => {
      if (region.name.toLowerCase().includes(q) || 
          region.description.toLowerCase().includes(q) ||
          region.era.toLowerCase().includes(q)) {
        matches.push({
          type: "civilization",
          id: region.id,
          name: region.name,
          subtitle: region.dateRange
        });
      }
    });

    eraFilters.forEach(era => {
      if (era.label.toLowerCase().includes(q)) {
        matches.push({
          type: "era",
          id: era.id,
          name: era.label,
          subtitle: era.range
        });
      }
    });

    categoryFilters.forEach(cat => {
      if (cat.label.toLowerCase().includes(q)) {
        matches.push({
          type: "category",
          id: cat.id,
          name: cat.label,
          subtitle: "Technology Type"
        });
      }
    });

    return matches.slice(0, 10);
  }, [query, allArtifacts]);

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
      onClose();
    }
  };

  const handleSelect = (result: SearchResult) => {
    if (result.type === "invention") {
      onSelectInvention(result.id);
      onClose();
    } else if (result.type === "civilization") {
      onSelectCivilization(result.id);
      onClose();
    } else if (result.type === "era" || result.type === "category") {
      const matchingArtifact = allArtifacts.find(a => {
        if (result.type === "category") {
          return a.category === result.id;
        }
        return true;
      });
      if (matchingArtifact) {
        onSelectInvention(matchingArtifact.id);
      }
      onClose();
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "invention": return <Droplets className="text-[var(--aqua)]" size={18} />;
      case "civilization": return <Building className="text-[var(--terracotta)]" size={18} />;
      case "era": return <Clock className="text-[var(--cerulean)]" size={18} />;
      case "category": return <MapPin className="text-[var(--gold)]" size={18} />;
      default: return <Search size={18} />;
    }
  };

  return (
    <Card className="water-card max-w-xl w-full">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-heading text-xl text-[var(--gold)]">
            <Search className="inline mr-2" size={20} />
            Smart Search
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
          >
            <X size={20} />
          </Button>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--parchment)]/50" size={20} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search inventions, civilizations, eras..."
            className="w-full bg-[var(--deep-ocean)]/80 text-[var(--parchment)] pl-10 pr-4 py-3 rounded-lg border border-[var(--aqua)]/30 focus:border-[var(--aqua)] focus:outline-none placeholder:text-[var(--parchment)]/40"
          />
        </div>

        {query && (
          <div className="space-y-1 max-h-80 overflow-y-auto">
            {results.length > 0 ? (
              results.map((result, index) => (
                <button
                  key={`${result.type}-${result.id}`}
                  onClick={() => handleSelect(result)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                    index === selectedIndex 
                      ? "bg-[var(--cerulean)]/30 border border-[var(--aqua)]/50" 
                      : "hover:bg-[var(--deep-ocean)]/60 border border-transparent"
                  }`}
                >
                  {getIcon(result.type)}
                  <div className="flex-1 min-w-0">
                    <p className="text-[var(--parchment)] font-medium truncate">{result.name}</p>
                    <p className="text-[var(--parchment)]/60 text-sm truncate">{result.subtitle}</p>
                  </div>
                  <span className="text-xs text-[var(--aqua)]/60 capitalize">{result.type}</span>
                </button>
              ))
            ) : (
              <p className="text-[var(--parchment)]/60 text-center py-4">
                No results found for "{query}"
              </p>
            )}
          </div>
        )}

        {!query && (
          <div className="text-[var(--parchment)]/70 text-sm">
            <p className="mb-2">Try searching for:</p>
            <div className="flex flex-wrap gap-2">
              {["Shaduf", "Roman", "Aqueduct", "Ancient Egypt", "Irrigation"].map(term => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1 bg-[var(--deep-ocean)]/60 rounded-full hover:bg-[var(--cerulean)]/30 transition-colors border border-[var(--aqua)]/20"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
