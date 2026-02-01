import { useState } from "react";
import { X, BookOpen, Filter, Globe, Clock, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import { historicalTechnologies, HistoricalTechnology } from "../../data/historicalTechnologies";

interface TechnologyLibraryProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TechnologyLibrary({ isOpen, onClose }: TechnologyLibraryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCivilization, setSelectedCivilization] = useState<string>("all");
  const [expandedTech, setExpandedTech] = useState<string | null>(null);

  if (!isOpen) return null;

  const categories = ["all", ...Array.from(new Set(historicalTechnologies.map(t => t.category)))];
  const civilizations = ["all", ...Array.from(new Set(historicalTechnologies.flatMap(t => t.civilizations)))];

  const filteredTechnologies = historicalTechnologies.filter(tech => {
    const categoryMatch = selectedCategory === "all" || tech.category === selectedCategory;
    const civMatch = selectedCivilization === "all" || tech.civilizations.includes(selectedCivilization);
    return categoryMatch && civMatch;
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Conveyance and irrigation": "bg-blue-500/20 text-blue-300",
      "Sanitation and sewers": "bg-amber-500/20 text-amber-300",
      "Water supply and drainage": "bg-cyan-500/20 text-cyan-300",
      "Water treatment": "bg-green-500/20 text-green-300",
      "Irrigation and flood management": "bg-teal-500/20 text-teal-300",
      "Water lifting": "bg-purple-500/20 text-purple-300",
      "Water lifting and power": "bg-violet-500/20 text-violet-300",
      "Storage and access": "bg-orange-500/20 text-orange-300",
      "Groundwater conveyance": "bg-indigo-500/20 text-indigo-300",
      "Long-distance conveyance": "bg-sky-500/20 text-sky-300",
      "Hydropower": "bg-emerald-500/20 text-emerald-300",
      "Urban water distribution": "bg-rose-500/20 text-rose-300",
      "Storage": "bg-yellow-500/20 text-yellow-300",
    };
    return colors[category] || "bg-gray-500/20 text-gray-300";
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[var(--deep-ocean)] rounded-xl w-full max-w-4xl max-h-[85vh] overflow-hidden border border-[var(--aqua)]/30 shadow-2xl">
        <div className="p-4 border-b border-[var(--aqua)]/20 flex justify-between items-center bg-gradient-to-r from-[var(--river-blue)] to-[var(--deep-ocean)]">
          <div className="flex items-center gap-3">
            <BookOpen className="text-[var(--aqua)]" size={24} />
            <h2 className="font-cinzel text-xl text-[var(--parchment)]">
              Water Technology Encyclopedia
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="text-[var(--parchment)]" size={20} />
          </button>
        </div>

        <div className="p-4 border-b border-[var(--aqua)]/20 flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-[var(--aqua)]" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-[var(--river-blue)]/50 text-[var(--parchment)] px-3 py-1.5 rounded-lg border border-[var(--aqua)]/30 text-sm"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-[var(--aqua)]" />
            <select
              value={selectedCivilization}
              onChange={(e) => setSelectedCivilization(e.target.value)}
              className="bg-[var(--river-blue)]/50 text-[var(--parchment)] px-3 py-1.5 rounded-lg border border-[var(--aqua)]/30 text-sm"
            >
              {civilizations.map(civ => (
                <option key={civ} value={civ}>
                  {civ === "all" ? "All Civilizations" : civ}
                </option>
              ))}
            </select>
          </div>
          <div className="ml-auto text-sm text-[var(--aqua)]">
            {filteredTechnologies.length} technologies
          </div>
        </div>

        <div className="overflow-y-auto max-h-[60vh] p-4 space-y-3">
          {filteredTechnologies.map((tech, index) => (
            <TechnologyCard
              key={index}
              tech={tech}
              isExpanded={expandedTech === tech.name}
              onToggle={() => setExpandedTech(expandedTech === tech.name ? null : tech.name)}
              getCategoryColor={getCategoryColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TechnologyCard({ 
  tech, 
  isExpanded, 
  onToggle,
  getCategoryColor 
}: { 
  tech: HistoricalTechnology; 
  isExpanded: boolean;
  onToggle: () => void;
  getCategoryColor: (cat: string) => string;
}) {
  return (
    <div 
      className="bg-[var(--aged-paper)]/10 rounded-lg border border-[var(--aqua)]/20 overflow-hidden hover:border-[var(--aqua)]/40 transition-colors"
    >
      <button
        onClick={onToggle}
        className="w-full p-4 text-left flex items-start justify-between gap-4"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap mb-2">
            <h3 className="font-cinzel text-[var(--parchment)] text-lg">
              {tech.name}
            </h3>
            <span className={`px-2 py-0.5 rounded-full text-xs ${getCategoryColor(tech.category)}`}>
              {tech.category}
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-[var(--aqua)]/80">
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {tech.period_BCE_CE}
            </span>
            <span className="flex items-center gap-1">
              <Globe size={14} />
              {tech.civilizations.join(", ")}
            </span>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="text-[var(--aqua)] shrink-0" size={20} />
        ) : (
          <ChevronDown className="text-[var(--aqua)] shrink-0" size={20} />
        )}
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-3 border-t border-[var(--aqua)]/10 pt-3">
          <div>
            <div className="flex items-center gap-2 text-[var(--gold)] text-sm font-medium mb-1">
              <Lightbulb size={14} />
              Key Principle
            </div>
            <p className="text-[var(--parchment)]/90 text-sm">
              {tech.key_principle}
            </p>
          </div>

          <div>
            <div className="text-[var(--terracotta)] text-sm font-medium mb-1">
              Primary Uses
            </div>
            <div className="flex flex-wrap gap-2">
              {tech.primary_uses.map((use, i) => (
                <span 
                  key={i}
                  className="px-2 py-0.5 bg-[var(--terracotta)]/20 text-[var(--terracotta)] rounded text-xs"
                >
                  {use}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[var(--aqua)] text-sm font-medium mb-1">
              Historical Notes
            </div>
            <p className="text-[var(--parchment)]/70 text-sm italic">
              {tech.notes}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
