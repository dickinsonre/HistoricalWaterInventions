import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { X, Calendar, Play, Pause, Rewind, FastForward, Clock, Globe, Droplets, Layers } from "lucide-react";
import { gameData } from "../../data/gameData";
import type { RegionData, ArtifactData } from "../../data/gameData";

interface TimelineSliderProps {
  onClose: () => void;
  onSelectCivilization?: (id: string) => void;
  onSelectInvention?: (id: string) => void;
}

interface ParsedRegion {
  region: RegionData;
  startYear: number;
  endYear: number;
}

interface ParsedArtifact {
  artifact: ArtifactData;
  regionId: string;
  regionName: string;
  regionColor: string;
  year: number;
}

const ERA_MARKERS = [
  { year: -40000, label: "40000 BCE" },
  { year: -6000, label: "6000 BCE" },
  { year: -3000, label: "3000 BCE" },
  { year: -1000, label: "1000 BCE" },
  { year: 0, label: "0 CE" },
  { year: 500, label: "500 CE" },
  { year: 1000, label: "1000 CE" },
  { year: 1500, label: "1500 CE" },
  { year: 2025, label: "2025 CE" },
];

const TIMELINE_MIN = -40000;
const TIMELINE_MAX = 2025;

function parseDateRange(dateRange: string): { start: number; end: number } {
  const normalized = dateRange.replace(/,/g, "").trim();

  const yearsAgoMatch = normalized.match(/(\d+)\s*years?\s*ago/i);
  if (yearsAgoMatch) {
    const start = -parseInt(yearsAgoMatch[1]);
    const endMatch = normalized.match(/[-–]\s*(\d+)\s*(BCE|CE|AD)?/i);
    let end = 0;
    if (endMatch) {
      end = parseInt(endMatch[1]);
      if (endMatch[2]?.toUpperCase() === "BCE") end = -end;
    }
    return { start, end };
  }

  const parts = normalized.split(/\s*[-–]\s*/);
  if (parts.length < 2) {
    const singleMatch = normalized.match(/(\d+)\s*(BCE|CE|AD)?/i);
    if (singleMatch) {
      const y = parseInt(singleMatch[1]);
      const era = singleMatch[2]?.toUpperCase() || "CE";
      const val = era === "BCE" ? -y : y;
      return { start: val, end: val };
    }
    return { start: 0, end: 0 };
  }

  function parseYearPart(part: string, defaultEra?: string): number {
    if (part.toLowerCase() === "present") return 2025;
    const m = part.trim().match(/(\d+)\s*(BCE|CE|AD)?/i);
    if (!m) return 0;
    const y = parseInt(m[1]);
    const era = m[2]?.toUpperCase() || defaultEra || "CE";
    return era === "BCE" ? -y : y;
  }

  const hasBCE = normalized.toUpperCase().includes("BCE");
  const startDefault = hasBCE ? "BCE" : "CE";

  const start = parseYearPart(parts[0], startDefault);
  const end = parseYearPart(parts[1]);

  return { start: Math.min(start, end), end: Math.max(start, end) };
}

function formatYear(year: number): string {
  if (year <= 0) return `${Math.abs(year)} BCE`;
  return `${year} CE`;
}

function yearToSliderValue(year: number): number {
  return ((year - TIMELINE_MIN) / (TIMELINE_MAX - TIMELINE_MIN)) * 100;
}

function sliderValueToYear(value: number): number {
  return Math.round(TIMELINE_MIN + (value / 100) * (TIMELINE_MAX - TIMELINE_MIN));
}

