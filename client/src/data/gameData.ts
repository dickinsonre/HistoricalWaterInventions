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