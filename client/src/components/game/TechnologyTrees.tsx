import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { X, GitBranch, ChevronRight, ArrowRight, Droplets, Clock, Globe, Layers, Zap } from "lucide-react";
import { gameData } from "../../data/gameData";

interface TechnologyTreesProps {
  onClose: () => void;
  onSelectInvention?: (id: string) => void;
}

type Era = "ancient" | "classical" | "medieval" | "modern";

interface TechNode {
  id: string;
  name: string;
  civilization: string;
  year: string;
  era: Era;
  gameDataId?: string;
  icon: React.ReactNode;
}

interface TechTree {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  nodes: TechNode[];
}

const ERA_COLORS: Record<Era, string> = {
  ancient: "var(--gold)",
  classical: "var(--cerulean)",
  medieval: "var(--terracotta)",
  modern: "var(--aqua)",
};

const ERA_LABELS: Record<Era, string> = {
  ancient: "Ancient",
  classical: "Classical",
  medieval: "Medieval",
  modern: "Modern",
};

const TECH_TREES: TechTree[] = [
  {
    id: "water-lifting",
    title: "Water Lifting",
    description: "From hand-carried water to mechanical pumps — the evolution of raising water against gravity for irrigation, drinking, and industry.",
    icon: <Zap className="w-5 h-5" />,
    nodes: [
      { id: "wl-1", name: "Hand-Carried Water", civilization: "Universal", year: "Prehistoric", era: "ancient", icon: <Droplets className="w-4 h-4" /> },
      { id: "wl-2", name: "Shaduf", civilization: "Egypt", year: "2000 BCE", era: "ancient", gameDataId: "shaduf", icon: <Zap className="w-4 h-4" /> },
      { id: "wl-3", name: "Noria Water Wheel", civilization: "Syria", year: "200 BCE", era: "classical", icon: <Globe className="w-4 h-4" /> },
      { id: "wl-4", name: "Chain Pump", civilization: "China", year: "100 CE", era: "classical", gameDataId: "chain-pump", icon: <Layers className="w-4 h-4" /> },
      { id: "wl-5", name: "Archimedean Screw", civilization: "Greece", year: "250 BCE", era: "classical", gameDataId: "archimedes-screw", icon: <Zap className="w-4 h-4" /> },
      { id: "wl-6", name: "Sakia Water Wheel", civilization: "Egypt", year: "300 BCE", era: "classical", gameDataId: "sakia-waterwheel", icon: <Globe className="w-4 h-4" /> },
      { id: "wl-7", name: "Modern Pumps", civilization: "Global", year: "1800s CE", era: "modern", icon: <Zap className="w-4 h-4" /> },
    ],
  },
  {
    id: "irrigation",
    title: "Irrigation",
    description: "The story of controlling water for agriculture — from simple flood fields to precision drip systems that transformed deserts into gardens.",
    icon: <Droplets className="w-5 h-5" />,
    nodes: [
      { id: "ir-1", name: "Flood Irrigation", civilization: "Mesopotamia", year: "6000 BCE", era: "ancient", icon: <Droplets className="w-4 h-4" /> },
      { id: "ir-2", name: "Basin Irrigation", civilization: "Egypt", year: "3100 BCE", era: "ancient", gameDataId: "basin-irrigation", icon: <Layers className="w-4 h-4" /> },
      { id: "ir-3", name: "Canal Systems", civilization: "Mesopotamia", year: "2500 BCE", era: "ancient", gameDataId: "irrigation-tablet", icon: <Globe className="w-4 h-4" /> },
      { id: "ir-4", name: "Qanat", civilization: "Persia", year: "1000 BCE", era: "ancient", gameDataId: "qanat-plans", icon: <Layers className="w-4 h-4" /> },
      { id: "ir-5", name: "Subak System", civilization: "Bali", year: "900 CE", era: "medieval", gameDataId: "subak-system", icon: <Droplets className="w-4 h-4" /> },
      { id: "ir-6", name: "Drip Irrigation", civilization: "Israel", year: "1960s", era: "modern", gameDataId: "drip-irrigation", icon: <Zap className="w-4 h-4" /> },
    ],
  },
  {
    id: "aqueducts",
    title: "Aqueducts",
    description: "Moving water over vast distances — from open channels carved in stone to Roman gravity-fed masterpieces and pressurized siphon systems.",
    icon: <Globe className="w-5 h-5" />,
    nodes: [
      { id: "aq-1", name: "Open Channels", civilization: "Assyria", year: "700 BCE", era: "ancient", gameDataId: "jerwan-aqueduct", icon: <Globe className="w-4 h-4" /> },
      { id: "aq-2", name: "Covered Conduits", civilization: "Persia", year: "500 BCE", era: "ancient", icon: <Layers className="w-4 h-4" /> },
      { id: "aq-3", name: "Gravity Aqueducts", civilization: "Rome", year: "312 BCE", era: "classical", gameDataId: "aqua-appia", icon: <Globe className="w-4 h-4" /> },
      { id: "aq-4", name: "Inverted Siphons", civilization: "Rome", year: "100 BCE", era: "classical", gameDataId: "roman-inverted-siphon", icon: <Zap className="w-4 h-4" /> },
      { id: "aq-5", name: "Pressurized Pipes", civilization: "Global", year: "1800s CE", era: "modern", icon: <Zap className="w-4 h-4" /> },
    ],
  },
  {
    id: "sanitation",
    title: "Sanitation",
    description: "From the earliest covered drains of the Indus Valley to Rome's Cloaca Maxima and the modern sewage revolution that saved millions of lives.",
    icon: <Layers className="w-5 h-5" />,
    nodes: [
      { id: "sa-1", name: "Simple Drains", civilization: "Indus Valley", year: "2500 BCE", era: "ancient", gameDataId: "drain-system", icon: <Layers className="w-4 h-4" /> },
      { id: "sa-2", name: "Cloaca Maxima", civilization: "Rome", year: "600 BCE", era: "ancient", gameDataId: "cloaca-maxima", icon: <Globe className="w-4 h-4" /> },
      { id: "sa-3", name: "Public Baths (Thermae)", civilization: "Rome", year: "300 BCE", era: "classical", gameDataId: "roman-thermae", icon: <Droplets className="w-4 h-4" /> },
      { id: "sa-4", name: "Sewage Systems", civilization: "London", year: "1860s", era: "modern", icon: <Zap className="w-4 h-4" /> },
    ],
  },
  {
    id: "dams",
    title: "Dams",
    description: "Humanity's quest to store and control water — from simple earthen barriers in ancient Jordan to modern concrete mega-dams powering nations.",
    icon: <Layers className="w-5 h-5" />,
    nodes: [
      { id: "dm-1", name: "Simple Earth Dams", civilization: "Jordan", year: "3000 BCE", era: "ancient", icon: <Layers className="w-4 h-4" /> },
      { id: "dm-2", name: "Sadd el-Kafara", civilization: "Egypt", year: "2600 BCE", era: "ancient", gameDataId: "sadd-el-kafara", icon: <Globe className="w-4 h-4" /> },
      { id: "dm-3", name: "Masonry Dams", civilization: "Rome", year: "100 BCE", era: "classical", icon: <Layers className="w-4 h-4" /> },
      { id: "dm-4", name: "Arch Dams", civilization: "Persia", year: "1300 CE", era: "medieval", icon: <Globe className="w-4 h-4" /> },
      { id: "dm-5", name: "Buttress Dams", civilization: "Spain", year: "1500 CE", era: "medieval", icon: <Layers className="w-4 h-4" /> },
      { id: "dm-6", name: "Modern Concrete Dams", civilization: "Global", year: "1900s CE", era: "modern", icon: <Zap className="w-4 h-4" /> },
    ],
  },
  {
    id: "water-clocks",
    title: "Water Clocks",
    description: "Time measured by water — from Egypt's simple outflow clepsydra to elaborate Chinese and Islamic astronomical clock towers.",
    icon: <Clock className="w-5 h-5" />,
    nodes: [
      { id: "wc-1", name: "Outflow Clepsydra", civilization: "Egypt", year: "1500 BCE", era: "ancient", gameDataId: "clepsydra", icon: <Clock className="w-4 h-4" /> },
      { id: "wc-2", name: "Inflow Clepsydra", civilization: "Babylon", year: "600 BCE", era: "ancient", icon: <Clock className="w-4 h-4" /> },
      { id: "wc-3", name: "Islamic Water Clocks", civilization: "Islamic Golden Age", year: "800 CE", era: "medieval", icon: <Clock className="w-4 h-4" /> },
      { id: "wc-4", name: "Song Dynasty Clock Tower", civilization: "China", year: "1000 CE", era: "medieval", icon: <Clock className="w-4 h-4" /> },
    ],
  },
  {
    id: "canals",
    title: "Canals",
    description: "From simple irrigation ditches to grand navigation canals connecting seas — waterways that shaped trade, agriculture, and empire.",
    icon: <ChevronRight className="w-5 h-5" />,
    nodes: [
      { id: "cn-1", name: "Irrigation Ditches", civilization: "Mesopotamia", year: "6000 BCE", era: "ancient", icon: <Droplets className="w-4 h-4" /> },
      { id: "cn-2", name: "Grand Canal", civilization: "China", year: "486 BCE", era: "ancient", gameDataId: "grand-canal", icon: <Globe className="w-4 h-4" /> },
      { id: "cn-3", name: "Lock Systems", civilization: "China", year: "984 CE", era: "medieval", gameDataId: "pound-lock", icon: <Layers className="w-4 h-4" /> },
      { id: "cn-4", name: "Amsterdam Canals", civilization: "Dutch", year: "1600s CE", era: "modern", gameDataId: "polder-system", icon: <Globe className="w-4 h-4" /> },
      { id: "cn-5", name: "Panama Canal", civilization: "Global", year: "1914", era: "modern", icon: <Zap className="w-4 h-4" /> },
    ],
  },
];

