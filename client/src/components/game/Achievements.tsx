import { useProgress } from "../../lib/stores/useProgress";
import { useInventory } from "../../lib/stores/useInventory";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { X, Award, Lock, CheckCircle, Droplets, Globe, Map, Compass, Book, Star, Crown } from "lucide-react";
import { gameData, getAllArtifacts, categoryFilters, eraFilters } from "../../data/gameData";

interface AchievementsProps {
  onClose: () => void;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: "explorer" | "scholar" | "collector" | "time-traveler";
  requirement: (progress: any, artifacts: any[]) => boolean;
  tier: "bronze" | "silver" | "gold" | "legendary";
}

const achievements: Achievement[] = [
  {
    id: "water-seeker",
    name: "Water Seeker",
    description: "Discover your first water invention",
    icon: <Droplets className="w-6 h-6" />,
    category: "explorer",
    requirement: (progress) => progress.discoveredArtifacts.length >= 1,
    tier: "bronze"
  },
  {
    id: "aqua-explorer",
    name: "Aqua Explorer",
    description: "Discover 5 water inventions",
    icon: <Compass className="w-6 h-6" />,
    category: "explorer",
    requirement: (progress) => progress.discoveredArtifacts.length >= 5,
    tier: "silver"
  },
  {
    id: "global-citizen",
    name: "Global Citizen",
    description: "Unlock all 8 civilizations",
    icon: <Globe className="w-6 h-6" />,
    category: "explorer",
    requirement: (progress) => progress.unlockedRegions.length >= 8,
    tier: "gold"
  },
  {
    id: "master-explorer",
    name: "Master Explorer",
    description: "Discover all water inventions",
    icon: <Crown className="w-6 h-6" />,
    category: "explorer",
    requirement: (progress) => progress.discoveredArtifacts.length >= getAllArtifacts().length,
    tier: "legendary"
  },
  {
    id: "history-buff",
    name: "History Buff",
    description: "Explore 5 historical sites",
    icon: <Map className="w-6 h-6" />,
    category: "scholar",
    requirement: (progress) => progress.exploredLocations.length >= 5,
    tier: "bronze"
  },
  {
    id: "professor",
    name: "Professor",
    description: "Explore all historical sites",
    icon: <Book className="w-6 h-6" />,
    category: "scholar",
    requirement: (progress) => {
      const totalLocations = gameData.regions.reduce((sum, r) => sum + r.locations.length, 0);
      return progress.exploredLocations.length >= totalLocations;
    },
    tier: "gold"
  },
  {
    id: "curator",
    name: "Curator",
    description: "Collect 10 water inventions",
    icon: <Star className="w-6 h-6" />,
    category: "collector",
    requirement: (progress) => progress.discoveredArtifacts.length >= 10,
    tier: "silver"
  },
  {
    id: "archivist",
    name: "Archivist",
    description: "Collect 20 water inventions",
    icon: <Award className="w-6 h-6" />,
    category: "collector",
    requirement: (progress) => progress.discoveredArtifacts.length >= 20,
    tier: "gold"
  },
  {
    id: "ancient-visitor",
    name: "Ancient Visitor",
    description: "Explore a site from the Ancient Period",
    icon: <Compass className="w-6 h-6" />,
    category: "time-traveler",
    requirement: (progress) => {
      const ancientRegions = gameData.regions.filter(r => r.era === "ancient").map(r => r.id);
      return progress.unlockedRegions.some((id: string) => ancientRegions.includes(id));
    },
    tier: "bronze"
  },
  {
    id: "classical-scholar",
    name: "Classical Scholar",
    description: "Explore sites from Greece and Rome",
    icon: <Book className="w-6 h-6" />,
    category: "time-traveler",
    requirement: (progress) => {
      return progress.unlockedRegions.includes("ancient-greece") && 
             progress.unlockedRegions.includes("ancient-rome");
    },
    tier: "silver"
  },
  {
    id: "medieval-wanderer",
    name: "Medieval Wanderer",
    description: "Explore sites from the Medieval Period",
    icon: <Map className="w-6 h-6" />,
    category: "time-traveler",
    requirement: (progress) => {
      const medievalRegions = gameData.regions.filter(r => r.era === "medieval").map(r => r.id);
      return progress.unlockedRegions.some((id: string) => medievalRegions.includes(id));
    },
    tier: "bronze"
  },
  {
    id: "time-master",
    name: "Time Master",
    description: "Explore civilizations from all eras",
    icon: <Crown className="w-6 h-6" />,
    category: "time-traveler",
    requirement: (progress) => {
      const eras = new Set(gameData.regions.filter(r => 
        progress.unlockedRegions.includes(r.id)
      ).map(r => r.era));
      return eras.size >= 3;
    },
    tier: "gold"
  }
];

const tierColors = {
  bronze: "from-amber-700 to-amber-900",
  silver: "from-gray-300 to-gray-500",
  gold: "from-yellow-400 to-yellow-600",
  legendary: "from-purple-400 to-purple-600"
};

const categoryLabels = {
  explorer: "Explorer",
  scholar: "Scholar",
  collector: "Collector",
  "time-traveler": "Time Traveler"
};

export default function Achievements({ onClose }: AchievementsProps) {
  const { progress } = useProgress();
  const { artifacts } = useInventory();

  const unlockedAchievements = achievements.filter(a => a.requirement(progress, artifacts));
  const lockedAchievements = achievements.filter(a => !a.requirement(progress, artifacts));

  const progressPercent = Math.round((unlockedAchievements.length / achievements.length) * 100);

  return (
    <Card className="w-full max-w-3xl max-h-[85vh] water-card">
      <CardHeader className="flex flex-row items-center justify-between border-b border-[var(--aqua)]/20">
        <div>
          <CardTitle className="font-heading text-[var(--gold)] text-xl">Achievements</CardTitle>
          <p className="text-[var(--parchment)]/70 text-sm mt-1">
            {unlockedAchievements.length} of {achievements.length} unlocked ({progressPercent}%)
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
          {unlockedAchievements.length > 0 && (
            <div className="mb-6">
              <h3 className="text-[var(--aqua)] font-medium mb-3 flex items-center gap-2">
                <CheckCircle size={16} /> Unlocked
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {unlockedAchievements.map((achievement) => (
                  <Card 
                    key={achievement.id} 
                    className={`bg-gradient-to-r ${tierColors[achievement.tier]} border-[var(--gold)]/50`}
                  >
                    <CardContent className="p-3 flex items-center gap-3">
                      <div className="text-white">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-sm">{achievement.name}</h4>
                        <p className="text-white/80 text-xs">{achievement.description}</p>
                      </div>
                      <Badge className="text-xs capitalize bg-white/20 text-white">
                        {achievement.tier}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {lockedAchievements.length > 0 && (
            <div>
              <h3 className="text-[var(--parchment)]/50 font-medium mb-3 flex items-center gap-2">
                <Lock size={16} /> Locked
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {lockedAchievements.map((achievement) => (
                  <Card 
                    key={achievement.id} 
                    className="bg-[var(--deep-ocean)]/50 border-[var(--parchment)]/20"
                  >
                    <CardContent className="p-3 flex items-center gap-3 opacity-50">
                      <div className="text-[var(--parchment)]/50">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[var(--parchment)]/70 font-medium text-sm">{achievement.name}</h4>
                        <p className="text-[var(--parchment)]/50 text-xs">{achievement.description}</p>
                      </div>
                      <Badge className="text-xs capitalize bg-[var(--parchment)]/10 text-[var(--parchment)]/50">
                        {categoryLabels[achievement.category]}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}