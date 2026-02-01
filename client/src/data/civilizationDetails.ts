export interface CivilizationDetailData {
  tagline: string;
  quote?: { text: string; author: string };
  challenge: string[];
  summary: string;
  keyFacts: { label: string; value: string }[];
  legacyTable: { ancient: string; modern: string }[];
  expertNote: string;
}

export const civilizationDetails: Record<string, CivilizationDetailData> = {
  "ancient-egypt": {
    tagline: "Masters of the Nile (3100 BCE - 30 BCE)",
    quote: { text: "Egypt is the gift of the Nile.", author: "Herodotus" },
    challenge: [
      "Egypt receives almost no rainfall (< 25mm/year)",
      "Civilization's survival depended entirely on the Nile's annual flood (June-September)",
      "Required capturing and distributing floodwaters across thousands of square kilometers",
      "Needed to lift water to fields above river level"
    ],
    summary: "Without water engineering, there would be no pyramids, no pharaohs, no ancient Egypt. The Egyptians built their entire civilization around one river.",
    keyFacts: [
      { label: "Annual Rainfall", value: "<25mm" },
      { label: "Nile Flood Season", value: "June-September" },
      { label: "Shaduf Capacity", value: "2,500 liters/day" },
      { label: "Nilometer Use", value: "5,000+ years" }
    ],
    legacyTable: [
      { ancient: "Shaduf lever principle", modern: "Modern pump designs" },
      { ancient: "Nilometer measurement", modern: "River monitoring systems" },
      { ancient: "Basin irrigation", modern: "Controlled flooding techniques" },
      { ancient: "Canal networks", modern: "Modern irrigation infrastructure" }
    ],
    expertNote: "The Nile is still managed using principles Egyptians developed 5,000 years ago. Their understanding of flood cycles and water distribution was remarkably sophisticated."
  },
  "ancient-rome": {
    tagline: "Engineers of Empire (753 BCE - 476 CE)",
    quote: { text: "Romans built for eternity.", author: "Engineering proverb" },
    challenge: [
      "Rome grew from a small town to a city of 1 million people",
      "The Tiber River alone couldn't supply this population",
      "Needed to transport water from distant sources (up to 90 km away)",
      "Required efficient wastewater removal and public health infrastructure"
    ],
    summary: "The Romans didn't invent water engineering—they perfected it at unprecedented scale. Their aqueducts, sewers, and baths defined urban civilization for two millennia.",
    keyFacts: [
      { label: "Major Aqueducts", value: "11" },
      { label: "Total Channel Length", value: "500+ km" },
      { label: "Daily Water Delivery", value: "1 million m³" },
      { label: "Public Fountains", value: "1,352" }
    ],
    legacyTable: [
      { ancient: "Gravity-fed aqueducts", modern: "Water transmission mains" },
      { ancient: "Cloaca Maxima", modern: "Combined sewer systems" },
      { ancient: "Public fountains", modern: "Municipal water supply" },
      { ancient: "Thermae heating", modern: "District heating systems" }
    ],
    expertNote: "The Pont du Gard aqueduct drops just 2.5 cm per 100 meters over 50 km. That's surveying accuracy we'd struggle to match without modern equipment. I've designed systems with less precision."
  },
  "mesopotamia": {
    tagline: "Birthplace of Irrigation (6000 BCE - 539 BCE)",
    quote: { text: "He who controls the water controls the people.", author: "Mesopotamian proverb" },
    challenge: [
      "Region between Tigris and Euphrates with unpredictable flooding",
      "Needed to control destructive floods while capturing water for agriculture",
      "Hot, arid climate with high evaporation rates",
      "Required long-distance water transport across desert terrain"
    ],
    summary: "Mesopotamia is where agriculture and civilization began. The Sumerians, Babylonians, and Assyrians developed the first irrigation systems and the first written engineering records.",
    keyFacts: [
      { label: "First Irrigation", value: "~6000 BCE" },
      { label: "Jerwan Aqueduct Length", value: "50 km" },
      { label: "Qanat Depth", value: "Up to 100m" },
      { label: "Written Records", value: "4000+ years" }
    ],
    legacyTable: [
      { ancient: "Qanat underground channels", modern: "Sustainable water harvesting" },
      { ancient: "Irrigation tablets", modern: "Engineering documentation" },
      { ancient: "Flood control levees", modern: "River management systems" },
      { ancient: "Water rights laws", modern: "Water allocation frameworks" }
    ],
    expertNote: "The cuneiform tablets describing canal construction are the world's first engineering documents. Every specification I write today follows a 4,000-year-old tradition."
  },
  "indus-valley": {
    tagline: "Pioneers of Urban Sanitation (3300 BCE - 1300 BCE)",
    quote: { text: "Cleanliness reflects the soul of a civilization.", author: "Archaeological interpretation" },
    challenge: [
      "Dense urban populations in Mohenjo-daro and Harappa (50,000+ people)",
      "Monsoon climate with seasonal flooding",
      "Need for public health in crowded conditions",
      "Water storage for year-round supply in arid region"
    ],
    summary: "The Indus Valley civilization achieved urban planning sophistication that wouldn't be matched in Europe for 4,000 years. Their sanitation and drainage systems were remarkably advanced.",
    keyFacts: [
      { label: "Urban Population", value: "50,000+" },
      { label: "Dholavira Reservoirs", value: "16" },
      { label: "Drainage Coverage", value: "Every street" },
      { label: "First Public Bath", value: "2600 BCE" }
    ],
    legacyTable: [
      { ancient: "Covered drainage", modern: "Sanitary sewers" },
      { ancient: "Great Bath", modern: "Public swimming pools" },
      { ancient: "Individual house drains", modern: "Household plumbing" },
      { ancient: "Rainwater harvesting", modern: "Sustainable water management" }
    ],
    expertNote: "When I model modern sewer systems, I'm applying principles the Indus Valley civilizations understood in 2500 BCE. Covered drains, consistent gradients, separate systems—they figured it out millennia ago."
  },
  "ancient-greece": {
    tagline: "Innovators of Water Theory (800 BCE - 31 BCE)",
    quote: { text: "Eureka!", author: "Archimedes" },
    challenge: [
      "Mountainous terrain with limited flat land for agriculture",
      "Seasonal rainfall patterns with dry summers",
      "Need for water in hilltop cities and temples",
      "Mining operations requiring drainage"
    ],
    summary: "The Greeks combined practical engineering with theoretical understanding. Archimedes and others laid the foundations of hydrostatics that still govern fluid mechanics today.",
    keyFacts: [
      { label: "Archimedes' Principle", value: "250 BCE" },
      { label: "First Water Filter", value: "400 BCE" },
      { label: "Tunnel of Eupalinos", value: "1 km long" },
      { label: "Scientific Method", value: "Began here" }
    ],
    legacyTable: [
      { ancient: "Archimedes screw", modern: "Wastewater pumps worldwide" },
      { ancient: "Hydrostatics theory", modern: "All fluid mechanics" },
      { ancient: "Hippocratic sleeve", modern: "Water filtration" },
      { ancient: "Hydraulic mining", modern: "Mining drainage" }
    ],
    expertNote: "Archimedes' work on floating bodies is where hydraulic science truly began. Every pressure calculation I do in SWMM models traces back to principles he discovered."
  },
  "ancient-china": {
    tagline: "Grand Canal Builders (1600 BCE - 220 CE)",
    quote: { text: "Dig the channels deep; keep the dykes low.", author: "Li Bing, engineer of Dujiangyan" },
    challenge: [
      "Massive flooding from major rivers (Yellow, Yangtze)",
      "Need to connect north and south for trade and military",
      "Irrigation for rice cultivation in varied terrain",
      "Population centers far from water sources"
    ],
    summary: "Chinese water engineering operated at a scale unmatched anywhere else in the ancient world. The Grand Canal remains the world's longest artificial waterway.",
    keyFacts: [
      { label: "Grand Canal Length", value: "1,800 km" },
      { label: "Dujiangyan Still Operating", value: "2,270 years" },
      { label: "Area Irrigated", value: "5,300 km²" },
      { label: "Pound Lock Invention", value: "984 CE" }
    ],
    legacyTable: [
      { ancient: "Dujiangyan system", modern: "Sustainable flood control" },
      { ancient: "Pound lock", modern: "Panama Canal locks" },
      { ancient: "Bamboo pipes", modern: "Sustainable materials" },
      { ancient: "Grand Canal", modern: "Inland waterway networks" }
    ],
    expertNote: "Dujiangyan is my favorite ancient water project. It works with river dynamics rather than fighting them. After 2,270 years of continuous operation, it irrigates more land than ever."
  },
  "islamic-golden-age": {
    tagline: "Innovators of Mechanical Water Devices (750 CE - 1258 CE)",
    quote: { text: "Seek knowledge even unto China.", author: "Islamic proverb" },
    challenge: [
      "Spread across diverse climates from Spain to Central Asia",
      "Needed to adapt water systems to local conditions",
      "Desire for gardens and fountains in arid regions",
      "Advancing mechanical and scientific knowledge"
    ],
    summary: "The Islamic Golden Age preserved and advanced ancient knowledge while making revolutionary innovations in mechanical engineering and water-powered automation.",
    keyFacts: [
      { label: "Al-Jazari's Book", value: "1206 CE" },
      { label: "Noria Height", value: "20+ meters" },
      { label: "Alhambra Fountains", value: "12 lions" },
      { label: "Crankshaft Invention", value: "First here" }
    ],
    legacyTable: [
      { ancient: "Al-Jazari's automata", modern: "Robotics and automation" },
      { ancient: "Crankshaft mechanism", modern: "Every car engine" },
      { ancient: "Noria water wheels", modern: "Renewable hydropower" },
      { ancient: "Garden irrigation", modern: "Landscape architecture" }
    ],
    expertNote: "Al-Jazari was building programmable robots in 1206. His water-powered automata were centuries ahead of their time. The crankshaft he invented is in every car you've ever driven."
  },
  "mesoamerica": {
    tagline: "Chinampas and Rainwater Genius (1200 BCE - 1521 CE)",
    quote: { text: "The city seemed to rise from the water like a dream.", author: "Spanish conquistador, describing Tenochtitlan" },
    challenge: [
      "Building a city on a lake (Tenochtitlan)",
      "Feeding 200,000+ people with limited farmland",
      "Jungle cities with no permanent water sources (Maya)",
      "Seasonal rainfall requiring year-round storage"
    ],
    summary: "Mesoamerican civilizations developed unique solutions to water challenges, from floating gardens to massive rainwater collection systems that supported cities in the jungle.",
    keyFacts: [
      { label: "Tenochtitlan Population", value: "200,000+" },
      { label: "Tikal Population", value: "100,000" },
      { label: "Chinampa Harvests", value: "7 per year" },
      { label: "Dual Aqueduct", value: "Maintenance innovation" }
    ],
    legacyTable: [
      { ancient: "Chinampas", modern: "Sustainable intensive farming" },
      { ancient: "Aguada reservoirs", modern: "Rainwater harvesting" },
      { ancient: "Dual aqueducts", modern: "Infrastructure redundancy" },
      { ancient: "Lake-based cities", modern: "Floating architecture concepts" }
    ],
    expertNote: "The chinampas turned a lake into farmland without draining it. They created an ecosystem that was more productive than any land-based farm. That's not just engineering—that's ecological brilliance."
  }
,
  "minoan-crete": {
    tagline: "Europe's First Advanced Civilization (2000-1400 BCE)",
    quote: { text: "The labyrinth hides not a monster, but the world's first plumbing.", author: "Archaeological interpretation" },
    challenge: [
      "Multi-story palace complexes requiring sophisticated drainage",
      "Intense Mediterranean storms causing flooding risks",
      "Need for sanitation in dense ceremonial and residential spaces",
      "Seasonal rainfall requiring water storage"
    ],
    summary: "The Minoans achieved water engineering sophistication that wouldn't be matched in Europe for over 1,500 years. Their flush toilets and drainage systems were remarkably advanced.",
    keyFacts: [
      { label: "First Flush Toilets", value: "~1700 BCE" },
      { label: "Palace Stories", value: "4-5 levels" },
      { label: "Pipe Technology", value: "Conical terracotta" },
      { label: "Drainage Design", value: "Zigzag energy dissipation" }
    ],
    legacyTable: [
      { ancient: "Flush-type toilets", modern: "Modern flush toilets" },
      { ancient: "Terracotta pipes", modern: "Ceramic plumbing" },
      { ancient: "Stormwater management", modern: "Urban drainage systems" },
      { ancient: "Cistern integration", modern: "Rainwater harvesting" }
    ],
    expertNote: "The Minoans had flush toilets 3,700 years ago. Their terracotta pipes used conical joints that improved flow and fit—a design principle we still use today. Europe wouldn't see this level of sanitation again until the 19th century."
  },
  "modern-era": {
    tagline: "Industrial Scale Engineering (1750 CE - Present)",
    quote: { text: "Water is the driving force of all nature.", author: "Leonardo da Vinci" },
    challenge: [
      "Growing megacities requiring massive water infrastructure",
      "Climate change affecting water availability",
      "Providing clean water to billions of people",
      "Managing flood risks from rising sea levels"
    ],
    summary: "Modern water engineering operates at unprecedented scale, from mega-dams generating electricity for millions to desalination plants creating freshwater from the sea.",
    keyFacts: [
      { label: "Three Gorges Capacity", value: "22,500 MW" },
      { label: "Hoover Dam Height", value: "221 meters" },
      { label: "Global Desalination", value: "100 million m³/day" },
      { label: "Thames Barrier Closures", value: "200+" }
    ],
    legacyTable: [
      { ancient: "Ancient dams", modern: "Mega-dams (Three Gorges)" },
      { ancient: "Qanat evaporation control", modern: "Desalination technology" },
      { ancient: "Roman aqueducts", modern: "Continental water grids" },
      { ancient: "Nile flood basins", modern: "Computerized flood barriers" }
    ],
    expertNote: "Every modern water system builds on ancient principles. The Hoover Dam uses the same gravity concepts as Roman aqueducts. Our desalination plants solve the same problem qanats addressed—getting water where nature doesn't provide it."
  }
};

