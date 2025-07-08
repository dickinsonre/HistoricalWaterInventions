import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export type GamePhase = "exploring" | "location_view" | "artifact_view";

interface GameState {
  phase: GamePhase;
  selectedRegion: string | null;
  selectedLocation: string | null;
  
  // Actions
  setSelectedRegion: (regionId: string | null) => void;
  setSelectedLocation: (locationId: string | null) => void;
  setPhase: (phase: GamePhase) => void;
}

export const useGameState = create<GameState>()(
  subscribeWithSelector((set) => ({
    phase: "exploring",
    selectedRegion: null,
    selectedLocation: null,
    
    setSelectedRegion: (regionId) => {
      set({ selectedRegion: regionId });
    },
    
    setSelectedLocation: (locationId) => {
      set({ selectedLocation: locationId });
    },
    
    setPhase: (phase) => {
      set({ phase });
    }
  }))
);
