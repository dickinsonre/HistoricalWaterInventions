import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  X, Trophy, Star, Clock, CheckCircle, XCircle, Brain, Globe,
  Calendar, Droplets, Zap, RotateCcw, ArrowRight, Award
} from "lucide-react";
import { gameData, getAllArtifacts, ArtifactData, RegionData } from "../../data/gameData";

interface QuizSystemProps {
  onClose: () => void;
}

type QuizMode = "menu" | "civilization" | "era" | "invention" | "category" | "geography" | "mixed";

interface Question {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  type: QuizMode;
}

interface AnswerRecord {
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

const QUESTION_TIME = 15;

const continentMap: Record<string, string> = {
  "ancient-egypt": "Africa", "mesopotamia": "Middle East", "indus-valley": "South Asia",
  "minoan-crete": "Europe", "ancient-greece": "Europe", "ancient-rome": "Europe",
  "ancient-china": "East Asia", "ancient-persia": "Middle East", "mesoamerica": "Central America",
  "inca-empire": "South America", "ancient-india": "South Asia", "khmer-empire": "Southeast Asia",
  "ancient-japan": "East Asia", "dutch-netherlands": "Europe", "islamic-golden-age": "Middle East",
  "venice": "Europe", "nabataean": "Middle East", "sri-lanka": "South Asia",
  "korean": "East Asia", "ancient-indonesia": "Southeast Asia", "nubia": "Africa",
  "ethiopian": "Africa", "great-zimbabwe": "Africa", "mali-timbuktu": "Africa",
  "carthage": "Africa", "hohokam": "North America", "hawaiian": "Oceania",
  "ming-dynasty": "East Asia", "han-dynasty": "East Asia", "song-dynasty": "East Asia",
  "mughal-empire": "South Asia", "delhi-sultanate": "South Asia", "medieval-india": "South Asia",
  "medieval-europe": "Europe", "al-andalus": "Europe", "byzantine": "Europe",
  "viking": "Europe", "celtic-europe": "Europe", "etruscan": "Europe",
  "phoenicia": "Middle East", "assyria": "Middle East", "sumer": "Middle East",
  "babylonia": "Middle East", "hittites": "Middle East", "canaan": "Middle East",
  "ancient-yemen": "Middle East", "oman": "Middle East", "morocco": "Africa",
  "ancestral-puebloans": "North America", "mississippian": "North America",
  "amazon-basin": "South America", "chinook": "North America", "inuit": "North America",
  "singapore": "Southeast Asia", "cambodia-khmer": "Southeast Asia", "vietnam": "Southeast Asia",
  "siam-thailand": "Southeast Asia", "burma-myanmar": "Southeast Asia", "philippines": "Southeast Asia",
  "malaysia": "Southeast Asia", "balinese": "Southeast Asia", "borneo": "Southeast Asia",
  "ottoman-empire": "Middle East", "safavid-persia": "Middle East", "ptolemaic-egypt": "Africa",
  "aksumite-empire": "Africa", "tiwanaku-empire": "South America", "chimu-empire": "South America",
  "wari-empire": "South America", "joseon-korea": "East Asia", "polynesian-voyaging": "Oceania",
  "southern-african-kingdoms": "Africa", "garamantes": "Africa", "mapuche": "South America",
  "maori-new-zealand": "Oceania", "tibetan-civilizations": "East Asia",
  "georgian-kingdom": "Middle East", "nuragic-sardinia": "Europe", "lapita-culture": "Oceania",
  "toltec-empire": "Central America", "khwarezmian-empire": "Middle East",
  "liao-jin-yuan": "East Asia", "moche-civilization": "South America",
  "yoruba-civilization": "Africa", "funan-kingdom": "Southeast Asia",
  "dubai-uae": "Middle East", "israel": "Middle East", "modern-era": "Europe",
  "tokyo-underground": "East Asia", "imperial-soviet-russia": "Europe",
  "vedic-mauryan-india": "South Asia", "xia-shang-dynasty": "East Asia",
  "zhou-qin-dynasty": "East Asia", "sui-tang-dynasty": "East Asia",
  "rajasthan-desert": "South Asia", "bengal": "South Asia", "chola-dynasty": "South Asia",
  "pre-roman-europe": "Europe", "pre-roman-iberia": "Europe", "gaul": "Europe",
  "germanic-europe": "Europe", "basque-country": "Europe", "swahili-coast": "Africa",
  "kongo-kingdom": "Africa", "sahel": "Africa", "engaruka": "Africa",
  "kanem-bornu": "Africa", "benin-kingdom": "Africa", "nan-madol": "Oceania",
  "chamorro": "Oceania", "austronesian": "Oceania", "papua-new-guinea": "Oceania",
  "aboriginal-australia": "Oceania", "mongol-steppe": "East Asia",
  "central-asia": "Middle East", "ancient-siberia": "East Asia", "lake-baikal": "East Asia", "siberian-river-peoples": "East Asia", "amur-river-peoples": "East Asia", "kamchatka-peninsula": "East Asia", "siberian-tundra-peoples": "East Asia", "modern-siberia": "East Asia",
  "urartu": "Middle East", "dilmun": "Middle East", "bactria": "Middle East",
  "majapahit": "Southeast Asia", "syria-orontes": "Middle East",
  "colombian-civilizations": "South America", "caribbean-indigenous": "Central America",
  "sudd-nilotic": "Africa", "horn-of-africa": "Africa", "san-bushmen": "Africa",
  "malta-water": "Europe", "himalayan-kingdoms": "South Asia", "canary-islands": "Europe",
  "libya-gmmr": "Africa", "china-south-north-transfer": "East Asia", "ethiopia-gerd": "Africa",
  "tierra-del-fuego": "South America", "maldives-water": "South Asia", "swiss-alps-water": "Europe",
  "kurdish-water": "Middle East", "space-water": "North America", "berber-amazigh-expanded": "Africa",
  "modern-mega-projects": "South America", "ainu-water": "East Asia", "sami-people": "Europe",
  "inupiat-north-alaska": "North America", "yupik-western-alaska": "North America",
  "aleut-unangan": "North America", "athabascan-interior": "North America",
  "tlingit-se-alaska": "North America", "haida-gwaii": "North America",
  "canadian-inuit-expanded": "North America", "greenlandic-inuit": "North America",
  "modern-arctic-engineering": "North America",
  "paleo-indian-archaic": "North America", "woodland-period": "North America",
  "eastern-woodlands": "North America", "great-plains-nations": "North America",
  "great-basin-california": "North America", "algonquin-canadian": "North America",
  "pacific-northwest-expanded": "North America", "modern-usa": "North America",
  "modern-canada": "North America",
  "fertile-crescent-agriculture": "Middle East",
  "east-asia-rice-water": "East Asia",
  "americas-corn-water": "Central America",
};

const continentOptions = ["Africa", "Middle East", "South Asia", "Europe", "East Asia", "Central America", "South America", "Southeast Asia", "Oceania", "North America"];

const eraOptions = [
  { label: "Ancient (6000-500 BCE)", id: "ancient" },
  { label: "Classical (500 BCE-500 CE)", id: "classical" },
  { label: "Medieval (500-1400 CE)", id: "medieval" },
  { label: "Modern (1400 CE-Present)", id: "modern" },
];

const categoryLabels: Record<string, string> = {
  "irrigation": "Irrigation Systems",
  "aqueduct": "Aqueducts & Channels",
  "water-lifting": "Water Lifting Devices",
  "sanitation": "Sanitation & Sewers",
  "dam": "Dams & Reservoirs",
  "water-clock": "Water Clocks",
  "fountain": "Fountains & Baths",
  "canal": "Canals",
};

const modeConfig: { id: QuizMode; title: string; description: string; icon: React.ReactNode; gradient: string }[] = [
  { id: "civilization", title: "Civilization Quiz", description: "Which civilization built the invention?", icon: <Globe size={24} className="text-white" />, gradient: "from-[var(--cerulean)] to-[var(--aqua)]" },
  { id: "era", title: "Era Quiz", description: "When was the invention created?", icon: <Calendar size={24} className="text-white" />, gradient: "from-[var(--terracotta)] to-[var(--gold)]" },
  { id: "invention", title: "Invention Quiz", description: "Identify the invention from clues", icon: <Brain size={24} className="text-white" />, gradient: "from-purple-500 to-purple-700" },
  { id: "category", title: "Category Quiz", description: "Which category does it belong to?", icon: <Droplets size={24} className="text-white" />, gradient: "from-emerald-500 to-emerald-700" },
  { id: "geography", title: "Geography Quiz", description: "Where was the civilization located?", icon: <Globe size={24} className="text-white" />, gradient: "from-blue-500 to-indigo-600" },
  { id: "mixed", title: "Mixed Challenge", description: "Random mix of all types — 20 questions!", icon: <Zap size={24} className="text-white" />, gradient: "from-red-500 to-orange-500" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getRegionForArtifact(artifact: ArtifactData): RegionData | undefined {
  return gameData.regions.find(r =>
    r.locations.some(l => l.artifacts.some(a => a.id === artifact.id))
  );
}

function generateCivilizationQuestion(artifacts: ArtifactData[]): Question {
  const artifact = artifacts[Math.floor(Math.random() * artifacts.length)];
  const correctRegion = getRegionForArtifact(artifact);
  const correctName = correctRegion?.name || "Unknown";
  const wrongNames = shuffle(
    gameData.regions.filter(r => r.id !== correctRegion?.id).map(r => r.name)
  ).slice(0, 3);
  const options = shuffle([correctName, ...wrongNames]);
  return {
    id: crypto.randomUUID(),
    question: `Which civilization built the ${artifact.name}?`,
    options,
    correctIndex: options.indexOf(correctName),
    type: "civilization",
  };
}

function generateEraQuestion(): Question {
  const region = gameData.regions[Math.floor(Math.random() * gameData.regions.length)];
  const correctEra = eraOptions.find(e => e.id === region.era) || eraOptions[0];
  const wrongEras = shuffle(eraOptions.filter(e => e.id !== correctEra.id)).slice(0, 3);
  const options = shuffle([correctEra, ...wrongEras]).map(e => e.label);
  return {
    id: crypto.randomUUID(),
    question: `When was ${region.name} at its peak?`,
    options,
    correctIndex: options.indexOf(correctEra.label),
    type: "era",
  };
}

function generateInventionQuestion(artifacts: ArtifactData[]): Question {
  const artifact = artifacts[Math.floor(Math.random() * artifacts.length)];
  const clue = artifact.significance || artifact.description;
  const wrongArtifacts = shuffle(artifacts.filter(a => a.id !== artifact.id)).slice(0, 3);
  const options = shuffle([artifact.name, ...wrongArtifacts.map(a => a.name)]);
  return {
    id: crypto.randomUUID(),
    question: `What invention is described: "${clue.length > 120 ? clue.slice(0, 117) + "..." : clue}"?`,
    options,
    correctIndex: options.indexOf(artifact.name),
    type: "invention",
  };
}

function generateCategoryQuestion(artifacts: ArtifactData[]): Question {
  const artifact = artifacts[Math.floor(Math.random() * artifacts.length)];
  const correctCat = categoryLabels[artifact.category] || artifact.category;
  const allCats = Object.values(categoryLabels);
  const wrongCats = shuffle(allCats.filter(c => c !== correctCat)).slice(0, 3);
  const options = shuffle([correctCat, ...wrongCats]);
  return {
    id: crypto.randomUUID(),
    question: `Which category does "${artifact.name}" belong to?`,
    options,
    correctIndex: options.indexOf(correctCat),
    type: "category",
  };
}

function generateGeographyQuestion(): Question {
  const region = gameData.regions[Math.floor(Math.random() * gameData.regions.length)];
  const correctContinent = continentMap[region.id] || "Unknown";
  const wrongContinents = shuffle(continentOptions.filter(c => c !== correctContinent)).slice(0, 3);
  const options = shuffle([correctContinent, ...wrongContinents]);
  return {
    id: crypto.randomUUID(),
    question: `Where was ${region.name} located?`,
    options,
    correctIndex: options.indexOf(correctContinent),
    type: "geography",
  };
}

function generateQuestions(mode: QuizMode, count: number): Question[] {
  const artifacts = getAllArtifacts();
  const questions: Question[] = [];
  const generators = {
    civilization: () => generateCivilizationQuestion(artifacts),
    era: () => generateEraQuestion(),
    invention: () => generateInventionQuestion(artifacts),
    category: () => generateCategoryQuestion(artifacts),
    geography: () => generateGeographyQuestion(),
  };

  for (let i = 0; i < count; i++) {
    if (mode === "mixed") {
      const types: (keyof typeof generators)[] = ["civilization", "era", "invention", "category", "geography"];
      const type = types[Math.floor(Math.random() * types.length)];
      questions.push(generators[type]());
    } else if (mode in generators) {
      questions.push(generators[mode as keyof typeof generators]());
    }
  }
  return questions;
}

function getGrade(percentage: number): { grade: string; color: string } {
  if (percentage >= 90) return { grade: "A", color: "text-green-400" };
  if (percentage >= 80) return { grade: "B", color: "text-blue-400" };
  if (percentage >= 70) return { grade: "C", color: "text-yellow-400" };
  if (percentage >= 60) return { grade: "D", color: "text-orange-400" };
  return { grade: "F", color: "text-red-400" };
}

export default function QuizSystem({ onClose }: QuizSystemProps) {
  const [mode, setMode] = useState<QuizMode>("menu");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const totalQuestions = mode === "mixed" ? 20 : 10;
  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (mode === "menu" || showResults || !currentQuestion) return;
    if (selectedOption !== null) return;

    if (timeLeft <= 0) {
      handleTimeout();
      return;
    }

    const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, mode, showResults, selectedOption, currentQuestion]);

  const handleTimeout = useCallback(() => {
    if (!currentQuestion) return;
    setAnswers(prev => [...prev, {
      question: currentQuestion.question,
      selectedAnswer: "Time's up!",
      correctAnswer: currentQuestion.options[currentQuestion.correctIndex],
      isCorrect: false,
    }]);
    setStreak(0);
    setSelectedOption(-1);
    setTimeout(advanceQuestion, 1500);
  }, [currentQuestion, currentIndex, questions.length]);

  const advanceQuestion = useCallback(() => {
    if (currentIndex >= questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setTimeLeft(QUESTION_TIME);
    }
  }, [currentIndex, questions.length]);

  const handleAnswer = useCallback((optionIndex: number) => {
    if (selectedOption !== null || !currentQuestion) return;
    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === currentQuestion.correctIndex;

    setAnswers(prev => [...prev, {
      question: currentQuestion.question,
      selectedAnswer: currentQuestion.options[optionIndex],
      correctAnswer: currentQuestion.options[currentQuestion.correctIndex],
      isCorrect,
    }]);

    if (isCorrect) {
      setScore(prev => prev + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) setBestStreak(newStreak);
      if (newStreak >= 3) {
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 1200);
      }
    } else {
      setStreak(0);
    }

    setTimeout(advanceQuestion, 1500);
  }, [selectedOption, currentQuestion, streak, bestStreak, advanceQuestion]);

