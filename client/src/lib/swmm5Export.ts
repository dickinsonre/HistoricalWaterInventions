export const inventionToSwmmModel: Record<string, string> = {
  'shaduf': 'shaduf',
  'qanat-plans': 'qanat',
  'aqueduct': 'roman-aqueduct',
  'roman-aqueduct': 'roman-aqueduct',
  'dujiangyan': 'dujiangyan',
  'barays': 'baray',
  'west-baray': 'baray',
  'great-bath': 'indus-sewer',
  'drain-system': 'indus-sewer',
  'clepsydra': 'archimedes-screw',
  'archimedes-screw': 'archimedes-screw',
  'cloaca-maxima': 'cloaca-maxima',
  'minoan-drainage': 'minoan-drainage',
  'nabataean-cisterns': 'nabataean-cistern',
  'petra-cistern': 'nabataean-cistern',
  'greek-fountain': 'greek-fountain',
  'aguada': 'mayan-aguada',
  'mayan-aguada': 'mayan-aguada',
  'machu-picchu': 'inca-machu-picchu',
  'tipon': 'inca-tipon',
  'andenes': 'andenes',
  'inca-terraces': 'andenes',
  'subak': 'subak',
  'rice-terraces': 'subak',
  'fish-traps': 'brewarrina-fish-traps',
  'gnamma-holes': 'gnamma-holes',
  'tanada': 'tanada',
  'windmill': 'dutch-windmill',
  'polders': 'dutch-polder',
  'stepwell': 'indian-stepwell',
  'ahupuaa': 'ahupuaa',
  'qat-irrigation': 'ethiopian-terraces',
  'nilometer': 'shaduf',
  'irrigation-tablet': 'shaduf',
  'jerwan-aqueduct': 'roman-aqueduct',
  'reservoir-plans': 'sri-lanka-tank',
  'eri-cascade': 'sri-lanka-tank',
  'ondol': 'ondol-ondol'
};

export function getSwmmModelForInvention(inventionId: string): SWMM5Model | null {
  const modelId = inventionToSwmmModel[inventionId];
  if (modelId && SWMM5_MODELS[modelId]) {
    return SWMM5_MODELS[modelId];
  }
  return null;
}

export function hasSwmmModel(inventionId: string): boolean {
  return inventionId in inventionToSwmmModel;
}

export interface SWMM5ModelParams {
  length?: number;
  slope?: number;
  flowRate?: number;
  channelWidth?: number;
  channelDepth?: number;
  roughness?: number;
  tunnelDiameter?: number;
  shaftSpacing?: number;
  volume?: number;
  catchmentArea?: number;
  pipeDiameter?: number;
  reservoirDepth?: number;
  numCisterns?: number;
  cisternVolume?: number;
}

export interface SWMM5Model {
  name: string;
  description: string;
  civilization: string;
  period: string;
  parameters: SWMM5ModelParams;
  engineeringNotes?: string;
}

