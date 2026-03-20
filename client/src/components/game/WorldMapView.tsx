import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { 
  MapPin, ChevronRight, ChevronDown, X, Home, Droplets, VolumeX, Volume2, Search, 
  Backpack, Trophy, Clock, BookOpen, BarChart3, Play, Star, Image, 
  Lightbulb, Info, Globe, Grid3X3, Download, Route, Scroll, Filter, HelpCircle,
  ArrowUpDown, SortAsc, Calendar, Beaker, Glasses, Tag, GitBranch, Brain, Share2, Layers, Monitor,
  Languages, Waves
} from "lucide-react";
import { gameData } from "../../data/gameData";
import { nativeNames } from "../../data/nativeNames";
import { SWMM5_MODELS } from "../../lib/swmm5Export";
import { waterSimModels } from "../../data/waterSimModels";
import CivilizationDetail from "./CivilizationDetail";
import InventionDetail from "./InventionDetail";
import Inventory from "./Inventory";
import ProgressTracker from "./ProgressTracker";
import Achievements from "./Achievements";
import TimelineFilter from "./TimelineFilter";
import ComparisonTool from "./ComparisonTool";
import FeaturedDiscoveries from "./FeaturedDiscoveries";
import DidYouKnow from "./DidYouKnow";
import AboutSection from "./AboutSection";
import GuidedTour from "./GuidedTour";
import SmartSearch from "./SmartSearch";
import TimeTravel from "./TimeTravel";
import ChallengeModes from "./ChallengeModes";
import TechnologyLibrary from "./TechnologyLibrary";
import SWMM5Models from "./SWMM5Models";
import ThematicPathways from "./ThematicPathways";
import QuestSystem from "./QuestSystem";
import Onboarding from "./Onboarding";
import QuickSearchBar from "./QuickSearchBar";
import SWMM5Showcase from "./SWMM5Showcase";
import WaterFlowSimulation from "./WaterFlowSimulation";
import TimelineSlider from "./TimelineSlider";
import InventionTags from "./InventionTags";
import TechnologyTrees from "./TechnologyTrees";
import QuizSystem from "./QuizSystem";
import DiffusionMap from "./DiffusionMap";
import FunFactsStrip from "./FunFactsStrip";
import StatisticsDashboard from "./StatisticsDashboard";
import WaterSimModels from "./WaterSimModels";
import LanguageSelector from "./LanguageSelector";
import Sidebar from "./Sidebar";
import { useAudio } from "../../lib/stores/useAudio";
import { useProgress } from "../../lib/stores/useProgress";
import { useTranslation } from "../../hooks/useTranslation";

interface WorldMapViewProps {
  onBack: () => void;
}

