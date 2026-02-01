import { useState, useMemo, useEffect, useCallback } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { X, Clock, MapPin, Trophy, Check, XCircle, RefreshCw, Droplets, ArrowUpDown, Layers, Zap, Target } from "lucide-react";
import { getAllArtifacts, gameData, ArtifactData } from "../../data/gameData";

interface ChallengeModesProps {
  onClose: () => void;
}

type GameMode = "menu" | "timeline" | "geography" | "sorter" | "category" | "speedrun";

export default function ChallengeModes({ onClose }: ChallengeModesProps) {
  const [mode, setMode] = useState<GameMode>("menu");
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  
  const allArtifacts = getAllArtifacts().filter(a => a.yearBCE !== undefined);
  const totalRounds = 5;
  
  const [sorterItems, setSorterItems] = useState<ArtifactData[]>([]);
  const [sorterComplete, setSorterComplete] = useState(false);
  const [categoryQuestion, setCategoryQuestion] = useState<{artifact: ArtifactData; choices: string[]; correct: string} | null>(null);
  const [speedrunTime, setSpeedrunTime] = useState(60);
  const [speedrunActive, setSpeedrunActive] = useState(false);
  const [speedrunQuestion, setSpeedrunQuestion] = useState<{question: string; choices: {id: string; label: string}[]; correctId: string} | null>(null);

  useEffect(() => {
    if (mode === "sorter" && sorterItems.length === 0) {
      const shuffled = [...allArtifacts].sort(() => Math.random() - 0.5).slice(0, 5);
      setSorterItems(shuffled.sort(() => Math.random() - 0.5));
    }
  }, [mode]);

  useEffect(() => {
    if (mode === "category" && !categoryQuestion && !gameOver) {
      generateCategoryQuestion();
    }
  }, [mode, round, gameOver]);

  useEffect(() => {
    if (mode === "speedrun" && speedrunActive && speedrunTime > 0) {
      const timer = setTimeout(() => setSpeedrunTime(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (speedrunTime === 0 && speedrunActive) {
      setSpeedrunActive(false);
      setGameOver(true);
    }
  }, [speedrunTime, speedrunActive, mode]);

  useEffect(() => {
    if (mode === "speedrun" && speedrunActive && !speedrunQuestion) {
      generateSpeedrunQuestion();
    }
  }, [mode, speedrunActive, speedrunQuestion]);

  const generateCategoryQuestion = () => {
    const shuffled = [...allArtifacts].sort(() => Math.random() - 0.5);
    const artifact = shuffled[0];
    const categories = ["irrigation", "aqueduct", "water-lifting", "sanitation", "dam", "water-clock", "fountain", "canal"];
    const correctCategory = artifact.category;
    const wrongCategories = categories.filter(c => c !== correctCategory).sort(() => Math.random() - 0.5).slice(0, 3);
    const choices = [correctCategory, ...wrongCategories].sort(() => Math.random() - 0.5);
    
    setCategoryQuestion({
      artifact,
      choices,
      correct: correctCategory
    });
  };

  const generateSpeedrunQuestion = () => {
    const questionType = Math.random() > 0.5 ? "timeline" : "geography";
    const shuffled = [...allArtifacts].sort(() => Math.random() - 0.5);
    const artifact = shuffled[0];
    
    if (questionType === "timeline") {
      const otherArtifacts = shuffled.slice(1, 4);
      const allChoices = [artifact, ...otherArtifacts].sort(() => Math.random() - 0.5);
      setSpeedrunQuestion({
        question: `When was ${artifact.name} invented?`,
        choices: allChoices.map(a => ({
          id: a.id,
          label: a.yearBCE! > 0 ? `${a.yearBCE} BCE` : `${Math.abs(a.yearBCE!)} CE`
        })),
        correctId: artifact.id
      });
    } else {
      const correctRegion = gameData.regions.find(r => 
        r.locations.some(l => l.artifacts.some(a => a.id === artifact.id))
      );
      const otherRegions = gameData.regions.filter(r => r.id !== correctRegion?.id).sort(() => Math.random() - 0.5).slice(0, 3);
      const allChoices = [correctRegion, ...otherRegions].filter(Boolean).sort(() => Math.random() - 0.5);
      
      setSpeedrunQuestion({
        question: `Which civilization invented ${artifact.name}?`,
        choices: allChoices.map(r => ({ id: r!.id, label: r!.name })),
        correctId: correctRegion?.id || ""
      });
    }
  };

  const moveSorterItem = (index: number, direction: "up" | "down") => {
    const newItems = [...sorterItems];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];
    setSorterItems(newItems);
  };

  const checkSorterOrder = () => {
    const sorted = [...sorterItems].sort((a, b) => (b.yearBCE || 0) - (a.yearBCE || 0));
    const isCorrect = sorterItems.every((item, i) => item.id === sorted[i].id);
    if (isCorrect) {
      setScore(5);
    } else {
      let correctCount = 0;
      sorterItems.forEach((item, i) => {
        if (item.id === sorted[i].id) correctCount++;
      });
      setScore(correctCount);
    }
    setSorterComplete(true);
    setGameOver(true);
  };

  const handleCategoryAnswer = (category: string) => {
    setSelectedAnswer(category);
    const correct = category === categoryQuestion?.correct;
    setIsCorrect(correct);
    if (correct) setScore(prev => prev + 1);
    
    setTimeout(() => {
      if (round >= totalRounds - 1) {
        setGameOver(true);
      } else {
        setRound(prev => prev + 1);
        setIsCorrect(null);
        setSelectedAnswer(null);
        setCategoryQuestion(null);
      }
    }, 1500);
  };

  const handleSpeedrunAnswer = (answerId: string) => {
    const correct = answerId === speedrunQuestion?.correctId;
    if (correct) {
      setScore(prev => prev + 1);
      setSpeedrunTime(prev => Math.min(prev + 3, 60));
    }
    setSpeedrunQuestion(null);
  };

  const startSpeedrun = () => {
    setSpeedrunTime(60);
    setSpeedrunActive(true);
    setScore(0);
    setGameOver(false);
    generateSpeedrunQuestion();
  };

  const timelineQuestion = useMemo(() => {
    if (mode !== "timeline" || gameOver) return null;
    
    const shuffled = [...allArtifacts].sort(() => Math.random() - 0.5);
    const questionArtifact = shuffled[0];
    const otherArtifacts = shuffled.slice(1, 4);
    const allChoices = [questionArtifact, ...otherArtifacts].sort(() => Math.random() - 0.5);
    
    return {
      question: `When was the ${questionArtifact.name} invented?`,
      correctId: questionArtifact.id,
      correctYear: questionArtifact.yearBCE,
      choices: allChoices.map(a => ({
        id: a.id,
        label: a.yearBCE! > 0 ? `${a.yearBCE} BCE` : `${Math.abs(a.yearBCE!)} CE`
      }))
    };
  }, [mode, round, gameOver]);

  const geographyQuestion = useMemo(() => {
    if (mode !== "geography" || gameOver) return null;
    
    const shuffled = [...allArtifacts].sort(() => Math.random() - 0.5);
    const questionArtifact = shuffled[0];
    
    const correctRegion = gameData.regions.find(r => 
      r.locations.some(l => l.artifacts.some(a => a.id === questionArtifact.id))
    );
    
    const otherRegions = gameData.regions
      .filter(r => r.id !== correctRegion?.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    const allChoices = [correctRegion, ...otherRegions]
      .filter(Boolean)
      .sort(() => Math.random() - 0.5);
    
    return {
      question: `Which civilization invented the ${questionArtifact.name}?`,
      correctId: correctRegion?.id,
      artifactName: questionArtifact.name,
      choices: allChoices.map(r => ({
        id: r!.id,
        label: r!.name
      }))
    };
  }, [mode, round, gameOver]);

  const handleAnswer = (answerId: string, correctId: string | undefined) => {
    setSelectedAnswer(answerId);
    const correct = answerId === correctId;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
    
    setTimeout(() => {
      if (round >= totalRounds - 1) {
        setGameOver(true);
      } else {
        setRound(prev => prev + 1);
        setIsCorrect(null);
        setSelectedAnswer(null);
      }
    }, 1500);
  };

  const resetGame = () => {
    setScore(0);
    setRound(0);
    setIsCorrect(null);
    setGameOver(false);
    setSelectedAnswer(null);
    setSorterItems([]);
    setSorterComplete(false);
    setCategoryQuestion(null);
    setSpeedrunTime(60);
    setSpeedrunActive(false);
    setSpeedrunQuestion(null);
  };

  const getButtonStyle = (choiceId: string, correctId: string | undefined) => {
    if (selectedAnswer === null) {
      return "water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30";
    }
    if (choiceId === correctId) {
      return "bg-green-600/30 border-green-500 text-green-300";
    }
    if (choiceId === selectedAnswer && choiceId !== correctId) {
      return "bg-red-600/30 border-red-500 text-red-300";
    }
    return "water-card text-[var(--parchment)]/50 border-[var(--aqua)]/20";
  };

  if (mode === "menu") {
    return (
      <Card className="water-card max-w-xl w-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-heading text-2xl text-[var(--gold)]">
              <Trophy className="inline mr-2" size={24} />
              Challenge Modes
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
            >
              <X size={20} />
            </Button>
          </div>

          <p className="text-[var(--parchment)]/80 mb-6">
            Test your knowledge of ancient water inventions with these fun challenges!
          </p>

          <div className="space-y-4">
            <button
              onClick={() => { setMode("timeline"); resetGame(); }}
              className="w-full p-4 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/30 hover:border-[var(--gold)]/50 transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--cerulean)] to-[var(--river-blue)] flex items-center justify-center">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-[var(--gold)]">Timeline Puzzle</h3>
                  <p className="text-[var(--parchment)]/70 text-sm">
                    Guess when each invention was created
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => { setMode("geography"); resetGame(); }}
              className="w-full p-4 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/30 hover:border-[var(--gold)]/50 transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--terracotta)] to-[var(--gold)] flex items-center justify-center">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-[var(--gold)]">Geography Quest</h3>
                  <p className="text-[var(--parchment)]/70 text-sm">
                    Match inventions to their civilizations
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => { setMode("sorter"); resetGame(); }}
              className="w-full p-4 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/30 hover:border-[var(--gold)]/50 transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                  <ArrowUpDown size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-[var(--gold)]">Invention Sorter</h3>
                  <p className="text-[var(--parchment)]/70 text-sm">
                    Arrange inventions from oldest to newest
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => { setMode("category"); resetGame(); }}
              className="w-full p-4 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/30 hover:border-[var(--gold)]/50 transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                  <Layers size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-[var(--gold)]">Category Match</h3>
                  <p className="text-[var(--parchment)]/70 text-sm">
                    Match inventions to their technology type
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => { setMode("speedrun"); resetGame(); }}
              className="w-full p-4 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/30 hover:border-[var(--gold)]/50 transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  <Zap size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-[var(--gold)]">Speed Run</h3>
                  <p className="text-[var(--parchment)]/70 text-sm">
                    Answer as many questions as you can in 60 seconds
                  </p>
                </div>
              </div>
            </button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (gameOver) {
    const maxScore = mode === "speedrun" ? score : (mode === "sorter" ? 5 : totalRounds);
    const percentage = mode === "speedrun" ? 100 : Math.round((score / maxScore) * 100);
    let message = "";
    let emoji = "";
    
    if (mode === "speedrun") {
      if (score >= 20) { message = "Speed Demon!"; emoji = "🚀"; }
      else if (score >= 15) { message = "Lightning Fast!"; emoji = "⚡"; }
      else if (score >= 10) { message = "Quick Thinker!"; emoji = "🏃"; }
      else if (score >= 5) { message = "Good Speed!"; emoji = "👍"; }
      else { message = "Keep Practicing!"; emoji = "💪"; }
    } else {
      if (percentage === 100) { message = "Perfect Score!"; emoji = "🏆"; }
      else if (percentage >= 80) { message = "Excellent!"; emoji = "⭐"; }
      else if (percentage >= 60) { message = "Well Done!"; emoji = "👍"; }
      else if (percentage >= 40) { message = "Good Try!"; emoji = "📚"; }
      else { message = "Keep Learning!"; emoji = "💪"; }
    }

    return (
      <Card className="water-card max-w-xl w-full">
        <CardContent className="p-6 text-center">
          <div className="text-6xl mb-4">{emoji}</div>
          <h2 className="font-heading text-2xl text-[var(--gold)] mb-2">{message}</h2>
          <p className="text-[var(--parchment)] text-lg mb-6">
            {mode === "speedrun" ? (
              <>You answered <span className="text-[var(--gold)] font-bold">{score}</span> questions correctly!</>
            ) : (
              <>You scored <span className="text-[var(--gold)] font-bold">{score}</span> out of <span className="text-[var(--aqua)]">{maxScore}</span></>
            )}
          </p>
          
          <div className="flex gap-3 justify-center">
            <Button
              onClick={resetGame}
              className="bg-gradient-to-r from-[var(--cerulean)] to-[var(--river-blue)] hover:from-[var(--aqua)] hover:to-[var(--cerulean)] text-white"
            >
              <RefreshCw size={16} className="mr-2" />
              Play Again
            </Button>
            <Button
              variant="outline"
              onClick={() => setMode("menu")}
              className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
            >
              Back to Menu
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (mode === "sorter") {
    return (
      <Card className="water-card max-w-xl w-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <ArrowUpDown className="text-purple-400" size={24} />
              <h2 className="font-heading text-xl text-[var(--gold)]">Invention Sorter</h2>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setMode("menu")} className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30">
              <X size={20} />
            </Button>
          </div>

          <p className="text-[var(--parchment)]/80 mb-4 text-center">
            Arrange these inventions from <span className="text-[var(--gold)]">oldest</span> to <span className="text-[var(--aqua)]">newest</span>
          </p>

          <div className="space-y-2 mb-6">
            {sorterItems.map((item, index) => (
              <div key={item.id} className="flex items-center gap-2 p-3 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/30">
                <span className="text-[var(--gold)] font-bold w-6">{index + 1}.</span>
                <span className="flex-1 text-[var(--parchment)]">{item.name}</span>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => moveSorterItem(index, "up")}
                    disabled={index === 0}
                    className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 p-1 h-8 w-8"
                  >
                    ↑
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => moveSorterItem(index, "down")}
                    disabled={index === sorterItems.length - 1}
                    className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 p-1 h-8 w-8"
                  >
                    ↓
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={checkSorterOrder}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-400 hover:to-purple-600 text-white"
          >
            <Check size={16} className="mr-2" />
            Check My Order
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (mode === "category" && categoryQuestion) {
    const categoryLabels: Record<string, string> = {
      "irrigation": "Irrigation Systems",
      "aqueduct": "Aqueducts & Channels",
      "water-lifting": "Water Lifting Devices",
      "sanitation": "Sanitation & Sewers",
      "dam": "Dams & Reservoirs",
      "water-clock": "Water Clocks",
      "fountain": "Fountains & Baths",
      "canal": "Canals"
    };

    return (
      <Card className="water-card max-w-xl w-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <Layers className="text-emerald-400" size={24} />
              <h2 className="font-heading text-xl text-[var(--gold)]">Category Match</h2>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setMode("menu")} className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30">
              <X size={20} />
            </Button>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="text-[var(--parchment)]/70">Round <span className="text-[var(--aqua)]">{round + 1}</span> of {totalRounds}</div>
            <div className="text-[var(--parchment)]/70">Score: <span className="text-[var(--gold)]">{score}</span></div>
          </div>

          <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/30 mb-6">
            <p className="text-[var(--parchment)] text-center">
              What category is <span className="text-[var(--gold)] font-bold">{categoryQuestion.artifact.name}</span>?
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {categoryQuestion.choices.map(choice => (
              <Button
                key={choice}
                variant="outline"
                onClick={() => selectedAnswer === null && handleCategoryAnswer(choice)}
                disabled={selectedAnswer !== null}
                className={`p-4 h-auto ${
                  selectedAnswer === null
                    ? "water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                    : choice === categoryQuestion.correct
                    ? "bg-green-600/30 border-green-500 text-green-300"
                    : selectedAnswer === choice
                    ? "bg-red-600/30 border-red-500 text-red-300"
                    : "water-card text-[var(--parchment)]/50 border-[var(--aqua)]/20"
                }`}
              >
                {categoryLabels[choice] || choice}
              </Button>
            ))}
          </div>

          {isCorrect !== null && (
            <div className={`mt-4 p-3 rounded-lg text-center ${isCorrect ? "bg-green-600/20 text-green-300" : "bg-red-600/20 text-red-300"}`}>
              {isCorrect ? "Correct!" : `It's ${categoryLabels[categoryQuestion.correct]}`}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  if (mode === "speedrun") {
    if (!speedrunActive) {
      return (
        <Card className="water-card max-w-xl w-full">
          <CardContent className="p-6 text-center">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <Zap className="text-orange-400" size={24} />
                <h2 className="font-heading text-xl text-[var(--gold)]">Speed Run</h2>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setMode("menu")} className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30">
                <X size={20} />
              </Button>
            </div>

            <div className="text-6xl mb-4">⚡</div>
            <h3 className="font-heading text-xl text-[var(--gold)] mb-4">Ready to Race?</h3>
            <p className="text-[var(--parchment)]/80 mb-6">
              Answer as many questions as possible in 60 seconds!<br />
              Correct answers add +3 seconds.
            </p>

            <Button
              onClick={startSpeedrun}
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 text-white text-lg px-8 py-3"
            >
              <Zap size={20} className="mr-2" />
              Start!
            </Button>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card className="water-card max-w-xl w-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <Zap className="text-orange-400" size={24} />
              <h2 className="font-heading text-xl text-[var(--gold)]">Speed Run</h2>
            </div>
            <div className={`text-2xl font-bold ${speedrunTime <= 10 ? "text-red-400 animate-pulse" : "text-[var(--gold)]"}`}>
              {speedrunTime}s
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="text-[var(--parchment)]/70">Score: <span className="text-[var(--gold)] text-xl font-bold">{score}</span></div>
          </div>

          <div className="mb-2 h-2 bg-[var(--deep-ocean)]/60 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ${speedrunTime <= 10 ? "bg-red-500" : "bg-gradient-to-r from-orange-500 to-yellow-500"}`}
              style={{ width: `${(speedrunTime / 60) * 100}%` }}
            />
          </div>

          {speedrunQuestion && (
            <>
              <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/30 mb-4 mt-4">
                <p className="text-[var(--parchment)] text-center font-medium">{speedrunQuestion.question}</p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {speedrunQuestion.choices.map(choice => (
                  <Button
                    key={choice.id}
                    variant="outline"
                    onClick={() => handleSpeedrunAnswer(choice.id)}
                    className="p-3 h-auto water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
                  >
                    {choice.label}
                  </Button>
                ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    );
  }

  const currentQuestion = mode === "timeline" ? timelineQuestion : geographyQuestion;

  return (
    <Card className="water-card max-w-xl w-full">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            {mode === "timeline" ? (
              <Clock className="text-[var(--cerulean)]" size={24} />
            ) : (
              <MapPin className="text-[var(--terracotta)]" size={24} />
            )}
            <h2 className="font-heading text-xl text-[var(--gold)]">
              {mode === "timeline" ? "Timeline Puzzle" : "Geography Quest"}
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMode("menu")}
            className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
          >
            <X size={20} />
          </Button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="text-[var(--parchment)]/70">
            Round <span className="text-[var(--aqua)]">{round + 1}</span> of {totalRounds}
          </div>
          <div className="text-[var(--parchment)]/70">
            Score: <span className="text-[var(--gold)]">{score}</span>
          </div>
        </div>

        <div className="mb-2 h-2 bg-[var(--deep-ocean)]/60 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[var(--cerulean)] to-[var(--gold)] transition-all duration-300"
            style={{ width: `${((round + 1) / totalRounds) * 100}%` }}
          />
        </div>

        {currentQuestion && (
          <>
            <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-4 border border-[var(--aqua)]/30 mb-6 mt-4">
              <div className="flex items-center gap-3 mb-2">
                <Droplets className="text-[var(--aqua)]" size={20} />
                <p className="text-[var(--parchment)] font-medium">
                  {currentQuestion.question}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {currentQuestion.choices.map(choice => (
                <Button
                  key={choice.id}
                  variant="outline"
                  onClick={() => selectedAnswer === null && handleAnswer(choice.id, currentQuestion.correctId)}
                  disabled={selectedAnswer !== null}
                  className={`p-4 h-auto text-left ${getButtonStyle(choice.id, currentQuestion.correctId)}`}
                >
                  <span className="flex items-center gap-2">
                    {selectedAnswer && choice.id === currentQuestion.correctId && (
                      <Check size={16} className="text-green-400" />
                    )}
                    {selectedAnswer === choice.id && choice.id !== currentQuestion.correctId && (
                      <XCircle size={16} className="text-red-400" />
                    )}
                    {choice.label}
                  </span>
                </Button>
              ))}
            </div>

            {isCorrect !== null && (
              <div className={`mt-4 p-3 rounded-lg text-center ${
                isCorrect ? "bg-green-600/20 text-green-300" : "bg-red-600/20 text-red-300"
              }`}>
                {isCorrect ? "Correct! Well done!" : "Not quite. Keep learning!"}
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
