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
              category: "sanitation"
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
            },
            {
              id: "grand-canal-system",
              name: "Grand Canal (大运河)",
              description: "World's longest artificial waterway at 1,776 km connecting Beijing to Hangzhou. Sui Dynasty (605-610 CE) unified earlier sections using 5 million workers. Enabled grain transport from south to feed northern capitals for 1,400 years.",
              rarity: "legendary",
              historicalPeriod: "Sui Dynasty (581-618 CE)",
              significance: "Longest canal in world—still operational, now UNESCO World Heritage",
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
      description: "Aztec and Maya water masters (2000 BCE-1521 CE). Aztec chinampas (floating gardens) fed Tenochtitlan's 200,000 people from artificial islands. Maya built aguadas (reservoirs) and the world's first known pressurized water system at Palenque palace.",
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
              category: "irrigation"
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
              category: "canal"
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
              category: "irrigation"
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
              category: "canal"
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