  const startQuiz = useCallback((selectedMode: QuizMode) => {
    const count = selectedMode === "mixed" ? 20 : 10;
    setMode(selectedMode);
    setQuestions(generateQuestions(selectedMode, count));
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setSelectedOption(null);
    setTimeLeft(QUESTION_TIME);
    setAnswers([]);
    setShowResults(false);
  }, []);

  const percentage = totalQuestions > 0 ? Math.round((score / answers.length) * 100) : 0;
  const { grade, color: gradeColor } = getGrade(percentage);

  if (mode === "menu") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
        <Card className="water-card max-w-2xl w-full">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="font-heading text-2xl text-[var(--gold)] flex items-center gap-2">
                <Brain size={28} />
                Quiz & Assessment
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={onClose} className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30">
                <X size={20} />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <p className="text-[var(--parchment)]/80 mb-6">
              Test your knowledge of ancient water civilizations and their inventions!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {modeConfig.map(m => (
                <button
                  key={m.id}
                  onClick={() => startQuiz(m.id)}
                  className="p-4 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/30 hover:border-[var(--gold)]/50 transition-all hover:scale-[1.02] text-left"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${m.gradient} flex items-center justify-center shrink-0`}>
                      {m.icon}
                    </div>
                    <h3 className="font-heading text-lg text-[var(--gold)]">{m.title}</h3>
                  </div>
                  <p className="text-[var(--parchment)]/70 text-sm pl-[52px]">{m.description}</p>
                  {m.id === "mixed" && (
                    <Badge className="mt-2 ml-[52px] bg-[var(--terracotta)]/30 text-[var(--terracotta)] border-[var(--terracotta)]/50">
                      20 Questions
                    </Badge>
                  )}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showResults) {
    const correctCount = answers.filter(a => a.isCorrect).length;
    const pct = Math.round((correctCount / answers.length) * 100);
    const { grade: finalGrade, color: finalColor } = getGrade(pct);

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
        <Card className="water-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="font-heading text-2xl text-[var(--gold)] flex items-center gap-2">
                <Trophy size={28} />
                Quiz Results
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={onClose} className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30">
                <X size={20} />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="text-center mb-6">
              <div className={`text-7xl font-heading font-bold ${finalColor} mb-2`}>{finalGrade}</div>
              <div className="text-[var(--parchment)] text-xl mb-1">
                {correctCount} / {answers.length} correct ({pct}%)
              </div>
              {bestStreak > 1 && (
                <div className="flex items-center justify-center gap-1 text-[var(--gold)]">
                  <Zap size={16} /> Best streak: {bestStreak}
                </div>
              )}
            </div>

            <div className="w-full bg-[var(--deep-ocean)]/60 rounded-full h-3 mb-6">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-[var(--cerulean)] to-[var(--aqua)] transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>

            <div className="space-y-2 mb-6 max-h-60 overflow-y-auto pr-1">
              {answers.map((a, i) => (
                <div key={i} className={`flex items-start gap-2 p-2 rounded-lg text-sm ${a.isCorrect ? "bg-green-600/10" : "bg-red-600/10"}`}>
                  {a.isCorrect ? <CheckCircle size={16} className="text-green-400 shrink-0 mt-0.5" /> : <XCircle size={16} className="text-red-400 shrink-0 mt-0.5" />}
                  <div className="min-w-0">
                    <div className="text-[var(--parchment)]/90 truncate">{a.question}</div>
                    {!a.isCorrect && (
                      <div className="text-[var(--parchment)]/60 text-xs">
                        Your answer: <span className="text-red-300">{a.selectedAnswer}</span> · Correct: <span className="text-green-300">{a.correctAnswer}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 justify-center">
              <Button
                onClick={() => startQuiz(mode)}
                className="bg-gradient-to-r from-[var(--cerulean)] to-[var(--aqua)] hover:from-[var(--aqua)] hover:to-[var(--cerulean)] text-white"
              >
                <RotateCcw size={16} className="mr-2" />
                Try Again
              </Button>
              <Button
                variant="outline"
                onClick={() => setMode("menu")}
                className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
              >
                <ArrowRight size={16} className="mr-2" />
                Back to Menu
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!currentQuestion) return null;

  const progressPct = ((currentIndex) / questions.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <Card className="water-card max-w-2xl w-full relative overflow-hidden">
        {showCelebration && (
          <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
            <div className="animate-ping text-[var(--gold)] text-4xl font-heading">
              🔥 Streak x{streak}!
            </div>
          </div>
        )}

        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <CardTitle className="font-heading text-lg text-[var(--gold)]">
                {modeConfig.find(m => m.id === mode)?.title || "Quiz"}
              </CardTitle>
              <Badge className="bg-[var(--deep-ocean)] text-[var(--parchment)] border-[var(--aqua)]/30">
                Q{currentIndex + 1}/{questions.length}
              </Badge>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30">
              <X size={20} />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="pt-2">
          <div className="w-full bg-[var(--deep-ocean)]/60 rounded-full h-2 mb-4">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-[var(--cerulean)] to-[var(--aqua)] transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          <div className="flex justify-between items-center mb-4 text-sm">
            <div className="flex items-center gap-4">
              <span className="text-[var(--parchment)]/70 flex items-center gap-1">
                <Star size={14} className="text-[var(--gold)]" /> Score: <span className="text-[var(--gold)] font-bold">{score}</span>
              </span>
              {streak > 0 && (
                <span className="text-[var(--parchment)]/70 flex items-center gap-1">
                  <Zap size={14} className="text-orange-400" /> Streak: <span className="text-orange-400 font-bold">{streak}</span>
                </span>
              )}
            </div>
            <span className={`flex items-center gap-1 font-mono font-bold ${timeLeft <= 5 ? "text-red-400 animate-pulse" : "text-[var(--parchment)]/70"}`}>
              <Clock size={14} /> {timeLeft}s
            </span>
          </div>

          <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-5 border border-[var(--aqua)]/30 mb-5">
            <p className="text-[var(--parchment)] text-center text-lg leading-relaxed">
              {currentQuestion.question}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQuestion.options.map((option, i) => {
              let btnClass = "water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30";
              if (selectedOption !== null || selectedOption === -1) {
                if (i === currentQuestion.correctIndex) {
                  btnClass = "bg-green-600/30 border-green-500 text-green-300";
                } else if (i === selectedOption) {
                  btnClass = "bg-red-600/30 border-red-500 text-red-300";
                } else {
                  btnClass = "water-card text-[var(--parchment)]/50 border-[var(--aqua)]/20";
                }
              }

              return (
                <Button
                  key={i}
                  variant="outline"
                  onClick={() => handleAnswer(i)}
                  disabled={selectedOption !== null}
                  className={`p-4 h-auto text-left whitespace-normal leading-snug ${btnClass}`}
                >
                  <span className="mr-2 font-bold text-[var(--aqua)]">{String.fromCharCode(65 + i)}.</span>
                  {option}
                </Button>
              );
            })}
          </div>

          {selectedOption !== null && (
            <div className={`mt-4 p-3 rounded-lg text-center text-sm ${
              selectedOption === -1
                ? "bg-red-600/20 text-red-300"
                : selectedOption === currentQuestion.correctIndex
                ? "bg-green-600/20 text-green-300"
                : "bg-red-600/20 text-red-300"
            }`}>
              {selectedOption === -1 ? (
                <>⏰ Time's up! The answer was <strong>{currentQuestion.options[currentQuestion.correctIndex]}</strong></>
              ) : selectedOption === currentQuestion.correctIndex ? (
                <><CheckCircle size={16} className="inline mr-1" /> Correct!</>
              ) : (
                <><XCircle size={16} className="inline mr-1" /> Wrong! The answer was <strong>{currentQuestion.options[currentQuestion.correctIndex]}</strong></>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}