export default function TimelineSlider({ onClose, onSelectCivilization, onSelectInvention }: TimelineSliderProps) {
  const [currentYear, setCurrentYear] = useState(-3000);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playSpeed, setPlaySpeed] = useState(1);
  const [overlapMode, setOverlapMode] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const parsedRegions = useMemo<ParsedRegion[]>(() => {
    return gameData.regions.map(region => {
      const { start, end } = parseDateRange(region.dateRange);
      return { region, startYear: start, endYear: end };
    });
  }, []);

  const allArtifacts = useMemo<ParsedArtifact[]>(() => {
    const result: ParsedArtifact[] = [];
    for (const pr of parsedRegions) {
      for (const loc of pr.region.locations) {
        for (const artifact of loc.artifacts) {
          const year = artifact.yearBCE !== undefined
            ? (artifact.yearBCE < 0 ? Math.abs(artifact.yearBCE) : -artifact.yearBCE)
            : pr.startYear;
          result.push({
            artifact,
            regionId: pr.region.id,
            regionName: pr.region.name,
            regionColor: pr.region.color,
            year,
          });
        }
      }
    }
    return result;
  }, [parsedRegions]);

  const activeRegions = useMemo(() => {
    return parsedRegions.filter(pr => currentYear >= pr.startYear && currentYear <= pr.endYear);
  }, [parsedRegions, currentYear]);

  const activeArtifacts = useMemo(() => {
    const activeRegionIds = new Set(activeRegions.map(r => r.region.id));
    return allArtifacts.filter(a => activeRegionIds.has(a.regionId) && a.year <= currentYear);
  }, [allArtifacts, activeRegions, currentYear]);

  const overlapData = useMemo(() => {
    if (!overlapMode) return [];
    const categoryMap = new Map<string, Set<string>>();
    for (const a of activeArtifacts) {
      if (!categoryMap.has(a.artifact.category)) {
        categoryMap.set(a.artifact.category, new Set());
      }
      categoryMap.get(a.artifact.category)!.add(a.regionName);
    }
    return Array.from(categoryMap.entries())
      .filter(([, civs]) => civs.size > 1)
      .map(([category, civs]) => ({
        category,
        civilizations: Array.from(civs),
        count: civs.size,
      }))
      .sort((a, b) => b.count - a.count);
  }, [activeArtifacts, overlapMode]);

  const handlePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentYear(prev => {
          const step = Math.max(10, Math.abs(playSpeed) * 50);
          const next = prev + step;
          if (next >= TIMELINE_MAX) {
            setIsPlaying(false);
            return TIMELINE_MAX;
          }
          return next;
        });
      }, 100);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, playSpeed]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setCurrentYear(sliderValueToYear(value));
  };

  const handleRewind = () => {
    setCurrentYear(TIMELINE_MIN);
    setIsPlaying(false);
  };

  const handleFastForward = () => {
    setPlaySpeed(prev => (prev >= 4 ? 1 : prev + 1));
  };

  const getRarityClass = (rarity: string) => {
    switch (rarity) {
      case "common": return "rarity-common";
      case "rare": return "rarity-rare";
      case "epic": return "rarity-epic";
      case "legendary": return "rarity-legendary";
      default: return "";
    }
  };

  const sliderValue = yearToSliderValue(currentYear);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <Card className="w-full max-w-6xl max-h-[95vh] water-card flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between border-b border-[var(--aqua)]/20 pb-3 shrink-0">
          <div>
            <CardTitle className="font-heading text-[var(--gold)] text-xl flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Timeline Slider — Journey Through Water History
            </CardTitle>
            <p className="text-[var(--parchment)]/70 text-sm mt-1">
              Slide through 42,000 years of water engineering innovation
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOverlapMode(!overlapMode)}
              className={`text-sm ${overlapMode ? "bg-[var(--cerulean)]/30 text-[var(--aqua)]" : "text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"}`}
            >
              <Layers size={14} className="mr-1" />
              Overlap Mode
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
            >
              <X size={16} />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-4 flex-1 overflow-hidden flex flex-col">
          <div className="flex items-center gap-4 mb-4 shrink-0">
            <div className="flex items-center gap-4 text-sm">
              <Badge className="bg-[var(--cerulean)]/30 text-[var(--aqua)] flex items-center gap-1">
                <Calendar size={12} />
                {formatYear(currentYear)}
              </Badge>
              <Badge className="bg-[var(--gold)]/20 text-[var(--gold)] flex items-center gap-1">
                <Globe size={12} />
                {activeRegions.length} civilizations
              </Badge>
              <Badge className="bg-[var(--terracotta)]/20 text-[var(--terracotta)] flex items-center gap-1">
                <Droplets size={12} />
                {activeArtifacts.length} inventions
              </Badge>
              {isPlaying && (
                <Badge className="bg-green-500/20 text-green-400 flex items-center gap-1">
                  <Play size={12} />
                  {playSpeed}x speed
                </Badge>
              )}
            </div>
          </div>

          <ScrollArea className="flex-1 min-h-0">
            <div className="space-y-4 pr-2">
              {activeRegions.length === 0 ? (
                <div className="text-center py-12">
                  <Globe className="w-12 h-12 mx-auto mb-3 text-[var(--aqua)]/30" />
                  <p className="text-[var(--parchment)]/50 text-lg">No civilizations active at {formatYear(currentYear)}</p>
                  <p className="text-[var(--parchment)]/30 text-sm mt-1">Slide forward to discover water engineering civilizations</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {activeRegions.map(({ region }) => {
                    const regionArtifacts = activeArtifacts.filter(a => a.regionId === region.id);
                    return (
                      <Card
                        key={region.id}
                        className="bg-[var(--deep-ocean)]/50 border-[var(--aqua)]/20 hover:border-[var(--aqua)]/50 transition-all cursor-pointer"
                        onClick={() => onSelectCivilization?.(region.id)}
                      >
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <div
                              className="w-3 h-3 rounded-full shrink-0"
                              style={{ backgroundColor: region.color }}
                            />
                            <h4 className="font-heading text-[var(--gold)] text-sm truncate">{region.name}</h4>
                            <Badge className="text-[10px] bg-[var(--cerulean)]/20 text-[var(--aqua)] ml-auto shrink-0">
                              {region.dateRange}
                            </Badge>
                          </div>
                          <p className="text-[var(--parchment)]/60 text-xs line-clamp-2 mb-2">{region.description}</p>
                          {regionArtifacts.length > 0 && (
                            <div className="space-y-1">
                              <p className="text-[var(--aqua)] text-[10px] font-medium uppercase tracking-wider">
                                {regionArtifacts.length} invention{regionArtifacts.length !== 1 ? "s" : ""} by this era
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {regionArtifacts.slice(0, 4).map(a => (
                                  <Badge
                                    key={a.artifact.id}
                                    className={`text-[10px] cursor-pointer hover:opacity-80 ${
                                      a.artifact.rarity === "legendary" ? "bg-[var(--gold)]/20 text-[var(--gold)]" :
                                      a.artifact.rarity === "epic" ? "bg-purple-500/20 text-purple-300" :
                                      a.artifact.rarity === "rare" ? "bg-[var(--cerulean)]/20 text-[var(--aqua)]" :
                                      "bg-gray-500/20 text-gray-300"
                                    }`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      onSelectInvention?.(a.artifact.id);
                                    }}
                                  >
                                    {a.artifact.name}
                                  </Badge>
                                ))}
                                {regionArtifacts.length > 4 && (
                                  <Badge className="text-[10px] bg-[var(--deep-ocean)] text-[var(--parchment)]/50">
                                    +{regionArtifacts.length - 4} more
                                  </Badge>
                                )}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}

              {overlapMode && overlapData.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-heading text-[var(--aqua)] text-sm mb-2 flex items-center gap-2">
                    <Layers size={14} />
                    Cross-Civilization Technologies at {formatYear(currentYear)}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {overlapData.map(({ category, civilizations, count }) => (
                      <Card key={category} className="bg-[var(--cerulean)]/10 border-[var(--aqua)]/30">
                        <CardContent className="p-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[var(--gold)] text-sm font-medium capitalize">{category.replace(/-/g, " ")}</span>
                            <Badge className="bg-[var(--gold)]/20 text-[var(--gold)] text-[10px]">
                              {count} civilizations
                            </Badge>
                          </div>
                          <p className="text-[var(--parchment)]/60 text-xs">
                            {civilizations.join(", ")}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {overlapMode && overlapData.length === 0 && activeRegions.length > 0 && (
                <div className="text-center py-4">
                  <Layers className="w-8 h-8 mx-auto mb-2 text-[var(--aqua)]/20" />
                  <p className="text-[var(--parchment)]/40 text-sm">No overlapping technologies at this time period</p>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="mt-4 pt-4 border-t border-[var(--aqua)]/20 shrink-0">
            <div className="flex items-center gap-3 mb-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRewind}
                className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
                title="Reset to beginning"
              >
                <Rewind size={16} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handlePlay}
                className={`${isPlaying ? "text-[var(--gold)] bg-[var(--gold)]/10" : "text-[var(--parchment)]"} hover:bg-[var(--cerulean)]/30`}
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleFastForward}
                className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
                title={`Speed: ${playSpeed}x (click to increase)`}
              >
                <FastForward size={16} />
                <span className="text-[10px] ml-1 text-[var(--aqua)]">{playSpeed}x</span>
              </Button>
              <div className="flex-1" />
              <span className="text-[var(--gold)] font-heading text-lg">{formatYear(currentYear)}</span>
            </div>

            <div className="relative">
              <input
                type="range"
                min={0}
                max={100}
                step={0.01}
                value={sliderValue}
                onChange={handleSliderChange}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, var(--cerulean) 0%, var(--aqua) ${sliderValue}%, var(--deep-ocean) ${sliderValue}%, rgba(255,255,255,0.1) 100%)`,
                  accentColor: "var(--gold)",
                }}
              />
              <div className="flex justify-between mt-2">
                {ERA_MARKERS.map(marker => {
                  const pos = yearToSliderValue(marker.year);
                  return (
                    <button
                      key={marker.year}
                      onClick={() => { setCurrentYear(marker.year); setIsPlaying(false); }}
                      className="text-[var(--parchment)]/40 text-[9px] hover:text-[var(--aqua)] transition-colors cursor-pointer"
                      style={{
                        position: "absolute",
                        left: `${pos}%`,
                        transform: "translateX(-50%)",
                        bottom: "-18px",
                      }}
                    >
                      {marker.label}
                    </button>
                  );
                })}
              </div>
              <div className="h-5" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