function getAllGameDataArtifactIds(): Set<string> {
  const ids = new Set<string>();
  for (const region of gameData.regions) {
    for (const location of region.locations) {
      for (const artifact of location.artifacts) {
        ids.add(artifact.id);
      }
    }
  }
  return ids;
}

export default function TechnologyTrees({ onClose, onSelectInvention }: TechnologyTreesProps) {
  const [activeTreeId, setActiveTreeId] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const artifactIds = useMemo(() => getAllGameDataArtifactIds(), []);

  const activeTree = activeTreeId ? TECH_TREES.find(t => t.id === activeTreeId) : null;
  const treesToRender = activeTree ? [activeTree] : TECH_TREES;

  const handleNodeClick = (node: TechNode) => {
    if (node.gameDataId && artifactIds.has(node.gameDataId) && onSelectInvention) {
      onSelectInvention(node.gameDataId);
    }
  };

  const isClickable = (node: TechNode) => {
    return !!(node.gameDataId && artifactIds.has(node.gameDataId) && onSelectInvention);
  };

  return (
    <Card className="w-full max-w-5xl max-h-[90vh] water-card">
      <CardHeader className="border-b border-[var(--aqua)]/20">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-heading text-[var(--gold)] text-xl flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-[var(--aqua)]" />
              Technology Trees
            </CardTitle>
            <p className="text-[var(--parchment)]/70 text-sm mt-1">
              How water technologies evolved across civilizations and millennia
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X size={18} />
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <Button
            variant={activeTreeId === null ? "default" : "ghost"}
            size="sm"
            className={activeTreeId === null ? "bg-[var(--cerulean)] text-white" : "text-[var(--parchment)]/70"}
            onClick={() => setActiveTreeId(null)}
          >
            All Trees
          </Button>
          {TECH_TREES.map(tree => (
            <Button
              key={tree.id}
              variant={activeTreeId === tree.id ? "default" : "ghost"}
              size="sm"
              className={activeTreeId === tree.id ? "bg-[var(--cerulean)] text-white" : "text-[var(--parchment)]/70"}
              onClick={() => setActiveTreeId(tree.id)}
            >
              <span className="mr-1">{tree.icon}</span>
              {tree.title}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-3">
          {(Object.keys(ERA_COLORS) as Era[]).map(era => (
            <div key={era} className="flex items-center gap-1.5">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: ERA_COLORS[era] }}
              />
              <span className="text-xs text-[var(--parchment)]/60">{ERA_LABELS[era]}</span>
            </div>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <ScrollArea className="h-[60vh]">
          <div className="space-y-8">
            {treesToRender.map(tree => (
              <div key={tree.id}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[var(--aqua)]">{tree.icon}</span>
                  <h3 className="font-heading text-[var(--gold)] text-lg">{tree.title}</h3>
                </div>
                <p className="text-[var(--parchment)]/60 text-sm mb-4">{tree.description}</p>
                <div className="flex items-stretch gap-0 overflow-x-auto pb-4">
                  {tree.nodes.map((node, idx) => (
                    <div key={node.id} className="flex items-center">
                      <div
                        className={`relative flex-shrink-0 w-44 rounded-lg border p-3 transition-all duration-200 ${
                          isClickable(node)
                            ? "cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-[var(--aqua)]/10"
                            : ""
                        } ${
                          hoveredNode === node.id
                            ? "border-[var(--gold)] shadow-md shadow-[var(--gold)]/20"
                            : "border-[var(--aqua)]/20"
                        }`}
                        style={{
                          backgroundColor: "rgba(0,0,0,0.3)",
                          borderTopColor: ERA_COLORS[node.era],
                          borderTopWidth: "3px",
                        }}
                        onClick={() => handleNodeClick(node)}
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span style={{ color: ERA_COLORS[node.era] }}>{node.icon}</span>
                          <Badge
                            className="text-[10px] px-1.5 py-0"
                            style={{
                              backgroundColor: `${ERA_COLORS[node.era]}22`,
                              color: ERA_COLORS[node.era],
                              borderColor: `${ERA_COLORS[node.era]}44`,
                            }}
                          >
                            {ERA_LABELS[node.era]}
                          </Badge>
                        </div>
                        <h4 className="text-[var(--parchment)] text-sm font-medium leading-tight mb-1">
                          {node.name}
                        </h4>
                        <p className="text-[var(--parchment)]/50 text-xs">{node.civilization}</p>
                        <p className="text-xs mt-1" style={{ color: ERA_COLORS[node.era] }}>
                          {node.year}
                        </p>
                        {isClickable(node) && (
                          <div className="absolute top-1.5 right-1.5">
                            <ChevronRight size={12} className="text-[var(--aqua)]/60" />
                          </div>
                        )}
                        {hoveredNode === node.id && isClickable(node) && (
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[var(--aqua)] whitespace-nowrap z-10">
                            Click to explore
                          </div>
                        )}
                      </div>
                      {idx < tree.nodes.length - 1 && (
                        <div className="flex items-center flex-shrink-0 px-1">
                          <div className="w-4 h-0.5 bg-[var(--aqua)]/30" />
                          <ArrowRight size={14} className="text-[var(--aqua)]/40 -ml-1" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}