export const SWMM5_MODELS: Record<string, SWMM5Model> = {
  'roman-aqueduct': {
    name: 'Roman Aqueduct (Aqua Claudia Style)',
    description: 'Gravity-fed water transport from mountain source to city',
    civilization: 'Roman Empire',
    period: '38-52 CE',
    parameters: {
      length: 50000,
      slope: 0.002,
      flowRate: 0.5,
      channelWidth: 1.2,
      channelDepth: 0.8,
      roughness: 0.015
    },
    engineeringNotes: 'Maintained 0.1-0.3% grades over tens of kilometers using chorobates and groma surveying tools'
  },
  'qanat': {
    name: 'Persian Qanat System',
    description: 'Underground gravity-fed tunnel from aquifer to surface',
    civilization: 'Ancient Persia',
    period: '1000 BCE - Present',
    parameters: {
      length: 20000,
      slope: 0.001,
      flowRate: 0.05,
      tunnelDiameter: 1.0,
      shaftSpacing: 50,
      roughness: 0.025
    },
    engineeringNotes: 'Over 37,000 qanats still operate in Iran today. Some are 70+ km long, operating for 2,500 years'
  },
  'shaduf': {
    name: 'Egyptian Shaduf Irrigation',
    description: 'Manual water-lifting system feeding irrigation canals',
    civilization: 'Ancient Egypt',
    period: '1550 BCE',
    parameters: {
      length: 500,
      slope: 0.001,
      flowRate: 0.01,
      channelWidth: 0.5,
      channelDepth: 0.3,
      roughness: 0.030
    }
  },
  'egyptian-canal': {
    name: 'Egyptian Irrigation Canal',
    description: 'Nile flood distribution system with basin irrigation',
    civilization: 'Ancient Egypt',
    period: '3100 BCE',
    parameters: {
      length: 5000,
      slope: 0.0005,
      flowRate: 2.0,
      channelWidth: 3.0,
      channelDepth: 1.5,
      roughness: 0.030
    },
    engineeringNotes: 'Basin irrigation captured Nile flood waters, allowing sediment deposition and gradual infiltration'
  },
  'dujiangyan': {
    name: 'Dujiangyan Irrigation System',
    description: 'Ancient Chinese flood control and irrigation without a dam',
    civilization: 'Ancient China',
    period: '256 BCE',
    parameters: {
      length: 8000,
      slope: 0.002,
      flowRate: 100,
      channelWidth: 50,
      channelDepth: 5,
      roughness: 0.035
    },
    engineeringNotes: 'Still irrigates 5,300 km² of farmland. Uses Fish Mouth levee to split flow 40/60'
  },
  'baray': {
    name: 'Khmer Baray Reservoir',
    description: 'Massive water storage for monsoon management at Angkor',
    civilization: 'Khmer Empire',
    period: '802-1431 CE',
    parameters: {
      length: 8000,
      volume: 50000000,
      flowRate: 10,
      channelWidth: 20,
      channelDepth: 3,
      reservoirDepth: 5,
      roughness: 0.025
    },
    engineeringNotes: 'West Baray held 50 million m³, could irrigate 26,000 hectares of rice paddies'
  },
  'minoan-drainage': {
    name: 'Minoan Palace Drainage (Knossos)',
    description: 'Sophisticated palace stormwater and wastewater system with terracotta pipes',
    civilization: 'Minoan Crete',
    period: '2000-1450 BCE',
    parameters: {
      catchmentArea: 20000,
      slope: 0.02,
      pipeDiameter: 0.15,
      roughness: 0.013,
      length: 500
    },
    engineeringNotes: 'First known closed-pipe water system. Featured tapered terracotta pipes and flush toilets'
  },
  'cloaca-maxima': {
    name: 'Roman Cloaca Maxima',
    description: 'Ancient sewer system still functioning after 2,600 years',
    civilization: 'Roman Empire',
    period: '600 BCE',
    parameters: {
      length: 1600,
      slope: 0.003,
      flowRate: 5,
      channelWidth: 4,
      channelDepth: 3,
      roughness: 0.018
    },
    engineeringNotes: 'Originally open channel, later vaulted. Still carries stormwater through Rome today'
  },
  'maalga-cisterns': {
    name: 'Carthage La Malga Cisterns',
    description: '24 parallel cisterns holding 60 million liters',
    civilization: 'Carthage',
    period: '2nd Century CE',
    parameters: {
      length: 132000,
      slope: 0.001,
      flowRate: 1,
      channelWidth: 1.5,
      channelDepth: 1.0,
      numCisterns: 24,
      cisternVolume: 2500000,
      roughness: 0.015
    },
    engineeringNotes: 'Fed by 132 km aqueduct from Zaghouan. Each cistern 100m x 8m x 5m deep'
  },
  'water-mill': {
    name: 'Medieval Water Mill',
    description: 'Water-powered mill race and wheel system',
    civilization: 'Medieval Europe',
    period: '500-1500 CE',
    parameters: {
      length: 200,
      slope: 0.05,
      flowRate: 0.5,
      channelWidth: 2,
      channelDepth: 1,
      roughness: 0.025
    }
  },
  'indus-sewer': {
    name: 'Indus Valley Sewer System',
    description: 'World\'s first urban drainage network at Mohenjo-daro',
    civilization: 'Indus Valley',
    period: '2600-1900 BCE',
    parameters: {
      length: 2000,
      slope: 0.01,
      flowRate: 0.2,
      channelWidth: 0.5,
      channelDepth: 0.6,
      roughness: 0.020
    },
    engineeringNotes: 'Brick-lined drains with manholes. Every house connected to main drainage'
  },
  'nabataean-cistern': {
    name: 'Nabataean Cistern System (Petra)',
    description: 'Desert water harvesting and storage in rock-cut cisterns',
    civilization: 'Nabataean Kingdom',
    period: '4th Century BCE',
    parameters: {
      catchmentArea: 50000,
      volume: 200000,
      pipeDiameter: 0.2,
      slope: 0.02,
      roughness: 0.020,
      length: 1000
    },
    engineeringNotes: 'Captured flash floods in 200+ cisterns. Sustained 30,000 people in the desert'
  },
  'greek-fountain': {
    name: 'Greek Fountain House',
    description: 'Public water distribution with multiple spouts',
    civilization: 'Ancient Greece',
    period: '600-300 BCE',
    parameters: {
      length: 500,
      slope: 0.005,
      flowRate: 0.1,
      pipeDiameter: 0.15,
      roughness: 0.015
    },
    engineeringNotes: 'Krene (fountain houses) were social centers with multiple lion-head spouts'
  },
  'archimedes-screw': {
    name: 'Archimedes Screw',
    description: 'Helical pump for lifting water to higher elevations',
    civilization: 'Ancient Greece/Egypt',
    period: '250 BCE',
    parameters: {
      length: 10,
      slope: 0.3,
      flowRate: 0.02,
      tunnelDiameter: 0.5,
      roughness: 0.015
    },
    engineeringNotes: 'Still used today for low-head, high-volume pumping. Fish-friendly design'
  },
  'mayan-aguada': {
    name: 'Mayan Aguada Reservoir',
    description: 'Seasonal water storage in jungle lowlands',
    civilization: 'Mesoamerica',
    period: '600-900 CE',
    parameters: {
      volume: 100000,
      catchmentArea: 100000,
      slope: 0.001,
      channelWidth: 5,
      channelDepth: 2,
      roughness: 0.030
    },
    engineeringNotes: 'Clay-lined reservoirs collected rainfall during wet season for dry months'
  },
  'sri-lanka-tank': {
    name: 'Sri Lankan Tank Cascade',
    description: 'Interconnected reservoir system for rice irrigation',
    civilization: 'Ancient Sri Lanka',
    period: '300 BCE',
    parameters: {
      length: 5000,
      volume: 10000000,
      flowRate: 5,
      channelWidth: 10,
      channelDepth: 2,
      roughness: 0.025
    },
    engineeringNotes: 'Thousands of tanks connected in cascades, with sophisticated sluice gates (bisokotuwa)'
  },
  'inca-machu-picchu': {
    name: 'Machu Picchu Water Supply System',
    description: '749m canal feeding 16 cascading fountains at 2,430m elevation',
    civilization: 'Inca Empire',
    period: '1450 CE',
    parameters: {
      length: 749,
      slope: 0.03,
      flowRate: 0.8,
      channelWidth: 0.15,
      channelDepth: 0.16,
      roughness: 0.015
    },
    engineeringNotes: 'Still functions after 500+ years. City location chosen based on spring assessment—water drove urban planning'
  },
  'inca-tipon': {
    name: 'Tipón Hydraulic Complex',
    description: 'Royal water garden with 13 terraces and precisely calibrated canals',
    civilization: 'Inca Empire',
    period: '1400 CE',
    parameters: {
      length: 500,
      slope: 0.05,
      flowRate: 0.5,
      channelWidth: 0.3,
      channelDepth: 0.2,
      roughness: 0.015
    },
    engineeringNotes: 'May have been a hydraulic engineering laboratory. Polished stone walls with decorative waterfalls'
  },
  'andenes': {
    name: 'Inca Andenes (Agricultural Terraces)',
    description: 'Mountain terraces with integrated irrigation across the Andes',
    civilization: 'Inca Empire',
    period: '1400 CE',
    parameters: {
      length: 2000,
      slope: 0.15,
      flowRate: 0.3,
      channelWidth: 0.4,
      channelDepth: 0.3,
      roughness: 0.025
    },
    engineeringNotes: 'Stone walls absorbed heat during day, released at night for frost protection. Being revived today for climate adaptation'
  },
  'subak': {
    name: 'Balinese Subak Irrigation System',
    description: 'Community-owned rice terrace irrigation coordinated by water temples',
    civilization: 'Balinese (Subak)',
    period: '9th Century CE - Present',
    parameters: {
      length: 3000,
      slope: 0.02,
      flowRate: 2.0,
      channelWidth: 0.5,
      channelDepth: 0.3,
      roughness: 0.025
    },
    engineeringNotes: 'UNESCO World Heritage. Water temples coordinate planting cycles—synchronized flooding controls pests. Proves water management is social organization, not just engineering'
  },
  'brewarrina-fish-traps': {
    name: 'Brewarrina Fish Traps (Baiame\'s Ngunnhu)',
    description: 'World\'s oldest human structure: 40,000-year-old stone fish traps',
    civilization: 'Aboriginal Australia',
    period: '40,000 BCE - Present',
    parameters: {
      length: 500,
      slope: 0.001,
      flowRate: 50,
      channelWidth: 5,
      channelDepth: 1.5,
      roughness: 0.040
    },
    engineeringNotes: 'Dry stone walls in Barwon River designed for seasonal flooding. Managed communally by multiple Aboriginal nations for millennia. Still functioning today'
  },
  'gnamma-holes': {
    name: 'Aboriginal Gnamma Holes',
    description: 'Rock-cut water storage along songlines in world\'s driest continent',
    civilization: 'Aboriginal Australia',
    period: '10,000+ years BP',
    parameters: {
      volume: 500,
      catchmentArea: 100,
      slope: 0.01,
      roughness: 0.025
    },
    engineeringNotes: 'Natural rock hollows enlarged and sealed with spinifex resin. Covered to prevent evaporation. Part of complex water route networks passed through oral tradition'
  },
  'japanese-suido': {
    name: 'Japanese Suido Water Conduit',
    description: 'Bamboo and ceramic pipe networks supplying castle towns',
    civilization: 'Ancient Japan',
    period: '1590 CE - Present',
    parameters: {
      length: 5000,
      slope: 0.01,
      flowRate: 1.0,
      pipeDiameter: 0.15,
      roughness: 0.020
    },
    engineeringNotes: 'Tokyo\'s Tamagawa Josui (1653) supplied water for 300 years. Some sections still in use. Early closed-pipe urban water supply'
  },
  'tanada-terraces': {
    name: 'Japanese Tanada Rice Terraces',
    description: 'Mountain rice paddies with intricate water distribution',
    civilization: 'Ancient Japan',
    period: '300 BCE onwards',
    parameters: {
      length: 1000,
      slope: 0.08,
      flowRate: 0.5,
      channelWidth: 0.3,
      channelDepth: 0.2,
      roughness: 0.030
    },
    engineeringNotes: 'Transformed Japanese landscape, supported population growth. Water rights (mizukumi) developed as sophisticated community agreements'
  },
  'dutch-polder': {
    name: 'Dutch Polder Drainage System',
    description: 'Land reclaimed from sea using dikes and windmill pumps',
    civilization: 'Dutch Netherlands',
    period: '1200 CE - Present',
    parameters: {
      length: 10000,
      slope: 0.0001,
      flowRate: 5.0,
      channelWidth: 8,
      channelDepth: 2,
      roughness: 0.025
    },
    engineeringNotes: 'Dutch reclaimed 1/3 of their country from sea. At peak, 10,000 windmills drained the polders. Kinderdijk is UNESCO World Heritage'
  },
  'kinderdijk-windmill': {
    name: 'Kinderdijk Windmill Drainage',
    description: 'UNESCO windmill system with scoop wheels lifting water',
    civilization: 'Dutch Netherlands',
    period: '15th Century CE',
    parameters: {
      length: 500,
      slope: 0.001,
      flowRate: 0.5,
      channelWidth: 3,
      channelDepth: 1.5,
      roughness: 0.020
    },
    engineeringNotes: 'Wind-powered scoop wheels lift water from polders to canals, then to rivers. Living museum of water management engineering'
  },
  'indian-stepwell': {
    name: 'Indian Stepwell (Vav/Baoli)',
    description: 'Multi-story subterranean architecture combining well, temple, and cooling retreat',
    civilization: 'Ancient India',
    period: '3rd-19th Century CE',
    parameters: {
      length: 50,
      reservoirDepth: 25,
      volume: 10000,
      slope: 0.5,
      roughness: 0.015
    },
    engineeringNotes: 'Rani ki Vav (1063 CE) is UNESCO World Heritage—inverted temple descending 7 stories. Combines water access with shelter from 45°C heat'
  },
  'johad-dam': {
    name: 'Indian Johad Rainwater Harvesting',
    description: 'Traditional earthen dams reviving dried rivers in Rajasthan',
    civilization: 'Ancient India',
    period: 'Ancient - Present',
    parameters: {
      length: 200,
      slope: 0.01,
      volume: 50000,
      catchmentArea: 100000,
      roughness: 0.030
    },
    engineeringNotes: 'Modern revival by Rajendra Singh (Water Man of India) brought 5 rivers back to life. Simple earthen structures with profound impact'
  },
  'grand-anicut': {
    name: 'Grand Anicut (Kallanai Dam)',
    description: 'World\'s oldest water-diversion structure still in use',
    civilization: 'Ancient India',
    period: '2nd Century CE',
    parameters: {
      length: 329,
      slope: 0.001,
      flowRate: 500,
      channelWidth: 50,
      channelDepth: 5,
      roughness: 0.025
    },
    engineeringNotes: 'Built by Chola king Karikalan across Kaveri River. Still irrigates 400,000 hectares. Inspired later British irrigation works'
  },
  'loi-kalo': {
    name: 'Hawaiian Lo\'i Kalo (Taro Pondfield)',
    description: 'Sustainable flooded terraces for taro with continuous water flow',
    civilization: 'Hawaiian',
    period: '400 CE - Present',
    parameters: {
      length: 500,
      slope: 0.02,
      flowRate: 0.3,
      channelWidth: 0.4,
      channelDepth: 0.25,
      roughness: 0.030
    },
    engineeringNotes: 'Sustainable aquaculture—water flows through fields, supporting fish and taro together. Ahupua\'a land division followed watersheds from mountain to sea'
  },
  'auwai-irrigation': {
    name: 'Hawaiian \'Auwai Irrigation Ditch',
    description: 'Stone-lined channels diverting stream water to taro fields',
    civilization: 'Hawaiian',
    period: '400 CE onwards',
    parameters: {
      length: 1000,
      slope: 0.03,
      flowRate: 0.5,
      channelWidth: 0.5,
      channelDepth: 0.3,
      roughness: 0.025
    },
    engineeringNotes: 'Community-managed water systems with strict allocation rules. Konohiki (water manager) ensured fair distribution'
  },
  'lalibela-drainage': {
    name: 'Lalibela Church Drainage System',
    description: 'Sophisticated drainage protecting 800-year-old rock-hewn churches',
    civilization: 'Ethiopian Highlands',
    period: '12th Century CE',
    parameters: {
      length: 500,
      slope: 0.02,
      flowRate: 0.2,
      channelWidth: 0.3,
      channelDepth: 0.3,
      roughness: 0.020
    },
    engineeringNotes: '11 churches carved from single rock blocks. Drainage channels prevent erosion—system has protected churches for 800 years. UNESCO World Heritage'
  },
  'mai-shum': {
    name: 'Mai Shum (Queen of Sheba\'s Bath)',
    description: 'Ancient rock-carved reservoir in Axum still used for baptisms',
    civilization: 'Ethiopian Highlands',
    period: '1st Millennium BCE',
    parameters: {
      length: 50,
      volume: 5000,
      reservoirDepth: 10,
      slope: 0.01,
      roughness: 0.020
    },
    engineeringNotes: 'Massive rock-cut pool demonstrates advanced Aksumite engineering. Still fills with water and used for Timkat (Epiphany) celebrations'
  },
  'moray-terraces': {
    name: 'Moray Circular Agricultural Terraces',
    description: 'Inca experimental agricultural station with temperature-controlled microclimates',
    civilization: 'Inca Empire',
    period: '1400 CE',
    parameters: {
      length: 300,
      slope: 0.10,
      flowRate: 0.2,
      channelWidth: 0.3,
      channelDepth: 0.2,
      roughness: 0.020
    },
    engineeringNotes: 'Each terrace level ~3°C different. May have been used to test crop varieties at different temperatures. Sophisticated irrigation from underground springs'
  },
  'tambomachay': {
    name: 'Tambomachay Sacred Springs',
    description: 'Bath of the Inca: sacred spring with ceremonial stone channels',
    civilization: 'Inca Empire',
    period: '1400 CE',
    parameters: {
      length: 100,
      slope: 0.05,
      flowRate: 0.3,
      channelWidth: 0.25,
      channelDepth: 0.2,
      roughness: 0.013
    },
    engineeringNotes: 'Spring emerges from hillside into beautifully carved stone channels. Precise stone cutting creates waterfalls of exact dimensions. Still flowing today'
  },
  'ollantaytambo': {
    name: 'Ollantaytambo Water Channels',
    description: 'Living Inca town with original water channels still in daily use',
    civilization: 'Inca Empire',
    period: '1450 CE',
    parameters: {
      length: 2000,
      slope: 0.02,
      flowRate: 1.0,
      channelWidth: 0.3,
      channelDepth: 0.25,
      roughness: 0.015
    },
    engineeringNotes: 'Stone channels run through streets of the last living Inca town. Original layout still intact. Residents still use the 500-year-old water system'
  },
  'african-foggara': {
    name: 'African Foggara (Khettara) System',
    description: 'Underground water channels bringing mountain groundwater to desert oases',
    civilization: 'Berber/Moroccan',
    period: '1000 BCE - Present',
    parameters: {
      length: 5000,
      slope: 0.003,
      flowRate: 0.02,
      tunnelDiameter: 1.5,
      shaftSpacing: 25,
      roughness: 0.030
    },
    engineeringNotes: 'African adaptation of Persian qanat. Some systems extend 10+ km with hundreds of shafts. UNESCO-recognized in Morocco. Water allocation measured by traditional copper water clocks'
  },
  'g-cans-tokyo': {
    name: 'G-Cans Metropolitan Flood Control',
    description: 'World\'s largest underground flood diversion system protecting Tokyo',
    civilization: 'Modern Japan',
    period: '1993-2006 CE',
    parameters: {
      length: 6300,
      tunnelDiameter: 10.0,
      flowRate: 200,
      volume: 670000,
      roughness: 0.013
    },
    engineeringNotes: '5 massive silos (65m deep, 32m diameter), 6.3km main tunnel, can move 200 m³/s. Protects 13 million Tokyo residents. Known as the "Underground Temple"'
  },
  'korean-byeokgolje': {
    name: 'Byeokgolje Reservoir System',
    description: 'One of Asia\'s oldest reservoirs with sophisticated sluice gate system',
    civilization: 'Ancient Korea',
    period: '330 CE',
    parameters: {
      length: 3300,
      volume: 20000000,
      reservoirDepth: 5,
      flowRate: 15,
      channelWidth: 2,
      roughness: 0.025
    },
    engineeringNotes: 'Built during Baekje Kingdom. Featured 5 wooden sluice gates (Sumunji). Stone-faced earthen dam (Piseok technique). Community water-sharing (Durye associations)'
  },
  'korean-cheonggye': {
    name: 'Cheonggye Stream Urban Water Management',
    description: 'Stone-lined urban stream with flood control through Seoul',
    civilization: 'Ancient Korea',
    period: '1411 CE restoration',
    parameters: {
      length: 5800,
      slope: 0.003,
      flowRate: 5,
      channelWidth: 10,
      channelDepth: 2,
      roughness: 0.020
    },
    engineeringNotes: 'Major urban waterway through Joseon capital. Buried under highway in 1958, restored 2005. Model for worldwide urban stream restoration movement'
  },
  'hawaiian-ahupuaa': {
    name: 'Hawaiian Ahupua\'a Watershed System',
    description: 'Complete mountain-to-sea watershed management with taro irrigation',
    civilization: 'Hawaiian',
    period: '1000 CE - Present',
    parameters: {
      length: 8000,
      slope: 0.08,
      flowRate: 2,
      channelWidth: 0.5,
      channelDepth: 0.3,
      roughness: 0.028
    },
    engineeringNotes: 'Land divided mountain-to-sea, each ahupua\'a self-sufficient. Upper forests protected for water supply. Strict konohiki (water manager) allocation system. Model for modern integrated watershed management'
  },
  'nan-madol-canals': {
    name: 'Nan Madol Canal System',
    description: 'Venice of the Pacific: canal network connecting 92 artificial islands',
    civilization: 'Saudeleur Dynasty (Pohnpei)',
    period: '1200-1500 CE',
    parameters: {
      length: 2000,
      channelWidth: 8,
      channelDepth: 2,
      roughness: 0.025
    },
    engineeringNotes: 'UNESCO World Heritage. Built with estimated 750,000 tons of basalt "logs". Mystery: how 1,000+ residents got freshwater on a marine site—possibly rainwater cisterns or underwater springs'
  },
  'great-zimbabwe-drainage': {
    name: 'Great Zimbabwe Drainage System',
    description: 'Stone-lined drains integrated into Africa\'s largest medieval city walls',
    civilization: 'Great Zimbabwe',
    period: '11th-15th Century CE',
    parameters: {
      length: 500,
      slope: 0.02,
      flowRate: 0.5,
      channelWidth: 0.4,
      channelDepth: 0.3,
      roughness: 0.022
    },
    engineeringNotes: 'Largest pre-colonial structure in sub-Saharan Africa. Drainage channels embedded in 5m thick curved walls. Supported 10,000-20,000 people. Controlled regional gold trade'
  },
  'engaruka-irrigation': {
    name: 'Engaruka Stone Canal System',
    description: 'Mysterious abandoned irrigation city that fed 40,000 people',
    civilization: 'Engaruka (Tanzania)',
    period: '15th-17th Century CE',
    parameters: {
      length: 10000,
      slope: 0.01,
      flowRate: 5,
      channelWidth: 1.5,
      channelDepth: 0.8,
      roughness: 0.028
    },
    engineeringNotes: 'Fed 6,000+ hectares of terraces. Stone-lined canals with sophisticated distribution. Supported 30,000-40,000 people. Abandoned ~1700 CE for unknown reasons—possibly climate change'
  },
  'sahel-zai-pits': {
    name: 'Sahel Zai Pit Water Harvesting',
    description: 'Traditional planting pits concentrating rainfall in degraded soil',
    civilization: 'Sahel Africa',
    period: 'Ancient - Present',
    parameters: {
      catchmentArea: 10000,
      volume: 5000,
      slope: 0.005,
      roughness: 0.035
    },
    engineeringNotes: 'Yacouba Sawadogo (Burkina Faso) revived ancient technique, transforming 3+ million hectares. Won Right Livelihood Award. Simple 20-30cm diameter pits with profound impact on food security'
  },
  'chamorro-latte': {
    name: 'Chamorro Latte Stone Rain Catchers',
    description: 'Mushroom-shaped stone pillars catching rain and channeling to gardens',
    civilization: 'Chamorro (Mariana Islands)',
    period: '1000 BCE - 1700 CE',
    parameters: {
      catchmentArea: 100,
      volume: 500,
      slope: 0.02,
      roughness: 0.020
    },
    engineeringNotes: 'Dual-function architecture: capstones (tasa) supported buildings while collecting rain. Water channeled to garden areas. Cultural symbol of Chamorro people'
  },
  'japanese-tanada': {
    name: 'Japanese Tanada (Rice Terraces)',
    description: 'Mountain rice paddies with gravity-fed irrigation and flood control',
    civilization: 'Ancient Japan',
    period: '300 BCE - Present',
    parameters: {
      length: 2000,
      slope: 0.08,
      flowRate: 1.5,
      channelWidth: 0.4,
      channelDepth: 0.25,
      roughness: 0.028
    },
    engineeringNotes: 'Over 2.5 million hectares in Japan. Community water allocation (mizu-bugyō). Terraces act as flood control reservoirs. UNESCO Globally Important Agricultural Heritage Systems'
  },
  'japanese-suikinkutsu': {
    name: 'Suikinkutsu (Water Koto Cave)',
    description: 'Buried ceramic pot creating musical sounds from dripping water',
    civilization: 'Edo Japan',
    period: '17th-19th Century CE',
    parameters: {
      length: 2,
      volume: 100,
      slope: 0.5,
      roughness: 0.013
    },
    engineeringNotes: 'Purely aesthetic water "instrument". Inverted pot buried in gravel, resonates like koto string instrument. Combines hydraulic engineering with art. Unique to Japanese garden culture'
  },
  'ayutthaya-moats': {
    name: 'Ayutthaya Island Moat System',
    description: 'Defensive moats and canals protecting the island capital of Siam',
    civilization: 'Siam (Ayutthaya Kingdom)',
    period: '1350-1767 CE',
    parameters: {
      length: 12000,
      channelWidth: 50,
      channelDepth: 4,
      slope: 0.0005,
      roughness: 0.025
    },
    engineeringNotes: 'Built at confluence of Chao Phraya, Pa Sak, and Lopburi rivers. 12km of moats plus internal klongs. Controlled by wooden gates. City lasted 400+ years until Burmese invasion'
  },
  'thai-klong-network': {
    name: 'Bangkok Klong (Canal) Network',
    description: 'Venice of the East: extensive canal system for transport and flood control',
    civilization: 'Siam (Rattanakosin)',
    period: '1782 CE - Present',
    parameters: {
      length: 100000,
      channelWidth: 15,
      channelDepth: 3,
      slope: 0.0002,
      roughness: 0.028
    },
    engineeringNotes: 'Over 1,100 klongs in Bangkok at peak. Floating markets, waterborne commerce. Many filled in for roads, but major klongs remain. Now integrated with modern flood control'
  },
  'sukhothai-reservoir': {
    name: 'Sukhothai Trapang Reservoir System',
    description: 'Royal reservoir system for the first Thai capital',
    civilization: 'Sukhothai Kingdom',
    period: '1238-1438 CE',
    parameters: {
      length: 500,
      volume: 500000,
      reservoirDepth: 3,
      slope: 0.005,
      roughness: 0.025
    },
    engineeringNotes: 'UNESCO World Heritage. Multiple trapang (ponds) supplied city and symbolized royal power. Phra Ruang Dam attributed to legendary king. Sophisticated for 13th century Southeast Asia'
  },
  'rani-ki-vav': {
    name: 'Rani ki Vav Stepwell',
    description: '7-story inverted temple stepwell with 500+ sculptures',
    civilization: 'Medieval India (Gujarat)',
    period: '1063 CE',
    parameters: {
      length: 64,
      volume: 10000,
      reservoirDepth: 27,
      slope: 0.15,
      roughness: 0.020
    },
    engineeringNotes: 'UNESCO World Heritage. Most ornate stepwell ever built. 27m deep with 7 levels of stairs. Natural cooling 6°C below surface. Water table access via ceremonial descent'
  },
  'west-baray': {
    name: 'West Baray Reservoir',
    description: 'Largest hand-dug reservoir in history: 8km x 2km holding 56 million m³',
    civilization: 'Khmer Empire',
    period: '1050 CE',
    parameters: {
      length: 8000,
      volume: 56000000,
      reservoirDepth: 5,
      slope: 0.0002,
      roughness: 0.025
    },
    engineeringNotes: 'Supported Angkor\'s 1 million people. Connected to 1,000+ km canal network. Still holds water today. Mystery: was it for irrigation, ritual, or both?'
  },
  'red-river-dikes': {
    name: 'Red River Dike System',
    description: '3,000+ km of dikes protecting Hanoi delta for 2,000 years',
    civilization: 'Vietnam',
    period: '200 CE - Present',
    parameters: {
      length: 3000000,
      channelWidth: 100,
      channelDepth: 10,
      slope: 0.0001,
      roughness: 0.030
    },
    engineeringNotes: 'Continuously maintained for 2,000 years. Red River floods 8-10m annually. Dikes require constant community effort. Breaches cause catastrophic flooding'
  },
  'banaue-terraces': {
    name: 'Banaue/Ifugao Rice Terraces',
    description: '2,000-year-old mountain terraces called "Eighth Wonder of the World"',
    civilization: 'Ifugao (Philippines)',
    period: '2000 years ago',
    parameters: {
      length: 20000,
      slope: 0.15,
      flowRate: 0.5,
      channelWidth: 0.3,
      channelDepth: 0.2,
      roughness: 0.035
    },
    engineeringNotes: 'UNESCO World Heritage. 10,000 km² carved by hand. Bamboo pipes carry water from muyong (protected forests). Community water rights (dayo system) ensure equity'
  },
  'inle-floating-gardens': {
    name: 'Inle Lake Floating Gardens',
    description: 'Agricultural beds floating on 116 km² lake surface',
    civilization: 'Intha People (Myanmar)',
    period: 'Traditional',
    parameters: {
      catchmentArea: 116000000,
      volume: 1000000,
      slope: 0.0001,
      roughness: 0.040
    },
    engineeringNotes: 'Floating gardens built on water hyacinth roots. Grows tomatoes, flowers. Farmers row with their legs. Unique adaptation to lake environment'
  }
};

