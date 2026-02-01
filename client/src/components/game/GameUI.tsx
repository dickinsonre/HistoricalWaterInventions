import { useState } from "react";
import { useGameState } from "../../lib/stores/useGameState";
import { useProgress } from "../../lib/stores/useProgress";
import { useAudio } from "../../lib/stores/useAudio";
import Inventory from "./Inventory";
import ProgressTracker from "./ProgressTracker";
import Achievements from "./Achievements";
import TimelineFilter from "./TimelineFilter";
import ComparisonTool from "./ComparisonTool";
import FeaturedDiscoveries from "./FeaturedDiscoveries";
import AboutSection from "./AboutSection";
import DidYouKnow from "./DidYouKnow";
import InventionDetail from "./InventionDetail";
import CivilizationDetail from "./CivilizationDetail";
import WhyThisMatters from "./WhyThisMatters";
import SmartSearch from "./SmartSearch";
import TimeTravel from "./TimeTravel";
import ChallengeModes from "./ChallengeModes";
import TechnologyLibrary from "./TechnologyLibrary";
import MuseumMode from "./MuseumMode";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Volume2, VolumeX, Trophy, BookOpen, Award, Clock, Droplets, Scale, Compass, Star, Info, Lightbulb, Globe, Building, Search, Play, Gamepad2, Building2, Map, X } from "lucide-react";
import { gameData, getAllArtifacts } from "../../data/gameData";

