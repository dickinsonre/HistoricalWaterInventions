import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ArtifactData } from "../../data/gameData";

interface InventoryState {
  artifacts: ArtifactData[];
  
  // Actions
  addArtifact: (artifact: ArtifactData) => void;
  removeArtifact: (artifactId: string) => void;
  hasArtifact: (artifactId: string) => boolean;
  getArtifactsByRarity: (rarity: string) => ArtifactData[];
}

export const useInventory = create<InventoryState>()(
  persist(
    (set, get) => ({
      artifacts: [],
      
      addArtifact: (artifact) => {
        const { artifacts } = get();
        if (!artifacts.some(a => a.id === artifact.id)) {
          set({ artifacts: [...artifacts, artifact] });
        }
      },
      
      removeArtifact: (artifactId) => {
        const { artifacts } = get();
        set({ artifacts: artifacts.filter(a => a.id !== artifactId) });
      },
      
      hasArtifact: (artifactId) => {
        const { artifacts } = get();
        return artifacts.some(a => a.id === artifactId);
      },
      
      getArtifactsByRarity: (rarity) => {
        const { artifacts } = get();
        return artifacts.filter(a => a.rarity === rarity);
      }
    }),
    {
      name: "enchanted-history-inventory"
    }
  )
);