function generateHeader(model: SWMM5Model): string {
  const timestamp = new Date().toISOString();
  return `[TITLE]
;;Project Title/Notes
${model.name}
${model.description}
;;
;; Generated by Historical Mystery - Ancient Water Engineering Explorer
;; Created by Robert Dickinson (50+ years SWMM expertise)
;; Export Date: ${timestamp}
;; Civilization: ${model.civilization}
;; Period: ${model.period}
;; 
;; This model recreates ancient hydraulic engineering using modern SWMM5 simulation.
;; Learn more at: https://swmm5.org
;;
;; EDUCATIONAL NOTES:
${model.engineeringNotes ? `;; ${model.engineeringNotes}` : ';; Ancient engineers achieved remarkable precision without modern tools'}
;; - Many of these systems operated for centuries with minimal maintenance
;; - The hydraulic principles remain valid in modern engineering

[OPTIONS]
;;Option             Value
FLOW_UNITS           CMS
INFILTRATION         HORTON
FLOW_ROUTING         DYNWAVE
LINK_OFFSETS         DEPTH
MIN_SLOPE            0.0001
ALLOW_PONDING        NO
SKIP_STEADY_STATE    NO

START_DATE           01/01/2024
START_TIME           00:00:00
REPORT_START_DATE    01/01/2024
REPORT_START_TIME    00:00:00
END_DATE             01/02/2024
END_TIME             00:00:00
SWEEP_START          01/01
SWEEP_END            12/31
DRY_DAYS             0
REPORT_STEP          00:05:00
WET_STEP             00:01:00
DRY_STEP             01:00:00
ROUTING_STEP         0:00:30

INERTIAL_DAMPING     PARTIAL
NORMAL_FLOW_LIMITED  BOTH
FORCE_MAIN_EQUATION  H-W
VARIABLE_STEP        0.75
MIN_SURFAREA         1.167
MAX_TRIALS           8
HEAD_TOLERANCE       0.0015
THREADS              1

`;
}

