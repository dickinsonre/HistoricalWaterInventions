import { useState, useCallback, useEffect, useRef } from "react";
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
  Zap,
  Mountain,
  AlertTriangle,
  Wrench,
  ChevronRight,
  RotateCcw
} from "lucide-react";
import { gameData } from "@/data/gameData";
import { useTranslation } from "../../hooks/useTranslation";
import LanguageSelector from "./LanguageSelector";

interface MiniGamesProps {
  onBack: () => void;
}

type GameType = "menu" | "quiz" | "timeline" | "match" | "aqueduct" | "crisis" | "pipemaster";

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

interface AqueductScenario {
  title: string;
  description: string;
  sourceElevation: number;
  destElevation: number;
  distance: number;
  options: { slope: string; material: string; result: string }[];
  correctIndex: number;
  explanation: string;
  civilizationRef: string;
}

const aqueductScenarios: AqueductScenario[] = [
  {
    title: "Roman Aqueduct to Nîmes",
    description: "Design an aqueduct to carry water 50 km from Uzès springs to the city of Nîmes across the Gardon River valley. The terrain requires a precise gradient.",
    sourceElevation: 76,
    destElevation: 59,
    distance: 50,
    options: [
      { slope: "1:3000 (very gentle)", material: "Stone channel with opus signinum lining", result: "Water flows steadily at walking pace, arrives clean" },
      { slope: "1:100 (steep)", material: "Open stone trough", result: "Water rushes too fast, erodes channel, wastes supply" },
      { slope: "1:10 (very steep)", material: "Unlined rock channel", result: "Torrent destroys the channel within weeks" },
      { slope: "0 (flat)", material: "Lead pipes", result: "Water stagnates, no flow reaches the city" }
    ],
    correctIndex: 0,
    explanation: "The Pont du Gard aqueduct used an incredibly gentle slope of just 1:3000 (34 cm per km). This precision ensured steady flow over 50 km. Roman engineers surveyed the route using a chorobates (ancient leveling tool) to achieve this accuracy.",
    civilizationRef: "Ancient Rome"
  },
  {
    title: "Persian Qanat in the Desert",
    description: "Build a qanat to bring water from the Alborz mountain aquifer to a village 15 km away across arid terrain. Summer surface temperatures reach 50°C.",
    sourceElevation: 1200,
    destElevation: 900,
    distance: 15,
    options: [
      { slope: "1:50 (moderate)", material: "Open surface canal", result: "90% of water evaporates before reaching the village" },
      { slope: "1:500 (gentle underground)", material: "Underground tunnel with vertical shafts every 50m", result: "Water arrives cool and clean, zero evaporation loss" },
      { slope: "1:1000 (very gentle)", material: "Clay-lined underground pipe", result: "Too slow — silting clogs the tunnel within a year" },
      { slope: "1:10 (steep)", material: "Ceramic aqueduct on pillars", result: "High evaporation and the structure cracks in heat" }
    ],
    correctIndex: 1,
    explanation: "Qanats use underground tunnels with a gentle 1:500 slope, accessed through vertical maintenance shafts (every 50m). This genius design eliminates evaporation — critical in 50°C deserts. Some qanats have operated for 3,000+ years!",
    civilizationRef: "Ancient Persia"
  },
  {
    title: "Nabataean Water in Petra",
    description: "Capture flash-flood rainwater in the Jordanian desert and deliver it to the city of Petra carved into sandstone cliffs. Annual rainfall is only 150mm, coming in violent bursts.",
    sourceElevation: 1050,
    destElevation: 810,
    distance: 5,
    options: [
      { slope: "1:20 (moderate)", material: "Rock-cut channels with settling basins and covered cisterns", result: "Captures flash floods, filters sediment, stores clean water year-round" },
      { slope: "1:5 (steep)", material: "Open clay channels", result: "Flash floods destroy the channels, no water retained" },
      { slope: "1:1000 (gentle)", material: "Underground terracotta pipes", result: "Too gentle — flash floods overflow and bypass the system" },
      { slope: "1:100 (gradual)", material: "Elevated stone aqueduct", result: "Works in rain but can't capture enough flash-flood volume" }
    ],
    correctIndex: 0,
    explanation: "The Nabataeans carved channels directly into cliff faces at a moderate 1:20 slope, with settling basins to trap sediment from muddy flash floods. Over 200 cisterns stored enough water to support 30,000 people in one of Earth's driest places.",
    civilizationRef: "Nabataean Petra"
  },
  {
    title: "Khmer Baray Reservoir",
    description: "Design a massive reservoir (baray) to store monsoon water for dry-season rice irrigation near Angkor. The annual cycle swings from flooding to drought.",
    sourceElevation: 25,
    destElevation: 12,
    distance: 8,
    options: [
      { slope: "1:50 (moderate)", material: "Deep narrow canal with sluice gates", result: "Too narrow — can't handle monsoon volume, overflows" },
      { slope: "1:600 (gentle)", material: "Massive earthen dike enclosure (8km × 2km) with controlled inlets/outlets", result: "Stores 50 million cubic meters, releases gradually all year" },
      { slope: "1:10 (steep)", material: "Stone-lined cascade channels", result: "Water drains too fast, reservoir empties in weeks" },
      { slope: "1:2000 (nearly flat)", material: "Simple earthen berm", result: "Silting fills the reservoir within a decade" }
    ],
    correctIndex: 1,
    explanation: "The West Baray (8km × 2.1km) used massive earthen dikes with a gentle 1:600 gradient and carefully positioned inlet/outlet channels. It stored enough water to irrigate rice paddies for a million people through the 6-month dry season.",
    civilizationRef: "Khmer Empire"
  },
  {
    title: "Incan Mountain Terraces",
    description: "Irrigate agricultural terraces at Moray, Peru — a series of circular terraces descending into a natural sinkhole at 3,500m elevation. Each terrace level has a different microclimate.",
    sourceElevation: 3600,
    destElevation: 3400,
    distance: 0.5,
    options: [
      { slope: "Cascading 1:8 per terrace", material: "Stone-lined channels with overflow weirs between levels", result: "Each terrace gets precisely controlled water, excess cascades to next level" },
      { slope: "1:500 (gentle)", material: "Single buried pipe to bottom", result: "Only the lowest terrace gets water, upper ones dry out" },
      { slope: "1:2 (very steep)", material: "Open stone chute", result: "Water rushes to the bottom, eroding terraces on the way" },
      { slope: "1:100 (gradual)", material: "Surface canal around the rim", result: "Water only reaches the top terrace, lower levels get nothing" }
    ],
    correctIndex: 0,
    explanation: "Incan engineers built cascading channels with stone weirs between each terrace level. The 1:8 slope per level ensured controlled flow, with overflow weirs directing excess to the next terrace. Moray's circular design created 20+ microclimates for crop experimentation.",
    civilizationRef: "Inca Empire"
  },
  {
    title: "Chinese Dujiangyan Flood Control",
    description: "Tame the Min River to prevent annual flooding of the Chengdu Plain while also irrigating 500,000 hectares. The river carries heavy sediment loads during monsoon season.",
    sourceElevation: 726,
    destElevation: 500,
    distance: 60,
    options: [
      { slope: "1:250 (moderate)", material: "Massive stone dam across the river", result: "Dam traps sediment, fills up in 50 years, then catastrophic failure" },
      { slope: "No fixed slope — natural river split", material: "Fish-mouth levee divider + bottleneck channel + spillway", result: "Inner channel irrigates, outer channel drains floods, sediment self-clears" },
      { slope: "1:1000 (gentle)", material: "Parallel diversion canals", result: "Works for irrigation but can't handle flood surges" },
      { slope: "1:50 (steep)", material: "Reinforced concrete channel", result: "Too fast — erodes farmland downstream" }
    ],
    correctIndex: 1,
    explanation: "Li Bing's genius Dujiangyan (256 BCE) uses no dam at all. The Fish Mouth splits the river 60/40, the Flying Sand Weir diverts excess flood water, and the Bottle Neck controls irrigation flow. It has worked continuously for 2,300 years with zero dam-failure risk.",
    civilizationRef: "Ancient China"
  }
];

