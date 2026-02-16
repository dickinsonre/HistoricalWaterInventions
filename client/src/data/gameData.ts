export interface ArtifactData {
  id: string;
  name: string;
  description: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  historicalPeriod: string;
  significance: string;
  yearBCE?: number;
  category: "irrigation" | "aqueduct" | "water-lifting" | "sanitation" | "dam" | "water-clock" | "fountain" | "canal";
  unesco?: { siteName: string; yearListed: number };
  stillWorking?: { age: string; status: string };
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
      description: "Masters of Nile irrigation (3100-30 BCE). Invented the shaduf water-lifting device still used today, nilometers to predict floods and calculate taxes for 5,000 years, and the clepsydra water clock—humanity's first accurate timekeeper. Annual floods deposited fertile silt across the valley.",
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
            },
            {
              id: "josephs-canal",
              name: "Joseph's Canal (Bahr Yussef)",
              description: "Major artificial canal built during the 12th Dynasty (~1850 BCE) diverting Nile water to the Fayum Basin. Stretching approximately 24 km, this canal was one of the earliest large-scale water diversion projects in history. Named in later Arabic tradition after the biblical Joseph, this engineering feat transformed the Fayum depression into one of ancient Egypt's most fertile agricultural regions, supporting tens of thousands of people through regulated Nile floodwater distribution.",
              rarity: "epic",
              historicalPeriod: "Middle Kingdom (12th Dynasty)",
              significance: "One of the earliest large-scale canal diversions in history",
              yearBCE: 1850,
              category: "canal"
            },
            {
              id: "lake-moeris",
              name: "Lake Moeris Reservoir",
              description: "Massive artificial reservoir constructed during the reign of Amenemhat III (~1850 BCE) in the Fayum Basin. At its peak, Lake Moeris covered approximately 1,700 km² and could store an estimated 13 billion cubic meters of water. Connected to the Nile via Joseph's Canal, this reservoir served as a critical flood control mechanism, absorbing excess floodwaters during high Nile seasons and releasing stored water during low periods. Classical authors Herodotus and Strabo both marveled at its scale, with Herodotus describing it as one of the wonders of Egypt. This represents one of the earliest and largest water storage projects ever attempted.",
              rarity: "legendary",
              historicalPeriod: "Middle Kingdom",
              significance: "One of the largest ancient water storage projects",
              yearBCE: 1850,
              category: "dam"
            },
            {
              id: "sadd-el-kafara",
              name: "Sadd el-Kafara Dam",
              description: "The oldest known large-scale dam, constructed approximately 2600 BCE in Wadi al-Garawi, about 30 km south of Cairo. Standing 14 meters high and 113 meters wide at the crest, this rockfill dam with a central core of silty gravel was designed to control flash floods in the wadi. The dam failed catastrophically during or shortly after construction when floodwaters overtopped the structure before completion. Despite its failure, Sadd el-Kafara represents humanity's first known attempt at major dam engineering and provides crucial evidence of early Egyptian ambitions in large-scale hydraulic construction.",
              rarity: "epic",
              historicalPeriod: "Old Kingdom",
              significance: "Oldest known large-scale dam in history",
              yearBCE: 2600,
              category: "dam"
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
            },
            {
              id: "sacred-lake-karnak",
              name: "Sacred Lake of Karnak",
              description: "Massive artificial lake (120m x 77m) for ritual purification and nocturnal priestly ceremonies. Water level connected to underground springs, symbolizing primordial waters of creation (Nun). Priests bathed here before entering the temple.",
              rarity: "legendary",
              historicalPeriod: "New Kingdom (1550-1077 BCE)",
              significance: "Largest sacred lake in Egypt, still holds water after 3,500 years",
              yearBCE: 1470,
              category: "sanitation"
            }
          ]
        },
        {
          id: "delta-agriculture",
          name: "Nile Delta Agricultural Zone",
          description: "Basin irrigation heartland of ancient Egypt",
          historicalContext: "Systematic flood management across 22,000 sq km of fertile delta",
          coordinates: { lat: 30.8703, lng: 30.7618 },
          artifacts: [
            {
              id: "basin-irrigation",
              name: "Basin Irrigation System",
              description: "Systematic flooding and drainage of fields using natural Nile floods. Earth dykes divided land into basins that held floodwater for 40-60 days, depositing nutrient-rich silt. Covered 3 million acres at peak usage.",
              rarity: "legendary",
              historicalPeriod: "Early Dynastic (3100-2686 BCE)",
              significance: "Fed Egyptian civilization for 5,000 years using only natural flooding",
              yearBCE: 3100,
              category: "irrigation"
            },
            {
              id: "sakia-waterwheel",
              name: "Sakia (Animal-Powered Water Wheel)",
              description: "Ox-driven water wheel with clay pots attached to endless chain. Evolved from the shaduf, lifting 10x more water per hour. Enabled year-round irrigation beyond Nile flood season.",
              rarity: "epic",
              historicalPeriod: "Ptolemaic Period (305-30 BCE)",
              significance: "Revolutionized Egyptian agriculture, still used in Egypt today",
              yearBCE: 300,
              category: "water-lifting"
            },
            {
              id: "ship-bilge-pump",
              name: "Composite Bow Bilge Pump",
              description: "Early form of bilge pump for Egyptian ships documented in tomb paintings. Used lever mechanism similar to shaduf to remove water from boat hulls. Essential for Nile commerce and naval expeditions.",
              rarity: "rare",
              historicalPeriod: "New Kingdom (1550-1077 BCE)",
              significance: "Enabled long-distance maritime trade expeditions to Punt",
              yearBCE: 1500,
              category: "water-lifting"
            }
          ]
        }
      ]
    },
    {
      id: "mesopotamia",
      name: "Mesopotamia",
      description: "Birthplace of irrigation agriculture (6000-539 BCE). Created world's first canal networks between the Tigris and Euphrates rivers. Hammurabi's Code included water laws. Home of the legendary Hanging Gardens of Babylon—one of the Seven Wonders, watered by sophisticated pump systems.",
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
      description: "World's first urban water infrastructure (3300-1300 BCE). Mohenjo-daro had covered drains along every street, the Great Bath for ritual purification, and indoor wells in most homes. First flush toilets connected to city-wide sewers—2,000 years before Rome achieved similar sanitation.",
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
            },
            {
              id: "harappan-soak-pits",
              name: "Harappan Soak Pits",
              description: "The Indus Valley Civilization (2600-1900 BCE) developed specialized soak pits (also called soakage jars) for wastewater management in cities like Mohenjo-daro and Harappa. These cylindrical brick-lined pits, typically 1 meter deep, were placed at the base of household drain outlets to filter solid waste from wastewater before it entered the street drains. The filtered water then flowed through covered brick channels to larger civic drains. With over 700 wells and an estimated 600 soak pits documented at Mohenjo-daro alone, this represents the earliest known systematic urban wastewater treatment system, predating comparable European infrastructure by over 4,000 years.",
              rarity: "rare",
              historicalPeriod: "Mature Harappan Phase",
              significance: "Earliest known systematic urban wastewater treatment",
              yearBCE: 2600,
              category: "sanitation"
            },
            {
              id: "great-bath-expanded",
              name: "Great Bath of Mohenjo-Daro",
              description: "12m × 7m × 2.4m waterproofed pool with bitumen lining, inlet and outlet channels, and surrounding changing rooms. Earliest known public water facility.",
              rarity: "legendary",
              historicalPeriod: "2600 BCE",
              significance: "Most famous Indus water invention — earliest public water facility",
              yearBCE: 2600,
              category: "fountain"
            },
            {
              id: "mohenjo-daro-drains",
              name: "Mohenjo-Daro Covered Drain Network",
              description: "Brick-lined underground drains running beneath every major street. Individual houses connected via clay pipe to main drains. Manholes at regular intervals for cleaning.",
              rarity: "epic",
              historicalPeriod: "2600 BCE",
              significance: "Most advanced urban drainage for 3,000 years after construction",
              yearBCE: 2600,
              category: "sanitation"
            },
            {
              id: "harappan-bathrooms",
              name: "Harappan Household Bathrooms",
              description: "Nearly every excavated Harappan house had a dedicated bathroom with sloped brick floor draining to the street sewer. Some had seated latrines.",
              rarity: "epic",
              historicalPeriod: "2600 BCE",
              significance: "First civilization with universal household sanitation",
              yearBCE: 2600,
              category: "sanitation"
            },
            {
              id: "harappan-wells",
              name: "Harappan Well Engineering",
              description: "Over 700 wells excavated at Mohenjo-Daro alone. Cylindrical brick-lined wells with precise construction, at regular intervals — roughly one per three houses.",
              rarity: "epic",
              historicalPeriod: "2600 BCE",
              significance: "Highest well density of any ancient city",
              yearBCE: 2600,
              category: "fountain"
            },
            {
              id: "harappan-precision-slopes",
              name: "Harappan Precision Drain Slopes",
              description: "Drain slopes of precisely 1:40 (2.5%) maintained across entire city blocks. Required surveying instruments and standardized construction methods.",
              rarity: "rare",
              historicalPeriod: "2600 BCE",
              significance: "Engineering precision not matched again for millennia",
              yearBCE: 2600,
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
            },
            {
              id: "dholavira-reservoir-complex",
              name: "Dholavira 16-Reservoir Complex",
              description: "16 interconnected reservoirs fed by two seasonal streams. Total storage ~300,000 m³. Rock-cut channels with precise slopes directed rainwater to cascading reservoirs. UNESCO World Heritage site.",
              rarity: "legendary",
              historicalPeriod: "3000 BCE",
              significance: "Largest and most sophisticated Indus water system — UNESCO site",
              yearBCE: 3000,
              category: "dam"
            },
            {
              id: "harappan-rainwater-harvesting",
              name: "Harappan Rainwater Harvesting",
              description: "Rooftop and courtyard collection channels directing rainwater to underground cisterns. Calculated catchment areas and storage volumes.",
              rarity: "rare",
              historicalPeriod: "2600 BCE",
              significance: "Earliest known systematic rooftop rainwater harvesting",
              yearBCE: 2600,
              category: "dam"
            }
          ]
        },
        {
          id: "lothal",
          name: "Lothal",
          description: "Ancient Harappan port city with tidal dock",
          historicalContext: "Maritime trade hub of the Indus Valley Civilization",
          coordinates: { lat: 21.97, lng: 72.25 },
          artifacts: [
            {
              id: "lothal-dock",
              name: "Lothal Tidal Dock",
              description: "37m × 22m engineered tidal dock — world's oldest known dock. Inlet channel, sluice gate, and spillway managed tidal water levels for maritime trade.",
              rarity: "legendary",
              historicalPeriod: "2400 BCE",
              significance: "Oldest engineered tidal water management structure in the world",
              yearBCE: 2400,
              category: "canal"
            },
            {
              id: "kalibangan-drains",
              name: "Kalibangan Fire Altar Drains",
              description: "Ritual fire altar platforms with dedicated drainage channels for water used in purification ceremonies at Kalibangan, Rajasthan.",
              rarity: "rare",
              historicalPeriod: "2600 BCE",
              significance: "Earliest known ritual water drainage engineering",
              yearBCE: 2600,
              category: "sanitation"
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
        },
        {
          id: "phaistos-palace",
          name: "Phaistos Palace",
          description: "Second-largest Minoan palace",
          historicalContext: "Independent water system showing multiple engineering approaches",
          coordinates: { lat: 35.05, lng: 24.81 },
          artifacts: [
            {
              id: "phaistos-water-system",
              name: "Phaistos Palace Water System",
              description: "Second-largest Minoan palace with independent water system: cisterns, channels, and drainage beneath central court",
              rarity: "epic",
              historicalPeriod: "1700-1400 BCE",
              significance: "Shows multiple engineering approaches within one civilization",
              yearBCE: 1700,
              category: "aqueduct"
            },
            {
              id: "minoan-tapered-pipe",
              name: "Minoan Tapered Pipe Joint",
              description: "Terracotta pipes with one end narrowed to fit inside the next creating tight semi-pressurized joints enabling long-distance piped water supply",
              rarity: "legendary",
              historicalPeriod: "1900-1400 BCE",
              significance: "Pipe connection technology still used 3,900 years later in principle",
              yearBCE: 1900,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "minoan-harbors",
          name: "Minoan Harbor Sites",
          description: "Harbor engineering at Amnisos and Kommos",
          historicalContext: "Bronze Age maritime water management",
          coordinates: { lat: 35.33, lng: 25.20 },
          artifacts: [
            {
              id: "minoan-sewer-system",
              name: "Minoan Sewer System (Knossos)",
              description: "Underground stone-built sewers beneath Knossos large enough for a person to walk through with branch drains, manholes and ventilation shafts",
              rarity: "legendary",
              historicalPeriod: "1900-1400 BCE",
              significance: "Largest Bronze Age sewer system — predates Roman Cloaca Maxima by 1,500 years",
              yearBCE: 1900,
              category: "sanitation"
            },
            {
              id: "minoan-harbor-engineering",
              name: "Minoan Harbor Engineering (Amnisos)",
              description: "Harbor of Knossos with breakwaters, ship channels, freshwater supply for ships, and managed harbor siltation",
              rarity: "epic",
              historicalPeriod: "1900-1400 BCE",
              significance: "Bronze Age harbor water engineering",
              yearBCE: 1900,
              category: "dam"
            },
            {
              id: "minoan-sacred-spring",
              name: "Minoan Sacred Spring Architecture",
              description: "Springs managed as sacred sites with architectural enclosures, channels and ritual pools",
              rarity: "rare",
              historicalPeriod: "2000-1400 BCE",
              significance: "Sacred water architecture foundation in Bronze Age Crete",
              yearBCE: 2000,
              category: "fountain"
            },
            {
              id: "zakros-palace-cistern",
              name: "Zakros Palace Cistern",
              description: "Circular stone-lined cistern at Palace of Zakros, 7m diameter, 5m deep, with staircase access",
              rarity: "rare",
              historicalPeriod: "1500-1400 BCE",
              significance: "Eastern Crete palace water storage",
              yearBCE: 1500,
              category: "dam"
            },
            {
              id: "tylissos-aqueduct",
              name: "Minoan Aqueduct (Tylissos)",
              description: "Terracotta pipeline from mountain springs to villa complex with settling basins showing aqueduct tech beyond palaces",
              rarity: "rare",
              historicalPeriod: "1600-1400 BCE",
              significance: "Aqueduct technology for non-palace settlements",
              yearBCE: 1600,
              category: "aqueduct"
            }
          ]
        }
      ]
    },
    {
      id: "ancient-greece",
      name: "Ancient Greece",
      description: "Pioneers of hydraulic science (800-31 BCE). Archimedes invented the screw pump for irrigation and discovered buoyancy principles. The Tunnel of Eupalinos was an engineering marvel—1 km aqueduct dug from both ends meeting perfectly. Greeks also developed early hydrostatics theory.",
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
            },
            {
              id: "perachora-wheel",
              name: "Perachora Water Wheel",
              description: "The earliest known water wheel, dating to the 3rd century BCE, discovered at the Heraion sanctuary near Perachora in the Corinthian peninsula. This horizontal water wheel predates Roman adoption of the technology and represents a crucial link in the development of water-powered machinery. Archaeological evidence suggests it was used for grinding grain, converting the kinetic energy of flowing water into rotational mechanical power—a breakthrough that would eventually power the Industrial Revolution two millennia later.",
              rarity: "epic",
              historicalPeriod: "Hellenistic Period",
              significance: "Earliest known water wheel, predating Roman adoption",
              yearBCE: 250,
              category: "water-lifting"
            }
          ]
        },
        {
          id: "samos-tunnel",
          name: "Island of Samos",
          description: "Site of the legendary Tunnel of Eupalinos",
          historicalContext: "Engineering marvel commissioned by tyrant Polycrates",
          coordinates: { lat: 37.7565, lng: 26.9453 },
          artifacts: [
            {
              id: "tunnel-eupalinos",
              name: "Tunnel of Eupalinos (Samos Aqueduct)",
              description: "1,036-meter tunnel dug through Mount Kastro from both ends meeting in the middle. Earliest known use of geometry and surveying for tunnel construction. Separate water channel ran along floor with terracotta pipes.",
              rarity: "legendary",
              historicalPeriod: "Archaic Period (530 BCE)",
              significance: "First geometrically surveyed tunnel—teams started from both ends and met with only 60cm error",
              yearBCE: 530,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "alexandria-engineering",
          name: "Alexandria",
          description: "Center of Hellenistic hydraulic innovation",
          historicalContext: "Home of Hero and the great library's engineering knowledge",
          coordinates: { lat: 31.2001, lng: 29.9187 },
          artifacts: [
            {
              id: "heros-fountain",
              name: "Hero's Fountain (Self-Pressurizing)",
              description: "Pneumatic fountain demonstrating air pressure principles. Water from upper container compresses air in sealed lower container, pushing water up through central pipe. Operates without external power source.",
              rarity: "epic",
              historicalPeriod: "Hellenistic Period (1st c. CE)",
              significance: "Demonstrated air pressure and vacuum principles 1,600 years before Torricelli",
              yearBCE: -60,
              category: "fountain"
            },
            {
              id: "aeolipile",
              name: "Aeolipile (Hero's Steam Engine)",
              description: "First known steam-powered device. Hollow sphere with angled nozzles spins when water inside is heated. Steam escaping through bent tubes creates reactive thrust. Pure demonstration device, never scaled for work.",
              rarity: "legendary",
              historicalPeriod: "Hellenistic Period (1st c. CE)",
              significance: "First steam engine—1,700 years before Industrial Revolution, though never applied",
              yearBCE: -60,
              category: "water-lifting"
            },
            {
              id: "perachora-waterwheel",
              name: "Perachora Water Wheel",
              description: "Earliest known water mill for grinding grain. Horizontal wheel with vertical shaft turned millstones. Archaeological remains at Perachora in Corinth region date to 3rd century BCE.",
              rarity: "epic",
              historicalPeriod: "Hellenistic Period (3rd c. BCE)",
              significance: "First water-powered industrial machinery—freed human labor from grinding",
              yearBCE: 250,
              category: "water-lifting"
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
            },
            {
              id: "agora-fountain-house",
              name: "Athenian Agora Fountain House",
              description: "Public water distribution facility built in the Athenian Agora during the reign of the tyrant Peisistratos around 530 BCE. This fountain house featured multiple spouts fed by a terracotta pipeline from springs on the slopes of Mount Hymettos, some 7 km away. By providing clean, publicly accessible water in the heart of Athens' civic center, the fountain house democratized access to clean water—previously available only through private wells. Archaeological excavations have revealed the stone basins, overflow channels, and distribution pipes that made this one of the most important public health innovations of the ancient Greek world.",
              rarity: "rare",
              historicalPeriod: "Archaic Period",
              significance: "Democratized access to clean water in ancient Athens",
              yearBCE: 530,
              category: "fountain"
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
              category: "sanitation",
              stillWorking: { age: "2,600 years", status: "Still draining Rome" }
            },
            {
              id: "roman-thermae",
              name: "Roman Thermae Water Systems",
              description: "The great public bath complexes (thermae) of Rome featured the most complex plumbing systems of the ancient world. The Baths of Caracalla (216 CE), covering 25 acres, could accommodate 1,600 bathers simultaneously with heated pools (caldarium), warm rooms (tepidarium), cold plunge pools (frigidarium), and swimming pools (natatio). Water was heated using hypocaust systems—raised floors with furnace-heated air circulating beneath—and distributed through a network of lead and bronze pipes. These complexes required 8+ million liters of water daily, supplied by dedicated aqueduct branches.",
              rarity: "epic",
              historicalPeriod: "Roman Empire",
              significance: "Most complex ancient plumbing systems",
              yearBCE: -25,
              category: "sanitation"
            },
            {
              id: "pont-du-gard",
              name: "Pont du Gard",
              description: "The iconic three-tier Roman aqueduct bridge spanning the Gardon River near Nîmes, France, built around 19 BCE during the reign of Augustus. Standing 49 meters tall with three tiers of arches (6 on bottom, 11 in middle, 35 on top), the Pont du Gard carried water over 50 km from the springs at Uzès to the Roman colony of Nemausus (Nîmes). The water channel at the top maintains a precise gradient of just 0.04% (a drop of only 17 meters over 50 km). Built from 50,400 tonnes of limestone blocks fitted without mortar, this UNESCO World Heritage Site remains one of the most impressive surviving examples of Roman engineering.",
              rarity: "legendary",
              historicalPeriod: "Augustan Period",
              significance: "One of the most iconic Roman engineering achievements",
              yearBCE: -19,
              category: "aqueduct"
            },
            {
              id: "roman-foricae",
              name: "Roman Public Latrines (Foricae)",
              description: "Roman public latrines (foricae) were remarkable sanitation facilities found throughout the empire, with over 140 documented in Rome alone by the 4th century CE. These multi-seat facilities (some accommodating 60+ users simultaneously) featured continuously flowing water beneath marble seats for waste removal, with channels fed directly from bath complex overflow water. A shallow channel in front of the seats carried flowing water for users to clean their sponge-on-a-stick (tersorium). The latrines drained into the Cloaca Maxima sewer system, which emptied into the Tiber River. While lacking privacy by modern standards, these facilities represented the ancient world's most advanced public sanitation infrastructure.",
              rarity: "rare",
              historicalPeriod: "Roman Republic-Empire",
              significance: "Most advanced ancient public sanitation infrastructure",
              yearBCE: -50,
              category: "sanitation"
            },
            {
              id: "roman-snow-storage",
              name: "Roman Snow Storage (Frigidarium Supply)",
              description: "Romans developed systematic snow and ice harvesting, storage, and distribution systems beginning in the 1st century BCE. Snow was collected from mountain peaks (particularly the Apennines and Alps) during winter and stored in insulated underground chambers (nivaria) lined with straw and covered with tree branches. Emperor Nero was famously known for having mountain snow transported to Rome for cooling drinks and foods. By the imperial period, commercial snow sellers (nivariae) operated throughout Italian cities. The stored snow also supplied the frigidarium (cold room) pools in thermae bath complexes, where cold plunge baths were an essential part of the bathing ritual. This represents one of the earliest known cold-chain supply systems.",
              rarity: "rare",
              historicalPeriod: "Late Republic - Empire",
              significance: "One of the earliest cold-chain supply systems",
              yearBCE: -50,
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
            },
            {
              id: "castellum-divisorium",
              name: "Castellum Divisorium (Distribution Castle)",
              description: "Terminal distribution tank dividing aqueduct flow to different city sectors. Featured multiple outlet channels with calibrated openings. The Pompeii and Nîmes examples show three main pipes: public fountains, public baths, and private customers.",
              rarity: "legendary",
              historicalPeriod: "Early Empire (27 BCE - 284 CE)",
              significance: "First water utility infrastructure—prioritized public access during shortages",
              yearBCE: -50,
              category: "aqueduct"
            },
            {
              id: "roman-fistulae",
              name: "Lead Pipe Manufacturing (Fistulae)",
              description: "Standardized lead pipes with inscribed gauges and owner marks. Made from rolled sheets soldered along bottom. Names stamped on pipes enabled tracking of illegal taps. 25 standard sizes from quinaria to centenaria.",
              rarity: "epic",
              historicalPeriod: "Early Empire (27 BCE - 284 CE)",
              significance: "Earliest standardized pipe manufacturing—created water utility regulation",
              yearBCE: -100,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "rome-construction",
          name: "Roman Harbor Construction",
          description: "Revolutionary underwater concrete for Mediterranean harbors",
          historicalContext: "Enabled massive port construction at Caesarea, Puteoli, and Ostia",
          coordinates: { lat: 41.7590, lng: 12.2910 },
          artifacts: [
            {
              id: "opus-caementicium",
              name: "Roman Concrete (Opus Caementicium)",
              description: "Volcanic ash (pozzolana) mixed with lime creates hydraulic concrete that sets underwater. Portus harbor moles survive 2,000 years of wave action. Modern analysis shows it actually strengthens over time through mineral crystallization.",
              rarity: "legendary",
              historicalPeriod: "Late Republic (133-27 BCE)",
              significance: "Revolutionary material—modern concrete deteriorates in seawater while Roman concrete strengthens",
              yearBCE: 100,
              category: "dam"
            },
            {
              id: "thermae-system",
              name: "Thermae Heating System",
              description: "Hypocaust-heated bath water circulation system. Furnaces heated floors and walls via hollow channels, warming 50,000+ liters daily. Baths of Caracalla served 6,000-8,000 bathers simultaneously.",
              rarity: "epic",
              historicalPeriod: "Early Empire (27 BCE - 284 CE)",
              significance: "Combined water heating, circulation, and drainage in massive public works",
              yearBCE: -50,
              category: "sanitation"
            },
            {
              id: "ctesibius-pump",
              name: "Ctesibius Force Pump (Roman Fire Engine)",
              description: "Double-acting piston pump (sipho) for firefighting. Adopted from Greek invention. Two pistons alternately pushed water through check valves to maintain constant stream. Mounted on carts for mobility.",
              rarity: "epic",
              historicalPeriod: "Early Empire (27 BCE - 284 CE)",
              significance: "First organized firefighting—Vigiles used these to protect Rome",
              yearBCE: -50,
              category: "water-lifting"
            }
          ]
        },
        {
          id: "rio-tinto-mining",
          name: "Las Médulas & Rio Tinto Hydraulic Mining",
          description: "Roman hydraulic gold mining operations in Hispania",
          historicalContext: "Pliny the Elder documented the devastation of entire mountains by water power",
          coordinates: { lat: 42.4678, lng: -6.7673 },
          artifacts: [
            {
              id: "ruina-montium",
              name: "Ruina Montium (Hydraulic Mining)",
              description: "The Roman technique of ruina montium ('wrecking of mountains') was the most powerful application of hydraulic engineering in the ancient world. Miners diverted rivers and stored millions of gallons in elevated reservoirs, then released massive volumes of water through tunnels cut into gold-bearing hillsides. The sudden release—described by Pliny the Elder as producing a noise 'beyond human comprehension'—collapsed entire mountainsides, exposing gold-bearing rock. At Las Médulas in northwestern Spain, the Romans moved an estimated 240 million cubic meters of earth over 200 years, creating a surreal landscape of red spires and lakes that survives today as a UNESCO World Heritage site. The technique required complex hydraulic infrastructure: aqueducts up to 30 km long, multiple reservoir tanks (piscinae), hushing channels, and sluice systems with settling basins (agogae) to separate gold from debris. Roman engineers at Rio Tinto in southern Spain applied similar techniques at industrial scale, creating open-pit mines visible from space. Pliny estimated that Hispania's hydraulic mines produced 20,000 Roman pounds (6,500 kg) of gold annually for the Empire.",
              rarity: "legendary",
              historicalPeriod: "Early Empire (27 BCE - 284 CE)",
              significance: "Most powerful pre-industrial earth-moving technique; Las Médulas is now UNESCO World Heritage; moved 240M cubic meters of earth",
              yearBCE: -100,
              category: "water-lifting"
            }
          ]
        }
      ]
    },
    {
      id: "ancient-china",
      name: "Ancient China",
      description: "Yu the Great established flood control philosophy—'channel, don't block' (2200 BCE). Dujiangyan irrigation system (256 BCE) still waters 5.3 million hectares after 2,250 years! Self-regulating with no dam that could break, it uses natural river dynamics to divide water flow.",
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
              name: "Dujiangyan Irrigation System (Cross-reference)",
              description: "Scale model of the ingenious flood control system. For full engineering details (Fish Mouth, Flying Sand Weir, Bottle Neck), see Dujiangyan Irrigation System under Zhou & Qin Dynasties entry.",
              rarity: "legendary",
              historicalPeriod: "Warring States (475-221 BCE)",
              significance: "Still irrigates 5,300 sq km after 2,270 years. See Zhou & Qin Dynasties entry for full details.",
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
          id: "grand-canal-ref",
          name: "Grand Canal & Pound Lock (Cross-references)",
          description: "These inventions postdate Ancient China (1600 BCE–220 CE). See the correct dynasty entries for full details.",
          historicalContext: "Grand Canal: see Sui & Tang Dynasties entry. Pound Lock: see Song Dynasty entry.",
          coordinates: { lat: 35.0000, lng: 117.0000 },
          artifacts: [
            {
              id: "canal-lock",
              name: "Pound Lock (Cross-reference → Song Dynasty)",
              description: "Invented by Qiao Weiyue in 984 CE—this belongs to the Song Dynasty (960–1279 CE), not Ancient China. See Song Dynasty entry for full details.",
              rarity: "epic",
              historicalPeriod: "Song Dynasty (984 CE)",
              significance: "See Song Dynasty entry for full details on Qiao Weiyue's pound lock invention",
              yearBCE: -984,
              category: "canal"
            },
            {
              id: "grand-canal-system",
              name: "Grand Canal (Cross-reference → Sui & Tang Dynasties)",
              description: "Built 605–610 CE under the Sui Dynasty—this belongs to Sui & Tang Dynasties (581–907 CE), not Ancient China. See Sui & Tang Dynasties entry for full details.",
              rarity: "legendary",
              historicalPeriod: "Sui Dynasty (581-618 CE)",
              significance: "See Sui & Tang Dynasties entry for full details on the 1,776 km Grand Canal",
              yearBCE: -610,
              category: "canal"
            }
          ]
        },
        {
          id: "han-dynasty-engineering",
          name: "Han Dynasty Engineering Center",
          description: "Innovations in water lifting and flood control",
          historicalContext: "Golden age of Chinese hydraulic technology",
          coordinates: { lat: 34.2658, lng: 108.9541 },
          artifacts: [
            {
              id: "chain-pump",
              name: "Chain Pump (翻车 Fanche)",
              description: "Square-pallet chain pump for continuous irrigation. Wooden pallets on endless chain drag water up inclined trough. Operated by pedal, hand crank, or animal power. One person could irrigate 2 hectares daily.",
              rarity: "epic",
              historicalPeriod: "Han Dynasty (206 BCE-220 CE)",
              significance: "Standard Chinese irrigation device for 2,000 years—still used in some areas",
              yearBCE: 100,
              category: "water-lifting"
            },
            {
              id: "dragon-backbone",
              name: "Dragon Backbone Machine (龙骨水车)",
              description: "Treadle-operated water lifting device named for its spine-like appearance. Wooden frame with chain of paddles lifted water 2-5 meters. Required 2-3 workers operating foot pedals continuously.",
              rarity: "epic",
              historicalPeriod: "Han Dynasty (206 BCE-220 CE)",
              significance: "Powered wet rice cultivation across China for millennia",
              yearBCE: 100,
              category: "water-lifting"
            },
            {
              id: "zhengguo-canal",
              name: "Zhengguo Canal",
              description: "Major irrigation canal (246 BCE) transforming Guanzhong Plain from desert to breadbasket of Qin state. 150 km long, irrigated 40,000 hectares. Designed by engineer Zheng Guo—ironically sent by rival state to exhaust Qin resources.",
              rarity: "legendary",
              historicalPeriod: "Warring States (475-221 BCE)",
              significance: "Made Qin powerful enough to unify China—canal intended as sabotage became advantage",
              yearBCE: 246,
              category: "irrigation"
            },
            {
              id: "spillway-weir",
              name: "Stepped Spillway Weir System",
              description: "Graduated stone weirs for Yellow River flood control. Energy dissipation through multiple steps prevented erosion. Combined with levee systems for integrated flood management across thousands of kilometers.",
              rarity: "epic",
              historicalPeriod: "Han Dynasty (206 BCE-220 CE)",
              significance: "Philosophy of 'channel, don't block' from legendary Yu the Great (2200 BCE)",
              yearBCE: 100,
              category: "dam"
            },
            {
              id: "water-hammer-mill",
              name: "Tu Shui Fa (Water Hammer Mill)",
              description: "First documented in the 1st century CE during the Han Dynasty, the water hammer mill (tu shui fa) was the world's first application of hydraulic power to industrial metallurgy. Using a water wheel to drive trip hammers and bellows for iron smelting, this innovation dramatically increased iron production efficiency. The technology spread along the Silk Road and eventually influenced European water mill development. Du Shi, a prefect of Nanyang, is credited with the invention around 31 CE, using it to power blast furnace bellows that previously required dozens of laborers.",
              rarity: "epic",
              historicalPeriod: "Han Dynasty",
              significance: "First industrial use of hydraulic power",
              yearBCE: -50,
              category: "water-lifting"
            },
            {
              id: "sluice-gate-dou-men",
              name: "Sluice Gate (Dou Men)",
              description: "Standardized water control gates (dou men) developed during the late Warring States and Qin-Han periods (~100 BCE). These wooden and stone sluice gates allowed precise regulation of water flow in irrigation canals, flood control channels, and navigation locks. The technology was fundamental to managing China's extensive canal networks, including sections of what would become the Grand Canal. Records from the Qin Dynasty indicate standardized gate sizes and operating procedures, making this one of the earliest examples of codified hydraulic infrastructure management.",
              rarity: "rare",
              historicalPeriod: "Qin-Han Period",
              significance: "Fundamental water control infrastructure element",
              yearBCE: 100,
              category: "canal"
            },
            {
              id: "chinese-dry-dock",
              name: "Chinese Dry Dock",
              description: "The world's first known dry dock was described by the Chinese polymath Shen Kuo in his 1088 CE work \"Dream Pool Essays.\" Located at the Jinming Pool naval yard near Kaifeng during the Song Dynasty, this engineering innovation allowed ships to be constructed and repaired on dry land using a gated basin that could be flooded and drained. Ships were floated in, the gates closed, and water pumped out using mechanical devices to expose the hull for maintenance. This technology gave the Song Dynasty a significant naval advantage, enabling the maintenance of fleets of hundreds of warships. European dry docks did not appear until the 15th century, nearly 400 years later.",
              rarity: "epic",
              historicalPeriod: "Song Dynasty",
              significance: "World's first known dry dock, predating European versions by 400 years",
              yearBCE: -1088,
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
            },
            {
              id: "karaji-qanat-math",
              name: "Al-Karaji's Qanat Mathematics",
              description: "Around 1000 CE, Persian mathematician Abu Bakr al-Karaji authored \"The Extraction of Hidden Waters\" (Inbat al-miyah al-khafiyya), the first known mathematical treatise on groundwater hydrology and qanat engineering. This groundbreaking work provided formulas for calculating water flow rates in underground channels, methods for surveying and constructing qanats, techniques for locating groundwater, and mathematical models for predicting well yields. Al-Karaji's work elevated qanat engineering from empirical craft to applied science, establishing foundational principles that would influence hydraulic engineering for centuries.",
              rarity: "epic",
              historicalPeriod: "Islamic Golden Age",
              significance: "First mathematical treatise on groundwater hydrology",
              yearBCE: -1000,
              category: "irrigation"
            },
            {
              id: "shushtar-hydraulic",
              name: "Shushtar Historical Hydraulic System",
              description: "A UNESCO World Heritage Site in Khuzestan province, Iran, the Shushtar Historical Hydraulic System is an integrated ensemble of dams, canals, tunnels, and water mills dating from the 3rd century CE (expanded significantly during the Islamic era). The system includes the Mizan diversion dam, the Gargar canal, 40+ water mills, and the Shushtar Band-e Kaisar (Bridge of Valerian), considered the first dam-bridge in the world. The system diverts the Karun River through an intricate network of channels serving irrigation, urban water supply, and industrial milling for a population of over 100,000. UNESCO describes it as a 'masterpiece of creative genius' representing the pinnacle of Sassanid and Islamic hydraulic engineering.",
              rarity: "legendary",
              historicalPeriod: "Sassanid-Islamic Period",
              significance: "UNESCO World Heritage masterpiece of hydraulic engineering",
              yearBCE: -200,
              category: "canal"
            },
            {
              id: "bimaristan-water",
              name: "Islamic Hospital Water Systems",
              description: "Islamic hospitals (bimaristans), beginning with the first major facility in Baghdad around 750 CE, featured remarkably sophisticated water supply and sanitation systems far ahead of their time. These facilities incorporated running water in patient wards, fountain-cooled ventilation systems, separate water supplies for kitchens, pharmacies, and bathing areas, and carefully designed drainage to prevent cross-contamination. The great bimaristan of Damascus (1154 CE) and the Mansuri Hospital in Cairo (1284 CE) each served thousands of patients and featured dedicated water channels for each ward. These systems established standards for hospital sanitation not matched in Europe for another 600 years.",
              rarity: "rare",
              historicalPeriod: "Islamic Golden Age",
              significance: "Advanced medical facility water and sanitation systems",
              yearBCE: -750,
              category: "sanitation"
            },
            {
              id: "hauz-khas",
              name: "Hauz Khas Reservoir",
              description: "Major urban reservoir complex in Delhi, India, originally built by Alauddin Khalji in 1296 CE and later expanded by Firuz Shah Tughlaq in 1352 CE. The reservoir covered approximately 50 hectares and served as the primary water supply for the second city of Delhi (Siri). Firuz Shah's renovations included stone-stepped ghats for public access, a madrasa complex along its shores, and sophisticated sluice gates for regulating water distribution to surrounding neighborhoods. The Hauz Khas exemplifies Islamic urban water engineering in South Asia and demonstrates how reservoir systems served both practical water supply and social/educational functions.",
              rarity: "epic",
              historicalPeriod: "Delhi Sultanate",
              significance: "Major Islamic urban reservoir system in South Asia",
              yearBCE: -1296,
              category: "dam"
            },
            {
              id: "baghdad-flood-barriers",
              name: "Baghdad Flood Barriers",
              description: "Earthen and brick levee systems constructed along the Tigris River to protect Baghdad from seasonal flooding. Abbasid engineers built reinforced embankments with stone-faced walls and overflow channels that diverted excess floodwater into designated basins outside the city. These defenses were critical for protecting the House of Wisdom and the city's population of over one million.",
              rarity: "epic",
              historicalPeriod: "Abbasid Caliphate (8th-13th c. CE)",
              significance: "Protected the world's largest city and its libraries from Tigris floods",
              yearBCE: -762,
              category: "dam"
            },
            {
              id: "islamic-qanat-innovations",
              name: "Islamic Qanat Innovations",
              description: "Islamic engineers significantly expanded and improved upon Persian qanat technology, extending networks across North Africa, Spain, and Central Asia. Innovations included improved surveying instruments for calculating tunnel grades, reinforced tunnel linings, and mathematical formulas for predicting water yield. By the 10th century, Islamic qanat networks stretched from Afghanistan to Morocco.",
              rarity: "epic",
              historicalPeriod: "Islamic Golden Age (8th-13th c. CE)",
              significance: "Spread qanat technology across three continents, from Afghanistan to Spain",
              yearBCE: -800,
              category: "aqueduct"
            },
            {
              id: "banu-musa-automata",
              name: "Banu Musa Water Automata",
              description: "The three Banu Musa brothers authored the 'Book of Ingenious Devices' (Kitab al-Hiyal) around 850 CE, describing over 100 mechanical devices, many water-powered. These included self-trimming oil lamps, automatic fountains, and water-dispensing vessels using float valves, siphons, and feedback control mechanisms that anticipated modern automation principles.",
              rarity: "legendary",
              historicalPeriod: "Abbasid Caliphate (850 CE)",
              significance: "100+ water devices described—precursors to modern hydraulic automation",
              yearBCE: -850,
              category: "water-clock"
            }
          ]
        },
        {
          id: "cordoba-andalus",
          name: "Cordoba, Al-Andalus",
          description: "Islamic water engineering masterpiece in medieval Spain",
          historicalContext: "Moorish engineers transformed Iberian water infrastructure with advanced irrigation and hydraulic technology",
          coordinates: { lat: 37.8882, lng: -4.7794 },
          artifacts: [
            {
              id: "cordoba-ablution",
              name: "Cordoba Great Mosque Ablution System",
              description: "Elaborate ritual washing facilities at the Great Mosque of Cordoba (begun 784 CE) featuring multiple fountain courtyards with running water fed by aqueducts. The ablution system included heated water channels, marble basins, and underground drains serving thousands of worshippers daily. The Patio de los Naranjos courtyard fountains still flow today.",
              rarity: "epic",
              historicalPeriod: "Umayyad Caliphate of Cordoba (784 CE)",
              significance: "Served thousands of daily worshippers with running water for ritual purification",
              yearBCE: -784,
              category: "fountain"
            },
            {
              id: "acequia-irrigation",
              name: "Acequia Irrigation System",
              description: "Gravity-fed canal networks (acequias) introduced by Islamic engineers to the Iberian Peninsula, transforming arid Spanish landscapes into productive agricultural zones. The acequia system included main canals, distribution channels, and community-managed water-sharing schedules (tandas). Many acequia systems in Valencia and Granada remain in active use after 1,000+ years.",
              rarity: "legendary",
              historicalPeriod: "Islamic Period in Spain (8th-15th c. CE)",
              significance: "Still operating after 1,000+ years—foundation of Spanish irrigation law",
              yearBCE: -750,
              category: "irrigation",
              stillWorking: { age: "1,200+ years", status: "Active acequia systems still irrigate farms in Valencia and Granada" }
            },
            {
              id: "noria-hama",
              name: "Noria of Hama",
              description: "Giant water wheels up to 20 meters in diameter on the Orontes River in Hama, Syria—the largest surviving norias in the world. These current-powered wheels lifted river water into stone aqueducts that distributed it across the city and surrounding orchards. At their peak, 17 norias operated simultaneously along the river.",
              rarity: "legendary",
              historicalPeriod: "Islamic Period (12th-13th c. CE)",
              significance: "Largest surviving norias in the world at 20m diameter—still standing",
              yearBCE: -1100,
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
      description: "Aztec and Maya water masters spanning Pre-Classic through Post-Classic periods (1200 BCE–1521 CE). Aztec chinampas (floating gardens) fed Tenochtitlan's 200,000 people from artificial islands. Maya built aguadas (reservoirs) and the world's first known pressurized water system at Palenque palace.",
      position: [-8, 0, 8],
      color: "#20B2AA",
      era: "classical",
      dateRange: "1200 BCE - 1521 CE (Pre-Classic to Post-Classic)",
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
            },
            {
              id: "tenochtitlan-dike",
              name: "Tenochtitlan Dike System (Albarradón de Nezahualcóyotl)",
              description: "16-kilometer dike separating fresh and salt water in Lake Texcoco. Built by poet-king Nezahualcoyotl in 1449 CE after catastrophic flood. Featured sluice gates for controlled drainage and multiple causeways with removable bridges.",
              rarity: "legendary",
              historicalPeriod: "Aztec Empire (1449 CE)",
              significance: "Protected 200,000 people—Spanish destruction caused flooding that persists 500 years later",
              yearBCE: -1449,
              category: "dam"
            },
            {
              id: "monte-alban-water",
              name: "Zapotec Monte Albán Water Systems",
              description: "Sophisticated water management systems at the hilltop city of Monte Albán in Oaxaca, Mexico, occupied from approximately 500 BCE to 750 CE. Built atop a mountain at 1,940 meters elevation with no natural water sources, this city of 25,000+ people relied on an extensive network of cisterns, drainage channels, and collection surfaces to capture and store rainwater. Over 170 subterranean storage chambers have been identified, along with elaborate stone-lined drainage channels that directed runoff from plazas and building roofs into these cisterns. This represents one of the most remarkable examples of mountaintop urban water engineering in the ancient world.",
              rarity: "epic",
              historicalPeriod: "Zapotec Classic Period",
              significance: "Remarkable mountaintop urban water engineering for 25,000+ people",
              yearBCE: 500,
              category: "sanitation"
            },
            {
              id: "purepecha-lake",
              name: "Purépecha Lake Pátzcuaro Management",
              description: "The Purépecha (Tarascan) civilization of western Mexico developed sophisticated management systems for Lake Pátzcuaro between 1300-1530 CE. Their engineering controlled lake levels, managed fisheries supporting 80,000+ people, and created artificial islands (similar to chinampas) for intensive agriculture. The Purépecha also constructed canal systems connecting lakeside settlements and managed the watershed through controlled forestry practices. As the only major Mesoamerican civilization to resist Aztec conquest, the Purépecha maintained their independent hydraulic engineering traditions until the Spanish arrival.",
              rarity: "rare",
              historicalPeriod: "Postclassic Mesoamerican",
              significance: "Sophisticated lake-level management and fishery engineering",
              yearBCE: -1400,
              category: "irrigation"
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
          id: "yucatan-cenotes",
          name: "Yucatan Cenote Region",
          description: "Sacred sinkholes providing water access in limestone terrain",
          historicalContext: "Natural wells served as primary water sources and spiritual centers",
          coordinates: { lat: 20.6843, lng: -88.5678 },
          artifacts: [
            {
              id: "cenote-management",
              name: "Cenote Management Systems",
              description: "Sacred sinkholes with carved stone stairways, platforms for water collection, and ritual spaces. Some cenotes had rope-and-bucket systems; others featured carved channels directing water to settlement areas. Chichen Itza's Sacred Cenote was 60m wide, 27m deep.",
              rarity: "legendary",
              historicalPeriod: "Classic Maya (600-1200 CE)",
              significance: "Only water source in northern Yucatan—settlements located based on cenote access",
              yearBCE: -600,
              category: "dam"
            },
            {
              id: "raised-field-agriculture",
              name: "Raised Field Wetland Agriculture",
              description: "Bajo (seasonal swamp) cultivation using raised planting beds surrounded by canals. Muck from canals fertilized beds while fish in channels provided protein. Similar to chinampas but adapted to jungle wetlands.",
              rarity: "epic",
              historicalPeriod: "Classic Maya (250-900 CE)",
              significance: "Enabled intensive farming in jungle wetlands—recent LiDAR reveals massive scale",
              yearBCE: -400,
              category: "irrigation"
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
        },
        {
          id: "teotihuacan",
          name: "Teotihuacan",
          description: "Largest pre-Columbian city in the Americas with sophisticated reservoir system",
          historicalContext: "Peak population of 100,000-200,000 people required massive water infrastructure",
          coordinates: { lat: 19.6925, lng: -98.8438 },
          artifacts: [
            {
              id: "teotihuacan-reservoir",
              name: "Teotihuacan Reservoir System",
              description: "The metropolis of Teotihuacan (100 BCE–550 CE), at its peak the sixth-largest city in the world with 100,000–200,000 inhabitants, developed one of the most sophisticated urban water systems in the pre-Columbian Americas. Engineers constructed a network of reservoirs, canals, and drains that collected seasonal rainfall and spring water to sustain this massive population in the semi-arid Valley of Mexico at 2,300 meters elevation. The city's famous Avenue of the Dead was not merely ceremonial—recent archaeological discoveries reveal it functioned as an integrated stormwater management system, with cross-channels, settling basins, and drainage canals that directed rainwater to underground cisterns and agricultural plots. The Ciudadela compound featured a sophisticated system of canals and reservoirs that could store an estimated 100,000 cubic meters of water. Teotihuacan's engineers also developed an early form of wastewater management, with covered stone drains running beneath residential compounds that separated gray water for irrigation from stormwater runoff.",
              rarity: "legendary",
              historicalPeriod: "100 BCE - 550 CE",
              significance: "Urban water supply for 100,000-200,000 people; Avenue of the Dead doubled as stormwater management",
              yearBCE: 100,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "ancient-persia",
      name: "Ancient Persia",
      description: "Inventors of the qanat underground water system (1000 BCE). These gravity-fed tunnels up to 70 km long transported mountain water beneath deserts without evaporation—still watering Persian gardens today. Also developed yakhchals (ice houses) for storing ice in summer desert heat.",
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
            },
            {
              id: "ab-anbar",
              name: "Ab-Anbar Underground Reservoir",
              description: "The ab-anbar (literally \"water reservoir\") is a traditional Persian underground water storage cistern, in use since approximately 500 BCE and perfected over millennia. These large underground domed chambers, built from waterproof sarooj plite mortar (a mixture of sand, clay, lime, goat hair, and egg whites), could store 100+ cubic meters of water at temperatures 10-15°C below the surface. Many ab-anbars featured paired wind towers (badgirs) that created natural air circulation to keep the stored water cool even in desert temperatures exceeding 50°C. Over 100 historic ab-anbars survive in Yazd province alone, with some still functional after 1,000+ years. This technology was essential for sustaining urban populations in one of the world's most arid climates.",
              rarity: "epic",
              historicalPeriod: "Achaemenid-Islamic Period",
              significance: "Essential desert water storage technology spanning 2,500+ years",
              yearBCE: 500,
              category: "dam"
            },
            {
              id: "qanat-vertical-shafts",
              name: "Qanat Vertical Shafts",
              description: "Access and ventilation shafts spaced every 20-50 meters along qanat tunnels, serving as construction access points, ventilation for workers during excavation, and ongoing maintenance entry points. These shafts, some exceeding 100 meters deep, required precise vertical drilling through rock and soil layers. The surface rings of excavated material around shaft openings are a distinctive landscape feature across Iran.",
              rarity: "epic",
              historicalPeriod: "Achaemenid Period (550-330 BCE)",
              significance: "Engineering feat enabling construction and maintenance of tunnels up to 70 km long",
              yearBCE: 800,
              category: "aqueduct"
            },
            {
              id: "payab-system",
              name: "Payab Water-Drawing System",
              description: "Underground stairways providing public access to qanat water channels below street level. These stepped corridors, sometimes descending 20+ meters, allowed residents to draw water directly from flowing qanats without pumping. Payabs served as communal gathering points and cool refuges from desert heat, with some featuring vaulted chambers at the water level.",
              rarity: "rare",
              historicalPeriod: "Achaemenid-Islamic Period",
              significance: "Public water access infrastructure—cool underground community gathering spaces",
              yearBCE: 500,
              category: "aqueduct"
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
            },
            {
              id: "persepolis-stone-channel",
              name: "Persepolis Stone Water Channel",
              description: "Precisely carved limestone channels distributing water across the royal terrace platform at Persepolis. These channels, cut directly into the stone platform, directed rainwater and spring water to cisterns and drainage outlets with calculated slopes. The craftsmanship matches the quality of the famous relief carvings on the terrace walls.",
              rarity: "epic",
              historicalPeriod: "Achaemenid Period (518-330 BCE)",
              significance: "Precision stone-carved water distribution matching the finest Achaemenid craftsmanship",
              yearBCE: 500,
              category: "aqueduct"
            },
            {
              id: "naqsh-e-rostam-drainage",
              name: "Naqsh-e Rostam Drainage",
              description: "Drainage channels engineered to protect the royal tombs of four Achaemenid kings carved into the cliff face at Naqsh-e Rostam. Rock-cut channels above and around the tomb facades diverted rainwater and snowmelt away from the carved reliefs. This protective drainage has preserved the tomb facades for 2,500 years in remarkably good condition.",
              rarity: "rare",
              historicalPeriod: "Achaemenid Period (500-330 BCE)",
              significance: "Preserved four royal tombs from erosion for 2,500 years",
              yearBCE: 490,
              category: "sanitation"
            }
          ]
        },
        {
          id: "pasargadae",
          name: "Pasargadae",
          description: "First capital of the Achaemenid Empire with pioneering garden irrigation",
          historicalContext: "Cyrus the Great's capital featured the world's oldest known formal gardens",
          coordinates: { lat: 30.1938, lng: 53.1670 },
          artifacts: [
            {
              id: "pasargadae-garden-channels",
              name: "Pasargadae Garden Channels",
              description: "Stone-lined water channels forming the oldest known formal garden irrigation system, built by Cyrus the Great around 546 BCE. The geometric channel network divided the royal gardens into quadrants (chahar bagh pattern), with water flowing from a central pavilion outward through carved limestone channels. This design became the prototype for all Persian gardens and influenced Islamic garden design worldwide.",
              rarity: "legendary",
              historicalPeriod: "Achaemenid Period (546 BCE)",
              significance: "Oldest known formal garden irrigation—prototype for all Persian and Islamic gardens",
              yearBCE: 546,
              category: "irrigation",
              unesco: { siteName: "Pasargadae", yearListed: 2004 }
            },
            {
              id: "band-e-amir-dams",
              name: "Band-e Amir Dams",
              description: "Series of ancient stone and earth dams in Fars province built across river valleys to create reservoirs for irrigation. These band (dam) structures, some dating to the Achaemenid period, demonstrate early Persian mastery of dam engineering. Several have been repaired and maintained continuously for over 2,000 years.",
              rarity: "epic",
              historicalPeriod: "Achaemenid Period (550-330 BCE)",
              significance: "Among the oldest continuously maintained dams in the world",
              yearBCE: 500,
              category: "dam"
            },
            {
              id: "jube-channels",
              name: "Jube Open Channel System",
              description: "Open stone-lined channels (jubes) running along streets in Persian cities, distributing water from qanats to homes, gardens, and public fountains. These surface channels featured strategically placed diversion gates allowing households to fill private cisterns. The jube system remained the primary urban water distribution method in Iranian cities until the 20th century.",
              rarity: "rare",
              historicalPeriod: "Achaemenid-Islamic Period",
              significance: "Urban water distribution system used continuously for 2,500+ years",
              yearBCE: 500,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "khmer-empire",
      name: "Khmer Empire",
      description: "World's largest pre-industrial hydraulic city (802-1431 CE). Angkor's barays (reservoirs) held 53 million cubic meters—city-sized water storage. West Baray alone is 8 km x 2 km. Sophisticated canal networks supported 1 million people when London had only 50,000. See also Cambodia (Khmer) for additional hydraulic engineering details including the Angkor Wat moat and the full 1,000+ km canal network.",
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
              id: "west-baray-overview",
              name: "West Baray Reservoir (Overview)",
              description: "Massive rectangular reservoir measuring 8km x 2.2km. For full engineering details (56 million m³ capacity, 10 million m³ earth moved, sluice gate systems), see West Baray Reservoir under Cambodia (Khmer) - Extended.",
              rarity: "legendary",
              historicalPeriod: "Angkor Period (11th century CE)",
              significance: "Stored monsoon water for year-round rice irrigation; supported millions. See Cambodia (Khmer) - Extended for full details.",
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
            },
            {
              id: "east-baray",
              name: "East Baray",
              description: "Massive reservoir (7.5 km × 1.8 km) built by Yasovarman I in 889 CE. Held ~37 million m³ of water. Combined with West Baray, these reservoirs anchored the Angkor hydraulic system.",
              rarity: "legendary",
              historicalPeriod: "889 CE",
              significance: "Among the largest pre-industrial reservoirs ever built",
              yearBCE: -889,
              category: "dam"
            },
            {
              id: "angkor-hydraulic-network",
              name: "Angkor's Integrated Hydraulic Network",
              description: "Complete system of barays, channels, moats, and rice paddies covering 1,000+ km². Supported a population of 750,000+ — the largest pre-industrial city on Earth.",
              rarity: "legendary",
              historicalPeriod: "9th-13th c. CE",
              significance: "Most sophisticated pre-modern urban water system ever built",
              yearBCE: -900,
              category: "canal"
            },
            {
              id: "khmer-spillway",
              name: "Khmer Spillway Engineering",
              description: "Precisely engineered overflow spillways controlling water levels in barays. Stone-lined channels with calculated gradients distributed water to agricultural zones downstream.",
              rarity: "epic",
              historicalPeriod: "10th-13th c. CE",
              significance: "Demonstrates advanced hydraulic engineering knowledge",
              yearBCE: -1000,
              category: "dam"
            },
            {
              id: "khmer-bridge-dams",
              name: "Khmer Bridge-Dams (Spean)",
              description: "Laterite and sandstone bridge-dams crossing rivers and canals. Spean Thma at Angkor served both transportation and water control functions.",
              rarity: "epic",
              historicalPeriod: "12th c. CE",
              significance: "Dual-purpose infrastructure — unique Khmer innovation",
              yearBCE: -1150,
              category: "dam"
            },
            {
              id: "preah-khan-baray",
              name: "Preah Khan Baray",
              description: "Reservoir at Preah Khan temple with island shrine (Neak Poan) designed as a symbolic healing bath and practical water distribution hub.",
              rarity: "epic",
              historicalPeriod: "12th c. CE",
              significance: "Sacred-hydraulic integration at its finest",
              yearBCE: -1150,
              category: "dam"
            },
            {
              id: "koh-ker-reservoir",
              name: "Koh Ker Reservoir",
              description: "Massive 1,200 × 560 m reservoir at the temporary Khmer capital Koh Ker. Built in just 16 years — demonstrating rapid hydraulic deployment capability.",
              rarity: "rare",
              historicalPeriod: "928-944 CE",
              significance: "Shows Khmer could build major water infrastructure quickly for new capitals",
              yearBCE: -928,
              category: "dam"
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
      description: "Most sophisticated ancient reservoir system (300 BCE-1200 CE). Invented the bisokotuwa—an ingenious valve pit using water pressure to control outflow. Built 10,000+ tanks in cascade systems. Anuradhapura's reservoirs still supply water after 2,000 years.",
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
            },
            {
              id: "parakrama-samudra",
              name: "Parakrama Samudra (Sea of Parakrama)",
              description: "Massive reservoir (22.6 km²) built by King Parakramabahu I in 1153 CE. Still the largest ancient irrigation reservoir in Sri Lanka.",
              rarity: "legendary",
              historicalPeriod: "1153 CE",
              significance: "One of the largest pre-modern reservoirs in the world",
              yearBCE: -1153,
              category: "dam"
            },
            {
              id: "yoda-ela",
              name: "Yoda Ela (Giant Canal)",
              description: "87 km canal with gradient of just 10 cm per km (0.01%). Fed the Minneriya and Kaudulla tanks.",
              rarity: "legendary",
              historicalPeriod: "6th c. CE",
              significance: "Extraordinary precision over extreme length — among longest ancient canals",
              yearBCE: -550,
              category: "canal"
            },
            {
              id: "sigiriya-water-gardens",
              name: "Sigiriya Water Gardens",
              description: "Elaborate hydraulic gardens at Sigiriya rock fortress. Gravity-fed fountains, symmetrical water pools, underground conduits. Fountains still operate during rainy season.",
              rarity: "legendary",
              historicalPeriod: "5th c. CE",
              significance: "Ancient fountains still functioning after 1,500 years",
              yearBCE: -477,
              category: "fountain"
            },
            {
              id: "abhaya-wewa",
              name: "Abhaya Wewa (Ancient Tank)",
              description: "One of the oldest reservoirs in Sri Lanka, built by King Pandukabhaya at Anuradhapura. Part of the elaborate city water supply.",
              rarity: "epic",
              historicalPeriod: "4th c. BCE",
              significance: "Earliest documented Sri Lankan reservoir",
              yearBCE: 350,
              category: "dam"
            },
            {
              id: "sandstone-sluices",
              name: "Sandstone Sluice Technology",
              description: "Precisely carved sandstone sluice gates with grooved channels for wooden or stone shutters. Some survived 2,000 years and are still operable.",
              rarity: "epic",
              historicalPeriod: "300 BCE onwards",
              significance: "Durable precision engineering lasting millennia",
              yearBCE: 300,
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
        },
        {
          id: "chaco-canyon",
          name: "Chaco Canyon",
          description: "Most sophisticated Puebloan water system",
          historicalContext: "50+ documented water control features",
          coordinates: { lat: 36.06, lng: -107.97 },
          artifacts: [
            {
              id: "chaco-water-control",
              name: "Chaco Canyon Water Control",
              description: "Elaborate system of diversion dams canals and gridded fields with stone-lined channels from cliff faces into masonry collection boxes. 50+ documented features",
              rarity: "legendary",
              historicalPeriod: "850-1150 CE",
              significance: "Most sophisticated Puebloan water system",
              yearBCE: -850,
              category: "irrigation"
            },
            {
              id: "mesa-verde-reservoir",
              name: "Mesa Verde Reservoir (Mummy Lake)",
              description: "90-foot diameter stone-lined reservoir fed by 1 km intake channel serving 500+ people",
              rarity: "epic",
              historicalPeriod: "750-1300 CE",
              significance: "Largest Ancestral Puebloan reservoir",
              yearBCE: -750,
              category: "dam"
            },
            {
              id: "zuni-waffle-gardens",
              name: "Zuni Waffle Gardens",
              description: "Sunken grid gardens with raised borders creating cells maximizing moisture retention. Still practiced today",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Unique water-conserving garden design still in use",
              yearBCE: -800,
              category: "irrigation"
            },
            {
              id: "hopi-dry-farming",
              name: "Hopi Dry Farming",
              description: "Seeds planted 25-30cm deep using dibble stick to reach subsurface moisture with varieties bred for drought over centuries. Zero irrigation",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Engineering crops to fit water rather than engineering water to fit crops",
              yearBCE: -800,
              category: "irrigation"
            },
            {
              id: "pueblo-bonito-water",
              name: "Pueblo Bonito Water Engineering",
              description: "600+ room great house with rooftop drainage through internal drains to exterior canals",
              rarity: "epic",
              historicalPeriod: "850-1150 CE",
              significance: "Integration of architecture and water engineering",
              yearBCE: -850,
              category: "sanitation"
            },
            {
              id: "hovenweep-water-towers",
              name: "Hovenweep Water Towers",
              description: "Towers at spring heads and pour-off points possibly functioning as water monitoring stations across all six clusters",
              rarity: "rare",
              historicalPeriod: "1200-1300 CE",
              significance: "Possible water monitoring architecture",
              yearBCE: -1200,
              category: "dam"
            },
            {
              id: "acoma-sky-city-water",
              name: "Acoma Sky City Water",
              description: "Pueblo on 112m mesa — oldest continuously inhabited settlement in NA. Water carried up by hand or collected from rock cisterns",
              rarity: "epic",
              historicalPeriod: "1150 CE onwards",
              significance: "Water management for the oldest continuously inhabited place in North America",
              yearBCE: -1150,
              category: "dam"
            },
            {
              id: "rio-grande-pueblo-irrigation",
              name: "Rio Grande Pueblo Irrigation",
              description: "Pueblos practicing canal irrigation from Rio Grande — foundation of acequia tradition adapted by Spanish colonizers and still used today",
              rarity: "epic",
              historicalPeriod: "1200 CE onwards",
              significance: "Foundation of the Rio Grande irrigation tradition still used today",
              yearBCE: -1200,
              category: "irrigation"
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
            },
            {
              id: "binbirdirek-cistern",
              name: "Binbirdirek Cistern (1001 Columns)",
              description: "The second largest surviving Byzantine cistern in Istanbul, built in the 4th-5th century CE with 224 marble columns arranged in 12 rows of 16, plus additional support columns. The cistern measures 64m x 56m and could store an estimated 40,000 cubic meters of water. Known as the 'Cistern of 1001 Columns' due to its forest-like interior, it served as a critical backup water supply for the imperial district.",
              rarity: "legendary",
              historicalPeriod: "Byzantine Period (4th-5th c. CE)",
              significance: "Second largest Byzantine cistern—224 columns supporting a vast underground reservoir",
              yearBCE: -400,
              category: "dam"
            },
            {
              id: "theodosian-moat",
              name: "Theodosian Walls Moat System",
              description: "Water-filled defensive moat running the full 6.5 km length of Constantinople's Theodosian land walls, built in the early 5th century CE. The moat was 20 meters wide and fed by aqueducts and rainwater collection, with sluice gates controlling water levels. This water barrier formed the outermost of three defensive lines that kept Constantinople unconquered for over 1,000 years.",
              rarity: "epic",
              historicalPeriod: "Byzantine Period (413 CE)",
              significance: "Water-filled moat that helped protect Constantinople for over 1,000 years",
              yearBCE: -413,
              category: "canal"
            },
            {
              id: "great-palace-sewers",
              name: "Great Palace Sewers",
              description: "Underground waste drainage system beneath the Great Palace of Constantinople, featuring brick-vaulted tunnels that carried sewage and stormwater from the palace complex to the Sea of Marmara. The system included settling chambers, ventilation shafts, and multiple outfall points. These sewers served one of the largest palace complexes in the medieval world for over 800 years.",
              rarity: "rare",
              historicalPeriod: "Byzantine Period (4th-12th c. CE)",
              significance: "Served the largest medieval palace complex for 800+ years",
              yearBCE: -330,
              category: "sanitation"
            },
            {
              id: "byzantine-water-mills",
              name: "Byzantine Water Mills",
              description: "Industrial-scale water-powered mills along the Golden Horn inlet and the streams feeding into Constantinople. These mills ground grain for the city's bread supply, processed textiles, and powered sawmills. At their peak, dozens of mills operated along the Lycus River and smaller waterways within the city walls.",
              rarity: "rare",
              historicalPeriod: "Byzantine Period (6th-15th c. CE)",
              significance: "Industrial water power feeding a city of 500,000+ inhabitants",
              yearBCE: -550,
              category: "water-lifting"
            },
            {
              id: "anastasian-aqueducts",
              name: "Anastasian Wall Aqueducts",
              description: "Water supply infrastructure serving the 65 km Anastasian Wall (Long Wall of Thrace), built in the 5th century CE as Constantinople's outer defensive perimeter. Aqueducts and cisterns provided water to the garrisons stationed along this massive defensive line, which stretched from the Black Sea to the Sea of Marmara. The wall's water systems demonstrate Byzantine logistical engineering at landscape scale.",
              rarity: "epic",
              historicalPeriod: "Byzantine Period (5th c. CE)",
              significance: "Water supply for 65 km defensive wall—landscape-scale military hydraulic engineering",
              yearBCE: -469,
              category: "aqueduct"
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
            },
            {
              id: "sidon-dye-vats",
              name: "Sidon Purple Dye Vats",
              description: "Elaborate water-intensive processing facilities at Sidon for producing Tyrian purple dye from murex sea snails. The process required massive quantities of fresh and salt water for soaking, rinsing, and fermenting thousands of snails to produce tiny amounts of the most valuable dye in the ancient world. Stone vat complexes with dedicated water channels have been excavated along the Sidon coastline.",
              rarity: "epic",
              historicalPeriod: "Phoenician Period (1500-300 BCE)",
              significance: "Water-intensive industry that made Phoenicia wealthy—worth more than gold by weight",
              yearBCE: 1500,
              category: "sanitation"
            },
            {
              id: "byblos-sacred-spring",
              name: "Byblos Sacred Spring",
              description: "Temple spring complex at ancient Byblos where natural freshwater springs were channeled through sacred precincts and distributed to the surrounding city. The spring was associated with the cult of Adonis and featured stone-lined channels directing water to ritual pools and public fountains. This represents one of the earliest known temple-managed water distribution systems in the Levant.",
              rarity: "rare",
              historicalPeriod: "Phoenician Period (1200-300 BCE)",
              significance: "One of the earliest temple-managed urban water distribution systems",
              yearBCE: 1200,
              category: "fountain"
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
            },
            {
              id: "carthage-cothon",
              name: "Carthaginian Cothon",
              description: "Circular inner harbor with an artificial island at its center, connected to a rectangular commercial port. The cothon featured engineered water circulation channels that flushed sediment and maintained water quality, allowing 220 warships to be housed in covered dry docks arranged around the circular basin. This was the most sophisticated naval harbor in the ancient Mediterranean.",
              rarity: "legendary",
              historicalPeriod: "Punic Period (300-146 BCE)",
              significance: "Most advanced naval harbor in the ancient world—housed 220 warships",
              yearBCE: 300,
              category: "canal"
            },
            {
              id: "zaghouan-aqueduct",
              name: "Zaghouan Aqueduct",
              description: "Massive 132-kilometer aqueduct carrying water from the springs at Zaghouan to Carthage, originally built by the Carthaginians and later rebuilt and expanded by the Roman emperor Hadrian around 128 CE. The aqueduct crossed valleys on arched bridges up to 20 meters high and delivered an estimated 32 million liters per day. It remained in partial use until the medieval period.",
              rarity: "legendary",
              historicalPeriod: "Punic-Roman Period (200 BCE - 128 CE)",
              significance: "One of the longest aqueducts in the ancient world at 132 km",
              yearBCE: 200,
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
      description: "Mountain water masters at extreme altitudes (1438-1533 CE). Machu Picchu's fountains flow continuously from spring 750m away. Moray's circular terraces created 15°C temperature difference—an agricultural research station. Tipón features synchronized cascades still working today.",
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
            },
            {
              id: "tambomachay",
              name: "Tambomachay Water Temple",
              description: "Sacred Inca water temple located 8 km from Cusco at 3,700 meters elevation, constructed around 1400 CE. This site features precisely carved stone channels that split a single spring into two identical cascading streams, demonstrating the Inca mastery of hydraulic engineering for ritual purposes. The water flows through a series of three tiered stone-carved falls into ceremonial basins, and remarkably maintains equal flow in both channels year-round. Believed to have served as a site for ritual bathing and water worship, Tambomachay exemplifies how Inca engineering seamlessly combined practical hydraulics with spiritual practice.",
              rarity: "epic",
              historicalPeriod: "Inca Imperial Period",
              significance: "Sacred spring channeling combining engineering and ritual",
              yearBCE: -1400,
              category: "fountain"
            },
            {
              id: "cumbe-mayo",
              name: "Cumbe Mayo Aqueduct",
              description: "Pre-Inca aqueduct near Cajamarca, Peru, dating to approximately 1500 BCE, making it one of the oldest known engineered water channels in South America. Stretching 9 km across rugged mountain terrain at 3,500 meters elevation, this remarkable channel was carved directly from volcanic rock. The aqueduct features deliberately carved zigzag sections that archaeologists believe served to slow water flow and reduce erosion, as well as carved petroglyphs along its length suggesting ceremonial significance. Predating the Inca Empire by approximately 3,000 years, Cumbe Mayo provides evidence of sophisticated hydraulic engineering knowledge in the Andean highlands far earlier than previously believed.",
              rarity: "legendary",
              historicalPeriod: "Pre-Inca (Cajamarca Culture)",
              significance: "One of the oldest engineered water channels in South America",
              yearBCE: 1500,
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
            },
            {
              id: "inca-road-drainage",
              name: "Inca Road Culverts & Drainage (Qhapaq Ñan)",
              description: "The Inca road network (Qhapaq Ñan), stretching over 40,000 kilometers from Colombia to Chile through some of the most challenging terrain on Earth, required an extraordinarily sophisticated drainage infrastructure to remain passable year-round across deserts, mountains, and tropical forests. Inca engineers designed an integrated system of stone-lined culverts, cross-drains, stepped causeways, and retaining walls that channeled water away from road surfaces while preventing erosion on steep mountain grades. In the Andes, where roads climbed to over 5,000 meters elevation, engineers carved drainage channels directly into bedrock and constructed stone-lined ditches along both sides of the road, with transverse culverts at regular intervals to carry water beneath the roadway. In coastal desert sections, roads were elevated on causeways above seasonal flood levels, with permeable stone bases that allowed flash floods to pass underneath without damaging the surface. The road system connected to the broader Inca hydraulic infrastructure—tambos (rest stations) every 20-30 km featured water storage facilities, and many road segments ran parallel to irrigation canals, sharing engineering infrastructure. This integrated approach to road drainage was not matched in Europe until the Roman road system's principles were rediscovered in the 18th century by engineers like John McAdam.",
              rarity: "epic",
              historicalPeriod: "Inca Period (1400-1530 CE)",
              significance: "40,000 km road network with integrated drainage; engineered for terrain from sea level to 5,000+ meters",
              yearBCE: -1400,
              category: "sanitation"
            }
          ]
        },
        {
          id: "nazca-region",
          name: "Nazca Desert Region",
          description: "Pre-Inca underground aqueducts in world's driest desert",
          historicalContext: "Ingenious spiral wells accessing underground aquifers",
          coordinates: { lat: -14.8388, lng: -74.9430 },
          artifacts: [
            {
              id: "puquios",
              name: "Puquios (Underground Spiral Wells)",
              description: "Ingenious corkscrew-shaped wells accessing underground aquifers in one of Earth's driest deserts. 36 puquios still function near Nazca after 1,500+ years. Spiral design allowed maintenance access and wind to push water through horizontal tunnels (filtration galleries).",
              rarity: "legendary",
              historicalPeriod: "Nazca Culture (500-700 CE)",
              significance: "Pre-Inca engineering—still supplies water to 40+ towns; inspired modern groundwater engineering",
              yearBCE: -500,
              category: "aqueduct"
            },
            {
              id: "moray-terraces",
              name: "Moray Circular Terraces",
              description: "Concentric circular terraces creating 15°C temperature difference between top and bottom. Each level simulates different altitude growing conditions. Ingenious agricultural research station testing crops from coast to high Andes in one location.",
              rarity: "legendary",
              historicalPeriod: "Inca Period (1400 CE)",
              significance: "World's first agricultural experiment station—tested crops from multiple ecosystems",
              yearBCE: -1400,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "balinese",
      name: "Balinese (Subak)",
      description: "Sacred water temples and democratic irrigation: rice terraces as spiritual landscape. The Subak system, recognized as UNESCO World Heritage, demonstrates how water management can be organized through religious and social institutions rather than centralized bureaucracy. See also Ancient Indonesia (Nusantara) for the broader context of Indonesian water engineering including Majapahit-era reservoirs.",
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
              category: "irrigation",
              unesco: { siteName: "Cultural Landscape of Bali Province", yearListed: 2012 }
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
      description: "World's oldest continuous water culture (40,000+ years). Brewarrina fish traps are humanity's oldest man-made structure. Gnamma holes carved in rock store water for desert crossings. Songlines encode water locations across thousands of kilometers.",
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
            },
            {
              id: "aboriginal-water-protocols",
              name: "Aboriginal Water Sharing Protocols",
              description: "Aboriginal Australians developed the world's oldest known system of customary water law, governing access to water resources across the continent for over 40,000 years. These protocols—embedded in Dreamtime law, kinship systems, and ceremonial obligations—regulated who could access specific water sources, when water could be drawn, how much could be taken, and the reciprocal obligations of visitors to water-holding country. Water sharing was not merely utilitarian but formed the foundation of inter-clan diplomacy: granting access to water sources in another group's country required formal permission and created binding social obligations, effectively making water the currency of Aboriginal political relations. Songlines—the oral maps encoding routes across thousands of kilometers of landscape—are fundamentally water route maps, connecting gnamma holes, soakages, springs, and rock pools in sequences that enabled survival across the world's driest inhabited continent. The protocols included sophisticated ecological management: fire-stick farming to maintain water catchments, selective clearing around water sources to prevent contamination, and seasonal restrictions on water use during drought periods. These represent humanity's longest-running experiment in sustainable water governance, operating continuously for over 2,000 generations without the written laws, courts, or enforcement mechanisms used by all other civilizations.",
              rarity: "legendary",
              historicalPeriod: "40,000+ years BP to Present",
              significance: "World's oldest water governance system; 40,000+ years of sustainable management without written law",
              yearBCE: 40000,
              category: "irrigation"
            },
            {
              id: "budj-bim",
              name: "Budj Bim Eel Aquaculture",
              description: "UNESCO World Heritage (2019). Gunditjmara engineered volcanic stone channels, weirs, and ponds across 100+ km2 to trap and farm eels. One of the oldest aquaculture systems on Earth.",
              rarity: "legendary",
              historicalPeriod: "6600 BCE",
              significance: "UNESCO — oldest aquaculture on Earth",
              yearBCE: 6600,
              category: "canal"
            },
            {
              id: "toolondo-canals",
              name: "Toolondo Aboriginal Canal System",
              description: "Stone-lined channels connecting wetlands across the Western District plains, extending several kilometers. Actively managed water flow.",
              rarity: "epic",
              historicalPeriod: "Pre-contact",
              significance: "Pre-contact canal engineering in southeastern Australia",
              yearBCE: 1000,
              category: "canal"
            },
            {
              id: "fire-stick-water",
              name: "Fire-Stick Farming for Water Management",
              description: "Systematic burning managing vegetation and water flow. Mosaic burning created diverse water-retention landscapes, maintaining springs and wetlands through dry periods. Changed hydrology of an entire continent.",
              rarity: "legendary",
              historicalPeriod: "65,000 BCE onwards",
              significance: "Largest-scale landscape hydrology management in human history",
              yearBCE: 65000,
              category: "irrigation"
            },
            {
              id: "songline-water",
              name: "Songline Water Navigation",
              description: "Oral mapping system encoding water source locations across thousands of kilometers. Songs contain precise hydrological information. A person knowing the songs can navigate to water sources never visited.",
              rarity: "legendary",
              historicalPeriod: "65,000 BCE onwards",
              significance: "Most sophisticated oral hydrological database in human history",
              yearBCE: 65000,
              category: "irrigation"
            },
            {
              id: "desert-soak-wells",
              name: "Desert Soak Wells (Yuu)",
              description: "Shallow wells in dry riverbeds accessing subsurface flow, covered to reduce evaporation. Locations kept secret, maintained for thousands of years.",
              rarity: "epic",
              historicalPeriod: "10,000+ BCE",
              significance: "Hidden water infrastructure — concealment as engineering",
              yearBCE: 10000,
              category: "fountain"
            },
            {
              id: "dampier-fish-traps",
              name: "Dampier Peninsula Tidal Fish Traps",
              description: "Stone walls in intertidal zones. Multiple configurations for different tidal conditions. Some extend hundreds of meters.",
              rarity: "epic",
              historicalPeriod: "1000+ BCE",
              significance: "Tidal water engineering along northwestern coast",
              yearBCE: 1000,
              category: "dam"
            },
            {
              id: "murray-darling-traditional",
              name: "Murray-Darling Traditional Fish Management",
              description: "Traditional management of Australia's largest river system (1M km2). Fish traps, weirs, seasonal burning for habitat management.",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Management of Australia's largest watershed",
              yearBCE: 5000,
              category: "dam"
            },
            {
              id: "aboriginal-water-sharing",
              name: "Aboriginal Water Sharing Protocols",
              description: "Complex customary law governing water access. Different nations had different protocols. Rights negotiated between groups. Violations severely sanctioned.",
              rarity: "epic",
              historicalPeriod: "65,000 BCE onwards",
              significance: "Oldest continuous water governance system on Earth",
              yearBCE: 65000,
              category: "irrigation"
            },
            {
              id: "rainwater-tree",
              name: "Rainwater Tree Collection",
              description: "Specific tree species channel rainwater into root hollows. Aboriginal people maintained these trees and harvested water from cavities.",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Biological water harvesting",
              yearBCE: 5000,
              category: "irrigation"
            },
            {
              id: "sand-filtering",
              name: "Sand Filtering for Purification",
              description: "Digging wells near waterbodies. Water seeping through sand was naturally filtered. Knowledge of which soils produced clean water.",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Natural filtration water purification",
              yearBCE: 5000,
              category: "sanitation"
            },
            {
              id: "kimberley-springs",
              name: "Kimberley Gorge Spring Management",
              description: "Management of permanent springs in Kimberley gorges. Stone-lined enclosures, channeled flow, vegetation maintenance. Some managed 40,000+ years.",
              rarity: "legendary",
              historicalPeriod: "Traditional",
              significance: "Among the oldest continuously managed water sources on Earth",
              yearBCE: 40000,
              category: "fountain"
            },
            {
              id: "snowy-mountains",
              name: "Snowy Mountains Hydroelectric Scheme",
              description: "16 dams, 7 power stations, 225 km of tunnels. Diverts water through the Great Dividing Range. 100,000 workers from 30 countries.",
              rarity: "legendary",
              historicalPeriod: "1949-1974 CE",
              significance: "Australia's largest engineering project",
              yearBCE: -1974,
              category: "dam"
            },
            {
              id: "perth-groundwater",
              name: "Perth Groundwater Replenishment",
              description: "Full-scale injection of treated wastewater into deep aquifers. Among the first managed aquifer recharge systems.",
              rarity: "epic",
              historicalPeriod: "2017 CE",
              significance: "Leading-edge indirect potable reuse",
              yearBCE: -2017,
              category: "sanitation"
            },
            {
              id: "murray-darling-plan",
              name: "Murray-Darling Basin Plan",
              description: "Australia's most contentious water policy allocating water between agriculture, cities, and environment across 1M km2. Involves 4 states.",
              rarity: "epic",
              historicalPeriod: "2012 CE",
              significance: "Most complex water allocation in Australia",
              yearBCE: -2012,
              category: "irrigation"
            },
            {
              id: "water-trading",
              name: "Australian Water Trading Market",
              description: "Pioneered tradeable water rights — separating rights from land. Annual trading exceeds AUD $2 billion.",
              rarity: "epic",
              historicalPeriod: "1990s onwards",
              significance: "World's most developed water trading market",
              yearBCE: -1995,
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
            },
            {
              id: "austronesian-taro-irrigation",
              name: "Austronesian Taro Irrigation",
              description: "As Austronesians expanded southward from Taiwan through Philippines to Indonesia, they brought systematic taro pondfield irrigation — channeling mountain streams into leveled terraces.",
              rarity: "epic",
              historicalPeriod: "3500-2000 BCE",
              significance: "The agricultural technology that enabled Pacific colonization",
              yearBCE: 3500,
              category: "irrigation"
            },
            {
              id: "austronesian-freshwater-voyaging",
              name: "Austronesian Freshwater Voyaging Storage",
              description: "Bamboo water containers, coconut shell vessels, and carved wooden water tanks carried on outrigger canoes for ocean crossings. Without reliable freshwater storage, the Austronesian expansion would have been impossible.",
              rarity: "epic",
              historicalPeriod: "3500 BCE onwards",
              significance: "Enabled the greatest maritime migration in human history",
              yearBCE: 3500,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "ancient-japan",
      name: "Japan (Yayoi to Edo)",
      description: "Masters of water gardens spanning 1,900 years: from Yayoi-era rice paddy irrigation (300 BCE) through Nara-Heian imperial water systems to Edo-period castle town engineering (1600 CE). Encompasses rice paddies, zen reflection pools, and sophisticated urban water supply.",
      position: [18, 0, 2],
      color: "#DC143C",
      era: "classical",
      dateRange: "300 BCE - 1600 CE (Yayoi through Edo)",
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
            },
            {
              id: "mizukumi-water-rights",
              name: "Japanese Water Rights System (Mizukumi)",
              description: "The Edo Period (1603-1868) formalized complex water rights allocation systems known as mizukumi, governing the distribution of irrigation water among farming communities. These customary rules specified the exact timing, duration, and volume of water each village could draw from shared canals and rivers, with rotating schedules enforced by appointed water managers (mizuban). Disputes were adjudicated by designated officials, and violations could result in severe penalties. This system supported rice cultivation for a population of 30 million and represents one of the most sophisticated pre-modern water governance frameworks in the world.",
              rarity: "rare",
              historicalPeriod: "Edo Period",
              significance: "Sophisticated pre-modern water governance framework",
              yearBCE: -1600,
              category: "canal"
            },
            {
              id: "shimogoe-nightsoil",
              name: "Nightsoil Collection System (Shimogoe)",
              description: "Edo Period Japan (1603-1868) developed history's most sophisticated human waste recycling system, known as shimogoe. Urban human waste was a valuable commodity—landlords sold tenants' waste to specialized collectors who transported it to surrounding farms as fertilizer. This created a circular economy where rural farmers supplied food to cities and purchased back urban waste to enrich their fields. In Edo (Tokyo), with a population exceeding 1 million by 1720, this system kept the city remarkably clean compared to European capitals of the same era. The waste was carefully composted before application, reducing pathogen transmission. This system is now studied as an early model of sustainable urban metabolism.",
              rarity: "rare",
              historicalPeriod: "Edo Period",
              significance: "History's most sophisticated pre-modern waste recycling system",
              yearBCE: -1650,
              category: "sanitation"
            },
            {
              id: "yukimuro-snow-storage",
              name: "Yukimuro Snow Storage",
              description: "The yukimuro (snow room) system of Japan's snow country (particularly Niigata and surrounding regions) developed during the Edo Period as a method of preserving food and cooling spaces using stored winter snow. Large underground or semi-underground chambers were packed with compacted snow during winter, insulated with rice straw and earth, and used throughout the summer to refrigerate perishable foods, preserve sake, and cool living spaces. Some yukimuro could store 100+ tonnes of snow, lasting well into autumn. Modern revivals of this traditional technology in Niigata prefecture now use yukimuro for aging rice, sake, and vegetables, with the consistent near-freezing temperature producing distinctly smooth flavors recognized by Japan's food industry.",
              rarity: "rare",
              historicalPeriod: "Edo Period",
              significance: "Traditional snow storage and refrigeration technology",
              yearBCE: -1600,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "dutch-netherlands",
      name: "Dutch Netherlands",
      description: "Land reclaimed from the sea (1200 CE-present). Created 17% of their country through polders (drained land below sea level). Kinderdijk's 19 windmills (UNESCO) pumped water 24/7. Modern gemaal pumping stations now protect 4 million people living below sea level.",
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
            },
            {
              id: "afsluitdijk",
              name: "Afsluitdijk (Enclosure Dam)",
              description: "The Afsluitdijk is a 32 km dam and causeway completed in 1932, separating the Zuiderzee (a shallow inlet of the North Sea) from the outer Wadden Sea and transforming it into the freshwater IJsselmeer lake. Designed by engineer Cornelis Lely and built over five years by 4,000-5,000 workers, the dam stands 7.25 meters above sea level and 90 meters wide at its base. This monumental project was the largest hydraulic engineering achievement of its era, enabling the subsequent reclamation of 1,650 km² of polderland (the Flevopolders) for agriculture and settlement. The Afsluitdijk fundamentally reshaped the Dutch coastline and remains a cornerstone of the Netherlands' defense against the North Sea.",
              rarity: "legendary",
              historicalPeriod: "Modern Era",
              significance: "Largest hydraulic engineering project of its era",
              yearBCE: -1932,
              category: "dam"
            },
            {
              id: "room-for-river",
              name: "Room for the River Program",
              description: "A revolutionary Dutch flood management program launched in 2006 and completed in 2015, costing 2.3 billion euros across 39 locations along the Rhine, Meuse, Waal, and IJssel rivers. Rather than the traditional Dutch approach of building ever-higher dikes, this program gave rivers more space to flood safely by lowering floodplains, creating bypass channels, relocating dikes further inland, and removing obstacles. The program lowered flood water levels by up to 30 cm at critical points and has become a globally influential model for climate-adaptive water management. It represents a paradigm shift in Dutch water engineering philosophy from fighting nature to working with it.",
              rarity: "epic",
              historicalPeriod: "21st Century",
              significance: "Modern paradigm shift in flood management philosophy",
              yearBCE: -2006,
              category: "dam"
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
      name: "Classical India",
      description: "India's water engineering traditions span millennia, from the Indus Valley civilization's sophisticated urban drainage to the spectacular stepwells (vav) of Gujarat and Rajasthan that combined architecture, art, and hydraulic engineering. The subcontinent developed diverse regional solutions: tank irrigation systems (eris) in Tamil Nadu supporting millions of farmers, elaborate stepwell complexes descending 7+ stories underground, and the grand canal networks of Vijayanagara Empire. These traditions represent water architecture as both practical infrastructure and cultural expression unmatched anywhere in the world.",
      position: [10, 0, 2],
      color: "#FF6347",
      era: "classical",
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
            },
            {
              id: "tis-abay-falls",
              name: "Tis Abay (Blue Nile Falls) Water Management",
              description: "Water management systems around Tis Issat ('Water that Smokes'), the Blue Nile Falls near Lake Tana. Local communities engineered channels and diversions to harness the mist and overflow for irrigating crops on the surrounding plateau. The falls drop 45 meters and historically powered grain mills positioned along the river below.",
              rarity: "epic",
              historicalPeriod: "Ancient - Present",
              significance: "Harnessing one of Africa's great waterfalls for agriculture and milling",
              yearBCE: 300,
              category: "water-lifting"
            },
            {
              id: "aksum-stelae-drainage",
              name: "Aksum Stelae Field Drainage",
              description: "Stormwater channels carved into bedrock around the towering Aksumite stelae field to protect the monumental obelisks from erosion and water damage. These drainage channels directed rainfall away from the bases of stelae up to 33 meters tall, some weighing over 500 tons. The system has preserved these monuments for nearly 2,000 years.",
              rarity: "epic",
              historicalPeriod: "3rd-4th Century CE",
              significance: "Protected Africa's tallest ancient monuments from water damage for 1,700+ years",
              yearBCE: -300,
              category: "sanitation"
            },
            {
              id: "gondar-royal-baths",
              name: "Gondar Royal Baths (Fasilides Bath)",
              description: "Rectangular stone-lined pool built by Emperor Fasilides in the 17th century, surrounded by a sunken courtyard and connected to the Qaha River via stone channels with sluice gates. The bath is filled annually for the Timkat (Epiphany) celebration, when thousands gather for baptismal ceremonies. This is one of the best-preserved examples of Ethiopian royal hydraulic architecture.",
              rarity: "legendary",
              historicalPeriod: "17th Century CE",
              significance: "Still filled and used annually for Timkat celebrations after 370+ years",
              yearBCE: -1632,
              category: "fountain",
              stillWorking: { age: "390+ years", status: "Filled annually for Timkat religious celebration" }
            },
            {
              id: "konso-terracing",
              name: "Konso Terracing System",
              description: "Elaborate stone-walled agricultural terraces built by the Konso people on steep hillsides in southern Ethiopia. These terraces capture and retain rainwater, prevent soil erosion, and create level planting surfaces on gradients exceeding 45 degrees. The system has been continuously maintained for over 400 years and was inscribed as a UNESCO World Heritage Site in 2011.",
              rarity: "legendary",
              historicalPeriod: "17th Century CE - Present",
              significance: "UNESCO World Heritage Site—continuously maintained terracing for 400+ years",
              yearBCE: -1600,
              category: "irrigation",
              unesco: { siteName: "Konso Cultural Landscape", yearListed: 2011 },
              stillWorking: { age: "400+ years", status: "Actively maintained and farmed by Konso communities" }
            },
            {
              id: "ethiopian-springs",
              name: "Ethiopian Highland Springs",
              description: "Sacred community water sources found throughout the Ethiopian Highlands, often marked by ancient trees and stone enclosures. These springs serve as both domestic water supply and spiritual gathering places, with many believed to have healing properties. Community management systems dating back centuries regulate access and maintain water quality.",
              rarity: "rare",
              historicalPeriod: "Ancient - Present",
              significance: "Sacred springs serving as primary community water sources for millennia",
              yearBCE: 500,
              category: "fountain"
            }
          ]
        }
      ]
    },
    {
      id: "korean",
      name: "Ancient Korea",
      description: "Pioneers of hydraulic technology (330 BCE-1897 CE). Byeokgolje reservoir (330 BCE) is one of Asia's oldest. Invented the cheugugi rain gauge (1441 CE)—200 years before Europe. Ondol underfloor heating used water and smoke channels for efficiency.",
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
            },
            {
              id: "lusong-mortars",
              name: "Lusong Stone Mortars",
              description: "Large basalt grinding stones with deep concave basins carved into bedrock or boulders. When not in use for food processing, these bowl-shaped depressions captured and held rainwater, providing supplemental drinking water sources. Multiple lusong at village sites created distributed rainwater collection points across settlements.",
              rarity: "rare",
              historicalPeriod: "1000 BCE - 1700 CE",
              significance: "Dual-purpose food processing and rainwater collection technology",
              yearBCE: 800,
              category: "dam"
            },
            {
              id: "chamorro-taro-paddies",
              name: "Chamorro Spring-fed Taro Paddies",
              description: "Irrigated wetland agriculture systems fed by natural freshwater springs on Guam and Rota. Chamorro farmers constructed low earthen bunds to channel spring water through terraced taro paddies, maintaining consistent moisture levels for this staple crop. These paddies sustained large populations on small Pacific islands with limited arable land.",
              rarity: "epic",
              historicalPeriod: "500 BCE - 1700 CE",
              significance: "Sustained intensive agriculture on small Pacific islands using spring-fed irrigation",
              yearBCE: 500,
              category: "irrigation"
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
      description: "'Venice of the East' (1238-1782 CE). Bangkok's klongs (canals) served as streets—people commuted by boat. Ayutthaya island capital was protected by rivers and moats. Floating markets still operate today, continuing centuries-old water-based commerce traditions.",
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
            },
            {
              id: "ayutthaya-floating-markets",
              name: "Ayutthaya Floating Markets",
              description: "Canal-based commerce requiring managed water levels, docking infrastructure, and tidal regulation. The klong network supported a population of 1 million.",
              rarity: "epic",
              historicalPeriod: "1351-1767 CE",
              significance: "Largest canal-based commerce system in pre-modern SE Asia",
              yearBCE: -1351,
              category: "canal"
            },
            {
              id: "ayutthaya-flood-architecture",
              name: "Ayutthaya Flood Adaptation Architecture",
              description: "Buildings constructed on stilts with flood-resistant foundations. Temples built on raised platforms with integrated drainage. The city was designed to flood seasonally and recover.",
              rarity: "rare",
              historicalPeriod: "1351-1767 CE",
              significance: "Deliberate flood-adaptive urban design",
              yearBCE: -1400,
              category: "sanitation"
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
            },
            {
              id: "sukhothai-traphang",
              name: "Sukhothai Traphang (Pond) System",
              description: "Network of rectangular ponds (traphang) surrounding the royal city. Fed by natural springs and rainfall, connected by channels. Over 30 traphang identified.",
              rarity: "rare",
              historicalPeriod: "1238-1438 CE",
              significance: "Unique Thai urban water design — part spiritual, part practical",
              yearBCE: -1238,
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
            },
            {
              id: "bhumibol-dam",
              name: "Bhumibol Dam (Rama IX)",
              description: "Thailand's largest dam (154 m). Multi-purpose: flood control, irrigation, hydropower. Named after the late king.",
              rarity: "epic",
              historicalPeriod: "1964",
              significance: "Thailand's largest multi-purpose dam",
              yearBCE: -1964,
              category: "dam"
            },
            {
              id: "royal-rainmaking",
              name: "Royal Rainmaking Project",
              description: "King Bhumibol's cloud seeding program. Three-stage process: 'Disturbing,' 'Fattening,' and 'Attacking' clouds. Internationally recognized.",
              rarity: "rare",
              historicalPeriod: "1955-Present",
              significance: "Internationally recognized cloud seeding program",
              yearBCE: -1955,
              category: "irrigation"
            },
            {
              id: "monkey-cheeks",
              name: "Monkey Cheeks (Kaem Ling)",
              description: "King Bhumibol's concept of using natural retention areas (like monkey cheeks storing food) to temporarily store floodwater. Implemented across Central Thailand.",
              rarity: "rare",
              historicalPeriod: "2006-Present",
              significance: "Innovative floodwater retention concept",
              yearBCE: -2006,
              category: "dam"
            }
          ]
        },
        {
          id: "northern-thailand",
          name: "Northern Thailand",
          description: "Ancient water management traditions of the Lanna Kingdom and prehistoric settlements",
          historicalContext: "Northern Thai civilizations developed unique irrigation and agricultural water systems",
          coordinates: { lat: 18.8, lng: 98.9 },
          artifacts: [
            {
              id: "lanna-muang-fai",
              name: "Lanna Kingdom Irrigation (Muang Fai)",
              description: "Northern Thai gravity-fed weir irrigation system. Community-managed with traditional water allocation rules. Still functioning today.",
              rarity: "rare",
              historicalPeriod: "13th c. CE onwards",
              significance: "Living example of traditional community water governance",
              yearBCE: -1250,
              category: "irrigation"
            },
            {
              id: "ban-chiang-rice",
              name: "Ban Chiang Rice Paddy Management",
              description: "Bronze Age rice cultivation with water control at Ban Chiang, a UNESCO World Heritage site — one of the earliest centers of bronze metallurgy and rice agriculture.",
              rarity: "epic",
              historicalPeriod: "3600-300 BCE",
              significance: "Demonstrates independent agricultural water innovation",
              yearBCE: 3600,
              category: "irrigation"
            },
            {
              id: "iron-age-moated-settlements",
              name: "Iron Age Moated Settlements",
              description: "Circular moated sites (over 50 identified) combining defensive, water storage, and agricultural irrigation functions. Some exceed 1 km in diameter.",
              rarity: "rare",
              historicalPeriod: "500 BCE-500 CE",
              significance: "Unique to mainland SE Asia — hundreds of sites across the Khorat Plateau",
              yearBCE: 500,
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
              category: "dam",
              unesco: { siteName: "Rani ki Vav (the Queen's Stepwell) at Patan, Gujarat", yearListed: 2014 }
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
              category: "dam",
              stillWorking: { age: "1,800 years", status: "Still diverting the Kaveri" }
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
      name: "Cambodia (Khmer) - Extended",
      description: "Extended details on the Khmer Empire (802–1431 CE), which built the largest pre-industrial city on Earth at Angkor, supported by the most ambitious hydraulic infrastructure of the medieval world. The West Baray reservoir (8 km × 2 km, holding 56 million cubic meters) remains the largest hand-dug reservoir in history and still holds water today. Over 1,000 km of canals connected barays to rice fields, enabling 3–4 harvests per year and supporting a population exceeding 1 million. Angkor Wat's 200-meter-wide moat served both as a symbolic ocean around the sacred mountain and as structural protection against foundation erosion. The empire's collapse around 1431 CE is now attributed partly to failure of this hydraulic network during severe droughts revealed by tree-ring analysis. See also Khmer Empire for the Neak Poan temple basins and River of Thousand Lingas.",
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
              description: "The largest hand-dug reservoir in human history, measuring 8 km × 2.1 km and holding 56 million cubic meters of water—enough to fill 22,400 Olympic swimming pools. Constructed under King Suryavarman I around 1050 CE, the embankment walls rise 5+ meters and required moving an estimated 10 million cubic meters of earth by hand. The baray collected monsoon rainfall and river overflow, releasing it through sluice gates during the 6-month dry season to irrigate thousands of hectares of rice paddies. Remarkably, the West Baray still holds water today, nearly 1,000 years after construction. The earlier East Baray (7.5 km × 1.8 km, built 889 CE) served a similar function but is now dry.",
              rarity: "legendary",
              historicalPeriod: "1050 CE",
              significance: "Largest hand-dug reservoir in history; 56 million m³ capacity; 10 million m³ of earth moved by hand; still holds water after 1,000 years",
              yearBCE: -1050,
              category: "dam"
            },
            {
              id: "angkor-moat",
              name: "Angkor Wat Moat",
              description: "A 200-meter-wide moat surrounding the Angkor Wat temple complex on all four sides, forming a rectangle 1.5 km × 1.3 km. Holding approximately 1.5 million cubic meters of water, it served multiple engineering functions: symbolically representing the cosmic ocean around Mount Meru (the sacred mountain at the center of the Hindu universe), stabilizing the sandy soil foundations through constant water pressure, preventing differential settlement that would crack the massive stone towers, and providing a defensible barrier. The moat is fed by the Siem Reap River through an ingenious diversion channel. Built under Suryavarman II (1113–1150 CE), it remains water-filled year-round—a testament to its hydraulic design.",
              rarity: "epic",
              historicalPeriod: "12th century CE",
              significance: "200 m wide; 1.5 million m³ capacity; stabilizes temple foundations; still water-filled after 900 years",
              yearBCE: -1150,
              category: "canal"
            },
            {
              id: "khmer-canals",
              name: "Khmer Canal Network",
              description: "An interconnected hydraulic network of over 1,000 km of canals linking the massive barays (reservoirs) to rice paddies across the Angkor plain. The system included primary distribution canals (5–10 m wide), secondary channels to individual field blocks, and tertiary ditches feeding individual paddies. Sluice gates and weirs at key junctions controlled flow direction and volume. This infrastructure enabled 3–4 rice harvests per year (versus the typical 1–2 with rain-fed farming), generating the agricultural surplus that supported a million residents and funded the construction of hundreds of stone temples. LIDAR surveys since 2012 have revealed the full extent of this network, showing a planned urban-agricultural landscape covering 1,000+ km².",
              rarity: "epic",
              historicalPeriod: "9th-13th century CE",
              significance: "1,000+ km of canals; 3-4 rice harvests/year; supported 1 million people; LIDAR revealed 1,000+ km² planned landscape",
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
      description: "Burma's hydraulic engineering centers on two remarkable traditions. The Kyaukse Weir System (9th–11th century CE) diverted the Zawgyi River through stone weirs feeding 70 km channels that irrigated 20,000+ hectares of the dry zone—this rice surplus made the Pagan Empire possible, funding the construction of 10,000+ temples at Bagan. On Inle Lake (22 km long, 900 m elevation), the Intha people developed unique floating gardens (ye-chan) built on mats of decomposing water hyacinth anchored to lake-bed poles, producing tomatoes, flowers, and vegetables year-round. The Intha's distinctive leg-rowing technique and stilted villages represent one of the world's most complete lake-based civilizations.",
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
              description: "A series of stone-and-earth weirs constructed across the Zawgyi River and its tributaries in the dry zone of central Burma, feeding 70+ km of distribution channels to irrigate 20,000+ hectares of rice paddies. The Kyaukse plain, receiving only 500–750 mm of annual rainfall, would be near-desert without irrigation. King Anawrahta (1044–1077 CE) expanded these weirs to create the agricultural foundation of the Pagan Empire—the rice surplus fed an urban population that built over 10,000 temples and monasteries at Bagan. The weirs were maintained through the corvée labor system (asran), with villages assigned specific sections. Some weirs remained operational into the British colonial period (1885).",
              rarity: "epic",
              historicalPeriod: "9th-11th century CE",
              significance: "Irrigated 20,000+ hectares in 500mm rainfall zone; rice surplus funded 10,000+ temples at Bagan; maintained through corvée system",
              yearBCE: -850,
              category: "irrigation"
            }
          ]
        },
        {
          id: "inle-lake",
          name: "Inle Lake Floating Gardens",
          description: "Floating agricultural beds on a 116 km² freshwater lake at 900 m elevation in the Shan Hills",
          historicalContext: "The Intha people ('sons of the lake') created productive farmland on open water using decomposing water hyacinth, supporting 70,000+ lake dwellers",
          coordinates: { lat: 20.5353, lng: 96.9108 },
          artifacts: [
            {
              id: "floating-gardens",
              name: "Inle Floating Gardens (Ye-chan)",
              description: "The Intha people construct floating garden beds (ye-chan) from decomposing water hyacinth (Eichhornia crassipes) and lake-bottom mud, anchored to the lake bed with bamboo poles to prevent drifting. These beds are 1–2 meters wide and up to 30 meters long, floating in 2–3 meters of water. Tomatoes are the primary crop—Inle produces most of Myanmar's tomato supply. Flowers, beans, and cucumbers are also grown. The decomposing plant matter generates heat, extending the growing season. Farmers navigate between garden strips in flat-bottomed boats, using their distinctive one-legged rowing technique (standing on one leg while wrapping the other around the oar). Over 70,000 Intha live in stilted villages on the lake today.",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Produces most of Myanmar's tomatoes; 70,000+ lake dwellers; unique leg-rowing technique; farming on open water",
              yearBCE: -1000,
              category: "irrigation"
            }
          ]
        },
        {
          id: "bagan-temples",
          name: "Bagan Temples",
          description: "Temple city with integrated water infrastructure across thousands of structures",
          historicalContext: "Bagan's 3,000+ temples relied on sophisticated water management for construction and maintenance",
          coordinates: { lat: 21.17, lng: 94.87 },
          artifacts: [
            {
              id: "kyaukse-weir-expanded",
              name: "Kyaukse Integrated Weir System",
              description: "Not just one weir but an integrated system of 12+ weirs on 4 rivers in the Kyaukse district. Fed a canal network irrigating the rice bowl that sustained the Bagan empire's 200,000+ population.",
              rarity: "legendary",
              historicalPeriod: "11th-13th c. CE",
              significance: "Most important single irrigation system in pre-modern Myanmar",
              yearBCE: -1050,
              category: "irrigation"
            },
            {
              id: "bagan-temple-tanks",
              name: "Bagan Temple Tank Systems",
              description: "Over 3,000 temples at Bagan, many with integrated water tanks (kan) for ritual use, cooling, and local water supply. Stone-lined and brick-lined tanks with filtration systems.",
              rarity: "epic",
              historicalPeriod: "11th-13th c. CE",
              significance: "Largest concentration of temple-water infrastructure in SE Asia",
              yearBCE: -1050,
              category: "dam"
            },
            {
              id: "meiktila-lake",
              name: "Meiktila Lake Management",
              description: "Managed natural lake with engineered embankments, sluices, and distribution canals. Key water source for dry-zone agriculture.",
              rarity: "rare",
              historicalPeriod: "11th c. CE onwards",
              significance: "Demonstrates dry-zone water conservation engineering",
              yearBCE: -1050,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "vietnam",
      name: "Vietnam",
      description: "Masters of river delta cultivation (200 CE-present). Red River dike system stretches 3,000+ km—continuously maintained for 2,000 years. Mekong Delta floating rice grows 20-30 cm/day to match rising flood waters. Traditional water puppetry celebrates rice culture.",
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
        },
        {
          id: "dai-viet-capital",
          name: "Dai Viet Capital",
          description: "Water engineering of the Dai Viet kingdoms and modern Vietnam",
          historicalContext: "Vietnamese dynasties built extensive dike, dam, and reservoir systems to manage the Red River",
          coordinates: { lat: 21.03, lng: 105.85 },
          artifacts: [
            {
              id: "dong-son-bronze-drums",
              name: "Dong Son Bronze Drums",
              description: "Elaborate bronze drums used in rain-calling ceremonies depicting boats, water, and agricultural scenes — evidence that water management was central to Dong Son identity.",
              rarity: "epic",
              historicalPeriod: "1000-200 BCE",
              significance: "Earliest bronze-age water ritual technology in SE Asia",
              yearBCE: 1000,
              category: "water-clock"
            },
            {
              id: "de-dike-system",
              name: "Đê (Dike) System Expansion",
              description: "Emperor Lý Nhân Tông ordered the systematic expansion and standardization of the Red River dike system in 1108 CE. Created the đê quai (sea dike) and đê sông (river dike) classification system.",
              rarity: "epic",
              historicalPeriod: "1108 CE",
              significance: "First codified dike classification in SE Asia",
              yearBCE: -1108,
              category: "dam"
            },
            {
              id: "dap-dam-systems",
              name: "Đập (Dam) Systems",
              description: "Small weir-dams across tributaries for rice irrigation. Thousands built across the Red River Delta and central lowlands.",
              rarity: "rare",
              historicalPeriod: "11th-15th c. CE",
              significance: "Decentralized irrigation at massive scale",
              yearBCE: -1100,
              category: "dam"
            },
            {
              id: "ho-reservoir-engineering",
              name: "Hồ (Reservoir) Engineering",
              description: "Royal reservoirs at Thăng Long (Hanoi) combining urban water supply, flood control, and ornamental gardens. Hồ Tây (West Lake) was actively managed.",
              rarity: "epic",
              historicalPeriod: "11th-15th c. CE",
              significance: "Urban water planning for one of Asia's great capitals",
              yearBCE: -1100,
              category: "dam"
            },
            {
              id: "salt-production-water",
              name: "Salt Production Water Systems",
              description: "Coastal salt pans with managed seawater evaporation — tidal gates, levees, and evaporation basins.",
              rarity: "rare",
              historicalPeriod: "11th c. CE onwards",
              significance: "Industrial water management for trade economy",
              yearBCE: -1100,
              category: "irrigation"
            },
            {
              id: "hoa-binh-dam",
              name: "Hòa Bình Dam",
              description: "Largest dam in Southeast Asia at time of completion. 128 m tall, 1,920 MW.",
              rarity: "epic",
              historicalPeriod: "1994",
              significance: "Largest dam in Southeast Asia at completion",
              yearBCE: -1994,
              category: "dam"
            },
            {
              id: "mekong-sluice-network",
              name: "Mekong Delta Sluice Gate Network",
              description: "Extensive network of cống (sluice gates) managing saltwater intrusion, freshwater supply, and tidal flooding across the delta. Over 1,000 gates.",
              rarity: "rare",
              historicalPeriod: "Modern",
              significance: "Over 1,000 sluice gates managing saltwater intrusion",
              yearBCE: -1950,
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
      description: "The Philippine archipelago produced some of the ancient world's most remarkable water engineering achievements. The Ifugao Rice Terraces of the Cordillera mountains—carved entirely by hand over 2,000 years ago—stretch an estimated 20,100 kilometers if laid end-to-end, roughly half the Earth's circumference. The American Society of Civil Engineers designated them an International Historic Civil Engineering Landmark in 1997, recognizing their mastery of hydrology, sustainable development, and gravity-fed irrigation. Beyond the terraces, the Philippines developed diverse water traditions across its 7,000+ islands: the Ilocos region's zanjera cooperative irrigation societies (over 1,000 self-governing cooperatives managing 33,000 hectares), the Cordillera's lampisa community water management systems, and ingenious bamboo pipe networks delivering spring water across kilometers of mountainous terrain. The Ifugao invented hydraulicking (bulubul)—using controlled water force as a construction tool to transport massive stones and soil across steep terrain—a technique unique in world engineering. During the Spanish colonial era, Manila received Southeast Asia's most ambitious urban waterworks: the Carriedo system (1882) with its 56,000-cubic-meter underground El Deposito reservoir, serving 300,000 people through gravity-fed cast-iron pipes. UNESCO inscribed five terrace clusters as World Heritage Sites in 1995, and the muyong forest watershed system—where cutting protected trees was traditionally punishable by death—represents one of humanity's oldest conservation programs.",
      position: [18, 0, 8],
      color: "#4CAF50",
      era: "ancient",
      dateRange: "100 BCE - Present",
      locations: [
        {
          id: "ifugao-terraces",
          name: "Ifugao Rice Terraces (Banaue, Batad, Hungduan)",
          description: "UNESCO World Heritage rice terraces spanning 10,360 km² across the Cordillera mountains, carved entirely by hand at elevations up to 1,500 meters with slope angles reaching 70%",
          historicalContext: "The ASCE designated the terraces as the 19th International Historic Civil Engineering Landmark in 1997. Five clusters (Batad, Bangaan, Hungduan, Mayoyao Central, Nagacadan) were inscribed as UNESCO World Heritage Sites in 1995. Added to the UNESCO Danger List in 2001 when over 30% were abandoned due to urban migration, then successfully removed in 2012 after community restoration efforts.",
          coordinates: { lat: 16.9117, lng: 121.0536 },
          artifacts: [
            {
              id: "banaue-terraces",
              name: "Banaue Rice Terraces",
              description: "The iconic terraces of Banaue represent 2,000 years of continuous hydraulic engineering on the steep mountainsides of Ifugao province. Built without any machinery or modern tools, these terraces feature stone and mud retaining walls that follow natural mountain contours, with some walls reaching 6 meters (20 feet) in height. The gravity-fed irrigation system harvests water from mountain forest watersheds and channels it through bamboo pipes, carved stone channels, and canals in a self-balancing cascade where water flows gently from terrace to terrace without causing erosion. The total estimated length of all terrace walls, if laid end-to-end, would stretch approximately 20,100 kilometers—roughly half the Earth's circumference. Each terrace functions as a miniature hydraulic system: water enters through field inlets, floods the level pond field for rice cultivation, then overflows to the next terrace below. Natural filtration through soil layers cleans the water as it cascades downward, while the terraces themselves serve as flood control, slowing monsoon runoff across steep terrain.",
              rarity: "legendary",
              historicalPeriod: "100 BCE - Present",
              significance: "UNESCO World Heritage Site (1995); ASCE International Historic Civil Engineering Landmark (1997); 20,100 km total wall length; elevation up to 1,500m; slopes up to 70%",
              yearBCE: 100,
              category: "irrigation",
              unesco: { siteName: "Rice Terraces of the Philippine Cordilleras", yearListed: 1995 }
            },
            {
              id: "bamboo-irrigation",
              name: "Ifugao Bamboo Pipe System",
              description: "The Ifugao developed an ingenious gravity-fed water delivery system using hollow bamboo pipes (locally called 'salup') to transport spring water across distances of up to 5-6 kilometers from mountain forest sources to terrace fields. Giant bamboo culms are split, hollowed, and joined end-to-end, supported on wooden trestles that follow the mountainside contours. The system delivers 18-20 liters per minute without any pumping mechanism, relying entirely on precise gradient calculations passed down through oral tradition. Bamboo pipes are supplemented with hollow logs and carved stone channels at critical junctions. The network includes main canals bringing water from forest sources, secondary channels branching to terrace clusters, individual field inlets for each terrace, and overflow systems handling excess water during monsoon season. The entire system requires annual replacement of bamboo sections, making maintenance a continuous community activity governed by traditional cooperative labor arrangements.",
              rarity: "rare",
              historicalPeriod: "Traditional (pre-colonial)",
              significance: "Delivers 18-20 liters/minute using only gravity and bamboo; spans up to 5-6 km from source to field; requires no metal or manufactured components",
              yearBCE: -500,
              category: "aqueduct"
            },
            {
              id: "muyong",
              name: "Muyong Forest Watershed System",
              description: "The muyong is a privately owned and communally managed woodlot system positioned on the mountaintops above the rice terraces, functioning as a living watershed that ensures year-round water supply to the terraces below. Each muyong is a carefully managed micro-forest containing hundreds of native tree species, medicinal plants, and wildlife, maintained by specific Ifugao families under strict customary law. Cutting trees in a muyong was traditionally punishable by death or the payment of heavy fines, making it one of the world's oldest formal conservation programs. The muyong system demonstrates sophisticated understanding of hydrology: the dense forest canopy intercepts rainfall, the root systems prevent erosion and landslides, the forest floor acts as a natural sponge absorbing monsoon rains and releasing water slowly throughout the dry season, and the biodiversity supports natural pest control for the terraces. Modern hydrological studies confirm that muyong forests maintain soil moisture levels 40-60% higher than deforested hillsides, validating 2,000 years of indigenous ecological knowledge.",
              rarity: "epic",
              historicalPeriod: "Traditional (pre-colonial)",
              significance: "One of humanity's oldest conservation programs; cutting protected trees punishable by death; maintains 40-60% higher soil moisture than deforested areas",
              yearBCE: -500,
              category: "irrigation"
            },
            {
              id: "bulubul-hydraulicking",
              name: "Bulubul (Hydraulicking)",
              description: "The Ifugao invented a construction technique called bulubul (also budubud)—hydraulicking—that is unique in world engineering: using controlled water force as a tool to transport massive quantities of soil, gravel, stones, and rocks from upper elevations to pond fields below. During the rainy season (July-September), temporary channels are constructed across existing terraces, and water is diverted from irrigation and drainage sources to create powerful sluicing flows. The water force carries fill materials—including boulders too heavy for human transport—downslope to receiving pond fields where the materials are deposited as structural fill, topsoil, or retaining wall components. Bamboo conveyors guide the sluicing materials across pond fields to prevent damage. This technique solved the fundamental engineering challenge of terrace construction on slopes up to 70%: how to move thousands of tons of stone and earth across steep terrain using only pre-industrial technology. The Ifugao essentially invented a gravity-powered conveyor system that predates modern hydraulic mining techniques by nearly two millennia.",
              rarity: "epic",
              historicalPeriod: "Traditional (pre-colonial)",
              significance: "Unique worldwide engineering technique; uses water force to transport boulders and soil across 70% slopes; predates modern hydraulic mining by ~2,000 years",
              yearBCE: -200,
              category: "water-lifting"
            },
            {
              id: "tuping-stone-walls",
              name: "Tuping (Dry-Stone Terrace Walls)",
              description: "The tuping is the Ifugao technique for constructing dry-fitted stone retaining walls that hold back the soil and water of each terrace level. Foundation stones are laid on excavated hardened earth, then angular stones are positioned on top with elongated stones tilted backward so the heavier end faces outward, creating natural resistance against the water and soil pressure behind the wall. No mortar is used—instead, wedge stones and chinking stones called 'tabab' are fitted generously as fillers between larger stones, and the gaps are packed with soil and compacted using wooden poles or pestles. Walls reach heights of up to 6 meters (20 feet), with protruding header stones built in as climbing steps for maintenance access. The engineering genius lies in the wall's ability to simultaneously retain water for rice cultivation while allowing controlled drainage through the stone interstices, preventing catastrophic wall failure during heavy monsoon rains. Each wall represents precise knowledge of stone selection, weight distribution, and hydrostatic pressure accumulated over generations of oral tradition.",
              rarity: "rare",
              historicalPeriod: "Traditional (pre-colonial)",
              significance: "Dry-fitted walls up to 6 meters high using no mortar; withstand monsoon hydrostatic pressure; knowledge transmitted orally for 2,000+ years",
              yearBCE: -100,
              category: "dam"
            },
            {
              id: "ifugao-lidi",
              name: "Ifugao Communal Water Law (Lidi)",
              description: "Codified water allocation rules governing the Banaue Rice Terraces. Water rights linked to social obligations. Violators face community sanctions.",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "One of the oldest codified water law systems in Southeast Asia",
              yearBCE: -200,
              category: "irrigation"
            },
            {
              id: "visayan-bunsod",
              name: "Visayan Fish Corral Systems (Bunsod)",
              description: "Elaborate bamboo fish corrals in tidal zones of the Visayan Islands. Managed tidal water flow to trap fish.",
              rarity: "common",
              historicalPeriod: "Traditional",
              significance: "Unique tidal fishery management system",
              yearBCE: -500,
              category: "irrigation"
            },
            {
              id: "ilocano-dammang",
              name: "Ilocano Dammang (Check Dam)",
              description: "Stone check dams across mountain streams in Ilocos region for rice irrigation. Community-maintained.",
              rarity: "common",
              historicalPeriod: "Traditional",
              significance: "Community-maintained mountain stream irrigation",
              yearBCE: -500,
              category: "dam"
            },
            {
              id: "tagalog-pilapil",
              name: "Tagalog Pilapil (Rice Paddy Dike)",
              description: "Earthen dikes creating bunded rice paddies in Luzon lowlands. Combined with communal water sharing systems.",
              rarity: "common",
              historicalPeriod: "Traditional",
              significance: "Foundation of Luzon lowland rice agriculture",
              yearBCE: -500,
              category: "irrigation"
            },
            {
              id: "ifugao-water-law",
              name: "Ifugao Water Law (Lidi)",
              description: "Codified customary water law governing the Banaue Terraces. Water rights linked to social obligations. First builder has senior rights. Violations punished by livestock fines.",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Among the most detailed traditional water law systems in the world",
              yearBCE: -500,
              category: "irrigation"
            },
            {
              id: "bontoc-terraces",
              name: "Bontoc Stone-Walled Terraces",
              description: "Stone-walled terraces distinct from Ifugao earth-walled. Massive stone walls up to 3m high. Some rely on rainfall capture rather than springs.",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Alternative terrace engineering in the same mountain range",
              yearBCE: -500,
              category: "irrigation"
            },
            {
              id: "kalinga-peace-pact",
              name: "Kalinga Rice Terrace Peace Pact Water",
              description: "The bodong peace pact system includes water-sharing provisions. Inter-community water disputes resolved through negotiation. Water as peace-building.",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Water governance as peacemaking institution",
              yearBCE: -500,
              category: "irrigation"
            },
            {
              id: "sulu-maritime-water",
              name: "Sulu Archipelago Maritime Water",
              description: "Bajau sea nomads located submarine freshwater springs, carried water in bamboo on boats, and used rainwater collection on stilt houses.",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Maritime freshwater management for sea-dwelling peoples",
              yearBCE: -500,
              category: "irrigation"
            },
            {
              id: "philippine-acequia",
              name: "Spanish Colonial Acequia (Philippines)",
              description: "Spanish introduced acequia-style irrigation combining Moorish/Islamic technology with indigenous techniques. Some channels still in use.",
              rarity: "rare",
              historicalPeriod: "1571 onwards",
              significance: "Transfer of Iberian-Islamic water technology to the Philippines",
              yearBCE: -1571,
              category: "irrigation"
            },
            {
              id: "nia-irrigation",
              name: "NIA Communal Irrigation",
              description: "National Irrigation Administration builds and transfers small-scale irrigation to community management. Over 700,000 hectares irrigated.",
              rarity: "epic",
              historicalPeriod: "1964-Present",
              significance: "Largest community-managed irrigation in Southeast Asia",
              yearBCE: -1964,
              category: "irrigation"
            }
          ]
        },
        {
          id: "ilocos-zanjera",
          name: "Ilocos Region (Zanjera Cooperatives)",
          description: "The Ilocos provinces of northern Luzon host over 1,000 self-governing zanjera irrigation cooperatives managing 33,000 hectares of rice land, representing one of the world's most successful community-managed water systems",
          historicalContext: "The zanjera system blends Spanish colonial irrigation models with pre-existing indigenous water-sharing practices. The Spanish term 'zanja' (ditch/canal) gave the system its name, but the cooperative governance structure reflects indigenous Filipino values of communal resource management. Some zanjeras like Zanjera San Marcelino have operated continuously for over 300 years. Academic studies by researchers at the University of New Mexico and Ateneo de Manila have documented zanjeras as globally exemplary models of sustainable commons governance.",
          coordinates: { lat: 18.1647, lng: 120.5936 },
          artifacts: [
            {
              id: "zanjera-cooperative",
              name: "Zanjera Cooperative Irrigation",
              description: "The zanjera system of the Ilocos region represents one of the world's most remarkable examples of community-managed irrigation. Over 1,000 self-governing cooperatives collectively manage approximately 33,000 hectares of rice land across Ilocos Norte and Ilocos Sur, with some individual zanjeras (such as Zanjera Danum in Dingras) managing 1,500 hectares divided into 32 sub-units called sitios. Each zanjera operates under elected officers including a maestro (water master) who manages distribution, a secretario, tesorero, and even a cocinero (cook for communal work days). The system's genius lies in its water-for-land exchange: landless farmers build and maintain irrigation infrastructure in exchange for farming rights, giving 25% of produce to landowners—a social contract sustained by the cultural value of biang ti daga (land sharing). Land is subdivided into blocks with each farmer receiving plots in different blocks to ensure equitable access to high-flow and low-flow areas. During shortages, water is limited to one unit per farmer. Members contribute 3-5 days per year of communal labor (faenas) for dam and canal repair, using traditional materials: bamboo poles, rocks, banana leaves, and sandbags.",
              rarity: "epic",
              historicalPeriod: "1600s - Present",
              significance: "1,000+ self-governing cooperatives; 33,000 hectares managed; 300+ years continuous operation; globally recognized model of commons governance",
              yearBCE: -400,
              category: "irrigation"
            }
          ]
        },
        {
          id: "cordillera-lampisa",
          name: "Cordillera Mountains (Sagada & Mountain Province)",
          description: "The Cordillera region's indigenous Kankanaey and Bontoc peoples developed the lampisa system of community water management, where appointed water managers ensure equitable distribution across mountain rice fields",
          historicalContext: "The Cordillera Administrative Region is home to eight major indigenous ethnic groups (Ifugao, Bontoc, Kankanaey, Kalinga, Ibaloy, Tingguian, Applai, and Isnag), each with distinct water management traditions. Traditional water rights in the Cordillera are governed by customary law rather than formal permits, and water is considered sacred communal property. The Pidlisan tribe of northern Sagada developed the lampisa system, where violations of water-sharing rules result in ma-aptangan (community fines) used to buy food for repair workers.",
          coordinates: { lat: 17.0913, lng: 120.9065 },
          artifacts: [
            {
              id: "lampisa-system",
              name: "Lampisa Water Management System",
              description: "The lampisa system of the Pidlisan tribe in Sagada, Mountain Province, is a community-based water management framework where appointed officials called lampisa ensure fair and equitable water distribution throughout the cropping season. Each rice field owner contributes 3-5 days per year of communal labor (pumayas) for system rehabilitation—repairing canals, clearing blockages, and reinforcing diversion structures. Non-participation triggers ma-aptangan, community fines whose proceeds buy food for the workers performing repairs. The system operates on the principle that water is sacred communal property that cannot be owned individually, only managed collectively. Water rights are governed by customary law rather than formal government permits, and disputes over water allocation are resolved by community elders using traditional mediation practices. Water theft is punished not only by community sanctions but is believed to invite karmic retribution in the form of illness or crop failure. This integration of practical governance, spiritual beliefs, and social enforcement has maintained equitable water distribution across mountain rice fields for centuries without formal legal frameworks.",
              rarity: "rare",
              historicalPeriod: "Traditional (pre-colonial)",
              significance: "Community water governance without formal legal framework; 3-5 days annual communal labor per farmer; spiritual enforcement of water rights",
              yearBCE: -300,
              category: "irrigation"
            },
            {
              id: "barekbek-fish-trap",
              name: "Barekbek (Bamboo Fish Trap)",
              description: "The barekbek is a traditional woven bamboo basket trap used by Cordillera highland communities for harvesting fish and freshwater shrimp from mountain rivers and streams. Set in groups of 3 or 5 traps (always odd numbers, following traditional belief), the barekbek features a funnel-shaped entrance positioned opposite to the current—easy for fish to enter but nearly impossible to escape. The trap exploits the natural behavior of fish swimming upstream against the current, funneling them into a conical chamber. Barekbek are constructed entirely from locally harvested bamboo strips woven in a specific pattern passed down through family traditions, with each trap lasting approximately one season before replacement. The placement of traps requires intimate knowledge of river hydrology: reading current patterns, identifying fish migration routes, understanding seasonal water level changes, and selecting locations where natural rock formations concentrate fish movement. This indigenous fishing technology represents the intersection of water engineering and food production, demonstrating how Cordillera communities developed integrated systems for managing both agricultural water (terraces) and aquatic resources (river fisheries) within the same watershed.",
              rarity: "common",
              historicalPeriod: "Traditional (pre-colonial)",
              significance: "Integrates water engineering with sustainable fisheries; set in ritual odd-number groups; requires deep knowledge of river hydrology",
              yearBCE: -500,
              category: "canal"
            }
          ]
        },
        {
          id: "manila-waterworks",
          name: "Manila (El Deposito & Carriedo Waterworks)",
          description: "Southeast Asia's most ambitious 19th-century urban waterworks, featuring a 56,000-cubic-meter underground reservoir carved from volcanic tuff, gravity-fed cast-iron pipes spanning 5 km, and public fountains serving 300,000 people",
          historicalContext: "Spanish naval officer Francisco Carriedo y Peredo bequeathed 10,000 pesos in 1733 for a public water system, but construction was delayed 149 years by the British occupation (1762-1764) which raided the fund, bad investments, and colonial bureaucracy. Engineer Genaro Palacios finally completed the system in 1882. On August 30, 1896, Andres Bonifacio's Katipunan revolutionaries attacked El Deposito in the Battle of San Juan del Monte—the first major armed clash of the Philippine Revolution against Spain—making this water infrastructure a site of national independence. The reservoir was declared a National Shrine in 1973 and Museo El Deposito opened in 2019.",
          coordinates: { lat: 14.5989, lng: 121.04 },
          artifacts: [
            {
              id: "el-deposito",
              name: "El Deposito Underground Reservoir",
              description: "El Deposito is the largest surviving Spanish-era infrastructure artifact in the Philippines: a massive underground reservoir carved from volcanic tuff and reinforced with molave hardwood, built between 1878 and 1882 beneath a hill in San Juan. The reservoir stretches 150 meters in length and contains one central canal flanked by 25 smaller chambers, each 5 meters high and 3 meters wide, with ventilation shafts to keep the stored water fresh. Its total capacity of 56,000 cubic meters (approximately 15 million gallons) served Manila's population of 300,000 through gravity-fed cast-iron pipes. Water was pumped from the Marikina River at Santolan through 5 kilometers of pipes to the reservoir, then distributed by gravity to public fountains, fire hydrants, and household connections across Manila and its suburbs. Before this system, Manila's residents relied on contaminated shallow wells, the polluted Pasig River, and aguadores (water porters) carrying clay jars—conditions that made waterborne disease endemic. The Carriedo system's inauguration on July 24, 1882 was celebrated with a week-long festival featuring civic parades, fireworks, and holy masses. Engineer Genaro Palacios, who also designed San Sebastian Church, oversaw construction.",
              rarity: "legendary",
              historicalPeriod: "1878-1882",
              significance: "Largest Spanish-era artifact in Philippines; 56,000 m³ capacity; 150m long; served 300,000 people; site of 1896 Revolution's first battle",
              yearBCE: -1882,
              category: "sanitation"
            },
            {
              id: "carriedo-fountain",
              name: "Carriedo Public Fountain System",
              description: "The Carriedo fountain system transformed Manila from a city plagued by waterborne disease into one with reliable public water access. Named after benefactor Francisco Carriedo y Peredo, who donated 10,000 pesos in 1733 (a fortune delayed 149 years by the British raid on Manila and subsequent bad investments), the system distributed water from El Deposito through cast-iron mains to public fountains, fire hydrants, and private household connections across Manila and its suburbs. The Primera Fuente (Main Fountain) at Rotonda de Sampaloc became the centerpiece of the system's inauguration ceremony. The gravity-fed distribution network eliminated the aguadores (professional water carriers) who had previously transported water in clay jars from the Pasig River, and dramatically reduced cholera, dysentery, and typhoid epidemics that had plagued Spanish Manila for three centuries. A replica of the original Carriedo Fountain stands at the Metropolitan Waterworks and Sewerage System (MWSS) headquarters in Balara, Quezon City, while remnants of the original cast-iron pipe network occasionally surface during Manila road construction.",
              rarity: "rare",
              historicalPeriod: "1882",
              significance: "Funded by 1733 bequest delayed 149 years; eliminated aguadores water-carrier system; dramatically reduced cholera and typhoid in Manila",
              yearBCE: -1882,
              category: "fountain"
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
            },
            {
              id: "bishan-abc-waters",
              name: "Bishan-Ang Mo Kio Park (ABC Waters)",
              description: "Completed in 2012, the Bishan-Ang Mo Kio Park transformation is Singapore's flagship Active, Beautiful, Clean (ABC) Waters project. This $76 million project converted a 2.7 km concrete drainage canal into a naturalized, meandering river with bioengineered banks, creating 62 hectares of green space while increasing the waterway's capacity by 40%. The park integrates cleansing biotopes, rain gardens, and constructed wetlands that naturally filter stormwater before it enters the reservoir system. This project has become a global model for urban blue-green infrastructure, demonstrating how cities can combine flood management, biodiversity, recreation, and water treatment in a single integrated design.",
              rarity: "epic",
              historicalPeriod: "21st Century",
              significance: "Global model for urban blue-green water infrastructure",
              yearBCE: -2012,
              category: "canal"
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
      description: "Malaysia's water story spans from Orang Asli indigenous bamboo gravity aqueducts (zero-energy spring-water delivery) to the colonial-era lombong hydraulic tin mining that made it the world's largest tin producer for decades. The MUDA Irrigation Scheme in Kedah-Perlis irrigates 96,000 hectares of rice paddies, enabling double-cropping that underpins national food security. Traditional tasik/kolam village ponds integrated fish farming, irrigation, and water storage into community life for centuries. In the modern era, Malaysian inventor Ooi Seng Chye created the Greener Water Dispenser—a reverse osmosis system processing raw sewage into drinking water with 99.9% efficiency, representing a leap forward in decentralized water purification.",
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
              description: "High-pressure water jets (monitors) directed at alluvial hillsides to dislodge tin-bearing gravel, which was then sluiced through palong channels for gravity separation. Chinese miners introduced this technique to the Kinta Valley and Larut in the 1850s, transforming Perak into the world's richest tin district. At peak production (1920s–1940s), Malaysia produced over 40% of global tin. The lombong system required elaborate water infrastructure: hilltop reservoirs, bamboo and iron pipelines, and gravel pumps. A single lombong operation could move 1,000+ cubic meters of earth per day using only water pressure and gravity. The technique reshaped entire landscapes visible today as the Kinta Valley limestone lakes.",
              rarity: "epic",
              historicalPeriod: "Colonial Era (1850s-1970s)",
              significance: "Made Malaysia world's largest tin producer (40% of global supply); 1,000+ m³ earth moved per day; created Kinta Valley lake landscape",
              yearBCE: -1850,
              category: "water-lifting"
            },
            {
              id: "palong",
              name: "Palong (Sluice Box System)",
              description: "Inclined wooden channels (3–10 m long, 30–60 cm wide) with transverse riffles that trap heavy cassiterite (tin oxide, specific gravity 7.0) while lighter sand and clay wash away. Water flowing at controlled velocity creates density-based separation—the same principle as gold panning but scaled up industrially. Chinese miners refined the palong design with multiple stages: primary separation, secondary concentration, and final cleaning. The dulang (circular pan) provided final hand-separation. Combined with lombong hydraulic mining, the palong system extracted tin at 90%+ recovery rates using only water, gravity, and human skill—no chemicals or electricity required.",
              rarity: "rare",
              historicalPeriod: "Colonial Era (1800s)",
              significance: "90%+ tin recovery using only water and gravity; no chemicals or electricity; Chinese miners refined multi-stage separation",
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
      description: "The United Arab Emirates represents perhaps the most dramatic water engineering transformation in human history—from nomadic Bedouin communities surviving on ancient underground falaj channels in one of the world's driest climates (annual rainfall under 120 mm) to a modern nation producing over 14 million cubic meters of desalinated water per day. The Al Ain oasis, continuously inhabited for over 4,000 years, preserves UNESCO World Heritage falaj (aflaj) systems—gravity-fed underground channels originating in the Hajar Mountains that sustained date palm agriculture and settlement in the heart of the Arabian Desert. The UAE's modern era, beginning with the discovery of oil in the 1960s, triggered an explosion of water infrastructure: the population surged from 180,000 in 1968 to over 10 million by 2024, requiring a complete reinvention of water supply through mega-scale desalination, treated wastewater reuse, cloud seeding, and artificial island engineering. Today the UAE operates the world's largest desalination capacity, recycles 89% of its treated wastewater, and conducts 300+ cloud seeding missions annually—a multi-billion-dollar commitment to solving the fundamental challenge of sustaining millions of people in a land with no permanent rivers or freshwater lakes.",
      position: [10, 0, -6],
      color: "#00BCD4",
      era: "modern",
      dateRange: "1000 BCE - Present",
      locations: [
        {
          id: "al-ain-oasis",
          name: "Al Ain Oasis",
          description: "The Al Ain oasis complex is one of the world's oldest continuously inhabited settlements, sustained for over 4,000 years by an ingenious network of underground water channels (falaj). Designated a UNESCO World Heritage Site in 2011, Al Ain contains 147,000 date palms across six major oases irrigated by the ancient aflaj system.",
          historicalContext: "Al Ain sits at the foot of Jebel Hafeet (1,249 m), where the Hajar Mountains provide the water source for the gravity-fed falaj tunnels. Archaeological evidence from the Hili site within Al Ain dates human settlement to the Bronze Age (3000 BCE), making this one of the longest-running examples of sustained desert agriculture on Earth.",
          coordinates: { lat: 24.2075, lng: 55.7447 },
          artifacts: [
            {
              id: "falaj-system",
              name: "Falaj Irrigation System",
              description: "The falaj (plural: aflaj) system is a gravity-fed underground water channel network originating in the Hajar Mountains and carrying groundwater across the desert floor to oasis settlements. Dating back approximately 3,000 years in the UAE, these channels can extend 5-20 km from their mountain source, running through hand-dug tunnels at depths of 10-30 meters to minimize evaporation in temperatures exceeding 50°C. The Al Ain oasis preserves the finest examples, with channels (both daudi/underground and ghaili/surface types) distributing water to 147,000 date palms through a precisely timed rotation system. Historically, the UAE had over 4,000 falaj systems; approximately 30 remain active today. The aflaj at Al Ain were inscribed as UNESCO World Heritage in 2011, recognized as a 'masterpiece of human interaction with the environment.' Water distribution follows an ancient timing system using sundials and star positions, with each landowner receiving water for a specific duration proportional to their holdings.",
              rarity: "legendary",
              historicalPeriod: "Ancient (1000 BCE - Present)",
              significance: "UNESCO World Heritage; 3,000+ year-old gravity-fed underground channels; 4,000+ systems historically, ~30 still active; sustained desert agriculture in one of Earth's driest climates",
              yearBCE: 1000,
              category: "aqueduct"
            },
            {
              id: "al-ain-traditional-wells",
              name: "Al Ain Traditional Wells (Tawi)",
              description: "Before the modern era, Bedouin communities across what is now the UAE relied on hand-dug wells (tawi) at oasis sites to access shallow groundwater. These wells, typically 5-15 meters deep, were lined with stone or palm trunk sections and often featured animal-powered water-lifting using leather buckets drawn by camels or donkeys. The locations of reliable wells determined trade routes, tribal territories, and seasonal migration patterns across the Arabian Peninsula for millennia. Many place names in the modern UAE derive from historic well locations—Dubai itself may derive from a word related to its creek (khor), a tidal inlet that provided the settlement's original water access. The communal management of wells followed strict tribal protocols, with water rights (shurb) governing access and usage.",
              rarity: "rare",
              historicalPeriod: "Ancient - 20th Century",
              significance: "Foundation of Bedouin desert survival; determined trade routes and settlement patterns across the Arabian Peninsula",
              yearBCE: 2000,
              category: "irrigation"
            }
          ]
        },
        {
          id: "dubai-desal",
          name: "Dubai Desalination Complex",
          description: "Dubai and Abu Dhabi host the world's largest concentration of seawater desalination plants, collectively producing over 14 million cubic meters of freshwater daily. The Jebel Ali desalination facility in Dubai alone is one of the largest in the world, capable of producing over 2 million cubic meters per day.",
          historicalContext: "When the UAE was founded in 1971, its population was approximately 280,000 and water came primarily from wells and falaj systems. By 2024 the population exceeded 10 million, requiring a complete transformation of water supply infrastructure. The UAE now derives approximately 42% of its water from desalination, 36% from groundwater, and 12% from treated wastewater reuse—a portfolio approach necessitated by having no permanent rivers or natural freshwater lakes.",
          coordinates: { lat: 25.0657, lng: 55.1713 },
          artifacts: [
            {
              id: "mega-desalination",
              name: "Mega-Scale Desalination Plants",
              description: "The UAE operates the world's largest desalination capacity through a network of mega-scale plants using both multi-stage flash distillation (MSF) and reverse osmosis (RO) technologies. The Jebel Ali complex in Dubai, operated by DEWA (Dubai Electricity and Water Authority), uses MSF technology to heat seawater through multiple stages at progressively lower pressures, producing fresh water from Persian Gulf seawater with salinity of 40,000-45,000 parts per million—among the highest of any desalination source worldwide. The newer Hassyan facility (completed 2023) uses energy-efficient RO membranes, reducing energy consumption by 75% compared to thermal methods. Collectively, UAE desalination plants produce over 14 million cubic meters per day, supplying approximately 42% of the nation's total freshwater. The cost has dropped from $4-5 per cubic meter in the 1980s to under $0.60 per cubic meter with modern RO technology, making desalination economically viable at national scale.",
              rarity: "legendary",
              historicalPeriod: "Modern (1976 - Present)",
              significance: "World's largest desalination capacity; 14+ million m³/day; supplies 42% of UAE freshwater; enabled population growth from 280,000 to 10+ million",
              yearBCE: -1976,
              category: "sanitation"
            },
            {
              id: "cloud-seeding",
              name: "UAE Cloud Seeding Program",
              description: "The UAE's National Center of Meteorology operates one of the world's most advanced cloud seeding programs, conducting 300+ missions annually since the program's expansion in 2002. Specially equipped aircraft release hygroscopic salt flares (containing potassium chloride and sodium chloride nanoparticles) into developing cumulus clouds over the Hajar Mountains and Al Ain region, nucleating water droplets and increasing precipitation by an estimated 10-30%. The UAE has invested over $20 million in cloud seeding research, partnering with NASA, the National Center for Atmospheric Research (NCAR), and universities worldwide. In 2024, the program expanded to include drone-based seeding and advanced weather radar networks covering the entire country. While cloud seeding cannot create rain from clear skies, it enhances existing weather systems—particularly important in a country averaging only 78 mm of annual rainfall. The program represents a cutting-edge frontier in human attempts to modify weather for water security.",
              rarity: "epic",
              historicalPeriod: "Modern (2002 - Present)",
              significance: "300+ annual missions; 10-30% rainfall increase; $20+ million research investment; global hub for arid-region weather modification",
              yearBCE: -2002,
              category: "irrigation"
            },
            {
              id: "uae-wastewater-reuse",
              name: "UAE Treated Wastewater Reuse System",
              description: "The UAE recycles approximately 89% of its treated wastewater—one of the highest rates in the world—through a comprehensive network of tertiary treatment plants producing water suitable for landscape irrigation, district cooling, and industrial use. Abu Dhabi alone treats over 800,000 cubic meters of wastewater daily, with treated effluent irrigating parks, golf courses, roadside landscaping, and agricultural operations across the emirate. The treated sewage effluent (TSE) network includes dedicated purple-pipe distribution systems (distinguished from potable blue pipes) extending hundreds of kilometers across urban areas. Advanced treatment processes including membrane bioreactors, UV disinfection, and activated carbon filtration produce effluent meeting stringent quality standards. This system reduces pressure on desalination capacity and represents a critical component of the UAE Water Security Strategy 2036, which aims to reduce total water demand by 21%.",
              rarity: "epic",
              historicalPeriod: "Modern (1990s - Present)",
              significance: "89% wastewater reuse rate—among world's highest; 800,000+ m³/day treated in Abu Dhabi alone; dedicated purple-pipe distribution network",
              yearBCE: -1995,
              category: "sanitation"
            }
          ]
        },
        {
          id: "palm-jumeirah",
          name: "Palm Jumeirah",
          description: "The Palm Jumeirah is the world's largest artificial island, a palm tree-shaped archipelago extending 5.72 km into the Persian Gulf. Completed in 2006 at a cost of $12 billion, this engineering marvel added 78 km of new coastline to Dubai and required solving unprecedented challenges in coastal water management.",
          historicalContext: "Constructed by Nakheel using 94 million cubic meters of sand dredged from the seafloor, the Palm Jumeirah required innovative solutions to maintain water quality in its enclosed lagoons and fronds. Without engineering intervention, the stagnant water between the palm fronds would rapidly become oxygen-depleted and ecologically dead. The project represents the extreme frontier of human water engineering—literally reshaping the ocean.",
          coordinates: { lat: 25.1124, lng: 55.1390 },
          artifacts: [
            {
              id: "palm-water-engineering",
              name: "Palm Jumeirah Tidal Flushing System",
              description: "The Palm Jumeirah's 11 km crescent-shaped breakwater creates a semi-enclosed lagoon that would stagnate without active water management. Engineers designed a system of two 100-meter-wide openings in the breakwater that allow tidal exchange with the open Gulf, achieving a complete water exchange cycle every 14 days. The design underwent extensive computational fluid dynamics modeling and physical model testing at the Danish Hydraulic Institute to optimize flow patterns. Additional features include submerged diffusers along the fronds' inner edges that promote circulation, and a water quality monitoring network with 20+ real-time sensors tracking dissolved oxygen, temperature, salinity, and turbidity. The system maintains dissolved oxygen levels above 4 mg/L throughout the lagoon—sufficient to support marine life including fish, rays, and sea turtles. This represented one of the most complex coastal hydrodynamic engineering challenges ever attempted.",
              rarity: "epic",
              historicalPeriod: "Modern (2001-2006)",
              significance: "78 km new coastline; complete water exchange every 14 days; 94 million m³ of dredged sand; computational fluid dynamics-optimized design",
              yearBCE: -2001,
              category: "canal"
            }
          ]
        },
        {
          id: "masdar-city",
          name: "Masdar City",
          description: "Masdar City is a planned sustainable urban development in Abu Dhabi designed to be one of the world's most water-efficient cities. Launched in 2008, this 6 km² development integrates cutting-edge water conservation technologies aimed at reducing per-capita water consumption by 54% compared to Abu Dhabi's average.",
          historicalContext: "Located 17 km from Abu Dhabi city center, Masdar City was conceived as a laboratory for sustainable desert urbanism. The project incorporates lessons from both ancient Middle Eastern architecture (narrow streets, wind towers, courtyard buildings) and modern technology to minimize water and energy consumption in extreme heat.",
          coordinates: { lat: 24.4284, lng: 54.6155 },
          artifacts: [
            {
              id: "masdar-water-conservation",
              name: "Masdar City Water Systems",
              description: "Masdar City integrates multiple water conservation technologies achieving 54% reduction in per-capita water use compared to Abu Dhabi averages. The system includes greywater recycling (shower, sink, and laundry water treated and reused for toilet flushing and landscape irrigation), smart water meters with real-time leak detection, low-flow fixtures throughout all buildings, and a condensate recovery system that captures water from air conditioning units—which in Abu Dhabi's humid climate can produce significant volumes. Landscape design uses only native drought-tolerant species (ghaf trees, date palms, desert grasses) irrigated by subsurface drip systems using recycled greywater. The city's personal rapid transit system and underground service tunnels eliminate road runoff contamination. Masdar City demonstrates that modern desert cities can dramatically reduce water consumption through integrated design rather than single-technology solutions.",
              rarity: "epic",
              historicalPeriod: "Modern (2008 - Present)",
              significance: "54% reduction in per-capita water use; integrated greywater recycling, smart metering, and condensate recovery; model for sustainable desert urbanism",
              yearBCE: -2008,
              category: "sanitation"
            }
          ]
        },
        {
          id: "dubai-stormwater-2024",
          name: "Dubai $8 Billion Stormwater Network",
          description: "Following the catastrophic April 2024 floods—when 164 mm of rain fell at Dubai Airport in 24 hours (more than a year's average in a single day), the heaviest rainfall in 75 years—Dubai announced an $8 billion stormwater drainage network to be completed by 2033. This represents the largest single urban drainage investment in Middle East history.",
          historicalContext: "The April 16, 2024 deluge caused an estimated $2.9-3.4 billion in insurance losses, cancelled 1,244+ flights at the world's second-busiest airport, flooded Sheikh Zayed Road, suspended the Dubai Metro, and submerged entire neighborhoods. The event exposed critical gaps in Dubai's drainage infrastructure, which had been designed for a city receiving under 120 mm of annual rainfall. Climate analysis shows Dubai's average annual rainfall has increased 40% in recent decades, making extreme events more likely.",
          coordinates: { lat: 25.2048, lng: 55.2708 },
          artifacts: [
            {
              id: "dubai-stormwater-network",
              name: "Dubai Stormwater Drainage Network ($8B)",
              description: "Announced in June 2024 by Dubai ruler Sheikh Mohammed bin Rashid Al Maktoum, this $8 billion stormwater drainage network will be the most expensive urban drainage project in the Middle East. Designed to absorb more than 20 million cubic meters of water per day, the network will cover all areas of Dubai with construction beginning immediately and completion targeted for 2033. The system includes underground storage tunnels, pumping stations, outfall structures, and surface drainage channels designed to handle rainfall intensities far exceeding the April 2024 event. Modern hydraulic modeling software—including EPA SWMM5, Autodesk InfoWorks ICM, and Civil 3D with Storm and Sanitary Analysis (SSA)—plays a critical role in designing this infrastructure, enabling engineers to simulate extreme rainfall scenarios, optimize pipe network sizing, and model 1D/2D flood interactions across Dubai's complex urban terrain. InfoWorks ICM's integrated catchment modeling capability is particularly suited to projects of this scale, handling combined stormwater and wastewater networks with 2D overland flood analysis. The April 2024 storm (164-250 mm in 24 hours) provides invaluable calibration data for these hydraulic models, allowing engineers to validate designs against a real-world extreme event.",
              rarity: "legendary",
              historicalPeriod: "Modern (2024 - 2033)",
              significance: "$8 billion investment; 20+ million m³/day capacity; response to worst flooding in 75 years; modeled using EPA SWMM5 and Autodesk InfoWorks ICM",
              yearBCE: -2024,
              category: "canal"
            },
            {
              id: "dubai-flood-resilience",
              name: "Dubai Urban Flood Resilience Program",
              description: "In the aftermath of the April 2024 floods, the UAE government allocated 2 billion dirhams ($544.6 million) for immediate flood damage repair and launched a comprehensive urban flood resilience program. The program integrates multiple approaches: expanding underground stormwater storage capacity, upgrading pump stations, incorporating green infrastructure (permeable surfaces, bioswales, rain gardens) into new developments, and deploying real-time flood warning systems with IoT sensor networks. Engineers use Autodesk's suite of water infrastructure tools—Civil 3D for detailed drainage design and pipe network layout, InfoDrainage for site-scale hydraulic analysis including sustainable drainage systems (SuDS), and InfoWorks ICM for city-scale flood modeling with 1D/2D coupled analysis. The program also incorporates climate change projections, modeling scenarios where extreme rainfall events become 10-40% more intense by 2050 due to warming Persian Gulf sea surface temperatures. SWMM's Climate Adjustment Tool (SWMM-CAT) and InfoWorks ICM's scenario management capabilities enable engineers to stress-test designs against future climate conditions—a critical requirement for infrastructure with a 50+ year design life.",
              rarity: "epic",
              historicalPeriod: "Modern (2024 - Present)",
              significance: "2 billion dirham immediate allocation; integrates green infrastructure with gray; uses Autodesk InfoWorks ICM and Civil 3D for climate-adapted design",
              yearBCE: -2024,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "israel",
      name: "Israel",
      description: "Israel is arguably the world's most important water technology innovator of the modern era, having transformed a semi-arid nation with severely limited freshwater resources into an agricultural export powerhouse and global water technology leader. Facing existential water scarcity from its founding in 1948—with 60% of the country classified as desert and annual rainfall as low as 25 mm in the Negev—Israel had no choice but to innovate or perish. The results have been extraordinary: drip irrigation (invented by Simcha Blass and commercialized by Netafim in 1965) now serves 110+ countries and reduced agricultural water use by 50% while increasing crop yields. Israel recycles over 90% of its wastewater for agriculture—four times the rate of the next closest country (Spain at ~20%)—and operates five major Mediterranean desalination plants that now supply approximately 80% of the nation's domestic water. The ancient heritage is equally remarkable: Nabataean desert cisterns dating to 300 BCE, Hezekiah's Tunnel (700 BCE) carved through 533 meters of solid rock beneath Jerusalem, and the elaborate ritual baths (mikvaot) of the Second Temple period all demonstrate millennia of water engineering innovation in one of the world's most water-stressed regions.",
      position: [6, 0, -10],
      color: "#2196F3",
      era: "modern",
      dateRange: "1500 BCE - Present",
      locations: [
        {
          id: "negev-desert",
          name: "Negev Desert",
          description: "The Negev Desert covers over 13,000 km² (more than half of Israel's total land area) and receives as little as 25 mm of annual rainfall in its southern reaches. Despite these extreme conditions, the Negev has been the cradle of revolutionary water technologies—from ancient Nabataean runoff farming systems that sustained desert cities 2,000 years ago to modern drip irrigation that has transformed global agriculture.",
          historicalContext: "The Nabataeans (4th century BCE – 2nd century CE) developed sophisticated runoff agriculture in the Negev, channeling rare rainfall from large catchment areas into terraced fields through stone-lined channels. Their techniques sustained cities like Avdat, Shivta, and Haluza with populations of 10,000+ in areas receiving under 100 mm of annual rain. Modern Israeli settlers studied these ancient systems when developing the Negev in the 1950s-60s, and their insights helped inspire the drip irrigation revolution.",
          coordinates: { lat: 30.8, lng: 34.8 },
          artifacts: [
            {
              id: "drip-irrigation",
              name: "Drip Irrigation (Netafim)",
              description: "Drip irrigation—the slow, precise delivery of water directly to plant root zones through a network of emitters, pipes, and tubing—was developed by Israeli engineer Simcha Blass in the late 1950s after observing a tree growing larger than its neighbors near a leaking water pipe. Blass patented his emitter design and partnered with Kibbutz Hatzerim to found Netafim in 1965, launching commercial production. The technology reduces water consumption by 30-50% compared to flood or sprinkler irrigation while simultaneously increasing crop yields by 20-90%, because plants receive exactly the water they need at the root zone with minimal evaporation or runoff loss. By 2024, Netafim (acquired by Mexichem/Orbia for $1.9 billion in 2018) operates in 110+ countries, and drip irrigation is used on an estimated 12+ million hectares worldwide. The technology has been particularly transformative in arid regions of India, sub-Saharan Africa, and the American West, where water savings directly translate to food security. Israel's own agricultural sector now produces $3+ billion in annual exports despite farming in conditions that would be considered impossible by conventional standards.",
              rarity: "legendary",
              historicalPeriod: "Modern (1965 - Present)",
              significance: "Revolutionized global agriculture; used in 110+ countries on 12+ million hectares; reduces water use 30-50% while increasing yields 20-90%; $1.9 billion Netafim acquisition",
              yearBCE: -1965,
              category: "irrigation"
            },
            {
              id: "negev-cisterns",
              name: "Nabataean Negev Cisterns & Runoff Farms",
              description: "The Nabataeans, an ancient Arab people who controlled trade routes across the Negev and Jordanian deserts from the 4th century BCE to the 2nd century CE, developed remarkably sophisticated water harvesting systems that sustained thriving cities in areas receiving under 100 mm of annual rainfall. Their technique centered on large catchment areas (up to 30:1 ratio of catchment to cultivated land) where natural hillsides and stone-cleared slopes channeled rare rainfall through stone-lined channels into terraced agricultural plots and underground cisterns. At the UNESCO World Heritage sites of Avdat, Shivta, Haluza, and Mamshit, archaeologists have documented hundreds of bell-shaped cisterns carved into soft limestone bedrock, each capable of storing 50-200 cubic meters of water. These cisterns were plastered with waterproof lime mortar and covered with stone slabs to minimize evaporation. The Nabataean system was so effective that Israeli researchers in the 1950s-60s (notably Michael Evenari) reconstructed ancient Nabataean farms at Avdat and successfully grew crops using only the original 2,000-year-old water harvesting infrastructure.",
              rarity: "epic",
              historicalPeriod: "Nabataean Period (300 BCE - 200 CE)",
              significance: "Sustained desert cities of 10,000+ people in areas with under 100 mm rainfall; UNESCO World Heritage; 30:1 catchment ratios; reconstructed farms still functional after 2,000 years",
              yearBCE: 300,
              category: "dam"
            },
            {
              id: "nabataean-runoff-agriculture",
              name: "Nabataean Runoff Agriculture Revival",
              description: "In the 1950s and 1960s, Israeli botanist and ecologist Michael Evenari led groundbreaking research at Avdat in the central Negev, reconstructing ancient Nabataean runoff farms using the original 2,000-year-old stone channels and terraces. His team demonstrated that the ancient water harvesting systems could still support productive agriculture in an area receiving only 86 mm of average annual rainfall—proving that the Nabataean techniques were not lost knowledge but reproducible engineering. Evenari's research, published in his landmark book 'The Negev: The Challenge of a Desert' (1971), showed that the Nabataeans achieved catchment efficiencies of 20-40% on limestone slopes and could sustain orchards, vineyards, and field crops through careful water management. This work influenced modern water harvesting programs across the developing world, from sub-Saharan Africa to India, where millions of small farmers now use variations of ancient runoff-farming principles.",
              rarity: "rare",
              historicalPeriod: "Modern Research (1950s-1970s)",
              significance: "Proved 2,000-year-old Nabataean water systems still functional; influenced water harvesting programs across the developing world",
              yearBCE: -1958,
              category: "irrigation"
            }
          ]
        },
        {
          id: "sorek-plant",
          name: "Mediterranean Desalination Corridor",
          description: "Israel operates five major seawater reverse osmosis (SWRO) desalination plants along its Mediterranean coastline—Ashkelon (2005), Palmachim (2007), Hadera (2010), Sorek (2013), and Sorek B (2023)—collectively producing over 600 million cubic meters of freshwater annually and supplying approximately 80% of Israel's domestic water needs.",
          historicalContext: "Israel's turn to large-scale desalination was driven by a severe multi-year drought (1998-2002) that depleted the Sea of Galilee to dangerously low levels and threatened the country's primary freshwater source. The government launched an emergency desalination program that transformed Israel from a water-scarce nation facing crisis to one with a water surplus within 15 years. The Sorek plant, when completed in 2013, produced the world's cheapest desalinated water at $0.58 per cubic meter—a price point that made desalination economically competitive with natural freshwater sources for the first time.",
          coordinates: { lat: 31.9, lng: 34.7 },
          artifacts: [
            {
              id: "sorek-desalination",
              name: "Sorek Desalination Plant",
              description: "When it opened in 2013, the Sorek desalination plant near Rishon LeZion was the world's largest and most advanced seawater reverse osmosis (SWRO) facility, producing 624,000 cubic meters of freshwater per day—enough to supply 1.5 million people. Built by IDE Technologies at a cost of $400 million, Sorek pioneered several breakthrough technologies: 16-inch diameter RO membranes (versus the industry standard 8-inch), pressure-center design reducing energy consumption to just 3.5 kWh per cubic meter, and advanced energy recovery devices that recapture 97% of the pressure energy from the brine reject stream. The result was desalinated water at $0.58 per cubic meter—approximately half the cost of desalination just a decade earlier. Sorek B, completed in 2023 adjacent to the original plant, added another 200 million cubic meters of annual capacity, making the combined Sorek complex one of the largest desalination sites in the world. Israel's five Mediterranean plants collectively produce over 600 million cubic meters annually, supplying approximately 80% of domestic water consumption and transforming Israel from a water-scarce nation to one that actually exports water to neighboring Jordan.",
              rarity: "legendary",
              historicalPeriod: "Modern (2013 - Present)",
              significance: "World's largest SWRO plant at opening; $0.58/m³ (cheapest globally); 624,000 m³/day; 16-inch membranes; 97% energy recovery; Israel now supplies 80% of domestic water from desalination",
              yearBCE: -2013,
              category: "sanitation"
            },
            {
              id: "wastewater-recycling",
              name: "National Wastewater Recycling System (Shafdan)",
              description: "Israel recycles over 90% of its treated wastewater for agricultural irrigation—by far the highest rate in the world (the next closest country, Spain, recycles approximately 20%). The centerpiece of this system is the Shafdan (Dan Region Wastewater Treatment Plant) near Tel Aviv, which treats 370,000 cubic meters per day from 2.5 million residents, then recharges the treated effluent into a coastal sand aquifer where natural filtration further purifies the water over 6-12 months. The recovered water, known as Mekorot's 'Third Line,' is then pumped to the Negev Desert through a dedicated pipeline network, irrigating thousands of hectares of agriculture that would otherwise be impossible. This soil aquifer treatment (SAT) approach produces water quality that exceeds WHO drinking water standards for most parameters—though it is used exclusively for agriculture. Israel's national water utility, Mekorot, operates 250+ wastewater treatment plants across the country, and the recycled water now constitutes approximately 50% of all agricultural irrigation water nationally. This system effectively creates a circular water economy where urban wastewater becomes the desert's most valuable agricultural input.",
              rarity: "legendary",
              historicalPeriod: "Modern (1970s - Present)",
              significance: "90%+ wastewater reuse rate—4x the next closest country; Shafdan treats 370,000 m³/day; soil aquifer treatment exceeds WHO standards; recycled water = 50% of agricultural irrigation",
              yearBCE: -1970,
              category: "sanitation"
            }
          ]
        },
        {
          id: "jerusalem-ancient",
          name: "Jerusalem Ancient Water Systems",
          description: "Jerusalem's survival as a major city for over 3,000 years has always depended on ingenious water engineering solutions. Built on rocky hills with no river, the city relied on springs, tunnels, cisterns, and aqueducts to sustain populations that reached 80,000+ during the Second Temple period.",
          historicalContext: "The Gihon Spring on the eastern slope of the City of David was Jerusalem's only perennial water source, making its control essential to the city's survival. Every major power that ruled Jerusalem—from the Jebusites to the Israelites, Romans, Crusaders, Ottomans, and British—invested in water infrastructure to sustain the holy city.",
          coordinates: { lat: 31.7767, lng: 35.2345 },
          artifacts: [
            {
              id: "hezekiahs-tunnel",
              name: "Hezekiah's Tunnel (Siloam Tunnel)",
              description: "One of the most remarkable ancient engineering achievements, Hezekiah's Tunnel was carved through 533 meters of solid limestone bedrock beneath the City of David around 700 BCE, during the reign of King Hezekiah of Judah. The tunnel redirected water from the vulnerable Gihon Spring (outside the city walls) to the Pool of Siloam (inside the walls) in preparation for the Assyrian siege by Sennacherib in 701 BCE. Two teams of miners carved toward each other from opposite ends, meeting in the middle with only minor course corrections—an extraordinary feat of surveying and engineering for the 8th century BCE. The famous Siloam Inscription, discovered in 1880, describes the dramatic moment when the two tunneling teams heard each other's pickaxes through the remaining rock. The tunnel maintains a gradient of just 0.06% over its length, dropping only 30 cm from inlet to outlet, ensuring a continuous gravity-fed flow. Still intact after 2,700 years, visitors can wade through the tunnel today—water still flows from the Gihon Spring through Hezekiah's original channel.",
              rarity: "legendary",
              historicalPeriod: "Iron Age (c. 700 BCE)",
              significance: "533 m tunnel carved from both ends through solid rock in 700 BCE; 0.06% gradient; still flowing after 2,700 years; Siloam Inscription is earliest known Hebrew monumental text",
              yearBCE: 700,
              category: "aqueduct"
            },
            {
              id: "jerusalem-aqueducts",
              name: "Jerusalem Aqueducts (Solomon's Pools)",
              description: "A system of aqueducts stretching over 20 km from Solomon's Pools near Bethlehem to the Temple Mount in Jerusalem, built in stages from the Hasmonean period (2nd century BCE) through the Roman and Ottoman eras. The three large reservoirs known as Solomon's Pools (though likely constructed in the Hellenistic or Roman periods) had a combined capacity of approximately 290,000 cubic meters. The lower aqueduct followed a sinuous 21 km route maintaining a barely perceptible gradient to deliver water by gravity to the Temple Mount, where it supplied the enormous ritual purification needs of the Second Temple. The upper aqueduct, built by the Romans, followed a more direct 40 km route using inverted siphons to cross valleys. Pontius Pilate famously used Temple treasury funds to finance one of these aqueduct extensions, provoking public outrage described by the historian Josephus. Sections of both aqueducts are still visible today, and the Ottoman-era restoration (16th century) continued to supply Jerusalem's Old City into the early 20th century.",
              rarity: "epic",
              historicalPeriod: "Hasmonean through Ottoman (2nd century BCE - 20th century CE)",
              significance: "20+ km aqueduct system supplying Jerusalem for 2,000+ years; Solomon's Pools = 290,000 m³ capacity; inverted siphon technology; served the Temple Mount",
              yearBCE: 150,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "national-water-carrier",
          name: "National Water Carrier",
          description: "Israel's National Water Carrier (Movil Artzi HaMayim), completed in 1964, is the largest water infrastructure project in the country's history—a 130 km pipeline and canal system transporting water from the Sea of Galilee in the north to the populated center and arid Negev Desert in the south.",
          historicalContext: "Conceived during the British Mandate period and planned throughout the 1950s, the National Water Carrier was Israel's answer to a fundamental geographic mismatch: 80% of the country's water resources were in the north, but 60% of the arable land was in the south. The project was politically contentious—Syria and Jordan objected to Israel's diversion of Jordan River basin water, contributing to regional tensions that preceded the 1967 Six-Day War.",
          coordinates: { lat: 32.5, lng: 35.0 },
          artifacts: [
            {
              id: "national-water-carrier",
              name: "National Water Carrier of Israel",
              description: "Completed in 1964, the National Water Carrier is a 130 km integrated system of giant pipelines (up to 2.74 meters in diameter), open canals, tunnels, reservoirs, and pumping stations that transports water from the Sea of Galilee (Lake Kinneret, at 209 meters below sea level) to the populated coastal plain and the Negev Desert. The system first lifts water 400+ meters from the Sea of Galilee up to the Tsalmon Reservoir using massive pumps consuming 7% of Israel's total electricity, then distributes it southward through a combination of gravity flow and pressurized pipelines. At peak operation, the carrier transported 400+ million cubic meters annually—approximately one-third of Israel's total water consumption. The project employed 3,000+ workers over its 10-year construction period and cost $150 million (equivalent to $1.4 billion in 2024 dollars). Since Israel's desalination revolution began in the 2000s, the National Water Carrier has been partially reversed in some years—desalinated Mediterranean water now flows northward to replenish the Sea of Galilee, an ironic reversal that speaks to how dramatically Israel's water equation has changed.",
              rarity: "legendary",
              historicalPeriod: "Modern (1964 - Present)",
              significance: "130 km water carrier; pumps water 400+ m uphill; once supplied 1/3 of Israel's water; now partially reversed to replenish Sea of Galilee from desalination",
              yearBCE: -1964,
              category: "canal"
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
              id: "moorish-noria-wheel",
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
              category: "aqueduct",
              unesco: { siteName: "Aflaj Irrigation Systems of Oman", yearListed: 2006 },
              stillWorking: { age: "2,500 years", status: "Still flowing" }
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
            },
            {
              id: "park-four-waters",
              name: "Park of Four Waters",
              description: "Ball court reservoir complex at the Pueblo Grande site where a large ball court was repurposed as a water collection basin. The depression captured rainfall and canal overflow, storing water for the surrounding community. This dual-use of ceremonial and hydraulic infrastructure demonstrates Hohokam ingenuity in arid resource management.",
              rarity: "epic",
              historicalPeriod: "900 - 1400 CE",
              significance: "Rare example of ceremonial architecture doubling as water infrastructure",
              yearBCE: -900,
              category: "dam"
            },
            {
              id: "hohokam-check-dams",
              name: "Hohokam Check Dams",
              description: "Low stone barriers built across desert washes to slow and capture seasonal runoff for ak-chin (dry mouth) farming. These structures allowed floodwater to spread across planting fields, depositing moisture and nutrients. Hundreds of check dams have been documented across the Sonoran Desert.",
              rarity: "rare",
              historicalPeriod: "300 - 1450 CE",
              significance: "Enabled farming in areas too remote for canal irrigation using ephemeral desert runoff",
              yearBCE: -500,
              category: "dam"
            },
            {
              id: "snaketown-wells",
              name: "Snaketown Well System",
              description: "Hand-dug wells reaching 5 meters deep at Snaketown, one of the largest Hohokam settlements. These wells tapped shallow groundwater recharged by canal seepage and river proximity. The wells supplemented canal water during dry periods and provided reliable domestic water supply.",
              rarity: "rare",
              historicalPeriod: "300 - 1100 CE",
              significance: "Among the earliest known groundwater wells in the American Southwest",
              yearBCE: -300,
              category: "fountain"
            },
            {
              id: "hohokam-headgates",
              name: "Canal Headgates",
              description: "Woven mat and brush diversion structures placed at canal intakes to regulate water flow from the Salt and Gila Rivers. These temporary but effective gates could be raised or lowered to control the volume of water entering canal systems. Seasonal maintenance was a communal effort requiring coordinated labor.",
              rarity: "rare",
              historicalPeriod: "600 - 1450 CE",
              significance: "Earliest known water diversion control structures in North America",
              yearBCE: -600,
              category: "canal"
            },
            {
              id: "hohokam-roasting-pits",
              name: "Hohokam Roasting Pits",
              description: "Large pit features used for water-heated food processing, particularly for agave and mesquite. Water was poured over heated rocks to generate steam for slow-cooking plant foods. These communal processing facilities could serve hundreds of people and required reliable water access.",
              rarity: "rare",
              historicalPeriod: "500 - 1400 CE",
              significance: "Demonstrates water's role beyond irrigation in Hohokam daily life",
              yearBCE: -500,
              category: "fountain"
            },
            {
              id: "platform-mound-reservoirs",
              name: "Platform Mound Reservoirs",
              description: "Elevated platform mounds at sites like Mesa Grande featured associated water storage reservoirs controlled by elite administrators. These reservoirs received canal water and redistributed it to surrounding communities, linking political authority with water control. The mound-reservoir complexes represent centralized water management in later Hohokam society.",
              rarity: "epic",
              historicalPeriod: "1100 - 1450 CE",
              significance: "Evidence of elite water control and social stratification through hydraulic management",
              yearBCE: -1100,
              category: "dam"
            },
            {
              id: "casa-grande-junction",
              name: "Casa Grande Canal Junction",
              description: "The largest known canal intersection in the Hohokam system, located near Casa Grande where multiple major canals converged to distribute water across a vast agricultural landscape. Engineering features included gradient controls and overflow channels to manage the merging of water flows from different source canals.",
              rarity: "legendary",
              historicalPeriod: "1100 - 1450 CE",
              significance: "Most complex canal intersection in pre-Columbian North America",
              yearBCE: -1100,
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
      id: "ancient-siberia",
      name: "Ancient Siberia",
      description: "From Denisova Cave's 300,000-year water management to Pazyryk frozen tombs - the deepest prehistory of water in the world's largest landmass",
      position: [18, 0, -10],
      color: "#8D6E63",
      era: "ancient",
      dateRange: "300000 BCE - 1600 CE",
      locations: [
        {
          id: "altai-prehistoric",
          name: "Altai Mountains Prehistoric Sites",
          description: "Where three human species managed water across 270,000 years",
          historicalContext: "Denisova Cave and Pazyryk burial mounds - the deepest water prehistory",
          coordinates: { lat: 51.4, lng: 84.7 },
          artifacts: [
            {
              id: "denisova-cave-water",
              name: "Denisova Cave Water Management",
              description: "Three human species (Denisovans, Neanderthals, Homo sapiens) managed the same spring-fed water source across 270,000 years - directing drip water, managing seasonal flooding",
              rarity: "legendary",
              historicalPeriod: "300,000-30,000 BCE",
              significance: "Three human species managing the same water source - deepest water management in Siberia",
              yearBCE: 300000,
              category: "fountain"
            },
            {
              id: "pazyryk-frozen-tombs",
              name: "Pazyryk Frozen Tomb Preservation",
              description: "Scythian burial mounds using permafrost to preserve tomb contents for 2,500 years. Stone cairns promoted ice lens formation - deliberate cryopreservation technology",
              rarity: "legendary",
              historicalPeriod: "500-300 BCE",
              significance: "Deliberate use of permafrost for preservation - tattooed bodies, horses, textiles preserved 2,500 years",
              yearBCE: 500,
              category: "dam"
            },
            {
              id: "altai-glacier-irrigation",
              name: "Altai Glacier-Fed Irrigation",
              description: "High-altitude irrigation channels directing glacier and snowmelt to alpine meadows at elevations up to 4,500m for hay and livestock",
              rarity: "rare",
              historicalPeriod: "Ancient - Present",
              significance: "High-altitude irrigation at Siberia's highest mountains",
              yearBCE: 2000,
              category: "irrigation"
            },
            {
              id: "altai-gold-panning",
              name: "Altai River Gold Panning",
              description: "Gold extraction from Altai rivers using flowing water to separate gold from sediment. Traditional techniques predating Russian arrival - a major gold source for Scythian civilizations",
              rarity: "rare",
              historicalPeriod: "Ancient - Present",
              significance: "Gold extraction using river water - ancient Siberian mining technology",
              yearBCE: 3000,
              category: "irrigation"
            }
          ]
        },
        {
          id: "paleolithic-camps",
          name: "Paleolithic Siberian Water Camps",
          description: "Mammoth hunter camps at river terraces during the Last Glacial Maximum",
          historicalContext: "Surviving the coldest period in human history beside Siberian rivers",
          coordinates: { lat: 52.8, lng: 103.6 },
          artifacts: [
            {
              id: "malta-mammoth-camp",
              name: "Mal'ta-Buret' Mammoth Hunter Water Camps",
              description: "Semi-subterranean mammoth-bone houses positioned at Angara River terraces above spring flood level. Fish consumption evidence during Last Glacial Maximum at -50°C",
              rarity: "legendary",
              historicalPeriod: "24,000 BCE",
              significance: "Surviving beside a river during the coldest period in human history",
              yearBCE: 24000,
              category: "dam"
            },
            {
              id: "yana-arctic-camp",
              name: "Yana RHS Arctic Camp Water",
              description: "Northernmost Paleolithic site in the world (71°N). Mammoth-ivory tools at a river confluence. Ice fishing, snow melting, and river ice reading at extreme latitude 32,000 years ago",
              rarity: "legendary",
              historicalPeriod: "32,000 BCE",
              significance: "Oldest known human habitation in the Arctic - water survival at 71°N",
              yearBCE: 32000,
              category: "irrigation"
            },
            {
              id: "berelekh-mammoth-site",
              name: "Berelekh Mammoth Kill Site",
              description: "Mammoth bone accumulation at a river crossing point on the Indigirka River. Hunters used the river as a natural barrier to drive mammoths into water. Over 150 mammoth skeletons",
              rarity: "epic",
              historicalPeriod: "13,000 BCE",
              significance: "Using Siberian rivers as mammoth hunting infrastructure",
              yearBCE: 13000,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "lake-baikal",
      name: "Lake Baikal Cultures",
      description: "20% of Earth's unfrozen surface freshwater - the deepest, oldest lake sustaining unique water cultures for 8,000+ years",
      position: [17, 0, -7],
      color: "#1565C0",
      era: "ancient",
      dateRange: "8000 BCE - Present",
      locations: [
        {
          id: "baikal-shores",
          name: "Lake Baikal Shoreline Communities",
          description: "Settlements around the world's deepest lake (1,642m) holding more water than all five Great Lakes combined",
          historicalContext: "8,000+ years of human habitation around Earth's largest freshwater reserve",
          coordinates: { lat: 53.5, lng: 108.0 },
          artifacts: [
            {
              id: "baikal-neolithic-fishing",
              name: "Baikal Neolithic Fishing Settlements",
              description: "Permanent settlements along Baikal's shores with stone net sinkers, bone fishhooks, and harpoons for fishing the world's deepest lake. Species unique to Baikal required specialized deep-lake knowledge",
              rarity: "epic",
              historicalPeriod: "8000-5000 BCE",
              significance: "Fishing the deepest and oldest lake on Earth - unique endemic species",
              yearBCE: 8000,
              category: "irrigation"
            },
            {
              id: "baikal-seal-hunting",
              name: "Baikal Seal (Nerpa) Hunting Water Knowledge",
              description: "The Baikal seal is the only exclusively freshwater seal on Earth. Hunting requires understanding ice conditions, breathing hole locations, and seasonal movement patterns",
              rarity: "legendary",
              historicalPeriod: "8000 BCE - Present",
              significance: "Hunting the world's only freshwater seal - unique water-ice knowledge",
              yearBCE: 8000,
              category: "irrigation"
            },
            {
              id: "baikal-ice-road",
              name: "Baikal Ice Road Network",
              description: "Lake Baikal freezes 1-2m thick from January to May becoming an 80km highway connecting communities separated by mountains. Routes avoid thin ice at river inlets and hot spring areas",
              rarity: "epic",
              historicalPeriod: "Ancient - Present",
              significance: "80km ice highway across the world's largest freshwater lake",
              yearBCE: 3000,
              category: "canal"
            },
            {
              id: "baikal-hot-springs",
              name: "Baikal Hot Spring Management",
              description: "Over 300 hot springs around Lake Baikal managed by Buryat people for bathing, healing, and winter water supply. Springs at Arshan, Goryachinsk, and Khakusy used for thousands of years",
              rarity: "rare",
              historicalPeriod: "Ancient - Present",
              significance: "Geothermal water management surrounding the world's largest freshwater lake",
              yearBCE: 3000,
              category: "fountain"
            },
            {
              id: "baikal-storm-knowledge",
              name: "Baikal Storm Knowledge (Sarma Wind)",
              description: "Baikal generates sudden violent storms - the sarma wind produces 6m waves in minutes. Navigation requires reading cloud formation, wind shifts, and wave patterns to predict storms",
              rarity: "epic",
              historicalPeriod: "Ancient - Present",
              significance: "Micro-climate water-weather knowledge for the world's most unpredictable lake",
              yearBCE: 3000,
              category: "canal"
            },
            {
              id: "angara-ice-free-fishing",
              name: "Angara River Ice-Free Fishing",
              description: "The Angara (Baikal's only outlet) flows at 4°C staying ice-free for 15+km downstream even at -40°C. Permanent open water provides year-round fishing when all other water is frozen",
              rarity: "rare",
              historicalPeriod: "Ancient - Present",
              significance: "Year-round fishing at the only ice-free water in winter",
              yearBCE: 5000,
              category: "irrigation"
            },
            {
              id: "baikal-water-protection",
              name: "Modern Baikal Water Protection",
              description: "UNESCO World Heritage (1996). Baikalsk Pulp Mill closed 2013 after 47 years of pollution. Ongoing threats from tourism, agriculture, and proposed Mongolian dam on the Selenga River",
              rarity: "epic",
              historicalPeriod: "1996 - Present",
              significance: "Protecting the planet's largest freshwater reserve - 20% of Earth's surface freshwater",
              yearBCE: -1996,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "siberian-river-peoples",
      name: "Siberian River Peoples",
      description: "Khanty, Ket, Yakut, Nanai, Nivkh, Yukaghir, and Itelmen - masters of the world's greatest rivers in the harshest conditions",
      position: [20, 0, -8],
      color: "#90CAF9",
      era: "ancient",
      dateRange: "30000 BCE - Present",
      locations: [
        {
          id: "ob-river-peoples",
          name: "Ob River (Khanty, Mansi)",
          description: "World's 7th longest river system - home to the most sophisticated freshwater fish sorting technology",
          historicalContext: "Khanty-Mansi peoples managing the Ob and its tributaries for 7,000+ years",
          coordinates: { lat: 61.0, lng: 69.0 },
          artifacts: [
            {
              id: "khanty-mansi-weirs",
              name: "Khanty-Mansi Fish Weir Systems (Zapor)",
              description: "Elaborate wooden fish weirs across Ob tributaries with multi-chamber designs sorting different fish species. Weirs rebuilt annually after spring ice breakup. Some sites used continuously for 7,000 years",
              rarity: "epic",
              historicalPeriod: "5000 BCE - Present",
              significance: "Most sophisticated freshwater fish sorting technology in northern Eurasia",
              yearBCE: 5000,
              category: "dam"
            },
            {
              id: "khanty-dugout-canoe",
              name: "Khanty Dugout Canoe (Oblas)",
              description: "Single-log dugout canoes from Siberian pine or cedar with shallow draft for navigating Ob tributaries. Some had outriggers for windy conditions",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "River navigation across the world's 7th longest river system",
              yearBCE: 3000,
              category: "canal"
            },
            {
              id: "khanty-sacred-rivers",
              name: "Khanty Sacred River Sites (Yalpyng)",
              description: "River confluences, rapids, and deep pools considered sacred. Offerings made to water spirits before fishing or crossing. Some sacred water sites revered for thousands of years",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Sacred water geography across Western Siberia",
              yearBCE: 3000,
              category: "fountain"
            },
            {
              id: "ob-spring-breakup",
              name: "Ob River Spring Breakup Survival",
              description: "The Ob's spring ice breakup creates instant floods with water rising meters in hours. Communities positioned above maximum flood level, maintained escape routes, and read ice to predict breakup timing",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Surviving one of the most violent spring floods on Earth",
              yearBCE: 5000,
              category: "dam"
            }
          ]
        },
        {
          id: "yenisei-river-peoples",
          name: "Yenisei River (Ket, Selkup)",
          description: "Home to the Ket - last speakers of a unique language family with unmatched water vocabulary",
          historicalContext: "Ket and Selkup peoples on one of the world's mightiest rivers",
          coordinates: { lat: 58.0, lng: 92.0 },
          artifacts: [
            {
              id: "ket-river-navigation",
              name: "Ket River Navigation Knowledge",
              description: "The Ket people - last surviving speakers of the Yeniseian language family - navigate braided river channels with 15+m seasonal water level variation. Dozens of unique words for water conditions",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Last speakers of a unique language with water vocabulary found nowhere else",
              yearBCE: 3000,
              category: "canal"
            },
            {
              id: "selkup-fish-smoking",
              name: "Selkup Fish-Smoking Water Management",
              description: "Fish processing requiring precise moisture management: gutted in clean river water, partially dried, then smoked. Water content must reach exactly 35-40% for preservation",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Precise moisture management for food preservation in Siberia",
              yearBCE: 2000,
              category: "irrigation"
            },
            {
              id: "yenisei-hydro-cascade",
              name: "Yenisei Hydroelectric Cascade",
              description: "Four massive dams: Krasnoyarsk (6,000 MW), Sayano-Shushenskaya (6,400 MW), Mainskaya (321 MW). Sayano-Shushenskaya suffered catastrophic turbine failure in 2009 killing 75 workers",
              rarity: "legendary",
              historicalPeriod: "1955-1985 CE",
              significance: "Largest hydroelectric cascade in Russia - including Russia's worst dam disaster",
              yearBCE: -1985,
              category: "dam"
            }
          ]
        },
        {
          id: "lena-river-peoples",
          name: "Lena River (Yakut, Evenki, Yukaghir)",
          description: "One of the world's largest Arctic river deltas - 32,000 km2 of channels",
          historicalContext: "Yakut, Evenki, and endangered Yukaghir cultures along the mighty Lena",
          coordinates: { lat: 62.0, lng: 129.7 },
          artifacts: [
            {
              id: "yakutian-ice-houses",
              name: "Yakutian Permafrost Cellars (Buluus)",
              description: "Underground storage chambers carved into permanently frozen ground, maintaining -10°C year-round without energy",
              rarity: "epic",
              historicalPeriod: "Ancient - Present",
              significance: "Zero energy refrigeration; food preserved for years",
              yearBCE: 5000,
              category: "dam"
            },
            {
              id: "yakut-alaas-lakes",
              name: "Yakut Alaas Lake Management",
              description: "Thermokarst depressions managed for fishing, livestock, and irrigation. Channel systems connected alaas lakes. Now threatened by accelerating permafrost thaw",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Thermokarst landscape water management - unique to permafrost regions",
              yearBCE: 2000,
              category: "irrigation"
            },
            {
              id: "yakut-ice-architecture",
              name: "Yakut Ice Architecture (Balaghan)",
              description: "Traditional winter houses with walls of clay and cow dung freezing solid. Windows made of thin river ice providing light. The building literally uses frozen water as construction material",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Architecture using frozen water as building material",
              yearBCE: 1500,
              category: "dam"
            },
            {
              id: "lena-delta-navigation",
              name: "Lena River Delta Navigation",
              description: "Navigation through one of the world's largest river deltas (32,000 km2) with thousands of channels. Different navigation knowledge for ice travel vs water travel across 7-month frozen period",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Navigating one of the world's largest Arctic river deltas",
              yearBCE: 3000,
              category: "canal"
            },
            {
              id: "yukaghir-river-people",
              name: "Yukaghir River People",
              description: "One of the smallest indigenous groups (<2,000 people) organized entirely around the Kolyma River. Summer fish camps, winter caribou hunting at river crossings. Language with extensive water vocabulary at risk of extinction",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Endangered water culture - language and knowledge at risk of extinction",
              yearBCE: 3000,
              category: "canal"
            },
            {
              id: "lena-pillars-erosion",
              name: "Lena Pillars Water Erosion (UNESCO)",
              description: "Dramatic rock columns 150-300m tall along the Lena River carved by 500,000 years of water erosion and freeze-thaw cycles. Used as navigation landmarks and sacred sites for millennia",
              rarity: "legendary",
              historicalPeriod: "Natural/Cultural",
              significance: "UNESCO World Heritage - landscape created by 500,000 years of water and ice",
              yearBCE: 10000,
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
            },
            {
              id: "evenki-river-knowledge",
              name: "Evenki River Crossing Knowledge",
              description: "Extraordinary knowledge of river systems across millions of km2 of taiga encoded in oral tradition",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Navigation knowledge spanning the world's largest forest",
              yearBCE: 3000,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "amur-river-peoples",
      name: "Amur River Peoples (Nanai, Ulchi, Nivkh)",
      description: "Fish-skin waterproofing, salmon management, and river-ocean-ice interface mastery on Asia's greatest Pacific salmon river",
      position: [22, 0, -6],
      color: "#4DB6AC",
      era: "ancient",
      dateRange: "5000 BCE - Present",
      locations: [
        {
          id: "amur-lower",
          name: "Lower Amur & Sakhalin",
          description: "Where river meets ocean meets ice - the most complex water interface in Asia",
          historicalContext: "Nanai, Ulchi, and Nivkh peoples mastering freshwater-saltwater-ice transitions",
          coordinates: { lat: 52.0, lng: 135.0 },
          artifacts: [
            {
              id: "nanai-fish-skin",
              name: "Nanai Fish-Skin Waterproofing",
              description: "Waterproof clothing and containers from salmon skin - robes, boots, bags, and boat covers. Naturally waterproof and remarkably durable. Unique to the Amur River peoples",
              rarity: "legendary",
              historicalPeriod: "Traditional",
              significance: "Waterproof technology from fish skin - found nowhere else on Earth",
              yearBCE: 3000,
              category: "sanitation"
            },
            {
              id: "nanai-salmon-management",
              name: "Nanai Amur River Salmon Management",
              description: "Managing salmon at specific river locations: fish weirs at narrows, smoking camps at traditional sites, and territorial fishing rights governed by clan law. Annual salmon run organized the entire calendar",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Salmon management on Asia's greatest Pacific salmon river",
              yearBCE: 3000,
              category: "irrigation"
            },
            {
              id: "nivkh-tidal-river",
              name: "Nivkh Tidal-River Fishing (Sakhalin)",
              description: "The Nivkh people of Sakhalin Island managed the river-ocean transition zone. Understanding tidal influence on river levels, salmon behavior at the interface, and ice formation in brackish water",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "River-ocean-ice interface management - three water phases in one location",
              yearBCE: 3000,
              category: "irrigation"
            },
            {
              id: "ulchi-birchbark-boats",
              name: "Ulchi Birchbark Boat Navigation",
              description: "Large birchbark boats (up to 8m) for navigating the wide, powerful lower Amur with strong currents. Some boats had sails. Knowledge of channels, sandbars, and seasonal flooding essential",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Large-scale birchbark boat navigation on one of Asia's greatest rivers",
              yearBCE: 3000,
              category: "canal"
            },
            {
              id: "amur-flood-management",
              name: "Amur River Flood Management",
              description: "The Amur experiences catastrophic floods - 2013 flood displaced 100,000+ people. Traditional communities positioned above max flood level. Climate change increasing flood magnitude",
              rarity: "epic",
              historicalPeriod: "Traditional - Present",
              significance: "Managing floods on one of Asia's most flood-prone rivers",
              yearBCE: 3000,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "kamchatka-peninsula",
      name: "Kamchatka Peninsula",
      description: "Most productive wild salmon rivers in Asia, 2,000+ hot springs, and 30 active volcanoes - where fire meets water on the Pacific Ring of Fire",
      position: [24, 0, -8],
      color: "#FF7043",
      era: "ancient",
      dateRange: "5000 BCE - Present",
      locations: [
        {
          id: "kamchatka-rivers",
          name: "Kamchatka River Systems",
          description: "Last intact wild salmon rivers in Asia - largely undammed",
          historicalContext: "Itelmen people managing the most productive salmon rivers on the continent",
          coordinates: { lat: 56.0, lng: 160.0 },
          artifacts: [
            {
              id: "itelmen-salmon-engineering",
              name: "Itelmen Salmon River Engineering",
              description: "Stone and wooden weirs managing the most productive wild salmon rivers in Asia. Smoking camps and seasonal fishing at specific river features. Rivers remain largely undammed - one of the last intact wild salmon systems",
              rarity: "legendary",
              historicalPeriod: "Traditional",
              significance: "Managing the most productive wild salmon rivers in Asia - still largely intact",
              yearBCE: 3000,
              category: "irrigation"
            },
            {
              id: "kamchatka-hot-springs",
              name: "Kamchatka Hot Spring Culture",
              description: "Over 2,000 hot springs and 30 active volcanoes. Springs used for bathing, cooking (boiling food in hot pools), and winter warmth. Valley of Geysers has 90+ geysers - second-largest geyser field after Yellowstone",
              rarity: "epic",
              historicalPeriod: "Traditional - Present",
              significance: "Hot spring water culture on the Pacific Ring of Fire",
              yearBCE: 3000,
              category: "fountain"
            },
            {
              id: "kuril-maritime-water",
              name: "Kuril Islands Maritime Navigation",
              description: "1,300km island chain between Kamchatka and Japan. Navigation in fog, volcanic currents, tsunamis, and storms. Understanding of the Oyashio Current essential for survival",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Maritime navigation in the Pacific's most dangerous island chain",
              yearBCE: 3000,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "siberian-tundra-peoples",
      name: "Siberian Tundra & Arctic Coast Peoples",
      description: "Nganasan, Dolgan, Nenets, and Chukchi - surviving at the edge of the habitable world through ice mastery",
      position: [19, 0, -12],
      color: "#B3E5FC",
      era: "ancient",
      dateRange: "10000 BCE - Present",
      locations: [
        {
          id: "taimyr-peninsula",
          name: "Taimyr Peninsula (Nganasan, Dolgan)",
          description: "Northernmost indigenous peoples in Eurasia - 74°N latitude",
          historicalContext: "The Nganasan are the northernmost people in Eurasia, living on the Taimyr Peninsula",
          coordinates: { lat: 74.0, lng: 100.0 },
          artifacts: [
            {
              id: "nganasan-ice-fishing",
              name: "Nganasan Lake Ice Fishing",
              description: "The northernmost indigenous people in Eurasia fish through lake ice during 9-month winters. Holes maintained in 2+m thick ice. Knowledge of fish behavior beneath ice across depths, temperatures, and moon phases",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Fishing through the thickest freshwater ice inhabited by humans",
              yearBCE: 5000,
              category: "irrigation"
            },
            {
              id: "nganasan-meltwater-navigation",
              name: "Nganasan Spring Meltwater Navigation",
              description: "During brief spring thaw the tundra becomes a vast shallow lake. Travel by boat across flooded tundra - landscape frozen for 9 months, underwater for 2 months. Navigate by memorized underwater topography",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Navigating a landscape that transforms from solid to liquid annually",
              yearBCE: 5000,
              category: "canal"
            },
            {
              id: "dolgan-balok-water",
              name: "Dolgan Balok (Mobile House) Water Design",
              description: "Small wooden house on sled runners pulled by reindeer with waterproof roof, elevated floor above snow and meltwater, positioned relative to wind to prevent snow drift. The only mobile house designed for Arctic tundra water conditions",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Mobile architecture for Arctic water conditions - unique to the Dolgans",
              yearBCE: 1000,
              category: "dam"
            },
            {
              id: "chukchi-ice-water",
              name: "Chukchi Sea Ice Water Harvesting",
              description: "Harvesting freshwater pockets from multi-year sea ice as salt is expelled during freezing",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Extracting freshwater from the frozen ocean",
              yearBCE: 5000,
              category: "irrigation"
            },
            {
              id: "nenets-migration-water",
              name: "Nenets Spring Migration Water Knowledge",
              description: "Annual 1,000+ km migration with 200,000+ reindeer requires intimate knowledge of water sources, river crossings, and seasonal ice conditions",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Water knowledge for the world's longest pastoral migration",
              yearBCE: 3000,
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
              significance: "30,000+ km network; supports 80-ton trucks; critical infrastructure",
              yearBCE: 5000,
              category: "canal"
            },
            {
              id: "buluus-ice",
              name: "Buluus Natural Ice Springs",
              description: "Natural ice formations staying frozen through summer (+30°C), used as community refrigerators and sacred sites",
              rarity: "rare",
              historicalPeriod: "Ancient - Present",
              significance: "Free summer refrigeration; navigation landmarks; still used today",
              yearBCE: 10000,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "modern-siberia",
      name: "Modern Siberian Water Engineering",
      description: "Oil-water management, Norilsk pollution, permafrost thaw crisis, Trans-Siberian railway, and the Northern Sea Route",
      position: [20, 0, -10],
      color: "#546E7A",
      era: "modern",
      dateRange: "1700 CE - Present",
      locations: [
        {
          id: "modern-siberia-challenges",
          name: "Modern Siberia Water Challenges",
          description: "From the world's largest oil fields to the worst Arctic pollution",
          historicalContext: "Industrial and climate challenges across 13.1 million km2",
          coordinates: { lat: 60.0, lng: 105.0 },
          artifacts: [
            {
              id: "western-siberia-oil-water",
              name: "Western Siberia Oil-Water Management",
              description: "60%+ of Russia's oil from Western Siberia requires managing produced water, injection water, and environmental contamination. Samotlor oil field produces 7x more water than oil. Over 1 million km2 of wetland affected",
              rarity: "epic",
              historicalPeriod: "1960s - Present",
              significance: "Largest oil-water management challenge in the world",
              yearBCE: -1965,
              category: "sanitation"
            },
            {
              id: "norilsk-water-pollution",
              name: "Norilsk Arctic Water Disaster",
              description: "Most polluted city in Russia. Daldykan River ran blood-red in 2016 from nickel discharge. 2020 diesel spill released 21,000 tonnes into Arctic rivers. Most severe industrial water contamination in the Arctic",
              rarity: "legendary",
              historicalPeriod: "1935 - Present",
              significance: "Most polluted Arctic city - industrial water contamination at continental scale",
              yearBCE: -1935,
              category: "sanitation"
            },
            {
              id: "trans-siberian-water",
              name: "Trans-Siberian Railway Water Engineering",
              description: "9,289km railway requiring river crossings (Ob, Yenisei), permafrost track management, and water supply towers every 20-40km across waterless steppe for steam locomotives",
              rarity: "legendary",
              historicalPeriod: "1891-1916 CE",
              significance: "Longest railway in the world - water the primary engineering challenge",
              yearBCE: -1916,
              category: "canal"
            },
            {
              id: "yakutsk-permafrost-city",
              name: "Yakutsk Permafrost City Engineering",
              description: "Largest city on permafrost (350,000 people). All buildings on 1.5-3m stilts. Water and sewer in above-ground insulated utilidors. Ground beneath is -10°C year-round",
              rarity: "legendary",
              historicalPeriod: "1632 - Present",
              significance: "Largest city on permafrost - every building a water engineering challenge",
              yearBCE: -1632,
              category: "sanitation"
            },
            {
              id: "permafrost-thaw-crisis",
              name: "Siberian Permafrost Thaw Crisis",
              description: "11 million km2 of permafrost thawing at accelerating rates. Building collapse, new thermokarst lakes, methane release, riverbank erosion. 2020 Norilsk fuel spill caused by tank collapse from permafrost thaw. Cost estimated $50-150 billion by 2050",
              rarity: "legendary",
              historicalPeriod: "2000s - Present",
              significance: "Permafrost thaw threatening $50-150 billion in infrastructure",
              yearBCE: -2000,
              category: "dam"
            },
            {
              id: "northern-sea-route",
              name: "Northern Sea Route",
              description: "5,600km Arctic coast route increasingly navigable due to ice loss. Nuclear icebreakers (Arktika-class) break 3m ice. Russia plans year-round Arctic shipping by 2035",
              rarity: "epic",
              historicalPeriod: "1932 - Present",
              significance: "Opening of Arctic shipping route - geopolitical water transformation",
              yearBCE: -1932,
              category: "canal"
            },
            {
              id: "tuvan-irrigation",
              name: "Tuvan Mountain Irrigation",
              description: "Small-scale gravity irrigation in southern Siberian mountain valleys for hayfields",
              rarity: "common",
              historicalPeriod: "Traditional",
              significance: "Highest-latitude traditional irrigation in Asia",
              yearBCE: 2000,
              category: "irrigation"
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
            },
            {
              id: "st-petersburg-canals",
              name: "Peter the Great's St. Petersburg Canals",
              description: "Built a capital city on a swamp. 93 rivers, canals, and streams cross St. Petersburg.",
              rarity: "legendary",
              historicalPeriod: "1703-1725 CE",
              significance: "Building a capital on Europe's most challenging hydrology",
              yearBCE: -1703,
              category: "canal"
            },
            {
              id: "kronstadt-flood-barrier",
              name: "Kronstadt Flood Barrier",
              description: "25km dam protecting St. Petersburg. 11 dams, 2 navigation channels, 6 sluice gates.",
              rarity: "legendary",
              historicalPeriod: "1979-2011 CE",
              significance: "Europe's largest flood barrier",
              yearBCE: -2011,
              category: "dam"
            },
            {
              id: "bam-water-crossings",
              name: "BAM Railway Water Crossings",
              description: "4,324km railway crossing 3,901 bridges through permafrost and extreme cold.",
              rarity: "epic",
              historicalPeriod: "1974-1991 CE",
              significance: "Most extreme bridge-water engineering on Earth",
              yearBCE: -1991,
              category: "canal"
            },
            {
              id: "aral-sea-disaster",
              name: "Aral Sea Disaster",
              description: "Soviet river diversions for cotton caused the Aral Sea to shrink by 90%.",
              rarity: "legendary",
              historicalPeriod: "1960s-1990s",
              significance: "Most consequential water engineering disaster in history",
              yearBCE: -1970,
              category: "irrigation"
            },
            {
              id: "dneproges-dam",
              name: "DneproGES Dam",
              description: "60m dam on the Dnieper. First major Soviet hydroelectric project. Destroyed and rebuilt in WWII.",
              rarity: "epic",
              historicalPeriod: "1927-1932 CE",
              significance: "First Soviet mega-dam",
              yearBCE: -1932,
              category: "dam"
            },
            {
              id: "bratsk-dam",
              name: "Bratsk Dam",
              description: "125m dam creating 5,540 km2 reservoir. Generates 4,500 MW.",
              rarity: "epic",
              historicalPeriod: "1954-1967 CE",
              significance: "One of the largest dams ever built",
              yearBCE: -1967,
              category: "dam"
            },
            {
              id: "sayano-shushenskaya-dam",
              name: "Sayano-Shushenskaya Dam",
              description: "242m arch-gravity dam. Tallest in Russia. 6,400 MW. Catastrophic failure in 2009.",
              rarity: "legendary",
              historicalPeriod: "1963-1978 CE",
              significance: "Russia's tallest dam and worst dam disaster",
              yearBCE: -1978,
              category: "dam"
            },
            {
              id: "karakum-canal",
              name: "Karakum Canal",
              description: "1,375km — world's longest irrigation canal. Major contributor to Aral Sea disaster.",
              rarity: "legendary",
              historicalPeriod: "1954-1988 CE",
              significance: "Longest irrigation canal in the world",
              yearBCE: -1988,
              category: "canal"
            },
            {
              id: "soviet-nuclear-excavation",
              name: "Soviet Nuclear Canal Excavation",
              description: "Underground nuclear explosions for canal excavation. Chagan test created 400m crater.",
              rarity: "epic",
              historicalPeriod: "1965-1988 CE",
              significance: "Most extreme water engineering method ever attempted",
              yearBCE: -1965,
              category: "canal"
            },
            {
              id: "soviet-ice-roads",
              name: "Soviet Ice Road Networks",
              description: "Formalized seasonal ice roads across Siberian rivers. Some routes extend 2,000+ km.",
              rarity: "rare",
              historicalPeriod: "1930s-Present",
              significance: "Largest managed seasonal road network",
              yearBCE: -1940,
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
      description: "The world's third-largest island (743,330 km²) hosts some of Earth's wettest environments—receiving 3,000–5,000 mm of annual rainfall—where indigenous Dayak peoples developed extraordinary water management over 40,000+ years. The Iban, Bidayuh, and Kayan-Kenyah built communal longhouses up to 400 meters long on ironwood stilts, designed to withstand seasonal floods of 5–10 meters. In Kalimantan, traditional shallow peat canals (tatah/anjir) maintained water tables to prevent the catastrophic fires that modern deep drainage has caused. The Kadazandusun of Sabah created the tagal fish conservation system—community-managed river sanctuaries producing 3–10× more fish than open waters, now legally recognized across 400+ sites since 2003.",
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
              description: "The Iban, Bidayuh, and Kayan-Kenyah peoples built communal longhouses up to 400 meters long on ironwood (belian) stilts 3–6 meters above ground, housing 20–100 families under a single roof. Positioned along riverbanks for transport and water access, these structures are engineered to withstand seasonal floods of 5–10 meters. Ironwood piles resist rot for 100+ years in tropical conditions. The ruai (communal gallery) runs the full length, serving as social space, workspace, and flood refuge. Rainwater is collected from the massive roof area into bamboo-pipe systems. Longhouses remain inhabited today across Sarawak and Kalimantan, representing one of the world's oldest continuously used communal architectural traditions.",
              rarity: "epic",
              historicalPeriod: "2000 BCE - Present",
              significance: "400+ meter structures; ironwood piles last 100+ years; entire village under one roof; still inhabited across Sarawak and Kalimantan",
              yearBCE: 2000,
              category: "dam"
            },
            {
              id: "bamboo-talang",
              name: "Bamboo Aqueduct Systems (Talang)",
              description: "Gravity-fed water supply networks using split bamboo (typically Gigantochloa or Dendrocalamus species, 10–15 cm diameter) lashed together with rattan to span 2+ km from mountain springs to longhouse settlements. The Kelabit and Lun Bawang peoples of the highlands engineer precise gradients by eye, using forked branches as supports at varying heights. Joints are sealed with tree resin. Bamboo sections are replaced every 2–3 years as they weather. The system operates with zero energy cost—pure gravity flow. Some networks include settling chambers made from hollowed logs to remove sediment. This technology spread across Borneo, the Philippines, and parts of mainland Southeast Asia.",
              rarity: "rare",
              historicalPeriod: "Ancient - Present",
              significance: "Zero energy cost; spans 2+ km; gradient engineering by eye without instruments; bamboo replaced every 2-3 years",
              yearBCE: 2000,
              category: "aqueduct"
            },
            {
              id: "dayak-headwater-protection",
              name: "Dayak Headwater Forest Protection",
              description: "Deliberately maintained forest cover at river headwaters to ensure year-round flow to downstream communities. Early ecological water management.",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Early ecological water management practice",
              yearBCE: -500,
              category: "irrigation"
            },
            {
              id: "malay-sultanate-ports",
              name: "Malay Sultanate Port-River Cities",
              description: "Brunei, Pontianak, and other river-mouth sultanate capitals with sophisticated tidal management, floating settlements, and freshwater supply systems.",
              rarity: "rare",
              historicalPeriod: "15th c. CE onwards",
              significance: "Sophisticated tidal management at river-mouth capitals",
              yearBCE: -1450,
              category: "canal"
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
              description: "Indigenous Banjar and Dayak peoples carved shallow canals (tatah and anjir) through tropical peatlands up to 15 meters deep—the world's largest tropical peat deposits. Traditional canals were deliberately kept shallow (0.5–1.5 m) to maintain the water table at or near the surface, preventing the oxidation and fire that devastate drained peat. The anjir system connects rivers through peat domes, enabling boat transport and fishing while preserving hydrology. Modern industrial drainage canals (3–5 m deep) have lowered water tables catastrophically, causing the 1997 and 2015 peat fire disasters that burned millions of hectares. The traditional system is now recognized as a model for sustainable peatland management.",
              rarity: "rare",
              historicalPeriod: "500 CE - Present",
              significance: "Traditional shallow canals prevented fires for centuries; modern deep drainage caused catastrophic fires (1997, 2015); now recognized as sustainable model",
              yearBCE: -500,
              category: "canal"
            },
            {
              id: "floating-rice-borneo",
              name: "Floating Rice Cultivation (Padi Pasang Surut)",
              description: "An extraordinary example of crop co-evolution with human engineering. Indigenous communities selected and bred rice varieties (Oryza sativa) whose stems elongate up to 5 meters—growing 10+ cm per day—to keep pace with rising floodwaters in tidal zones of southern Kalimantan. Seeds are broadcast onto mudflats as tides recede, then the rice races upward as seasonal floods arrive. No irrigation infrastructure is needed; the tidal cycle provides natural water management. Harvesting is done from boats. These deep-water varieties are now recognized as critical genetic resources for climate adaptation as sea levels rise worldwide.",
              rarity: "rare",
              historicalPeriod: "Ancient - Present",
              significance: "Stems grow 10+ cm/day; zero irrigation infrastructure needed; critical genetic resource for climate adaptation; harvested from boats",
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
              description: "The Kadazandusun and Murut peoples of Sabah developed a community-based river conservation system where stretches of river are declared tagal (off-limits) for 1–5 years, allowing fish populations to recover. Village headmen (ketua kampung) enforce closures; violators face traditional fines. When a section reopens, fish densities are 3–10× higher than continuously fished waters. The system was legally recognized by Sabah's Inland Fisheries and Aquaculture Enactment (2003), with 400+ registered tagal sites across the state. The Sungai Kadamaian near Kota Belud is a famous tagal success story, now a model for community-based fisheries management worldwide.",
              rarity: "epic",
              historicalPeriod: "Ancient - Present",
              significance: "400+ legally registered sites since 2003; 3-10× fish density increase; global model for community-based fisheries management",
              yearBCE: 1000,
              category: "irrigation"
            },
            {
              id: "rattan-fish-traps",
              name: "Rattan Fish Traps (Bubu)",
              description: "Woven from rattan strips (Calamus species) and bamboo, these basket traps feature a conical funnel entrance that allows fish to enter but prevents escape. The bubu comes in dozens of specialized designs: river bottom traps (30–60 cm) target catfish and eels; floating traps capture surface-feeding species; and large estuarine bubu (up to 2 m) harvest prawns and crabs. Critically, the woven mesh creates size-selective filtering—juvenile fish escape through gaps, ensuring population sustainability. Fish are captured alive, allowing undersized or unwanted species to be released unharmed. This indigenous technology achieves near-zero bycatch, a goal that modern industrial fishing still struggles to meet.",
              rarity: "common",
              historicalPeriod: "Ancient - Present",
              significance: "Size-selective design allows juvenile fish escape; live capture enables release; near-zero bycatch; dozens of specialized designs for different species",
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
      description: "Home to the world's oldest known wetland agriculture—Kuk Swamp's 9,000-year-old drainage channels (UNESCO World Heritage 2008) predate Egyptian farming by 4,000 years, making PNG one of only 3–4 places where agriculture was independently invented. Over 800 language groups developed distinct water management traditions across dramatically different environments: highland terraces supporting 150 people/km², Sepik River fish trap complexes harvesting 100+ species, sago palm hydraulic processing yielding 3 million calories per tree, and stilt villages built 2–5 meters over water with integrated tidal sanitation. PNG's engineers achieved some of the highest population densities in the pre-industrial world using only stone-age tools.",
      position: [20, 0, 4],
      color: "#FF9800",
      era: "ancient",
      dateRange: "50000 BCE - Present",
      locations: [
        {
          id: "kuk-swamp",
          name: "Kuk Swamp",
          description: "UNESCO World Heritage site (2008) in the Wahgi Valley at 1,550 m elevation—the oldest known wetland agriculture on Earth",
          historicalContext: "Jack Golson's 1972 excavations revealed 9,000-year-old drainage channels, proving independent agricultural invention 4,000 years before Egypt. One of only 3–4 places worldwide where farming was independently invented.",
          coordinates: { lat: -5.8, lng: 144.3 },
          artifacts: [
            {
              id: "kuk-drainage",
              name: "Kuk Swamp Drainage Agriculture",
              description: "The world's oldest known wetland agriculture system. Archaeological excavations at Kuk Swamp in the Wahgi Valley (1,550 m elevation) revealed drainage channels dating to 7000 BCE—4,000 years before Egypt's first farms. Phase 1 (7000–6400 BCE) shows mounding and draining of wetland margins. Phase 2 (4350–3000 BCE) introduced formal ditch networks with cross-channels. Phase 3 (2000–1000 BCE) added grid-pattern drainage serving entire communities. Jack Golson's 1972 excavations revolutionized understanding of independent agricultural origins. Banana, taro, and yam domestication occurred here before spreading across Southeast Asia and the Pacific.",
              rarity: "legendary",
              historicalPeriod: "7000 BCE - Present",
              significance: "UNESCO World Heritage 2008; one of only 3-4 independent agricultural origins worldwide. Channels up to 2 m wide and 1.5 m deep. Transformed global understanding of human innovation—agriculture was not a Middle Eastern monopoly",
              yearBCE: 7000,
              category: "canal"
            },
            {
              id: "wahgi-ditches",
              name: "Wahgi Valley Ditch Networks",
              description: "Extension of Kuk drainage. Ditches become standardized over time. Field rotation tied to water — drained for cultivation, re-flooded for fallow.",
              rarity: "epic",
              historicalPeriod: "4000 BCE onwards",
              significance: "6,000 years of continuous drainage innovation",
              yearBCE: 4000,
              category: "irrigation"
            }
          ]
        },
        {
          id: "png-highlands",
          name: "PNG Highlands",
          description: "Central highlands at 1,500–2,800 m elevation where terrace irrigation feeds 3+ million people across the Wola, Huli, Enga, and Chimbu territories",
          historicalContext: "Achieved population densities of 150 people/km²—comparable to medieval Europe—using only stone-age technology. Sweet potato introduction (~1700 CE) triggered a population explosion.",
          coordinates: { lat: -6.0, lng: 145.5 },
          artifacts: [
            {
              id: "highland-terraces",
              name: "Highland Terrace Irrigation (Wola/Huli)",
              description: "Engineered hillside terraces carved into steep slopes at 1,500–2,800 m elevation across the central highlands. The Wola, Huli, Enga, and Chimbu peoples constructed elaborate drainage and irrigation networks supporting population densities of 150 people/km²—comparable to medieval Europe but achieved with stone tools. Sweet potato (introduced ~1700 CE) revolutionized highland agriculture, enabling yields of 10–20 tons/hectare. Composting mounds (up to 5 m diameter) with internal drainage channels control waterlogging. The Huli people manage 30+ named varieties of sweet potato in terraced gardens reaching 2,800 m. These systems feed 3+ million highland residents today.",
              rarity: "epic",
              historicalPeriod: "2000 BCE - Present",
              significance: "Supports 3+ million people; sweet potato yields 10-20 tons/hectare; population densities rival medieval Europe using only stone-age technology",
              yearBCE: 2000,
              category: "irrigation"
            },
            {
              id: "taro-pondfields",
              name: "Taro Pondfield Irrigation",
              description: "Precision-engineered flooded field systems for wetland taro (Colocasia esculenta) with carefully controlled water depth of 5–15 cm. Inlet and outlet channels maintain constant slow flow that suppresses weeds, prevents soil temperature extremes, and delivers dissolved nutrients. Fields are leveled by hand to within 2 cm tolerance. Multiple taro varieties are cultivated in rotation, with fallow periods managed through controlled flooding and draining. The Chimbu and Kainantu peoples developed pondfield complexes producing 15–30 tons/hectare—among the highest yields of any pre-industrial system. Continuous cultivation documented for 4,000+ years at some sites.",
              rarity: "rare",
              historicalPeriod: "2000 BCE - Present",
              significance: "Continuous cultivation 4,000+ years; 15-30 tons/hectare yield; water depth controlled to within centimeters using stone-age tools",
              yearBCE: 2000,
              category: "irrigation"
            },
            {
              id: "sweet-potato-mounds",
              name: "Highland Sweet Potato Mound Drainage",
              description: "Mounds raised above waterlogged soil with drainage ditches between. Composting within mounds generates heat for frost protection.",
              rarity: "rare",
              historicalPeriod: "1600 CE onwards",
              significance: "Rapid innovation adapting new crop to drainage knowledge",
              yearBCE: -1600,
              category: "irrigation"
            },
            {
              id: "highland-fog-drip",
              name: "Highland Fog-Drip Forest Management",
              description: "Deliberate maintenance of montane cloud forest for fog-drip water collection. Communities prohibit clearing above water sources.",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Ecological water harvesting through forest conservation",
              yearBCE: -500,
              category: "irrigation"
            },
            {
              id: "huli-canal",
              name: "Huli Wigmen Canal Engineering",
              description: "Elaborate canal systems for sweet potato gardens in the Tari Basin. Canals lined with stakes and packed soil with adjustable barriers.",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Highland canal engineering",
              yearBCE: -500,
              category: "canal"
            },
            {
              id: "enga-drainage",
              name: "Enga Clan Garden Drainage",
              description: "Clan-owned valley-floor drainage networks. Inter-clan disputes resolved through traditional exchange ceremonies.",
              rarity: "common",
              historicalPeriod: "Traditional",
              significance: "Clan-based drainage governance",
              yearBCE: -500,
              category: "irrigation"
            }
          ]
        },
        {
          id: "sepik-river",
          name: "Sepik River",
          description: "One of the world's largest uncontaminated river systems—1,126 km long with vast seasonal floodplains supporting elaborate aquatic food production",
          historicalContext: "The Iatmul, Chambri, and other Sepik peoples developed sophisticated fish trap complexes and sago palm processing that sustain 500,000+ people. Smoked fish traded up to 100 km inland.",
          coordinates: { lat: -4.0, lng: 143.5 },
          artifacts: [
            {
              id: "sepik-fish-traps",
              name: "Sepik River Fish Trap Systems",
              description: "The Sepik River—1,126 km long and one of the world's largest uncontaminated rivers—supports elaborate fish trap complexes harvesting 100+ freshwater species year-round. Woven bamboo funnel traps (up to 3 m long) are anchored in strategic positions where seasonal flooding concentrates fish migration. V-shaped weirs constructed from stakes and woven panels direct fish into holding pens. The Iatmul and Chambri peoples manage seasonal fishing calendars aligned with water levels, rotating trap locations to prevent overharvesting. Smoked fish from the Sepik is traded up to 100 km inland. These systems have provided the primary protein source for river populations for thousands of years with no evidence of stock depletion.",
              rarity: "epic",
              historicalPeriod: "Ancient - Present",
              significance: "Primary protein for 500,000+ river populations; sustainable for millennia; 100+ species harvested; traded 100 km inland",
              yearBCE: 5000,
              category: "irrigation"
            },
            {
              id: "sago-processing",
              name: "Sago Palm Water Processing",
              description: "One of the most ingenious hydraulic food-processing systems ever devised. A single sago palm (Metroxylon sagu) contains 200–400 kg of starch—roughly 3 million calories—locked in the trunk pith. Extraction requires felling the 15 m palm, splitting it lengthwise, and using a carved hardwood adze to pulverize the pith. The pulverized material is then washed with approximately 2,000 liters of water through a series of coconut-fiber filters and bark troughs. Starch settles in collection basins, is dried, and stored for months. The Sepik and coastal peoples process 2–3 palms per week to feed a village. Sago groves are actively managed, with individual trees planted and tended for 10–15 years before harvest.",
              rarity: "rare",
              historicalPeriod: "Ancient - Present",
              significance: "One palm = 3 million calories (feeds 1 person for 3 years); 2,000 liters of water per extraction; most calorically efficient food processing known",
              yearBCE: 5000,
              category: "irrigation"
            }
          ]
        },
        {
          id: "coastal-png",
          name: "Coastal & Island PNG",
          description: "Stilt villages housing 500+ residents over lagoons and coral atoll communities surviving on zero freshwater sources",
          historicalContext: "Complete water-based urbanism with tidal sanitation, integrated fish traps, and Ghyben-Herzberg freshwater lens management. Malaria reduced 40–60% compared to shore dwellings.",
          coordinates: { lat: -2.5, lng: 140.7 },
          artifacts: [
            {
              id: "stilt-villages",
              name: "Stilt Village Water Architecture",
              description: "Complete villages built 2–5 meters above water on hardwood piles driven into lagoon or river beds. The largest stilt settlements house 500+ residents in interconnected structures with plank walkways, communal platforms, and specialized areas for food preparation, ceremony, and trade. Tidal flow provides natural sanitation—waste is carried away twice daily. Fish traps are integrated directly into the pile structures, providing protein literally at the doorstep. The design eliminates mosquito-borne malaria (reduced by 40–60% compared to shore dwellings), prevents flooding damage, and creates defensible positions. Thousands of people in the Sepik delta, Gulf Province, and offshore islands still live in stilt villages today.",
              rarity: "epic",
              historicalPeriod: "Ancient - Present",
              significance: "Thousands still live in stilt villages; flood-proof; malaria reduced 40-60%; integrated fish traps provide daily protein; defensible architecture",
              yearBCE: 3000,
              category: "dam"
            },
            {
              id: "atoll-rainwater",
              name: "Coral Atoll Rainwater Harvesting",
              description: "Survival engineering on coral atolls with zero surface freshwater. Islanders manage the Ghyben-Herzberg freshwater lens—a thin layer of rainwater floating atop saltwater within the coral substrate. Wells are dug to precisely the right depth (typically 1–2 m) to tap this lens without drawing salt. Coconut palm leaf catchments direct rainfall into clay-lined pits and hollowed log cisterns. Strict traditional rules (tambu) prohibit activities that contaminate groundwater: no burial near wells, no pig pens uphill, no washing in collection areas. During droughts, coconut water serves as emergency hydration (300–500 ml per nut). These systems sustained populations of 200–500 people on islands as small as 1 km² for millennia.",
              rarity: "rare",
              historicalPeriod: "Ancient - Present",
              significance: "Sustained populations on waterless coral atolls; Ghyben-Herzberg lens management; traditional tambu rules prevent contamination; coconut water emergency backup",
              yearBCE: 2000,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "urartu",
      name: "Urartu (Ancient Armenia)",
      description: "Masters of mountain hydraulics (860-590 BCE). Built the Menua Canal stretching 56 km to irrigate Tuspa (modern Van). Lake Van reservoir management supported 50,000+ people in harsh mountain terrain. Fortress cisterns enabled resistance to Assyrian sieges.",
      position: [10, 0, -6],
      color: "#8B0000",
      era: "ancient",
      dateRange: "860 BCE - 590 BCE",
      locations: [
        {
          id: "van-region",
          name: "Lake Van Region",
          description: "Heartland of Urartian hydraulic engineering",
          historicalContext: "Mountain kingdom rivaling Assyria in engineering sophistication",
          coordinates: { lat: 38.5, lng: 43.3 },
          artifacts: [
            {
              id: "menua-canal",
              name: "Menua Canal (Shamram Su)",
              description: "56-kilometer canal carved through rock to bring water from mountains to capital Tuspa. Named after King Menua who ordered construction around 800 BCE. Still flows today, now called 'Shamram Water' after legendary queen Semiramis.",
              rarity: "legendary",
              historicalPeriod: "Urartian Kingdom (800 BCE)",
              significance: "Among oldest continuously functioning canals—still irrigates Van region after 2,800 years",
              yearBCE: 800,
              category: "canal",
              stillWorking: { age: "2,800 years", status: "Still carrying water" }
            },
            {
              id: "urartian-cisterns",
              name: "Urartian Fortress Cisterns",
              description: "Rock-cut cisterns in mountain fortresses like Çavuştepe and Van Castle. Stored hundreds of thousands of liters. Enabled months-long siege resistance against Assyrian armies.",
              rarity: "epic",
              historicalPeriod: "Urartian Kingdom (860-590 BCE)",
              significance: "Strategic water storage was key to Urartu's military survival",
              yearBCE: 800,
              category: "dam"
            },
            {
              id: "lake-van-management",
              name: "Lake Van Water Management",
              description: "Management of Lake Van (largest lake in Turkey) for agriculture, urban supply, and military logistics.",
              rarity: "epic",
              historicalPeriod: "860-590 BCE",
              significance: "Large-scale lake management",
              yearBCE: 860,
              category: "irrigation"
            },
            {
              id: "urartian-qanat-precursor",
              name: "Urartian Qanat-Precursor Tunnels",
              description: "Underground water tunnels. Sargon II saw these in 714 BCE and brought the concept to Assyria — origin of the qanat tradition.",
              rarity: "legendary",
              historicalPeriod: "800-700 BCE",
              significance: "Origin point of the qanat concept that transformed global water engineering",
              yearBCE: 800,
              category: "canal"
            },
            {
              id: "ayanis-fortress-water",
              name: "Ayanis Fortress Water System",
              description: "Fortress on Lake Van with integrated water channels, cisterns, and managed spring access.",
              rarity: "rare",
              historicalPeriod: "7th c. BCE",
              significance: "Late Urartian fortress water engineering",
              yearBCE: 650,
              category: "aqueduct"
            },
            {
              id: "cavustepe-palace-water",
              name: "Cavustepe Palace Water System",
              description: "Palace-fortress with rock-cut channels, cisterns, and managed spring. Cuneiform inscriptions detail construction.",
              rarity: "epic",
              historicalPeriod: "750-600 BCE",
              significance: "Royal water engineering with cuneiform documentation",
              yearBCE: 750,
              category: "aqueduct"
            }
          ]
        }
      ]
    },
    {
      id: "dilmun",
      name: "Dilmun (Ancient Bahrain)",
      description: "Paradise of sweet water springs in the Persian Gulf (3000-800 BCE). Ancient texts describe Dilmun as 'land where the sun rises' and 'place of eternal life.' Natural artesian springs provided freshwater in the middle of the sea—considered miraculous by ancients.",
      position: [11, 0, -3],
      color: "#00CED1",
      era: "ancient",
      dateRange: "3000 BCE - 800 BCE",
      locations: [
        {
          id: "bahrain-springs",
          name: "Bahrain Island Springs",
          description: "Artesian freshwater springs rising from seafloor",
          historicalContext: "Mythical 'paradise' fed by underground aquifers from Arabian Peninsula",
          coordinates: { lat: 26.0275, lng: 50.5500 },
          artifacts: [
            {
              id: "dilmun-springs",
              name: "Dilmun Sacred Springs",
              description: "Natural artesian springs emerging both on land and underwater in the Persian Gulf. Fresh water rising from the sea floor seemed miraculous to ancient peoples. Adaru spring and the 'Tree of Life' at Qal'at al-Bahrain were pilgrimage sites.",
              rarity: "legendary",
              historicalPeriod: "Dilmun Period (3000-800 BCE)",
              significance: "Inspired Sumerian Paradise myths—may be origin of Eden garden legends",
              yearBCE: 3000,
              category: "fountain"
            },
            {
              id: "dilmun-irrigation",
              name: "Dilmun Date Palm Irrigation",
              description: "Spring-fed channels irrigating date palm gardens on desert islands. Created oasis agriculture where none should exist. Trade in dates made Dilmun wealthy—intermediary between Mesopotamia and Indus Valley.",
              rarity: "epic",
              historicalPeriod: "Dilmun Period (2500-1200 BCE)",
              significance: "Strategic trade hub—Mesopotamian texts describe Dilmun as 'emporium of the world'",
              yearBCE: 2500,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "bactria",
      name: "Bactria-Margiana (Ancient Afghanistan)",
      description: "Oasis civilizations of Central Asia (2200-500 BCE). Developed karez (qanat-like) underground channels in some of Earth's harshest terrain. Helmand River irrigation supported cities like Balkh (ancient Bactra) that controlled Silk Road trade for millennia.",
      position: [12, 0, -4],
      color: "#DAA520",
      era: "ancient",
      dateRange: "2200 BCE - 500 BCE",
      locations: [
        {
          id: "margiana-oasis",
          name: "Margiana Oasis (Merv)",
          description: "Ancient oasis civilization in Karakum Desert",
          historicalContext: "BMAC culture rivaled contemporary Mesopotamia and Indus Valley",
          coordinates: { lat: 37.6, lng: 62.2 },
          artifacts: [
            {
              id: "bactrian-karez",
              name: "Bactrian Karez Systems",
              description: "Underground water channels similar to Persian qanats, bringing snowmelt from Hindu Kush mountains to desert oases. Some stretched 30+ kilometers. Mother wells accessed aquifers 30-50 meters deep.",
              rarity: "epic",
              historicalPeriod: "Bactrian Period (1000 BCE onwards)",
              significance: "Enabled Silk Road caravansaries—without karez, no east-west trade route",
              yearBCE: 1000,
              category: "aqueduct"
            },
            {
              id: "gonur-depe",
              name: "Gonur Depe Water Temple",
              description: "Monumental water structures at Margiana capital including ritual basins, channels, and the 'White Room' temple with sophisticated hydraulic features. Possible proto-Zoroastrian water worship.",
              rarity: "legendary",
              historicalPeriod: "BMAC Period (2200-1700 BCE)",
              significance: "Bronze Age 'lost civilization' rivaling Mesopotamia—rediscovered 1970s",
              yearBCE: 2000,
              category: "fountain"
            }
          ]
        }
      ]
    },
    {
      id: "majapahit",
      name: "Majapahit Empire (Java)",
      description: "Maritime empire with vast irrigation networks (1293-1527 CE). Controlled trade across 3,000 islands with sophisticated wet-rice cultivation. Trowulan capital covered 100 sq km with integrated canal networks. Rice surplus funded naval power.",
      position: [16, 0, 5],
      color: "#FF6347",
      era: "medieval",
      dateRange: "1293 CE - 1527 CE",
      locations: [
        {
          id: "trowulan",
          name: "Trowulan (Majapahit Capital)",
          description: "Vast capital city with canal networks spanning 100 sq km",
          historicalContext: "Largest city in medieval Southeast Asia",
          coordinates: { lat: -7.55, lng: 112.38 },
          artifacts: [
            {
              id: "majapahit-canals",
              name: "Trowulan Canal Network",
              description: "Grid of canals totaling 60+ km crisscrossing the capital for transport, drainage, and irrigation. Large reservoirs (called segaran) stored water during dry season. Supported population of 500,000+ people.",
              rarity: "legendary",
              historicalPeriod: "Majapahit Period (1350-1400 CE)",
              significance: "Largest medieval city outside China—water infrastructure enabled urban density",
              yearBCE: -1350,
              category: "canal"
            },
            {
              id: "javanese-sawah",
              name: "Javanese Sawah Rice Terraces",
              description: "Wet rice cultivation integrated with temple water management. Volcanic soil + irrigation = multiple harvests yearly. Village cooperatives (subak-like) managed water sharing across watersheds.",
              rarity: "epic",
              historicalPeriod: "Majapahit Period (1293-1527 CE)",
              significance: "Rice surplus funded maritime empire controlling spice trade",
              yearBCE: -1300,
              category: "irrigation"
            },
            {
              id: "mataram-irrigation",
              name: "Mataram Kingdom Irrigation",
              description: "Inscription evidence of royal irrigation projects in central Java (8th-10th c. CE). Rice tax systems based on irrigated vs. rain-fed land suggest extensive managed water networks.",
              rarity: "rare",
              historicalPeriod: "8th-10th c. CE",
              significance: "Earliest documented Javanese irrigation management",
              yearBCE: -800,
              category: "irrigation"
            },
            {
              id: "borobudur-drainage",
              name: "Borobudur Drainage Engineering",
              description: "The world's largest Buddhist monument required sophisticated drainage to prevent collapse. Multi-level hidden drainage channels move water through the 9-tier structure. UNESCO World Heritage.",
              rarity: "legendary",
              historicalPeriod: "~800 CE",
              significance: "Drainage engineering for the world's largest Buddhist monument",
              yearBCE: -800,
              category: "sanitation"
            },
            {
              id: "prambanan-water",
              name: "Prambanan Temple Water System",
              description: "Hindu temple complex with integrated reservoir, canal, and ritual bathing systems. Stone-carved water channels with precise gradients.",
              rarity: "epic",
              historicalPeriod: "~850 CE",
              significance: "Integration of Hindu sacred water practices with engineering",
              yearBCE: -850,
              category: "fountain"
            },
            {
              id: "trowulan-water-grid",
              name: "Trowulan Urban Water Grid",
              description: "Majapahit's capital featured a grid of canals 20-40 m wide covering 100 km². Combined transport, sanitation, flood control, and water supply functions for a city of 500,000+.",
              rarity: "legendary",
              historicalPeriod: "14th c. CE",
              significance: "100 km² urban water grid for a city of 500,000+",
              yearBCE: -1350,
              category: "canal"
            },
            {
              id: "javanese-dawuhan",
              name: "Javanese Sluice Gate (Dawuhan)",
              description: "Stone and brick sluice gates controlling water flow in sawah (rice terrace) systems. Some still in use.",
              rarity: "rare",
              historicalPeriod: "9th c. CE onwards",
              significance: "Still-functioning medieval sluice technology",
              yearBCE: -900,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "kanem-bornu",
      name: "Kanem-Bornu Empire",
      description: "Lake Chad water masters (700-1900 CE). Managed Africa's largest lake through centuries of climate fluctuation. Fadama (floodplain) agriculture fed trans-Saharan trade. Capital Ngazargamu had 200,000+ people dependent on integrated water systems.",
      position: [3, 0, -2],
      color: "#8FBC8F",
      era: "medieval",
      dateRange: "700 CE - 1900 CE",
      locations: [
        {
          id: "lake-chad",
          name: "Lake Chad Basin",
          description: "Fluctuating lake supporting millions across four modern nations",
          historicalContext: "Empire that endured 1,000+ years through water management",
          coordinates: { lat: 13.0, lng: 14.0 },
          artifacts: [
            {
              id: "fadama-agriculture",
              name: "Fadama Floodplain Agriculture",
              description: "Seasonal floodplain farming using Lake Chad's natural rise and fall. Planted as waters recede, harvested from nutrient-rich mud. Different crops at different elevations maximized annual production.",
              rarity: "epic",
              historicalPeriod: "Kanem-Bornu Period (1000-1800 CE)",
              significance: "Sustainable system—30 million still practice fadama farming today",
              yearBCE: -1000,
              category: "irrigation"
            },
            {
              id: "chad-fishing-systems",
              name: "Lake Chad Fishing Infrastructure",
              description: "Fish weirs, breeding pools, and harvest rotation systems sustaining protein supply across seasonal lake variations. Dried fish traded across Sahara. Specialized fishing villages on floating islands.",
              rarity: "rare",
              historicalPeriod: "Kanem-Bornu Period (1200-1800 CE)",
              significance: "Integrated fish-crop-livestock system; model of sustainable lake management",
              yearBCE: -1200,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "benin-kingdom",
      name: "Benin Kingdom (Nigeria)",
      description: "Builders of Earth's largest pre-mechanical earthworks (1180-1897 CE). Benin City walls totaled 16,000 km—larger than Great Wall of China. Sophisticated drainage and moat systems protected 'Great Benin' with 100,000+ residents.",
      position: [1, 0, 0],
      color: "#B22222",
      era: "medieval",
      dateRange: "1180 CE - 1897 CE",
      locations: [
        {
          id: "benin-city",
          name: "Benin City",
          description: "Capital protected by world's largest earthworks",
          historicalContext: "European visitors compared it favorably to Amsterdam",
          coordinates: { lat: 6.335, lng: 5.627 },
          artifacts: [
            {
              id: "benin-walls",
              name: "Benin City Walls and Moats",
              description: "16,000 km of earthen walls and moats—more than four times the Great Wall. Inner walls rose 20 meters. Water-filled moats provided defense and drainage. Construction over 650 years required more earth-moving than Egyptian pyramids.",
              rarity: "legendary",
              historicalPeriod: "Benin Kingdom (1200-1500 CE)",
              significance: "Largest earthwork ever built—destroyed by British in 1897, now being excavated",
              yearBCE: -1200,
              category: "dam"
            },
            {
              id: "benin-drainage",
              name: "Benin City Drainage System",
              description: "Sophisticated urban drainage keeping 100,000+ people dry in tropical rainforest. Streets designed for runoff. Moats doubled as waste management—crocodiles disposed of organic matter.",
              rarity: "epic",
              historicalPeriod: "Benin Kingdom (1400-1800 CE)",
              significance: "Dutch visitors (1602) called it 'great citie' cleaner than Amsterdam",
              yearBCE: -1400,
              category: "sanitation"
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
      description: "The Sumerians (4500–1900 BCE) essentially invented water engineering as a discipline in southern Mesopotamia between the Tigris and Euphrates rivers. They built the world's first irrigation canals (6000 BCE), codified the first water laws governing rights and responsibilities, created the first urban water systems supporting cities of 40,000+ people, and developed the first mathematical approach to water measurement using their base-60 number system. The Euphrates River sat at a higher elevation than the Tigris, causing frequent overflow into settlements — this geographic challenge forced the Sumerians to develop systematic water control. Their city-states of Kish, Lagash, Ur, Umma, and Uruk were all connected by a single irrigation system, and disputes over water between these cities led to the world's first water treaties and eventually to Hammurabi's Code, which devoted hundreds of laws to irrigation.",
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
            },
            {
              id: "sumerian-canal-lining",
              name: "Waterproof Canal Lining",
              description: "Canals lined with mud brick or fired clay to prevent water seepage into sandy desert soil",
              rarity: "rare",
              historicalPeriod: "4000 BCE onwards",
              significance: "First known waterproofing of irrigation infrastructure; essential in arid Mesopotamia where unlined canals lost most water to sand",
              yearBCE: 4000,
              category: "canal"
            },
            {
              id: "sumerian-water-treaties",
              name: "Inter-City Water Treaties",
              description: "Formal water-sharing agreements between city-states sharing a single irrigation network",
              rarity: "legendary",
              historicalPeriod: "2500 BCE",
              significance: "Earliest documented inter-jurisdictional water governance; cities like Umma, Lagash, and Ur negotiated canal access rights — the world's first water diplomacy",
              yearBCE: 2500,
              category: "canal"
            },
            {
              id: "sumerian-gate-systems",
              name: "Regulated Gate Systems",
              description: "Dam gates constructed of reeds, palm trunks, and mud that could be opened or closed to control water flow timing and volume",
              rarity: "rare",
              historicalPeriod: "4000 BCE onwards",
              significance: "Earliest known water control infrastructure; allowed farmers to schedule irrigation and prevent flooding",
              yearBCE: 4000,
              category: "dam"
            },
            {
              id: "sumerian-silt-management",
              name: "Silt Management Techniques",
              description: "Settling basins and periodic canal dredging to handle massive silt deposits from the Euphrates",
              rarity: "common",
              historicalPeriod: "4000 BCE onwards",
              significance: "The Euphrates sat higher than the Tigris, causing frequent overflow and silt accumulation; systematic dredging kept canals functional for millennia",
              yearBCE: 4000,
              category: "canal"
            },
            {
              id: "sumerian-sexagesimal-measurement",
              name: "Sexagesimal Water Measurement",
              description: "Base-60 number system applied to measuring water volumes, canal dimensions, and flow rates",
              rarity: "epic",
              historicalPeriod: "3000 BCE",
              significance: "Foundation of hydraulic engineering mathematics; Sumerians could calculate canal capacity, water allocation, and seasonal flow volumes",
              yearBCE: 3000,
              category: "irrigation"
            },
            {
              id: "sumerian-flood-recession-agriculture",
              name: "Flood-Recession Agriculture",
              description: "Using natural flood cycles to deposit fertile silt on fields before planting — the agricultural method that gave rise to the first cities",
              rarity: "common",
              historicalPeriod: "6000 BCE onwards",
              significance: "Precursor to all irrigation; farmers learned to exploit natural flooding patterns before developing engineered canal systems",
              yearBCE: 6000,
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
            },
            {
              id: "hattusa-water-system",
              name: "Hattusa Water System",
              description: "The Hittite capital had elaborate water infrastructure: multiple springs channeled into the city, underground stone-lined tunnels, reservoirs, and a 71m underground passage incorporating water management. Two major dams supplied the upper city.",
              rarity: "legendary",
              historicalPeriod: "1400-1200 BCE",
              significance: "Capital city water engineering rivaling any contemporary civilization",
              yearBCE: 1400,
              category: "aqueduct"
            },
            {
              id: "eflatun-pinar",
              name: "Eflatun Pinar Sacred Spring Monument",
              description: "Monumental stone spring sanctuary with a massive carved stone facade over a natural spring pool. Channels directed water through ritual passages. The pool was engineered with stone walls and controlled overflow.",
              rarity: "epic",
              historicalPeriod: "1300-1200 BCE",
              significance: "Most elaborate ancient spring monument in Asia Minor",
              yearBCE: 1300,
              category: "fountain"
            },
            {
              id: "hittite-yerkapi-tunnel",
              name: "Hittite Yerkapi Underground Tunnel",
              description: "71m corbel-vaulted tunnel beneath the defensive ramparts of Hattusa. Incorporated water drainage and may have served as emergency water access route.",
              rarity: "epic",
              historicalPeriod: "1350 BCE",
              significance: "Longest Hittite-era underground structure",
              yearBCE: 1350,
              category: "canal"
            },
            {
              id: "hittite-treaty-water",
              name: "Hittite Treaty Water Clauses",
              description: "Hittite treaties with vassal states frequently included clauses about water rights, well access, and irrigation. The Treaty of Kadesh (1259 BCE) with Egypt included water access provisions.",
              rarity: "rare",
              historicalPeriod: "1400-1200 BCE",
              significance: "Water governance in international diplomacy",
              yearBCE: 1400,
              category: "irrigation"
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
        },
        {
          id: "antioch-orontes",
          name: "Antioch on the Orontes",
          description: "Ancient capital with sophisticated urban water systems",
          historicalContext: "Founded 300 BCE; became one of the largest cities of the ancient world with advanced hydraulic infrastructure",
          coordinates: { lat: 36.2, lng: 36.15 },
          artifacts: [
            {
              id: "antioch-fountain-complex",
              name: "Antioch Public Fountain Complex",
              description: "Network of monumental public fountains (nymphaea) fed by aqueducts from Daphne springs",
              rarity: "epic",
              historicalPeriod: "300 BCE - 600 CE",
              significance: "Multiple nymphaea supplied by gravity-fed aqueducts from Daphne springs 8km away; marble basins with continuous flow; served a city of 500,000+",
              yearBCE: 300,
              category: "fountain"
            },
            {
              id: "antioch-drainage",
              name: "Antioch Storm Drainage System",
              description: "Engineered drainage channels protecting the city from Orontes flooding",
              rarity: "rare",
              historicalPeriod: "200 BCE - 500 CE",
              significance: "Diverted seasonal floodwaters; stone-lined channels under streets; prevented repeated flood damage in low-lying city center",
              yearBCE: 200,
              category: "sanitation"
            }
          ]
        },
        {
          id: "orontes-irrigation",
          name: "Orontes Valley Irrigation Belt",
          description: "Continuous agricultural irrigation zone along 570km of the Orontes River",
          historicalContext: "The Orontes Valley supported one of the densest agricultural populations in the ancient world",
          coordinates: { lat: 34.7, lng: 36.7 },
          artifacts: [
            {
              id: "orontes-weirs",
              name: "Orontes River Weirs",
              description: "Stone weir dams across the Orontes raising water levels to feed noria wheels and canals",
              rarity: "epic",
              historicalPeriod: "500 BCE - Present",
              significance: "Low dams raised river level 1-2m to power norias; some weirs still in use today; created calm pools for fish farming as secondary benefit",
              yearBCE: 500,
              category: "dam"
            },
            {
              id: "orontes-canal-network",
              name: "Orontes Canal Network",
              description: "Extensive open-channel irrigation canals distributing water from norias across the valley",
              rarity: "rare",
              historicalPeriod: "200 BCE - Present",
              significance: "Stone-lined and earthen canals extending 5-10km from river; gravity distribution with sluice gates; irrigated wheat, cotton, and fruit orchards",
              yearBCE: 200,
              category: "canal"
            },
            {
              id: "bekaa-valley-irrigation",
              name: "Bekaa Valley Feeder Canals",
              description: "Cross-valley canals connecting Orontes headwaters to the fertile Bekaa plain",
              rarity: "rare",
              historicalPeriod: "100 BCE - 600 CE",
              significance: "Extended Orontes water to adjacent valleys; Roman-era engineering with precise gradient control; supported wine and olive production",
              yearBCE: 100,
              category: "irrigation"
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
      description: "The Assyrian Empire (2500–609 BCE) were military engineers who transformed water into both a tool of empire-building and a weapon of total war. King Sennacherib constructed the Jerwan Aqueduct — the world's oldest known stone aqueduct, predating Roman aqueducts by 500 years — as part of an 80+ km canal system snaking across the plains from the Zagros Mountains to his capital at Nineveh. The Assyrians pioneered systematic water warfare: Sennacherib diverted canals to flood the ruins of Babylon (689 BCE), Assurbanipal seized wells during Arabian campaigns, and siege tactics routinely targeted water supplies. When Sargon II invaded Armenia in 714 BCE, he destroyed qanat systems but brought the technology back to Assyria, spreading underground water tunnels throughout the empire. Rock reliefs at Khinis document these hydraulic achievements — the world's earliest engineering records.",
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
            },
            {
              id: "khinis-rock-reliefs",
              name: "Khinis Rock Relief Engineering Documentation",
              description: "Celebratory rock carvings near the Jerwan Aqueduct depicting King Sennacherib paying homage to gods amid a procession of mythical animals along the canal",
              rarity: "epic",
              historicalPeriod: "700 BCE",
              significance: "First known public documentation of hydraulic engineering achievements; served as both propaganda and engineering records — the world's earliest 'as-built drawings'",
              yearBCE: 700,
              category: "aqueduct"
            },
            {
              id: "sennacherib-babylon-destruction",
              name: "Sennacherib's Hydraulic Destruction of Babylon",
              description: "In 689 BCE, Sennacherib diverted an irrigation canal so water would wash over the ruins of Babylon — using hydraulic engineering as a weapon of total destruction",
              rarity: "legendary",
              historicalPeriod: "689 BCE",
              significance: "Most dramatic example of water as weapon of total war; six years later he further destroyed Babylon's water supply canals in retribution for his murdered son",
              yearBCE: 689,
              category: "dam"
            },
            {
              id: "assyrian-nineveh-system",
              name: "Nineveh Regional Irrigation System",
              description: "Comprehensive water network serving the 'Assyrian Triangle' — multiple interconnected canals, aqueducts, and distribution networks serving the capital and surrounding agricultural zones",
              rarity: "epic",
              historicalPeriod: "705-681 BCE",
              significance: "Fed 100,000+ residents and surrounding farmland growing olives, grapes, wheat, and barley; villages of herders and farmers depended on its steady supply",
              yearBCE: 700,
              category: "irrigation"
            },
            {
              id: "assyrian-well-seizure",
              name: "Assurbanipal's Well Seizure Strategy",
              description: "King Assurbanipal seized water wells as a deliberate military strategy during campaigns against Arabia — cutting off enemy water access as systematic warfare",
              rarity: "rare",
              historicalPeriod: "~650 BCE",
              significance: "Demonstrated sophisticated understanding of desert water dependency; wells were strategic military targets equivalent to modern supply line interdiction",
              yearBCE: 650,
              category: "dam"
            },
            {
              id: "assyrian-siege-water-denial",
              name: "Siege Water Denial Tactics",
              description: "Systematic cutting of water supplies during sieges — documented at Tyre and Jerusalem, where defenders built Hezekiah's Tunnel as a counter-measure",
              rarity: "rare",
              historicalPeriod: "7th century BCE",
              significance: "Pioneered the doctrine of water denial in siege warfare; forced besieged cities to develop counter-engineering solutions",
              yearBCE: 701,
              category: "dam"
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
      id: "sundaland",
      name: "Sundaland (Pre-Historic Southeast Asia)",
      description: "Before sea levels rose ~7,000 BCE, the area west of Makassar Strait was a vast lowland plain called Sundaland — connecting modern Borneo, Java, Sumatra, and the Malay Peninsula. When the seas rose 50+ meters, entire civilizations and their water systems were submerged. Evidence from Spirit Cave, Niah Cave, and Hoabinhian sites reveals the world's oldest tropical water management traditions, from 50,000 BCE freshwater systems to the earliest aquaculture management in the tropics.",
      position: [17, 0, 12],
      color: "#5D4037",
      era: "ancient",
      dateRange: "50,000 - 3,000 BCE",
      locations: [
        {
          id: "sundaland-sites",
          name: "Sundaland Sites",
          description: "Archaeological sites across the former Sundaland landmass",
          historicalContext: "Pre-historic tropical water management spanning tens of thousands of years",
          coordinates: { lat: 2.0, lng: 110.0 },
          artifacts: [
            {
              id: "sundaland-freshwater",
              name: "Sundaland Freshwater Management",
              description: "River-based settlement systems across what was the largest tropical lowland on Earth. Freshwater springs, river confluences, and lake margins served as settlement anchors.",
              rarity: "legendary",
              historicalPeriod: "50,000-7,000 BCE",
              significance: "Oldest tropical water management tradition — predates all known agricultural water systems",
              yearBCE: 50000,
              category: "irrigation"
            },
            {
              id: "hoabinhian-shellfish",
              name: "Hoabinhian Shellfish Water Gardens",
              description: "Hoabinhian culture managed coastal freshwater-saltwater boundaries for shellfish cultivation. Stone tools found across the region show remarkable similarity — suggesting shared water-management knowledge.",
              rarity: "epic",
              historicalPeriod: "13,000-5,000 BCE",
              significance: "Earliest known aquaculture management in the tropics",
              yearBCE: 13000,
              category: "irrigation"
            },
            {
              id: "spirit-cave-water",
              name: "Spirit Cave Water Collection",
              description: "Evidence of systematic rainwater collection and storage at Spirit Cave and related sites in Northern Thailand. Associated with some of the earliest plant cultivation in the world.",
              rarity: "rare",
              historicalPeriod: "10,000 BCE",
              significance: "Links water management to the origins of agriculture",
              yearBCE: 10000,
              category: "dam"
            },
            {
              id: "niah-cave-freshwater",
              name: "Niah Cave Freshwater Systems",
              description: "One of the oldest human habitation sites in Southeast Asia, in Borneo (Sarawak). Freshwater management within and around the cave complex supported continuous habitation for tens of thousands of years.",
              rarity: "legendary",
              historicalPeriod: "40,000 BCE",
              significance: "Among the oldest evidence of human water management anywhere",
              yearBCE: 40000,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "dong-son",
      name: "Dong Son Culture",
      description: "The Dong Son civilization (1000-200 BCE) of Northern Vietnam produced elaborate bronze drums used in rain-calling ceremonies — evidence that water management was central to their identity. They developed systematic wet rice cultivation with bunded fields in the Red River Delta, and the Co Loa Citadel's triple-ring moat system with an 8 km outer perimeter was the largest ancient moat in mainland Southeast Asia.",
      position: [17, 0, 4],
      color: "#BF360C",
      era: "ancient",
      dateRange: "1000 - 200 BCE",
      locations: [
        {
          id: "red-river-valley",
          name: "Red River Valley",
          description: "Heartland of Dong Son bronze-age civilization",
          historicalContext: "Center of wet rice cultivation and bronze drum culture in Northern Vietnam",
          coordinates: { lat: 21.0, lng: 105.8 },
          artifacts: [
            {
              id: "dong-son-drums",
              name: "Dong Son Bronze Drums & Rain Ritual",
              description: "Elaborate bronze drums used in rain-calling ceremonies. The drums depict boats, water, and agricultural scenes — evidence that water management was central to Dong Son identity.",
              rarity: "epic",
              historicalPeriod: "1000-200 BCE",
              significance: "Earliest bronze-age water ritual technology in SE Asia",
              yearBCE: 1000,
              category: "water-clock"
            },
            {
              id: "dong-son-rice-paddies",
              name: "Dong Son Wet Rice Paddies",
              description: "Systematic wet rice cultivation with bunded fields and water control in the Red River Delta — among the earliest in mainland Southeast Asia.",
              rarity: "rare",
              historicalPeriod: "1000 BCE",
              significance: "Foundation of Vietnamese agricultural civilization",
              yearBCE: 1000,
              category: "irrigation"
            },
            {
              id: "co-loa-moat",
              name: "Co Loa Citadel Moat System",
              description: "Triple-ring moat system surrounding the ancient Âu Lạc capital. Combined defensive and water management functions. 8 km outer perimeter.",
              rarity: "epic",
              historicalPeriod: "257 BCE",
              significance: "Largest ancient moat system in mainland SE Asia",
              yearBCE: 257,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "funan-kingdom",
      name: "Funan Kingdom",
      description: "The Funan Kingdom (1st-6th century CE) was the first large-scale hydraulic civilization in Southeast Asia. Based in the Mekong Delta, Funan built massive canal networks connecting the port city of Oc Eo to inland cities, wide enough for large boats according to Chinese records. Their sophisticated freshwater-saltwater management at Oc Eo port enabled trade with Rome, India, and China. Funan pioneered flood-recession rice cultivation that became the foundation of all subsequent Mekong Delta agriculture.",
      position: [16, 0, 8],
      color: "#00695C",
      era: "classical",
      dateRange: "1st - 6th century CE",
      locations: [
        {
          id: "mekong-delta",
          name: "Mekong Delta",
          description: "Center of Funan hydraulic civilization",
          historicalContext: "First large-scale canal networks in Southeast Asia connecting port cities to inland settlements",
          coordinates: { lat: 10.5, lng: 105.5 },
          artifacts: [
            {
              id: "funan-canals",
              name: "Funan Canal Network",
              description: "Massive canal system in the Mekong Delta connecting Oc Eo port to inland cities. Chinese records describe canals wide enough for large boats. Archaeological surveys reveal networks spanning hundreds of kilometers.",
              rarity: "legendary",
              historicalPeriod: "1st-6th c. CE",
              significance: "First large-scale hydraulic civilization in Southeast Asia",
              yearBCE: -200,
              category: "canal"
            },
            {
              id: "oc-eo-port",
              name: "Oc Eo Port Water Management",
              description: "Major international trading port with sophisticated freshwater-saltwater management, harbor drainage, and canal-based urban water supply. Traded with Rome, India, and China.",
              rarity: "epic",
              historicalPeriod: "1st-6th c. CE",
              significance: "Connected SE Asian water engineering to global maritime trade",
              yearBCE: -200,
              category: "canal"
            },
            {
              id: "funan-flood-rice",
              name: "Funan Flood-Recession Rice",
              description: "Managed seasonal Mekong flooding for deep-water rice cultivation. Fields were engineered to flood to specific depths and drain on predictable schedules.",
              rarity: "rare",
              historicalPeriod: "1st-6th c. CE",
              significance: "Foundation of all subsequent Mekong Delta agriculture",
              yearBCE: -300,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "champa-kingdom",
      name: "Champa Kingdom",
      description: "The Champa Kingdom (4th-15th century CE) of Central Vietnam combined sacred and practical water engineering. Their brick temple-towers at Mỹ Sơn featured integrated reservoir and canal systems for ritual water supply and irrigation. Champa developed unique steep-gradient tropical irrigation on the narrow coastal plain using short rivers from the Annam Mountains. Their port cities were precursors to Hội An, with tidal water management linking India and China trade routes.",
      position: [17, 0, 6],
      color: "#E65100",
      era: "medieval",
      dateRange: "4th - 15th century CE",
      locations: [
        {
          id: "central-vietnam-coast",
          name: "Central Vietnam Coast",
          description: "Heartland of Champa water engineering and maritime trade",
          historicalContext: "Champa combined sacred temple water systems with practical coastal irrigation",
          coordinates: { lat: 15.9, lng: 108.3 },
          artifacts: [
            {
              id: "cham-tower-reservoirs",
              name: "Cham Tower Reservoir Systems",
              description: "Brick temple-towers (such as Mỹ Sơn) with integrated reservoir and canal systems for ritual water supply and agricultural irrigation.",
              rarity: "epic",
              historicalPeriod: "4th-15th c. CE",
              significance: "Combined sacred and practical water engineering",
              yearBCE: -400,
              category: "dam"
            },
            {
              id: "cham-coastal-irrigation",
              name: "Cham Coastal Irrigation",
              description: "Narrow coastal plain irrigation using short rivers flowing from the Annam Mountains to the South China Sea. Systems engineered for rapid runoff control in steep terrain.",
              rarity: "rare",
              historicalPeriod: "4th-15th c. CE",
              significance: "Unique steep-gradient tropical irrigation",
              yearBCE: -500,
              category: "irrigation"
            },
            {
              id: "cham-harbors",
              name: "Cham Maritime Harbors",
              description: "Port cities (Hội An precursors) with tidal water management, freshwater supply, and harbor silting control.",
              rarity: "rare",
              historicalPeriod: "4th-15th c. CE",
              significance: "Maritime water infrastructure linking India and China trade routes",
              yearBCE: -400,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "dvaravati-kingdom",
      name: "Dvaravati Kingdom",
      description: "The Dvaravati Kingdom (6th-11th century CE) of Central Thailand built large oval moated settlements in the Chao Phraya basin. U Thong, Nakhon Pathom, and other sites feature multi-ring moats combining defense, water storage, and irrigation. Their canal-fed rice agriculture in the Central Thai lowlands was the precursor to Thai klong (canal) culture.",
      position: [15, 0, 7],
      color: "#827717",
      era: "medieval",
      dateRange: "6th - 11th century CE",
      locations: [
        {
          id: "chao-phraya-basin",
          name: "Chao Phraya Basin",
          description: "Center of Dvaravati moated city civilization",
          historicalContext: "Oval moated settlements combining defense, water storage, and irrigation in Central Thailand",
          coordinates: { lat: 14.0, lng: 100.1 },
          artifacts: [
            {
              id: "dvaravati-moated-cities",
              name: "Dvaravati Moated Cities",
              description: "Large oval moated settlements in the Chao Phraya basin. U Thong, Nakhon Pathom, and other sites feature multi-ring moats combining defense, water storage, and irrigation.",
              rarity: "epic",
              historicalPeriod: "6th-11th c. CE",
              significance: "Bridge between Iron Age moated sites and Khmer-era hydraulic cities",
              yearBCE: -600,
              category: "canal"
            },
            {
              id: "dvaravati-canal-agriculture",
              name: "Dvaravati Canal Agriculture",
              description: "Canal-fed rice agriculture in the Central Thai lowlands. Early hydraulic management of the Chao Phraya floodplain.",
              rarity: "rare",
              historicalPeriod: "6th-11th c. CE",
              significance: "Precursor to Thai klong (canal) culture",
              yearBCE: -600,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "pyu-city-states",
      name: "Pyu City-States (Myanmar)",
      description: "The Pyu City-States (2nd century BCE-9th century CE) created the largest pre-Bagan urban water systems in Myanmar. Sri Ksetra (UNESCO World Heritage) had massive urban water infrastructure serving a city of 18 km² — one of the largest ancient cities in Southeast Asia. Their gravity irrigation diverted Irrawaddy tributaries for rice cultivation, and the triple-moat Beikthano fortification was among the earliest urban water systems in mainland SE Asia.",
      position: [13, 0, 6],
      color: "#33691E",
      era: "classical",
      dateRange: "2nd c. BCE - 9th c. CE",
      locations: [
        {
          id: "irrawaddy-valley",
          name: "Irrawaddy Valley",
          description: "Heartland of Pyu city-state civilization in Myanmar",
          historicalContext: "Largest pre-Bagan urban water systems including UNESCO World Heritage Sri Ksetra",
          coordinates: { lat: 18.8, lng: 95.3 },
          artifacts: [
            {
              id: "sri-ksetra-reservoir",
              name: "Sri Ksetra Reservoir & Canal System",
              description: "Massive urban water infrastructure at Sri Ksetra (near modern Pyay). Reservoirs, canals, and moats served a city of 18 km² — one of the largest ancient cities in Southeast Asia. UNESCO World Heritage.",
              rarity: "legendary",
              historicalPeriod: "5th-9th c. CE",
              significance: "Largest pre-Bagan urban water system in Myanmar",
              yearBCE: -500,
              category: "dam"
            },
            {
              id: "pyu-gravity-irrigation",
              name: "Pyu Gravity Irrigation",
              description: "Canal systems diverting Irrawaddy tributaries for rice cultivation. Engineering principles later adopted by Bagan kingdom.",
              rarity: "rare",
              historicalPeriod: "5th-9th c. CE",
              significance: "Foundation of Burmese irrigation tradition",
              yearBCE: -500,
              category: "irrigation"
            },
            {
              id: "beikthano-moat",
              name: "Beikthano Moat System",
              description: "Triple-moat fortification with integrated water management at one of the oldest Pyu cities.",
              rarity: "epic",
              historicalPeriod: "2nd c. BCE-9th c. CE",
              significance: "Among the earliest urban water systems in mainland SE Asia",
              yearBCE: 200,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "srivijaya-empire",
      name: "Srivijaya Maritime Empire",
      description: "The Srivijaya Maritime Empire (7th-13th century CE) controlled the Strait of Malacca from Sumatra and the Malay Peninsula. Their river-port cities managed tidal influences, silting, and freshwater supply in estuarine environments. Understanding of monsoon water patterns for maritime trade timing required freshwater supply infrastructure for ships waiting months for seasonal wind shifts.",
      position: [14, 0, 11],
      color: "#1565C0",
      era: "medieval",
      dateRange: "7th - 13th century CE",
      locations: [
        {
          id: "palembang",
          name: "Palembang",
          description: "Capital of the Srivijaya Maritime Empire",
          historicalContext: "River-port city controlling the Strait of Malacca with sophisticated estuarine water management",
          coordinates: { lat: -2.9, lng: 104.7 },
          artifacts: [
            {
              id: "srivijaya-river-port",
              name: "Srivijaya River-Port Water Management",
              description: "Palembang and other river-port cities managed tidal influences, silting, and freshwater supply in estuarine environments. Controlled river traffic through canal systems.",
              rarity: "epic",
              historicalPeriod: "7th-13th c. CE",
              significance: "Earliest large-scale estuarine water management in SE Asia",
              yearBCE: -700,
              category: "canal"
            },
            {
              id: "srivijaya-monsoon-navigation",
              name: "Srivijaya Monsoon Navigation",
              description: "Understanding of monsoon water patterns for maritime trade timing. Ships waited in port cities for seasonal wind and current shifts — requiring freshwater supply infrastructure for extended stays.",
              rarity: "rare",
              historicalPeriod: "7th-13th c. CE",
              significance: "Water knowledge as maritime commerce infrastructure",
              yearBCE: -700,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "ancient-indonesia",
      name: "Ancient Indonesia (Nusantara)",
      description: "The Indonesian archipelago developed unique water management systems adapted to tropical monsoons, volcanic landscapes, and maritime environments across 17,000+ islands. From the Subak irrigation cooperatives of Bali (see also Balinese Subak entry) to the massive Segaran reservoir of the Majapahit Empire at Trowulan, Indonesian civilizations created diverse solutions to water challenges spanning 4,000 years.",
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
              id: "nusantara-subak-system",
              name: "Subak Irrigation System (Cross-reference)",
              description: "Democratic water-sharing cooperatives coordinated by water temples—one farmer, one vote regardless of land size. Full details under Balinese (Subak) civilization entry.",
              rarity: "legendary",
              historicalPeriod: "900 CE onwards",
              significance: "UNESCO World Heritage; see Balinese (Subak) entry for full details on water temple coordination, tektek allocation formula, and democratic governance",
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
            },
            {
              id: "jakarta-flood-canal",
              name: "Jakarta Flood Canal System",
              description: "Western and Eastern Flood Canals (Banjir Kanal) managing flooding in a megacity largely below sea level. Ongoing expansion.",
              rarity: "epic",
              historicalPeriod: "1918-Present",
              significance: "Managing flooding in a megacity below sea level",
              yearBCE: -1918,
              category: "canal"
            },
            {
              id: "jatiluhur-dam",
              name: "Jatiluhur Dam",
              description: "Indonesia's largest dam (105 m). Supplies irrigation for 240,000 hectares and drinking water for Jakarta.",
              rarity: "epic",
              historicalPeriod: "1967",
              significance: "Indonesia's largest dam; supplies Jakarta's drinking water",
              yearBCE: -1967,
              category: "dam"
            },
            {
              id: "ncicd-sea-wall",
              name: "NCICD (Giant Sea Wall Jakarta)",
              description: "Proposed 32 km sea wall to protect Jakarta from flooding and sea level rise. One of the largest coastal defense projects in the world.",
              rarity: "rare",
              historicalPeriod: "2014-Present",
              significance: "One of the largest coastal defense projects in the world",
              yearBCE: -2014,
              category: "dam"
            }
          ]
        },
        {
          id: "sumatra",
          name: "Sumatra",
          description: "Water management traditions across Sumatra's diverse cultures and landscapes",
          historicalContext: "Sumatran civilizations developed unique water systems adapted to volcanic highlands, tropical lowlands, and coastal environments",
          coordinates: { lat: -0.5, lng: 101.4 },
          artifacts: [
            {
              id: "minangkabau-tabek",
              name: "Minangkabau Tabek (Pond) System",
              description: "Highland pond systems in West Sumatra. Community-managed water collection and distribution for rice cultivation in volcanic highland terrain.",
              rarity: "rare",
              historicalPeriod: "Pre-colonial",
              significance: "Community-managed volcanic highland water system",
              yearBCE: -500,
              category: "dam"
            },
            {
              id: "batak-toba-fishery",
              name: "Batak Toba Lake Fishery Management",
              description: "Management of Lake Toba (the world's largest volcanic lake) fisheries through traditional water governance.",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Water governance for the world's largest volcanic lake",
              yearBCE: -500,
              category: "irrigation"
            },
            {
              id: "acehnese-canals",
              name: "Acehnese Canal Systems",
              description: "Northern Sumatra canal networks for pepper and rice cultivation. Managed by the Aceh Sultanate.",
              rarity: "rare",
              historicalPeriod: "13th c. CE onwards",
              significance: "Sultanate-era agricultural canal networks",
              yearBCE: -1250,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "xia-shang-dynasty",
      name: "Xia & Shang Dynasties",
      description: "Legendary foundations of Chinese hydraulic engineering—Yu the Great's flood control philosophy",
      position: [22, 0, -3],
      color: "#8B4513",
      era: "ancient",
      dateRange: "2070-1046 BCE",
      locations: [
        {
          id: "anyang-yinxu",
          name: "Yinxu (Anyang)",
          description: "Shang Dynasty capital with earliest Chinese water infrastructure",
          historicalContext: "Bronze Age civilization with sophisticated wells and moats",
          coordinates: { lat: 36.1167, lng: 114.3500 },
          artifacts: [
            {
              id: "yu-flood-control",
              name: "Yu the Great's Flood Philosophy",
              description: "'Don't block water—channel it!' Revolutionary principle that influenced all Chinese water engineering",
              rarity: "legendary",
              historicalPeriod: "2200 BCE (legendary)",
              significance: "Yu worked 13 years channeling floods; 'passed his door three times without entering'; established water management as imperial duty",
              yearBCE: 2200,
              category: "canal"
            },
            {
              id: "shang-wells",
              name: "Shang Dynasty Deep Wells",
              description: "Wooden-lined wells found at Yinxu—earliest systematic groundwater extraction in China",
              rarity: "rare",
              historicalPeriod: "1300-1046 BCE",
              significance: "Archaeological evidence at Yinxu; wooden linings preserved; oracle bone inscriptions mention wells",
              yearBCE: 1300,
              category: "irrigation"
            },
            {
              id: "shang-moats",
              name: "Shang Palace Moat Systems",
              description: "Defensive water barriers around palace complexes—earliest Chinese urban water features",
              rarity: "rare",
              historicalPeriod: "1600-1046 BCE",
              significance: "Surrounded palace complexes; combined defense with drainage; prototype for later city water systems",
              yearBCE: 1500,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "zhou-qin-dynasty",
      name: "Zhou & Qin Dynasties",
      description: "Systematization of water management—Dujiangyan and the Lingqu Canal",
      position: [20, 0, -4],
      color: "#4169E1",
      era: "ancient",
      dateRange: "1046-206 BCE",
      locations: [
        {
          id: "dujiangyan-site",
          name: "Dujiangyan",
          description: "2,250-year-old irrigation system still watering 5+ million hectares",
          historicalContext: "Built by Li Bing in 256 BCE—still functioning today",
          coordinates: { lat: 31.0000, lng: 103.6100 },
          artifacts: [
            {
              id: "dujiangyan-system",
              name: "Dujiangyan Irrigation System",
              description: "Fish Mouth divides river 40/60; Flying Sand Weir removes sediment; Bottle Neck controls flow—no dam to break",
              rarity: "legendary",
              historicalPeriod: "256 BCE",
              significance: "UNESCO World Heritage; still irrigates 5.3 million hectares; feeds 10+ million people; no dam—uses natural river dynamics",
              yearBCE: 256,
              category: "irrigation",
              unesco: { siteName: "Mount Qingcheng and the Dujiangyan Irrigation System", yearListed: 2000 },
              stillWorking: { age: "2,280 years", status: "Still irrigating 668,700 hectares" }
            },
            {
              id: "zhengguo-canal",
              name: "Zhengguo Canal",
              description: "150 km irrigation canal that transformed Qin agriculture and enabled empire-building",
              rarity: "epic",
              historicalPeriod: "246 BCE",
              significance: "Transformed arid Qin heartland into breadbasket; 40,000+ hectares irrigated; key to Qin conquest",
              yearBCE: 246,
              category: "canal"
            },
            {
              id: "lingqu-canal",
              name: "Lingqu Canal",
              description: "First contour canal connecting Yangtze and Pearl River systems—enabled conquest of southern China",
              rarity: "legendary",
              historicalPeriod: "214 BCE",
              significance: "36 km long; 36 lock gates; plough-shaped spillway; still functioning as navigation canal; UNESCO World Heritage",
              yearBCE: 214,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "han-dynasty",
      name: "Han Dynasty",
      description: "Golden age of Chinese hydraulics (206 BCE-220 CE). Invented the chain pump that one person could use to irrigate 2+ acres daily, first water-powered grain mills, and began Yellow River flood control levees. Technology spread to Korea, Japan, and Southeast Asia.",
      position: [21, 0, -2],
      color: "#DC143C",
      era: "classical",
      dateRange: "206 BCE - 220 CE",
      locations: [
        {
          id: "chang-an-han",
          name: "Chang'an (Han)",
          description: "Han Dynasty capital with revolutionary water technology",
          historicalContext: "First great flowering of Chinese water engineering",
          coordinates: { lat: 34.2667, lng: 108.9500 },
          artifacts: [
            {
              id: "chain-pump",
              name: "Han Dynasty Chain Pump (翻车)",
              description: "Square-pallet chain pump—one person could irrigate 2+ acres daily",
              rarity: "legendary",
              historicalPeriod: "~100 CE",
              significance: "Could lift water 4-5 meters; used for 2,000+ years; spread to Korea, Japan, Southeast Asia",
              yearBCE: -100,
              category: "water-lifting"
            },
            {
              id: "han-water-mills",
              name: "Han Dynasty Water Mills",
              description: "First water-powered grain milling in China",
              rarity: "epic",
              historicalPeriod: "~30 CE",
              significance: "Revolutionized grain processing; spread throughout empire; basis for later industrial applications",
              yearBCE: -30,
              category: "water-lifting"
            },
            {
              id: "yellow-river-levees",
              name: "Yellow River Flood Control Levees",
              description: "Systematic embankment construction to contain China's 'Sorrow'",
              rarity: "epic",
              historicalPeriod: "~100 BCE",
              significance: "Attempted to control world's most sediment-laden river; mixed success but established precedent",
              yearBCE: 100,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "sui-tang-dynasty",
      name: "Sui & Tang Dynasties",
      description: "Built the Grand Canal (587-608 CE)—world's longest artificial waterway at 1,776 km connecting Beijing to Hangzhou. Millions of workers connected 5 major river systems. Tang Chang'an was world's largest city (1 million people) with 108 walled wards, each with wells and canal access.",
      position: [23, 0, -1],
      color: "#FFD700",
      era: "medieval",
      dateRange: "581-907 CE",
      locations: [
        {
          id: "grand-canal",
          name: "Grand Canal",
          description: "1,776 km canal connecting 5 major river systems—UNESCO World Heritage",
          historicalContext: "Millions of workers, many deaths; enabled unified China",
          coordinates: { lat: 32.0000, lng: 118.7800 },
          artifacts: [
            {
              id: "grand-canal-system",
              name: "Grand Canal (大运河)",
              description: "World's longest artificial waterway—1,776 km connecting Beijing to Hangzhou",
              rarity: "legendary",
              historicalPeriod: "587-608 CE",
              significance: "Connected 5 river systems; still used today; UNESCO World Heritage (2014); enabled grain transport to capital",
              yearBCE: -600,
              category: "canal",
              unesco: { siteName: "The Grand Canal", yearListed: 2014 }
            },
            {
              id: "flash-lock-gates",
              name: "Tang Dynasty Flash Lock Gates",
              description: "Improved navigation through elevation changes on the Grand Canal",
              rarity: "epic",
              historicalPeriod: "618-907 CE",
              significance: "Allowed boats to transit between different water levels; precursor to pound locks",
              yearBCE: -700,
              category: "canal"
            }
          ]
        },
        {
          id: "chang-an-tang",
          name: "Chang'an (Tang)",
          description: "World's largest city with most advanced urban water system",
          historicalContext: "Population ~1 million; 108 walled wards each with wells and canal access",
          coordinates: { lat: 34.2667, lng: 108.9500 },
          artifacts: [
            {
              id: "chang-an-water-system",
              name: "Tang Chang'an Urban Water System",
              description: "108 walled wards, each with wells and canal access; lotus ponds and fountains in Imperial Palace",
              rarity: "epic",
              historicalPeriod: "618-907 CE",
              significance: "World's most advanced urban water system of its era; population 1 million; main canals through city",
              yearBCE: -700,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "song-dynasty",
      name: "Song Dynasty",
      description: "Technological peak of pre-modern Chinese water engineering (960-1279 CE). Qiao Weiyue invented the pound lock in 984 CE—500 years before Europe. Su Song built a 40-foot water-powered astronomical clock tower. Also developed tidal mills and paddle-wheel military boats.",
      position: [24, 0, -2],
      color: "#9932CC",
      era: "medieval",
      dateRange: "960-1279 CE",
      locations: [
        {
          id: "kaifeng",
          name: "Kaifeng (Northern Song)",
          description: "Song capital with peak of pre-modern water technology",
          historicalContext: "Most innovative era for Chinese water engineering",
          coordinates: { lat: 34.7917, lng: 114.3478 },
          artifacts: [
            {
              id: "pound-lock",
              name: "Song Dynasty Pound Lock",
              description: "First true canal lock invented by Qiao Weiyue in 984 CE—500 years before Europe",
              rarity: "legendary",
              historicalPeriod: "984 CE",
              significance: "Safe, gradual water transfer; ships rise/lower smoothly; minimal water loss; revolutionized canal navigation",
              yearBCE: -984,
              category: "canal"
            },
            {
              id: "su-song-clock",
              name: "Su Song's Water Clock Tower",
              description: "40-foot astronomical clock tower powered by water—most complex machine of medieval world",
              rarity: "legendary",
              historicalPeriod: "1088 CE",
              significance: "Hydraulic-powered automaton; astronomical observations; bells and gongs announced time; destroyed 1127 CE",
              yearBCE: -1088,
              category: "water-clock"
            },
            {
              id: "song-tidal-mills",
              name: "Song Dynasty Tidal Mills",
              description: "Harnessing tidal power for grain milling on coastal estuaries",
              rarity: "epic",
              historicalPeriod: "~1050 CE",
              significance: "Early tidal energy; operated twice daily; spread along coast",
              yearBCE: -1050,
              category: "water-lifting"
            }
          ]
        }
      ]
    },
    {
      id: "ming-dynasty",
      name: "Ming Dynasty",
      description: "Revolutionary Yellow River flood control (1368-1644 CE). Pan Jixun's '束水攻沙' (confine water to scour sand) used narrow channels to create fast flow that washes sediment to sea—opposite of traditional widening. Also built extensive coastal seawalls against typhoons.",
      position: [25, 0, -3],
      color: "#FF4500",
      era: "medieval",
      dateRange: "1368-1644 CE",
      locations: [
        {
          id: "yellow-river-ming",
          name: "Yellow River Basin",
          description: "Pan Jixun's systematic flood control",
          historicalContext: "Innovative approach to sediment management",
          coordinates: { lat: 35.0000, lng: 110.0000 },
          artifacts: [
            {
              id: "pan-jixun-method",
              name: "Pan Jixun's Yellow River Control",
              description: "'束水攻沙' (Confine water to scour sand)—narrow channels create fast flow that washes sediment to sea",
              rarity: "legendary",
              historicalPeriod: "16th century CE",
              significance: "Revolutionary approach; opposite of traditional widening; reduced flooding for generations",
              yearBCE: -1550,
              category: "dam"
            },
            {
              id: "ming-seawalls",
              name: "Ming Coastal Seawalls",
              description: "Protection against typhoons and flooding along China's coast",
              rarity: "epic",
              historicalPeriod: "1368-1644 CE",
              significance: "Protected agricultural land; enabled coastal settlement; some still standing",
              yearBCE: -1400,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "vedic-mauryan-india",
      name: "Vedic & Mauryan India",
      description: "Sacred water philosophy (1500-185 BCE). Rigveda declared 'Waters, you bring us life'—rivers Ganga, Yamuna, Saraswati worshipped as divine. Kautilya's Arthashastra (~300 BCE) created world's first water policy: state builds dams, water tax 1/4 harvest for canal irrigation.",
      position: [14, 0, 2],
      color: "#FF8C00",
      era: "ancient",
      dateRange: "1500 BCE - 185 BCE",
      locations: [
        {
          id: "pataliputra",
          name: "Pataliputra",
          description: "Mauryan capital with state-managed water systems",
          historicalContext: "Kautilya's Arthashastra defined world's first comprehensive water policy",
          coordinates: { lat: 25.6100, lng: 85.1400 },
          artifacts: [
            {
              id: "arthashastra-water",
              name: "Kautilya's Arthashastra Water Policy",
              description: "World's first comprehensive water policy document (~300 BCE)—taxes based on water source",
              rarity: "legendary",
              historicalPeriod: "~300 BCE",
              significance: "State builds dams and tanks; water tax: 1/4 harvest for canal, 1/5 for tank; private wells tax-free",
              yearBCE: 300,
              category: "irrigation"
            },
            {
              id: "sudarshana-lake",
              name: "Sudarshana Lake Dam",
              description: "First documented dam in India—built by Chandragupta Maurya in Gujarat",
              rarity: "epic",
              historicalPeriod: "~300 BCE",
              significance: "Repaired multiple times over 800 years; inscription records repairs; early dam engineering",
              yearBCE: 300,
              category: "dam"
            },
            {
              id: "vedic-water-philosophy",
              name: "Vedic Water Philosophy",
              description: "'Waters, you are the ones who bring us life' (Rigveda)—dharmic duty to preserve water",
              rarity: "rare",
              historicalPeriod: "1500-500 BCE",
              significance: "Varuna god of waters; rivers sacred (Ganga, Yamuna, Saraswati); monsoon as Indra's gift",
              yearBCE: 1500,
              category: "fountain"
            },
            {
              id: "arthashastra-water-engineering",
              name: "Arthashastra Water Engineering Manual",
              description: "Kautilya's treatise with detailed chapters on dam construction, reservoir management, canal engineering, water pricing, and penalties for water theft.",
              rarity: "legendary",
              historicalPeriod: "~300 BCE",
              significance: "World's first engineering manual for water infrastructure",
              yearBCE: 300,
              category: "dam"
            },
            {
              id: "mauryan-water-pricing",
              name: "Mauryan Water Pricing System",
              description: "Arthashastra specifies water taxes based on irrigation method: river water (free), canal water (1/5 crop), reservoir (1/4), well (1/3), carried (variable).",
              rarity: "epic",
              historicalPeriod: "~300 BCE",
              significance: "First documented water pricing system in history",
              yearBCE: 300,
              category: "irrigation"
            },
            {
              id: "mauryan-rainfall",
              name: "Mauryan Rainfall Measurement",
              description: "Arthashastra describes standardized rain gauges (adhaka vessel) requiring officials to record rainfall for agricultural planning and tax assessment.",
              rarity: "epic",
              historicalPeriod: "~300 BCE",
              significance: "Among earliest systematic rainfall measurement systems",
              yearBCE: 300,
              category: "irrigation"
            },
            {
              id: "sringaverapura-waterworks",
              name: "Sringaverapura Water Works",
              description: "Sophisticated three-tank water filtration and storage system near the Ganges. Water entered via wide inlet, passed through settling tanks, stored in brick-lined reservoir.",
              rarity: "epic",
              historicalPeriod: "1st c. BCE",
              significance: "Earliest multi-stage water treatment system in India",
              yearBCE: 100,
              category: "sanitation"
            },
            {
              id: "vedic-water-divination",
              name: "Vedic Water Divination (Dakargala)",
              description: "Varahamihira's Brihat Samhita describes methods for locating groundwater based on vegetation, soil type, ant hills, and rock formations.",
              rarity: "rare",
              historicalPeriod: "1500-500 BCE",
              significance: "Earliest documented groundwater exploration methodology",
              yearBCE: 1500,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "chola-dynasty",
      name: "Chola Dynasty (South India)",
      description: "Masters of gravity-fed tank cascades (300 BCE-1279 CE). Built 10,000+ interconnected tanks in Tamil Nadu alone—each feeds the next, no pumping needed, still functioning today. Grand Anicut dam (329m long) still irrigates 1 million+ acres after 1,900 years.",
      position: [13, 0, 4],
      color: "#B8860B",
      era: "classical",
      dateRange: "300 BCE - 1279 CE",
      locations: [
        {
          id: "thanjavur",
          name: "Thanjavur",
          description: "Heart of Chola water engineering",
          historicalContext: "10,000+ tanks in Tamil Nadu alone; community-managed cascade systems",
          coordinates: { lat: 10.7867, lng: 79.1378 },
          artifacts: [
            {
              id: "grand-anicut",
              name: "Grand Anicut (Kallanai)",
              description: "Oldest functional dam in the world—still irrigates 1 million+ acres after 1,900 years",
              rarity: "legendary",
              historicalPeriod: "~2nd century CE",
              significance: "329m long, 20m wide, 5.4m high; built by Karikala Chola; model for British irrigation works",
              yearBCE: -150,
              category: "dam"
            },
            {
              id: "tank-cascade-system",
              name: "South Indian Tank Cascade",
              description: "Gravity-fed interconnected tanks—highest to lowest, each feeds the next, returns to river",
              rarity: "legendary",
              historicalPeriod: "900-1200 CE",
              significance: "10,000+ tanks in Tamil Nadu; no pumping needed; community managed; still functioning",
              yearBCE: -900,
              category: "irrigation"
            },
            {
              id: "chola-sluices",
              name: "Chola Stone Sluice Gates",
              description: "Precisely engineered stone sluices for controlling water release from tanks",
              rarity: "epic",
              historicalPeriod: "900-1200 CE",
              significance: "Village-level water councils managed sluice operation; fair water distribution",
              yearBCE: -1000,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "delhi-sultanate",
      name: "Delhi Sultanate",
      description: "Persian-influenced water architecture (1206-1526 CE). Built monumental stepwells like Chand Baori with 13 stories and 3,500 steps! Stepwells served as water supply, cool retreats (10-15°C cooler), and social spaces. Also introduced Persian wheels and underground karez tunnels.",
      position: [12, 0, 1],
      color: "#2E8B57",
      era: "medieval",
      dateRange: "1206-1526 CE",
      locations: [
        {
          id: "delhi-stepwells",
          name: "Delhi & Gujarat",
          description: "Architectural masterpieces of water storage",
          historicalContext: "Combined Persian and Indian water traditions",
          coordinates: { lat: 28.6139, lng: 77.2090 },
          artifacts: [
            {
              id: "stepwell-architecture",
              name: "Stepwell Architecture (Baoli/Vav)",
              description: "Multi-story architectural water access—Chand Baori has 13 stories and 3,500 steps!",
              rarity: "legendary",
              historicalPeriod: "11th-16th century CE",
              significance: "Water supply + cool retreat (10-15°C cooler) + social space; Rani ki Vav UNESCO World Heritage",
              yearBCE: -1100,
              category: "irrigation"
            },
            {
              id: "persian-wheel-india",
              name: "Persian Wheel (Rahat)",
              description: "Animal-powered vertical water wheel for lifting irrigation water",
              rarity: "rare",
              historicalPeriod: "1206-1526 CE",
              significance: "Introduced from Persia; spread across North India; still used in some areas",
              yearBCE: -1300,
              category: "water-lifting"
            },
            {
              id: "karez-india",
              name: "Karez (Indian Qanats)",
              description: "Underground gravity-flow tunnels adapted from Persian technology",
              rarity: "rare",
              historicalPeriod: "1206-1526 CE",
              significance: "Built in arid regions of Rajasthan and Deccan; protected from evaporation",
              yearBCE: -1300,
              category: "aqueduct"
            },
            {
              id: "hauz-khas",
              name: "Hauz Khas Reservoir",
              description: "Large urban reservoir in Delhi built by Alauddin Khalji in 1296 CE. Firoz Shah Tughlaq later restored and expanded it.",
              rarity: "epic",
              historicalPeriod: "1296 CE",
              significance: "Major medieval urban water infrastructure",
              yearBCE: -1296,
              category: "dam"
            },
            {
              id: "tughlaqabad-water",
              name: "Tughlaqabad Fort Water System",
              description: "Massive fort with integrated reservoir, aqueduct, and distribution network. Underground channels connected to an artificial lake.",
              rarity: "epic",
              historicalPeriod: "1321 CE",
              significance: "Most sophisticated Sultanate-era military water engineering",
              yearBCE: -1321,
              category: "aqueduct"
            },
            {
              id: "firoz-shah-canals",
              name: "Firoz Shah's Canal Restoration",
              description: "Restored and extended two major canals from the Yamuna and Sutlej rivers. Western Yamuna Canal fed Delhi and irrigated thousands of hectares.",
              rarity: "epic",
              historicalPeriod: "1355 CE",
              significance: "Largest medieval canal restoration in India",
              yearBCE: -1355,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "mughal-empire",
      name: "Mughal Empire",
      description: "Paradise garden water systems (1526-1857 CE). Taj Mahal features 400+ fountains fed by raised marble channels, underground terra-cotta pipes, and water lifted from Yamuna by Persian wheels. Shalimar Gardens in Kashmir has 410 fountains across three cascading terraces.",
      position: [15, 0, 0],
      color: "#800020",
      era: "medieval",
      dateRange: "1526-1857 CE",
      locations: [
        {
          id: "agra-taj",
          name: "Agra (Taj Mahal)",
          description: "Peak of Mughal water garden design",
          historicalContext: "Combined Persian, Central Asian, and Indian traditions",
          coordinates: { lat: 27.1751, lng: 78.0421 },
          artifacts: [
            {
              id: "taj-mahal-water",
              name: "Taj Mahal Char Bagh Water System",
              description: "400+ fountains fed by raised marble channels—copper pipes, reflecting pools, geometric perfection",
              rarity: "legendary",
              historicalPeriod: "1632-1653 CE",
              significance: "Water lifted from Yamuna by Persian wheels; underground terra-cotta pipes; gravity-fed from elevated tanks",
              yearBCE: -1650,
              category: "fountain"
            },
            {
              id: "shalimar-gardens",
              name: "Shalimar Gardens Water Features",
              description: "Cascading fountains across three terraces at Lahore and Kashmir",
              rarity: "epic",
              historicalPeriod: "1641 CE",
              significance: "UNESCO World Heritage; 410 fountains at Kashmir Shalimar; geometric water channels",
              yearBCE: -1641,
              category: "fountain"
            },
            {
              id: "mughal-canal-restoration",
              name: "Western Yamuna Canal Restoration",
              description: "Mughal revival of ancient waterways for irrigation and urban supply",
              rarity: "rare",
              historicalPeriod: "17th century CE",
              significance: "Restored ancient channels; expanded irrigation; supplied Delhi",
              yearBCE: -1650,
              category: "canal"
            },
            {
              id: "mughal-char-bagh",
              name: "Mughal Char Bagh Garden Water System",
              description: "Quadrilateral garden design with central water channels dividing space into four parts. Gravity-fed fountains, cascades, pools at Taj Mahal, Shalimar, Humayun's Tomb.",
              rarity: "legendary",
              historicalPeriod: "16th-17th c. CE",
              significance: "Global influence on garden water design",
              yearBCE: -1550,
              category: "fountain"
            },
            {
              id: "mughal-fountains",
              name: "Mughal Fountain Technology",
              description: "Copper pipes, adjustable nozzles, and gravity-fed pressure systems creating elaborate fountain displays. Some gardens had 400+ fountains operating simultaneously.",
              rarity: "epic",
              historicalPeriod: "16th-17th c. CE",
              significance: "Advanced pressure-pipe engineering",
              yearBCE: -1550,
              category: "fountain"
            },
            {
              id: "red-fort-water",
              name: "Red Fort Water System (Nahr-i-Bihisht)",
              description: "Shah Jahan's Red Fort had the 'Stream of Paradise' — a canal fed by the Yamuna running through the palace complex, supplying gardens, baths, and cooling systems.",
              rarity: "epic",
              historicalPeriod: "1648 CE",
              significance: "Integration of water into palatial architecture",
              yearBCE: -1648,
              category: "canal"
            },
            {
              id: "mughal-ice-transport",
              name: "Mughal Ice Transport System",
              description: "Systematic transport of ice from Himalayan glaciers to Delhi and Agra via insulated runners. Ice stored in underground chambers for imperial use.",
              rarity: "rare",
              historicalPeriod: "17th c. CE",
              significance: "Long-distance cold-chain water logistics",
              yearBCE: -1650,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "rajasthan-desert",
      name: "Rajasthan (Desert Water Harvesting)",
      description: "Survival water systems for extreme desert (800-1900 CE). Only 100-200mm rainfall annually—every drop precious. Kund underground tanks store 2+ million liters with domed roofs keeping water cool. Tanka household tanks (~20,000 liters) last the full dry season.",
      position: [11, 0, 2],
      color: "#DAA520",
      era: "medieval",
      dateRange: "800-1900 CE",
      locations: [
        {
          id: "jaisalmer",
          name: "Jaisalmer & Thar Desert",
          description: "Survival water systems in extreme arid conditions",
          historicalContext: "Only 100-200mm rainfall annually; every drop precious",
          coordinates: { lat: 26.9157, lng: 70.9083 },
          artifacts: [
            {
              id: "kund-system",
              name: "Kund/Kundi (Underground Tanks)",
              description: "Limestone catchment beds channel rainwater through gravel filters to domed underground tanks",
              rarity: "epic",
              historicalPeriod: "Medieval period",
              significance: "Community shared; stores 2+ million liters; domed roof keeps water cool; gravel filtration",
              yearBCE: -1200,
              category: "irrigation"
            },
            {
              id: "tanka-household",
              name: "Tanka (Household Tanks)",
              description: "Underground cylindrical tanks below courtyards collecting roof runoff",
              rarity: "rare",
              historicalPeriod: "Medieval period",
              significance: "Stores ~20,000 liters; lasts full dry season; every household has one in desert towns",
              yearBCE: -1000,
              category: "irrigation"
            },
            {
              id: "johad-pond",
              name: "Johad (Community Ponds)",
              description: "Earthen check dams creating community water reservoirs",
              rarity: "rare",
              historicalPeriod: "Medieval period",
              significance: "Recharged groundwater; community maintained; connected in chains across watersheds",
              yearBCE: -1200,
              category: "dam"
            },
            {
              id: "chand-baori",
              name: "Chand Baori Stepwell",
              description: "3,500 steps descending 13 stories (30m) deep. One of the deepest and largest stepwells in India. Geometric precision of staircase design is architecturally extraordinary.",
              rarity: "legendary",
              historicalPeriod: "8th-9th c. CE",
              significance: "Most visually iconic water structure in India",
              yearBCE: -800,
              category: "fountain"
            },
            {
              id: "naadi-village-pond",
              name: "Naadi (Village Pond)",
              description: "Community ponds at center of every Rajasthani village. Catchment areas defined by tradition. Silt removal and maintenance governed by community rules.",
              rarity: "common",
              historicalPeriod: "Traditional",
              significance: "Foundation of desert community water management",
              yearBCE: -500,
              category: "dam"
            },
            {
              id: "bavdi-stepwell",
              name: "Bavdi (Small Stepwell)",
              description: "Smaller stepwells in individual neighborhoods or farms. Less ornate than large vav but functionally identical. Thousands survive across Rajasthan.",
              rarity: "common",
              historicalPeriod: "Traditional",
              significance: "Demonstrates widespread engineering knowledge",
              yearBCE: -500,
              category: "fountain"
            },
            {
              id: "khadin-farming",
              name: "Khadin (Desert Runoff Farming)",
              description: "Earthen embankments across gentle slopes capturing desert runoff. Water soaks into soil, allowing crop growth in subsequent dry season. Developed in Jaisalmer.",
              rarity: "epic",
              historicalPeriod: "15th c. CE",
              significance: "Unique desert runoff capture found nowhere else",
              yearBCE: -1400,
              category: "irrigation"
            },
            {
              id: "paar-system",
              name: "Paar System (Underground Dykes)",
              description: "Underground dykes built across subsurface streams in sandy riverbeds. Forces underground water to the surface, creating accessible pools.",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Invisible engineering — manipulating underground water flow",
              yearBCE: -500,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "ottoman-empire",
      name: "Ottoman Empire",
      description: "The Ottoman Empire (1299–1922 CE) ruled vast territories spanning three continents and became one of history's most sophisticated hydraulic civilizations. At its zenith under Suleiman the Magnificent in the 16th century, the empire commanded a population exceeding 25 million people, all dependent on elaborate water infrastructure for drinking, agriculture, and ritual bathing. The imperial capital Istanbul—formerly Constantinople—inherited Roman and Byzantine water systems but dramatically expanded them under the genius of chief architect Mimar Sinan, who constructed over 50 kilometers of gravity-fed aqueducts and distribution networks. Ottoman water culture was inseparable from Islamic charitable traditions: wealthy patrons endowed sebil fountains, hammam bath complexes, and public drinking facilities across cities from Baghdad to Budapest, making clean water a religious duty and a civic virtue that shaped urban life for six centuries.",
      position: [8, 0, -2],
      color: "#B71C1C",
      era: "medieval",
      dateRange: "1299-1922 CE",
      locations: [
        {
          id: "istanbul",
          name: "Istanbul",
          description: "Imperial capital and center of Ottoman hydraulic engineering",
          historicalContext: "Straddling Europe and Asia, Istanbul required massive water infrastructure to serve its population of over 500,000 during the 16th century",
          coordinates: { lat: 41.0082, lng: 28.9784 },
          artifacts: [
            {
              id: "kirkchesme-system",
              name: "Kırkçeşme Water Supply System",
              description: "Commissioned by Sultan Suleiman the Magnificent and designed by the legendary architect Mimar Sinan in 1554 CE, the Kırkçeşme system was one of the most ambitious hydraulic engineering projects of the medieval world. Spanning over 50 kilometers from the Belgrade Forest north of Istanbul to the city center, the system used pure gravity flow through a network of stone aqueducts, underground tunnels, and distribution chambers. Water was collected from multiple forest springs and streams, channeled through sediment-settling basins, and delivered to 33 distribution points (çeşme) throughout the city. The system featured the magnificent Maglova Aqueduct—a two-tiered stone bridge spanning 258 meters across the valley at a height of 35 meters—which remains standing today as a UNESCO-recognized masterpiece of Ottoman engineering.",
              rarity: "legendary",
              historicalPeriod: "Ottoman Classical Period (1554 CE)",
              significance: "Supplied water to over 500,000 residents through 33 distribution points using pure gravity; Mimar Sinan's engineering masterpiece",
              yearBCE: -1554,
              category: "aqueduct"
            },
            {
              id: "ottoman-hammam",
              name: "Ottoman Hammam Water Systems",
              description: "The Ottoman hammam (bathhouse) represented the pinnacle of pre-industrial heated water engineering, combining Roman thermae traditions with Islamic purification requirements. Each hammam contained a sophisticated water circulation system with three distinct temperature zones: the soğukluk (cold room), ılıklık (warm room), and sıcaklık (hot room), heated by a wood-fired furnace (külhan) beneath the marble floor. Water was drawn from city aqueducts into rooftop cisterns, then gravity-fed through lead and terracotta pipes to individual basins (kurna) throughout the bathing chambers. The heated floor (göbek taşı) was a massive marble slab warmed by flue gases circulating through hollow channels beneath—a system called cehennemlik. Istanbul alone contained over 300 hammams at the empire's peak, each recycling and heating thousands of liters of water daily through ingenious thermal management systems.",
              rarity: "epic",
              historicalPeriod: "Ottoman Classical Period (1400-1700 CE)",
              significance: "Over 300 hammams in Istanbul alone; integrated heated water circulation serving millions for ritual purification and hygiene",
              yearBCE: -1500,
              category: "sanitation"
            },
            {
              id: "sebil-fountain",
              name: "Sebil Public Fountain Culture",
              description: "The sebil—from the Arabic word for 'path' or 'way'—was a distinctly Ottoman charitable institution providing free drinking water to passersby in public spaces. Wealthy patrons, sultans, and their families endowed ornate stone fountain structures at crossroads, mosque courtyards, and market squares throughout the empire. Each sebil featured brass taps or grilled windows through which attendants dispensed water in shared cups, funded in perpetuity through waqf (charitable endowment) revenues from shops, farms, or caravanserais. The most elaborate sebils, such as the Fountain of Ahmed III (1728) at Topkapı Palace, were decorated with carved marble, calligraphy, and floral reliefs, functioning as both civic infrastructure and artistic monuments. At the empire's height, Istanbul alone had over 700 public fountains and sebils, making it one of the best-watered cities in the pre-modern world.",
              rarity: "rare",
              historicalPeriod: "Ottoman Period (1400-1900 CE)",
              significance: "Over 700 public fountains in Istanbul; embodied Islamic charitable water distribution tradition",
              yearBCE: -1500,
              category: "fountain"
            },
            {
              id: "valide-sultan-aqueduct",
              name: "Valide Sultan Aqueduct",
              description: "Also known as the Uzun Kemer (Long Aqueduct), this monumental structure was completed in 1554 CE as part of Mimar Sinan's comprehensive water supply system for Istanbul. Stretching over 50 kilometers from water sources in the Belgrade Forest to the imperial capital, it was the longest aqueduct constructed during the Ottoman period. The system incorporated multiple bridge-aqueducts crossing deep valleys, with the tallest sections rising over 35 meters above the valley floor. Commissioned by Mihrimah Sultan, daughter of Suleiman the Magnificent, the aqueduct exemplified the Ottoman practice of royal women sponsoring major infrastructure projects as acts of piety and public service. The stone-and-mortar construction employed pointed arches characteristic of Ottoman architectural style, and the system continued to supply water to Istanbul well into the 19th century.",
              rarity: "epic",
              historicalPeriod: "Ottoman Classical Period (1554 CE)",
              significance: "Longest Ottoman aqueduct at 50+ km; supplied water to the imperial capital for over 300 years",
              yearBCE: -1554,
              category: "aqueduct"
            },
            {
              id: "suleymaniye-water",
              name: "Suleymaniye Complex Water System",
              description: "Mimar Sinan's masterpiece with integrated water: ablution fountains, hammam, hospital, kitchen, school.",
              rarity: "legendary",
              historicalPeriod: "1550-1557 CE",
              significance: "Integration of water engineering with monumental architecture",
              yearBCE: -1554,
              category: "fountain"
            },
            {
              id: "ottoman-taksim",
              name: "Ottoman Taksim (Distribution Terminal)",
              description: "Stone buildings dividing aqueduct water into calibrated flows with standardized lule units.",
              rarity: "epic",
              historicalPeriod: "16th-19th c. CE",
              significance: "Standardized urban water measurement and distribution",
              yearBCE: -1550,
              category: "aqueduct"
            },
            {
              id: "ottoman-jerusalem-water",
              name: "Ottoman Jerusalem Water",
              description: "Suleiman rebuilt Jerusalem's water — restoring ancient aqueducts from Solomon's Pools and building six public fountains.",
              rarity: "epic",
              historicalPeriod: "1536-1541 CE",
              significance: "Ottoman restoration of Biblical-era water infrastructure",
              yearBCE: -1538,
              category: "aqueduct"
            },
            {
              id: "mostar-bridge",
              name: "Mostar Bridge (Stari Most)",
              description: "Iconic bridge across the Neretva River. Single arch spanning 29m, rising 24m. UNESCO World Heritage.",
              rarity: "legendary",
              historicalPeriod: "1566 CE",
              significance: "Iconic Ottoman bridge engineering — UNESCO site",
              yearBCE: -1566,
              category: "canal",
              unesco: { siteName: "Old Bridge Area of the Old City of Mostar", yearListed: 2005 }
            },
            {
              id: "ottoman-water-courts",
              name: "Ottoman Water Court Records",
              description: "Thousands of court documents recording water rights, disputes, allocations, endowments, and infrastructure maintenance across 600 years. The most detailed pre-modern water governance archive anywhere, documenting water law as a written legal tradition across the entire Ottoman Empire.",
              rarity: "rare",
              historicalPeriod: "14th-19th c. CE",
              significance: "Most detailed pre-modern water governance archive in history",
              yearBCE: -1400,
              category: "canal"
            },
            {
              id: "ottoman-cairo-nile",
              name: "Ottoman Cairo Nile Management",
              description: "Ottoman governors maintained the Nile flood system—nilometers, canal openings, and the annual 'Cutting of the Canal' ceremony. A continuation of Pharaonic water management traditions through 5,000 years under Ottoman administration from the 16th to 19th centuries.",
              rarity: "rare",
              historicalPeriod: "16th-19th c. CE",
              significance: "Continuation of 5,000-year Pharaonic water management under Ottoman rule",
              yearBCE: -1550,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "safavid-persia",
      name: "Safavid Persia",
      description: "The Safavid dynasty (1501–1736 CE) transformed Persia into one of the Islamic world's most culturally refined civilizations, with their capital Isfahan becoming legendary as 'half the world' (Esfahān nesf-e jahān). Under Shah Abbas I (r. 1588–1629), Isfahan was redesigned as a garden city centered on the magnificent Naqsh-e Jahan Square, with an elaborate network of water channels, fountains, and cascading gardens fed by the Zayandeh River. The Safavids inherited and dramatically expanded the ancient Persian qanat system, maintaining over 40,000 underground water tunnels across the Iranian plateau that collectively transported billions of liters annually without any mechanical pumping. Their bridge-dams across the Zayandeh River—notably the Si-o-se-pol and Khaju Bridge—were engineering marvels that simultaneously served as river crossings, water level regulators, social gathering spaces, and architectural monuments, representing an integrated approach to water management unmatched anywhere in the contemporary world.",
      position: [6, 0, 0],
      color: "#4A148C",
      era: "medieval",
      dateRange: "1501-1736 CE",
      locations: [
        {
          id: "isfahan",
          name: "Isfahan",
          description: "Safavid capital renowned as 'half the world' for its beauty and engineering",
          historicalContext: "Shah Abbas I transformed Isfahan into a garden city with population exceeding 600,000 in the early 17th century",
          coordinates: { lat: 32.6546, lng: 51.6680 },
          artifacts: [
            {
              id: "si-o-se-pol-bridge",
              name: "Si-o-se-pol Bridge",
              description: "Completed in 1602 CE under the patronage of Allahverdi Khan, chancellor to Shah Abbas I, the Si-o-se-pol (Bridge of 33 Arches) is one of the most remarkable dual-purpose hydraulic structures ever constructed. Spanning 298 meters across the Zayandeh River with 33 elegant stone arches, the bridge functions simultaneously as a pedestrian crossing, a dam controlling river flow levels, and a social gathering space with enclosed lower-level tea houses. The lower tier contains sluice gates that can be opened or closed to regulate water levels upstream, effectively creating a weir that raises water for diversion into irrigation canals feeding Isfahan's famous gardens. The bridge's two-tiered design channels water through the lower arches while pedestrians walk above, with hexagonal alcoves providing rest areas along the 14.5-meter-wide walkway. This ingenious combination of transportation infrastructure and water management has kept the bridge in continuous use for over four centuries.",
              rarity: "legendary",
              historicalPeriod: "Safavid Period (1602 CE)",
              significance: "298-meter bridge-dam with 33 arches; simultaneously serves as crossing, weir, and social space for over 400 years",
              yearBCE: -1602,
              category: "dam"
            },
            {
              id: "chahar-bagh-water",
              name: "Chahar Bagh Garden Water System",
              description: "The Chahar Bagh (Four Gardens) boulevard in Isfahan, constructed under Shah Abbas I beginning in 1596 CE, featured one of the most elaborate urban garden irrigation systems of the pre-modern world. A central water channel ran the entire 1.5-kilometer length of the avenue, fed by gravity from the Zayandeh River through underground conduits and elevated aqueducts. The channel cascaded through a series of terraced pools, fountains, and waterfalls, with subsidiary channels branching to irrigate the eight royal gardens flanking the boulevard. Each garden employed the classical Persian chahar bagh (four-part) layout with intersecting water channels symbolizing the four rivers of paradise, while sophisticated stone-carved water chutes created decorative patterns in the flowing water. The system demonstrated the Safavid mastery of hydraulic gradient management, maintaining steady water flow across varying terrain without mechanical assistance.",
              rarity: "epic",
              historicalPeriod: "Safavid Period (1596-1630 CE)",
              significance: "1.5 km garden boulevard with gravity-fed cascading fountains and channels irrigating eight royal gardens",
              yearBCE: -1596,
              category: "fountain"
            },
            {
              id: "safavid-qanat-expansion",
              name: "Expanded Qanat Networks",
              description: "The Safavid dynasty inherited the ancient Persian qanat system—underground water tunnels tapping mountain aquifers—and expanded it to unprecedented scale across the Iranian plateau. By the 17th century, Persia maintained over 40,000 qanat tunnels with a combined length exceeding 270,000 kilometers, collectively transporting an estimated 75% of all water used in the country. Safavid engineers refined qanat construction techniques, developing specialized tools for surveying underground gradients and ventilation shaft spacing, with some qanats extending over 70 kilometers from their mountain source to desert settlements. The empire established a formal guild of muqannis (qanat diggers) who passed their specialized knowledge of hydrogeology and tunnel construction through generations, making qanat maintenance a respected hereditary profession. This vast underground water network sustained agriculture, drinking water, and urban life across one of the world's most arid regions entirely without mechanical pumping or external energy inputs.",
              rarity: "rare",
              historicalPeriod: "Safavid Period (1501-1736 CE)",
              significance: "Maintained 40,000+ qanats totaling 270,000 km; supplied 75% of Persia's water without mechanical pumping",
              yearBCE: -1600,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "ptolemaic-egypt",
      name: "Ptolemaic & Hellenistic Egypt",
      description: "The Ptolemaic dynasty (323–30 BCE) ruled Egypt following Alexander the Great's conquest, blending Greek engineering knowledge with millennia of Egyptian hydraulic tradition to create some of the ancient world's most ambitious water management projects. Under Ptolemy II Philadelphus (r. 285–246 BCE), the Fayum Depression was transformed from seasonal marshland into a vast agricultural breadbasket through systematic canal construction and the expansion of the legendary Lake Moeris reservoir. Alexandria, the capital city founded by Alexander himself, became the intellectual center of the Mediterranean world, housing the Great Library and the Mouseion where engineers like Ctesibius and later Hero of Alexandria developed revolutionary hydraulic devices including the first force pump and pneumatic fountains. The Ptolemaic administration maintained a sophisticated bureaucracy overseeing irrigation schedules, canal dredging, and flood management across the Nile Delta, supporting a population that may have reached 7–8 million people—making Ptolemaic Egypt the most densely populated and agriculturally productive region in the ancient Mediterranean.",
      position: [-2, 0, -4],
      color: "#FFD54F",
      era: "classical",
      dateRange: "323-30 BCE",
      locations: [
        {
          id: "alexandria-ptolemaic",
          name: "Alexandria",
          description: "Capital of Ptolemaic Egypt and center of Hellenistic engineering",
          historicalContext: "Home to the Great Library and Mouseion where Ctesibius invented the force pump circa 270 BCE",
          coordinates: { lat: 31.2001, lng: 29.9187 },
          artifacts: [
            {
              id: "lake-moeris-expansion",
              name: "Lake Moeris Reservoir Expansion",
              description: "Ptolemy II Philadelphus undertook one of antiquity's most ambitious hydraulic engineering projects by dramatically expanding the ancient Lake Moeris (modern Birket Qarun) in the Fayum Depression, approximately 80 kilometers southwest of Cairo. The natural lake had been used for flood storage since the Middle Kingdom (circa 1850 BCE), but Ptolemaic engineers constructed massive embankments, regulating sluices, and a network of feeder canals from the Nile to transform it into a controlled reservoir with an estimated capacity of 13 billion cubic meters of water. The Bahr Yussef canal—a natural Nile branch enhanced by human engineering—served as the primary feeder channel, with stone-and-earth control structures regulating inflow during the annual flood season. This enormous reservoir moderated downstream flooding, stored water for year-round irrigation of the surrounding Fayum basin, and reclaimed approximately 1,200 square kilometers of previously barren desert for productive agriculture. Ancient sources including Herodotus and Strabo marveled at the lake's scale, with Strabo noting it was 'like a sea in extent.'",
              rarity: "legendary",
              historicalPeriod: "Ptolemaic Period (285-246 BCE)",
              significance: "13 billion cubic meter reservoir; reclaimed 1,200 km² of desert for agriculture; one of antiquity's largest hydraulic projects",
              yearBCE: 270,
              category: "dam"
            },
            {
              id: "alexandria-harbor-hydraulics",
              name: "Alexandria Harbor Hydraulics",
              description: "The harbor of Alexandria, designed under Ptolemy I Soter and expanded by his successors, was the most technologically sophisticated port facility in the ancient Mediterranean. The Great Harbor and the Eunostos (Harbor of Good Return) were separated by the Heptastadion—a 1,200-meter causeway connecting the mainland to the island of Pharos. Ptolemaic engineers constructed massive limestone breakwaters extending hundreds of meters into the sea to protect the harbors from storm surges, while sluice gates built into the Heptastadion allowed controlled water exchange between the two harbors, flushing sediment and maintaining water quality. The harbor infrastructure included stone-lined channels for directing freshwater from Lake Mareotis into the harbor to reduce salinity and prevent marine fouling of ship hulls. Archaeological surveys have revealed submerged quay walls, loading platforms, and hydraulic mechanisms that regulated water levels within the inner harbor basins.",
              rarity: "epic",
              historicalPeriod: "Ptolemaic Period (305-30 BCE)",
              significance: "Most advanced ancient harbor with 1,200m causeway, sluice gates, and freshwater flushing systems",
              yearBCE: 290,
              category: "canal"
            }
          ]
        },
        {
          id: "fayum-oasis",
          name: "Fayum Oasis",
          description: "Vast agricultural region transformed by Ptolemaic irrigation engineering",
          historicalContext: "The Fayum Depression was converted from seasonal marshland to Egypt's most productive agricultural zone",
          coordinates: { lat: 29.3084, lng: 30.8428 },
          artifacts: [
            {
              id: "fayum-irrigation-expansion",
              name: "Fayum Irrigation Expansion",
              description: "Under Ptolemy II Philadelphus, Ptolemaic engineers undertook a systematic expansion of irrigation infrastructure in the Fayum oasis that transformed it into the breadbasket of Hellenistic Egypt. The project involved deepening and widening the Bahr Yussef canal, constructing a network of secondary and tertiary irrigation channels totaling hundreds of kilometers, and building stone-and-earthen embankments to control water distribution across 1,200 square kilometers of newly reclaimed farmland. Greek settler-soldiers (cleruchs) were granted parcels of this newly irrigated land, creating a hybrid Greco-Egyptian agricultural community that produced wheat, barley, olives, and grapes for export throughout the Mediterranean. Papyrus records from the period detail sophisticated irrigation schedules coordinated by a bureaucracy of water officials (epistates) who managed canal maintenance, water allocation disputes, and annual dredging operations. The Fayum's agricultural output was so prodigious that it helped finance Ptolemaic military campaigns and the construction of Alexandria's monumental architecture.",
              rarity: "epic",
              historicalPeriod: "Ptolemaic Period (285-200 BCE)",
              significance: "Expanded irrigation to 1,200 km² of farmland; financed Ptolemaic military and architectural ambitions",
              yearBCE: 260,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "aksumite-empire",
      name: "Aksumite Empire",
      description: "The Aksumite Empire (100–940 CE) was one of the four great powers of the ancient world alongside Rome, Persia, and China, ruling from its highland capital in modern-day Ethiopia and Eritrea. Controlling the lucrative Red Sea trade routes between the Roman Mediterranean and Indian Ocean commerce, Aksum grew wealthy from ivory, gold, and incense exports, supporting a population center that may have housed 20,000–50,000 people at its peak. The Aksumites were master stone carvers who shaped their semi-arid highland environment through sophisticated water harvesting systems including rock-cut reservoirs, underground cisterns, and elaborate palace drainage networks. Their engineering adapted to the challenging Ethiopian highland terrain—elevations exceeding 2,000 meters with dramatic seasonal rainfall patterns—by carving water storage directly into volcanic bedrock and constructing gravity-fed distribution channels that collected monsoon rains for year-round use in a region where water availability could vary dramatically between wet and dry seasons.",
      position: [0, 0, -1],
      color: "#FF6F00",
      era: "classical",
      dateRange: "100-940 CE",
      locations: [
        {
          id: "aksum-city",
          name: "Aksum",
          description: "Capital of the Aksumite Empire and center of Ethiopian highland water engineering",
          historicalContext: "One of the ancient world's four great powers, Aksum controlled Red Sea trade and developed sophisticated highland water management",
          coordinates: { lat: 14.1211, lng: 38.7469 },
          artifacts: [
            {
              id: "mai-shum-reservoir",
              name: "Mai Shum Reservoir",
              description: "The Mai Shum (Queen of Sheba's Bath) is a monumental rock-cut reservoir located in the heart of ancient Aksum, carved directly from the volcanic bedrock of the Ethiopian highlands. Measuring approximately 17 meters wide, 53 meters long, and up to 3 meters deep, this rectangular basin was hewn from solid granite using iron tools and served as both a royal water supply and a ceremonial bathing pool associated with the legendary Queen of Sheba. Stone-carved channels directed seasonal rainwater from surrounding hillsides into the reservoir through a series of settling basins that removed sediment before the water entered the main pool. Steps carved into the rock walls allowed access at varying water levels throughout the dry season, while overflow channels prevented flooding during heavy monsoon rains. The reservoir remains in use today—over 1,700 years after its construction—serving the modern city of Aksum as a water source and gathering place, making it one of the longest continuously used water infrastructure systems in Africa.",
              rarity: "epic",
              historicalPeriod: "Aksumite Period (300-600 CE)",
              significance: "Rock-cut reservoir still in use after 1,700 years; associated with the Queen of Sheba legend",
              yearBCE: -350,
              category: "dam"
            },
            {
              id: "dungur-palace-water",
              name: "Dungur Palace Water System",
              description: "The Dungur Palace, identified by archaeologists as a major Aksumite elite residence dating to the 6th–7th century CE, featured an elaborate integrated water management system that rivaled contemporary Roman and Persian facilities. The palace complex covered approximately 3,000 square meters and incorporated stone-lined drainage channels beneath its floors that collected rainwater from the building's flat roofs and courtyard surfaces, directing it to underground cisterns for storage. Separate channels managed wastewater from kitchen and bathing areas, routing it away from the living quarters through carefully graded stone conduits. The system included a sophisticated separation of clean water collection from wastewater disposal—a sanitary engineering principle that many contemporary civilizations had not yet adopted. Archaeological excavations revealed terracotta pipe segments and stone-carved junction boxes that allowed maintenance access to the underground drainage network.",
              rarity: "rare",
              historicalPeriod: "Aksumite Period (500-700 CE)",
              significance: "3,000 m² palace with integrated rainwater collection and wastewater separation; advanced for its era",
              yearBCE: -600,
              category: "sanitation"
            },
            {
              id: "aksumite-cisterns",
              name: "Aksumite Cistern Engineering",
              description: "Throughout the Aksumite highlands, engineers carved extensive underground cistern networks from the local volcanic tuff and basalt rock, creating reliable water storage in a region with highly seasonal rainfall patterns. These cisterns ranged from small household installations holding 5,000–10,000 liters to large community reservoirs capable of storing over 100,000 liters through the 6-month dry season. The cisterns featured carved intake channels with stone grates to filter debris, plastered interior walls to prevent seepage, and narrow openings at the surface to minimize evaporation—critical in the semi-arid highland climate where daytime temperatures can exceed 30°C. Some cisterns were interconnected through underground channels, creating networked storage systems that distributed water across neighborhoods and allowed overflow from full cisterns to fill those still below capacity. This technology spread throughout the Ethiopian highlands and influenced water management practices in the region for over a millennium.",
              rarity: "rare",
              historicalPeriod: "Aksumite Period (200-800 CE)",
              significance: "Underground cistern networks storing 100,000+ liters; influenced Ethiopian water engineering for over 1,000 years",
              yearBCE: -400,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "tiwanaku-empire",
      name: "Tiwanaku Empire",
      description: "The Tiwanaku Empire (300–1000 CE) arose on the harsh altiplano surrounding Lake Titicaca at an elevation of 3,812 meters—the world's highest navigable lake—in modern-day Bolivia. Despite the extreme altitude, freezing temperatures, and limited rainfall, Tiwanaku engineers developed the suka kollu (raised field) agricultural system that was up to 10 times more productive than modern dry farming techniques in the same region. At its peak around 700 CE, the empire's influence extended across 600,000 square kilometers of the Andean highlands, supporting an estimated 365,000–1,000,000 people through ingenious water management that turned one of Earth's most challenging environments into productive agricultural land. The capital city of Tiwanaku itself was a planned urban center with stone-lined aqueducts, monumental temple complexes with sophisticated drainage, and residential areas served by channeled spring water—all constructed at an altitude where most modern cities struggle to function.",
      position: [-20, 0, 6],
      color: "#4DB6AC",
      era: "ancient",
      dateRange: "300-1000 CE",
      locations: [
        {
          id: "tiwanaku-site",
          name: "Tiwanaku",
          description: "Capital of the Tiwanaku Empire on the shores of Lake Titicaca",
          historicalContext: "Built at 3,812 meters elevation, one of the highest urban centers in the ancient world",
          coordinates: { lat: -16.5546, lng: -68.6738 },
          artifacts: [
            {
              id: "suka-kollus",
              name: "Suka Kollus (Raised Field Agriculture)",
              description: "The suka kollu system was the Tiwanaku Empire's most revolutionary agricultural innovation, consisting of raised planting platforms 5–15 meters wide and up to 200 meters long, elevated 1 meter above the surrounding terrain and separated by water-filled channels 2–4 meters wide. The channels served multiple critical functions at the extreme 3,812-meter altitude: water absorbed solar heat during the day and released it as thermal radiation at night, protecting crops from the devastating frosts that regularly destroy conventional agriculture on the altiplano. Nutrient-rich sediment accumulated in the channels and was periodically dredged and spread on the planting surfaces as fertilizer, while aquatic plants and fish in the channels provided additional food sources. Modern experimental reconstructions by archaeologist Clark Erickson demonstrated that suka kollus produced yields of 10 tonnes per hectare—compared to just 1–2 tonnes from conventional dry farming in the same region—without any chemical fertilizers or irrigation pumps. At the empire's peak, an estimated 120,000 hectares of raised fields surrounded Lake Titicaca, producing enough food to sustain the entire Tiwanaku population.",
              rarity: "legendary",
              historicalPeriod: "Tiwanaku Period (300-1000 CE)",
              significance: "10x more productive than modern dry farming; 120,000 hectares of raised fields fed the entire empire without mechanical aid",
              yearBCE: -500,
              category: "irrigation"
            },
            {
              id: "tiwanaku-aqueducts",
              name: "Tiwanaku Urban Aqueducts",
              description: "The capital city of Tiwanaku featured a network of stone-lined aqueducts that brought fresh spring water from the surrounding mountains to the urban core, serving a population estimated at 20,000–40,000 residents. These channels were constructed from precisely cut andesite and sandstone blocks, fitted together without mortar using a technique of interlocking copper clamps that made the joints watertight and earthquake-resistant. The aqueduct system included settling basins where sediment was removed before water entered the city's distribution network, and overflow channels that directed excess water to agricultural fields on the city's periphery. The monumental Akapana pyramid—the largest structure at Tiwanaku—incorporated an internal water circulation system with channels carved into each of its seven terraced levels, creating a cascading water feature that may have had both practical drainage and ceremonial significance. Archaeological evidence suggests the system operated continuously for over 500 years, demonstrating remarkable engineering durability at extreme altitude.",
              rarity: "epic",
              historicalPeriod: "Tiwanaku Period (400-900 CE)",
              significance: "Stone aqueducts with copper-clamped joints served 20,000-40,000 residents at 3,812m elevation for 500+ years",
              yearBCE: -600,
              category: "aqueduct"
            },
            {
              id: "titicaca-water-management",
              name: "Lake Titicaca Water Management",
              description: "Managing the world's highest navigable lake at 3,812 meters elevation required the Tiwanaku to develop unique water engineering approaches adapted to extreme altitude conditions. Engineers constructed stone-reinforced canal networks connecting Lake Titicaca's shoreline to inland agricultural zones, using the lake's relatively stable water temperature to moderate the harsh altiplano climate along the canal corridors. Raised causeways built across shallow lake margins created controlled wetland zones where totora reeds were cultivated for boat-building, construction material, and food. The Tiwanaku also managed fish populations in the lake through constructed stone weirs and breeding pools, supplementing agricultural food production. This integrated lake management system sustained communities across the Titicaca Basin for over 700 years, creating one of the densest pre-Columbian population concentrations in South America outside of coastal Peru.",
              rarity: "rare",
              historicalPeriod: "Tiwanaku Period (300-1000 CE)",
              significance: "Managed the world's highest navigable lake for agriculture and aquaculture; supported dense altiplano populations for 700 years",
              yearBCE: -500,
              category: "irrigation"
            },
            {
              id: "puma-punku-drainage",
              name: "Puma Punku Precision Drainage",
              description: "Precision-cut stone drainage channels at the monumental complex of Puma Punku. Stone blocks were fitted so precisely that water flowed through joints without mortar, with some channels cut to tolerances of just 1 mm. This represents the highest precision stone-water engineering achieved anywhere in the pre-Columbian Americas.",
              rarity: "legendary",
              historicalPeriod: "Tiwanaku Period (300-1000 CE)",
              significance: "1 mm tolerances in stone drainage — highest precision stone-water engineering in the Americas",
              yearBCE: -600,
              category: "sanitation"
            },
            {
              id: "tiwanaku-qocha",
              name: "Tiwanaku Qocha (Mountain Reservoirs)",
              description: "Small constructed ponds (qochas) across the altiplano capturing rainfall for livestock and limited irrigation. Thousands of these reservoirs have been documented across the Tiwanaku sphere of influence, providing decentralized water storage across a vast high-altitude territory.",
              rarity: "rare",
              historicalPeriod: "Tiwanaku Period (300-1000 CE)",
              significance: "Thousands of decentralized mountain reservoirs across the Tiwanaku territory",
              yearBCE: -500,
              category: "dam"
            },
            {
              id: "tiwanaku-perimeter-canal",
              name: "Tiwanaku Perimeter Drainage Canal",
              description: "A major drainage canal surrounding the urban core of Tiwanaku. During the rainy season it managed seasonal floods, and during the dry season it provided water supply — sophisticated dual-function infrastructure serving both flood control and water supply in a single channel system.",
              rarity: "epic",
              historicalPeriod: "Tiwanaku Period (300-1000 CE)",
              significance: "Dual-function canal: flood control in rainy season and water supply in dry season",
              yearBCE: -500,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "chimu-empire",
      name: "Chimú Empire",
      description: "The Chimú Empire (900–1470 CE) dominated the arid northern coast of Peru, building the largest adobe city in the Americas—Chan Chan—which at its peak housed 60,000–100,000 residents in one of the driest deserts on Earth. The Chimú inherited and vastly expanded the hydraulic engineering traditions of their Moche predecessors, constructing the remarkable La Cumbre Intervalley Canal that carried water 80 kilometers across barren desert between the Chicama and Moche river valleys. Their engineers developed innovative solutions for desert water management including walk-in wells (puquios) that tapped the water table, sunken gardens (wachaques) that used capillary action to irrigate crops below ground level, and sophisticated filtration galleries that cleaned sediment from irrigation water before it reached agricultural fields. The Chimú's mastery of desert water engineering was so renowned that when the Inca Empire conquered them in 1470 CE, the Inca deliberately relocated Chimú hydraulic engineers to Cusco to apply their expertise throughout the Inca realm.",
      position: [-18, 0, 8],
      color: "#E65100",
      era: "medieval",
      dateRange: "900-1470 CE",
      locations: [
        {
          id: "chan-chan",
          name: "Chan Chan",
          description: "Capital of the Chimú Empire and largest adobe city in the Americas",
          historicalContext: "Chan Chan covered 20 km² in the bone-dry Moche Valley, requiring extraordinary water engineering to sustain its population",
          coordinates: { lat: -8.1043, lng: -79.0746 },
          artifacts: [
            {
              id: "la-cumbre-canal",
              name: "La Cumbre Intervalley Canal",
              description: "The La Cumbre Canal was one of the most ambitious hydraulic engineering projects in pre-Columbian South America, stretching approximately 80 kilometers across the Atacama-adjacent desert to transfer water from the Chicama River valley to the Moche River valley where Chan Chan was located. Constructed between 1050 and 1300 CE, the canal traversed extremely challenging terrain including rocky ridges, sand dunes, and steep ravines, requiring the construction of stone-lined channels, elevated aqueduct sections, and at least three major tunnel segments cut through solid rock. The canal maintained a precise gradient of approximately 0.1% over its entire length, requiring sophisticated surveying techniques that modern engineers have found remarkably accurate. Along its route, the Chimú built settling basins, distribution junctions, and fortified guard posts to protect this critical water lifeline, as the canal represented the primary water supply augmenting Chan Chan's inadequate local water sources. When the Inca besieged Chan Chan in the 1460s, they reportedly cut the La Cumbre Canal to force the city's surrender—recognizing that controlling water meant controlling the empire.",
              rarity: "legendary",
              historicalPeriod: "Chimú Period (1050-1300 CE)",
              significance: "80 km intervalley canal across desert; one of the longest pre-Columbian canals; its severing by Inca forces led to Chan Chan's fall",
              yearBCE: -1100,
              category: "canal"
            },
            {
              id: "chan-chan-water-distribution",
              name: "Chan Chan Urban Water Distribution",
              description: "Chan Chan, covering approximately 20 square kilometers, was the largest adobe city in the Americas and required innovative water solutions to sustain its estimated 60,000–100,000 residents in the hyper-arid Moche Valley (annual rainfall under 10mm). The Chimú developed walk-in wells called puquios—deep rectangular excavations lined with stone and adobe that reached the water table 10–15 meters below the surface, providing reliable groundwater access independent of seasonal river flow. Adjacent to the wells, the Chimú constructed wachaques (sunken gardens)—large rectangular depressions excavated to within 1–2 meters of the water table, where crops grew using capillary moisture rising through the soil without surface irrigation. The nine royal compounds (ciudadelas) of Chan Chan each contained their own wells, reservoirs, and bathing platforms, while an elaborate system of stone-lined channels distributed water from the La Cumbre Canal to gardens, kitchens, and workshop areas throughout the city. This multi-layered water infrastructure allowed Chan Chan to flourish for over 500 years in a desert environment that receives virtually no rainfall.",
              rarity: "epic",
              historicalPeriod: "Chimú Period (900-1470 CE)",
              significance: "Sustained 60,000-100,000 residents in a desert with under 10mm annual rainfall using walk-in wells and sunken gardens",
              yearBCE: -1000,
              category: "sanitation"
            },
            {
              id: "chimu-filtration-galleries",
              name: "Chimú Filtration Galleries",
              description: "The Chimú developed underground filtration galleries—horizontal tunnels lined with graded gravel and sand layers—to remove sediment and organic matter from irrigation water before it reached agricultural fields and urban distribution networks. These galleries were typically 1.5–2 meters in height, allowing maintenance workers to enter for cleaning and repair, and extended 50–200 meters along the margins of main irrigation canals. Water percolated laterally through carefully layered filtration media of progressively finer gravel, coarse sand, and fine sand, emerging from collection channels on the downstream side substantially clearer than the turbid canal water entering the gallery. This filtration was critical because the Chicama and Moche rivers carry heavy sediment loads during seasonal floods, and unfiltered water would rapidly clog the narrow secondary channels serving individual agricultural plots. The technology demonstrated an empirical understanding of particle filtration principles that would not be formally described by Western science until the 18th century.",
              rarity: "rare",
              historicalPeriod: "Chimú Period (1000-1400 CE)",
              significance: "Underground filtration galleries removing sediment; demonstrated empirical filtration principles centuries before Western science",
              yearBCE: -1100,
              category: "irrigation"
            },
            {
              id: "wachaque-sunken-gardens",
              name: "Wachaque (Sunken Gardens)",
              description: "Fields excavated below ground level to reach the water table directly, requiring no irrigation whatsoever. Plant roots accessed groundwater through capillary action. Found throughout Chan Chan and surrounding areas, these sunken gardens represent zero-irrigation agriculture in one of the driest deserts on Earth.",
              rarity: "epic",
              historicalPeriod: "Chimú Period (1100-1470 CE)",
              significance: "Zero-irrigation desert agriculture — plant roots directly access the water table",
              yearBCE: -1200,
              category: "irrigation"
            },
            {
              id: "chimu-flood-walls",
              name: "Chimú Flood Control Walls",
              description: "Massive adobe walls (La Muralla de La Cumbre) protecting Chan Chan from El Niño-driven flooding. Standing 8 feet tall and stretching 6 miles long, these walls were positioned perpendicular to flood flow to deflect water around the city — an engineering response to extreme climate events.",
              rarity: "epic",
              historicalPeriod: "Chimú Period (1100-1470 CE)",
              significance: "6-mile flood wall protecting world's largest adobe city from El Niño flooding",
              yearBCE: -1200,
              category: "dam"
            },
            {
              id: "chimu-hydraulic-governance",
              name: "Chimú Hydraulic Governance",
              description: "Water management as political power. The Chimú kingdom expanded by conquering river valleys and controlling water distribution. When the Inca conquered the Chimú (~1470 CE), they cut off Chan Chan's water supply — proving water was the empire's critical vulnerability and the key to political control.",
              rarity: "rare",
              historicalPeriod: "Chimú Period (900-1470 CE)",
              significance: "Water control as political power — the Inca conquered Chimú by cutting their water supply",
              yearBCE: -1200,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "wari-empire",
      name: "Wari Empire",
      description: "The Wari Empire (500–1000 CE) was the first expansionist state to unify much of the Peruvian highlands, predating the more famous Inca Empire by over 400 years and establishing many of the administrative and engineering traditions the Inca would later adopt. From their capital near modern Ayacucho at 2,700 meters elevation, the Wari controlled a territory stretching over 1,300 kilometers along the Andean cordillera, administering diverse ecological zones from coastal deserts to high-altitude grasslands through a network of planned administrative cities. Their most impressive planned settlement, Pikillacta near Cusco, was a precisely laid-out city of over 700 structures covering 47 hectares, served by an integrated water supply and drainage system that supported an estimated 10,000 residents. The Wari pioneered highland terrace agriculture with stone-lined irrigation canals that would later be refined and expanded by the Inca, making them arguably the original architects of Andean highland water engineering.",
      position: [-19, 0, 7],
      color: "#AD1457",
      era: "ancient",
      dateRange: "500-1000 CE",
      locations: [
        {
          id: "pikillacta",
          name: "Pikillacta",
          description: "Major Wari administrative city near modern Cusco",
          historicalContext: "One of the most precisely planned cities in pre-Columbian South America, covering 47 hectares with 700+ structures",
          coordinates: { lat: -13.6141, lng: -71.7140 },
          artifacts: [
            {
              id: "wari-terrace-irrigation",
              name: "Wari Highland Terrace Irrigation",
              description: "Wari engineers constructed elaborate agricultural terraces across the steep Andean hillsides, transforming otherwise unusable slopes into productive farmland through a combination of stone-walled platforms and integrated irrigation channels. These terraces featured stone-lined canals that captured water from highland springs and seasonal streams, distributing it through a gravity-fed network across multiple terrace levels with stone drop structures controlling flow velocity on steep gradients. Each terrace platform was carefully constructed with layers of gravel for drainage, subsoil for moisture retention, and topsoil for planting—an engineered soil profile that prevented waterlogging while maintaining adequate moisture for crops at elevations between 2,500 and 4,000 meters. The Wari terrace systems covered thousands of hectares across the highlands and represented the first large-scale implementation of irrigated terrace agriculture in the Andes, establishing techniques that the Inca Empire would later adopt and expand across their much larger territory. Archaeological evidence from sites like Cerro Baúl shows that Wari terraces supported diverse crops including maize, quinoa, and potatoes, along with chicha beer production facilities that required reliable water supplies.",
              rarity: "epic",
              historicalPeriod: "Wari Period (600-900 CE)",
              significance: "First large-scale Andean terrace irrigation; precursor to Inca terrace systems across thousands of hectares",
              yearBCE: -700,
              category: "irrigation"
            },
            {
              id: "pikillacta-water-system",
              name: "Pikillacta Urban Water System",
              description: "Pikillacta was one of the most precisely planned cities in pre-Columbian South America, and its integrated water supply and drainage system reflects the sophisticated urban engineering capabilities of the Wari state. The city's 47-hectare rectangular grid layout incorporated stone-lined channels running beneath the main streets, collecting rainwater from building roofs and courtyard surfaces and directing it to central drainage conduits that exited the city walls. Fresh water was supplied from springs located at higher elevation through a stone-and-mortar aqueduct approximately 2 kilometers long, feeding distribution basins that served the city's estimated 10,000 residents in residential compounds, administrative buildings, and ceremonial plazas. The drainage system was designed to handle the intense seasonal rains of the highland wet season (November–March) while maintaining dry conditions within the city's enclosed compounds during storms. The sophistication of Pikillacta's water infrastructure suggests centralized state planning and engineering expertise that would not be matched in the region until the Inca built Cusco five centuries later.",
              rarity: "rare",
              historicalPeriod: "Wari Period (600-1000 CE)",
              significance: "Integrated water system for 10,000+ residents; most precisely planned pre-Columbian highland city",
              yearBCE: -700,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "joseon-korea",
      name: "Joseon Dynasty Korea",
      description: "The Joseon Dynasty (1392–1897 CE) was one of the longest-ruling monarchies in world history, governing the Korean Peninsula for over five centuries and producing remarkable innovations in water science and engineering. Under King Sejong the Great (r. 1418–1450), Korea became the first nation to develop standardized rain measurement with the cheugugi rain gauge in 1441—predating European equivalents by nearly 200 years—establishing a nationwide meteorological observation network that informed agricultural planning and flood preparedness. The dynasty's capital, Hanyang (modern Seoul), was designed according to pungsu (geomancy) principles that integrated natural waterways into urban planning, with the Cheonggyecheon stream channelized and lined with stone to manage flooding while providing water for the city's 200,000+ residents. Joseon engineers also constructed the Hwaseong Fortress (1794–1796), a UNESCO World Heritage Site that incorporated sophisticated moats, wells, reservoirs, and drainage systems into its defensive architecture, demonstrating the dynasty's integration of hydraulic engineering with military architecture.",
      position: [15, 0, -2],
      color: "#1B5E20",
      era: "medieval",
      dateRange: "1392-1897 CE",
      locations: [
        {
          id: "seoul-hanyang",
          name: "Seoul (Hanyang)",
          description: "Capital of the Joseon Dynasty for over 500 years",
          historicalContext: "Designed according to geomantic principles integrating natural waterways into urban planning for 200,000+ residents",
          coordinates: { lat: 37.5665, lng: 126.9780 },
          artifacts: [
            {
              id: "cheonggyecheon-stream",
              name: "Cheonggyecheon Stream Restoration",
              description: "The Cheonggyecheon stream runs 10.9 kilometers through the heart of Seoul, and its engineering history spans the entire Joseon Dynasty from the 14th through 19th centuries. Joseon engineers channelized this natural waterway with stone-lined embankments up to 3 meters high, constructing 24 stone bridges across its width and building stepped stone walls that could accommodate water level variations of over 2 meters during monsoon flooding. The stream served as Seoul's primary drainage artery, collecting stormwater and wastewater from the city's northern and southern districts and channeling it eastward to the Han River, while stone weirs at intervals created pools used for laundering, vegetable washing, and fire-fighting water reserves. During the reign of King Yeongjo (1724–1776), a major dredging and reconstruction project mobilized over 200,000 laborers to widen and deepen the channel after catastrophic flooding had devastated the capital. The stream's stone infrastructure survived for over 500 years before being covered by a highway in 1958, then was spectacularly restored as an urban waterway in 2005 in one of the world's most celebrated urban renewal projects.",
              rarity: "epic",
              historicalPeriod: "Joseon Period (1394-1897 CE)",
              significance: "10.9 km stone-lined urban stream with 24 bridges; managed flooding for 500+ years; iconic 2005 restoration",
              yearBCE: -1394,
              category: "canal"
            },
            {
              id: "hwaseong-fortress-water",
              name: "Hwaseong Fortress Water Systems",
              description: "Hwaseong Fortress, constructed between 1794 and 1796 in Suwon under King Jeongjo, is a UNESCO World Heritage Site that represents the pinnacle of Joseon military hydraulic engineering. The 5.7-kilometer fortress wall incorporated a continuous moat system fed by diverted stream water, with sluice gates at strategic points that could flood approach corridors to impede attackers. Within the fortress, engineers constructed multiple deep wells (some reaching 15+ meters to the water table), rainwater collection cisterns at each guard tower, and underground stone-lined channels draining the interior streets and parade grounds. The Hwahongmun Water Gate—a seven-arched stone bridge built into the fortress wall where the Suwoncheon stream passes through—served simultaneously as a flood control structure, defensive position, and aesthetic centerpiece, with its arches designed to accelerate water flow during floods while preventing enemy passage. The fortress demonstrated the Joseon integration of practical hydraulic engineering with Confucian ideals of harmonious design.",
              rarity: "rare",
              historicalPeriod: "Late Joseon Period (1796 CE)",
              significance: "UNESCO World Heritage fortress with integrated moats, wells, cisterns, and the iconic Hwahongmun Water Gate",
              yearBCE: -1796,
              category: "sanitation"
            },
            {
              id: "cheugugi-rain-gauge",
              name: "Joseon Rain Gauge (Cheugugi)",
              description: "In 1441 CE, during the reign of King Sejong the Great, Korean scientists developed the cheugugi—the world's first standardized rain gauge—predating the earliest European rain gauges (by Benedetto Castelli in Italy, 1639) by nearly 200 years. The device consisted of a cylindrical bronze or iron vessel 30 cm tall and 15 cm in diameter, placed on a stone pedestal at standardized height, with graduated markings on a measuring stick used to record rainfall depth after each precipitation event. King Sejong distributed cheugugi instruments to every provincial government office across the Korean Peninsula, establishing a nationwide meteorological observation network that reported rainfall data to the central government at regular intervals. This systematic data collection enabled the Joseon court to predict agricultural yields, prepare for droughts and floods, calibrate tax assessments based on actual growing conditions, and allocate emergency grain reserves to regions experiencing poor harvests. The cheugugi system represented an unprecedented integration of scientific measurement, bureaucratic data collection, and evidence-based governance that would not be matched anywhere else in the world for two centuries.",
              rarity: "legendary",
              historicalPeriod: "Joseon Period (1441 CE)",
              significance: "World's first standardized rain gauge; nationwide meteorological network 200 years before Europe; enabled evidence-based governance",
              yearBCE: -1441,
              category: "water-clock"
            }
          ]
        }
      ]
    },
    {
      id: "polynesian-voyaging",
      name: "Polynesian Voyaging Civilizations",
      description: "The Polynesian voyaging civilizations (1000 BCE–1600 CE) accomplished the most extraordinary maritime expansion in human history, colonizing virtually every habitable island across the vast Pacific Ocean—an area covering over 16 million square kilometers—using double-hulled canoes navigated by stars, currents, and wave patterns. Fresh water management was the critical limiting factor for these trans-oceanic voyages of 3,000 kilometers or more between island groups, requiring ingenious storage and conservation techniques that sustained crews of 20–80 people for weeks at sea. From their ancestral homeland in Tonga and Samoa (settled circa 900 BCE), Polynesian navigators reached the Hawaiian Islands by 400 CE, New Zealand by 1250 CE, and the remote Rapa Nui (Easter Island) by 800–1200 CE, each colonization requiring solutions to unique freshwater challenges. On the islands they settled, Polynesians developed diverse water management systems adapted to local geology and climate, from volcanic rock cisterns and spring-fed irrigation terraces to the elaborate ahu platform drainage systems that protected their monumental stone architecture from water damage.",
      position: [25, 0, 15],
      color: "#00BCD4",
      era: "ancient",
      dateRange: "1000 BCE-1600 CE",
      locations: [
        {
          id: "tonga-homeland",
          name: "Tonga",
          description: "Ancestral homeland of Polynesian voyaging culture",
          historicalContext: "One of the first island groups settled by Lapita peoples circa 900 BCE, becoming the staging ground for Pacific exploration",
          coordinates: { lat: -21.1790, lng: -175.1982 },
          artifacts: [
            {
              id: "voyaging-water-storage",
              name: "Voyaging Water Storage Systems",
              description: "Polynesian trans-oceanic voyages of 3,000 kilometers or more required sophisticated freshwater storage and rationing systems that represented the difference between successful colonization and death at sea. Double-hulled voyaging canoes (vaka hourua) carried freshwater in a combination of sealed bamboo tubes (each holding 2–5 liters), hollowed-out coconut shells plugged with fiber stoppers, and large gourd vessels (ipu) lashed securely between the hulls. A typical colonization voyage carrying 30–80 people required 500–2,000 liters of freshwater for a 2–4 week crossing, supplemented by rainwater collected in sail-cloth catchments and the liquid from green drinking coconuts carried as both food and emergency water reserves. Navigators developed sophisticated water rationing protocols based on estimated voyage duration and weather patterns, with the navigator-priest controlling water distribution and reducing rations when calms extended travel time. Some voyaging traditions also carried water-purifying plants and used evaporation techniques with plant-fiber wicks to desalinate seawater in emergencies, demonstrating empirical knowledge of water purification principles.",
              rarity: "epic",
              historicalPeriod: "Polynesian Expansion (500 BCE-1300 CE)",
              significance: "Enabled colonization of the Pacific Ocean across 16 million km²; sophisticated rationing sustained crews for weeks at sea",
              yearBCE: 500,
              category: "sanitation"
            },
            {
              id: "tongan-water-management",
              name: "Tongan Water Management",
              description: "The Tongan archipelago's Tu'i Tonga maritime empire developed specialized water management systems adapted to the challenges of low-lying coral and volcanic islands where surface freshwater is scarce. Royal water systems included stone-lined bathing pools (vai) reserved for the Tu'i Tonga paramount chief and aristocratic families, fed by springs channeled through underground coral-rock conduits. Commoner communities constructed communal water collection points where rainwater was directed from village rooftops and cleared limestone surfaces into natural sinkholes and excavated storage pits lined with compacted clay. On the main island of Tongatapu, the Tongans developed a network of freshwater wells sunk into the Ghyben-Herzberg freshwater lens floating atop saltwater within the coral limestone, demonstrating empirical understanding of island hydrology. These water management practices were fundamental to supporting the Tongan population of approximately 40,000 people across 170+ islands, many of which had no permanent surface water sources.",
              rarity: "rare",
              historicalPeriod: "Tu'i Tonga Period (950-1500 CE)",
              significance: "Sustained 40,000+ people across 170 islands; empirical understanding of freshwater lens hydrology on coral atolls",
              yearBCE: -1000,
              category: "irrigation"
            }
          ]
        },
        {
          id: "rapa-nui",
          name: "Rapa Nui (Easter Island)",
          description: "Most remote inhabited island in the Pacific with unique water challenges",
          historicalContext: "Settled by Polynesian voyagers circa 800-1200 CE, 3,500 km from the nearest inhabited island",
          coordinates: { lat: -27.1127, lng: -109.3497 },
          artifacts: [
            {
              id: "ahu-platform-drainage",
              name: "Ahu Platform Drainage",
              description: "The monumental ahu platforms of Rapa Nui—massive stone structures supporting the famous moai statues—incorporated sophisticated internal drainage systems that have preserved these structures for over 800 years despite the island's heavy rainfall and salt-laden marine winds. Each ahu was constructed with a carefully layered interior of fitted basalt blocks, coral rubble fill, and graded gravel that functioned as a French drain system, allowing rainwater to percolate downward and outward rather than pooling within the structure where freeze-thaw cycles could cause cracking. Surface channels carved into the platform's upper stones directed rainwater away from the moai statue foundations, while weep holes in the seaward walls allowed internal moisture to escape. The largest ahu, Tongariki, stretches 100 meters in length and supports 15 moai statues weighing up to 86 tonnes each, requiring drainage engineering capable of managing enormous hydrostatic loads during storms. Archaeological analysis suggests the Rapa Nui builders understood that water management was essential to structural longevity, as ahu without proper drainage deteriorated significantly faster than those with engineered drainage systems.",
              rarity: "rare",
              historicalPeriod: "Rapa Nui Period (1000-1500 CE)",
              significance: "Internal drainage preserved 100m-long stone platforms and 86-tonne moai statues for 800+ years",
              yearBCE: -1200,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "southern-african-kingdoms",
      name: "Swazi/Zulu Southern African Kingdoms",
      description: "The Southern African kingdoms of the Swazi, Zulu, and related Nguni-speaking peoples (1400–1900 CE) developed practical water management systems adapted to the subtropical savanna landscape of modern-day KwaZulu-Natal, eSwatini, and surrounding regions. These societies, organized around cattle-keeping and mixed agriculture, engineered their homestead (umuzi) layouts and cattle enclosure (kraal) designs to manage seasonal rainfall that ranges from 500–1,200 mm annually, concentrated in intense summer thunderstorms between October and March. The Zulu kingdom under Shaka (r. 1816–1828) organized settlement patterns along river systems to maximize water access for cattle herds numbering in the tens of thousands, while the circular kraal design served dual purposes as livestock enclosure and rainwater collection system. River ford engineering—constructing stone-reinforced crossing points along major trade and migration routes—facilitated the movement of people, cattle, and trade goods across the region's numerous rivers, which could swell from fordable streams to raging torrents during summer rains.",
      position: [-4, 0, -6],
      color: "#795548",
      era: "medieval",
      dateRange: "1400-1900 CE",
      locations: [
        {
          id: "kwazulu-natal",
          name: "KwaZulu-Natal",
          description: "Heartland of the Zulu kingdom and related Nguni-speaking peoples",
          historicalContext: "Subtropical savanna region where cattle-keeping societies developed practical water management for herds and agriculture",
          coordinates: { lat: -28.5306, lng: 30.8958 },
          artifacts: [
            {
              id: "cattle-kraal-water",
              name: "Cattle Kraal Water Management",
              description: "The circular cattle kraal (isibaya) was far more than a simple livestock enclosure—it was an ingeniously designed water management system that directed seasonal rainfall runoff to collection points while keeping cattle on dry ground. Kraals were constructed on slight slopes with the entrance positioned at the lowest point, where compacted cattle dung and trampled earth created an impermeable surface that channeled rainwater toward external collection ditches or natural depressions used as drinking troughs. The circular layout, typically 30–50 meters in diameter, maximized the ratio of collection area to perimeter, efficiently concentrating rainfall from an area of 700–2,000 square meters toward designated drainage exits. In larger royal kraals housing hundreds of cattle, multiple drainage channels radiated outward from the enclosure, directing water to storage pits that provided drinking water for livestock during dry periods between summer rainstorms. This integrated approach to combining animal husbandry with water harvesting reflected a deep understanding of local hydrology developed over centuries of cattle-keeping in the subtropical savanna environment.",
              rarity: "rare",
              historicalPeriod: "Southern African Kingdoms (1400-1900 CE)",
              significance: "Circular kraal design harvested rainfall from 700-2,000 m² for cattle; integrated livestock management with water collection",
              yearBCE: -1500,
              category: "irrigation"
            },
            {
              id: "umuzi-drainage",
              name: "Umuzi Drainage Systems",
              description: "The umuzi (homestead) was the fundamental settlement unit of Nguni-speaking peoples, and its layout reflected centuries of empirical knowledge about managing water flow across the sloped terrain of the KwaZulu-Natal landscape. Each umuzi was sited on a hillside with the main hut (indlu) positioned upslope and subsidiary structures arranged in a downward arc, creating natural drainage pathways between buildings that directed rainwater away from living spaces and toward the central cattle kraal below. The floors of each beehive-shaped hut were constructed from a mixture of ant-heap clay and cattle dung, polished to a smooth, water-resistant surface that shed rainfall dripping through the thatch roof toward the doorway and external drainage channels. Pathways between huts were graded and sometimes lined with flat stones to prevent erosion during intense summer thunderstorms that can deliver 50+ mm of rainfall in a single hour. The overall homestead layout functioned as an integrated drainage system where every structure and pathway contributed to managing water flow, preventing erosion, and maintaining habitable conditions during the wet season—a vernacular engineering tradition passed through generations without written documentation.",
              rarity: "common",
              historicalPeriod: "Southern African Kingdoms (1400-1900 CE)",
              significance: "Vernacular drainage engineering managing intense tropical rainfall; every homestead element contributed to water management",
              yearBCE: -1500,
              category: "sanitation"
            },
            {
              id: "river-ford-engineering",
              name: "River Ford Engineering",
              description: "Southern African communities constructed stone-reinforced river crossings at strategic points along major trade and migration routes, enabling the movement of people and cattle across rivers that could transform from gentle streams to powerful torrents during the summer rainy season. These ford structures consisted of lines of large boulders and flat stones placed across shallow river sections, creating a stable walking surface above the normal water level while allowing flood waters to pass over and between the stones without washing them away. Ford sites were carefully selected at natural wide, shallow points in rivers where bedrock was close to the surface, and the stone reinforcements were positioned to break the current's force and create calmer passages for cattle crossings. Some fords incorporated wing walls—lines of stones extending upstream at angles—that deflected the main current away from the crossing point, reducing water velocity in the ford zone by an estimated 30–40%. These engineered crossings were critical infrastructure for the cattle-based economy, as herds of hundreds or thousands of animals needed to cross rivers during seasonal migrations between summer and winter grazing areas, and a failed crossing could result in devastating livestock losses.",
              rarity: "rare",
              historicalPeriod: "Southern African Kingdoms (1500-1900 CE)",
              significance: "Stone-reinforced river crossings enabling cattle trade and migration; wing walls reduced current velocity by 30-40%",
              yearBCE: -1600,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "garamantes",
      name: "Garamantes",
      description: "The Garamantes (500 BCE–700 CE) were a Saharan civilization based in the Fezzan region of modern-day Libya, centered on their capital Garama (modern Germa). Far from being simple desert nomads, they built a sophisticated urban civilization sustaining over 100,000 people in one of the harshest environments on Earth—the central Sahara Desert, where surface water is virtually nonexistent. Their greatest achievement was the construction of over 600 kilometers of foggara (qanat-like) underground water tunnels, which tapped fossil aquifers deep beneath the desert surface and transported water to irrigated fields, gardens, and urban centers without any evaporation losses. At their peak around 200 CE, the Garamantes controlled a territory spanning roughly 250,000 square kilometers and operated a complex trade network linking sub-Saharan Africa with the Roman Mediterranean, exchanging gold, slaves, salt, and exotic animals. Roman authors including Pliny the Elder and Herodotus documented this remarkable desert civilization, which ultimately declined when the fossil aquifers were depleted after over a millennium of extraction.",
      position: [1, 0, -3],
      color: "#FFA726",
      era: "ancient",
      dateRange: "500 BCE-700 CE",
      locations: [
        {
          id: "garama-germa",
          name: "Garama (Germa)",
          description: "Capital of the Garamantes civilization in the Fezzan desert",
          historicalContext: "Urban center sustained by underground water tunnels in the heart of the Sahara Desert",
          coordinates: { lat: 26.5547, lng: 13.0789 },
          artifacts: [
            {
              id: "foggara-tunnels",
              name: "Foggara Underground Tunnels",
              description: "Qanat-like subterranean water tunnels totaling over 600 kilometers beneath the Sahara Desert, tapping into fossil aquifers at depths of 30–40 meters and channeling water to the surface through gravity-fed conduits. Each foggara consisted of a gently sloping underground channel connecting a series of vertical access shafts spaced 10–20 meters apart, allowing construction, maintenance, and ventilation. The system sustained a population of over 100,000 people in the deep desert for over 1,000 years, irrigating fields of wheat, barley, figs, grapes, and olives in an environment receiving less than 20 mm of annual rainfall. Archaeological surveys by Professor David Mattingly's team from the University of Leicester have mapped over 750 individual foggaras across the Fezzan, representing one of the largest pre-industrial water extraction systems ever constructed.",
              rarity: "legendary",
              historicalPeriod: "Garamantian Period (500 BCE-700 CE)",
              significance: "Over 600 km of underground tunnels sustained 100,000+ people in the Sahara—one of humanity's greatest hydraulic achievements",
              yearBCE: 500,
              category: "irrigation"
            },
            {
              id: "garamantes-oasis-agriculture",
              name: "Garamantes Oasis Agriculture",
              description: "An extensive irrigated farming system in the deep Sahara Desert, using water drawn from underground foggara tunnels to cultivate over 3,000 hectares of arable land in the Wadi al-Ajal valley. The Garamantes grew Mediterranean crops including wheat, barley, dates, figs, olives, and grapes in a region where natural agriculture is impossible, creating artificial oases that supported dense urban settlements. Sophisticated water distribution networks divided the foggara outflow among fields, orchards, and gardens using stone-lined channels and clay distribution basins. This agricultural system demonstrated that even the most arid environments on Earth could be transformed into productive farmland through ingenious hydraulic engineering.",
              rarity: "epic",
              historicalPeriod: "Garamantian Period (500 BCE-700 CE)",
              significance: "Irrigated 3,000+ hectares of desert farmland using fossil groundwater in one of Earth's driest regions",
              yearBCE: 400,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "mapuche",
      name: "Mapuche",
      description: "The Mapuche people (500 CE–Present) of south-central Chile and western Argentina represent one of the most resilient indigenous civilizations in the Americas, famously resisting both Inca and Spanish conquest for over 300 years. Inhabiting the temperate rainforests and wetlands of Araucanía, a region receiving 1,200–2,500 mm of annual rainfall, the Mapuche developed sophisticated wetland management systems that transformed waterlogged terrain into productive agricultural land. Their engineering approach was fundamentally different from arid-region civilizations—rather than bringing water to dry land, they managed excess water to create cultivable spaces within naturally saturated landscapes. The Mapuche constructed kuel (ceremonial earth mounds) that served dual purposes as ritual gathering places and functional water management structures, integrating drainage channels and raised platforms that controlled water flow across the landscape. At their peak, an estimated 1–2 million Mapuche people inhabited a territory spanning over 100,000 square kilometers between the Biobío and Toltén rivers, sustaining themselves through a combination of wetland agriculture, fishing, and forest management.",
      position: [-22, 0, 8],
      color: "#43A047",
      era: "medieval",
      dateRange: "500 CE-Present",
      locations: [
        {
          id: "araucania",
          name: "Araucanía",
          description: "Heartland of Mapuche civilization in south-central Chile",
          historicalContext: "Temperate rainforest and wetland region where the Mapuche developed unique water management adapted to excess rainfall",
          coordinates: { lat: -38.7396, lng: -72.5903 },
          artifacts: [
            {
              id: "kuel-water-mounds",
              name: "Kuel Water Management Mounds",
              description: "Ceremonial and functional earth mounds (kuel) integrating water drainage and wetland management into monumental architecture. These raised platforms, typically 10–15 meters in diameter and 2–5 meters high, were constructed from compacted earth and served as both ritual gathering sites and elevated dry-ground refuges in seasonally flooded landscapes. Drainage channels radiating from the mound bases directed excess rainfall and surface runoff away from inhabited areas, while the raised mound surfaces provided year-round habitable space above the waterlogged terrain. Archaeological surveys in the Purén-Lumaco valley have identified over 300 kuel sites, suggesting a coordinated regional approach to landscape water management spanning centuries of continuous use.",
              rarity: "rare",
              historicalPeriod: "Mapuche Period (500 CE-Present)",
              significance: "Over 300 ceremonial mounds integrated water drainage and wetland management across the Araucanía region",
              yearBCE: -800,
              category: "irrigation"
            },
            {
              id: "mapuche-wetland-agriculture",
              name: "Mapuche Wetland Agriculture",
              description: "A managed wetland cultivation system transforming waterlogged terrain into productive agricultural land through a combination of raised fields, drainage ditches, and controlled flooding. The Mapuche constructed linear ridged fields (camellones) by piling soil from excavated channels into elevated planting surfaces 1–2 meters wide and 30–50 centimeters above the water table, creating alternating strips of dry cultivable land and water-filled channels. The channels served multiple functions: draining excess water during heavy rains, retaining moisture during drier periods, providing habitat for fish and edible aquatic plants, and accumulating nutrient-rich sediment that could be periodically scooped onto the raised beds as fertilizer. This system supported cultivation of potatoes, quinoa, and other crops in areas that would otherwise be too wet for agriculture.",
              rarity: "rare",
              historicalPeriod: "Mapuche Period (500 CE-Present)",
              significance: "Transformed waterlogged terrain into productive farmland using raised-field and drainage-channel systems",
              yearBCE: -700,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "maori-new-zealand",
      name: "Māori",
      description: "The Māori people (1200 CE–Present) of Aotearoa/New Zealand developed remarkable water engineering systems adapted to a volcanic island environment spanning subtropical to subantarctic climates. Arriving from eastern Polynesia around 1250–1300 CE, the Māori brought tropical agricultural knowledge and adapted it to New Zealand's cooler temperate climate, developing extensive irrigation systems for kūmara (sweet potato) cultivation that pushed the crop to its southernmost global limit at approximately 44°S latitude. Their pa tuna (eel weirs) represent some of the most sophisticated aquatic harvesting structures in the Pacific, with stone and wooden weir complexes spanning rivers and wetland channels, some continuously maintained and operational for over 500 years. The Māori also engineered their famous pā (fortified hilltop villages) with integrated water supply systems including internal springs, wells, and rainwater collection, enabling these defensive positions to withstand prolonged sieges. At their peak before European contact in 1769, an estimated 100,000–200,000 Māori inhabited New Zealand, organized into iwi (tribal groups) that managed water resources across carefully defined territorial boundaries extending from mountain peaks to the sea.",
      position: [28, 0, 18],
      color: "#263238",
      era: "medieval",
      dateRange: "1200 CE-Present",
      locations: [
        {
          id: "aotearoa",
          name: "Aotearoa / New Zealand",
          description: "Island homeland of the Māori people in the southwestern Pacific",
          historicalContext: "Volcanic island environment where Polynesian settlers adapted tropical water engineering to temperate climates",
          coordinates: { lat: -38.4161, lng: 176.2544 },
          artifacts: [
            {
              id: "pa-tuna-eel-weirs",
              name: "Pā Tuna Eel Weirs",
              description: "Sophisticated stone and wooden weir structures constructed across rivers, streams, and wetland channels for harvesting tuna (freshwater eels), a staple protein source for Māori communities. These weirs featured V-shaped or funnel-shaped designs that directed migrating eels into woven flax (harakeke) traps called hīnaki, exploiting the eels' annual downstream migration to the sea for breeding. Some pā tuna complexes spanned entire river widths of 20–50 meters and incorporated multiple weir stages, fish-holding pools, and stone-lined channels that could be selectively opened or closed to regulate water flow and fish movement. Archaeological evidence from sites in the Wairarapa and Horowhenua regions shows continuous use and maintenance spanning 500+ years, with some structures still functioning into the 20th century—a testament to the durability and effectiveness of their engineering.",
              rarity: "epic",
              historicalPeriod: "Māori Period (1200 CE-Present)",
              significance: "Stone and wooden eel weirs spanning rivers, some continuously operational for 500+ years",
              yearBCE: -1300,
              category: "dam"
            },
            {
              id: "kumara-irrigation",
              name: "Kūmara Irrigation",
              description: "Irrigation channel systems developed by Māori horticulturalists for cultivating kūmara (sweet potato, Ipomoea batatas), the most important crop in pre-European New Zealand agriculture. These systems consisted of shallow earth channels 20–40 centimeters wide diverting water from streams and springs to raised gravel garden beds where kūmara were planted in carefully prepared mounds of sandy, free-draining soil. The irrigation channels served a dual purpose: providing water during dry summer growing periods and warming the water as it flowed through sun-exposed channels before reaching the frost-sensitive plants, effectively extending the growing season by 2–3 weeks. Māori gardeners pushed kūmara cultivation to approximately 44°S latitude on the South Island's east coast, the southernmost limit for this tropical crop anywhere in the world.",
              rarity: "rare",
              historicalPeriod: "Māori Period (1200 CE-Present)",
              significance: "Irrigation channels pushed tropical sweet potato cultivation to its southernmost global limit at 44°S",
              yearBCE: -1350,
              category: "irrigation"
            },
            {
              id: "pa-fortification-water",
              name: "Pā Fortification Water Systems",
              description: "Integrated water supply systems within pā (fortified hilltop villages), incorporating internal springs, hand-dug wells, and rainwater collection infrastructure designed to sustain defenders during prolonged sieges. Many pā were deliberately sited on hills with natural springs or high water tables, and defensive earthworks were engineered to protect these water sources within the innermost defensive perimeter. Rainwater was collected from the roofs of wharenui (meeting houses) and whare (houses) using carved wooden gutters that directed flow into underground storage pits lined with puddled clay. Some large pā such as Ōtāhuhu in Auckland incorporated multiple water sources and could sustain garrisons of several hundred warriors for weeks, a critical military advantage in the frequent inter-tribal conflicts of pre-European New Zealand.",
              rarity: "rare",
              historicalPeriod: "Māori Period (1200 CE-Present)",
              significance: "Hilltop fortress water systems with internal springs, wells, and rainwater collection for siege resilience",
              yearBCE: -1400,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "tibetan-civilizations",
      name: "Tibetan Civilizations",
      description: "The civilizations of the Tibetan Plateau (600 CE–Present) developed extraordinary water engineering systems adapted to the most extreme high-altitude environment inhabited by any major human civilization, with settlements routinely located at 3,500–5,000 meters above sea level. The Tibetan Empire under Songtsen Gampo (r. 604–650 CE) unified the plateau and initiated large-scale infrastructure projects including irrigation canals, monastery water systems, and the early development of Lhasa as a major urban center. Tibetan engineers uniquely combined Buddhist spiritual practices with hydraulic technology, creating water-powered prayer wheels (mani wheels) that harnessed mountain streams to continuously spin cylinders inscribed with sacred mantras—a remarkable fusion of faith and engineering found nowhere else in the world. The glacier-fed irrigation systems of the Tibetan Plateau channel meltwater from Himalayan glaciers through canals operating at altitudes of 3,000–5,000 meters, where extreme temperature variations, seasonal freezing, and steep terrain present engineering challenges unlike any faced by lowland civilizations. At its height, the Tibetan Empire controlled territory spanning from the Tarim Basin to Bengal, managing water resources across the headwaters of Asia's greatest rivers—the Yangtze, Yellow, Mekong, Brahmaputra, and Indus—which collectively supply freshwater to over 2 billion people downstream.",
      position: [12, 0, 1],
      color: "#F57F17",
      era: "medieval",
      dateRange: "600 CE-Present",
      locations: [
        {
          id: "lhasa",
          name: "Lhasa",
          description: "Sacred capital of Tibet and center of high-altitude hydraulic engineering",
          historicalContext: "Urban center at 3,650 meters elevation where Buddhist culture merged with practical water engineering",
          coordinates: { lat: 29.6520, lng: 91.1721 },
          artifacts: [
            {
              id: "prayer-wheel-water-mills",
              name: "Prayer Wheel Water Mills (Mani Wheels)",
              description: "Water-powered prayer wheels combining Buddhist spiritual practice with sophisticated hydraulic engineering at elevations exceeding 3,500 meters. These devices consist of large cylindrical drums inscribed with the mantra 'Om mani padme hum' (up to 100 million times per wheel), mounted on vertical axles and driven by horizontal water wheels fed by diverted mountain streams. The water channels feature precisely calibrated intakes with stone weirs and wooden sluice gates that regulate flow to maintain consistent rotational speed despite seasonal variations in stream discharge ranging from trickle to torrent. Some monastery complexes such as those at Labrang and Drepung operate banks of 20–50 water-powered prayer wheels simultaneously, each spinning continuously day and night, accumulating spiritual merit while demonstrating practical mastery of hydraulic power transmission at extreme altitudes.",
              rarity: "epic",
              historicalPeriod: "Tibetan Period (600 CE-Present)",
              significance: "Unique fusion of Buddhist spirituality and hydraulic engineering, operating prayer wheels at 3,500+ meter elevations",
              yearBCE: -700,
              category: "water-lifting"
            },
            {
              id: "glacier-fed-irrigation",
              name: "High-Altitude Glacier-Fed Irrigation",
              description: "Canal systems fed by Himalayan glacier meltwater, operating at extreme altitudes of 3,000–5,000 meters where engineering challenges include seasonal freezing, extreme UV degradation of materials, low oxygen levels affecting labor capacity, and temperature swings of 30–40°C between day and night. These canals are typically unlined earth channels 30–60 centimeters wide, following mountain contours for distances of 5–20 kilometers from glacier snouts to terraced barley and buckwheat fields. Tibetan engineers developed techniques for managing the highly variable and sediment-laden glacial discharge, including settling basins where glacial flour (finely ground rock particles) is deposited before water enters the irrigation network, and bypass channels that divert excess flow during summer melt peaks. The system supports agriculture at altitudes where most civilizations would consider farming impossible, enabling the cultivation of highland barley (nas), the staple crop that sustains Tibetan civilization.",
              rarity: "rare",
              historicalPeriod: "Tibetan Period (600 CE-Present)",
              significance: "Irrigation canals operating at 3,000-5,000 meters, among the highest-altitude agricultural water systems ever constructed",
              yearBCE: -800,
              category: "irrigation"
            },
            {
              id: "lhasa-urban-water",
              name: "Lhasa Urban Water System",
              description: "The water supply infrastructure for the Potala Palace and the surrounding city of Lhasa, drawing from mountain springs, snowmelt, and the Kyi Chu (Lhasa River) to serve a high-altitude urban population at 3,650 meters elevation. The Potala Palace complex, rising 117 meters above the city on Marpo Ri hill, required an ingenious water supply system utilizing natural springs at multiple levels within the hill, supplemented by rainwater collection from the palace's massive 400-meter-long roof surfaces. Stone-lined channels and copper pipes distributed water throughout the palace's 1,000+ rooms, 10,000+ shrines, and multiple kitchens, bathrooms, and ceremonial halls. The broader city of Lhasa was served by a network of public wells and spring-fed fountains, with water quality protected by Buddhist prohibitions against polluting water sources—one of the earliest forms of religious environmental protection law.",
              rarity: "rare",
              historicalPeriod: "Tibetan Period (600 CE-Present)",
              significance: "Urban water supply at 3,650 meters elevation serving the Potala Palace and city of Lhasa from mountain springs",
              yearBCE: -650,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "georgian-kingdom",
      name: "Georgian Kingdom",
      description: "The Georgian kingdoms (300 BCE–1800 CE) of the Caucasus region developed distinctive water engineering traditions shaped by the unique geology of their mountainous homeland, where natural hot springs, mineral waters, and steep river valleys created both challenges and opportunities for hydraulic innovation. The city of Tbilisi itself was founded in the 5th century CE specifically because of its natural hot sulfur springs—King Vakhtang I Gorgasali reportedly discovered the springs while hunting when his wounded falcon fell into the hot water and was healed, leading him to establish a new capital on the site. Georgian engineers harnessed these thermal springs to create the famous abanotubani (bathhouse district), where sulfur-rich water at 40–50°C has been channeled through increasingly sophisticated public bath complexes for over 1,500 years, attracting visitors from Alexander Dumas to Alexander Pushkin. The Georgian tradition of qvevri winemaking—fermenting wine in large clay vessels buried underground—required precise water and humidity management systems that have been recognized by UNESCO as Intangible Cultural Heritage of Humanity since 2013. Georgian mountain fortresses such as Narikala, Ananuri, and Khertvisi incorporated sophisticated cistern systems that enabled garrisons to withstand prolonged sieges in the strategically vital Caucasus corridor between Europe and Asia.",
      position: [7, 0, -2],
      color: "#5D4037",
      era: "medieval",
      dateRange: "300 BCE-1800 CE",
      locations: [
        {
          id: "tbilisi",
          name: "Tbilisi",
          description: "Capital of Georgia, founded on natural hot sulfur springs",
          historicalContext: "Caucasus crossroads city where thermal spring engineering and winemaking water systems developed over millennia",
          coordinates: { lat: 41.6941, lng: 44.8337 },
          artifacts: [
            {
              id: "tbilisi-sulfur-springs",
              name: "Tbilisi Sulfur Spring Engineering",
              description: "A 1,500-year tradition of harnessing natural hot sulfur springs (40–50°C) for public baths in the abanotubani (bathhouse district) of Tbilisi, involving increasingly sophisticated systems of stone channels, underground conduits, heating regulation chambers, and distribution networks. The springs emerge from a geological fault zone beneath the Narikala fortress, producing sulfur-rich water at consistent temperatures year-round. Georgian engineers developed techniques for blending spring water of different temperatures, filtering sulfur sediments, and distributing water to multiple bath complexes simultaneously through a gravity-fed network of ceramic and stone pipes. The bath complexes evolved from simple rock pools in the 5th century to elaborate domed structures with marble interiors, cold plunge pools, heated rooms, and sophisticated drainage systems by the 17th century, rivaling Ottoman hammams in architectural sophistication.",
              rarity: "epic",
              historicalPeriod: "Georgian Period (300 BCE-1800 CE)",
              significance: "1,500+ years of continuous sulfur spring engineering; thermal bath tradition attracting visitors from Dumas to Pushkin",
              yearBCE: 200,
              category: "sanitation"
            },
            {
              id: "qvevri-water-systems",
              name: "Qvevri Wine-Making Water Systems",
              description: "Underground clay vessels (qvevri) up to 2 meters tall and holding 1,000–4,000 liters of wine, requiring precisely controlled water and humidity environments for the fermentation and aging process that defines Georgian winemaking—the world's oldest continuous winemaking tradition, dating back 8,000 years. Qvevri are buried in the floors of purpose-built wine cellars (marani) where the surrounding soil provides natural temperature regulation between 12–15°C year-round. Water management is critical: the marani floor must maintain specific moisture levels to keep the qvevri's porous clay walls slightly damp (preventing cracking) without becoming waterlogged (which would compromise the wine). Drainage channels beneath the marani floor direct groundwater away from the vessels while maintaining ambient humidity of 70–80%. This tradition was inscribed on UNESCO's Intangible Cultural Heritage list in 2013, recognizing the sophisticated interplay between water management, clay technology, and viticulture.",
              rarity: "rare",
              historicalPeriod: "Georgian Period (300 BCE-1800 CE)",
              significance: "UNESCO Intangible Heritage winemaking requiring precise underground water/humidity control; 8,000-year tradition",
              yearBCE: 300,
              category: "sanitation"
            },
            {
              id: "georgian-fortress-cisterns",
              name: "Georgian Fortress Cisterns",
              description: "Water storage systems integrated into mountain fortresses across the Georgian Caucasus, enabling garrisons to withstand prolonged sieges at the strategically vital crossroads between Europe and Asia. Fortresses like Narikala (4th century CE), Ananuri (16th century), and Khertvisi (2nd century BCE) were constructed on steep rocky outcrops where natural water access was limited, necessitating sophisticated cistern engineering. These cisterns were typically carved from bedrock or constructed from mortared stone, with capacities ranging from 50,000 to 200,000 liters, fed by a combination of rooftop rainwater collection, spring capture, and in some cases, underground tunnels connecting to water sources outside the fortress walls. The Narikala fortress in Tbilisi incorporated a multi-level cistern system with settling chambers to filter sediment and separate compartments for drinking water and utility water.",
              rarity: "rare",
              historicalPeriod: "Georgian Period (300 BCE-1800 CE)",
              significance: "Mountain fortress cisterns holding 50,000-200,000 liters; critical for siege defense in the Caucasus corridor",
              yearBCE: 200,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "nuragic-sardinia",
      name: "Nuragic Sardinia",
      description: "The Nuragic civilization of Sardinia (1900–238 BCE) constructed one of the most distinctive architectural and hydraulic legacies in the ancient Mediterranean world, building over 7,000 stone tower complexes (nuraghi) and approximately 40 monumental sacred wells (pozzi sacri) across the island. Named after the nuraghe—massive dry-stone towers unique to Sardinia, some standing over 20 meters tall with walls 3 meters thick—this Bronze Age civilization flourished for over 1,600 years before absorption into the Carthaginian and later Roman spheres of influence. Their sacred wells represent a pinnacle of prehistoric hydraulic architecture, combining precise astronomical alignments with advanced stone-cutting techniques to create underground temple-wells that captured and celebrated water as a divine element. The most famous example, the Sacred Well of Santa Cristina near Paulilatino, features a perfectly constructed tholos (beehive-shaped) chamber accessed by a monumental 20-step staircase, engineered so that sunlight illuminates the water surface only during the equinoxes—demonstrating a synthesis of astronomy, architecture, and hydraulic engineering unmatched in contemporary Mediterranean cultures. The Nuragic people controlled water resources across Sardinia's diverse landscape, from coastal lagoons to mountainous interior springs, supporting an estimated population of 300,000–500,000 people at the civilization's peak around 1200 BCE.",
      position: [2, 0, -4],
      color: "#78909C",
      era: "ancient",
      dateRange: "1900-238 BCE",
      locations: [
        {
          id: "sardinia",
          name: "Sardinia",
          description: "Mediterranean island home to the Nuragic civilization and its sacred wells",
          historicalContext: "Bronze Age island civilization that built 7,000+ stone towers and monumental temple-wells with astronomical alignments",
          coordinates: { lat: 39.9106, lng: 8.6098 },
          artifacts: [
            {
              id: "sacred-wells",
              name: "Sacred Wells (Pozzi Sacri)",
              description: "Monumental underground temple-wells constructed with extraordinary precision, featuring tholos (beehive-shaped) stone chambers, ceremonial staircases, and precise astronomical alignments that allowed sunlight or moonlight to illuminate the water surface on specific dates. The most celebrated example, the Sacred Well of Santa Cristina near Paulilatino, consists of a vestibule, a trapezoidal staircase of 20 perfectly cut basalt steps descending 7 meters, and a circular well chamber with a tholos dome constructed from 32 courses of precisely fitted stones without mortar. The staircase is aligned so that during the lunar standstill (every 18.6 years) and at the equinoxes, light penetrates to the water surface at the bottom—demonstrating sophisticated astronomical knowledge combined with hydraulic architecture. Over 40 sacred wells have been identified across Sardinia, each serving as a religious center where water was venerated as a divine gift, with votive offerings of bronze statuettes, weapons, and jewelry found at many sites.",
              rarity: "legendary",
              historicalPeriod: "Nuragic Period (1900-238 BCE)",
              significance: "Monumental temple-wells with astronomical alignments; Santa Cristina's 20-step staircase illuminated during equinoxes",
              yearBCE: 1200,
              category: "fountain"
            },
            {
              id: "nuraghe-cisterns",
              name: "Nuraghe Fortress Cisterns",
              description: "Integrated water collection and storage systems within Sardinia's massive dry-stone tower complexes (nuraghi), of which over 7,000 were constructed across the island between 1900 and 900 BCE. These multi-story towers, built from basalt blocks weighing up to several tonnes each, incorporated internal cisterns fed by rooftop rainwater collection, with stone channels directing runoff from the tower's upper terraces into underground storage chambers. The largest nuraghe complexes, such as Su Nuraxi di Barumini (a UNESCO World Heritage Site), featured central towers surrounded by multiple subsidiary towers connected by curtain walls, with shared cistern systems capable of supporting communities of several hundred people. The cisterns were constructed using the same corbelling technique as the towers themselves—successively overlapping stone courses creating domed chambers that were naturally waterproof without mortar or lining materials.",
              rarity: "epic",
              historicalPeriod: "Nuragic Period (1900-238 BCE)",
              significance: "Over 7,000 stone tower complexes with integrated rainwater cisterns; Su Nuraxi di Barumini is a UNESCO World Heritage Site",
              yearBCE: 1500,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "lapita-culture",
      name: "Ancestral Polynesian (Lapita)",
      description: "The Lapita culture (1600–500 BCE) represents the ancestral seafaring civilization that colonized the vast Pacific Ocean, spreading from the Bismarck Archipelago near New Guinea across 4,000 kilometers of open ocean to Fiji, Tonga, and Samoa over roughly a millennium. Named after the distinctive dentate-stamped pottery first identified at a site in New Caledonia, the Lapita people were the greatest maritime explorers of the ancient world, navigating by stars, ocean swells, wind patterns, and the behavior of seabirds to locate islands invisible below the horizon. Their most critical survival skill was the ability to identify and manage freshwater sources on thousands of islands scattered across the world's largest ocean, ranging from high volcanic islands with abundant rainfall to low coral atolls where freshwater exists only as thin lenses floating on saltwater beneath the surface. Lapita settlements have been identified at over 200 archaeological sites across Melanesia and western Polynesia, consistently located near reliable freshwater sources—streams, springs, or manageable freshwater lenses—demonstrating that water resource assessment was a primary factor in colonization decisions. The Lapita cultural complex gave rise to all subsequent Polynesian, Micronesian, and many Melanesian maritime traditions, representing one of humanity's most remarkable episodes of exploration and adaptation.",
      position: [24, 0, 14],
      color: "#26C6DA",
      era: "ancient",
      dateRange: "1600-500 BCE",
      locations: [
        {
          id: "bismarck-archipelago",
          name: "Bismarck Archipelago",
          description: "Origin point of the Lapita expansion into the Pacific Ocean",
          historicalContext: "Island chain near New Guinea where the greatest maritime colonization in human history began",
          coordinates: { lat: -4.0000, lng: 150.0000 },
          artifacts: [
            {
              id: "oceanic-freshwater-navigation",
              name: "Oceanic Freshwater Navigation",
              description: "Comprehensive knowledge systems for locating freshwater sources across thousands of Pacific islands, incorporating observational techniques for detecting underground freshwater from the sea—including reading vegetation patterns on distant islands (coconut palms and pandanus indicating freshwater presence), tasting ocean water near shorelines for salinity reduction indicating submarine spring discharge, and identifying geological formations likely to contain freshwater springs or aquifers. Lapita navigators assessed potential colonization sites by evaluating freshwater availability before committing to settlement, using techniques passed down through oral tradition across generations. This knowledge encompassed understanding of the Ghyben-Herzberg freshwater lens principle (though not in those terms)—knowing that low coral atolls contain a lens of fresh rainwater floating on denser saltwater, and that the lens thickness depends on island width, rainfall, and extraction rate. Without this water-finding knowledge, the colonization of thousands of Pacific islands would have been impossible.",
              rarity: "epic",
              historicalPeriod: "Lapita Period (1600-500 BCE)",
              significance: "Knowledge systems enabling colonization of thousands of Pacific islands by identifying freshwater sources from the sea",
              yearBCE: 1500,
              category: "canal"
            },
            {
              id: "lapita-coastal-water",
              name: "Lapita Coastal Water Management",
              description: "Techniques for managing the fragile freshwater lenses that form beneath coral atolls and low-lying coastal areas, where rainwater percolates through porous coral rock and floats as a thin layer (typically 1–5 meters thick) above denser saltwater. Lapita settlers developed protocols for sustainable extraction including shallow hand-dug wells penetrating just the upper portion of the freshwater lens, restrictions on well spacing to prevent saltwater upconing, and communal water rationing during drought periods when the lens could thin to dangerously low levels. Archaeological evidence from Lapita sites on low coral islands shows wells deliberately positioned at the island's center where the freshwater lens is thickest, demonstrating empirical understanding of the lens geometry. This knowledge was critical for sustaining communities of 50–200 people on islands as small as a few hectares, where the margin between sustainable water use and catastrophic saltwater intrusion was measured in centimeters of lens thickness.",
              rarity: "rare",
              historicalPeriod: "Lapita Period (1600-500 BCE)",
              significance: "Managed freshwater lenses on coral atolls where margins between sustainability and saltwater intrusion were centimeters",
              yearBCE: 1400,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "toltec-empire",
      name: "Toltec Empire",
      description: "The Toltec Empire (900–1168 CE) was the dominant Mesoamerican civilization of the Early Postclassic period, centered on their capital city of Tula (Tollan) in the modern Mexican state of Hidalgo. At its height, Tula was one of the largest cities in the pre-Columbian Americas, with a population estimated at 30,000–60,000 people spread across an urban area of approximately 16 square kilometers. The Toltecs were renowned as master engineers and artisans—the Aztecs, who later claimed Toltec descent, used the word 'toltecatl' as a synonym for 'craftsman' or 'artist,' and regarded Tula as a mythical golden age of civilization. Tula's urban water infrastructure included a sophisticated distribution system drawing from the Tula River and local springs, supplying public spaces, residential areas, and the massive ceremonial center through a network of stone-lined channels and underground conduits. The city's monumental architecture, including the famous Atlantean warrior columns of Pyramid B, incorporated ceremonial water features—fountains, reflecting pools, and ritual water channels—that demonstrated Toltec mastery of hydraulic engineering and prefigured the even more elaborate water systems later developed by the Aztecs at Tenochtitlan.",
      position: [-11, 0, 5],
      color: "#6D4C41",
      era: "medieval",
      dateRange: "900-1168 CE",
      locations: [
        {
          id: "tula",
          name: "Tula (Tollan)",
          description: "Capital of the Toltec Empire in central Mexico",
          historicalContext: "Major Mesoamerican urban center whose hydraulic engineering directly influenced Aztec water technology",
          coordinates: { lat: 20.0543, lng: -99.3397 },
          artifacts: [
            {
              id: "tula-water-distribution",
              name: "Tula Water Distribution System",
              description: "An urban water network supplying a city of 30,000–60,000 people through a combination of river diversion channels, spring capture systems, and stone-lined distribution conduits spanning Tula's 16 square kilometer urban area. The system drew primary supply from the Tula River via diversion weirs and intake channels, with secondary supply from hillside springs captured in stone-walled collection basins. Distribution channels, typically 30–50 centimeters wide and lined with cut stone and hydraulic plaster, ran along major avenues and branched into residential neighborhoods through a hierarchical network. Archaeological evidence indicates that the system included settling basins at key junctions for sediment removal, overflow channels for flood management, and controlled distribution points where water was allocated to different neighborhoods—a level of urban hydraulic infrastructure that would directly influence the Aztec engineers who later built Tenochtitlan's famous aqueducts.",
              rarity: "epic",
              historicalPeriod: "Toltec Period (900-1168 CE)",
              significance: "Urban water network serving 30,000-60,000 people; direct precursor to Aztec hydraulic engineering at Tenochtitlan",
              yearBCE: -950,
              category: "aqueduct"
            },
            {
              id: "toltec-ceremonial-water",
              name: "Toltec Ceremonial Water Features",
              description: "Monumental fountains, reflecting pools, and ritual water channels integrated into Tula's ceremonial center, where water played a central role in Toltec religious practice and political display. The main ceremonial precinct, dominated by Pyramid B with its famous 4.6-meter-tall Atlantean warrior columns, incorporated stone-lined water channels that fed into reflecting pools positioned to mirror the pyramid's facade—creating dramatic visual effects during ceremonies viewed by thousands of assembled subjects. Excavations have revealed ceramic pipe segments and stone junction boxes indicating a pressurized water supply to elevated fountain features within the temple complex, suggesting hydraulic engineering capabilities previously attributed only to Old World civilizations. These ceremonial water installations served both religious functions—water was sacred in Mesoamerican cosmology, associated with Tlaloc and fertility—and political purposes, as the ability to command and display flowing water was a demonstration of elite power and divine favor.",
              rarity: "rare",
              historicalPeriod: "Toltec Period (900-1168 CE)",
              significance: "Ceremonial fountains and reflecting pools at Pyramid B; pressurized water features in temple complexes",
              yearBCE: -1000,
              category: "fountain"
            }
          ]
        }
      ]
    },
    {
      id: "khwarezmian-empire",
      name: "Khwarezmian Empire",
      description: "The Khwarezmian civilization (300 BCE–1220 CE) flourished in the arid lowlands along the lower Amu Darya (Oxus) river in modern-day Uzbekistan and Turkmenistan, transforming one of Central Asia's driest regions into a prosperous agricultural and urban civilization through massive irrigation engineering. At its peak under the Khwarezmshahs in the 12th–13th centuries, the empire controlled a territory stretching from the Caspian Sea to Afghanistan, with its capital at Urgench (Gurganj) serving as one of the great cities of the Islamic world with an estimated population of 200,000–300,000 people. The civilization's foundation was its extraordinary irrigation network—massive canal systems diverting the Amu Darya's snowmelt-fed waters across 3+ million hectares of otherwise barren Central Asian steppe, supporting intensive cultivation of cotton, wheat, rice, melons, and grapes. Khwarezmian irrigation engineers developed specialized water-lifting devices adapted to the flat terrain where gravity-fed canal systems required enormous intake structures to maintain sufficient elevation for water distribution across the broad, nearly level floodplain. The civilization met a catastrophic end when Genghis Khan's Mongol armies destroyed Urgench in 1221, deliberately breaching the Amu Darya's dams and levees to flood the city—an act of hydraulic warfare that demonstrated the civilization's total dependence on its engineered water systems.",
      position: [8, 0, 0],
      color: "#FF7043",
      era: "medieval",
      dateRange: "300 BCE-1220 CE",
      locations: [
        {
          id: "urgench",
          name: "Urgench (Konye-Urgench)",
          description: "Capital of the Khwarezmian Empire on the Amu Darya river",
          historicalContext: "One of the great cities of the medieval Islamic world, sustained by massive irrigation networks across Central Asian steppe",
          coordinates: { lat: 42.3271, lng: 59.1548 },
          artifacts: [
            {
              id: "amu-darya-irrigation",
              name: "Amu Darya Irrigation Networks",
              description: "Massive canal systems diverting water from the Amu Darya (Oxus) river to irrigate over 3 million hectares of Central Asian steppe—one of the largest pre-industrial irrigation networks in world history. The primary canals, some exceeding 100 kilometers in length and 20 meters in width, diverted water from the Amu Darya through massive headworks (band) constructed from timber, stone, and fascine bundles, requiring annual reconstruction after spring floods. Secondary and tertiary canals distributed water through a hierarchical network managed by an elaborate system of water rights (mirab-bashi) administered by professional water masters who allocated shares among communities based on complex traditional formulas. The system supported a dense agricultural landscape producing cotton (Khwarezm was a major cotton exporter to the Islamic world), wheat, rice, sesame, and the region's famous melons, sustaining urban centers with combined populations exceeding 500,000 people across the Khwarezmian oasis.",
              rarity: "legendary",
              historicalPeriod: "Khwarezmian Period (300 BCE-1220 CE)",
              significance: "Over 3 million hectares irrigated from the Amu Darya; one of the largest pre-industrial irrigation systems ever built",
              yearBCE: 200,
              category: "canal"
            },
            {
              id: "khwarezmian-water-lifts",
              name: "Khwarezmian Water Lifts",
              description: "Specialized water-lifting devices developed for the flat Central Asian terrain where the broad Amu Darya floodplain lacks the elevation differences needed for gravity-fed irrigation. Khwarezmian engineers adapted and improved upon Persian and Indian water-lifting technologies, creating large animal-powered water wheels (chigir) mounted on timber frames at canal intakes, capable of raising water 3–6 meters from the main canal level to elevated distribution channels. These devices featured wooden bucket chains with ceramic or leather containers, driven by oxen or camels walking in circles, and could lift approximately 2,000–4,000 liters per hour depending on the lift height and animal power available. The chigir installations were concentrated at critical elevation transition points along the canal network, forming pumping stations that extended the irrigated area far beyond what gravity-fed canals alone could serve across the nearly level terrain of the Amu Darya delta.",
              rarity: "rare",
              historicalPeriod: "Khwarezmian Period (300 BCE-1220 CE)",
              significance: "Animal-powered water lifts raising 2,000-4,000 liters/hour across flat Central Asian terrain",
              yearBCE: 100,
              category: "water-lifting"
            }
          ]
        }
      ]
    },
    {
      id: "liao-jin-yuan",
      name: "Liao/Jin/Yuan Dynasties",
      description: "The Liao (907–1125 CE), Jin (1115–1234 CE), and Yuan (1271–1368 CE) dynasties represent the successive conquest dynasties of northern China and Mongolia that made transformative contributions to hydraulic engineering by synthesizing nomadic steppe water management knowledge with Chinese urban engineering traditions. The Yuan Dynasty, founded by Kublai Khan (grandson of Genghis Khan), was particularly significant for hydraulic history—it established Dadu (modern Beijing) as the imperial capital and constructed the water infrastructure that would serve this mega-city for the next 700 years, including the Kunming Lake reservoir system and the Tongji Canal connecting the city to the Grand Canal. The Yuan Dynasty's most ambitious hydraulic project was the restoration, expansion, and straightening of the Grand Canal, creating a direct north-south waterway of 1,776 kilometers—the longest artificial waterway in world history—connecting the grain-surplus regions of the Yangtze Delta with the political capital at Dadu. This engineering feat, directed by the astronomer-engineer Guo Shoujing, required solving complex problems of elevation change, river crossing, and water supply across diverse terrain, and enabled the annual transport of 3–4 million shi (approximately 180,000–240,000 tonnes) of grain from south to north. The steppe-urban hybridization of water knowledge—combining Mongol expertise in managing water across vast grassland territories with Chinese expertise in urban infrastructure—produced innovations in long-distance water transport, flood control, and urban water supply that influenced East Asian hydraulic engineering for centuries.",
      position: [14, 0, -1],
      color: "#546E7A",
      era: "medieval",
      dateRange: "907-1368 CE",
      locations: [
        {
          id: "beijing-dadu",
          name: "Beijing (Dadu)",
          description: "Yuan Dynasty capital and center of conquest-dynasty hydraulic engineering",
          historicalContext: "Imperial capital where nomadic Mongol and Chinese engineering traditions merged to create transformative water infrastructure",
          coordinates: { lat: 39.9042, lng: 116.4074 },
          artifacts: [
            {
              id: "beijing-water-supply",
              name: "Beijing Water Supply Origins",
              description: "Construction of the foundational water infrastructure for Dadu (later Beijing), designed by the polymath engineer Guo Shoujing (1231–1316 CE) and including the Kunming Lake reservoir system, the Tongji Canal, and the Jishuitan (Accumulated Water Pool) that served as the terminal basin for the Grand Canal within the capital. Guo Shoujing surveyed and engineered a water supply system drawing from the Baifu Spring in the Western Hills, channeling water through a 30-kilometer canal to fill Kunming Lake (now in the Summer Palace grounds), which served as the primary reservoir for the capital's water needs. The system supplied water for the imperial palace, public fountains, urban canals for transportation, and fire-fighting reserves for a city that grew to house over 1 million people by the late Yuan period. This infrastructure proved so well-designed that it continued to function, with modifications, through the Ming and Qing dynasties and into the modern era—the Kunming Lake remains a functional reservoir today, over 700 years after its construction.",
              rarity: "epic",
              historicalPeriod: "Yuan Dynasty (1271-1368 CE)",
              significance: "Guo Shoujing's water infrastructure for Dadu/Beijing served 1 million+ people and still functions 700+ years later",
              yearBCE: -1293,
              category: "canal"
            },
            {
              id: "grand-canal-maintenance",
              name: "Grand Canal Maintenance Systems",
              description: "The Yuan Dynasty restoration and expansion of the Grand Canal into the world's longest artificial waterway at 1,776 kilometers, connecting Hangzhou in the south to Dadu (Beijing) in the north through a continuous navigable channel crossing five major river systems (Qiantang, Yangtze, Huai, Yellow, and Hai). Under Kublai Khan's orders and Guo Shoujing's engineering direction, the Yuan canal project (1279–1293 CE) straightened the earlier Sui Dynasty route, eliminating the detour through Kaifeng and reducing the total distance by approximately 700 kilometers. The engineering challenges were immense: the canal crossed terrain ranging from sea level to 42 meters elevation, requiring a system of 60+ pound locks (flash locks and later gate locks) to manage elevation changes, and at the Yellow River crossing, massive dike and sluice systems prevented the notoriously silt-laden river from flooding and blocking the canal. Annual maintenance required a permanent workforce of 20,000–30,000 laborers to dredge sediment, repair embankments, operate locks, and manage water levels—making it one of the largest permanent infrastructure operations in the pre-industrial world.",
              rarity: "legendary",
              historicalPeriod: "Yuan Dynasty (1271-1368 CE)",
              significance: "World's longest artificial waterway at 1,776 km with 60+ locks; transported 180,000-240,000 tonnes of grain annually",
              yearBCE: -1293,
              category: "canal"
            },
            {
              id: "steppe-urban-hybridization",
              name: "Steppe-Urban Water Hybridization",
              description: "The synthesis of nomadic Mongol water management knowledge—gained from centuries of managing water resources across the vast Eurasian steppe—with Chinese urban engineering traditions, producing innovations that neither tradition could have achieved alone. Mongol expertise included techniques for locating groundwater sources in arid grasslands, constructing temporary dams and diversions for watering massive horse herds (the Mongol army required water for 300,000–400,000 horses), and managing water supply across continental-scale military campaigns spanning from Hungary to Korea. When the Mongols established the Yuan Dynasty, this steppe knowledge was combined with Chinese expertise in canal engineering, urban water distribution, rice paddy irrigation, and flood control, creating hybrid solutions such as the multi-purpose reservoir systems that served both nomadic cavalry encampments and permanent urban populations. The resulting hydraulic innovations—including improved surveying techniques using astronomical instruments, long-distance water transport systems, and integrated military-civilian water infrastructure—influenced water engineering across the entire Mongol Empire, from Persia to China.",
              rarity: "rare",
              historicalPeriod: "Liao-Jin-Yuan Period (907-1368 CE)",
              significance: "Fusion of Mongol steppe and Chinese urban water traditions; managed water for 300,000+ horse armies and million-person cities",
              yearBCE: -1000,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "moche-civilization",
      name: "Moche Civilization",
      description: "The Moche civilization (100–700 CE) dominated the coastal river valleys of northern Peru, building one of the most hydraulically sophisticated societies in pre-Columbian South America. Thriving in one of the world's driest coastal deserts—where some areas receive less than 10 mm of rainfall annually—the Moche engineered extensive canal systems that diverted water from Andean rivers across the desert to irrigate over 30,000 hectares of farmland. Their intervalley canal networks, connecting separate river systems through engineered channels crossing desert ridgelines, represent some of the most ambitious hydraulic projects in the ancient Americas. The Moche's massive adobe pyramid complexes, the Huaca del Sol and Huaca de la Luna near modern Trujillo, required sophisticated drainage systems to protect their sun-dried brick structures from the occasional El Niño floods that could deliver months' worth of rainfall in hours. Moche engineers developed early versions of the intervalley water transfer systems later perfected by the Chimú, including the precursor infrastructure for the La Cumbre Canal. Their irrigation networks supported a population estimated at 50,000–100,000 people and enabled the cultivation of corn, squash, beans, and cotton in an environment that would otherwise be uninhabitable desert.",
      position: [-20, 0, 5],
      color: "#CD853F",
      era: "ancient",
      dateRange: "100-700 CE",
      locations: [
        {
          id: "huaca-sol-luna",
          name: "Huaca del Sol & Huaca de la Luna",
          description: "Massive adobe pyramid complex requiring sophisticated water management",
          historicalContext: "Capital of the Moche civilization near modern Trujillo, Peru",
          coordinates: { lat: -8.1236, lng: -78.9983 },
          artifacts: [
            {
              id: "moche-valley-canals",
              name: "Moche Valley Canal Network",
              description: "The Moche Valley canal system was one of the most extensive irrigation networks in the pre-Columbian Americas, channeling water from the Moche River through a branching network of primary, secondary, and tertiary canals that irrigated over 15,000 hectares of coastal desert. The primary canal, running approximately 30 kilometers from an intake point in the foothills to the coastal agricultural fields, maintained a precisely engineered gradient of 0.2–0.5% to prevent both sedimentation and erosion. The canal system featured stone-lined intake structures, distribution weirs with removable gates for directing flow to different field systems, and settling basins to remove sediment before water reached the fields. Archaeological evidence shows the Moche repaired and expanded their canal systems over centuries, with at least three major construction phases visible in the archaeological record. The system's sophistication—including the use of inverted siphons to cross small valleys—demonstrates engineering knowledge comparable to contemporary Roman hydraulic engineering on the other side of the world.",
              rarity: "epic",
              historicalPeriod: "Moche Period (100-700 CE)",
              significance: "30 km canal network irrigating 15,000+ hectares of coastal desert with Roman-level engineering sophistication",
              yearBCE: -300,
              category: "irrigation"
            },
            {
              id: "moche-aqueduct-precursor",
              name: "La Cumbre Aqueduct Precursor",
              description: "The Moche initiated the earliest phase of what would become the famous La Cumbre Canal, later expanded and completed by the Chimú Empire. Archaeological surveys reveal that the Moche constructed the initial 20-kilometer section of this intervalley transfer canal, attempting to connect the Chicama River valley with the Moche River valley to supplement their water supply during drought years. The early Moche sections feature simpler construction techniques—unlined earth channels with stone-reinforced sections at critical points—compared to the more sophisticated stone-lined channels built by the later Chimú. The canal's route followed natural contours along ridgelines between the two valleys, requiring the engineers to survey and maintain a consistent gradient across extremely challenging terrain including desert slopes, ravines, and exposed ridgelines subject to wind erosion. Though the Moche never completed the full intervalley connection, their initial engineering work and route selection laid the foundation for one of the most remarkable hydraulic achievements in the pre-Columbian Americas.",
              rarity: "rare",
              historicalPeriod: "Moche Period (300-600 CE)",
              significance: "Precursor to the Chimú La Cumbre Canal; earliest intervalley water transfer attempt in the Americas",
              yearBCE: -400,
              category: "aqueduct"
            },
            {
              id: "moche-flood-protection",
              name: "Huaca Flood Protection Systems",
              description: "The Moche developed sophisticated flood protection for their massive adobe pyramid complexes—structures that were highly vulnerable to water damage since they were constructed entirely from sun-dried mud bricks. El Niño events, occurring every 2–7 years, could deliver catastrophic rainfall to the normally bone-dry coastal desert, threatening to dissolve the enormous Huaca del Sol (the largest adobe structure in the Americas, containing an estimated 143 million bricks). Moche engineers designed integrated drainage systems including stone-lined channels along pyramid bases, graded surfaces to direct runoff away from structures, sacrificial erosion channels that allowed controlled water flow to protect critical sections, and thick plastered surfaces that shed water before it could penetrate the adobe core. Despite these measures, archaeological evidence shows multiple catastrophic flood episodes that required extensive rebuilding, suggesting the Moche were engaged in a continuous engineering battle against El Niño throughout their 600-year history.",
              rarity: "epic",
              historicalPeriod: "Moche Period (100-700 CE)",
              significance: "Protected the Americas' largest adobe structure (143M bricks) from El Niño floods",
              yearBCE: -200,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "yoruba-civilization",
      name: "Yoruba Civilization",
      description: "The Yoruba civilization (1200 CE–present), centered in southwestern Nigeria, developed sophisticated urban water management systems to support some of the largest pre-colonial cities in sub-Saharan Africa. The ancient city of Ile-Ife, regarded as the spiritual homeland of the Yoruba people, featured elaborate drainage systems, sacred groves protecting water sources, and urban planning that integrated water management into the fabric of city life. The Oyo Empire (1300–1836 CE), the most powerful Yoruba state, constructed defensive moats and managed river systems across a territory spanning over 150,000 square kilometers. Yoruba cities like Ife, Oyo, and Benin (a related Edo culture) were among the most urbanized settlements in pre-colonial Africa, with populations reaching 50,000–100,000 people, requiring sophisticated water supply, sanitation, and flood control systems. The Yoruba approach to water management was deeply integrated with religious practice—rivers and springs were associated with powerful orishas (deities) such as Oshun (river goddess) and Yemoja (ocean mother), creating a spiritual framework that protected water sources through sacred law and taboo rather than secular legislation.",
      position: [2, 0, 6],
      color: "#8B6914",
      era: "medieval",
      dateRange: "1200 CE - Present",
      locations: [
        {
          id: "ile-ife",
          name: "Ile-Ife",
          description: "Sacred city and center of Yoruba urban water engineering",
          historicalContext: "Spiritual capital of the Yoruba people with advanced urban water systems",
          coordinates: { lat: 7.4820, lng: 4.5624 },
          artifacts: [
            {
              id: "ife-urban-drainage",
              name: "Ile-Ife Urban Drainage System",
              description: "The ancient city of Ile-Ife developed an integrated urban drainage system that ranks among the most sophisticated in pre-colonial Africa. Archaeological excavations have revealed a network of stone-lined and pottery-pipe drains running beneath streets and courtyards, directing rainwater and gray water away from residential compounds and sacred precincts. The drainage system at the Ita Yemoo excavation site shows multiple phases of construction spanning several centuries, with increasingly sophisticated engineering: early phases used simple open channels, while later phases incorporated covered stone drains, settling chambers, and graded outfall channels directing water to the Osun River. The system was integrated with the city's famous pavement of potsherds—millions of pottery fragments laid in herringbone patterns that served as both durable road surfaces and permeable drainage layers, allowing rainwater to percolate through to subsurface drains rather than pooling on streets during the intense tropical rains. This combination of surface permeability and subsurface drainage represents a remarkably modern approach to urban stormwater management.",
              rarity: "epic",
              historicalPeriod: "1200-1500 CE",
              significance: "Sophisticated pre-colonial African urban drainage with potsherd-paved permeable surfaces",
              yearBCE: -1300,
              category: "sanitation"
            },
            {
              id: "yoruba-sacred-groves",
              name: "Sacred Grove Water Protection (Igbo Irunmale)",
              description: "The Yoruba system of sacred groves (igbo irunmale)—forest patches surrounding springs, river sources, and watersheds that were protected by religious taboo—represents one of the world's oldest forms of watershed conservation. Each grove was dedicated to a specific orisha (deity) and maintained by designated priests who enforced strict rules against farming, logging, or polluting within the sacred boundaries. The Osun-Osogbo Sacred Grove, now a UNESCO World Heritage site, protects a critical stretch of the Osun River and its associated springs, maintaining water quality and flow for downstream communities. Scientific studies have shown that Yoruba sacred groves preserve significantly higher biodiversity and maintain more consistent stream flows than surrounding deforested areas, validating the ecological wisdom embedded in the religious framework. This system of protecting water sources through spiritual authority rather than secular legislation proved remarkably effective over centuries, maintaining water quality in areas where purely utilitarian approaches failed.",
              rarity: "rare",
              historicalPeriod: "1200 CE - Present",
              significance: "UNESCO-recognized watershed conservation through sacred law; Osun-Osogbo Grove is World Heritage",
              yearBCE: -1200,
              category: "irrigation"
            },
            {
              id: "oyo-defensive-moats",
              name: "Oyo Empire Defensive Moats",
              description: "The Oyo Empire constructed some of the largest earthwork fortifications in West Africa, featuring deep moats (kòdì) that served dual purposes as military defenses and water management infrastructure. The walls and moats of Old Oyo (Oyo-Ile) enclosed an area of approximately 65 square kilometers, with moats reaching 6 meters deep and 20 meters wide in some sections. These moats were connected to natural drainage systems, filling with rainwater during the wet season to create formidable defensive barriers. During dry periods, sections of the moat system were used for fish farming and irrigated agriculture, demonstrating the Yoruba integration of military and agricultural water management. The nearby Eredo earthworks in Ijebu territory, dating to around 1000 CE, feature a moat system enclosing 400 square kilometers—one of the largest pre-colonial earthwork constructions in Africa, requiring the excavation of an estimated 3.5 million cubic meters of earth.",
              rarity: "epic",
              historicalPeriod: "1300-1800 CE",
              significance: "65 km² fortified area with 6m-deep moats; Eredo earthworks enclosed 400 km² with 3.5M cubic meters excavated",
              yearBCE: -1400,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "funan-oc-eo",
      name: "Funan - Oc Eo Maritime Hub",
      description: "The Funan Kingdom (1st–6th century CE) was the first major Indianized state in Southeast Asia, controlling the lower Mekong Delta and establishing the hydraulic engineering traditions that would later be perfected by the Khmer Empire. Centered around the port city of Oc Eo in what is now southern Vietnam, Funan's engineers transformed one of the world's most challenging hydrological environments—the vast, seasonally flooded Mekong Delta—into a productive agricultural landscape and thriving maritime trading hub connected to trade routes stretching from Rome to China. Chinese historical records describe Funan as a prosperous kingdom where 'the people live in houses raised on stilts' and 'they make canals to facilitate the flow of water.' Archaeological surveys, particularly aerial photography from the 1920s-1940s and modern satellite imagery, have revealed an extensive network of canals connecting Oc Eo to the coast and inland regions, demonstrating large-scale hydraulic landscape engineering comparable to contemporary Roman and Chinese canal systems. Funan's innovations in delta management, tidal agriculture, and canal-based transportation laid the foundations for Southeast Asian hydraulic civilization, influencing the successor Chenla and Khmer states that would create the extraordinary water systems at Angkor.",
      position: [24, 0, 6],
      color: "#5F9EA0",
      era: "ancient",
      dateRange: "1st-6th Century CE",
      locations: [
        {
          id: "oc-eo",
          name: "Oc Eo",
          description: "Major port city and center of Funan hydraulic engineering",
          historicalContext: "Hub of maritime Silk Road trade with canal network connecting coast to interior",
          coordinates: { lat: 10.2520, lng: 105.1510 },
          artifacts: [
            {
              id: "oc-eo-canal-network",
              name: "Oc Eo Canal Network",
              description: "The canal network radiating from the port city of Oc Eo represents the earliest large-scale hydraulic engineering in Southeast Asia. Aerial surveys revealed over 200 kilometers of canals connecting Oc Eo to the Gulf of Thailand coast (90 km to the west), to inland rice-growing areas (50 km to the east), and to other population centers throughout the lower Mekong Delta. The main canal, running straight for nearly 90 kilometers from Oc Eo to the coast at Ta Keo, is remarkably straight—suggesting the use of surveying techniques possibly adopted from contact with Roman or Indian engineers through maritime trade. The canals served multiple functions: transportation of trade goods (Roman coins, Indian jewelry, and Chinese ceramics have been found at Oc Eo), irrigation of rice paddies through controlled flooding, drainage of seasonally waterlogged land, and defensive barriers around major settlements. The engineering challenge was immense—the Mekong Delta's elevation varies by less than 2 meters across its entire 40,000 square kilometer extent, meaning canal gradients had to be engineered with extraordinary precision to maintain flow in such flat terrain.",
              rarity: "legendary",
              historicalPeriod: "1st-6th Century CE",
              significance: "200+ km canal network; earliest large-scale hydraulic engineering in Southeast Asia; connected Roman and Chinese trade routes",
              yearBCE: -200,
              category: "canal"
            },
            {
              id: "funan-tidal-agriculture",
              name: "Funan Tidal Rice Agriculture",
              description: "Funan's engineers developed a sophisticated system of tidal rice agriculture that exploited the Mekong Delta's unique hydrology—where tidal influence extends over 100 kilometers inland during the dry season. By constructing low levees and gated channels, farmers controlled the twice-daily tidal flow of brackish water into and out of rice paddies, using the tides as a natural irrigation pump that required no mechanical energy. During the wet season (June-November), when the Mekong's flow reverses the tidal pattern and freshwater floods extend across the delta, the same infrastructure managed flood levels to protect crops while allowing beneficial sediment deposition on fields. This dual-season water management system—tidal irrigation in the dry season, flood management in the wet season—was uniquely adapted to the Mekong Delta's hydrological regime and could not have been developed anywhere else in the world. The system supported rice yields sufficient to generate surplus for export, with Chinese records noting that Funan exported rice to trading partners across Southeast Asia.",
              rarity: "epic",
              historicalPeriod: "1st-6th Century CE",
              significance: "Unique tidal irrigation system exploiting Mekong Delta hydrology; used tides as natural irrigation pump",
              yearBCE: -100,
              category: "irrigation"
            },
            {
              id: "funan-port-hydraulics",
              name: "Oc Eo Port Water Management",
              description: "The port city of Oc Eo required sophisticated water management to function as a major international trading hub in the challenging Mekong Delta environment. Archaeological evidence reveals a rectangular city plan of approximately 450 hectares, surrounded by a moat and canal system that provided both defense and water management. The port facilities included canal-based docking systems where ocean-going vessels could navigate inland through controlled waterways, freshwater supply systems separating drinking water from the brackish canal water, and drainage infrastructure to manage the extreme seasonal variation between dry-season low water and wet-season floods that could raise water levels by 4-5 meters. Excavations have uncovered stone-lined water channels, brick-built reservoirs, and ceramic pipe systems within the city, demonstrating urban water infrastructure comparable to contemporary Roman provincial cities. The discovery of Roman medallions, Indian beads, and Chinese mirrors at Oc Eo confirms its role as a nexus of global maritime trade, facilitated by its engineered waterway connections.",
              rarity: "epic",
              historicalPeriod: "1st-6th Century CE",
              significance: "450-hectare port city with canal docking system; connected Roman, Indian, and Chinese maritime trade networks",
              yearBCE: -200,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "neolithic-anatolia",
      name: "Neolithic Anatolia",
      description: "Humanity's earliest settlements developed foundational water management, from Gobekli Tepe (9500 BCE) to Catalhoyuk (7500 BCE).",
      position: [4, 0, -7],
      color: "#8B7355",
      era: "ancient",
      dateRange: "9500-3000 BCE",
      locations: [
        {
          id: "catalhoyuk",
          name: "Catalhoyuk & Early Settlements",
          description: "Among the world's first cities with managed water access",
          historicalContext: "Population 5,000-10,000",
          coordinates: { lat: 37.67, lng: 32.83 },
          artifacts: [
            { id: "catalhoyuk-water", name: "Catalhoyuk Water Management", description: "One of the world's first cities with managed water — channeled streams, rooftop drainage, plastered water collection.", rarity: "legendary", historicalPeriod: "7500-5700 BCE", significance: "Water management in one of humanity's earliest urban settlements", yearBCE: 7500, category: "irrigation" },
            { id: "gobekli-tepe-water", name: "Gobekli Tepe Ritual Water", description: "World's oldest known monumental architecture. Cistern-like features carved into bedrock, channels directing rainwater.", rarity: "legendary", historicalPeriod: "9500-8000 BCE", significance: "Water engineering at the world's oldest temple complex", yearBCE: 9500, category: "dam" },
            { id: "asikli-hoyuk-canal", name: "Asikli Hoyuk Canal", description: "One of the earliest irrigation canals — channel diverting water from the Melendiz River to agriculture.", rarity: "legendary", historicalPeriod: "8200-7400 BCE", significance: "Among the earliest irrigation evidence on Earth", yearBCE: 8200, category: "irrigation" },
            { id: "hacilar-drainage", name: "Hacilar Settlement Drainage", description: "Neolithic settlement with stone-lined drainage channels beneath and between houses.", rarity: "epic", historicalPeriod: "7000-5000 BCE", significance: "Early planned settlement drainage", yearBCE: 7000, category: "sanitation" },
            { id: "cayonu-tepesi-water", name: "Cayonu Tepesi Water Systems", description: "One of the oldest permanent settlements with channeled water and early cistern technology.", rarity: "epic", historicalPeriod: "7200-6600 BCE", significance: "Transition-era water engineering", yearBCE: 7200, category: "irrigation" }
          ]
        }
      ]
    },
    {
      id: "troy-lydia",
      name: "Troy & Lydia",
      description: "From Troy's siege-proof water systems to Lydia's gold-processing channels at Sardis.",
      position: [3, 0, -8],
      color: "#DAA520",
      era: "ancient",
      dateRange: "2500-546 BCE",
      locations: [
        {
          id: "troy-citadel",
          name: "Troy (Hisarlik)",
          description: "Water engineering at history's most famous city",
          historicalContext: "Multiple phases from Troy II to Troy VI",
          coordinates: { lat: 39.96, lng: 26.24 },
          artifacts: [
            { id: "troy-water-systems", name: "Troy II-VI Water Systems", description: "Multiple phases of water management. Troy II had stone-lined wells. Troy VI had underground cisterns and drainage beneath citadel walls.", rarity: "epic", historicalPeriod: "2500-1250 BCE", significance: "Water engineering at history's most famous city", yearBCE: 2500, category: "sanitation" },
            { id: "trojan-siege-well", name: "Trojan Siege Well", description: "Deep rock-cut well within the citadel providing water during siege. Reached 8+ meters through bedrock.", rarity: "rare", historicalPeriod: "~1250 BCE", significance: "Siege-proof water engineering", yearBCE: 1250, category: "fountain" }
          ]
        },
        {
          id: "sardis",
          name: "Sardis (Lydia)",
          description: "Water for the world's first coinage economy",
          historicalContext: "Gold refining required massive water supply",
          coordinates: { lat: 38.49, lng: 28.04 },
          artifacts: [
            { id: "sardis-water", name: "Sardis Water System", description: "Channels diverted the Pactolus River to gold-processing areas. Gygaean Lake managed as a reservoir.", rarity: "epic", historicalPeriod: "700-546 BCE", significance: "Water for the world's first coinage economy", yearBCE: 700, category: "canal" },
            { id: "lydian-tunnel", name: "Lydian Tunnel of Lake Nymphaion", description: "Rock-cut water tunnel for irrigation, similar to the Tunnel of Eupalinos.", rarity: "epic", historicalPeriod: "~600 BCE", significance: "Independent Anatolian tunnel engineering", yearBCE: 600, category: "canal" },
            { id: "bin-tepe-drainage", name: "Bin Tepe Royal Tomb Drainage", description: "Tomb of Alyattes (355m diameter, 69m high) had sophisticated drainage.", rarity: "rare", historicalPeriod: "700-546 BCE", significance: "Water engineering for monumental tomb construction", yearBCE: 700, category: "sanitation" }
          ]
        }
      ]
    },
    {
      id: "phrygian-kingdom",
      name: "Phrygian Kingdom",
      description: "King Midas's kingdom developed rock-cut water channels, cisterns, and highland dam technology.",
      position: [4, 0, -8],
      color: "#CD853F",
      era: "ancient",
      dateRange: "1200-600 BCE",
      locations: [
        {
          id: "gordion",
          name: "Gordion",
          description: "Capital of King Midas with river-fed water supply",
          historicalContext: "Site of the Gordian Knot",
          coordinates: { lat: 39.65, lng: 31.97 },
          artifacts: [
            { id: "gordion-water", name: "Gordion City Water Supply", description: "Phrygian capital with water from the Sangarios River. Stone-lined channels and wells.", rarity: "epic", historicalPeriod: "900-700 BCE", significance: "Capital city water engineering of King Midas's kingdom", yearBCE: 900, category: "aqueduct" },
            { id: "midas-city-water", name: "Midas City Rock-Cut Water", description: "Channels carved into cliff faces directing rainwater to cisterns, extending hundreds of meters.", rarity: "epic", historicalPeriod: "800-600 BCE", significance: "Rock-cut water engineering on a monumental scale", yearBCE: 800, category: "canal" },
            { id: "phrygian-highland-dam", name: "Phrygian Highland Dam", description: "Small dams across highland streams for agricultural irrigation.", rarity: "rare", historicalPeriod: "800-600 BCE", significance: "Highland dam technology in central Anatolia", yearBCE: 800, category: "dam" }
          ]
        }
      ]
    },
    {
      id: "classical-anatolia",
      name: "Classical & Hellenistic Anatolia",
      description: "From Ephesus to Pergamon to Hierapolis — some of the ancient world's most impressive urban water systems.",
      position: [3, 0, -6],
      color: "#4682B4",
      era: "classical",
      dateRange: "546 BCE - 400 CE",
      locations: [
        {
          id: "ephesus",
          name: "Ephesus & Ionian Cities",
          description: "Water for the ancient world's greatest cities",
          historicalContext: "Major Greek then Roman cities in Ionia",
          coordinates: { lat: 37.94, lng: 27.34 },
          artifacts: [
            { id: "ephesus-water", name: "Ephesus Water Supply", description: "Multiple aqueducts. The Library of Celsus had integrated water cooling.", rarity: "legendary", historicalPeriod: "6th c. BCE onwards", significance: "Water for one of the ancient world's greatest cities", yearBCE: 500, category: "aqueduct" },
            { id: "pergamon-pipeline", name: "Pergamon Pressure Pipeline", description: "Pressurized pipeline under 20 atmospheres crossing a 190m-deep valley.", rarity: "legendary", historicalPeriod: "3rd-2nd c. BCE", significance: "Most extreme water pressure in the ancient Greek world", yearBCE: 250, category: "aqueduct" },
            { id: "priene-distribution", name: "Priene Water Distribution", description: "Stone channels along every street with terracotta pipe connections to houses.", rarity: "epic", historicalPeriod: "4th c. BCE", significance: "Best-preserved Greek urban water planning", yearBCE: 350, category: "sanitation" },
            { id: "miletus-harbor", name: "Miletus Harbor Engineering", description: "Four harbors managed as the Maeander River silted them. Miletus is now 10km from the sea.", rarity: "epic", historicalPeriod: "6th-2nd c. BCE", significance: "Ancient harbor water engineering and its limits", yearBCE: 500, category: "canal" }
          ]
        },
        {
          id: "pamphylia-coast",
          name: "Pamphylia & Southern Coast",
          description: "Dramatic Roman aqueducts and water displays",
          historicalContext: "Roman cities with monumental water architecture",
          coordinates: { lat: 36.94, lng: 30.79 },
          artifacts: [
            { id: "aspendos-aqueduct", name: "Aspendos Aqueduct", description: "Roman aqueduct with two pressure towers using inverted-siphon principle. Towers rose 30+ meters.", rarity: "legendary", historicalPeriod: "2nd c. CE", significance: "Most visually dramatic aqueduct in Asia Minor", yearBCE: -150, category: "aqueduct" },
            { id: "hierapolis-springs", name: "Hierapolis (Pamukkale) Hot Spring Engineering", description: "Management of calcium-rich hot springs creating the famous white travertine terraces. UNESCO site.", rarity: "legendary", historicalPeriod: "2nd c. BCE onwards", significance: "Hot spring management creating a geological wonder", yearBCE: 150, category: "fountain" },
            { id: "perge-nymphaeum", name: "Perge Nymphaeum Water Display", description: "Water channel ran the entire 300m length of the main colonnaded street.", rarity: "epic", historicalPeriod: "2nd c. CE", significance: "Most dramatic urban water display in ancient Asia Minor", yearBCE: -150, category: "fountain" },
            { id: "side-aqueduct", name: "Side Aqueduct & Nymphaeum", description: "30km aqueduct with multiple arched sections. Best-preserved Roman water systems in Turkey.", rarity: "epic", historicalPeriod: "2nd c. CE", significance: "Among the best-preserved Roman aqueducts anywhere", yearBCE: -150, category: "aqueduct" },
            { id: "antioch-water", name: "Antioch Water System", description: "One of Rome's four greatest cities. Elaborate water supply from Daphne springs 10km away.", rarity: "epic", historicalPeriod: "1st c. BCE-6th c. CE", significance: "Water for one of Rome's largest cities", yearBCE: 50, category: "aqueduct" }
          ]
        }
      ]
    },
    {
      id: "seljuk-anatolia",
      name: "Seljuk Anatolia",
      description: "Over 100 caravanserais with dedicated water supply across 3,000km of trade routes.",
      position: [5, 0, -7],
      color: "#B8860B",
      era: "medieval",
      dateRange: "1077-1307 CE",
      locations: [
        {
          id: "seljuk-trade-routes",
          name: "Seljuk Trade Routes",
          description: "Water along Silk Road caravanserais",
          historicalContext: "100+ caravanserais with standardized water",
          coordinates: { lat: 38.73, lng: 32.49 },
          artifacts: [
            { id: "seljuk-caravanserai-water", name: "Seljuk Caravanserai Water Systems", description: "Over 100 caravanserais with wells, cisterns, or channeled springs.", rarity: "epic", historicalPeriod: "12th-13th c. CE", significance: "Standardized travel water across 3,000km", yearBCE: -1200, category: "fountain" },
            { id: "seljuk-cesme", name: "Seljuk Fountain Architecture (Cesme)", description: "Public fountains at intersections fed by underground channels.", rarity: "rare", historicalPeriod: "12th-13th c. CE", significance: "Urban public water across Seljuk Anatolia", yearBCE: -1200, category: "fountain" },
            { id: "sultan-han-water", name: "Sultan Han Water Court", description: "Largest Seljuk caravanserai with raised mosque over a water basin.", rarity: "epic", historicalPeriod: "1229 CE", significance: "Sacred and practical water architecture", yearBCE: -1229, category: "fountain" },
            { id: "seljuk-lagim", name: "Seljuk Underground Channels (Lagim)", description: "Underground stone-lined water channels beneath cities extending kilometers.", rarity: "epic", historicalPeriod: "12th-13th c. CE", significance: "Predecessor to Ottoman water systems", yearBCE: -1200, category: "canal" }
          ]
        }
      ]
    },
    {
      id: "modern-turkey",
      name: "Modern Turkey",
      description: "From the massive GAP project to underwater Bosphorus tunnels.",
      position: [5, 0, -6],
      color: "#E74C3C",
      era: "modern",
      dateRange: "1923 CE - Present",
      locations: [
        {
          id: "gap-project",
          name: "GAP & Modern Infrastructure",
          description: "Turkey's largest water projects",
          historicalContext: "Most ambitious water development in the Middle East",
          coordinates: { lat: 37.75, lng: 38.27 },
          artifacts: [
            { id: "ataturk-dam", name: "Ataturk Dam", description: "Largest dam in Turkey. 169m tall, 1,820m long. Part of GAP — 22 dams and 19 plants.", rarity: "legendary", historicalPeriod: "1990 CE", significance: "Turkey's largest water infrastructure project", yearBCE: -1990, category: "dam" },
            { id: "gap-project-water", name: "GAP (Southeastern Anatolia Project)", description: "22 dams, 19 power plants, 1.8 million hectares irrigation on Tigris and Euphrates.", rarity: "legendary", historicalPeriod: "1977-ongoing", significance: "Largest integrated water development in the Middle East", yearBCE: -1977, category: "irrigation" },
            { id: "istanbul-bosphorus-tunnel", name: "Istanbul Bosphorus Water Tunnels", description: "Deep tunnel sewerage beneath the Bosphorus connecting European and Asian Istanbul.", rarity: "epic", historicalPeriod: "2012 CE", significance: "Modern underwater water engineering", yearBCE: -2012, category: "sanitation" }
          ]
        }
      ]
    },
    {
      id: "thracian-dacian",
      name: "Thracian & Dacian Civilizations",
      description: "From Thracian gold mine water to Dacian mountain fortress water supply in southeastern Europe.",
      position: [2, 0, -7],
      color: "#556B2F",
      era: "ancient",
      dateRange: "1500 BCE - 106 CE",
      locations: [
        {
          id: "thrace",
          name: "Thrace (Bulgaria)",
          description: "Water for gold mining and sacred springs",
          historicalContext: "Among the wealthiest ancient peoples",
          coordinates: { lat: 42.15, lng: 24.75 },
          artifacts: [
            { id: "thracian-gold-mine-water", name: "Thracian Gold Mine Water Systems", description: "Channels diverted rivers to wash gold-bearing sediment.", rarity: "epic", historicalPeriod: "1500-300 BCE", significance: "Industrial water for ancient world's most productive gold mines", yearBCE: 1500, category: "canal" },
            { id: "thracian-springs", name: "Thracian Sacred Spring Sanctuaries", description: "Elaborate stone-carved sanctuaries around natural springs, central to Thracian religion.", rarity: "epic", historicalPeriod: "1000-300 BCE", significance: "Sacred water architecture predating Greek influence", yearBCE: 1000, category: "fountain" }
          ]
        },
        {
          id: "dacia",
          name: "Dacia (Romania)",
          description: "Mountain fortress water engineering",
          historicalContext: "Dacian fortresses are UNESCO sites",
          coordinates: { lat: 45.62, lng: 23.20 },
          artifacts: [
            { id: "dacian-fortress-water", name: "Dacian Mountain Fortress Water", description: "Dacian fortresses with ceramic pipe systems, cisterns, and channeled springs. UNESCO.", rarity: "epic", historicalPeriod: "100 BCE-106 CE", significance: "Highland fortress water engineering — UNESCO site", yearBCE: 100, category: "aqueduct" },
            { id: "dacian-ceramic-pipes", name: "Dacian Ceramic Water Pipes", description: "Standardized terracotta pipes with socketed joints and intake filters.", rarity: "rare", historicalPeriod: "100 BCE-106 CE", significance: "Pre-Roman ceramic pipe technology in Eastern Europe", yearBCE: 100, category: "sanitation" }
          ]
        }
      ]
    },
    {
      id: "scythian-peoples",
      name: "Scythian & Sarmatian Peoples",
      description: "Nomadic water knowledge across the world's largest steppe.",
      position: [3, 0, -5],
      color: "#8B4513",
      era: "ancient",
      dateRange: "800 BCE - 400 CE",
      locations: [
        {
          id: "pontiac-steppe",
          name: "Pontiac Steppe",
          description: "Nomadic water management across vast grasslands",
          historicalContext: "World's first major cavalry culture",
          coordinates: { lat: 47.50, lng: 35.00 },
          artifacts: [
            { id: "scythian-water-knowledge", name: "Scythian Water Source Knowledge", description: "Nomadic water knowledge across the steppe. Herodotus described it in detail.", rarity: "rare", historicalPeriod: "800-200 BCE", significance: "Nomadic water knowledge across the world's largest steppe", yearBCE: 800, category: "irrigation" },
            { id: "scythian-tomb-water", name: "Scythian Royal Tomb Water Engineering", description: "Drainage in kurgans exceeding 20m height.", rarity: "rare", historicalPeriod: "400-200 BCE", significance: "Water engineering for monumental burial mounds", yearBCE: 400, category: "sanitation" },
            { id: "scythian-horse-watering", name: "Scythian Horse Watering Infrastructure", description: "Watering points along migration routes for herds of 10,000+.", rarity: "common", historicalPeriod: "800-200 BCE", significance: "Water for the world's first major cavalry culture", yearBCE: 800, category: "irrigation" }
          ]
        }
      ]
    },
    {
      id: "slavic-kievan-rus",
      name: "Slavic & Kievan Rus",
      description: "From Novgorod's wooden drainage to Kiev's water supply — Eastern Slavic water traditions.",
      position: [2, 0, -4],
      color: "#2E8B57",
      era: "medieval",
      dateRange: "500-1240 CE",
      locations: [
        {
          id: "novgorod-kiev",
          name: "Novgorod & Kiev",
          description: "Medieval Slavic urban water engineering",
          historicalContext: "Capitals of the first East Slavic states",
          coordinates: { lat: 58.52, lng: 31.28 },
          artifacts: [
            { id: "kievan-rus-river-highway", name: "Kievan Rus River Highway System", description: "Varangian-to-Greeks route: managed waterway from Scandinavia to Constantinople via the Dnieper.", rarity: "legendary", historicalPeriod: "862-1240 CE", significance: "River navigation as state-building infrastructure", yearBCE: -862, category: "canal" },
            { id: "novgorod-drainage", name: "Novgorod Drainage System", description: "One of the oldest wooden drainage systems in Europe. Log-lined drains beneath streets.", rarity: "epic", historicalPeriod: "10th-15th c. CE", significance: "Oldest wooden urban drainage in Eastern Europe", yearBCE: -950, category: "sanitation" },
            { id: "kiev-water-supply", name: "Kiev Water Supply", description: "Ceramic pipes from springs, wells, and managed Dnieper access.", rarity: "epic", historicalPeriod: "10th-13th c. CE", significance: "Capital water engineering of the first East Slavic state", yearBCE: -950, category: "aqueduct" },
            { id: "slavic-log-dam", name: "Slavic Log Dam (Gat)", description: "Timber dams for fish farming, mill power, and flood storage. Interlocking log construction.", rarity: "rare", historicalPeriod: "6th c. CE onwards", significance: "Timber dam technology across Eastern Europe", yearBCE: -550, category: "dam" },
            { id: "russian-banya-water", name: "Russian Banya Water System", description: "Steam bathhouse with water heating and steam by pouring water on hot stones.", rarity: "rare", historicalPeriod: "10th c. CE onwards", significance: "Water-thermal engineering for bathing culture", yearBCE: -950, category: "sanitation" },
            { id: "slavic-river-mills", name: "Slavic River Mill Networks", description: "Water mills requiring dam construction, millrace engineering, and seasonal flow management.", rarity: "rare", historicalPeriod: "9th c. CE onwards", significance: "Water power across Eastern Europe", yearBCE: -850, category: "dam" }
          ]
        }
      ]
    },
    {
      id: "medieval-eastern-europe",
      name: "Medieval Eastern European Kingdoms",
      description: "From Hungarian thermal baths to Polish salt mine drainage to Bohemian fish ponds.",
      position: [1, 0, -5],
      color: "#4169E1",
      era: "medieval",
      dateRange: "1000-1500 CE",
      locations: [
        {
          id: "budapest-krakow",
          name: "Budapest & Central Europe",
          description: "Thermal springs, salt mines, and fish ponds",
          historicalContext: "Medieval kingdoms with distinctive water traditions",
          coordinates: { lat: 47.50, lng: 19.04 },
          artifacts: [
            { id: "hungarian-thermal", name: "Hungarian Thermal Spring Management", description: "Budapest sits on 120+ thermal springs. Baths operating 500+ years continuously.", rarity: "epic", historicalPeriod: "1000 CE onwards", significance: "Longest continuously operating thermal water in Europe", yearBCE: -1000, category: "fountain" },
            { id: "wieliczka-water", name: "Polish Wieliczka Salt Mine Water Management", description: "UNESCO salt mine requiring constant drainage and water-powered hoists.", rarity: "epic", historicalPeriod: "1044 CE onwards", significance: "Oldest mine water management in Europe", yearBCE: -1044, category: "sanitation" },
            { id: "bohemian-fish-ponds", name: "Bohemian Fish Pond Systems", description: "24,000 ponds built, 8,000 survive. Connected cascades managing watershed water flow.", rarity: "epic", historicalPeriod: "13th-16th c. CE", significance: "Largest artificial pond system in Europe", yearBCE: -1250, category: "dam" },
            { id: "dubrovnik-water", name: "Dubrovnik (Ragusa) Water Supply", description: "Onofrio's Fountain and 12km aqueduct. Still functioning after 590 years.", rarity: "epic", historicalPeriod: "1436 CE", significance: "Oldest functioning aqueduct in the Balkans", yearBCE: -1436, category: "aqueduct" },
            { id: "serbian-monastery-water", name: "Serbian Monastery Water Systems", description: "UNESCO monasteries with springs channeled to baptismal pools, kitchens, gardens.", rarity: "rare", historicalPeriod: "12th-14th c. CE", significance: "Monastic water engineering in the Balkans", yearBCE: -1200, category: "fountain" },
            { id: "transylvanian-mills", name: "Transylvanian Saxon Water Mills", description: "German settlers built water mill networks. Fortified churches had wells and cisterns.", rarity: "rare", historicalPeriod: "12th-16th c. CE", significance: "Central European water technology in Carpathians", yearBCE: -1200, category: "dam" }
          ]
        }
      ]
    },
    {
      id: "pre-viking-scandinavia",
      name: "Pre-Viking Scandinavia",
      description: "10,000 years of water engineering before the Viking Age, from Mesolithic fish traps to Iron Age bog iron processing.",
      position: [-3, 0, -15],
      color: "#6B8E23",
      era: "ancient",
      dateRange: "10,000 BCE - 700 CE",
      locations: [
        {
          id: "ertebolle-coast",
          name: "Ertebølle Coastal Sites",
          description: "Mesolithic coastal fish trap sites",
          historicalContext: "Among the oldest fish trap systems in Northern Europe",
          coordinates: { lat: 56.6, lng: 10.3 },
          artifacts: [
            {
              id: "ertebolle-fish-traps",
              name: "Mesolithic Coastal Fish Traps (Ertebølle)",
              description: "Elaborate wicker and wooden fish traps in coastal lagoons managing tidal water for systematic fishing",
              rarity: "epic",
              historicalPeriod: "Mesolithic (5400-3900 BCE)",
              significance: "Some traps spanned entire fjord narrows; thousands of stake fragments found in Danish waters",
              yearBCE: 5400,
              category: "dam"
            },
            {
              id: "neolithic-pile-dwellings",
              name: "Neolithic Pile Dwellings",
              description: "Lake and marsh dwellings on wooden platforms requiring water level management and bank stabilization",
              rarity: "rare",
              historicalPeriod: "Neolithic (4000-800 BCE)",
              significance: "Earliest Scandinavian water-adapted architecture adapted to Northern conditions",
              yearBCE: 4000,
              category: "dam"
            }
          ]
        },
        {
          id: "bronze-age-scandinavia",
          name: "Bronze Age Scandinavian Settlements",
          description: "Coastal settlements with rock-cut wells",
          historicalContext: "Early Scandinavian groundwater engineering",
          coordinates: { lat: 57.7, lng: 12.0 },
          artifacts: [
            {
              id: "bronze-age-rock-wells",
              name: "Bronze Age Rock-Cut Wells",
              description: "Wells cut into bedrock in coastal settlements precisely positioned to access freshwater lenses above saltwater",
              rarity: "rare",
              historicalPeriod: "Bronze Age (1800-500 BCE)",
              significance: "Required understanding of groundwater dynamics on coastal and island sites",
              yearBCE: 1800,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "iron-age-bog",
          name: "Scandinavian Bog Iron Sites",
          description: "Iron extraction from bogs requiring water management",
          historicalContext: "Water-dependent metallurgy that enabled the Viking expansion",
          coordinates: { lat: 59.0, lng: 15.0 },
          artifacts: [
            {
              id: "bog-iron-water-processing",
              name: "Iron Age Bog Iron Water Processing",
              description: "Iron extraction from bogs requiring draining sections to access ore, washing and roasting ore, and using water in smelting",
              rarity: "epic",
              historicalPeriod: "Iron Age (500 BCE - 800 CE)",
              significance: "Bog iron fueled the weapons that enabled the Viking Age expansion",
              yearBCE: 500,
              category: "water-lifting"
            },
            {
              id: "migration-period-boat-graves",
              name: "Migration Period Boat Graves",
              description: "Ship burials requiring water engineering for launching ships onto land and managing groundwater around burial mounds",
              rarity: "rare",
              historicalPeriod: "Migration Period (400-700 CE)",
              significance: "Oseberg ship preserved in waterlogged blue clay for 1100 years; water conditions as preservation technology",
              yearBCE: -400,
              category: "canal"
            }
          ]
        },
        {
          id: "fjord-harbors-pre-viking",
          name: "Pre-Viking Fjord Harbor Sites",
          description: "Early harbor structures in Norwegian fjords",
          historicalContext: "Foundation of Norse maritime infrastructure",
          coordinates: { lat: 60.0, lng: 6.0 },
          artifacts: [
            {
              id: "iron-age-fjord-harbors",
              name: "Iron Age Fjord Harbor Construction",
              description: "Pre-Viking harbor structures including stone jetties, boat shelters, and managed landing beaches",
              rarity: "rare",
              historicalPeriod: "Iron Age (500 BCE - 700 CE)",
              significance: "Required understanding of tidal patterns, storm surge, and fjord currents",
              yearBCE: 500,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "iceland",
      name: "Iceland",
      description: "From Viking settlement springs to the world's largest geothermal heating system — 1,100 years of extraordinary water engineering on a volcanic island.",
      position: [-8, 0, -16],
      color: "#4169E1",
      era: "medieval",
      dateRange: "874 CE - Present",
      locations: [
        {
          id: "reykjavik-settlement",
          name: "Reykjavík Settlement",
          description: "Viking settlement site chosen for its geothermal steam",
          historicalContext: "Ingólfur Arnarson chose Reykjavík for hot springs visible from sea",
          coordinates: { lat: 64.15, lng: -21.95 },
          artifacts: [
            {
              id: "viking-settlement-water",
              name: "Viking Settlement Water Selection",
              description: "Norse settlers chose farm sites based on hot springs for bathing and heating, cold springs for drinking, rivers for fishing",
              rarity: "epic",
              historicalPeriod: "Norse Settlement (874 CE onwards)",
              significance: "Water determined Iceland's settlement pattern; Reykjavík means Smoky Bay",
              yearBCE: -874,
              category: "aqueduct"
            },
            {
              id: "reykjavik-geothermal-heating",
              name: "Reykjavík Geothermal District Heating",
              description: "World's largest geothermal district heating system with 200 km of pipelines beneath Reykjavík",
              rarity: "legendary",
              historicalPeriod: "Modern (1930 onwards)",
              significance: "Over 90% of Iceland's buildings heated by geothermal hot water at 80-130°C",
              yearBCE: -1930,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "reykholt",
          name: "Reykholt",
          description: "Snorri Sturluson's estate with Europe's oldest named swimming pool",
          historicalContext: "Hot spring bathing has defined Icelandic culture for 1100 years",
          coordinates: { lat: 64.66, lng: -21.30 },
          artifacts: [
            {
              id: "snorralaug-hot-pool",
              name: "Icelandic Hot Spring Bathing (Snorralaug)",
              description: "Snorri Sturluson's hot pool at Reykholt — stone-lined, spring-fed, connected to his hall by covered passage",
              rarity: "legendary",
              historicalPeriod: "Medieval (1200 CE)",
              significance: "Oldest known named swimming pool in Europe; 1000+ years of geothermal bathing culture",
              yearBCE: -1200,
              category: "fountain"
            },
            {
              id: "icelandic-irrigation",
              name: "Icelandic Irrigation (Veitingakerfi)",
              description: "Gravity-fed irrigation of hayfields using diverted stream water to accelerate grass growth in short growing season",
              rarity: "rare",
              historicalPeriod: "Medieval onwards",
              significance: "Northernmost historical irrigation in the world; managed through traditional community water rights",
              yearBCE: -1000,
              category: "irrigation"
            }
          ]
        },
        {
          id: "thingvellir",
          name: "Þingvellir (Thingvellir)",
          description: "Site of the world's oldest parliament defined by water",
          historicalContext: "UNESCO World Heritage — water landscape as foundation of democracy",
          coordinates: { lat: 64.26, lng: -21.13 },
          artifacts: [
            {
              id: "thingvellir-water-landscape",
              name: "Þingvellir Water Landscape",
              description: "Althing parliament site defined by Öxarárfoss waterfall and Öxará River diverted by settlers to flow through the assembly site",
              rarity: "legendary",
              historicalPeriod: "930 CE onwards",
              significance: "UNESCO World Heritage; world's oldest parliament met at a site defined by water and rift geology",
              yearBCE: -930,
              category: "canal"
            }
          ]
        },
        {
          id: "iceland-turf-houses",
          name: "Icelandic Turf House Sites",
          description: "Turf architecture with sophisticated drainage systems",
          historicalContext: "Without proper drainage turf houses would collapse within years",
          coordinates: { lat: 65.0, lng: -18.5 },
          artifacts: [
            {
              id: "turf-house-drainage",
              name: "Icelandic Turf House Water Management",
              description: "Stone-lined channels beneath walls, gravel drainage layers, and sloped turf roofs directing water away from living spaces",
              rarity: "rare",
              historicalPeriod: "874 CE onwards",
              significance: "Arctic building water management — survival architecture for sub-Arctic conditions",
              yearBCE: -874,
              category: "sanitation"
            },
            {
              id: "stong-farm-water",
              name: "Stöng Medieval Farm Water System",
              description: "Viking-era farm at Stöng with channeled spring water, stone-lined dairy cooling pools, and drainage beneath longhouse",
              rarity: "epic",
              historicalPeriod: "Pre-1104 CE (buried by Hekla eruption)",
              significance: "Best-preserved example of Norse farm water engineering; volcanic tephra preserved site perfectly",
              yearBCE: -1000,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "iceland-modern-water",
          name: "Icelandic Hydropower & Geothermal Sites",
          description: "Modern geothermal and hydroelectric infrastructure",
          historicalContext: "Near-total renewable energy production",
          coordinates: { lat: 65.0, lng: -18.0 },
          artifacts: [
            {
              id: "icelandic-hydropower",
              name: "Icelandic Hydropower",
              description: "Over 70% of Iceland's electricity from hydropower with massive reservoirs in the highlands",
              rarity: "epic",
              historicalPeriod: "1904 onwards",
              significance: "Kárahnjúkar Dam 193m tall — Iceland's largest; near-total renewable hydro energy production",
              yearBCE: -1904,
              category: "dam"
            },
            {
              id: "icelandic-geothermal-greenhouse",
              name: "Icelandic Geothermal Greenhouse",
              description: "Geothermal hot water for greenhouse heating producing vegetables and even bananas at 64°N latitude",
              rarity: "rare",
              historicalPeriod: "1924 onwards",
              significance: "Over 200 hectares of geothermal-heated greenhouses; world leader in geothermal agricultural water use",
              yearBCE: -1924,
              category: "irrigation"
            },
            {
              id: "jokulhlaup-management",
              name: "Icelandic Jökulhlaup Management",
              description: "Glacial outburst floods from volcanic eruptions beneath glaciers with traditional and modern monitoring systems",
              rarity: "epic",
              historicalPeriod: "Traditional - Modern",
              significance: "1996 Grímsvötn jökulhlaup released 45,000 m³/second — rivaling the Amazon; most extreme floods in Europe",
              yearBCE: -1996,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "norse-greenland",
      name: "Norse Greenland",
      description: "450 years of survival at the western edge of medieval European civilization, where water and climate determined everything.",
      position: [-12, 0, -16],
      color: "#2E8B57",
      era: "medieval",
      dateRange: "985-1450 CE",
      locations: [
        {
          id: "eastern-settlement",
          name: "Eastern Settlement (Eystribyggð)",
          description: "Main Norse colony in Greenland",
          historicalContext: "Water availability determined Norse Greenland's 450-year existence",
          coordinates: { lat: 61.0, lng: -45.0 },
          artifacts: [
            {
              id: "erik-red-water-selection",
              name: "Erik the Red's Settlement Water Selection",
              description: "Settlement sites chosen based on sheltered fjords with freshwater streams, grass-covered slopes irrigated by meltwater",
              rarity: "epic",
              historicalPeriod: "985 CE onwards",
              significance: "Water availability determined Norse Greenland's 450-year existence",
              yearBCE: -985,
              category: "irrigation"
            },
            {
              id: "norse-greenland-irrigation",
              name: "Norse Greenland Irrigation",
              description: "Irrigated hayfields using meltwater from glaciers and snowfields via channels to accelerate grass growth in brief Arctic summer",
              rarity: "rare",
              historicalPeriod: "985-1450 CE",
              significance: "Westernmost medieval European irrigation — at the edge of survival",
              yearBCE: -985,
              category: "irrigation"
            },
            {
              id: "norse-greenland-hot-springs",
              name: "Norse Greenland Hot Spring Use",
              description: "Settlements near hot springs used for bathing, cooking, and possibly cheese-making similar to Icelandic pattern",
              rarity: "rare",
              historicalPeriod: "985-1450 CE",
              significance: "Geothermal water use at the western edge of medieval European civilization",
              yearBCE: -985,
              category: "fountain"
            }
          ]
        },
        {
          id: "western-settlement",
          name: "Western Settlement (Vestribyggð)",
          description: "Remote Norse colony in Greenland",
          historicalContext: "500+ km from Eastern Settlement requiring detailed fjord navigation",
          coordinates: { lat: 64.2, lng: -51.7 },
          artifacts: [
            {
              id: "norse-greenland-fjord-navigation",
              name: "Norse Greenland Fjord Navigation",
              description: "Navigation of complex fjord systems understanding currents, ice patterns, tidal influences, and seasonal changes",
              rarity: "rare",
              historicalPeriod: "985-1450 CE",
              significance: "Arctic maritime water navigation; sailing route between settlements was 500+ km",
              yearBCE: -985,
              category: "canal"
            },
            {
              id: "norse-greenland-collapse",
              name: "Norse Greenland Collapse — Water/Climate",
              description: "Colonies collapsed due to cooling temperatures, expanded sea ice blocking navigation, and changing precipitation",
              rarity: "epic",
              historicalPeriod: "~1350-1450 CE",
              significance: "History's most dramatic example of water-climate civilization collapse (Little Ice Age)",
              yearBCE: -1350,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "modern-norway",
      name: "Modern Norway",
      description: "From medieval stave churches to 98% hydroelectric power — Norway's fjord geography creates unique water engineering challenges and opportunities.",
      position: [-1, 0, -16],
      color: "#BA2025",
      era: "modern",
      dateRange: "1150 CE - Present",
      locations: [
        {
          id: "norwegian-hydropower",
          name: "Norwegian Hydropower Network",
          description: "98% of electricity from hydropower — highest in Europe",
          historicalContext: "Fjord geography provides massive natural elevation drops",
          coordinates: { lat: 59.3, lng: 6.2 },
          artifacts: [
            {
              id: "norwegian-fjord-hydropower",
              name: "Norwegian Fjord Hydropower",
              description: "Norway generates 98% of electricity from hydropower with over 1,600 plants and 33,000 MW installed capacity",
              rarity: "legendary",
              historicalPeriod: "1882 onwards",
              significance: "Highest renewable hydro percentage of any European nation; Tonstad largest at 960 MW",
              yearBCE: -1882,
              category: "dam"
            },
            {
              id: "norwegian-salmon-farming",
              name: "Norwegian Salmon Farming",
              description: "Pioneered modern salmon aquaculture in fjords managing water quality, temperature, and currents",
              rarity: "epic",
              historicalPeriod: "1970 onwards",
              significance: "World's largest salmon producer with 1.4 million tonnes annual production",
              yearBCE: -1970,
              category: "irrigation"
            }
          ]
        },
        {
          id: "stave-church-sites",
          name: "Norwegian Stave Church Sites",
          description: "Medieval wooden churches with sophisticated water drainage",
          historicalContext: "28 surviving stave churches — oldest wooden buildings in Northern Europe",
          coordinates: { lat: 60.8, lng: 7.8 },
          artifacts: [
            {
              id: "stave-church-water",
              name: "Norwegian Stave Church Water Engineering",
              description: "Stone foundations with drainage channels, raised sills, and angled siding to shed water preserving wooden structures",
              rarity: "epic",
              historicalPeriod: "1150-1350 CE",
              significance: "Water management preserving 900-year-old wooden buildings",
              yearBCE: -1150,
              category: "sanitation"
            },
            {
              id: "norwegian-stockfish",
              name: "Norwegian Stockfish Water Processing",
              description: "Wind-dried cod requiring specific coastal drying conditions, fish soaked in freshwater before consumption",
              rarity: "rare",
              historicalPeriod: "Medieval onwards",
              significance: "Bergen's Bryggen UNESCO was the stockfish trading hub; water-dependent food processing",
              yearBCE: -1200,
              category: "water-lifting"
            }
          ]
        },
        {
          id: "norway-subsea",
          name: "Norwegian Subsea Technology",
          description: "World leader in subsea engineering from oil/gas industry",
          historicalContext: "Technology transferred to water applications",
          coordinates: { lat: 60.4, lng: 3.5 },
          artifacts: [
            {
              id: "norwegian-subsea-tech",
              name: "Norwegian Subsea Water Technology",
              description: "World leader in subsea engineering with technology transferred to desalination, deepwater pipelines, and offshore energy",
              rarity: "epic",
              historicalPeriod: "Modern",
              significance: "Troll A platform stands in 303m of water; subsea expertise from oil industry",
              yearBCE: -1990,
              category: "aqueduct"
            }
          ]
        }
      ]
    },
    {
      id: "sweden",
      name: "Sweden",
      description: "From medieval copper mine drainage that funded an empire to the Göta Canal connecting seas — Sweden's water engineering shaped Northern European power.",
      position: [0, 0, -15],
      color: "#006AA7",
      era: "modern",
      dateRange: "1080 CE - Present",
      locations: [
        {
          id: "falun-mine",
          name: "Falun Copper Mine",
          description: "UNESCO World Heritage mine requiring elaborate water management",
          historicalContext: "Mine water engineering that funded a European empire",
          coordinates: { lat: 60.6, lng: 15.6 },
          artifacts: [
            {
              id: "falun-mine-drainage",
              name: "Falun Copper Mine Drainage",
              description: "Horse-powered pumps, wooden pipe drainage, and adits for Sweden's most important mine producing 2/3 of Europe's copper",
              rarity: "legendary",
              historicalPeriod: "1080-1992 CE",
              significance: "UNESCO World Heritage; mine water management enabled Swedish great-power status",
              yearBCE: -1080,
              category: "water-lifting"
            }
          ]
        },
        {
          id: "gota-canal",
          name: "Göta Canal",
          description: "190 km canal connecting North Sea to Baltic",
          historicalContext: "Sweden's most ambitious water engineering project",
          coordinates: { lat: 58.5, lng: 15.5 },
          artifacts: [
            {
              id: "gota-canal",
              name: "Göta Canal",
              description: "190 km canal connecting North Sea to Baltic through Sweden with 58 locks overcoming 91.5m elevation",
              rarity: "legendary",
              historicalPeriod: "1810-1832",
              significance: "22 years and 58,000 soldiers to build; uses Lakes Vänern and Vättern as part of route",
              yearBCE: -1810,
              category: "canal"
            }
          ]
        },
        {
          id: "stockholm-water",
          name: "Stockholm Water System",
          description: "Water management for an archipelago city on 14 islands",
          historicalContext: "Urban water engineering for a city built on islands",
          coordinates: { lat: 59.33, lng: 18.07 },
          artifacts: [
            {
              id: "stockholm-water-system",
              name: "Stockholm Water System",
              description: "Lake Mälaren managed as water supply for a city built on 14 islands requiring bridges, tunnels, and water management",
              rarity: "epic",
              historicalPeriod: "1858 onwards",
              significance: "Modern treatment plants serve 1 million+ people on an archipelago",
              yearBCE: -1858,
              category: "aqueduct"
            },
            {
              id: "swedish-sami-water",
              name: "Swedish Sami Water Knowledge",
              description: "Sami reindeer herders possess deep knowledge of river crossing points, lake ice conditions, and spring melt timing",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Indigenous Arctic water knowledge; migration routes follow water across 500+ km",
              yearBCE: 1000,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "denmark",
      name: "Denmark",
      description: "From Viking-age water defenses to the world's most comprehensive cloudburst management plan — Denmark pioneers urban water innovation.",
      position: [-1, 0, -13],
      color: "#C60C30",
      era: "modern",
      dateRange: "1873 CE - Present",
      locations: [
        {
          id: "lammefjorden",
          name: "Lammefjorden Reclamation",
          description: "Fjord-to-farmland conversion using Dutch-inspired techniques",
          historicalContext: "Dutch poldering technique applied in Scandinavia",
          coordinates: { lat: 55.8, lng: 11.5 },
          artifacts: [
            {
              id: "danish-reclamation",
              name: "Danish Reclamation (Lammefjorden)",
              description: "Draining of the Lammefjord converting a fjord to farmland using Dutch-inspired steam pumping",
              rarity: "epic",
              historicalPeriod: "1873",
              significance: "Created some of Denmark's most productive agricultural land",
              yearBCE: -1873,
              category: "irrigation"
            }
          ]
        },
        {
          id: "copenhagen-water",
          name: "Copenhagen Water Innovation",
          description: "Pioneer in urban water planning and climate adaptation",
          historicalContext: "Global model for urban water climate adaptation",
          coordinates: { lat: 55.68, lng: 12.57 },
          artifacts: [
            {
              id: "copenhagen-finger-plan",
              name: "Copenhagen Finger Plan Water",
              description: "Urban plan preserving green fingers of waterways between development providing water management, recreation, and ecology",
              rarity: "epic",
              historicalPeriod: "1947 onwards",
              significance: "Pioneering integration of water into urban planning",
              yearBCE: -1947,
              category: "canal"
            },
            {
              id: "copenhagen-cloudburst",
              name: "Copenhagen Cloudburst Management",
              description: "300-project climate adaptation plan where parks double as retention basins and climate streets have underground storage",
              rarity: "legendary",
              historicalPeriod: "2012 onwards",
              significance: "World's most comprehensive urban cloudburst management plan after 2011 €1 billion damage event",
              yearBCE: -2012,
              category: "sanitation"
            }
          ]
        },
        {
          id: "oresund",
          name: "Øresund Bridge-Tunnel",
          description: "16 km combined bridge-tunnel crossing",
          historicalContext: "Major underwater infrastructure water management",
          coordinates: { lat: 55.57, lng: 12.85 },
          artifacts: [
            {
              id: "oresund-bridge-tunnel",
              name: "Øresund Bridge Tunnel Water Engineering",
              description: "16 km combined bridge-tunnel crossing with managed water ingress and artificial island from dredged material",
              rarity: "epic",
              historicalPeriod: "2000",
              significance: "Major underwater infrastructure water management between Denmark and Sweden",
              yearBCE: -2000,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "finland",
      name: "Finland",
      description: "The land of 188,000 lakes, the sauna, and one of the world's longest water tunnels — Finland's identity is inseparable from water.",
      position: [2, 0, -16],
      color: "#003580",
      era: "modern",
      dateRange: "7000 BCE - Present",
      locations: [
        {
          id: "finnish-sauna",
          name: "Finnish Sauna Culture",
          description: "UNESCO intangible heritage — water-steam engineering as cultural identity",
          historicalContext: "Over 3 million saunas for 5.5 million people",
          coordinates: { lat: 61.5, lng: 24.0 },
          artifacts: [
            {
              id: "finnish-sauna-water",
              name: "Finnish Sauna Water Culture",
              description: "Water thrown on hot stones creates löyly steam; requires managed water supply, drainage, and temperature control",
              rarity: "legendary",
              historicalPeriod: "7000 BCE onwards",
              significance: "UNESCO Intangible Heritage 2020; 3 million saunas for 5.5 million people; fundamentally a water engineering device",
              yearBCE: 7000,
              category: "fountain"
            }
          ]
        },
        {
          id: "saimaa-canal-site",
          name: "Saimaa Canal",
          description: "Connecting Finland's interior to the sea",
          historicalContext: "Finland's most important waterway",
          coordinates: { lat: 61.05, lng: 28.2 },
          artifacts: [
            {
              id: "saimaa-canal",
              name: "Saimaa Canal",
              description: "43 km canal connecting Lake Saimaa to Gulf of Finland with 8 locks overcoming 76m elevation enabling timber export",
              rarity: "epic",
              historicalPeriod: "1856 (rebuilt 1963)",
              significance: "Transformed Finnish economy by enabling interior timber export",
              yearBCE: -1856,
              category: "canal"
            },
            {
              id: "finnish-tar-burning",
              name: "Finnish Tar Burning Water",
              description: "Pine tar production requiring log floating on rivers, water-cooled condensation, and transport by water",
              rarity: "rare",
              historicalPeriod: "16th-19th century CE",
              significance: "Finland's primary export for centuries literally floated on water",
              yearBCE: -1500,
              category: "canal"
            }
          ]
        },
        {
          id: "helsinki-water-tunnel",
          name: "Helsinki Water Supply",
          description: "One of the world's longest water tunnels",
          historicalContext: "120 km rock tunnel serving 1 million people",
          coordinates: { lat: 60.17, lng: 24.94 },
          artifacts: [
            {
              id: "helsinki-paijanne-tunnel",
              name: "Helsinki Päijänne Water Tunnel",
              description: "120 km rock tunnel from Lake Päijänne to Helsinki — one of longest continuous rock tunnels in the world",
              rarity: "legendary",
              historicalPeriod: "1982",
              significance: "One of the longest water tunnels in the world; serves 1 million people",
              yearBCE: -1982,
              category: "aqueduct"
            },
            {
              id: "finnish-lake-management",
              name: "Finnish Lake Management",
              description: "Management of 188,000 lakes with traditional fish weirs, log floating channels, and modern environmental monitoring",
              rarity: "rare",
              historicalPeriod: "Traditional - Modern",
              significance: "Management of the most lake-dense country on Earth",
              yearBCE: 1000,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "faroe-islands",
      name: "Faroe Islands",
      description: "Norse settlers on remote North Atlantic islands managing extreme water conditions for over 1,200 years.",
      position: [-5, 0, -15],
      color: "#0065BD",
      era: "medieval",
      dateRange: "825 CE - Present",
      locations: [
        {
          id: "faroese-farming",
          name: "Faroese Stream-Fed Farms",
          description: "Mountain stream management for agriculture on thin soil",
          historicalContext: "Sub-Arctic stream management for survival",
          coordinates: { lat: 62.0, lng: -7.0 },
          artifacts: [
            {
              id: "faroese-stream-farming",
              name: "Faroese Stream-Fed Farming",
              description: "Norse settlers channeled mountain streams to irrigate infields for hay and grain on thin soil over basalt",
              rarity: "rare",
              historicalPeriod: "825 CE onwards",
              significance: "Extremely wet climate (1500mm/yr) required drainage more than irrigation; sub-Arctic agriculture",
              yearBCE: -825,
              category: "irrigation"
            },
            {
              id: "faroese-grindadrap-water",
              name: "Faroese Grindadráp Water Knowledge",
              description: "Traditional pilot whale drives requiring intimate knowledge of fjord currents, depth, tidal state, and whale behavior",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Maritime water knowledge for traditional hunting coordinated across communities",
              yearBCE: -900,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "mycenaean-greece",
      name: "Mycenaean Greece",
      description: "The civilization of Agamemnon and the Trojan War — sophisticated water engineers who built the largest hydraulic projects of the Bronze Age.",
      position: [3, 0, -8],
      color: "#DAA520",
      era: "ancient",
      dateRange: "1600-1100 BCE",
      locations: [
        {
          id: "mycenae-citadel",
          name: "Mycenae Citadel",
          description: "Lion Gate citadel and underground cistern",
          historicalContext: "Siege-proof water for Agamemnon's fortress",
          coordinates: { lat: 37.73, lng: 22.76 },
          artifacts: [
            {
              id: "mycenae-cistern-tunnel",
              name: "Mycenae Cistern & Tunnel",
              description: "Underground cistern via secret rock-cut tunnel descending 18m with 99 steps to spring-fed cistern beneath citadel walls",
              rarity: "legendary",
              historicalPeriod: "1250 BCE",
              significance: "Siege-proof water supply for the Trojan War era citadel",
              yearBCE: 1250,
              category: "aqueduct"
            },
            {
              id: "kazarma-bridge-dam",
              name: "Mycenae Bridge/Dam (Kazarma)",
              description: "Cyclopean stone bridge-dam 22m long, 5m wide functioning as road bridge and check dam still standing after 3200 years",
              rarity: "legendary",
              historicalPeriod: "1300-1200 BCE",
              significance: "Oldest surviving bridge in Europe — still standing",
              yearBCE: 1300,
              category: "dam"
            },
            {
              id: "mycenaean-fountain-houses",
              name: "Mycenaean Fountain Houses",
              description: "Public water access points with stone-built enclosures channeling spring water at settlements",
              rarity: "rare",
              historicalPeriod: "1300-1200 BCE",
              significance: "Earliest Greek public water access — precursor to Classical fountain houses",
              yearBCE: 1300,
              category: "fountain"
            }
          ]
        },
        {
          id: "tiryns-fortress",
          name: "Tiryns Fortress",
          description: "Cyclopean walls and massive flood control works",
          historicalContext: "Largest Bronze Age flood control in Greece",
          coordinates: { lat: 37.60, lng: 22.80 },
          artifacts: [
            {
              id: "tiryns-dam-diversion",
              name: "Tiryns Dam & River Diversion",
              description: "Massive cyclopean dam 200+m long 10m high redirecting seasonal river away from citadel via 1.5km diversion channel",
              rarity: "legendary",
              historicalPeriod: "1250 BCE",
              significance: "Largest Bronze Age flood control project in Greece",
              yearBCE: 1250,
              category: "dam"
            }
          ]
        },
        {
          id: "lake-copais",
          name: "Lake Copais Basin",
          description: "Largest Bronze Age drainage project",
          historicalContext: "Most ambitious Bronze Age hydraulic project in the world",
          coordinates: { lat: 38.47, lng: 23.05 },
          artifacts: [
            {
              id: "lake-copais-drainage",
              name: "Lake Copais Drainage",
              description: "Network of canals dikes and sinkholes to drain seasonal lake covering 250 km² creating thousands of hectares of farmland",
              rarity: "legendary",
              historicalPeriod: "1300-1250 BCE",
              significance: "Most ambitious Bronze Age hydraulic project in the world",
              yearBCE: 1300,
              category: "canal"
            },
            {
              id: "gla-fortress-drainage",
              name: "Gla Fortress Drainage (Copais)",
              description: "Mycenaean fortress on island in Lake Copais with 3km perimeter walls incorporating drainage",
              rarity: "epic",
              historicalPeriod: "1300-1250 BCE",
              significance: "Fortress water engineering integrated with lake drainage project",
              yearBCE: 1300,
              category: "sanitation"
            }
          ]
        },
        {
          id: "pylos-palace",
          name: "Palace of Nestor (Pylos)",
          description: "Homeric palace with water systems",
          historicalContext: "Water engineering referenced in Homer's Odyssey",
          coordinates: { lat: 37.03, lng: 21.70 },
          artifacts: [
            {
              id: "pylos-palace-water",
              name: "Pylos Palace Water System",
              description: "Terracotta pipe supply bathing rooms and drainage. Linear B tablets record water administration. Homer describes Telemachus bathing at Pylos",
              rarity: "epic",
              historicalPeriod: "1300-1200 BCE",
              significance: "Homeric palace water engineering — referenced in the Odyssey",
              yearBCE: 1300,
              category: "aqueduct"
            },
            {
              id: "linear-b-water-admin",
              name: "Linear B Water Administration",
              description: "Linear B tablets recording water resource allocation irrigation management and water offerings to gods",
              rarity: "epic",
              historicalPeriod: "1400-1200 BCE",
              significance: "Oldest written water governance records in Europe",
              yearBCE: 1400,
              category: "irrigation"
            },
            {
              id: "mycenaean-tholos-drainage",
              name: "Mycenaean Tholos Tomb Drainage",
              description: "Beehive tombs requiring sophisticated drainage. Treasury of Atreus 13.5m diameter with drainage channels protecting 120-tonne lintel stones",
              rarity: "epic",
              historicalPeriod: "1500-1200 BCE",
              significance: "Water engineering for monumental Bronze Age tombs",
              yearBCE: 1500,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "ancient-cyprus",
      name: "Ancient Cyprus",
      description: "12,000 years of water engineering at the crossroads of every major Mediterranean hydraulic tradition — from Neolithic villages to modern desalination.",
      position: [5, 0, -7],
      color: "#D2691E",
      era: "ancient",
      dateRange: "10,000 BCE - Present",
      locations: [
        {
          id: "khirokitia",
          name: "Khirokitia",
          description: "UNESCO World Heritage Neolithic settlement",
          historicalContext: "One of the Mediterranean's oldest villages",
          coordinates: { lat: 34.80, lng: 33.35 },
          artifacts: [
            {
              id: "khirokitia-water",
              name: "Khirokitia Neolithic Water",
              description: "UNESCO World Heritage. Oldest permanent settlement on Cyprus above Maroni River with stone houses and managed drainage",
              rarity: "epic",
              historicalPeriod: "7000-5800 BCE",
              significance: "Water engineering at one of the Mediterranean's oldest villages",
              yearBCE: 7000,
              category: "sanitation"
            }
          ]
        },
        {
          id: "cypriot-copper-mines",
          name: "Cypriot Copper Mining Sites",
          description: "4,000 years of mine water management",
          historicalContext: "Cyprus means copper island",
          coordinates: { lat: 35.10, lng: 32.90 },
          artifacts: [
            {
              id: "cypriot-copper-mine-water",
              name: "Cypriot Copper Mine Water Systems",
              description: "Shaft drainage ore washing smelting cooling and slag processing at mines like Skouriotissa operating for 4000 years",
              rarity: "epic",
              historicalPeriod: "3000-30 BCE",
              significance: "Longest continuous mine water management in the Mediterranean",
              yearBCE: 3000,
              category: "water-lifting"
            }
          ]
        },
        {
          id: "salamis-city",
          name: "Salamis",
          description: "Ancient Cypriot capital with major water supply",
          historicalContext: "Largest ancient water system on Cyprus",
          coordinates: { lat: 35.18, lng: 33.90 },
          artifacts: [
            {
              id: "salamis-aqueduct",
              name: "Salamis Aqueduct & Water System",
              description: "Stone-lined channels from mountain springs with urban terracotta pipe distribution public baths and fountain houses",
              rarity: "epic",
              historicalPeriod: "700-300 BCE",
              significance: "Largest ancient Cypriot water supply system",
              yearBCE: 700,
              category: "aqueduct"
            },
            {
              id: "kition-harbor",
              name: "Kition (Larnaca) Harbor Engineering",
              description: "Phoenician-era harbor with ship channels dredging freshwater supply and tidal management",
              rarity: "rare",
              historicalPeriod: "1300-300 BCE",
              significance: "Phoenician harbor water engineering on Cyprus",
              yearBCE: 1300,
              category: "canal"
            }
          ]
        },
        {
          id: "kourion",
          name: "Kourion",
          description: "Best-preserved Roman water system on Cyprus",
          historicalContext: "Complete system revealed by 365 CE earthquake",
          coordinates: { lat: 34.66, lng: 32.88 },
          artifacts: [
            {
              id: "kourion-water",
              name: "Roman Kourion Water System",
              description: "Aqueduct nymphaeum bathhouse and urban distribution destroyed and preserved by 365 CE earthquake",
              rarity: "epic",
              historicalPeriod: "1st century CE",
              significance: "Best-preserved Roman water system on Cyprus",
              yearBCE: -50,
              category: "aqueduct"
            },
            {
              id: "vouni-palace-water",
              name: "Vouni Palace Water",
              description: "Hilltop palace with cisterns channels from distant springs and internal distribution showing Persian-Greek hybrid design",
              rarity: "rare",
              historicalPeriod: "500-300 BCE",
              significance: "Hybrid Persian-Greek water engineering",
              yearBCE: 500,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "modern-cyprus-water",
          name: "Modern Cyprus Water",
          description: "Leading EU desalination and water reuse",
          historicalContext: "One of the most water-scarce EU countries",
          coordinates: { lat: 34.92, lng: 33.63 },
          artifacts: [
            {
              id: "kamares-aqueduct",
              name: "Cypriot Aqueduct of Kamares",
              description: "Ottoman-era 75-arch aqueduct near Larnaca supplying mountain spring water",
              rarity: "rare",
              historicalPeriod: "1747 CE",
              significance: "Finest Ottoman-era aqueduct on Cyprus",
              yearBCE: -1747,
              category: "aqueduct"
            },
            {
              id: "cyprus-desalination",
              name: "Modern Cypriot Desalination",
              description: "Dhekelia and Limassol plants supplying 50%+ of domestic water combined with wastewater reuse for agriculture",
              rarity: "epic",
              historicalPeriod: "1997 onwards",
              significance: "EU leader in desalination technology adoption",
              yearBCE: -1997,
              category: "aqueduct"
            }
          ]
        }
      ]
    },
    {
      id: "sicily",
      name: "Sicily",
      description: "The most layered water engineering history of any Mediterranean island — Greek, Roman, Arab, Norman, and modern traditions superimposed.",
      position: [2, 0, -6],
      color: "#CD853F",
      era: "classical",
      dateRange: "8000 BCE - Present",
      locations: [
        {
          id: "syracuse",
          name: "Syracuse",
          description: "Greatest Greek city in Sicily",
          historicalContext: "Greek colonial water engineering at its finest",
          coordinates: { lat: 37.07, lng: 15.29 },
          artifacts: [
            {
              id: "sicilian-greek-aqueducts",
              name: "Sicilian Greek Aqueducts",
              description: "Syracuse water supply from Nymphaeum spring via 35+ km aqueduct. Akragas had elaborate water channels",
              rarity: "legendary",
              historicalPeriod: "5th century BCE",
              significance: "Greek colonial water engineering at its finest",
              yearBCE: 450,
              category: "aqueduct"
            },
            {
              id: "syracuse-ear-dionysius",
              name: "Syracuse Ear of Dionysius",
              description: "Limestone quarry with acoustic and water properties underground springs managed for operations",
              rarity: "rare",
              historicalPeriod: "5th century BCE",
              significance: "Water management in one of the ancient world's great cities",
              yearBCE: 450,
              category: "water-lifting"
            },
            {
              id: "sicilian-greek-fountains",
              name: "Sicilian Greek Fountain Houses",
              description: "Public fountain houses in every Greek Sicilian city with lion-head spouts basins and drainage",
              rarity: "epic",
              historicalPeriod: "6th-3rd century BCE",
              significance: "Densest concentration of Greek fountain houses outside Greece",
              yearBCE: 500,
              category: "fountain"
            }
          ]
        },
        {
          id: "palermo-arab",
          name: "Arab Palermo",
          description: "Islamic water technology in Europe",
          historicalContext: "Arab Palermo was called a garden of water",
          coordinates: { lat: 38.12, lng: 13.36 },
          artifacts: [
            {
              id: "sicilian-arab-qanat",
              name: "Arab-Norman Qanat (Catusi)",
              description: "Underground qanat water channels irrigated the Conca d'Oro around Palermo combined with noria wheels and citrus irrigation",
              rarity: "legendary",
              historicalPeriod: "827-1091 CE",
              significance: "Islamic water technology transfer to European soil",
              yearBCE: -827,
              category: "irrigation"
            },
            {
              id: "palermo-water-gardens",
              name: "Palermo Arab Water Gardens",
              description: "Zisa and Cuba palaces with elaborate fountains channels pools and muqarnas ceiling water cooling",
              rarity: "epic",
              historicalPeriod: "827-1091 CE",
              significance: "Arab water-garden culture transplanted to Europe",
              yearBCE: -827,
              category: "fountain"
            },
            {
              id: "norman-sicilian-water",
              name: "Norman Sicilian Hybrid Water",
              description: "Norman kings maintained and expanded Arab water systems blending Arab features with Norman architecture",
              rarity: "epic",
              historicalPeriod: "1061-1198 CE",
              significance: "Unique hybrid Arab-Norman water engineering",
              yearBCE: -1061,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "sicily-roman-sites",
          name: "Roman Sicily Sites",
          description: "Roman expansion of Greek water infrastructure",
          historicalContext: "Including Villa Romana del Casale UNESCO site",
          coordinates: { lat: 37.37, lng: 14.33 },
          artifacts: [
            {
              id: "roman-sicily-water",
              name: "Roman Sicily Water",
              description: "Roman expansion of Greek water systems with new aqueducts at Catania and Termini Imerese. Villa Romana del Casale UNESCO with elaborate baths",
              rarity: "epic",
              historicalPeriod: "2nd century BCE - 5th century CE",
              significance: "Roman expansion of Greek water infrastructure",
              yearBCE: 150,
              category: "aqueduct"
            },
            {
              id: "sicilian-senia",
              name: "Sicilian Senia (Water Wheel)",
              description: "Large wooden water wheels lifting water from wells and rivers for citrus irrigation surviving into 20th century",
              rarity: "rare",
              historicalPeriod: "Arab period onwards",
              significance: "Water wheel technology that created Sicily's citrus economy",
              yearBCE: -900,
              category: "water-lifting"
            }
          ]
        },
        {
          id: "catania-volcanic",
          name: "Catania (Mount Etna)",
          description: "Urban water on active volcano",
          historicalContext: "Built repeatedly on lava flows",
          coordinates: { lat: 37.50, lng: 15.09 },
          artifacts: [
            {
              id: "catania-volcanic-water",
              name: "Catania Volcanic Water Management",
              description: "Managing hot springs lava-tube drainage and construction on permeable volcanic rock. Amenano River flows partly underground through lava tubes",
              rarity: "epic",
              historicalPeriod: "Ancient-Modern",
              significance: "Urban water management on an active volcano",
              yearBCE: 500,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "olmec",
      name: "Olmec Civilization",
      description: "The 'mother culture' of Mesoamerica — first aqueducts, first engineered drains, first sacred water architecture in the Americas.",
      position: [-15, 0, 2],
      color: "#556B2F",
      era: "ancient",
      dateRange: "1600-400 BCE",
      locations: [
        {
          id: "san-lorenzo",
          name: "San Lorenzo",
          description: "First major Olmec capital",
          historicalContext: "Oldest engineered water drainage in the Americas",
          coordinates: { lat: 17.75, lng: -94.77 },
          artifacts: [
            {
              id: "san-lorenzo-drain",
              name: "San Lorenzo Basalt Drain System",
              description: "U-shaped basalt troughs carved from massive stone blocks transported 60+ km creating elaborate water drainage atop the plateau connected to reservoirs and ritual pools",
              rarity: "legendary",
              historicalPeriod: "1200-900 BCE",
              significance: "Oldest engineered water drainage in the Americas",
              yearBCE: 1200,
              category: "sanitation"
            },
            {
              id: "san-lorenzo-aqueduct",
              name: "San Lorenzo Aqueduct",
              description: "Stone-lined aqueduct bringing water from distant springs with precision-cut identical stone blocks lined up to create water channels",
              rarity: "legendary",
              historicalPeriod: "1200-900 BCE",
              significance: "First aqueduct in the Americas",
              yearBCE: 1200,
              category: "aqueduct"
            },
            {
              id: "san-lorenzo-ritual-pool",
              name: "San Lorenzo Ritual Water Pool",
              description: "Masonry sunken court with drain for filling and emptying as ritual pool surrounded by four maize god representations",
              rarity: "epic",
              historicalPeriod: "1200-900 BCE",
              significance: "Earliest known ritual water architecture in the Americas",
              yearBCE: 1200,
              category: "fountain"
            }
          ]
        },
        {
          id: "el-manati",
          name: "El Manatí Sacred Spring",
          description: "Oldest documented sacred water site in Mesoamerica",
          historicalContext: "Origin of sacred mountain-spring concept in Mesoamerica",
          coordinates: { lat: 17.70, lng: -94.80 },
          artifacts: [
            {
              id: "el-manati-spring",
              name: "El Manatí Sacred Spring Complex",
              description: "Sacred spring where Olmec deposited rubber balls jadeite axes wooden busts and offerings representing sacred mountain of abundance",
              rarity: "legendary",
              historicalPeriod: "1600-1200 BCE",
              significance: "Oldest documented sacred water site in Mesoamerica — origin of sacred mountain concept",
              yearBCE: 1600,
              category: "fountain"
            },
            {
              id: "olmec-rubber-water",
              name: "Olmec Vulcanized Rubber for Water Use",
              description: "First vulcanized rubber by mixing latex with morning glory vine juice creating waterproof balls and possibly waterproofing containers",
              rarity: "epic",
              historicalPeriod: "1600-1200 BCE",
              significance: "First vulcanized rubber in the world with water engineering applications",
              yearBCE: 1600,
              category: "dam"
            }
          ]
        },
        {
          id: "la-venta",
          name: "La Venta",
          description: "Second Olmec capital with first Mesoamerican pyramid",
          historicalContext: "Pyramid built on swampy island requiring water management",
          coordinates: { lat: 18.10, lng: -94.04 },
          artifacts: [
            {
              id: "la-venta-pyramid-water",
              name: "La Venta Pyramid & Water Management",
              description: "First pyramid in Mesoamerica built on swampy island with channels directing water through the ceremonial complex",
              rarity: "epic",
              historicalPeriod: "900-400 BCE",
              significance: "Water management for the first Mesoamerican pyramid",
              yearBCE: 900,
              category: "canal"
            },
            {
              id: "la-venta-drainage",
              name: "La Venta Massive Stone Offering Drainage",
              description: "Thousands of serpentine blocks buried in elaborate drainage patterns representing water cosmology",
              rarity: "rare",
              historicalPeriod: "900-400 BCE",
              significance: "Integration of water cosmology with engineering",
              yearBCE: 900,
              category: "sanitation"
            }
          ]
        },
        {
          id: "teopantecuanitlan",
          name: "Teopantecuanitlán",
          description: "Olmec-influenced highland site",
          historicalContext: "Technology transfer to highland Mexico",
          coordinates: { lat: 17.95, lng: -99.55 },
          artifacts: [
            {
              id: "teopantecuanitlan-water",
              name: "Teopantecuanitlán Water System",
              description: "Olmec-influenced masonry sunken court as ritual pool combined with agricultural terracing and canal irrigation",
              rarity: "epic",
              historicalPeriod: "1400-800 BCE",
              significance: "Olmec water engineering technology transferred to highland Mexico",
              yearBCE: 1400,
              category: "irrigation"
            },
            {
              id: "olmec-water-cosmology",
              name: "Olmec Water Cosmology System",
              description: "Fundamental Mesoamerican water cosmology: rain gods sacred mountains caves as water-world entrances and water-maize-fertility connection governing water management for 3000 years",
              rarity: "legendary",
              historicalPeriod: "1500-400 BCE",
              significance: "Foundation of all subsequent Mesoamerican water theology and engineering",
              yearBCE: 1500,
              category: "fountain"
            }
          ]
        }
      ]
    },
    {
      id: "maya-preclassic",
      name: "Maya Preclassic",
      description: "The earliest Maya water engineering — massive canal systems, causeways as dams, and the foundations of Classic Maya hydraulic civilization.",
      position: [-13, 0, 3],
      color: "#228B22",
      era: "ancient",
      dateRange: "2000 BCE - 250 CE",
      locations: [
        {
          id: "edzna",
          name: "Edzná",
          description: "Oldest major Maya hydraulic engineering",
          historicalContext: "31 canals totaling 22 km",
          coordinates: { lat: 19.60, lng: -90.23 },
          artifacts: [
            {
              id: "edzna-canal-system",
              name: "Edzná Canal System",
              description: "31 canals totaling 22 km draining swampland channeling water to reservoirs and creating agricultural chinampas in radial pattern",
              rarity: "legendary",
              historicalPeriod: "400 BCE-150 CE",
              significance: "Oldest major Maya water engineering",
              yearBCE: 400,
              category: "canal"
            }
          ]
        },
        {
          id: "el-mirador",
          name: "El Mirador",
          description: "Largest Preclassic Maya city",
          historicalContext: "Massive bajo management and the Danta pyramid",
          coordinates: { lat: 17.76, lng: -89.92 },
          artifacts: [
            {
              id: "el-mirador-bajo",
              name: "El Mirador Bajo System",
              description: "Extensive bajo (seasonal swamp) management with canals berms and check dams across hundreds of square kilometers supporting the largest Preclassic city",
              rarity: "epic",
              historicalPeriod: "600 BCE-150 CE",
              significance: "Water management for the largest Preclassic Maya city",
              yearBCE: 600,
              category: "irrigation"
            },
            {
              id: "nakbe-causeways",
              name: "Nakbé Causeways (Sacbeob)",
              description: "Earliest known Maya causeways functioning as dams channeling water to reservoirs while keeping ceremonial spaces dry",
              rarity: "epic",
              historicalPeriod: "600 BCE",
              significance: "Dual-purpose infrastructure — roads as water control",
              yearBCE: 600,
              category: "dam"
            }
          ]
        },
        {
          id: "cerros-site",
          name: "Cerros",
          description: "Earliest Maya coastal wetland engineering",
          historicalContext: "Managing freshwater-saltwater interaction",
          coordinates: { lat: 18.38, lng: -88.32 },
          artifacts: [
            {
              id: "cerros-raised-fields",
              name: "Cerros Raised Field Agriculture",
              description: "Raised agricultural platforms in coastal wetlands with channels managing freshwater-saltwater interaction",
              rarity: "rare",
              historicalPeriod: "400 BCE-150 CE",
              significance: "Earliest Maya coastal wetland engineering",
              yearBCE: 400,
              category: "irrigation"
            },
            {
              id: "ceibal-water",
              name: "Ceibal Early Water Management",
              description: "One of earliest Maya ceremonial centers with water management developing simultaneously with Olmec La Venta",
              rarity: "rare",
              historicalPeriod: "1000 BCE",
              significance: "Evidence of independent Maya water engineering parallel to the Olmec",
              yearBCE: 1000,
              category: "dam"
            },
            {
              id: "kaminaljuyu-irrigation",
              name: "Kaminaljuyú Canal Irrigation",
              description: "Highland Maya canal irrigation from Lake Miraflores directing water to agricultural fields and urban areas",
              rarity: "rare",
              historicalPeriod: "400 BCE-200 CE",
              significance: "Earliest Maya canal irrigation",
              yearBCE: 400,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "maya-classic",
      name: "Maya Classic Period",
      description: "The golden age of Maya water engineering — reservoir systems for 60,000+ people, the first water filtration in the Americas, and the only pressurized water in pre-Columbian history.",
      position: [-13, 0, 4],
      color: "#006400",
      era: "classical",
      dateRange: "250-900 CE",
      locations: [
        {
          id: "tikal",
          name: "Tikal",
          description: "Largest Maya urban water system",
          historicalContext: "Six reservoirs holding 900,000 m³ for 60,000+ people",
          coordinates: { lat: 17.22, lng: -89.62 },
          artifacts: [
            {
              id: "tikal-reservoir",
              name: "Tikal Reservoir System",
              description: "Six major reservoirs holding 900,000 m³ with elaborate inlet channels and sand filtration serving 60,000+ people through 6-month dry seasons",
              rarity: "legendary",
              historicalPeriod: "250-900 CE",
              significance: "Largest Maya urban water system",
              yearBCE: -250,
              category: "dam"
            },
            {
              id: "tikal-water-filtration",
              name: "Tikal Water Filtration (Corriental)",
              description: "Quartz sand and zeolite filtration at Corriental reservoir — zeolite imported from 30 km away specifically for water purification",
              rarity: "legendary",
              historicalPeriod: "250-900 CE",
              significance: "First water purification technology in the Americas — zeolite filtration",
              yearBCE: -250,
              category: "sanitation"
            }
          ]
        },
        {
          id: "palenque",
          name: "Palenque",
          description: "Only known pressurized water in pre-Columbian Americas",
          historicalContext: "Nine subterranean aqueducts managing 56 springs",
          coordinates: { lat: 17.48, lng: -92.05 },
          artifacts: [
            {
              id: "palenque-pressurized",
              name: "Palenque Pressurized Aqueduct",
              description: "Underground aqueduct with constriction narrowing from 10 m² to 0.5 m² creating water pressure and possible fountain effects",
              rarity: "legendary",
              historicalPeriod: "600-700 CE",
              significance: "Only known pressurized water system in pre-Columbian Americas",
              yearBCE: -600,
              category: "aqueduct"
            },
            {
              id: "palenque-nine-aqueducts",
              name: "Palenque Nine-Aqueduct System",
              description: "Nine subterranean aqueducts managing 56 springs with Otolum River channeled underground. Over 2 km mapped underground channels",
              rarity: "legendary",
              historicalPeriod: "600-800 CE",
              significance: "Most extensive underground water infrastructure in the Maya world",
              yearBCE: -600,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "calakmul",
          name: "Calakmul",
          description: "Second-largest Maya urban water system",
          historicalContext: "Chain of 13 reservoirs with sand filtration",
          coordinates: { lat: 18.11, lng: -89.81 },
          artifacts: [
            {
              id: "calakmul-aguada",
              name: "Calakmul Aguada System",
              description: "Chain of 13 limestone-lined clay-sealed reservoirs with sand filtration storing 200,000+ m³",
              rarity: "epic",
              historicalPeriod: "250-900 CE",
              significance: "Second-largest Maya urban water system",
              yearBCE: -250,
              category: "dam"
            },
            {
              id: "maya-chultun",
              name: "Maya Chultun (Underground Cistern)",
              description: "Bottle-shaped underground cisterns carved into limestone with plastered interior. Capacity 25,000-75,000 liters each. Thousands across Maya Lowlands",
              rarity: "epic",
              historicalPeriod: "600 BCE-900 CE",
              significance: "Most widespread Maya water storage technology",
              yearBCE: -300,
              category: "dam"
            }
          ]
        },
        {
          id: "caracol",
          name: "Caracol",
          description: "Maya engineering supporting 100,000+ people",
          historicalContext: "Terraced hillsides covering 200+ km²",
          coordinates: { lat: 16.76, lng: -89.12 },
          artifacts: [
            {
              id: "caracol-terracing",
              name: "Caracol Agricultural Terracing",
              description: "Terraced hillsides with check dams and reservoirs covering 200+ km² supporting 100,000+ people — larger than most contemporary European cities",
              rarity: "epic",
              historicalPeriod: "600-900 CE",
              significance: "Maya engineering supported populations larger than medieval London",
              yearBCE: -600,
              category: "irrigation"
            }
          ]
        },
        {
          id: "copan",
          name: "Copán",
          description: "UNESCO World Heritage Maya drainage",
          historicalContext: "Stone-lined drainage beneath the Acropolis",
          coordinates: { lat: 14.84, lng: -89.14 },
          artifacts: [
            {
              id: "copan-drainage",
              name: "Copán Drainage System",
              description: "Elaborate stone-lined drainage beneath the Acropolis with stone-capped drains beneath plazas some large enough for maintenance access",
              rarity: "epic",
              historicalPeriod: "400-800 CE",
              significance: "Drainage engineering beneath a UNESCO World Heritage site",
              yearBCE: -400,
              category: "sanitation"
            },
            {
              id: "dos-pilas-defensive",
              name: "Dos Pilas Defensive Water",
              description: "Maya dismantled own temples to build walls using flooding as defense channeling attackers into kill zones",
              rarity: "epic",
              historicalPeriod: "761 CE",
              significance: "Maya water warfare — defensive flooding",
              yearBCE: -761,
              category: "dam"
            }
          ]
        },
        {
          id: "puuc-region",
          name: "Puuc Region (Uxmal)",
          description: "Civilization built entirely on harvested rainwater",
          historicalContext: "No rivers lakes or springs — only chultun cisterns",
          coordinates: { lat: 20.36, lng: -89.77 },
          artifacts: [
            {
              id: "puuc-chultun-network",
              name: "Puuc Region Chultun Network",
              description: "Puuc hills with no surface water — cities like Uxmal Kabah and Sayil depended entirely on chultun cisterns. Uxmal had over 100 chultuns",
              rarity: "epic",
              historicalPeriod: "600-1000 CE",
              significance: "Complete civilization built on harvested rainwater — no natural water sources",
              yearBCE: -600,
              category: "dam"
            },
            {
              id: "uxmal-water-collection",
              name: "Uxmal Water Collection",
              description: "Nunnery Quadrangle and Governor's Palace positioned to maximize rainwater collection. Pyramid of Magician may have served partly as water collection. Hundreds of Chaak rain god masks on facades",
              rarity: "epic",
              historicalPeriod: "700-1000 CE",
              significance: "Architecture designed as rainwater harvesting infrastructure",
              yearBCE: -700,
              category: "dam"
            },
            {
              id: "maya-sacbe-water",
              name: "Maya Sacbe as Water Management",
              description: "Raised limestone causeways serving as transportation AND water management acting as dams. The 100 km Cobá-Yaxuná sacbe is the longest",
              rarity: "epic",
              historicalPeriod: "250-900 CE",
              significance: "Roads engineered as linear water control features",
              yearBCE: -250,
              category: "canal"
            },
            {
              id: "quirigua-flood",
              name: "Quiriguá Flood Management",
              description: "City on Motagua River floodplain with tallest Maya stelae positioned on raised platforms above flood level with channels directing floodwater",
              rarity: "rare",
              historicalPeriod: "400-810 CE",
              significance: "Flood management for a river-bottom ceremonial center",
              yearBCE: -400,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "maya-postclassic",
      name: "Maya Postclassic",
      description: "From cenote-dependent cities to the last great Maya capital — water management through natural sinkholes and ritual offerings.",
      position: [-12, 0, 5],
      color: "#32CD32",
      era: "medieval",
      dateRange: "900-1524 CE",
      locations: [
        {
          id: "chichen-itza",
          name: "Chichén Itzá",
          description: "Largest Postclassic Maya city",
          historicalContext: "Four cenotes plus constructed chultuns",
          coordinates: { lat: 20.68, lng: -88.57 },
          artifacts: [
            {
              id: "cenote-management",
              name: "Cenote Management (Yucatán)",
              description: "Natural sinkholes as primary water source. Communities managed access maintained paths built stairs into cenote walls and modified shape",
              rarity: "epic",
              historicalPeriod: "900-1524 CE",
              significance: "Groundwater access via natural geological features managed as infrastructure",
              yearBCE: -900,
              category: "aqueduct"
            },
            {
              id: "chichen-itza-water",
              name: "Chichén Itzá Water System",
              description: "Four cenotes plus chultuns. Xtoloc Cenote for drinking Sacred Cenote for ritual. Sacbeob connected cenotes to ceremonial center",
              rarity: "legendary",
              historicalPeriod: "900-1200 CE",
              significance: "Water infrastructure for the largest Postclassic Maya city",
              yearBCE: -900,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "mayapan",
          name: "Mayapán",
          description: "Last great Maya capital",
          historicalContext: "4,000 structures built around a cenote",
          coordinates: { lat: 20.63, lng: -89.46 },
          artifacts: [
            {
              id: "mayapan-water",
              name: "Mayapán Water Management",
              description: "Last major Maya capital built around a cenote with 4000 structures within defensive wall. Water infrastructure deliberately destroyed when city fell in 1441",
              rarity: "epic",
              historicalPeriod: "1200-1441 CE",
              significance: "Water for the last great Maya capital",
              yearBCE: -1200,
              category: "dam"
            },
            {
              id: "maya-water-purification",
              name: "Maya Water Purification with Sand and Lilies",
              description: "Maya water purification using sand water lilies and zeolite-quartz mixtures determining chemically distinct water sources for different uses",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Sophisticated multi-method water purification",
              yearBCE: -500,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "teotihuacan-city",
      name: "Teotihuacan",
      description: "First urban river channelization in the Americas — water for 100,000-200,000 people with the San Juan River literally moved to fit the city plan.",
      position: [-14, 0, 3],
      color: "#8B4513",
      era: "classical",
      dateRange: "100 BCE - 550 CE",
      locations: [
        {
          id: "teotihuacan-center",
          name: "Teotihuacan City Center",
          description: "Largest pre-Columbian city in the Americas",
          historicalContext: "First urban river channelization in the Americas",
          coordinates: { lat: 19.69, lng: -98.84 },
          artifacts: [
            {
              id: "san-juan-canalization",
              name: "San Juan River Canalization",
              description: "San Juan River completely straightened and channeled through city center aligned with urban grid on 15.5° axis — river literally moved to fit city plan",
              rarity: "legendary",
              historicalPeriod: "100 BCE-550 CE",
              significance: "First urban river channelization in the Americas",
              yearBCE: 100,
              category: "canal"
            },
            {
              id: "teotihuacan-underground-drainage",
              name: "Teotihuacan Underground Drainage",
              description: "Extensive stone-lined drainage beneath Avenue of the Dead with tunnels large enough to walk through and ritual underground water chambers",
              rarity: "legendary",
              historicalPeriod: "100 BCE-550 CE",
              significance: "Most extensive pre-Columbian underground drainage",
              yearBCE: 100,
              category: "sanitation"
            },
            {
              id: "teotihuacan-spring-mgmt",
              name: "Teotihuacan Spring Management",
              description: "Natural springs managed and channeled via canals to 2000+ apartment compounds each housing 60-100 people with standardized drainage",
              rarity: "epic",
              historicalPeriod: "100 BCE-550 CE",
              significance: "Spring-based urban water supply for 100,000+ people",
              yearBCE: 100,
              category: "aqueduct"
            },
            {
              id: "pyramid-sun-tunnel",
              name: "Pyramid of the Sun Water Tunnel",
              description: "Natural cave beneath Pyramid of Sun modified for water rituals leading to four-petaled flower chamber symbolizing water origins",
              rarity: "epic",
              historicalPeriod: "100 BCE-550 CE",
              significance: "Underground ritual water engineering beneath largest Mesoamerican pyramid",
              yearBCE: 100,
              category: "fountain"
            },
            {
              id: "teotihuacan-irrigation-canals",
              name: "Teotihuacan Irrigation Canals",
              description: "Canal systems fed by springs and San Juan River irrigating agricultural fields combined with raised fields in marshy areas",
              rarity: "rare",
              historicalPeriod: "100-550 CE",
              significance: "Agricultural water supply for 100,000-200,000 people",
              yearBCE: -100,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "zapotec",
      name: "Zapotec Civilization",
      description: "The Cloud People who built a city of 25,000 on a mountaintop with no natural water source — and irrigation channels that literally built themselves.",
      position: [-14, 0, 1],
      color: "#CD5C5C",
      era: "classical",
      dateRange: "500 BCE - 750 CE",
      locations: [
        {
          id: "monte-alban",
          name: "Monte Albán",
          description: "Mountaintop city with zero natural water",
          historicalContext: "25,000+ people with only harvested rainwater",
          coordinates: { lat: 17.04, lng: -96.77 },
          artifacts: [
            {
              id: "monte-alban-water",
              name: "Monte Albán Hilltop Water",
              description: "City of 25,000+ on mountaintop with no natural water. Carved stone cisterns plastered catchment surfaces check dams. Main Plaza (300x150m) as giant catchment",
              rarity: "legendary",
              historicalPeriod: "500 BCE-750 CE",
              significance: "Engineering urban water on a mountaintop with zero natural water",
              yearBCE: 500,
              category: "dam"
            },
            {
              id: "zapotec-tomb-drainage",
              name: "Zapotec Underground Drainage (Tombs)",
              description: "Elaborate stone-built tombs requiring sophisticated drainage with stone-lined channels directing water away from tomb entrances",
              rarity: "rare",
              historicalPeriod: "500 BCE-750 CE",
              significance: "Drainage engineering for sub-surface architecture",
              yearBCE: 500,
              category: "sanitation"
            },
            {
              id: "zapotec-water-cosmology",
              name: "Zapotec Cloud People Water Cosmology",
              description: "Zapotecs called themselves Be'ena Za'a (Cloud People) with Cocijo lightning-rain god as most important deity making water management a sacred duty",
              rarity: "rare",
              historicalPeriod: "500 BCE-750 CE",
              significance: "Water cosmology governing engineering practice",
              yearBCE: 500,
              category: "fountain"
            }
          ]
        },
        {
          id: "hierve-el-agua",
          name: "Hierve el Agua",
          description: "Self-building mineral irrigation channels",
          historicalContext: "Unique globally — channels that build themselves",
          coordinates: { lat: 16.87, lng: -96.28 },
          artifacts: [
            {
              id: "hierve-el-agua",
              name: "Hierve el Agua Mineral Springs",
              description: "Irrigation using calcium carbonate spring water that precipitates creating petrified waterfalls and self-building channels",
              rarity: "legendary",
              historicalPeriod: "Pre-Zapotec-Zapotec",
              significance: "Ancient irrigation with self-building mineral channels — unique in the world",
              yearBCE: 600,
              category: "irrigation"
            },
            {
              id: "zapotec-valley-irrigation",
              name: "Zapotec Valley Irrigation",
              description: "Canal-based irrigation across Oaxaca Valley managing seasonal Atoyac River for dry-season agriculture",
              rarity: "rare",
              historicalPeriod: "500 BCE-750 CE",
              significance: "Valley-floor irrigation in the Zapotec heartland",
              yearBCE: 500,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "toltec-civilization",
      name: "Toltec Civilization",
      description: "Warrior-merchants who bridged the gap between Teotihuacan and the Aztecs with their capital at Tula.",
      position: [-14, 0, 2],
      color: "#A0522D",
      era: "medieval",
      dateRange: "900-1168 CE",
      locations: [
        {
          id: "tula",
          name: "Tula",
          description: "Toltec capital with managed river water",
          historicalContext: "Bridge between Teotihuacan and Aztec water traditions",
          coordinates: { lat: 20.06, lng: -99.34 },
          artifacts: [
            {
              id: "tula-water-system",
              name: "Tula Urban Water System",
              description: "Toltec capital with canal systems reservoirs and distribution from the Tula River serving 30,000-60,000 people",
              rarity: "epic",
              historicalPeriod: "900-1168 CE",
              significance: "Capital city water for the Toltec Empire",
              yearBCE: -900,
              category: "canal"
            },
            {
              id: "tula-dam-reservoir",
              name: "Tula Dam and Reservoir",
              description: "Stone and earth dam across tributary with sluice-like openings for controlled release",
              rarity: "epic",
              historicalPeriod: "900-1168 CE",
              significance: "Pre-Aztec dam engineering in central Mexico",
              yearBCE: -900,
              category: "dam"
            },
            {
              id: "toltec-cave-water",
              name: "Toltec Cave Water Rituals",
              description: "Cave-spring sites near Tula used for water rituals continuing Olmec-Teotihuacan cave-water traditions",
              rarity: "rare",
              historicalPeriod: "900-1168 CE",
              significance: "Continuation of Mesoamerican sacred water cave tradition",
              yearBCE: -900,
              category: "fountain"
            }
          ]
        }
      ]
    },
    {
      id: "aztec-mexica",
      name: "Aztec/Mexica Empire",
      description: "200,000+ people living on an island in a salt lake — the most extreme urban water challenge in the pre-Columbian world, solved with dikes, dual aqueducts, chinampas, and sanitation surpassing contemporary Europe.",
      position: [-15, 0, 3],
      color: "#B22222",
      era: "medieval",
      dateRange: "1325-1521 CE",
      locations: [
        {
          id: "tenochtitlan-aztec",
          name: "Tenochtitlan",
          description: "Aztec island capital in Lake Texcoco",
          historicalContext: "Most extreme urban water challenge in the pre-Columbian world",
          coordinates: { lat: 19.43, lng: -99.13 },
          artifacts: [
            {
              id: "tenochtitlan-island-city",
              name: "Tenochtitlan Island City Water",
              description: "Capital built on island in saline Lake Texcoco requiring freshwater supply for 200,000+ people in the middle of salt water",
              rarity: "legendary",
              historicalPeriod: "1325-1521 CE",
              significance: "Most extreme urban water challenge in the pre-Columbian world",
              yearBCE: -1325,
              category: "aqueduct"
            },
            {
              id: "nezahualcoyotl-dike",
              name: "Nezahualcóyotl's Great Dike",
              description: "16 km stone and earth dike separating fresh and salt water in Lake Texcoco with sluice gates designed by poet-philosopher-engineer king",
              rarity: "legendary",
              historicalPeriod: "1449 CE",
              significance: "Largest freshwater-saltwater separation in the pre-Columbian world",
              yearBCE: -1449,
              category: "dam"
            },
            {
              id: "coyoacan-aqueduct",
              name: "Coyoacán Springs Aqueduct",
              description: "Second major aqueduct from Coyoacán springs that brought too much water flooding Tenochtitlan requiring emergency drainage",
              rarity: "epic",
              historicalPeriod: "1503 CE",
              significance: "Over-engineering with catastrophic consequences",
              yearBCE: -1503,
              category: "aqueduct"
            },
            {
              id: "aztec-causeway-dikes",
              name: "Aztec Causeway-Dikes",
              description: "Three major causeways connecting Tenochtitlan to mainland functioning as dikes with removable bridge sections for water flow and defense",
              rarity: "epic",
              historicalPeriod: "1325-1521 CE",
              significance: "Multi-function infrastructure: road + dike + bridge + defense",
              yearBCE: -1325,
              category: "dam"
            },
            {
              id: "aztec-flood-control",
              name: "Aztec Flood Control System (Post-1449)",
              description: "Comprehensive system managing water from five interconnected lakes at different elevations after catastrophic 1449 flood",
              rarity: "legendary",
              historicalPeriod: "1449-1521 CE",
              significance: "First comprehensive multi-lake urban flood management",
              yearBCE: -1449,
              category: "dam"
            },
            {
              id: "tenochtitlan-sanitation",
              name: "Tenochtitlan Urban Sanitation",
              description: "Organized waste collection by canoe transporting to chinampas as fertilizer. Public latrines on causeways. Streets swept by 1000+ workers daily. Cleaner than any European city per Cortés",
              rarity: "legendary",
              historicalPeriod: "1325-1521 CE",
              significance: "Pre-Columbian urban sanitation surpassing contemporary Europe",
              yearBCE: -1325,
              category: "sanitation"
            }
          ]
        },
        {
          id: "xochimilco",
          name: "Xochimilco",
          description: "Chinampa agriculture heartland",
          historicalContext: "Most productive pre-modern agriculture per hectare",
          coordinates: { lat: 19.26, lng: -99.10 },
          artifacts: [
            {
              id: "chinampa-system",
              name: "Chinampa Agriculture System",
              description: "Raised beds in shallow lake anchored by willows with canals for irrigation and transport. 9000+ hectares supporting 200,000+ people. Some over freshwater springs",
              rarity: "legendary",
              historicalPeriod: "1200-1521 CE",
              significance: "Most productive pre-modern agricultural system in the world per hectare",
              yearBCE: -1200,
              category: "irrigation"
            },
            {
              id: "xochimilco-spring-agriculture",
              name: "Xochimilco Freshwater Spring Agriculture",
              description: "Chinampas positioned directly over freshwater springs with water welling up through soil providing constant moisture without surface irrigation",
              rarity: "epic",
              historicalPeriod: "1200-1521 CE",
              significance: "Natural artesian irrigation beneath floating fields",
              yearBCE: -1200,
              category: "irrigation"
            },
            {
              id: "aztec-salt-production",
              name: "Aztec Salt Production",
              description: "Lake Texcoco saline water evaporated in managed salt pans combined with freshwater-saltwater separation system",
              rarity: "rare",
              historicalPeriod: "1325-1521 CE",
              significance: "Industrial saltwater management",
              yearBCE: -1325,
              category: "water-lifting"
            },
            {
              id: "aztec-lake-dredging",
              name: "Aztec Lake Dredging",
              description: "Continuous dredging of lake beds and canals with material used to build chinampas and raise causeways. Entire city rebuilt from its own lake bed",
              rarity: "rare",
              historicalPeriod: "1325-1521 CE",
              significance: "Continuous landscape construction from hydraulic dredging",
              yearBCE: -1325,
              category: "canal"
            },
            {
              id: "aztec-aqueduct-ritual",
              name: "Aztec Aqueduct Maintenance Ritual",
              description: "Annual ceremonies accompanying aqueduct cleaning with priests blessing channels and water officials managing physical and spiritual aspects",
              rarity: "rare",
              historicalPeriod: "Annual",
              significance: "Integration of engineering maintenance with state religion",
              yearBCE: -1400,
              category: "aqueduct"
            }
          ]
        }
      ]
    },
    {
      id: "purepecha",
      name: "Purépecha/Tarascan",
      description: "Lake-based civilization of Michoacán with sophisticated fishery management and volcanic spring engineering.",
      position: [-16, 0, 2],
      color: "#8B0000",
      era: "medieval",
      dateRange: "1300-1530 CE",
      locations: [
        {
          id: "lake-patzcuaro",
          name: "Lake Pátzcuaro",
          description: "Purépecha lake civilization",
          historicalContext: "Sophisticated lake fishery management",
          coordinates: { lat: 19.52, lng: -101.61 },
          artifacts: [
            {
              id: "patzcuaro-fishery",
              name: "Lake Pátzcuaro Fishery Management",
              description: "Sophisticated management with stone and wooden weirs seasonal regulations and butterfly net fishing requiring deep water knowledge",
              rarity: "epic",
              historicalPeriod: "1300-1530 CE",
              significance: "Lake fishery management — Purépecha specialty",
              yearBCE: -1300,
              category: "dam"
            },
            {
              id: "purepecha-spring",
              name: "Purépecha Spring Management",
              description: "Management of volcanic springs with stone-lined enclosures channels to settlements and ritual sites",
              rarity: "rare",
              historicalPeriod: "1300-1530 CE",
              significance: "Volcanic spring management",
              yearBCE: -1300,
              category: "aqueduct"
            },
            {
              id: "tzintzuntzan-water",
              name: "Tzintzuntzan Lake-Side Urban Water",
              description: "Capital on Lake Pátzcuaro with boat landings fish weirs managed lakeshore and five yácata platforms overlooking lake",
              rarity: "epic",
              historicalPeriod: "1300-1530 CE",
              significance: "Lake-based capital city water management",
              yearBCE: -1300,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "totonac",
      name: "Totonac Civilization",
      description: "Water engineering in the wettest major Mesoamerican city and managers of the world's most valuable spice crop.",
      position: [-13, 0, 2],
      color: "#FF6347",
      era: "classical",
      dateRange: "100-1521 CE",
      locations: [
        {
          id: "el-tajin",
          name: "El Tajín",
          description: "Totonac capital — wettest major Mesoamerican city",
          historicalContext: "2,000+ mm rainfall annually requiring extreme drainage",
          coordinates: { lat: 20.45, lng: -97.38 },
          artifacts: [
            {
              id: "el-tajin-drainage",
              name: "El Tajín Drainage System",
              description: "Elaborate drainage managing 2000+ mm annual rainfall with ball court drainage pyramid drainage and urban channels. Pyramid of Niches with 365 niches has sophisticated water management",
              rarity: "epic",
              historicalPeriod: "600-1200 CE",
              significance: "Water engineering in the wettest major Mesoamerican city",
              yearBCE: -600,
              category: "sanitation"
            },
            {
              id: "totonac-vanilla-water",
              name: "Totonac Vanilla Cultivation Water",
              description: "Vanilla planifolia requiring specific humidity filtered light and consistent moisture managed through forest and irrigation",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Water management for the world's most valuable spice crop",
              yearBCE: -500,
              category: "irrigation"
            },
            {
              id: "cempoala-water",
              name: "Cempoala Urban Water",
              description: "Canal-based urban water with aqueduct from nearby river — first Mesoamerican urban water system seen by Europeans",
              rarity: "rare",
              historicalPeriod: "1200-1521 CE",
              significance: "First Mesoamerican urban water system seen by Europeans",
              yearBCE: -1200,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "mixtec",
      name: "Mixtec Civilization",
      description: "Master scribes who recorded water resources in codices and invented self-building agricultural terraces.",
      position: [-14, 0, 0],
      color: "#DAA520",
      era: "medieval",
      dateRange: "900-1521 CE",
      locations: [
        {
          id: "mixteca-alta",
          name: "Mixteca Alta",
          description: "Mixtec highland territory",
          historicalContext: "Self-building terraces and pre-Columbian water records",
          coordinates: { lat: 17.30, lng: -97.20 },
          artifacts: [
            {
              id: "mixtec-lama-bordo",
              name: "Mixtec Lama-Bordo Terrace Agriculture",
              description: "Stone check dams across ravines creating level areas that fill with water-carried sediment. Terraces build up naturally behind each dam",
              rarity: "epic",
              historicalPeriod: "900-1521 CE",
              significance: "Self-building terrace agriculture — water does the construction work",
              yearBCE: -900,
              category: "irrigation"
            },
            {
              id: "mixtec-cave-water",
              name: "Yagul/Mitla Cave Water Systems",
              description: "Cave and rock-shelter sites with managed springs cisterns and stone-carved channels directing water through caves to ritual areas",
              rarity: "rare",
              historicalPeriod: "900-1521 CE",
              significance: "Cave-spring water management in the Mixteca",
              yearBCE: -900,
              category: "aqueduct"
            },
            {
              id: "mixtec-codex-water",
              name: "Mixtec Codex Water Records",
              description: "Surviving pre-Columbian codices containing records of rivers springs lakes and water-related place names functioning as geographic water databases",
              rarity: "legendary",
              historicalPeriod: "900-1521 CE",
              significance: "Pre-Columbian written water records",
              yearBCE: -900,
              category: "water-clock"
            }
          ]
        }
      ]
    },
    {
      id: "epi-olmec",
      name: "Epi-Olmec & Transitional",
      description: "The bridge between the Olmec mother culture and the Classic Maya — inheriting and refining water engineering traditions.",
      position: [-14, 0, 1.5],
      color: "#6B8E23",
      era: "classical",
      dateRange: "400 BCE - 100 CE",
      locations: [
        {
          id: "tres-zapotes",
          name: "Tres Zapotes",
          description: "Successor to San Lorenzo",
          historicalContext: "Transitional Olmec-to-Classic water engineering",
          coordinates: { lat: 18.47, lng: -95.43 },
          artifacts: [
            {
              id: "tres-zapotes-water",
              name: "Tres Zapotes Water Management",
              description: "Successor to San Lorenzo continuing Olmec water traditions with stone-lined channels reservoirs and managed springs",
              rarity: "rare",
              historicalPeriod: "400 BCE-100 CE",
              significance: "Transitional Olmec-to-Classic water engineering",
              yearBCE: 400,
              category: "canal"
            },
            {
              id: "izapa-water-cosmology",
              name: "Izapa Water Cosmology",
              description: "Key transitional site with stone monuments depicting flood myths rain gods and water-world imagery plus channels from Izapa River",
              rarity: "rare",
              historicalPeriod: "300 BCE-100 CE",
              significance: "Bridge between Olmec and Maya water traditions",
              yearBCE: 300,
              category: "fountain"
            }
          ]
        }
      ]
    },
    {
      id: "paleo-indian-archaic",
      name: "Paleo-Indian & Archaic North America",
      description: "15,000 years of water management from Clovis spring camps to the oldest mound complex in the Americas.",
      position: [-18, 0, -5],
      color: "#8B4513",
      era: "ancient",
      dateRange: "15,000-1,000 BCE",
      locations: [
        {
          id: "clovis-springs",
          name: "Clovis Spring Sites",
          description: "Earliest North American water management",
          historicalContext: "Earliest North American water management",
          coordinates: { lat: 31.5, lng: -110.0 },
          artifacts: [
            {
              id: "clovis-spring-camps",
              name: "Clovis Spring Camp Sites",
              description: "Earliest evidence of water management at spring sites in North America by Clovis people",
              rarity: "epic",
              historicalPeriod: "13,000-12,000 BCE",
              significance: "Oldest water management in North America",
              yearBCE: 13000,
              category: "aqueduct"
            },
            {
              id: "blackwater-draw",
              name: "Blackwater Draw Spring Management",
              description: "Continuously managed spring site used by successive cultures for thousands of years",
              rarity: "epic",
              historicalPeriod: "11,000-7,000 BCE",
              significance: "Longest continuously managed spring",
              yearBCE: 11000,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "poverty-point",
          name: "Poverty Point",
          description: "UNESCO oldest major earthwork in North America",
          historicalContext: "UNESCO oldest major earthwork in North America",
          coordinates: { lat: 32.63, lng: -91.41 },
          artifacts: [
            {
              id: "poverty-point-earthworks",
              name: "Poverty Point Earthworks",
              description: "Massive earthwork complex with concentric ridges and mounds for water management and drainage",
              rarity: "legendary",
              historicalPeriod: "1700-1100 BCE",
              significance: "Oldest major earthwork water engineering in North America — UNESCO",
              yearBCE: 1700,
              category: "sanitation"
            },
            {
              id: "watson-brake-mounds",
              name: "Watson Brake Mound Complex",
              description: "Oldest mound complex in North America predating the Egyptian pyramids",
              rarity: "legendary",
              historicalPeriod: "3500 BCE",
              significance: "Oldest mound complex in North America — older than the pyramids",
              yearBCE: 3500,
              category: "dam"
            }
          ]
        },
        {
          id: "archaic-sites",
          name: "Archaic Period Sites",
          description: "Diverse water management sites from the Archaic period across eastern North America",
          historicalContext: "Archaic period water engineering across North America",
          coordinates: { lat: 42.35, lng: -71.06 },
          artifacts: [
            {
              id: "boston-fish-weir",
              name: "Boston Back Bay Fish Weir",
              description: "Massive ancient fish trap discovered beneath modern Boston covering over 2 acres",
              rarity: "legendary",
              historicalPeriod: "5200-3700 BCE",
              significance: "Largest ancient fish trap ever discovered",
              yearBCE: 5200,
              category: "dam"
            },
            {
              id: "old-copper-mine-drainage",
              name: "Old Copper Complex Mine Drainage",
              description: "Water management systems for copper mining operations in the Great Lakes region",
              rarity: "epic",
              historicalPeriod: "5000-1200 BCE",
              significance: "Earliest industrial water use in North America",
              yearBCE: 5000,
              category: "water-lifting"
            },
            {
              id: "windover-bog-burial",
              name: "Windover Bog Burial Water",
              description: "Understanding of water chemistry for preservation of burials in peat bogs",
              rarity: "epic",
              historicalPeriod: "6000-5000 BCE",
              significance: "Understanding water chemistry for preservation",
              yearBCE: 6000,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "woodland-period",
      name: "Woodland Period (Adena & Hopewell)",
      description: "Mound builders who created the largest geometric earthworks in the world.",
      position: [-17, 0, -6],
      color: "#556B2F",
      era: "ancient",
      dateRange: "1000 BCE - 500 CE",
      locations: [
        {
          id: "newark-earthworks",
          name: "Newark Earthworks",
          description: "Largest geometric earthworks in the world built by Hopewell culture",
          historicalContext: "Hopewell geometric earthworks with water alignment",
          coordinates: { lat: 40.05, lng: -82.40 },
          artifacts: [
            {
              id: "newark-earthworks-water",
              name: "Newark Earthworks Water Geometry",
              description: "Massive geometric earthworks aligned with water features and astronomical events",
              rarity: "legendary",
              historicalPeriod: "100 BCE-400 CE",
              significance: "Largest geometric earthworks in the world",
              yearBCE: 100,
              category: "canal"
            },
            {
              id: "hopewell-canals",
              name: "Hopewell Canal Construction",
              description: "Canal systems enabling water transportation for continental-scale trade networks",
              rarity: "epic",
              historicalPeriod: "200 BCE-500 CE",
              significance: "Water transportation for continental trade",
              yearBCE: 200,
              category: "canal"
            }
          ]
        },
        {
          id: "adena-mounds",
          name: "Adena Mound Sites",
          description: "Early mound-building culture with water engineering",
          historicalContext: "Adena culture mound construction and drainage",
          coordinates: { lat: 39.33, lng: -82.10 },
          artifacts: [
            {
              id: "adena-mound-water",
              name: "Adena Mound Water Engineering",
              description: "Engineering of mound drainage systems to protect burial and ceremonial structures",
              rarity: "epic",
              historicalPeriod: "1000-100 BCE",
              significance: "First major mound-drainage engineering",
              yearBCE: 1000,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "eastern-woodlands",
      name: "Eastern Woodlands Nations",
      description: "From Haudenosaunee fish weirs to Calusa canals.",
      position: [-17, 0, -4],
      color: "#2E8B57",
      era: "medieval",
      dateRange: "1000 BCE - 1600 CE",
      locations: [
        {
          id: "haudenosaunee-territory",
          name: "Haudenosaunee Territory",
          description: "Homeland of the Haudenosaunee Confederacy with cooperative water engineering",
          historicalContext: "Haudenosaunee cooperative water management",
          coordinates: { lat: 43.0, lng: -76.0 },
          artifacts: [
            {
              id: "haudenosaunee-fish-weirs",
              name: "Haudenosaunee Fish Weirs",
              description: "Large cooperative stone and wood fish weir systems across rivers of the northeast",
              rarity: "epic",
              historicalPeriod: "Ancient onwards",
              significance: "Largest cooperative water engineering in NE North America",
              yearBCE: 500,
              category: "dam"
            },
            {
              id: "three-sisters-moisture",
              name: "Three Sisters Moisture Management",
              description: "Polyculture planting system of corn beans and squash that conserves soil moisture through companion planting",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Water-efficient polyculture — 50% less water",
              yearBCE: -500,
              category: "irrigation"
            }
          ]
        },
        {
          id: "calusa-territory",
          name: "Calusa Territory Florida",
          description: "Calusa canal and waterway system in southwest Florida",
          historicalContext: "Calusa water engineering in Florida",
          coordinates: { lat: 26.6, lng: -82.2 },
          artifacts: [
            {
              id: "calusa-canal-system",
              name: "Calusa Canal System",
              description: "Extensive canal system connecting barrier islands to the mainland for trade and transport",
              rarity: "legendary",
              historicalPeriod: "500 BCE-1500 CE",
              significance: "Largest pre-contact canal in eastern NA",
              yearBCE: 500,
              category: "canal"
            }
          ]
        },
        {
          id: "cherokee-territory",
          name: "Cherokee Territory",
          description: "Cherokee water management and sacred water traditions",
          historicalContext: "Cherokee sacred water practices",
          coordinates: { lat: 35.5, lng: -83.5 },
          artifacts: [
            {
              id: "cherokee-going-to-water",
              name: "Cherokee Going to Water (Ama Diyi)",
              description: "Sacred purification ceremony involving immersion in flowing water integrated with water management practices",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Sacred water management",
              yearBCE: -500,
              category: "fountain"
            }
          ]
        }
      ]
    },
    {
      id: "great-plains-nations",
      name: "Great Plains Nations",
      description: "Flood-adapted agriculture on the Missouri River.",
      position: [-18, 0, -7],
      color: "#DEB887",
      era: "medieval",
      dateRange: "800-1800 CE",
      locations: [
        {
          id: "missouri-river-villages",
          name: "Missouri River Villages",
          description: "Mandan and Hidatsa river villages with flood-adapted agriculture",
          historicalContext: "Missouri River flood-adapted agriculture",
          coordinates: { lat: 47.3, lng: -101.0 },
          artifacts: [
            {
              id: "mandan-river-gardens",
              name: "Mandan/Hidatsa River Bottom Gardens",
              description: "Agricultural gardens in river bottom lands engineered to take advantage of annual flooding cycles",
              rarity: "epic",
              historicalPeriod: "800 CE onwards",
              significance: "Flood-adapted agriculture",
              yearBCE: -800,
              category: "irrigation"
            },
            {
              id: "mandan-earthlodge",
              name: "Mandan Earthlodge Water Design",
              description: "Earthlodge architecture designed to manage water runoff and drainage",
              rarity: "rare",
              historicalPeriod: "800-1800s CE",
              significance: "Architectural water engineering",
              yearBCE: -800,
              category: "sanitation"
            },
            {
              id: "plains-buffalo-jump-water",
              name: "Plains Buffalo Jump Water Knowledge",
              description: "Strategic use of water knowledge in buffalo hunting including drive lines along waterways",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Water knowledge as hunting strategy",
              yearBCE: 1000,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "great-basin-california",
      name: "Great Basin & California Peoples",
      description: "From hunter-gatherer irrigation to the densest indigenous population north of Mexico.",
      position: [-20, 0, -5],
      color: "#CD853F",
      era: "ancient",
      dateRange: "10,000 BCE - Present",
      locations: [
        {
          id: "owens-valley",
          name: "Owens Valley",
          description: "Paiute and Shoshone irrigation systems in the Owens Valley",
          historicalContext: "Indigenous irrigation in the Great Basin",
          coordinates: { lat: 37.0, lng: -118.3 },
          artifacts: [
            {
              id: "paiute-owens-irrigation",
              name: "Paiute/Shoshone Irrigation",
              description: "Sophisticated irrigation system diverting streams to water wild seed-bearing plants later destroyed by the LA Aqueduct water grab",
              rarity: "legendary",
              historicalPeriod: "1000+ years",
              significance: "Indigenous irrigation destroyed by LA water grab",
              yearBCE: 1000,
              category: "irrigation"
            },
            {
              id: "great-basin-spring",
              name: "Great Basin Spring Stewardship",
              description: "12,000 years of continuous desert spring management and stewardship across the Great Basin",
              rarity: "epic",
              historicalPeriod: "10,000 BCE onwards",
              significance: "12,000 years of desert spring management",
              yearBCE: 10000,
              category: "aqueduct"
            }
          ]
        },
        {
          id: "california-coast",
          name: "California Coastal Sites",
          description: "Water engineering by California coastal peoples",
          historicalContext: "California indigenous water management",
          coordinates: { lat: 34.4, lng: -119.7 },
          artifacts: [
            {
              id: "chumash-tomol",
              name: "Chumash Tomol Water Craft",
              description: "Only plank-built watercraft in indigenous North America sewn together with plant fiber and sealed with tar",
              rarity: "legendary",
              historicalPeriod: "1500 BCE onwards",
              significance: "Only plank-built watercraft in indigenous North America",
              yearBCE: 1500,
              category: "canal"
            },
            {
              id: "yurok-brush-dam",
              name: "Yurok Brush Dam Fisheries",
              description: "River engineering using brush dams governed by ceremonial protocols for sustainable salmon fishery",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Ceremony-governed river engineering",
              yearBCE: 500,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "algonquin-canadian",
      name: "Algonquin & Canadian First Nations",
      description: "Navigation of the world's largest freshwater system.",
      position: [-17, 0, -9],
      color: "#006400",
      era: "ancient",
      dateRange: "5000 BCE - Present",
      locations: [
        {
          id: "great-lakes",
          name: "Great Lakes Region",
          description: "Water management across the Great Lakes freshwater system",
          historicalContext: "Great Lakes indigenous water management",
          coordinates: { lat: 45.0, lng: -84.0 },
          artifacts: [
            {
              id: "wild-rice-management",
              name: "Wild Rice (Manoomin) Water Management",
              description: "Management of wild rice beds across the Great Lakes including water level regulation and harvesting protocols",
              rarity: "legendary",
              historicalPeriod: "Traditional",
              significance: "Largest aquatic crop management in North America",
              yearBCE: 1000,
              category: "irrigation"
            },
            {
              id: "birchbark-canoe-nav",
              name: "Birchbark Canoe Water Navigation",
              description: "Continental-scale water travel network using birchbark canoes across rivers and lakes",
              rarity: "epic",
              historicalPeriod: "3000 BCE onwards",
              significance: "Continental-scale travel",
              yearBCE: 3000,
              category: "canal"
            }
          ]
        },
        {
          id: "bc-coast",
          name: "British Columbia Coast",
          description: "West Coast salmon management and whaling traditions",
          historicalContext: "British Columbia First Nations water management",
          coordinates: { lat: 54.0, lng: -128.0 },
          artifacts: [
            {
              id: "bc-salmon-management",
              name: "West Coast Salmon Management",
              description: "Most extensive salmon fishery management system in the world including weirs traps and selective harvesting",
              rarity: "legendary",
              historicalPeriod: "Traditional",
              significance: "Most extensive salmon fishery management in the world",
              yearBCE: 3000,
              category: "dam"
            },
            {
              id: "nuu-chah-nulth-whaling",
              name: "Nuu-chah-nulth Whaling Water Knowledge",
              description: "Open-ocean water knowledge for whaling from canoes including currents tides and weather patterns",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Open-ocean water knowledge for whaling from canoes",
              yearBCE: 1000,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "pacific-northwest-expanded",
      name: "Pacific Northwest Nations",
      description: "11,000 years of salmon fishery management.",
      position: [-21, 0, -7],
      color: "#4682B4",
      era: "ancient",
      dateRange: "11,000 BCE - Present",
      locations: [
        {
          id: "celilo-falls",
          name: "Celilo Falls",
          description: "Oldest and largest fishery in North America destroyed by The Dalles Dam in 1957",
          historicalContext: "11,000 years of continuous fishery management at Celilo Falls",
          coordinates: { lat: 45.65, lng: -120.98 },
          artifacts: [
            {
              id: "celilo-falls-fishery",
              name: "Celilo Falls Fishery",
              description: "Oldest and largest fishery in North America continuously operated for 11,000 years before destruction by The Dalles Dam in 1957",
              rarity: "legendary",
              historicalPeriod: "11,000 BCE-1957 CE",
              significance: "Oldest and largest fishery in NA — destroyed by a dam",
              yearBCE: 11000,
              category: "dam"
            },
            {
              id: "salmon-weir-management",
              name: "Salmon Weir Water Level Management",
              description: "Sophisticated weir systems managing water levels for sustainable salmon fishery across millennia",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Sustainable fishery for millennia",
              yearBCE: 5000,
              category: "dam"
            },
            {
              id: "coast-salish-reef-net",
              name: "Coast Salish Reef Net Fishing",
              description: "Underwater net engineering system anchored to reef structures for salmon interception",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Underwater net engineering",
              yearBCE: 2000,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "modern-usa",
      name: "Modern USA Water Engineering",
      description: "From the Erie Canal to the Chicago River Reversal.",
      position: [-19, 0, -5],
      color: "#3C3B6E",
      era: "modern",
      dateRange: "1825 - Present",
      locations: [
        {
          id: "eastern-usa-water",
          name: "Eastern USA Water Projects",
          description: "Major water engineering projects in eastern United States",
          historicalContext: "American water infrastructure development",
          coordinates: { lat: 42.8, lng: -76.5 },
          artifacts: [
            {
              id: "erie-canal",
              name: "Erie Canal",
              description: "363-mile canal connecting the Great Lakes to the Atlantic Ocean transforming American commerce",
              rarity: "legendary",
              historicalPeriod: "1825",
              significance: "Most important canal in American history",
              yearBCE: -1825,
              category: "canal"
            },
            {
              id: "croton-aqueduct",
              name: "Croton Aqueduct",
              description: "41-mile aqueduct bringing clean water to New York City ending cholera epidemics",
              rarity: "epic",
              historicalPeriod: "1842",
              significance: "Foundation of NYC water supply",
              yearBCE: -1842,
              category: "aqueduct"
            },
            {
              id: "chicago-river-reversal",
              name: "Chicago River Reversal",
              description: "Engineering feat that reversed the flow of the Chicago River away from Lake Michigan to protect drinking water",
              rarity: "legendary",
              historicalPeriod: "1900",
              significance: "Most dramatic river engineering in American history",
              yearBCE: -1900,
              category: "canal"
            }
          ]
        },
        {
          id: "western-usa-water",
          name: "Western USA Water Projects",
          description: "Major water engineering projects in western United States",
          historicalContext: "Western American water infrastructure",
          coordinates: { lat: 36.0, lng: -114.7 },
          artifacts: [
            {
              id: "la-aqueduct",
              name: "Los Angeles Aqueduct",
              description: "233-mile aqueduct bringing water from the Owens Valley to Los Angeles sparking the California Water Wars",
              rarity: "legendary",
              historicalPeriod: "1913",
              significance: "Most controversial water project in American history",
              yearBCE: -1913,
              category: "aqueduct"
            },
            {
              id: "tva-system",
              name: "Tennessee Valley Authority",
              description: "Integrated system of dams and hydroelectric plants across the Tennessee River watershed",
              rarity: "legendary",
              historicalPeriod: "1933",
              significance: "First integrated river basin authority",
              yearBCE: -1933,
              category: "dam"
            },
            {
              id: "california-state-water",
              name: "California State Water Project",
              description: "Largest state-built water and power development and conveyance system in the United States lifting water 2,000 feet over the Tehachapi Mountains",
              rarity: "legendary",
              historicalPeriod: "1960-1973",
              significance: "Highest water lift in the world",
              yearBCE: -1960,
              category: "water-lifting"
            }
          ]
        }
      ]
    },
    {
      id: "modern-canada",
      name: "Modern Canada Water Engineering",
      description: "The St. Lawrence Seaway and James Bay Project.",
      position: [-17, 0, -10],
      color: "#FF0000",
      era: "modern",
      dateRange: "1954 - Present",
      locations: [
        {
          id: "canada-water-projects",
          name: "Canadian Mega-Projects",
          description: "Major Canadian water engineering mega-projects",
          historicalContext: "Canadian water infrastructure development",
          coordinates: { lat: 53.0, lng: -77.0 },
          artifacts: [
            {
              id: "st-lawrence-seaway",
              name: "St. Lawrence Seaway",
              description: "System of locks canals and channels permitting ocean-going vessels to travel from the Atlantic to the Great Lakes",
              rarity: "legendary",
              historicalPeriod: "1954-1959",
              significance: "Largest binational waterway in North America",
              yearBCE: -1954,
              category: "canal"
            },
            {
              id: "james-bay-project",
              name: "James Bay Project",
              description: "Massive hydroelectric project in northern Quebec diverting rivers and creating reservoirs across an area the size of New York State",
              rarity: "legendary",
              historicalPeriod: "1971-1996",
              significance: "Largest construction project in Canadian history",
              yearBCE: -1971,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "colombian-civilizations",
      name: "Colombian Water Civilizations",
      description: "From Zenú's 500,000-hectare wetland to Tairona's Lost City — the Americas' most diverse water engineering.",
      position: [-10, 0, 2],
      color: "#228B22",
      era: "ancient",
      dateRange: "200 BCE - 1600 CE",
      locations: [
        {
          id: "zenu-wetlands",
          name: "Zenú Hydraulic Landscape",
          description: "Largest managed wetland in pre-Columbian Americas",
          historicalContext: "Largest managed wetland in pre-Columbian Americas",
          coordinates: { lat: 8.5, lng: -75.5 },
          artifacts: [
            {
              id: "zenu-hydraulic-landscape",
              name: "Zenú Hydraulic Landscape (San Jorge)",
              description: "Largest managed wetland in pre-Columbian Americas — 500,000 hectares",
              rarity: "legendary",
              historicalPeriod: "200 BCE-1600 CE",
              significance: "Largest managed wetland in pre-Columbian Americas — 500,000 hectares",
              yearBCE: 200,
              category: "irrigation"
            },
            {
              id: "zenu-fish-weir-networks",
              name: "Zenú Fish Weir Networks",
              description: "Integrated wetland agriculture and aquaculture at continental scale",
              rarity: "epic",
              historicalPeriod: "200 BCE-1600 CE",
              significance: "Integrated wetland agriculture and aquaculture at continental scale",
              yearBCE: 200,
              category: "dam"
            }
          ]
        },
        {
          id: "tairona-territory",
          name: "Tairona Ciudad Perdida",
          description: "Most sophisticated pre-Columbian mountain city water system in northern South America",
          historicalContext: "Most sophisticated pre-Columbian mountain city water system in northern South America",
          coordinates: { lat: 11.0, lng: -73.9 },
          artifacts: [
            {
              id: "ciudad-perdida-water",
              name: "Ciudad Perdida Water System",
              description: "169 terraces with integrated stone drainage — rediscovered 1972",
              rarity: "legendary",
              historicalPeriod: "800 CE",
              significance: "169 terraces with integrated stone drainage — rediscovered 1972",
              yearBCE: -800,
              category: "sanitation"
            },
            {
              id: "tairona-terrace-drainage",
              name: "Tairona Terrace Drainage",
              description: "Tropical mountain drainage in extreme rainfall (3000+ mm/year)",
              rarity: "epic",
              historicalPeriod: "200-1600 CE",
              significance: "Tropical mountain drainage in extreme rainfall (3000+ mm/year)",
              yearBCE: -200,
              category: "sanitation"
            }
          ]
        },
        {
          id: "muisca-highlands",
          name: "Muisca Confederation",
          description: "High-altitude civilization supporting 500,000+ people",
          historicalContext: "High-altitude civilization supporting 500,000+ people",
          coordinates: { lat: 5.0, lng: -73.8 },
          artifacts: [
            {
              id: "guatavita-sacred-water",
              name: "Lake Guatavita Sacred Water",
              description: "Origin of the El Dorado legend — water as sacred medium",
              rarity: "legendary",
              historicalPeriod: "600-1600 CE",
              significance: "Origin of the El Dorado legend — water as sacred medium",
              yearBCE: -600,
              category: "fountain"
            },
            {
              id: "muisca-highland-irrigation",
              name: "Muisca Highland Irrigation",
              description: "High-altitude irrigation at 2600 m supporting 500,000+ people",
              rarity: "epic",
              historicalPeriod: "600-1600 CE",
              significance: "High-altitude irrigation at 2600 m supporting 500,000+ people",
              yearBCE: -600,
              category: "irrigation"
            },
            {
              id: "muisca-salt-processing",
              name: "Muisca Salt Water Processing",
              description: "Industrial water processing — salt more valued than gold",
              rarity: "epic",
              historicalPeriod: "600-1600 CE",
              significance: "Industrial water processing — salt more valued than gold",
              yearBCE: -600,
              category: "water-lifting"
            }
          ]
        },
        {
          id: "warao-delta",
          name: "Warao Orinoco Delta",
          description: "Water-adapted culture in the Orinoco Delta",
          historicalContext: "One of Earth's most water-adapted cultures",
          coordinates: { lat: 9.0, lng: -61.0 },
          artifacts: [
            {
              id: "warao-stilt-houses",
              name: "Warao Stilt House Water Living",
              description: "People who live entirely on water — one of Earth's most water-adapted cultures",
              rarity: "legendary",
              historicalPeriod: "Ancient-Present",
              significance: "People who live entirely on water — one of Earth's most water-adapted cultures",
              yearBCE: 2000,
              category: "sanitation"
            },
            {
              id: "warao-canoe-culture",
              name: "Warao Canoe Culture",
              description: "Most water-dependent culture in the Americas — 25,000 km² delta navigation",
              rarity: "epic",
              historicalPeriod: "Ancient-Present",
              significance: "Most water-dependent culture in the Americas — 25,000 km² delta navigation",
              yearBCE: 2000,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "caribbean-indigenous",
      name: "Caribbean Indigenous Peoples",
      description: "Taíno water agriculture that fed 3 million people across the Caribbean.",
      position: [-9, 0, -1],
      color: "#20B2AA",
      era: "medieval",
      dateRange: "800-1500 CE",
      locations: [
        {
          id: "caribbean-islands",
          name: "Caribbean Island Water Sites",
          description: "Caribbean indigenous water management sites",
          historicalContext: "Water management across the Caribbean islands",
          coordinates: { lat: 19.0, lng: -72.0 },
          artifacts: [
            {
              id: "taino-conuco",
              name: "Taíno Conuco Water Agriculture",
              description: "Caribbean indigenous agriculture — water-managed mounds feeding 3 million",
              rarity: "epic",
              historicalPeriod: "800-1500 CE",
              significance: "Caribbean indigenous agriculture — water-managed mounds feeding 3 million",
              yearBCE: -800,
              category: "irrigation"
            },
            {
              id: "taino-cenote-cave",
              name: "Taíno Cenote/Cave Water Management",
              description: "Cave-based water management on Caribbean limestone islands",
              rarity: "rare",
              historicalPeriod: "800-1500 CE",
              significance: "Cave-based water management on Caribbean limestone islands",
              yearBCE: -800,
              category: "aqueduct"
            },
            {
              id: "carib-maritime-knowledge",
              name: "Carib Maritime Water Knowledge",
              description: "Open-ocean water knowledge across the Caribbean Sea",
              rarity: "epic",
              historicalPeriod: "Pre-contact",
              significance: "Open-ocean water knowledge across the Caribbean Sea",
              yearBCE: 500,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "sudd-nilotic",
      name: "Sudd & Nilotic Peoples",
      description: "Managing one of the largest wetlands on Earth — 57,000 km² in flood season.",
      position: [5, 0, 2],
      color: "#6B8E23",
      era: "ancient",
      dateRange: "Ancient - Present",
      locations: [
        {
          id: "sudd-wetland",
          name: "The Sudd (South Sudan)",
          description: "One of the largest wetlands on Earth",
          historicalContext: "One of the largest wetlands on Earth",
          coordinates: { lat: 7.0, lng: 30.0 },
          artifacts: [
            {
              id: "nuer-cattle-camp-water",
              name: "Nuer Cattle Camp Water Management",
              description: "Largest pastoral population organized around a wetland — 2 million+ people",
              rarity: "epic",
              historicalPeriod: "Ancient-Present",
              significance: "Largest pastoral population organized around a wetland — 2 million+ people",
              yearBCE: 2000,
              category: "irrigation"
            },
            {
              id: "dinka-flood-recession",
              name: "Dinka Flood-Recession Agriculture",
              description: "Agriculture in Africa's largest wetland",
              rarity: "epic",
              historicalPeriod: "Ancient-Present",
              significance: "Agriculture in Africa's largest wetland",
              yearBCE: 2000,
              category: "irrigation"
            },
            {
              id: "sudd-papyrus-channels",
              name: "Sudd Papyrus Channel Management",
              description: "Channel management in the world's largest papyrus swamp",
              rarity: "epic",
              historicalPeriod: "Ancient-Present",
              significance: "Channel management in the world's largest papyrus swamp",
              yearBCE: 2000,
              category: "canal"
            },
            {
              id: "shilluk-river-management",
              name: "Shilluk Kingdom River Management",
              description: "River control as political power — 600 km of the White Nile",
              rarity: "rare",
              historicalPeriod: "15th century CE onwards",
              significance: "River control as political power — 600 km of the White Nile",
              yearBCE: -1400,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "horn-of-africa",
      name: "Horn of Africa Water Engineering",
      description: "From Somali berkads to the Afar Depression — water survival in Earth's hottest places.",
      position: [8, 0, 2],
      color: "#DAA520",
      era: "ancient",
      dateRange: "Ancient - Present",
      locations: [
        {
          id: "horn-sites",
          name: "Horn of Africa Water Sites",
          description: "Water engineering sites across the Horn of Africa",
          historicalContext: "Water survival in Earth's hottest places",
          coordinates: { lat: 5.0, lng: 45.0 },
          artifacts: [
            {
              id: "somali-berkad",
              name: "Somali Berkad Underground Cistern",
              description: "Primary water technology for 15 million people",
              rarity: "legendary",
              historicalPeriod: "Ancient-Present",
              significance: "Primary water technology for 15 million people",
              yearBCE: 2000,
              category: "dam"
            },
            {
              id: "somali-dhow-water",
              name: "Somali War Dhow Water Logistics",
              description: "Maritime water logistics across the Indian Ocean",
              rarity: "epic",
              historicalPeriod: "Ancient-Present",
              significance: "Maritime water logistics across the Indian Ocean",
              yearBCE: 1000,
              category: "canal"
            },
            {
              id: "afar-salt-lake-water",
              name: "Afar Salt Lake Water Management",
              description: "Water management in Earth's hottest inhabited place",
              rarity: "epic",
              historicalPeriod: "Ancient-Present",
              significance: "Water management in Earth's hottest inhabited place",
              yearBCE: 2000,
              category: "water-lifting"
            }
          ]
        }
      ]
    },
    {
      id: "malta-water",
      name: "Malta Water Engineering",
      description: "7,000 years of water innovation on a dry Mediterranean island with no permanent rivers.",
      position: [2, 0, -3],
      color: "#B8860B",
      era: "ancient",
      dateRange: "3600 BCE - Present",
      locations: [
        {
          id: "malta-island",
          name: "Malta Island Water Sites",
          description: "Water engineering sites across Malta",
          historicalContext: "7,000 years of water innovation on a dry island",
          coordinates: { lat: 35.9, lng: 14.5 },
          artifacts: [
            {
              id: "ggantija-temple-water",
              name: "Neolithic Temple Water (Ġgantija)",
              description: "Water engineering for some of the oldest monumental structures on Earth",
              rarity: "legendary",
              historicalPeriod: "3600 BCE",
              significance: "Water engineering for some of the oldest monumental structures on Earth",
              yearBCE: 3600,
              category: "fountain"
            },
            {
              id: "punic-roman-cisterns",
              name: "Punic-Roman Cistern Networks",
              description: "Entire national water supply from cisterns for 2800+ years",
              rarity: "epic",
              historicalPeriod: "800 BCE-400 CE",
              significance: "Entire national water supply from cisterns for 2800+ years",
              yearBCE: 800,
              category: "dam"
            },
            {
              id: "knights-malta-water",
              name: "Knights of Malta Water Engineering",
              description: "Military water engineering for the Mediterranean's greatest fortress",
              rarity: "epic",
              historicalPeriod: "1530-1798 CE",
              significance: "Military water engineering for the Mediterranean's greatest fortress",
              yearBCE: -1530,
              category: "aqueduct"
            },
            {
              id: "maltese-reverse-osmosis",
              name: "Maltese Reverse Osmosis",
              description: "Small-island desalination pioneer — 60%+ domestic water from sea",
              rarity: "rare",
              historicalPeriod: "1982 onwards",
              significance: "Small-island desalination pioneer — 60%+ domestic water from sea",
              yearBCE: -1982,
              category: "water-lifting"
            }
          ]
        }
      ]
    },
    {
      id: "himalayan-kingdoms",
      name: "Himalayan Kingdoms",
      description: "Water engineering in the world's steepest terrain — from Nepal's 25,000 water mills to Ladakh's ice stupas.",
      position: [12, 0, -3],
      color: "#8B4513",
      era: "ancient",
      dateRange: "Ancient - Present",
      locations: [
        {
          id: "himalayan-sites",
          name: "Himalayan Water Sites",
          description: "Water engineering sites across the Himalayas",
          historicalContext: "Water engineering in the world's steepest terrain",
          coordinates: { lat: 28.5, lng: 84.0 },
          artifacts: [
            {
              id: "nepali-raj-kulo",
              name: "Nepali Raj Kulo (Royal Canal)",
              description: "Community irrigation governance in the world's steepest terrain",
              rarity: "epic",
              historicalPeriod: "Ancient-Present",
              significance: "Community irrigation governance in the world's steepest terrain",
              yearBCE: 1000,
              category: "irrigation"
            },
            {
              id: "bhutanese-dzong-water",
              name: "Bhutanese Dzong Water Systems",
              description: "Fortress water engineering in the world's highest kingdom",
              rarity: "epic",
              historicalPeriod: "1600s onwards",
              significance: "Fortress water engineering in the world's highest kingdom",
              yearBCE: -1600,
              category: "aqueduct"
            },
            {
              id: "ladakhi-glacier-irrigation",
              name: "Ladakhi Glacier-Fed Irrigation",
              description: "Highest-altitude irrigation in the world (3000-4500 m)",
              rarity: "epic",
              historicalPeriod: "Ancient-Present",
              significance: "Highest-altitude irrigation in the world (3000-4500 m)",
              yearBCE: 1000,
              category: "irrigation"
            },
            {
              id: "ice-stupa-glaciers",
              name: "Ice Stupa Artificial Glaciers",
              description: "Modern innovation addressing climate change at extreme altitude",
              rarity: "legendary",
              historicalPeriod: "2013-Present",
              significance: "Modern innovation addressing climate change at extreme altitude",
              yearBCE: -2013,
              category: "dam"
            },
            {
              id: "nepali-ghatta",
              name: "Nepali Water Mill (Ghatta)",
              description: "Highest density of traditional water mills on Earth — 25,000+",
              rarity: "rare",
              historicalPeriod: "Ancient-Present",
              significance: "Highest density of traditional water mills on Earth — 25,000+",
              yearBCE: 1000,
              category: "water-lifting"
            }
          ]
        }
      ]
    },
    {
      id: "canary-islands",
      name: "Canary Islands Water",
      description: "2,000 years of isolated island water engineering — from Guanche cisterns to volcanic water tunnels.",
      position: [-2, 0, -4],
      color: "#FF8C00",
      era: "ancient",
      dateRange: "200 BCE - Present",
      locations: [
        {
          id: "canary-sites",
          name: "Canary Islands Water Sites",
          description: "Water engineering sites across the Canary Islands",
          historicalContext: "2,000 years of isolated island water engineering",
          coordinates: { lat: 28.1, lng: -15.4 },
          artifacts: [
            {
              id: "guanche-water",
              name: "Guanche Water Management",
              description: "Isolated island water engineering — 2,000 years of independent development",
              rarity: "epic",
              historicalPeriod: "200 BCE-1500 CE",
              significance: "Isolated island water engineering — 2,000 years of independent development",
              yearBCE: 200,
              category: "dam"
            },
            {
              id: "canary-galerias",
              name: "Canary Island Galerías (Water Tunnels)",
              description: "Volcanic qanat-equivalent — 1,600 tunnels totaling 1,700+ km",
              rarity: "epic",
              historicalPeriod: "1500s-Present",
              significance: "Volcanic qanat-equivalent — 1,600 tunnels totaling 1,700+ km",
              yearBCE: -1500,
              category: "aqueduct"
            },
            {
              id: "canary-fog-harvest",
              name: "Canary Island Fog Harvesting",
              description: "Atlantic island fog harvesting — traditional and modern",
              rarity: "rare",
              historicalPeriod: "Traditional-Modern",
              significance: "Atlantic island fog harvesting — traditional and modern",
              yearBCE: 500,
              category: "water-lifting"
            }
          ]
        }
      ]
    },
    {
      id: "libya-gmmr",
      name: "Libya Great Man-Made River",
      description: "The largest irrigation project in the world — mining 40,000-year-old fossil water beneath the Sahara.",
      position: [3, 0, -4],
      color: "#C19A6B",
      era: "modern",
      dateRange: "1984 - Present",
      locations: [
        {
          id: "gmmr-sites",
          name: "Great Man-Made River",
          description: "Great Man-Made River pipeline system",
          historicalContext: "Mining ancient fossil water beneath the Sahara Desert",
          coordinates: { lat: 27.0, lng: 17.0 },
          artifacts: [
            {
              id: "great-man-made-river",
              name: "Great Man-Made River (Libya)",
              description: "Largest irrigation project in the world — 2,800 km of 4m-diameter pipeline mining ancient fossil water",
              rarity: "legendary",
              historicalPeriod: "1984-Present",
              significance: "Largest irrigation project in the world — 2,800 km of 4m-diameter pipeline mining ancient fossil water",
              yearBCE: -1984,
              category: "aqueduct"
            }
          ]
        }
      ]
    },
    {
      id: "china-south-north-transfer",
      name: "China South-North Water Transfer",
      description: "The most expensive infrastructure project in human history — redirecting a continent's hydrology.",
      position: [17, 0, -4],
      color: "#DE2910",
      era: "modern",
      dateRange: "2002 - Present",
      locations: [
        {
          id: "south-north-transfer",
          name: "South-North Water Transfer Project",
          description: "South-North Water Transfer Project",
          historicalContext: "The most expensive infrastructure project in human history",
          coordinates: { lat: 35.0, lng: 113.0 },
          artifacts: [
            {
              id: "south-north-water-transfer",
              name: "South-North Water Transfer Project",
              description: "Most expensive water project ever built — $80+ billion redirecting a continent's hydrology",
              rarity: "legendary",
              historicalPeriod: "2002-Present",
              significance: "Most expensive water project ever built — $80+ billion redirecting a continent's hydrology",
              yearBCE: -2002,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "ethiopia-gerd",
      name: "Grand Ethiopian Renaissance Dam",
      description: "Africa's largest dam — threatening war between nations over Nile water.",
      position: [7, 0, 1],
      color: "#009639",
      era: "modern",
      dateRange: "2011 - Present",
      locations: [
        {
          id: "gerd-site",
          name: "GERD Site",
          description: "Grand Ethiopian Renaissance Dam site",
          historicalContext: "Africa's largest dam and most politically contentious water project",
          coordinates: { lat: 11.2, lng: 35.1 },
          artifacts: [
            {
              id: "grand-ethiopian-renaissance-dam",
              name: "Grand Ethiopian Renaissance Dam",
              description: "Africa's largest dam (6,450 MW) — most politically contentious water project on Earth",
              rarity: "legendary",
              historicalPeriod: "2011-Present",
              significance: "Africa's largest dam (6,450 MW) — most politically contentious water project on Earth",
              yearBCE: -2011,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "tierra-del-fuego",
      name: "Tierra del Fuego Water Peoples",
      description: "The southernmost people on Earth — surviving in the most extreme maritime environment.",
      position: [-11, 0, 12],
      color: "#4169E1",
      era: "ancient",
      dateRange: "6,000 BCE - Present",
      locations: [
        {
          id: "tierra-sites",
          name: "Tierra del Fuego",
          description: "Tierra del Fuego water sites",
          historicalContext: "The southernmost people on Earth surviving in extreme maritime conditions",
          coordinates: { lat: -54.8, lng: -68.3 },
          artifacts: [
            {
              id: "yaghan-canoe-water",
              name: "Yaghan Canoe Water Life",
              description: "Water survival at the extreme end of the habitable world — 4°C diving",
              rarity: "legendary",
              historicalPeriod: "6,000 BCE-Present",
              significance: "Water survival at the extreme end of the habitable world — 4°C diving",
              yearBCE: 6000,
              category: "canal"
            },
            {
              id: "selknam-guanaco-water",
              name: "Selk'nam Guanaco-Water Knowledge",
              description: "Lost water knowledge — genocide destroyed an entire water tradition",
              rarity: "epic",
              historicalPeriod: "Ancient-1900s",
              significance: "Lost water knowledge — genocide destroyed an entire water tradition",
              yearBCE: 2000,
              category: "aqueduct"
            }
          ]
        }
      ]
    },
    {
      id: "maldives-water",
      name: "Maldives Water Engineering",
      description: "Water management for the world's most vulnerable nation to sea-level rise.",
      position: [12, 0, 3],
      color: "#00693E",
      era: "ancient",
      dateRange: "Ancient - Present",
      locations: [
        {
          id: "maldives-sites",
          name: "Maldives Atolls",
          description: "Maldives Atolls water sites",
          historicalContext: "Water management for the world's lowest country",
          coordinates: { lat: 3.2, lng: 73.2 },
          artifacts: [
            {
              id: "maldivian-freshwater-lens",
              name: "Maldivian Freshwater Lens Management",
              description: "Water management for the world's lowest country — 1.5 m above sea level",
              rarity: "epic",
              historicalPeriod: "Ancient-Present",
              significance: "Water management for the world's lowest country — 1.5 m above sea level",
              yearBCE: 1000,
              category: "aqueduct"
            },
            {
              id: "maldivian-rainwater",
              name: "Maldivian Rainwater Harvesting",
              description: "National survival dependent on rainwater",
              rarity: "rare",
              historicalPeriod: "Traditional-Modern",
              significance: "National survival dependent on rainwater",
              yearBCE: 1000,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "swiss-alps-water",
      name: "Swiss Alps Water Engineering",
      description: "From prehistoric lake dwellings to the world's tallest gravity dam.",
      position: [1, 0, -5],
      color: "#FF0000",
      era: "ancient",
      dateRange: "4000 BCE - Present",
      locations: [
        {
          id: "swiss-sites",
          name: "Swiss Water Sites",
          description: "Swiss Alps water engineering sites",
          historicalContext: "From prehistoric lake dwellings to modern mega-dams",
          coordinates: { lat: 46.2, lng: 7.6 },
          artifacts: [
            {
              id: "bisse-suonen",
              name: "Bisse/Suonen Alpine Irrigation",
              description: "Most dramatic irrigation channels in Europe — clinging to Alpine cliff faces",
              rarity: "legendary",
              historicalPeriod: "13th century CE onwards",
              significance: "Most dramatic irrigation channels in Europe — clinging to Alpine cliff faces",
              yearBCE: -1200,
              category: "irrigation"
            },
            {
              id: "swiss-pile-dwellings",
              name: "Swiss Pile Dwellings",
              description: "UNESCO — largest concentration of prehistoric lakeside settlements",
              rarity: "legendary",
              historicalPeriod: "4000-800 BCE",
              significance: "UNESCO — largest concentration of prehistoric lakeside settlements",
              yearBCE: 4000,
              category: "sanitation"
            },
            {
              id: "grande-dixence",
              name: "Grande Dixence Dam",
              description: "World's tallest gravity dam (285 m) — greatest hydraulic head",
              rarity: "legendary",
              historicalPeriod: "1961",
              significance: "World's tallest gravity dam (285 m) — greatest hydraulic head",
              yearBCE: -1961,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "kurdish-water",
      name: "Kurdish Water Traditions",
      description: "10,000+ karez systems — many deliberately destroyed as a weapon of genocide.",
      position: [7, 0, -4],
      color: "#F0E68C",
      era: "ancient",
      dateRange: "Ancient - Present",
      locations: [
        {
          id: "kurdish-sites",
          name: "Kurdistan Water Sites",
          description: "Kurdish water engineering sites",
          historicalContext: "Karez systems across Kurdistan spanning four modern nations",
          coordinates: { lat: 36.4, lng: 44.4 },
          artifacts: [
            {
              id: "kurdish-karez",
              name: "Kurdish Karez Systems",
              description: "10,000+ karez in Iraqi Kurdistan — many destroyed by Anfal campaign as genocide tool",
              rarity: "legendary",
              historicalPeriod: "Ancient-Present",
              significance: "10,000+ karez in Iraqi Kurdistan — many destroyed by Anfal campaign as genocide tool",
              yearBCE: 2000,
              category: "aqueduct"
            },
            {
              id: "kurdish-mountain-springs",
              name: "Kurdish Mountain Spring Management",
              description: "Mountain water management across four modern nations",
              rarity: "epic",
              historicalPeriod: "Ancient-Present",
              significance: "Mountain water management across four modern nations",
              yearBCE: 2000,
              category: "aqueduct"
            }
          ]
        }
      ]
    },
    {
      id: "space-water",
      name: "Space Water Engineering",
      description: "The most extreme water recycling — in orbit and beyond.",
      position: [0, 0, -12],
      color: "#000080",
      era: "modern",
      dateRange: "1998 - Present",
      locations: [
        {
          id: "space-sites",
          name: "Space Water Systems",
          description: "Space-based water recycling and prospecting systems",
          historicalContext: "Water engineering for human survival beyond Earth",
          coordinates: { lat: 0.0, lng: 0.0 },
          artifacts: [
            {
              id: "iss-water-recycling",
              name: "ISS Water Recycling System",
              description: "Most extreme water recycling ever built — 93% recovery in space",
              rarity: "legendary",
              historicalPeriod: "1998-Present",
              significance: "Most extreme water recycling ever built — 93% recovery in space",
              yearBCE: -1998,
              category: "sanitation"
            },
            {
              id: "lunar-mars-water",
              name: "Lunar/Mars Water Prospecting",
              description: "Water engineering for human civilization beyond Earth",
              rarity: "epic",
              historicalPeriod: "2009-Present",
              significance: "Water engineering for human civilization beyond Earth",
              yearBCE: -2009,
              category: "water-lifting"
            }
          ]
        }
      ]
    },
    {
      id: "berber-amazigh-expanded",
      name: "Berber/Amazigh Water Heritage",
      description: "UNESCO foggaras, jessour terraces, and 800-year-old underground granaries.",
      position: [2, 0, -3],
      color: "#B8860B",
      era: "ancient",
      dateRange: "Ancient - Present",
      locations: [
        {
          id: "north-africa-berber",
          name: "North African Berber Sites",
          description: "Berber/Amazigh water heritage sites across North Africa",
          historicalContext: "Ancient water traditions of the Amazigh peoples",
          coordinates: { lat: 32.5, lng: 3.6 },
          artifacts: [
            {
              id: "algerian-foggara",
              name: "Algerian Foggara Systems",
              description: "UNESCO — most complete traditional water community in North Africa — 900+ foggaras",
              rarity: "legendary",
              historicalPeriod: "Ancient-Present",
              significance: "UNESCO — most complete traditional water community in North Africa — 900+ foggaras",
              yearBCE: 1000,
              category: "aqueduct"
            },
            {
              id: "tunisian-jessour",
              name: "Tunisian Jessour System",
              description: "Largest dryland terrace system in North Africa — 400,000 hectares",
              rarity: "epic",
              historicalPeriod: "Ancient-Present",
              significance: "Largest dryland terrace system in North Africa — 400,000 hectares",
              yearBCE: 1000,
              category: "irrigation"
            },
            {
              id: "amazigh-underground-granary",
              name: "Amazigh Underground Granary Water",
              description: "Water management for food security across centuries — 800+ year operation",
              rarity: "rare",
              historicalPeriod: "Ancient-Present",
              significance: "Water management for food security across centuries — 800+ year operation",
              yearBCE: 1000,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "modern-mega-projects",
      name: "Modern Water Mega-Projects & Crises",
      description: "From Belo Monte to Flint — the triumphs and failures of modern water engineering.",
      position: [0, 0, -8],
      color: "#808080",
      era: "modern",
      dateRange: "1987 - Present",
      locations: [
        {
          id: "mega-dams",
          name: "Modern Mega-Dam Projects",
          description: "Modern mega-dam projects around the world",
          historicalContext: "The largest and most controversial modern dam projects",
          coordinates: { lat: -3.5, lng: -51.8 },
          artifacts: [
            {
              id: "belo-monte-dam",
              name: "Belo Monte Dam",
              description: "Third-largest dam in the world — most controversial in the Amazon",
              rarity: "legendary",
              historicalPeriod: "2011-2019",
              significance: "Third-largest dam in the world — most controversial in the Amazon",
              yearBCE: -2011,
              category: "dam"
            },
            {
              id: "sardar-sarovar-dam",
              name: "Sardar Sarovar Dam (Narmada)",
              description: "India's most fought-over dam — decades of protest",
              rarity: "legendary",
              historicalPeriod: "1987-2017",
              significance: "India's most fought-over dam — decades of protest",
              yearBCE: -1987,
              category: "dam"
            },
            {
              id: "mekong-dam-cascade",
              name: "Mekong Dam Cascade",
              description: "Most geopolitically contested river system — affecting 60 million people",
              rarity: "legendary",
              historicalPeriod: "1990s-Present",
              significance: "Most geopolitically contested river system — affecting 60 million people",
              yearBCE: -1990,
              category: "dam"
            }
          ]
        },
        {
          id: "water-crises",
          name: "Modern Water Crises",
          description: "Modern water governance failures and infrastructure challenges",
          historicalContext: "Water crises that exposed failures in modern water management",
          coordinates: { lat: 43.0, lng: -83.7 },
          artifacts: [
            {
              id: "flint-water-crisis",
              name: "Flint Michigan Water Crisis",
              description: "Most infamous water governance failure in modern America — environmental racism",
              rarity: "legendary",
              historicalPeriod: "2014-2019",
              significance: "Most infamous water governance failure in modern America — environmental racism",
              yearBCE: -2014,
              category: "sanitation"
            },
            {
              id: "cape-town-day-zero",
              name: "Cape Town Day Zero",
              description: "Near-complete urban water failure in a major city",
              rarity: "epic",
              historicalPeriod: "2018",
              significance: "Near-complete urban water failure in a major city",
              yearBCE: -2018,
              category: "sanitation"
            },
            {
              id: "thames-tideway-tunnel",
              name: "Thames Tideway Tunnel",
              description: "Largest water infrastructure project in London since Victorian era — 25 km super sewer",
              rarity: "epic",
              historicalPeriod: "2016-2025",
              significance: "Largest water infrastructure project in London since Victorian era — 25 km super sewer",
              yearBCE: -2016,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "ainu-water",
      name: "Ainu Water Traditions",
      description: "Indigenous salmon management in northern Japan — the river IS the territory.",
      position: [22, 0, -6],
      color: "#8B0000",
      era: "ancient",
      dateRange: "Ancient - Present",
      locations: [
        {
          id: "ainu-sites",
          name: "Ainu Hokkaido Sites",
          description: "Ainu water and salmon management sites in Hokkaido",
          historicalContext: "Indigenous salmon management distinct from Japanese traditions",
          coordinates: { lat: 43.0, lng: 143.0 },
          artifacts: [
            {
              id: "ainu-salmon-management",
              name: "Ainu Salmon River Management",
              description: "Indigenous salmon management distinct from Japanese — river as territory",
              rarity: "epic",
              historicalPeriod: "Ancient-Present",
              significance: "Indigenous salmon management distinct from Japanese — river as territory",
              yearBCE: 2000,
              category: "dam"
            },
            {
              id: "ainu-marep",
              name: "Ainu Marep (Fish Trap)",
              description: "Ainu river engineering for the most important food source",
              rarity: "rare",
              historicalPeriod: "Ancient-Present",
              significance: "Ainu river engineering for the most important food source",
              yearBCE: 2000,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "san-bushmen",
      name: "San/Bushmen Water Knowledge",
      description: "20,000+ years of desert water technology — the most minimalist and elegant on Earth.",
      position: [4, 0, 7],
      color: "#D2B48C",
      era: "ancient",
      dateRange: "20,000+ years ago - Present",
      locations: [
        {
          id: "kalahari-sites",
          name: "Kalahari Desert Sites",
          description: "San/Bushmen water technology sites in the Kalahari",
          historicalContext: "The oldest continuous water knowledge tradition on Earth",
          coordinates: { lat: -22.0, lng: 23.0 },
          artifacts: [
            {
              id: "san-sip-well",
              name: "San Sip Well Technology",
              description: "Most minimalist water extraction technology ever devised",
              rarity: "legendary",
              historicalPeriod: "20,000+ years",
              significance: "Most minimalist water extraction technology ever devised",
              yearBCE: 20000,
              category: "water-lifting"
            },
            {
              id: "san-tsamma-melon",
              name: "San Tsamma Melon Water",
              description: "Plant-based water survival in the world's second-largest desert",
              rarity: "epic",
              historicalPeriod: "20,000+ years",
              significance: "Plant-based water survival in the world's second-largest desert",
              yearBCE: 20000,
              category: "aqueduct"
            },
            {
              id: "san-bi-root",
              name: "San Bi! Root Water",
              description: "Emergency water extraction from underground plant storage",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Emergency water extraction from underground plant storage",
              yearBCE: 10000,
              category: "water-lifting"
            },
            {
              id: "san-eggshell-cache",
              name: "San Ostrich Eggshell Water Cache Network",
              description: "Underground water reserve network across a desert — oldest logistics system",
              rarity: "legendary",
              historicalPeriod: "20,000+ years",
              significance: "Underground water reserve network across a desert — oldest logistics system",
              yearBCE: 20000,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "inupiat-north-alaska",
      name: "Iñupiat (North Alaska Coast)",
      description: "Sea ice navigation, whale hunting, and permafrost engineering on the Arctic Ocean.",
      position: [-22, 0, -11],
      color: "#4682B4",
      era: "ancient",
      dateRange: "2000 BCE - Present",
      locations: [
        {
          id: "north-slope",
          name: "North Slope/Utqiaġvik",
          description: "Iñupiat homeland on the Arctic Ocean coast",
          historicalContext: "Center of Arctic sea ice navigation and whale hunting culture",
          coordinates: { lat: 71.3, lng: -156.8 },
          artifacts: [
            {
              id: "inupiat-sea-ice-nav",
              name: "Iñupiat Sea Ice Water Navigation",
              description: "Iñupiat Sea Ice Water Navigation",
              rarity: "legendary",
              historicalPeriod: "2000 BCE onwards",
              significance: "Most complex ice-water navigation knowledge on Earth",
              yearBCE: 2000,
              category: "canal"
            },
            {
              id: "inupiat-umiak",
              name: "Iñupiat Umiak (Large Skin Boat)",
              description: "Iñupiat Umiak (Large Skin Boat)",
              rarity: "epic",
              historicalPeriod: "2000 BCE onwards",
              significance: "Large-scale Arctic maritime vessel for whale hunting",
              yearBCE: 2000,
              category: "canal"
            },
            {
              id: "inupiat-whale-hunting",
              name: "Iñupiat Whale Hunting Water Knowledge",
              description: "Iñupiat Whale Hunting Water Knowledge",
              rarity: "legendary",
              historicalPeriod: "2000 BCE onwards",
              significance: "Reading ice-water conditions for the most consequential hunt in the Arctic",
              yearBCE: 2000,
              category: "dam"
            },
            {
              id: "inupiat-ice-cellar",
              name: "Iñupiat Ice Cellar (Siġḷuaq)",
              description: "Iñupiat Ice Cellar (Siġḷuaq)",
              rarity: "epic",
              historicalPeriod: "Ancient-Present",
              significance: "Permafrost food-water preservation now threatened by climate change",
              yearBCE: 2000,
              category: "sanitation"
            },
            {
              id: "inupiat-freshwater-ice",
              name: "Iñupiat Freshwater Ice Selection",
              description: "Iñupiat Freshwater Ice Selection",
              rarity: "rare",
              historicalPeriod: "Ancient-Present",
              significance: "Ice literacy — reading ice properties for water safety",
              yearBCE: 2000,
              category: "water-lifting"
            },
            {
              id: "barrow-whaling-camp",
              name: "Barrow/Utqiaġvik Whaling Camp Water",
              description: "Barrow/Utqiaġvik Whaling Camp Water",
              rarity: "rare",
              historicalPeriod: "Ancient-Present",
              significance: "Water logistics for camps on floating sea ice",
              yearBCE: 2000,
              category: "sanitation"
            },
            {
              id: "inupiat-coastal-erosion",
              name: "Iñupiat Coastal Erosion Response",
              description: "Iñupiat Coastal Erosion Response",
              rarity: "epic",
              historicalPeriod: "Ancient-Present",
              significance: "Indigenous coastal water management overwhelmed by climate change",
              yearBCE: 2000,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "yupik-western-alaska",
      name: "Yup'ik (Western Alaska)",
      description: "Life on one of the world's largest river deltas — 129,500 km² of waterscape.",
      position: [-23, 0, -10],
      color: "#2E8B57",
      era: "ancient",
      dateRange: "2000 BCE - Present",
      locations: [
        {
          id: "yk-delta",
          name: "Yukon-Kuskokwim Delta",
          description: "One of the world's largest river deltas",
          historicalContext: "Yup'ik homeland on the vast Yukon-Kuskokwim Delta waterscape",
          coordinates: { lat: 61.5, lng: -163.0 },
          artifacts: [
            {
              id: "yupik-delta-water-life",
              name: "Yup'ik Yukon-Kuskokwim Delta Water Life",
              description: "Yup'ik Yukon-Kuskokwim Delta Water Life",
              rarity: "legendary",
              historicalPeriod: "2000 BCE onwards",
              significance: "Life on one of the world's largest river deltas — 38,000 people in 56 villages",
              yearBCE: 2000,
              category: "canal"
            },
            {
              id: "yupik-fish-camp",
              name: "Yup'ik Fish Camp Water Management",
              description: "Yup'ik Fish Camp Water Management",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Salmon processing water management for winter food supply",
              yearBCE: 1000,
              category: "dam"
            },
            {
              id: "yupik-qasgiq",
              name: "Yup'ik Qasgiq Steam Bath",
              description: "Yup'ik Qasgiq Steam Bath",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Steam-water engineering as the center of community life",
              yearBCE: 1000,
              category: "fountain"
            },
            {
              id: "yupik-tundra-nav",
              name: "Yup'ik Tundra Water Navigation",
              description: "Yup'ik Tundra Water Navigation",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Navigating a landscape that is half water",
              yearBCE: 1000,
              category: "canal"
            },
            {
              id: "yupik-permafrost",
              name: "Yup'ik Permafrost Water Understanding",
              description: "Yup'ik Permafrost Water Understanding",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Indigenous permafrost hydrology — now essential for climate science",
              yearBCE: 1000,
              category: "aqueduct"
            }
          ]
        }
      ]
    },
    {
      id: "aleut-unangan",
      name: "Aleut/Unangan (Aleutian Islands)",
      description: "The most hydrodynamically advanced kayak ever built — for the most dangerous ocean.",
      position: [-24, 0, -9],
      color: "#708090",
      era: "ancient",
      dateRange: "9000 BCE - Present",
      locations: [
        {
          id: "aleutian-islands",
          name: "Aleutian Islands",
          description: "Volcanic island chain in the North Pacific",
          historicalContext: "Unangan homeland on one of the most dangerous maritime environments on Earth",
          coordinates: { lat: 52.0, lng: -174.0 },
          artifacts: [
            {
              id: "unangan-baidarka",
              name: "Unangan Baidarka (Kayak)",
              description: "Unangan Baidarka (Kayak)",
              rarity: "legendary",
              historicalPeriod: "4000+ BCE",
              significance: "Most hydrodynamically advanced kayak design ever created",
              yearBCE: 4000,
              category: "canal"
            },
            {
              id: "unangan-kamleika",
              name: "Unangan Gut-Skin Waterproofing (Kamleika)",
              description: "Unangan Gut-Skin Waterproofing (Kamleika)",
              rarity: "legendary",
              historicalPeriod: "Ancient-Present",
              significance: "Most effective pre-modern waterproof clothing — survival technology",
              yearBCE: 4000,
              category: "sanitation"
            },
            {
              id: "unangan-volcanic-water",
              name: "Unangan Volcanic Island Water",
              description: "Unangan Volcanic Island Water",
              rarity: "epic",
              historicalPeriod: "9000 BCE onwards",
              significance: "Water management on treeless volcanic islands in extreme maritime climate",
              yearBCE: 9000,
              category: "aqueduct"
            },
            {
              id: "unangan-tidal",
              name: "Unangan Tidal Knowledge",
              description: "Unangan Tidal Knowledge",
              rarity: "epic",
              historicalPeriod: "Ancient-Present",
              significance: "Tidal navigation in one of the most dangerous maritime environments",
              yearBCE: 4000,
              category: "canal"
            },
            {
              id: "unangan-kelp-forest",
              name: "Unangan Kelp Forest Water Knowledge",
              description: "Unangan Kelp Forest Water Knowledge",
              rarity: "rare",
              historicalPeriod: "Ancient-Present",
              significance: "Using kelp forests as water condition indicators",
              yearBCE: 4000,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "athabascan-interior",
      name: "Athabascan/Dene (Interior Alaska)",
      description: "River-organized civilization — 12,000+ years on the Yukon, Tanana, and Copper rivers.",
      position: [-22, 0, -10],
      color: "#8B4513",
      era: "ancient",
      dateRange: "12,000 BCE - Present",
      locations: [
        {
          id: "interior-alaska",
          name: "Interior Alaska Rivers",
          description: "Major river systems of interior Alaska",
          historicalContext: "Athabascan homeland organized around the Yukon, Tanana, and Copper rivers",
          coordinates: { lat: 64.0, lng: -149.0 },
          artifacts: [
            {
              id: "athabascan-river-life",
              name: "Athabascan River Life",
              description: "Athabascan River Life",
              rarity: "epic",
              historicalPeriod: "12,000+ BCE",
              significance: "River-organized civilization across interior Alaska",
              yearBCE: 12000,
              category: "canal"
            },
            {
              id: "athabascan-fish-wheel",
              name: "Athabascan Fish Wheel",
              description: "Athabascan Fish Wheel",
              rarity: "rare",
              historicalPeriod: "1900s CE (adopted)",
              significance: "Adapted technology becoming essential to indigenous subsistence",
              yearBCE: -1900,
              category: "dam"
            },
            {
              id: "athabascan-ice-bridge",
              name: "Athabascan Ice Bridge Navigation",
              description: "Athabascan Ice Bridge Navigation",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Ice-road navigation on major interior rivers",
              yearBCE: 5000,
              category: "canal"
            },
            {
              id: "gwich-in-caribou-water",
              name: "Gwich'in Caribou-Water Knowledge",
              description: "Gwich'in Caribou-Water Knowledge",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Water knowledge for largest land animal migration in North America",
              yearBCE: 5000,
              category: "dam"
            },
            {
              id: "athabascan-birchbark",
              name: "Athabascan Birchbark Canoe (Interior Design)",
              description: "Athabascan Birchbark Canoe (Interior Design)",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "River-specific canoe design — each river requires different engineering",
              yearBCE: 3000,
              category: "canal"
            },
            {
              id: "denaina-hybrid-water",
              name: "Dena'ina Coastal-Interior Hybrid Water",
              description: "Dena'ina Coastal-Interior Hybrid Water",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Only Athabascan people managing both ocean and river water",
              yearBCE: 3000,
              category: "canal"
            }
          ]
        }
      ]
    },
    {
      id: "tlingit-se-alaska",
      name: "Tlingit (Southeast Alaska)",
      description: "Water ownership as the foundation of social hierarchy — in one of North America's wettest environments.",
      position: [-21, 0, -9],
      color: "#006400",
      era: "ancient",
      dateRange: "5000 BCE - Present",
      locations: [
        {
          id: "se-alaska",
          name: "Southeast Alaska",
          description: "Temperate rainforest coast of Southeast Alaska",
          historicalContext: "Tlingit homeland in one of the wettest environments in North America",
          coordinates: { lat: 58.3, lng: -134.4 },
          artifacts: [
            {
              id: "tlingit-rainforest-water",
              name: "Tlingit Rainforest Water Management",
              description: "Tlingit Rainforest Water Management",
              rarity: "epic",
              historicalPeriod: "5000 BCE onwards",
              significance: "Water management in 3,000-5,000 mm rainfall — among wettest in North America",
              yearBCE: 5000,
              category: "sanitation"
            },
            {
              id: "tlingit-salmon-ownership",
              name: "Tlingit Salmon Stream Ownership",
              description: "Tlingit Salmon Stream Ownership",
              rarity: "legendary",
              historicalPeriod: "Traditional",
              significance: "Water ownership as the foundation of social hierarchy",
              yearBCE: 3000,
              category: "dam"
            },
            {
              id: "tlingit-fish-trap",
              name: "Tlingit Fish Trap (Stone and Wood)",
              description: "Tlingit Fish Trap (Stone and Wood)",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Sustainable fishery with built-in escapement",
              yearBCE: 3000,
              category: "dam"
            },
            {
              id: "tlingit-glacial-nav",
              name: "Tlingit Glacial River Navigation",
              description: "Tlingit Glacial River Navigation",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Glacial river navigation later adopted by Gold Rush miners",
              yearBCE: 3000,
              category: "canal"
            },
            {
              id: "tlingit-canoe",
              name: "Tlingit Canoe Construction",
              description: "Tlingit Canoe Construction",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Using water (steam) to build water vehicles (canoes)",
              yearBCE: 3000,
              category: "canal"
            },
            {
              id: "tlingit-hot-springs",
              name: "Tlingit Hot Spring Management",
              description: "Tlingit Hot Spring Management",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Sacred hot spring management in the temperate rainforest",
              yearBCE: 3000,
              category: "fountain"
            }
          ]
        }
      ]
    },
    {
      id: "haida-gwaii",
      name: "Haida (Haida Gwaii/SE Alaska)",
      description: "Largest indigenous watercraft in North America — 20 m canoes for 1,000+ km ocean voyages.",
      position: [-21, 0, -8],
      color: "#191970",
      era: "ancient",
      dateRange: "5000 BCE - Present",
      locations: [
        {
          id: "haida-gwaii-sites",
          name: "Haida Gwaii",
          description: "Haida Gwaii archipelago off the coast of British Columbia",
          historicalContext: "Haida homeland known for monumental art and ocean-going canoes",
          coordinates: { lat: 53.2, lng: -132.0 },
          artifacts: [
            {
              id: "haida-ocean-canoe",
              name: "Haida Ocean-Going Canoe",
              description: "Haida Ocean-Going Canoe",
              rarity: "legendary",
              historicalPeriod: "Traditional",
              significance: "Largest indigenous watercraft in North America — up to 20 m",
              yearBCE: 3000,
              category: "canal"
            },
            {
              id: "haida-rainwater",
              name: "Haida Gwaii Rainwater Collection",
              description: "Haida Gwaii Rainwater Collection",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Rainwater harvesting using naturally antimicrobial cedar",
              yearBCE: 3000,
              category: "dam"
            },
            {
              id: "haida-intertidal",
              name: "Haida Intertidal Management",
              description: "Haida Intertidal Management",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Intertidal zone as managed landscape — farming the tide zone",
              yearBCE: 3000,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "canadian-inuit-expanded",
      name: "Canadian Inuit (Expanded)",
      description: "Ice-road navigation across the largest archipelago on Earth — the iglu as water-phase engineering.",
      position: [-16, 0, -11],
      color: "#87CEEB",
      era: "ancient",
      dateRange: "4000 BCE - Present",
      locations: [
        {
          id: "canadian-arctic",
          name: "Canadian Arctic Archipelago",
          description: "Vast Arctic archipelago of northern Canada",
          historicalContext: "Inuit homeland across the largest archipelago on Earth",
          coordinates: { lat: 69.0, lng: -85.0 },
          artifacts: [
            {
              id: "inuit-qamutiik",
              name: "Inuit Qamutiik Ice-Road Travel",
              description: "Inuit Qamutiik Ice-Road Travel",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Ice-road navigation across the largest archipelago on Earth",
              yearBCE: 4000,
              category: "canal"
            },
            {
              id: "inuit-iglu-water",
              name: "Inuit Iglu Water-Phase Engineering",
              description: "Inuit Iglu Water-Phase Engineering",
              rarity: "legendary",
              historicalPeriod: "Traditional",
              significance: "Converting snow to ice using thermal engineering — most elegant water-phase architecture",
              yearBCE: 4000,
              category: "sanitation"
            },
            {
              id: "inuit-saputit",
              name: "Inuit Saputit (Stone Fish Weir)",
              description: "Inuit Saputit (Stone Fish Weir)",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Fish weir for the most extreme seasonal water variation on Earth",
              yearBCE: 4000,
              category: "dam"
            },
            {
              id: "inuit-polynya",
              name: "Inuit Polynya Knowledge",
              description: "Inuit Polynya Knowledge",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Knowledge of ice-free water in a frozen ocean — critical hunting infrastructure",
              yearBCE: 4000,
              category: "dam"
            },
            {
              id: "nunavut-water-challenge",
              name: "Nunavut Community Water Challenges",
              description: "Nunavut Community Water Challenges",
              rarity: "rare",
              historicalPeriod: "Modern",
              significance: "Most extreme municipal water delivery in the developed world",
              yearBCE: -1950,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "greenlandic-inuit",
      name: "Greenlandic Inuit",
      description: "30+ kayak rolling techniques and harvesting ancient freshwater from icebergs.",
      position: [-8, 0, -11],
      color: "#ADD8E6",
      era: "ancient",
      dateRange: "2500 BCE - Present",
      locations: [
        {
          id: "greenland-sites",
          name: "Greenland",
          description: "World's largest island — Greenlandic Inuit homeland",
          historicalContext: "Inuit culture adapted to the world's largest island with ice sheet and fjords",
          coordinates: { lat: 64.2, lng: -51.7 },
          artifacts: [
            {
              id: "greenlandic-qajaq",
              name: "Greenlandic Kayak (Qajaq) Mastery",
              description: "Greenlandic Kayak (Qajaq) Mastery",
              rarity: "legendary",
              historicalPeriod: "Traditional",
              significance: "Most refined kayak design and rolling techniques in the world",
              yearBCE: 2500,
              category: "canal"
            },
            {
              id: "greenlandic-iceberg",
              name: "Greenlandic Iceberg Freshwater",
              description: "Greenlandic Iceberg Freshwater",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Harvesting ancient freshwater from icebergs",
              yearBCE: 2500,
              category: "water-lifting"
            },
            {
              id: "greenlandic-fjord-nav",
              name: "Greenlandic Fjord Navigation",
              description: "Greenlandic Fjord Navigation",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Fjord navigation in the world's largest island — Scoresby Sund 350 km",
              yearBCE: 2500,
              category: "canal"
            },
            {
              id: "greenlandic-climate",
              name: "Greenlandic Climate Adaptation",
              description: "Greenlandic Climate Adaptation",
              rarity: "rare",
              historicalPeriod: "Modern",
              significance: "Front line of climate-change water adaptation",
              yearBCE: -2000,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "sami-people",
      name: "Sami People (Scandinavia)",
      description: "Europe's last nomadic water-dependent migration — and the catalyst for indigenous rights.",
      position: [3, 0, -9],
      color: "#0000CD",
      era: "ancient",
      dateRange: "4000 BCE - Present",
      locations: [
        {
          id: "sami-territory",
          name: "Sami Territory (Sápmi)",
          description: "Sami homeland across northern Scandinavia",
          historicalContext: "Europe's indigenous Arctic people with water-dependent reindeer migration",
          coordinates: { lat: 68.5, lng: 22.0 },
          artifacts: [
            {
              id: "sami-reindeer-water",
              name: "Sami Reindeer-Water Migration",
              description: "Sami Reindeer-Water Migration",
              rarity: "legendary",
              historicalPeriod: "4000 BCE onwards",
              significance: "Europe's last nomadic water-dependent migration",
              yearBCE: 4000,
              category: "irrigation"
            },
            {
              id: "sami-river-fishing",
              name: "Sami River Fishing (Jokfiske)",
              description: "Sami River Fishing (Jokfiske)",
              rarity: "epic",
              historicalPeriod: "Traditional",
              significance: "Indigenous management of Europe's most productive Arctic salmon rivers",
              yearBCE: 3000,
              category: "dam"
            },
            {
              id: "sami-lavvu",
              name: "Sami Lavvu Water Design",
              description: "Sami Lavvu Water Design",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Portable shelter water engineering for Europe's most extreme weather",
              yearBCE: 3000,
              category: "sanitation"
            },
            {
              id: "sami-spring-ceremony",
              name: "Sami Spring Water Ceremony",
              description: "Sami Spring Water Ceremony",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Sacred water tradition in Europe's far north",
              yearBCE: 3000,
              category: "fountain"
            },
            {
              id: "sami-lake-ice-fishing",
              name: "Sami Lake Ice Fishing",
              description: "Sami Lake Ice Fishing",
              rarity: "rare",
              historicalPeriod: "Traditional",
              significance: "Fishing through extreme ice in polar darkness",
              yearBCE: 3000,
              category: "dam"
            },
            {
              id: "sami-hydropower-resistance",
              name: "Sami Hydropower Resistance",
              description: "Sami Hydropower Resistance",
              rarity: "epic",
              historicalPeriod: "1970s-Present",
              significance: "Water rights as catalyst for indigenous political recognition in Europe",
              yearBCE: -1970,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "modern-arctic-engineering",
      name: "Modern Alaska & Arctic Engineering",
      description: "From the Trans-Alaska Pipeline to the first climate refugee relocation in America.",
      position: [-22, 0, -12],
      color: "#696969",
      era: "modern",
      dateRange: "1974 - Present",
      locations: [
        {
          id: "alaska-engineering",
          name: "Alaska Engineering Projects",
          description: "Major modern engineering projects in Alaska",
          historicalContext: "Modern water engineering challenges in Arctic Alaska",
          coordinates: { lat: 64.0, lng: -149.0 },
          artifacts: [
            {
              id: "trans-alaska-pipeline",
              name: "Trans-Alaska Pipeline Water Engineering",
              description: "Trans-Alaska Pipeline Water Engineering",
              rarity: "legendary",
              historicalPeriod: "1974-1977",
              significance: "Largest pipeline in North America — water the primary engineering challenge",
              yearBCE: -1974,
              category: "aqueduct"
            },
            {
              id: "alaska-rural-water",
              name: "Alaska Rural Water/Sanitation Crisis",
              description: "Alaska Rural Water/Sanitation Crisis",
              rarity: "legendary",
              historicalPeriod: "Present",
              significance: "Most severe water infrastructure crisis in the developed world",
              yearBCE: -1970,
              category: "sanitation"
            },
            {
              id: "barrow-utilidor",
              name: "Barrow Utilidor System",
              description: "Barrow Utilidor System",
              rarity: "epic",
              historicalPeriod: "1950s onwards",
              significance: "Most expensive water delivery infrastructure per capita in the US",
              yearBCE: -1950,
              category: "aqueduct"
            },
            {
              id: "exxon-valdez",
              name: "Exxon Valdez Oil Spill Water Response",
              description: "Exxon Valdez Oil Spill Water Response",
              rarity: "legendary",
              historicalPeriod: "1989",
              significance: "Most consequential water pollution event in Arctic history",
              yearBCE: -1989,
              category: "sanitation"
            },
            {
              id: "newtok-relocation",
              name: "Newtok Village Relocation",
              description: "Newtok Village Relocation",
              rarity: "legendary",
              historicalPeriod: "2019-Present",
              significance: "First climate-driven community relocation in the United States",
              yearBCE: -2019,
              category: "sanitation"
            }
          ]
        },
        {
          id: "pan-arctic",
          name: "Pan-Arctic Challenges",
          description: "Pan-Arctic environmental and engineering challenges",
          historicalContext: "Climate change impacts across the entire Arctic region",
          coordinates: { lat: 75.0, lng: 0.0 },
          artifacts: [
            {
              id: "permafrost-thaw",
              name: "Permafrost Thaw Water Challenges",
              description: "Permafrost Thaw Water Challenges",
              rarity: "epic",
              historicalPeriod: "Present",
              significance: "Climate change creating water conditions unprecedented in human Arctic history",
              yearBCE: -2000,
              category: "sanitation"
            },
            {
              id: "arctic-sea-route",
              name: "Arctic Sea Route Navigation",
              description: "Arctic Sea Route Navigation",
              rarity: "epic",
              historicalPeriod: "2007-Present",
              significance: "Climate change opening new ocean navigation routes",
              yearBCE: -2007,
              category: "canal"
            },
            {
              id: "svalbard-seed-vault",
              name: "Svalbard Seed Vault Water Protection",
              description: "Svalbard Seed Vault Water Protection",
              rarity: "epic",
              historicalPeriod: "2008",
              significance: "Climate change threatening the world's food security backup — with water",
              yearBCE: -2008,
              category: "dam"
            }
          ]
        }
      ]
    },
    {
      id: "fertile-crescent-agriculture",
      name: "Fertile Crescent Agricultural Water",
      description: "The hidden water inventions of cereal farming — from 23,000 BCE grain-water observation to the first irrigation canal.",
      position: [6, 0, -4],
      color: "#DAA520",
      era: "ancient",
      dateRange: "23,000-6,000 BCE",
      locations: [
        {
          id: "ohalo-natufian",
          name: "Ohalo II & Natufian Sites",
          description: "Earliest cereal harvesting and the birth of agricultural water knowledge",
          historicalContext: "Earliest cereal harvesting and the birth of agricultural water knowledge",
          coordinates: { lat: 32.7, lng: 35.6 },
          artifacts: [
            {
              id: "water-grain-connection",
              name: "Recognition of Water-Grain Connection",
              description: "Recognition of Water-Grain Connection",
              rarity: "legendary",
              historicalPeriod: "23,000 BCE",
              significance: "The first agricultural observation — grain concentrates where water is",
              yearBCE: 23000,
              category: "irrigation"
            },
            {
              id: "seasonal-water-monitoring",
              name: "Seasonal Water-Level Monitoring",
              description: "Seasonal Water-Level Monitoring",
              rarity: "epic",
              historicalPeriod: "23,000 BCE",
              significance: "First hydrological monitoring — watching water to predict food",
              yearBCE: 23000,
              category: "irrigation"
            },
            {
              id: "post-harvest-water-avoidance",
              name: "Post-Harvest Rain Avoidance",
              description: "Post-Harvest Rain Avoidance",
              rarity: "epic",
              historicalPeriod: "23,000 BCE",
              significance: "First grain shelter — a roof to keep water off food",
              yearBCE: 23000,
              category: "sanitation"
            },
            {
              id: "flood-recession-planting",
              name: "Flood-Recession Planting",
              description: "Flood-Recession Planting",
              rarity: "legendary",
              historicalPeriod: "12,000 BCE",
              significance: "Planting in moist soil left by receding floodwater — zero infrastructure irrigation",
              yearBCE: 12000,
              category: "irrigation"
            },
            {
              id: "deliberate-seed-water",
              name: "Deliberate Seed Scattering Near Water",
              description: "Deliberate Seed Scattering Near Water",
              rarity: "legendary",
              historicalPeriod: "12,500 BCE",
              significance: "The step between gathering and farming — choosing where water already exists",
              yearBCE: 12500,
              category: "irrigation"
            }
          ]
        },
        {
          id: "ppnb-agriculture",
          name: "Pre-Pottery Neolithic Agricultural Sites",
          description: "First water diversions and grain processing",
          historicalContext: "First water diversions and grain processing",
          coordinates: { lat: 36.0, lng: 39.0 },
          artifacts: [
            {
              id: "first-water-diversion",
              name: "First Water Diversion (Tiny Scale)",
              description: "First Water Diversion (Tiny Scale)",
              rarity: "legendary",
              historicalPeriod: "10,500 BCE",
              significance: "A scratch in the dirt redirecting a trickle of water — ancestor of all irrigation",
              yearBCE: 10500,
              category: "irrigation"
            },
            {
              id: "soil-moisture-assessment",
              name: "Soil Moisture Assessment by Hand",
              description: "Soil Moisture Assessment by Hand",
              rarity: "epic",
              historicalPeriod: "10,500 BCE",
              significance: "Squeezing soil to test moisture — still used by farmers 12,500 years later",
              yearBCE: 10500,
              category: "irrigation"
            },
            {
              id: "first-runoff-capture",
              name: "First Runoff Capture (Berm)",
              description: "First Runoff Capture (Berm)",
              rarity: "legendary",
              historicalPeriod: "10,000 BCE",
              significance: "A line of dirt — ancestor of every dam, levee, and terrace wall ever built",
              yearBCE: 10000,
              category: "dam"
            },
            {
              id: "seed-soaking",
              name: "Seed Soaking Before Planting",
              description: "Seed Soaking Before Planting",
              rarity: "rare",
              historicalPeriod: "10,000 BCE",
              significance: "Pre-soaking seeds in water to accelerate germination",
              yearBCE: 10000,
              category: "irrigation"
            },
            {
              id: "first-grain-drying",
              name: "First Grain Drying Floor",
              description: "First Grain Drying Floor",
              rarity: "epic",
              historicalPeriod: "10,000 BCE",
              significance: "Water removal from grain — grain above 14% moisture rots in storage",
              yearBCE: 10000,
              category: "sanitation"
            },
            {
              id: "sealed-grain-storage",
              name: "First Sealed Grain Storage",
              description: "First Sealed Grain Storage",
              rarity: "epic",
              historicalPeriod: "10,000 BCE",
              significance: "Waterproofing technology for food security — plaster-lined pits",
              yearBCE: 10000,
              category: "sanitation"
            },
            {
              id: "beer-bread-water",
              name: "Beer/Bread Water Processing",
              description: "Beer/Bread Water Processing",
              rarity: "legendary",
              historicalPeriod: "10,000 BCE",
              significance: "Water-grain-yeast chemistry — some argue beer drove grain domestication",
              yearBCE: 10000,
              category: "water-lifting"
            },
            {
              id: "basin-irrigation-proto",
              name: "Basin Irrigation (Proto-form)",
              description: "Basin Irrigation (Proto-form)",
              rarity: "epic",
              historicalPeriod: "8,000 BCE",
              significance: "Field surrounded by earthen walls, flooded, then drained — precursor to Egyptian basins",
              yearBCE: 8000,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "east-asia-rice-water",
      name: "East Asia Rice Water Engineering",
      description: "Every step of rice domestication is a water management step — from wetland reading to paddy construction.",
      position: [18, 0, -3],
      color: "#228B22",
      era: "ancient",
      dateRange: "12,000-1,000 BCE",
      locations: [
        {
          id: "yangtze-early-rice",
          name: "Yangtze Early Rice Sites",
          description: "Where rice farming and water management co-evolved",
          historicalContext: "Where rice farming and water management co-evolved",
          coordinates: { lat: 30.0, lng: 120.0 },
          artifacts: [
            {
              id: "wetland-water-reading",
              name: "Wetland Water-Level Reading for Rice",
              description: "Wetland Water-Level Reading for Rice",
              rarity: "legendary",
              historicalPeriod: "12,000 BCE",
              significance: "Specialized wetland hydrology — knowing optimal depths for wild rice",
              yearBCE: 12000,
              category: "irrigation"
            },
            {
              id: "deliberate-wetland-mod",
              name: "Deliberate Wetland Water Modification",
              description: "Deliberate Wetland Water Modification",
              rarity: "legendary",
              historicalPeriod: "10,000 BCE",
              significance: "Blocking outlets to raise water — first rice farming was managing natural wetlands",
              yearBCE: 10000,
              category: "dam"
            },
            {
              id: "fish-rice-synergy",
              name: "Fish-Rice Water Synergy",
              description: "Fish-Rice Water Synergy",
              rarity: "epic",
              historicalPeriod: "9,000 BCE",
              significance: "Earliest aquaculture-agriculture integration — still practiced as rice-fish farming",
              yearBCE: 9000,
              category: "irrigation"
            },
            {
              id: "first-bunded-field",
              name: "First Bunded Field (Proto-Paddy)",
              description: "First Bunded Field (Proto-Paddy)",
              rarity: "legendary",
              historicalPeriod: "7,000 BCE",
              significance: "Most important water invention in Asian agricultural history — mud ridge around wet ground",
              yearBCE: 7000,
              category: "irrigation"
            },
            {
              id: "water-inlet-outlet",
              name: "Water Inlet/Outlet Control",
              description: "Water Inlet/Outlet Control",
              rarity: "epic",
              historicalPeriod: "7,000 BCE",
              significance: "First water control gate — ancestor of every sluice and valve, adapted for rice",
              yearBCE: 7000,
              category: "irrigation"
            },
            {
              id: "multi-stage-depth",
              name: "Multi-Stage Water Depth Management",
              description: "Multi-Stage Water Depth Management",
              rarity: "epic",
              historicalPeriod: "6,000 BCE",
              significance: "Core skill of rice farming — different depths for germination, tillering, harvest",
              yearBCE: 6000,
              category: "irrigation"
            },
            {
              id: "paddy-puddling",
              name: "Paddy Field Puddling",
              description: "Paddy Field Puddling",
              rarity: "epic",
              historicalPeriod: "5,000 BCE",
              significance: "Creating impermeable clay hardpan — water buffalo may have been domesticated for this",
              yearBCE: 5000,
              category: "irrigation"
            },
            {
              id: "rice-terrace-proto",
              name: "Terrace Construction for Rice",
              description: "Terrace Construction for Rice",
              rarity: "legendary",
              historicalPeriod: "5,000 BCE",
              significance: "Self-contained water management units on hillsides — precursor to Banaue",
              yearBCE: 5000,
              category: "irrigation"
            }
          ]
        },
        {
          id: "rice-processing",
          name: "Rice Water Processing",
          description: "Water as the key to rice food chemistry",
          historicalContext: "Water as the key to rice food chemistry",
          coordinates: { lat: 31.0, lng: 117.0 },
          artifacts: [
            {
              id: "rice-soaking-processing",
              name: "Rice Soaking for Processing",
              description: "Rice Soaking for Processing",
              rarity: "rare",
              historicalPeriod: "7,000 BCE",
              significance: "Different soaking times produce different products — milling, fermentation, flour",
              yearBCE: 7000,
              category: "water-lifting"
            },
            {
              id: "rice-wine-water",
              name: "Rice Wine Fermentation Water Control",
              description: "Rice Wine Fermentation Water Control",
              rarity: "epic",
              historicalPeriod: "5,000 BCE",
              significance: "Precise water ratios in fermentation — food-water chemistry dating to 7,000 BCE (Jiahu)",
              yearBCE: 5000,
              category: "water-lifting"
            },
            {
              id: "monsoon-timing",
              name: "Monsoon Timing Calendar",
              description: "Monsoon Timing Calendar",
              rarity: "epic",
              historicalPeriod: "5,000 BCE",
              significance: "The monsoon calendar IS the rice calendar — early or late monsoon determines survival",
              yearBCE: 5000,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "americas-corn-water",
      name: "Americas Corn/Maize Water Engineering",
      description: "The Three Sisters as biological water engineering — and nixtamalization as water chemistry.",
      position: [-13, 0, 1],
      color: "#FFD700",
      era: "ancient",
      dateRange: "9,000-1,000 BCE",
      locations: [
        {
          id: "balsas-valley",
          name: "Balsas River Valley (Teosinte Origin)",
          description: "Where corn domestication required water innovation",
          historicalContext: "Where corn domestication required water innovation",
          coordinates: { lat: 18.2, lng: -100.5 },
          artifacts: [
            {
              id: "seasonal-streamside-planting",
              name: "Seasonal Streamside Planting",
              description: "Seasonal Streamside Planting",
              rarity: "legendary",
              historicalPeriod: "9,000 BCE",
              significance: "First corn farmers planted teosinte near streams — not irrigation, but deliberate water placement",
              yearBCE: 9000,
              category: "irrigation"
            },
            {
              id: "rainy-season-timing",
              name: "Rainy Season Timing Knowledge",
              description: "Rainy Season Timing Knowledge",
              rarity: "epic",
              historicalPeriod: "9,000 BCE",
              significance: "Corn depends entirely on seasonal rain — knowing when rains begin determines survival",
              yearBCE: 9000,
              category: "irrigation"
            },
            {
              id: "drought-tolerance-selection",
              name: "Drought Tolerance Selection",
              description: "Drought Tolerance Selection",
              rarity: "epic",
              historicalPeriod: "9,000-5,500 BCE",
              significance: "Selecting teosinte-to-corn for deeper roots and water efficiency — genetics as water engineering",
              yearBCE: 9000,
              category: "irrigation"
            },
            {
              id: "soil-mulching",
              name: "Soil Moisture Management by Mulching",
              description: "Soil Moisture Management by Mulching",
              rarity: "epic",
              historicalPeriod: "8,000 BCE",
              significance: "Simplest water conservation — covering soil to reduce evaporation",
              yearBCE: 8000,
              category: "irrigation"
            }
          ]
        },
        {
          id: "milpa-system",
          name: "Milpa/Three Sisters System",
          description: "Agriculture as water engineering through plant selection",
          historicalContext: "Agriculture as water engineering through plant selection",
          coordinates: { lat: 17.0, lng: -96.0 },
          artifacts: [
            {
              id: "three-sisters-water",
              name: "Three Sisters Water Synergy",
              description: "Three Sisters Water Synergy",
              rarity: "legendary",
              historicalPeriod: "3,000 BCE",
              significance: "Squash leaves reduce water loss by 50% — biological water conservation technology",
              yearBCE: 3000,
              category: "irrigation"
            },
            {
              id: "mound-planting-water",
              name: "Mound Planting Water Management",
              description: "Mound Planting Water Management",
              rarity: "epic",
              historicalPeriod: "3,000 BCE",
              significance: "Raised mounds designed for water — channels between capture and direct rainwater",
              yearBCE: 3000,
              category: "irrigation"
            },
            {
              id: "nixtamalization",
              name: "Nixtamalization — Lime-Water Processing",
              description: "Nixtamalization — Lime-Water Processing",
              rarity: "legendary",
              historicalPeriod: "1,500 BCE",
              significance: "Without this water-chemistry process, corn-dependent populations get pellagra",
              yearBCE: 1500,
              category: "water-lifting"
            },
            {
              id: "chicha-corn-beer",
              name: "Corn Beer (Chicha) Water Processing",
              description: "Corn Beer (Chicha) Water Processing",
              rarity: "epic",
              historicalPeriod: "3,000 BCE",
              significance: "Water-corn-saliva chemistry — central to Andean ceremony and politics",
              yearBCE: 3000,
              category: "water-lifting"
            },
            {
              id: "slash-burn-water-cycle",
              name: "Slash-and-Burn Water Cycle Understanding",
              description: "Slash-and-Burn Water Cycle Understanding",
              rarity: "epic",
              historicalPeriod: "5,000 BCE",
              significance: "The entire milpa cycle IS a water cycle — burn, rain, plant, exhaust, rest, repeat",
              yearBCE: 5000,
              category: "irrigation"
            }
          ]
        },
        {
          id: "arid-corn",
          name: "Arid Environment Corn Adaptation",
          description: "When corn reached the desert, water engineering became critical",
          historicalContext: "When corn reached the desert, water engineering became critical",
          coordinates: { lat: 35.0, lng: -110.0 },
          artifacts: [
            {
              id: "deep-planting-moisture",
              name: "Deep Planting for Subsurface Moisture",
              description: "Deep Planting for Subsurface Moisture",
              rarity: "legendary",
              historicalPeriod: "2,000 BCE",
              significance: "Hopi plant corn 25-30 cm deep — engineering the plant to reach water at depth",
              yearBCE: 2000,
              category: "irrigation"
            },
            {
              id: "sand-mulch-conservation",
              name: "Sand Mulch Water Conservation",
              description: "Sand Mulch Water Conservation",
              rarity: "epic",
              historicalPeriod: "2,000 BCE",
              significance: "Sand layer reduces evaporation by 60-80% — still used by Hopi farmers today",
              yearBCE: 2000,
              category: "irrigation"
            },
            {
              id: "ak-chin-farming",
              name: "Ak-Chin (Floodwater) Farming",
              description: "Ak-Chin (Floodwater) Farming",
              rarity: "epic",
              historicalPeriod: "2,000 BCE",
              significance: "Positioning fields where flash flood water naturally concentrates — zero infrastructure",
              yearBCE: 2000,
              category: "irrigation"
            }
          ]
        }
      ]
    },
    {
      id: "sassanid-empire",
      name: "Sassanid Empire",
      description: "Last great pre-Islamic Persian empire (224-651 CE) that perfected qanat technology, built massive canal systems, and created formal water governance. The Shushtar hydraulic system is a UNESCO World Heritage site. Sassanid water engineering traditions directly influenced Islamic Golden Age hydraulics.",
      position: [28, 0, -6],
      color: "#4B0082",
      era: "classical",
      dateRange: "224-651 CE",
      locations: [
        {
          id: "shushtar-iran",
          name: "Shushtar, Iran",
          description: "Greatest Sassanid hydraulic engineering complex",
          historicalContext: "The Karun River at Shushtar was transformed into an integrated system of dams, canals, tunnels, and water mills — UNESCO World Heritage site since 2009",
          coordinates: { lat: 32.0456, lng: 48.8566 },
          artifacts: [
            {
              id: "shushtar-hydraulic",
              name: "Shushtar Historical Hydraulic System",
              description: "Integrated system of dams, canals, tunnels, bridges, and water mills on the Karun River. Band-e Kaisar bridge-dam built with Roman prisoner labor. Called the greatest engineering of the Sassanid period.",
              rarity: "legendary",
              historicalPeriod: "3rd-7th century CE",
              significance: "Greatest engineering achievement of the Sassanid period — UNESCO World Heritage site",
              yearBCE: -300,
              category: "dam",
              unesco: { siteName: "Shushtar Historical Hydraulic System", yearListed: 2009 },
              stillWorking: { age: "1,700 years", status: "Parts of the system still channel water today" }
            },
            {
              id: "sassanid-ab-anbar",
              name: "Sassanid Ab-Anbar (Underground Cistern)",
              description: "Standardized dome-shaped underground cistern with wind tower (badgir) for cooling, stone-lined interior, and stepped access. Design remained the Iranian standard for 1,400 years.",
              rarity: "epic",
              historicalPeriod: "224-651 CE",
              significance: "Design remained the Iranian standard for 1,400 years",
              yearBCE: -400,
              category: "aqueduct",
              stillWorking: { age: "1,600 years", status: "Some ab-anbar cisterns still in use in Iranian cities" }
            },
            {
              id: "gundishapur-water-science",
              name: "Gundishapur Academy Water Science",
              description: "Academy of Gundishapur taught hydraulic engineering alongside medicine and philosophy. Translations of Greek, Indian, and Persian water texts. This tradition directly fed the Islamic Golden Age.",
              rarity: "rare",
              historicalPeriod: "3rd-7th century CE",
              significance: "Hydraulic engineering education that directly fed the Islamic Golden Age",
              yearBCE: -400,
              category: "irrigation"
            },
            {
              id: "sassanid-mirab",
              name: "Sassanid Water Court System (Mirab)",
              description: "Formal legal framework for water rights, qanat ownership, and irrigation disputes. Water judges (mirab) adjudicated conflicts. System adopted by Islamic-era governments across the Middle East.",
              rarity: "rare",
              historicalPeriod: "224-651 CE",
              significance: "Formal water law system adopted across the Islamic world",
              yearBCE: -300,
              category: "irrigation"
            }
          ]
        },
        {
          id: "nahrawan-iraq",
          name: "Nahrawan, Iraq",
          description: "Largest canal system of late antiquity",
          historicalContext: "The Nahrawan Canal east of the Tigris was the backbone of Sassanid agriculture in Mesopotamia, irrigating 6,000 km² until its destruction by Mongols in 1258",
          coordinates: { lat: 33.3, lng: 44.8 },
          artifacts: [
            {
              id: "nahrawan-canal",
              name: "Nahrawan Canal",
              description: "250 km canal east of the Tigris irrigating 6,000 km² of farmland. Largest canal system of late antiquity. Fed by the Diyala River through elaborate headworks. Destroyed during the Mongol invasion of 1258.",
              rarity: "legendary",
              historicalPeriod: "3rd-7th century CE",
              significance: "Largest canal system of late antiquity — 250 km irrigating 6,000 km²",
              yearBCE: -300,
              category: "canal"
            },
            {
              id: "sassanid-band",
              name: "Sassanid Band (Dam) Engineering",
              description: "Systematic dam construction across Iran. Band-e Amir, Band-e Dokhtar, Band-e Mizan—dozens of stone and mortar dams with sluice gates and spillways. Many survived into the Islamic period.",
              rarity: "epic",
              historicalPeriod: "224-651 CE",
              significance: "Dozens of stone dams with sluice gates — many survived into the Islamic period",
              yearBCE: -350,
              category: "dam"
            },
            {
              id: "sassanid-qanat-expansion",
              name: "Sassanid Qanat Expansion",
              description: "Government-supported repair and construction of new qanats across the empire. Dedicated water officials and formal water courts. The network may have exceeded 40,000 systems.",
              rarity: "epic",
              historicalPeriod: "224-651 CE",
              significance: "Government-supported qanat network possibly exceeding 40,000 systems",
              yearBCE: -350,
              category: "aqueduct"
            },
            {
              id: "sassanid-yakhchal",
              name: "Sassanid Ice House (Yakhchal) Expansion",
              description: "Expanded Persian ice-house technology. Dome-shaped structures with walls up to 2 m thick using special mortar (sarooj). Some stored ice year-round at temperatures exceeding 40°C.",
              rarity: "rare",
              historicalPeriod: "224-651 CE",
              significance: "Ice storage year-round at temperatures exceeding 40°C",
              yearBCE: -400,
              category: "sanitation"
            }
          ]
        }
      ]
    },
    {
      id: "nazca",
      name: "Nazca",
      description: "Desert civilization (100 BCE-800 CE) that built over 40 underground aqueducts (puquios) accessing the water table through unique spiral openings. At least 30 puquios still function today — the only system of its kind in the Americas. Some researchers believe the famous Nazca Lines may have mapped underground water sources.",
      position: [-32, 0, 12],
      color: "#8B4513",
      era: "classical",
      dateRange: "100 BCE - 800 CE",
      locations: [
        {
          id: "nazca-valley-peru",
          name: "Nazca Valley, Peru",
          description: "Desert valley with unique underground aqueduct system",
          historicalContext: "In one of the driest deserts on Earth, the Nazca built over 40 underground aqueducts with unique spiral openings — at least 30 still function today",
          coordinates: { lat: -14.836, lng: -75.117 },
          artifacts: [
            {
              id: "nazca-puquios",
              name: "Puquios (Underground Aqueducts)",
              description: "Over 40 underground aqueducts accessing the water table through spiral openings. Stone-lined tunnels connected to surface canals. At least 30 puquios still function today. The only system of its kind in the Americas.",
              rarity: "legendary",
              historicalPeriod: "100 BCE-800 CE",
              significance: "Only system of its kind in the Americas — at least 30 still function today",
              yearBCE: 100,
              category: "aqueduct",
              stillWorking: { age: "2,000 years", status: "At least 30 puquios still function today" }
            },
            {
              id: "puquio-ojo",
              name: "Puquio Ojo (Spiral Eye) Design",
              description: "Spiral or funnel-shaped openings providing access to underground tunnels for maintenance and ventilation. Wind funneled into the spirals helped push water through the system—acting as ancient pumps. Design found nowhere else.",
              rarity: "epic",
              historicalPeriod: "100 BCE-800 CE",
              significance: "Unique spiral design acting as ancient wind-powered pumps",
              yearBCE: 100,
              category: "aqueduct"
            },
            {
              id: "nazca-surface-canals",
              name: "Nazca Surface Canal Network",
              description: "Stone-lined surface canals distributing water from puquio outlets to agricultural fields. Precise gradients maintained over kilometers in one of the driest deserts on Earth.",
              rarity: "rare",
              historicalPeriod: "100 BCE-800 CE",
              significance: "Precise irrigation in one of the driest deserts on Earth",
              yearBCE: 100,
              category: "canal"
            },
            {
              id: "nazca-filtration",
              name: "Nazca Filtration Galleries",
              description: "Subsurface galleries using gravel and sand layers to filter groundwater before entering puquio channels. Ancient water treatment technology ensuring clean water delivery.",
              rarity: "epic",
              historicalPeriod: "100 BCE-800 CE",
              significance: "Ancient water treatment technology using natural filtration",
              yearBCE: 100,
              category: "aqueduct"
            },
            {
              id: "nazca-qocha",
              name: "Nazca Reservoir (Qocha) System",
              description: "Surface reservoirs at puquio outlets storing water for distribution. Stone-lined pools with managed inflow and outflow. Buffering between variable supply and demand.",
              rarity: "rare",
              historicalPeriod: "100 BCE-800 CE",
              significance: "Buffer storage between variable supply and agricultural demand",
              yearBCE: 100,
              category: "dam"
            },
            {
              id: "nazca-lines-hydrology",
              name: "Nazca Lines Hydrological Theory",
              description: "Some researchers believe the Nazca Lines may have marked underground water sources or mapped aquifer boundaries. The world's largest geoglyphs may be a water map.",
              rarity: "epic",
              historicalPeriod: "100 BCE-800 CE",
              significance: "World's largest geoglyphs may be a water map",
              yearBCE: 100,
              category: "irrigation"
            }
          ]
        }
      ]
    },
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