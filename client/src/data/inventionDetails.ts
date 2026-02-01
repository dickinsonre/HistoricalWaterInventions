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
  "qanat": "/diagrams/qanat.png",
  "qanat-plans": "/diagrams/qanat.png",
  "jerwan-aqueduct": "/diagrams/aqueduct.png",
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
  "subak-system": "/diagrams/subak.png",
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
  "drip-irrigation": "/diagrams/drip-irrigation.png",
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
  "alhambra-fountains": "/diagrams/roman-fountain.png",
  "noria-wheel": "/diagrams/archimedes-screw.png",
  "aflaj-system": "/diagrams/qanat.png",
  "date-palm-oasis": "/diagrams/qanat.png",
  "mose-barriers": "/diagrams/thames-barrier.png",
  "venice-cisterns": "/diagrams/nabataean-cistern.png",
  "lagoon-management": "/diagrams/ancient-dam.png",
  "karez-system": "/diagrams/qanat.png",
  "caravanserai-wells": "/diagrams/nabataean-cistern.png"
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
  }
};

export function getInventionDetail(id: string): InventionDetailData | undefined {
  return inventionDetails[id];
}