interface CrisisScenario {
  title: string;
  year: string;
  situation: string;
  civilization: string;
  options: { solution: string; outcome: string }[];
  correctIndex: number;
  historicalFact: string;
}

const crisisScenarios: CrisisScenario[] = [
  {
    title: "Drought Strikes the Nile Valley",
    year: "2200 BCE",
    situation: "The annual Nile flood has failed for the third consecutive year. Crops wither, famine spreads. Your grain stores are nearly empty. How do you manage the remaining water?",
    civilization: "Ancient Egypt",
    options: [
      { solution: "Build shaduf lever systems to lift remaining river water to higher fields", outcome: "Shadufs lift 2,500 liters per hour per device, saving the irrigated fields closest to the river. Villages survive." },
      { solution: "Dig deeper wells in the desert hoping to find groundwater", outcome: "The water table has dropped with the drought. Wells come up dry, wasting precious labor." },
      { solution: "Build a dam across the Nile to trap remaining water", outcome: "The Nile is too wide and the remaining flow too weak. The dam captures muddy puddles, breeding disease." },
      { solution: "Abandon farming and rely entirely on fishing and hunting", outcome: "The river is too low for fish. Without any agriculture, the population cannot sustain itself." }
    ],
    correctIndex: 0,
    historicalFact: "The shaduf, invented around 2000 BCE, could lift 2,500 liters per hour using a simple lever and counterweight. During the Old Kingdom collapse (~2200 BCE), the shaduf helped surviving communities maintain small-scale irrigation when the Nile floods failed."
  },
  {
    title: "Flooding Threatens Ancient Siam",
    year: "1400 CE",
    situation: "Monsoon rains have been extreme this year. The Chao Phraya River is rising fast toward the new capital of Ayutthaya, built on an island. Waters could breach the city within days.",
    civilization: "Ayutthaya Kingdom",
    options: [
      { solution: "Build high stone walls around the entire island", outcome: "Walls block floodwater but also trap rainwater inside the city, flooding it from within." },
      { solution: "Expand the klong (canal) network to distribute and redirect flood water", outcome: "Klongs channel excess water around the city and into rice paddies, reducing flood height while irrigating crops." },
      { solution: "Evacuate the city to higher ground permanently", outcome: "The city loses its strategic island position and trade access. Centuries of development abandoned." },
      { solution: "Dump rocks and soil to raise the island higher", outcome: "The fill material washes away in the flood. Muddy runoff contaminates the water supply." }
    ],
    correctIndex: 1,
    historicalFact: "Ayutthaya had over 1,100 klongs (canals) that served as flood control, transportation, and irrigation simultaneously. This network turned a flood threat into an agricultural advantage, distributing monsoon water to rice paddies while protecting the island capital."
  },
  {
    title: "Water Scarcity in a Growing City",
    year: "100 CE",
    situation: "Rome's population has surged past 1 million. The existing aqueducts can't keep up with demand. Citizens in upper-floor apartments (insulae) have no running water, and disease is spreading from contaminated street-level sources.",
    civilization: "Ancient Rome",
    options: [
      { solution: "Ration water strictly — allow access only 2 hours per day", outcome: "Riots break out. People hoard contaminated water in unsanitary containers, worsening disease." },
      { solution: "Build a new aqueduct from distant mountain springs + expand public fountains on every block", outcome: "Fresh mountain water reaches every neighborhood. Public fountains flow 24/7, constant overflow flushes sewers clean." },
      { solution: "Dig wells throughout the city", outcome: "City groundwater is contaminated by the Cloaca Maxima sewer. Well water causes mass illness." },
      { solution: "Collect rainwater from rooftops", outcome: "Rome's dry summers mean 4-5 months with almost no rainfall. Supply is completely inadequate for 1 million people." }
    ],
    correctIndex: 1,
    historicalFact: "Rome eventually built 11 aqueducts delivering 1 million cubic meters of water daily. The key insight was that public fountains ran 24/7 — the constant overflow flushed the sewer system (Cloaca Maxima), maintaining sanitation. This combination of supply + sanitation sustained a million people."
  },
  {
    title: "Saltwater Intrusion",
    year: "600 BCE",
    situation: "Your coastal Phoenician port city of Sidon relies on freshwater springs near the shore. But recent earthquakes have shifted underground rock layers, and seawater is seeping into the spring water. Drinking water tastes increasingly salty.",
    civilization: "Phoenicia",
    options: [
      { solution: "Dig stone-cut channels inland to capture upstream spring water before it reaches the coast", outcome: "Fresh water intercepted upstream is clean and salt-free. Stone channels deliver it to the city reliably." },
      { solution: "Boil seawater to desalinate it", outcome: "Requires enormous fuel. Deforests the surrounding hills. Production is too slow for city needs." },
      { solution: "Mix contaminated water with wine to mask the salt taste", outcome: "The salt still damages crops, livestock, and eventually human kidneys. Not a real solution." },
      { solution: "Abandon Sidon and move to a new location", outcome: "Sidon's harbor, trade routes, and dye industry cannot be replicated elsewhere." }
    ],
    correctIndex: 0,
    historicalFact: "Sidon's freshwater springs were famous in antiquity. When coastal springs were compromised, Phoenician engineers cut channels through bedrock to intercept water at higher elevations before it reached salt-contaminated zones. The stone-cut channels at Sidon are still visible today."
  },
  {
    title: "Monsoon Overwhelms the Rice Paddies",
    year: "800 CE",
    situation: "An unusually intense monsoon season has flooded the rice paddies around Angkor. If the standing water doesn't drain within a week, the rice crop will rot. But you need that water stored for the 6-month dry season ahead.",
    civilization: "Khmer Empire",
    options: [
      { solution: "Open all sluice gates to drain paddies into the Tonle Sap lake", outcome: "Rice is saved now, but there's no stored water for dry season. Next season's crop fails." },
      { solution: "Use baray reservoir inlet controls to divert excess water into storage while draining paddies through separate outlet channels", outcome: "Excess flood water fills the baray for dry season while paddies drain through controlled outlets. Both problems solved." },
      { solution: "Build temporary levees around each paddy to keep water out", outcome: "Levees trap water from rain inside paddies anyway. Crops still rot." },
      { solution: "Abandon the flooded paddies and plant on higher ground", outcome: "Higher ground has poor soil. The harvest is a fraction of normal. Famine follows in dry season." }
    ],
    correctIndex: 1,
    historicalFact: "The Khmer Empire's water management genius lay in its separate inlet/outlet system. The barays could simultaneously receive excess flood water for storage while outlet channels drained paddies. This dual system sustained a million people through extreme seasonal variation."
  },
  {
    title: "Siege Water Supply Cut Off",
    year: "332 BCE",
    situation: "Alexander the Great is besieging your island fortress of Tyre. His forces have cut off the mainland freshwater supply via the causeway he's building. Your city of 40,000 is running out of drinking water.",
    civilization: "Phoenicia (Tyre)",
    options: [
      { solution: "Ration existing cistern water — it was designed to last months under siege", outcome: "Tyre's massive underground cisterns, filled by rooftop rainwater collection, sustain the city for 7 months of siege." },
      { solution: "Attempt to dig wells on the island", outcome: "Island wells hit salt water almost immediately. The water table is seawater." },
      { solution: "Send ships to fetch water from the mainland at night", outcome: "Alexander's navy blockades the island. Ships are intercepted and captured." },
      { solution: "Surrender immediately to negotiate water access", outcome: "Alexander demands unconditional surrender. The city loses everything." }
    ],
    correctIndex: 0,
    historicalFact: "Tyre's legendary cisterns — carved from bedrock and waterproofed with pitch — could store up to 2,000 liters per household. The city's rooftop rainwater collection system filled these cisterns during winter rains, providing months of siege resistance. Tyre held out for 7 months."
  },
  {
    title: "Lead Poisoning from the Water Supply",
    year: "50 CE",
    situation: "Citizens in wealthy districts of Rome are suffering mysterious ailments: abdominal pain, confusion, gout. A physician suspects the expensive lead (plumbum) pipes delivering water to private homes. But lead pipes are standard infrastructure.",
    civilization: "Ancient Rome",
    options: [
      { solution: "Replace lead pipes with terra-cotta pipes in affected districts", outcome: "Terra-cotta pipes don't leach toxins. Health improves within months. But wealthy citizens complain about lower water pressure." },
      { solution: "Increase water flow speed through the lead pipes", outcome: "Faster flow reduces lead dissolution slightly, but the problem persists over years." },
      { solution: "Add vinegar to the water to neutralize lead", outcome: "Acidic vinegar actually increases lead dissolution, making the problem worse." },
      { solution: "Ignore it — the amounts must be too small to matter", outcome: "Chronic low-level lead poisoning accumulates over decades. Mental decline and organ damage worsen." }
    ],
    correctIndex: 0,
    historicalFact: "Vitruvius (Roman architect, 80-15 BCE) warned against lead pipes in De Architectura: 'Water is much more wholesome from terra-cotta pipes.' He observed that lead workers were pale and unhealthy. Despite this, Rome used lead pipes for centuries — the word 'plumber' comes from plumbum (Latin for lead)."
  },
  {
    title: "Volcanic Ash Contaminates the Water",
    year: "1600 CE",
    situation: "Mount Huaynaputina in Peru has erupted catastrophically, blanketing the Inca terraces in toxic volcanic ash. Rain washes ash into water channels, contaminating irrigation and drinking supplies across the region.",
    civilization: "Inca Empire",
    options: [
      { solution: "Use the multi-stage filtration system: settling pools, sand filters, and charcoal layers", outcome: "Volcanic particulates settle out, chemical contaminants bind to charcoal. Clean water resumes flowing to terraces." },
      { solution: "Wait for rain to wash the ash away naturally", outcome: "Months of contaminated runoff poison crops and livestock. Famine sets in before the system clears." },
      { solution: "Divert all water from a single uncontaminated mountain spring", outcome: "One spring can't supply the entire terrace network. Most crops die from water shortage." },
      { solution: "Abandon the contaminated terraces and farm in river valleys below", outcome: "Valley land is limited and already flooded with ash-laden water. No better option." }
    ],
    correctIndex: 0,
    historicalFact: "The Inca used sophisticated multi-stage water purification: settling basins removed heavy particles, followed by sand filtration, then in some cases charcoal beds. At Tipón, the water purification channels can still be seen operating today — a testament to Incan hydraulic engineering 500+ years later."
  }
];

