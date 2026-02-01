import { useState } from "react";
import { FileCode, Download, Copy, Check, ExternalLink, ChevronRight, Droplets, Gauge, Layers, Clock } from "lucide-react";
import { Button } from "../ui/button";
import { SWMM5_MODELS, generateSWMM5File, downloadSWMM5Model } from "../../lib/swmm5Export";

interface SWMM5ShowcaseProps {
  onViewAll: () => void;
}

const featuredModels = [
  { 
    id: 'roman-aqueduct', 
    diagram: '/diagrams/aqueduct.png',
    category: 'Gravity Flow',
    complexity: 'Intermediate',
    specs: { nodes: 8, links: 7, length: '50km' },
    description: 'Multi-reach gravity aqueduct with settling basins and distribution castellum'
  },
  { 
    id: 'qanat', 
    diagram: '/diagrams/qanat.png',
    category: 'Groundwater',
    complexity: 'Advanced',
    specs: { nodes: 12, links: 11, length: '5km' },
    description: 'Underground tunnel system with vertical access shafts and gravity gradient'
  },
  { 
    id: 'archimedes-screw', 
    diagram: '/diagrams/archimedes-screw.png',
    category: 'Water Lifting',
    complexity: 'Beginner',
    specs: { nodes: 4, links: 3, lift: '3m' },
    description: 'Rotating helical screw pump for lifting water from lower to higher elevation'
  },
  { 
    id: 'dujiangyan', 
    diagram: '/diagrams/dujiangyan.png',
    category: 'Flood Control',
    complexity: 'Advanced',
    specs: { nodes: 15, links: 18, capacity: '500 m³/s' },
    description: 'Fish mouth diversion with flying sand fence and bottle-neck channel system'
  },
  { 
    id: 'cloaca-maxima', 
    diagram: '/diagrams/cloaca-maxima.png',
    category: 'Sanitation',
    complexity: 'Intermediate',
    specs: { nodes: 10, links: 9, diameter: '3.2m' },
    description: 'Ancient sewer system still operational after 2,600 years in Rome'
  },
  { 
    id: 'baray', 
    diagram: '/diagrams/baray.png',
    category: 'Reservoir',
    complexity: 'Intermediate',
    specs: { nodes: 6, links: 8, volume: '50M m³' },
    description: 'Massive Khmer reservoir with controlled inflow/outflow and irrigation channels'
  },
  { 
    id: 'inverted-siphon', 
    diagram: '/diagrams/inverted-siphon.png',
    category: 'Pressure Flow',
    complexity: 'Advanced',
    specs: { nodes: 5, links: 4, pressure: '12 atm' },
    description: 'Pressurized pipe crossing valleys at up to 123m depth under 12 atmospheres'
  },
  { 
    id: 'indian-stepwell', 
    diagram: '/diagrams/stepwell.png',
    category: 'Groundwater',
    complexity: 'Beginner',
    specs: { nodes: 5, links: 4, depth: '30m' },
    description: 'Architectural marvel combining water access, storage, and temperature control'
  },
  { 
    id: 'shaduf', 
    diagram: '/diagrams/shaduf.png',
    category: 'Water Lifting',
    complexity: 'Beginner',
    specs: { nodes: 3, links: 2, lift: '2.5m' },
    description: 'Counterweight lever system for lifting water from rivers and wells'
  },
  { 
    id: 'minoan-drainage', 
    diagram: '/diagrams/cloaca-maxima.png',
    category: 'Sanitation',
    complexity: 'Intermediate',
    specs: { nodes: 8, links: 10, age: '4000 years' },
    description: 'Palace drainage with tapered terracotta pipes and flush toilet systems'
  },
];

const categoryColors: Record<string, string> = {
  'Gravity Flow': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Groundwater': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'Water Lifting': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'Flood Control': 'bg-red-500/20 text-red-300 border-red-500/30',
  'Sanitation': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Reservoir': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  'Pressure Flow': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
};

const complexityIcons: Record<string, { color: string; dots: number }> = {
  'Beginner': { color: 'text-green-400', dots: 1 },
  'Intermediate': { color: 'text-yellow-400', dots: 2 },
  'Advanced': { color: 'text-red-400', dots: 3 },
};

