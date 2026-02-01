import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  Brain, 
  Clock, 
  MapPin, 
  Trophy,
  ArrowLeft,
  Star,
  CheckCircle,
  XCircle,
  Droplets,
  Zap
} from "lucide-react";
import { gameData } from "@/data/gameData";

interface MiniGamesProps {
  onBack: () => void;
}

type GameType = "menu" | "quiz" | "timeline" | "match";

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  category: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "What ancient device uses gravity and an underground tunnel to transport water without pumps?",
    options: ["Aqueduct", "Qanat", "Shaduf", "Water wheel"],
    correct: 1,
    explanation: "Qanats are underground channels that use gravity to bring water from mountain aquifers to lowland areas. Some are over 3,000 years old and still function today!",
    category: "Persian Engineering"
  },
  {
    question: "The Roman Cloaca Maxima was one of the world's earliest examples of what?",
    options: ["Irrigation canal", "Sewer system", "Aqueduct", "Dam"],
    correct: 1,
    explanation: "The Cloaca Maxima (Greatest Sewer) was built around 600 BCE and is still partially in use today—over 2,600 years later!",
    category: "Roman Engineering"
  },
  {
    question: "What invention allowed ancient Egyptians to lift water from the Nile to irrigate higher fields?",
    options: ["Archimedes Screw", "Shaduf", "Water clock", "Nilometer"],
    correct: 1,
    explanation: "The Shaduf is a lever system with a bucket and counterweight. It's been used for over 4,000 years and is still used in rural Egypt today.",
    category: "Egyptian Engineering"
  },
  {
    question: "The Dujiangyan irrigation system in China has been operating continuously for how long?",
    options: ["500 years", "1,000 years", "2,300 years", "3,500 years"],
    correct: 2,
    explanation: "Built in 256 BCE, Dujiangyan still irrigates over 5 million acres. It uses no dams—just clever channel design to split and control river flow.",
    category: "Chinese Engineering"
  },
  {
    question: "What makes the Minoan civilization's plumbing at Knossos remarkable?",
    options: ["First metal pipes", "First flush toilets", "First water pumps", "First water filters"],
    correct: 1,
    explanation: "The Minoans had flush toilets around 1700 BCE—3,700 years ago! They used rainwater cisterns and terra-cotta pipes.",
    category: "Minoan Engineering"
  },
  {
    question: "The Khmer Empire's Baray at Angkor could hold how much water?",
    options: ["1 million gallons", "10 million gallons", "1 billion gallons", "10 billion gallons"],
    correct: 2,
    explanation: "The West Baray held about 1.5 billion gallons—enough to supply a city of 1 million people during dry season!",
    category: "Khmer Engineering"
  },
  {
    question: "What hydraulic principle did Archimedes discover while taking a bath?",
    options: ["Water pressure increases with depth", "Objects displace their weight in water", "Water flows downhill", "Hot water rises"],
    correct: 1,
    explanation: "Archimedes discovered buoyancy—that objects immersed in water are buoyed up by a force equal to the weight of water they displace. He allegedly shouted 'Eureka!'",
    category: "Greek Science"
  },
  {
    question: "Tokyo's G-Cans flood control system can move how much water per second?",
    options: ["20 tons", "200 tons", "2,000 tons", "20,000 tons"],
    correct: 1,
    explanation: "The G-Cans 'Underground Temple' can pump 200 cubic meters (200 tons) of water per second, protecting 13 million Tokyo residents from typhoon flooding.",
    category: "Modern Engineering"
  },
  {
    question: "What did ancient Nabataeans at Petra use to survive in the desert?",
    options: ["Wells only", "Imported water", "Sophisticated water capture and cistern systems", "Underground rivers"],
    correct: 2,
    explanation: "The Nabataeans carved over 200 cisterns into rock and built channels to capture every drop of rare rainfall. Petra supported 30,000 people in the desert!",
    category: "Nabataean Engineering"
  },
  {
    question: "Hawaiian Ahupua'a is a system that manages water from where to where?",
    options: ["Lake to farm", "River to city", "Mountain to sea", "Well to village"],
    correct: 2,
    explanation: "Ahupua'a divides land from mountain peak to ocean, ensuring each community has access to all resources. Upper forests are protected to ensure water supply downstream.",
    category: "Hawaiian Wisdom"
  },
  {
    question: "What Korean invention from 1441 was the world's first standardized rain gauge?",
    options: ["Cheugugi", "Ondol", "Hanok", "Jangdok"],
    correct: 0,
    explanation: "The Cheugugi was invented during King Sejong's reign. It standardized rainfall measurement across Korea 200 years before Europe had similar instruments!",
    category: "Korean Innovation"
  },
  {
    question: "Bangkok was called 'Venice of the East' because of what feature?",
    options: ["Bridges", "Canals (Klongs)", "Fountains", "Waterfalls"],
    correct: 1,
    explanation: "Bangkok once had over 1,100 klongs (canals) for transport and commerce. Floating markets became iconic Thai culture. Many klongs were filled for roads in the 20th century.",
    category: "Thai Engineering"
  }
];