interface PipeMasterLevel {
  title: string;
  description: string;
  gridSize: number;
  source: { row: number; col: number };
  destination: { row: number; col: number };
  obstacles: { row: number; col: number }[];
  hint: string;
  fact: string;
}

const pipeMasterLevels: PipeMasterLevel[] = [
  {
    title: "Roman Aqueduct Path",
    description: "Route water from the mountain spring to the city fountain through the valley",
    gridSize: 5,
    source: { row: 0, col: 0 },
    destination: { row: 4, col: 4 },
    obstacles: [
      { row: 1, col: 1 }, { row: 1, col: 3 },
      { row: 2, col: 2 },
      { row: 3, col: 0 }, { row: 3, col: 3 }
    ],
    hint: "Water must flow continuously — no gaps allowed!",
    fact: "Roman aqueducts used gravity flow with no pumps. Engineers surveyed routes using a chorobates — a 20-foot leveling board — to maintain precise slopes over hundreds of kilometers."
  },
  {
    title: "Qanat Shaft Network",
    description: "Connect the aquifer source to the oasis village through underground tunnels",
    gridSize: 5,
    source: { row: 0, col: 2 },
    destination: { row: 4, col: 2 },
    obstacles: [
      { row: 1, col: 0 }, { row: 1, col: 4 },
      { row: 2, col: 1 }, { row: 2, col: 3 },
      { row: 3, col: 1 }, { row: 3, col: 4 }
    ],
    hint: "Underground tunnels avoid evaporation in the desert heat",
    fact: "Qanats have vertical access shafts every 20-50 meters for construction and maintenance. The longest known qanat stretches over 70 km in Iran. The total length of all qanats in Iran once exceeded 270,000 km."
  },
  {
    title: "Angkor Reservoir System",
    description: "Direct monsoon rainwater from the catchment hills into the great baray reservoir",
    gridSize: 6,
    source: { row: 0, col: 5 },
    destination: { row: 5, col: 0 },
    obstacles: [
      { row: 0, col: 2 }, { row: 1, col: 0 }, { row: 1, col: 3 },
      { row: 2, col: 1 }, { row: 2, col: 4 },
      { row: 3, col: 2 }, { row: 3, col: 5 },
      { row: 4, col: 1 }, { row: 4, col: 3 }
    ],
    hint: "Find the path through the Khmer jungle — avoid temple foundations",
    fact: "The West Baray at Angkor was 8km × 2.1km — visible from space. It stored 56 million cubic meters of water, enough to irrigate rice for a million people through the dry season."
  },
  {
    title: "Minoan Palace Plumbing",
    description: "Connect the rainwater cistern on the roof to the queen's bathing chamber through the Palace of Knossos",
    gridSize: 6,
    source: { row: 0, col: 0 },
    destination: { row: 5, col: 5 },
    obstacles: [
      { row: 0, col: 3 }, { row: 1, col: 1 }, { row: 1, col: 4 },
      { row: 2, col: 2 }, { row: 2, col: 5 },
      { row: 3, col: 0 }, { row: 3, col: 3 },
      { row: 4, col: 2 }, { row: 4, col: 4 }
    ],
    hint: "Terra-cotta pipes can turn corners — find a path through the palace rooms",
    fact: "The Minoans had flushing toilets, pressurized pipe systems, and storm drains by 1700 BCE — technology Europe wouldn't rediscover for over 3,000 years. Their tapered terra-cotta pipes created water pressure."
  }
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
  const t = useTranslation();
  const [currentGame, setCurrentGame] = useState<GameType>("menu");
  const [score, setScore] = useState(0);
  const [highScores, setHighScores] = useState<Record<string, number>>({
    quiz: 0,
    timeline: 0,
    match: 0,
    aqueduct: 0,
    crisis: 0,
    pipemaster: 0
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

  if (currentGame === "aqueduct") {
    return (
      <AqueductEngineer 
        onBack={() => setCurrentGame("menu")}
        onComplete={(finalScore) => handleGameComplete("aqueduct", finalScore)}
      />
    );
  }

  if (currentGame === "crisis") {
    return (
      <WaterCrisisSolver 
        onBack={() => setCurrentGame("menu")}
        onComplete={(finalScore) => handleGameComplete("crisis", finalScore)}
      />
    );
  }

  if (currentGame === "pipemaster") {
    return (
      <PipeMaster 
        onBack={() => setCurrentGame("menu")}
        onComplete={(finalScore) => handleGameComplete("pipemaster", finalScore)}
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
              {t.miniGames.title}
            </h1>
            <p className="text-[var(--parchment)]/70 text-sm">
              {t.miniGames.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <Button
              onClick={onBack}
              variant="outline"
              className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
            >
              <ArrowLeft size={16} className="mr-2" />
              {t.nav.back}
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <Card 
            className="water-card cursor-pointer hover:border-[var(--gold)] transition-all group"
            onClick={() => setCurrentGame("quiz")}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--cerulean)]/20 flex items-center justify-center group-hover:bg-[var(--cerulean)]/40 transition-colors">
                <Brain size={32} className="text-[var(--aqua)]" />
              </div>
              <h3 className="font-heading text-lg text-[var(--gold)] mb-2">{t.miniGames.waterFlowQuiz}</h3>
              <p className="text-[var(--parchment)]/70 text-sm mb-4">
                {t.miniGames.waterFlowQuizDesc}
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-[var(--aqua)]">
                <Star size={14} />
                <span>{t.miniGames.highScore}: {highScores.quiz}</span>
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
              <h3 className="font-heading text-lg text-[var(--gold)] mb-2">{t.miniGames.timelineChallenge}</h3>
              <p className="text-[var(--parchment)]/70 text-sm mb-4">
                {t.miniGames.timelineChallengeDesc}
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-[var(--aqua)]">
                <Star size={14} />
                <span>{t.miniGames.highScore}: {highScores.timeline}</span>
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
              <h3 className="font-heading text-lg text-[var(--gold)] mb-2">{t.miniGames.matchCivilization}</h3>
              <p className="text-[var(--parchment)]/70 text-sm mb-4">
                {t.miniGames.matchCivilizationDesc}
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-[var(--aqua)]">
                <Star size={14} />
                <span>{t.miniGames.highScore}: {highScores.match}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card 
            className="water-card cursor-pointer hover:border-[var(--gold)] transition-all group"
            onClick={() => setCurrentGame("aqueduct")}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/40 transition-colors">
                <Mountain size={32} className="text-green-400" />
              </div>
              <h3 className="font-heading text-lg text-[var(--gold)] mb-2">Aqueduct Engineer</h3>
              <p className="text-[var(--parchment)]/70 text-sm mb-4">
                Design water delivery systems with the right slope, material, and engineering
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-[var(--aqua)]">
                <Star size={14} />
                <span>{t.miniGames.highScore}: {highScores.aqueduct}</span>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="water-card cursor-pointer hover:border-[var(--gold)] transition-all group"
            onClick={() => setCurrentGame("crisis")}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center group-hover:bg-red-500/40 transition-colors">
                <AlertTriangle size={32} className="text-red-400" />
              </div>
              <h3 className="font-heading text-lg text-[var(--gold)] mb-2">Water Crisis Solver</h3>
              <p className="text-[var(--parchment)]/70 text-sm mb-4">
                Face real historical water emergencies and choose the right ancient solution
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-[var(--aqua)]">
                <Star size={14} />
                <span>{t.miniGames.highScore}: {highScores.crisis}</span>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="water-card cursor-pointer hover:border-[var(--gold)] transition-all group"
            onClick={() => setCurrentGame("pipemaster")}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/40 transition-colors">
                <Wrench size={32} className="text-purple-400" />
              </div>
              <h3 className="font-heading text-lg text-[var(--gold)] mb-2">Pipe Master</h3>
              <p className="text-[var(--parchment)]/70 text-sm mb-4">
                Build water channels on a grid to connect source to destination
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-[var(--aqua)]">
                <Star size={14} />
                <span>{t.miniGames.highScore}: {highScores.pipemaster}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="water-card">
          <CardContent className="p-6">
            <h3 className="font-heading text-lg text-[var(--gold)] mb-4 flex items-center gap-2">
              <Droplets className="text-[var(--aqua)]" />
              {t.miniGames.whyMatter}
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

function AqueductEngineer({ onBack, onComplete }: { onBack: () => void; onComplete: (score: number) => void }) {
  const [scenarios] = useState(() => shuffleArray(aqueductScenarios).slice(0, 4));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const current = scenarios[currentIndex];

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelectedOption(index);
    setShowResult(true);
    if (index === current.correctIndex) {
      setScore(prev => prev + 25);
    }
  };

  const handleNext = () => {
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      const finalScore = score + (selectedOption === current.correctIndex ? 0 : 0);
      setGameComplete(true);
      onComplete(finalScore);
    }
  };

  if (gameComplete) {
    return (
      <div className="min-h-screen bg-[var(--deep-ocean)] p-4 flex items-center justify-center">
        <Card className="water-card max-w-md w-full">
          <CardContent className="p-8 text-center">
            <Trophy size={64} className="mx-auto mb-4 text-[var(--gold)]" />
            <h2 className="font-heading text-2xl text-[var(--gold)] mb-2">Engineering Complete!</h2>
            <p className="text-[var(--parchment)]/70 mb-2">
              You scored {score} out of {scenarios.length * 25} points
            </p>
            <p className="text-[var(--aqua)] text-sm mb-6">
              {score >= 75 ? "Master Engineer! You understand ancient hydraulic design." :
               score >= 50 ? "Skilled Builder! You have a good grasp of water engineering." :
               score >= 25 ? "Apprentice Engineer. Keep learning about ancient water systems!" :
               "Keep studying! Ancient engineers solved incredible challenges."}
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              {score >= 75 && <Star className="text-[var(--gold)] fill-[var(--gold)]" />}
              {score >= 50 && <Star className="text-[var(--gold)] fill-[var(--gold)]" />}
              {score >= 25 && <Star className="text-[var(--gold)] fill-[var(--gold)]" />}
            </div>
            <Button onClick={onBack} className="bg-[var(--cerulean)] hover:bg-[var(--river-blue)] text-white">
              Back to Games
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--deep-ocean)] p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button onClick={onBack} variant="outline" size="sm" className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
              <ArrowLeft size={16} />
            </Button>
            <div>
              <h2 className="font-heading text-xl text-[var(--gold)]">Aqueduct Engineer</h2>
              <p className="text-[var(--parchment)]/60 text-sm">Scenario {currentIndex + 1} of {scenarios.length}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[var(--aqua)]">
            <Mountain size={18} />
            <span className="font-bold">{score} pts</span>
          </div>
        </div>

        <div className="mb-4 h-2 bg-[var(--deep-ocean)] rounded-full overflow-hidden border border-[var(--aqua)]/20">
          <div className="h-full bg-green-400 transition-all duration-300" style={{ width: `${((currentIndex + 1) / scenarios.length) * 100}%` }} />
        </div>

        <Card className="water-card mb-4">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">{current.civilizationRef}</span>
            </div>
            <h3 className="font-heading text-lg text-[var(--gold)] mb-3">{current.title}</h3>
            <p className="text-[var(--parchment)]/90 mb-4">{current.description}</p>

            <div className="grid grid-cols-3 gap-3 mb-6 text-center">
              <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-3 border border-[var(--aqua)]/20">
                <p className="text-[var(--gold)] font-heading text-lg">{current.sourceElevation}m</p>
                <p className="text-[var(--parchment)]/60 text-xs">Source Elevation</p>
              </div>
              <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-3 border border-[var(--aqua)]/20">
                <p className="text-[var(--gold)] font-heading text-lg">{current.destElevation}m</p>
                <p className="text-[var(--parchment)]/60 text-xs">Destination</p>
              </div>
              <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-3 border border-[var(--aqua)]/20">
                <p className="text-[var(--gold)] font-heading text-lg">{current.distance}km</p>
                <p className="text-[var(--parchment)]/60 text-xs">Distance</p>
              </div>
            </div>

            <div className="space-y-3">
              {current.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-lg text-left transition-all ${
                    showResult
                      ? index === current.correctIndex
                        ? 'bg-green-500/20 border-2 border-green-500'
                        : selectedOption === index
                          ? 'bg-red-500/20 border-2 border-red-500'
                          : 'bg-[var(--deep-ocean)]/50 border border-[var(--aqua)]/20 opacity-50'
                      : 'bg-[var(--deep-ocean)]/50 border border-[var(--aqua)]/30 hover:border-green-400 hover:bg-green-500/10'
                  } text-[var(--parchment)]`}
                >
                  <div className="flex items-start gap-3">
                    {showResult && index === current.correctIndex && <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />}
                    {showResult && selectedOption === index && index !== current.correctIndex && <XCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />}
                    <div>
                      <div className="font-medium text-sm">{option.slope}</div>
                      <div className="text-xs text-[var(--aqua)] mt-1">{option.material}</div>
                      {showResult && <div className="text-xs text-[var(--parchment)]/60 mt-1 italic">{option.result}</div>}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {showResult && (
          <Card className="water-card mb-4 border-green-500/30">
            <CardContent className="p-4">
              <p className="text-[var(--parchment)]/90 text-sm">
                <span className="text-[var(--gold)] font-medium">Engineering Insight: </span>
                {current.explanation}
              </p>
            </CardContent>
          </Card>
        )}

        {showResult && (
          <Button onClick={handleNext} className="w-full bg-green-600 hover:bg-green-700 text-white">
            {currentIndex < scenarios.length - 1 ? 'Next Scenario' : 'See Results'}
          </Button>
        )}
      </div>
    </div>
  );
}

function WaterCrisisSolver({ onBack, onComplete }: { onBack: () => void; onComplete: (score: number) => void }) {
  const [scenarios] = useState(() => shuffleArray(crisisScenarios).slice(0, 5));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45);
  const [timerActive, setTimerActive] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const current = scenarios[currentIndex];

  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      timerRef.current = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
    }
    if (timeLeft === 0 && timerActive) {
      setTimerActive(false);
      setShowResult(true);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [timeLeft, timerActive]);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelectedOption(index);
    setShowResult(true);
    setTimerActive(false);
    const timeBonus = Math.floor(timeLeft / 5);
    if (index === current.correctIndex) {
      setScore(prev => prev + 20 + timeBonus);
    }
  };

  const handleNext = () => {
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
      setTimeLeft(45);
      setTimerActive(true);
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
            <h2 className="font-heading text-2xl text-[var(--gold)] mb-2">Crisis Resolved!</h2>
            <p className="text-[var(--parchment)]/70 mb-2">
              You scored {score} points
            </p>
            <p className="text-[var(--aqua)] text-sm mb-6">
              {score >= 80 ? "Water Management Master! Ancient civilizations would be proud." :
               score >= 50 ? "Capable Leader! You saved most communities from disaster." :
               score >= 25 ? "Learning Leader. Study more about how ancients solved water crises!" :
               "The water crisis continues... but now you know the real solutions!"}
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              {score >= 80 && <Star className="text-[var(--gold)] fill-[var(--gold)]" />}
              {score >= 50 && <Star className="text-[var(--gold)] fill-[var(--gold)]" />}
              {score >= 25 && <Star className="text-[var(--gold)] fill-[var(--gold)]" />}
            </div>
            <Button onClick={onBack} className="bg-[var(--cerulean)] hover:bg-[var(--river-blue)] text-white">
              Back to Games
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--deep-ocean)] p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button onClick={onBack} variant="outline" size="sm" className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
              <ArrowLeft size={16} />
            </Button>
            <div>
              <h2 className="font-heading text-xl text-[var(--gold)]">Water Crisis Solver</h2>
              <p className="text-[var(--parchment)]/60 text-sm">Crisis {currentIndex + 1} of {scenarios.length}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${timeLeft <= 10 ? 'bg-red-500/30 text-red-400 animate-pulse' : 'bg-[var(--deep-ocean)] text-[var(--aqua)]'} border border-[var(--aqua)]/20`}>
              <Clock size={14} />
              <span className="font-mono font-bold">{timeLeft}s</span>
            </div>
            <div className="flex items-center gap-2 text-[var(--aqua)]">
              <Zap size={18} />
              <span className="font-bold">{score} pts</span>
            </div>
          </div>
        </div>

        <div className="mb-4 h-2 bg-[var(--deep-ocean)] rounded-full overflow-hidden border border-[var(--aqua)]/20">
          <div className="h-full bg-red-400 transition-all duration-300" style={{ width: `${((currentIndex + 1) / scenarios.length) * 100}%` }} />
        </div>

        <Card className="water-card mb-4 border-red-500/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle size={20} className="text-red-400" />
              <span className="text-xs px-2 py-1 rounded-full bg-red-500/20 text-red-400">{current.civilization} — {current.year}</span>
            </div>
            <h3 className="font-heading text-lg text-[var(--gold)] mb-3">{current.title}</h3>
            <p className="text-[var(--parchment)]/90 mb-6 leading-relaxed">{current.situation}</p>

            <div className="space-y-3">
              {current.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-lg text-left transition-all ${
                    showResult
                      ? index === current.correctIndex
                        ? 'bg-green-500/20 border-2 border-green-500'
                        : selectedOption === index
                          ? 'bg-red-500/20 border-2 border-red-500'
                          : 'bg-[var(--deep-ocean)]/50 border border-[var(--aqua)]/20 opacity-50'
                      : 'bg-[var(--deep-ocean)]/50 border border-[var(--aqua)]/30 hover:border-red-400 hover:bg-red-500/10'
                  } text-[var(--parchment)]`}
                >
                  <div className="flex items-start gap-3">
                    {showResult && index === current.correctIndex && <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />}
                    {showResult && selectedOption === index && index !== current.correctIndex && <XCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />}
                    <div>
                      <div className="font-medium text-sm">{option.solution}</div>
                      {showResult && <div className="text-xs text-[var(--parchment)]/60 mt-1 italic">{option.outcome}</div>}
                    </div>
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
                <span className="text-[var(--gold)] font-medium">Historical Fact: </span>
                {current.historicalFact}
              </p>
            </CardContent>
          </Card>
        )}

        {showResult && (
          <Button onClick={handleNext} className="w-full bg-red-600 hover:bg-red-700 text-white">
            {currentIndex < scenarios.length - 1 ? 'Next Crisis' : 'See Results'}
          </Button>
        )}
      </div>
    </div>
  );
}

function PipeMaster({ onBack, onComplete }: { onBack: () => void; onComplete: (score: number) => void }) {
  const [levelIndex, setLevelIndex] = useState(0);
  const [grid, setGrid] = useState<boolean[][]>([]);
  const [path, setPath] = useState<{ row: number; col: number }[]>([]);
  const [gameComplete, setGameComplete] = useState(false);
  const [levelComplete, setLevelComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [showFact, setShowFact] = useState(false);

  const level = pipeMasterLevels[levelIndex];

  const initGrid = useCallback(() => {
    const g: boolean[][] = [];
    for (let r = 0; r < level.gridSize; r++) {
      g[r] = [];
      for (let c = 0; c < level.gridSize; c++) {
        g[r][c] = false;
      }
    }
    setGrid(g);
    setPath([{ row: level.source.row, col: level.source.col }]);
    setMoves(0);
    setLevelComplete(false);
    setShowFact(false);
  }, [level]);

  useEffect(() => {
    initGrid();
  }, [initGrid]);

  const isObstacle = (row: number, col: number) => {
    return level.obstacles.some(o => o.row === row && o.col === col);
  };

  const isSource = (row: number, col: number) => {
    return level.source.row === row && level.source.col === col;
  };

  const isDestination = (row: number, col: number) => {
    return level.destination.row === row && level.destination.col === col;
  };

  const isInPath = (row: number, col: number) => {
    return path.some(p => p.row === row && p.col === col);
  };

  const getPathIndex = (row: number, col: number) => {
    return path.findIndex(p => p.row === row && p.col === col);
  };

  const isAdjacent = (r1: number, c1: number, r2: number, c2: number) => {
    return (Math.abs(r1 - r2) + Math.abs(c1 - c2)) === 1;
  };

  const handleCellClick = (row: number, col: number) => {
    if (levelComplete) return;
    if (isObstacle(row, col)) return;

    const pathIdx = getPathIndex(row, col);
    if (pathIdx > 0) {
      setPath(prev => prev.slice(0, pathIdx));
      setMoves(prev => prev + 1);
      return;
    }

    if (isInPath(row, col)) return;

    const lastCell = path[path.length - 1];
    if (!isAdjacent(lastCell.row, lastCell.col, row, col)) return;

    const newPath = [...path, { row, col }];
    setPath(newPath);
    setMoves(prev => prev + 1);

    if (isDestination(row, col)) {
      setLevelComplete(true);
      const moveBonus = Math.max(0, 30 - moves);
      setScore(prev => prev + 25 + moveBonus);
      setShowFact(true);
    }
  };

  const handleNextLevel = () => {
    if (levelIndex < pipeMasterLevels.length - 1) {
      setLevelIndex(prev => prev + 1);
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
            <h2 className="font-heading text-2xl text-[var(--gold)] mb-2">Pipe Master!</h2>
            <p className="text-[var(--parchment)]/70 mb-2">
              Total Score: {score} points
            </p>
            <p className="text-[var(--aqua)] text-sm mb-6">
              {score >= 150 ? "Master Hydraulic Engineer! Every drop reached its destination." :
               score >= 100 ? "Skilled Pipe Layer! You built efficient water systems." :
               score >= 50 ? "Apprentice Plumber. Ancient water routing is tricky!" :
               "Keep practicing! Water must flow to sustain civilization."}
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              {score >= 150 && <Star className="text-[var(--gold)] fill-[var(--gold)]" />}
              {score >= 100 && <Star className="text-[var(--gold)] fill-[var(--gold)]" />}
              {score >= 50 && <Star className="text-[var(--gold)] fill-[var(--gold)]" />}
            </div>
            <Button onClick={onBack} className="bg-[var(--cerulean)] hover:bg-[var(--river-blue)] text-white">
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
            <Button onClick={onBack} variant="outline" size="sm" className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
              <ArrowLeft size={16} />
            </Button>
            <div>
              <h2 className="font-heading text-xl text-[var(--gold)]">Pipe Master</h2>
              <p className="text-[var(--parchment)]/60 text-sm">Level {levelIndex + 1} of {pipeMasterLevels.length}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={initGrid} variant="outline" size="sm" className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30">
              <RotateCcw size={14} className="mr-1" /> Reset
            </Button>
            <div className="flex items-center gap-2 text-purple-400">
              <Wrench size={18} />
              <span className="font-bold">{score} pts</span>
            </div>
          </div>
        </div>

        <Card className="water-card mb-4">
          <CardContent className="p-4">
            <h3 className="font-heading text-md text-[var(--gold)] mb-1">{level.title}</h3>
            <p className="text-[var(--parchment)]/70 text-sm mb-2">{level.description}</p>
            <p className="text-[var(--aqua)] text-xs">{level.hint}</p>
          </CardContent>
        </Card>

        <Card className="water-card mb-4">
          <CardContent className="p-4">
            <div className="flex justify-center">
              <div className="inline-grid gap-1" style={{ gridTemplateColumns: `repeat(${level.gridSize}, 1fr)` }}>
                {Array.from({ length: level.gridSize }, (_, row) =>
                  Array.from({ length: level.gridSize }, (_, col) => {
                    const obstacle = isObstacle(row, col);
                    const source = isSource(row, col);
                    const dest = isDestination(row, col);
                    const inPath = isInPath(row, col);
                    const isLastInPath = path.length > 0 && path[path.length - 1].row === row && path[path.length - 1].col === col;
                    const adjacent = path.length > 0 && isAdjacent(path[path.length - 1].row, path[path.length - 1].col, row, col) && !obstacle && !inPath;

                    let bg = 'bg-[var(--deep-ocean)]/60 border-[var(--aqua)]/20';
                    let content = null;

                    if (obstacle) {
                      bg = 'bg-gray-700/60 border-gray-600';
                      content = <span className="text-gray-500 text-xs">X</span>;
                    } else if (source) {
                      bg = 'bg-blue-500/40 border-blue-400 ring-2 ring-blue-400/50';
                      content = <Droplets size={16} className="text-blue-300" />;
                    } else if (dest) {
                      bg = levelComplete ? 'bg-green-500/40 border-green-400 ring-2 ring-green-400/50' : 'bg-purple-500/40 border-purple-400 ring-2 ring-purple-400/50';
                      content = <Star size={16} className={levelComplete ? "text-green-300" : "text-purple-300"} />;
                    } else if (inPath) {
                      bg = 'bg-[var(--cerulean)]/40 border-[var(--aqua)]';
                      content = <div className="w-3 h-3 rounded-full bg-[var(--aqua)]/80" />;
                    } else if (adjacent && !levelComplete) {
                      bg = 'bg-[var(--cerulean)]/10 border-[var(--aqua)]/40 hover:bg-[var(--cerulean)]/30 cursor-pointer';
                    }

                    return (
                      <button
                        key={`${row}-${col}`}
                        onClick={() => handleCellClick(row, col)}
                        disabled={obstacle || levelComplete}
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg border flex items-center justify-center transition-all ${bg} ${isLastInPath && !source ? 'ring-2 ring-[var(--gold)]/60' : ''}`}
                      >
                        {content}
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-4 text-xs text-[var(--parchment)]/60">
              <div className="flex items-center gap-1"><Droplets size={12} className="text-blue-300" /> Source</div>
              <div className="flex items-center gap-1"><Star size={12} className="text-purple-300" /> Destination</div>
              <div className="flex items-center gap-1"><span className="text-gray-500">X</span> Obstacle</div>
              <div className="flex items-center gap-1"><span>Moves: {moves}</span></div>
            </div>
          </CardContent>
        </Card>

        {showFact && (
          <Card className="water-card mb-4 border-purple-500/30">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle size={20} className="text-green-400" />
                <span className="text-green-400 font-medium text-sm">Water Connected!</span>
              </div>
              <p className="text-[var(--parchment)]/90 text-sm">
                <span className="text-[var(--gold)] font-medium">Did you know? </span>
                {level.fact}
              </p>
            </CardContent>
          </Card>
        )}

        {levelComplete && (
          <Button onClick={handleNextLevel} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            {levelIndex < pipeMasterLevels.length - 1 ? 'Next Level' : 'See Final Score'}
          </Button>
        )}
      </div>
    </div>
  );
}
