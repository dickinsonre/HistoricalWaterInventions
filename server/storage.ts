import { users, type User, type InsertUser } from "@shared/schema";

export interface GameProgress {
  unlockedRegions: string[];
  exploredLocations: string[];
  discoveredArtifacts: string[];
  regionProgress: { [regionId: string]: number };
  lastSaved: Date;
}

export interface LeaderboardEntry {
  userId: string;
  totalArtifacts: number;
  totalLocations: number;
  completionPercentage: number;
}

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Game progress methods
  saveProgress(userId: string, progress: Omit<GameProgress, 'lastSaved'>): Promise<void>;
  getProgress(userId: string): Promise<GameProgress | null>;
  getLeaderboard(limit?: number): Promise<LeaderboardEntry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private gameProgress: Map<string, GameProgress>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.gameProgress = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveProgress(userId: string, progress: Omit<GameProgress, 'lastSaved'>): Promise<void> {
    const fullProgress: GameProgress = {
      ...progress,
      lastSaved: new Date()
    };
    this.gameProgress.set(userId, fullProgress);
    console.log(`Progress saved for user ${userId}:`, fullProgress);
  }

  async getProgress(userId: string): Promise<GameProgress | null> {
    return this.gameProgress.get(userId) || null;
  }

  async getLeaderboard(limit: number = 10): Promise<LeaderboardEntry[]> {
    const entries: LeaderboardEntry[] = [];
    
    for (const [userId, progress] of Array.from(this.gameProgress.entries())) {
      const totalArtifacts = progress.discoveredArtifacts.length;
      const totalLocations = progress.exploredLocations.length;
      const completionPercentage = Math.round(
        ((totalArtifacts + totalLocations) / 20) * 100 // Approximate total items
      );
      
      entries.push({
        userId,
        totalArtifacts,
        totalLocations,
        completionPercentage
      });
    }
    
    return entries
      .sort((a, b) => b.completionPercentage - a.completionPercentage)
      .slice(0, limit);
  }
}

export const storage = new MemStorage();