interface TimelineItem {
  id: string;
  name: string;
  year: number;
  civilization: string;
}

const timelineItems: TimelineItem[] = [
  { id: "1", name: "Aboriginal Fish Traps", year: -38000, civilization: "Aboriginal Australia" },
  { id: "2", name: "Egyptian Shaduf", year: -1700, civilization: "Ancient Egypt" },
  { id: "3", name: "Minoan Flush Toilets", year: -1700, civilization: "Minoan Crete" },
  { id: "4", name: "Persian Qanat", year: -1000, civilization: "Ancient Persia" },
  { id: "5", name: "Roman Cloaca Maxima", year: -600, civilization: "Ancient Rome" },
  { id: "6", name: "Archimedes Screw", year: -250, civilization: "Ancient Greece" },
  { id: "7", name: "Dujiangyan System", year: -256, civilization: "Ancient China" },
  { id: "8", name: "Khmer Baray Reservoirs", year: 900, civilization: "Khmer Empire" },
  { id: "9", name: "Ayutthaya Moat System", year: 1350, civilization: "Siam" },
  { id: "10", name: "Korean Cheugugi", year: 1441, civilization: "Korea" },
  { id: "11", name: "Dutch Windmill Pumps", year: 1500, civilization: "Netherlands" },
  { id: "12", name: "Tokyo G-Cans", year: 1993, civilization: "Modern Japan" }
];

interface MatchItem {
  invention: string;
  civilization: string;
  hint: string;
}

