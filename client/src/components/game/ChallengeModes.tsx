import { useState, useMemo, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { X, Clock, MapPin, Trophy, Check, XCircle, RefreshCw, Droplets } from "lucide-react";
import { getAllArtifacts, gameData } from "../../data/gameData";

interface ChallengeModesProps {
  onClose: () => void;
}

type GameMode = "menu" | "timeline" | "geography";

export default function ChallengeModes({ onClose }: ChallengeModesProps) {
  const [mode, setMode] = useState<GameMode>("menu");
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  
  const allArtifacts = getAllArtifacts().filter(a => a.yearBCE !== undefined);
  const totalRounds = 5;

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
          </div>
        </CardContent>
      </Card>
    );
  }

  if (gameOver) {
    const percentage = Math.round((score / totalRounds) * 100);
    let message = "";
    let emoji = "";
    
    if (percentage === 100) { message = "Perfect Score!"; emoji = "🏆"; }
    else if (percentage >= 80) { message = "Excellent!"; emoji = "⭐"; }
    else if (percentage >= 60) { message = "Well Done!"; emoji = "👍"; }
    else if (percentage >= 40) { message = "Good Try!"; emoji = "📚"; }
    else { message = "Keep Learning!"; emoji = "💪"; }

    return (
      <Card className="water-card max-w-xl w-full">
        <CardContent className="p-6 text-center">
          <div className="text-6xl mb-4">{emoji}</div>
          <h2 className="font-heading text-2xl text-[var(--gold)] mb-2">{message}</h2>
          <p className="text-[var(--parchment)] text-lg mb-6">
            You scored <span className="text-[var(--gold)] font-bold">{score}</span> out of <span className="text-[var(--aqua)]">{totalRounds}</span>
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
