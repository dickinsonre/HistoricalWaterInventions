export interface ArtifactData {
  id: string;
  name: string;
  description: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  historicalPeriod: string;
  significance: string;
  yearBCE?: number;
  category: "irrigation" | "aqueduct" | "water-lifting" | "sanitation" | "dam" | "water-clock" | "fountain" | "canal";
}

export interface LocationData {
  id: string;
  name: string;
  description: string;
  historicalContext: string;
  artifacts: ArtifactData[];
  coordinates?: { lat: number; lng: number };
}

export interface RegionData {
  id: string;
  name: string;
  description: string;
  position: [number, number, number];
  color: string;
  era: string;
  dateRange: string;
  locations: LocationData[];
}

export interface GameData {
  regions: RegionData[];
}

export const eraFilters = [
  { id: "ancient", label: "Ancient Period", range: "6000 - 500 BCE" },
  { id: "classical", label: "Classical Period", range: "500 BCE - 500 CE" },
  { id: "medieval", label: "Medieval Period", range: "500 - 1400 CE" },
  { id: "modern", label: "Modern Era", range: "1400 CE - Present" }
];

export const categoryFilters = [
  { id: "irrigation", label: "Irrigation Systems", icon: "droplet" },
  { id: "aqueduct", label: "Aqueducts & Channels", icon: "waves" },
  { id: "water-lifting", label: "Water Lifting Devices", icon: "arrow-up" },
  { id: "sanitation", label: "Sanitation & Sewers", icon: "filter" },
  { id: "dam", label: "Dams & Reservoirs", icon: "container" },
  { id: "water-clock", label: "Water Clocks", icon: "clock" },
  { id: "fountain", label: "Fountains & Baths", icon: "sparkles" },
  { id: "canal", label: "Canals", icon: "route" }
];

