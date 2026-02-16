import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Droplets, MapPin, Award, BookOpen, ChevronRight, ChevronLeft, Compass, Globe, Clock, X } from "lucide-react";

interface OnboardingProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: Droplets,
    title: "Welcome to Historical Mystery",
    subtitle: "Discover How Water Shaped Civilization",
    content: "Explore 139 civilizations and discover 680+ water inventions across 6 continents. From 40,000-year-old Aboriginal fish traps to Ifugao terraces to Tokyo's G-Cans flood control.",
    stats: [
      { value: "139", label: "Civilizations" },
      { value: "680+", label: "Inventions" },
      { value: "40,000+", label: "Years of History" }
    ]
  },
  {
    icon: Globe,
    title: "Explore the Ancient World",
    subtitle: "Journey Across Continents",
    content: "Travel from the Nile Valley to the canals of China, from Roman aqueducts to Mayan reservoirs. Each civilization developed unique solutions to water challenges that still inspire engineers today.",
    regions: ["Ancient Egypt", "Roman Empire", "Ancient Greece", "Mesopotamia", "Indus Valley", "Ancient China", "Ancient Persia", "Khmer Empire", "Inca Empire", "Aboriginal Australia", "Ancient Korea", "Great Zimbabwe", "Nan Madol", "Modern Japan (G-Cans)", "Hawaiian", "Ethiopian Highlands", "Sahel Africa", "Engaruka", "Chamorro", "Dutch Netherlands", "and more..."]
  },
  {
    icon: Clock,
    title: "Discover Water Inventions",
    subtitle: "Technology That Changed History",
    content: "Learn how ancient engineers solved problems we still face today: irrigation, water supply, sanitation, and flood control. Each invention includes detailed explanations and expert commentary.",
    categories: ["Irrigation Systems", "Aqueducts", "Water-Lifting Devices", "Sanitation", "Dams & Reservoirs", "Water Clocks", "Fountains & Baths", "Canals"]
  },
  {
    icon: Award,
    title: "Track Your Progress",
    subtitle: "Become a Water History Expert",
    content: "Unlock regions, discover artifacts, and earn achievements as you explore. Compare ancient inventions, learn fascinating facts, and understand how ancient solutions apply to modern challenges.",
    features: ["Achievement Badges", "Invention Comparison", "Expert Commentary", "Legacy Connections"]
  }
];

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];
  const IconComponent = slide.icon;

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-[var(--deep-ocean)] z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--river-blue)]/20 to-transparent" />
      
      <Card className="water-card max-w-2xl w-full relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={onComplete}
          className="absolute top-4 right-4 text-[var(--parchment)]/70 hover:text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 z-10"
        >
          <X size={20} />
        </Button>
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--cerulean)] to-[var(--river-blue)] flex items-center justify-center">
              <IconComponent size={40} className="text-[var(--aqua)]" />
            </div>
            <h1 className="font-heading text-3xl text-[var(--gold)] mb-2">{slide.title}</h1>
            <p className="text-[var(--aqua)] text-lg">{slide.subtitle}</p>
          </div>

          <p className="text-[var(--parchment)]/90 text-center mb-8 leading-relaxed">
            {slide.content}
          </p>

          {slide.stats && (
            <div className="grid grid-cols-3 gap-4 mb-8">
              {slide.stats.map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/20">
                  <p className="font-heading text-2xl text-[var(--gold)]">{stat.value}</p>
                  <p className="text-[var(--parchment)]/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          )}

          {slide.regions && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {slide.regions.map((region, idx) => (
                <span key={idx} className="px-3 py-1 bg-[var(--deep-ocean)]/60 rounded-full text-[var(--parchment)]/80 text-sm border border-[var(--aqua)]/20">
                  {region}
                </span>
              ))}
            </div>
          )}

          {slide.categories && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              {slide.categories.map((cat, idx) => (
                <div key={idx} className="p-2 bg-[var(--deep-ocean)]/60 rounded-lg text-center border border-[var(--aqua)]/20">
                  <p className="text-[var(--parchment)]/80 text-xs">{cat}</p>
                </div>
              ))}
            </div>
          )}

          {slide.features && (
            <div className="grid grid-cols-2 gap-3 mb-8">
              {slide.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/20">
                  <Award size={16} className="text-[var(--gold)]" />
                  <span className="text-[var(--parchment)]/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-center gap-2 mb-6">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentSlide ? "bg-[var(--gold)]" : "bg-[var(--parchment)]/30"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30 disabled:opacity-50"
            >
              <ChevronLeft size={16} />
              Back
            </Button>

            <Button
              onClick={onComplete}
              variant="ghost"
              className="text-[var(--parchment)]/60 hover:text-[var(--parchment)]"
            >
              Skip
            </Button>

            <Button
              onClick={handleNext}
              className="bg-gradient-to-r from-[var(--cerulean)] to-[var(--river-blue)] hover:from-[var(--aqua)] hover:to-[var(--cerulean)] text-white"
            >
              {currentSlide === slides.length - 1 ? (
                <>
                  <Compass size={16} className="mr-2" />
                  Begin Journey
                </>
              ) : (
                <>
                  Next
                  <ChevronRight size={16} />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