export interface DrainageSystem {
  civilization: string;
  time_period: string;
  drainage_scope: string;
  primary_functions: string[];
  infrastructure_elements: string[];
  app_summary: string;
}

export const drainageSystems: DrainageSystem[] = [
  {
    civilization: "Minoan (Knossos, Crete)",
    time_period: "c. 2000–1400 BCE",
    drainage_scope: "Palace-centered",
    primary_functions: ["Stormwater drainage", "Greywater removal", "Toilet waste conveyance"],
    infrastructure_elements: ["Stone-lined floor channels", "Terracotta conduits", "Sediment basins", "Multi-story drains"],
    app_summary: "At Knossos, the Minoans built a palace-wide drainage network of stone channels and conical terracotta pipes that removed stormwater, greywater, and toilet wastes from multi-story buildings."
  },
  {
    civilization: "Indus Valley (Mohenjo-Daro, Harappa)",
    time_period: "c. 2600–1900 BCE",
    drainage_scope: "Citywide, integrated with street grid",
    primary_functions: ["Household wastewater removal", "Street runoff drainage", "Latrine conveyance"],
    infrastructure_elements: ["Covered brick street drains", "Household connections", "Inspection chambers", "Standardized bricks"],
    app_summary: "Indus cities used standardized brick drains along streets, with most homes discharging bath and latrine wastewater into covered channels."
  },
  {
    civilization: "Rome (Cloaca Maxima)",
    time_period: "From c. 6th century BCE",
    drainage_scope: "City-scale trunk system",
    primary_functions: ["Marsh drainage", "Stormwater conveyance", "Combined sewage"],
    infrastructure_elements: ["Masonry trunk sewer", "Subsidiary sewers", "Public latrine connections", "Tiber outfalls"],
    app_summary: "Rome's Cloaca Maxima and connected sewers drained marshy areas, carried stormwater, and removed sewage from public baths and latrines."
  }
];

export interface CivilizationComparison {
  axis: string;
  minoan: string;
  indus: string;
  rome: string;
}

export const civilizationComparisons: CivilizationComparison[] = [
  { axis: "Scale", minoan: "Palace complexes", indus: "Entire planned cities", rome: "City-scale trunk systems" },
  { axis: "Coverage", minoan: "Elite architecture", indus: "Near-universal households", rome: "Public facilities focus" },
  { axis: "Innovation", minoan: "First palace-scale drainage", indus: "First universal urban network", rome: "Pioneering trunk sewers" }
];

export function getCivilizationDetail(regionId: string): CivilizationDetailData | undefined {
  return civilizationDetails[regionId];
}
