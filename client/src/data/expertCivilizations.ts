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
    version: "1.1",
    totalCivilizations: 28,
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
