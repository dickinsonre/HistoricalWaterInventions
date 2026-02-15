export interface CivilizationPeriod {
  start: number;
  end: number;
  era: string;
}

export interface ExpertCivilization {
  id: string;
  name: string;
  region: string;
  period: CivilizationPeriod;
  summary: string;
  waterChallenges: string[];
  inventions: string[];
  keyInsight: string;
  engineerNotes: string;
  modernLegacy: string;
  sources?: string[];
}

export interface CivilizationsDatabase {
  metadata: {
    version: string;
    totalCivilizations: number;
    lastUpdated: string;
    curator: string;
  };
  civilizations: ExpertCivilization[];
}

export const expertCivilizationsDatabase: CivilizationsDatabase = {
  metadata: {
    version: "1.4",
    totalCivilizations: 51,
    lastUpdated: "2026-02-01",
    curator: "Robert Dickinson"
  },
  civilizations: [
    {
      id: "egypt",
      name: "Ancient Egypt",
      region: "Nile Valley, Northeast Africa",
      period: {
        start: -3100,
        end: -30,
        era: "Bronze Age through Classical Antiquity"
      },
      summary: "Egyptian civilization was defined by its relationship with the Nile. The annual flood cycle—predictable yet variable in magnitude—shaped everything from agriculture to religion to government. Egyptian water engineering focused on predicting, measuring, and extending the flood's benefits.",
      waterChallenges: [
        "Unpredictable flood magnitude (too high = destruction, too low = famine)",
        "Desert climate with almost no rainfall",
        "Need to extend irrigation beyond flood reach",
        "Seasonal water availability"
      ],
      inventions: ["shaduf", "nilometer", "basin-irrigation", "sakia"],
      keyInsight: "The Egyptians understood that water management is information management—the Nilometer network was the world's first hydrological monitoring system.",
      engineerNotes: "What strikes me about Egyptian water engineering is its patience. Basin irrigation doesn't fight the flood—it welcomes it, captures it, and releases it slowly. There's no pumping, no pressure, just gravity and planning. They achieved food security for millions using essentially passive systems. Modern engineers, with our pumps and pipes, could learn from their approach of working WITH natural systems.",
      modernLegacy: "Basin irrigation principles appear in modern flood control and wetland management. The monitoring approach (measure → predict → plan) is the foundation of all water resources engineering.",
      sources: [
        "Butzer, K.W. Early Hydraulic Civilization in Egypt",
        "Said, R. The River Nile: Geology, Hydrology and Utilization"
      ]
    },
    {
      id: "mesopotamia",
      name: "Mesopotamia (Sumer, Babylon, Assyria)",
      region: "Tigris-Euphrates Valley (modern Iraq)",
      period: {
        start: -6000,
        end: -539,
        era: "Neolithic through Iron Age"
      },
      summary: "The 'land between the rivers' gave birth to civilization itself, enabled by the world's first large-scale irrigation systems. Mesopotamian engineers faced unpredictable, destructive floods (unlike Egypt's benign inundation) and had to build elaborate canal networks to distribute water.",
      waterChallenges: [
        "Unpredictable, violent floods (Tigris and Euphrates)",
        "Floods arrive during growing season (unlike Egypt)",
        "Flat terrain requiring extensive canal networks",
        "Salinization from irrigation (long-term soil damage)"
      ],
      inventions: ["irrigation-canal", "noria", "shaduf-powered-garden", "water-law"],
      keyInsight: "Mesopotamians invented both large-scale irrigation AND the legal frameworks to manage shared water resources—the Code of Hammurabi includes water rights laws.",
      engineerNotes: "Mesopotamia shows both the power and peril of irrigation. They turned desert into breadbasket, supporting the world's first cities. But they also salinized their soils through thousands of years of irrigation—ancient texts record crop yields declining over centuries. By 2000 BCE, wheat no longer grew in southern Mesopotamia due to salt accumulation. It's a 4,000-year-old lesson about irrigation sustainability that we're still learning in California's Central Valley.",
      modernLegacy: "Water law concepts (riparian rights, allocation systems) trace to Mesopotamian origins. The salinization lesson informs modern drainage requirements for irrigation projects.",
      sources: [
        "Postgate, J.N. Early Mesopotamia: Society and Economy at the Dawn of History",
        "Jacobsen, T. Salinity and Irrigation Agriculture in Antiquity"
      ]
    },
    {
      id: "indus",
      name: "Indus Valley (Harappan) Civilization",
      region: "Indus River Valley (modern Pakistan/Northwest India)",
      period: {
        start: -3300,
        end: -1300,
        era: "Bronze Age"
      },
      summary: "The Indus Valley civilization achieved the world's first urban sanitation systems—every house had a bathroom connected to covered drains. Their water engineering prioritized public health over agriculture, a unique emphasis among ancient civilizations.",
      waterChallenges: [
        "Monsoon climate (seasonal extremes)",
        "Dense urban population requiring sanitation",
        "Water supply for bathing (ritual importance)",
        "Flood management from monsoon rivers"
      ],
      inventions: ["great-bath-mohenjo-daro", "covered-drains", "urban-wells", "household-bathrooms"],
      keyInsight: "The Indus people understood that urban health requires water infrastructure for EVERY household—not just public facilities.",
      engineerNotes: "Mohenjo-daro's drainage system wouldn't be matched until Roman times, 2,000 years later. Every house had a bathroom. Every bathroom connected to a covered drain. Every drain led to a main sewer. This systematic approach—from source to outlet—is exactly how modern sanitary engineering works. Then, around 1300 BCE, the civilization collapsed (possibly climate change, river course shifting, or invasion) and this knowledge vanished. It makes you wonder what we know today that might be lost.",
      modernLegacy: "The principle of universal household connection to sanitation is the foundation of modern public health. WHO guidelines for urban sanitation echo Harappan practice.",
      sources: [
        "Kenoyer, J.M. Ancient Cities of the Indus Valley Civilization",
        "Jansen, M. Mohenjo-daro: City of the Indus Valley"
      ]
    },
    {
      id: "minoan",
      name: "Minoan Crete",
      region: "Crete and Aegean Islands",
      period: {
        start: -2700,
        end: -1450,
        era: "Bronze Age"
      },
      summary: "The Minoans built Europe's first advanced civilization with remarkably sophisticated water and sanitation systems. The Palace of Knossos featured flush toilets, terracotta pipe networks, and rainwater harvesting 1,500 years before Rome.",
      waterChallenges: [
        "Limited freshwater on island environment",
        "Seasonal Mediterranean rainfall",
        "Palace complexes requiring water supply",
        "Waste removal for dense palace populations"
      ],
      inventions: ["minoan-flush-toilet", "minoan-terracotta-pipes", "palace-drainage", "rainwater-cisterns"],
      keyInsight: "The Minoans understood that elite spaces required elite water infrastructure—their palaces had plumbing systems that wouldn't be matched for millennia.",
      engineerNotes: "Walking through the ruins of Knossos, you see terracotta pipes designed with tapered ends for self-sealing connections—the same principle we use today. They had flush toilets connected to covered drains, settling chambers for sediment, and maintenance access points. This knowledge vanished when Minoan civilization collapsed around 1450 BCE. The Greeks who came later didn't have flush toilets. Rome wouldn't match Minoan plumbing for another 1,000 years. Technology doesn't always progress forward.",
      modernLegacy: "Minoan pipe design principles (tapered interlocking sections) appear in modern drainage systems. Their integration of rainwater harvesting with palace design inspires sustainable architecture.",
      sources: [
        "Graham, J.W. The Palaces of Crete",
        "Angelakis, A.N. and Spyridakis, S.V. Minoan Water Engineering"
      ]
    },
    {
      id: "persia",
      name: "Ancient Persia (Achaemenid, Parthian, Sasanian)",
      region: "Iranian Plateau and beyond",
      period: {
        start: -550,
        end: 651,
        era: "Iron Age through Late Antiquity"
      },
      summary: "Persian engineers solved the most difficult water problem: supplying cities and farms on an arid plateau with no rivers. Their invention—the qanat—is one of the most sophisticated pre-industrial technologies ever developed, bringing mountain groundwater across deserts using only gravity.",
      waterChallenges: [
        "Arid climate with minimal rainfall",
        "No major rivers across vast plateau",
        "High evaporation (surface water disappears quickly)",
        "Long distances between water sources and settlements"
      ],
      inventions: ["qanat", "persian-ice-house", "windcatcher", "underground-dam"],
      keyInsight: "By keeping water underground, Persians minimized evaporation losses that would doom surface channels in their climate.",
      engineerNotes: "The qanat is my favorite ancient technology. A 40km tunnel with a 1:1000 gradient means total drop of only 40 meters—requiring accuracy of centimeters per kilometer. They achieved this without theodolites, using only basic surveying tools and generations of accumulated expertise. The profession of 'muqanni' (qanat master) still exists in Iran. I've read accounts of muqannis navigating kilometers underground by touch and sound, able to sense the direction of water flow through rock. It's engineering knowledge encoded in human bodies through centuries of practice.",
      modernLegacy: "Qanats still operate across the arid world. Modern tunnel boring and groundwater engineering owe conceptual debts to Persian pioneers.",
      sources: [
        "Beaumont, P. Qanat Systems in Iran",
        "Lightfoot, D.R. Survey of Qanat Irrigation in Syria"
      ]
    },
    {
      id: "greece",
      name: "Ancient Greece",
      region: "Greek Peninsula, Aegean Islands, Colonies",
      period: {
        start: -800,
        end: -31,
        era: "Archaic through Hellenistic"
      },
      summary: "Greek engineers combined practical water technology with theoretical understanding. They created the first mechanical water-lifting devices documented with engineering principles, and their philosophers began explaining WHY water behaved as it did.",
      waterChallenges: [
        "Mountainous terrain limiting agriculture",
        "Limited freshwater on islands",
        "Need for urban water supply to competing city-states",
        "Ship-based civilization requiring harbors"
      ],
      inventions: ["archimedes-screw", "force-pump", "water-clock", "cistern-ship", "harbor-engineering"],
      keyInsight: "Greeks added theory to practice—Archimedes explained the physics behind water displacement, flotation, and mechanical advantage.",
      engineerNotes: "Alexandria (Greek-ruled Egypt) was the world's first engineering research center. Ctesibius invented the force pump AND wrote about how it worked. Hero of Alexandria documented dozens of water devices, from automata to steam engines. This culture of recording and explaining—not just building—meant their knowledge could be transmitted across time. We know how Roman aqueducts worked because Greeks wrote engineering manuals. The engineer's obligation to document is a Greek gift to all who followed.",
      modernLegacy: "Archimedean physics underpins all hydraulic engineering. The Archimedes screw is still manufactured for pumping and power generation.",
      sources: [
        "Oleson, J.P. Greek and Roman Mechanical Water-Lifting Devices",
        "Wikander, Ö. Handbook of Ancient Water Technology"
      ]
    },
    {
      id: "rome",
      name: "Roman Empire",
      region: "Mediterranean Basin, Western Europe, Middle East",
      period: {
        start: -509,
        end: 476,
        era: "Classical Antiquity"
      },
      summary: "Rome built water infrastructure at unprecedented scale: 11 aqueducts supplied Rome with 1 million cubic meters daily. More importantly, they standardized water systems across their empire—similar aqueducts, sewers, and baths from Britain to Syria.",
      waterChallenges: [
        "Supplying massive urban population (1 million in Rome)",
        "Public health through sanitation and clean water",
        "Standardizing infrastructure across diverse empire",
        "Long-distance water transport"
      ],
      inventions: ["roman-aqueduct", "cloaca-maxima", "roman-concrete", "public-baths", "lead-pipes", "siphon"],
      keyInsight: "Romans understood that water infrastructure builds political legitimacy—clean water and public baths made Roman rule desirable.",
      engineerNotes: "Frontinus, Rome's water commissioner (97 CE), wrote 'De aquaeductu'—the world's first water management manual. He documented every aqueduct, its capacity, who got how much water, and how the system was maintained. I think of him as history's first water utility manager. His problems were my problems: illegal connections, pipe leaks, political pressure to supply favored customers, inadequate maintenance budgets. Reading Frontinus, I feel professional kinship across 2,000 years. Water management changes less than you'd think.",
      modernLegacy: "Roman engineering principles—redundancy, overbuilding, standardization—define modern infrastructure practice. Their concrete is being studied for sustainable cement development.",
      sources: [
        "Frontinus, Sextus Julius. De aquaeductu urbis Romae",
        "Hodge, A.T. Roman Aqueducts and Water Supply"
      ]
    },
    {
      id: "phoenicia",
      name: "Phoenicia",
      region: "Levantine Coast (modern Lebanon, coastal Syria, Israel)",
      period: {
        start: -1500,
        end: -332,
        era: "Bronze Age through Iron Age"
      },
      summary: "The Phoenicians were the Mediterranean's first great maritime traders, and their water engineering focused on harbors and ships. They pioneered artificial harbor construction, underwater building techniques, and water management for coastal cities on a narrow strip of land between mountains and sea.",
      waterChallenges: [
        "Limited land area between mountains and sea",
        "Need for protected harbors in variable weather",
        "Fresh water supply for coastal cities",
        "Water quality in enclosed harbors"
      ],
      inventions: ["phoenician-harbor", "breakwater", "underwater-construction", "tidal-flushing"],
      keyInsight: "Phoenicians understood that harbors—like buildings—require engineering. Natural harbors weren't enough; they carved artificial ones from rock and built jetties to create calm water where none existed.",
      engineerNotes: "The Phoenician cothon (artificial inner harbor) at places like Motya (Sicily) and later Carthage shows remarkable understanding of coastal hydraulics. They carved sluice channels to flush enclosed basins with tidal flow—preventing the stagnation that would otherwise make inner harbors unusable. They also pioneered the cofferdam technique for underwater construction: building a watertight enclosure, pumping it dry, and building foundations on the exposed seabed. This exact technique is used for modern bridge piers and underwater construction.",
      modernLegacy: "Phoenician harbor engineering principles—breakwaters, tidal flushing, artificial basins—are fundamental to modern port design. Their cofferdam technique remains standard practice.",
      sources: [
        "Markoe, G. Phoenicians",
        "Frost, H. Under the Mediterranean: Marine Antiquity"
      ]
    },
    {
      id: "carthage",
      name: "Carthage (Punic Civilization)",
      region: "North Africa (Tunisia), Western Mediterranean colonies",
      period: {
        start: -814,
        end: -146,
        era: "Iron Age"
      },
      summary: "Founded by Phoenician colonists, Carthage became the western Mediterranean's greatest power before Rome. Carthaginian engineers faced a unique challenge: supplying a metropolis of 500,000 in semi-arid North Africa. Their solution—massive cistern networks and sophisticated rainwater harvesting—supported urban life in a region with only 500mm annual rainfall.",
      waterChallenges: [
        "Semi-arid climate (500mm annual rainfall)",
        "Large urban population (500,000+ at peak)",
        "No major rivers near the city",
        "Naval base requiring harbor facilities"
      ],
      inventions: ["carthaginian-cisterns", "rainwater-harvesting-system", "cothon-harbor", "opus-signinum"],
      keyInsight: "Carthage treated every surface as a water catchment. The entire city was a rainwater harvesting machine—roofs, streets, and plazas all directed runoff to cisterns.",
      engineerNotes: "The La Malga cisterns at Carthage held 50,000+ cubic meters—enough to supply the city for months during drought. Every house had its own cistern, and the streets were graded to direct runoff into them. It's the ancient equivalent of modern 'green infrastructure' or 'sponge city' design—using the entire urban landscape for water management. The Carthaginians also invented opus signinum, a waterproof plaster using crushed pottery that outlasted anything the Romans made.",
      modernLegacy: "Carthaginian rainwater harvesting principles are being rediscovered for sustainable urban design. The 'sponge city' concept gaining traction in China echoes Punic practice from 2,500 years ago.",
      sources: [
        "Rakob, F. Die Wasserversorgung des antiken Karthago",
        "Wilson, A. Water supply in ancient Carthage"
      ]
    },
    {
      id: "china",
      name: "Ancient China",
      region: "Yellow River (Huang He), Yangtze River, and beyond",
      period: {
        start: -2000,
        end: 1912,
        era: "Bronze Age through Imperial Era"
      },
      summary: "Chinese civilization developed along two great rivers with opposite characters: the unpredictable, silt-laden Yellow River (nicknamed 'China's Sorrow') and the more manageable Yangtze. Chinese engineers tackled both, creating history's longest canal and arguably its most ingenious flood control system.",
      waterChallenges: [
        "Yellow River flooding (highly destructive, unpredictable)",
        "Connecting north-south river systems for grain transport",
        "Rice paddy irrigation requiring precise water control",
        "Taming mountainous rivers (Min River at Dujiangyan)"
      ],
      inventions: ["dujiangyan", "grand-canal-china", "canal-lock", "dragon-backbone-pump"],
      keyInsight: "Chinese engineers saw water control as essential to statecraft—floods could topple dynasties, and successful projects legitimized rulers.",
      engineerNotes: "The Dujiangyan system amazes me every time I read about it. Built in 256 BCE, it controls flooding and provides irrigation WITHOUT a dam—using only channel geometry. The 'fish mouth' dividing weir naturally adjusts the water split based on flow conditions: more to irrigation in low flow, more to spillway during floods. It has operated continuously for 2,270 years with only routine maintenance. No dam in history has that record. Li Bing's motto—'Dig the channel deep, keep the spillway low'—encapsulates flood engineering wisdom that took the West another two millennia to figure out.",
      modernLegacy: "The Grand Canal still carries 100 million tons of freight annually. Dujiangyan still irrigates the Chengdu Plain. China's modern engineering ambition continues a 4,000-year tradition.",
      sources: [
        "Needham, J. Science and Civilisation in China, Vol. 4",
        "Brook, T. The Troubled Empire: China in the Yuan and Ming Dynasties"
      ]
    },
    {
      id: "islamic",
      name: "Islamic Golden Age",
      region: "Middle East, North Africa, Iberian Peninsula, Central Asia",
      period: {
        start: 750,
        end: 1258,
        era: "Medieval Era"
      },
      summary: "Islamic civilization inherited water technologies from Greeks, Romans, Persians, and others—then systematically improved them. Al-Jazari's 1206 engineering manual documented water machines centuries ahead of European equivalents, and the giant norias of Hama became the pre-industrial world's largest water-powered machines.",
      waterChallenges: [
        "Arid climate across most of Islamic lands",
        "Inheriting and improving diverse water traditions",
        "Supplying growing cities (Baghdad, Cordoba, Cairo)",
        "Agricultural expansion in dry regions"
      ],
      inventions: ["islamic-water-wheel", "windmill-water-pump", "al-jazari-machines", "andalusian-irrigation"],
      keyInsight: "Islamic engineers didn't just build—they documented. Al-Jazari's 'Book of Knowledge of Ingenious Mechanical Devices' (1206) preserved engineering knowledge that might otherwise have been lost.",
      engineerNotes: "The norias of Hama, Syria, are among the largest wooden machines ever built—20 meters in diameter, groaning and splashing as they lift water from the Orontes River. But what impresses me most about Islamic water engineering is the systematic approach. Al-Jazari documented every mechanism with precision drawings. The falaj systems of Oman include time-based water rights that have prevented conflicts for 1,500 years. They combined Persian, Greek, and Roman traditions into something greater than any single source.",
      modernLegacy: "Islamic engineering manuals preserved and transmitted ancient knowledge to Renaissance Europe. The crankshaft, documented by Al-Jazari in 1206, is essential to modern engines.",
      sources: [
        "Al-Jazari. Book of Knowledge of Ingenious Mechanical Devices",
        "Hill, D.R. A History of Engineering in Classical and Medieval Times"
      ]
    },
    {
      id: "khmer",
      name: "Khmer Empire",
      region: "Southeast Asia (modern Cambodia, Thailand, Laos, Vietnam)",
      period: {
        start: 802,
        end: 1431,
        era: "Medieval Era"
      },
      summary: "The Khmer built Angkor, history's largest pre-industrial city, around an immense hydraulic network. Giant reservoirs (barays) and thousands of kilometers of canals transformed a seasonal flood plain into year-round rice production, supporting perhaps one million people.",
      waterChallenges: [
        "Extreme monsoon seasonality (flood/drought cycle)",
        "Need to store monsoon water for dry season",
        "Supporting dense urban population",
        "Rice cultivation requiring precise water levels"
      ],
      inventions: ["baray", "angkor-canal-network", "rice-paddy-irrigation"],
      keyInsight: "The Khmer understood that controlling water meant controlling rice production, which meant controlling power. Angkor was a 'hydraulic state.'",
      engineerNotes: "The West Baray alone holds 50 million cubic meters—built using only earth embankments (no concrete) that have held water for 1,000 years. LIDAR surveys reveal that Greater Angkor covered over 1,000 square kilometers with an integrated water system: reservoirs, canals, moats, and rice paddies all connected. When climate shifts disrupted the monsoon in the 14th-15th centuries, the system failed and Angkor was abandoned. It's a reminder that even the most sophisticated water engineering depends on assumptions about climate that may not hold forever.",
      modernLegacy: "Khmer hydraulic engineering is studied as an example of how civilizations can both rise and fall based on water management. Climate scientists examine Angkor's collapse as a cautionary tale.",
      sources: [
        "Fletcher, R. The Water Management Network of Angkor",
        "Penny, D. et al. Hydrological History of the West Baray"
      ]
    },
    {
      id: "mesoamerica",
      name: "Mesoamerica (Aztec & Maya)",
      region: "Central Mexico, Yucatan Peninsula, Central America",
      period: {
        start: -2000,
        end: 1521,
        era: "Preclassic through Postclassic"
      },
      summary: "Mesoamerican civilizations faced extremes: the Aztecs built an island city in a saline lake, while the Maya lived above limestone karst with no surface rivers. Both developed innovative water technologies: the Aztec chinampas (floating gardens) and dual aqueducts, and the Maya cenote (sinkhole) access and underground cisterns.",
      waterChallenges: [
        "Aztec: Island city in saline lake needing fresh water",
        "Maya: Karst landscape with no surface rivers",
        "Seasonal drought in both regions",
        "Supporting dense urban populations"
      ],
      inventions: ["chinampa", "aztec-aqueduct", "cenote-access", "chultun-cistern"],
      keyInsight: "Both civilizations understood that water defines the possible. The Aztecs built land where there was none (chinampas); the Maya built cities where there was no surface water (cenote access).",
      engineerNotes: "Tenochtitlan's dual aqueducts from Chapultepec springs show sophisticated infrastructure thinking—one channel operated while the other was cleaned. When the Spanish cut the aqueducts during the siege, 200,000+ people lost their water supply. The city fell partly because its water engineering, which enabled its existence, also made it vulnerable. The Maya, meanwhile, mapped underground water systems in complete darkness, accessing cenotes (sinkholes) through cave systems. Both traditions demonstrate water engineering as the foundation of civilization.",
      modernLegacy: "Chinampas at Xochimilco still feed Mexico City. Maya water management concepts inform modern karst hydrology. Redundant water mains echo Aztec practice.",
      sources: [
        "Coe, M.D. Mexico: From the Olmecs to the Aztecs",
        "Scarborough, V.L. The Flow of Power: Ancient Water Systems"
      ]
    },
    {
      id: "nabataean",
      name: "Nabataean Kingdom",
      region: "Petra, Negev Desert (Jordan, Israel, Saudi Arabia)",
      period: {
        start: -400,
        end: 106,
        era: "Iron Age through Roman period"
      },
      summary: "The Nabataeans built a caravan trading empire in one of Earth's harshest deserts through water engineering genius. At Petra, every surface—rooftops, plazas, cliffs—became a water catchment, and elaborate pipeline systems supplied 30,000 people using only 100mm annual rainfall.",
      waterChallenges: [
        "Extreme aridity (50-150mm annual rainfall)",
        "No permanent surface water",
        "Flash flood management",
        "Supporting wealthy trading city in desert"
      ],
      inventions: ["nabataean-cistern", "desert-water-harvesting", "petra-pipelines", "flood-diversion"],
      keyInsight: "The Nabataeans calculated that a 20:1 ratio of catchment to cropland could support agriculture even in the driest years—a mathematical approach to water scarcity.",
      engineerNotes: "Petra's water system is astonishing. They carved channels along cliff faces, built settling basins to catch sediment, and piped water through ceramic conduits to cisterns carved from solid rock. Israeli archaeologists reconstructed some of these ancient farms in the 1950s and successfully grew crops using only captured runoff—proving the system still works after 2,000 years. The Nabataeans understood something modern engineers are rediscovering: you don't need much water if you use it precisely.",
      modernLegacy: "Nabataean water harvesting principles are used in modern desert agriculture and 'microcatchment' design. Their approach influences sustainable dryland farming worldwide.",
      sources: [
        "Evenari, M. The Negev: The Challenge of a Desert",
        "Oleson, J.P. The Water-Supply System of Nabataean and Roman Humayma"
      ]
    },
    {
      id: "nubia",
      name: "Nubia (Kush)",
      region: "Upper Nile Valley (modern Sudan)",
      period: {
        start: -2500,
        end: 350,
        era: "Bronze Age through Late Antiquity"
      },
      summary: "Nubia developed water technologies for the more challenging Upper Nile—higher cataracts, less predictable floods, and greater distance from the river to farmland. The sakia (ox-powered waterwheel) that spread across the ancient world likely originated here.",
      waterChallenges: [
        "Higher above Nile than Lower Egypt",
        "Cataracts limiting navigation",
        "Need to lift water further for irrigation",
        "Less predictable flood timing"
      ],
      inventions: ["sakia", "nubian-irrigation", "hafir-reservoir"],
      keyInsight: "Nubia pioneered animal-powered water-lifting, recognizing that human power wasn't enough to irrigate their higher terrain.",
      engineerNotes: "The sakia—a vertical wheel with pots, driven by an ox walking in a circle—may be Nubian in origin, later adopted across the Mediterranean and Middle East. It could lift water 3-5 meters continuously, far more than a shaduf. Nubian kings controlled the gold and incense routes, but their real power came from controlling the Upper Nile. The hafirs (lined rainwater ponds) they built are still used in Sudan today.",
      modernLegacy: "The sakia spread throughout the ancient world and variants are still used in Egypt, Syria, and elsewhere. Hafir reservoirs remain important in Sudanese water management.",
      sources: [
        "Edwards, D.N. The Nubian Past",
        "Adams, W.Y. Nubia: Corridor to Africa"
      ]
    },
    {
      id: "sri-lanka",
      name: "Ancient Sri Lanka (Ceylon)",
      region: "Island of Sri Lanka (Ceylon)",
      period: {
        start: -500,
        end: 1200,
        era: "Iron Age through Medieval"
      },
      summary: "Ancient Sri Lanka built the world's most extensive pre-industrial reservoir system—over 30,000 tanks connected in cascade systems that maximized water use efficiency. Their biso kotuwa valve technology solved dam engineering problems that still challenge modern engineers.",
      waterChallenges: [
        "Extreme monsoon seasonality",
        "Need to store water for 8-month dry season",
        "Preventing dam erosion from high-pressure outlets",
        "Coordinating thousands of interconnected reservoirs"
      ],
      inventions: ["biso-kotuwa", "tank-cascade-system", "spill-control"],
      keyInsight: "Sri Lankan engineers understood that reservoirs are a system, not isolated units—overflow from one tank should feed the next in an integrated watershed approach.",
      engineerNotes: "The biso kotuwa (valve pit) is brilliant engineering. Water enters a stone chamber through the dam base, loses energy swirling inside, then exits calmly to irrigation channels. This prevents the outlet erosion that destroys modern dams. Sri Lanka has 30,000+ ancient tanks, many connected in cascades where overflow from upper tanks feeds lower ones. It's integrated water resource management achieved through centuries of refinement. Modern dam engineers study these ancient systems.",
      modernLegacy: "Tank cascade systems are being restored as climate-resilient water infrastructure. The biso kotuwa principle appears in modern stilling basins and energy dissipators.",
      sources: [
        "Brohier, R.L. Ancient Irrigation Works of Ceylon",
        "Panabokke, C.R. Historical Overview of Irrigation Development in Sri Lanka"
      ]
    },
    {
      id: "puebloans",
      name: "Ancestral Puebloans",
      region: "Colorado Plateau (American Southwest)",
      period: {
        start: 100,
        end: 1300,
        era: "Formative through Pueblo periods"
      },
      summary: "The Ancestral Puebloans built cliff dwellings and stone cities in one of North America's driest regions. Their water engineering—reservoirs, check dams, and channelized runoff—supported thousands of people where rainfall averaged only 200-400mm annually.",
      waterChallenges: [
        "Extreme aridity (200-400mm annual rainfall)",
        "No permanent streams in many areas",
        "Flash flood management",
        "Supporting concentrated populations"
      ],
      inventions: ["mesa-verde-reservoir", "check-dams", "seep-collection"],
      keyInsight: "The Puebloans understood that in arid lands, you don't just collect water—you slow it down, spread it out, and let it sink in.",
      engineerNotes: "Mesa Verde's water system collected runoff from sandstone surfaces into plastered reservoirs. Check dams slowed runoff to allow infiltration. They even collected water seeping from rock faces. When drought struck in the late 1200s, these ingenious systems couldn't compensate for years of below-normal precipitation—the great cliff dwellings were abandoned. It's a sobering reminder that water engineering extends the limits of habitability but doesn't eliminate them.",
      modernLegacy: "Puebloan water harvesting techniques are studied for sustainable desert agriculture. Their abandonment of Mesa Verde during drought is analyzed as a case study in climate adaptation limits.",
      sources: [
        "Wright, K.R. Water for the Anasazi",
        "Lister, R.H. and Lister, F.C. Chaco Canyon"
      ]
    },
    {
      id: "byzantine",
      name: "Byzantine Empire",
      region: "Eastern Mediterranean, Constantinople",
      period: {
        start: 330,
        end: 1453,
        era: "Late Antiquity through Medieval"
      },
      summary: "The Byzantine Empire maintained and extended Roman water infrastructure for over a thousand years. Constantinople's massive cisterns could hold months of water supply, making the city nearly siege-proof, while the empire preserved and transmitted water engineering knowledge through the medieval period.",
      waterChallenges: [
        "Supplying imperial capital on peninsula with no rivers",
        "Siege preparedness (water for months without resupply)",
        "Maintaining Roman-era infrastructure across centuries",
        "Transmitting engineering knowledge through turbulent times"
      ],
      inventions: ["basilica-cistern", "valens-aqueduct", "byzantine-water-management"],
      keyInsight: "Byzantines understood that water infrastructure is political infrastructure—their cisterns made Constantinople unconquerable by siege for centuries.",
      engineerNotes: "The Basilica Cistern held 80,000 cubic meters beneath the streets of Constantinople—enough to supply the Great Palace complex for months during a siege. The columns recycled from Roman temples (including famous Medusa heads used as column bases) show the Byzantine approach: maintain, adapt, and improve inherited infrastructure. When I walked through the Basilica Cistern, still watertight after 1,500 years, I thought about modern infrastructure designed for 50-year lifespans. We've lost something.",
      modernLegacy: "Byzantine water infrastructure served Istanbul into the modern era. The Valens Aqueduct carried water until 1912. Their approach to infrastructure longevity challenges modern planned obsolescence.",
      sources: [
        "Crow, J. et al. The Water Supply of Byzantine Constantinople",
        "Freely, J. A History of Ottoman Architecture"
      ]
    },
    {
      id: "modern",
      name: "Modern Era",
      region: "Global",
      period: {
        start: 1712,
        end: 2026,
        era: "Industrial Revolution to Present"
      },
      summary: "The modern era transformed water engineering through steam power, steel, concrete, and eventually electricity and computing. From Newcomen's steam pump (1712) to reverse osmosis desalination (1959) to satellite hydrology, we've achieved capabilities ancient engineers couldn't imagine—while facing water challenges they'd recognize.",
      waterChallenges: [
        "Urban populations in billions requiring clean water",
        "Climate change disrupting historical patterns",
        "Groundwater depletion worldwide",
        "Balancing development with environmental sustainability"
      ],
      inventions: ["steam-pump", "london-sewers", "aswan-dam", "drip-irrigation", "desalination"],
      keyInsight: "Modern water engineering can move rivers and create freshwater from the sea—but we're learning that 'can' doesn't mean 'should' without considering consequences.",
      engineerNotes: "The Newcomen steam engine (1712) marks the divide between ancient and modern water engineering—for the first time, we could pump water using fossil fuel energy rather than muscle, wind, or gravity. Everything since builds on that revolution. But modern engineering also brings modern hubris. The Aswan Dam ended 5,000 years of Nile flooding but also stopped the sediment that fertilized Egypt. We can desalinate seawater but at enormous energy cost. The lesson from 8,000 years of water history is clear: work with natural systems when possible, engineer around them only when necessary, and always ask what consequences tomorrow might bring.",
      modernLegacy: "Modern water engineering supports 8 billion humans—but faces unprecedented challenges from climate change, pollution, and resource depletion. The lessons of ancient engineers may prove vital.",
      sources: [
        "Gleick, P. The World's Water (biennial)",
        "Postel, S. Pillar of Sand: Can the Irrigation Miracle Last?"
      ]
    },
    {
      id: "dutch-netherlands",
      name: "Dutch Netherlands",
      region: "Low Countries (modern Netherlands, Belgium)",
      period: {
        start: 1200,
        end: 2026,
        era: "Medieval through Present"
      },
      summary: "The Dutch are arguably the world's most influential civilization in water engineering history. Living where 26% of land sits below sea level, they developed water management technologies out of absolute necessity for survival—and then exported that expertise worldwide.",
      waterChallenges: [
        "26% of country below sea level",
        "Constant battle against North Sea flooding",
        "River delta with multiple flood sources",
        "Subsiding peat soils requiring continuous pumping"
      ],
      inventions: ["polder-system", "windmill-pump", "gemaal", "delta-works", "waterschap", "inundation-lines", "room-for-rivers"],
      keyInsight: "The Dutch saying 'God created the world, but the Dutch created the Netherlands' reflects how they literally built their nation from the sea—and did it through democratic water boards that predate their parliament.",
      engineerNotes: "The Delta Works took my breath away. The Maeslantkering—each arm weighing as much as the Eiffel Tower—automatically closes when water exceeds 3 meters. But what impresses me more is the institutional innovation: Water Boards (Waterschappen) have operated for 800 years, making them the oldest democratic institutions in the country. The Netherlands exports water expertise worldwide—after Katrina, after Sandy, it's Dutch engineers the world calls. Their recent 'Room for the Rivers' program represents a paradigm shift: instead of fighting water with higher dikes, make space for it. After 800 years of engineering dominance over water, they're learning to work WITH it.",
      modernLegacy: "Dutch water expertise is exported globally. Henk Ovink advised Obama on post-Sandy rebuilding. Dutch engineers consult on Bangladesh, Vietnam, and New Orleans flood management. The Delta Works is one of the Seven Wonders of the Modern World.",
      sources: [
        "TeBrake, W.H. Medieval Frontier: Culture and Ecology in Rijnland",
        "Hoeksema, R.J. Three Stages in the History of Land Reclamation in the Netherlands"
      ]
    },
    {
      id: "etruscan",
      name: "Etruscan Civilization",
      region: "Central Italy (modern Tuscany, Umbria, Lazio)",
      period: {
        start: -900,
        end: -90,
        era: "Iron Age through Roman Republic"
      },
      summary: "The Etruscans were Rome's teachers in hydraulic engineering. Before Rome was anything but a muddy village, Etruscans were draining marshes with sophisticated tunnel networks, building sewers, and creating underground water systems. The famous Cloaca Maxima was designed and built by Etruscan engineers.",
      waterChallenges: [
        "Swampy lowlands between volcanic highlands",
        "Hilltop cities without natural water sources",
        "Need to convert marshland to productive agriculture",
        "Volcanic rock terrain requiring tunnel excavation"
      ],
      inventions: ["cuniculi-tunnel", "cloaca-maxima", "rock-cut-cistern", "urban-drainage"],
      keyInsight: "Etruscans understood that controlling water means controlling land—their cuniculi tunnels transformed malaria-ridden swamps into the richest farmland in Italy.",
      engineerNotes: "When I first saw the cuniculi at Veii, I was amazed—over 50 kilometers of hand-cut tunnels through volcanic tufa, some STILL draining fields after 2,500 years. The Cloaca Maxima in Rome, built by Etruscan engineers around 600 BCE, is the world's oldest infrastructure still in continuous use. Rome exists because Etruscans drained the swamp where the Forum sits. Every Roman engineering achievement stands on Etruscan foundations.",
      modernLegacy: "The Cloaca Maxima still drains central Rome. Etruscan urban planning principles—integrated drainage, water access for every block—became the template for Roman colonial cities across the Mediterranean.",
      sources: [
        "Bizzarri, C. and Quilici Gigli, S. Etruscan Hydraulic Engineering",
        "Taylor, R. Public Needs and Private Pleasures: Water Distribution in Roman Italy"
      ]
    },
    {
      id: "viking",
      name: "Viking Civilization",
      region: "Scandinavia, North Atlantic, River routes to Black Sea",
      period: {
        start: 700,
        end: 1200,
        era: "Early Medieval Period"
      },
      summary: "Vikings weren't just raiders—they were the most sophisticated maritime civilization of the medieval world. They crossed the North Atlantic 500 years before Columbus, navigated from the Baltic to Constantinople via Russian rivers, and colonized Greenland for 400 years. Their relationship with water was comprehensive: ships, navigation, freshwater management, and environmental adaptation.",
      waterChallenges: [
        "Ocean crossing without instruments",
        "Freshwater supply during weeks at sea",
        "Navigating shallow rivers with ocean-going ships",
        "Surviving Arctic conditions with medieval technology"
      ],
      inventions: ["clinker-longship", "water-navigation", "shipboard-freshwater", "portage-systems", "arctic-ice-tech"],
      keyInsight: "Vikings didn't conquer the sea with force—they observed it. Their navigation was based on reading water color, wave patterns, wildlife behavior, and the feel of currents.",
      engineerNotes: "The Viking longship is arguably the greatest watercraft ever designed for its purpose. A Gokstad replica crossed the Atlantic in 1893, averaging 10 knots. With a draft of only 0.5 meters, they could sail up rivers deep into continents. In 1893, a replica proved what sagas claimed: you could cross the Atlantic in Viking ships. But what impresses me most is their water reading skills—finding Vinland without maps, compasses, or sextants, using only observation of waves, water color, and wildlife.",
      modernLegacy: "Clinker construction remains in traditional Scandinavian boatbuilding. Viking river routes became trade highways. Their environmental observation skills are studied by modern sailors.",
      sources: [
        "Crumlin-Pedersen, O. Viking-Age Ships and Shipbuilding",
        "Jones, G. A History of the Vikings"
      ]
    },
    {
      id: "pre-roman-iberia",
      name: "Pre-Roman Iberian Cultures",
      region: "Iberian Peninsula (modern Spain and Portugal)",
      period: {
        start: -1000,
        end: -19,
        era: "Iron Age"
      },
      summary: "Before Rome conquered Iberia, diverse cultures—Iberians, Tartessians, Celtiberians—developed sophisticated water technologies adapted to the peninsula's challenging semi-arid climate and mineral-rich geology. Tartessian hydraulic mining and Iberian cistern systems show engineering creativity independent of Mediterranean influence.",
      waterChallenges: [
        "Semi-arid climate with seasonal drought",
        "Mountainous terrain with difficult water transport",
        "Mining operations requiring water management",
        "Diverse microclimates across the peninsula"
      ],
      inventions: ["tartessian-hydraulic-mining", "iberian-cisterns", "celtiberian-irrigation"],
      keyInsight: "Iberian cultures independently developed water storage and mining techniques that Romans later industrialized—proof that hydraulic engineering innovation arose wherever water was scarce and valuable.",
      engineerNotes: "The Tartessian hydraulic mining at Rio Tinto predates Roman ruina montium techniques. When Romans arrived, they didn't invent Iberian water technology—they scaled it up. The rock-cut cisterns at sites like Ullastret show sophisticated water storage for fortified settlements in dry summers.",
      modernLegacy: "Spanish water law retains pre-Roman concepts of shared water rights. Traditional irrigation communities (acequias) in arid regions trace organizational roots to pre-Roman practice.",
      sources: [
        "Domergue, C. Les Mines Antiques: La Production des Métaux aux Époques Grecque et Romaine",
        "Almagro-Gorbea, M. Los Iberos: Príncipes de Occidente"
      ]
    },
    {
      id: "basque",
      name: "Basque Country",
      region: "Western Pyrenees (modern Spain/France border)",
      period: {
        start: -500,
        end: 2026,
        era: "Iron Age through Present"
      },
      summary: "The Basque people, with Europe's oldest pre-Indo-European language, developed water technologies uniquely adapted to their mountainous, rainy terrain. Their water mills (errota), iron forges (burdinola), tidal fish traps, and mountain irrigation systems remained unchanged for millennia.",
      waterChallenges: [
        "Steep mountain terrain with fast-flowing streams",
        "Abundant rainfall but difficult terrain for agriculture",
        "Coastal tidal zones for fishing",
        "Need for iron production water power"
      ],
      inventions: ["basque-errota", "basque-burdinola", "tidal-fish-traps", "mountain-irrigation"],
      keyInsight: "Basque water engineering emphasizes small-scale, distributed systems—every valley had its mill, every village its forge. This resilience through redundancy sustained their independence for millennia.",
      engineerNotes: "Walking Basque country, you see water mills on streams too small for Roman engineering to notice. The errota (horizontal mill) works with flows that would be useless for vertical wheels. The burdinola iron forges combined water power with charcoal to produce famous Basque steel. This is engineering scaled to human community, not empire.",
      modernLegacy: "Traditional Basque fishing and water rights continue to operate under ancient customary law. The model of small-scale, community-controlled water infrastructure inspires modern sustainability movements.",
      sources: [
        "Azurmendi, J. Basque Technology: Traditional Knowledge Systems",
        "Collins, R. The Basques"
      ]
    },
    {
      id: "celtic",
      name: "Celtic Europe",
      region: "Atlantic Europe (Ireland, Britain, Gaul, Iberia)",
      period: {
        start: -800,
        end: 400,
        era: "Iron Age through Roman Period"
      },
      summary: "Celtic peoples across Atlantic Europe shared a relationship with water that combined practical engineering with deep spiritual significance. Sacred springs, timber trackways across wetlands, oppida water systems, and sophisticated field drainage supported Iron Age Europe's largest populations outside the Mediterranean.",
      waterChallenges: [
        "Waterlogged Atlantic climate",
        "Wetlands blocking land travel",
        "Need to drain fields in wet regions",
        "Fortified settlements (oppida) requiring water supply"
      ],
      inventions: ["sacred-springs-nemeton", "oppida-water", "timber-trackways", "celtic-field-drainage"],
      keyInsight: "Celts saw water as a boundary between worlds. Springs were portals to the divine, and the votive offerings thrown into them tell us water was the medium of communication with the gods.",
      engineerNotes: "The timber trackways like the Sweet Track (3807 BCE in Britain) show Neolithic and Celtic peoples building sophisticated infrastructure across wetlands. Irish crannogs (artificial islands) demonstrate another approach—rather than draining wetlands, they lived on them. The thousands of votive offerings recovered from Celtic springs and bogs reveal water's spiritual importance, but also show metal-working skills applied to religious purposes.",
      modernLegacy: "Many European holy wells and healing springs trace to Celtic sacred sites. Irish and Welsh water folklore preserves pre-Christian Celtic water beliefs.",
      sources: [
        "Green, M. The Gods of the Celts",
        "Coles, B. and Coles, J. People of the Wetlands"
      ]
    },
    {
      id: "gaul",
      name: "Ancient Gaul",
      region: "Modern France, Belgium, Switzerland",
      period: {
        start: -600,
        end: 50,
        era: "Iron Age"
      },
      summary: "Gaul before Roman conquest was densely populated and economically sophisticated. Gallic engineering focused on river navigation, viticulture, and exploiting the numerous thermal springs. Caesar's descriptions of Gallic oppida reveal complex water systems, and Gallic river navigation techniques impressed Romans.",
      waterChallenges: [
        "Major river systems requiring navigation infrastructure",
        "Wine production demanding specialized water management",
        "Natural thermal springs requiring engineering development",
        "Oppidum hillforts needing water supply"
      ],
      inventions: ["gallic-river-navigation", "viticulture-water", "thermal-spring-development"],
      keyInsight: "Gauls made rivers work as highways. Their boat designs, portage routes, and river port systems moved goods across Europe centuries before Roman roads.",
      engineerNotes: "When Romans arrived in Gaul, they found a sophisticated civilization. The oppida were proto-cities with water infrastructure. Gallic river boats, flat-bottomed for shallow navigation, were adapted by Romans. The thermal springs at sites like Aix-les-Bains (Aquae Gratianae) were developed before and after Roman conquest. French wine regions today follow Celtic viticulture patterns.",
      modernLegacy: "French river navigation traditions, wine terroir concepts, and thermal spa development all have Gallic roots. The word 'barrel' itself is Gallic—they invented the wooden barrel for wine storage.",
      sources: [
        "Cunliffe, B. The Ancient Celts",
        "Woolf, G. Becoming Roman: The Origins of Provincial Civilization in Gaul"
      ]
    },
    {
      id: "germanic",
      name: "Germanic Europe",
      region: "Northern Germany, Netherlands, Scandinavia pre-Viking",
      period: {
        start: -500,
        end: 700,
        era: "Iron Age through Early Medieval"
      },
      summary: "Germanic peoples of the North Sea coast and northern Europe developed unique water technologies for their challenging environment: terp mounds in flood-prone coastal areas, bog iron extraction, sacred wells, log boats, and salt works. They lived WITH water rather than trying to control it.",
      waterChallenges: [
        "North Sea coastal flooding",
        "Waterlogged terrain across northern plains",
        "Long winters with frozen waters",
        "Iron ore only available in bogs"
      ],
      inventions: ["terp-mounds", "bog-iron-extraction", "sacred-wells", "germanic-log-boats", "germanic-salt-works"],
      keyInsight: "Germanic peoples didn't fight the sea—they rose above it on artificial mounds (terpen) that grew over centuries, creating landscapes of elevated villages in flooded coastal zones.",
      engineerNotes: "The terpen of Frisia are engineering marvels created by ordinary people over generations. Some rise 10 meters above the surrounding flood plain, built from turf, manure, and refuse over centuries. The Pesse Canoe (8040 BCE) is the world's oldest known boat. Bog iron extraction—smelting iron from ore deposits in swamps—enabled Iron Age metallurgy without mineral mines. Germanic peoples turned their waterlogged environment from obstacle to resource.",
      modernLegacy: "Dutch water management descends from these traditions. The terpen approach—working with floods rather than fighting them—informs modern 'room for the river' policies.",
      sources: [
        "Knottnerus, O.S. The Wadden Sea Region: Cultural Heritage and Environment",
        "Roymans, N. From the Sword to the Plough"
      ]
    },
    {
      id: "borneo",
      name: "Borneo Indigenous Civilizations",
      region: "Borneo (modern Malaysia, Indonesia, Brunei)",
      period: {
        start: -2000,
        end: 2026,
        era: "Bronze Age through Present"
      },
      summary: "Borneo's indigenous peoples developed water engineering for the world's oldest rainforest. Longhouse communities, bamboo aqueducts, peat swamp canals, and floating rice cultivation represent 4,000 years of adaptation to tropical wetland environments.",
      waterChallenges: [
        "World's highest rainfall and constant humidity",
        "Extensive peat swamps and flooded forests",
        "River navigation through dense rainforest",
        "Sustainable resource management in fragile ecosystems"
      ],
      inventions: ["dayak-longhouse", "bamboo-aqueducts", "peat-swamp-canals", "floating-rice", "tagal-system", "borneo-fish-traps"],
      keyInsight: "Borneo's indigenous water management is about living within ecological limits. The tagal system of protected fish pools enforced by village custom sustained fish stocks for millennia.",
      engineerNotes: "Borneo indigenous engineering works WITH the rainforest, not against it. Longhouses raised on stilts above seasonal floods, bamboo aqueducts carrying fresh water from springs, dugout canoes navigating flooded forests—this is engineering scaled to ecosystem capacity. The tagal system of fish conservation shows social engineering as sophisticated as any physical infrastructure.",
      modernLegacy: "Indigenous Borneo water management practices inform modern tropical forest conservation. Traditional ecological knowledge is increasingly valued as industrial approaches fail in rainforest environments.",
      sources: [
        "Padoch, C. Borneo in Transition",
        "Cramb, R.A. Land and Longhouse: Agrarian Transformation in the Uplands of Sarawak"
      ]
    },
    {
      id: "papua",
      name: "Papua New Guinea",
      region: "Papua New Guinea, Pacific Islands",
      period: {
        start: -7000,
        end: 2026,
        era: "Neolithic through Present"
      },
      summary: "Papua New Guinea contains some of the world's oldest agricultural systems. The Kuk Swamp UNESCO World Heritage site shows drainage and cultivation from 7000 BCE—contemporary with Mesopotamia. Highland terraces, coastal fish traps, and atoll rainwater systems represent 9,000 years of continuous innovation.",
      waterChallenges: [
        "Extreme rainfall and mountain terrain",
        "Swamp drainage for agriculture",
        "Low-lying coral atolls with no freshwater",
        "Tropical disease management in wet environments"
      ],
      inventions: ["kuk-swamp-drainage", "highland-terraces", "taro-pondfields", "sepik-fish-traps", "sago-water-processing", "stilt-villages", "atoll-rainwater"],
      keyInsight: "The Kuk Swamp drainage system is 9,000 years old—making Papua New Guinea one of the world's independent centers of agricultural invention, alongside Mesopotamia and China.",
      engineerNotes: "When I studied the Kuk Swamp archaeological record, I was humbled. People were draining swamps for agriculture 9,000 years ago, in complete isolation from the rest of the world. The highland terraces, taro pondfields, and fish trap systems show continuous innovation. On coral atolls with no freshwater, people developed rainwater harvesting and lens water extraction that NASA studied for space station life support.",
      modernLegacy: "UNESCO World Heritage recognition of Kuk Swamp acknowledges Papua New Guinea's contribution to human agricultural innovation. Traditional water management practices offer models for climate adaptation in tropical regions.",
      sources: [
        "Denham, T. Early Agriculture and Plant Domestication in New Guinea",
        "Golson, J. Kuk Swamp and the Development of Agriculture in New Guinea"
      ]
    },
    {
      id: "medieval-europe",
      name: "Medieval Europe",
      region: "Western and Central Europe",
      period: {
        start: 500,
        end: 1400,
        era: "Medieval Period"
      },
      summary: "The often-overlooked 'Dark Ages' were actually a time of tremendous water innovation. Cistercian monks became master hydraulic engineers, and water mills powered Europe's first industrial revolution.",
      waterChallenges: [
        "Converting pagan water worship to Christian infrastructure",
        "Powering industry without fossil fuels",
        "Managing water rights across feudal territories",
        "Harnessing tidal energy in coastal regions"
      ],
      inventions: ["water-mill", "tidal-mill", "fulling-mill"],
      keyInsight: "By 1086, England alone had 5,624 water mills recorded in the Domesday Book. This was Europe's first industrial revolution—900 years before steam.",
      engineerNotes: "Monasteries were the tech companies of the Middle Ages. Cistercian monks standardized water mill design, innovated fish pond management, and created industrial complexes powered entirely by water. The tidal mills amazed me—harvesting tidal energy 800 years before we thought we invented 'renewable energy.'",
      modernLegacy: "The water mill technology that spread across medieval Europe laid the foundation for the Industrial Revolution. Many historic mills are preserved as UNESCO sites.",
      sources: [
        "Gies, F. Cathedral, Forge, and Waterwheel: Technology in the Middle Ages",
        "Reynolds, T. Stronger than a Hundred Men: A History of the Vertical Water Wheel"
      ]
    },
    {
      id: "inca-empire",
      name: "Inca Empire",
      region: "Andes Mountains (Peru, Bolivia, Ecuador)",
      period: {
        start: 1438,
        end: 1533,
        era: "Pre-Columbian Period"
      },
      summary: "The Incas were masters of extreme-altitude hydraulic engineering. Machu Picchu's water system still works perfectly after 500+ years—no maintenance, no pumps, just brilliant gravity-fed design.",
      waterChallenges: [
        "Supplying water at elevations above 2,400 meters",
        "Preventing erosion on steep mountain slopes",
        "Managing seasonal rainfall extremes",
        "Frost protection for crops in thin mountain air"
      ],
      inventions: ["inca-fountain-system", "inca-supply-canal", "tipon-terraces", "andenes", "stone-flow-controls"],
      keyInsight: "The location of Machu Picchu wasn't chosen for its views—it was chosen because of a reliable spring. Water drove Inca urban planning, not the other way around.",
      engineerNotes: "Machu Picchu's 16 fountains cascade perfectly after 500 years with zero maintenance. The 749-meter canal maintains exactly a 3% slope. At Tipón, I think we're looking at an ancient hydraulic engineering school—the terraces seem designed to teach water control principles. Their stone flow controls are genius: reliable valves with no moving parts.",
      modernLegacy: "Inca terraces still irrigate farms throughout the Andes. Their spring assessment methods and gravity-fed systems inform modern sustainable water infrastructure.",
      sources: [
        "Wright, K. & Valencia Zegarra, A. Machu Picchu: A Civil Engineering Marvel",
        "Bauer, B. Ancient Cuzco: Heartland of the Inca"
      ]
    },
    {
      id: "balinese",
      name: "Balinese (Subak)",
      region: "Bali, Indonesia",
      period: {
        start: 900,
        end: 2026,
        era: "Medieval through Present"
      },
      summary: "The Subak system proves that water management is fundamentally about social organization, not just pipes and channels. Temple priests coordinate irrigation across thousands of farmers using religious ceremonies.",
      waterChallenges: [
        "Coordinating water sharing among thousands of farmers",
        "Synchronizing planting to control pests without chemicals",
        "Balancing upstream and downstream water rights",
        "Managing volcanic soil erosion"
      ],
      inventions: ["subak-system", "water-temple"],
      keyInsight: "Balinese water temples don't just manage water—they control pests. By synchronizing flooding across the landscape, they starve rice pests of food. A 1,000-year-old solution that chemical companies couldn't match.",
      engineerNotes: "I've seen world-class irrigation systems, but Subak is different. It's not just engineering—it's religion, democracy, and ecology combined. Temple ceremonies that seem purely spiritual are actually sophisticated scheduling algorithms. When researchers tried to 'modernize' with Green Revolution methods, pest outbreaks skyrocketed. The temples knew something we didn't.",
      modernLegacy: "UNESCO World Heritage recognition. The Subak system influences modern thinking about commons governance and participatory water management.",
      sources: [
        "Lansing, J.S. Priests and Programmers: Technologies of Power in the Engineered Landscape of Bali",
        "Geertz, C. Organization of the Balinese Subak"
      ]
    },
    {
      id: "aboriginal-australia",
      name: "Aboriginal Australia",
      region: "Australian Continent",
      period: {
        start: -40000,
        end: 2026,
        era: "Ancient through Present"
      },
      summary: "40,000 years of continuous water knowledge on Earth's driest inhabited continent. The Brewarrina fish traps may be the oldest human structure on Earth—and they still work.",
      waterChallenges: [
        "Surviving the world's driest inhabited continent",
        "Finding water in landscapes with no permanent rivers",
        "Passing water knowledge across 1,500+ generations",
        "Managing fish populations without depleting stocks"
      ],
      inventions: ["brewarrina-traps", "gnamma-holes", "aboriginal-wells"],
      keyInsight: "Songlines aren't just spiritual pathways—they're water maps. 40,000 years of accumulated knowledge encoded in songs that children still learn today.",
      engineerNotes: "The Brewarrina fish traps humbled me. Possibly 40,000 years old, still functioning, designed to work WITH seasonal floods rather than against them. The gnamma holes—natural rock hollows enlarged and sealed with spinifex resin—are positioned along songlines that encode water location knowledge. This is engineering that thinks in millennia, not decades.",
      modernLegacy: "Traditional Aboriginal water knowledge increasingly recognized for managing arid landscapes. Their fire-stick farming and water management are studied for climate adaptation.",
      sources: [
        "Pascoe, B. Dark Emu: Aboriginal Australia and the Birth of Agriculture",
        "Gammage, B. The Biggest Estate on Earth"
      ]
    },
    {
      id: "ancient-japan",
      name: "Ancient Japan",
      region: "Japanese Archipelago",
      period: {
        start: -300,
        end: 1600,
        era: "Classical through Medieval"
      },
      summary: "Japanese water engineering fused aesthetics with function. Every garden pond, bamboo fountain, and rice terrace reflects a philosophy where water is art.",
      waterChallenges: [
        "Managing typhoon flooding on mountainous terrain",
        "Irrigating rice paddies on steep slopes",
        "Supplying growing castle towns",
        "Creating beauty through water design"
      ],
      inventions: ["suido", "shishi-odoshi", "tanada"],
      keyInsight: "Tokyo's water supply system dates to 1590—partially still in use. Japanese engineers thought in centuries.",
      engineerNotes: "The shishi-odoshi (deer scarer) demonstrates Japanese genius: using water's rhythm to create sound, merging function with philosophy. Tanada rice terraces transform mountains into productive landscapes while preventing erosion. The suido pipe systems supplied castle towns using only gravity and bamboo engineering. Beauty and utility were never separated.",
      modernLegacy: "Japanese water aesthetics influence global garden design. Their precision engineering philosophy shaped modern Japanese industry and technology.",
      sources: [
        "Shirahata, Y. The Japanese Tradition of Water",
        "Totman, C. A History of Japan's Environment"
      ]
    },
    {
      id: "hawaiian",
      name: "Hawaiian",
      region: "Hawaiian Islands, Pacific Ocean",
      period: {
        start: 400,
        end: 2026,
        era: "Polynesian Settlement through Present"
      },
      summary: "Hawaiian ahupua'a land divisions followed watersheds from mountain to sea—an integrated water management philosophy 1,500 years ahead of modern watershed planning.",
      waterChallenges: [
        "Capturing rainfall on volcanic slopes",
        "Irrigating taro on islands with no rivers",
        "Managing water from mountain to sea sustainably",
        "Balancing freshwater and marine ecosystems"
      ],
      inventions: ["loi-kalo", "auwai"],
      keyInsight: "The ahupua'a system divided land from mountain peak to ocean, ensuring each community had access to water at every elevation. Modern watershed management reinvented this 1,500-year-old Hawaiian concept.",
      engineerNotes: "Lo'i kalo (taro pondfields) are brilliant: continuous water flow through the fields grows taro while supporting fish and controlling mosquitoes. The 'auwai irrigation ditches used gravity and clever stone placement to distribute water fairly. Hawaiian chiefs could be removed for mismanaging water—accountability built into governance.",
      modernLegacy: "Hawaiian traditional water rights (appurtenant rights) still recognized in law. Ahupua'a concepts inform modern integrated watershed management globally.",
      sources: [
        "Kirch, P. Feathered Gods and Fishhooks",
        "Kelly, M. Na Mala o Kona: Gardens of Kona"
      ]
    },
    {
      id: "siam-thailand",
      name: "Siam (Thailand)",
      region: "Southeast Asia (Thailand)",
      period: {
        start: 1238,
        end: 1782,
        era: "Medieval Kingdoms"
      },
      summary: "Bangkok was called the 'Venice of the East' because water was its primary transportation network. Thai civilization organized around klongs (canals) the way Western cities organized around roads.",
      waterChallenges: [
        "Managing monsoon flooding in flat delta terrain",
        "Defending island capitals with moat systems",
        "Creating transportation networks without roads",
        "Storing water through long dry seasons"
      ],
      inventions: ["ayutthaya-moats", "klong-network", "sukhothai-reservoir", "phra-ruang-dam", "floating-markets"],
      keyInsight: "Ayutthaya survived 400 years by being an island—12km of moats created the perfect combination of defense, transport, and irrigation.",
      engineerNotes: "The klong network is extraordinary. When I visited Bangkok's remaining canals, I understood why visitors called it 'Venice of the East.' Floating markets weren't quaint tradition—they were the most efficient distribution system for a water-based city. The Ayutthaya moat system shows how defensive infrastructure can serve multiple purposes: protection, transport, and irrigation simultaneously.",
      modernLegacy: "Thailand's floating markets and canal culture influence tourism and urban planning. Modern Bangkok struggles with flooding partly because it filled in many historic klongs.",
      sources: [
        "Tanabe, S. Water Management in the Chao Phraya Delta",
        "Jumsai, S. Naga: Cultural Origins in Siam and the West Pacific"
      ]
    },
    {
      id: "singapore",
      name: "Singapore",
      region: "Southeast Asian City-State",
      period: {
        start: 1965,
        end: 2026,
        era: "Modern Independence Era"
      },
      summary: "Singapore transformed from water-import dependency to global water innovation leader in 50 years. Their 'Four National Taps' strategy is studied worldwide by water-scarce nations.",
      waterChallenges: [
        "No natural aquifers or large rivers",
        "Historical dependency on Malaysian water imports",
        "Limited land area for reservoirs",
        "Tropical climate with intense rainfall"
      ],
      inventions: ["newater", "marina-barrage", "dtss", "variable-salinity-plant", "floating-solar"],
      keyInsight: "Singapore turned every raindrop and every flush into a resource. NEWater (ultra-purified reclaimed water) now supplies 40% of the nation's needs—purer than tap water.",
      engineerNotes: "Singapore's water story is remarkable. Facing an existential threat from water dependency, they systematically developed four 'taps': imports, rainwater, desalination, and reclaimed water. The Marina Barrage converted a seawater bay into a freshwater reservoir in the city center. The Deep Tunnel Sewerage System runs 48km underground. They even put solar panels on reservoirs, reducing evaporation while generating power. This is what happens when a nation treats water as a matter of survival.",
      modernLegacy: "Singapore exports water technology globally. Their PUB (Public Utilities Board) trains water professionals from around the world. NEWater technology now used in multiple countries.",
      sources: [
        "Tortajada, C. The Singapore Water Story",
        "Lee, K.Y. From Third World to First"
      ]
    },
    {
      id: "israel",
      name: "Israel",
      region: "Eastern Mediterranean / Middle East",
      period: {
        start: -1500,
        end: 2026,
        era: "Ancient through Modern"
      },
      summary: "Israel transformed desert into agricultural export powerhouse through drip irrigation and 90%+ wastewater recycling—the highest rate in the world.",
      waterChallenges: [
        "Semi-arid climate with unreliable rainfall",
        "Limited freshwater aquifers",
        "Rapid population growth and agricultural demands",
        "Political constraints on water sources"
      ],
      inventions: ["drip-irrigation", "negev-cisterns", "sorek-desalination", "wastewater-recycling"],
      keyInsight: "Drip irrigation delivers water directly to plant roots, reducing water use by 50% while increasing yields. Invented in Israel 1965, now used in 110+ countries.",
      engineerNotes: "Israel had no choice but to innovate. Drip irrigation (developed by Simcha Blass and Netafim) revolutionized global agriculture. They recycle 90% of wastewater for agriculture—four times the next closest country. The Sorek desalination plant produces the world's cheapest desalinated water. They've proven that water scarcity can be solved through technology and determination.",
      modernLegacy: "Israeli water technology exported globally. Netafim drip irrigation serves 110+ countries. Israeli experts consult on water projects worldwide.",
      sources: [
        "Siegel, S. Let There Be Water: Israel's Solution for a Water-Starved World",
        "Kislev, Y. The Water Economy of Israel"
      ]
    },
    {
      id: "great-zimbabwe",
      name: "Great Zimbabwe",
      region: "Southern Africa (Zimbabwe, Mozambique)",
      period: {
        start: 1100,
        end: 1450,
        era: "Medieval African Kingdom"
      },
      summary: "Africa's largest medieval city supported 20,000 people with sophisticated urban water management integrated into its famous stone walls.",
      waterChallenges: [
        "Supplying a large urban population on a granite plateau",
        "Managing seasonal rainfall variability",
        "Protecting royal compound water sources",
        "Draining massive stone structures"
      ],
      inventions: ["zimbabwe-drainage", "zimbabwe-well"],
      keyInsight: "The Great Enclosure walls incorporate sophisticated drainage channels—the builders understood that water management was essential to preserving their monumental architecture.",
      engineerNotes: "Great Zimbabwe's stone walls are justly famous, but the drainage channels impressed me most. Water management was built into the architecture from the start. The stone-lined well within the Great Enclosure ensured the royal compound had secure water year-round. This was urban planning at a sophisticated level, serving 10,000-20,000 residents.",
      modernLegacy: "Great Zimbabwe symbolizes African engineering achievement. Its water management techniques influenced settlement patterns throughout southern Africa.",
      sources: [
        "Pikirayi, I. The Zimbabwe Culture",
        "Beach, D. The Shona and Zimbabwe"
      ]
    },
    {
      id: "tokyo-underground",
      name: "Modern Japan (G-Cans)",
      region: "Greater Tokyo Area, Japan",
      period: {
        start: 1993,
        end: 2026,
        era: "Modern Era"
      },
      summary: "The Metropolitan Area Outer Underground Discharge Channel (G-Cans) is the world's largest underground flood control facility—a cathedral-like space protecting 13 million Tokyo residents.",
      waterChallenges: [
        "Protecting Tokyo from typhoon flooding",
        "Managing water in densely built urban area",
        "Handling extreme rainfall events",
        "Minimizing surface disruption during construction"
      ],
      inventions: ["g-cans", "super-levee"],
      keyInsight: "G-Cans can move 200 tons of water per second—essentially an underground river protecting one of the world's largest cities from flooding.",
      engineerNotes: "Walking into the G-Cans pressure-adjusting water tank is like entering a temple. 59 pillars, each 18 meters tall and 500 tons. The system connects 5 massive silos via 6.4 km of tunnels. It's captured the nickname 'Underground Temple' but it's pure engineering genius. The super-levees represent another innovation—accepting that floods will overtop and designing for resilience.",
      modernLegacy: "G-Cans has become a model for urban flood control worldwide. Japanese flood management expertise is exported globally.",
      sources: [
        "Japan Ministry of Land, Infrastructure, Transport and Tourism",
        "Nakamura, T. Tokyo's Underground Infrastructure"
      ]
    },
    {
      id: "cambodia-khmer",
      name: "Khmer Empire (Angkor)",
      region: "Cambodia and Southeast Asia",
      period: {
        start: 802,
        end: 1431,
        era: "Medieval Period"
      },
      summary: "Angkor was the world's largest pre-industrial city, supporting up to 1 million people through history's most extensive water management system—barays, canals, and moats spanning 1,000 square kilometers.",
      waterChallenges: [
        "Supporting massive urban population in tropical monsoon climate",
        "Storing water through long dry season",
        "Enabling 3-4 rice harvests per year",
        "Managing flood and drought cycles"
      ],
      inventions: ["west-baray", "angkor-moat", "khmer-canals"],
      keyInsight: "The West Baray held 56 million cubic meters of water in an 8km x 2km reservoir—the largest hand-dug reservoir in human history, still holding water today.",
      engineerNotes: "The scale of Angkor's hydraulic system defies imagination. Over 1,000 km of canals connected to massive barays. The 200-meter-wide moat around Angkor Wat isn't just symbolic—it prevents foundation erosion and provides irrigation. Recent research suggests the water system's eventual failure may have contributed to Angkor's decline. They engineered a city for a million people—and when the system broke down, so did the empire.",
      modernLegacy: "Angkor's hydraulic engineering influenced rice cultivation throughout Southeast Asia. The barays remain important for modern Cambodian agriculture and tourism.",
      sources: [
        "Fletcher, R. et al. The Water Management of Angkor",
        "Coe, M. Angkor and the Khmer Civilization"
      ]
    },
    {
      id: "vietnam",
      name: "Vietnam",
      region: "Mainland Southeast Asia",
      period: {
        start: 200,
        end: 2026,
        era: "Classical through Modern"
      },
      summary: "Vietnam's civilization was built on managing two great deltas—the Red River and the Mekong. 3,000 km of dikes protect the north; 4,500 km of canals transformed the southern swamps.",
      waterChallenges: [
        "Protecting densely populated deltas from flooding",
        "Managing 4-6 meter annual flood variations",
        "Preventing saltwater intrusion in rice paddies",
        "Continuous dike maintenance for 2,000 years"
      ],
      inventions: ["red-river-dikes", "cong-gates", "mekong-canals", "floating-rice"],
      keyInsight: "Floating rice varieties can grow stems up to 6 meters as floodwaters rise—a genetic innovation allowing farming where conventional rice would drown.",
      engineerNotes: "The Red River dike system represents 2,000 years of continuous maintenance. One breach could flood Hanoi. The cống sluice gates that prevent saltwater intrusion are elegant: simple gravity-operated floodgates. In the Mekong, I was fascinated by floating rice—varieties that literally grow with the flood, keeping their heads above water even as floods rise 4-6 meters annually.",
      modernLegacy: "Vietnam is now a major rice exporter, built on this delta management heritage. Dutch engineers consult on Mekong Delta climate adaptation.",
      sources: [
        "Biggs, D. Quagmire: Nation-Building and Nature in the Mekong Delta",
        "Mekong River Commission reports"
      ]
    },
    {
      id: "dubai-uae",
      name: "Dubai & UAE",
      region: "Arabian Peninsula",
      period: {
        start: -1000,
        end: 2026,
        era: "Ancient through Modern"
      },
      summary: "The UAE's water story is the most compressed transformation in hydraulic engineering history—from 3,000-year-old underground falaj channels sustaining tiny oasis settlements to a modern nation producing over 14 million cubic meters of desalinated water per day, all within a single generation. With no permanent rivers, under 120 mm annual rainfall, and a population that exploded from 180,000 to over 10 million in 50 years, the UAE has deployed every conceivable water technology: ancient gravity-fed tunnels, mega-scale desalination, cloud seeding, wastewater reuse at 89%, and the hydrodynamic engineering of artificial islands.",
      waterChallenges: [
        "One of the world's driest climates—under 120 mm annual rainfall, temperatures exceeding 50°C",
        "No permanent rivers, lakes, or natural freshwater sources",
        "Explosive population growth from 180,000 (1968) to 10+ million (2024) requiring complete water infrastructure reinvention",
        "Persian Gulf source water has exceptionally high salinity (40,000-45,000 ppm)—among the most challenging for desalination globally",
        "Maintaining marine ecology around 78 km of artificial coastline (Palm Jumeirah) and managing brine discharge from desalination",
        "Groundwater depletion: natural aquifers being consumed 25x faster than natural recharge rates"
      ],
      inventions: ["falaj-system", "al-ain-traditional-wells", "mega-desalination", "cloud-seeding", "uae-wastewater-reuse", "palm-water-engineering", "masdar-water-conservation", "dubai-stormwater-network", "dubai-flood-resilience"],
      keyInsight: "The UAE went from total dependence on ancient falaj channels to producing 14+ million cubic meters of desalinated water per day—a complete transformation in one generation. But the real lesson is their portfolio approach: no single technology solves desert water scarcity. The UAE combines desalination (42% of supply), groundwater (36%), treated wastewater reuse (12%), cloud seeding, and aggressive conservation—each technology filling a different niche in the water security puzzle. The April 2024 floods (164 mm in 24 hours—75-year record) and the subsequent $8 billion stormwater investment prove that even the driest cities must now plan for extreme rainfall in an era of climate change.",
      engineerNotes: "Walking through the Al Ain oasis (UNESCO World Heritage) and seeing falaj channels still flowing after 3,000 years—then driving 90 minutes to Dubai's Jebel Ali desalination plant producing 2 million cubic meters per day—captures the full arc of human water engineering in one afternoon. The falaj builders solved the same problem as modern engineers (getting water to people in a desert) but with opposite approaches: underground channels that minimize evaporation versus brute-force thermal distillation at industrial scale. The cloud seeding program conducting 300+ annual missions represents yet a third strategy—modifying weather itself. And Palm Jumeirah? Engineering a tidal flushing system to maintain water quality across 78 km of artificial coastline on a palm-shaped island is pure audacity. What impresses me most is the UAE's wastewater reuse rate at 89%—they understand that in a desert, you use every drop multiple times. Masdar City's 54% reduction in per-capita water use through integrated design shows the future direction: not just producing more water, but fundamentally rethinking how cities consume it. The April 2024 floods were a wake-up call—164 mm of rain in 24 hours overwhelmed a city built for 120 mm per year. The $8 billion stormwater response is being designed using Autodesk InfoWorks ICM for city-scale 1D/2D flood modeling, Civil 3D with Storm and Sanitary Analysis for detailed pipe network design, and EPA SWMM5 for hydraulic simulation. The April 2024 storm data provides invaluable calibration—you can validate your model against a real extreme event. InfoWorks ICM is particularly powerful here because it handles integrated catchment modeling at the scale Dubai needs (20+ million cubic meters per day capacity), with climate scenario testing built in through SWMM-CAT projections for 2030-2050 rainfall intensities.",
      modernLegacy: "UAE desalination technology and operational expertise deployed globally, informing water strategy for rapidly developing arid regions from Saudi Arabia to North Africa to Australia. The Masdar City model influences sustainable desert urbanism worldwide. The UAE's Water Security Strategy 2036 aims to reduce total water demand by 21% and ensure 100% of wastewater is treated and reused—a blueprint for water-scarce nations everywhere. The $8 billion Dubai stormwater investment (2024-2033) is being designed with Autodesk water infrastructure tools including InfoWorks ICM, Civil 3D, and InfoDrainage—the same software used to model ancient hydraulic systems in this app's SWMM5 model collection. Dubai's experience demonstrates that modern water engineering increasingly requires integrated modeling platforms capable of handling desalination supply, wastewater reuse, stormwater drainage, and coastal management as interconnected systems rather than separate problems.",
      sources: [
        "Brook, D. A History of Future Cities (Dubai chapter)",
        "Al Ain UNESCO World Heritage documentation (2011 inscription)",
        "Dubai Electricity and Water Authority (DEWA) Annual Reports",
        "UAE Water Security Strategy 2036, Ministry of Energy and Infrastructure",
        "Dawoud, M.A. (2012). 'Environmental Impacts of Seawater Desalination: Arabian Gulf Case Study.' International Journal of Environment and Sustainability",
        "2024 United Arab Emirates floods, Wikipedia / NASA Earth Observatory",
        "Dubai to build $8 bn stormwater runoff system after record floods, Phys.org (June 2024)",
        "Autodesk InfoWorks ICM documentation: https://www.autodesk.com/products/infoworks-icm/overview",
        "EPA SWMM5: https://www.epa.gov/water-research/storm-water-management-model-swmm"
      ]
    },
    {
      id: "ancient-yemen",
      name: "Ancient Yemen (Sheba)",
      region: "Southern Arabian Peninsula",
      period: {
        start: -1700,
        end: 600,
        era: "Ancient Period"
      },
      summary: "The Marib Dam supported the legendary Sheba kingdom for nearly 1,500 years. Its collapse around 575 CE triggered mass migrations that reshaped Arabia.",
      waterChallenges: [
        "Harvesting flash floods in seasonal wadis",
        "Storing water through 9-month dry seasons",
        "Irrigating enough land to support urban civilization",
        "Maintaining massive infrastructure over centuries"
      ],
      inventions: ["marib-dam", "ghayl-irrigation"],
      keyInsight: "The collapse of the Marib Dam around 575 CE triggered a diaspora mentioned in the Quran—proof that water infrastructure failure can end civilizations.",
      engineerNotes: "The Marib Dam irrigated 9,600 hectares and supported 50,000 people for nearly 1,500 years. When it finally failed—undermined by centuries of silt accumulation—the population dispersed across Arabia. It's a sobering reminder: even the greatest infrastructure eventually fails without continuous maintenance. Yemen is rebuilding a modern Marib Dam today, directly inspired by the ancient one.",
      modernLegacy: "The new Marib Dam (2012) was built near the ancient site. Yemeni terrace agriculture continues using traditional ghayl channels.",
      sources: [
        "Schippmann, K. Ancient South Arabia",
        "Breton, J.F. Arabia Felix from the Time of the Queen of Sheba"
      ]
    },
    {
      id: "bengal",
      name: "Bengal (Bangladesh)",
      region: "Ganges-Brahmaputra Delta",
      period: {
        start: -500,
        end: 2026,
        era: "Ancient through Modern"
      },
      summary: "Bangladesh lives with the world's largest river delta—mastering annual flooding through floating gardens, khal canals, and cyclone shelters that have saved millions of lives.",
      waterChallenges: [
        "Annual monsoon flooding of vast areas",
        "Cyclone storm surges from Bay of Bengal",
        "Managing the world's largest river delta",
        "Adapting to rising sea levels"
      ],
      inventions: ["floating-gardens-baira", "khal-system", "cyclone-shelter"],
      keyInsight: "Baira floating gardens allow farming even when land is underwater—climate-resilient agriculture developed over centuries in one of Earth's most flood-prone regions.",
      engineerNotes: "Bangladesh doesn't fight floods—they live with them. Baira floating gardens grow vegetables on water hyacinth rafts during monsoon floods. The khal canal system provides natural flood management while serving as transportation highways. After the 1970 cyclone killed 500,000 people, they built elevated cyclone shelters throughout coastal areas—saving millions in subsequent storms. This is adaptation at civilizational scale.",
      modernLegacy: "Bangladesh's floating agriculture studied for climate adaptation. Their cyclone early warning and shelter system is a global model.",
      sources: [
        "Sultana, P. Participatory Floodplain Management in Bangladesh",
        "World Bank. The Costs of Adapting to Climate Change for Bangladesh"
      ]
    },
    {
      id: "al-andalus",
      name: "Al-Andalus (Islamic Spain)",
      region: "Iberian Peninsula",
      period: {
        start: 711,
        end: 1492,
        era: "Medieval Islamic Period"
      },
      summary: "Islamic engineers transformed Spain with acequia irrigation, garden fountains, and the world's oldest continuously operating water court—still meeting every Thursday in Valencia.",
      waterChallenges: [
        "Irrigating semi-arid Mediterranean landscape",
        "Bringing Persian/Middle Eastern techniques to Iberia",
        "Managing water rights across multiple communities",
        "Creating garden paradise in dry climate"
      ],
      inventions: ["acequia-system", "water-tribunal", "alhambra-fountains", "noria-seville"],
      keyInsight: "The Water Tribunal of Valencia has met every Thursday for over 1,000 years—UNESCO Intangible Heritage and the world's oldest continuously operating water court.",
      engineerNotes: "Al-Andalus brought qanat/falaj expertise to Spain, creating the acequia irrigation systems that still water Valencia's huerta. The Alhambra's water features demonstrate hydraulic sophistication—gravity-fed fountains, gardens designed around water sound and sight. But the Water Tribunal impresses me most: 1,000+ years of continuous democratic water governance. When Spanish colonizers went to the Americas, they brought acequia technology with them.",
      modernLegacy: "Acequia irrigation still used in Spain and New Mexico. The Water Tribunal continues operating. Spanish water law influenced Latin America.",
      sources: [
        "Glick, T. Irrigation and Society in Medieval Valencia",
        "Ruggles, D.F. Islamic Gardens and Landscapes"
      ]
    },
    {
      id: "philippines",
      name: "Philippines (Ifugao)",
      region: "Philippine Archipelago",
      period: {
        start: 0,
        end: 2026,
        era: "Ancient through Present"
      },
      summary: "The Banaue Rice Terraces are called the 'Eighth Wonder of the World'—2,000 years of continuous mountain cultivation with sophisticated irrigation protected by sacred forests.",
      waterChallenges: [
        "Creating farmland on steep mountain slopes",
        "Distributing spring water across terraces",
        "Preventing erosion on carved hillsides",
        "Maintaining 10,000+ km of terrace walls"
      ],
      inventions: ["banaue-terraces", "bamboo-irrigation", "muyong"],
      keyInsight: "Muyong sacred forests above the terraces were protected by death penalty for tree cutting—the Ifugao understood watershed protection 2,000 years before the term existed.",
      engineerNotes: "If laid end-to-end, the Banaue terraces would stretch halfway around the Earth. Built entirely by hand, maintained for 2,000 years, still productive today. The bamboo pipe irrigation delivers 18-20 liters per minute using only gravity. But the muyong forests impressed me most: traditional conservation understanding that the terraces would fail without their watersheds. They protected forests with the death penalty when we were still draining wetlands.",
      modernLegacy: "UNESCO World Heritage site. Ifugao water management informs sustainable agriculture and watershed conservation globally.",
      sources: [
        "Conklin, H. Ethnographic Atlas of Ifugao",
        "UNESCO Banaue Rice Terraces documentation"
      ]
    },
    {
      id: "nan-madol",
      name: "Nan Madol",
      region: "Pohnpei, Federated States of Micronesia",
      period: {
        start: 1200,
        end: 1500,
        era: "Pacific Ceremonial Period"
      },
      summary: "The 'Venice of the Pacific'—92 artificial islands built from 750,000 tons of basalt, connected by canals, with a freshwater mystery archaeologists still debate.",
      waterChallenges: [
        "Building on coral reef with no freshwater source",
        "Transporting 750,000 tons of basalt to reef",
        "Supplying 1,000+ residents with drinking water",
        "Managing tidal flows through canal network"
      ],
      inventions: ["nan-madol-canals", "nan-madol-cisterns"],
      keyInsight: "How did 1,000+ people get fresh water on coral reef islands? Rainwater cisterns? Underwater springs? The mystery of Nan Madol's water supply remains unsolved.",
      engineerNotes: "Nan Madol is the most enigmatic site I've studied. 92 artificial islands, 750,000 tons of basalt 'logs' transported to a coral reef, elaborate canal network. But where did they get freshwater? The site is surrounded by seawater. Possible rainwater cisterns, possible submarine springs—we still don't know. The canals themselves are engineering marvels, designed to handle tidal flows.",
      modernLegacy: "UNESCO World Heritage site. Nan Madol demonstrates Pacific Island engineering sophistication and remains a subject of ongoing archaeological research.",
      sources: [
        "Athens, J.S. Nan Madol: The City Built on Coral",
        "UNESCO Nan Madol documentation"
      ]
    },
    {
      id: "ethiopia",
      name: "Ethiopian Highlands",
      region: "East Africa (Horn of Africa)",
      period: {
        start: -500,
        end: 2026,
        era: "Ancient through Present"
      },
      summary: "From the rock-hewn reservoirs of Axum to the drainage systems protecting Lalibela's churches, Ethiopian engineering adapted brilliantly to highland terrain.",
      waterChallenges: [
        "Managing water on the 'Roof of Africa'",
        "Storing water through long dry seasons",
        "Protecting rock-cut architecture from water damage",
        "Supplying ancient trading city with no nearby river"
      ],
      inventions: ["mai-shum", "lalibela-drainage"],
      keyInsight: "Lalibela's 11 rock-hewn churches have survived 800 years because their builders understood water. Drainage channels carved into solid rock prevent the erosion that destroys most ancient sites.",
      engineerNotes: "Mai Shum (Queen of Sheba's Bath) at Axum is a massive rock-cut reservoir still used for baptisms today. At Lalibela, the drainage engineering protecting the rock-hewn churches astonished me—channels carved from living rock that have prevented erosion for 800 years. Ethiopian engineers understood that protecting their monumental architecture meant controlling water.",
      modernLegacy: "Ethiopian traditional water management informs modern highland agriculture. The Grand Ethiopian Renaissance Dam represents the latest chapter in Ethiopian hydraulic ambition.",
      sources: [
        "Finneran, N. The Archaeology of Ethiopia",
        "Phillipson, D.W. Ancient Ethiopia"
      ]
    }
  ]
};

export function getExpertCivilizationById(id: string): ExpertCivilization | undefined {
  return expertCivilizationsDatabase.civilizations.find(civ => civ.id === id);
}

export function getCivilizationsByEra(era: string): ExpertCivilization[] {
  return expertCivilizationsDatabase.civilizations.filter(civ =>
    civ.period.era.toLowerCase().includes(era.toLowerCase())
  );
}

export function formatCivilizationPeriod(period: CivilizationPeriod): string {
  const formatYear = (year: number) => year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;
  return `${formatYear(period.start)} - ${formatYear(period.end)}`;
}
