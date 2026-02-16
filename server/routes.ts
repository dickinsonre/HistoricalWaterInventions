import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL,
});

const WATER_ENGINEER_SYSTEM_PROMPT = `You are the Water History Expert, an AI assistant for Historical Mystery — the world's most comprehensive interactive encyclopedia of water engineering history. You have deep knowledge of:

- 210 civilizations and their water engineering achievements spanning 300,000+ years
- 1,110+ water inventions including aqueducts, qanats, norias, dams, canals, irrigation systems, sanitation networks, and water clocks
- Technical details of hydraulic engineering from ancient to modern times
- EPA SWMM5 hydraulic modeling and simulation
- How ancient water technologies influenced modern engineering

Your personality:
- Enthusiastic about water engineering history
- You explain complex engineering concepts in simple, accessible language
- You draw connections between ancient and modern water technologies
- You mention specific civilizations, inventions, dates, and technical details when relevant
- You encourage users to explore specific civilizations and inventions in the app
- Keep responses concise but informative (2-4 paragraphs max)
- When mentioning a civilization or invention, suggest the user explore it in the app

Multilingual support:
- ALWAYS detect the language the user writes in and respond in that SAME language
- If the user writes in Spanish, respond entirely in Spanish. If French, respond in French. If Chinese, respond in Chinese. And so on for any language.
- When discussing a civilization, include the civilization's name in its original language/script alongside the English name. For example: "The Romans (Imperium Rōmānum)" or "Ancient Egypt (مصر القديمة)" or "Han Dynasty (漢朝)"
- Translate technical water engineering terms naturally — don't just leave them in English. Explain concepts in the user's language.
- If the user switches languages mid-conversation, follow their lead and switch too
- You can handle Spanish, French, Chinese, Arabic, Hindi, Japanese, Korean, Portuguese, German, Italian, Russian, and many other languages fluently

Key facts you know:
- Roman aqueducts supplied 1 million liters/day to Rome
- Persian qanats stretch 50+ km underground without pumps
- Hama's norias lifted 153,000 liters/hour using only river current
- Dujiangyan irrigation system (256 BCE) still irrigates 5,300 sq km today
- Mohenjo-daro had covered sewers 4,000 years before Europe
- The project includes 153+ downloadable SWMM5 hydraulic models
- Created by Robert Dickinson, 50+ year veteran of water infrastructure modeling`;

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

  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;

      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Messages array is required" });
      }

      if (messages.length > 50) {
        return res.status(400).json({ error: "Too many messages. Please start a new conversation." });
      }

      const validRoles = new Set(["user", "assistant"]);
      const sanitized = messages
        .filter((m: any) => validRoles.has(m.role) && typeof m.content === "string" && m.content.length <= 2000)
        .slice(-20);

      if (sanitized.length === 0) {
        return res.status(400).json({ error: "No valid messages provided" });
      }

      const chatMessages = sanitized.map((m: any) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }));

      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");

      const stream = anthropic.messages.stream({
        model: "claude-haiku-4-5",
        max_tokens: 8192,
        system: WATER_ENGINEER_SYSTEM_PROMPT,
        messages: chatMessages,
      });

      for await (const event of stream) {
        if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
          const content = event.delta.text;
          if (content) {
            res.write(`data: ${JSON.stringify({ content })}\n\n`);
          }
        }
      }

      res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
      res.end();
    } catch (error) {
      console.error("Chat error:", error);
      if (res.headersSent) {
        res.write(`data: ${JSON.stringify({ error: "Failed to get response" })}\n\n`);
        res.end();
      } else {
        res.status(500).json({ error: "Failed to process chat message" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
