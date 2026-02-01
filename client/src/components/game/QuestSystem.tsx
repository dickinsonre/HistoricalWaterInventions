import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { X, Scroll, ChevronRight, CheckCircle, Circle, Star, MapPin, Droplets, Clock, Award } from "lucide-react";

interface QuestSystemProps {
  onClose: () => void;
  onNavigateToCivilization?: (id: string) => void;
}

interface QuestChoice {
  id: string;
  text: string;
  nextNodeId: string;
  requirement?: { type: "visit" | "discover" | "compare"; target: string };
  reward?: { xp: number; badge?: string };
}

interface QuestNode {
  id: string;
  type: "narrative" | "choice" | "task" | "ending";
  title: string;
  content: string;
  speaker?: string;
  speakerRole?: string;
  choices?: QuestChoice[];
  task?: { type: "visit" | "discover" | "compare"; target: string; description: string };
  nextNodeId?: string;
}

interface Quest {
  id: string;
  title: string;
  description: string;
  category: "exploration" | "mystery" | "engineering" | "cultural";
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  startingNode: string;
  nodes: Record<string, QuestNode>;
  rewards: { xp: number; badges: string[]; unlocks: string[] };
}

const QUESTS: Quest[] = [
  {
    id: "waters-of-empire",
    title: "Waters of Empire",
    description: "Trace how water engineering enabled the rise and fall of ancient empires. Discover the hidden connections between hydraulic innovation and political power.",
    category: "mystery",
    difficulty: "intermediate",
    estimatedTime: "15-20 min",
    startingNode: "intro",
    rewards: { xp: 500, badges: ["Empire Scholar"], unlocks: ["secret-aqueduct-comparison"] },
    nodes: {
      "intro": {
        id: "intro",
        type: "narrative",
        title: "The Engineer's Journal",
        content: "You've discovered an ancient journal belonging to a traveling engineer who served multiple empires. His notes reveal a startling pattern: every great civilization rose with water mastery... and fell when their systems failed.",
        speaker: "Marcus Aquilius",
        speakerRole: "Roman-Persian Engineer, 3rd Century CE",
        nextNodeId: "first-choice"
      },
      "first-choice": {
        id: "first-choice",
        type: "choice",
        title: "Choose Your Path",
        content: "The journal mentions three great water civilizations. Which mystery do you wish to unravel first?",
        choices: [
          { id: "rome", text: "The Roman Aqueducts - How did they supply a million people?", nextNodeId: "rome-intro", reward: { xp: 50 } },
          { id: "persia", text: "Persian Qanats - Underground rivers that defied the desert", nextNodeId: "persia-intro", reward: { xp: 50 } },
          { id: "angkor", text: "Angkor's Barays - Reservoirs larger than modern cities", nextNodeId: "angkor-intro", reward: { xp: 50 } }
        ]
      },
      "rome-intro": {
        id: "rome-intro",
        type: "narrative",
        title: "The Eternal City's Thirst",
        content: "Rome, at its peak, consumed 1 million cubic meters of water daily - more than modern Los Angeles. The engineer writes: 'I have walked the eleven great aqueducts. Each is a river suspended in stone, defying mountains and valleys alike.'",
        speaker: "Marcus Aquilius",
        speakerRole: "Roman-Persian Engineer",
        nextNodeId: "rome-task"
      },
      "rome-task": {
        id: "rome-task",
        type: "task",
        title: "Explore Roman Engineering",
        content: "Visit the Roman Empire civilization to discover how their aqueducts worked. Pay special attention to the gradient engineering.",
        task: { type: "visit", target: "ancient-rome", description: "Explore Roman water innovations" },
        nextNodeId: "rome-revelation"
      },
      "rome-revelation": {
        id: "rome-revelation",
        type: "narrative",
        title: "The Hidden Truth",
        content: "You discover something remarkable: Roman aqueducts used gravity alone, falling just 34 centimeters per kilometer. But the journal reveals a darker truth: 'When the Visigoths cut the aqueducts in 537 CE, Rome's population dropped from 1 million to 30,000 in decades. Water was Rome's true foundation.'",
        speaker: "Marcus Aquilius",
        speakerRole: "Roman-Persian Engineer",
        nextNodeId: "compare-choice"
      },
      "persia-intro": {
        id: "persia-intro",
        type: "narrative",
        title: "Rivers Beneath the Sand",
        content: "The Persian Empire stretched across deserts where surface water meant death by evaporation. The engineer marvels: 'The Persians built rivers underground - qanats stretching 70 kilometers, dug by men who worked in total darkness.'",
        speaker: "Marcus Aquilius",
        speakerRole: "Roman-Persian Engineer",
        nextNodeId: "persia-task"
      },
      "persia-task": {
        id: "persia-task",
        type: "task",
        title: "Discover the Qanat System",
        content: "Explore Ancient Persia to understand the qanat technology. These underground channels are still used today.",
        task: { type: "visit", target: "ancient-persia", description: "Study Persian qanat engineering" },
        nextNodeId: "persia-revelation"
      },
      "persia-revelation": {
        id: "persia-revelation",
        type: "narrative",
        title: "The Underground Empire",
        content: "The qanats reveal their secret: they tap mountain aquifers and carry water underground for dozens of kilometers without pumps or energy. 'Persia's empire was built not on conquest alone,' the journal reads, 'but on water that flowed unseen beneath the empire's feet. 3,000 years later, these same qanats still flow.'",
        speaker: "Marcus Aquilius",
        speakerRole: "Roman-Persian Engineer",
        nextNodeId: "compare-choice"
      },
      "angkor-intro": {
        id: "angkor-intro",
        type: "narrative",
        title: "The Hydraulic City",
        content: "Angkor was the largest city on Earth in the 12th century. The engineer describes: 'I have seen nothing like it - reservoirs that could hold entire seas, channels that turn a jungle into a garden. They harvest the monsoon itself.'",
        speaker: "Marcus Aquilius",
        speakerRole: "Roman-Persian Engineer",
        nextNodeId: "angkor-task"
      },
      "angkor-task": {
        id: "angkor-task",
        type: "task",
        title: "Explore Angkor's Water System",
        content: "Visit the Khmer Empire to discover their massive baray reservoirs and irrigation networks.",
        task: { type: "visit", target: "khmer-empire", description: "Explore Angkor's hydraulic engineering" },
        nextNodeId: "angkor-revelation"
      },
      "angkor-revelation": {
        id: "angkor-revelation",
        type: "narrative",
        title: "Rise and Fall",
        content: "The West Baray alone held 53 million cubic meters of water. But the journal's final Angkor entry is haunting: 'The system grew too complex. When the monsoons shifted in the 14th century, the channels silted, the reservoirs breached. The greatest hydraulic city ever built was abandoned to the jungle.'",
        speaker: "Marcus Aquilius",
        speakerRole: "Roman-Persian Engineer",
        nextNodeId: "compare-choice"
      },
      "compare-choice": {
        id: "compare-choice",
        type: "choice",
        title: "The Pattern Emerges",
        content: "You begin to see the pattern the engineer discovered. What connection do you want to explore?",
        choices: [
          { id: "engineering", text: "Compare the engineering approaches", nextNodeId: "engineering-insight", reward: { xp: 100 } },
          { id: "failure", text: "Why did these systems fail?", nextNodeId: "failure-insight", reward: { xp: 100 } },
          { id: "modern", text: "What can we learn for today?", nextNodeId: "modern-insight", reward: { xp: 100 } }
        ]
      },
      "engineering-insight": {
        id: "engineering-insight",
        type: "narrative",
        title: "Three Philosophies of Water",
        content: "The journal's final pages reveal the engineer's grand insight: 'Rome conquered water with stone and force. Persia worked with the earth, hiding water from the sun. Angkor embraced the monsoon's chaos and made it order. Each approach reflected their civilization's soul.'",
        speaker: "Marcus Aquilius",
        speakerRole: "Roman-Persian Engineer",
        nextNodeId: "final-choice"
      },
      "failure-insight": {
        id: "failure-insight",
        type: "narrative",
        title: "The Fragility of Greatness",
        content: "'Every empire's water system contained the seeds of its own destruction,' the engineer concludes. 'Rome's aqueducts could be cut. Persia's qanats required generations of maintenance knowledge. Angkor's complexity could not adapt to climate change. Water gave them power - and water took it away.'",
        speaker: "Marcus Aquilius",
        speakerRole: "Roman-Persian Engineer",
        nextNodeId: "final-choice"
      },
      "modern-insight": {
        id: "modern-insight",
        type: "narrative",
        title: "Echoes in Our Time",
        content: "The journal's margin contains a note in different handwriting, dated 2024: 'I am an engineer who found this journal in an Iranian village. The same patterns play out today. California's aqueducts mirror Rome. Yemen's qanats are drying. We have learned little. But we could learn everything.'",
        speaker: "Dr. Sarah Chen",
        speakerRole: "Modern Hydraulic Engineer",
        nextNodeId: "final-choice"
      },
      "final-choice": {
        id: "final-choice",
        type: "choice",
        title: "Your Conclusion",
        content: "You've traced the waters of empire. What truth will you carry forward?",
        choices: [
          { id: "resilience", text: "Resilience matters more than scale", nextNodeId: "ending-resilience", reward: { xp: 150, badge: "Water Philosopher" } },
          { id: "adaptation", text: "Adaptation is the key to survival", nextNodeId: "ending-adaptation", reward: { xp: 150, badge: "Climate Thinker" } },
          { id: "community", text: "Community knowledge must be preserved", nextNodeId: "ending-community", reward: { xp: 150, badge: "Heritage Guardian" } }
        ]
      },
      "ending-resilience": {
        id: "ending-resilience",
        type: "ending",
        title: "The Lesson of Resilience",
        content: "You've discovered that the grandest systems were often the most fragile. The Persian qanats, simple and maintainable, outlasted Rome's monuments by millennia. In water engineering, humility often triumphs over ambition.",
        speaker: "Quest Complete",
        speakerRole: "Empire Scholar Badge Earned"
      },
      "ending-adaptation": {
        id: "ending-adaptation",
        type: "ending",
        title: "The Lesson of Adaptation",
        content: "You've learned that climate change has always been humanity's greatest challenge. Angkor fell not to armies but to shifting monsoons. The civilizations that survive are those that build flexibility into their systems.",
        speaker: "Quest Complete",
        speakerRole: "Empire Scholar Badge Earned"
      },
      "ending-community": {
        id: "ending-community",
        type: "ending",
        title: "The Lesson of Knowledge",
        content: "You've recognized that technology without transmission dies. The qanat builders passed their knowledge for 3,000 years. When that chain breaks, the water stops. Every ancient system was maintained by communities who remembered.",
        speaker: "Quest Complete",
        speakerRole: "Empire Scholar Badge Earned"
      }
    }
  },
  {
    id: "stepwell-mystery",
    title: "The Stepwell Architect's Secret",
    description: "A legendary architect hid a mathematical secret in India's stepwells. Follow the clues through Gujarat's underground temples to discover it.",
    category: "mystery",
    difficulty: "advanced",
    estimatedTime: "20-25 min",
    startingNode: "intro",
    rewards: { xp: 750, badges: ["Stepwell Detective", "Sacred Geometry Master"], unlocks: ["hidden-stepwell-diagram"] },
    nodes: {
      "intro": {
        id: "intro",
        type: "narrative",
        title: "The Architect's Letter",
        content: "In 1018 CE, master architect Vishwakarma wrote a letter to his grandson: 'I have hidden the secret of perfect water within seven stepwells. Each reveals one part of the whole. When you understand all seven, you will know what the gods know about water.'",
        speaker: "Vishwakarma",
        speakerRole: "Master Architect, Solanki Dynasty",
        nextNodeId: "first-clue"
      },
      "first-clue": {
        id: "first-clue",
        type: "choice",
        title: "The First Clue",
        content: "The letter mentions three starting points. Which stepwell do you investigate first?",
        choices: [
          { id: "rani", text: "Rani ki Vav - The Queen's masterpiece in Patan", nextNodeId: "rani-explore", reward: { xp: 75 } },
          { id: "adalaj", text: "Adalaj Vav - The five-story wonder near Ahmedabad", nextNodeId: "adalaj-explore", reward: { xp: 75 } },
          { id: "dada", text: "Dada Harir - The geometric puzzle in Ahmedabad", nextNodeId: "dada-explore", reward: { xp: 75 } }
        ]
      },
      "rani-explore": {
        id: "rani-explore",
        type: "narrative",
        title: "The Queen's Secret",
        content: "At Rani ki Vav, you count the steps: 500. The sculptures: 800. The levels: 7. Then you notice something strange - the proportions of each level follow the same ratio. The stepwell is built on sacred geometry, each level exactly 1.618 times the one below.",
        speaker: "Guide",
        speakerRole: "Local Historian",
        nextNodeId: "rani-revelation"
      },
      "rani-revelation": {
        id: "rani-revelation",
        type: "narrative",
        title: "The Golden Ratio",
        content: "You've discovered the first secret: Rani ki Vav uses the golden ratio (phi = 1.618) in its proportions. This isn't decoration - it's engineering. The golden ratio creates maximum stability with minimum material. The architect was using mathematics the West wouldn't formalize for 500 years.",
        speaker: "Discovery",
        speakerRole: "First Secret Found",
        nextNodeId: "second-choice"
      },
      "adalaj-explore": {
        id: "adalaj-explore",
        type: "narrative",
        title: "Five Stories Down",
        content: "Adalaj Vav has a unique feature: three entrance stairs converging on a single platform. As you descend, you notice the temperature drops exactly 1 degree Celsius per level. At the bottom, it's 6 degrees cooler than the surface.",
        speaker: "Guide",
        speakerRole: "Local Historian",
        nextNodeId: "adalaj-revelation"
      },
      "adalaj-revelation": {
        id: "adalaj-revelation",
        type: "narrative",
        title: "Passive Cooling Perfected",
        content: "The second secret: stepwells are precision-engineered cooling systems. The architects calculated exactly how deep to go for desired temperatures. The multiple entrances create convection currents, pulling cool air up. This is passive air conditioning, perfected 600 years ago.",
        speaker: "Discovery",
        speakerRole: "Second Secret Found",
        nextNodeId: "second-choice"
      },
      "dada-explore": {
        id: "dada-explore",
        type: "narrative",
        title: "The Islamic Adaptation",
        content: "Dada Harir Vav was built by a Muslim noblewoman in 1499, blending Hindu and Islamic design. The geometric patterns seem purely decorative - until you notice they're arranged in a specific sequence that follows the water table's annual cycle.",
        speaker: "Guide",
        speakerRole: "Local Historian",
        nextNodeId: "dada-revelation"
      },
      "dada-revelation": {
        id: "dada-revelation",
        type: "narrative",
        title: "The Water Calendar",
        content: "The third secret: the geometric patterns encode the groundwater cycle. The architect built a calendar into the walls - telling future generations exactly when water levels would rise and fall. This knowledge was hidden in plain sight, readable only to those who understood.",
        speaker: "Discovery",
        speakerRole: "Third Secret Found",
        nextNodeId: "second-choice"
      },
      "second-choice": {
        id: "second-choice",
        type: "choice",
        title: "Deeper Understanding",
        content: "You've found one secret. The architect's letter hints at a unifying principle. What do you investigate next?",
        choices: [
          { id: "sacred", text: "The sacred geometry connection", nextNodeId: "sacred-geometry", reward: { xp: 100 } },
          { id: "water", text: "The water table relationship", nextNodeId: "water-connection", reward: { xp: 100 } },
          { id: "social", text: "The social engineering aspect", nextNodeId: "social-engineering", reward: { xp: 100 } }
        ]
      },
      "sacred-geometry": {
        id: "sacred-geometry",
        type: "narrative",
        title: "Mathematics as Meditation",
        content: "Every stepwell encodes the same mathematical principles: golden ratio, Fibonacci spirals, and precise astronomical alignments. The descent into a stepwell mirrors the spiritual descent into the self. 'Water is the soul of the earth,' the architect wrote. 'To reach it, you must go within.'",
        speaker: "Vishwakarma",
        speakerRole: "Master Architect",
        nextNodeId: "final-revelation"
      },
      "water-connection": {
        id: "water-connection",
        type: "narrative",
        title: "Reading the Underground",
        content: "The stepwells aren't placed randomly - they're positioned along underground aquifer channels. The architects could read the landscape to find water, then calculated exact depths. Each stepwell is a scientific instrument for measuring and accessing groundwater.",
        speaker: "Vishwakarma",
        speakerRole: "Master Architect",
        nextNodeId: "final-revelation"
      },
      "social-engineering": {
        id: "social-engineering",
        type: "narrative",
        title: "Architecture as Democracy",
        content: "Stepwells were revolutionary social spaces. At every level, different castes could gather. Water was the great equalizer - everyone needed it. The architects designed spaces where social barriers dissolved. 'At water's edge,' the architect wrote, 'all are equal.'",
        speaker: "Vishwakarma",
        speakerRole: "Master Architect",
        nextNodeId: "final-revelation"
      },
      "final-revelation": {
        id: "final-revelation",
        type: "narrative",
        title: "The Complete Secret",
        content: "You finally understand: the architect's secret wasn't one thing - it was the unity of many. Science, spirituality, and social justice built into stone. The perfect water system serves the body, the soul, and the community equally. This is the wisdom the stepwell architects encoded for those who would truly see.",
        speaker: "Vishwakarma",
        speakerRole: "Master Architect",
        nextNodeId: "ending"
      },
      "ending": {
        id: "ending",
        type: "ending",
        title: "The Architect's Legacy",
        content: "You've unlocked the stepwell architect's secret: true water engineering serves body, mind, and society as one. You've earned the Stepwell Detective badge and unlocked hidden stepwell diagrams showing the sacred geometry principles.",
        speaker: "Quest Complete",
        speakerRole: "Stepwell Detective Badge Earned"
      }
    }
  },
  {
    id: "climate-detective",
    title: "Climate Detective",
    description: "Investigate how ancient civilizations adapted to climate change. Your findings might hold keys to modern challenges.",
    category: "engineering",
    difficulty: "beginner",
    estimatedTime: "10-15 min",
    startingNode: "intro",
    rewards: { xp: 300, badges: ["Climate Detective"], unlocks: ["climate-comparison-tool"] },
    nodes: {
      "intro": {
        id: "intro",
        type: "narrative",
        title: "A Modern Crisis, Ancient Solutions",
        content: "Climate change isn't new - civilizations have faced it for millennia. A team of modern engineers is studying how ancient peoples adapted. They need your help connecting the dots.",
        speaker: "Dr. Maria Santos",
        speakerRole: "Climate Adaptation Researcher",
        nextNodeId: "first-case"
      },
      "first-case": {
        id: "first-case",
        type: "choice",
        title: "Choose Your Case Study",
        content: "Which climate challenge do you want to investigate?",
        choices: [
          { id: "drought", text: "Extreme drought - How did desert civilizations survive?", nextNodeId: "drought-case", reward: { xp: 50 } },
          { id: "flood", text: "Devastating floods - How did river civilizations adapt?", nextNodeId: "flood-case", reward: { xp: 50 } },
          { id: "monsoon", text: "Monsoon shifts - How did tropical empires respond?", nextNodeId: "monsoon-case", reward: { xp: 50 } }
        ]
      },
      "drought-case": {
        id: "drought-case",
        type: "narrative",
        title: "Surviving in the Desert",
        content: "The Nabataeans built Petra in one of Earth's driest regions. They captured every drop of rare rainfall, storing it in underground cisterns. Their system was so effective that Petra supported 30,000 people in a place that receives only 15cm of rain per year.",
        speaker: "Dr. Maria Santos",
        speakerRole: "Climate Adaptation Researcher",
        nextNodeId: "drought-lesson"
      },
      "drought-lesson": {
        id: "drought-lesson",
        type: "narrative",
        title: "The Drought Lesson",
        content: "The Nabataean secret: extreme efficiency. They lost almost nothing to evaporation by storing water underground. Modern cities like Las Vegas are now studying their techniques. Sometimes the oldest solutions are the most advanced.",
        speaker: "Discovery",
        speakerRole: "Climate Insight",
        nextNodeId: "conclusion"
      },
      "flood-case": {
        id: "flood-case",
        type: "narrative",
        title: "Living with Floods",
        content: "The ancient Chinese didn't try to stop floods - they worked with them. The Dujiangyan irrigation system, built in 256 BCE, uses the river's own force to divert water without a single dam. It still works today, irrigating 5 million hectares.",
        speaker: "Dr. Maria Santos",
        speakerRole: "Climate Adaptation Researcher",
        nextNodeId: "flood-lesson"
      },
      "flood-lesson": {
        id: "flood-lesson",
        type: "narrative",
        title: "The Flood Lesson",
        content: "The Chinese secret: work with nature, not against it. Instead of fighting rivers, they channeled their energy. Modern 'sponge city' initiatives use the same philosophy - absorbing and redirecting water rather than blocking it.",
        speaker: "Discovery",
        speakerRole: "Climate Insight",
        nextNodeId: "conclusion"
      },
      "monsoon-case": {
        id: "monsoon-case",
        type: "narrative",
        title: "Harnessing the Monsoon",
        content: "Sri Lanka developed the 'cascade tank' system: thousands of interconnected reservoirs that capture monsoon rains and release them slowly over the dry season. The Parakrama Samudra reservoir, built in 1153 CE, still irrigates 18,000 hectares.",
        speaker: "Dr. Maria Santos",
        speakerRole: "Climate Adaptation Researcher",
        nextNodeId: "monsoon-lesson"
      },
      "monsoon-lesson": {
        id: "monsoon-lesson",
        type: "narrative",
        title: "The Monsoon Lesson",
        content: "The Sri Lankan secret: distributed storage. Instead of one massive dam, they built thousands of small reservoirs. If one fails, others compensate. Modern water planners call this 'resilience through redundancy.'",
        speaker: "Discovery",
        speakerRole: "Climate Insight",
        nextNodeId: "conclusion"
      },
      "conclusion": {
        id: "conclusion",
        type: "ending",
        title: "Ancient Wisdom for Modern Times",
        content: "You've discovered that ancient civilizations weren't just surviving climate challenges - they were innovating solutions we're only now rediscovering. The past holds blueprints for our future. You've earned the Climate Detective badge.",
        speaker: "Quest Complete",
        speakerRole: "Climate Detective Badge Earned"
      }
    }
  }
];

