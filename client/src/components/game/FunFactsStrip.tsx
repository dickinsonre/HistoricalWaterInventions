import { useState, useEffect, useCallback } from "react";
import { Lightbulb, ChevronLeft, ChevronRight, Pause, Play, Share2, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const funFacts = [
  { fact: "The Roman aqueduct system delivered over 1 million cubic meters of water daily — equivalent to 400 Olympic swimming pools.", category: "Roman", emoji: "🏛️", civId: "ancient-rome" },
  { fact: "Ancient Persian qanats collectively stretched over 270,000 km — enough to circle the Earth nearly 7 times.", category: "Persian", emoji: "🕳️", civId: "ancient-persia" },
  { fact: "The Dujiangyan irrigation system in China has operated continuously for over 2,270 years without a single dam.", category: "Chinese", emoji: "🌊", civId: "ancient-china" },
  { fact: "Angkor Wat's West Baray reservoir held 40 million m³ of water — larger than any reservoir built in Europe before the 19th century.", category: "Khmer", emoji: "🏯", civId: "khmer-empire" },
  { fact: "The Pont du Gard aqueduct in France was built with such precision that it drops only 2.5 cm per kilometer over its 50 km length.", category: "Roman", emoji: "🌉", civId: "ancient-rome" },
  { fact: "Nazca puquios — underground aqueducts built 1,500+ years ago — still supply water to farmers in Peru today.", category: "Nazca", emoji: "🏜️", civId: "nazca" },
  { fact: "The Dutch have reclaimed 17% of their country from the sea — an area larger than the entire country of Lebanon.", category: "Dutch", emoji: "🇳🇱", civId: "dutch-netherlands" },
  { fact: "Ancient Mohenjo-daro (2500 BCE) had flush toilets and covered drains in nearly every house — 4,000 years before London.", category: "Indus Valley", emoji: "🚽", civId: "indus-valley" },
  { fact: "Hero of Alexandria invented the first vending machine in 1st century CE — it dispensed holy water when a coin was inserted.", category: "Greek", emoji: "🏺", civId: "ancient-greece" },
  { fact: "The Cloaca Maxima sewer in Rome (600 BCE) is still in use today — over 2,600 years of continuous operation.", category: "Roman", emoji: "🏗️", civId: "ancient-rome" },
  { fact: "Archimedes' screw, invented around 250 BCE, is still manufactured today for water pumping and wastewater treatment.", category: "Greek", emoji: "🔩", civId: "ancient-greece" },
  { fact: "The Bali Subak irrigation system coordinates water sharing among 20,000+ farmers without any central authority — using temple rituals.", category: "Balinese", emoji: "🌴", civId: "balinese" },
  { fact: "Ancient Sri Lanka built over 30,000 interconnected water tanks — more than any other ancient civilization.", category: "Sri Lankan", emoji: "💧", civId: "sri-lanka" },
  { fact: "The Garamantes built a Saharan civilization that lasted 1,200 years entirely dependent on underground foggara water tunnels.", category: "Garamantes", emoji: "🏝️", civId: "garamantes" },
  { fact: "Ottoman sebil fountains offered free drinking water to all passersby — funded as religious charity for centuries.", category: "Ottoman", emoji: "⛲", civId: "ottoman-empire" },
  { fact: "Machu Picchu's 16 fountains were so precisely engineered that the first (royal) fountain received 25 L/min and the last 10 L/min.", category: "Inca", emoji: "⛰️", civId: "inca-empire" },
  { fact: "Venice's 6,000 underground cisterns turned a saltwater lagoon into a city with fresh drinking water for 1,200 years.", category: "Venetian", emoji: "🛶", civId: "venice" },
  { fact: "The Manning equation used in modern hydraulic engineering was first published in 1889 — but ancient Romans used the same principles empirically.", category: "Engineering", emoji: "📐", civId: "ancient-rome" },
  { fact: "China's Grand Canal, at 1,776 km, remains the longest artificial waterway ever built — and is still in use after 2,500 years.", category: "Chinese", emoji: "🚢", civId: "ancient-china" },
  { fact: "The Chimú Empire's La Cumbre canal carried water 80 km across barren desert between two river valleys in pre-Columbian Peru.", category: "Chimú", emoji: "🏔️", civId: "chimu-empire" },
  { fact: "Ancient Egyptian sakia waterwheels could lift 100,000 liters per day — powered only by an ox walking in circles.", category: "Egyptian", emoji: "🐂", civId: "ancient-egypt" },
  { fact: "The Hama norias (water wheels) in Syria have operated for 2,000+ years and are the largest ancient water wheels ever built at 20m diameter.", category: "Syrian", emoji: "☸️", civId: "syria-orontes" },
  { fact: "Tiwanaku raised fields (suka kollus) at 3,800m altitude were 10x more productive than modern dry farming in the same region.", category: "Tiwanaku", emoji: "🌾", civId: "tiwanaku-empire" },
  { fact: "Roman lead pipes (fistulae) were standardized into 15 different sizes — an early example of industrial standardization.", category: "Roman", emoji: "🔧", civId: "ancient-rome" },
  { fact: "The Safavid Si-o-se-pol bridge in Isfahan has 33 arches and functions simultaneously as bridge, dam, park, and concert venue.", category: "Safavid", emoji: "🌙", civId: "safavid-persia" },
  { fact: "Māori pā tuna (eel weirs) in New Zealand have been continuously maintained for over 500 years — among the oldest working fisheries on Earth.", category: "Māori", emoji: "🐟", civId: "maori-new-zealand" },
  { fact: "An average Roman citizen used 500–1,100 liters of water per day — more than most modern Americans (300 L/day).", category: "Roman", emoji: "💦", civId: "ancient-rome" },
  { fact: "The Afsluitdijk dam in the Netherlands turned an entire sea (Zuiderzee) into a freshwater lake in 1932.", category: "Dutch", emoji: "🌊", civId: "dutch-netherlands" },
  { fact: "Hezekiah's Tunnel (701 BCE) was carved 533m through solid rock from both ends — and the two teams met in the middle with only minor deviation.", category: "Israelite", emoji: "⛏️", civId: "canaan" },
  { fact: "Ancient water clocks (clepsydrae) were so accurate they were used in Athenian courts to time lawyers' speeches.", category: "Greek", emoji: "⏳", civId: "ancient-greece" },
];

interface FunFactsStripProps {
  onSelectCivilization?: (id: string) => void;
}

export default function FunFactsStrip({ onSelectCivilization }: FunFactsStripProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % funFacts.length);
      setIsTransitioning(false);
    }, 300);
  }, []);

  const goToPrev = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(prev => (prev - 1 + funFacts.length) % funFacts.length);
      setIsTransitioning(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goToNext, 8000);
    return () => clearInterval(timer);
  }, [isPaused, goToNext]);

  const current = funFacts[currentIndex];

  const handleShare = async () => {
    const text = `${current.emoji} Water History Fact: ${current.fact}`;
    if (navigator.share) {
      try {
        await navigator.share({ text, title: "Historical Mystery - Fun Fact" });
      } catch {}
    } else {
      await navigator.clipboard.writeText(text);
    }
  };

  const handleFactClick = () => {
    if (current.civId && onSelectCivilization) {
      onSelectCivilization(current.civId);
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-[var(--deep-ocean)] via-[var(--river-blue)]/80 to-[var(--deep-ocean)] border border-[var(--gold)]/30 rounded-lg py-3 px-4 shadow-lg shadow-[var(--river-blue)]/10">
      <div className="flex items-center gap-3 max-w-6xl mx-auto">
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <Lightbulb size={18} className="text-[var(--gold)]" />
          <span className="text-[var(--gold)] text-xs font-heading hidden sm:inline">DID YOU KNOW</span>
        </div>

        <Button variant="ghost" size="sm" onClick={goToPrev}
          className="text-[var(--parchment)]/50 hover:text-[var(--parchment)] hover:bg-transparent h-7 w-7 p-0 flex-shrink-0">
          <ChevronLeft size={16} />
        </Button>

        <div
          className={`flex-1 min-w-0 overflow-hidden ${current.civId && onSelectCivilization ? 'cursor-pointer group' : ''}`}
          onClick={handleFactClick}
        >
          <p className={`text-sm text-[var(--parchment)] transition-all duration-300 leading-relaxed ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            <span className="mr-1.5">{current.emoji}</span>
            {current.fact}
            {current.civId && onSelectCivilization && (
              <span className="inline-flex items-center gap-1 ml-2 text-[var(--gold)] text-xs font-medium group-hover:underline">
                Explore {current.category} <ArrowRight size={11} />
              </span>
            )}
          </p>
        </div>

        <Button variant="ghost" size="sm" onClick={goToNext}
          className="text-[var(--parchment)]/50 hover:text-[var(--parchment)] hover:bg-transparent h-7 w-7 p-0 flex-shrink-0">
          <ChevronRight size={16} />
        </Button>

        <Button variant="ghost" size="sm" onClick={() => setIsPaused(!isPaused)}
          className="text-[var(--parchment)]/50 hover:text-[var(--parchment)] hover:bg-transparent h-7 w-7 p-0 flex-shrink-0">
          {isPaused ? <Play size={13} /> : <Pause size={13} />}
        </Button>

        <Button variant="ghost" size="sm" onClick={handleShare}
          className="text-[var(--parchment)]/50 hover:text-[var(--parchment)] hover:bg-transparent h-7 w-7 p-0 flex-shrink-0"
          title="Share this fact">
          <Share2 size={13} />
        </Button>

        <span className="text-[var(--parchment)]/40 text-[10px] flex-shrink-0 hidden sm:inline">
          {currentIndex + 1}/{funFacts.length}
        </span>
      </div>
    </div>
  );
}