// Convert lat/lng to x/y percentage (equirectangular projection)
function latLngToXY(lat: number, lng: number): { x: number; y: number } {
  const x = ((lng + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;
  return { x, y };
}

// Civilization coordinates using real lat/lng
const civilizationCoords: Record<string, { lat: number; lng: number; region: string }> = {
  "ancient-egypt": { lat: 26.8, lng: 30.8, region: "Nile Valley" },
  "mesopotamia": { lat: 33.3, lng: 44.4, region: "Iraq/Syria" },
  "ancient-persia": { lat: 32.4, lng: 53.7, region: "Iran" },
  "indus-valley": { lat: 27.3, lng: 68.0, region: "Pakistan/India" },
  "ancient-greece": { lat: 37.98, lng: 23.73, region: "Greece" },
  "ancient-rome": { lat: 41.9, lng: 12.5, region: "Italy" },
  "minoan-crete": { lat: 35.24, lng: 24.90, region: "Crete" },
  "byzantine": { lat: 41.0, lng: 29.0, region: "Turkey" },
  "ancient-china": { lat: 34.0, lng: 108.9, region: "China" },
  "khmer-empire": { lat: 13.4, lng: 103.9, region: "Cambodia" },
  "sri-lanka": { lat: 7.9, lng: 80.6, region: "Sri Lanka" },
  "islamic-golden-age": { lat: 33.3, lng: 44.4, region: "Middle East" },
  "mesoamerica": { lat: 19.4, lng: -99.1, region: "Mexico" },
  "ancestral-puebloans": { lat: 36.0, lng: -108.0, region: "US Southwest" },
  "nubia": { lat: 19.0, lng: 33.0, region: "Sudan" },
  "nabataean": { lat: 30.3, lng: 35.4, region: "Jordan" },
  "phoenicia": { lat: 33.9, lng: 35.5, region: "Lebanon" },
  "carthage": { lat: 36.8, lng: 10.2, region: "Tunisia" },
  "medieval-europe": { lat: 48.8, lng: 2.3, region: "Western Europe" },
  "modern-era": { lat: 51.5, lng: -0.1, region: "Global" },
  "inca-empire": { lat: -13.5, lng: -72.0, region: "Peru" },
  "balinese": { lat: -8.4, lng: 115.2, region: "Indonesia" },
  "aboriginal-australia": { lat: -25.0, lng: 134.0, region: "Australia" },
  "austronesian": { lat: -5.0, lng: 145.0, region: "Pacific" },
  "ancient-japan": { lat: 35.0, lng: 135.8, region: "Japan" },
  "dutch-netherlands": { lat: 52.4, lng: 4.9, region: "Netherlands" },
  "ancient-india": { lat: 20.6, lng: 78.9, region: "India" },
  "hawaiian": { lat: 20.8, lng: -156.3, region: "Hawaii" },
  "ethiopian": { lat: 9.0, lng: 38.7, region: "Ethiopia" },
  "korean": { lat: 37.5, lng: 127.0, region: "Korea" },
  "great-zimbabwe": { lat: -20.3, lng: 30.9, region: "Zimbabwe" },
  "engaruka": { lat: -3.0, lng: 35.9, region: "Tanzania" },
  "sahel": { lat: 14.0, lng: -1.5, region: "Sahel Africa" },
  "nan-madol": { lat: 6.8, lng: 158.3, region: "Micronesia" },
  "chamorro": { lat: 13.4, lng: 144.8, region: "Guam" },
  "tokyo-underground": { lat: 35.9, lng: 139.8, region: "Japan" },
  "siam-thailand": { lat: 13.75, lng: 100.5, region: "Thailand" },
  "medieval-india": { lat: 23.0, lng: 72.6, region: "India" },
  "cambodia-khmer": { lat: 13.4, lng: 103.9, region: "Cambodia" },
  "burma-myanmar": { lat: 21.6, lng: 96.1, region: "Myanmar" },
  "vietnam": { lat: 21.0, lng: 105.9, region: "Vietnam" },
  "pre-roman-europe": { lat: 53.3, lng: -6.3, region: "Ireland" },
  "philippines": { lat: 16.9, lng: 121.1, region: "Philippines" },
  "pre-roman-iberia": { lat: 40.0, lng: -3.5, region: "Spain/Portugal" },
  "basque-country": { lat: 43.0, lng: -2.0, region: "Spain/France" },
  "celtic-europe": { lat: 48.0, lng: 7.0, region: "Central/Western Europe" },
  "gaul": { lat: 46.5, lng: 2.5, region: "France/Belgium" },
  "germanic-europe": { lat: 52.0, lng: 10.0, region: "Germany/Scandinavia" },
  "etruscan": { lat: 42.5, lng: 11.8, region: "Central Italy" },
  "viking": { lat: 59.0, lng: 10.0, region: "Scandinavia" },
  "sumer": { lat: 31.3, lng: 45.6, region: "Southern Mesopotamia" },
  "hittites": { lat: 40.0, lng: 34.6, region: "Anatolia" },
  "canaan": { lat: 31.8, lng: 35.2, region: "Levant" },
  "syria-orontes": { lat: 35.1, lng: 36.8, region: "Orontes Valley" },
  "mongol-steppe": { lat: 47.2, lng: 102.8, region: "Central Asian Steppe" },
  "assyria": { lat: 36.4, lng: 43.2, region: "Northern Mesopotamia" },
  "babylonia": { lat: 32.5, lng: 44.4, region: "Southern Mesopotamia" },
  "ancient-indonesia": { lat: -7.5, lng: 112.0, region: "Indonesian Archipelago" },
  "borneo": { lat: 0.96, lng: 114.55, region: "Malaysia/Indonesia/Brunei" },
  "papua-new-guinea": { lat: -5.5, lng: 145.8, region: "Papua New Guinea" },
  "amazon-basin": { lat: -3.5, lng: -62.0, region: "Brazil/Peru/Colombia" },
  "mississippian-cahokia": { lat: 38.7, lng: -90.1, region: "Mississippi Valley" },
  "hohokam": { lat: 33.4, lng: -111.9, region: "Arizona Desert" },
  "pacific-northwest": { lat: 47.6, lng: -122.3, region: "US/Canada Pacific Coast" },
  "ancient-siberia": { lat: 51.4, lng: 84.7, region: "Altai Mountains" },
  "lake-baikal": { lat: 53.5, lng: 108.0, region: "Lake Baikal" },
  "siberian-river-peoples": { lat: 61.0, lng: 69.0, region: "Western Siberia" },
  "amur-river-peoples": { lat: 52.0, lng: 135.0, region: "Russian Far East" },
  "kamchatka-peninsula": { lat: 56.0, lng: 160.0, region: "Kamchatka" },
  "siberian-tundra-peoples": { lat: 74.0, lng: 100.0, region: "Taimyr Peninsula" },
  "modern-siberia": { lat: 60.0, lng: 105.0, region: "Siberia" },
  "inuit-arctic": { lat: 71.3, lng: -156.8, region: "Arctic Circle" },
  "swahili-coast": { lat: -6.2, lng: 39.2, region: "East Africa Coast" },
  "kongo-kingdom": { lat: -4.3, lng: 15.3, region: "Congo Basin" },
  "mali-timbuktu": { lat: 16.8, lng: -3.0, region: "West Africa" },
  "morocco": { lat: 31.6, lng: -6.0, region: "North Africa" },
  "al-andalus": { lat: 37.4, lng: -6.0, region: "Islamic Spain" },
  "ancient-yemen": { lat: 15.4, lng: 44.2, region: "Yemen" },
  "bengal": { lat: 23.7, lng: 90.4, region: "Bangladesh" },
  "central-asia": { lat: 39.0, lng: 66.0, region: "Silk Road" },
  "chinook": { lat: 46.2, lng: -123.8, region: "Pacific Northwest" },
  "dubai-uae": { lat: 25.2, lng: 55.3, region: "UAE" },
  "inuit": { lat: 64.2, lng: -51.7, region: "Greenland" },
  "israel": { lat: 31.5, lng: 34.9, region: "Israel" },
  "malaysia": { lat: 4.2, lng: 103.4, region: "Malaysia" },
  "mississippian": { lat: 38.7, lng: -90.1, region: "Mississippi Valley" },
  "oman": { lat: 23.6, lng: 58.5, region: "Oman" },
  "singapore": { lat: 1.3, lng: 103.8, region: "Singapore" },
  "venice": { lat: 45.4, lng: 12.3, region: "Italy" },
  "imperial-soviet-russia": { lat: 55.75, lng: 37.6, region: "Russia" },
  "xia-shang-dynasty": { lat: 36.1, lng: 114.4, region: "Yellow River Basin" },
  "zhou-qin-dynasty": { lat: 31.0, lng: 103.6, region: "Sichuan" },
  "han-dynasty": { lat: 34.3, lng: 108.9, region: "Chang'an" },
  "sui-tang-dynasty": { lat: 32.0, lng: 118.8, region: "Grand Canal" },
  "song-dynasty": { lat: 34.8, lng: 114.3, region: "Kaifeng" },
  "ming-dynasty": { lat: 35.0, lng: 110.0, region: "Yellow River" },
  "vedic-mauryan-india": { lat: 25.6, lng: 85.1, region: "Pataliputra" },
  "chola-dynasty": { lat: 10.8, lng: 79.1, region: "Tamil Nadu" },
  "delhi-sultanate": { lat: 28.6, lng: 77.2, region: "Delhi" },
  "mughal-empire": { lat: 27.2, lng: 78.0, region: "Agra" },
  "rajasthan-desert": { lat: 26.9, lng: 70.9, region: "Thar Desert" },
  "ottoman-empire": { lat: 41.0, lng: 28.9, region: "Istanbul/Anatolia" },
  "safavid-persia": { lat: 32.65, lng: 51.68, region: "Isfahan, Iran" },
  "ptolemaic-egypt": { lat: 31.2, lng: 29.9, region: "Alexandria, Egypt" },
  "aksumite-empire": { lat: 14.1, lng: 38.7, region: "Aksum, Ethiopia/Eritrea" },
  "tiwanaku-empire": { lat: -16.55, lng: -68.68, region: "Lake Titicaca, Bolivia" },
  "chimu-empire": { lat: -8.1, lng: -79.07, region: "Chan Chan, Peru" },
  "wari-empire": { lat: -13.5, lng: -74.2, region: "Ayacucho, Peru" },
  "joseon-korea": { lat: 37.57, lng: 126.98, region: "Seoul, Korea" },
  "polynesian-voyaging": { lat: -17.5, lng: -149.5, region: "Central Polynesia" },
  "southern-african-kingdoms": { lat: -26.5, lng: 31.5, region: "Eswatini/KwaZulu-Natal" },
  "garamantes": { lat: 26.5, lng: 13.0, region: "Fezzan, Libya" },
  "mapuche": { lat: -38.7, lng: -72.6, region: "Araucanía, Chile" },
  "maori-new-zealand": { lat: -38.1, lng: 176.2, region: "New Zealand" },
  "tibetan-civilizations": { lat: 29.65, lng: 91.1, region: "Lhasa, Tibet" },
  "georgian-kingdom": { lat: 41.69, lng: 44.8, region: "Tbilisi, Georgia" },
  "nuragic-sardinia": { lat: 39.9, lng: 9.1, region: "Sardinia, Italy" },
  "lapita-culture": { lat: -17.8, lng: 177.9, region: "Fiji/Tonga/Samoa" },
  "toltec-empire": { lat: 20.06, lng: -99.34, region: "Tula, Mexico" },
  "khwarezmian-empire": { lat: 41.55, lng: 60.63, region: "Urgench, Uzbekistan" },
  "liao-jin-yuan": { lat: 39.9, lng: 116.4, region: "Beijing Region" },
  "urartu": { lat: 38.5, lng: 43.3, region: "Van, Turkey" },
  "dilmun": { lat: 26.2, lng: 50.5, region: "Bahrain" },
  "bactria": { lat: 36.7, lng: 66.9, region: "Afghanistan" },
  "majapahit": { lat: -7.55, lng: 112.4, region: "East Java, Indonesia" },
  "kanem-bornu": { lat: 12.0, lng: 14.0, region: "Chad/Nigeria" },
  "benin-kingdom": { lat: 6.3, lng: 5.6, region: "Benin City, Nigeria" },
  "moche-civilization": { lat: -8.1, lng: -79.0, region: "Trujillo, Peru" },
  "yoruba-civilization": { lat: 7.5, lng: 4.6, region: "Southwestern Nigeria" },
  "funan-kingdom": { lat: 10.25, lng: 105.15, region: "Mekong Delta, Vietnam" }
};

// Convert to x/y percentages
const civilizationLocations: Record<string, { x: number; y: number; region: string }> = 
  Object.fromEntries(
    Object.entries(civilizationCoords).map(([id, { lat, lng, region }]) => {
      const { x, y } = latLngToXY(lat, lng);
      return [id, { x, y, region }];
    })
  );

// Continent mapping for filtering
const civilizationContinents: Record<string, string> = {
  "ancient-egypt": "Africa", "nubia": "Africa", "carthage": "Africa", 
  "great-zimbabwe": "Africa", "engaruka": "Africa", "sahel": "Africa", "ethiopian": "Africa",
  "mesopotamia": "Asia", "ancient-persia": "Asia", "indus-valley": "Asia", 
  "ancient-china": "Asia", "khmer-empire": "Asia", "sri-lanka": "Asia",
  "islamic-golden-age": "Asia", "ancient-japan": "Asia", "korean": "Asia",
  "siam-thailand": "Asia", "medieval-india": "Asia", "cambodia-khmer": "Asia",
  "burma-myanmar": "Asia", "vietnam": "Asia", "ancient-india": "Asia",
  "balinese": "Asia", "nabataean": "Asia", "philippines": "Asia", "tokyo-underground": "Asia",
  "ancient-greece": "Europe", "ancient-rome": "Europe", "minoan-crete": "Europe",
  "byzantine": "Europe", "medieval-europe": "Europe", "dutch-netherlands": "Europe",
  "pre-roman-europe": "Europe", "phoenicia": "Europe", "modern-era": "Europe",
  "pre-roman-iberia": "Europe", "basque-country": "Europe", "celtic-europe": "Europe",
  "gaul": "Europe", "germanic-europe": "Europe", "etruscan": "Europe", "viking": "Europe",
  "sumer": "Asia", "hittites": "Asia", "canaan": "Asia", "syria-orontes": "Asia", "mongol-steppe": "Asia",
  "assyria": "Asia", "babylonia": "Asia", "ancient-indonesia": "Asia",
  "mesoamerica": "Americas", "ancestral-puebloans": "Americas", "inca-empire": "Americas",
  "hawaiian": "Pacific", "aboriginal-australia": "Pacific", "austronesian": "Pacific",
  "nan-madol": "Pacific", "chamorro": "Pacific",
  "borneo": "Asia", "papua-new-guinea": "Pacific",
  "amazon-basin": "Americas", "mississippian-cahokia": "Americas", "hohokam": "Americas",
  "pacific-northwest": "Americas", "ancient-siberia": "Asia", "lake-baikal": "Asia", "siberian-river-peoples": "Asia", "amur-river-peoples": "Asia", "kamchatka-peninsula": "Asia", "siberian-tundra-peoples": "Asia", "modern-siberia": "Asia", "inuit-arctic": "Americas",
  "swahili-coast": "Africa", "kongo-kingdom": "Africa", "mali-timbuktu": "Africa",
  "morocco": "Africa", "al-andalus": "Europe", "ancient-yemen": "Asia", "bengal": "Asia",
  "central-asia": "Asia", "chinook": "Americas", "dubai-uae": "Asia", "inuit": "Americas",
  "israel": "Asia", "malaysia": "Asia", "mississippian": "Americas", "oman": "Asia",
  "singapore": "Asia", "venice": "Europe", "imperial-soviet-russia": "Europe",
  "xia-shang-dynasty": "Asia", "zhou-qin-dynasty": "Asia", "han-dynasty": "Asia",
  "sui-tang-dynasty": "Asia", "song-dynasty": "Asia", "ming-dynasty": "Asia",
  "vedic-mauryan-india": "Asia", "chola-dynasty": "Asia", "delhi-sultanate": "Asia",
  "mughal-empire": "Asia", "rajasthan-desert": "Asia",
  "ottoman-empire": "Europe", "safavid-persia": "Asia", "ptolemaic-egypt": "Africa",
  "aksumite-empire": "Africa", "tiwanaku-empire": "Americas", "chimu-empire": "Americas",
  "wari-empire": "Americas", "joseon-korea": "Asia", "polynesian-voyaging": "Pacific",
  "southern-african-kingdoms": "Africa", "garamantes": "Africa", "mapuche": "Americas",
  "maori-new-zealand": "Pacific", "tibetan-civilizations": "Asia", "georgian-kingdom": "Asia",
  "nuragic-sardinia": "Europe", "lapita-culture": "Pacific", "toltec-empire": "Americas",
  "khwarezmian-empire": "Asia", "liao-jin-yuan": "Asia", "urartu": "Asia",
  "dilmun": "Asia", "bactria": "Asia", "majapahit": "Asia",
  "kanem-bornu": "Africa", "benin-kingdom": "Africa",
  "moche-civilization": "Americas", "yoruba-civilization": "Africa", "funan-kingdom": "Asia",
  "neolithic-anatolia": "Asia", "troy-lydia": "Asia", "phrygian-kingdom": "Asia",
  "classical-anatolia": "Asia", "seljuk-anatolia": "Asia", "modern-turkey": "Asia",
  "thracian-dacian": "Europe", "scythian-peoples": "Asia", "slavic-kievan-rus": "Europe",
  "medieval-eastern-europe": "Europe", "dong-son": "Asia", "champa-kingdom": "Asia",
  "pyu-city-states": "Asia", "dvaravati-kingdom": "Asia", "srivijaya-empire": "Asia",
  "sundaland": "Asia",
  "funan-oc-eo": "Asia",
  "colombian-civilizations": "Americas", "caribbean-indigenous": "Americas",
  "sudd-nilotic": "Africa", "horn-of-africa": "Africa", "san-bushmen": "Africa",
  "malta-water": "Europe", "himalayan-kingdoms": "Asia", "canary-islands": "Europe",
  "libya-gmmr": "Africa", "china-south-north-transfer": "Asia", "ethiopia-gerd": "Africa",
  "tierra-del-fuego": "Americas", "maldives-water": "Asia", "swiss-alps-water": "Europe",
  "kurdish-water": "Asia", "space-water": "Americas", "berber-amazigh-expanded": "Africa",
  "modern-mega-projects": "Americas", "ainu-water": "Asia", "sami-people": "Europe",
  "inupiat-north-alaska": "Americas", "yupik-western-alaska": "Americas",
  "aleut-unangan": "Americas", "athabascan-interior": "Americas",
  "tlingit-se-alaska": "Americas", "haida-gwaii": "Americas",
  "canadian-inuit-expanded": "Americas", "greenlandic-inuit": "Americas",
  "modern-arctic-engineering": "Americas",
  "paleo-indian-archaic": "Americas", "woodland-period": "Americas",
  "eastern-woodlands": "Americas", "great-plains-nations": "Americas",
  "great-basin-california": "Americas", "algonquin-canadian": "Americas",
  "pacific-northwest-expanded": "Americas", "modern-usa": "Americas",
  "modern-canada": "Americas",
  "fertile-crescent-agriculture": "Asia",
  "east-asia-rice-water": "Asia",
  "americas-corn-water": "Americas"
};

export default function WorldMapView({ onBack }: WorldMapViewProps) {
  const navigate = useNavigate();
  const [selectedCiv, setSelectedCiv] = useState<string | null>(null);
  const [hoveredCiv, setHoveredCiv] = useState<string | null>(null);
  
  const { isMuted, toggleMute } = useAudio();
  const { progress } = useProgress();
  const t = useTranslation();
  
  const [showInventory, setShowInventory] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [showFeatured, setShowFeatured] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showFacts, setShowFacts] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showTimeTravel, setShowTimeTravel] = useState(false);
  const [showChallenges, setShowChallenges] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showSWMM5, setShowSWMM5] = useState(false);
  const [showPathways, setShowPathways] = useState(false);
  const [showQuests, setShowQuests] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showTimelineSlider, setShowTimelineSlider] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [showTechTrees, setShowTechTrees] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showDiffusion, setShowDiffusion] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [showWaterModels, setShowWaterModels] = useState(false);
  const [eraFilter, setEraFilter] = useState<string | null>(null);
  const [continentFilter, setContinentFilter] = useState<string | null>(null);
  const [selectedInvention, setSelectedInvention] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'default' | 'alphabetical' | 'oldest' | 'newest'>('default');
  
  const civilizationsRef = useRef<HTMLDivElement>(null);
  
  const scrollToCivilizations = () => {
    civilizationsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSidebarAction = (action: string) => {
    const actionMap: Record<string, () => void> = {
      home: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      search: () => setShowSearch(true),
      civilizations: () => scrollToCivilizations(),
      inventory: () => setShowInventory(true),
      library: () => setShowLibrary(true),
      featured: () => setShowFeatured(true),
      tags: () => setShowTags(true),
      timeline: () => setShowTimeline(true),
      timelineSlider: () => setShowTimelineSlider(true),
      timeTravel: () => setShowTimeTravel(true),
      diffusion: () => setShowDiffusion(true),
      comparison: () => setShowComparison(true),
      techTrees: () => setShowTechTrees(true),
      pathways: () => setShowPathways(true),
      quests: () => setShowQuests(true),
      facts: () => setShowFacts(true),
      statistics: () => setShowStatistics(true),
      waterModels: () => setShowWaterModels(true),
      swmm5: () => setShowSWMM5(true),
      quiz: () => setShowQuiz(true),
      progress: () => setShowProgress(true),
      achievements: () => setShowAchievements(true),
      tutorial: () => setShowTutorial(true),
      about: () => setShowAbout(true),
    };
    actionMap[action]?.();
  };

  const allArtifacts = gameData.regions.flatMap(r => (r.locations || []).flatMap(l => l.artifacts));
  const totalLocations = gameData.regions.reduce((acc, r) => acc + (r.locations || []).length, 0);

  // Helper function to parse start year from dateRange (e.g., "3000 BCE - 30 BCE" -> -3000)
  const parseStartYear = (dateRange: string): number => {
    const match = dateRange.match(/^(\d+)\s*(BCE|CE|years ago)?/i);
    if (!match) return 0;
    const year = parseInt(match[1]);
    const era = match[2]?.toUpperCase() || 'CE';
    if (era === 'BCE' || dateRange.toLowerCase().includes('years ago')) {
      return -year;
    }
    return year;
  };

  // Sort civilizations based on selected order
  const sortedRegions = [...gameData.regions]
    .filter(region => {
      if (eraFilter) {
        const regionEra = region.era.toLowerCase();
        if (!regionEra.includes(eraFilter.toLowerCase())) return false;
      }
      if (continentFilter) {
        const civContinent = civilizationContinents[region.id];
        if (civContinent !== continentFilter) return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortOrder) {
        case 'alphabetical':
          return a.name.localeCompare(b.name);
        case 'oldest':
          return parseStartYear(a.dateRange) - parseStartYear(b.dateRange);
        case 'newest':
          return parseStartYear(b.dateRange) - parseStartYear(a.dateRange);
        default:
          return 0;
      }
    });

  const selectedRegion = selectedCiv ? gameData.regions.find(r => r.id === selectedCiv) : null;

  if (selectedCiv) {
    return (
      <div className="min-h-screen bg-[var(--deep-ocean)] flex items-center justify-center p-4">
        <CivilizationDetail 
          regionId={selectedCiv}
          onClose={() => setSelectedCiv(null)}
          onNavigate={(id) => setSelectedCiv(id)}
          onViewInvention={(id) => {
            setSelectedCiv(null);
            setSelectedInvention(id);
          }}
        />
      </div>
    );
  }

  return (
    <TooltipProvider>
    <div className="h-screen bg-[var(--deep-ocean)] overflow-y-auto">
      <Sidebar
        onAction={handleSidebarAction}
        badges={{
          civilizations: String(gameData.regions.length),
          inventions: String(allArtifacts.length),
          waterModels: String(waterSimModels.length),
          swmm5: String(Object.keys(SWMM5_MODELS).length),
        }}
      />
      <div className="max-w-6xl mx-auto p-4">
        {/* Toolbar */}
        <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={onBack} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Home size={16} className="text-[var(--gold)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.backToHome}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowTutorial(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <HelpCircle size={16} className="text-[var(--aqua)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.tutorial}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={toggleMute} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                {isMuted ? <VolumeX size={16} className="text-[var(--terracotta)]" /> : <Volume2 size={16} className="text-[var(--cerulean)]" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{isMuted ? t.gameui.unmute : t.gameui.mute}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowSearch(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Search size={16} className="text-[var(--cerulean)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.smartSearch}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowInventory(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Backpack size={16} className="text-[var(--aqua)]" />
                <span className="ml-1 text-[var(--gold)]">{allArtifacts.length}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.inventions} ({allArtifacts.length})</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={scrollToCivilizations} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Globe size={16} className="text-[var(--terracotta)]" />
                <span className="ml-1 text-[var(--gold)]">{gameData.regions.length}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.civilizations} ({gameData.regions.length})</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowProgress(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Trophy size={16} className="text-[var(--gold)]" />
                <span className="ml-1">{totalLocations}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.progress}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowAchievements(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Star size={16} className="text-[var(--gold)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.achievements}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowTimeline(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Clock size={16} className="text-[var(--cerulean)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.timeline}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowTimelineSlider(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--gold)]/30">
                <Calendar size={16} className="text-[var(--gold)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.timelineSlider}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowLibrary(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <BookOpen size={16} className="text-[var(--aqua)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.encyclopedia}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowComparison(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <BarChart3 size={16} className="text-[var(--cerulean)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.compare}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowTimeTravel(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Play size={16} className="text-[var(--gold)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.timeTravel}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowFeatured(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Image size={16} className="text-[var(--terracotta)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.featured}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowFacts(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Lightbulb size={16} className="text-[var(--gold)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.didYouKnow}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowStatistics(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Layers size={16} className="text-[var(--aqua)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.statistics}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowWaterModels(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30 relative">
                <Monitor size={16} className="text-[var(--aqua)]" />
                <span className="absolute -top-2 -right-2 bg-[var(--cerulean)] text-white text-[9px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">{waterSimModels.length}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.waterModels} ({waterSimModels.length})</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowSWMM5(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30 relative">
                <Download size={16} className="text-[var(--aqua)]" />
                <span className="absolute -top-2 -right-2 bg-[var(--terracotta)] text-white text-[9px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">{Object.keys(SWMM5_MODELS).length}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.swmm5Models} ({Object.keys(SWMM5_MODELS).length})</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowPathways(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Route size={16} className="text-[var(--cerulean)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.thematicPathways}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowQuests(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Scroll size={16} className="text-[var(--gold)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.storyQuests}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => navigate('/minigames')} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Grid3X3 size={16} className="text-[var(--terracotta)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.miniGames}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => navigate('/simulators')} className="water-card text-[var(--parchment)] hover:bg-[var(--gold)]/30 border-[var(--gold)]/30">
                <Beaker size={16} className="text-[var(--gold)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.simulators}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => navigate('/mannings-n')} className="water-card text-[var(--parchment)] hover:bg-[var(--aqua)]/30 border-[var(--aqua)]/30">
                <Waves size={16} className="text-[var(--aqua)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">Manning's n Coefficient</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => navigate('/vr')} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--cerulean)]/30">
                <Glasses size={16} className="text-[var(--cerulean)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.vrExperience}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowTags(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--aqua)]/30 border-[var(--aqua)]/30">
                <Tag size={16} className="text-[var(--aqua)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.inventionTags}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowTechTrees(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--cerulean)]/30">
                <GitBranch size={16} className="text-[var(--cerulean)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.techTrees}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowQuiz(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--gold)]/30 border-[var(--gold)]/30">
                <Brain size={16} className="text-[var(--gold)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.quiz}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowDiffusion(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--terracotta)]/30 border-[var(--terracotta)]/30">
                <Share2 size={16} className="text-[var(--terracotta)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.diffusion}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={() => setShowAbout(true)} className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
                <Info size={16} className="text-[var(--cerulean)]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="water-card text-[var(--parchment)]">{t.toolbar.about}</TooltipContent>
          </Tooltip>

          <LanguageSelector />
        </div>

        {/* Quick Filters */}
        <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
          <span className="text-[var(--parchment)]/60 text-xs mr-2">{t.toolbar.filterByEra}:</span>
          {["Ancient", "Classical", "Medieval", "Modern"].map(era => (
            <Button 
              key={era}
              variant="outline" 
              size="sm" 
              onClick={() => setEraFilter(eraFilter === era ? null : era)}
              className={`text-xs px-2 py-1 h-7 ${eraFilter === era ? 'bg-[var(--cerulean)] text-white' : 'water-card text-[var(--parchment)]/70'}`}
            >
              {era}
            </Button>
          ))}
          <span className="text-[var(--parchment)]/40 mx-2">|</span>
          <span className="text-[var(--parchment)]/60 text-xs mr-2">{t.toolbar.region}:</span>
          {["Africa", "Asia", "Europe", "Americas", "Pacific"].map(continent => (
            <Button 
              key={continent}
              variant="outline" 
              size="sm" 
              onClick={() => setContinentFilter(continentFilter === continent ? null : continent)}
              className={`text-xs px-2 py-1 h-7 ${continentFilter === continent ? 'bg-[var(--terracotta)] text-white' : 'water-card text-[var(--parchment)]/70'}`}
            >
              {continent}
            </Button>
          ))}
          {(eraFilter || continentFilter) && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => { setEraFilter(null); setContinentFilter(null); }}
              className="text-xs text-[var(--aqua)] hover:text-[var(--gold)]"
            >
              {t.toolbar.clear}
            </Button>
          )}
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="font-heading text-2xl text-[var(--gold)]">{t.toolbar.worldMapTitle}</h1>
              <p className="text-[var(--parchment)]/70 text-sm">
                {t.toolbar.exploreDesc} <span onClick={scrollToCivilizations} className="text-[var(--aqua)] font-semibold cursor-pointer hover:underline">{gameData.regions.length} {t.toolbar.civilizations}</span> • <span className="text-[var(--cerulean)] font-semibold">{allArtifacts.length}+ {t.toolbar.waterInventionsPlus}</span> • <span className="text-[var(--gold)] font-semibold">{Object.keys(SWMM5_MODELS).length} {t.toolbar.swmm5Networks}</span> • 2,800,000 {t.toolbar.yearsOfEngineering}
              </p>
            </div>
          </div>
          <QuickSearchBar 
            onSelectCivilization={(id) => setSelectedCiv(id)} 
            onSelectInvention={(civId, invId) => navigate(`/${civId}/${invId}/details`)}
          />
        </div>

        <div className="mb-4">
          <FunFactsStrip onSelectCivilization={(id) => setSelectedCiv(id)} />
        </div>

        <Card className="water-card overflow-hidden">
          <CardContent className="p-0">
            <div 
              className="relative w-full aspect-[2/1] bg-[#1a4a6e]"
              style={{
                backgroundImage: `url('/images/world-map.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, rgba(26, 58, 82, 0.3) 0%, rgba(13, 37, 56, 0.4) 100%)'
                }}
              />

              {gameData.regions.map(region => {
                const loc = civilizationLocations[region.id];
                if (!loc) return null;

                // Apply era filter
                if (eraFilter) {
                  const regionEra = region.era.toLowerCase();
                  if (!regionEra.includes(eraFilter.toLowerCase())) return null;
                }

                // Apply continent filter
                if (continentFilter) {
                  const civContinent = civilizationContinents[region.id];
                  if (civContinent !== continentFilter) return null;
                }

                const isHovered = hoveredCiv === region.id;
                const inventionCount = (region.locations || []).reduce((acc: number, l: any) => acc + l.artifacts.length, 0);

                return (
                  <div
                    key={region.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    onMouseEnter={() => setHoveredCiv(region.id)}
                    onMouseLeave={() => setHoveredCiv(null)}
                    onClick={() => setSelectedCiv(region.id)}
                  >
                    <div 
                      className={`
                        w-5 h-5 rounded-full border-2 transition-all duration-300
                        ${isHovered ? 'scale-150' : 'scale-100'}
                      `}
                      style={{ 
                        backgroundColor: region.color,
                        borderColor: isHovered ? '#c9a227' : '#ffffff',
                        boxShadow: isHovered 
                          ? `0 0 20px ${region.color}, 0 0 40px ${region.color}50`
                          : `0 0 12px ${region.color}, 0 0 4px rgba(255,255,255,0.5)`
                      }}
                    />

                    <div 
                      className={`
                        absolute top-1/2 transform -translate-y-1/2
                        transition-all duration-200 pointer-events-none z-50
                        ${loc.x < 20 ? 'left-full ml-2' : 'right-full mr-2'}
                        ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}
                      `}
                    >
                      <div className="bg-[var(--deep-ocean)] border border-[var(--aqua)]/30 rounded-lg p-3 min-w-[220px] shadow-xl">
                        <h3 className="font-heading text-[var(--gold)] text-sm mb-0.5">{region.name}</h3>
                        {nativeNames[region.name] && (
                          <p className="text-[var(--aqua)]/70 text-xs mb-1 font-medium">{nativeNames[region.name]}</p>
                        )}
                        <p className="text-[var(--parchment)]/60 text-xs mb-2">{region.dateRange}</p>
                        <div className="flex items-center gap-2 text-xs text-[var(--aqua)] mb-2">
                          <Droplets size={12} />
                          <span>{inventionCount} inventions</span>
                        </div>
                        {/* Show first 3 invention names as preview */}
                        <div className="text-xs text-[var(--parchment)]/70 mb-2 space-y-1">
                          {(region.locations || []).flatMap((l: any) => l.artifacts).slice(0, 3).map((art: any, i: number) => (
                            <div key={i} className="flex items-center gap-1">
                              <span className="text-[var(--terracotta)]">•</span> {art.name}
                            </div>
                          ))}
                          {inventionCount > 3 && <div className="text-[var(--aqua)]">+ {inventionCount - 3} more...</div>}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-[var(--gold)] font-medium">
                          <span>Click to explore all</span>
                          <ChevronRight size={12} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-20">
                {["ancient", "classical", "medieval", "modern"].map(era => (
                  <span 
                    key={era}
                    className="px-2 py-1 bg-[var(--deep-ocean)]/80 rounded text-xs text-[var(--parchment)]/70 border border-[var(--aqua)]/20"
                  >
                    {era.charAt(0).toUpperCase() + era.slice(1)}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-4 right-4 text-xs text-[var(--parchment)]/50 z-20">
                {gameData.regions.length} civilizations
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary Stats */}
        <div className="mt-6 mb-4 p-4 water-card rounded-lg">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div 
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={scrollToCivilizations}
              title="Click to view all civilizations"
            >
              <div className="text-3xl font-heading text-[var(--gold)]">{gameData.regions.length}</div>
              <div className="text-[var(--parchment)]/70 text-sm flex items-center gap-1">
                Civilizations
                <ChevronDown size={14} className="text-[var(--aqua)]" />
              </div>
            </div>
            <div>
              <div className="text-3xl font-heading text-[var(--aqua)]">{allArtifacts.length}</div>
              <div className="text-[var(--parchment)]/70 text-sm">Water Inventions</div>
            </div>
            <div>
              <div className="text-3xl font-heading text-[var(--terracotta)]">6</div>
              <div className="text-[var(--parchment)]/70 text-sm">Continents</div>
            </div>
            <div>
              <div className="text-3xl font-heading text-[var(--cerulean)]">2.8M+</div>
              <div className="text-[var(--parchment)]/70 text-sm">Years of History</div>
            </div>
          </div>
        </div>

        <div ref={civilizationsRef} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h2 className="font-heading text-xl text-[var(--gold)]">
            {(eraFilter || continentFilter) ? `${sortedRegions.length} of ${gameData.regions.length}` : `All ${gameData.regions.length}`} Civilizations & Their Inventions
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[var(--parchment)]/60">Sort by:</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSortOrder('default')}
              className={`text-xs px-2 py-1 h-7 ${sortOrder === 'default' ? 'bg-[var(--cerulean)]/30 border-[var(--gold)]' : 'water-card border-[var(--aqua)]/30'} text-[var(--parchment)] hover:bg-[var(--cerulean)]/30`}
            >
              <Grid3X3 size={12} className="mr-1" />
              Default
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSortOrder('alphabetical')}
              className={`text-xs px-2 py-1 h-7 ${sortOrder === 'alphabetical' ? 'bg-[var(--cerulean)]/30 border-[var(--gold)]' : 'water-card border-[var(--aqua)]/30'} text-[var(--parchment)] hover:bg-[var(--cerulean)]/30`}
            >
              <SortAsc size={12} className="mr-1" />
              A-Z
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSortOrder('oldest')}
              className={`text-xs px-2 py-1 h-7 ${sortOrder === 'oldest' ? 'bg-[var(--cerulean)]/30 border-[var(--gold)]' : 'water-card border-[var(--aqua)]/30'} text-[var(--parchment)] hover:bg-[var(--cerulean)]/30`}
            >
              <Calendar size={12} className="mr-1" />
              Oldest
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSortOrder('newest')}
              className={`text-xs px-2 py-1 h-7 ${sortOrder === 'newest' ? 'bg-[var(--cerulean)]/30 border-[var(--gold)]' : 'water-card border-[var(--aqua)]/30'} text-[var(--parchment)] hover:bg-[var(--cerulean)]/30`}
            >
              <Calendar size={12} className="mr-1" />
              Newest
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedRegions.map(region => {
            const inventions = (region.locations || []).flatMap((l: any) => l.artifacts);
            const inventionCount = inventions.length;

            return (
              <Card 
                key={region.id}
                className="water-card cursor-pointer hover:border-[var(--gold)] transition-all"
                onClick={() => setSelectedCiv(region.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: region.color }}
                    />
                    <h3 className="font-heading text-base text-[var(--gold)]">{region.name}</h3>
                  </div>
                  {nativeNames[region.name] && (
                    <p className="text-[var(--aqua)]/60 text-xs mb-1 ml-6 font-medium">{nativeNames[region.name]}</p>
                  )}
                  <p className="text-[var(--parchment)]/60 text-xs mb-2">{region.era} • {region.dateRange}</p>
                  <div className="text-xs text-[var(--aqua)] mb-2">{inventionCount} water inventions:</div>
                  <div className="space-y-1 mb-3">
                    {inventions.slice(0, 4).map((art, i) => (
                      <div key={i} className="text-xs text-[var(--parchment)]/80 flex items-center gap-1">
                        <Droplets size={10} className="text-[var(--cerulean)]" />
                        <span>{art.name}</span>
                        <span className="text-[var(--parchment)]/40">({art.historicalPeriod})</span>
                      </div>
                    ))}
                    {inventionCount > 4 && (
                      <div className="text-xs text-[var(--terracotta)]">+ {inventionCount - 4} more inventions</div>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[var(--gold)] font-medium">
                    <span>Click to explore details</span>
                    <ChevronRight size={14} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Interactive Water Flow Simulation */}
        <WaterFlowSimulation />

        {/* Guided Educational Tour */}
        <div className="px-4 sm:px-6 lg:px-8">
          <GuidedTour />
        </div>

        {/* SWMM5 Hydraulic Models Showcase - at end of page */}
        <SWMM5Showcase onViewAll={() => setShowSWMM5(true)} />
      </div>


      {/* Modal Components */}
      {showInventory && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowInventory(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <Inventory 
              onClose={() => setShowInventory(false)} 
              onViewInvention={(id) => {
                setShowInventory(false);
                setSelectedInvention(id);
              }}
            />
          </div>
        </div>
      )}
      {showProgress && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowProgress(false)}>
          <div onClick={(e) => e.stopPropagation()}><ProgressTracker onClose={() => setShowProgress(false)} /></div>
        </div>
      )}
      {showAchievements && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowAchievements(false)}>
          <div onClick={(e) => e.stopPropagation()}><Achievements onClose={() => setShowAchievements(false)} /></div>
        </div>
      )}
      {showTimeline && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowTimeline(false)}>
          <div onClick={(e) => e.stopPropagation()}><TimelineFilter onClose={() => setShowTimeline(false)} /></div>
        </div>
      )}
      {showComparison && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowComparison(false)}>
          <div onClick={(e) => e.stopPropagation()}><ComparisonTool onClose={() => setShowComparison(false)} onSelectArtifact={(id) => { setShowComparison(false); setSelectedInvention(id); }} /></div>
        </div>
      )}
      {showFeatured && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowFeatured(false)}>
          <div onClick={(e) => e.stopPropagation()}><FeaturedDiscoveries onClose={() => setShowFeatured(false)} onViewInvention={(id) => { setShowFeatured(false); setSelectedInvention(id); }} /></div>
        </div>
      )}
      {showFacts && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowFacts(false)}>
          <div onClick={(e) => e.stopPropagation()}><DidYouKnow onClose={() => setShowFacts(false)} onSelectCivilization={(id) => { setShowFacts(false); setSelectedCiv(id); }} /></div>
        </div>
      )}
      {showAbout && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowAbout(false)}>
          <div onClick={(e) => e.stopPropagation()}><AboutSection onClose={() => setShowAbout(false)} /></div>
        </div>
      )}
      {showSearch && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowSearch(false)}>
          <div onClick={(e) => e.stopPropagation()}><SmartSearch onClose={() => setShowSearch(false)} onSelectInvention={(id) => { setShowSearch(false); setSelectedInvention(id); }} onSelectCivilization={(id) => { setShowSearch(false); setSelectedCiv(id); }} /></div>
        </div>
      )}
      {showTimeTravel && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowTimeTravel(false)}>
          <div onClick={(e) => e.stopPropagation()}><TimeTravel onClose={() => setShowTimeTravel(false)} onSelectInvention={(id) => { setShowTimeTravel(false); setSelectedInvention(id); }} /></div>
        </div>
      )}
      {showChallenges && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowChallenges(false)}>
          <div onClick={(e) => e.stopPropagation()}><ChallengeModes onClose={() => setShowChallenges(false)} /></div>
        </div>
      )}
      {showLibrary && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowLibrary(false)}>
          <div onClick={(e) => e.stopPropagation()}><TechnologyLibrary isOpen={showLibrary} onClose={() => setShowLibrary(false)} /></div>
        </div>
      )}
      {showSWMM5 && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowSWMM5(false)}>
          <div onClick={(e) => e.stopPropagation()}><SWMM5Models onClose={() => setShowSWMM5(false)} /></div>
        </div>
      )}
      {showPathways && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowPathways(false)}>
          <div onClick={(e) => e.stopPropagation()}><ThematicPathways onClose={() => setShowPathways(false)} onSelectCivilization={(id) => { setShowPathways(false); setSelectedCiv(id); }} /></div>
        </div>
      )}
      {showQuests && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowQuests(false)}>
          <div onClick={(e) => e.stopPropagation()}><QuestSystem onClose={() => setShowQuests(false)} onNavigateToCivilization={(id) => { setShowQuests(false); setSelectedCiv(id); }} /></div>
        </div>
      )}
      {showTimelineSlider && (
        <div className="fixed inset-0 bg-black/70 flex items-start justify-center z-50 p-4 overflow-y-auto" onClick={() => setShowTimelineSlider(false)}>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-6xl">
            <TimelineSlider 
              onClose={() => setShowTimelineSlider(false)} 
              onSelectCivilization={(id) => { setShowTimelineSlider(false); setSelectedCiv(id); }}
              onSelectInvention={(id) => { setShowTimelineSlider(false); setSelectedInvention(id); }}
            />
          </div>
        </div>
      )}
      {showTags && (
        <div className="fixed inset-0 bg-black/70 flex items-start justify-center z-50 p-4 overflow-y-auto" onClick={() => setShowTags(false)}>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-5xl">
            <InventionTags 
              onClose={() => setShowTags(false)} 
              onSelectInvention={(id) => { setShowTags(false); setSelectedInvention(id); }}
              onSelectCivilization={(id) => { setShowTags(false); setSelectedCiv(id); }}
            />
          </div>
        </div>
      )}
      {showTechTrees && (
        <div className="fixed inset-0 bg-black/70 flex items-start justify-center z-50 p-4 overflow-y-auto" onClick={() => setShowTechTrees(false)}>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-6xl">
            <TechnologyTrees 
              onClose={() => setShowTechTrees(false)} 
              onSelectInvention={(id) => { setShowTechTrees(false); setSelectedInvention(id); }}
            />
          </div>
        </div>
      )}
      {showQuiz && (
        <div className="fixed inset-0 bg-black/70 flex items-start justify-center z-50 p-4 overflow-y-auto" onClick={() => setShowQuiz(false)}>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-2xl">
            <QuizSystem onClose={() => setShowQuiz(false)} />
          </div>
        </div>
      )}
      {showDiffusion && (
        <div className="fixed inset-0 bg-black/70 flex items-start justify-center z-50 p-4 overflow-y-auto" onClick={() => setShowDiffusion(false)}>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-5xl">
            <DiffusionMap 
              onClose={() => setShowDiffusion(false)} 
              onSelectCivilization={(id) => { setShowDiffusion(false); setSelectedCiv(id); }}
            />
          </div>
        </div>
      )}
      {showTutorial && (
        <div className="fixed inset-0 bg-black/90 z-50" onClick={() => setShowTutorial(false)}>
          <div onClick={(e) => e.stopPropagation()} className="h-full">
            <Onboarding onComplete={() => setShowTutorial(false)} />
          </div>
        </div>
      )}
      {selectedInvention && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedInvention(null)}>
          <div onClick={(e) => e.stopPropagation()}>
            <InventionDetail 
              artifactId={selectedInvention}
              onClose={() => setSelectedInvention(null)}
              onNavigate={(id) => setSelectedInvention(id)}
            />
          </div>
        </div>
      )}
      {showStatistics && (
        <div className="fixed inset-0 bg-black/70 flex items-start justify-center z-50 p-4 overflow-y-auto" onClick={() => setShowStatistics(false)}>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-5xl">
            <StatisticsDashboard onClose={() => setShowStatistics(false)} />
          </div>
        </div>
      )}
      {showWaterModels && (
        <WaterSimModels onClose={() => setShowWaterModels(false)} />
      )}
    </div>
    </TooltipProvider>
  );
}
