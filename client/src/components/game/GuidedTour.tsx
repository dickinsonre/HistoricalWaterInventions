import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Play, ChevronLeft, ChevronRight, X, MapPin, Droplets, Clock, GraduationCap, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TourStop {
  id: string;
  title: string;
  civilization: string;
  period: string;
  description: string;
  keyFact: string;
  route: string;
  image?: string;
}

const tourStops: TourStop[] = [
  {
    id: "egypt",
    title: "Shaduf - The First Water Lifter",
    civilization: "Ancient Egypt",
    period: "2000 BCE",
    description: "Begin your journey with humanity's first mechanical water-lifting device. The shaduf used simple lever physics to irrigate fields along the Nile.",
    keyFact: "Still used in parts of Africa and Asia today - 4000 years of continuous use!",
    route: "/ancient-egypt"
  },
  {
    id: "mesopotamia",
    title: "Canals of Babylon",
    civilization: "Mesopotamia",
    period: "1800 BCE",
    description: "Explore the sophisticated canal systems that turned desert into the 'Fertile Crescent'. These irrigation networks supported one of the world's first civilizations.",
    keyFact: "The Code of Hammurabi included laws about canal maintenance.",
    route: "/mesopotamia"
  },
  {
    id: "persia",
    title: "Persian Qanat - Underground Rivers",
    civilization: "Ancient Persia",
    period: "1000 BCE",
    description: "Discover the ingenious qanat system - underground tunnels that tapped mountain aquifers and delivered water to desert cities using only gravity.",
    keyFact: "Some qanats in Iran have been operating continuously for 2,700 years.",
    route: "/ancient-persia"
  },
  {
    id: "rome",
    title: "Roman Aqueducts",
    civilization: "Roman Empire",
    period: "312 BCE",
    description: "Marvel at the engineering precision of Roman aqueducts. These gravity-fed water highways delivered 300 million gallons daily to Rome.",
    keyFact: "The gradient was so precise that water dropped only 17 meters over 50 kilometers.",
    route: "/roman-empire"
  },
  {
    id: "khmer",
    title: "Angkor's Water Empire",
    civilization: "Khmer Empire",
    period: "800 CE",
    description: "Explore the massive barays (reservoirs) of Angkor. These engineering marvels supported the largest pre-industrial city in the world.",
    keyFact: "The West Baray held 53 million cubic meters of water.",
    route: "/khmer-empire"
  },
  {
    id: "india",
    title: "Stepwells - Architecture Meets Water",
    civilization: "Medieval India",
    period: "900 CE",
    description: "Descend into the beautiful stepwells of India - elaborate structures that combined water access, architecture, and spiritual significance.",
    keyFact: "Rani ki Vav stepwell descends 7 stories with 500 principal sculptures.",
    route: "/medieval-india"
  },
  {
    id: "bali",
    title: "Subak - Water Democracy",
    civilization: "Bali, Indonesia",
    period: "900 CE",
    description: "Learn about the Subak system - a UNESCO World Heritage cooperative water management system guided by water temples.",
    keyFact: "No central authority - thousands of farmers coordinate through temple meetings.",
    route: "/bali"
  },
  {
    id: "modern",
    title: "Modern Innovations",
    civilization: "Global",
    period: "Present Day",
    description: "See how ancient wisdom inspires modern solutions. From Singapore's NEWater to Japan's G-Cans, innovation continues.",
    keyFact: "Tokyo's G-Cans is the world's largest underground flood diversion facility.",
    route: "/modern-japan"
  }
];

export default function GuidedTour() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStop, setCurrentStop] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const goToNext = () => {
    if (currentStop < tourStops.length - 1) {
      setCurrentStop(currentStop + 1);
    }
  };

  const goToPrev = () => {
    if (currentStop > 0) {
      setCurrentStop(currentStop - 1);
    }
  };

  const visitStop = () => {
    navigate(tourStops[currentStop].route);
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-[var(--gold)] to-[var(--terracotta)] hover:from-[var(--gold)]/90 hover:to-[var(--terracotta)]/90 text-white"
      >
        <GraduationCap size={16} className="mr-2" />
        Start Guided Tour
      </Button>
    );
  }

  const stop = tourStops[currentStop];

  return (
    <Card className="water-card border-2 border-[var(--gold)]/50">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-[var(--gold)] to-[var(--terracotta)] rounded-lg">
              <GraduationCap className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-heading text-xl text-[var(--gold)]">Guided Historical Tour</h3>
              <p className="text-sm text-[var(--parchment)]/70">
                Stop {currentStop + 1} of {tourStops.length}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
          >
            <X size={20} />
          </Button>
        </div>

        <div className="relative mb-4">
          <div className="flex items-center justify-between">
            {tourStops.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  idx === currentStop 
                    ? 'bg-[var(--gold)] scale-125' 
                    : idx < currentStop 
                    ? 'bg-[var(--cerulean)]' 
                    : 'bg-[var(--parchment)]/30'
                }`}
                onClick={() => setCurrentStop(idx)}
              />
            ))}
          </div>
          <div className="absolute top-1.5 left-0 right-0 h-0.5 bg-[var(--parchment)]/20 -z-10" />
          <div 
            className="absolute top-1.5 left-0 h-0.5 bg-[var(--cerulean)] transition-all -z-10"
            style={{ width: `${(currentStop / (tourStops.length - 1)) * 100}%` }}
          />
        </div>

        <div className="bg-gradient-to-br from-[var(--deep-ocean)] to-[var(--river-blue)] rounded-lg p-5 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock size={14} className="text-[var(--terracotta)]" />
            <span className="text-[var(--terracotta)] text-sm">{stop.period}</span>
            <span className="text-[var(--parchment)]/40">•</span>
            <MapPin size={14} className="text-[var(--aqua)]" />
            <span className="text-[var(--aqua)] text-sm">{stop.civilization}</span>
          </div>
          
          <h4 className="font-heading text-lg text-[var(--gold)] mb-3">{stop.title}</h4>
          <p className="text-[var(--parchment)]/90 text-sm mb-4">{stop.description}</p>
          
          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded p-3">
            <div className="flex items-start gap-2">
              <Sparkles size={14} className="text-[var(--gold)] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[var(--gold)]">{stop.keyFact}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrev}
            disabled={currentStop === 0}
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30 disabled:opacity-50"
          >
            <ChevronLeft size={16} />
            Previous
          </Button>
          
          <Button
            size="sm"
            onClick={visitStop}
            className="bg-[var(--cerulean)] hover:bg-[var(--cerulean)]/80 text-white"
          >
            <Droplets size={14} className="mr-1" />
            Visit {stop.civilization}
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={goToNext}
            disabled={currentStop === tourStops.length - 1}
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30 disabled:opacity-50"
          >
            Next
            <ChevronRight size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
