import { useInventory } from "../../lib/stores/useInventory";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { X } from "lucide-react";

interface InventoryProps {
  onClose: () => void;
}

export default function Inventory({ onClose }: InventoryProps) {
  const { artifacts } = useInventory();

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "bg-gray-500";
      case "rare": return "bg-blue-500";
      case "epic": return "bg-purple-500";
      case "legendary": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <Card className="w-full max-w-2xl max-h-[80vh] bg-black/90 border-white/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">Artifact Collection</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-white hover:bg-white/20"
        >
          <X size={16} />
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[60vh]">
          {artifacts.length === 0 ? (
            <p className="text-white/70 text-center py-8">
              No artifacts discovered yet. Explore the world to find magical treasures!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {artifacts.map((artifact) => (
                <Card key={artifact.id} className="bg-white/10 border-white/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium">{artifact.name}</h3>
                      <Badge className={getRarityColor(artifact.rarity)}>
                        {artifact.rarity}
                      </Badge>
                    </div>
                    <p className="text-white/80 text-sm mb-2">{artifact.description}</p>
                    <div className="text-xs text-white/60">
                      <p><strong>Period:</strong> {artifact.historicalPeriod}</p>
                      <p><strong>Significance:</strong> {artifact.significance}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