export default function SWMM5Showcase({ onViewAll }: SWMM5ShowcaseProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCopy = async (modelId: string) => {
    const content = generateSWMM5File(modelId);
    if (content) {
      try {
        await navigator.clipboard.writeText(content);
        setCopiedId(modelId);
        setTimeout(() => setCopiedId(null), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const modelCount = Object.keys(SWMM5_MODELS).length;

  return (
    <div className="bg-gradient-to-r from-[var(--deep-ocean)] to-[var(--river-blue)]/50 rounded-xl border border-[var(--cerulean)]/30 p-5 mt-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-[var(--cerulean)]/20 rounded-lg">
            <FileCode className="text-[var(--cerulean)]" size={28} />
          </div>
          <div>
            <h3 className="font-heading text-xl text-[var(--gold)]">SWMM5 Hydraulic Simulation Models</h3>
            <p className="text-sm text-[var(--parchment)]/70 mt-1">
              {modelCount}+ EPA SWMM5 input files recreating ancient hydraulic systems for educational analysis
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          onClick={onViewAll}
          className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--cerulean)]/50"
        >
          View All {modelCount} Models
          <ChevronRight size={16} className="ml-1" />
        </Button>
      </div>

      {/* Category Legend */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(categoryColors).slice(0, 6).map(([cat, colorClass]) => (
          <span key={cat} className={`px-2 py-1 rounded-full text-[10px] font-medium border ${colorClass}`}>
            {cat}
          </span>
        ))}
      </div>

      {/* Model Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredModels.slice(0, 8).map((featured) => {
          const model = SWMM5_MODELS[featured.id];
          if (!model) return null;
          
          const isExpanded = expandedId === featured.id;
          const complexity = complexityIcons[featured.complexity];
          
          return (
            <div 
              key={featured.id}
              className="bg-[var(--deep-ocean)]/80 rounded-lg border border-[var(--aqua)]/20 overflow-hidden hover:border-[var(--cerulean)]/50 transition-all group"
              onClick={() => setExpandedId(isExpanded ? null : featured.id)}
            >
              {/* Diagram */}
              <div className="h-24 overflow-hidden bg-[var(--river-blue)]/30 relative">
                <img 
                  src={featured.diagram} 
                  alt={model.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute top-2 left-2">
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-medium border ${categoryColors[featured.category] || 'bg-gray-500/20 text-gray-300'}`}>
                    {featured.category}
                  </span>
                </div>
                <div className="absolute top-2 right-2 flex gap-0.5">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 rounded-full ${i < complexity.dots ? complexity.color : 'bg-gray-600'}`}
                      style={{ backgroundColor: i < complexity.dots ? undefined : '#374151' }}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                <h4 className="text-sm font-medium text-[var(--parchment)] mb-1">
                  {model.name}
                </h4>
                <p className="text-xs text-[var(--parchment)]/60 mb-2">
                  {model.civilization}
                </p>
                
                {/* Technical Specs */}
                <div className="grid grid-cols-3 gap-1 mb-2 text-[9px]">
                  <div className="flex items-center gap-1 text-[var(--aqua)]">
                    <Layers size={10} />
                    <span>{featured.specs.nodes} nodes</span>
                  </div>
                  <div className="flex items-center gap-1 text-[var(--cerulean)]">
                    <Droplets size={10} />
                    <span>{featured.specs.links} links</span>
                  </div>
                  <div className="flex items-center gap-1 text-[var(--gold)]">
                    <Gauge size={10} />
                    <span>{Object.values(featured.specs)[2]}</span>
                  </div>
                </div>

                {/* Description (expandable) */}
                <p className={`text-[10px] text-[var(--parchment)]/70 mb-3 ${isExpanded ? '' : 'line-clamp-2'}`}>
                  {featured.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => { e.stopPropagation(); handleCopy(featured.id); }}
                    className="flex-1 h-7 text-xs bg-[var(--cerulean)]/20 hover:bg-[var(--cerulean)]/40 text-[var(--parchment)]"
                  >
                    {copiedId === featured.id ? (
                      <>
                        <Check size={12} className="mr-1" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={12} className="mr-1" />
                        Copy .INP
                      </>
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => { e.stopPropagation(); downloadSWMM5Model(featured.id, model.name); }}
                    className="h-7 px-3 bg-[var(--deep-ocean)] hover:bg-[var(--cerulean)]/30 text-[var(--parchment)]"
                    title="Download .INP file"
                  >
                    <Download size={12} />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* What is SWMM5 Section */}
      <div className="mt-5 p-4 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/10">
        <h4 className="font-heading text-sm text-[var(--gold)] mb-2">What is EPA SWMM5?</h4>
        <p className="text-xs text-[var(--parchment)]/70 mb-3">
          The Storm Water Management Model (SWMM) is the EPA's free, industry-standard software for hydraulic simulation. 
          These .INP files recreate ancient water systems so you can analyze flow rates, pressures, and hydraulic behavior 
          just as modern engineers do for contemporary infrastructure.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--cerulean)]/20 flex items-center justify-center">
              <Droplets size={16} className="text-[var(--cerulean)]" />
            </div>
            <div>
              <div className="text-[var(--parchment)]">Flow Analysis</div>
              <div className="text-[var(--parchment)]/50 text-[10px]">Simulate water movement</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--gold)]/20 flex items-center justify-center">
              <Gauge size={16} className="text-[var(--gold)]" />
            </div>
            <div>
              <div className="text-[var(--parchment)]">Pressure Maps</div>
              <div className="text-[var(--parchment)]/50 text-[10px]">Visualize hydraulics</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--terracotta)]/20 flex items-center justify-center">
              <Layers size={16} className="text-[var(--terracotta)]" />
            </div>
            <div>
              <div className="text-[var(--parchment)]">Network Models</div>
              <div className="text-[var(--parchment)]/50 text-[10px]">Nodes, pipes, channels</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--aqua)]/20 flex items-center justify-center">
              <Clock size={16} className="text-[var(--aqua)]" />
            </div>
            <div>
              <div className="text-[var(--parchment)]">Time Series</div>
              <div className="text-[var(--parchment)]/50 text-[10px]">Dynamic simulation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--parchment)]/60">
        <a 
          href="https://www.epa.gov/water-research/storm-water-management-model-swmm"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-[var(--cerulean)] transition-colors"
        >
          <ExternalLink size={12} />
          Download EPA SWMM5 (Free)
        </a>
        <span className="hidden sm:inline">•</span>
        <span className="text-center">Copy models to clipboard to avoid antivirus false positives</span>
        <span className="hidden sm:inline">•</span>
        <span>Models by Robert Dickinson, PE</span>
      </div>
    </div>
  );
}
