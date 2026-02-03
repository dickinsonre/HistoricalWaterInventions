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
        },
        {
          id: "lyon-siphons",
          name: "Lugdunum (Lyon) Siphons",
          description: "Most impressive inverted siphon aqueducts in the Roman world",
          historicalContext: "Roman Lyon had 4 major aqueducts with 9 siphons crossing deep valleys",
          coordinates: { lat: 45.7640, lng: 4.8357 },
          artifacts: [
            {
              id: "roman-inverted-siphon",
              name: "Roman Inverted Siphon",
              description: "Lead and stone pipes crossing valleys under pressure",
              rarity: "legendary",
              historicalPeriod: "Early Empire (27 BCE - 284 CE)",
              significance: "Gier aqueduct siphon crossed 123m deep valley with 1.2 million liters/day capacity",
              yearBCE: -20,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "rome-water-distribution",
          name: "Roman Water Distribution",
          description: "Sophisticated urban water metering and distribution system",
          historicalContext: "Frontinus documented Rome's water supply in 97 CE",
          coordinates: { lat: 41.8902, lng: 12.4922 },
          artifacts: [
            {
              id: "roman-orifice-control",
              name: "Quinaria Orifice Control",
              description: "Calibrated bronze orifices for precise water measurement and distribution",
              rarity: "epic",
              historicalPeriod: "Early Empire (27 BCE - 284 CE)",
              significance: "Standard unit (quinaria = 4.5cm diameter) allowed fair water taxation and allocation",
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
        },
        {
          id: "palenque",
          name: "Palenque",
          description: "Maya city with first pressurized water system in Americas",
          historicalContext: "Sophisticated hydraulic engineering in tropical rainforest",
          coordinates: { lat: 17.4838, lng: -92.0461 },
          artifacts: [
            {
              id: "maya-pressurized-system",
              name: "Maya Pressurized Water System",
              description: "Enclosed stone conduit using natural elevation drop to create pressurized water flow",
              rarity: "legendary",
              historicalPeriod: "750 CE or earlier",
              significance: "First known pressurized water system in the Americas; used Venturi effect centuries before European understanding",
              yearBCE: -750,
              category: "aqueduct"
            },
            {
              id: "palenque-aqueduct",
              name: "Palenque Underground Aqueduct",
              description: "Corbelled stone channels routing streams beneath plazas and pyramids",
              rarity: "epic",
              historicalPeriod: "600-800 CE",
              significance: "9 separate aqueducts; longest runs 60+ meters under the palace complex",
              yearBCE: -700,
              category: "aqueduct"
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
            },
            {
              id: "waterschap",
              name: "Water Board (Waterschap)",
              description: "Democratic water management authorities with power to levy taxes and make binding decisions",
              rarity: "legendary",
              historicalPeriod: "13th Century CE",
              significance: "Oldest democratic institution in the Netherlands—still operating essentially unchanged after 800 years",
              yearBCE: -1200,
              category: "dam"
            },
            {
              id: "boezem-system",
              name: "Boezem (Buffer Canal System)",
              description: "Interconnected canals and lakes storing water pumped from polders before release to sea",
              rarity: "epic",
              historicalPeriod: "Medieval Period",
              significance: "Critical infrastructure connecting entire drainage regions; buffers against both flooding and drought",
              yearBCE: -1300,
              category: "canal"
            }
          ]
        },
        {
          id: "delta-works",
          name: "Delta Works Region",
          description: "One of the Seven Wonders of the Modern World",
          historicalContext: "Built after 1953 flood that killed 1,836 people—shortened coastline by 700km",
          coordinates: { lat: 51.6283, lng: 3.8967 },
          artifacts: [
            {
              id: "delta-works",
              name: "Delta Works Storm Surge Barriers",
              description: "13 massive dams and barriers protecting the Netherlands from the sea, including the 9km Oosterscheldekering",
              rarity: "legendary",
              historicalPeriod: "1954-1997 CE",
              significance: "American Society of Civil Engineers Modern Wonder of the World; Maeslantkering arms weigh as much as Eiffel Tower each",
              yearBCE: -1997,
              category: "dam"
            },
            {
              id: "inundation-lines",
              name: "Waterlinies (Inundation Defense Lines)",
              description: "Military defense using controlled flooding—water 30-50cm deep stops both boats and infantry",
              rarity: "epic",
              historicalPeriod: "16th-20th Century CE",
              significance: "Stopped French invasion (1672); Stelling van Amsterdam with 42 forts is UNESCO World Heritage",
              yearBCE: -1672,
              category: "dam"
            },
            {
              id: "room-for-rivers",
              name: "Room for the Rivers (Ruimte voor de Rivier)",
              description: "Paradigm shift: instead of fighting water with higher dikes, make space for it with wider floodplains",
              rarity: "epic",
              historicalPeriod: "2006-2015 CE",
              significance: "Revolutionary approach now exported worldwide—lowering floodplains, creating bypass channels, relocating dikes inland",
              yearBCE: -2015,
              category: "canal"
            },
            {
              id: "veluwemeer-aqueduct",
              name: "Veluwemeer Aqueduct (Water Bridge)",
              description: "Aqueduct for boats crossing OVER a highway—inverted bridge design",
              rarity: "rare",
              historicalPeriod: "2002 CE",
              significance: "25m long, 3m deep water channel; elegant solution to bridge-or-tunnel dilemma",
              yearBCE: -2002,
              category: "aqueduct"
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
    },
    {
      id: "korean",
      name: "Ancient Korea",
      description: "Ondol heating, royal reservoirs, and the world's oldest hydraulic innovations",
      position: [17, 0, 2],
      color: "#E91E63",
      era: "ancient",
      dateRange: "330 BCE - 1897 CE",
      locations: [
        {
          id: "joseon-seoul",
          name: "Joseon Dynasty Seoul",
          description: "Royal capital with sophisticated urban water management",
          historicalContext: "Cheonggye Stream engineering shaped Korean capital for 600 years",
          coordinates: { lat: 37.5665, lng: 126.9780 },
          artifacts: [
            {
              id: "byeokgolje",
              name: "Byeokgolje Reservoir",
              description: "One of Asia's oldest reservoirs, built 330 BCE for rice irrigation",
              rarity: "legendary",
              historicalPeriod: "330 BCE",
              significance: "Still exists after 2,300 years—demonstrates early Korean hydraulic engineering mastery",
              yearBCE: 330,
              category: "dam"
            },
            {
              id: "cheonggye-stream",
              name: "Cheonggye Stream Engineering",
              description: "Stone-lined urban stream with flood control through Seoul",
              rarity: "epic",
              historicalPeriod: "1411 CE restoration",
              significance: "Restored in 2005 from buried highway—model for urban stream restoration worldwide",
              yearBCE: -1411,
              category: "canal"
            },
            {
              id: "ondol",
              name: "Ondol Underfloor Heating",
              description: "Bronze Age radiant floor heating using hot water/smoke channels",
              rarity: "epic",
              historicalPeriod: "1000 BCE onwards",
              significance: "Inspired modern radiant floor heating—still used in Korean homes today",
              yearBCE: 1000,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "great-zimbabwe",
      name: "Great Zimbabwe",
      description: "Africa's largest medieval city: stone walls with integrated water systems",
      position: [6, 0, 8],
      color: "#795548",
      era: "medieval",
      dateRange: "11th-15th Century CE",
      locations: [
        {
          id: "great-enclosure",
          name: "Great Enclosure",
          description: "Largest pre-colonial structure in sub-Saharan Africa",
          historicalContext: "Capital of the Kingdom of Zimbabwe, controlled gold trade",
          coordinates: { lat: -20.2674, lng: 30.9339 },
          artifacts: [
            {
              id: "zimbabwe-drainage",
              name: "Great Zimbabwe Drainage Channels",
              description: "Stone-lined drains integrated into massive curved walls",
              rarity: "epic",
              historicalPeriod: "11th-15th Century CE",
              significance: "Sophisticated urban planning in a city of 10,000-20,000 people",
              yearBCE: -1100,
              category: "sanitation"
            },
            {
              id: "zimbabwe-well",
              name: "Great Enclosure Well",
              description: "Stone-lined well providing water within fortress walls",
              rarity: "rare",
              historicalPeriod: "12th Century CE",
              significance: "Enabled year-round habitation of the royal compound",
              yearBCE: -1200,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "engaruka",
      name: "Engaruka (Tanzania)",
      description: "Mysterious abandoned irrigation city that fed 40,000 people",
      position: [5, 0, 7],
      color: "#4CAF50",
      era: "medieval",
      dateRange: "15th-17th Century CE",
      locations: [
        {
          id: "engaruka-ruins",
          name: "Engaruka Irrigation Ruins",
          description: "Stone-lined canals feeding 6,000+ hectares of terraces",
          historicalContext: "Abandoned around 1700 CE for unknown reasons—climate change suspected",
          coordinates: { lat: -2.9833, lng: 35.9667 },
          artifacts: [
            {
              id: "engaruka-canals",
              name: "Engaruka Stone Canal System",
              description: "Extensive stone-lined irrigation feeding terraced hillsides",
              rarity: "legendary",
              historicalPeriod: "15th-17th Century CE",
              significance: "Supported 30,000-40,000 people—one of Africa's largest pre-colonial irrigation systems",
              yearBCE: -1500,
              category: "canal"
            },
            {
              id: "engaruka-terraces",
              name: "Engaruka Agricultural Terraces",
              description: "Stone-walled terraces preventing erosion on steep slopes",
              rarity: "epic",
              historicalPeriod: "15th Century CE",
              significance: "Complex multi-level farming enabled intensive agriculture in semi-arid region",
              yearBCE: -1500,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "sahel",
      name: "Sahel Africa",
      description: "Zai pits and traditional water harvesting: turning desert green",
      position: [4, 0, 5],
      color: "#FFA726",
      era: "ancient",
      dateRange: "Ancient - Present",
      locations: [
        {
          id: "burkina-faso",
          name: "Burkina Faso",
          description: "Birthplace of the Zai pit water harvesting revival",
          historicalContext: "Yacouba Sawadogo revived ancient technique, transforming millions of hectares",
          coordinates: { lat: 12.2383, lng: -1.5616 },
          artifacts: [
            {
              id: "zai-pits",
              name: "Zai Pits (Tassa)",
              description: "Planting pits concentrating water and nutrients in degraded soil",
              rarity: "epic",
              historicalPeriod: "Ancient - Present",
              significance: "Yacouba Sawadogo's revival transformed 3+ million hectares—won Right Livelihood Award",
              yearBCE: 500,
              category: "irrigation"
            },
            {
              id: "half-moon",
              name: "Demi-Lunes (Half-Moons)",
              description: "Semi-circular earthen bunds capturing rainfall runoff",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Simple technique rehabilitates degraded land—spreading across Sahel",
              yearBCE: 300,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "nan-madol",
      name: "Nan Madol (Pohnpei)",
      description: "Venice of the Pacific: mysterious stone city built on coral reef",
      position: [12, 0, 8],
      color: "#00BCD4",
      era: "medieval",
      dateRange: "1200-1500 CE",
      locations: [
        {
          id: "nan-madol-ruins",
          name: "Nan Madol Ruins",
          description: "92 artificial islands connected by canals, built from basalt logs",
          historicalContext: "Ceremonial center of Saudeleur Dynasty—how they got freshwater remains a mystery",
          coordinates: { lat: 6.8433, lng: 158.3350 },
          artifacts: [
            {
              id: "nan-madol-canals",
              name: "Nan Madol Canal System",
              description: "Network of canals between 92 artificial islands built from basalt",
              rarity: "legendary",
              historicalPeriod: "1200-1500 CE",
              significance: "UNESCO World Heritage—'Venice of the Pacific' built with estimated 750,000 tons of basalt",
              yearBCE: -1200,
              category: "canal"
            },
            {
              id: "nan-madol-cisterns",
              name: "Nan Madol Freshwater Systems",
              description: "Unknown method of freshwater supply to marine ceremonial center",
              rarity: "epic",
              historicalPeriod: "1200-1500 CE",
              significance: "Mystery how 1,000+ residents got fresh water—possibly rainwater cisterns or underwater springs",
              yearBCE: -1200,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "chamorro",
      name: "Chamorro (Mariana Islands)",
      description: "Latte stone houses with integrated rainwater harvesting",
      position: [11, 0, 7],
      color: "#9C27B0",
      era: "ancient",
      dateRange: "1000 BCE - 1700 CE",
      locations: [
        {
          id: "guam",
          name: "Guam Latte Sites",
          description: "Ancient villages with iconic mushroom-shaped stone pillars",
          historicalContext: "Latte stones served structural and water-harvesting functions",
          coordinates: { lat: 13.4443, lng: 144.7937 },
          artifacts: [
            {
              id: "latte-stones",
              name: "Latte Stone Rain Catchers",
              description: "Mushroom-shaped capstones caught rain and channeled to gardens",
              rarity: "epic",
              historicalPeriod: "1000 BCE - 1700 CE",
              significance: "Dual-function architecture: structural support and water harvesting",
              yearBCE: 1000,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "tokyo-underground",
      name: "Modern Japan",
      description: "G-Cans: world's largest underground flood control cathedral",
      position: [19, 0, 3],
      color: "#607D8B",
      era: "modern",
      dateRange: "1993-Present",
      locations: [
        {
          id: "kasukabe",
          name: "G-Cans Project (Kasukabe)",
          description: "World's largest underground flood diversion facility",
          historicalContext: "Protects Tokyo from typhoon flooding—called 'Underground Temple'",
          coordinates: { lat: 35.9761, lng: 139.7522 },
          artifacts: [
            {
              id: "g-cans",
              name: "G-Cans Underground Flood Control",
              description: "5 massive silos connected by 6.4km of tunnels, moving 200 tons/second",
              rarity: "legendary",
              historicalPeriod: "1993-2006 CE",
              significance: "World's largest underground flood facility—protects 13 million Tokyo residents",
              yearBCE: -1993,
              category: "sanitation"
            },
            {
              id: "super-levee",
              name: "Super Levees (High-Standard Levees)",
              description: "30x height-to-width ratio levees designed to survive overtopping",
              rarity: "epic",
              historicalPeriod: "1987 CE onwards",
              significance: "Philosophy shift: accept floods will overtop, design for resilience",
              yearBCE: -1987,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "siam-thailand",
      name: "Siam (Thailand)",
      description: "Venice of the East: canal networks and floating markets",
      position: [15, 0, 6],
      color: "#9C27B0",
      era: "medieval",
      dateRange: "1238-1782 CE",
      locations: [
        {
          id: "ayutthaya",
          name: "Ayutthaya Island Capital",
          description: "City built on an island at the confluence of three rivers",
          historicalContext: "Second Siamese capital—controlled by intricate canal and moat systems",
          coordinates: { lat: 14.3532, lng: 100.5685 },
          artifacts: [
            {
              id: "ayutthaya-moats",
              name: "Ayutthaya Moat System",
              description: "12km of defensive moats surrounding the island capital",
              rarity: "epic",
              historicalPeriod: "1350-1767 CE",
              significance: "Protected the city for 400+ years, also used for transport and irrigation",
              yearBCE: -1350,
              category: "canal"
            },
            {
              id: "klong-network",
              name: "Klong (Canal) Network",
              description: "Extensive canal system for transport, irrigation, and flood control",
              rarity: "legendary",
              historicalPeriod: "13th century CE onwards",
              significance: "Bangkok called 'Venice of the East'—canals were main transport until 20th century",
              yearBCE: -1238,
              category: "canal"
            }
          ]
        },
        {
          id: "sukhothai",
          name: "Sukhothai Kingdom",
          description: "First Thai kingdom with sophisticated water management",
          historicalContext: "UNESCO World Heritage with moats, ponds, and channels",
          coordinates: { lat: 17.0168, lng: 99.7062 },
          artifacts: [
            {
              id: "sukhothai-reservoir",
              name: "Sukhothai Royal Reservoir",
              description: "Large reservoir (Trapang) system for the royal city",
              rarity: "rare",
              historicalPeriod: "1238-1438 CE",
              significance: "Stored water for dry season, symbolic of royal power over water",
              yearBCE: -1250,
              category: "dam"
            },
            {
              id: "phra-ruang-dam",
              name: "Phra Ruang Dam",
              description: "Ancient earthen dam attributed to legendary king",
              rarity: "epic",
              historicalPeriod: "13th century CE",
              significance: "One of the oldest dams in Southeast Asia, shows Thai hydraulic knowledge",
              yearBCE: -1250,
              category: "dam"
            }
          ]
        },
        {
          id: "bangkok-canals",
          name: "Bangkok Canal System",
          description: "Network of klongs that made Bangkok the 'Venice of the East'",
          historicalContext: "Extensive waterway network for transport, commerce, and flood control",
          coordinates: { lat: 13.7563, lng: 100.5018 },
          artifacts: [
            {
              id: "chao-phraya-locks",
              name: "Chao Phraya River Management",
              description: "Gates and locks controlling flow into Bangkok's canal network",
              rarity: "rare",
              historicalPeriod: "18th-19th century CE",
              significance: "Managed flooding and enabled floating markets that defined Thai culture",
              yearBCE: -1782,
              category: "canal"
            },
            {
              id: "floating-markets",
              name: "Floating Market Infrastructure",
              description: "Canals designed for waterborne commerce and daily life",
              rarity: "common",
              historicalPeriod: "Traditional",
              significance: "Unique water-based economy and lifestyle continuing today",
              yearBCE: -1800,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "medieval-india",
      name: "Medieval India",
      description: "Stepwells, tanks, and traditional water harvesting",
      position: [13, 0, 8],
      color: "#FF5722",
      era: "medieval",
      dateRange: "600-1600 CE",
      locations: [
        {
          id: "gujarat-stepwells",
          name: "Gujarat Stepwells",
          description: "Multi-story architectural wonders combining water access with cooling",
          historicalContext: "Stepwells served as social gathering places and refuges from heat",
          coordinates: { lat: 23.0225, lng: 72.5714 },
          artifacts: [
            {
              id: "rani-ki-vav",
              name: "Rani ki Vav (Queen's Stepwell)",
              description: "7-story stepwell with 500+ sculptures, UNESCO World Heritage",
              rarity: "legendary",
              historicalPeriod: "1063 CE",
              significance: "Most ornate stepwell ever built; inverted temple going 7 stories underground",
              yearBCE: -1063,
              category: "dam"
            },
            {
              id: "adalaj-vav",
              name: "Adalaj Stepwell",
              description: "Five-story stepwell with Hindu-Islamic architecture fusion",
              rarity: "epic",
              historicalPeriod: "1498 CE",
              significance: "Octagonal shape creates natural cooling; temperature 6°C lower than outside",
              yearBCE: -1498,
              category: "dam"
            }
          ]
        },
        {
          id: "rajasthan-water",
          name: "Rajasthan Water Harvesting",
          description: "Desert water collection in one of Earth's driest regions",
          historicalContext: "Innovative systems turned arid land into thriving kingdoms",
          coordinates: { lat: 26.9124, lng: 75.7873 },
          artifacts: [
            {
              id: "johad",
              name: "Johad (Check Dam)",
              description: "Crescent-shaped earthen dams for groundwater recharge",
              rarity: "rare",
              historicalPeriod: "Medieval - Present",
              significance: "Rajendra Singh revived 8,600 johads, bringing water back to 1,000 villages",
              yearBCE: -1200,
              category: "dam"
            },
            {
              id: "kund",
              name: "Kund/Kundi",
              description: "Circular underground cisterns with stepped access",
              rarity: "rare",
              historicalPeriod: "800 CE onwards",
              significance: "Stores rainwater for year-round use in areas with 4-inch annual rainfall",
              yearBCE: -800,
              category: "dam"
            }
          ]
        },
        {
          id: "tamil-tanks",
          name: "Tamil Nadu Tank System",
          description: "39,000 interconnected tanks forming massive irrigation network",
          historicalContext: "Eri system fed South India for millennia",
          coordinates: { lat: 11.1271, lng: 78.6569 },
          artifacts: [
            {
              id: "grand-anicut",
              name: "Grand Anicut (Kallanai)",
              description: "2,000-year-old dam across Kaveri River, still in use",
              rarity: "legendary",
              historicalPeriod: "2nd century CE",
              significance: "World's oldest water-diversion structure still in use; 329m long stone dam",
              yearBCE: -150,
              category: "dam"
            },
            {
              id: "eri-cascade",
              name: "Eri Tank Cascade System",
              description: "Up to 39,000 tanks linked in gravity-fed network",
              rarity: "epic",
              historicalPeriod: "300 BCE onwards",
              significance: "Each tank's overflow feeds the next; covers entire watersheds",
              yearBCE: 300,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "cambodia-khmer",
      name: "Cambodia (Khmer)",
      description: "Angkor's massive barays and hydraulic city",
      position: [16, 0, 7],
      color: "#E91E63",
      era: "medieval",
      dateRange: "802-1431 CE",
      locations: [
        {
          id: "angkor-hydraulics",
          name: "Angkor Hydraulic System",
          description: "Largest pre-industrial city supported by massive water infrastructure",
          historicalContext: "At its peak, Angkor was larger than modern Paris",
          coordinates: { lat: 13.4125, lng: 103.8670 },
          artifacts: [
            {
              id: "west-baray",
              name: "West Baray Reservoir",
              description: "8km x 2km reservoir holding 56 million cubic meters",
              rarity: "legendary",
              historicalPeriod: "1050 CE",
              significance: "Largest hand-dug reservoir in history; still holds water today",
              yearBCE: -1050,
              category: "dam"
            },
            {
              id: "angkor-moat",
              name: "Angkor Wat Moat",
              description: "200m wide moat surrounding the temple complex",
              rarity: "epic",
              historicalPeriod: "12th century CE",
              significance: "Symbolic ocean around sacred mountain; also prevented foundation erosion",
              yearBCE: -1150,
              category: "canal"
            },
            {
              id: "khmer-canals",
              name: "Khmer Canal Network",
              description: "1,000+ km of canals connecting barays to rice fields",
              rarity: "epic",
              historicalPeriod: "9th-13th century CE",
              significance: "Supported population of 1 million; enabled 3-4 rice harvests per year",
              yearBCE: -900,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "burma-myanmar",
      name: "Burma (Myanmar)",
      description: "Dry zone irrigation and Inle Lake floating gardens",
      position: [14, 0, 6],
      color: "#795548",
      era: "medieval",
      dateRange: "200 BCE - 1885 CE",
      locations: [
        {
          id: "kyaukse-weirs",
          name: "Kyaukse Weir System",
          description: "Stone and earth weirs that powered the Pagan Empire",
          historicalContext: "Irrigated the dry zone that became Burma's rice bowl",
          coordinates: { lat: 21.6027, lng: 96.1342 },
          artifacts: [
            {
              id: "kyaukse-irrigation",
              name: "Kyaukse Weir Irrigation",
              description: "Stone weirs across Zawgyi River feeding 70km channels",
              rarity: "epic",
              historicalPeriod: "9th-11th century CE",
              significance: "Irrigated 20,000+ hectares; made Pagan Empire possible",
              yearBCE: -850,
              category: "irrigation"
            }
          ]
        },
        {
          id: "inle-lake",
          name: "Inle Lake Floating Gardens",
          description: "Floating agricultural beds on 116 km² lake",
          historicalContext: "Created farmland where none existed",
          coordinates: { lat: 20.5353, lng: 96.9108 },
          artifacts: [
            {
              id: "floating-gardens",
              name: "Inle Floating Gardens",
              description: "Agricultural beds floating on water hyacinth roots",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Grows tomatoes, flowers on lake; farmers row with their legs",
              yearBCE: -1000,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "vietnam",
      name: "Vietnam",
      description: "Red River dikes and Mekong Delta canals",
      position: [17, 0, 5],
      color: "#F44336",
      era: "classical",
      dateRange: "200 CE - Present",
      locations: [
        {
          id: "red-river-delta",
          name: "Red River Delta",
          description: "3,000+ km dike network protecting millions",
          historicalContext: "Continuously maintained for 2,000 years",
          coordinates: { lat: 21.0285, lng: 105.8542 },
          artifacts: [
            {
              id: "red-river-dikes",
              name: "Red River Dike System",
              description: "3,000+ km of dikes protecting the delta from flooding",
              rarity: "legendary",
              historicalPeriod: "200 CE onwards",
              significance: "Protecting Hanoi for 2,000 years; requires constant maintenance",
              yearBCE: -200,
              category: "dam"
            },
            {
              id: "cong-gates",
              name: "Cống (Tidal Sluice Gates)",
              description: "Brick and stone gates preventing saltwater intrusion",
              rarity: "rare",
              historicalPeriod: "11th century CE",
              significance: "Protected rice paddies from sea water; enabled delta agriculture",
              yearBCE: -1050,
              category: "irrigation"
            }
          ]
        },
        {
          id: "mekong-delta",
          name: "Mekong Delta",
          description: "4,500 km of canals transforming swamps into Vietnam's rice bowl",
          historicalContext: "Floating rice adapts to 4-6m annual flooding",
          coordinates: { lat: 10.0452, lng: 105.7469 },
          artifacts: [
            {
              id: "mekong-canals",
              name: "Mekong Canal Network",
              description: "4,500 km of canals for transport and irrigation",
              rarity: "epic",
              historicalPeriod: "1800s expanded",
              significance: "Transformed swampland into Vietnam's most productive rice region",
              yearBCE: -1800,
              category: "canal"
            },
            {
              id: "floating-rice",
              name: "Floating Rice Varieties",
              description: "Rice that grows up to 6m tall as floods rise",
              rarity: "rare",
              historicalPeriod: "Ancient",
              significance: "Adapted to annual 4-6m flooding; unique Vietnamese innovation",
              yearBCE: 500,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "pre-roman-europe",
      name: "Pre-Roman Europe",
      description: "Celtic, Germanic, and Etruscan water engineering",
      position: [8, 0, 2],
      color: "#607D8B",
      era: "ancient",
      dateRange: "3000 BCE - 43 CE",
      locations: [
        {
          id: "celtic-water",
          name: "Celtic Water Technology",
          description: "Crannogs, holy wells, and fish weirs",
          historicalContext: "Water was sacred to Celtic peoples",
          coordinates: { lat: 53.3498, lng: -6.2603 },
          artifacts: [
            {
              id: "crannogs",
              name: "Crannogs (Lake Dwellings)",
              description: "Artificial islands built in lakes for settlement",
              rarity: "rare",
              historicalPeriod: "3000 BCE onwards",
              significance: "Water as defense; some crannogs used for 3,000+ years",
              yearBCE: 3000,
              category: "dam"
            },
            {
              id: "holy-wells",
              name: "Celtic Holy Wells",
              description: "Sacred springs with stone chambers for water worship",
              rarity: "common",
              historicalPeriod: "Ancient",
              significance: "Over 3,000 holy wells in Ireland alone; healing water traditions",
              yearBCE: 2000,
              category: "fountain"
            }
          ]
        },
        {
          id: "etruscan-engineering",
          name: "Etruscan Engineering",
          description: "Underground drainage and cisterns that preceded Rome",
          historicalContext: "Etruscan technology influenced Roman engineering",
          coordinates: { lat: 42.7262, lng: 12.1066 },
          artifacts: [
            {
              id: "cuniculi",
              name: "Cuniculi (Drainage Tunnels)",
              description: "Underground tunnels draining marshes for agriculture",
              rarity: "epic",
              historicalPeriod: "600 BCE",
              significance: "Pre-dated Roman engineering; drained malaria-prone wetlands",
              yearBCE: 600,
              category: "sanitation"
            },
            {
              id: "etruscan-cisterns",
              name: "Etruscan Rock-Cut Cisterns",
              description: "Water storage carved into tufa rock",
              rarity: "rare",
              historicalPeriod: "700 BCE",
              significance: "Supplied hilltop settlements; some still hold water",
              yearBCE: 700,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "philippines",
      name: "Philippines",
      description: "Banaue rice terraces and traditional water systems",
      position: [18, 0, 8],
      color: "#4CAF50",
      era: "ancient",
      dateRange: "2000 years ago - Present",
      locations: [
        {
          id: "ifugao-terraces",
          name: "Ifugao Rice Terraces",
          description: "10,000 km² of mountain terraces carved by hand",
          historicalContext: "Called the 'Eighth Wonder of the World'",
          coordinates: { lat: 16.9117, lng: 121.0536 },
          artifacts: [
            {
              id: "banaue-terraces",
              name: "Banaue Rice Terraces",
              description: "2,000-year-old terraces with sophisticated irrigation",
              rarity: "legendary",
              historicalPeriod: "2000 years ago",
              significance: "UNESCO World Heritage; if laid end-to-end would circle half the globe",
              yearBCE: 0,
              category: "irrigation"
            },
            {
              id: "bamboo-irrigation",
              name: "Ifugao Bamboo Pipe System",
              description: "Bamboo pipes carrying spring water up to 2km",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Delivers 18-20 liters/minute using only gravity and bamboo",
              yearBCE: -500,
              category: "aqueduct"
            },
            {
              id: "muyong",
              name: "Muyong (Forest Watershed)",
              description: "Protected forests above terraces ensuring water supply",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Traditional conservation; cutting muyong trees was punishable by death",
              yearBCE: -500,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "singapore",
      name: "Singapore",
      description: "Global leader in water innovation and the 'Four National Taps' system",
      position: [16, 0, 12],
      color: "#E91E63",
      era: "modern",
      dateRange: "1965 CE - Present",
      locations: [
        {
          id: "marina-bay",
          name: "Marina Bay",
          description: "Heart of Singapore's water infrastructure revolution",
          historicalContext: "Transformed from seawater bay to freshwater reservoir",
          coordinates: { lat: 1.2816, lng: 103.8636 },
          artifacts: [
            {
              id: "newater",
              name: "NEWater System",
              description: "Ultra-purified reclaimed water using microfiltration, reverse osmosis, and UV treatment",
              rarity: "legendary",
              historicalPeriod: "Modern (2003 CE)",
              significance: "Supplies 40% of Singapore's water; global model for water-scarce cities",
              yearBCE: -2003,
              category: "sanitation"
            },
            {
              id: "marina-barrage",
              name: "Marina Barrage",
              description: "Dam converting Marina Bay from seawater to freshwater reservoir with flood control",
              rarity: "epic",
              historicalPeriod: "Modern (2008 CE)",
              significance: "Created Singapore's 15th reservoir in the city center; eliminated floods in Chinatown",
              yearBCE: -2008,
              category: "dam"
            }
          ]
        },
        {
          id: "changi",
          name: "Changi Water Reclamation",
          description: "World's largest deep tunnel sewerage system",
          historicalContext: "Underground superhighway for wastewater treatment",
          coordinates: { lat: 1.3644, lng: 103.9915 },
          artifacts: [
            {
              id: "dtss",
              name: "Deep Tunnel Sewerage System (DTSS)",
              description: "48km underground tunnel carrying wastewater to Changi NEWater plant",
              rarity: "epic",
              historicalPeriod: "Modern (2008-ongoing)",
              significance: "Frees up 150 hectares of land above; gravity-fed to minimize pumping",
              yearBCE: -2008,
              category: "sanitation"
            },
            {
              id: "variable-salinity-plant",
              name: "Variable Salinity Plant",
              description: "World's first plant switching between desalination and NEWater production",
              rarity: "rare",
              historicalPeriod: "Modern (2017 CE)",
              significance: "Adapts to seasonal water conditions; maximizes efficiency",
              yearBCE: -2017,
              category: "sanitation"
            }
          ]
        },
        {
          id: "tengeh-reservoir",
          name: "Tengeh Reservoir",
          description: "Site of Singapore's floating solar innovation",
          historicalContext: "Combining renewable energy with water storage",
          coordinates: { lat: 1.3297, lng: 103.7050 },
          artifacts: [
            {
              id: "floating-solar",
              name: "Floating Solar Farm",
              description: "Solar panels on reservoir surface reducing evaporation and generating clean energy",
              rarity: "rare",
              historicalPeriod: "Modern (2021 CE)",
              significance: "One of world's largest inland floating solar farms; powers 5 water treatment plants",
              yearBCE: -2021,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "malaysia",
      name: "Malaysia",
      description: "Traditional rice irrigation and innovative hydraulic mining techniques",
      position: [14, 0, 10],
      color: "#FF9800",
      era: "modern",
      dateRange: "Pre-colonial - Present",
      locations: [
        {
          id: "perak-tin-fields",
          name: "Perak Tin Mining Region",
          description: "Heart of Malaysian tin mining industry",
          historicalContext: "Made Malaysia the world's largest tin producer for decades",
          coordinates: { lat: 4.5921, lng: 101.0901 },
          artifacts: [
            {
              id: "lombong",
              name: "Lombong (Hydraulic Tin Mining)",
              description: "Water jets to extract tin ore from alluvial deposits",
              rarity: "epic",
              historicalPeriod: "Colonial Era (1850s-1970s)",
              significance: "Made Malaysia world's largest tin producer; unique water-powered mining",
              yearBCE: -1850,
              category: "water-lifting"
            },
            {
              id: "palong",
              name: "Palong (Sluice Box System)",
              description: "Water channels for separating tin ore from soil using gravity",
              rarity: "rare",
              historicalPeriod: "Colonial Era (1800s)",
              significance: "Efficient ore separation using only water and gravity",
              yearBCE: -1850,
              category: "canal"
            }
          ]
        },
        {
          id: "kedah-rice-bowl",
          name: "Kedah-Perlis Rice Bowl",
          description: "Malaysia's traditional rice growing heartland",
          historicalContext: "British-designed, locally-adapted irrigation infrastructure",
          coordinates: { lat: 6.1184, lng: 100.3685 },
          artifacts: [
            {
              id: "muda-irrigation",
              name: "MUDA Irrigation Scheme",
              description: "Large-scale irrigation network supporting double-cropping of rice",
              rarity: "epic",
              historicalPeriod: "Modern (1906-ongoing)",
              significance: "Irrigates 96,000 hectares; enables Malaysia's rice self-sufficiency goal",
              yearBCE: -1906,
              category: "irrigation"
            },
            {
              id: "tasik-kolam",
              name: "Tasik/Kolam Village Pond System",
              description: "Traditional village ponds for water storage, fish farming, and irrigation",
              rarity: "common",
              historicalPeriod: "Traditional",
              significance: "Multi-purpose water management integrated with village life",
              yearBCE: -500,
              category: "dam"
            }
          ]
        },
        {
          id: "orang-asli-water",
          name: "Orang Asli Territories",
          description: "Indigenous water management systems",
          historicalContext: "Traditional knowledge of forest water harvesting",
          coordinates: { lat: 4.2105, lng: 101.9758 },
          artifacts: [
            {
              id: "bamboo-aqueduct-my",
              name: "Bamboo Gravity Aqueduct",
              description: "Indigenous bamboo pipe systems carrying spring water to villages",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Zero-energy water transport using only gravity and bamboo engineering",
              yearBCE: -1000,
              category: "aqueduct"
            },
            {
              id: "greener-water",
              name: "Greener Water Dispenser",
              description: "Reverse osmosis system processing raw sewage into drinking water with near-zero waste",
              rarity: "legendary",
              historicalPeriod: "Modern (2010s)",
              significance: "Malaysian innovation by Ooi Seng Chye; processes 99.9% of input water",
              yearBCE: -2010,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "dubai-uae",
      name: "Dubai & UAE",
      description: "From ancient falaj to world's largest desalination - desert water mastery",
      position: [10, 0, -6],
      color: "#00BCD4",
      era: "modern",
      dateRange: "1000 BCE - Present",
      locations: [
        {
          id: "al-ain-oasis",
          name: "Al Ain Oasis",
          description: "UNESCO World Heritage falaj irrigation system",
          historicalContext: "Ancient underground channels sustaining desert agriculture",
          coordinates: { lat: 24.2075, lng: 55.7447 },
          artifacts: [
            {
              id: "falaj-system",
              name: "Falaj Irrigation System",
              description: "Underground channels carrying mountain water across desert for 3,000 years",
              rarity: "legendary",
              historicalPeriod: "Ancient (1000 BCE - Present)",
              significance: "UNESCO World Heritage; 4,000+ systems historically, ~30 still active",
              yearBCE: 1000,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "dubai-desal",
          name: "Dubai Desalination Complex",
          description: "World's largest seawater conversion facilities",
          historicalContext: "Enabled growth from 180,000 (1968) to 10 million (2024)",
          coordinates: { lat: 25.0657, lng: 55.1713 },
          artifacts: [
            {
              id: "mega-desalination",
              name: "Mega-Scale Desalination Plants",
              description: "Multi-stage flash and reverse osmosis converting seawater to drinking water",
              rarity: "legendary",
              historicalPeriod: "Modern (1976 - Present)",
              significance: "14+ million m³/day capacity; supplies 42% of UAE freshwater",
              yearBCE: -1976,
              category: "sanitation"
            },
            {
              id: "cloud-seeding",
              name: "Cloud Seeding Program",
              description: "Weather modification using salt particles to increase rainfall 10-30%",
              rarity: "rare",
              historicalPeriod: "Modern (2002 - Present)",
              significance: "300+ annual missions; global research hub for arid region rainfall",
              yearBCE: -2002,
              category: "irrigation"
            }
          ]
        },
        {
          id: "palm-jumeirah",
          name: "Palm Jumeirah",
          description: "Artificial island with revolutionary coastal water management",
          historicalContext: "World's largest man-made island requiring innovative hydrology",
          coordinates: { lat: 25.1124, lng: 55.1390 },
          artifacts: [
            {
              id: "palm-water-engineering",
              name: "Palm Jumeirah Water Engineering",
              description: "Tidal flushing system maintaining lagoon water quality through breakwater gaps",
              rarity: "epic",
              historicalPeriod: "Modern (2001-2006)",
              significance: "78 km new coastline; complete water exchange every 14 days",
              yearBCE: -2001,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "israel",
      name: "Israel",
      description: "Pioneers of drip irrigation and wastewater recycling",
      position: [6, 0, -10],
      color: "#2196F3",
      era: "modern",
      dateRange: "Ancient - Present",
      locations: [
        {
          id: "negev-desert",
          name: "Negev Desert",
          description: "Birthplace of modern drip irrigation",
          historicalContext: "Transformed desert into agricultural land",
          coordinates: { lat: 30.8, lng: 34.8 },
          artifacts: [
            {
              id: "drip-irrigation",
              name: "Drip Irrigation (Netafim)",
              description: "Precision water delivery directly to plant roots, reducing water use by 50%",
              rarity: "legendary",
              historicalPeriod: "Modern (1965)",
              significance: "Revolutionized global agriculture; used in 110+ countries",
              yearBCE: -1965,
              category: "irrigation"
            },
            {
              id: "negev-cisterns",
              name: "Ancient Negev Cisterns",
              description: "Nabataean-style rock-cut water storage in the desert",
              rarity: "rare",
              historicalPeriod: "Ancient (300 BCE)",
              significance: "Sustained desert communities for millennia",
              yearBCE: 300,
              category: "dam"
            }
          ]
        },
        {
          id: "sorek-plant",
          name: "Sorek Desalination Plant",
          description: "World's largest reverse osmosis desalination facility",
          historicalContext: "Provides 20% of Israel's drinking water",
          coordinates: { lat: 31.9, lng: 34.7 },
          artifacts: [
            {
              id: "sorek-desalination",
              name: "Sorek Desalination Plant",
              description: "World's largest and most efficient RO desalination producing 624,000 m³/day",
              rarity: "epic",
              historicalPeriod: "Modern (2013)",
              significance: "Lowest cost desalination globally; energy recovery systems",
              yearBCE: -2013,
              category: "sanitation"
            },
            {
              id: "wastewater-recycling",
              name: "Wastewater Recycling System",
              description: "National system recycling 90%+ of wastewater for agriculture",
              rarity: "epic",
              historicalPeriod: "Modern (1970s-Present)",
              significance: "World's highest wastewater reuse rate; global model",
              yearBCE: -1970,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "ancient-yemen",
      name: "Ancient Yemen (Sheba)",
      description: "Land of the legendary Marib Dam and Queen of Sheba",
      position: [8, 0, -4],
      color: "#795548",
      era: "ancient",
      dateRange: "1700 BCE - 600 CE",
      locations: [
        {
          id: "marib",
          name: "Marib",
          description: "Ancient capital of the Sabaean kingdom",
          historicalContext: "Legendary wealth built on water engineering",
          coordinates: { lat: 15.4, lng: 45.3 },
          artifacts: [
            {
              id: "marib-dam",
              name: "Marib Dam",
              description: "Ancient engineering marvel that irrigated 9,600 hectares and fed the Sheba kingdom",
              rarity: "legendary",
              historicalPeriod: "Ancient (1700 BCE - 600 CE)",
              significance: "Largest ancient dam; supported 50,000 people; collapse caused mass migration",
              yearBCE: 1700,
              category: "dam"
            },
            {
              id: "ghayl-irrigation",
              name: "Ghayl Spring Channels",
              description: "Mountain spring-fed irrigation channels for terrace agriculture",
              rarity: "rare",
              historicalPeriod: "Ancient",
              significance: "Sustained highland agriculture for 3,000+ years",
              yearBCE: 1500,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "bengal",
      name: "Bengal (Bangladesh)",
      description: "Masters of delta water management and floating agriculture",
      position: [14, 0, 2],
      color: "#4CAF50",
      era: "medieval",
      dateRange: "Traditional - Present",
      locations: [
        {
          id: "bengal-delta",
          name: "Bengal Delta",
          description: "World's largest river delta with unique water challenges",
          historicalContext: "Annual floods shape agriculture and life",
          coordinates: { lat: 23.8, lng: 90.4 },
          artifacts: [
            {
              id: "floating-gardens-baira",
              name: "Floating Gardens (Baira)",
              description: "Agriculture on rafts of water hyacinth in waterlogged areas",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Grows vegetables during monsoon flooding; climate-resilient farming",
              yearBCE: -500,
              category: "irrigation"
            },
            {
              id: "khal-system",
              name: "Khal Canal System",
              description: "Traditional interconnected canal networks for drainage and transport",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Natural flood management and water highways",
              yearBCE: -1000,
              category: "canal"
            },
            {
              id: "cyclone-shelter",
              name: "Elevated Cyclone Shelters",
              description: "Multi-story flood refuges built on raised platforms",
              rarity: "rare",
              historicalPeriod: "Modern (1970s-Present)",
              significance: "Saved millions of lives from storm surges; integrated water management",
              yearBCE: -1970,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "al-andalus",
      name: "Al-Andalus (Islamic Spain)",
      description: "Islamic Golden Age water engineering in the Iberian Peninsula",
      position: [-6, 0, -8],
      color: "#E91E63",
      era: "medieval",
      dateRange: "711 - 1492 CE",
      locations: [
        {
          id: "valencia",
          name: "Valencia",
          description: "Home of the world's oldest water court",
          historicalContext: "1000+ years of continuous water governance",
          coordinates: { lat: 39.4, lng: -0.4 },
          artifacts: [
            {
              id: "acequia-system",
              name: "Acequia Irrigation System",
              description: "Islamic-inherited gravity-fed irrigation channels still in use",
              rarity: "epic",
              historicalPeriod: "Medieval (8th Century CE)",
              significance: "Model for irrigation in Americas; still irrigates Valencia's huerta",
              yearBCE: -711,
              category: "irrigation"
            },
            {
              id: "water-tribunal",
              name: "Water Tribunal of Valencia",
              description: "World's oldest continuously operating water court (1000+ years)",
              rarity: "legendary",
              historicalPeriod: "Medieval (960 CE - Present)",
              significance: "UNESCO Intangible Heritage; resolves disputes every Thursday",
              yearBCE: -960,
              category: "irrigation"
            }
          ]
        },
        {
          id: "granada",
          name: "Alhambra, Granada",
          description: "Palace complex with masterful water features",
          historicalContext: "Pinnacle of Islamic garden hydraulics",
          coordinates: { lat: 37.2, lng: -3.6 },
          artifacts: [
            {
              id: "alhambra-fountains",
              name: "Alhambra Fountain System",
              description: "Gravity-fed fountains and channels creating paradise gardens",
              rarity: "epic",
              historicalPeriod: "Medieval (1238-1358 CE)",
              significance: "Water as art; influenced European garden design for centuries",
              yearBCE: -1238,
              category: "fountain"
            },
            {
              id: "noria-wheel",
              name: "Noria Water Wheel",
              description: "Large water-lifting wheels powered by river current",
              rarity: "rare",
              historicalPeriod: "Medieval",
              significance: "Lifted water 10+ meters using only river power; still used in Syria",
              yearBCE: -800,
              category: "water-lifting"
            }
          ]
        }
      ]
    },
    {
      id: "oman",
      name: "Oman",
      description: "Aflaj irrigation system - UNESCO World Heritage",
      position: [12, 0, -4],
      color: "#FF5722",
      era: "ancient",
      dateRange: "500 BCE - Present",
      locations: [
        {
          id: "aflaj-region",
          name: "Aflaj Irrigation Region",
          description: "Heart of Oman's 3,000+ ancient irrigation channels",
          historicalContext: "Underground water channels sustaining oasis agriculture",
          coordinates: { lat: 23.6, lng: 58.5 },
          artifacts: [
            {
              id: "aflaj-system",
              name: "Aflaj Irrigation System",
              description: "3,000+ ancient underground channels distributing spring and groundwater",
              rarity: "legendary",
              historicalPeriod: "Ancient (500 BCE - Present)",
              significance: "UNESCO World Heritage; still irrigates date palms and farms today",
              yearBCE: 500,
              category: "aqueduct"
            },
            {
              id: "date-palm-oasis",
              name: "Date Palm Oasis Management",
              description: "Integrated water-agriculture system maximizing scarce water",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Multi-layer farming: dates above, crops below, efficient water use",
              yearBCE: 1000,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "venice",
      name: "Venice",
      description: "1,500 years of lagoon city water engineering",
      position: [-2, 0, -10],
      color: "#3F51B5",
      era: "medieval",
      dateRange: "421 CE - Present",
      locations: [
        {
          id: "venice-lagoon",
          name: "Venice Lagoon",
          description: "World's most famous water city",
          historicalContext: "Built on 118 islands in a tidal lagoon",
          coordinates: { lat: 45.4, lng: 12.3 },
          artifacts: [
            {
              id: "mose-barriers",
              name: "MOSE Flood Barriers",
              description: "78 mobile gates protecting Venice from high tides and storm surges",
              rarity: "legendary",
              historicalPeriod: "Modern (2003-2020)",
              significance: "World's largest flood barrier system; protects UNESCO heritage city",
              yearBCE: -2003,
              category: "dam"
            },
            {
              id: "venice-cisterns",
              name: "Venetian Cistern System",
              description: "Underground freshwater collection beneath every campo (square)",
              rarity: "epic",
              historicalPeriod: "Medieval (800 CE onwards)",
              significance: "Rainwater harvesting in a saltwater lagoon; 6,000+ historic cisterns",
              yearBCE: -800,
              category: "dam"
            },
            {
              id: "lagoon-management",
              name: "Lagoon Hydraulic Management",
              description: "1,500 years of balancing tides, sediment, and city survival",
              rarity: "epic",
              historicalPeriod: "Medieval - Present",
              significance: "Diverted rivers, built sea walls, managed unique ecosystem",
              yearBCE: -421,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "central-asia",
      name: "Central Asia (Silk Road)",
      description: "Karez underground channels sustaining oasis cities",
      position: [12, 0, 2],
      color: "#9C27B0",
      era: "ancient",
      dateRange: "1000 BCE - Present",
      locations: [
        {
          id: "turpan",
          name: "Turpan Basin",
          description: "One of the world's lowest and hottest inhabited places",
          historicalContext: "Karez systems enabled Silk Road oasis cities",
          coordinates: { lat: 42.9, lng: 89.2 },
          artifacts: [
            {
              id: "karez-system",
              name: "Karez Underground Channels",
              description: "Underground water channels bringing snowmelt from Tian Shan mountains",
              rarity: "legendary",
              historicalPeriod: "Ancient (1000 BCE - Present)",
              significance: "1,100+ karez systems; total length 5,000+ km; still functioning",
              yearBCE: 1000,
              category: "aqueduct"
            },
            {
              id: "caravanserai-wells",
              name: "Silk Road Caravanserai Wells",
              description: "Deep wells at trading post stations along the Silk Road",
              rarity: "rare",
              historicalPeriod: "Medieval",
              significance: "Enabled trans-continental trade; some over 100m deep",
              yearBCE: -500,
              category: "fountain"
            }
          ]
        }
      ]
    },
    {
      id: "amazon-basin",
      name: "Amazon Basin",
      description: "Sophisticated civilizations that engineered water, soil, and landscape on massive scale",
      position: [-10, 0, 4],
      color: "#2E7D32",
      era: "ancient",
      dateRange: "3000 BCE - Present",
      locations: [
        {
          id: "llanos-mojos",
          name: "Llanos de Mojos",
          description: "Bolivia's Amazon with 20,000+ km² of raised fields",
          historicalContext: "Largest engineered landscape in pre-Columbian Americas",
          coordinates: { lat: -14.5, lng: -65.5 },
          artifacts: [
            {
              id: "amazon-raised-fields",
              name: "Raised Field Agriculture (Camellones)",
              description: "Elevated planting platforms turning seasonal floodplains into year-round farmland",
              rarity: "legendary",
              historicalPeriod: "Ancient (1000 BCE - 1500 CE)",
              significance: "Supported 1+ million people; 200-400% yield increase over modern methods",
              yearBCE: 1000,
              category: "irrigation"
            },
            {
              id: "amazon-causeways",
              name: "Amazon Causeway Networks",
              description: "Raised roads and drainage canals connecting settlements across wetlands",
              rarity: "epic",
              historicalPeriod: "400 - 1400 CE",
              significance: "1,000+ km documented; revealed by LiDAR in 2022",
              yearBCE: -400,
              category: "canal"
            }
          ]
        },
        {
          id: "xingu-river",
          name: "Xingu River Region",
          description: "Fish weirs and artificial rapids for mass harvest",
          historicalContext: "Pre-Columbian fishing infrastructure still visible",
          coordinates: { lat: -3.1, lng: -52.0 },
          artifacts: [
            {
              id: "amazon-fish-weirs",
              name: "Amazonian Fish Weirs",
              description: "Stone structures funneling migrating fish into harvest zones",
              rarity: "epic",
              historicalPeriod: "2000 BCE - Present",
              significance: "Still in active use; sustainable harvest for millennia",
              yearBCE: 2000,
              category: "irrigation"
            },
            {
              id: "terra-preta",
              name: "Terra Preta (Amazonian Dark Earth)",
              description: "Artificially created super-fertile soil that regenerates itself using biochar",
              rarity: "legendary",
              historicalPeriod: "450 BCE - 950 CE",
              significance: "10,000+ km² documented; still fertile after 2,000 years",
              yearBCE: 450,
              category: "irrigation"
            }
          ]
        },
        {
          id: "varzea-region",
          name: "Várzea Floodplains",
          description: "Intensive cultivation of seasonally flooded riverside lands",
          historicalContext: "Amazon's highest natural fertility zone",
          coordinates: { lat: -2.5, lng: -54.5 },
          artifacts: [
            {
              id: "varzea-agriculture",
              name: "Várzea Floodplain Agriculture",
              description: "Intensive cultivation following the annual 10-15 meter flood pulse",
              rarity: "epic",
              historicalPeriod: "3000 BCE - Present",
              significance: "10-50× more productive than upland; supported millions historically",
              yearBCE: 3000,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "mississippian",
      name: "Mississippian (Cahokia)",
      description: "North America's largest pre-Columbian city with engineered water systems",
      position: [-8, 0, -6],
      color: "#8D6E63",
      era: "medieval",
      dateRange: "800 - 1400 CE",
      locations: [
        {
          id: "cahokia",
          name: "Cahokia",
          description: "City of 20,000 - larger than London in 1250 CE",
          historicalContext: "Largest pre-Columbian settlement north of Mexico",
          coordinates: { lat: 38.7, lng: -90.1 },
          artifacts: [
            {
              id: "cahokia-reservoir",
              name: "Cahokia Reservoir System",
              description: "Clay-lined water storage basins supplying North America's largest ancient city",
              rarity: "legendary",
              historicalPeriod: "1050 - 1200 CE",
              significance: "Supported 20,000 people; largest reservoir 15,000+ m³",
              yearBCE: -1050,
              category: "dam"
            },
            {
              id: "mississippian-drainage",
              name: "Floodplain Drainage Engineering",
              description: "Channel systems managing Mississippi River flooding",
              rarity: "epic",
              historicalPeriod: "900 - 1400 CE",
              significance: "Made floodplain habitation possible; UNESCO World Heritage",
              yearBCE: -900,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "hohokam",
      name: "Hohokam Civilization",
      description: "Built the largest pre-Columbian irrigation system in North America",
      position: [-12, 0, -4],
      color: "#FF7043",
      era: "ancient",
      dateRange: "300 - 1450 CE",
      locations: [
        {
          id: "phoenix-basin",
          name: "Phoenix Basin",
          description: "500+ miles of ancient canals in Arizona desert",
          historicalContext: "Modern Phoenix built on Hohokam engineering",
          coordinates: { lat: 33.4, lng: -111.9 },
          artifacts: [
            {
              id: "hohokam-canals",
              name: "Hohokam Canal System",
              description: "800+ km of hand-dug canals turning Arizona desert into farmland",
              rarity: "legendary",
              historicalPeriod: "300 - 1450 CE",
              significance: "Largest pre-Columbian irrigation in North America; modern Phoenix follows same routes",
              yearBCE: -300,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "chinook",
      name: "Pacific Northwest Nations",
      description: "Engineered one of world's most productive fisheries",
      position: [-14, 0, -8],
      color: "#00796B",
      era: "ancient",
      dateRange: "3000 BCE - Present",
      locations: [
        {
          id: "columbia-river",
          name: "Columbia River",
          description: "Site of Celilo Falls - largest Native fishery in North America",
          historicalContext: "11,000 years of continuous habitation until drowned by dam in 1957",
          coordinates: { lat: 46.2, lng: -123.8 },
          artifacts: [
            {
              id: "columbia-fish-weirs",
              name: "Columbia River Fish Weirs",
              description: "Massive stone and wood structures harvesting millions of salmon annually",
              rarity: "epic",
              historicalPeriod: "3000 BCE - 1850s CE",
              significance: "Celilo Falls processed 10-15 million salmon annually; sustainable for millennia",
              yearBCE: 3000,
              category: "irrigation"
            },
            {
              id: "clam-gardens",
              name: "Clam Gardens (Rock Terraces)",
              description: "Intertidal rock walls increasing clam habitat by 300%",
              rarity: "epic",
              historicalPeriod: "3000 BCE - Present",
              significance: "1,000+ documented; still in use; 2-4× productivity increase",
              yearBCE: 3000,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "siberia-yakutia",
      name: "Siberian Peoples (Yakut, Evenk, Chukchi)",
      description: "Ice engineering masters surviving -60°C winters through permafrost cellars, frozen river highways, and under-ice fishing - 30,000+ years of Arctic innovation",
      position: [18, 0, -8],
      color: "#90CAF9",
      era: "ancient",
      dateRange: "30000 BCE - Present",
      locations: [
        {
          id: "yakutsk-region",
          name: "Yakutia (Sakha Republic)",
          description: "Coldest permanently inhabited place on Earth - winter temperatures reach -60°C",
          historicalContext: "Permafrost-based technologies for extreme cold survival; 95% underlain by permafrost",
          coordinates: { lat: 62.0, lng: 129.7 },
          artifacts: [
            {
              id: "yakutian-ice-houses",
              name: "Yakutian Permafrost Cellars (Buluus)",
              description: "Underground storage chambers carved into permanently frozen ground, maintaining -10°C year-round without energy",
              rarity: "epic",
              historicalPeriod: "Ancient - Present",
              significance: "Zero energy refrigeration; food preserved for years; influenced Svalbard Global Seed Vault design",
              yearBCE: 5000,
              category: "dam"
            },
            {
              id: "siberian-fish-traps",
              name: "Siberian Fish Traps (Zapor)",
              description: "River-spanning weirs and cone traps for mass salmon and whitefish harvest, including under-ice fishing through 2m thick ice",
              rarity: "epic",
              historicalPeriod: "5000 BCE - Present",
              significance: "Primary protein source for millions; sophisticated ice-hole fishing techniques",
              yearBCE: 5000,
              category: "irrigation"
            }
          ]
        },
        {
          id: "siberian-transport",
          name: "Siberian River Network",
          description: "Lena, Yenisei, and Ob rivers - the world's largest frozen highway system",
          historicalContext: "Rivers become transportation corridors in winter, impassable barriers in summer",
          coordinates: { lat: 65.0, lng: 120.0 },
          artifacts: [
            {
              id: "ice-roads",
              name: "Frozen River Highways (Zimnik)",
              description: "Frozen rivers and constructed ice roads serving as winter transportation network spanning thousands of kilometers",
              rarity: "epic",
              historicalPeriod: "Ancient - Present",
              significance: "30,000+ km network; supports 80-ton trucks; critical infrastructure connecting remote communities",
              yearBCE: 5000,
              category: "canal"
            },
            {
              id: "buluus-ice",
              name: "Buluus Natural Ice Springs",
              description: "Natural ice formations staying frozen through summer (+30°C), used as community refrigerators and sacred sites",
              rarity: "rare",
              historicalPeriod: "Ancient - Present",
              significance: "Free summer refrigeration; navigation landmarks; cultural gathering points; still used today",
              yearBCE: 10000,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "imperial-soviet-russia",
      name: "Imperial & Soviet Russia",
      description: "From Peter the Great's naval ambitions to Soviet megaprojects connecting five seas",
      position: [14, 0, -6],
      color: "#D32F2F",
      era: "modern",
      dateRange: "1700 - 1991 CE",
      locations: [
        {
          id: "moscow-region",
          name: "Moscow & Central Russia",
          description: "Heart of Russia's unified deep water system",
          historicalContext: "Soviet hydraulic engineering connecting Arctic to Mediterranean",
          coordinates: { lat: 55.75, lng: 37.62 },
          artifacts: [
            {
              id: "water-integrator",
              name: "Lukyanov Water Integrator Computer",
              description: "World's first analog computer using water flow through tubes to solve partial differential equations",
              rarity: "legendary",
              historicalPeriod: "1936",
              significance: "Solved concrete curing calculations; used in Soviet construction until 1980s; physical SWMM before digital existed",
              yearBCE: -1936,
              category: "water-clock"
            },
            {
              id: "moscow-volga-canal",
              name: "Moscow-Volga Canal",
              description: "128 km canal bringing Volga River water to Moscow, rerouting a major river to the capital",
              rarity: "epic",
              historicalPeriod: "1932-1937",
              significance: "Supplies 80% of Moscow's water; 11 locks raising ships 38 meters; enabled Moscow's growth to 12+ million",
              yearBCE: -1937,
              category: "canal"
            }
          ]
        },
        {
          id: "white-sea-region",
          name: "White Sea-Baltic Region",
          description: "Arctic-Baltic connection through 227 km of canals and locks",
          historicalContext: "Strategic naval route from Arctic to Baltic",
          coordinates: { lat: 64.5, lng: 34.8 },
          artifacts: [
            {
              id: "belomor-canal",
              name: "White Sea-Baltic Canal (Belomor)",
              description: "227 km canal connecting White Sea to Baltic through 19 locks, built in just 20 months",
              rarity: "epic",
              historicalPeriod: "1931-1933",
              significance: "Strategic naval route; enabled Arctic-Baltic shipping; controversial construction history",
              yearBCE: -1933,
              category: "canal"
            }
          ]
        },
        {
          id: "volga-don-region",
          name: "Volga-Don Waterway",
          description: "Link between Europe's two mightiest rivers enabling five-sea navigation",
          historicalContext: "Peter the Great's dream realized 250 years later",
          coordinates: { lat: 48.7, lng: 43.5 },
          artifacts: [
            {
              id: "volga-don-canal",
              name: "Volga-Don Canal",
              description: "101 km canal linking Volga and Don rivers through 13 locks, completing five-sea navigation system",
              rarity: "legendary",
              historicalPeriod: "1948-1952",
              significance: "Ships can travel from Arctic Ocean to Mediterranean; Peter the Great first proposed it in 1697; dream took 250 years",
              yearBCE: -1952,
              category: "canal"
            },
            {
              id: "unified-waterway",
              name: "Unified Deep Water System of European Russia",
              description: "Interconnected network of rivers, lakes, and canals linking 5 seas: White, Baltic, Caspian, Azov, and Black",
              rarity: "legendary",
              historicalPeriod: "1930s-1952",
              significance: "6,500 km navigable waterway; ships travel from St. Petersburg to Astrakhan; largest inland waterway system in Europe",
              yearBCE: -1952,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "inuit",
      name: "Inuit & Arctic Peoples",
      description: "Turned ice and frozen water from obstacles into essential resources",
      position: [-6, 0, -12],
      color: "#B3E5FC",
      era: "ancient",
      dateRange: "4000 BCE - Present",
      locations: [
        {
          id: "arctic-region",
          name: "Arctic Circle",
          description: "World's harshest climate turned habitable through ice engineering",
          historicalContext: "Technologies enabling human life at -40°C and below",
          coordinates: { lat: 64.2, lng: -51.7 },
          artifacts: [
            {
              id: "iglu-engineering",
              name: "Iglu (Snow House) Engineering",
              description: "Shelter built from snow maintaining +16°C interior at -40°C outside",
              rarity: "legendary",
              historicalPeriod: "1000+ years ago - Present",
              significance: "50°C+ temperature differential; built in 1-2 hours; physics perfected",
              yearBCE: 1000,
              category: "dam"
            },
            {
              id: "kayak-qajaq",
              name: "Qajaq (Kayak)",
              description: "Closed-deck watercraft enabling hunting in Arctic waters with rolling capability",
              rarity: "legendary",
              historicalPeriod: "4000+ years ago - Present",
              significance: "Most successful watercraft design in history; $3+ billion global industry",
              yearBCE: 4000,
              category: "canal"
            },
            {
              id: "freshwater-ice-harvest",
              name: "Freshwater Ice Harvesting",
              description: "Identifying and harvesting drinkable ice from the salty sea ice environment",
              rarity: "epic",
              historicalPeriod: "Ancient - Present",
              significance: "Multi-year sea ice loses salt; blue/green color indicates freshwater",
              yearBCE: 4000,
              category: "dam"
            },
            {
              id: "arctic-ice-fishing",
              name: "Arctic Ice Fishing Technology",
              description: "Specialized tools for fishing through 2m Arctic ice including ivory lures and kakivak spears",
              rarity: "epic",
              historicalPeriod: "4000+ years ago - Present",
              significance: "Year-round protein; fish freeze instantly at -40°C",
              yearBCE: 4000,
              category: "irrigation"
            },
            {
              id: "arctic-ice-cellars",
              name: "Ice Cellars (Sigluaq)",
              description: "Underground permafrost storage for whale meat and community food supplies",
              rarity: "epic",
              historicalPeriod: "Ancient - Present",
              significance: "Whale meat from 1970s still frozen; climate change now threatens cellars",
              yearBCE: 2000,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "swahili-coast",
      name: "Swahili Coast",
      description: "Monsoon water harvesting supporting major Indian Ocean trade cities",
      position: [8, 0, 6],
      color: "#26A69A",
      era: "medieval",
      dateRange: "100 CE - Present",
      locations: [
        {
          id: "kilwa-lamu",
          name: "Kilwa & Lamu",
          description: "Medieval trade cities rivaling European ports",
          historicalContext: "Coral island cities with no rivers or groundwater",
          coordinates: { lat: -6.2, lng: 39.2 },
          artifacts: [
            {
              id: "swahili-cisterns",
              name: "Swahili Cistern Systems (Birika)",
              description: "Coral-block rainwater cisterns supporting 20,000-person cities on water-scarce islands",
              rarity: "epic",
              historicalPeriod: "1000 - 1500 CE",
              significance: "UNESCO World Heritage; Lamu cisterns still functional after centuries",
              yearBCE: -1000,
              category: "dam"
            },
            {
              id: "swahili-fish-traps",
              name: "Tidal Fish Traps (Uzio)",
              description: "Stone walls trapping fish as tides recede, creating sustainable fisheries",
              rarity: "epic",
              historicalPeriod: "1000+ years ago - Present",
              significance: "Still actively used; harvest 2× daily at tides; sustainable for millennia",
              yearBCE: -1000,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "kongo-kingdom",
      name: "Kongo Kingdom",
      description: "Water management in the world's second-largest rainforest",
      position: [2, 0, 6],
      color: "#66BB6A",
      era: "medieval",
      dateRange: "1390 - 1914 CE",
      locations: [
        {
          id: "congo-basin",
          name: "Congo Basin",
          description: "Tropical rainforest with 2,000 mm annual rainfall",
          historicalContext: "Challenge: draining excess water, not finding it",
          coordinates: { lat: -4.3, lng: 15.3 },
          artifacts: [
            {
              id: "kongo-raised-beds",
              name: "Kongo Raised Bed Agriculture",
              description: "Elevated planting beds draining excess water in world's wettest environment",
              rarity: "epic",
              historicalPeriod: "1400 - Present",
              significance: "2-3× yield improvement; opposite of irrigation - it's drainage agriculture",
              yearBCE: -1400,
              category: "irrigation"
            },
            {
              id: "palm-wine-tapping",
              name: "Palm Wine Tapping System",
              description: "Sustainable sap harvesting from palm trees - a living water tower",
              rarity: "rare",
              historicalPeriod: "Ancient - Present",
              significance: "1-5 liters/day per tree without killing it; works with forest not clearing it",
              yearBCE: -1000,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "mali-timbuktu",
      name: "Mali Empire & Timbuktu",
      description: "Niger River systems making Timbuktu a city of 100,000 at desert's edge",
      position: [-2, 0, 2],
      color: "#FFA726",
      era: "medieval",
      dateRange: "1235 - 1600 CE",
      locations: [
        {
          id: "niger-delta",
          name: "Niger Inland Delta",
          description: "World's largest inland fishery with integrated flood agriculture",
          historicalContext: "Economic foundation of the Mali Empire",
          coordinates: { lat: 14.0, lng: -4.0 },
          artifacts: [
            {
              id: "niger-flood-agriculture",
              name: "Niger Inland Delta Flood Agriculture",
              description: "Integrated rice, fish, and cattle system exploiting annual Niger floods across 30,000 km²",
              rarity: "legendary",
              historicalPeriod: "3000 BCE - Present",
              significance: "Still feeds 1+ million people; 100,000+ tonnes fish/year; 5,000 years sustainable",
              yearBCE: 3000,
              category: "irrigation"
            }
          ]
        },
        {
          id: "timbuktu-city",
          name: "Timbuktu",
          description: "City of 100,000 at the Sahara's edge",
          historicalContext: "Trans-Saharan trade terminus; center of Islamic learning",
          coordinates: { lat: 16.8, lng: -3.0 },
          artifacts: [
            {
              id: "timbuktu-wells",
              name: "Timbuktu Deep Wells System",
              description: "Hand-dug wells tapping 10,000-year-old Saharan aquifers to supply desert-edge city",
              rarity: "epic",
              historicalPeriod: "1100 - Present",
              significance: "Supported 100,000 people; water is ancient rainfall from when Sahara was green",
              yearBCE: -1100,
              category: "fountain"
            }
          ]
        }
      ]
    },
    {
      id: "morocco",
      name: "Morocco (Khettara)",
      description: "Ancient underground water channels sustaining life in North Africa's arid regions",
      position: [-5, 0, 8],
      color: "#E65100",
      era: "ancient",
      dateRange: "1000 BCE - Present",
      locations: [
        {
          id: "tafilalet-oasis",
          name: "Tafilalet Oasis",
          description: "World's largest traditional oasis with 800+ khettaras",
          historicalContext: "Gateway between Sahara and Mediterranean world",
          coordinates: { lat: 31.5, lng: -4.3 },
          artifacts: [
            {
              id: "khettara-system",
              name: "Khettara Underground Channels",
              description: "Gravity-fed underground galleries bringing mountain aquifer water to desert oases across 20+ km",
              rarity: "legendary",
              historicalPeriod: "1000 BCE - Present",
              significance: "800+ khettaras in Tafilalet alone; still irrigating date palms; UNESCO heritage candidate",
              yearBCE: 1000,
              category: "aqueduct"
            },
            {
              id: "fogarra-well",
              name: "Mother Well (Ain Umm)",
              description: "Deep collection wells where khettara begins, tapping mountain aquifers 20-50m deep",
              rarity: "epic",
              historicalPeriod: "1000 BCE - Present",
              significance: "Hand-dug through solid rock; some reach 60m depth; defines entire system's water yield",
              yearBCE: 1000,
              category: "fountain"
            }
          ]
        },
        {
          id: "marrakech",
          name: "Marrakech",
          description: "The Red City built on a network of underground channels",
          historicalContext: "Imperial capital with sophisticated water distribution",
          coordinates: { lat: 31.6, lng: -8.0 },
          artifacts: [
            {
              id: "marrakech-seguias",
              name: "Marrakech Seguia Network",
              description: "125 km of surface channels distributing Atlas Mountain water throughout the medina",
              rarity: "epic",
              historicalPeriod: "1070 CE - Present",
              significance: "Still supplies the famous Marrakech gardens; water rights date back 950 years",
              yearBCE: -1070,
              category: "canal"
            },
            {
              id: "riad-fountains",
              name: "Riad Courtyard Fountains",
              description: "Cooling fountains in inner courtyards providing microclimate oases in the desert city",
              rarity: "rare",
              historicalPeriod: "1000 CE - Present",
              significance: "Evaporative cooling drops temperatures 10°C; architectural water integration",
              yearBCE: -1000,
              category: "fountain"
            }
          ]
        },
        {
          id: "fez",
          name: "Fez",
          description: "Medieval city with 300+ fountains and the world's oldest university",
          historicalContext: "Spiritual capital with Islamic water heritage",
          coordinates: { lat: 34.0, lng: -5.0 },
          artifacts: [
            {
              id: "fez-hammam",
              name: "Fez Hammam Tradition",
              description: "Public bath houses with sophisticated water heating, recycling, and distribution",
              rarity: "epic",
              historicalPeriod: "800 CE - Present",
              significance: "100+ historic hammams; thermal water management; social/religious function",
              yearBCE: -800,
              category: "sanitation"
            },
            {
              id: "tannery-water",
              name: "Chouara Tannery Water System",
              description: "1000-year-old water management for leather processing using traditional methods",
              rarity: "rare",
              historicalPeriod: "1000 CE - Present",
              significance: "World's oldest working tannery; complex water flow for dyeing and processing",
              yearBCE: -1000,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "borneo",
      name: "Borneo Indigenous Civilizations",
      description: "Sophisticated water management in Earth's wettest environments - 40,000+ years",
      position: [16, 0, 6],
      color: "#8BC34A",
      era: "ancient",
      dateRange: "40000 BCE - Present",
      locations: [
        {
          id: "sarawak-longhouses",
          name: "Sarawak Longhouse Region",
          description: "Iban, Bidayuh, and Kayan-Kenyah longhouse territories",
          historicalContext: "Communal flood-resistant architecture on rivers",
          coordinates: { lat: 2.5, lng: 113.0 },
          artifacts: [
            {
              id: "longhouse-settlements",
              name: "Longhouse River Settlement System",
              description: "Elevated communal dwellings on ironwood stilts housing 20-100 families, withstanding 5-10m floods",
              rarity: "epic",
              historicalPeriod: "2000 BCE - Present",
              significance: "400+ meter structures; entire village under one roof; still inhabited today",
              yearBCE: 2000,
              category: "dam"
            },
            {
              id: "bamboo-talang",
              name: "Bamboo Aqueduct Systems (Talang)",
              description: "Gravity-fed water supply using split bamboo channels spanning kilometers",
              rarity: "rare",
              historicalPeriod: "Ancient - Present",
              significance: "Zero energy cost; spans 2+ km; gradient engineering without tools",
              yearBCE: 2000,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "kalimantan-peat",
          name: "Kalimantan Peat Swamps",
          description: "World's largest tropical peatlands",
          historicalContext: "Sustainable peat management vs. modern destruction",
          coordinates: { lat: -2.5, lng: 114.5 },
          artifacts: [
            {
              id: "peat-canals",
              name: "Peat Swamp Canal Systems (Tatah/Anjir)",
              description: "Shallow canals through 15m-deep peat, maintaining water table to prevent fires",
              rarity: "rare",
              historicalPeriod: "500 CE - Present",
              significance: "Traditional shallow canals prevented fires; modern deep drainage caused catastrophic fires",
              yearBCE: -500,
              category: "canal"
            },
            {
              id: "floating-rice-borneo",
              name: "Floating Rice Cultivation (Padi Pasang Surut)",
              description: "Rice varieties with stems elongating 5 meters to keep pace with rising floods",
              rarity: "rare",
              historicalPeriod: "Ancient - Present",
              significance: "Stems grow 10+ cm/day; climate-resilient food production",
              yearBCE: 1000,
              category: "irrigation"
            }
          ]
        },
        {
          id: "sabah-tagal",
          name: "Sabah Tagal Rivers",
          description: "Community-managed fish sanctuary system",
          historicalContext: "Indigenous conservation legally recognized since 2003",
          coordinates: { lat: 5.5, lng: 116.5 },
          artifacts: [
            {
              id: "tagal-system",
              name: "Tagal Fish Conservation System",
              description: "Community river sanctuaries closed 1-5 years, producing 3-10× more fish than open waters",
              rarity: "epic",
              historicalPeriod: "Ancient - Present",
              significance: "400+ registered sites; legally backed since 2003; model for global fisheries",
              yearBCE: 1000,
              category: "irrigation"
            },
            {
              id: "rattan-fish-traps",
              name: "Rattan Fish Traps (Bubu)",
              description: "Ingenious basket traps with one-way funnel entrance for sustainable fishing",
              rarity: "common",
              historicalPeriod: "Ancient - Present",
              significance: "Size-selective (small fish escape); live capture allows release; zero bycatch",
              yearBCE: 3000,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "papua-new-guinea",
      name: "Papua New Guinea",
      description: "World's oldest wetland agriculture (9,000 years) with 800+ languages",
      position: [20, 0, 4],
      color: "#FF9800",
      era: "ancient",
      dateRange: "50000 BCE - Present",
      locations: [
        {
          id: "kuk-swamp",
          name: "Kuk Swamp",
          description: "UNESCO World Heritage - oldest wetland agriculture on Earth",
          historicalContext: "Independent agricultural invention 4,000 years before Egypt",
          coordinates: { lat: -5.8, lng: 144.3 },
          artifacts: [
            {
              id: "kuk-drainage",
              name: "Kuk Swamp Drainage Agriculture",
              description: "The world's oldest known wetland agriculture - 9,000-year-old drainage channels predating Egyptian civilization",
              rarity: "legendary",
              historicalPeriod: "7000 BCE - Present",
              significance: "UNESCO World Heritage 2008; one of only 3-4 independent agricultural origins",
              yearBCE: 7000,
              category: "canal"
            }
          ]
        },
        {
          id: "png-highlands",
          name: "PNG Highlands",
          description: "Terrace irrigation supporting millions",
          historicalContext: "Dense populations using stone-age technology",
          coordinates: { lat: -6.0, lng: 145.5 },
          artifacts: [
            {
              id: "highland-terraces",
              name: "Highland Terrace Irrigation (Wola/Huli)",
              description: "Engineered hillside terraces with water control supporting 150 people/km²",
              rarity: "epic",
              historicalPeriod: "2000 BCE - Present",
              significance: "Feeds 3+ million highlanders; sweet potato yields 10-20 tons/hectare",
              yearBCE: 2000,
              category: "irrigation"
            },
            {
              id: "taro-pondfields",
              name: "Taro Pondfield Irrigation",
              description: "Flooded field systems for wetland taro with precise water control",
              rarity: "rare",
              historicalPeriod: "2000 BCE - Present",
              significance: "Continuous cultivation 4,000+ years; 15-30 tons/hectare yield",
              yearBCE: 2000,
              category: "irrigation"
            }
          ]
        },
        {
          id: "sepik-river",
          name: "Sepik River",
          description: "World's largest uncontaminated river system",
          historicalContext: "Famous for art and sophisticated fish trap systems",
          coordinates: { lat: -4.0, lng: 143.5 },
          artifacts: [
            {
              id: "sepik-fish-traps",
              name: "Sepik River Fish Trap Systems",
              description: "Elaborate weirs and portable traps harvesting 100+ species year-round",
              rarity: "epic",
              historicalPeriod: "Ancient - Present",
              significance: "Primary protein for river populations; sustainable for millennia",
              yearBCE: 5000,
              category: "irrigation"
            },
            {
              id: "sago-processing",
              name: "Sago Palm Water Processing",
              description: "Hydraulic food engineering washing 3 million calories from one tree using 2,000 liters of water",
              rarity: "rare",
              historicalPeriod: "Ancient - Present",
              significance: "One palm = 3 years of calories for one person; most efficient extraction known",
              yearBCE: 5000,
              category: "irrigation"
            }
          ]
        },
        {
          id: "coastal-png",
          name: "Coastal & Island PNG",
          description: "Stilt villages and atoll survival engineering",
          historicalContext: "Complete water-based urbanism",
          coordinates: { lat: -2.5, lng: 140.7 },
          artifacts: [
            {
              id: "stilt-villages",
              name: "Stilt Village Water Architecture",
              description: "Complete villages built 2-5 meters over water with tidal sanitation and fish traps attached to piles",
              rarity: "epic",
              historicalPeriod: "Ancient - Present",
              significance: "Thousands still live in stilt villages; flood-proof, malaria-reduced, protein at doorstep",
              yearBCE: 3000,
              category: "dam"
            },
            {
              id: "atoll-rainwater",
              name: "Coral Atoll Rainwater Harvesting",
              description: "Survival engineering on coral islands with zero freshwater sources, managing thin freshwater lens",
              rarity: "rare",
              historicalPeriod: "Ancient - Present",
              significance: "Traditional rules prevent saltwater intrusion; coconut water = emergency backup",
              yearBCE: 2000,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "pre-roman-iberia",
      name: "Pre-Roman Iberian Civilizations",
      description: "Before Rome conquered Hispania, diverse peoples developed sophisticated water systems for mining, agriculture, and urban life",
      position: [-12, 0, -8],
      color: "#CD853F",
      era: "ancient",
      dateRange: "2000 BCE - 19 BCE",
      locations: [
        {
          id: "rio-tinto",
          name: "Río Tinto Mining Region",
          description: "Legendary wealth of Tartessos with hydraulic mining",
          historicalContext: "Tartessians may be Biblical 'Tarshish', traded with Phoenicians",
          coordinates: { lat: 37.7, lng: -6.6 },
          artifacts: [
            {
              id: "tartessian-hydraulic-mining",
              name: "Tartessian Hydraulic Mining",
              description: "Advanced water-powered mining techniques predating Roman 'ruina montium'",
              rarity: "epic",
              historicalPeriod: "Bronze/Iron Age (1000-500 BCE)",
              significance: "Río Tinto still mined after 5,000 years continuous operation; exported gold, silver, copper to Phoenicia, Greece, Egypt",
              yearBCE: 1000,
              category: "dam"
            }
          ]
        },
        {
          id: "ullastret-sagunto",
          name: "Iberian Hilltop Oppida",
          description: "Fortified settlements with sophisticated cistern systems",
          historicalContext: "Sagunto withstood Hannibal for 8 months; Numancia resisted Rome for 13 years",
          coordinates: { lat: 42.0, lng: 3.1 },
          artifacts: [
            {
              id: "iberian-cisterns",
              name: "Iberian Urban Cistern Networks",
              description: "Rock-cut cisterns supplying hilltop fortified settlements (oppida)",
              rarity: "rare",
              historicalPeriod: "Iron Age (600-19 BCE)",
              significance: "Bottle-shaped cisterns 5-15m deep, up to 500+ m³ capacity; enabled siege resistance",
              yearBCE: 600,
              category: "dam"
            },
            {
              id: "celtiberian-irrigation",
              name: "Celtiberian Valley Irrigation",
              description: "River diversion systems for cereal agriculture in interior Iberia",
              rarity: "common",
              historicalPeriod: "Iron Age (500-19 BCE)",
              significance: "Stone weirs (azudes precursors) and gravity channels predating Moorish acequia systems by 1,000 years",
              yearBCE: 500,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "basque-country",
      name: "Basque Civilization",
      description: "Europe's oldest continuous culture with unique water engineering adapted to steep, rainy mountains",
      position: [-10, 0, -6],
      color: "#8B0000",
      era: "classical",
      dateRange: "Prehistoric - Present",
      locations: [
        {
          id: "basque-valleys",
          name: "Basque Mountain Valleys",
          description: "Water-powered mills and iron forges in every valley",
          historicalContext: "Basque iron industry supplied half of Europe with premium steel",
          coordinates: { lat: 43.0, lng: -2.0 },
          artifacts: [
            {
              id: "basque-water-mills",
              name: "Basque Water Mills (Errota)",
              description: "Sophisticated mountain stream mills for grain, cider, and iron forging",
              rarity: "rare",
              historicalPeriod: "Roman - Present (100 CE - Present)",
              significance: "3,000+ mills at peak; horizontal wheel (rodezno) design; ~50 heritage mills still operating",
              yearBCE: -100,
              category: "fountain"
            },
            {
              id: "basque-iron-forges",
              name: "Basque Ironworks (Burdinola)",
              description: "Water-powered iron forges producing Europe's finest steel",
              rarity: "rare",
              historicalPeriod: "Iron Age - Industrial (200 BCE - 1900 CE)",
              significance: "Water wheels drove bellows and trip hammers; Basque steel armed Spanish conquistadors",
              yearBCE: 200,
              category: "fountain"
            }
          ]
        },
        {
          id: "basque-coast",
          name: "Bay of Biscay Coast",
          description: "Tidal fish traps and harbors for whaling fleets",
          historicalContext: "Basque fishermen reached Newfoundland before Columbus",
          coordinates: { lat: 43.3, lng: -2.9 },
          artifacts: [
            {
              id: "basque-fish-traps",
              name: "Basque Tidal Fish Traps & Harbor Works",
              description: "Stone tidal traps and engineered harbors for fishing fleets",
              rarity: "rare",
              historicalPeriod: "Iron Age - Present (500 BCE - Present)",
              significance: "V-shaped stone traps harvest at low tide; harbors launched Atlantic exploration",
              yearBCE: 500,
              category: "dam"
            },
            {
              id: "basque-mountain-irrigation",
              name: "Basque Mountain Terrace Irrigation",
              description: "Spring-fed channel systems for mountain agriculture and cider orchards",
              rarity: "common",
              historicalPeriod: "Medieval - Present (500 CE - Present)",
              significance: "Controls water timing for crops; many systems still function for cider apple orchards",
              yearBCE: -500,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "celtic-europe",
      name: "Celtic Civilizations",
      description: "Dominated Europe for 800 years; sophisticated water management for ritual, agriculture, and mining",
      position: [-6, 0, -8],
      color: "#228B22",
      era: "ancient",
      dateRange: "800 BCE - 400 CE",
      locations: [
        {
          id: "celtic-sacred-sites",
          name: "Celtic Sacred Springs",
          description: "Ritual water sites across Celtic Europe",
          historicalContext: "Celts saw water as portals to the otherworld",
          coordinates: { lat: 51.38, lng: -2.36 },
          artifacts: [
            {
              id: "celtic-sacred-springs",
              name: "Celtic Sacred Water Sites (Nemeton)",
              description: "Engineered sacred springs and ritual wells with votive offerings",
              rarity: "epic",
              historicalPeriod: "Iron Age (800 BCE - 400 CE)",
              significance: "Bath (Sulis), Seine Source (Sequana); weapons, gold, even humans offered to water; many became Roman then Christian sites",
              yearBCE: 800,
              category: "fountain"
            }
          ]
        },
        {
          id: "celtic-oppida",
          name: "Celtic Oppida Towns",
          description: "First true urban planning in temperate Europe",
          historicalContext: "Julius Caesar spent years besieging water-supplied Celtic towns",
          coordinates: { lat: 47.0, lng: 4.0 },
          artifacts: [
            {
              id: "celtic-oppida-water",
              name: "Celtic Oppida Water Systems",
              description: "Fortified towns with springs, cisterns, and urban drainage",
              rarity: "rare",
              historicalPeriod: "Iron Age (200 BCE - 50 CE)",
              significance: "Bibracte, Alesia, Numancia - water supply enabled siege resistance; foundations for later Roman cities",
              yearBCE: 200,
              category: "sanitation"
            }
          ]
        },
        {
          id: "celtic-wetlands",
          name: "Celtic Wetland Engineering",
          description: "Bog trackways and field drainage systems",
          historicalContext: "Sweet Track (3807 BCE) is among oldest engineered roads",
          coordinates: { lat: 51.2, lng: -2.8 },
          artifacts: [
            {
              id: "celtic-timber-trackways",
              name: "Celtic Timber Trackways (Togher)",
              description: "Engineered wooden roads across bogs and wetlands",
              rarity: "rare",
              historicalPeriod: "Neolithic - Iron Age (4000 BCE - 500 CE)",
              significance: "Sweet Track 1.8km long built 3807 BCE; carried carts across bogs 5,000 years ago",
              yearBCE: 4000,
              category: "canal"
            },
            {
              id: "celtic-field-drainage",
              name: "Celtic Field Drainage Systems",
              description: "Ditch-and-bank field systems managing waterlogged soils",
              rarity: "common",
              historicalPeriod: "Iron Age (500 BCE - 400 CE)",
              significance: "Square/rectangular 'Celtic fields' still visible from air; boundaries were working drainage",
              yearBCE: 500,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "gaul",
      name: "Gaulish Civilization",
      description: "Celtic peoples of France with wealthy urban centers and extensive river trade before Caesar's conquest",
      position: [-8, 0, -4],
      color: "#4169E1",
      era: "ancient",
      dateRange: "600 BCE - 50 BCE",
      locations: [
        {
          id: "gaulish-rivers",
          name: "Gaulish River Network",
          description: "Engineered river transport connecting Mediterranean and Atlantic",
          historicalContext: "Gaul's wealth based on transit trade controlling two worlds",
          coordinates: { lat: 45.76, lng: 4.84 },
          artifacts: [
            {
              id: "gaulish-river-navigation",
              name: "Gaulish River Navigation Systems",
              description: "Engineered river transport network across Gaul with improved channels and port facilities",
              rarity: "rare",
              historicalPeriod: "Iron Age (500-50 BCE)",
              significance: "Rhône-Loire-Seine network moved Mediterranean wine north, British tin south; confluence cities like Lyon still major centers",
              yearBCE: 500,
              category: "canal"
            }
          ]
        },
        {
          id: "gaulish-wine",
          name: "Gaulish Wine Regions",
          description: "Water management for viticulture adopted from Greeks",
          historicalContext: "Gauls invented the wine barrel",
          coordinates: { lat: 44.4, lng: 4.9 },
          artifacts: [
            {
              id: "gaulish-viticulture",
              name: "Gaulish Viticulture Water Systems",
              description: "Water management for wine production - irrigation, cellar cooling, processing",
              rarity: "common",
              historicalPeriod: "Iron Age (200-50 BCE)",
              significance: "Barrel innovation revolutionized wine transport; underground cellars with spring-fed cooling; foundation of French wine industry",
              yearBCE: 200,
              category: "irrigation"
            }
          ]
        },
        {
          id: "gaulish-thermal",
          name: "Gaulish Thermal Springs",
          description: "Sacred thermal springs developed for healing cults",
          historicalContext: "Every famous French spa sits on Gaulish sacred site",
          coordinates: { lat: 46.13, lng: 3.43 },
          artifacts: [
            {
              id: "gaulish-thermal-springs",
              name: "Gaulish Thermal Spring Sites",
              description: "Sacred thermal springs developed for healing cults before Roman monumentalization",
              rarity: "common",
              historicalPeriod: "Iron Age (300-50 BCE)",
              significance: "Vichy, Aix, Bourbon all Celtic first; Romans expanded existing sites; continuous use to present",
              yearBCE: 300,
              category: "fountain"
            }
          ]
        }
      ]
    },
    {
      id: "germanic-europe",
      name: "Germanic Civilizations",
      description: "Water technologies suited to northern Europe's wet, cold climate - wetland reclamation and bog management",
      position: [-4, 0, -10],
      color: "#708090",
      era: "ancient",
      dateRange: "1000 BCE - 600 CE",
      locations: [
        {
          id: "frisian-terps",
          name: "Frisian Coastal Marshes",
          description: "Terp mound settlements in tidal marshland",
          historicalContext: "Dutch water expertise rooted in 2,000 years of terp-building",
          coordinates: { lat: 53.2, lng: 5.8 },
          artifacts: [
            {
              id: "germanic-terp-mounds",
              name: "Terp/Wurt Dwelling Mounds",
              description: "Artificial mounds 3-10+ meters high built for flood-safe settlement in coastal marshes",
              rarity: "epic",
              historicalPeriod: "Iron Age - Medieval (500 BCE - 1200 CE)",
              significance: "~1,200 identified; many still inhabited; each generation built higher; foundation for later Dutch expertise",
              yearBCE: 500,
              category: "dam"
            }
          ]
        },
        {
          id: "germanic-bogs",
          name: "Germanic Boglands",
          description: "Bog iron extraction and sacred water sites",
          historicalContext: "Bogs preserve everything - including sacrificial victims",
          coordinates: { lat: 55.4, lng: 9.4 },
          artifacts: [
            {
              id: "germanic-bog-iron",
              name: "Bog Iron Extraction",
              description: "Harvesting iron from wetlands - the bog was their mine",
              rarity: "rare",
              historicalPeriod: "Iron Age - Medieval (500 BCE - 1000 CE)",
              significance: "Iron dissolved from soil precipitates in bogs; renewable (reforms in 20-30 years); every village could produce tools",
              yearBCE: 500,
              category: "dam"
            },
            {
              id: "germanic-sacred-wells",
              name: "Germanic Sacred Well Shrines",
              description: "Sacred wells and springs with votive deposits and bog bodies",
              rarity: "rare",
              historicalPeriod: "Iron Age (500 BCE - 800 CE)",
              significance: "Tollund Man, Grauballe Man preserved 2,000 years; weapons deliberately destroyed for gods; many became Christian holy wells",
              yearBCE: 500,
              category: "fountain"
            }
          ]
        },
        {
          id: "germanic-boats",
          name: "Germanic River & Coastal Navigation",
          description: "Watercraft evolution from dugout to Viking ship",
          historicalContext: "8,000 years of boat evolution led to Viking longships",
          coordinates: { lat: 55.8, lng: 10.2 },
          artifacts: [
            {
              id: "germanic-log-boats",
              name: "Germanic Dugout & Plank Boats",
              description: "Watercraft evolved from dugout canoes to sophisticated river and sea vessels",
              rarity: "common",
              historicalPeriod: "Mesolithic - Early Medieval (8000 BCE - 1000 CE)",
              significance: "Pesse Canoe (8040 BCE) is oldest known boat; Nydam boat (320 CE) is Viking precursor; rivers = roads of northern Europe",
              yearBCE: 8000,
              category: "canal"
            },
            {
              id: "germanic-salt-works",
              name: "Germanic Coastal Salt Works",
              description: "Extracting salt from seawater using peat-burning method",
              rarity: "common",
              historicalPeriod: "Iron Age - Present (500 BCE - Present)",
              significance: "Salt = how you kept food from rotting; 'salary' from Latin sal (salt); Lüneburg, Halle still famous salt towns",
              yearBCE: 500,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "etruscan",
      name: "Etruscan Civilization",
      description: "Rome's teachers in hydraulic engineering. Drained marshes, built drainage tunnels, created underground water systems.",
      position: [-3, 0, -8],
      color: "#8B4513",
      era: "classical",
      dateRange: "900 BCE - 90 BCE",
      locations: [
        {
          id: "etruscan-cuniculi",
          name: "Cuniculi Networks of Veii",
          description: "Underground drainage tunnels transforming marshes to farmland",
          historicalContext: "Romans hired Etruscan engineers who'd been tunneling for centuries",
          coordinates: { lat: 42.0, lng: 12.4 },
          artifacts: [
            {
              id: "etruscan-cuniculi",
              name: "Cuniculi Drainage Tunnel System",
              description: "Sophisticated underground tunnel networks that drained marshes, captured groundwater, and transformed swamps into farmland",
              rarity: "legendary",
              historicalPeriod: "Etruscan (700-200 BCE)",
              significance: "50+ km at Veii alone; hand-cut through volcanic tufa; vertical shafts every 30-35m; some STILL draining fields today after 2,500 years",
              yearBCE: 700,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "etruscan-cloaca",
          name: "Cloaca Maxima, Rome",
          description: "The world's oldest major infrastructure still in continuous use",
          historicalContext: "Etruscan-designed and built, 2,600 years and counting",
          coordinates: { lat: 41.89, lng: 12.48 },
          artifacts: [
            {
              id: "etruscan-cloaca-maxima",
              name: "Cloaca Maxima (Great Sewer)",
              description: "The greatest sewer of the ancient world, Etruscan-designed, that drained the Roman Forum and enabled Rome to exist",
              rarity: "legendary",
              historicalPeriod: "Etruscan-Roman (600 BCE - Present)",
              significance: "4.2m diameter barrel vault; STILL drains central Rome; 2,600+ years continuous operation; made Rome possible as a city",
              yearBCE: 600,
              category: "sanitation"
            }
          ]
        },
        {
          id: "etruscan-orvieto",
          name: "Orvieto Underground City",
          description: "1,200+ cisterns carved into solid rock plateau",
          historicalContext: "A city that hollowed out its own foundation to survive",
          coordinates: { lat: 42.72, lng: 12.11 },
          artifacts: [
            {
              id: "etruscan-rock-cisterns",
              name: "Etruscan Rock-Cut Water Systems",
              description: "Sophisticated underground water storage carved into volcanic rock, supplying hilltop cities with no surface water",
              rarity: "epic",
              historicalPeriod: "Etruscan (800-200 BCE)",
              significance: "Orvieto: 1,200+ cisterns, 500+ wells, 800+ tunnels; bottle-shaped chambers minimize evaporation; enabled siege resistance; still collects water today",
              yearBCE: 800,
              category: "dam"
            }
          ]
        },
        {
          id: "etruscan-temples",
          name: "Sacred Water Sites of Etruria",
          description: "Temple complexes with sacred springs for divine communication",
          historicalContext: "For Etruscans, springs were mouths of the gods",
          coordinates: { lat: 42.05, lng: 11.95 },
          artifacts: [
            {
              id: "etruscan-sacred-water",
              name: "Etruscan Sacred Water Architecture",
              description: "Temple complexes integrating sacred springs, ritual pools, and hydraulic features for religious ceremonies",
              rarity: "rare",
              historicalPeriod: "Etruscan (700-100 BCE)",
              significance: "Springs = divine portals; votive anatomical offerings for healing; 50+ sanctuary sites documented; influenced Roman temple design",
              yearBCE: 700,
              category: "fountain"
            }
          ]
        },
        {
          id: "etruscan-terraces",
          name: "Tuscan Wine Terraces",
          description: "2,700 years of continuous wine production on Etruscan-terraced hillsides",
          historicalContext: "When you drink Chianti, you're tasting 2,700 years of history",
          coordinates: { lat: 43.3, lng: 11.4 },
          artifacts: [
            {
              id: "etruscan-agricultural-terracing",
              name: "Etruscan Agricultural Terracing",
              description: "Terracing, irrigation channels, and water control systems that made Etruscan agriculture legendarily productive",
              rarity: "common",
              historicalPeriod: "Etruscan (700-100 BCE)",
              significance: "Chianti wine region = Etruscan heartland; terraces still visible beneath modern vineyards; exported wine throughout Mediterranean",
              yearBCE: 700,
              category: "irrigation"
            }
          ]
        },
        {
          id: "etruscan-marzabotto",
          name: "Marzabotto Urban Grid",
          description: "Best-preserved Etruscan city with integrated water infrastructure",
          historicalContext: "Template for Roman colonial cities across the empire",
          coordinates: { lat: 44.27, lng: 11.19 },
          artifacts: [
            {
              id: "etruscan-urban-networks",
              name: "Etruscan Urban Water Networks",
              description: "Integrated urban systems combining supply, distribution, drainage, and wastewater in planned cities",
              rarity: "epic",
              historicalPeriod: "Etruscan (600-100 BCE)",
              significance: "Every street has drainage; every block has water access; underground collector tunnels; Romans copied this template exactly",
              yearBCE: 600,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "viking",
      name: "Viking Civilization",
      description: "Masters of water in all its forms. Didn't just cross oceans - understood water more deeply than any medieval civilization.",
      position: [-2, 0, -12],
      color: "#4682B4",
      era: "medieval",
      dateRange: "700 CE - 1200 CE",
      locations: [
        {
          id: "viking-oseberg",
          name: "Viking Ship Building Sites",
          description: "Revolutionary clinker-built longship technology",
          historicalContext: "The technology that made Vikings the dominant maritime power",
          coordinates: { lat: 59.26, lng: 10.41 },
          artifacts: [
            {
              id: "viking-clinker-longship",
              name: "Clinker-Built Longship Technology",
              description: "Revolutionary ship construction enabling ocean crossing, river navigation, beach landing, and overland portage",
              rarity: "legendary",
              historicalPeriod: "Viking Age (300-1200 CE)",
              significance: "Enabled North America 500 years before Columbus; 0.5m draft = river penetration; Gokstad replica crossed Atlantic in 1893 averaging 10 knots",
              yearBCE: -700,
              category: "canal"
            }
          ]
        },
        {
          id: "viking-voyages",
          name: "North Atlantic Crossing Routes",
          description: "Freshwater management for weeks-long ocean voyages",
          historicalContext: "The main worry wasn't storms - it was whether water casks would last",
          coordinates: { lat: 63.0, lng: -20.0 },
          artifacts: [
            {
              id: "viking-freshwater-management",
              name: "Viking Shipboard Freshwater Systems",
              description: "Sophisticated techniques for carrying, preserving, and rationing freshwater during ocean voyages lasting weeks",
              rarity: "epic",
              historicalPeriod: "Viking Age (700-1100 CE)",
              significance: "Charred barrel interiors; fermented whey additives; rain catchment via sail; strict rationing; knowledge of every coastal spring Norway to Newfoundland",
              yearBCE: -800,
              category: "dam"
            }
          ]
        },
        {
          id: "viking-navigation",
          name: "Viking Navigation Routes",
          description: "Reading water itself for navigation without instruments",
          historicalContext: "Found North America without compass, charts, or sextant",
          coordinates: { lat: 64.0, lng: -18.0 },
          artifacts: [
            {
              id: "viking-water-reading",
              name: "Viking Navigational Water Reading",
              description: "Extraordinary ability to read water conditions - currents, colors, temperatures, sea life, wave patterns - for navigation without instruments",
              rarity: "legendary",
              historicalPeriod: "Viking Age (700-1200 CE)",
              significance: "Water color analysis (blue=deep, green=shallow); wave refraction patterns reveal distant land; birds indicate direction; found Iceland, Greenland, Vinland",
              yearBCE: -800,
              category: "canal"
            }
          ]
        },
        {
          id: "viking-harbors",
          name: "Norwegian Fjord Settlements",
          description: "Naust boathouses and harbor infrastructure in extreme terrain",
          historicalContext: "Some naust are still used today",
          coordinates: { lat: 60.4, lng: 5.3 },
          artifacts: [
            {
              id: "viking-fjord-harbors",
              name: "Viking Fjord Harbor Engineering",
              description: "Engineering harbors, boat shelters (naust), and waterfront structures in challenging fjord environments with extreme tides",
              rarity: "rare",
              historicalPeriod: "Viking Age (500-1200 CE)",
              significance: "Naust up to 40m long; positioned at exact tidal boundary; stone breakwaters; Hedeby and Birka major trading ports",
              yearBCE: -600,
              category: "dam"
            }
          ]
        },
        {
          id: "viking-portage",
          name: "Varangian Trade Routes",
          description: "Baltic to Black Sea via rivers and overland portages",
          historicalContext: "Vikings created medieval intermodal shipping",
          coordinates: { lat: 58.5, lng: 31.3 },
          artifacts: [
            {
              id: "viking-portage-systems",
              name: "Viking Portage & River Towing Systems",
              description: "Techniques for moving ships overland between waterways and towing upstream - enabling routes from Baltic to Black Sea",
              rarity: "epic",
              historicalPeriod: "Viking Age (700-1100 CE)",
              significance: "Stockholm to Constantinople = 3,000km navigable; log roller portages up to 30km; founded Kievan Rus (Russia); word 'Russia' from 'Rus' (rowers)",
              yearBCE: -800,
              category: "canal"
            }
          ]
        },
        {
          id: "viking-greenland",
          name: "Greenland Viking Settlements",
          description: "400 years of Arctic water and ice survival",
          historicalContext: "Colonized Greenland with no modern technology",
          coordinates: { lat: 61.0, lng: -45.0 },
          artifacts: [
            {
              id: "viking-arctic-ice",
              name: "Viking Arctic Water & Ice Technology",
              description: "Specialized techniques for dealing with sea ice, ice navigation, and survival in Arctic conditions during Greenland colonization",
              rarity: "rare",
              historicalPeriod: "Viking Age (800-1400 CE)",
              significance: "Ice color reading (white=new/salty, blue=old/fresh); old sea ice becomes drinkable; 400-year Greenland colony; 5,000 peak population",
              yearBCE: -985,
              category: "dam"
            }
          ]
        },
        {
          id: "viking-mills",
          name: "Faroese Water Mills",
          description: "Horizontal watermills still operating after 1,000 years",
          historicalContext: "Vikings solved what Roman engineering couldn't: milling with tiny streams",
          coordinates: { lat: 62.0, lng: -7.0 },
          artifacts: [
            {
              id: "viking-horizontal-watermill",
              name: "Viking Horizontal Watermill (Kvern)",
              description: "Small-scale horizontal watermills that brought grain processing to scattered Scandinavian settlements with limited water flow",
              rarity: "common",
              historicalPeriod: "Viking Age - Present (700 CE - Present)",
              significance: "No gears needed; works with tiny streams; individual farm scale; traditional mills STILL operate in Faeroes; 1,000 years continuous use",
              yearBCE: -800,
              category: "water-clock"
            }
          ]
        }
      ]
    },
    {
      id: "sumer",
      name: "Sumer",
      description: "Pioneers of water management technology in southern Mesopotamia",
      position: [9, 0, -7],
      color: "#CD853F",
      era: "ancient",
      dateRange: "4500-1900 BCE",
      locations: [
        {
          id: "uruk",
          name: "Uruk",
          description: "World's first major city with advanced irrigation",
          historicalContext: "Center of Sumerian civilization and water engineering",
          coordinates: { lat: 31.3233, lng: 45.6369 },
          artifacts: [
            {
              id: "sumerian-irrigation-canals",
              name: "Sumerian Irrigation Canals",
              description: "First large-scale artificial water distribution systems with primary, secondary, and tertiary channels",
              rarity: "legendary",
              historicalPeriod: "6000 BCE onwards",
              significance: "Foundation of all irrigation engineering; dug with pickaxes, controlled by gates; each farmer allocated specific water amounts",
              yearBCE: 6000,
              category: "canal"
            },
            {
              id: "sumerian-levees",
              name: "Sumerian Levees & Flood Control",
              description: "Earthen embankments to contain Tigris and Euphrates flooding",
              rarity: "epic",
              historicalPeriod: "4000 BCE onwards",
              significance: "First flood control systems; protected crops and cities from seasonal floods",
              yearBCE: 4000,
              category: "dam"
            },
            {
              id: "sumerian-water-laws",
              name: "Sumerian Water Laws",
              description: "World's first codified water rights and irrigation regulations",
              rarity: "legendary",
              historicalPeriod: "2100-1790 BCE",
              significance: "Code of Hammurabi devoted hundreds of laws to water; addressed theft, negligence, allocation rights",
              yearBCE: 1790,
              category: "canal"
            },
            {
              id: "sumerian-shadoof",
              name: "Sumerian Shadoof (Precursor)",
              description: "Lever-based water lifting device predating Egyptian adaptation",
              rarity: "rare",
              historicalPeriod: "3000 BCE",
              significance: "Earliest known mechanical water-lifting device; influenced all subsequent designs",
              yearBCE: 3000,
              category: "water-lifting"
            },
            {
              id: "sumerian-seed-drill",
              name: "Sumerian Seed Drill with Irrigation",
              description: "Combined planting technology with water delivery channels",
              rarity: "epic",
              historicalPeriod: "3500 BCE",
              significance: "First combined planting and irrigation system; dramatically increased crop yields",
              yearBCE: 3500,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "hittites",
      name: "Hittite Empire",
      description: "Masters of dam construction in the challenging terrain of Anatolia",
      position: [6, 0, -3],
      color: "#A0522D",
      era: "ancient",
      dateRange: "1700-1200 BCE",
      locations: [
        {
          id: "hattusa",
          name: "Hattusa",
          description: "Hittite capital with sophisticated water infrastructure",
          historicalContext: "UNESCO World Heritage site with remarkable water systems",
          coordinates: { lat: 40.0217, lng: 34.6153 },
          artifacts: [
            {
              id: "hittite-clay-dams",
              name: "Hittite Clay Dams",
              description: "Large hand-built dams using arc-shaped clay construction, some still functioning today",
              rarity: "legendary",
              historicalPeriod: "1400-1200 BCE",
              significance: "Köylütolu Dam: 900m long, 25-30m high; some Hittite dams still provide water after 3,000+ years!",
              yearBCE: 1400,
              category: "dam"
            },
            {
              id: "hittite-reservoirs",
              name: "Hittite Reservoirs",
              description: "Large-scale water storage systems for agricultural and urban use",
              rarity: "epic",
              historicalPeriod: "1500-1200 BCE",
              significance: "Stored seasonal water for year-round use; multiple reservoirs around Hattusa",
              yearBCE: 1500,
              category: "dam"
            },
            {
              id: "hittite-sacred-tunnels",
              name: "Hittite Sacred Water Tunnels",
              description: "Underground passages accessing 'holy water' for religious ceremonies",
              rarity: "rare",
              historicalPeriod: "1400-1200 BCE",
              significance: "Connected underground water to spiritual beliefs about the underworld; water sources treated as divine portals",
              yearBCE: 1400,
              category: "aqueduct"
            },
            {
              id: "hittite-urban-drainage",
              name: "Hittite Urban Drainage",
              description: "Sophisticated sewage systems with oval cleaning holes for maintenance",
              rarity: "rare",
              historicalPeriod: "1400-1200 BCE",
              significance: "Advanced sanitation; cleaning holes prevented blockages; strict cleanliness laws—negligence punishable by death",
              yearBCE: 1400,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "canaan",
      name: "Canaan & Ancient Israel",
      description: "Pioneers of siege-proof urban water systems in a water-scarce land",
      position: [7, 0, -5],
      color: "#DEB887",
      era: "ancient",
      dateRange: "3300-586 BCE",
      locations: [
        {
          id: "jerusalem",
          name: "Jerusalem",
          description: "City of tunnels and hidden water sources",
          historicalContext: "Strategic water systems enabled survival during sieges",
          coordinates: { lat: 31.7683, lng: 35.2137 },
          artifacts: [
            {
              id: "hezekiahs-tunnel",
              name: "Hezekiah's Tunnel (Siloam Tunnel)",
              description: "533-meter underground tunnel bringing Gihon Spring water inside Jerusalem's walls",
              rarity: "legendary",
              historicalPeriod: "701 BCE",
              significance: "Cut through solid rock from both ends; workers met in the middle; still carries water today after 2,700 years",
              yearBCE: 701,
              category: "aqueduct"
            },
            {
              id: "pool-of-siloam",
              name: "Pool of Siloam",
              description: "Stone-lined pool receiving water from Hezekiah's Tunnel for ritual purification",
              rarity: "epic",
              historicalPeriod: "700 BCE",
              significance: "'Living water' (running water) considered ritually pure; stone jars held 20-30 gallons each",
              yearBCE: 700,
              category: "fountain"
            },
            {
              id: "canaanite-cisterns",
              name: "Canaanite Stone Cisterns",
              description: "Plastered underground chambers for rainwater collection and storage",
              rarity: "rare",
              historicalPeriod: "2000-500 BCE",
              significance: "Lime plaster waterproofing enabled settlement in areas without springs; crucial for survival",
              yearBCE: 2000,
              category: "dam"
            }
          ]
        },
        {
          id: "megiddo",
          name: "Megiddo",
          description: "Strategic city with remarkable water shaft system",
          historicalContext: "Armageddon—site of many battles due to strategic water access",
          coordinates: { lat: 32.5847, lng: 35.1847 },
          artifacts: [
            {
              id: "megiddo-water-system",
              name: "Megiddo Water System",
              description: "Vertical shaft and horizontal tunnel reaching underground spring from inside city walls",
              rarity: "epic",
              historicalPeriod: "1200-900 BCE",
              significance: "37m deep shaft + 70m tunnel; accessed water during sieges without leaving protection of walls",
              yearBCE: 1100,
              category: "aqueduct"
            }
          ]
        }
      ]
    },
    {
      id: "syria-orontes",
      name: "Syria (Orontes Valley)",
      description: "Home of the legendary norias—most efficient pre-industrial water lifting",
      position: [8, 0, -4],
      color: "#CD5C5C",
      era: "classical",
      dateRange: "200 BCE - Present",
      locations: [
        {
          id: "hama",
          name: "Hama",
          description: "City of the Giant Water Wheels",
          historicalContext: "Norias have operated here for nearly 2,000 years",
          coordinates: { lat: 35.1318, lng: 36.7518 },
          artifacts: [
            {
              id: "hama-norias",
              name: "Norias of Hama",
              description: "Giant wooden water wheels up to 20 meters in diameter, powered solely by river current",
              rarity: "legendary",
              historicalPeriod: "200 BCE - Present",
              significance: "Up to 153,000 liters per HOUR (10th century record); 120+ compartments per wheel; no animals or humans needed—pure river power",
              yearBCE: 200,
              category: "water-lifting"
            },
            {
              id: "syrian-aqueducts",
              name: "Syrian Aqueduct Networks",
              description: "Stone and wood channels carrying noria-lifted water to distant fields and cities",
              rarity: "epic",
              historicalPeriod: "100 BCE onwards",
              significance: "Extended irrigation far from river banks; enabled agriculture in otherwise dry areas",
              yearBCE: 100,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "syrian-qanat",
          name: "Syrian Qanat Region",
          description: "239 documented qanat systems in Syria",
          historicalContext: "Underground irrigation across Syrian landscape",
          coordinates: { lat: 33.5, lng: 36.3 },
          artifacts: [
            {
              id: "syrian-qanats",
              name: "Syrian Qanat Systems",
              description: "Underground gravity-fed tunnel networks from mountain aquifers to lowland settlements",
              rarity: "legendary",
              historicalPeriod: "1000 BCE onwards",
              significance: "239 qanats documented (1993-94 survey); no pumps needed—pure gravity; shafts for construction and maintenance; protected from evaporation",
              yearBCE: 1000,
              category: "aqueduct"
            }
          ]
        }
      ]
    },
    {
      id: "mongol-steppe",
      name: "Mongol & Steppe Peoples",
      description: "Nomadic transmitters of water technology across Eurasia",
      position: [14, 0, -2],
      color: "#8B0000",
      era: "medieval",
      dateRange: "200 BCE - 1400 CE",
      locations: [
        {
          id: "karakorum",
          name: "Karakorum",
          description: "Mongol capital with remarkable drinking fountain",
          historicalContext: "Center of the largest contiguous land empire",
          coordinates: { lat: 47.2, lng: 102.8 },
          artifacts: [
            {
              id: "mongke-khan-fountain",
              name: "Möngke Khan's Silver Tree Fountain",
              description: "Elaborate automaton fountain with silver tree dispensing four different drinks",
              rarity: "legendary",
              historicalPeriod: "1250s CE",
              significance: "Built by Parisian craftsman Guillaume Boucher; angel automaton with trumpet; dispensed wine, mead, koumiss, and rice wine from separate spouts",
              yearBCE: -1254,
              category: "fountain"
            },
            {
              id: "mongol-water-transfer",
              name: "Mongol Technology Transfer Network",
              description: "Systematic relocation of artisans spreading water technologies across Eurasia",
              rarity: "epic",
              historicalPeriod: "1200-1400 CE",
              significance: "Connected Chinese irrigation to Middle East; spread noria technology; relocated engineers across empire; accelerated water tech development",
              yearBCE: -1200,
              category: "canal"
            }
          ]
        },
        {
          id: "steppe-camps",
          name: "Central Asian Steppe",
          description: "Nomadic water knowledge passed through generations",
          historicalContext: "Vast grasslands between Lake Baikal and Aral Sea",
          coordinates: { lat: 46.0, lng: 100.0 },
          artifacts: [
            {
              id: "steppe-water-knowledge",
              name: "Steppe Water Location Knowledge",
              description: "Oral traditions passing down locations of springs, wells, and lakes across the vast steppe",
              rarity: "rare",
              historicalPeriod: "Ancient - Medieval",
              significance: "Camps positioned within days of major water sources; knowledge passed father to son for generations",
              yearBCE: 500,
              category: "irrigation"
            },
            {
              id: "portable-water-storage",
              name: "Nomadic Portable Water Systems",
              description: "Leather bags, containers, and carts for water transport across dry terrain",
              rarity: "common",
              historicalPeriod: "Ancient - Medieval",
              significance: "Enabled survival across waterless stretches; water one of 'Three Chandmani' (three gems) on State Banner since 15th century",
              yearBCE: 200,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "assyria",
      name: "Assyria",
      description: "Military engineers who transformed water into both a tool of empire-building and a weapon of war",
      position: [9, 0, -5],
      color: "#4A0E4E",
      era: "ancient",
      dateRange: "2500-609 BCE",
      locations: [
        {
          id: "nineveh",
          name: "Nineveh",
          description: "Assyrian capital with 80+ km canal system",
          historicalContext: "One of the ancient world's greatest cities, supported by advanced water engineering",
          coordinates: { lat: 36.3594, lng: 43.1530 },
          artifacts: [
            {
              id: "jerwan-aqueduct",
              name: "Jerwan Aqueduct",
              description: "World's oldest known stone aqueduct—predated Roman aqueducts by 500 years",
              rarity: "legendary",
              historicalPeriod: "690 BCE",
              significance: "280m long, 22m wide, 9m tall; 2 million+ dressed limestone blocks; part of 80+ km canal system to Nineveh",
              yearBCE: 690,
              category: "aqueduct"
            },
            {
              id: "assyrian-canals",
              name: "Assyrian Canal Network",
              description: "50+ km of channels bringing mountain spring water to the capital",
              rarity: "epic",
              historicalPeriod: "705-690 BCE",
              significance: "Supplied city of 100,000+ people; included sluice gates, settling basins, and distribution channels",
              yearBCE: 700,
              category: "canal"
            },
            {
              id: "assyrian-water-warfare",
              name: "Assyrian Water Warfare",
              description: "Systematic military use of water control—diversion, damming, and flooding as siege tactics",
              rarity: "epic",
              historicalPeriod: "720-609 BCE",
              significance: "Diverted Euphrates to flood Babylon (689 BCE); cut water supplies to force surrenders; poisoned wells; pioneered water as weapon",
              yearBCE: 689,
              category: "dam"
            },
            {
              id: "assyrian-qanats",
              name: "Assyrian Qanat Expansion",
              description: "Underground tunnel systems adopted from earlier civilizations and expanded across the empire",
              rarity: "rare",
              historicalPeriod: "700 BCE",
              significance: "Reliable water supply in semi-arid regions; protected from evaporation and enemy interference",
              yearBCE: 700,
              category: "aqueduct"
            }
          ]
        }
      ]
    },
    {
      id: "babylonia",
      name: "Babylonia",
      description: "Refiners of Sumerian techniques who created the world's first comprehensive water laws",
      position: [8, 0, -6],
      color: "#FFD700",
      era: "ancient",
      dateRange: "1894-539 BCE",
      locations: [
        {
          id: "babylon-city",
          name: "Babylon",
          description: "City of the Hanging Gardens and Hammurabi's Code",
          historicalContext: "One of the Seven Wonders of the Ancient World was here",
          coordinates: { lat: 32.5422, lng: 44.4226 },
          artifacts: [
            {
              id: "hanging-gardens",
              name: "Hanging Gardens Water System",
              description: "Multi-level irrigation lifting water 20-25 meters to terraced gardens (if historical)",
              rarity: "legendary",
              historicalPeriod: "600 BCE",
              significance: "Chain of buckets or Archimedes screw mechanism; thousands of gallons daily; one of Seven Wonders",
              yearBCE: 600,
              category: "water-lifting"
            },
            {
              id: "hammurabi-water-code",
              name: "Hammurabi's Water Code",
              description: "World's first comprehensive written water regulations—Laws 53-56 specifically address irrigation",
              rarity: "legendary",
              historicalPeriod: "1754 BCE",
              significance: "Negligent dam maintenance: replace damaged grain; irrigation negligence: pay crop value; enforcement hierarchy from King to farmers",
              yearBCE: 1754,
              category: "canal"
            },
            {
              id: "babylonian-drainage",
              name: "Babylonian Urban Drainage",
              description: "Terracotta pipe networks with drain grates, main collectors, and river outfalls",
              rarity: "epic",
              historicalPeriod: "1800 BCE",
              significance: "Sophisticated stormwater management; fired clay pipes precisely fitted; brick-lined underground conduits",
              yearBCE: 1800,
              category: "sanitation"
            },
            {
              id: "babylonian-flood-basins",
              name: "Babylonian Flood Control Basins",
              description: "Seasonal flood management infrastructure protecting the city from Euphrates flooding",
              rarity: "rare",
              historicalPeriod: "1700 BCE",
              significance: "Controlled flooding for irrigation while protecting urban areas; enabled year-round habitation in floodplain",
              yearBCE: 1700,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "ancient-indonesia",
      name: "Ancient Indonesia (Nusantara)",
      description: "Unique water management adapted to tropical monsoons and volcanic landscapes",
      position: [18, 0, 2],
      color: "#228B22",
      era: "classical",
      dateRange: "2000 BCE - 1500 CE",
      locations: [
        {
          id: "bali-subak",
          name: "Bali",
          description: "UNESCO World Heritage Subak irrigation landscape",
          historicalContext: "Democratic water-sharing cooperatives guided by water temples",
          coordinates: { lat: -8.4095, lng: 115.1889 },
          artifacts: [
            {
              id: "subak-system",
              name: "Subak Irrigation System",
              description: "Democratic water-sharing cooperatives coordinated by water temples—one farmer, one vote regardless of land size",
              rarity: "legendary",
              historicalPeriod: "900 CE onwards",
              significance: "UNESCO World Heritage; no central authority—thousands of farmers coordinate through temple meetings; 'tektek' water allocation formula",
              yearBCE: -900,
              category: "irrigation"
            },
            {
              id: "sawah-terraces",
              name: "Sawah (Wet Rice Terraces)",
              description: "Terraced flooded field agriculture adapted to volcanic mountain slopes",
              rarity: "epic",
              historicalPeriod: "2000 BCE onwards",
              significance: "Austronesian innovation spread across Southeast Asia; transforms steep terrain into productive farmland",
              yearBCE: 2000,
              category: "irrigation"
            },
            {
              id: "telaga-sacred-pools",
              name: "Telaga (Sacred Pools)",
              description: "Ritual purification pools combining spiritual significance with water supply",
              rarity: "rare",
              historicalPeriod: "100 CE onwards",
              significance: "Hindu-Buddhist influence; temples built at volcanic springs; combines religion with water management",
              yearBCE: -100,
              category: "fountain"
            }
          ]
        },
        {
          id: "java-majapahit",
          name: "Trowulan (Majapahit)",
          description: "Capital of Majapahit Empire with massive reservoir system",
          historicalContext: "Largest empire in Indonesian history with sophisticated water infrastructure",
          coordinates: { lat: -7.5499, lng: 112.3804 },
          artifacts: [
            {
              id: "segaran-reservoir",
              name: "Segaran Reservoir",
              description: "6.5 hectare reservoir system with brick-lined channels and overflow spillways",
              rarity: "legendary",
              historicalPeriod: "14th century CE",
              significance: "1 million+ cubic meters capacity; supplied palace, temples, markets; multiple reservoirs for redundancy",
              yearBCE: -1350,
              category: "dam"
            },
            {
              id: "javanese-sluice-gates",
              name: "Javanese Sluice Gate Systems",
              description: "Precise water flow control for flood management and irrigation",
              rarity: "epic",
              historicalPeriod: "800 CE onwards",
              significance: "Brick-lined channels with precise gradients; integration with urban planning; monsoon runoff control",
              yearBCE: -800,
              category: "dam"
            },
            {
              id: "petirtaan-pools",
              name: "Petirtaan (Temple Bathing Pools)",
              description: "Sacred bathing pools at temple complexes with ornamental makara spouts",
              rarity: "rare",
              historicalPeriod: "800-1500 CE",
              significance: "Ritual purification + public bathing + water storage; gravity-fed from volcanic springs; Borobudur/Prambanan era",
              yearBCE: -800,
              category: "fountain"
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