function generateAqueductModel(p: SWMM5ModelParams): string {
  const numSegments = 5;
  const segmentLength = (p.length || 50000) / numSegments;
  const elevationDrop = (p.length || 50000) * (p.slope || 0.002);
  
  let model = `
;; ============================================
;; ROMAN AQUEDUCT MODEL
;; ============================================
;; Historical Context:
;; - Romans built 11 major aqueducts serving Rome
;; - Maintained 0.1-0.3% grades over tens of kilometers
;; - Used surveying tools called "groma" and "chorobates"
;; - Specus (channel) lined with opus signinum (waterproof cement)
;; ============================================

[JUNCTIONS]
;;Name           Elevation      MaxDepth       InitDepth      SurDepth       Aponded
`;

  for (let i = 0; i <= numSegments; i++) {
    const elevation = 100 - (i * elevationDrop / numSegments);
    const nodeName = i === 0 ? 'SOURCE' : i === numSegments ? 'CASTELLUM' : `NODE_${i}`;
    model += `${nodeName.padEnd(16)} ${elevation.toFixed(2).padStart(10)}     ${((p.channelDepth || 0.8) + 0.5).toFixed(2).padStart(10)}     0              0              0\n`;
  }

  model += `
[OUTFALLS]
;;Name           Elevation      Type       Stage Data       Gated    Route To
CITY             ${(100 - elevationDrop - 1).toFixed(2)}          FREE                        NO

[CONDUITS]
;;Name           From Node        To Node          Length     Roughness  InOffset   OutOffset  InitFlow   MaxFlow
`;

  for (let i = 0; i < numSegments; i++) {
    const fromNode = i === 0 ? 'SOURCE' : `NODE_${i}`;
    const toNode = i === numSegments - 1 ? 'CASTELLUM' : `NODE_${i + 1}`;
    const linkName = `SPECUS_${i + 1}`;
    model += `${linkName.padEnd(16)} ${fromNode.padEnd(16)} ${toNode.padEnd(16)} ${segmentLength.toFixed(0).padStart(10)}     ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0\n`;
  }
  model += `OUTLET           CASTELLUM        CITY             100        ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0\n`;

  model += `
[XSECTIONS]
;;Link           Shape        Geom1            Geom2      Geom3      Geom4      Barrels    Culvert
`;

  for (let i = 0; i < numSegments; i++) {
    model += `SPECUS_${i + 1}       RECT_OPEN    ${p.channelDepth || 0.8}            ${p.channelWidth || 1.2}      0          0          1\n`;
  }
  model += `OUTLET           RECT_OPEN    ${p.channelDepth || 0.8}            ${p.channelWidth || 1.2}      0          0          1\n`;

  model += `
[INFLOWS]
;;Node           Constituent      Time Series      Type     Mfactor  Sfactor  Baseline Pattern
SOURCE           FLOW             SPRING_FLOW      FLOW     1.0      1.0      ${p.flowRate || 0.5}

[TIMESERIES]
;;Name           Date       Time       Value
SPRING_FLOW                 0:00       ${p.flowRate || 0.5}
SPRING_FLOW                 6:00       ${(p.flowRate || 0.5) * 0.9}
SPRING_FLOW                 12:00      ${(p.flowRate || 0.5) * 1.1}
SPRING_FLOW                 18:00      ${(p.flowRate || 0.5) * 0.95}
SPRING_FLOW                 24:00      ${p.flowRate || 0.5}
`;

  return model;
}

function generateQanatModel(p: SWMM5ModelParams): string {
  const numShafts = Math.min(Math.floor((p.length || 20000) / (p.shaftSpacing || 50)), 20);
  
  let model = `
;; ============================================
;; PERSIAN QANAT MODEL
;; ============================================
;; Historical Context:
;; - Invented ~1000 BCE in Persia (modern Iran)
;; - Over 37,000 qanats still operate in Iran today
;; - Some are 70+ km long, operating for 2,500 years
;; - Zero energy required (gravity-fed from aquifer)
;; - UNESCO World Heritage recognition
;; 
;; Structure:
;; - Mother well (madarchah) taps groundwater
;; - Underground tunnel (koure) at gentle slope
;; - Vertical shafts (mileh) for construction/maintenance
;; ============================================

[JUNCTIONS]
;;Name           Elevation      MaxDepth       InitDepth      SurDepth       Aponded
MOTHER_WELL      50.00          ${((p.tunnelDiameter || 1) + 1).toFixed(2)}          0              0              0
`;

  for (let i = 1; i <= numShafts; i++) {
    const elevation = 50 - (i * (p.shaftSpacing || 50) * (p.slope || 0.001));
    model += `SHAFT_${i.toString().padEnd(10)} ${elevation.toFixed(2).padStart(10)}     ${((p.tunnelDiameter || 1) + 0.5).toFixed(2).padStart(10)}     0              0              0\n`;
  }

  model += `
[OUTFALLS]
;;Name           Elevation      Type       Stage Data       Gated    Route To
OUTLET           ${(50 - (p.length || 20000) * (p.slope || 0.001)).toFixed(2)}          FREE                        NO

[CONDUITS]
;;Name           From Node        To Node          Length     Roughness  InOffset   OutOffset  InitFlow   MaxFlow
`;

  let prevNode = 'MOTHER_WELL';
  for (let i = 1; i <= numShafts; i++) {
    const currNode = `SHAFT_${i}`;
    model += `TUNNEL_${i.toString().padEnd(8)} ${prevNode.padEnd(16)} ${currNode.padEnd(16)} ${(p.shaftSpacing || 50).toString().padStart(10)}     ${(p.roughness || 0.025).toFixed(4)}     0          0          0          0\n`;
    prevNode = currNode;
  }
  model += `TUNNEL_OUT       ${prevNode.padEnd(16)} OUTLET           ${(p.shaftSpacing || 50).toString().padStart(10)}     ${(p.roughness || 0.025).toFixed(4)}     0          0          0          0\n`;

  model += `
[XSECTIONS]
;;Link           Shape        Geom1            Geom2      Geom3      Geom4      Barrels    Culvert
`;

  for (let i = 1; i <= numShafts; i++) {
    model += `TUNNEL_${i}        CIRCULAR     ${p.tunnelDiameter || 1}            0          0          0          1\n`;
  }
  model += `TUNNEL_OUT       CIRCULAR     ${p.tunnelDiameter || 1}            0          0          0          1\n`;

  model += `
[INFLOWS]
;;Node           Constituent      Time Series      Type     Mfactor  Sfactor  Baseline Pattern
MOTHER_WELL      FLOW             AQUIFER_FLOW     FLOW     1.0      1.0      ${p.flowRate || 0.05}

[TIMESERIES]
;;Name           Date       Time       Value
;; Groundwater inflow varies seasonally
AQUIFER_FLOW                0:00       ${p.flowRate || 0.05}
AQUIFER_FLOW                24:00      ${p.flowRate || 0.05}
`;

  return model;
}

function generateMinoanDrainageModel(p: SWMM5ModelParams): string {
  return `
;; ============================================
;; MINOAN PALACE DRAINAGE (KNOSSOS)
;; ============================================
;; Historical Context:
;; - First known closed-pipe water system (2000 BCE)
;; - Terracotta pipes with tapered sections
;; - Sophisticated stormwater management
;; - Flushing toilets by 1700 BCE!
;; 
;; Features:
;; - Courtyard stormwater collection
;; - Terracotta pipe network (10-15cm diameter)
;; - Light well drainage
;; - Sewer outfall to stream
;; ============================================

[JUNCTIONS]
;;Name           Elevation      MaxDepth       InitDepth      SurDepth       Aponded
COURTYARD_NW     100.00         1.00           0              0              100
COURTYARD_NE     100.00         1.00           0              0              100
COURTYARD_SW     99.90          1.00           0              0              100
COURTYARD_SE     99.90          1.00           0              0              100
LIGHT_WELL_1     99.80          0.50           0              0              50
LIGHT_WELL_2     99.80          0.50           0              0              50
MAIN_DRAIN       99.50          1.50           0              0              0
SEWER_JCT        99.00          2.00           0              0              0

[OUTFALLS]
;;Name           Elevation      Type       Stage Data       Gated    Route To
STREAM           98.00          FREE                        NO

[CONDUITS]
;;Name           From Node        To Node          Length     Roughness  InOffset   OutOffset  InitFlow   MaxFlow
;; Terracotta pipes from courtyards
PIPE_NW          COURTYARD_NW     MAIN_DRAIN       25         ${(p.roughness || 0.013).toFixed(4)}     0          0          0          0
PIPE_NE          COURTYARD_NE     MAIN_DRAIN       25         ${(p.roughness || 0.013).toFixed(4)}     0          0          0          0
PIPE_SW          COURTYARD_SW     MAIN_DRAIN       20         ${(p.roughness || 0.013).toFixed(4)}     0          0          0          0
PIPE_SE          COURTYARD_SE     MAIN_DRAIN       20         ${(p.roughness || 0.013).toFixed(4)}     0          0          0          0
;; Light well drains
LW_DRAIN_1       LIGHT_WELL_1     SEWER_JCT        15         ${(p.roughness || 0.013).toFixed(4)}     0          0          0          0
LW_DRAIN_2       LIGHT_WELL_2     SEWER_JCT        15         ${(p.roughness || 0.013).toFixed(4)}     0          0          0          0
;; Main drainage
MAIN_SEWER       MAIN_DRAIN       SEWER_JCT        30         ${(p.roughness || 0.013).toFixed(4)}     0          0          0          0
OUTFALL_PIPE     SEWER_JCT        STREAM           50         ${(p.roughness || 0.013).toFixed(4)}     0          0          0          0

[XSECTIONS]
;;Link           Shape        Geom1            Geom2      Geom3      Geom4      Barrels    Culvert
;; Terracotta pipes (tapered, ~15cm diameter)
PIPE_NW          CIRCULAR     ${p.pipeDiameter || 0.15}            0          0          0          1
PIPE_NE          CIRCULAR     ${p.pipeDiameter || 0.15}            0          0          0          1
PIPE_SW          CIRCULAR     ${p.pipeDiameter || 0.15}            0          0          0          1
PIPE_SE          CIRCULAR     ${p.pipeDiameter || 0.15}            0          0          0          1
LW_DRAIN_1       CIRCULAR     0.12             0          0          0          1
LW_DRAIN_2       CIRCULAR     0.12             0          0          0          1
;; Larger main sewers
MAIN_SEWER       RECT_OPEN    0.60             0.40       0          0          1
OUTFALL_PIPE     RECT_OPEN    0.80             0.50       0          0          1

[SUBCATCHMENTS]
;;Name           Rain Gage        Outlet           Area     %Imperv  Width      %Slope   CurbLen  SnowPack
CENTRAL_COURT    RAIN1            COURTYARD_NW     0.2      90       50         ${(p.slope || 0.02) * 100}     0
WEST_WING        RAIN1            COURTYARD_SW     0.15     85       40         ${(p.slope || 0.02) * 100}     0
EAST_WING        RAIN1            COURTYARD_NE     0.15     85       40         ${(p.slope || 0.02) * 100}     0
LIGHT_WELLS      RAIN1            LIGHT_WELL_1     0.05     100      20         2.0      0

[RAINGAGES]
;;Name           Format    Interval SCF      Source
RAIN1            INTENSITY 0:15     1.0      TIMESERIES RAIN_DATA

[TIMESERIES]
;;Name           Date       Time       Value
;; Mediterranean storm event
RAIN_DATA                   0:00       0
RAIN_DATA                   1:00       5
RAIN_DATA                   2:00       25
RAIN_DATA                   3:00       50
RAIN_DATA                   4:00       30
RAIN_DATA                   5:00       10
RAIN_DATA                   6:00       0
RAIN_DATA                   24:00      0
`;
}