export default function GameUI() {
  const { selectedRegion, selectedLocation, phase } = useGameState();
  const { progress } = useProgress();
  const { isMuted, toggleMute } = useAudio();
  const [showInventory, setShowInventory] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [showFeatured, setShowFeatured] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showFacts, setShowFacts] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showWhyMatters, setShowWhyMatters] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showTimeTravel, setShowTimeTravel] = useState(false);
  const [showChallenges, setShowChallenges] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showMuseum, setShowMuseum] = useState(false);
  const [showIntroCard, setShowIntroCard] = useState(true);
  const [selectedInvention, setSelectedInvention] = useState<string | null>(null);
  const [selectedCivilization, setSelectedCivilization] = useState<string | null>(null);

  const totalArtifacts = progress.discoveredArtifacts.length;
  const totalLocations = progress.exploredLocations.length;
  const totalRegions = progress.unlockedRegions.length;
  const allArtifacts = getAllArtifacts();
  const totalSites = gameData.regions.reduce((acc, r) => acc + r.locations.length, 0);

  return (
    <TooltipProvider delayDuration={300}>
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-auto">
          <div className="flex gap-2 flex-wrap">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setShowInventory(false);
                    setShowProgress(false);
                    setShowAchievements(false);
                    setShowTimeline(false);
                    setShowComparison(false);
                    setShowFeatured(false);
                    setShowLibrary(false);
                    setShowMuseum(false);
                    setShowChallenges(false);
                    setShowTimeTravel(false);
                    setShowSearch(false);
                  }}
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  <Map size={16} className="text-[var(--gold)]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="water-card text-[var(--parchment)]">
                3D World Map
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleMute}
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </Button>
              </TooltipTrigger>
              <TooltipContent className="water-card text-[var(--parchment)]">
                {isMuted ? "Unmute Sound" : "Mute Sound"}
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSearch(true)}
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  <Search size={16} className="text-[var(--cerulean)]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="water-card text-[var(--parchment)]">
                Smart Search
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowInventory(!showInventory)}
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  <Droplets size={16} className="text-[var(--aqua)]" />
                  <span className="ml-1">{totalArtifacts}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="water-card text-[var(--parchment)]">
                Water Inventions Collection
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowProgress(!showProgress)}
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  <Trophy size={16} className="text-[var(--gold)]" />
                  <span className="ml-1">{totalLocations}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="water-card text-[var(--parchment)]">
                Exploration Progress
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAchievements(!showAchievements)}
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  <Award size={16} className="text-[var(--terracotta)]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="water-card text-[var(--parchment)]">
                Achievements & Badges
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowTimeline(!showTimeline)}
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  <Clock size={16} className="text-[var(--aqua)]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="water-card text-[var(--parchment)]">
                Timeline Filter
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowLibrary(!showLibrary)}
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  <BookOpen size={16} className="text-[var(--cerulean)]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="water-card text-[var(--parchment)]">
                Technology Encyclopedia
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowMuseum(true)}
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  <Building2 size={16} className="text-amber-400" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="water-card text-[var(--parchment)]">
                Water Museum
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowTimeTravel(true)}
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  <Play size={16} className="text-[var(--gold)]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="water-card text-[var(--parchment)]">
                Time Travel Mode
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowComparison(!showComparison)}
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  <Scale size={16} className="text-[var(--cerulean)]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="water-card text-[var(--parchment)]">
                Compare Inventions
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFeatured(!showFeatured)}
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  <Star size={16} className="text-[var(--gold)]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="water-card text-[var(--parchment)]">
                Featured Discoveries
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowChallenges(true)}
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  <Gamepad2 size={16} className="text-purple-400" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="water-card text-[var(--parchment)]">
                Challenge Modes
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFacts(!showFacts)}
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  <Lightbulb size={16} className="text-yellow-400" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="water-card text-[var(--parchment)]">
                Did You Know?
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAbout(!showAbout)}
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  <Info size={16} className="text-[var(--parchment)]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="water-card text-[var(--parchment)]">
                About This Project
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowWhyMatters(!showWhyMatters)}
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  <Globe size={16} className="text-[var(--terracotta)]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="water-card text-[var(--parchment)]">
                Why This Matters Today
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCivilization("ancient-egypt")}
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  <Building size={16} className="text-[var(--gold)]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="water-card text-[var(--parchment)]">
                Explore Civilizations
              </TooltipContent>
            </Tooltip>
          </div>

        <div className="flex gap-2 flex-wrap justify-end">
          <Badge variant="secondary" className="water-card text-[var(--parchment)] border-[var(--aqua)]/30">
            <span className="text-[var(--aqua)]">{totalRegions}</span>
            <span className="ml-1 text-[var(--parchment)]/70">of {gameData.regions.length} Civilizations</span>
          </Badge>
          <Badge variant="secondary" className="water-card text-[var(--parchment)] border-[var(--aqua)]/30">
            <span className="text-[var(--cerulean)]">{totalLocations}</span>
            <span className="ml-1 text-[var(--parchment)]/70">of {totalSites} Sites</span>
          </Badge>
          <Badge variant="secondary" className="water-card text-[var(--parchment)] border-[var(--aqua)]/30">
            <span className="text-[var(--gold)]">{totalArtifacts}</span>
            <span className="ml-1 text-[var(--parchment)]/70">of {allArtifacts.length} Inventions</span>
          </Badge>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 pointer-events-auto">
        <div className="flex gap-4 bg-[var(--deep-ocean)]/90 backdrop-blur-sm rounded-full px-6 py-3 border border-[var(--aqua)]/30 shadow-lg">
          <div className="flex items-center gap-2 text-[var(--parchment)]">
            <Droplets className="text-[var(--aqua)]" size={20} />
            <span className="font-heading text-lg text-[var(--gold)]">{allArtifacts.length}+</span>
            <span className="text-sm opacity-80">Inventions</span>
          </div>
          <div className="w-px bg-[var(--aqua)]/30" />
          <div className="flex items-center gap-2 text-[var(--parchment)]">
            <Building className="text-[var(--terracotta)]" size={20} />
            <span className="font-heading text-lg text-[var(--gold)]">{gameData.regions.length}</span>
            <span className="text-sm opacity-80">Civilizations</span>
          </div>
          <div className="w-px bg-[var(--aqua)]/30" />
          <div className="flex items-center gap-2 text-[var(--parchment)]">
            <Clock className="text-[var(--cerulean)]" size={20} />
            <span className="font-heading text-lg text-[var(--gold)]">8000+</span>
            <span className="text-sm opacity-80">Years</span>
          </div>
          <div className="w-px bg-[var(--aqua)]/30" />
          <div className="flex items-center gap-2 text-[var(--parchment)]">
            <Globe className="text-[var(--aqua)]" size={20} />
            <span className="text-sm opacity-80">Global</span>
          </div>
        </div>
      </div>

      {showIntroCard && (
        <div className="absolute bottom-4 left-4 pointer-events-auto max-w-md">
          <Card className="water-card relative">
            <Button
              onClick={() => setShowIntroCard(false)}
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-6 w-6 text-[var(--parchment)]/60 hover:text-[var(--parchment)] hover:bg-[var(--river-blue)]/30"
            >
              <X size={14} />
            </Button>
            <CardContent className="p-4">
              <h3 className="font-heading text-lg text-[var(--gold)] mb-2">
                Discover How Water Shaped History
              </h3>
              <p className="text-[var(--parchment)]/90 text-sm mb-3">
                Explore 18 civilizations and discover 55+ water inventions in the 3D world, plus 80+ in our encyclopedia. From ancient shaduf to Roman aqueducts to modern mega-dams.
              </p>
              <div className="flex gap-2">
                <Button
                  onClick={() => setShowFeatured(true)}
                  className="flex-1 bg-gradient-to-r from-[var(--cerulean)] to-[var(--river-blue)] hover:from-[var(--aqua)] hover:to-[var(--cerulean)] text-white font-heading"
                >
                  <Compass size={18} className="mr-2" />
                  Explore the Map
                </Button>
                <Button
                  onClick={() => setShowTimeline(true)}
                  variant="outline"
                  className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                >
                  <Clock size={18} className="mr-2" />
                  Start Journey
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {showInfo && (
        <div className="absolute bottom-4 right-20 pointer-events-auto">
          <Card className="water-card max-w-md">
            <CardContent className="p-4">
              <h3 className="font-heading text-lg text-[var(--gold)] mb-2">Explorer's Guide</h3>
              <ul className="text-[var(--parchment)]/90 text-sm space-y-1">
                <li>Click on glowing regions to explore civilizations</li>
                <li>Discover water inventions at historical sites</li>
                <li>Use the timeline to filter by era</li>
                <li>Collect achievements as you explore</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )}

      {showInventory && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto">
          <Inventory 
            onClose={() => setShowInventory(false)} 
            onViewInvention={(id) => {
              setShowInventory(false);
              setSelectedInvention(id);
            }}
          />
        </div>
      )}

      {showProgress && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto">
          <ProgressTracker onClose={() => setShowProgress(false)} />
        </div>
      )}

      {showAchievements && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto">
          <Achievements onClose={() => setShowAchievements(false)} />
        </div>
      )}

      {showTimeline && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto">
          <TimelineFilter onClose={() => setShowTimeline(false)} />
        </div>
      )}

      {showComparison && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto">
          <ComparisonTool onClose={() => setShowComparison(false)} />
        </div>
      )}

      {showFeatured && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto">
          <FeaturedDiscoveries 
            onClose={() => setShowFeatured(false)} 
            onViewInvention={(id) => {
              setShowFeatured(false);
              setSelectedInvention(id);
            }}
          />
        </div>
      )}

      {showAbout && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto">
          <AboutSection onClose={() => setShowAbout(false)} />
        </div>
      )}

      {showFacts && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto">
          <DidYouKnow onClose={() => setShowFacts(false)} />
        </div>
      )}

      {selectedInvention && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto">
          <InventionDetail 
            artifactId={selectedInvention} 
            onClose={() => setSelectedInvention(null)}
            onNavigate={(id) => setSelectedInvention(id)}
          />
        </div>
      )}

      {showWhyMatters && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto">
          <WhyThisMatters onClose={() => setShowWhyMatters(false)} />
        </div>
      )}

      {selectedCivilization && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto p-4">
          <CivilizationDetail 
            regionId={selectedCivilization}
            onClose={() => setSelectedCivilization(null)}
            onNavigate={(id) => setSelectedCivilization(id)}
            onViewInvention={(id) => {
              setSelectedCivilization(null);
              setSelectedInvention(id);
            }}
          />
        </div>
      )}

      {showSearch && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto p-4">
          <SmartSearch
            onClose={() => setShowSearch(false)}
            onSelectInvention={(id) => {
              setShowSearch(false);
              setSelectedInvention(id);
            }}
            onSelectCivilization={(id) => {
              setShowSearch(false);
              setSelectedCivilization(id);
            }}
          />
        </div>
      )}

      {showTimeTravel && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto p-4">
          <TimeTravel
            onClose={() => setShowTimeTravel(false)}
            onSelectInvention={(id) => {
              setShowTimeTravel(false);
              setSelectedInvention(id);
            }}
          />
        </div>
      )}

      {showChallenges && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto p-4">
          <ChallengeModes onClose={() => setShowChallenges(false)} />
        </div>
      )}

      <TechnologyLibrary
        isOpen={showLibrary}
        onClose={() => setShowLibrary(false)}
      />

      {showMuseum && (
        <div className="absolute inset-0 bg-[var(--deep-ocean)]/80 flex items-center justify-center pointer-events-auto p-4">
          <MuseumMode 
            onClose={() => setShowMuseum(false)} 
            onSelectInvention={(id) => {
              setSelectedInvention(id);
              setShowMuseum(false);
            }}
          />
        </div>
      )}

      <div className="absolute bottom-4 right-4 pointer-events-auto">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowInfo(!showInfo)}
                className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
              >
                <BookOpen size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">
              Game Information
            </TooltipContent>
          </Tooltip>
      </div>
    </div>
    </TooltipProvider>
  );
}