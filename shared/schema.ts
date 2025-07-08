import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const gameProgress = pgTable("game_progress", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  unlockedRegions: jsonb("unlocked_regions").notNull().default([]),
  exploredLocations: jsonb("explored_locations").notNull().default([]),
  discoveredArtifacts: jsonb("discovered_artifacts").notNull().default([]),
  regionProgress: jsonb("region_progress").notNull().default({}),
  lastSaved: timestamp("last_saved").notNull().defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertProgressSchema = createInsertSchema(gameProgress).pick({
  userId: true,
  unlockedRegions: true,
  exploredLocations: true,
  discoveredArtifacts: true,
  regionProgress: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type GameProgress = typeof gameProgress.$inferSelect;
export type InsertProgress = z.infer<typeof insertProgressSchema>;
