export interface TechnicalSpecs {
  materials: string;
  dimensions?: string;
  capacity?: string;
  laborRequired?: string;
}

export interface InventionDetailData {
  tagline?: string;
  keyFact?: string;
  howItWorks: string[];
  whyItMattered: string[];
  legacyToday: string[];
  technicalSpecs?: TechnicalSpecs;
  robertsNote: string;
  sources?: string[];
}

export const inventionDiagrams: Record<string, string> = {
  "shaduf": "/diagrams/shaduf.png",
  "nilometer": "/diagrams/nilometer.png",
  "basin-irrigation": "/diagrams/irrigation-canal.png",
  "roman-aqueduct": "/diagrams/aqueduct.png",
  "cloaca-maxima": "/diagrams/cloaca-maxima.png",
  "thermae": "/diagrams/thermae.png",
  "roman-fountains": "/diagrams/roman-fountain.png",
  "lead-pipes": "/diagrams/aqueduct.png",
  "roman-inverted-siphon": "/diagrams/inverted-siphon.png",
  "roman-orifice-control": "/diagrams/orifice-control.png",
  "qanat": "/diagrams/qanat.png",
  "qanat-plans": "/diagrams/qanat.png",
  "irrigation-canals": "/diagrams/irrigation-canal.png",
  "great-bath": "/diagrams/great-bath.png",
  "covered-drains": "/diagrams/cloaca-maxima.png",
  "drain-system": "/diagrams/cloaca-maxima.png",
  "dholavira-reservoirs": "/diagrams/ancient-dam.png",
  "archimedes-screw": "/diagrams/archimedes-screw.png",
  "water-clock": "/diagrams/water-clock.png",
  "clepsydra": "/diagrams/water-clock.png",
  "tunnel-of-eupalinos": "/diagrams/qanat.png",
  "dujiangyan": "/diagrams/dujiangyan.png",
  "dujiangyan-model": "/diagrams/dujiangyan.png",
  "grand-canal": "/diagrams/irrigation-canal.png",
  "bamboo-pipes": "/diagrams/aqueduct.png",
  "bamboo-pipe": "/diagrams/aqueduct.png",
  "noria": "/diagrams/noria.png",
  "noria-wheel": "/diagrams/noria.png",
  "hama-norias": "/diagrams/noria.png",
  "sumerian-irrigation-canals": "/diagrams/irrigation-canal.png",
  "sumerian-levees": "/diagrams/ancient-dam.png",
  "sumerian-water-laws": "/diagrams/irrigation-canal.png",
  "sumerian-shadoof": "/diagrams/shaduf.png",
  "sumerian-seed-drill": "/diagrams/irrigation-canal.png",
  "hittite-clay-dams": "/diagrams/ancient-dam.png",
  "hittite-reservoirs": "/diagrams/ancient-dam.png",
  "hittite-sacred-tunnels": "/diagrams/qanat.png",
  "hittite-urban-drainage": "/diagrams/cloaca-maxima.png",
  "hezekiahs-tunnel": "/diagrams/qanat.png",
  "pool-of-siloam": "/diagrams/roman-fountain.png",
  "canaanite-cisterns": "/diagrams/ancient-dam.png",
  "megiddo-water-system": "/diagrams/qanat.png",
  "syrian-aqueducts": "/diagrams/aqueduct.png",
  "syrian-qanats": "/diagrams/qanat.png",
  "mongke-khan-fountain": "/diagrams/roman-fountain.png",
  "mongol-water-transfer": "/diagrams/irrigation-canal.png",
  "steppe-water-knowledge": "/diagrams/irrigation-canal.png",
  "portable-water-storage": "/diagrams/irrigation-canal.png",
  "jerwan-aqueduct": "/diagrams/aqueduct.png",
  "assyrian-canals": "/diagrams/irrigation-canal.png",
  "assyrian-water-warfare": "/diagrams/ancient-dam.png",
  "assyrian-qanats": "/diagrams/qanat.png",
  "hanging-gardens": "/diagrams/hanging-gardens.png",
  "hammurabi-water-code": "/diagrams/irrigation-canal.png",
  "babylonian-drainage": "/diagrams/cloaca-maxima.png",
  "babylonian-flood-basins": "/diagrams/ancient-dam.png",
  "subak-system": "/diagrams/subak.png",
  "sawah-terraces": "/diagrams/rice-terraces.png",
  "telaga-sacred-pools": "/diagrams/roman-fountain.png",
  "segaran-reservoir": "/diagrams/ancient-dam.png",
  "javanese-sluice-gates": "/diagrams/ancient-dam.png",
  "petirtaan-pools": "/diagrams/roman-fountain.png",
  "alhambra-fountains": "/diagrams/roman-fountain.png",
  "fountain-lions": "/diagrams/roman-fountain.png",
  "al-jazari-automata": "/diagrams/water-clock.png",
  "chinampas": "/diagrams/chinampa.png",
  "chinampa-tools": "/diagrams/chinampa.png",
  "aztec-aqueduct": "/diagrams/aqueduct.png",
  "aqueduct-chapultepec": "/diagrams/aqueduct.png",
  "aguadas": "/diagrams/ancient-dam.png",
  "aguada-system": "/diagrams/ancient-dam.png",
  "stepwell": "/diagrams/stepwell.png",
  "rani-ki-vav": "/diagrams/stepwell.png",
  "adalaj-vav": "/diagrams/stepwell.png",
  "johad": "/diagrams/johad.png",
  "tank-system": "/diagrams/ancient-dam.png",
  "banaue-terraces": "/diagrams/rice-terraces.png",
  "ifugao-terraces": "/diagrams/rice-terraces.png",
  "muyong": "/diagrams/rice-terraces.png",
  "brewarrina-traps": "/diagrams/brewarrina-fish-traps.png",
  "gnamma-holes": "/diagrams/gnamma.png",
  "aboriginal-wells": "/diagrams/gnamma.png",
  "tanada": "/diagrams/tanada.png",
  "suido": "/diagrams/suido.png",
  "shishi-odoshi": "/diagrams/shishi-odoshi.png",
  "g-cans": "/diagrams/g-cans.png",
  "west-baray": "/diagrams/baray.png",
  "angkor-moat": "/diagrams/angkor-wat-moat.png",
  "neak-poan": "/diagrams/baray.png",
  "polder-system": "/diagrams/polder.png",
  "gemaal": "/diagrams/gemaal.png",
  "kinderdijk": "/diagrams/kinderdijk.png",
  "windmill-pump": "/diagrams/kinderdijk.png",
  "andenes": "/diagrams/andenes.png",
  "tipon-terraces": "/diagrams/tipon.png",
  "tipon": "/diagrams/tipon.png",
  "machu-picchu": "/diagrams/machu-picchu.png",
  "bali-rice-terraces": "/diagrams/subak.png",
  "water-temple": "/diagrams/subak.png",
  "klong-network": "/diagrams/klongs.png",
  "bangkok-canals": "/diagrams/klongs.png",
  "ayutthaya-moats": "/diagrams/angkor-wat-moat.png",
  "floating-markets": "/diagrams/klongs.png",
  "mekong-delta": "/diagrams/mekong.png",
  "mekong-canals": "/diagrams/mekong.png",
  "red-river-dikes": "/diagrams/red-river.png",
  "red-river-delta": "/diagrams/red-river.png",
  "floating-rice": "/diagrams/mekong.png",
  "byeokgolje": "/diagrams/byeokgolje.png",
  "cheugugi": "/diagrams/cheugugi.png",
  "ondol": "/diagrams/ondol.png",
  "bisokotuwa-sluice": "/diagrams/bisokotuwa.png",
  "biso-kotuwa": "/diagrams/bisokotuwa.png",
  "tank-cascade": "/diagrams/bisokotuwa.png",
  "anuradhapura": "/diagrams/bisokotuwa.png",
  "eri-cascade": "/diagrams/eri-cascade.png",
  "grand-anicut": "/diagrams/grand-anicut.png",
  "tamil-tanks": "/diagrams/eri-cascade.png",
  "ahupuaa": "/diagrams/ahupuaa.png",
  "auwai": "/diagrams/ahupuaa.png",
  "loi-kalo": "/diagrams/ahupuaa.png",
  "aqua-appia": "/diagrams/aqueduct.png",
  "valens-aqueduct": "/diagrams/aqueduct.png",
  "basilica-cistern": "/diagrams/basilica-cistern.png",
  "cuniculi": "/diagrams/cuniculi.png",
  "etruscan-cisterns": "/diagrams/cuniculi.png",
  "crannogs": "/diagrams/crannog.png",
  "holy-wells": "/diagrams/crannog.png",
  "thames-barrier": "/diagrams/thames-barrier.png",
  "thames-barrier-gate": "/diagrams/thames-barrier.png",
  "reverse-osmosis": "/diagrams/reverse-osmosis.png",
  "drip-irrigation": "/diagrams/drip-irrigation.png",
  "desalination-plants": "/diagrams/reverse-osmosis.png",
  "newater": "/diagrams/reverse-osmosis.png",
  "marina-barrage": "/diagrams/ancient-dam.png",
  "dtss": "/diagrams/cloaca-maxima.png",
  "variable-salinity-plant": "/diagrams/reverse-osmosis.png",
  "floating-solar": "/diagrams/ancient-dam.png",
  "lombong": "/diagrams/water-lifting.png",
  "palong": "/diagrams/irrigation-canal.png",
  "muda-irrigation": "/diagrams/irrigation-canal.png",
  "tasik-kolam": "/diagrams/ancient-dam.png",
  "bamboo-aqueduct-my": "/diagrams/bamboo-irrigation.png",
  "greener-water": "/diagrams/reverse-osmosis.png",
  "falaj-system": "/diagrams/qanat.png",
  "mega-desalination": "/diagrams/reverse-osmosis.png",
  "cloud-seeding": "/diagrams/irrigation-canal.png",
  "palm-water-engineering": "/diagrams/ancient-dam.png",
  "negev-cisterns": "/diagrams/nabataean-cistern.png",
  "sorek-desalination": "/diagrams/reverse-osmosis.png",
  "wastewater-recycling": "/diagrams/reverse-osmosis.png",
  "marib-dam": "/diagrams/ancient-dam.png",
  "ghayl-irrigation": "/diagrams/qanat.png",
  "floating-gardens-baira": "/diagrams/floating-gardens.png",
  "khal-system": "/diagrams/irrigation-canal.png",
  "cyclone-shelter": "/diagrams/ancient-dam.png",
  "acequia-system": "/diagrams/irrigation-canal.png",
  "water-tribunal": "/diagrams/irrigation-canal.png",
  "aflaj-system": "/diagrams/qanat.png",
  "date-palm-oasis": "/diagrams/qanat.png",
  "mose-barriers": "/diagrams/thames-barrier.png",
  "venice-cisterns": "/diagrams/nabataean-cistern.png",
  "lagoon-management": "/diagrams/ancient-dam.png",
  "karez-system": "/diagrams/qanat.png",
  "caravanserai-wells": "/diagrams/nabataean-cistern.png",
  "amazon-raised-fields": "/diagrams/floating-gardens.png",
  "amazon-causeways": "/diagrams/irrigation-canal.png",
  "amazon-fish-weirs": "/diagrams/fish-trap.png",
  "terra-preta": "/diagrams/irrigation-canal.png",
  "varzea-agriculture": "/diagrams/floating-gardens.png",
  "cahokia-reservoir": "/diagrams/ancient-dam.png",
  "mississippian-drainage": "/diagrams/irrigation-canal.png",
  "hohokam-canals": "/diagrams/irrigation-canal.png",
  "columbia-fish-weirs": "/diagrams/fish-trap.png",
  "clam-gardens": "/diagrams/fish-trap.png",
  "yakutian-ice-houses": "/diagrams/nabataean-cistern.png",
  "siberian-fish-traps": "/diagrams/fish-trap.png",
  "ice-roads": "/diagrams/irrigation-canal.png",
  "buluus-ice": "/diagrams/nabataean-cistern.png",
  "iglu-engineering": "/diagrams/ancient-dam.png",
  "kayak-qajaq": "/diagrams/irrigation-canal.png",
  "freshwater-ice-harvest": "/diagrams/nabataean-cistern.png",
  "arctic-ice-fishing": "/diagrams/fish-trap.png",
  "arctic-ice-cellars": "/diagrams/nabataean-cistern.png",
  "swahili-cisterns": "/diagrams/nabataean-cistern.png",
  "swahili-fish-traps": "/diagrams/fish-trap.png",
  "kongo-raised-beds": "/diagrams/floating-gardens.png",
  "palm-wine-tapping": "/diagrams/irrigation-canal.png",
  "niger-flood-agriculture": "/diagrams/floating-gardens.png",
  "timbuktu-wells": "/diagrams/nabataean-cistern.png",
  "longhouse-settlements": "/diagrams/stilt-village.png",
  "bamboo-talang": "/diagrams/bamboo-irrigation.png",
  "tartessian-hydraulic-mining": "/diagrams/hydraulic-mining.png",
  "iberian-cisterns": "/diagrams/iberian-cistern.png",
  "celtiberian-irrigation": "/diagrams/irrigation-canal.png",
  "basque-water-mills": "/diagrams/water-mill.png",
  "basque-iron-forges": "/diagrams/iron-forge.png",
  "basque-fish-traps": "/diagrams/fish-trap.png",
  "basque-mountain-irrigation": "/diagrams/irrigation-canal.png",
  "celtic-sacred-springs": "/diagrams/celtic-spring.png",
  "celtic-oppida-water": "/diagrams/iberian-cistern.png",
  "celtic-timber-trackways": "/diagrams/bog-trackway.png",
  "celtic-field-drainage": "/diagrams/irrigation-canal.png",
  "gaulish-river-navigation": "/diagrams/river-navigation.png",
  "gaulish-viticulture": "/diagrams/irrigation-canal.png",
  "gaulish-thermal-springs": "/diagrams/celtic-spring.png",
  "germanic-terp-mounds": "/diagrams/terp-mound.png",
  "germanic-bog-iron": "/diagrams/bog-iron.png",
  "germanic-sacred-wells": "/diagrams/celtic-spring.png",
  "germanic-log-boats": "/diagrams/log-boat.png",
  "germanic-salt-works": "/diagrams/salt-works.png",
  "etruscan-cuniculi": "/diagrams/etruscan-cuniculi.png",
  "etruscan-cloaca-maxima": "/diagrams/cloaca-maxima.png",
  "etruscan-rock-cisterns": "/diagrams/etruscan-cistern.png",
  "etruscan-sacred-water": "/diagrams/etruscan-temple.png",
  "etruscan-agricultural-terracing": "/diagrams/etruscan-terraces.png",
  "etruscan-urban-networks": "/diagrams/etruscan-urban.png",
  "viking-clinker-longship": "/diagrams/viking-longship.png",
  "viking-freshwater-management": "/diagrams/viking-freshwater.png",
  "viking-water-reading": "/diagrams/viking-navigation.png",
  "viking-fjord-harbors": "/diagrams/viking-harbor.png",
  "viking-portage-systems": "/diagrams/viking-portage.png",
  "viking-arctic-ice": "/diagrams/viking-arctic.png",
  "viking-horizontal-watermill": "/diagrams/viking-watermill.png",
  "peat-canals": "/diagrams/irrigation-canal.png",
  "floating-rice-borneo": "/diagrams/floating-gardens.png",
  "tagal-system": "/diagrams/brewarrina-fish-traps.png",
  "rattan-fish-traps": "/diagrams/brewarrina-fish-traps.png",
  "kuk-drainage": "/diagrams/irrigation-canal.png",
  "highland-terraces": "/diagrams/rice-terraces.png",
  "taro-pondfields": "/diagrams/rice-terraces.png",
  "sepik-fish-traps": "/diagrams/brewarrina-fish-traps.png",
  "sago-processing": "/diagrams/ancient-dam.png",
  "stilt-villages": "/diagrams/stilt-village.png",
  "atoll-rainwater": "/diagrams/nabataean-cistern.png"
};