function generateIndusSewer(p: SWMM5ModelParams): string {
  return `
;; ============================================
;; INDUS VALLEY SEWER SYSTEM (MOHENJO-DARO)
;; ============================================
;; Historical Context:
;; - World's first urban drainage network (2600 BCE)
;; - Every house connected to main drains
;; - Brick-lined channels with manholes
;; - Covered drains with inspection points
;; - Soak pits for solid waste settling
;; ============================================

[JUNCTIONS]
;;Name           Elevation      MaxDepth       InitDepth      SurDepth       Aponded
;; House connections
HOUSE_1          100.00         0.60           0              0              0
HOUSE_2          100.00         0.60           0              0              0
HOUSE_3          100.00         0.60           0              0              0
HOUSE_4          100.00         0.60           0              0              0
;; Street drains with manholes
STREET_N         99.80          0.80           0              0              0
STREET_S         99.60          0.80           0              0              0
MAIN_DRAIN       99.40          1.00           0              0              0
;; Soak pit for settling
SOAK_PIT         99.20          1.50           0              0              50

[OUTFALLS]
;;Name           Elevation      Type       Stage Data       Gated    Route To
CITY_OUTFALL     98.50          FREE                        NO

[CONDUITS]
;;Name           From Node        To Node          Length     Roughness  InOffset   OutOffset  InitFlow   MaxFlow
;; House connections (small brick channels)
HOUSE_CON_1      HOUSE_1          STREET_N         10         ${(p.roughness || 0.020).toFixed(4)}     0          0          0          0
HOUSE_CON_2      HOUSE_2          STREET_N         12         ${(p.roughness || 0.020).toFixed(4)}     0          0          0          0
HOUSE_CON_3      HOUSE_3          STREET_S         10         ${(p.roughness || 0.020).toFixed(4)}     0          0          0          0
HOUSE_CON_4      HOUSE_4          STREET_S         12         ${(p.roughness || 0.020).toFixed(4)}     0          0          0          0
;; Street drains
STREET_DRAIN_N   STREET_N         MAIN_DRAIN       50         ${(p.roughness || 0.020).toFixed(4)}     0          0          0          0
STREET_DRAIN_S   STREET_S         MAIN_DRAIN       50         ${(p.roughness || 0.020).toFixed(4)}     0          0          0          0
;; Main drainage
TO_SOAK_PIT      MAIN_DRAIN       SOAK_PIT         30         ${(p.roughness || 0.020).toFixed(4)}     0          0          0          0
FINAL_OUTFALL    SOAK_PIT         CITY_OUTFALL     100        ${(p.roughness || 0.020).toFixed(4)}     0          0          0          0

[XSECTIONS]
;;Link           Shape        Geom1            Geom2      Geom3      Geom4      Barrels    Culvert
;; House drains (small brick channels ~20cm)
HOUSE_CON_1      RECT_CLOSED  0.20             0.20       0          0          1
HOUSE_CON_2      RECT_CLOSED  0.20             0.20       0          0          1
HOUSE_CON_3      RECT_CLOSED  0.20             0.20       0          0          1
HOUSE_CON_4      RECT_CLOSED  0.20             0.20       0          0          1
;; Street drains (larger covered brick channels)
STREET_DRAIN_N   RECT_CLOSED  ${p.channelDepth || 0.6}            ${p.channelWidth || 0.5}      0          0          1
STREET_DRAIN_S   RECT_CLOSED  ${p.channelDepth || 0.6}            ${p.channelWidth || 0.5}      0          0          1
;; Main covered drain
TO_SOAK_PIT      RECT_CLOSED  0.80             0.60       0          0          1
FINAL_OUTFALL    RECT_OPEN    1.00             0.80       0          0          1

[INFLOWS]
;;Node           Constituent      Time Series      Type     Mfactor  Sfactor  Baseline Pattern
HOUSE_1          FLOW             HOUSE_FLOW       FLOW     1.0      1.0      0.002
HOUSE_2          FLOW             HOUSE_FLOW       FLOW     1.0      1.0      0.002
HOUSE_3          FLOW             HOUSE_FLOW       FLOW     1.0      1.0      0.002
HOUSE_4          FLOW             HOUSE_FLOW       FLOW     1.0      1.0      0.002

[TIMESERIES]
;;Name           Date       Time       Value
;; Daily household water use pattern
HOUSE_FLOW                  0:00       0.001
HOUSE_FLOW                  6:00       0.003
HOUSE_FLOW                  12:00      0.002
HOUSE_FLOW                  18:00      0.003
HOUSE_FLOW                  24:00      0.001
`;
}

function generateNabataeanCistern(p: SWMM5ModelParams): string {
  return `
;; ============================================
;; NABATAEAN CISTERN SYSTEM (PETRA)
;; ============================================
;; Historical Context:
;; - Desert water harvesting in Jordan (4th c. BCE)
;; - 200+ rock-cut cisterns at Petra
;; - Captured flash floods for year-round supply
;; - Sustained 30,000 people in the desert
;; - Terracotta pipes and carved channels
;; ============================================

[JUNCTIONS]
;;Name           Elevation      MaxDepth       InitDepth      SurDepth       Aponded
;; Catchment collection points
WADI_INLET_1     120.00         1.00           0              0              500
WADI_INLET_2     118.00         1.00           0              0              500
;; Settling basins (to remove sediment)
SETTLING_1       115.00         2.00           0              0              100
SETTLING_2       113.00         2.00           0              0              100
;; Distribution chamber
DISTRIBUTION     110.00         1.50           0              0              0

[STORAGE]
;;Name           Elev.   MaxDepth   InitDepth  Shape      Curve Name/Params              SurDepth  Fevap     Psi    Ksat   IMD
;; Main rock-cut cisterns
CISTERN_1        108.00  8.00       0          FUNCTIONAL 200  0  0                       0         0
CISTERN_2        108.00  8.00       0          FUNCTIONAL 200  0  0                       0         0
CISTERN_3        107.00  10.00      0          FUNCTIONAL 300  0  0                       0         0

[OUTFALLS]
;;Name           Elevation      Type       Stage Data       Gated    Route To
OVERFLOW         105.00         FREE                        NO

[CONDUITS]
;;Name           From Node        To Node          Length     Roughness  InOffset   OutOffset  InitFlow   MaxFlow
;; Flash flood channels
WADI_CH_1        WADI_INLET_1     SETTLING_1       100        ${(p.roughness || 0.020).toFixed(4)}     0          0          0          0
WADI_CH_2        WADI_INLET_2     SETTLING_2       80         ${(p.roughness || 0.020).toFixed(4)}     0          0          0          0
;; To distribution
SETTLE_TO_DIST_1 SETTLING_1       DISTRIBUTION     50         ${(p.roughness || 0.020).toFixed(4)}     0          0          0          0
SETTLE_TO_DIST_2 SETTLING_2       DISTRIBUTION     60         ${(p.roughness || 0.020).toFixed(4)}     0          0          0          0
;; Terracotta pipes to cisterns
PIPE_TO_C1       DISTRIBUTION     CISTERN_1        30         0.013      0          0          0          0
PIPE_TO_C2       DISTRIBUTION     CISTERN_2        35         0.013      0          0          0          0
PIPE_TO_C3       DISTRIBUTION     CISTERN_3        40         0.013      0          0          0          0
;; Overflow
OVERFLOW_PIPE    CISTERN_3        OVERFLOW         20         0.013      0          0          0          0

[XSECTIONS]
;;Link           Shape        Geom1            Geom2      Geom3      Geom4      Barrels    Culvert
;; Rock-cut channels
WADI_CH_1        TRAPEZOIDAL  1.0              2.0        1.0        1.0        1
WADI_CH_2        TRAPEZOIDAL  1.0              2.0        1.0        1.0        1
SETTLE_TO_DIST_1 RECT_OPEN    0.5              0.8        0          0          1
SETTLE_TO_DIST_2 RECT_OPEN    0.5              0.8        0          0          1
;; Terracotta pipes
PIPE_TO_C1       CIRCULAR     ${p.pipeDiameter || 0.2}            0          0          0          1
PIPE_TO_C2       CIRCULAR     ${p.pipeDiameter || 0.2}            0          0          0          1
PIPE_TO_C3       CIRCULAR     ${p.pipeDiameter || 0.2}            0          0          0          1
OVERFLOW_PIPE    CIRCULAR     0.3              0          0          0          1

[SUBCATCHMENTS]
;;Name           Rain Gage        Outlet           Area     %Imperv  Width      %Slope   CurbLen  SnowPack
WADI_CATCH_1     RAIN1            WADI_INLET_1     5.0      5        200        ${(p.slope || 0.02) * 100}     0
WADI_CATCH_2     RAIN1            WADI_INLET_2     3.0      5        150        ${(p.slope || 0.02) * 100}     0

[RAINGAGES]
;;Name           Format    Interval SCF      Source
RAIN1            INTENSITY 0:15     1.0      TIMESERIES FLASH_FLOOD

[TIMESERIES]
;;Name           Date       Time       Value
;; Desert flash flood event (intense but short)
FLASH_FLOOD                 0:00       0
FLASH_FLOOD                 0:30       10
FLASH_FLOOD                 1:00       80
FLASH_FLOOD                 1:30       120
FLASH_FLOOD                 2:00       60
FLASH_FLOOD                 2:30       20
FLASH_FLOOD                 3:00       0
FLASH_FLOOD                 24:00      0
`;
}