export default function QuestSystem({ onClose, onNavigateToCivilization }: QuestSystemProps) {
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  const [currentNodeId, setCurrentNodeId] = useState<string | null>(null);
  const [questProgress, setQuestProgress] = useState<Record<string, { completed: boolean; currentNode: string; xpEarned: number; badgesEarned: string[] }>>({});
  const [totalXP, setTotalXP] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("questProgress");
    if (saved) {
      const parsed = JSON.parse(saved);
      setQuestProgress(parsed.progress || {});
      setTotalXP(parsed.totalXP || 0);
    }
  }, []);

  const saveProgress = (progress: typeof questProgress, xp: number) => {
    localStorage.setItem("questProgress", JSON.stringify({ progress, totalXP: xp }));
  };

  const startQuest = (quest: Quest) => {
    setSelectedQuest(quest);
    setCurrentNodeId(quest.startingNode);
  };

  const handleChoice = (choice: QuestChoice) => {
    if (choice.reward) {
      setTotalXP(prev => {
        const newXP = prev + choice.reward!.xp;
        saveProgress(questProgress, newXP);
        return newXP;
      });
    }
    setCurrentNodeId(choice.nextNodeId);
  };

  const handleContinue = (nextNodeId: string) => {
    setCurrentNodeId(nextNodeId);
  };

  const handleTaskComplete = (node: QuestNode) => {
    if (node.nextNodeId) {
      setCurrentNodeId(node.nextNodeId);
    }
    if (node.task?.type === "visit" && onNavigateToCivilization) {
      onNavigateToCivilization(node.task.target);
    }
  };

  const completeQuest = (quest: Quest) => {
    const newProgress = {
      ...questProgress,
      [quest.id]: {
        completed: true,
        currentNode: "complete",
        xpEarned: quest.rewards.xp,
        badgesEarned: quest.rewards.badges
      }
    };
    const newXP = totalXP + quest.rewards.xp;
    setQuestProgress(newProgress);
    setTotalXP(newXP);
    saveProgress(newProgress, newXP);
    setSelectedQuest(null);
    setCurrentNodeId(null);
  };

  const currentNode = selectedQuest && currentNodeId ? selectedQuest.nodes[currentNodeId] : null;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "exploration": return "bg-green-500/20 text-green-300";
      case "mystery": return "bg-purple-500/20 text-purple-300";
      case "engineering": return "bg-blue-500/20 text-blue-300";
      case "cultural": return "bg-amber-500/20 text-amber-300";
      default: return "bg-gray-500/20 text-gray-300";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-green-500/20 text-green-300";
      case "intermediate": return "bg-yellow-500/20 text-yellow-300";
      case "advanced": return "bg-red-500/20 text-red-300";
      default: return "bg-gray-500/20 text-gray-300";
    }
  };

  if (selectedQuest && currentNode) {
    return (
      <Card className="w-full max-w-2xl max-h-[85vh] water-card overflow-hidden">
        <CardHeader className="border-b border-[var(--aqua)]/20">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="font-heading text-[var(--gold)] text-xl flex items-center gap-2">
                <Scroll className="w-5 h-5" />
                {selectedQuest.title}
              </CardTitle>
              <p className="text-[var(--parchment)]/60 text-sm mt-1">{currentNode.title}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => { setSelectedQuest(null); setCurrentNodeId(null); }}>
              <X size={18} />
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-2 text-sm">
            <span className="text-[var(--gold)]">XP: {totalXP}</span>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <ScrollArea className="h-[50vh]">
            {currentNode.speaker && (
              <div className="mb-4 p-3 bg-[var(--deep-ocean)]/50 rounded-lg border border-[var(--aqua)]/20">
                <p className="text-[var(--gold)] font-heading text-sm">{currentNode.speaker}</p>
                <p className="text-[var(--parchment)]/60 text-xs">{currentNode.speakerRole}</p>
              </div>
            )}
            
            <p className="text-[var(--parchment)] leading-relaxed mb-6">{currentNode.content}</p>

            {currentNode.type === "choice" && currentNode.choices && (
              <div className="space-y-3">
                {currentNode.choices.map(choice => (
                  <Button
                    key={choice.id}
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-4 water-card hover:border-[var(--gold)] transition-all"
                    onClick={() => handleChoice(choice)}
                  >
                    <ChevronRight className="mr-2 text-[var(--gold)] flex-shrink-0" size={16} />
                    <span className="text-[var(--parchment)]">{choice.text}</span>
                    {choice.reward && (
                      <Badge className="ml-auto bg-[var(--gold)]/20 text-[var(--gold)]">+{choice.reward.xp} XP</Badge>
                    )}
                  </Button>
                ))}
              </div>
            )}

            {currentNode.type === "narrative" && currentNode.nextNodeId && (
              <Button
                className="w-full mt-4 bg-[var(--cerulean)] hover:bg-[var(--river-blue)]"
                onClick={() => handleContinue(currentNode.nextNodeId!)}
              >
                Continue <ChevronRight className="ml-2" size={16} />
              </Button>
            )}

            {currentNode.type === "task" && currentNode.task && (
              <div className="mt-4 p-4 bg-[var(--river-blue)]/20 rounded-lg border border-[var(--aqua)]/30">
                <h4 className="text-[var(--gold)] font-heading mb-2 flex items-center gap-2">
                  <MapPin size={16} />
                  Task: {currentNode.task.description}
                </h4>
                <Button
                  className="w-full mt-3 bg-[var(--cerulean)] hover:bg-[var(--river-blue)]"
                  onClick={() => handleTaskComplete(currentNode)}
                >
                  {currentNode.task.type === "visit" ? "Visit Civilization" : "Complete Task"}
                  <ChevronRight className="ml-2" size={16} />
                </Button>
              </div>
            )}

            {currentNode.type === "ending" && (
              <div className="mt-4">
                <div className="p-4 bg-[var(--gold)]/10 rounded-lg border border-[var(--gold)]/30 mb-4">
                  <h4 className="text-[var(--gold)] font-heading mb-2 flex items-center gap-2">
                    <Award size={16} />
                    Quest Rewards
                  </h4>
                  <p className="text-[var(--parchment)]">+{selectedQuest.rewards.xp} XP</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedQuest.rewards.badges.map(badge => (
                      <Badge key={badge} className="bg-[var(--gold)]/20 text-[var(--gold)]">{badge}</Badge>
                    ))}
                  </div>
                </div>
                <Button
                  className="w-full bg-[var(--gold)] hover:bg-[var(--gold)]/80 text-[var(--deep-ocean)]"
                  onClick={() => completeQuest(selectedQuest)}
                >
                  <CheckCircle className="mr-2" size={16} />
                  Complete Quest
                </Button>
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl max-h-[85vh] water-card">
      <CardHeader className="border-b border-[var(--aqua)]/20">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-heading text-[var(--gold)] text-xl flex items-center gap-2">
              <Scroll className="w-5 h-5 text-[var(--aqua)]" />
              Quest Journal
            </CardTitle>
            <p className="text-[var(--parchment)]/70 text-sm mt-1">
              Embark on branching narrative adventures
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X size={18} />
          </Button>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <Badge className="bg-[var(--gold)]/20 text-[var(--gold)]">
            <Star className="mr-1" size={12} /> {totalXP} Total XP
          </Badge>
          <Badge className="bg-[var(--cerulean)]/20 text-[var(--aqua)]">
            {Object.values(questProgress).filter(p => p.completed).length}/{QUESTS.length} Completed
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <ScrollArea className="h-[60vh]">
          <div className="space-y-4">
            {QUESTS.map(quest => {
              const progress = questProgress[quest.id];
              const isCompleted = progress?.completed;
              
              return (
                <Card 
                  key={quest.id}
                  className={`water-card cursor-pointer hover:border-[var(--gold)] transition-all ${isCompleted ? 'opacity-70' : ''}`}
                  onClick={() => !isCompleted && startQuest(quest)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-heading text-[var(--parchment)] text-lg flex items-center gap-2">
                        {isCompleted ? (
                          <CheckCircle className="text-green-400" size={18} />
                        ) : (
                          <Circle className="text-[var(--aqua)]" size={18} />
                        )}
                        {quest.title}
                      </h3>
                      <div className="flex gap-2">
                        <Badge className={getCategoryColor(quest.category)}>{quest.category}</Badge>
                        <Badge className={getDifficultyColor(quest.difficulty)}>{quest.difficulty}</Badge>
                      </div>
                    </div>
                    <p className="text-[var(--parchment)]/70 text-sm mb-3">{quest.description}</p>
                    <div className="flex items-center gap-4 text-xs text-[var(--parchment)]/60">
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {quest.estimatedTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star size={12} className="text-[var(--gold)]" /> {quest.rewards.xp} XP
                      </span>
                      <span className="flex items-center gap-1">
                        <Award size={12} /> {quest.rewards.badges.length} badges
                      </span>
                    </div>
                    {isCompleted && progress && (
                      <div className="mt-3 pt-3 border-t border-[var(--aqua)]/20">
                        <div className="flex flex-wrap gap-2">
                          {progress.badgesEarned.map(badge => (
                            <Badge key={badge} className="bg-[var(--gold)]/20 text-[var(--gold)] text-xs">{badge}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}