import { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { X, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";

interface DidYouKnowProps {
  onClose: () => void;
}

const waterFacts = [
  {
    title: "Roman Aqueducts Still Work",
    fact: "Some Roman aqueducts built over 2,000 years ago are still supplying water to modern fountains in Rome.",
    civilization: "Roman Empire",
    emoji: "🏛️"
  },
  {
    title: "Precision Without Lasers",
    fact: "The Pont du Gard aqueduct has only a 17-meter drop over 50km—a gradient of 1:3000 achieved with ancient surveying tools.",
    civilization: "Roman Empire",
    emoji: "📐"
  },
  {
    title: "The First Tax Calculator",
    fact: "Egyptian Nilometers measured flood levels to predict harvests and calculate taxes—ancient data science at work.",
    civilization: "Ancient Egypt",
    emoji: "📊"
  },
  {
    title: "2,270 Years and Counting",
    fact: "The Dujiangyan irrigation system in China, built in 256 BCE, still irrigates 5,300 square kilometers today.",
    civilization: "Ancient China",
    emoji: "🌾"
  },
  {
    title: "Underground Rivers",
    fact: "Persian qanats could stretch over 50km underground, delivering water through deserts without a single pump.",
    civilization: "Mesopotamia",
    emoji: "🏜️"
  },
  {
    title: "The First Covered Sewers",
    fact: "Mohenjo-daro had covered drainage systems in 2500 BCE—technology Europe wouldn't match for 4,000 years.",
    civilization: "Indus Valley",
    emoji: "🚰"
  },
  {
    title: "Feeding 200,000 People",
    fact: "Aztec chinampas (floating gardens) were so productive they fed the entire population of Tenochtitlan.",
    civilization: "Mesoamerica",
    emoji: "🌱"
  },
  {
    title: "Father of Robotics",
    fact: "Al-Jazari invented water-powered automata in 1206 CE, including programmable humanoid robots and the crankshaft.",
    civilization: "Islamic Golden Age",
    emoji: "🤖"
  },
  {
    title: "Archimedes' Living Legacy",
    fact: "The Archimedes screw, invented in 250 BCE, is still used worldwide in irrigation, wastewater treatment, and flood control.",
    civilization: "Ancient Greece",
    emoji: "🔩"
  },
  {
    title: "Jungle Rainwater Genius",
    fact: "Tikal's Maya engineers collected enough rainwater to support 100,000 people in the middle of a jungle with no rivers.",
    civilization: "Mesoamerica",
    emoji: "🌧️"
  }
];

export default function DidYouKnow({ onClose }: DidYouKnowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFact = () => {
    setCurrentIndex((prev) => (prev + 1) % waterFacts.length);
  };

  const prevFact = () => {
    setCurrentIndex((prev) => (prev - 1 + waterFacts.length) % waterFacts.length);
  };

  const currentFact = waterFacts[currentIndex];

  return (
    <Card className="water-card max-w-lg w-full">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Lightbulb className="text-[var(--gold)]" size={24} />
            <h2 className="font-heading text-2xl text-[var(--gold)]">Did You Know?</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
          >
            <X size={20} />
          </Button>
        </div>

        <div className="min-h-[200px] flex flex-col justify-center">
          <div className="text-center mb-4">
            <span className="text-5xl mb-4 block">{currentFact.emoji}</span>
            <h3 className="font-heading text-xl text-[var(--aqua)] mb-2">{currentFact.title}</h3>
            <p className="text-[var(--parchment)]/90 text-base leading-relaxed">{currentFact.fact}</p>
            <p className="text-[var(--parchment)]/50 text-sm mt-3">{currentFact.civilization}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <Button
            variant="outline"
            size="sm"
            onClick={prevFact}
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
          >
            <ChevronLeft size={16} />
            Previous
          </Button>

          <div className="flex gap-1">
            {waterFacts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-[var(--gold)]' : 'bg-[var(--aqua)]/30'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextFact}
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
          >
            Next
            <ChevronRight size={16} />
          </Button>
        </div>

        <p className="text-center text-[var(--parchment)]/50 text-xs mt-4">
          {currentIndex + 1} of {waterFacts.length} fascinating water facts
        </p>
      </CardContent>
    </Card>
  );
}