export const inventionDetails: Record<string, InventionDetailData> = {
  "shaduf": {
    tagline: "The lever that lifted civilization—one bucket at a time",
    keyFact: "A single operator could lift 2,500 liters of water per day using only the physics of counterweights",
    howItWorks: [
      "A long wooden pole (3-5 meters) is balanced on a vertical mud-brick or wooden post",
      "A bucket or clay container is attached to one end with sturdy rope",
      "A heavy counterweight of mud, stone, or clay (15-20 kg) is fixed to the opposite end",
      "The operator pulls the bucket down into the water source and fills it",
      "Releasing tension allows the counterweight to lift the full bucket effortlessly",
      "Water is poured into an irrigation channel or higher-level field basin"
    ],
    whyItMattered: [
      "Enabled irrigation of fields above river level for the first time",
      "Allowed year-round agriculture, not just during flood season",
      "Could lift 2,500 liters per day with one operator—revolutionary efficiency",
      "Required only human power—no animals, fuel, or complex machinery needed",
      "Simple enough for any farmer to build and maintain with local materials"
    ],
    legacyToday: [
      "Modern well pumps use the same lever and counterweight principle",
      "Construction cranes apply identical counterweight physics at massive scale",
      "Still actively used in rural Egypt, India, and parts of Africa today",
      "Any lever-based lifting system owes a debt to this 4,000-year-old design"
    ],
    technicalSpecs: {
      materials: "Wooden pole, mud-brick pillar, clay bucket, palm-fiber rope, mud/stone counterweight",
      dimensions: "Pole: 3-5m long; Post: 1.5-2m high; Bucket: 10-20 liter capacity",
      capacity: "2,500 liters per day per operator; Lift height: 1-3 meters",
      laborRequired: "1 operator; Construction: 2-3 people for 1-2 days"
    },
    robertsNote: "The shaduf is elegant engineering—maximum output from minimum input. Ancient engineers understood efficiency intuitively. In my 50 years of hydraulic modeling, I've learned that the best solutions are often the simplest. The counterweight principle is timeless.",
    sources: [
      "Butzer, K.W. (1976) 'Early Hydraulic Civilization in Egypt'",
      "Shaw, I. (2000) 'The Oxford History of Ancient Egypt'",
      "Mays, L.W. (2010) 'Ancient Water Technologies'"
    ]
  },
  "nilometer": {
    tagline: "Ancient Egypt's supercomputer for predicting the future",
    keyFact: "Nilometer readings directly determined tax rates—high water meant high taxes, low water meant relief",
    howItWorks: [
      "Vertical column or staircase descending into the Nile",
      "Marked with cubits (ancient Egyptian measurement, ~52.4 cm)",
      "Priests recorded water levels during annual floods (June-September)",
      "Low readings (below 16 cubits) predicted drought and famine",
      "High readings (above 19 cubits) warned of destructive flooding",
      "Optimal readings (16-18 cubits) meant bountiful harvests"
    ],
    whyItMattered: [
      "First systematic water monitoring system in history",
      "Predicted agricultural yields months in advance",
      "Government used readings to calculate tax rates for the year",
      "Enabled food storage planning for lean years",
      "Operated continuously for over 5,000 years"
    ],
    legacyToday: [
      "Modern river gauging stations use same principles",
      "Flood warning systems evolved from nilometer concept",
      "Hydrological data collection began with this innovation",
      "Water level monitoring remains essential for water management worldwide"
    ],
    technicalSpecs: {
      materials: "Stone or marble columns, granite steps, limestone walls",
      dimensions: "Depth: 10-15m below ground; Width: 2-4m diameter",
      capacity: "N/A—measurement device, not storage",
      laborRequired: "Daily readings by trained priests; Construction: 50-100 workers over 1-2 years"
    },
    robertsNote: "The nilometer was ancient Egypt's supercomputer—it processed water data into economic predictions. Modern SCADA systems do the same thing, just with more sensors. The principle hasn't changed in 5,000 years.",
    sources: [
      "Bonneau, D. (1971) 'La crue du Nil, divinité égyptienne'",
      "Said, R. (1993) 'The River Nile: Geology, Hydrology and Utilization'",
      "Popper, W. (1951) 'The Cairo Nilometer'"
    ]
  },
  "clepsydra": {
    tagline: "The water clock that gave humanity mastery over time itself",
    keyFact: "In Athenian courts, speakers were limited to exactly 6 minutes measured by a clepsydra—the original time limit for arguments",
    howItWorks: [
      "Bowl or vessel with small calibrated hole in the bottom",
      "Filled with water that drains at a consistent, measurable rate",
      "Time measured by water level against marked scales on interior",
      "Some designs used inflow rather than outflow for greater precision",
      "Advanced versions had multiple vessels for longer periods",
      "Temperature compensation added in later designs (water viscosity changes with temperature)"
    ],
    whyItMattered: [
      "First accurate timekeeping device in human history",
      "Worked at night when sundials were useless",
      "Used in courts to limit speech time fairly—democracy in action",
      "Enabled scheduling of temple rituals with precision",
      "Military applications for timing watch shifts and coordinating attacks"
    ],
    legacyToday: [
      "Hourglasses descended from this concept",
      "Flow-based measurement in modern instruments",
      "Water features in gardens echo decorative clepsydrae",
      "Foundation for understanding time as a measurable quantity"
    ],
    technicalSpecs: {
      materials: "Terracotta, bronze, or stone vessels; calibrated holes (1-3mm diameter)",
      dimensions: "Height: 30-50 cm; Diameter: 15-30 cm; Hole: 1-3mm",
      capacity: "1-5 liters of water; Drainage time: 6 minutes to 12 hours depending on design",
      laborRequired: "Skilled potter for precision construction; 1 operator for readings"
    },
    robertsNote: "The clepsydra proved that water flow could be precisely controlled and measured. This insight—that water behaves predictably—is the foundation of all hydraulic engineering.",
    sources: [
      "Lewis, M.J.T. (2000) 'Surveying Instruments of Greece and Rome'",
      "Young, S.P. (1939) 'An Athenian Clepsydra'",
      "Humphrey, J.W. (2006) 'Ancient Technology'"
    ]
  },
  "qanat-plans": {
    tagline: "Underground rivers carved by hand through solid rock—for 3,000 years",
    keyFact: "Iran alone has 50,000 qanats totaling 300,000 km of tunnels—enough to circle Earth 7.5 times",
    howItWorks: [
      "Survey identifies mountain aquifer above target area",
      "Mother well (sometimes 100+ meters deep) is dug to reach groundwater",
      "Gently sloping tunnel (0.5-1% grade) is dug toward destination",
      "Vertical shafts every 20-50 meters allow debris removal and ventilation",
      "Gravity carries water underground for kilometers without pumping",
      "Underground path prevents evaporation—zero water loss in scorching desert"
    ],
    whyItMattered: [
      "Transported water 50+ kilometers without any pumps or energy",
      "Zero evaporation loss in climates where 90% of surface water evaporates",
      "Enabled cities like Persepolis, Yazd, and Marrakech to thrive",
      "Sustainable extraction—if properly maintained, doesn't deplete aquifers",
      "Some qanats have operated continuously for over 3,000 years"
    ],
    legacyToday: [
      "Still actively operating in Iran, Afghanistan, Morocco, and Oman",
      "Inspires modern sustainable water harvesting techniques",
      "Gravity-fed systems reduce energy consumption in modern design",
      "UNESCO World Heritage recognition for surviving qanat systems"
    ],
    technicalSpecs: {
      materials: "Hand tools, clay brick lining, windlass for debris removal",
      dimensions: "Tunnel: 50cm wide x 150cm high; Shafts: 20-50m apart; Length: up to 70 km",
      capacity: "10-500 liters per second; Total network: 300,000 km in Iran alone",
      laborRequired: "Muqannis (specialized diggers): 2-3 per team; Construction: months to years per qanat"
    },
    robertsNote: "Qanats are gravity-fed genius. They solve the eternal engineering challenge: how do you move water uphill? Answer: you don't—you find the slope and let gravity do the work. Ancient Persians understood hydraulic gradients perfectly.",
    sources: [
      "Beaumont, P. (1971) 'Qanat Systems in Iran'",
      "Lightfoot, D.R. (1996) 'Syrian Qanat Romani'",
      "Wulff, H.E. (1968) 'The Qanats of Iran', Scientific American"
    ]
  },
  "irrigation-tablet": {
    tagline: "The world's first engineering manual—carved in clay",
    keyFact: "The Code of Hammurabi included 282 laws, with specific penalties for engineers whose irrigation works failed",
    howItWorks: [
      "Cuneiform text describing canal dimensions and layout on clay tablets",
      "Specified water allocation quotas for different users and time periods",
      "Included maintenance schedules for dredging and repair",
      "Documented water rights and dispute resolution procedures",
      "Showed how to calculate flow based on canal cross-section",
      "Instructions for building weirs, sluice gates, and distributary canals"
    ],
    whyItMattered: [
      "Earliest written engineering documentation in human history",
      "Enabled knowledge transfer across generations—immortal knowledge",
      "Standardized construction practices across Mesopotamia",
      "Created legal framework for water sharing—the first water laws",
      "Foundation of irrigation as organized science"
    ],
    legacyToday: [
      "Technical documentation standards began here",
      "Water rights law evolved from these ancient tablets",
      "Engineering drawing practices have roots in cuneiform specifications",
      "Knowledge preservation remains critical to engineering"
    ],
    technicalSpecs: {
      materials: "Clay tablets, reed stylus for cuneiform writing",
      dimensions: "Tablets: 5-15 cm; Described canals up to 50 km long",
      capacity: "Documented systems irrigating 100,000+ hectares",
      laborRequired: "Trained scribes for writing; Corvée labor (conscripted workers) for construction"
    },
    robertsNote: "These tablets remind us that documentation matters. The Sumerians knew that engineering knowledge must be recorded and shared. Every specification I write today follows a 4,000-year-old tradition.",
    sources: [
      "Potts, D.T. (1997) 'Mesopotamian Civilization: The Material Foundations'",
      "Jacobsen, T. (1960) 'The Waters of Ur'",
      "Driver, G.R. & Miles, J.C. (1952) 'The Babylonian Laws'"
    ]
  },
  "jerwan-aqueduct": {
    tagline: "Built when Rome was still a village—400 years before Roman aqueducts",
    keyFact: "King Sennacherib's inscription boasted he built it in just 15 months with 2 million stone blocks",
    howItWorks: [
      "Stone channel carried water across a deep valley on massive bridge",
      "Over 2 million precisely-cut limestone blocks fitted without mortar",
      "Waterproofed with bitumen (natural asphalt from Mesopotamian oil seeps)",
      "Gentle 1:80 gradient maintained over entire 50km length",
      "Fed by mountain streams in the Zagros, delivered to Nineveh",
      "Royal inscription carved into the bridge boasted of Sennacherib's achievement"
    ],
    whyItMattered: [
      "World's oldest surviving large-scale aqueduct",
      "Predated famous Roman aqueducts by 400 years",
      "Supplied water to capital city of 120,000 people",
      "Demonstrated Assyrian Empire's engineering capabilities",
      "Enabled the famous Hanging Gardens (possibly at Nineveh, not Babylon)"
    ],
    legacyToday: [
      "Directly influenced later Roman aqueduct design",
      "Proved large-scale water infrastructure was achievable",
      "Archaeological treasure revealing ancient construction methods",
      "Inspiration for modern long-distance water transfer projects"
    ],
    technicalSpecs: {
      materials: "Limestone blocks, bitumen waterproofing, stone corbel arches",
      dimensions: "Length: 50 km total; Bridge: 280m long, 22m high; Channel: 1.5m wide",
      capacity: "Estimated 450,000 cubic meters per day",
      laborRequired: "Thousands of workers; Construction: 15 months according to inscription"
    },
    robertsNote: "The Jerwan Aqueduct proves that Romans didn't invent aqueducts—they perfected them. The Assyrians were building 50km water supply systems when Rome was still a village.",
    sources: [
      "Jacobsen, T. & Lloyd, S. (1935) 'Sennacherib's Aqueduct at Jerwan'",
      "Dalley, S. (2013) 'The Mystery of the Hanging Garden of Babylon'",
      "Bagg, A.M. (2000) 'Assyrische Wasserbauten'"
    ]
  },
  "great-bath": {
    tagline: "The world's first public swimming pool—4,500 years old",
    keyFact: "The bitumen waterproofing was so effective that archaeologists found it still intact after 4,500 years",
    howItWorks: [
      "Brick-lined pool measuring 12m x 7m, nearly 3m deep",
      "Waterproofed with natural bitumen between bricks—still intact today",
      "Surrounded by changing rooms with private wells for washing",
      "Sophisticated drainage through a large corbeled drain",
      "Fresh water inlet from a nearby deep well",
      "Wide steps led into pool from each end for ritual purification"
    ],
    whyItMattered: [
      "First known public bathing facility in human history",
      "Advanced waterproofing technology unprecedented for 2600 BCE",
      "Demonstrated sophisticated understanding of hygiene and public health",
      "Sophisticated drainage infrastructure—planned sanitation",
      "Center of civic and possibly religious life in Mohenjo-Daro"
    ],
    legacyToday: [
      "Public swimming pools descend from this ancient concept",
      "Waterproofing techniques influenced later cultures worldwide",
      "Communal bathing traditions from Roman baths to Japanese onsen",
      "Established enduring link between water and public health"
    ],
    technicalSpecs: {
      materials: "Fired bricks, natural bitumen (asphalt), gypsum mortar",
      dimensions: "Length: 12m; Width: 7m; Depth: 2.4m; Walls: 1m thick",
      capacity: "Approximately 160,000 liters when full",
      laborRequired: "Skilled brick-layers and bitumen workers; Construction: months to years"
    },
    robertsNote: "The Great Bath shows that 4,500 years ago, people understood water and public health were connected. The pool's drainage system is remarkably sophisticated—these weren't primitive people.",
    sources: [
      "Marshall, J. (1931) 'Mohenjo-Daro and the Indus Civilization'",
      "Kenoyer, J.M. (1998) 'Ancient Cities of the Indus Valley Civilization'",
      "Jansen, M. (1989) 'Water Supply and Sewage Disposal at Mohenjo-Daro'"
    ]
  },
  "drain-system": {
    howItWorks: [
      "Covered brick drains ran along every street",
      "Connected to each house via internal drains",
      "Maintained constant gradient for gravity flow",
      "Regular inspection holes for maintenance",
      "Drained to covered sewers outside city",
      "Separate from drinking water supply"
    ],
    whyItMattered: [
      "First covered urban drainage in history",
      "Protected public health in dense city",
      "Demonstrated sophisticated urban planning",
      "Standard design suggests centralized planning",
      "Technology Europe wouldn't match for 4,000 years"
    ],
    legacyToday: [
      "Modern sanitary sewers follow same principles",
      "Separation of waste and drinking water is standard",
      "Urban planning includes drainage from the start",
      "Public health engineering has ancient roots"
    ],
    robertsNote: "When I model modern sewer systems, I'm applying principles the Indus Valley civilizations understood in 2500 BCE. Covered drains, consistent gradients, separate systems—they figured it out millennia ago."
  },
  "reservoir-plans": {
    howItWorks: [
      "Rock-cut reservoirs carved into bedrock",
      "Channels diverted monsoon runoff into storage",
      "Sluice gates controlled water release",
      "Multiple reservoirs connected as backup system",
      "Embankments and dams created artificial lakes",
      "Water extracted through controlled outlets year-round"
    ],
    whyItMattered: [
      "16 reservoirs stored monsoon water year-round",
      "Sustained city in arid climate with seasonal rain",
      "Sophisticated water harvesting in 2300 BCE",
      "Systematic approach to water security",
      "Enabled population of 50,000 in desert region"
    ],
    legacyToday: [
      "Rainwater harvesting principles unchanged",
      "Modern reservoirs use same storage concepts",
      "Water security planning is universal",
      "Dholavira inspires sustainable water management"
    ],
    robertsNote: "Dholavira solved a problem we still face: how to store seasonal water for year-round use. Their 16-reservoir system had redundancy built in—real engineering thinking."
  },
  "archimedes-screw": {
    howItWorks: [
      "Helical screw inside hollow cylinder or tube",
      "Inclined at 30-45 degrees from horizontal",
      "Bottom submerged in water source",
      "Rotation draws water up between screw threads",
      "Water rises in pockets between threads and casing",
      "Continuous rotation provides continuous flow"
    ],
    whyItMattered: [
      "Could lift water to significant heights",
      "Simple mechanism with few moving parts",
      "Efficient even when hand-operated",
      "Worked with dirty or debris-filled water",
      "Low maintenance and long-lasting"
    ],
    legacyToday: [
      "Used in wastewater treatment worldwide",
      "Modern versions in irrigation systems",
      "Fish-safe design for aquaculture",
      "Flood drainage pumps often use Archimedes screws",
      "Renewable energy: reversible design generates power"
    ],
    robertsNote: "The Archimedes screw is one of history's most successful inventions. 2,300 years later, we still use it because nothing works better for certain applications. That's the definition of elegant engineering."
  },
  "hydrostatics-treatise": {
    howItWorks: [
      "Established principles of buoyancy and floating",
      "Defined relationship between weight and displacement",
      "Explained why ships float and stones sink",
      "Described equilibrium of floating bodies",
      "Mathematical proofs for fluid behavior",
      "Foundation of hydrostatic pressure theory"
    ],
    whyItMattered: [
      "First scientific study of fluid mechanics",
      "Enabled calculation of displacement and buoyancy",
      "Made ship design more scientific",
      "Explained previously mysterious phenomena",
      "Archimedes' principle still taught today"
    ],
    legacyToday: [
      "Submarine design relies on these principles",
      "Hot air balloons apply buoyancy concepts",
      "Every boat and ship design uses this theory",
      "Hydraulic engineering built on this foundation"
    ],
    robertsNote: "Archimedes' work on floating bodies is where hydraulic science truly began. Every pressure calculation I do in SWMM models traces back to principles he discovered in his bathtub."
  },
  "hippocratic-sleeve": {
    howItWorks: [
      "Woolen cloth or linen bag used as filter",
      "Water poured through cloth suspended over vessel",
      "Sediment and particles trapped in fabric",
      "Multiple passes for cleaner water",
      "Boiling water through cloth improved results",
      "First documented water purification for health"
    ],
    whyItMattered: [
      "Linked water quality to human health",
      "First recorded water filtration device",
      "Reduced waterborne illness (though mechanism unknown)",
      "Hippocratic Corpus spread the practice",
      "Foundation of public health water treatment"
    ],
    legacyToday: [
      "Cloth filters still used in emergencies",
      "Sand filtration evolved from this concept",
      "Water treatment is essential public health",
      "Portable water filters save lives worldwide"
    ],
    robertsNote: "Hippocrates didn't know about bacteria, but he knew dirty water caused disease. His cloth filter was primitive but effective. The connection between water quality and health started here."
  },
  "aqua-appia": {
    howItWorks: [
      "16km channel from springs to Rome",
      "Mostly underground to prevent contamination",
      "Gravity-fed with precise gradient",
      "Settling basins removed sediment",
      "Distribution through lead pipes to fountains",
      "Continuous flow maintained water freshness"
    ],
    whyItMattered: [
      "Rome's first public water supply (312 BCE)",
      "Provided clean water independent of Tiber River",
      "Enabled urban growth beyond river limitations",
      "Set precedent for public infrastructure",
      "Beginning of Rome's famous aqueduct system"
    ],
    legacyToday: [
      "Public water utilities follow this model",
      "Gravity-fed systems still most efficient",
      "Infrastructure investment creates prosperity",
      "Roman engineering influenced Western water systems"
    ],
    robertsNote: "The Aqua Appia started something revolutionary: the idea that clean water is a public good. Rome eventually built 11 aqueducts delivering a million cubic meters daily—that's 200 gallons per person per day, more than most American cities today."
  },
  "cloaca-maxima": {
    howItWorks: [
      "Massive arched stone tunnel under Rome",
      "Originally an open channel, later covered",
      "Drained swampy Forum valley to Tiber",
      "Connected to street drains and latrines",
      "Flushed by aqueduct overflow water",
      "Large enough to navigate by boat"
    ],
    whyItMattered: [
      "One of world's earliest sewage systems",
      "Made Forum construction possible",
      "Protected public health in dense city",
      "Demonstrated Roman engineering capability",
      "Still partially functions after 2,500 years"
    ],
    legacyToday: [
      "Combined sewer concept used for centuries",
      "Modern sewers descend directly from this",
      "Urban development requires drainage",
      "Some original sections still carry water"
    ],
    robertsNote: "I've modeled modern sewer systems for decades, and the Cloaca Maxima humbles me. It still works after 2,500 years. How many of our systems will last even 250?"
  },
  "pont-du-gard-plans": {
    howItWorks: [
      "Three-tiered stone bridge 50m high",
      "Carried water channel across Gardon valley",
      "50km total length with only 17m drop",
      "Gradient of 1:3000 maintained throughout",
      "Precise surveying using groma and chorobates",
      "Stones fitted without mortar using iron clamps"
    ],
    whyItMattered: [
      "Supplied 40,000 cubic meters daily to Nîmes",
      "Engineering precision without modern tools",
      "Demonstrated Roman surveying capability",
      "Beauty combined with functionality",
      "Still standing after 2,000 years"
    ],
    legacyToday: [
      "UNESCO World Heritage Site",
      "Studied by engineering students worldwide",
      "Surveying techniques influenced later practice",
      "Proves infrastructure can be beautiful"
    ],
    robertsNote: "A gradient of 1:3000 means a 17-meter drop over 50 kilometers. The Romans achieved this precision with string, plumb bobs, and water levels. Modern surveying equipment makes it easier, but not more impressive."
  },
  "dujiangyan-model": {
    howItWorks: [
      "Fish Mouth divider splits river into channels",
      "Inner channel for irrigation, outer for flood control",
      "Flying Sand Weir allows excess water to escape",
      "Bottle-Neck Channel controls flow to irrigation",
      "Annual dredging maintains system capacity",
      "No dams or locks—purely flow management"
    ],
    whyItMattered: [
      "Tamed dangerous Min River floods",
      "Created 'Land of Abundance' in Sichuan",
      "Irrigated 5,300 square kilometers",
      "No mechanical parts to break down",
      "Designed to work with nature, not against it"
    ],
    legacyToday: [
      "Still irrigates same area after 2,270 years",
      "UNESCO World Heritage Site",
      "Model for sustainable water management",
      "Studied by engineers worldwide"
    ],
    robertsNote: "Dujiangyan is my favorite ancient water project. It works with river dynamics rather than fighting them. After 2,270 years of continuous operation, it irrigates more land than ever. That's not just engineering—that's wisdom."
  },
  "bamboo-pipe": {
    howItWorks: [
      "Bamboo tubes cut and joined end-to-end",
      "Internal membranes removed for flow",
      "Joints sealed with plant fiber and resin",
      "Could span kilometers over difficult terrain",
      "Flexible enough to follow ground contours",
      "Easily replaced when damaged"
    ],
    whyItMattered: [
      "Abundant, sustainable material",
      "Enabled water transport in mountainous regions",
      "Fast to install with local labor",
      "Antibacterial properties of bamboo",
      "Renewable—bamboo regrows quickly"
    ],
    legacyToday: [
      "Bamboo pipes still used in rural Asia",
      "Sustainable materials gaining modern interest",
      "Local materials reduce project costs",
      "Natural alternatives to plastic pipes"
    ],
    robertsNote: "We spend billions on modern pipe materials, but bamboo worked for millennia. It's sustainable, local, and renewable. Sometimes ancient solutions deserve a second look."
  },
  "canal-lock": {
    howItWorks: [
      "Chamber with gates at both ends",
      "Boat enters through lower gate",
      "Gate closes, chamber fills with water",
      "Boat rises with water level",
      "Upper gate opens, boat continues",
      "Process reversed for downward travel"
    ],
    whyItMattered: [
      "Allowed boats to travel between water levels",
      "Made Grand Canal navigation possible",
      "Invented in China around 984 CE",
      "Spread to Europe centuries later",
      "Enabled long-distance canal networks"
    ],
    legacyToday: [
      "Panama Canal uses same principle",
      "Every modern canal lock follows this design",
      "Enabled global shipping routes",
      "Basic concept unchanged for 1,000 years"
    ],
    robertsNote: "The pound lock is brilliant in its simplicity. Fill a box with water, the boat goes up. Drain it, the boat goes down. A thousand years later, the Panama Canal uses the exact same principle."
  },
  "al-jazari-automata": {
    howItWorks: [
      "Water-powered mechanical devices",
      "Camshafts converted rotation to linear motion",
      "Automatic valves controlled water flow",
      "Programmable using pegs on rotating drums",
      "Floats and siphons maintained water levels",
      "Gears and escapements for precise timing"
    ],
    whyItMattered: [
      "Invented the crankshaft mechanism",
      "First programmable machines in history",
      "Advanced understanding of mechanical principles",
      "Combined art and engineering beautifully",
      "Influenced later European mechanics"
    ],
    legacyToday: [
      "Crankshaft in every car engine",
      "Programmable automation traces here",
      "Robotics has medieval Islamic roots",
      "Water-powered design still inspires"
    ],
    robertsNote: "Al-Jazari was building programmable robots in 1206. His water-powered automata were centuries ahead of their time. The crankshaft he invented is in every car you've ever driven."
  },
  "noria-wheel": {
    howItWorks: [
      "Large wheel with buckets on circumference",
      "River current rotates the wheel",
      "Buckets fill at bottom, empty at top",
      "No external power required—current-driven",
      "Could lift water 20+ meters high",
      "Continuous operation day and night"
    ],
    whyItMattered: [
      "Lifted water using only river power",
      "Could irrigate fields high above rivers",
      "No animal or human power needed",
      "Enabled agriculture in river valleys",
      "Some operated for centuries"
    ],
    legacyToday: [
      "Water wheels inspired early hydropower",
      "Current-powered pumps in remote areas",
      "Symbol of Hama, Syria (famous norias)",
      "Renewable energy concept in ancient form"
    ],
    robertsNote: "The noria is renewable energy before the term existed. It converts river current into lifted water with no fuel, no electricity, no moving parts that wear out. Some in Syria have been running for 900 years."
  },
  "fountain-lions": {
    howItWorks: [
      "12 marble lions around central basin",
      "Water flows from lions' mouths into channel",
      "Hydraulic system uses gravity from hillside",
      "Complex underground pipe network",
      "Pressure balanced to keep all lions flowing equally",
      "Designed for both beauty and cooling"
    ],
    whyItMattered: [
      "Masterwork of hydraulic engineering and art",
      "Created microclimate in hot Spanish summer",
      "Demonstrated Islamic garden water mastery",
      "Precise pressure balancing across system",
      "Symbol of Nasrid dynasty's sophistication"
    ],
    legacyToday: [
      "Studied by landscape architects worldwide",
      "Inspired countless fountain designs",
      "Islamic garden water features remain popular",
      "Example of water as art medium"
    ],
    robertsNote: "Balancing flow across 12 outlets requires understanding hydraulics deeply. The Alhambra engineers achieved equal flow from every lion's mouth—that's precise pressure balancing without computers or gauges."
  },
  "chinampa-tools": {
    howItWorks: [
      "Artificial islands built in shallow lake beds",
      "Willow stakes and woven fencing create frame",
      "Lake mud and vegetation piled inside frame",
      "Canals between islands for boat access",
      "Roots of crops reach groundwater directly",
      "Multiple harvests per year possible"
    ],
    whyItMattered: [
      "Fed 200,000+ people in Tenochtitlan",
      "Created farmland where none existed",
      "Extraordinarily productive agriculture",
      "Sustainable—islands enriched over time",
      "Supported one of world's largest cities"
    ],
    legacyToday: [
      "Remaining chinampas still farm in Xochimilco",
      "Model for sustainable intensive agriculture",
      "Inspiration for modern floating gardens",
      "UNESCO World Heritage Site"
    ],
    robertsNote: "The chinampas turned a lake into farmland without draining it. They created an ecosystem that was more productive than any land-based farm. That's not just engineering—that's ecological brilliance."
  },
  "aqueduct-chapultepec": {
    howItWorks: [
      "Dual channels carried fresh spring water",
      "One channel in use while other cleaned",
      "Ceramic and stone construction",
      "Supported on causeways across the lake",
      "Public fountains distributed water to city",
      "Guards protected supply from contamination"
    ],
    whyItMattered: [
      "Supplied freshwater to island city",
      "Dual channels ensured uninterrupted supply",
      "Demonstrated sophisticated planning",
      "Solved unique challenge of lake-based city",
      "Impressed Spanish conquistadors"
    ],
    legacyToday: [
      "Redundancy principle in modern infrastructure",
      "Maintenance access built into design",
      "Example of engineering for reliability",
      "Water security planning for cities"
    ],
    robertsNote: "The Aztecs built redundancy into their water system. Two channels meant you could clean or repair one while the other kept flowing. That's 500-year-old reliability engineering."
  },
  "aguada-system": {
    howItWorks: [
      "Natural and artificial depressions collected rain",
      "Plaster-lined surfaces prevented seepage",
      "Channels diverted runoff from plazas and buildings",
      "Filtration through sand and gravel layers",
      "Multiple reservoirs provided redundancy",
      "Enough storage to survive dry seasons"
    ],
    whyItMattered: [
      "Supported 100,000 people without rivers",
      "Collected seasonal rainfall for year-round use",
      "Sophisticated water quality management",
      "Central to Maya urban planning",
      "Enabled cities in challenging jungle environment"
    ],
    legacyToday: [
      "Rainwater harvesting systems worldwide",
      "Water-sensitive urban design principles",
      "Filtration and storage remain essential",
      "Inspiration for sustainable water management"
    ],
    robertsNote: "The Maya built one of history's largest cities in a jungle with no permanent water source. Their entire water system depended on collecting and storing rain. That took incredible planning and engineering."
  },
  "water-integrator": {
    tagline: "The computer that ran on water—solving equations through fluid dynamics",
    keyFact: "Used in Soviet construction until the 1980s, decades after digital computers were available",
    howItWorks: [
      "Water levels in tanks represent mathematical variable values",
      "Flow rates between tanks represent derivatives (rates of change)",
      "Tube resistance encodes equation coefficients",
      "Tank capacity represents integration constants",
      "Time evolution of water levels traces solution curves",
      "Accuracy of ±2-3% compared to analytical solutions"
    ],
    whyItMattered: [
      "First computer to solve partial differential equations in real-time",
      "Enabled complex thermal calculations for dam construction",
      "Predicted concrete curing rates and permafrost thawing",
      "Trusted by engineers for its physical intuition",
      "Operated without electricity in remote locations"
    ],
    legacyToday: [
      "Ancestor of modern Computational Fluid Dynamics (CFD)",
      "Physical SWMM model decades before digital simulation",
      "Demonstrates fluid behavior can represent mathematical solutions",
      "Inspired analog computing research"
    ],
    technicalSpecs: {
      dimensions: "2m × 3m × 1.5m typical installation",
      materials: "Glass tubes, precision valves, calibrated tanks, water",
      capacity: "Solve systems of PDEs in real-time"
    },
    robertsNote: "This is essentially a physical SWMM model! Lukyanov used actual fluid mechanics to compute solutions to differential equations. When I run a SWMM simulation, I'm doing digitally what this machine did with real water. It's the most literal possible example of 'computational fluid dynamics.'"
  },
  "moscow-volga-canal": {
    tagline: "Rerouting a river to feed the capital",
    keyFact: "Supplies 80% of Moscow's water today—the city couldn't exist at its current size without it",
    howItWorks: [
      "128 km of canal connecting Volga River to Moscow",
      "11 locks raise ships 38 meters to the summit level",
      "Reservoir system stores water for dry periods",
      "Pumping stations lift water against natural flow",
      "Gravity feeds the Moscow River throughout the year",
      "Serves both navigation and water supply"
    ],
    whyItMattered: [
      "Enabled Moscow to grow from 4 million to 12+ million people",
      "Solved chronic water shortages in the capital",
      "Created major shipping route to Volga basin",
      "Engineering triumph completed in just 5 years"
    ],
    legacyToday: [
      "Still Moscow's primary water supply",
      "Active shipping route for goods and passengers",
      "Reservoirs now serve recreation and fishing"
    ],
    robertsNote: "Moscow is the largest city in the world built away from a major water source. The canal essentially moved the Volga to Moscow. It's massive hydraulic engineering—lift stations, reservoirs, 11 locks. Without it, modern Moscow couldn't exist."
  },
  "belomor-canal": {
    tagline: "The controversial shortcut from Arctic to Baltic",
    keyFact: "227 km built in just 20 months—one of the fastest major canal constructions in history",
    howItWorks: [
      "227 km connecting White Sea to Lake Onega and Baltic",
      "19 locks handle 70-meter elevation changes",
      "Series of lakes used as natural reservoirs",
      "Wooden and concrete lock chambers",
      "Designed for naval vessels up to 3,000 tons",
      "Operates during ice-free season (May-November)"
    ],
    whyItMattered: [
      "Strategic naval route from Arctic to Baltic",
      "Avoided vulnerable route around Scandinavia",
      "Opened northern timber resources to transport",
      "First major Soviet canal project"
    ],
    legacyToday: [
      "Part of Unified Deep Water System",
      "Timber and cargo transport route",
      "Expanded and modernized since original construction"
    ],
    robertsNote: "The Belomor Canal is controversial—built with forced labor at terrible human cost. But hydraulically, it's impressive: 19 locks, 227 km, crossing the watershed between Arctic and Baltic drainage."
  },
  "volga-don-canal": {
    tagline: "Peter the Great's 250-year-old dream realized",
    keyFact: "Completes five-sea navigation—ships can travel from Arctic Ocean to Mediterranean",
    howItWorks: [
      "101 km connecting Europe's two mightiest rivers",
      "13 locks overcome 88-meter elevation difference",
      "Tsimlyansk Reservoir provides summit-level water",
      "Pumping stations supplement natural flow",
      "Three-flight staircase locks at key points",
      "Designed for 5,000-ton vessels"
    ],
    whyItMattered: [
      "Peter the Great proposed it in 1697—completed 1952",
      "Links Caspian, Azov, Black, Baltic, and White Seas",
      "Enables ships to cross from Arctic to Mediterranean",
      "Strategic military and commercial significance"
    ],
    legacyToday: [
      "Critical freight route for Russian economy",
      "Carries 10+ million tons annually",
      "Enables landlocked Caspian access to world oceans"
    ],
    robertsNote: "This canal took 250 years from conception to completion—Peter the Great first proposed it in 1697. When you can sail from the Arctic Ocean to the Mediterranean through Russia's interior, that's transformative infrastructure."
  },
  "unified-waterway": {
    tagline: "Connecting five seas through rivers, lakes, and human ambition",
    keyFact: "6,500 km navigable waterway—ships travel from St. Petersburg to Astrakhan through one system",
    howItWorks: [
      "Integrates Volga, Don, Neva, and other major rivers",
      "Canals link natural waterways at watershed divides",
      "Lock systems handle elevation changes",
      "Reservoirs regulate seasonal flow variations",
      "Standardized channel depths for large vessels",
      "Year-round operation with icebreaker assistance"
    ],
    whyItMattered: [
      "Largest inland waterway system in Europe",
      "Connects White, Baltic, Caspian, Azov, and Black Seas",
      "Transformed Russia's internal transportation",
      "Enabled industrial development of interior regions"
    ],
    legacyToday: [
      "Carries 100+ million tons of freight annually",
      "Cruise ships travel the historic routes",
      "Hydroelectric dams generate renewable energy"
    ],
    robertsNote: "The Unified Deep Water System is essentially a continent-scale SWMM model made real. Rivers as conduits, reservoirs as storage, locks as control structures. It's hydraulic engineering at the largest possible scale."
  },
  "maya-pressurized-system": {
    tagline: "The first pressurized water in the Americas—750 CE",
    keyFact: "Used Venturi effect to create pressure centuries before European engineers understood the physics",
    howItWorks: [
      "Spring water collected at elevation above city",
      "Open channel guides water toward destination",
      "Channel constricts into enclosed stone conduit",
      "Smaller cross-section increases water velocity",
      "Pressure builds from hydraulic head and velocity",
      "Water emerges under pressure at lower elevation"
    ],
    whyItMattered: [
      "First pressurized water system in the Americas",
      "Demonstrated advanced understanding of hydraulics",
      "Predates European pressurized systems",
      "Enabled water delivery to specific locations"
    ],
    legacyToday: [
      "Proves indigenous engineering sophistication",
      "Studied by hydraulic engineers and archaeologists",
      "Demonstrates universal physics understanding"
    ],
    technicalSpecs: {
      materials: "Cut limestone blocks, lime mortar",
      dimensions: "Channel narrows from 50cm to 10cm width",
      capacity: "Pressurized flow to designated outlets"
    },
    robertsNote: "Palenque's pressurized system is remarkable. The Maya understood that restricting flow in an enclosed conduit creates pressure—the Venturi effect. They did this 750 years before Venturi was born."
  },
  "palenque-aqueduct": {
    tagline: "Underground rivers beneath a Maya palace",
    keyFact: "9 separate aqueducts route streams beneath plazas and pyramids—still flowing today",
    howItWorks: [
      "Corbelled stone arches create underground channels",
      "Natural streams diverted from surface to subsurface",
      "Channels route water beneath buildings and plazas",
      "Outlets return water to natural drainage",
      "Cross-sections sized for monsoon peak flows",
      "Stone lining prevents erosion and collapse"
    ],
    whyItMattered: [
      "Allowed construction of palace over stream channels",
      "Prevented flooding of ceremonial spaces",
      "Longest runs 60+ meters under palace complex",
      "Still functional after 1,200+ years"
    ],
    legacyToday: [
      "UNESCO World Heritage Site",
      "Active archaeological research continues",
      "Model for sustainable urban drainage"
    ],
    robertsNote: "The Maya built their palace over nine separate streams. Instead of moving the palace, they moved the water—underground. These corbelled tunnels are still carrying water 1,200 years later."
  },
  "khettara-system": {
    tagline: "Underground rivers carrying mountain water to desert oases",
    keyFact: "800+ khettaras in Tafilalet alone—some still irrigating date palms after 3,000 years",
    howItWorks: [
      "Mother well dug at mountain base to tap aquifer",
      "Gently sloping tunnel (0.1-0.5%) carries water by gravity",
      "Vertical shafts every 20-50m provide access and ventilation",
      "Tunnel extends 10-20 km to oasis destination",
      "Water emerges at surface to irrigate fields",
      "No pumping required—pure gravity flow"
    ],
    whyItMattered: [
      "Brought mountain groundwater to desert settlements",
      "Enabled civilization in Saharan oases",
      "Minimal evaporation in underground channels",
      "Sustainable for millennia without external energy"
    ],
    legacyToday: [
      "Still irrigating Moroccan oases today",
      "UNESCO heritage candidate",
      "Being restored as climate adaptation strategy"
    ],
    technicalSpecs: {
      dimensions: "Tunnels: 0.5-1.5m wide, 1-2m high; Length: up to 20km",
      materials: "Hand-dug through rock and sediment",
      capacity: "5-50 liters/second depending on aquifer"
    },
    robertsNote: "Khettaras are the Moroccan version of Persian qanats—same brilliant concept. Gravity-fed underground channels that have supplied oases for 3,000 years. No pumps, no fuel, no electricity. Just precise surveying and backbreaking labor."
  },
  "fogarra-well": {
    tagline: "The mother of all oasis water—where khettaras are born",
    keyFact: "Hand-dug through solid rock to depths of 60 meters",
    howItWorks: [
      "Located at piedmont where mountain meets plain",
      "Dug vertically to reach mountain aquifer",
      "Water table intersection determines system yield",
      "Horizontal gallery extends upslope into aquifer",
      "Multiple collection galleries maximize yield",
      "Coordinates entire downstream tunnel alignment"
    ],
    whyItMattered: [
      "Determines success or failure of entire khettara",
      "Requires expert hydrogeological knowledge",
      "Investment of years of labor to complete",
      "Water rights defined at mother well"
    ],
    legacyToday: [
      "Traditional well-digging knowledge endangered",
      "Historic wells still functioning",
      "Cultural significance to oasis communities"
    ],
    robertsNote: "The mother well is where the magic happens—or doesn't. Get it wrong, and you've wasted years of labor on a dry tunnel. Get it right, and you've created water for a thousand years."
  },
  "marrakech-seguias": {
    tagline: "950 years of water rights flowing through the Red City",
    keyFact: "125 km of channels still distributing Atlas Mountain water to famous Marrakech gardens",
    howItWorks: [
      "Channels capture snowmelt from High Atlas Mountains",
      "Main canals divide into smaller seguias",
      "Stone weirs control flow distribution",
      "Traditional water masters regulate timing",
      "Gardens receive water on rotating schedule",
      "Surplus returns to groundwater"
    ],
    whyItMattered: [
      "Created the famous gardens of Marrakech",
      "Sustained city of 500,000+ in semi-arid climate",
      "Water rights allocation dates back 950 years",
      "Model for equitable water distribution"
    ],
    legacyToday: [
      "Still supplies Marrakech's historic gardens",
      "Traditional water masters continue role",
      "Tourism depends on garden irrigation"
    ],
    robertsNote: "The seguia system made Marrakech possible. 125 km of channels carrying mountain water through the city. Water rights here date back 950 years and are still enforced."
  },
  "riad-fountains": {
    tagline: "Microclimate engineering in courtyard paradise gardens",
    keyFact: "Evaporative cooling drops temperatures 10°C—natural air conditioning",
    howItWorks: [
      "Central courtyard designed as thermal buffer",
      "Fountain creates evaporative cooling effect",
      "High walls shade interior from direct sun",
      "Cool air sinks and pools in courtyard",
      "Cross-ventilation draws cool air through rooms",
      "Plants add humidity and additional cooling"
    ],
    whyItMattered: [
      "Provided comfort in extreme heat",
      "No energy required—passive cooling",
      "Combined utility with aesthetic beauty",
      "Essential feature of Islamic architecture"
    ],
    legacyToday: [
      "Riads now popular tourist accommodations",
      "Passive cooling studied for sustainable design",
      "Model for courtyard architecture worldwide"
    ],
    robertsNote: "A riad fountain isn't just pretty—it's engineering. The evaporation cools the air, the high walls trap that cool air, and the courtyard becomes a refuge from 45°C summer heat."
  },
  "fez-hammam": {
    tagline: "Where thermal engineering meets social institution",
    keyFact: "100+ historic hammams in Fez—some operating continuously for 800+ years",
    howItWorks: [
      "Wood-fired furnace heats water and floors",
      "Hot room reaches 50°C with steam",
      "Warm room at intermediate temperature",
      "Cool room for rest and relaxation",
      "Water recycled from hot to warm to cold uses",
      "Heat recovery from furnace gases warms entry rooms"
    ],
    whyItMattered: [
      "Ritual purification required by Islam",
      "Public health through regular bathing",
      "Social gathering place for communities",
      "Thermal engineering at sophisticated level"
    ],
    legacyToday: [
      "100+ hammams still operating in Fez",
      "Tourism major revenue source",
      "Model for heat recovery systems"
    ],
    robertsNote: "A hammam is a thermal cascade system. The hottest room uses the most energy, but heat flows through progressively cooler rooms before being exhausted. That's heat recovery engineering."
  },
  "tannery-water": {
    tagline: "1,000 years of leather and water at Chouara",
    keyFact: "World's oldest working tannery—continuous operation since 1000 CE",
    howItWorks: [
      "Fresh water flows through honeycomb of stone vats",
      "Sequential processing: lime, pigeon dung, dyes",
      "Water carries chemicals and removes waste",
      "Gravity-fed system from seguia network",
      "Effluent channeled to treatment areas",
      "Color-coded vats for different processes"
    ],
    whyItMattered: [
      "Moroccan leather famous worldwide for centuries",
      "Water management essential to quality",
      "Continuous operation proves sustainability",
      "Economic engine for Fez medina"
    ],
    legacyToday: [
      "Major tourist attraction in Fez",
      "Traditional leather production continues",
      "UNESCO World Heritage component"
    ],
    robertsNote: "The Chouara tannery has operated for 1,000 years. Same vats, same water channels, same methods. The water system is the key—you need continuous flow for quality leather."
  },
  "sumerian-irrigation-canals": {
    tagline: "The foundation of all irrigation engineering",
    keyFact: "6000+ years ago, Sumerians created the blueprint for every irrigation system since",
    howItWorks: [
      "Main canal (primary) diverts water from Tigris/Euphrates rivers",
      "Controlled by sluice gates made of wood and clay",
      "Secondary canals distribute water to regional areas",
      "Tertiary channels deliver water to individual farm plots",
      "Each farmer allocated specific water amounts based on land size",
      "Dug with pickaxes and maintained by community labor"
    ],
    whyItMattered: [
      "Created the Fertile Crescent—transformed desert into farmland",
      "Supported first large cities in human history",
      "Enabled food surplus for civilization development",
      "Established water allocation principles still used today"
    ],
    legacyToday: [
      "Same hierarchical canal system used in modern irrigation",
      "Water rights laws descended from Sumerian codes",
      "Mesopotamian irrigation principles in use for 8,000 years"
    ],
    technicalSpecs: {
      materials: "Earthen embankments, wooden gates, clay linings",
      dimensions: "Main canals 5-10m wide, secondary 2-3m wide",
      capacity: "Irrigated millions of hectares of farmland"
    },
    robertsNote: "Every irrigation system you see today—from California to China—uses the same hierarchical principle the Sumerians invented. Main canal, distributaries, field channels. They figured out the fundamental architecture 6,000 years ago."
  },
  "sumerian-water-laws": {
    tagline: "World's first water rights legislation",
    keyFact: "Hammurabi's Code devoted hundreds of laws to water—theft, negligence, and fair allocation",
    howItWorks: [
      "Laws defined water rights for each landowner",
      "Penalties for water theft or negligence",
      "Community maintenance obligations specified",
      "Dispute resolution procedures established",
      "Allocation based on land area and crop needs",
      "Canal inspectors enforced regulations"
    ],
    whyItMattered: [
      "First codified water rights in human history",
      "Prevented conflicts over scarce water resources",
      "Enabled large-scale agricultural cooperation",
      "Template for all subsequent water law"
    ],
    legacyToday: [
      "Modern water law descends from these principles",
      "Prior appropriation doctrine echoes Sumerian allocation",
      "Community irrigation districts mirror ancient systems"
    ],
    robertsNote: "When I work on water rights cases today, I'm essentially applying principles the Sumerians codified 4,000 years ago. Who has priority? What are the maintenance obligations? How do you resolve disputes? They solved all of it."
  },
  "sumerian-levees": {
    tagline: "Humanity's first battle against floods",
    keyFact: "4000 BCE—Sumerians built earthen walls to tame the unpredictable Tigris and Euphrates",
    howItWorks: [
      "Earthen embankments built along river banks",
      "Compacted clay and soil construction",
      "Raised above expected flood levels",
      "Gates allowed controlled flooding for irrigation",
      "Maintained by conscripted community labor",
      "Breach repair was emergency priority"
    ],
    whyItMattered: [
      "Protected cities and crops from devastating floods",
      "Enabled permanent settlement in floodplains",
      "Transformed unpredictable rivers into assets",
      "First large-scale civil engineering project"
    ],
    legacyToday: [
      "New Orleans levees use same principles",
      "Dutch dikes evolved from ancient concepts",
      "Flood control levees protect billions worldwide"
    ],
    robertsNote: "The Tigris and Euphrates were wild rivers—flooding unpredictably and devastating crops. The Sumerians said 'we're going to control these rivers.' That decision created civilization."
  },
  "sumerian-shadoof": {
    tagline: "The original water-lifting machine",
    keyFact: "Lever physics applied to irrigation—predating Egyptian adaptation by centuries",
    howItWorks: [
      "Vertical post with horizontal pivoting beam",
      "Bucket attached to one end of beam",
      "Counterweight (stone or mud) on opposite end",
      "Operator pulls bucket down into water source",
      "Counterweight lifts filled bucket with minimal effort",
      "Water poured into irrigation channel at top"
    ],
    whyItMattered: [
      "First mechanical water-lifting device in history",
      "Reduced labor for irrigation dramatically",
      "Enabled farming above river level",
      "Principle used in all subsequent lifting devices"
    ],
    legacyToday: [
      "Still used in parts of Africa and Middle East",
      "4,000+ years of continuous use",
      "Lever principle in modern machinery"
    ],
    technicalSpecs: {
      materials: "Wood pole, rope, clay bucket, stone counterweight",
      capacity: "600-2,500 liters per hour per operator",
      laborRequired: "One person can lift water 3-4 meters"
    },
    robertsNote: "The shadoof is beautiful engineering. You're using gravity and leverage to defeat gravity. The counterweight does most of the work—you just guide the bucket. It's still the most efficient way to lift small amounts of water by hand."
  },
  "hittite-clay-dams": {
    tagline: "Engineering that outlasted empires",
    keyFact: "Some Hittite dams still provide water after 3,000+ years of continuous service",
    howItWorks: [
      "Arc-shaped clay construction for structural strength",
      "Built during droughts when rivers were low",
      "Hand-compacted clay in layers for impermeability",
      "Spillway channels for overflow control",
      "Irrigation channels below dam deliver water to fields",
      "Silt traps extend reservoir life"
    ],
    whyItMattered: [
      "Stored water from seasonal rains for year-round use",
      "Enabled agriculture in semi-arid Anatolia",
      "Supported Hittite capital of Hattusa",
      "Remarkably durable construction technique"
    ],
    legacyToday: [
      "Köylütolu Dam: 900m long, 25-30m high—still functioning",
      "Techniques studied by modern dam engineers",
      "Proof that simple materials can last millennia"
    ],
    technicalSpecs: {
      materials: "Compacted clay, stone foundations",
      dimensions: "Köylütolu Dam: 900 meters long, 25-30 meters high",
      capacity: "Stored millions of cubic meters of water"
    },
    robertsNote: "I've seen modern dams fail after 50 years. The Hittites built dams 3,000 years ago that still work. They understood clay compaction, arc geometry, and spillway design. We could learn a lot from studying their techniques."
  },
  "hittite-urban-drainage": {
    tagline: "Ancient sanitation with modern features",
    keyFact: "Oval cleaning holes for maintenance—a design still used today",
    howItWorks: [
      "Stone-lined channels beneath city streets",
      "Oval access holes for cleaning and inspection",
      "Graded slopes for gravity flow",
      "Separation of wastewater from drinking water",
      "Outfall channels to areas outside city",
      "Strict cleanliness laws—negligence punishable by death"
    ],
    whyItMattered: [
      "Protected public health in dense urban areas",
      "Prevented disease from standing water",
      "Enabled larger city populations",
      "Set standard for urban sanitation"
    ],
    legacyToday: [
      "Maintenance access points in all modern sewers",
      "Separation of waste and potable water universal",
      "Hittite principles in modern stormwater design"
    ],
    robertsNote: "The Hittites understood something critical: a drainage system is only as good as its maintenance. Those oval cleaning holes meant workers could actually clean the pipes. That's practical engineering."
  },
  "hezekiahs-tunnel": {
    tagline: "533 meters through solid rock for survival",
    keyFact: "Cut from both ends simultaneously—workers met in the middle with remarkable precision",
    howItWorks: [
      "Tunneled through 533 meters of solid limestone",
      "Two teams worked from opposite ends simultaneously",
      "Followed sound of pickaxes to meet in middle",
      "Slight S-curve shows course corrections during construction",
      "Gentle grade allows gravity flow from spring to pool",
      "Gihon Spring hidden outside walls, water delivered inside"
    ],
    whyItMattered: [
      "Jerusalem survived Assyrian siege of 701 BCE",
      "Citizens accessed water without leaving city walls",
      "Model for siege-proof urban water supply",
      "Engineering marvel of the ancient world"
    ],
    legacyToday: [
      "Still carries water after 2,700 years",
      "Major archaeological and tourist site",
      "Studied by engineers worldwide"
    ],
    technicalSpecs: {
      materials: "Hand-cut through limestone rock",
      dimensions: "533 meters long, 0.5m gradient over entire length",
      laborRequired: "Estimated 2 years with hundreds of workers"
    },
    robertsNote: "Two teams, no surveying instruments, cutting through solid rock from opposite ends—and they met in the middle. The inscription they left describes hearing the other team's pickaxes. That's precision engineering by sound."
  },
  "megiddo-water-system": {
    tagline: "Vertical shaft to underground spring—siege survival",
    keyFact: "37 meters down, 70 meters across—accessing water without leaving city protection",
    howItWorks: [
      "Vertical shaft cut 37 meters down through rock",
      "Horizontal tunnel extends 70 meters to underground spring",
      "Hidden entrance outside city walls sealed and concealed",
      "Stairs allow water carriers to descend and ascend",
      "Spring water collected in underground pool",
      "Continuous access during siege conditions"
    ],
    whyItMattered: [
      "Megiddo controlled strategic trade routes",
      "Water access determined if city could withstand siege",
      "Protected spring from enemy discovery and poisoning",
      "Model replicated at Hazor, Gibeon, Gezer"
    ],
    legacyToday: [
      "Armageddon—site of prophesied final battle",
      "UNESCO World Heritage archaeological site",
      "Testament to Bronze Age engineering"
    ],
    technicalSpecs: {
      materials: "Cut through limestone bedrock",
      dimensions: "37m vertical shaft + 70m horizontal tunnel"
    },
    robertsNote: "Megiddo is where the word 'Armageddon' comes from. The city controlled the only pass through the Carmel ridge. Whoever held Megiddo controlled trade between Egypt and Mesopotamia. That water system kept the city alive through dozens of sieges."
  },
  "hama-norias": {
    tagline: "Giant water wheels powered by river current alone",
    keyFact: "153,000 liters per HOUR—using only flowing water, no animals or humans needed",
    howItWorks: [
      "Giant wooden wheel up to 20 meters in diameter",
      "Paddles around rim catch river current to turn wheel",
      "120+ compartments scoop water as wheel rotates",
      "Water discharged at top into aqueduct channel",
      "Aqueduct carries water to distant irrigation fields",
      "Self-operating 24/7 as long as river flows"
    ],
    whyItMattered: [
      "Most efficient pre-industrial water lifting technology",
      "Zero operating cost—river provides all power",
      "Enabled irrigation far from river banks",
      "Operated for nearly 2,000 years"
    ],
    legacyToday: [
      "17 norias still standing in Hama, Syria",
      "UNESCO tentative World Heritage list",
      "Principle used in modern hydropower"
    ],
    technicalSpecs: {
      materials: "Wooden construction, iron fittings",
      dimensions: "Up to 20 meters diameter",
      capacity: "153,000 liters per hour (10th century record)"
    },
    robertsNote: "The Hama norias are the most elegant water machines ever built. No fuel, no labor, no maintenance costs—just the river turning a wheel. Some are nearly 2,000 years old and they still work. That's sustainable engineering."
  },
  "syrian-qanats": {
    tagline: "Underground rivers tapping mountain aquifers",
    keyFact: "239 qanat systems documented in Syria—gravity-fed water without any pumping",
    howItWorks: [
      "Mother well dug to reach water table in highlands",
      "Gently sloping tunnel carries water by gravity",
      "Vertical shafts every 20-50 meters for construction and maintenance",
      "Tunnel protected from evaporation unlike surface canals",
      "Water emerges at outlet in lowland settlement",
      "System operates indefinitely without power input"
    ],
    whyItMattered: [
      "Enabled desert cities to thrive",
      "No pumps, no energy cost—pure gravity",
      "Evaporation losses minimal in underground tunnel",
      "Sustainable for millennia"
    ],
    legacyToday: [
      "239 qanats documented in Syria (1993-94 survey)",
      "Some operating for over 2,500 years",
      "UNESCO World Heritage in several countries"
    ],
    technicalSpecs: {
      materials: "Hand-dug tunnels in earth and rock",
      dimensions: "1-50+ km length, 1% gradient typical",
      capacity: "10-500 liters per second depending on aquifer"
    },
    robertsNote: "I've studied qanat systems for decades. The concept is simple—tap groundwater where it's high, deliver it by gravity where it's needed. No pumps to break, no fuel to buy. Some qanats have operated for 2,700 years. Try that with a diesel pump."
  },
  "mongke-khan-fountain": {
    tagline: "Silver tree dispensing four drinks from four spouts",
    keyFact: "Built by Parisian craftsman for grandson of Genghis Khan—engineering marvel of the medieval world",
    howItWorks: [
      "Silver tree sculpture with fruit decorations",
      "Four lions at base dispensing different drinks",
      "Wine, mead, koumiss, and rice wine from separate pipes",
      "Angelic automaton at top blows trumpet to signal drinks",
      "Bellows system hidden below to power automaton",
      "Servants below pumped drinks through hidden conduits"
    ],
    whyItMattered: [
      "Demonstrated Mongol wealth and power",
      "Combined Eastern and Western engineering knowledge",
      "Symbolized Mongol control of trade routes",
      "Automata technology centuries ahead of Europe"
    ],
    legacyToday: [
      "Described by William of Rubruck (1254)",
      "Example of medieval precision engineering",
      "Symbol of Mongol capital Karakorum"
    ],
    robertsNote: "The Mongols conquered the world, then hired the best craftsmen from everywhere to build wonders like this. Guillaume Boucher was a Parisian goldsmith—captured or hired—who built this fountain. It shows how the Mongols spread technology across continents."
  },
  "mongol-water-transfer": {
    tagline: "Connecting Chinese and Middle Eastern water knowledge",
    keyFact: "Mongols relocated artisans across Eurasia, spreading irrigation and water technology faster than any empire before",
    howItWorks: [
      "Conquered regions forced to share technical knowledge",
      "Artisans relocated across the empire",
      "Chinese irrigation experts sent to Persia",
      "Middle Eastern noria technology spread to China",
      "Trade routes protected, allowing knowledge flow",
      "Imperial standardization of measurements and methods"
    ],
    whyItMattered: [
      "Accelerated water technology development",
      "Connected previously isolated innovations",
      "Created largest technology transfer network in history",
      "Spread agricultural improvements across Asia"
    ],
    legacyToday: [
      "Modern globalized technology transfer echoes this",
      "Mongol period innovations still visible in regional techniques",
      "Template for imperial knowledge management"
    ],
    robertsNote: "The Mongols weren't inventors—they were connectors. They moved a Chinese irrigation engineer to Persia, a Persian astronomer to China. Water technology that took centuries to spread now traveled in years. That's the real Mongol contribution to water engineering."
  },
  "assyrian-water-warfare": {
    tagline: "Water as a weapon of conquest and siege",
    keyFact: "Assyrians diverted the Euphrates to flood Babylon in 689 BCE—turning the river into a weapon",
    howItWorks: [
      "River diversion: cut enemy off from water supply",
      "Dam and release: build reservoir, release to flood enemy",
      "Cut aqueducts and destroy cisterns during siege",
      "Poison or contaminate wells with corpses and waste",
      "Control upstream water to threaten downstream cities",
      "Use water access as negotiating leverage"
    ],
    whyItMattered: [
      "First systematic military use of water control",
      "Psychological warfare—threat of flooding",
      "Could take cities without direct assault",
      "Water control = political control"
    ],
    legacyToday: [
      "Military water strategy still studied",
      "Geneva Conventions now protect water infrastructure",
      "Modern dam security concerns echo ancient tactics"
    ],
    robertsNote: "The Assyrians understood something modern generals still know: control the water, control the battlefield. When Sennacherib wanted to destroy Babylon, he didn't need to storm the walls. He just moved the river."
  },
  "hanging-gardens": {
    tagline: "Water lifted 25 meters to terraced gardens—if they existed",
    keyFact: "One of the Seven Wonders—thousands of gallons lifted daily by chain pumps or Archimedes screw",
    howItWorks: [
      "Water drawn from Euphrates River",
      "Chain of buckets or Archimedes screw lifts water",
      "Slaves or animals power the lifting mechanism",
      "Water distributed to top terrace first",
      "Cascades through middle and lower terraces",
      "Drainage collects and recycles water to bottom"
    ],
    whyItMattered: [
      "Demonstrated mastery of water lifting technology",
      "Created impossible garden in desert climate",
      "Symbol of Babylonian wealth and engineering",
      "One of Seven Wonders of the Ancient World"
    ],
    legacyToday: [
      "Inspiration for rooftop gardens worldwide",
      "Vertical garden movement echoes concept",
      "Symbol of environmental engineering ambition"
    ],
    technicalSpecs: {
      materials: "Stone terraces, waterproofed with bitumen",
      dimensions: "Estimated 20-25 meter lift height",
      capacity: "Thousands of gallons daily"
    },
    robertsNote: "Whether the Hanging Gardens were in Babylon or Nineveh—or mythical—the engineering concept is real. Lifting water 25 meters requires serious technology. The chain pump or screw mechanism described could absolutely work."
  },
  "hammurabi-water-code": {
    tagline: "First comprehensive water law—still echoed in modern courts",
    keyFact: "Laws 53-56: negligent dam maintenance means you pay for ruined crops; irrigation flooding liability = 10 gur per gan",
    howItWorks: [
      "Law 53: Dam breaches—owner replaces damaged grain",
      "Law 55: Irrigation negligence—pay crop value of flooded field",
      "Law 56: Flood damage liability—10 gur grain per gan land",
      "Canal inspectors enforce regulations",
      "Local overseers manage day-to-day disputes",
      "King serves as ultimate authority"
    ],
    whyItMattered: [
      "First written water rights in history",
      "Established liability for water damages",
      "Created enforcement hierarchy",
      "Template for all subsequent water law"
    ],
    legacyToday: [
      "Modern tort liability for water damage echoes these laws",
      "Prior appropriation doctrine in Western US",
      "Community irrigation district governance"
    ],
    robertsNote: "I've testified in water rights cases that basically applied Hammurabi's principles. Who's liable when the canal floods? What's fair compensation? He figured this out 3,700 years ago."
  },
  "babylonian-drainage": {
    tagline: "Terracotta pipes and brick conduits for city sanitation",
    keyFact: "Precisely fitted clay pipes drained streets to brick-lined collectors emptying to the Euphrates",
    howItWorks: [
      "Drain grates in street surfaces",
      "Terracotta pipe network under streets",
      "Fired clay pipes precisely fitted together",
      "Main collector channels brick-lined",
      "Gravity flow to river outfall",
      "Separate from drinking water systems"
    ],
    whyItMattered: [
      "Enabled dense urban population",
      "Prevented disease from standing water",
      "Managed monsoon and flood waters",
      "Set standard for urban sanitation"
    ],
    legacyToday: [
      "Same basic principles in modern storm drains",
      "Separated storm and sanitary sewers",
      "Gravity-flow drainage universal"
    ],
    robertsNote: "The Babylonians understood urban drainage fundamentals that some modern cities still struggle with: get the water off the streets, get it into pipes, get it to the river. Simple concept, but requires infrastructure investment."
  },
  "subak-system": {
    tagline: "Water democracy—one farmer, one vote, regardless of land size",
    keyFact: "UNESCO World Heritage: thousands of farmers coordinate through temple meetings with no central authority",
    howItWorks: [
      "Water from volcanic highlands distributed by primary canal",
      "Each Subak unit is a village cooperative",
      "Local temple coordinates water allocation",
      "Democratic council: one farmer = one vote",
      "Tektek formula: water share = land × crop × season / total",
      "Regional water temple coordinates multiple Subaks"
    ],
    whyItMattered: [
      "Community-based water governance",
      "No central authority needed",
      "Integrates religion with resource management",
      "Sustainable for 1,000+ years"
    ],
    legacyToday: [
      "UNESCO World Heritage Cultural Landscape",
      "Model for sustainable irrigation worldwide",
      "Still operating exactly as designed"
    ],
    robertsNote: "The Subak system is the best example of sustainable water governance I've ever studied. No bureaucracy, no central authority—just farmers meeting at temples and figuring it out together. It's worked for a thousand years."
  },
  "segaran-reservoir": {
    tagline: "6.5 hectares of water engineering for Majapahit's capital",
    keyFact: "1 million+ cubic meters capacity with brick-lined channels and overflow spillways",
    howItWorks: [
      "Intake canal from Brantas River",
      "Multiple reservoirs for redundancy",
      "Segaran main reservoir: 6.5 hectares",
      "Brick-lined channels with precise gradients",
      "Overflow spillways for flood control",
      "Distribution to palace, temples, markets, craft quarters"
    ],
    whyItMattered: [
      "Supported largest pre-colonial Indonesian city",
      "Enabled year-round water supply",
      "Integration with urban planning",
      "Template for Javanese hydraulic cities"
    ],
    legacyToday: [
      "Archaeological evidence of sophisticated engineering",
      "Study of ancient urban water systems",
      "Majapahit period tourism"
    ],
    technicalSpecs: {
      materials: "Brick channels, earth embankments",
      dimensions: "Segaran reservoir 6.5 hectares",
      capacity: "1 million+ cubic meters"
    },
    robertsNote: "Trowulan had sophisticated water infrastructure that rivals anything in medieval Europe. Multiple reservoirs, precise gradients, integration with city planning—this was serious hydraulic engineering."
  }
};

export function getInventionDetail(id: string): InventionDetailData | undefined {
  return inventionDetails[id];
}