function generateDujiangyanModel(p: SWMM5ModelParams): string {
  return `
;; ============================================
;; DUJIANGYAN IRRIGATION SYSTEM
;; ============================================
;; Historical Context:
;; - Built 256 BCE by Li Bing and his son
;; - Still irrigates 5,300 km² of farmland today!
;; - No dam - uses natural river dynamics
;; - Three main components:
;;   1. Fish Mouth (Yuzui) - divides river 40/60
;;   2. Flying Sand Weir (Feishayan) - overflow spillway
;;   3. Bottle Neck (Baopingkou) - flow control cut
;; ============================================

[JUNCTIONS]
;;Name           Elevation      MaxDepth       InitDepth      SurDepth       Aponded
;; Min River approaching the system
UPSTREAM         550.00         ${p.channelDepth || 5.0}          0              0              0
;; Fish Mouth levee divides flow
FISH_MOUTH       548.00         ${p.channelDepth || 5.0}          0              0              0
;; Inner River (for irrigation - 40%)
INNER_RIVER_1    546.00         4.0            0              0              0
INNER_RIVER_2    544.00         4.0            0              0              0
BOTTLE_NECK      542.00         3.0            0              0              0
;; Outer River (flood discharge - 60%)
OUTER_RIVER_1    547.00         ${p.channelDepth || 5.0}          0              0              0
OUTER_RIVER_2    545.00         ${p.channelDepth || 5.0}          0              0              0
;; Flying Sand Weir junction
SAND_WEIR_JCT    543.00         4.0            0              0              0

[OUTFALLS]
;;Name           Elevation      Type       Stage Data       Gated    Route To
IRRIGATION       540.00         FREE                        NO
FLOOD_CHANNEL    543.00         FREE                        NO

[CONDUITS]
;;Name           From Node        To Node          Length     Roughness  InOffset   OutOffset  InitFlow   MaxFlow
;; Upstream approach
MAIN_RIVER       UPSTREAM         FISH_MOUTH       500        ${(p.roughness || 0.035).toFixed(4)}     0          0          0          0
;; Inner River (irrigation)
INNER_CH_1       FISH_MOUTH       INNER_RIVER_1    400        ${(p.roughness || 0.035).toFixed(4)}     0          0          0          0
INNER_CH_2       INNER_RIVER_1    INNER_RIVER_2    500        ${(p.roughness || 0.035).toFixed(4)}     0          0          0          0
INNER_CH_3       INNER_RIVER_2    SAND_WEIR_JCT    300        ${(p.roughness || 0.035).toFixed(4)}     0          0          0          0
TO_BOTTLE        SAND_WEIR_JCT    BOTTLE_NECK      200        0.030      0          0          0          0
TO_IRRIGATION    BOTTLE_NECK      IRRIGATION       500        0.030      0          0          0          0
;; Outer River (flood)
OUTER_CH_1       FISH_MOUTH       OUTER_RIVER_1    500        ${(p.roughness || 0.035).toFixed(4)}     0          0          0          0
OUTER_CH_2       OUTER_RIVER_1    OUTER_RIVER_2    600        ${(p.roughness || 0.035).toFixed(4)}     0          0          0          0
OUTER_TO_FLOOD   OUTER_RIVER_2    FLOOD_CHANNEL    400        ${(p.roughness || 0.035).toFixed(4)}     0          0          0          0

[WEIRS]
;;Name           From Node        To Node          Type        CrestHt    Disch Coeff  Flap End Con End Coeff Surcharge
;; Flying Sand Weir - overflow spillway for excess water
FLYING_SAND_WEIR SAND_WEIR_JCT    OUTER_RIVER_2    TRANSVERSE  1.5        1.8          NO   0    0         YES

[XSECTIONS]
;;Link           Shape        Geom1            Geom2      Geom3      Geom4      Barrels    Culvert
MAIN_RIVER       TRAPEZOIDAL  ${p.channelDepth || 5.0}            ${p.channelWidth || 50}     2          2          1
INNER_CH_1       TRAPEZOIDAL  4.0              30         1.5        1.5        1
INNER_CH_2       TRAPEZOIDAL  4.0              25         1.5        1.5        1
INNER_CH_3       TRAPEZOIDAL  3.5              20         1          1          1
TO_BOTTLE        RECT_OPEN    3.0              20         0          0          1
TO_IRRIGATION    TRAPEZOIDAL  3.0              15         1          1          1
OUTER_CH_1       TRAPEZOIDAL  ${p.channelDepth || 5.0}            35         2          2          1
OUTER_CH_2       TRAPEZOIDAL  ${p.channelDepth || 5.0}            40         2          2          1
OUTER_TO_FLOOD   TRAPEZOIDAL  ${p.channelDepth || 5.0}            45         2          2          1

[INFLOWS]
;;Node           Constituent      Time Series      Type     Mfactor  Sfactor  Baseline Pattern
UPSTREAM         FLOW             MIN_RIVER_FLOW   FLOW     1.0      1.0      ${p.flowRate || 100}

[TIMESERIES]
;;Name           Date       Time       Value
;; Seasonal Min River flow (monsoon variation)
MIN_RIVER_FLOW              0:00       ${p.flowRate || 100}
MIN_RIVER_FLOW              6:00       ${(p.flowRate || 100) * 1.2}
MIN_RIVER_FLOW              12:00      ${(p.flowRate || 100) * 1.5}
MIN_RIVER_FLOW              18:00      ${(p.flowRate || 100) * 1.2}
MIN_RIVER_FLOW              24:00      ${p.flowRate || 100}
`;
}

function generateBarayModel(p: SWMM5ModelParams): string {
  return `
;; ============================================
;; KHMER BARAY RESERVOIR (ANGKOR)
;; ============================================
;; Historical Context:
;; - West Baray: 8km x 2.3km x 5m deep (802-1431 CE)
;; - Held approximately 50 million cubic meters
;; - Could irrigate 26,000 hectares of rice paddies
;; - Part of sophisticated water management for 1M+ people
;; - System failure contributed to Angkor's decline
;; ============================================

[JUNCTIONS]
;;Name           Elevation      MaxDepth       InitDepth      SurDepth       Aponded
;; Inflow channels from surrounding land
CATCHMENT_N      35.00          2.0            0              0              500
CATCHMENT_E      35.00          2.0            0              0              500
CATCHMENT_S      35.00          2.0            0              0              500
;; Distribution channels
DIST_CHANNEL_1   28.00          2.0            0              0              0
DIST_CHANNEL_2   27.00          2.0            0              0              0

[STORAGE]
;;Name           Elev.   MaxDepth   InitDepth  Shape      Curve Name/Params              SurDepth  Fevap     Psi    Ksat   IMD
;; Main Baray reservoir (functional: Area = coeff * depth^exp)
WEST_BARAY       30.00   ${p.reservoirDepth || 5.0}       2.0        FUNCTIONAL 10000000 0 0                    0         0.2

[OUTFALLS]
;;Name           Elevation      Type       Stage Data       Gated    Route To
RICE_PADDIES     25.00          FREE                        NO

[CONDUITS]
;;Name           From Node        To Node          Length     Roughness  InOffset   OutOffset  InitFlow   MaxFlow
;; Inflow channels
INFLOW_N         CATCHMENT_N      WEST_BARAY       500        ${(p.roughness || 0.025).toFixed(4)}     0          0          0          0
INFLOW_E         CATCHMENT_E      WEST_BARAY       600        ${(p.roughness || 0.025).toFixed(4)}     0          0          0          0
INFLOW_S         CATCHMENT_S      WEST_BARAY       500        ${(p.roughness || 0.025).toFixed(4)}     0          0          0          0
;; Outflow/distribution
BARAY_OUT        WEST_BARAY       DIST_CHANNEL_1   200        ${(p.roughness || 0.025).toFixed(4)}     0          0          0          0
DIST_TO_DIST     DIST_CHANNEL_1   DIST_CHANNEL_2   500        ${(p.roughness || 0.025).toFixed(4)}     0          0          0          0
TO_PADDIES       DIST_CHANNEL_2   RICE_PADDIES     1000       ${(p.roughness || 0.025).toFixed(4)}     0          0          0          0

[ORIFICES]
;;Name           From Node        To Node          Type     Offset   Qcoeff   Flap  Time
;; Sluice gate for controlled release
SLUICE_GATE      WEST_BARAY       DIST_CHANNEL_1   SIDE     0.5      0.65     NO    0

[XSECTIONS]
;;Link           Shape        Geom1            Geom2      Geom3      Geom4      Barrels    Culvert
INFLOW_N         TRAPEZOIDAL  2.0              ${p.channelWidth || 20}     1.5        1.5        1
INFLOW_E         TRAPEZOIDAL  2.0              ${p.channelWidth || 20}     1.5        1.5        1
INFLOW_S         TRAPEZOIDAL  2.0              ${p.channelWidth || 20}     1.5        1.5        1
BARAY_OUT        RECT_OPEN    2.0              10         0          0          1
DIST_TO_DIST     TRAPEZOIDAL  2.0              15         1          1          1
TO_PADDIES       TRAPEZOIDAL  ${p.channelDepth || 3.0}            ${p.channelWidth || 20}     1          1          1

[SUBCATCHMENTS]
;;Name           Rain Gage        Outlet           Area     %Imperv  Width      %Slope   CurbLen  SnowPack
MONSOON_CATCH_N  RAIN1            CATCHMENT_N      500      5        2000       0.5      0
MONSOON_CATCH_E  RAIN1            CATCHMENT_E      400      5        1500       0.5      0
MONSOON_CATCH_S  RAIN1            CATCHMENT_S      500      5        2000       0.5      0

[RAINGAGES]
;;Name           Format    Interval SCF      Source
RAIN1            INTENSITY 1:00     1.0      TIMESERIES MONSOON

[TIMESERIES]
;;Name           Date       Time       Value
;; Monsoon rainfall pattern (mm/hr)
MONSOON                     0:00       5
MONSOON                     4:00       15
MONSOON                     8:00       30
MONSOON                     12:00      20
MONSOON                     16:00      10
MONSOON                     20:00      5
MONSOON                     24:00      2
`;
}

