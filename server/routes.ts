import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Progress tracking routes
  app.post("/api/progress", async (req, res) => {
    try {
      const { unlockedRegions, exploredLocations, discoveredArtifacts, regionProgress } = req.body;
      
      // For now, we'll use a simple user ID (in production, use proper authentication)
      const userId = "player1";
      
      await storage.saveProgress(userId, {
        unlockedRegions,
        exploredLocations,
        discoveredArtifacts,
        regionProgress
      });
      
      res.json({ success: true });
    } catch (error) {
      console.error("Save progress error:", error);
      res.status(500).json({ error: "Failed to save progress" });
    }
  });
  
  app.get("/api/progress", async (req, res) => {
    try {
      const userId = "player1";
      const progress = await storage.getProgress(userId);
      
      res.json(progress);
    } catch (error) {
      console.error("Load progress error:", error);
      res.status(500).json({ error: "Failed to load progress" });
    }
  });
  
  // Leaderboard route
  app.get("/api/leaderboard", async (req, res) => {
    try {
      const leaderboard = await storage.getLeaderboard();
      res.json(leaderboard);
    } catch (error) {
      console.error("Leaderboard error:", error);
      res.status(500).json({ error: "Failed to load leaderboard" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
