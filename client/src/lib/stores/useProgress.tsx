import { create } from "zustand";
import { persist } from "zustand/middleware";
import { apiRequest } from "../queryClient";

interface ProgressState {
  unlockedRegions: string[];
  exploredLocations: string[];
  discoveredArtifacts: string[];
  regionProgress: { [regionId: string]: number };
  
  // Add progress getter to prevent undefined errors
  progress: {
    unlockedRegions: string[];
    exploredLocations: string[];
    discoveredArtifacts: string[];
    regionProgress: { [regionId: string]: number };
  };
  
  // Actions
  unlockRegion: (regionId: string) => void;
  exploreLocation: (locationId: string, regionId: string) => void;
  discoverArtifact: (artifactId: string, locationId: string) => void;
  updateRegionProgress: (regionId: string) => void;
  saveProgress: () => Promise<void>;
  loadProgress: () => Promise<void>;
}

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      unlockedRegions: ["ancient-egypt", "ancient-rome", "mesopotamia", "indus-valley", "ancient-greece", "ancient-china", "islamic-golden-age", "mesoamerica", "modern-era", "minoan-crete", "ancient-persia", "khmer-empire", "nubia", "nabataean", "sri-lanka", "ancestral-puebloans", "byzantine"], // All regions unlocked for exploration
      exploredLocations: [],
      discoveredArtifacts: [],
      regionProgress: {},
      
      // Add progress getter to prevent undefined errors
      get progress() {
        const state = get();
        return {
          unlockedRegions: state.unlockedRegions || [],
          exploredLocations: state.exploredLocations || [],
          discoveredArtifacts: state.discoveredArtifacts || [],
          regionProgress: state.regionProgress || {}
        };
      },
      
      unlockRegion: (regionId) => {
        const { unlockedRegions } = get();
        if (!unlockedRegions.includes(regionId)) {
          set({ unlockedRegions: [...unlockedRegions, regionId] });
          get().saveProgress();
        }
      },
      
      exploreLocation: (locationId, regionId) => {
        const { exploredLocations } = get();
        if (!exploredLocations.includes(locationId)) {
          set({ exploredLocations: [...exploredLocations, locationId] });
          get().updateRegionProgress(regionId);
          get().saveProgress();
        }
      },
      
      discoverArtifact: (artifactId, locationId) => {
        const { discoveredArtifacts } = get();
        if (!discoveredArtifacts.includes(artifactId)) {
          set({ discoveredArtifacts: [...discoveredArtifacts, artifactId] });
          get().saveProgress();
        }
      },
      
      updateRegionProgress: (regionId) => {
        // Calculate progress based on explored locations and discovered artifacts
        // This is a simplified calculation
        const progress = Math.min(100, get().exploredLocations.length * 20);
        set({ 
          regionProgress: { 
            ...get().regionProgress, 
            [regionId]: progress 
          } 
        });
      },
      
      saveProgress: async () => {
        try {
          const state = get();
          await apiRequest("POST", "/api/progress", {
            unlockedRegions: state.unlockedRegions,
            exploredLocations: state.exploredLocations,
            discoveredArtifacts: state.discoveredArtifacts,
            regionProgress: state.regionProgress
          });
        } catch (error) {
          console.log("Progress save failed (offline mode):", error);
        }
      },
      
      loadProgress: async () => {
        try {
          const response = await apiRequest("GET", "/api/progress");
          const data = await response.json();
          
          if (data) {
            set({
              unlockedRegions: data.unlockedRegions || ["ancient-egypt"],
              exploredLocations: data.exploredLocations || [],
              discoveredArtifacts: data.discoveredArtifacts || [],
              regionProgress: data.regionProgress || {}
            });
          }
        } catch (error) {
          console.log("Progress load failed (offline mode):", error);
        }
      }
    }),
    {
      name: "enchanted-history-progress"
    }
  )
);