function generateCloacaMaximaModel(p: SWMM5ModelParams): string {
  return `
;; ============================================
;; ROMAN CLOACA MAXIMA
;; ============================================
;; Historical Context:
;; - Built around 600 BCE under Tarquinius Priscus
;; - One of world's oldest sewers still in use!
;; - Originally an open channel, later vaulted
;; - 4m wide, 3m high stone vault
;; - Still carries stormwater through Rome
;; ============================================

[JUNCTIONS]
;;Name           Elevation      MaxDepth       InitDepth      SurDepth       Aponded
;; Forum drainage points
FORUM_N          25.00          2.0            0              0              200
FORUM_S          24.50          2.0            0              0              200
FORUM_CENTER     24.00          2.0            0              0              300
;; Major intersection points
SUBURA_JCT       23.00          ${p.channelDepth || 3.0}          0              0              0
VELABRUM_JCT     21.00          ${p.channelDepth || 3.0}          0              0              0
;; Main trunk
MAIN_TRUNK_1     19.00          ${p.channelDepth || 3.0}          0              0              0
MAIN_TRUNK_2     17.00          ${p.channelDepth || 3.0}          0              0              0

[OUTFALLS]
;;Name           Elevation      Type       Stage Data       Gated    Route To
TIBER_OUTFALL    15.00          TIDAL      TIBER_TIDE       NO

[CONDUITS]
;;Name           From Node        To Node          Length     Roughness  InOffset   OutOffset  InitFlow   MaxFlow
;; Forum drains
FORUM_DRAIN_N    FORUM_N          FORUM_CENTER     100        ${(p.roughness || 0.018).toFixed(4)}     0          0          0          0
FORUM_DRAIN_S    FORUM_S          FORUM_CENTER     80         ${(p.roughness || 0.018).toFixed(4)}     0          0          0          0
;; To Subura junction
FORUM_TO_SUB     FORUM_CENTER     SUBURA_JCT       200        ${(p.roughness || 0.018).toFixed(4)}     0          0          0          0
;; Main trunk sections
SUB_TO_VEL       SUBURA_JCT       VELABRUM_JCT     300        ${(p.roughness || 0.018).toFixed(4)}     0          0          0          0
VEL_TO_TRUNK1    VELABRUM_JCT     MAIN_TRUNK_1     200        ${(p.roughness || 0.018).toFixed(4)}     0          0          0          0
TRUNK1_TO_2      MAIN_TRUNK_1     MAIN_TRUNK_2     250        ${(p.roughness || 0.018).toFixed(4)}     0          0          0          0
TO_TIBER         MAIN_TRUNK_2     TIBER_OUTFALL    ${p.length || 1600}        ${(p.roughness || 0.018).toFixed(4)}     0          0          0          0

[XSECTIONS]
;;Link           Shape        Geom1            Geom2      Geom3      Geom4      Barrels    Culvert
;; Smaller tributary drains
FORUM_DRAIN_N    RECT_CLOSED  1.5              1.2        0          0          1
FORUM_DRAIN_S    RECT_CLOSED  1.5              1.2        0          0          1
FORUM_TO_SUB     RECT_CLOSED  2.0              1.5        0          0          1
;; Main vaulted sewer (4m wide x 3m high arch)
SUB_TO_VEL       ARCH         ${p.channelDepth || 3.0}            ${p.channelWidth || 4.0}      0          0          1
VEL_TO_TRUNK1    ARCH         ${p.channelDepth || 3.0}            ${p.channelWidth || 4.0}      0          0          1
TRUNK1_TO_2      ARCH         ${p.channelDepth || 3.0}            ${p.channelWidth || 4.0}      0          0          1
TO_TIBER         ARCH         ${p.channelDepth || 3.0}            ${p.channelWidth || 4.0}      0          0          1

[SUBCATCHMENTS]
;;Name           Rain Gage        Outlet           Area     %Imperv  Width      %Slope   CurbLen  SnowPack
FORUM_ROMANUM    RAIN1            FORUM_CENTER     5.0      80       300        1.0      0
SUBURA_DISTRICT  RAIN1            SUBURA_JCT       8.0      70       400        2.0      0
VELABRUM_AREA    RAIN1            VELABRUM_JCT     4.0      75       200        1.5      0

[RAINGAGES]
;;Name           Format    Interval SCF      Source
RAIN1            INTENSITY 0:15     1.0      TIMESERIES ROME_STORM

[TIMESERIES]
;;Name           Date       Time       Value
;; Mediterranean storm event
ROME_STORM                  0:00       0
ROME_STORM                  1:00       5
ROME_STORM                  2:00       25
ROME_STORM                  3:00       45
ROME_STORM                  4:00       30
ROME_STORM                  5:00       15
ROME_STORM                  6:00       5
ROME_STORM                  7:00       0
ROME_STORM                  24:00      0

;; Tiber River tidal pattern (m)
TIBER_TIDE                  0:00       15.0
TIBER_TIDE                  6:00       15.3
TIBER_TIDE                  12:00      15.0
TIBER_TIDE                  18:00      14.7
TIBER_TIDE                  24:00      15.0
`;
}

function generateCisternModel(p: SWMM5ModelParams): string {
  const numCisterns = p.numCisterns || 24;
  
  let model = `
;; ============================================
;; CARTHAGE LA MALGA CISTERNS
;; ============================================
;; Historical Context:
;; - 24 parallel vaulted cisterns (2nd century CE)
;; - Total capacity: ~60 million liters
;; - Fed by 132km Zaghouan Aqueduct
;; - Each cistern: 100m long x 8m wide x 5m deep
;; - Largest ancient cistern complex known
;; ============================================

[JUNCTIONS]
;;Name           Elevation      MaxDepth       InitDepth      SurDepth       Aponded
;; Aqueduct arrival
AQUEDUCT_END     50.00          2.0            0              0              0
;; Distribution gallery
DIST_GALLERY_1   49.50          1.5            0              0              0
DIST_GALLERY_2   49.50          1.5            0              0              0

[STORAGE]
;;Name           Elev.   MaxDepth   InitDepth  Shape      Curve Name/Params              SurDepth  Fevap     Psi    Ksat   IMD
`;

  for (let i = 1; i <= Math.min(numCisterns, 12); i++) {
    const elevation = 48 - (i % 2) * 0.1;
    model += `CISTERN_${i.toString().padStart(2, '0')}      ${elevation.toFixed(1)}    5.0        0          FUNCTIONAL 800 0 0                       0         0\n`;
  }

  model += `
[OUTFALLS]
;;Name           Elevation      Type       Stage Data       Gated    Route To
CITY_SUPPLY      45.00          FREE                        NO
OVERFLOW_OUT     47.00          FREE                        NO

[CONDUITS]
;;Name           From Node        To Node          Length     Roughness  InOffset   OutOffset  InitFlow   MaxFlow
;; From aqueduct to distribution
AQUEDUCT_DIST    AQUEDUCT_END     DIST_GALLERY_1   50         ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
GALLERY_CONN     DIST_GALLERY_1   DIST_GALLERY_2   100        ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
`;

  for (let i = 1; i <= Math.min(numCisterns, 12); i++) {
    const gallery = i <= 6 ? 'DIST_GALLERY_1' : 'DIST_GALLERY_2';
    model += `INLET_C${i.toString().padStart(2, '0')}       ${gallery.padEnd(16)} CISTERN_${i.toString().padStart(2, '0')}       20         ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0\n`;
  }

  model += `
;; Outlet from cisterns
CISTERN_01_OUT   CISTERN_01       CITY_SUPPLY      30         ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
CISTERN_06_OUT   CISTERN_06       CITY_SUPPLY      30         ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
CISTERN_12_OUT   CISTERN_12       CITY_SUPPLY      30         ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0

[XSECTIONS]
;;Link           Shape        Geom1            Geom2      Geom3      Geom4      Barrels    Culvert
AQUEDUCT_DIST    RECT_OPEN    ${p.channelDepth || 1.0}            ${p.channelWidth || 1.5}      0          0          1
GALLERY_CONN     RECT_OPEN    1.2              2.0        0          0          1
`;

  for (let i = 1; i <= Math.min(numCisterns, 12); i++) {
    model += `INLET_C${i.toString().padStart(2, '0')}       RECT_OPEN    0.8              0.6        0          0          1\n`;
  }

  model += `CISTERN_01_OUT   RECT_OPEN    0.8              0.6        0          0          1
CISTERN_06_OUT   RECT_OPEN    0.8              0.6        0          0          1
CISTERN_12_OUT   RECT_OPEN    0.8              0.6        0          0          1

[INFLOWS]
;;Node           Constituent      Time Series      Type     Mfactor  Sfactor  Baseline Pattern
AQUEDUCT_END     FLOW             ZAGHOUAN_FLOW    FLOW     1.0      1.0      ${p.flowRate || 1.0}

[TIMESERIES]
;;Name           Date       Time       Value
ZAGHOUAN_FLOW               0:00       ${p.flowRate || 1.0}
ZAGHOUAN_FLOW               24:00      ${p.flowRate || 1.0}
`;

  return model;
}

