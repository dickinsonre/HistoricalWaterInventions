import { useInventory } from "../../lib/stores/useInventory";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { X, Droplets, Calendar, MapPin } from "lucide-react";

interface InventoryProps {
  onClose: () => void;
}

export default function Inventory({ onClose }: InventoryProps) {
  const { artifacts } = useInventory();

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

  return (
    <Card className="w-full max-w-3xl max-h-[85vh] water-card">
      <CardHeader className="flex flex-row items-center justify-between border-b border-[var(--aqua)]/20">
        <div>
          <CardTitle className="font-heading text-[var(--gold)] text-xl flex items-center gap-2">
            <Droplets className="w-5 h-5 text-[var(--aqua)]" />
            Water Invention Collection
          </CardTitle>
          <p className="text-[var(--parchment)]/70 text-sm mt-1">
            {artifacts.length} inventions discovered
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
        <ScrollArea className="h-[60vh]">
          {artifacts.length === 0 ? (
            <div className="text-center py-12">
              <Droplets className="w-16 h-16 mx-auto mb-4 text-[var(--aqua)]/30" />
              <p className="text-[var(--parchment)]/70 text-lg mb-2">
                No inventions discovered yet
              </p>
              <p className="text-[var(--parchment)]/50 text-sm">
                Explore ancient civilizations to discover water engineering marvels!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {artifacts.map((artifact) => {
                const style = getRarityStyle(artifact.rarity);
                return (
                  <Card 
                    key={artifact.id} 
                    className="bg-[var(--deep-ocean)]/50 border-[var(--aqua)]/20 hover:border-[var(--aqua)]/40 transition-colors"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className={`font-medium ${style.text}`}>{artifact.name}</h3>
                        <Badge className={`${style.badge} capitalize text-xs`}>
                          {artifact.rarity}
                        </Badge>
                      </div>
                      <p className="text-[var(--parchment)]/80 text-sm mb-3">{artifact.description}</p>
                      
                      {artifact.category && (
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-[var(--river-blue)]/50 text-[var(--aqua)] text-xs">
                            {getCategoryLabel(artifact.category)}
                          </Badge>
                        </div>
                      )}
                      
                      <div className="text-xs text-[var(--parchment)]/60 space-y-1">
                        <p className="flex items-center gap-1">
                          <Calendar size={12} />
                          {artifact.historicalPeriod}
                        </p>
                        <p className="flex items-center gap-1">
                          <MapPin size={12} />
                          {artifact.significance}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}