const matchItems: MatchItem[] = [
  { invention: "Qanat Underground Channels", civilization: "Ancient Persia", hint: "Iran region" },
  { invention: "Nilometer", civilization: "Ancient Egypt", hint: "Measured river flooding" },
  { invention: "Archimedes Screw", civilization: "Ancient Greece", hint: "Famous 'Eureka!' moment" },
  { invention: "Dujiangyan Irrigation", civilization: "Ancient China", hint: "2,300 years old, still working" },
  { invention: "Klong Canal Network", civilization: "Siam (Thailand)", hint: "Venice of the East" },
  { invention: "Baray Reservoir", civilization: "Khmer Empire", hint: "Angkor Wat region" },
  { invention: "G-Cans Flood Control", civilization: "Modern Japan", hint: "Underground Temple" },
  { invention: "Ahupua'a Watershed", civilization: "Hawaiian", hint: "Mountain to sea" }
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function MiniGames({ onBack }: MiniGamesProps) {
  const [currentGame, setCurrentGame] = useState<GameType>("menu");
  const [score, setScore] = useState(0);
  const [highScores, setHighScores] = useState<Record<string, number>>({
    quiz: 0,
    timeline: 0,
    match: 0
  });

  const handleGameComplete = (game: string, finalScore: number) => {
    if (finalScore > highScores[game]) {
      setHighScores(prev => ({ ...prev, [game]: finalScore }));
    }
    setScore(0);
  };

  if (currentGame === "quiz") {
    return (
      <WaterFlowQuiz 
        onBack={() => setCurrentGame("menu")}
        onComplete={(finalScore) => handleGameComplete("quiz", finalScore)}
      />
    );
  }

  if (currentGame === "timeline") {
    return (
      <TimelineChallenge 
        onBack={() => setCurrentGame("menu")}
        onComplete={(finalScore) => handleGameComplete("timeline", finalScore)}
      />
    );
  }

  if (currentGame === "match") {
    return (
      <MatchCivilization 
        onBack={() => setCurrentGame("menu")}
        onComplete={(finalScore) => handleGameComplete("match", finalScore)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[var(--deep-ocean)] p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-heading text-2xl text-[var(--gold)] flex items-center gap-2">
              <Gamepad2 className="text-[var(--aqua)]" />
              Educational Mini-Games
            </h1>
            <p className="text-[var(--parchment)]/70 text-sm">
              Learn hydraulic concepts through fun challenges
            </p>
          </div>
          <Button
            onClick={onBack}
            variant="outline"
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card 
            className="water-card cursor-pointer hover:border-[var(--gold)] transition-all group"
            onClick={() => setCurrentGame("quiz")}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--cerulean)]/20 flex items-center justify-center group-hover:bg-[var(--cerulean)]/40 transition-colors">
                <Brain size={32} className="text-[var(--aqua)]" />
              </div>
              <h3 className="font-heading text-lg text-[var(--gold)] mb-2">Water Flow Quiz</h3>
              <p className="text-[var(--parchment)]/70 text-sm mb-4">
                Test your knowledge of ancient hydraulic engineering
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-[var(--aqua)]">
                <Star size={14} />
                <span>High Score: {highScores.quiz}</span>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="water-card cursor-pointer hover:border-[var(--gold)] transition-all group"
            onClick={() => setCurrentGame("timeline")}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--terracotta)]/20 flex items-center justify-center group-hover:bg-[var(--terracotta)]/40 transition-colors">
                <Clock size={32} className="text-[var(--terracotta)]" />
              </div>
              <h3 className="font-heading text-lg text-[var(--gold)] mb-2">Timeline Challenge</h3>
              <p className="text-[var(--parchment)]/70 text-sm mb-4">
                Arrange water inventions in chronological order
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-[var(--aqua)]">
                <Star size={14} />
                <span>High Score: {highScores.timeline}</span>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="water-card cursor-pointer hover:border-[var(--gold)] transition-all group"
            onClick={() => setCurrentGame("match")}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--gold)]/20 flex items-center justify-center group-hover:bg-[var(--gold)]/40 transition-colors">
                <MapPin size={32} className="text-[var(--gold)]" />
              </div>
              <h3 className="font-heading text-lg text-[var(--gold)] mb-2">Match the Civilization</h3>
              <p className="text-[var(--parchment)]/70 text-sm mb-4">
                Connect water inventions to their origins
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-[var(--aqua)]">
                <Star size={14} />
                <span>High Score: {highScores.match}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="water-card">
          <CardContent className="p-6">
            <h3 className="font-heading text-lg text-[var(--gold)] mb-4 flex items-center gap-2">
              <Droplets className="text-[var(--aqua)]" />
              Why These Games Matter
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-[var(--parchment)]/80">
              <div>
                <h4 className="text-[var(--aqua)] font-medium mb-2">Learn Real Engineering</h4>
                <p>Every question is based on actual historical water systems that solved real problems—many still in use today.</p>
              </div>
              <div>
                <h4 className="text-[var(--aqua)] font-medium mb-2">Modern Relevance</h4>
                <p>Understanding ancient solutions helps us address today's water challenges: climate change, urbanization, and sustainability.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function WaterFlowQuiz({ onBack, onComplete }: { onBack: () => void; onComplete: (score: number) => void }) {
  const [questions] = useState(() => shuffleArray(quizQuestions).slice(0, 8));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === currentQuestion.correct) {
      setScore(prev => prev + 10);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameComplete(true);
      onComplete(score);
    }
  };

  if (gameComplete) {
    return (
      <div className="min-h-screen bg-[var(--deep-ocean)] p-4 flex items-center justify-center">
        <Card className="water-card max-w-md w-full">
          <CardContent className="p-8 text-center">
            <Trophy size={64} className="mx-auto mb-4 text-[var(--gold)]" />
            <h2 className="font-heading text-2xl text-[var(--gold)] mb-2">Quiz Complete!</h2>
            <p className="text-[var(--parchment)]/70 mb-4">
              You scored {score} out of {questions.length * 10} points
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              {score >= 60 && <Star className="text-[var(--gold)] fill-[var(--gold)]" />}
              {score >= 40 && <Star className="text-[var(--gold)] fill-[var(--gold)]" />}
              {score >= 20 && <Star className="text-[var(--gold)] fill-[var(--gold)]" />}
            </div>
            <Button
              onClick={onBack}
              className="bg-[var(--cerulean)] hover:bg-[var(--river-blue)] text-white"
            >
              Back to Games
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--deep-ocean)] p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button
              onClick={onBack}
              variant="outline"
              size="sm"
              className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
            >
              <ArrowLeft size={16} />
            </Button>
            <div>
              <h2 className="font-heading text-xl text-[var(--gold)]">Water Flow Quiz</h2>
              <p className="text-[var(--parchment)]/60 text-sm">Question {currentIndex + 1} of {questions.length}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[var(--aqua)]">
            <Zap size={18} />
            <span className="font-bold">{score} pts</span>
          </div>
        </div>

        <div className="mb-4 h-2 bg-[var(--deep-ocean)] rounded-full overflow-hidden border border-[var(--aqua)]/20">
          <div 
            className="h-full bg-[var(--aqua)] transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        <Card className="water-card mb-4">
          <CardContent className="p-6">
            <span className="text-xs text-[var(--terracotta)] mb-2 block">{currentQuestion.category}</span>
            <h3 className="text-lg text-[var(--parchment)] mb-6">{currentQuestion.question}</h3>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-lg text-left transition-all ${
                    showResult
                      ? index === currentQuestion.correct
                        ? 'bg-green-500/20 border-2 border-green-500'
                        : selectedAnswer === index
                          ? 'bg-red-500/20 border-2 border-red-500'
                          : 'bg-[var(--deep-ocean)]/50 border border-[var(--aqua)]/20 opacity-50'
                      : 'bg-[var(--deep-ocean)]/50 border border-[var(--aqua)]/30 hover:border-[var(--aqua)] hover:bg-[var(--cerulean)]/20'
                  } text-[var(--parchment)]`}
                >
                  <div className="flex items-center gap-3">
                    {showResult && index === currentQuestion.correct && (
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    )}
                    {showResult && selectedAnswer === index && index !== currentQuestion.correct && (
                      <XCircle size={20} className="text-red-500 flex-shrink-0" />
                    )}
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {showResult && (
          <Card className="water-card mb-4 border-[var(--gold)]/30">
            <CardContent className="p-4">
              <p className="text-[var(--parchment)]/90 text-sm">
                <span className="text-[var(--gold)] font-medium">Did you know? </span>
                {currentQuestion.explanation}
              </p>
            </CardContent>
          </Card>
        )}

        {showResult && (
          <Button
            onClick={handleNext}
            className="w-full bg-[var(--cerulean)] hover:bg-[var(--river-blue)] text-white"
          >
            {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
          </Button>
        )}
      </div>
    </div>
  );
}

function TimelineChallenge({ onBack, onComplete }: { onBack: () => void; onComplete: (score: number) => void }) {
  const [items] = useState(() => shuffleArray(timelineItems.slice(0, 6)));
  const [userOrder, setUserOrder] = useState<TimelineItem[]>([]);
  const [remainingItems, setRemainingItems] = useState<TimelineItem[]>(items);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelectItem = (item: TimelineItem) => {
    setUserOrder(prev => [...prev, item]);
    setRemainingItems(prev => prev.filter(i => i.id !== item.id));
  };

  const handleRemoveItem = (item: TimelineItem) => {
    setRemainingItems(prev => [...prev, item]);
    setUserOrder(prev => prev.filter(i => i.id !== item.id));
  };

  const handleCheck = () => {
    const sortedCorrect = [...items].sort((a, b) => a.year - b.year);
    let points = 0;
    userOrder.forEach((item, index) => {
      if (sortedCorrect[index]?.id === item.id) {
        points += 15;
      }
    });
    setScore(points);
    setShowResult(true);
    onComplete(points);
  };

  const formatYear = (year: number) => {
    if (year < 0) return `${Math.abs(year)} BCE`;
    return `${year} CE`;
  };

  if (showResult) {
    const sortedCorrect = [...items].sort((a, b) => a.year - b.year);
    return (
      <div className="min-h-screen bg-[var(--deep-ocean)] p-4">
        <div className="max-w-2xl mx-auto">
          <Card className="water-card">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <Trophy size={48} className="mx-auto mb-2 text-[var(--gold)]" />
                <h2 className="font-heading text-xl text-[var(--gold)]">Timeline Complete!</h2>
                <p className="text-[var(--parchment)]/70">You scored {score} out of {items.length * 15} points</p>
              </div>

              <h3 className="text-[var(--aqua)] font-medium mb-3">Correct Order:</h3>
              <div className="space-y-2 mb-6">
                {sortedCorrect.map((item, index) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 bg-[var(--deep-ocean)]/50 rounded-lg">
                    <span className="text-[var(--gold)] font-bold">{index + 1}</span>
                    <div className="flex-1">
                      <span className="text-[var(--parchment)]">{item.name}</span>
                      <span className="text-[var(--parchment)]/60 text-sm ml-2">({item.civilization})</span>
                    </div>
                    <span className="text-[var(--aqua)] text-sm">{formatYear(item.year)}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={onBack}
                className="w-full bg-[var(--cerulean)] hover:bg-[var(--river-blue)] text-white"
              >
                Back to Games
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--deep-ocean)] p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button
              onClick={onBack}
              variant="outline"
              size="sm"
              className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
            >
              <ArrowLeft size={16} />
            </Button>
            <div>
              <h2 className="font-heading text-xl text-[var(--gold)]">Timeline Challenge</h2>
              <p className="text-[var(--parchment)]/60 text-sm">Arrange from oldest to newest</p>
            </div>
          </div>
        </div>

        <Card className="water-card mb-4">
          <CardContent className="p-4">
            <h3 className="text-[var(--aqua)] font-medium mb-3">Your Timeline (oldest first):</h3>
            {userOrder.length === 0 ? (
              <p className="text-[var(--parchment)]/50 text-sm py-4 text-center">
                Click items below to add them in chronological order
              </p>
            ) : (
              <div className="space-y-2">
                {userOrder.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="flex items-center gap-3 p-3 bg-[var(--cerulean)]/20 rounded-lg cursor-pointer hover:bg-[var(--cerulean)]/30"
                    onClick={() => handleRemoveItem(item)}
                  >
                    <span className="text-[var(--gold)] font-bold">{index + 1}</span>
                    <span className="text-[var(--parchment)] flex-1">{item.name}</span>
                    <span className="text-xs text-[var(--parchment)]/60">(click to remove)</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {remainingItems.length > 0 && (
          <Card className="water-card mb-4">
            <CardContent className="p-4">
              <h3 className="text-[var(--aqua)] font-medium mb-3">Available Items:</h3>
              <div className="flex flex-wrap gap-2">
                {remainingItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectItem(item)}
                    className="px-3 py-2 bg-[var(--deep-ocean)]/50 border border-[var(--aqua)]/30 rounded-lg text-[var(--parchment)] text-sm hover:border-[var(--gold)] hover:bg-[var(--cerulean)]/20 transition-all"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {userOrder.length === items.length && (
          <Button
            onClick={handleCheck}
            className="w-full bg-[var(--gold)] hover:bg-[var(--terracotta)] text-[var(--deep-ocean)]"
          >
            Check My Timeline
          </Button>
        )}
      </div>
    </div>
  );
}

function MatchCivilization({ onBack, onComplete }: { onBack: () => void; onComplete: (score: number) => void }) {
  const [items] = useState(() => shuffleArray(matchItems).slice(0, 6));
  const [civilizations] = useState(() => shuffleArray(items.map(i => i.civilization)));
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [selectedInvention, setSelectedInvention] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleInventionClick = (invention: string) => {
    if (showResult) return;
    if (matches[invention]) {
      const newMatches = { ...matches };
      delete newMatches[invention];
      setMatches(newMatches);
    } else {
      setSelectedInvention(invention);
    }
  };

  const handleCivilizationClick = (civilization: string) => {
    if (showResult || !selectedInvention) return;
    if (Object.values(matches).includes(civilization)) return;
    
    setMatches(prev => ({ ...prev, [selectedInvention]: civilization }));
    setSelectedInvention(null);
  };

  const handleCheck = () => {
    let points = 0;
    items.forEach(item => {
      if (matches[item.invention] === item.civilization) {
        points += 15;
      }
    });
    setScore(points);
    setShowResult(true);
    onComplete(points);
  };

  const isMatched = (civilization: string) => Object.values(matches).includes(civilization);
  const getMatchedInvention = (civilization: string) => {
    return Object.keys(matches).find(inv => matches[inv] === civilization);
  };

  return (
    <div className="min-h-screen bg-[var(--deep-ocean)] p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button
              onClick={onBack}
              variant="outline"
              size="sm"
              className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
            >
              <ArrowLeft size={16} />
            </Button>
            <div>
              <h2 className="font-heading text-xl text-[var(--gold)]">Match the Civilization</h2>
              <p className="text-[var(--parchment)]/60 text-sm">Connect inventions to their origins</p>
            </div>
          </div>
          {showResult && (
            <div className="text-[var(--aqua)]">
              Score: {score}/{items.length * 15}
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="water-card">
            <CardContent className="p-4">
              <h3 className="text-[var(--aqua)] font-medium mb-3">Water Inventions:</h3>
              <div className="space-y-2">
                {items.map(item => (
                  <button
                    key={item.invention}
                    onClick={() => handleInventionClick(item.invention)}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      showResult
                        ? matches[item.invention] === item.civilization
                          ? 'bg-green-500/20 border-2 border-green-500'
                          : matches[item.invention]
                            ? 'bg-red-500/20 border-2 border-red-500'
                            : 'bg-[var(--deep-ocean)]/50 border border-[var(--aqua)]/20'
                        : selectedInvention === item.invention
                          ? 'bg-[var(--gold)]/30 border-2 border-[var(--gold)]'
                          : matches[item.invention]
                            ? 'bg-[var(--cerulean)]/30 border border-[var(--cerulean)]'
                            : 'bg-[var(--deep-ocean)]/50 border border-[var(--aqua)]/30 hover:border-[var(--aqua)]'
                    } text-[var(--parchment)]`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.invention}</span>
                      {matches[item.invention] && (
                        <span className="text-xs text-[var(--aqua)]">{matches[item.invention]}</span>
                      )}
                    </div>
                    <span className="text-xs text-[var(--parchment)]/50">Hint: {item.hint}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="water-card">
            <CardContent className="p-4">
              <h3 className="text-[var(--aqua)] font-medium mb-3">Civilizations:</h3>
              <div className="space-y-2">
                {civilizations.map(civ => (
                  <button
                    key={civ}
                    onClick={() => handleCivilizationClick(civ)}
                    disabled={isMatched(civ) && !showResult}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      isMatched(civ)
                        ? 'bg-[var(--cerulean)]/30 border border-[var(--cerulean)] opacity-70'
                        : selectedInvention
                          ? 'bg-[var(--deep-ocean)]/50 border border-[var(--aqua)]/30 hover:border-[var(--gold)] hover:bg-[var(--gold)]/20 cursor-pointer'
                          : 'bg-[var(--deep-ocean)]/50 border border-[var(--aqua)]/20'
                    } text-[var(--parchment)]`}
                  >
                    {civ}
                    {isMatched(civ) && (
                      <span className="block text-xs text-[var(--parchment)]/60">
                        Matched with: {getMatchedInvention(civ)}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-4">
          {!showResult && Object.keys(matches).length === items.length && (
            <Button
              onClick={handleCheck}
              className="w-full bg-[var(--gold)] hover:bg-[var(--terracotta)] text-[var(--deep-ocean)]"
            >
              Check My Matches
            </Button>
          )}
          {showResult && (
            <Button
              onClick={onBack}
              className="w-full bg-[var(--cerulean)] hover:bg-[var(--river-blue)] text-white"
            >
              Back to Games
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