function generateIncaModel(p: SWMM5ModelParams): string {
  return `
;; ============================================
;; INCA MACHU PICCHU WATER SUPPLY SYSTEM
;; ============================================
;; Historical Context:
;; - Built ~1450 CE at 2,430m elevation
;; - 749-meter supply canal at 3% slope
;; - 16 cascading stone fountains
;; - Still functioning after 500+ years!
;; - City location chosen based on spring assessment
;; - Separate drainage prevents contamination
;; ============================================

[JUNCTIONS]
;;Name           Elevation      MaxDepth       InitDepth      SurDepth       Aponded
;; Spring collection area
SPRING_BASIN     2460.00        1.0            0.5            0              25
;; Supply canal nodes (749m at 3% slope = 22.5m drop)
CANAL_1          2457.50        0.3            0              0              0
CANAL_2          2453.00        0.3            0              0              0
CANAL_3          2448.50        0.3            0              0              0
CANAL_4          2444.00        0.3            0              0              0
CANAL_ENTRY      2440.00        0.3            0              0              0
;; 16 Cascading fountains (~30cm drop each)
FOUNTAIN_1       2438.00        0.4            0              0              0
FOUNTAIN_2       2437.70        0.4            0              0              0
FOUNTAIN_3       2437.40        0.4            0              0              0
FOUNTAIN_4       2437.10        0.4            0              0              0
FOUNTAIN_5       2436.80        0.4            0              0              0
FOUNTAIN_6       2436.50        0.4            0              0              0
FOUNTAIN_7       2436.20        0.4            0              0              0
FOUNTAIN_8       2435.90        0.4            0              0              0
FOUNTAIN_9       2435.60        0.4            0              0              0
FOUNTAIN_10      2435.30        0.4            0              0              0
FOUNTAIN_11      2435.00        0.4            0              0              0
FOUNTAIN_12      2434.70        0.4            0              0              0
FOUNTAIN_13      2434.40        0.4            0              0              0
FOUNTAIN_14      2434.10        0.4            0              0              0
FOUNTAIN_15      2433.80        0.4            0              0              0
FOUNTAIN_16      2433.50        0.4            0              0              0
;; Safety valve overflow nodes
SAFETY_VALVE_1   2450.00        0.5            0              0              0
SAFETY_VALVE_2   2432.00        0.5            0              0              0

[OUTFALLS]
;;Name           Elevation      Type       Stage Data       Gated    Route To
TERRACE_DRAIN    2445.00        FREE                        NO
MAIN_DRAIN       2430.00        FREE                        NO

[CONDUITS]
;;Name           From Node        To Node          Length     Roughness  InOffset   OutOffset  InitFlow   MaxFlow
;; Supply canal (749m total, stone-lined)
CANAL_SEG_1      SPRING_BASIN     CANAL_1          149        ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
CANAL_SEG_2      CANAL_1          CANAL_2          150        ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
CANAL_SEG_3      CANAL_2          CANAL_3          150        ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
CANAL_SEG_4      CANAL_3          CANAL_4          150        ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
CANAL_SEG_5      CANAL_4          CANAL_ENTRY      100        ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
CANAL_TO_F1      CANAL_ENTRY      FOUNTAIN_1       50         ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
;; Fountain to fountain connections
F1_TO_F2         FOUNTAIN_1       FOUNTAIN_2       8          ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
F2_TO_F3         FOUNTAIN_2       FOUNTAIN_3       8          ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
F3_TO_F4         FOUNTAIN_3       FOUNTAIN_4       8          ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
F4_TO_F5         FOUNTAIN_4       FOUNTAIN_5       8          ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
F5_TO_F6         FOUNTAIN_5       FOUNTAIN_6       8          ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
F6_TO_F7         FOUNTAIN_6       FOUNTAIN_7       8          ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
F7_TO_F8         FOUNTAIN_7       FOUNTAIN_8       8          ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
F8_TO_F9         FOUNTAIN_8       FOUNTAIN_9       8          ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
F9_TO_F10        FOUNTAIN_9       FOUNTAIN_10      8          ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
F10_TO_F11       FOUNTAIN_10      FOUNTAIN_11      8          ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
F11_TO_F12       FOUNTAIN_11      FOUNTAIN_12      8          ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
F12_TO_F13       FOUNTAIN_12      FOUNTAIN_13      8          ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
F13_TO_F14       FOUNTAIN_13      FOUNTAIN_14      8          ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
F14_TO_F15       FOUNTAIN_14      FOUNTAIN_15      8          ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
F15_TO_F16       FOUNTAIN_15      FOUNTAIN_16      8          ${(p.roughness || 0.015).toFixed(4)}     0          0          0          0
F16_TO_DRAIN     FOUNTAIN_16      MAIN_DRAIN       30         0.020      0          0          0          0
;; Safety valve overflow to terraces
OVERFLOW_1       SAFETY_VALVE_1   TERRACE_DRAIN    50         0.025      0          0          0          0
OVERFLOW_2       SAFETY_VALVE_2   MAIN_DRAIN       30         0.025      0          0          0          0

[WEIRS]
;;Name           From Node        To Node          Type        CrestHt    Disch Coeff  Flap End Con End Coeff Surcharge
;; Safety valves - activate during heavy rainfall
SAFETY_WEIR_1    CANAL_2          SAFETY_VALVE_1   SIDEFLOW    0.12       1.8          NO   0    0         YES
SAFETY_WEIR_2    FOUNTAIN_16      SAFETY_VALVE_2   SIDEFLOW    0.08       1.8          NO   0    0         YES

[XSECTIONS]
;;Link           Shape        Geom1            Geom2      Geom3      Geom4      Barrels    Culvert
;; Supply canal (15cm wide x 16cm deep stone-lined)
CANAL_SEG_1      RECT_OPEN    ${p.channelDepth || 0.16}            ${p.channelWidth || 0.15}      0          0          1
CANAL_SEG_2      RECT_OPEN    ${p.channelDepth || 0.16}            ${p.channelWidth || 0.15}      0          0          1
CANAL_SEG_3      RECT_OPEN    ${p.channelDepth || 0.16}            ${p.channelWidth || 0.15}      0          0          1
CANAL_SEG_4      RECT_OPEN    ${p.channelDepth || 0.16}            ${p.channelWidth || 0.15}      0          0          1
CANAL_SEG_5      RECT_OPEN    ${p.channelDepth || 0.16}            ${p.channelWidth || 0.15}      0          0          1
CANAL_TO_F1      RECT_OPEN    ${p.channelDepth || 0.16}            ${p.channelWidth || 0.15}      0          0          1
;; Fountain connections (smaller)
F1_TO_F2         RECT_OPEN    0.10             0.10       0          0          1
F2_TO_F3         RECT_OPEN    0.10             0.10       0          0          1
F3_TO_F4         RECT_OPEN    0.10             0.10       0          0          1
F4_TO_F5         RECT_OPEN    0.10             0.10       0          0          1
F5_TO_F6         RECT_OPEN    0.10             0.10       0          0          1
F6_TO_F7         RECT_OPEN    0.10             0.10       0          0          1
F7_TO_F8         RECT_OPEN    0.10             0.10       0          0          1
F8_TO_F9         RECT_OPEN    0.10             0.10       0          0          1
F9_TO_F10        RECT_OPEN    0.10             0.10       0          0          1
F10_TO_F11       RECT_OPEN    0.10             0.10       0          0          1
F11_TO_F12       RECT_OPEN    0.10             0.10       0          0          1
F12_TO_F13       RECT_OPEN    0.10             0.10       0          0          1
F13_TO_F14       RECT_OPEN    0.10             0.10       0          0          1
F14_TO_F15       RECT_OPEN    0.10             0.10       0          0          1
F15_TO_F16       RECT_OPEN    0.10             0.10       0          0          1
F16_TO_DRAIN     RECT_OPEN    0.15             0.20       0          0          1
OVERFLOW_1       RECT_OPEN    0.30             0.40       0          0          1
OVERFLOW_2       RECT_OPEN    0.30             0.40       0          0          1

[INFLOWS]
;;Node           Constituent      Time Series      Type     Mfactor  Sfactor  Baseline Pattern
SPRING_BASIN     FLOW             SPRING_FLOW      FLOW     1.0      1.0      ${p.flowRate || 0.8}

[TIMESERIES]
;;Name           Date       Time       Value
;; Natural spring discharge (variable 25-150 L/min = 0.4-2.5 LPS)
SPRING_FLOW                 0:00       ${p.flowRate || 0.8}
SPRING_FLOW                 6:00       ${(p.flowRate || 0.8) * 1.1}
SPRING_FLOW                 12:00      ${(p.flowRate || 0.8) * 0.9}
SPRING_FLOW                 18:00      ${(p.flowRate || 0.8) * 1.05}
SPRING_FLOW                 24:00      ${p.flowRate || 0.8}
`;
}

function generateGenericModel(p: SWMM5ModelParams): string {
  return `
;; ============================================
;; GENERIC WATER SYSTEM MODEL
;; ============================================

[JUNCTIONS]
;;Name           Elevation      MaxDepth       InitDepth      SurDepth       Aponded
SOURCE           100.00         2.00           0              0              0
NODE_1           99.00          2.00           0              0              0
NODE_2           98.00          2.00           0              0              0

[OUTFALLS]
;;Name           Elevation      Type       Stage Data       Gated    Route To
OUTLET           97.00          FREE                        NO

[CONDUITS]
;;Name           From Node        To Node          Length     Roughness  InOffset   OutOffset  InitFlow   MaxFlow
CHANNEL_1        SOURCE           NODE_1           ${((p.length || 1000) / 3).toFixed(0)}        ${(p.roughness || 0.025).toFixed(4)}     0          0          0          0
CHANNEL_2        NODE_1           NODE_2           ${((p.length || 1000) / 3).toFixed(0)}        ${(p.roughness || 0.025).toFixed(4)}     0          0          0          0
CHANNEL_3        NODE_2           OUTLET           ${((p.length || 1000) / 3).toFixed(0)}        ${(p.roughness || 0.025).toFixed(4)}     0          0          0          0

[XSECTIONS]
;;Link           Shape        Geom1            Geom2      Geom3      Geom4      Barrels    Culvert
CHANNEL_1        RECT_OPEN    ${p.channelDepth || 1}            ${p.channelWidth || 2}      0          0          1
CHANNEL_2        RECT_OPEN    ${p.channelDepth || 1}            ${p.channelWidth || 2}      0          0          1
CHANNEL_3        RECT_OPEN    ${p.channelDepth || 1}            ${p.channelWidth || 2}      0          0          1

[INFLOWS]
;;Node           Constituent      Time Series      Type     Mfactor  Sfactor  Baseline Pattern
SOURCE           FLOW             INFLOW           FLOW     1.0      1.0      ${p.flowRate || 0.5}

[TIMESERIES]
;;Name           Date       Time       Value
INFLOW                      0:00       ${p.flowRate || 0.5}
INFLOW                      24:00      ${p.flowRate || 0.5}
`;
}

function generateReport(): string {
  return `
[REPORT]
;;Reporting Options
SUBCATCHMENTS ALL
NODES ALL
LINKS ALL

[COORDINATES]
;;Node           X-Coord            Y-Coord

[VERTICES]
;;Link           X-Coord            Y-Coord

[LABELS]
;;X-Coord          Y-Coord            Label

[BACKDROP]
`;
}

export function generateSWMM5File(inventionId: string): string | null {
  const modelKey = Object.keys(SWMM5_MODELS).find(key => 
    inventionId.toLowerCase().includes(key.toLowerCase()) ||
    key.toLowerCase().includes(inventionId.toLowerCase().replace(/-/g, ''))
  );
  
  const model = modelKey ? SWMM5_MODELS[modelKey] : null;
  
  if (!model) {
    const defaultModel: SWMM5Model = {
      name: `${inventionId} Water System`,
      description: 'Historical water engineering system',
      civilization: 'Ancient',
      period: 'Historical',
      parameters: {
        length: 1000,
        slope: 0.002,
        flowRate: 0.5,
        channelWidth: 1.5,
        channelDepth: 1.0,
        roughness: 0.025
      }
    };
    return generateHeader(defaultModel) + generateGenericModel(defaultModel.parameters) + generateReport();
  }
  
  let content = generateHeader(model);
  
  switch (modelKey) {
    case 'roman-aqueduct':
      content += generateAqueductModel(model.parameters);
      break;
    case 'qanat':
      content += generateQanatModel(model.parameters);
      break;
    case 'minoan-drainage':
    case 'minoan-flush-toilet':
      content += generateMinoanDrainageModel(model.parameters);
      break;
    case 'indus-sewer':
      content += generateIndusSewer(model.parameters);
      break;
    case 'nabataean-cistern':
      content += generateNabataeanCistern(model.parameters);
      break;
    case 'dujiangyan':
      content += generateDujiangyanModel(model.parameters);
      break;
    case 'baray':
      content += generateBarayModel(model.parameters);
      break;
    case 'cloaca-maxima':
      content += generateCloacaMaximaModel(model.parameters);
      break;
    case 'maalga-cisterns':
      content += generateCisternModel(model.parameters);
      break;
    case 'inca-machu-picchu':
    case 'inca-tipon':
    case 'andenes':
      content += generateIncaModel(model.parameters);
      break;
    default:
      content += generateGenericModel(model.parameters);
  }
  
  content += generateReport();
  return content;
}

export function downloadSWMM5Model(inventionId: string, inventionName: string): void {
  const content = generateSWMM5File(inventionId);
  if (!content) {
    alert('SWMM5 model generation failed');
    return;
  }
  
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${inventionName.replace(/\s+/g, '_')}_SWMM5.inp`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function hasSwmm5Model(inventionId: string): boolean {
  return Object.keys(SWMM5_MODELS).some(key => 
    inventionId.toLowerCase().includes(key.toLowerCase()) ||
    key.toLowerCase().includes(inventionId.toLowerCase().replace(/-/g, ''))
  );
}

export function getAvailableModels(): Array<{ id: string; name: string; civilization: string; period: string }> {
  return Object.entries(SWMM5_MODELS).map(([id, model]) => ({
    id,
    name: model.name,
    civilization: model.civilization,
    period: model.period
  }));
}
