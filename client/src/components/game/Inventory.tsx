import { useState, useMemo } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { X, Droplets, Calendar, MapPin, Filter, Search, Award, CheckCircle, SortAsc, SortDesc } from "lucide-react";
import { gameData, getAllArtifacts, ArtifactData } from "../../data/gameData";

interface InventoryProps {
  onClose: () => void;
  onViewInvention?: (id: string) => void;
}

function getArtifactCivilization(artifactId: string): string {
  for (const region of gameData.regions) {
    for (const location of region.locations) {
      if (location.artifacts.some(a => a.id === artifactId)) {
        return region.name;
      }
    }
  }
  return "Unknown";
}

function artifactMatchesDateSearch(artifact: ArtifactData, dateQuery: string): boolean {
  const q = dateQuery.trim().toLowerCase();
  const yearMatch = q.match(/^(\d+)\s*(bce|ce|bc|ad)?$/i);
  if (!yearMatch) return false;
  
  const yearNum = parseInt(yearMatch[1]);
  const era = (yearMatch[2] || "").toLowerCase();
  
  let targetYear: number;
  if (era === "bce" || era === "bc") {
    targetYear = yearNum;
  } else if (era === "ce" || era === "ad") {
    targetYear = -yearNum;
  } else {
    targetYear = yearNum > 500 ? yearNum : -yearNum;
  }
  
  if (artifact.yearBCE !== undefined) {
    const diff = Math.abs(artifact.yearBCE - targetYear);
    return diff <= 200;
  }
  return false;
}

