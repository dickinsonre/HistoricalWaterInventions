import { useMemo } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { X, BarChart3, Globe, Calendar, Droplets, MapPin, Award, TrendingUp, Layers } from "lucide-react";
import { gameData, getAllArtifacts } from "../../data/gameData";

interface StatisticsDashboardProps {
  onClose: () => void;
}

export default function StatisticsDashboard({ onClose }: StatisticsDashboardProps) {
  const stats = useMemo(() => {
    const allArtifacts = getAllArtifacts();
    const regions = gameData.regions;

    const byEra: Record<string, { civs: number; inventions: number }> = {};
    const byCategory: Record<string, number> = {};
    const byRarity: Record<string, number> = {};
    const byContinent: Record<string, { civs: number; inventions: number }> = {};

    const continentMap: Record<string, string> = {};
    const continents: Record<string, string[]> = {
      "Africa": ["ancient-egypt", "ptolemaic-egypt", "aksumite-empire", "great-zimbabwe", "ancient-nubia", "engaruka", "garamantes", "kanem-bornu", "benin-kingdom", "yoruba-civilization", "sudd-nilotic", "horn-of-africa", "san-bushmen", "ethiopia-gerd"],
      "Europe": ["ancient-greece", "ancient-rome", "minoan-crete", "byzantine-empire", "dutch-netherlands", "venetian-republic", "pre-roman-iberia", "basque-country", "celtic-europe", "germanic-europe", "etruscan", "viking", "nuragic-sardinia", "malta-water", "swiss-alps-water", "canary-islands", "sami-people"],
      "Asia": ["ancient-china", "xia-shang-dynasty", "zhou-qin-dynasty", "han-dynasty", "sui-tang-dynasty", "song-yuan-dynasty", "ming-qing-dynasty", "angkor-empire", "ancient-japan", "ancient-korea", "sri-lankan-hydraulics", "ancient-india", "mughal-empire", "delhi-sultanate", "safavid-persia", "ancient-indonesia", "majapahit", "funan-kingdom", "tibetan-civilizations", "georgian-kingdom", "liao-jin-yuan", "himalayan-kingdoms", "kurdish-water", "china-south-north-transfer", "maldives-water", "ainu-water"],
      "Middle East": ["mesopotamia", "sumer", "hittites", "canaan", "syria-orontes", "mongol-steppe", "assyria", "babylonia", "nabataean", "islamic-golden-age", "ottoman-empire", "khwarezmian-empire", "berber-amazigh-expanded", "libya-gmmr"],
      "Americas": ["aztec-empire", "inca-empire", "maya-civilization", "hohokam", "ancestral-puebloans", "tiwanaku-empire", "chimu-empire", "wari-empire", "moche-civilization", "toltec-empire", "colombian-civilizations", "caribbean-indigenous", "tierra-del-fuego", "paleo-indian-archaic", "woodland-period", "eastern-woodlands", "great-plains-nations", "great-basin-california", "algonquin-canadian", "pacific-northwest-expanded", "modern-usa", "modern-canada"],
      "Oceania": ["polynesian", "aboriginal-australia", "maori-new-zealand", "lapita-culture"],
      "Arctic": ["inupiat-north-alaska", "yupik-western-alaska", "aleut-unangan", "athabascan-interior", "tlingit-se-alaska", "haida-gwaii", "canadian-inuit-expanded", "greenlandic-inuit", "modern-arctic-engineering"],
      "Global": ["space-water", "modern-mega-projects", "fertile-crescent-agriculture", "east-asia-rice-water", "americas-corn-water"],
    };

    for (const [cont, ids] of Object.entries(continents)) {
      for (const id of ids) continentMap[id] = cont;
    }

    for (const region of regions) {
      const era = region.era || "unknown";
      if (!byEra[era]) byEra[era] = { civs: 0, inventions: 0 };
      byEra[era].civs++;
      const inventionCount = region.locations.reduce((sum, l) => sum + l.artifacts.length, 0);
      byEra[era].inventions += inventionCount;

      const cont = continentMap[region.id] || "Other";
      if (!byContinent[cont]) byContinent[cont] = { civs: 0, inventions: 0 };
      byContinent[cont].civs++;
      byContinent[cont].inventions += inventionCount;
    }

    for (const artifact of allArtifacts) {
      byCategory[artifact.category] = (byCategory[artifact.category] || 0) + 1;
      byRarity[artifact.rarity] = (byRarity[artifact.rarity] || 0) + 1;
    }

    const oldestCiv = regions.reduce((oldest, r) => {
      const year = parseYear(r.dateRange);
      return year < parseYear(oldest.dateRange) ? r : oldest;
    }, regions[0]);

    const mostInventiveCiv = regions.reduce((best, r) => {
      const count = r.locations.reduce((s, l) => s + l.artifacts.length, 0);
      const bestCount = best.locations.reduce((s, l) => s + l.artifacts.length, 0);
      return count > bestCount ? r : best;
    }, regions[0]);

    const totalLocations = regions.reduce((sum, r) => sum + r.locations.length, 0);

    return {
      totalCivs: regions.length,
      totalInventions: allArtifacts.length,
      totalLocations,
      byEra,
      byCategory,
      byRarity,
      byContinent,
      oldestCiv,
      mostInventiveCiv,
      legendaryCount: byRarity["legendary"] || 0,
      epicCount: byRarity["epic"] || 0,
    };
  }, []);

  function parseYear(dateRange: string): number {
    const match = dateRange.match(/(\d+)/);
    if (!match) return 0;
    const year = parseInt(match[1]);
    if (dateRange.toLowerCase().includes("bce") || dateRange.toLowerCase().includes("years ago")) return -year;
    return year;
  }

  const eraLabels: Record<string, { label: string; color: string }> = {
    ancient: { label: "Ancient", color: "var(--terracotta)" },
    classical: { label: "Classical", color: "var(--cerulean)" },
    medieval: { label: "Medieval", color: "var(--gold)" },
    modern: { label: "Modern", color: "var(--aqua)" },
  };

  const categoryLabels: Record<string, { label: string; color: string }> = {
    irrigation: { label: "Irrigation", color: "#22c55e" },
    aqueduct: { label: "Aqueducts", color: "#3b82f6" },
    "water-lifting": { label: "Water Lifting", color: "#f59e0b" },
    sanitation: { label: "Sanitation", color: "#8b5cf6" },
    dam: { label: "Dams & Reservoirs", color: "#ef4444" },
    "water-clock": { label: "Water Clocks", color: "#06b6d4" },
    fountain: { label: "Fountains", color: "#ec4899" },
    canal: { label: "Canals", color: "#14b8a6" },
  };

  const rarityColors: Record<string, string> = {
    common: "#9ca3af",
    rare: "#3b82f6",
    epic: "#8b5cf6",
    legendary: "#f59e0b",
  };

  const maxCategoryCount = Math.max(...Object.values(stats.byCategory));
  const maxEraInventions = Math.max(...Object.values(stats.byEra).map(e => e.inventions));
  const maxContinentInventions = Math.max(...Object.values(stats.byContinent).map(c => c.inventions));

  return (
    <Card className="w-full max-w-5xl max-h-[90vh] water-card overflow-hidden flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-[var(--aqua)]/20 flex-shrink-0">
        <div>
          <h2 className="font-heading text-xl text-[var(--gold)] flex items-center gap-2">
            <BarChart3 size={22} />
            Dataset Statistics
          </h2>
          <p className="text-[var(--parchment)]/60 text-sm mt-0.5">Exploring {stats.totalInventions} water inventions across {stats.totalCivs} civilizations</p>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose}
          className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30">
          <X size={18} />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-gradient-to-br from-[var(--cerulean)]/20 to-[var(--deep-ocean)]/60 rounded-lg p-3 border border-[var(--cerulean)]/30 text-center">
            <Globe size={20} className="text-[var(--cerulean)] mx-auto mb-1" />
            <p className="text-2xl font-heading text-[var(--parchment)]">{stats.totalCivs}</p>
            <p className="text-[var(--parchment)]/50 text-xs">Civilizations</p>
          </div>
          <div className="bg-gradient-to-br from-[var(--aqua)]/20 to-[var(--deep-ocean)]/60 rounded-lg p-3 border border-[var(--aqua)]/30 text-center">
            <Droplets size={20} className="text-[var(--aqua)] mx-auto mb-1" />
            <p className="text-2xl font-heading text-[var(--parchment)]">{stats.totalInventions}</p>
            <p className="text-[var(--parchment)]/50 text-xs">Inventions</p>
          </div>
          <div className="bg-gradient-to-br from-[var(--gold)]/20 to-[var(--deep-ocean)]/60 rounded-lg p-3 border border-[var(--gold)]/30 text-center">
            <MapPin size={20} className="text-[var(--gold)] mx-auto mb-1" />
            <p className="text-2xl font-heading text-[var(--parchment)]">{stats.totalLocations}</p>
            <p className="text-[var(--parchment)]/50 text-xs">Historical Sites</p>
          </div>
          <div className="bg-gradient-to-br from-[var(--terracotta)]/20 to-[var(--deep-ocean)]/60 rounded-lg p-3 border border-[var(--terracotta)]/30 text-center">
            <Calendar size={20} className="text-[var(--terracotta)] mx-auto mb-1" />
            <p className="text-2xl font-heading text-[var(--parchment)]">40,000+</p>
            <p className="text-[var(--parchment)]/50 text-xs">Years of History</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/20">
            <h3 className="text-sm font-heading text-[var(--aqua)] mb-3 flex items-center gap-2">
              <Calendar size={14} /> Breakdown by Era
            </h3>
            <div className="space-y-2.5">
              {Object.entries(stats.byEra)
                .sort((a, b) => {
                  const order = ["ancient", "classical", "medieval", "modern"];
                  return order.indexOf(a[0]) - order.indexOf(b[0]);
                })
                .map(([era, data]) => {
                  const info = eraLabels[era] || { label: era, color: "var(--parchment)" };
                  return (
                    <div key={era}>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-[var(--parchment)]/80">{info.label}</span>
                        <span className="text-[var(--parchment)]/50">{data.civs} civs · {data.inventions} inventions</span>
                      </div>
                      <div className="h-4 bg-[var(--deep-ocean)]/80 rounded-full overflow-hidden flex">
                        <div
                          className="h-full rounded-full transition-all duration-500 flex items-center justify-end pr-1.5"
                          style={{
                            width: `${(data.inventions / maxEraInventions) * 100}%`,
                            backgroundColor: info.color,
                            minWidth: "20px"
                          }}
                        >
                          <span className="text-[9px] text-white font-medium">{data.inventions}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/20">
            <h3 className="text-sm font-heading text-[var(--aqua)] mb-3 flex items-center gap-2">
              <Globe size={14} /> Breakdown by Region
            </h3>
            <div className="space-y-2.5">
              {Object.entries(stats.byContinent)
                .sort((a, b) => b[1].inventions - a[1].inventions)
                .map(([continent, data]) => (
                  <div key={continent}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-[var(--parchment)]/80">{continent}</span>
                      <span className="text-[var(--parchment)]/50">{data.civs} civs · {data.inventions} inventions</span>
                    </div>
                    <div className="h-4 bg-[var(--deep-ocean)]/80 rounded-full overflow-hidden flex">
                      <div
                        className="h-full rounded-full transition-all duration-500 flex items-center justify-end pr-1.5"
                        style={{
                          width: `${(data.inventions / maxContinentInventions) * 100}%`,
                          backgroundColor: "var(--cerulean)",
                          minWidth: "20px"
                        }}
                      >
                        <span className="text-[9px] text-white font-medium">{data.inventions}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/20">
          <h3 className="text-sm font-heading text-[var(--aqua)] mb-3 flex items-center gap-2">
            <Droplets size={14} /> Inventions by Technology Type
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {Object.entries(stats.byCategory)
              .sort((a, b) => b[1] - a[1])
              .map(([category, count]) => {
                const info = categoryLabels[category] || { label: category, color: "#666" };
                const pct = ((count / stats.totalInventions) * 100).toFixed(1);
                return (
                  <div key={category} className="bg-[var(--deep-ocean)]/50 rounded-lg p-2.5 border border-[var(--aqua)]/10">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-[var(--parchment)]/70">{info.label}</span>
                      <span className="text-xs font-mono" style={{ color: info.color }}>{count}</span>
                    </div>
                    <div className="h-2 bg-[var(--deep-ocean)]/80 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${(count / maxCategoryCount) * 100}%`,
                          backgroundColor: info.color
                        }}
                      />
                    </div>
                    <p className="text-[9px] text-[var(--parchment)]/40 mt-1">{pct}% of total</p>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/20">
            <h3 className="text-sm font-heading text-[var(--aqua)] mb-3 flex items-center gap-2">
              <Award size={14} /> Rarity Distribution
            </h3>
            <div className="space-y-2">
              {["legendary", "epic", "rare", "common"].map(rarity => {
                const count = stats.byRarity[rarity] || 0;
                const pct = ((count / stats.totalInventions) * 100).toFixed(1);
                return (
                  <div key={rarity} className="flex items-center gap-3">
                    <span className="text-xs capitalize w-20 text-right" style={{ color: rarityColors[rarity] }}>
                      {rarity}
                    </span>
                    <div className="flex-1 h-3 bg-[var(--deep-ocean)]/80 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${(count / stats.totalInventions) * 100}%`,
                          backgroundColor: rarityColors[rarity]
                        }}
                      />
                    </div>
                    <span className="text-xs text-[var(--parchment)]/60 w-16 text-right font-mono">{count} ({pct}%)</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/20">
            <h3 className="text-sm font-heading text-[var(--aqua)] mb-3 flex items-center gap-2">
              <TrendingUp size={14} /> Highlights
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-[var(--gold)] text-lg">🏆</span>
                <div>
                  <p className="text-xs text-[var(--parchment)]/50">Most Inventive Civilization</p>
                  <p className="text-sm text-[var(--gold)]">{stats.mostInventiveCiv.name}</p>
                  <p className="text-[10px] text-[var(--parchment)]/40">
                    {stats.mostInventiveCiv.locations.reduce((s, l) => s + l.artifacts.length, 0)} inventions documented
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[var(--terracotta)] text-lg">📜</span>
                <div>
                  <p className="text-xs text-[var(--parchment)]/50">Oldest Civilization Covered</p>
                  <p className="text-sm text-[var(--terracotta)]">{stats.oldestCiv.name}</p>
                  <p className="text-[10px] text-[var(--parchment)]/40">{stats.oldestCiv.dateRange}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[var(--aqua)] text-lg">⭐</span>
                <div>
                  <p className="text-xs text-[var(--parchment)]/50">Legendary Inventions</p>
                  <p className="text-sm text-[var(--aqua)]">{stats.legendaryCount} legendary + {stats.epicCount} epic discoveries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