export const gameData: GameData = {
  regions: [
    {
      id: "ancient-egypt",
      name: "Ancient Egypt",
      description: "Masters of Nile irrigation and water management",
      position: [0, 0, -12],
      color: "#DAA520",
      era: "ancient",
      dateRange: "3100 BCE - 30 BCE",
      locations: [
        {
          id: "nile-valley",
          name: "Nile River Valley",
          description: "Cradle of Egyptian water engineering",
          historicalContext: "The annual flooding of the Nile shaped Egyptian civilization for millennia",
          coordinates: { lat: 29.9792, lng: 31.1342 },
          artifacts: [
            {
              id: "shaduf",
              name: "Shaduf",
              description: "Hand-operated lever device for lifting water from canals to irrigation ditches",
              rarity: "rare",
              historicalPeriod: "New Kingdom (1550-1077 BCE)",
              significance: "First mechanical water-lifting device, still used today in rural Egypt",
              yearBCE: 1700,
              category: "water-lifting"
            },
            {
              id: "nilometer",
              name: "Nilometer",
              description: "Ancient device for measuring the Nile's water level during annual floods",
              rarity: "legendary",
              historicalPeriod: "Old Kingdom (2686-2181 BCE)",
              significance: "Used for 5,000 years to predict harvests and calculate taxes",
              yearBCE: 3000,
              category: "water-clock"
            }
          ]
        },
        {
          id: "karnak-temple",
          name: "Temple of Karnak",
          description: "Sacred lake and ritual water systems",
          historicalContext: "Religious center with sophisticated water purification",
          coordinates: { lat: 25.7188, lng: 32.6573 },
          artifacts: [
            {
              id: "clepsydra",
              name: "Water Clock (Clepsydra)",
              description: "Precision timekeeping device using regulated water flow",
              rarity: "epic",
              historicalPeriod: "New Kingdom (1550-1077 BCE)",
              significance: "First accurate timekeeper in human history",
              yearBCE: 1417,
              category: "water-clock"
            }
          ]
        }
      ]
    },
    {
      id: "mesopotamia",
      name: "Mesopotamia",
      description: "Birthplace of irrigation agriculture between the Tigris and Euphrates",
      position: [8, 0, -8],
      color: "#8B4513",
      era: "ancient",
      dateRange: "6000 BCE - 539 BCE",
      locations: [
        {
          id: "babylon",
          name: "Babylon",
          description: "City of the legendary Hanging Gardens",
          historicalContext: "Center of Babylonian water engineering marvels",
          coordinates: { lat: 32.5364, lng: 44.4209 },
          artifacts: [
            {
              id: "qanat-plans",
              name: "Qanat System Plans",
              description: "Underground water channel network for transporting water across deserts",
              rarity: "legendary",
              historicalPeriod: "Persian Period (550-330 BCE)",
              significance: "Underground aqueducts still in use today, transported water without evaporation",
              yearBCE: 1000,
              category: "aqueduct"
            },
            {
              id: "irrigation-tablet",
              name: "Irrigation Canal Tablet",
              description: "Cuneiform tablet describing canal construction techniques",
              rarity: "rare",
              historicalPeriod: "Sumerian Period (4500-1900 BCE)",
              significance: "Earliest written records of irrigation engineering",
              yearBCE: 4000,
              category: "irrigation"
            }
          ]
        },
        {
          id: "nineveh",
          name: "Nineveh",
          description: "Assyrian capital with remarkable aqueduct systems",
          historicalContext: "King Sennacherib's water supply system",
          coordinates: { lat: 36.3667, lng: 43.1500 },
          artifacts: [
            {
              id: "jerwan-aqueduct",
              name: "Jerwan Aqueduct Stone",
              description: "Stone from the world's oldest large-scale aqueduct",
              rarity: "epic",
              historicalPeriod: "Neo-Assyrian Period (911-609 BCE)",
              significance: "Brought water 50km to Nineveh, predating Roman aqueducts",
              yearBCE: 690,
              category: "aqueduct"
            }
          ]
        }
      ]
    },
    {
      id: "indus-valley",
      name: "Indus Valley",
      description: "Pioneers of urban water and sanitation systems",
      position: [12, 0, 0],
      color: "#4B0082",
      era: "ancient",
      dateRange: "3300 BCE - 1300 BCE",
      locations: [
        {
          id: "mohenjo-daro",
          name: "Mohenjo-daro",
          description: "Ancient city with world's first urban sanitation",
          historicalContext: "Remarkably advanced urban planning for 2600 BCE",
          coordinates: { lat: 27.3289, lng: 68.1389 },
          artifacts: [
            {
              id: "great-bath",
              name: "Great Bath Seal",
              description: "Seal depicting the world's first known public bath",
              rarity: "legendary",
              historicalPeriod: "Mature Harappan (2600-1900 BCE)",
              significance: "First public bathing facility, advanced waterproofing with bitumen",
              yearBCE: 2600,
              category: "fountain"
            },
            {
              id: "drain-system",
              name: "Covered Drain Blueprint",
              description: "Plans for the sophisticated covered drainage system",
              rarity: "epic",
              historicalPeriod: "Mature Harappan (2600-1900 BCE)",
              significance: "First covered drainage system in any ancient city",
              yearBCE: 2500,
              category: "sanitation"
            }
          ]
        },
        {
          id: "dholavira",
          name: "Dholavira Reservoir",
          description: "Sophisticated water harvesting system",
          historicalContext: "Water management in arid conditions",
          coordinates: { lat: 23.8867, lng: 70.2100 },
          artifacts: [
            {
              id: "reservoir-plans",
              name: "Reservoir Engineering Scroll",
              description: "Ancient plans for the massive rock-cut water reservoirs",
              rarity: "rare",
              historicalPeriod: "Mature Harappan (2600-1900 BCE)",
              significance: "16 reservoirs storing monsoon water year-round",
              yearBCE: 2300,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "minoan-crete",
      name: "Minoan Crete",
      description: "Europe's first advanced civilization with sophisticated water and sanitation systems that wouldn't be matched for millennia.",
      position: [6, 0, -3],
      color: "#9333ea",
      era: "ancient",
      dateRange: "2000-1400 BCE",
      locations: [
        {
          id: "knossos",
          name: "Palace of Knossos",
          description: "The legendary palace with advanced water systems",
          historicalContext: "Center of Minoan civilization and hydraulic innovation",
          coordinates: { lat: 35.2979, lng: 25.1631 },
          artifacts: [
            {
              id: "knossos-drainage",
              name: "Palace Drainage System",
              description: "Network of stone channels and terracotta conduits for stormwater and wastewater",
              rarity: "legendary",
              historicalPeriod: "Minoan (2000-1400 BCE)",
              significance: "Protected multi-story palace from flooding with zigzag channels and sediment traps",
              yearBCE: 1900,
              category: "sanitation"
            },
            {
              id: "minoan-toilet",
              name: "Flush-Type Toilet",
              description: "Water-assisted toilet with drains connected to palace drainage",
              rarity: "legendary",
              historicalPeriod: "Minoan (1700-1400 BCE)",
              significance: "Earliest known water-flushed toilets in the Western world",
              yearBCE: 1700,
              category: "sanitation"
            },
            {
              id: "terracotta-pipes",
              name: "Terracotta Drainage Pipes",
              description: "Conical pipe segments with flanged joints for water conveyance",
              rarity: "epic",
              historicalPeriod: "Minoan (2000-1400 BCE)",
              significance: "Quality rivaled classical systems 1500 years later",
              yearBCE: 1800,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "phaistos",
          name: "Phaistos Palace",
          description: "Second largest Minoan palace with water management systems",
          historicalContext: "Major administrative center in southern Crete",
          coordinates: { lat: 35.0512, lng: 24.8142 },
          artifacts: [
            {
              id: "phaistos-cistern",
              name: "Rainwater Harvesting Cistern",
              description: "Underground cistern fed by roof and courtyard drains",
              rarity: "epic",
              historicalPeriod: "Minoan (1900-1400 BCE)",
              significance: "Buffered seasonal water variability for palace water security",
              yearBCE: 1850,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "ancient-greece",
      name: "Ancient Greece",
      description: "Innovators of water theory and mechanical engineering",
      position: [-8, 0, -8],
      color: "#4169E1",
      era: "classical",
      dateRange: "800 BCE - 31 BCE",
      locations: [
        {
          id: "syracuse",
          name: "Syracuse",
          description: "Home of Archimedes and his water innovations",
          historicalContext: "Center of Hellenistic engineering genius",
          coordinates: { lat: 37.0755, lng: 15.2866 },
          artifacts: [
            {
              id: "archimedes-screw",
              name: "Archimedes Screw Model",
              description: "Working model of the revolutionary water-lifting device",
              rarity: "legendary",
              historicalPeriod: "Hellenistic Period (323-31 BCE)",
              significance: "Still used worldwide for irrigation and drainage",
              yearBCE: 250,
              category: "water-lifting"
            },
            {
              id: "hydrostatics-treatise",
              name: "On Floating Bodies Scroll",
              description: "Archimedes' treatise establishing hydrostatics",
              rarity: "epic",
              historicalPeriod: "Hellenistic Period (323-31 BCE)",
              significance: "Foundation of fluid mechanics and buoyancy principles",
              yearBCE: 250,
              category: "water-clock"
            }
          ]
        },
        {
          id: "athens",
          name: "Athens",
          description: "Water fountains and public infrastructure",
          historicalContext: "Democratic city with public water access",
          coordinates: { lat: 37.9838, lng: 23.7275 },
          artifacts: [
            {
              id: "hippocratic-sleeve",
              name: "Hippocratic Sleeve",
              description: "Cloth filter for purifying water",
              rarity: "rare",
              historicalPeriod: "Classical Period (480-323 BCE)",
              significance: "First recorded water filtration device for health",
              yearBCE: 400,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "ancient-rome",
      name: "Roman Empire",
      description: "Masters of aqueducts and large-scale water infrastructure",
      position: [-12, 0, 0],
      color: "#DC143C",
      era: "classical",
      dateRange: "27 BCE - 476 CE",
      locations: [
        {
          id: "rome",
          name: "Rome",
          description: "Heart of the empire's water network",
          historicalContext: "11 major aqueducts supplied the eternal city",
          coordinates: { lat: 41.9028, lng: 12.4964 },
          artifacts: [
            {
              id: "aqua-appia",
              name: "Aqua Appia Stone",
              description: "Foundation stone from Rome's first aqueduct",
              rarity: "legendary",
              historicalPeriod: "Roman Republic (509-27 BCE)",
              significance: "First Roman aqueduct, 16km long, mostly underground",
              yearBCE: 312,
              category: "aqueduct"
            },
            {
              id: "cloaca-maxima",
              name: "Cloaca Maxima Brick",
              description: "Brick from the great sewer of Rome",
              rarity: "epic",
              historicalPeriod: "Roman Kingdom (753-509 BCE)",
              significance: "One of world's earliest sewage systems, still partially in use",
              yearBCE: 600,
              category: "sanitation"
            }
          ]
        },
        {
          id: "pont-du-gard",
          name: "Pont du Gard",
          description: "Magnificent three-tiered aqueduct bridge",
          historicalContext: "Engineering marvel of Roman Gaul",
          coordinates: { lat: 43.9472, lng: 4.5356 },
          artifacts: [
            {
              id: "pont-du-gard-plans",
              name: "Aqueduct Engineering Plans",
              description: "Roman surveying instruments and construction plans",
              rarity: "rare",
              historicalPeriod: "Early Empire (27 BCE - 284 CE)",
              significance: "50km aqueduct with only 17m drop, precise 1:3000 gradient",
              yearBCE: -50,
              category: "aqueduct"
            }
          ]
        }
      ]
    },
    {
      id: "ancient-china",
      name: "Ancient China",
      description: "Grand canal builders and irrigation masters",
      position: [0, 0, 12],
      color: "#FFD700",
      era: "ancient",
      dateRange: "1600 BCE - 220 CE",
      locations: [
        {
          id: "dujiangyan",
          name: "Dujiangyan",
          description: "Still-operating ancient irrigation system",
          historicalContext: "Built by Li Bing and his son in Sichuan",
          coordinates: { lat: 31.0005, lng: 103.6200 },
          artifacts: [
            {
              id: "dujiangyan-model",
              name: "Dujiangyan Irrigation Model",
              description: "Scale model of the ingenious flood control system",
              rarity: "legendary",
              historicalPeriod: "Warring States (475-221 BCE)",
              significance: "Still irrigates 5,300 sq km after 2,270 years",
              yearBCE: 256,
              category: "irrigation"
            },
            {
              id: "bamboo-pipe",
              name: "Bamboo Water Pipe",
              description: "Ancient bamboo piping technology",
              rarity: "rare",
              historicalPeriod: "Han Dynasty (206 BCE - 220 CE)",
              significance: "Natural material pipeline system for water transport",
              yearBCE: 100,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "grand-canal",
          name: "Grand Canal",
          description: "World's longest artificial waterway",
          historicalContext: "Connecting Beijing to Hangzhou",
          coordinates: { lat: 35.0000, lng: 117.0000 },
          artifacts: [
            {
              id: "canal-lock",
              name: "Pound Lock Design",
              description: "Revolutionary lock gate mechanism",
              rarity: "epic",
              historicalPeriod: "Song Dynasty (960-1279 CE)",
              significance: "Invention of modern canal lock system",
              yearBCE: -984,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "islamic-golden-age",
      name: "Islamic Golden Age",
      description: "Innovators of mechanical water devices and fountains",
      position: [8, 0, 8],
      color: "#228B22",
      era: "medieval",
      dateRange: "750 CE - 1258 CE",
      locations: [
        {
          id: "baghdad",
          name: "Baghdad",
          description: "Center of water engineering innovation",
          historicalContext: "House of Wisdom and mechanical genius",
          coordinates: { lat: 33.3152, lng: 44.3661 },
          artifacts: [
            {
              id: "al-jazari-automata",
              name: "Al-Jazari's Water Automata",
              description: "Mechanical water-powered devices and clocks",
              rarity: "legendary",
              historicalPeriod: "Abbasid Caliphate (750-1258 CE)",
              significance: "Father of robotics, invented crankshaft and water-powered machines",
              yearBCE: -1206,
              category: "water-clock"
            },
            {
              id: "noria-wheel",
              name: "Noria Water Wheel",
              description: "Large water-lifting wheel mechanism",
              rarity: "epic",
              historicalPeriod: "Early Islamic Period (7th-10th c.)",
              significance: "Could lift water 20 meters high using river current",
              yearBCE: -800,
              category: "water-lifting"
            }
          ]
        },
        {
          id: "alhambra",
          name: "Alhambra Palace",
          description: "Masterpiece of Islamic garden irrigation",
          historicalContext: "Moorish Spain's water paradise",
          coordinates: { lat: 37.1760, lng: -3.5881 },
          artifacts: [
            {
              id: "fountain-lions",
              name: "Court of Lions Fountain Design",
              description: "Plans for the famous twelve lion fountain",
              rarity: "rare",
              historicalPeriod: "Nasrid Dynasty (1238-1492 CE)",
              significance: "Masterwork of hydraulic engineering and art",
              yearBCE: -1362,
              category: "fountain"
            }
          ]
        }
      ]
    },
    {
      id: "mesoamerica",
      name: "Mesoamerica",
      description: "Chinampas and floating garden engineers",
      position: [-8, 0, 8],
      color: "#20B2AA",
      era: "medieval",
      dateRange: "1200 BCE - 1521 CE",
      locations: [
        {
          id: "tenochtitlan",
          name: "Tenochtitlan",
          description: "Aztec island city with sophisticated waterways",
          historicalContext: "Venice of the New World",
          coordinates: { lat: 19.4326, lng: -99.1332 },
          artifacts: [
            {
              id: "chinampa-tools",
              name: "Chinampa Farming Tools",
              description: "Tools for creating and maintaining floating gardens",
              rarity: "epic",
              historicalPeriod: "Aztec Empire (1428-1521 CE)",
              significance: "Floating gardens that fed 200,000 people",
              yearBCE: -1428,
              category: "irrigation"
            },
            {
              id: "aqueduct-chapultepec",
              name: "Chapultepec Aqueduct Stone",
              description: "Stone from the dual aqueduct system",
              rarity: "rare",
              historicalPeriod: "Aztec Empire (1428-1521 CE)",
              significance: "Twin channels allowed cleaning without interrupting supply",
              yearBCE: -1466,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "tikal",
          name: "Tikal",
          description: "Maya rainwater collection genius",
          historicalContext: "Jungle city dependent on water management",
          coordinates: { lat: 17.2220, lng: -89.6237 },
          artifacts: [
            {
              id: "aguada-system",
              name: "Aguada Reservoir Plan",
              description: "Maya rainwater reservoir system design",
              rarity: "legendary",
              historicalPeriod: "Classic Maya (250-900 CE)",
              significance: "Supported 100,000 people in jungle without rivers",
              yearBCE: -600,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "ancient-persia",
      name: "Ancient Persia",
      description: "Masters of underground water transport and desert irrigation",
      position: [10, 0, -6],
      color: "#B8860B",
      era: "ancient",
      dateRange: "1000 BCE - 651 CE",
      locations: [
        {
          id: "yazd",
          name: "Yazd",
          description: "City of qanats and wind catchers",
          historicalContext: "Desert oasis sustained by underground water systems",
          coordinates: { lat: 31.8974, lng: 54.3569 },
          artifacts: [
            {
              id: "qanat-tunnel",
              name: "Qanat Underground Tunnel",
              description: "Gently sloping underground channel tapping distant aquifers",
              rarity: "legendary",
              historicalPeriod: "Achaemenid Period (550-330 BCE)",
              significance: "Over 30,000 qanats still function in Iran today; some extend 70km",
              yearBCE: 1000,
              category: "aqueduct"
            },
            {
              id: "yakhchal",
              name: "Yakhchal Ice House",
              description: "Domed structure for making and storing ice in desert climates",
              rarity: "epic",
              historicalPeriod: "Achaemenid Period (550-330 BCE)",
              significance: "Made ice year-round using evaporative cooling; inspired modern sustainable architecture",
              yearBCE: 400,
              category: "dam"
            }
          ]
        },
        {
          id: "persepolis",
          name: "Persepolis",
          description: "Royal capital with advanced drainage and water supply",
          historicalContext: "Ceremonial capital of the Achaemenid Empire",
          coordinates: { lat: 29.9352, lng: 52.8912 },
          artifacts: [
            {
              id: "persepolis-drains",
              name: "Persepolis Drainage System",
              description: "Sophisticated underground drainage protecting the royal terrace",
              rarity: "rare",
              historicalPeriod: "Achaemenid Period (518-330 BCE)",
              significance: "Protected elaborate stone carvings from water damage for 2,500 years",
              yearBCE: 500,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "khmer-empire",
      name: "Khmer Empire",
      description: "Builders of the world's largest pre-industrial hydraulic cities",
      position: [14, 0, 6],
      color: "#2E8B57",
      era: "medieval",
      dateRange: "802 CE - 1431 CE",
      locations: [
        {
          id: "angkor",
          name: "Angkor",
          description: "Largest pre-industrial city powered by water management",
          historicalContext: "Home to up to 1 million people supported by massive reservoirs",
          coordinates: { lat: 13.4125, lng: 103.8670 },
          artifacts: [
            {
              id: "west-baray",
              name: "West Baray Reservoir",
              description: "Massive rectangular reservoir measuring 8km x 2.2km",
              rarity: "legendary",
              historicalPeriod: "Angkor Period (11th century CE)",
              significance: "Stored monsoon water for year-round rice irrigation; supported millions",
              yearBCE: -1050,
              category: "dam"
            },
            {
              id: "neak-poan",
              name: "Neak Poan Temple",
              description: "Island temple with five interconnected medicinal basins",
              rarity: "epic",
              historicalPeriod: "Angkor Period (12th century CE)",
              significance: "Combined water engineering with healthcare; still used in rain ceremonies",
              yearBCE: -1191,
              category: "fountain"
            }
          ]
        },
        {
          id: "phnom-kulen",
          name: "Phnom Kulen",
          description: "Sacred mountain with river of thousand lingas",
          historicalContext: "Spiritual source of Khmer Empire's water",
          coordinates: { lat: 13.6150, lng: 104.0792 },
          artifacts: [
            {
              id: "linga-river",
              name: "River of Thousand Lingas",
              description: "Carved riverbed blessing water flowing to Angkor",
              rarity: "rare",
              historicalPeriod: "Angkor Period (9th century CE)",
              significance: "Sacred carvings blessed all water flowing downstream to Angkor",
              yearBCE: -850,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "nubia",
      name: "Nubia",
      description: "Nile kingdom that pioneered water-lifting technology",
      position: [4, 0, -10],
      color: "#8B0000",
      era: "ancient",
      dateRange: "2500 BCE - 350 CE",
      locations: [
        {
          id: "meroe",
          name: "Meroe",
          description: "Capital of the Kingdom of Kush",
          historicalContext: "African kingdom with advanced irrigation",
          coordinates: { lat: 16.9380, lng: 33.7489 },
          artifacts: [
            {
              id: "saqia-wheel",
              name: "Saqia (Eskale) Water Wheel",
              description: "Animal-powered waterwheel with perpendicular gear transmission",
              rarity: "legendary",
              historicalPeriod: "Meroitic Period (300 BCE - 350 CE)",
              significance: "World's first automated machine; predated Greek mechanisms by 1000+ years",
              yearBCE: 1000,
              category: "water-lifting"
            },
            {
              id: "nubian-shadouf",
              name: "Multi-Stage Shadouf",
              description: "Series of counterweighted levers for lifting water to higher elevations",
              rarity: "epic",
              historicalPeriod: "Kingdom of Kush (2500-300 BCE)",
              significance: "Enabled year-round agriculture beyond Nile flood season",
              yearBCE: 2000,
              category: "water-lifting"
            }
          ]
        },
        {
          id: "kerma",
          name: "Kerma",
          description: "Ancient Nubian capital with sophisticated water systems",
          historicalContext: "Pre-Kushite civilization on the Nile",
          coordinates: { lat: 19.5990, lng: 30.4117 },
          artifacts: [
            {
              id: "kerma-basin",
              name: "Kerma Irrigation Basin",
              description: "Early basin irrigation system adapted from Egyptian techniques",
              rarity: "rare",
              historicalPeriod: "Kerma Period (2500-1500 BCE)",
              significance: "Independent development of Nile flood management",
              yearBCE: 2000,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "nabataean",
      name: "Nabataean Kingdom",
      description: "Desert water harvesting masters who made Petra flourish in one of Earth's driest regions",
      position: [10, 0, -6],
      color: "#D2691E",
      era: "classical",
      dateRange: "400 BCE - 106 CE",
      locations: [
        {
          id: "petra",
          name: "Petra",
          description: "The Rose City with remarkable water management",
          historicalContext: "Carved city thriving in the desert through ingenious water systems",
          coordinates: { lat: 30.3285, lng: 35.4444 },
          artifacts: [
            {
              id: "nabataean-cistern",
              name: "Rock-Carved Cistern",
              description: "Massive cisterns carved directly into solid sandstone cliffs",
              rarity: "legendary",
              historicalPeriod: "Nabataean Period (400 BCE - 106 CE)",
              significance: "Stored enough water for 30,000 residents in one of Earth's driest regions",
              yearBCE: 300,
              category: "dam"
            },
            {
              id: "petra-pipeline",
              name: "Ceramic Pipeline",
              description: "Terracotta pipes with settling tanks for water purification",
              rarity: "epic",
              historicalPeriod: "Nabataean Period (400 BCE - 106 CE)",
              significance: "Delivered clean water through 12km of pipelines across the city",
              yearBCE: 200,
              category: "aqueduct"
            },
            {
              id: "flash-flood-dam",
              name: "Flash Flood Dam",
              description: "Dams across narrow canyons to capture sudden desert floods",
              rarity: "epic",
              historicalPeriod: "Nabataean Period (400 BCE - 106 CE)",
              significance: "Captured rare rainfall and channeled it into storage systems",
              yearBCE: 250,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "sri-lanka",
      name: "Ancient Sri Lanka",
      description: "Most sophisticated ancient reservoir system with pioneering valve technology",
      position: [14, 0, 4],
      color: "#228B22",
      era: "classical",
      dateRange: "300 BCE - 1200 CE",
      locations: [
        {
          id: "anuradhapura",
          name: "Anuradhapura",
          description: "Ancient capital with revolutionary water engineering",
          historicalContext: "Center of the world's most advanced ancient irrigation",
          coordinates: { lat: 8.3114, lng: 80.4037 },
          artifacts: [
            {
              id: "biso-kotuwa",
              name: "Biso Kotuwa (Valve Pit)",
              description: "World's first valve tower for controlled water release from reservoirs",
              rarity: "legendary",
              historicalPeriod: "Anuradhapura Period (300 BCE - 1000 CE)",
              significance: "Precision water level control that modern engineers still study",
              yearBCE: 300,
              category: "dam"
            },
            {
              id: "tank-cascade",
              name: "Tank Cascade System",
              description: "Network of 30,000+ interconnected reservoirs",
              rarity: "legendary",
              historicalPeriod: "Anuradhapura Period (300 BCE - 1000 CE)",
              significance: "Largest ancient irrigation network, still functioning today",
              yearBCE: 200,
              category: "irrigation"
            },
            {
              id: "bisokotuwa-sluice",
              name: "Precision Sluice Gate",
              description: "Advanced water release mechanism preventing dam erosion",
              rarity: "epic",
              historicalPeriod: "Anuradhapura Period (300 BCE - 1000 CE)",
              significance: "Solved dam erosion problems that plagued other civilizations",
              yearBCE: 250,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "ancestral-puebloans",
      name: "Ancestral Puebloans",
      description: "Arid climate water management masters of the American Southwest",
      position: [-14, 0, 4],
      color: "#CD853F",
      era: "medieval",
      dateRange: "100 CE - 1300 CE",
      locations: [
        {
          id: "mesa-verde",
          name: "Mesa Verde",
          description: "Cliff dwellings with ingenious water collection",
          historicalContext: "Ancient pueblo civilization adapting to harsh desert",
          coordinates: { lat: 37.1836, lng: -108.4887 },
          artifacts: [
            {
              id: "seep-reservoir",
              name: "Seep-Fed Reservoir",
              description: "Reservoir capturing water from natural rock seeps",
              rarity: "epic",
              historicalPeriod: "Pueblo III Period (1150-1300 CE)",
              significance: "Sustained cliff dwelling communities through dry seasons",
              yearBCE: -1200,
              category: "dam"
            },
            {
              id: "check-dam",
              name: "Agricultural Check Dam",
              description: "Stone barriers capturing runoff for crop irrigation",
              rarity: "rare",
              historicalPeriod: "Pueblo II-III Period (900-1300 CE)",
              significance: "Enabled farming in areas with less than 25cm annual rainfall",
              yearBCE: -1000,
              category: "irrigation"
            },
            {
              id: "bedrock-ditch",
              name: "Bedrock Irrigation Ditch",
              description: "Channels carved directly into sandstone bedrock",
              rarity: "rare",
              historicalPeriod: "Pueblo II-III Period (900-1300 CE)",
              significance: "Permanent irrigation infrastructure lasting centuries",
              yearBCE: -1100,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "byzantine",
      name: "Byzantine Empire",
      description: "Urban water supply at massive scale in Constantinople",
      position: [2, 0, -6],
      color: "#800080",
      era: "medieval",
      dateRange: "330 CE - 1453 CE",
      locations: [
        {
          id: "constantinople",
          name: "Constantinople",
          description: "Capital with underground water cathedrals",
          historicalContext: "Eastern Roman Empire's engineering marvels",
          coordinates: { lat: 41.0082, lng: 28.9784 },
          artifacts: [
            {
              id: "basilica-cistern",
              name: "Basilica Cistern",
              description: "Underground cathedral-sized reservoir with 336 columns",
              rarity: "legendary",
              historicalPeriod: "Byzantine Period (532 CE)",
              significance: "Stored 80,000 cubic meters of water for the imperial palace",
              yearBCE: -532,
              category: "dam"
            },
            {
              id: "valens-aqueduct",
              name: "Valens Aqueduct Stone",
              description: "Stone from the aqueduct still standing after 1,600 years",
              rarity: "legendary",
              historicalPeriod: "Late Roman/Early Byzantine (368 CE)",
              significance: "Carried water 250km to Constantinople, still visible today",
              yearBCE: -368,
              category: "aqueduct"
            },
            {
              id: "nymphaeum",
              name: "Public Fountain (Nymphaeum)",
              description: "Ornate public fountain distributing water to citizens",
              rarity: "epic",
              historicalPeriod: "Byzantine Period (400-600 CE)",
              significance: "Free public water access for all citizens",
              yearBCE: -500,
              category: "fountain"
            }
          ]
        }
      ]
    },
    {
      id: "modern-era",
      name: "Modern Era",
      description: "The industrial revolution and beyond brought unprecedented scale to water engineering, from massive dams to desalination technology.",
      position: [-10, 0.5, -8],
      color: "#6366f1",
      era: "modern",
      dateRange: "1750 CE - Present",
      locations: [
        {
          id: "hoover-dam",
          name: "Hoover Dam, USA",
          description: "Iconic American mega-dam on the Colorado River",
          historicalContext: "Depression-era engineering marvel",
          coordinates: { lat: 36.0156, lng: -114.7377 },
          artifacts: [
            {
              id: "hoover-dam-turbine",
              name: "Hoover Dam Turbine",
              description: "One of the massive hydroelectric turbines powering the American Southwest",
              rarity: "legendary",
              historicalPeriod: "Modern Era (1936 CE)",
              significance: "221 meters tall, powers 1.3 million homes",
              yearBCE: -1936,
              category: "dam"
            }
          ]
        },
        {
          id: "three-gorges",
          name: "Three Gorges Dam, China",
          description: "World's largest power station by installed capacity",
          historicalContext: "Modern China's engineering ambition",
          coordinates: { lat: 30.8228, lng: 111.0036 },
          artifacts: [
            {
              id: "three-gorges-lock",
              name: "Three Gorges Ship Lock",
              description: "Five-stage ship lock lifting vessels 113 meters",
              rarity: "legendary",
              historicalPeriod: "Modern Era (2006 CE)",
              significance: "Largest hydroelectric dam in the world, 22,500 MW capacity",
              yearBCE: -2006,
              category: "dam"
            }
          ]
        },
        {
          id: "desalination-plants",
          name: "Desalination Technology",
          description: "Converting seawater to freshwater for arid regions",
          historicalContext: "Solution for water-scarce nations",
          coordinates: { lat: 24.4539, lng: 54.3773 },
          artifacts: [
            {
              id: "reverse-osmosis",
              name: "Reverse Osmosis Membrane",
              description: "Modern water purification technology",
              rarity: "epic",
              historicalPeriod: "Modern Era (1960s CE)",
              significance: "Provides freshwater to millions in arid regions",
              yearBCE: -1965,
              category: "sanitation"
            },
            {
              id: "drip-irrigation",
              name: "Drip Irrigation System",
              description: "Water-efficient agricultural technology from Israel",
              rarity: "epic",
              historicalPeriod: "Modern Era (1960s CE)",
              significance: "Reduces water usage by 30-70% compared to flood irrigation",
              yearBCE: -1965,
              category: "irrigation"
            }
          ]
        },
        {
          id: "thames-barrier",
          name: "Thames Barrier, UK",
          description: "World's second-largest movable flood barrier",
          historicalContext: "Protecting London from rising seas",
          coordinates: { lat: 51.4967, lng: 0.0336 },
          artifacts: [
            {
              id: "thames-barrier-gate",
              name: "Thames Barrier Gate",
              description: "Rotating steel gates protecting London from flooding",
              rarity: "epic",
              historicalPeriod: "Modern Era (1984 CE)",
              significance: "Has prevented over 200 flood events since 1984",
              yearBCE: -1984,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "phoenicia",
      name: "Phoenicia",
      description: "Maritime masters who engineered artificial harbors and shipboard water systems",
      position: [5, 0, -5],
      color: "#8B4513",
      era: "ancient",
      dateRange: "1500 - 300 BCE",
      locations: [
        {
          id: "tyre-harbor",
          name: "Tyre Harbor Complex",
          description: "Ancient artificial harbor with sophisticated water management",
          historicalContext: "Phoenicians built the Mediterranean's most advanced ports",
          coordinates: { lat: 33.2708, lng: 35.1956 },
          artifacts: [
            {
              id: "artificial-harbor",
              name: "Artificial Harbor (Cothon)",
              description: "Man-made protected harbors with sophisticated water circulation systems",
              rarity: "epic",
              historicalPeriod: "Phoenician Period (1000 BCE)",
              significance: "First large-scale artificial harbors, enabling Mediterranean trade dominance",
              yearBCE: 1000,
              category: "canal"
            },
            {
              id: "maritime-cistern",
              name: "Maritime Cisterns",
              description: "Shipboard and dockside freshwater storage systems for long voyages",
              rarity: "rare",
              historicalPeriod: "Phoenician Period (1200 BCE)",
              significance: "Enabled voyages to Britain and possibly beyond, carrying months of water",
              yearBCE: 1200,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "carthage",
      name: "Carthage",
      description: "Phoenician colony that built the ancient world's largest cistern network",
      position: [3, 0, 0],
      color: "#8B0000",
      era: "classical",
      dateRange: "814 - 146 BCE",
      locations: [
        {
          id: "carthage-cisterns",
          name: "Carthage Cistern Network",
          description: "Massive underground water storage system",
          historicalContext: "Supplied a city of 500,000 with no nearby river",
          coordinates: { lat: 36.8528, lng: 10.3233 },
          artifacts: [
            {
              id: "maalga-cisterns",
              name: "La Malga Cisterns",
              description: "24 parallel cisterns holding 60 million liters of water",
              rarity: "legendary",
              historicalPeriod: "Punic Period (200 BCE)",
              significance: "Largest ancient cistern complex ever built, supplied by 132km aqueduct",
              yearBCE: 200,
              category: "dam"
            },
            {
              id: "opus-signinum",
              name: "Opus Signinum Waterproofing",
              description: "Crushed pottery mixed with lime to create waterproof cement",
              rarity: "rare",
              historicalPeriod: "Punic Period (300 BCE)",
              significance: "Revolutionary waterproofing technology adopted by Rome",
              yearBCE: 300,
              category: "aqueduct"
            }
          ]
        }
      ]
    },
    {
      id: "medieval-europe",
      name: "Medieval Europe",
      description: "Water power revolution: mills transformed manufacturing and agriculture",
      position: [-2, 0, -8],
      color: "#4A4A4A",
      era: "medieval",
      dateRange: "500 - 1400 CE",
      locations: [
        {
          id: "monastery-mills",
          name: "Cistercian Monasteries",
          description: "Monks as hydraulic engineers: systematizing water power",
          historicalContext: "Monasteries became centers of water engineering innovation",
          coordinates: { lat: 47.9281, lng: 4.0833 },
          artifacts: [
            {
              id: "water-mill",
              name: "Vertical Water Mill",
              description: "Overshot and undershot wheels powering grain mills, forges, and textile works",
              rarity: "rare",
              historicalPeriod: "Medieval Period (800 CE)",
              significance: "By 1086, England alone had 5,624 water mills—Europe's first industrial revolution",
              yearBCE: -800,
              category: "water-lifting"
            },
            {
              id: "tidal-mill",
              name: "Tidal Mill",
              description: "Mills powered by the rise and fall of tides in coastal estuaries",
              rarity: "epic",
              historicalPeriod: "Medieval Period (1000 CE)",
              significance: "Harvested tidal energy 800 years before modern tidal power plants",
              yearBCE: -1000,
              category: "water-lifting"
            },
            {
              id: "fulling-mill",
              name: "Fulling Mill",
              description: "Water-powered hammers for processing wool cloth",
              rarity: "rare",
              historicalPeriod: "Medieval Period (1100 CE)",
              significance: "Mechanized textile production, precursor to Industrial Revolution",
              yearBCE: -1100,
              category: "water-lifting"
            }
          ]
        }
      ]
    },
    {
      id: "inca-empire",
      name: "Inca Empire",
      description: "Mountain water masters: terraces, fountains, and aqueducts at extreme altitudes",
      position: [-10, 0, 4],
      color: "#CD853F",
      era: "medieval",
      dateRange: "1438 - 1533 CE",
      locations: [
        {
          id: "machu-picchu",
          name: "Machu Picchu",
          description: "Sacred city with sophisticated water supply system at 2,430m elevation",
          historicalContext: "Complete urban water infrastructure still functioning after 500+ years",
          coordinates: { lat: -13.1631, lng: -72.5450 },
          artifacts: [
            {
              id: "inca-fountain-system",
              name: "Machu Picchu Fountain System",
              description: "16 cascading stone fountains fed by 749-meter canal from natural spring",
              rarity: "legendary",
              historicalPeriod: "Inca Period (1450 CE)",
              significance: "Still functions today—designed for 25-300 L/min variable flow with emergency overflow",
              yearBCE: -1450,
              category: "fountain"
            },
            {
              id: "inca-supply-canal",
              name: "Machu Picchu Supply Canal",
              description: "Stone-lined canal bringing spring water 749m at precisely 3% slope",
              rarity: "epic",
              historicalPeriod: "Inca Period (1450 CE)",
              significance: "City location chosen based on spring assessment—water drove urban planning",
              yearBCE: -1450,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "tipon",
          name: "Tipón Hydraulic Complex",
          description: "Royal water garden and engineering showcase near Cusco",
          historicalContext: "May have been a hydraulic engineering laboratory",
          coordinates: { lat: -13.5667, lng: -71.7833 },
          artifacts: [
            {
              id: "tipon-terraces",
              name: "Tipón Water Terraces",
              description: "13 terraces with polished stone walls, decorative waterfalls and precisely calibrated canals",
              rarity: "legendary",
              historicalPeriod: "Inca Period (1400 CE)",
              significance: "Controlled water flow between terraces—possibly an engineering school",
              yearBCE: -1400,
              category: "irrigation"
            },
            {
              id: "stone-flow-controls",
              name: "Movable Stone Flow Controls",
              description: "Stone blocks that could redirect water flow between channels",
              rarity: "rare",
              historicalPeriod: "Inca Period (1400 CE)",
              significance: "Simple but reliable valves with no moving mechanical parts",
              yearBCE: -1400,
              category: "irrigation"
            }
          ]
        },
        {
          id: "cusco-region",
          name: "Sacred Valley",
          description: "Agricultural heartland with thousands of terraces",
          historicalContext: "Andenes terraces still irrigate farms today",
          coordinates: { lat: -13.3167, lng: -72.0833 },
          artifacts: [
            {
              id: "andenes",
              name: "Andenes (Agricultural Terraces)",
              description: "Stepped terraces cut into mountainsides with integrated irrigation channels",
              rarity: "epic",
              historicalPeriod: "Inca Period (1400 CE)",
              significance: "Stone walls absorbed heat during day, released at night for frost protection",
              yearBCE: -1400,
              category: "irrigation"
            },
            {
              id: "inca-aqueduct",
              name: "Inca Mountain Aqueduct",
              description: "Gravity-fed canals cut from single stones spanning mountainous terrain",
              rarity: "rare",
              historicalPeriod: "Inca Period (1200-1500 CE)",
              significance: "Covered 25,000 miles of road network with water access",
              yearBCE: -1300,
              category: "aqueduct"
            }
          ]
        }
      ]
    },
    {
      id: "balinese",
      name: "Balinese (Subak)",
      description: "Sacred water temples and democratic irrigation: rice terraces as spiritual landscape",
      position: [14, 0, 6],
      color: "#228B22",
      era: "medieval",
      dateRange: "9th Century CE - Present",
      locations: [
        {
          id: "bali-rice-terraces",
          name: "Jatiluwih Rice Terraces",
          description: "UNESCO World Heritage terraced landscape managed by water temples",
          historicalContext: "Subak system integrates religion, ecology, and water management",
          coordinates: { lat: -8.3694, lng: 115.1311 },
          artifacts: [
            {
              id: "subak-system",
              name: "Subak Irrigation System",
              description: "Community-owned cooperative water management combining temples, terraces, and democratic governance",
              rarity: "legendary",
              historicalPeriod: "9th Century CE - Present",
              significance: "UNESCO World Heritage—proves water management is social organization, not just engineering",
              yearBCE: -900,
              category: "irrigation"
            },
            {
              id: "water-temple",
              name: "Pura Ulun Danu (Water Temple)",
              description: "Sacred temples that coordinate irrigation schedules across multiple villages",
              rarity: "epic",
              historicalPeriod: "9th Century CE - Present",
              significance: "Religious ceremonies synchronize planting cycles and pest control through coordinated flooding",
              yearBCE: -900,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "aboriginal-australia",
      name: "Aboriginal Australia",
      description: "40,000 years of water knowledge: surviving the world's driest inhabited continent",
      position: [16, 0, 8],
      color: "#8B4513",
      era: "ancient",
      dateRange: "40,000 BCE - Present",
      locations: [
        {
          id: "brewarrina",
          name: "Brewarrina Fish Traps",
          description: "Possibly the oldest human structure on Earth, still functioning",
          historicalContext: "Stone fish traps in Barwon River managed by multiple Aboriginal nations",
          coordinates: { lat: -29.9583, lng: 146.8667 },
          artifacts: [
            {
              id: "brewarrina-traps",
              name: "Brewarrina Fish Traps (Baiame's Ngunnhu)",
              description: "Elaborate dry stone fish trap system designed to work with seasonal flooding",
              rarity: "legendary",
              historicalPeriod: "40,000+ years BP",
              significance: "World's oldest human construction still in use—managed communally for millennia",
              yearBCE: 40000,
              category: "irrigation"
            }
          ]
        },
        {
          id: "western-australia",
          name: "Gnamma Holes",
          description: "Rock-cut water storage enabling survival in extreme aridity",
          historicalContext: "Natural rock hollows enlarged and maintained along songlines",
          coordinates: { lat: -31.9505, lng: 115.8605 },
          artifacts: [
            {
              id: "gnamma-holes",
              name: "Gnamma Holes",
              description: "Natural rock hollows enlarged and sealed with spinifex resin for water storage",
              rarity: "epic",
              historicalPeriod: "10,000+ years BP",
              significance: "Part of complex water route networks along dreaming tracks/songlines",
              yearBCE: 10000,
              category: "dam"
            },
            {
              id: "aboriginal-wells",
              name: "Aboriginal Wells (Native Wells)",
              description: "Hand-dug wells up to 3+ meters deep, covered to prevent evaporation",
              rarity: "rare",
              historicalPeriod: "40,000+ years BP",
              significance: "Knowledge passed through oral tradition—enabled survival in world's driest continent",
              yearBCE: 40000,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "austronesian",
      name: "Austronesian Peoples",
      description: "Ocean masters: outrigger canoes enabled the greatest human migration in history",
      position: [15, 0, 5],
      color: "#4169E1",
      era: "ancient",
      dateRange: "3500 BCE - Present",
      locations: [
        {
          id: "pacific-voyaging",
          name: "Pacific Voyaging Networks",
          description: "Maritime technology enabling colonization from Taiwan to Easter Island to Madagascar",
          historicalContext: "First true ocean-going vessels in human history",
          coordinates: { lat: -17.6797, lng: 149.4068 },
          artifacts: [
            {
              id: "outrigger-canoe",
              name: "Outrigger Canoe",
              description: "Stabilized watercraft enabling ocean voyaging across the Pacific and Indian Oceans",
              rarity: "legendary",
              historicalPeriod: "3500 BCE onwards",
              significance: "Enabled colonization of Polynesia, Micronesia, and Madagascar—greatest human migration",
              yearBCE: 3500,
              category: "canal"
            },
            {
              id: "junk-rig",
              name: "Junk Rig Sail",
              description: "Battened sail with multiple horizontal panels—self-reefing in strong winds",
              rarity: "epic",
              historicalPeriod: "Several hundred BCE",
              significance: "Later adopted by Chinese—became dominant East Asian sail design",
              yearBCE: 300,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "ancient-japan",
      name: "Ancient Japan",
      description: "Masters of water gardens: from rice paddies to zen reflection pools",
      position: [18, 0, 2],
      color: "#DC143C",
      era: "medieval",
      dateRange: "300 BCE - 1600 CE",
      locations: [
        {
          id: "nara-region",
          name: "Nara & Kyoto Water Systems",
          description: "Imperial capitals with sophisticated water management",
          historicalContext: "Japanese engineers adapted Chinese techniques to local conditions",
          coordinates: { lat: 34.6851, lng: 135.8048 },
          artifacts: [
            {
              id: "suido",
              name: "Suido (Water Conduit System)",
              description: "Bamboo and ceramic pipe networks supplying castle towns and temples",
              rarity: "rare",
              historicalPeriod: "Edo Period (1600 CE)",
              significance: "Tokyo's water supply system dates to 1590—still partially in use",
              yearBCE: -1590,
              category: "aqueduct"
            },
            {
              id: "shishi-odoshi",
              name: "Shishi-odoshi (Deer Scarer)",
              description: "Bamboo water hammer device using water power to create sound",
              rarity: "rare",
              historicalPeriod: "Edo Period (1600 CE)",
              significance: "Elegant fusion of water engineering and garden aesthetics",
              yearBCE: -1600,
              category: "fountain"
            },
            {
              id: "tanada",
              name: "Tanada (Terraced Rice Paddies)",
              description: "Mountain rice terraces with intricate water distribution",
              rarity: "epic",
              historicalPeriod: "Yayoi Period (300 BCE)",
              significance: "Transformed Japanese landscape and supported population growth",
              yearBCE: 300,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "dutch-netherlands",
      name: "Dutch Netherlands",
      description: "Land from the sea: windmills, polders, and the battle against water",
      position: [2, 0, -6],
      color: "#FF8C00",
      era: "medieval",
      dateRange: "1200 CE - Present",
      locations: [
        {
          id: "kinderdijk",
          name: "Kinderdijk Windmills",
          description: "UNESCO World Heritage windmill system for land drainage",
          historicalContext: "Dutch reclaimed 1/3 of their country from sea and swamps",
          coordinates: { lat: 51.8839, lng: 4.6381 },
          artifacts: [
            {
              id: "polder-system",
              name: "Polder System",
              description: "Reclaimed land protected by dikes and drained by windmills",
              rarity: "legendary",
              historicalPeriod: "Medieval Period (1200 CE)",
              significance: "Created a nation below sea level—model for land reclamation worldwide",
              yearBCE: -1200,
              category: "dam"
            },
            {
              id: "windmill-pump",
              name: "Drainage Windmill",
              description: "Wind-powered scoop wheels lifting water from polders to canals",
              rarity: "epic",
              historicalPeriod: "15th Century CE",
              significance: "At peak, 10,000 windmills drained the Netherlands",
              yearBCE: -1400,
              category: "water-lifting"
            },
            {
              id: "gemaal",
              name: "Gemaal (Pumping Station)",
              description: "Steam and later electric pumps replacing windmills",
              rarity: "rare",
              historicalPeriod: "19th Century CE",
              significance: "Ir.D.F. Woudagemaal (1920) is UNESCO World Heritage—world's largest steam pumping station",
              yearBCE: -1920,
              category: "water-lifting"
            }
          ]
        }
      ]
    },
    {
      id: "ancient-india",
      name: "Ancient India",
      description: "Stepwells and tanks: water architecture as art and engineering",
      position: [10, 0, 2],
      color: "#FF6347",
      era: "medieval",
      dateRange: "3rd Century CE - 1800 CE",
      locations: [
        {
          id: "rajasthan",
          name: "Rajasthan Stepwells",
          description: "Monumental subterranean architecture for water access",
          historicalContext: "Desert state developed extraordinary water harvesting",
          coordinates: { lat: 27.0238, lng: 74.2179 },
          artifacts: [
            {
              id: "stepwell",
              name: "Stepwell (Vav/Baoli)",
              description: "Multi-story subterranean structures combining well, temple, and cooling retreat",
              rarity: "legendary",
              historicalPeriod: "3rd-19th Century CE",
              significance: "Rani ki Vav (1063 CE) is UNESCO World Heritage—inverted temple descending 7 stories",
              yearBCE: -300,
              category: "fountain"
            },
            {
              id: "johad",
              name: "Johad (Earthen Dam)",
              description: "Traditional rainwater harvesting structures reviving dried rivers",
              rarity: "epic",
              historicalPeriod: "Ancient - Present",
              significance: "Modern revival brought 5 rivers back to life in Rajasthan",
              yearBCE: -500,
              category: "dam"
            },
            {
              id: "tank-system",
              name: "Tank Irrigation System",
              description: "Interconnected reservoir networks across South India",
              rarity: "rare",
              historicalPeriod: "Chola Period (300 BCE)",
              significance: "Grand Anicut dam (2nd century) is oldest water-diversion structure in the world still in use",
              yearBCE: 200,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "hawaiian",
      name: "Hawaiian",
      description: "Lo'i kalo: taro pondfields as sustainable aquaculture",
      position: [8, 0, 10],
      color: "#20B2AA",
      era: "medieval",
      dateRange: "400 CE - Present",
      locations: [
        {
          id: "kauai",
          name: "Hanalei Valley",
          description: "Traditional taro cultivation with sophisticated water management",
          historicalContext: "Polynesians brought taro cultivation techniques to Hawaii",
          coordinates: { lat: 22.1919, lng: -159.4693 },
          artifacts: [
            {
              id: "loi-kalo",
              name: "Lo'i Kalo (Taro Pondfield)",
              description: "Flooded terraces for taro cultivation with continuous water flow",
              rarity: "epic",
              historicalPeriod: "400 CE onwards",
              significance: "Sustainable aquaculture—water flows through fields, supporting fish and taro together",
              yearBCE: -400,
              category: "irrigation"
            },
            {
              id: "auwai",
              name: "'Auwai (Irrigation Ditch)",
              description: "Stone-lined channels diverting stream water to taro fields",
              rarity: "rare",
              historicalPeriod: "400 CE onwards",
              significance: "Community-managed water systems—ahupua'a land division followed watersheds",
              yearBCE: -400,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "ethiopian",
      name: "Ethiopian Highlands",
      description: "Ancient water systems at the roof of Africa",
      position: [6, 0, 6],
      color: "#006400",
      era: "ancient",
      dateRange: "500 BCE - Present",
      locations: [
        {
          id: "axum",
          name: "Axum & Lalibela",
          description: "Rock-hewn reservoirs and churches with sophisticated drainage",
          historicalContext: "Ethiopian engineering adapted to highland terrain",
          coordinates: { lat: 14.1310, lng: 38.7189 },
          artifacts: [
            {
              id: "mai-shum",
              name: "Mai Shum (Queen of Sheba's Bath)",
              description: "Ancient rock-carved reservoir still used for water storage and baptisms",
              rarity: "epic",
              historicalPeriod: "1st Millennium BCE",
              significance: "Massive rock-cut pool demonstrates advanced Aksumite engineering",
              yearBCE: 500,
              category: "dam"
            },
            {
              id: "lalibela-drainage",
              name: "Lalibela Church Drainage",
              description: "Sophisticated water management protecting rock-hewn churches",
              rarity: "legendary",
              historicalPeriod: "12th Century CE",
              significance: "11 rock churches carved from single blocks—drainage prevents erosion after 800 years",
              yearBCE: -1200,
              category: "sanitation"
            }
          ]
        }
      ]
    }
  ]
};

export function getArtifactsByCategory(category: string): ArtifactData[] {
  const artifacts: ArtifactData[] = [];
  gameData.regions.forEach(region => {
    region.locations.forEach(location => {
      location.artifacts.forEach(artifact => {
        if (artifact.category === category) {
          artifacts.push(artifact);
        }
      });
    });
  });
  return artifacts;
}

export function getArtifactsByEra(era: string): ArtifactData[] {
  const artifacts: ArtifactData[] = [];
  gameData.regions.forEach(region => {
    if (region.era === era) {
      region.locations.forEach(location => {
        location.artifacts.forEach(artifact => {
          artifacts.push(artifact);
        });
      });
    }
  });
  return artifacts;
}

export function getAllArtifacts(): ArtifactData[] {
  const artifacts: ArtifactData[] = [];
  gameData.regions.forEach(region => {
    region.locations.forEach(location => {
      location.artifacts.forEach(artifact => {
        artifacts.push(artifact);
      });
    });
  });
  return artifacts;
}

export function getRegionByEra(era: string): RegionData[] {
  return gameData.regions.filter(region => region.era === era);
}