export default function Inventory({ onClose, onViewInvention }: InventoryProps) {
  const allArtifacts = getAllArtifacts();
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "date" | "rarity">("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [showUnescoOnly, setShowUnescoOnly] = useState(false);
  const [showStillWorkingOnly, setShowStillWorkingOnly] = useState(false);
  
  const categories = ["irrigation", "aqueduct", "water-lifting", "sanitation", "dam", "water-clock", "fountain", "canal"];

  const filteredArtifacts = useMemo(() => {
    let results = allArtifacts;
    
    if (categoryFilter) {
      results = results.filter(a => a.category === categoryFilter);
    }
    
    if (showUnescoOnly) {
      results = results.filter(a => a.unesco);
    }
    
    if (showStillWorkingOnly) {
      results = results.filter(a => a.stillWorking);
    }
    
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const isDateSearch = /^\d+\s*(bce|ce|bc|ad)?$/i.test(q);
      
      results = results.filter(a => {
        if (isDateSearch) {
          return artifactMatchesDateSearch(a, q);
        }
        
        const civ = getArtifactCivilization(a.id).toLowerCase();
        return (
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.significance.toLowerCase().includes(q) ||
          a.historicalPeriod.toLowerCase().includes(q) ||
          civ.includes(q)
        );
      });
    }
    
    const rarityOrder = { legendary: 0, epic: 1, rare: 2, common: 3 };
    results = [...results].sort((a, b) => {
      let cmp = 0;
      if (sortBy === "name") {
        cmp = a.name.localeCompare(b.name);
      } else if (sortBy === "date") {
        cmp = (b.yearBCE || 0) - (a.yearBCE || 0);
      } else if (sortBy === "rarity") {
        cmp = rarityOrder[a.rarity] - rarityOrder[b.rarity];
      }
      return sortDir === "asc" ? cmp : -cmp;
    });
    
    return results;
  }, [allArtifacts, categoryFilter, searchQuery, sortBy, sortDir, showUnescoOnly, showStillWorkingOnly]);

  const unescoCount = allArtifacts.filter(a => a.unesco).length;
  const stillWorkingCount = allArtifacts.filter(a => a.stillWorking).length;

  const getRarityStyle = (rarity: string) => {
    switch (rarity) {
      case "common": return { badge: "bg-gray-500/30 text-gray-300", text: "rarity-common" };
      case "rare": return { badge: "bg-[var(--cerulean)]/30 text-[var(--aqua)]", text: "rarity-rare" };
      case "epic": return { badge: "bg-purple-500/30 text-purple-300", text: "rarity-epic" };
      case "legendary": return { badge: "bg-[var(--gold)]/30 text-[var(--gold)]", text: "rarity-legendary" };
      default: return { badge: "bg-gray-500/30 text-gray-300", text: "" };
    }
  };

  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
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

  const toggleSort = (field: "name" | "date" | "rarity") => {
    if (sortBy === field) {
      setSortDir(d => d === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDir("asc");
    }
  };

  return (
    <Card className="w-full max-w-4xl max-h-[90vh] water-card">
      <CardHeader className="flex flex-row items-center justify-between border-b border-[var(--aqua)]/20">
        <div>
          <CardTitle className="font-heading text-[var(--gold)] text-xl flex items-center gap-2">
            <Droplets className="w-5 h-5 text-[var(--aqua)]" />
            All Water Inventions
          </CardTitle>
          <p className="text-[var(--parchment)]/70 text-sm mt-1">
            {allArtifacts.length} inventions across {gameData.regions.length} civilizations
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
      <CardContent className="p-4">
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--aqua)]/50" size={16} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Search inventions, civilizations, dates (e.g. "qanat", "1000 BCE", "flood control")...'
            className="w-full bg-[var(--deep-ocean)]/60 text-[var(--parchment)] pl-10 pr-4 py-2.5 rounded-lg border border-[var(--aqua)]/30 focus:border-[var(--aqua)] focus:outline-none placeholder:text-[var(--parchment)]/40 text-sm"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCategoryFilter(null)}
            className={`text-xs ${!categoryFilter ? 'bg-[var(--cerulean)] text-white' : 'water-card text-[var(--parchment)]'}`}
          >
            All ({allArtifacts.length})
          </Button>
          {categories.map(cat => {
            const count = allArtifacts.filter(a => a.category === cat).length;
            if (count === 0) return null;
            return (
              <Button
                key={cat}
                variant="outline"
                size="sm"
                onClick={() => setCategoryFilter(categoryFilter === cat ? null : cat)}
                className={`text-xs ${categoryFilter === cat ? 'bg-[var(--cerulean)] text-white' : 'water-card text-[var(--parchment)]'}`}
              >
                {getCategoryLabel(cat)} ({count})
              </Button>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2 mb-3 items-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowUnescoOnly(!showUnescoOnly)}
            className={`text-xs flex items-center gap-1 ${showUnescoOnly ? 'bg-amber-600 text-white border-amber-500' : 'water-card text-[var(--parchment)]'}`}
          >
            <Award size={12} />
            UNESCO ({unescoCount})
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowStillWorkingOnly(!showStillWorkingOnly)}
            className={`text-xs flex items-center gap-1 ${showStillWorkingOnly ? 'bg-green-600 text-white border-green-500' : 'water-card text-[var(--parchment)]'}`}
          >
            <CheckCircle size={12} />
            Still Working ({stillWorkingCount})
          </Button>
          
          <div className="ml-auto flex items-center gap-1 text-xs text-[var(--parchment)]/60">
            <span>Sort:</span>
            {(["name", "date", "rarity"] as const).map(field => (
              <Button
                key={field}
                variant="ghost"
                size="sm"
                onClick={() => toggleSort(field)}
                className={`text-xs px-2 h-7 ${sortBy === field ? 'text-[var(--aqua)]' : 'text-[var(--parchment)]/60'}`}
              >
                {field === "name" ? "A-Z" : field === "date" ? "Date" : "Rarity"}
                {sortBy === field && (sortDir === "asc" ? <SortAsc size={10} className="ml-1" /> : <SortDesc size={10} className="ml-1" />)}
              </Button>
            ))}
          </div>
        </div>

        <p className="text-[var(--parchment)]/60 text-sm mb-3">
          Showing {filteredArtifacts.length} inventions
          {categoryFilter && ` in ${getCategoryLabel(categoryFilter)}`}
          {searchQuery && ` matching "${searchQuery}"`}
          {showUnescoOnly && " (UNESCO sites)"}
          {showStillWorkingOnly && " (still working)"}
        </p>

        <ScrollArea className="h-[50vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredArtifacts.map((artifact) => {
                const style = getRarityStyle(artifact.rarity);
                const civilization = getArtifactCivilization(artifact.id);
                return (
                  <Card 
                    key={artifact.id} 
                    className="bg-[var(--deep-ocean)]/50 border-[var(--aqua)]/20 hover:border-[var(--aqua)]/40 transition-colors cursor-pointer"
                    onClick={() => onViewInvention?.(artifact.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className={`font-medium text-sm ${style.text}`}>{artifact.name}</h3>
                        <Badge className={`${style.badge} capitalize text-xs`}>
                          {artifact.rarity}
                        </Badge>
                      </div>
                      <p className="text-[var(--parchment)]/80 text-sm mb-2 line-clamp-2">{artifact.description}</p>
                      
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge className="bg-[var(--river-blue)]/50 text-[var(--aqua)] text-xs">
                          {getCategoryLabel(artifact.category)}
                        </Badge>
                        <Badge className="bg-[var(--deep-ocean)]/80 text-[var(--parchment)]/70 text-xs">
                          {civilization}
                        </Badge>
                        {artifact.unesco && (
                          <Badge className="bg-amber-600/30 text-amber-300 text-xs flex items-center gap-1">
                            <Award size={10} />
                            UNESCO {artifact.unesco.yearListed}
                          </Badge>
                        )}
                        {artifact.stillWorking && (
                          <Badge className="bg-green-600/30 text-green-300 text-xs flex items-center gap-1">
                            <CheckCircle size={10} />
                            {artifact.stillWorking.age}
                          </Badge>
                        )}
                      </div>
                      
                      {artifact.stillWorking && (
                        <p className="text-xs text-green-400/80 mb-2">
                          {artifact.stillWorking.status}
                        </p>
                      )}
                      
                      <div className="text-xs text-[var(--parchment)]/60 space-y-1">
                        <p className="flex items-center gap-1">
                          <Calendar size={12} />
                          {artifact.historicalPeriod}
                        </p>
                        <p className="flex items-center gap-1">
                          <MapPin size={12} />
                          <span className="line-clamp-1">{artifact.significance}</span>
                        </p>
                      </div>
                      <Button 
                        size="sm"
                        className="w-full mt-2 bg-[var(--cerulean)] hover:bg-[var(--river-blue)] text-white text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          onViewInvention?.(artifact.id);
                        }}
                      >
                        Explore Details & Diagram
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
          {filteredArtifacts.length === 0 && (
            <div className="text-center py-8 text-[var(--parchment)]/50">
              <Search size={32} className="mx-auto mb-2 opacity-50" />
              <p>No inventions match your search</p>
              <p className="text-xs mt-1">Try different keywords, dates (e.g. "1000 BCE"), or category names</p>
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
