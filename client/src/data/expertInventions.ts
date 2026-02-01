export interface TechnicalDetails {
  [key: string]: string | string[] | number | boolean | object;
}

export interface ExpertInvention {
  id: string;
  name: string;
  alternateNames?: string[];
  civilization: string;
  region: string;
  dateInvented: number;
  datePrecision: "year" | "decade" | "century" | "millennium";
  category: string;
  subcategory?: string;
  description: string;
  technicalDetails?: TechnicalDetails;
  engineerNotes: string;
  modernRelevance: string;
  stillInUse: boolean;
  useLocations?: string[];
  preservedExamples?: string[];
  sources?: string[];
  relatedInventions?: string[];
  tags?: string[];
}

export interface ExpertDatabase {
  metadata: {
    version: string;
    totalInventions: number;
    lastUpdated: string;
    curator: string;
    note: string;
  };
  inventions: ExpertInvention[];
}

export const expertInventionsDatabase: ExpertDatabase = {
  metadata: {
    version: "1.0",
    totalInventions: 52,
    lastUpdated: "2026-02-01",
    curator: "Robert Dickinson",
    note: "50+ years of water engineering expertise applied to 8000 years of history"
  },
  inventions: [
    {
      id: "shaduf",
      name: "Shaduf",
      alternateNames: ["Shadoof", "Swape", "Counterpoise lift"],
      civilization: "egypt",
      region: "Nile Valley",
      dateInvented: -2000,
      datePrecision: "century",
      category: "water-lifting",
      subcategory: "manual-powered",
      description: "A hand-operated device for lifting water, consisting of a long suspended pole weighted at one end and with a bucket at the other.",
      technicalDetails: {
        liftHeight: "3 meters typical",
        flowRate: "2,500 liters per day",
        powerSource: "Human (1 operator)",
        materials: ["Wood", "Rope", "Clay or leather bucket", "Stone counterweight"],
        efficiency: "60-70%"
      },
      engineerNotes: "The shaduf is a masterpiece of simple mechanics. The counterweight—typically a mud brick or stone—reduces the effort needed to lift a full bucket by 80%. I've calculated that a skilled operator could irrigate about 0.5 hectares per day, enough for a family farm. The genius is in the pivot point placement: move it even 10cm and efficiency drops dramatically. Ancient engineers understood leverage intuitively.",
      modernRelevance: "The counterweight principle appears in modern construction cranes, well pumps in developing nations, and even the balanced arm of a desk lamp.",
      stillInUse: true,
      useLocations: ["Egypt", "India", "Sudan", "Iraq"],
      sources: [
        "Oleson, J.P. Oxford Handbook of Engineering and Technology in the Classical World",
        "Postgate, J.N. Early Mesopotamia"
      ],
      relatedInventions: ["sakia", "noria", "archimedes-screw"],
      tags: ["irrigation", "simple-machines", "lever", "agriculture"]
    },
    {
      id: "qanat",
      name: "Qanat",
      alternateNames: ["Kariz", "Karez", "Foggara", "Falaj", "Khettara"],
      civilization: "persia",
      region: "Iranian Plateau",
      dateInvented: -1000,
      datePrecision: "century",
      category: "water-transport",
      subcategory: "gravity-fed",
      description: "An underground aqueduct system that uses gravity to bring water from mountain aquifers to surface canals, without any pumping.",
      technicalDetails: {
        typicalLength: "5-40 kilometers",
        maxLength: "120 kilometers (Gonabad qanat)",
        gradient: "1:1000 to 1:1500",
        depth: "10-300 meters at mother well",
        flowRate: "10-500 liters per second",
        shaftSpacing: "20-50 meters"
      },
      engineerNotes: "The qanat represents arguably the most sophisticated water engineering before the modern era. The precision required is extraordinary—a 40km tunnel with a 1:1000 gradient means the total drop is only 40 meters, requiring accuracy within centimeters per kilometer. The vertical shafts (every 20-50m) serve triple duty: construction access, maintenance, and ventilation. What amazes me most is that they calculated aquifer locations without any modern surveying—just observation of vegetation patterns and soil moisture. The profession of 'muqanni' (qanat digger) was hereditary, with techniques passed father to son for millennia.",
      modernRelevance: "The qanat principle—passive, gravity-fed water transport—inspires modern 'zero-energy' water systems. Some engineers are reviving qanats for sustainable agriculture as aquifers deplete.",
      stillInUse: true,
      useLocations: ["Iran (37,000 active)", "Afghanistan", "Morocco", "Oman", "China (Xinjiang)"],
      sources: [
        "Beaumont, P. Qanat Systems in Iran",
        "Lightfoot, D.R. Syrian Qanat Romani",
        "UNESCO Intangible Cultural Heritage documentation"
      ],
      relatedInventions: ["roman-aqueduct", "tunnel-engineering", "persian-wheel"],
      tags: ["groundwater", "gravity-flow", "sustainable", "tunnel", "irrigation"]
    },
    {
      id: "roman-aqueduct",
      name: "Roman Aqueduct",
      alternateNames: ["Aqua", "Water bridge"],
      civilization: "rome",
      region: "Roman Empire",
      dateInvented: -312,
      datePrecision: "year",
      category: "water-transport",
      subcategory: "gravity-fed",
      description: "Engineered channels that transported water from distant sources to cities using precise gradients, including famous bridge structures across valleys.",
      technicalDetails: {
        totalInRome: "11 major aqueducts",
        combinedLength: "500+ kilometers",
        dailyDelivery: "1 million cubic meters to Rome",
        perCapitaSupply: "1,000 liters per person per day",
        typicalGradient: "1:200 to 1:4800",
        materials: ["Stone", "Roman concrete (opus caementicium)", "Lead pipes", "Terracotta"]
      },
      engineerNotes: "Romans didn't invent aqueducts—Assyrians and Greeks built them earlier—but they perfected them at scale. The Aqua Marcia (144 BCE) dropped only 10m over its 91km length—a gradient of 0.01%. They achieved this without theodolites or GPS using a tool called a 'chorobates' (essentially a 6-meter water level). What strikes me as a modern engineer: Rome's per-capita water supply (1,000 L/day) exceeds most modern American cities (~300 L/day). They prioritized public health through engineering.",
      modernRelevance: "The gradient principles are unchanged. Modern water mains still rely on gravity flow where possible—it's free energy. The concrete they invented (pozzolanic cement with volcanic ash) is being studied today because it actually strengthens underwater, unlike Portland cement.",
      stillInUse: false,
      preservedExamples: ["Pont du Gard (France)", "Segovia Aqueduct (Spain)", "Aqueduct of Valens (Istanbul)"],
      sources: [
        "Frontinus, Sextus Julius. De aquaeductu urbis Romae (97 CE)",
        "Hodge, A.T. Roman Aqueducts and Water Supply",
        "Blackman, D.R. and Hodge, A.T. Frontinus' Legacy"
      ],
      relatedInventions: ["cloaca-maxima", "roman-concrete", "siphon-pipe", "settling-tank"],
      tags: ["urban-water", "engineering-marvel", "public-health", "concrete"]
    },
    {
      id: "archimedes-screw",
      name: "Archimedes Screw",
      alternateNames: ["Screw pump", "Water screw", "Cochlias"],
      civilization: "greece",
      region: "Syracuse (Sicily) / Hellenistic World",
      dateInvented: -250,
      datePrecision: "decade",
      category: "water-lifting",
      subcategory: "rotary-powered",
      description: "A helical screw inside a cylinder that lifts water when rotated, capable of moving water uphill with continuous flow.",
      technicalDetails: {
        typicalAngle: "30-45 degrees from horizontal",
        liftHeight: "1-4 meters typical",
        efficiency: "80% (highest of ancient water lifters)",
        flowRate: "Variable based on diameter and rotation speed",
        materials: ["Wood (ancient)", "Bronze", "Iron", "Modern: stainless steel, composites"]
      },
      engineerNotes: "The Archimedes screw is the only ancient water-lifting device that's actually improved with modern materials while keeping the same principle. Its genius is that it lifts water through rotation without valves or seals—nothing to wear out or leak. At 80% efficiency, it outperforms most ancient pumps. What's remarkable: it handles debris, fish, and sediment without damage. I've seen modern fish ladders use Archimedes screws because fish survive passage unharmed.",
      modernRelevance: "Still manufactured today for: low-head hydropower (reversed as generators), wastewater treatment (gentle pumping preserves biological flocs), fish passage, flood control. Some produce 300+ kW of electricity.",
      stillInUse: true,
      useLocations: ["Netherlands (flood control)", "Wastewater plants worldwide", "Micro-hydro installations"],
      sources: [
        "Oleson, J.P. Greek and Roman Mechanical Water-Lifting Devices",
        "Vitruvius. De Architectura, Book X",
        "Rorres, C. The Turn of the Screw: Optimal Design of the Archimedes Screw"
      ],
      relatedInventions: ["shaduf", "noria", "tympanum"],
      tags: ["simple-machines", "still-used", "hydropower", "biomimicry"]
    },
    {
      id: "noria",
      name: "Noria",
      alternateNames: ["Na'ura", "Water wheel", "Persian wheel (variant)"],
      civilization: "mesopotamia",
      region: "Syria / Middle East",
      dateInvented: -200,
      datePrecision: "century",
      category: "water-lifting",
      subcategory: "water-powered",
      description: "A large water wheel with containers on its rim that lifts water using the river's current as power—the first water-powered machine.",
      technicalDetails: {
        typicalDiameter: "5-20 meters",
        maxDiameter: "20+ meters (Hama norias)",
        liftHeight: "Equal to wheel radius",
        flowRate: "Variable, up to 100 liters/minute",
        powerSource: "River current (zero external energy)",
        materials: ["Wood", "Rope", "Clay pots or wooden boxes"]
      },
      engineerNotes: "The noria represents a conceptual leap: it's the first machine that runs on renewable energy without human or animal input. The river literally lifts its own water. The giant norias of Hama, Syria (some dating to Byzantine era, rebuilt many times) are still among the largest wooden machines ever built—20m diameter wheels groaning and splashing, lifting water 10+ meters to irrigation channels. The sound they make—a haunting creak and splash—can be heard across the city. They're monuments to the idea that engineering can work WITH nature.",
      modernRelevance: "The noria principle—extracting energy from water flow—evolved into hydropower turbines. Modern 'zero-head' hydropower systems are essentially sophisticated norias.",
      stillInUse: true,
      useLocations: ["Hama, Syria (tourist/heritage)", "Morocco", "Spain (heritage)", "Southeast Asia"],
      sources: [
        "Schnitter, N. A History of Dams",
        "Hill, D.R. A History of Engineering in Classical and Medieval Times"
      ],
      relatedInventions: ["watermill", "sakia", "persian-wheel"],
      tags: ["renewable-energy", "zero-input", "river-power", "irrigation"]
    },
    {
      id: "cloaca-maxima",
      name: "Cloaca Maxima",
      alternateNames: ["Greatest Sewer"],
      civilization: "rome",
      region: "Rome, Italy",
      dateInvented: -600,
      datePrecision: "century",
      category: "drainage",
      subcategory: "sewer",
      description: "One of the world's earliest sewage systems, originally built to drain marshes and later expanded to carry wastewater from Rome to the Tiber River.",
      technicalDetails: {
        originalConstruction: "600 BCE (Etruscan kings)",
        expandedBy: "Romans through 1st century CE",
        mainTunnelWidth: "3.2 meters",
        mainTunnelHeight: "4.2 meters",
        constructionMethod: "Cut-and-cover, then vaulted stone",
        stillFunctions: "Yes, after 2,600 years"
      },
      engineerNotes: "The Cloaca Maxima still works after 2,600 years. Let that sink in. Most modern infrastructure is designed for 50-100 year lifespans. The Romans overbuilt everything—the main tunnel is large enough to drive a car through, which seems excessive until you realize it has never needed upsizing. They understood that sewers must handle peak flows (storms) not just average flows. The outfall to the Tiber is still visible today, still draining Rome's ancient core. It's humbling to realize my SWMM models are calculating flows through channels that Etruscan engineers designed.",
      modernRelevance: "The Cloaca Maxima established principles still used today: gravity flow, oversized capacity for storms, access points for maintenance. Rome's modern sewer system incorporates sections of the original.",
      stillInUse: true,
      useLocations: ["Rome (original still functions as storm drain)"],
      sources: [
        "Hopkins, J.N. The Cloaca Maxima and the Monumental Manipulation of Water in Archaic Rome",
        "Taylor, R. Public Needs and Private Pleasures: Water Distribution in Ancient Rome"
      ],
      relatedInventions: ["roman-aqueduct", "settling-tank", "manhole"],
      tags: ["sewage", "drainage", "urban-infrastructure", "longevity", "SWMM-relevant"]
    },
    {
      id: "nilometer",
      name: "Nilometer",
      alternateNames: ["Miqyas"],
      civilization: "egypt",
      region: "Nile River",
      dateInvented: -3000,
      datePrecision: "millennium",
      category: "measurement",
      subcategory: "water-level",
      description: "A structure for measuring the Nile River's water level during annual floods, used to predict crop yields and set tax rates.",
      technicalDetails: {
        types: ["Column in river/well", "Staircase descending to river", "Channel with gauge"],
        measurementUnit: "Cubits (approximately 52.4 cm)",
        idealFloodHeight: "16 cubits (8.4 meters above low water)",
        tooLow: "Below 12 cubits = famine",
        tooHigh: "Above 18 cubits = destructive flooding"
      },
      engineerNotes: "The Nilometer is the world's first hydrological monitoring network—3,000 years before modern stream gauging. Egypt had multiple nilometers along the Nile, and the data was used for governance: high readings meant good harvests and higher taxes could be collected; low readings meant famine relief was needed. This is the first example of data-driven water management. The precision required is impressive—distinguishing between 15 and 16 cubits (about 50cm difference) determined whether the year would bring prosperity or hardship.",
      modernRelevance: "The principle—continuous water level monitoring for prediction and planning—is the foundation of modern hydrology. USGS operates 10,000+ stream gauges in the US alone, direct descendants of the nilometer concept.",
      stillInUse: false,
      preservedExamples: ["Rhoda Island Nilometer (Cairo, 861 CE)", "Elephantine Island Nilometer", "Kom Ombo Temple Nilometer"],
      sources: [
        "Bonneau, D. Le régime administratif de l'eau du Nil",
        "Popper, W. The Cairo Nilometer"
      ],
      relatedInventions: ["basin-irrigation", "shaduf", "water-clock"],
      tags: ["measurement", "prediction", "governance", "data-driven", "hydrology"]
    },
    {
      id: "great-bath-mohenjo-daro",
      name: "Great Bath of Mohenjo-daro",
      alternateNames: ["Great Bath"],
      civilization: "indus",
      region: "Sindh (modern Pakistan)",
      dateInvented: -2500,
      datePrecision: "century",
      category: "water-storage",
      subcategory: "pool",
      description: "The earliest known public water tank, featuring sophisticated waterproofing and drainage systems in an urban setting.",
      technicalDetails: {
        dimensions: "12m x 7m x 2.4m deep",
        waterproofing: "Bitumen between two layers of brick",
        features: ["Steps on north and south", "Surrounding rooms (changing?)", "Well for water supply", "Covered drain for emptying"],
        constructionQuality: "Watertight after 4,500 years"
      },
      engineerNotes: "The Great Bath demonstrates that the Indus Valley civilization understood hydraulic engineering to a degree that rivals anything for the next 2,000 years. The waterproofing system—bitumen between brick courses—is still effective. Every house in Mohenjo-daro had its own bathroom connected to a city-wide drainage system. They invented urban sanitation before Egypt built the pyramids. What happened to this knowledge when the civilization declined? It wasn't replicated anywhere for millennia.",
      modernRelevance: "The Indus approach—every dwelling connected to drainage—is the principle behind modern building codes. The fact that they achieved this in 2500 BCE should humble any modern engineer.",
      stillInUse: false,
      preservedExamples: ["Mohenjo-daro archaeological site (UNESCO World Heritage)"],
      sources: [
        "Jansen, M. Mohenjo-daro: City of the Indus Valley",
        "Kenoyer, J.M. Ancient Cities of the Indus Valley Civilization"
      ],
      relatedInventions: ["indus-drainage", "covered-drains", "public-wells"],
      tags: ["urban-planning", "public-health", "waterproofing", "sanitation"]
    },
    {
      id: "dujiangyan",
      name: "Dujiangyan Irrigation System",
      alternateNames: ["Du Jiang Yan"],
      civilization: "china",
      region: "Sichuan Province",
      dateInvented: -256,
      datePrecision: "year",
      category: "flood-control",
      subcategory: "diversion",
      description: "An ancient irrigation and flood control system that tames the Min River without a dam, using a fish-mouth levee to split flow.",
      technicalDetails: {
        builder: "Li Bing and Li Erlong",
        principle: "Divide flow, not block it",
        keyComponents: ["Yuzui (Fish Mouth) dividing weir", "Feishayan (Flying Sand) spillway", "Baopingkou (Bottle Neck) channel"],
        irrigatedArea: "5,300 square kilometers",
        waterSplit: "60% inner river (irrigation) in dry season, 40% in flood season"
      },
      engineerNotes: "Dujiangyan is the most ingenious water system I know. It controls flooding and provides irrigation WITHOUT a dam—using only the geometry of the river channel. The 'fish mouth' splits the flow: in dry season, 60% goes to irrigation channels; in floods, the ratio reverses automatically because of how the channels are angled. It's been operating continuously for 2,270 years with only minor maintenance. Li Bing's motto was 'Dig the channel deep, keep the spillway low'—six characters that summarize flood engineering wisdom that took the West another 2,000 years to learn.",
      modernRelevance: "Dujiangyan irrigates the same 5,300 km² it always has, now feeding 10+ million people. It survived the 2008 Sichuan earthquake with minor damage. Modern engineers study it as an example of 'soft engineering'—working with natural processes rather than fighting them.",
      stillInUse: true,
      useLocations: ["Chengdu Plain, Sichuan, China"],
      sources: [
        "Needham, J. Science and Civilisation in China, Vol. 4",
        "UNESCO World Heritage documentation"
      ],
      relatedInventions: ["grand-canal", "dragon-backbone-pump", "flood-gates"],
      tags: ["flood-control", "irrigation", "soft-engineering", "sustainable", "still-operating"]
    },
    {
      id: "phoenician-harbor",
      name: "Phoenician Artificial Harbor (Cothon)",
      alternateNames: ["Cothon", "Kothon", "Inner Harbor"],
      civilization: "phoenicia",
      region: "Tyre, Sidon, Carthage (Lebanese/Tunisian coast)",
      dateInvented: -1000,
      datePrecision: "century",
      category: "water-management",
      subcategory: "harbor-engineering",
      description: "Artificial rectangular harbors carved from rock or constructed with massive stone blocks, featuring innovative water circulation and ship maintenance facilities.",
      technicalDetails: {
        typicalDimensions: "150-400m diameter",
        construction: "Cut from bedrock or built with ashlar masonry",
        features: ["Sluice gates for flushing", "Shipsheds for dry dock", "Protective breakwaters", "Inner and outer basins"],
        famousExamples: ["Carthage (circular naval harbor, rectangular merchant harbor)", "Tyre (north and south harbors)", "Motya, Sicily"]
      },
      engineerNotes: "The Phoenicians were the first hydraulic engineers of the sea. Their cothon (artificial inner harbor) at Carthage could hold 220 warships in individual sheds arranged around a circular basin—essentially an ancient naval base with drydock facilities. What impresses me most: they understood that enclosed harbors need water circulation to prevent stagnation. At Tyre, they carved sluice channels through solid rock to flush the harbor with each tide. They also pioneered underwater construction using cofferdams—a technique we still use today.",
      modernRelevance: "The cothon concept evolved into modern artificial harbors. The principle of tidal flushing for water quality is used in marina design today.",
      stillInUse: false,
      preservedExamples: ["Carthage harbor ruins (visible from satellite)", "Motya cothon (Sicily)", "Tyre ancient ports (underwater archaeology)"],
      sources: [
        "Frost, H. Under the Mediterranean",
        "Carayon, N. Les ports phéniciens et puniques",
        "Markoe, G. Phoenicians"
      ],
      relatedInventions: ["breakwater", "sea-wall", "tidal-flushing"],
      tags: ["harbor", "maritime", "naval-engineering", "tidal"]
    },
    {
      id: "carthaginian-cisterns",
      name: "Carthaginian Cistern System",
      alternateNames: ["Punic cisterns", "Malga cisterns"],
      civilization: "carthage",
      region: "North Africa (Tunisia)",
      dateInvented: -600,
      datePrecision: "century",
      category: "water-storage",
      subcategory: "cistern",
      description: "Massive underground cistern networks that collected rainwater to supply cities in semi-arid North Africa.",
      technicalDetails: {
        laMatgaCisterns: {
          capacity: "50,000+ cubic meters",
          numberOfChambers: "24 parallel vaulted chambers",
          chamberDimensions: "100m long x 8m wide x 10m high",
          connectedBy: "Arched openings"
        },
        householdCisterns: "Every Carthaginian house had one",
        waterproofing: "Opus signinum (waterproof plaster with crushed pottery)"
      },
      engineerNotes: "Carthage's cisterns solved an impossible problem: supplying a city of 500,000 in a region with only 500mm annual rainfall. The La Malga cisterns alone could supply the city for months during drought. What strikes me: they didn't just store water, they managed an entire catchment. Every roof was a collection surface; every street was graded to direct runoff to cisterns; every cistern was connected to overflow channels that fed the next. It was a city-scale rainwater harvesting system—something we're only now rediscovering as 'green infrastructure.'",
      modernRelevance: "Modern rainwater harvesting and 'sponge city' design echo Carthaginian principles. Their opus signinum waterproofing lasted millennia—modern waterproofing often fails within decades.",
      stillInUse: false,
      preservedExamples: ["La Malga cisterns (Tunisia)", "Various ruins in Carthage"],
      sources: [
        "Rakob, F. Die Wasserversorgung des antiken Karthago",
        "Wilson, A. Hydraulic Engineering and Water Supply"
      ],
      relatedInventions: ["roman-aqueduct", "nabataean-cistern"],
      tags: ["rainwater-harvesting", "urban-water", "drought-resilience"]
    },
    {
      id: "chinampa",
      name: "Chinampa (Floating Gardens)",
      alternateNames: ["Floating gardens", "Aztec gardens"],
      civilization: "aztec",
      region: "Valley of Mexico (Lake Texcoco)",
      dateInvented: 1200,
      datePrecision: "century",
      category: "water-agriculture",
      subcategory: "land-creation",
      description: "Artificial agricultural islands built in shallow lake beds, providing highly productive farmland with sub-irrigation from the lake.",
      technicalDetails: {
        construction: "Woven willow fence filled with mud, vegetation, and lake sediment",
        typicalSize: "30m x 2.5m",
        anchorage: "Willow trees planted at corners (roots anchor to lake bed)",
        productivity: "7 harvests per year possible",
        irrigation: "Sub-irrigation from lake (roots reach water table)"
      },
      engineerNotes: "Chinampas may be the most productive agricultural system ever devised per unit area. The Aztecs built land where there was none—rectangular plots in shallow Lake Texcoco, anchored by willow trees. The genius is in the sub-irrigation: crops draw water from below through capillary action, no pumping or channels needed. They fertilized with nitrogen-rich lake muck. At their peak, chinampas fed 200,000+ people in Tenochtitlan. Some still operate in Xochimilco (Mexico City) today—900+ years of continuous cultivation. Modern hydrologists are studying them as models for sustainable wetland agriculture.",
      modernRelevance: "Chinampas at Xochimilco are a UNESCO World Heritage site and still produce vegetables for Mexico City. They're studied as models for sustainable intensification of agriculture.",
      stillInUse: true,
      useLocations: ["Xochimilco, Mexico City (reduced but active)"],
      sources: [
        "Coe, M.D. The Chinampas of Mexico",
        "Armillas, P. Gardens on Swamps"
      ],
      relatedInventions: ["aztec-aqueduct", "dike-system"],
      tags: ["agriculture", "land-reclamation", "sub-irrigation", "sustainable"]
    },
    {
      id: "falaj-omani",
      name: "Falaj (Omani Water Channel)",
      alternateNames: ["Aflaj (plural)", "Omani qanat"],
      civilization: "arabia",
      region: "Oman, Arabian Peninsula",
      dateInvented: 500,
      datePrecision: "century",
      category: "water-transport",
      subcategory: "gravity-fed",
      description: "Gravity-fed irrigation channels that bring water from mountain sources to oasis communities, with sophisticated water-rights allocation systems.",
      technicalDetails: {
        types: ["Daudi (underground spring-fed)", "Ghaili (wadi flood-fed)", "Aini (surface spring-fed)"],
        totalInOman: "Over 4,000 falaj systems",
        waterRights: "Time-based shares (30-minute units called 'athars')",
        managementRole: "Elected 'Wakil' (falaj manager)"
      },
      engineerNotes: "What makes the Omani falaj system remarkable isn't just the engineering—it's the social system built around it. Water is allocated by time (typically 30-minute shares) rather than volume. A farmer might own 2 'athars' of water every 14 days—meaning they can divert the entire flow to their field for one hour every fortnight. This system has prevented conflicts over water for 1,500 years. The elected 'Wakil' manages maintenance and settles disputes. It's the most sophisticated traditional water governance I've encountered.",
      modernRelevance: "UNESCO recognized five Omani aflaj as World Heritage sites specifically because of their social management systems, not just engineering. Modern water markets are studying these traditional 'water rights trading' systems.",
      stillInUse: true,
      useLocations: ["Oman (thousands still operating)", "UAE"],
      sources: [
        "Wilkinson, J.C. Water and Tribal Settlement in South-East Arabia",
        "UNESCO Aflaj Irrigation Systems documentation"
      ],
      relatedInventions: ["qanat", "water-clock"],
      tags: ["water-rights", "social-system", "governance", "sustainable"]
    },
    {
      id: "stepwell",
      name: "Stepwell (Vav)",
      alternateNames: ["Vav", "Baoli", "Baori", "Vavdi"],
      civilization: "india",
      region: "Western India (Gujarat, Rajasthan)",
      dateInvented: 300,
      datePrecision: "century",
      category: "water-access",
      subcategory: "well",
      description: "Monumental structures with steps descending to the water table, combining water access with social gathering space and architectural beauty.",
      technicalDetails: {
        depthRange: "10-50 meters",
        constructionPeriod: "2nd-19th century CE (various eras)",
        features: ["Multiple levels of pavilions", "Carved galleries", "Ventilation system (cool air rises from water)"],
        famousExamples: ["Rani ki Vav (Queen's Stepwell, Patan)", "Chand Baori (Rajasthan)", "Adalaj Vav (Gujarat)"]
      },
      engineerNotes: "Stepwells solve a problem unique to India's monsoon climate: groundwater varies by 20+ meters between wet and dry seasons. A simple well would be dry half the year or require impossibly deep rope draws. Stepwells provide access at every level. But what elevates them beyond engineering is the understanding that water access is social infrastructure. These were gathering places—cool refuges from summer heat (the deep well creates natural air conditioning), places for women to meet and community rituals. Rani ki Vav has over 500 sculptures adorning its walls—it's an art gallery disguised as a well.",
      modernRelevance: "Stepwells are being studied for their passive cooling properties. The integration of infrastructure with public space informs modern 'complete streets' and 'green infrastructure' design.",
      stillInUse: true,
      useLocations: ["Some remain in use in Gujarat and Rajasthan; most are heritage sites"],
      sources: [
        "Livingston, M. Steps to Water: The Ancient Stepwells of India",
        "Jain-Neubauer, J. The Stepwells of Gujarat"
      ],
      relatedInventions: ["great-bath-mohenjo-daro", "persian-wheel"],
      tags: ["groundwater", "public-space", "architecture", "passive-cooling"]
    },
    {
      id: "roman-concrete",
      name: "Roman Marine Concrete",
      alternateNames: ["Opus caementicium", "Pozzolanic concrete"],
      civilization: "rome",
      region: "Roman Empire",
      dateInvented: -200,
      datePrecision: "century",
      category: "construction-material",
      subcategory: "concrete",
      description: "A volcanic ash-based concrete that sets underwater and actually strengthens over centuries in seawater.",
      technicalDetails: {
        ingredients: ["Volcanic ash (pozzolana from Pozzuoli)", "Lime (calcium oxide)", "Seawater", "Volcanic rock aggregate (tuff)"],
        setTime: "Initial set underwater",
        strengthOverTime: "Increases for centuries (unlike Portland cement)",
        mechanism: "Seawater reacts with ash to grow aluminous tobermorite crystals"
      },
      engineerNotes: "Roman marine concrete breaks the rules of modern materials science. Portland cement (invented 1824) degrades in seawater; Roman concrete gets stronger. We only understood why in 2017: seawater percolating through the concrete triggers crystal growth that binds the material tighter. Roman harbor structures at Caesarea and Alexandria have survived 2,000 years of wave action. Modern concrete structures in the same environment last 50 years. We're now trying to replicate their formula. The Romans stumbled onto something we're still trying to understand.",
      modernRelevance: "Researchers are developing 'Roman-inspired' concrete for coastal structures, hoping to achieve similar longevity. The lower carbon footprint (no high-temperature kiln) also makes it attractive for sustainable construction.",
      stillInUse: false,
      preservedExamples: ["Caesarea Maritima harbor", "Alexandria harbor", "Roman fish ponds"],
      sources: [
        "Jackson, M.D. et al. Mechanical resilience and cementitious processes in Imperial Roman architectural mortar",
        "Oleson, J.P. Building for Eternity: The History and Technology of Roman Concrete Engineering"
      ],
      relatedInventions: ["roman-aqueduct", "cloaca-maxima"],
      tags: ["materials-science", "durability", "sustainable", "mystery-solved"]
    },
    {
      id: "windmill-water-pump",
      name: "Water-Pumping Windmill",
      alternateNames: ["Windpump", "Wind engine"],
      civilization: "islamic",
      region: "Persia / later Netherlands",
      dateInvented: 900,
      datePrecision: "century",
      category: "water-lifting",
      subcategory: "wind-powered",
      description: "Windmills adapted to pump water for irrigation and land drainage, freeing water-lifting from human or animal power.",
      technicalDetails: {
        persianDesign: {
          type: "Vertical axis",
          use: "Irrigation",
          blades: "Bundled reeds"
        },
        dutchDesign: {
          type: "Horizontal axis (post mill, tower mill)",
          use: "Land drainage (polder creation)",
          output: "Could pump 16,000 cubic meters per day"
        }
      },
      engineerNotes: "The Islamic world gave us water-pumping windmills (9th century Persia); the Dutch perfected them for drainage. By the 1600s, the Netherlands had 9,000 windmills, many pumping water from polders (land below sea level). A single Dutch windmill could move 16,000 m³ per day—equivalent to hundreds of human operators. This made human habitation possible in places that would otherwise be underwater. The Dutch 'water board' system, created to manage these windmills collectively, is one of the oldest democratic institutions in Europe—people HAD to cooperate or everyone's land flooded.",
      modernRelevance: "Wind-powered pumps remain popular for rural water supply, especially in Australia and the American Great Plains. Modern wind turbines for electricity are direct descendants.",
      stillInUse: true,
      useLocations: ["Australia (ranch water supply)", "American Great Plains", "African development projects"],
      sources: [
        "Hill, D.R. A History of Engineering in Classical and Medieval Times",
        "van de Ven, G.P. Man-made Lowlands: History of Water Management in the Netherlands"
      ],
      relatedInventions: ["noria", "archimedes-screw"],
      tags: ["wind-power", "renewable-energy", "land-reclamation", "still-used"]
    },
    {
      id: "nabataean-cistern",
      name: "Nabataean Desert Water Harvesting",
      alternateNames: ["Negev Desert irrigation"],
      civilization: "nabataean",
      region: "Petra, Negev Desert (Jordan, Israel)",
      dateInvented: -300,
      datePrecision: "century",
      category: "water-harvesting",
      subcategory: "runoff-collection",
      description: "Sophisticated systems capturing rare desert rainfall through channels, cisterns, and terraced agriculture.",
      technicalDetails: {
        averageRainfall: "50-100mm per year",
        collectionRatio: "20:1 to 30:1 (catchment area to cultivated area)",
        components: ["Hillside channels", "Settling basins", "Plastered cisterns", "Terraced fields"],
        petraCisternCount: "200+ rock-cut cisterns"
      },
      engineerNotes: "The Nabataeans built a caravan trading empire in one of Earth's harshest deserts—and did it through water engineering. At Petra, every surface became a catchment: rooftops, plazas, cliffs. Water flowed through ceramic pipes to cisterns carved from solid rock. Their system supplied 30,000 people with only 150mm annual rainfall. The mathematics are elegant: they calculated that a 20:1 ratio of catchment to cropland could grow barley even in drought years. Israeli archaeologists reconstructed some of these ancient farms in the 1950s and successfully grew crops using only captured runoff—proving the system still works.",
      modernRelevance: "Nabataean water harvesting principles are used in modern desert agriculture (Israel, Jordan, Libya). The concept of 'microcatchments' directly descends from their work.",
      stillInUse: true,
      useLocations: ["Reconstructed systems in Israel's Negev", "Modern adaptations in Jordan"],
      sources: [
        "Evenari, M. The Negev: The Challenge of a Desert",
        "Oleson, J.P. The Water-Supply System of Nabataean and Roman Humayma"
      ],
      relatedInventions: ["qanat", "carthaginian-cisterns"],
      tags: ["desert", "water-harvesting", "runoff-agriculture", "resilience"]
    },
    {
      id: "canal-lock",
      name: "Pound Lock",
      alternateNames: ["Navigation lock", "Canal lock", "Chamber lock"],
      civilization: "china",
      region: "China (later Europe)",
      dateInvented: 984,
      datePrecision: "year",
      category: "water-transport",
      subcategory: "navigation",
      description: "A chamber with gates at each end allowing boats to move between different water levels on a canal.",
      technicalDetails: {
        inventor: "Qiao Weiyue (Chinese transport commissioner)",
        principle: "Chamber fills/empties to match level at either end",
        components: ["Upstream gates", "Downstream gates", "Chamber walls", "Sluices or paddles"],
        europeanReinvention: "15th century Netherlands and Italy"
      },
      engineerNotes: "The pound lock was invented in China in 984 CE by Qiao Weiyue, solving a problem on the Grand Canal. Earlier 'flash locks' were dangerous—they released a surge of water that rushed boats downstream. The pound lock is gentler and allows two-way traffic. Europe independently developed (or copied?) the pound lock in the 15th century. Leonardo da Vinci added the mitered gate (two gates meeting in a V shape pointing upstream—water pressure seals them tighter). Every canal lock in the world today uses these same principles. The Panama Canal moves ships 26 meters up and down using technology unchanged in concept for 1,000 years.",
      modernRelevance: "Every modern canal, from Panama to Amsterdam, uses pound locks. They remain the only practical way to move ships over elevation changes without dam portages.",
      stillInUse: true,
      useLocations: ["Panama Canal", "All major canal systems worldwide"],
      sources: [
        "Needham, J. Science and Civilisation in China, Vol. 4",
        "Hadfield, C. World Canals: Inland Navigation Past and Present"
      ],
      relatedInventions: ["grand-canal", "mitered-gate"],
      tags: ["navigation", "canal", "still-used", "unchanged-design"]
    },
    {
      id: "grand-canal-china",
      name: "Grand Canal of China",
      alternateNames: ["Beijing-Hangzhou Grand Canal", "Da Yunhe"],
      civilization: "china",
      region: "Eastern China (Beijing to Hangzhou)",
      dateInvented: -486,
      datePrecision: "century",
      category: "water-transport",
      subcategory: "canal",
      description: "The world's longest artificial waterway, connecting northern and southern China for grain transport and commerce.",
      technicalDetails: {
        totalLength: "1,776 kilometers",
        constructionPeriod: "486 BCE to 1293 CE (multiple dynasties)",
        connectingRivers: ["Yellow River", "Yangtze River", "Huai River", "Qiantang River"],
        elevationChange: "42 meters (crossed via locks and flash locks)",
        peakTraffic: "8,000+ boats during Qing dynasty"
      },
      engineerNotes: "The Grand Canal connects the rice surplus of the south with the political capital in the north across 1,776 km of artificial waterway. It took nearly 2,000 years to complete, with each dynasty extending or improving it. At its peak, 8,000 grain boats operated continuously. The engineering challenges were immense: the canal crosses drainage basins, meaning water at the summit level doesn't naturally flow in either direction. They solved this with feeder lakes and reservoirs—essentially giant holding tanks that gravity-feed the summit. Sui dynasty records claim one million workers were conscripted for one extension project alone.",
      modernRelevance: "The Grand Canal is still operational and carries 100 million tons of freight annually. It's a UNESCO World Heritage site recognized for its 2,500-year engineering legacy.",
      stillInUse: true,
      useLocations: ["China (entire length)"],
      sources: [
        "Needham, J. Science and Civilisation in China, Vol. 4",
        "Brook, T. The Troubled Empire: China in the Yuan and Ming Dynasties"
      ],
      relatedInventions: ["canal-lock", "dujiangyan"],
      tags: ["mega-project", "navigation", "grain-transport", "still-operating"]
    },
    {
      id: "qanat-foggara",
      name: "Foggara (Saharan Qanat)",
      alternateNames: ["Khettara", "Foggara", "Saharan qanat"],
      civilization: "berber",
      region: "Sahara Desert (Algeria, Morocco, Libya, Tunisia)",
      dateInvented: 200,
      datePrecision: "century",
      category: "water-transport",
      subcategory: "gravity-fed",
      description: "Underground water channels adapted from Persian qanat technology to tap fossil water beneath the Sahara Desert.",
      technicalDetails: {
        waterSource: "Fossil aquifers (non-renewable in human timescales)",
        typicalLength: "5-20 km",
        depth: "10-50+ meters",
        maintenanceAccess: "Vertical shafts every 10-30 meters",
        famousSystem: "Touat-Gourara region (Algeria) - 300+ foggara"
      },
      engineerNotes: "Foggaras adapted Persian qanat technology to the extreme conditions of the Sahara. The genius lies in understanding that fossil water—trapped in ancient aquifers—can sustain oasis communities if extracted slowly through gravity flow. Unlike pumping, which can deplete aquifers, foggaras are self-limiting: they only provide what gravity delivers. The Touat-Gourara oases in Algeria maintained 300+ foggaras that supported agriculture for 1,500 years. Unfortunately, modern diesel pumps are now draining the same aquifers that foggaras tapped sustainably—a cautionary tale about 'improved' technology.",
      modernRelevance: "Some foggaras remain operational. They're studied as models of sustainable aquifer use in contrast to modern over-pumping.",
      stillInUse: true,
      useLocations: ["Algeria (declining)", "Morocco"],
      sources: [
        "Lightfoot, D.R. The Origin and Diffusion of Qanats in Arabia",
        "Goblot, H. Les Qanats: Une technique d'acquisition de l'eau"
      ],
      relatedInventions: ["qanat", "carthaginian-cisterns"],
      tags: ["desert", "fossil-water", "sustainable", "gravity-flow"]
    },
    {
      id: "water-clock",
      name: "Water Clock (Clepsydra)",
      alternateNames: ["Clepsydra", "Outflow clock"],
      civilization: "multiple",
      region: "Egypt, Babylon, Greece, China, India (independent invention)",
      dateInvented: -1500,
      datePrecision: "century",
      category: "measurement",
      subcategory: "time",
      description: "A device that measures time through the regulated flow of water, predating mechanical clocks by 2,000+ years.",
      technicalDetails: {
        types: ["Outflow (water drains from container)", "Inflow (water fills calibrated container)"],
        egyptianDesign: "Truncated cone shape to maintain constant flow rate",
        greekRefinement: "Float-driven pointer and dial",
        chineseInnovation: "Escapement mechanism (11th century)"
      },
      engineerNotes: "The water clock forced ancient engineers to confront a fundamental hydraulics problem: flow rate changes as the water level (head) changes. The Egyptians solved this elegantly—making the vessel conical so the decreasing head is offset by the decreasing surface area. The mathematics work out perfectly for a straight-sided cone. Greek water clocks used a constant-head reservoir and float-driven dial. These clocks weren't just curiosities—they governed daily life, legal proceedings (speeches in Athenian courts were limited by water clock), and astronomical observations. Su Song's Chinese astronomical clock (1088 CE) added an escapement mechanism that predates European mechanical clocks by 200 years.",
      modernRelevance: "Water clocks evolved into mechanical clocks via the escapement mechanism. The constant-head tank principle is fundamental to all flow measurement.",
      stillInUse: false,
      preservedExamples: ["Multiple examples in museums (Louvre, British Museum, Science Museum)"],
      sources: [
        "Bedini, S.A. The Pulse of Time",
        "Needham, J. Heavenly Clockwork"
      ],
      relatedInventions: ["nilometer", "flow-measurement"],
      tags: ["timekeeping", "flow-control", "mathematics"]
    },
    {
      id: "persian-ice-house",
      name: "Yakhchāl (Ice House)",
      alternateNames: ["Yakhchal", "Ice pit", "Persian ice house"],
      civilization: "persia",
      region: "Iranian Plateau",
      dateInvented: -400,
      datePrecision: "century",
      category: "water-storage",
      subcategory: "ice-storage",
      description: "Underground chambers with thick mudbrick walls and domed roofs that stored ice through hot desert summers using passive cooling.",
      technicalDetails: {
        construction: "Domed structure above underground chamber",
        wallThickness: "2+ meters of mudbrick and sarooj (heat-resistant mortar)",
        iceSource: "Winter mountain runoff collected in shallow pools to freeze",
        coolingMethods: ["Evaporative cooling (wet sarooj)", "Thermal mass (thick walls)", "Night-sky radiation", "Underground insulation"]
      },
      engineerNotes: "Yakhchāls kept ice frozen through summers where temperatures exceed 40°C. How? They combined multiple passive cooling strategies that modern engineers are just rediscovering. The domed shape minimizes surface area; the thick walls provide thermal mass; underground storage taps the earth's coolness; and the special 'sarooj' mortar (sand, clay, egg whites, ash, goat hair) resists heat transfer. Some yakhchāls had windcatchers (badgir) that directed cool night air over evaporating water. Ice was a summer luxury that ordinary Persians enjoyed 2,400 years ago—a feat not matched in Europe until the 19th century refrigeration revolution.",
      modernRelevance: "Yakhchāl principles appear in modern 'passive house' design and off-grid refrigeration. They demonstrate that 'zero energy' cooling is achievable with thoughtful design.",
      stillInUse: false,
      preservedExamples: ["Multiple ruins throughout Iran (Meybod, Yazd, Kerman)"],
      sources: [
        "Beazley, E. Living with the Desert: Working Buildings of the Iranian Plateau",
        "Bahadori, M.N. Passive Cooling Systems in Iranian Architecture"
      ],
      relatedInventions: ["qanat", "windcatcher"],
      tags: ["passive-cooling", "ice-storage", "zero-energy", "thermal-mass"]
    },
    {
      id: "biso-kotuwa",
      name: "Biso Kotuwa (Sluice Valve)",
      alternateNames: ["Bisokotuwa", "Valve pit"],
      civilization: "sri-lanka",
      region: "Ancient Ceylon (Sri Lanka)",
      dateInvented: 300,
      datePrecision: "century",
      category: "dam-technology",
      subcategory: "flow-control",
      description: "A sophisticated valve system that controls water release from reservoir dams while dissipating destructive hydraulic energy.",
      technicalDetails: {
        principle: "Water enters valve pit, energy dissipates, controlled release",
        components: ["Vertical stone tower", "Inlet at base (below water)", "Outlet tunnel to canal", "Timber sluice gates"],
        associatedDams: "Over 30,000 ancient tanks (reservoirs) in Sri Lanka"
      },
      engineerNotes: "The biso kotuwa solved a problem that destroys modern dams: outlet erosion. When water releases from a high reservoir, it has tremendous energy—enough to undermine the dam's foundation. The biso kotuwa is essentially an energy dissipator: water enters a stone chamber, swirls and loses velocity, then exits calmly to irrigation channels. It's the same principle as a modern stilling basin, invented 1,700 years earlier. Sri Lanka's ancient hydraulic engineers built 30,000+ reservoirs using this technology—a density of water infrastructure unmatched until industrial-era Europe.",
      modernRelevance: "Modern dam spillways use stilling basins based on the same energy dissipation principle. Sri Lankan archaeologists train international dam engineers on ancient techniques.",
      stillInUse: true,
      useLocations: ["Sri Lanka (many ancient systems restored and operating)"],
      sources: [
        "Brohier, R.L. Ancient Irrigation Works of Ceylon",
        "Panabokke, C.R. Historical Overview of Irrigation Development in Sri Lanka"
      ],
      relatedInventions: ["sluice-gate", "tank-cascade-system"],
      tags: ["dam-engineering", "energy-dissipation", "valve-technology"]
    },
    {
      id: "tank-cascade-system",
      name: "Tank Cascade System",
      alternateNames: ["Wew Bändiya", "Reservoir cascade"],
      civilization: "sri-lanka",
      region: "Dry Zone, Sri Lanka",
      dateInvented: 400,
      datePrecision: "century",
      category: "water-storage",
      subcategory: "cascade-system",
      description: "Interconnected chains of reservoirs where overflow from one feeds the next, maximizing water use efficiency across watersheds.",
      technicalDetails: {
        principle: "Cascading overflow reuse",
        typicalCascade: "5-15 tanks connected in series",
        totalTanks: "30,000+ historical tanks in Sri Lanka",
        waterEfficiency: "Each drop used multiple times as it flows downstream"
      },
      engineerNotes: "The tank cascade represents systems thinking applied to hydrology 1,600 years ago. Instead of isolated reservoirs, Sri Lankan engineers connected entire watersheds into chains. Water that spills from one tank is captured by the next. Sediment settles in upper tanks, delivering cleaner water below. Groundwater recharge in one tank raises water tables for downstream wells. It's integrated water resource management that modern engineers call 'watershed planning'—invented by observation and refinement over centuries. Some cascades have operated for 1,500 years.",
      modernRelevance: "Sri Lanka's tank cascades are UNESCO-recognized and being restored as climate-resilient water systems. They're studied globally as models of sustainable watershed management.",
      stillInUse: true,
      useLocations: ["Sri Lanka (thousands of tanks being restored)"],
      sources: [
        "Madduma Bandara, C.M. Tank Cascade Systems in Sri Lanka",
        "Dharmasena, P.B. Indigenous Water Harvesting Systems of Sri Lanka"
      ],
      relatedInventions: ["biso-kotuwa", "carthaginian-cisterns"],
      tags: ["cascade-system", "watershed-management", "sustainable", "systems-thinking"]
    },
    {
      id: "mesa-verde-reservoir",
      name: "Mesa Verde Water Collection",
      alternateNames: ["Ancestral Puebloan reservoirs", "Mummy Lake"],
      civilization: "ancestral-puebloans",
      region: "Colorado Plateau (American Southwest)",
      dateInvented: 750,
      datePrecision: "century",
      category: "water-harvesting",
      subcategory: "runoff-collection",
      description: "Sophisticated water collection systems in desert cliff environments, including reservoirs, check dams, and channelized runoff.",
      technicalDetails: {
        mummyLake: {
          capacity: "500,000+ gallons",
          construction: "Earth-banked reservoir with plastered catchment",
          purpose: "Dry season water supply"
        },
        features: ["Plastered catchment surfaces", "Stone-lined channels", "Check dams", "Seep collection"],
        population: "Supported 5,000+ people at peak"
      },
      engineerNotes: "The Ancestral Puebloans built cliff dwellings in one of North America's driest regions—and supported thousands of people through water engineering. Their 'Mummy Lake' reservoir at Mesa Verde could hold 500,000 gallons collected from plastered catchments. They lined channels with stone, built check dams to slow runoff and capture sediment, and even collected water seeping from sandstone cliffs. When drought struck in the late 1200s, even this ingenious system couldn't compensate—they abandoned Mesa Verde. It's a reminder that engineering can extend the limits of habitability, but not infinitely.",
      modernRelevance: "Mesa Verde's water systems are studied by arid-region planners. The lesson of drought-induced abandonment is particularly relevant to modern Southwestern cities.",
      stillInUse: false,
      preservedExamples: ["Mesa Verde National Park", "Chaco Canyon", "Hovenweep"],
      sources: [
        "Wright, K.R. Water for the Anasazi",
        "Lister, R.H. and Lister, F.C. Chaco Canyon"
      ],
      relatedInventions: ["nabataean-cistern", "chinampa"],
      tags: ["desert-adaptation", "cliff-dwelling", "drought-resilience"]
    },
    {
      id: "basilica-cistern",
      name: "Basilica Cistern",
      alternateNames: ["Yerebatan Sarnıcı", "Underground Palace"],
      civilization: "byzantine",
      region: "Constantinople (Istanbul)",
      dateInvented: 532,
      datePrecision: "year",
      category: "water-storage",
      subcategory: "underground-cistern",
      description: "A massive underground cistern supported by 336 marble columns, built to supply the Byzantine capital.",
      technicalDetails: {
        builder: "Emperor Justinian I",
        dimensions: "138m x 65m (9,000 square meters)",
        capacity: "80,000 cubic meters",
        columns: "336 marble columns, 9m high",
        waterSource: "Aqueducts from Belgrade Forest (19km north)"
      },
      engineerNotes: "The Basilica Cistern is water infrastructure as architecture. Built by Justinian I (who also built Hagia Sophia), it stored water for the Great Palace—enough to withstand sieges. The 336 columns are recycled from Roman temples (look closely and you'll see different capitals, bases, even Medusa heads used as column bases). What's remarkable is the scale: 80,000 cubic meters of storage, with the ceiling at ground level so the palace gardens grew atop the cistern. The Ottomans forgot about it for centuries until a scholar noticed locals drawing water through their basement floors. It's still watertight after 1,500 years.",
      modernRelevance: "The Basilica Cistern is now a major tourist attraction and concert venue. Istanbul still relies on Byzantine-era aqueduct routes for some water supply.",
      stillInUse: false,
      preservedExamples: ["Basilica Cistern (Istanbul, open to tourists)"],
      sources: [
        "Crow, J. et al. The Water Supply of Byzantine Constantinople",
        "Freely, J. A History of Ottoman Architecture"
      ],
      relatedInventions: ["carthaginian-cisterns", "roman-aqueduct"],
      tags: ["urban-water", "siege-preparedness", "architectural-engineering"]
    },
    {
      id: "valens-aqueduct",
      name: "Aqueduct of Valens",
      alternateNames: ["Bozdoğan Kemeri"],
      civilization: "byzantine",
      region: "Constantinople (Istanbul)",
      dateInvented: 368,
      datePrecision: "year",
      category: "water-transport",
      subcategory: "aqueduct",
      description: "A Roman-Byzantine aqueduct bridge still standing in modern Istanbul, part of a 250km water supply system.",
      technicalDetails: {
        builder: "Emperor Valens (completed 373 CE)",
        length: "921 meters (surviving span)",
        height: "29 meters at highest point",
        originalSystem: "Part of 250km aqueduct network from Thrace",
        operatingPeriod: "373 CE to 1912 (with rebuilds)"
      },
      engineerNotes: "The Aqueduct of Valens is the most visible remnant of one of history's longest water supply systems—250km of channels from the mountains of Thrace to Constantinople. The empire needed this engineering because the city occupied a peninsula with almost no fresh water. The aqueduct was repaired by every subsequent empire: Byzantine, Ottoman, even the modern Turkish republic (it carried water until 1912). Walking beneath its arches today, you're beneath infrastructure that served a million residents for 1,500 years. That's longer than most civilizations last, let alone their plumbing.",
      modernRelevance: "The Valens Aqueduct demonstrates how water infrastructure can transcend political change. Istanbul's modern water supply follows some of the same routes pioneered in the 4th century.",
      stillInUse: false,
      preservedExamples: ["Valens Aqueduct (Istanbul, still standing)"],
      sources: [
        "Crow, J. Aqueducts of Constantinople",
        "Çeçen, K. The Longest Roman Water Supply Line"
      ],
      relatedInventions: ["roman-aqueduct", "basilica-cistern"],
      tags: ["urban-water", "longevity", "cross-cultural-maintenance"]
    },
    {
      id: "sluice-gate",
      name: "Sluice Gate",
      alternateNames: ["Water gate", "Flood gate", "Pen stock"],
      civilization: "multiple",
      region: "Ancient civilizations worldwide",
      dateInvented: -2000,
      datePrecision: "millennium",
      category: "water-management",
      subcategory: "flow-control",
      description: "A movable barrier that controls water flow in channels, canals, and dam outlets—one of the most universal hydraulic devices.",
      technicalDetails: {
        types: ["Vertical lift gate", "Radial (Tainter) gate", "Drum gate", "Flap gate"],
        materials: ["Wood (ancient)", "Stone", "Iron/steel (modern)", "Concrete"],
        applications: ["Irrigation control", "Flood management", "Navigation", "Hydropower"]
      },
      engineerNotes: "The sluice gate is so fundamental we forget it's a brilliant invention. Before gates, you either had water flow or you didn't—there was no control. The sluice gate allows precise regulation: more flow for irrigation, less for conservation, emergency closure during floods. Every dam, canal, and irrigation system depends on some form of sluice. Ancient Chinese gates on the Dujiangyan system still operate after 2,300 years (rebuilt many times, same design). The Hoover Dam has gates that can release 200,000 cubic feet per second—same principle as a Roman canal gate, just bigger.",
      modernRelevance: "Every dam, canal, and water treatment plant uses sluice gates. Modern variants include automated gates that respond to water level sensors.",
      stillInUse: true,
      useLocations: ["Universal in water infrastructure worldwide"],
      sources: [
        "Schnitter, N. A History of Dams",
        "USACE Engineering Manuals"
      ],
      relatedInventions: ["canal-lock", "dujiangyan", "dam-spillway"],
      tags: ["flow-control", "universal", "flood-control"]
    },
    {
      id: "roman-water-mill",
      name: "Roman Watermill",
      alternateNames: ["Grain mill", "Mola aquaria"],
      civilization: "rome",
      region: "Roman Empire",
      dateInvented: -100,
      datePrecision: "century",
      category: "water-power",
      subcategory: "mill",
      description: "Water-powered mills that ground grain into flour, representing the first industrial application of hydro power.",
      technicalDetails: {
        types: ["Horizontal (Norse) mill - simple, low power", "Vertical (Vitruvian) mill - geared, high power"],
        powerOutput: "2-3 horsepower (vertical wheel)",
        dailyOutput: "150-300 kg flour per day",
        famousComplex: "Barbegal mill complex (16 wheels, 28 tons flour/day)"
      },
      engineerNotes: "The Barbegal watermill complex (2nd century CE, near Arles) was an industrial facility—16 waterwheels in two parallel rows grinding grain for 10,000-40,000 people. This wasn't a quaint country mill; it was a flour factory. The vertical wheel connected to the millstone through a right-angle gear—the same gear arrangement used in car transmissions today. Romans understood that water power could free human labor for other tasks. Yet, paradoxically, cheap slave labor may have limited watermill adoption—why invest in machinery when slaves are abundant? The true watermill age came after Rome fell and labor became scarcer.",
      modernRelevance: "Watermills evolved into hydroelectric turbines. The conversion of falling water to rotating mechanical energy remains the most efficient power generation method.",
      stillInUse: true,
      useLocations: ["Heritage mills worldwide", "Small-scale hydropower"],
      sources: [
        "Wilson, A. Machines, Power and the Ancient Economy",
        "Wikander, Ö. Handbook of Ancient Water Technology"
      ],
      relatedInventions: ["noria", "roman-aqueduct", "hydropower"],
      tags: ["industry", "grain-processing", "hydropower", "gears"]
    },
    {
      id: "inca-water-channels",
      name: "Incan Water Channels (Canals & Fountains)",
      alternateNames: ["Inca aqueducts"],
      civilization: "inca",
      region: "Andes Mountains (Peru, Bolivia, Ecuador)",
      dateInvented: 1400,
      datePrecision: "century",
      category: "water-transport",
      subcategory: "mountain-channels",
      description: "Precision stone channels that carried water through the Andes Mountains, including monumental fountains at Machu Picchu and Tipón.",
      technicalDetails: {
        machuPicchu: {
          springSource: "Perennial spring 749m north of site",
          channelLength: "749 meters",
          fountains: "16 connected fountains descending through city",
          gradient: "Precisely calculated for each segment"
        },
        tipon: {
          feature: "Multiple terraces with ornamental water features",
          precision: "Channels cut to millimeter accuracy"
        },
        constructionMethod: "Cut stone without mortar"
      },
      engineerNotes: "The Inca water channels at Machu Picchu show almost obsessive precision. The main canal—749m long—was constructed with a carefully calculated gradient that slows water as it descends, preventing erosion and allowing ritual use at each fountain. At Tipón (near Cusco), water descends through agricultural terraces with fountains that appear decorative but actually control irrigation distribution. What strikes me most: the Inca achieved this precision without iron tools, the wheel, or written language. Every calculation was done empirically or with quipus (string record-keeping). The channels still function perfectly after 600 years.",
      modernRelevance: "The Machu Picchu fountains still provide water to visitors. Incan agricultural terraces are being restored for climate-resilient farming in Peru.",
      stillInUse: true,
      useLocations: ["Machu Picchu (functioning fountains)", "Tipón", "Various Andean sites"],
      sources: [
        "Wright, K.R. Machu Picchu: A Civil Engineering Marvel",
        "Bauer, B.S. Cusco: Urbanism and Archaeology in the Inka World"
      ],
      relatedInventions: ["roman-aqueduct", "qanat"],
      tags: ["precision-engineering", "mountain-environment", "ritual-water"]
    },
    {
      id: "force-pump",
      name: "Force Pump (Ctesibius Pump)",
      alternateNames: ["Piston pump", "Ctesibius pump", "Fire pump"],
      civilization: "greece",
      region: "Alexandria, Egypt (Hellenistic)",
      dateInvented: -250,
      datePrecision: "decade",
      category: "water-lifting",
      subcategory: "pressure-pump",
      description: "A double-action piston pump capable of creating water pressure for firefighting and other applications.",
      technicalDetails: {
        inventor: "Ctesibius of Alexandria",
        principle: "Two cylinders with pistons in alternating strokes",
        components: ["Cylinders", "Pistons", "Inlet valves", "Outlet valves", "Air chamber (for pressure smoothing)"],
        output: "Continuous pressurized flow"
      },
      engineerNotes: "Ctesibius invented the first device that could create water pressure—not just lift water. His force pump used two cylinders with alternating strokes (like modern bicycle pumps) to produce continuous flow. Adding an air chamber smoothed the pressure pulses into steady flow. This is the ancestor of every piston pump, fire engine, hydraulic press, and pneumatic system. Hero of Alexandria later described using these pumps for firefighting, hydraulic organs (the water organ), and even automated temple machinery. The sophistication is remarkable—precision bronze cylinders and valves that must seal under pressure. Only with the Industrial Revolution did pump technology meaningfully advance beyond Ctesibius.",
      modernRelevance: "Every piston pump and reciprocating compressor descends from Ctesibius's design. The air chamber concept appears in modern pressure tanks.",
      stillInUse: true,
      useLocations: ["Principle used universally in pumping systems"],
      sources: [
        "Oleson, J.P. Greek and Roman Mechanical Water-Lifting Devices",
        "Vitruvius. De Architectura, Book X"
      ],
      relatedInventions: ["archimedes-screw", "hydraulic-organ"],
      tags: ["pressure", "piston", "firefighting", "precision-manufacturing"]
    },
    {
      id: "aztec-aqueduct",
      name: "Aztec Double Aqueduct",
      alternateNames: ["Chapultepec aqueduct"],
      civilization: "aztec",
      region: "Tenochtitlan (Mexico City)",
      dateInvented: 1466,
      datePrecision: "year",
      category: "water-transport",
      subcategory: "urban-aqueduct",
      description: "A dual-channel aqueduct that brought fresh water to Tenochtitlan, with one channel operating while the other was cleaned.",
      technicalDetails: {
        length: "5 km from Chapultepec springs",
        configuration: "Two parallel terracotta channels",
        management: "Alternating operation for cleaning",
        dailyFlow: "Estimated 1 million+ liters",
        builder: "Emperor Nezahualcoyotl (1466 expansion)"
      },
      engineerNotes: "Tenochtitlan sat on an island in a saline lake—fresh water was precious. The Aztec solution was elegant: dual parallel aqueducts from Chapultepec springs. One channel carried water while the other was drained for sediment cleaning. This redundancy ensured constant supply without service interruptions. The channels crossed the lake on a causeway—the same causeway Cortés would march across in 1519. When the Spanish cut the aqueduct during the siege, the city's 200,000+ residents lost their water supply. The fall of Tenochtitlan was partly a victory of siege engineering over water engineering.",
      modernRelevance: "Redundant water mains are standard practice today—Nezahualcoyotl understood infrastructure resilience 500 years before modern engineers.",
      stillInUse: false,
      preservedExamples: ["Fragments remain in Mexico City"],
      sources: [
        "Coe, M.D. Mexico: From the Olmecs to the Aztecs",
        "Hassig, R. Aztec Warfare"
      ],
      relatedInventions: ["chinampa", "roman-aqueduct"],
      tags: ["urban-water", "redundancy", "island-city"]
    },
    {
      id: "islamic-water-wheel",
      name: "Islamic Water-Raising Wheel (Nāʿūra)",
      alternateNames: ["Na'ura", "Hama wheels"],
      civilization: "islamic",
      region: "Islamic World (Syria, Spain, North Africa)",
      dateInvented: 800,
      datePrecision: "century",
      category: "water-lifting",
      subcategory: "water-powered",
      description: "Refined and enlarged versions of the noria that became icons of Islamic hydraulic engineering, especially the giant wheels of Hama.",
      technicalDetails: {
        hamaWheels: {
          diameter: "Up to 20 meters",
          numberOfWheels: "17 historic wheels, 4 remain",
          function: "Lift water from Orontes River to aqueducts",
          sound: "Distinctive groaning audible across city"
        },
        improvements: "Islamic engineers enlarged and refined earlier designs"
      },
      engineerNotes: "Islamic engineers inherited Greek, Roman, and Persian water technology and improved it systematically. The norias of Hama (Syria) became the largest water-powered machines in the pre-industrial world—up to 20m in diameter. The sound of their wooden components groaning under the water's force is unlike anything else. Islamic engineers also wrote the first true engineering manuals (Banū Mūsā brothers, Al-Jazari) documenting water-raising devices. Al-Jazari's 1206 'Book of Knowledge of Ingenious Mechanical Devices' describes pumps, automata, and the first known crankshaft—centuries before European equivalents.",
      modernRelevance: "The Hama norias (those surviving the Syrian civil war) remain tourist landmarks and symbols of Islamic engineering heritage.",
      stillInUse: true,
      useLocations: ["Hama, Syria (heritage)", "Morocco (operating mills)"],
      sources: [
        "Hill, D.R. Arabic Water-Clocks",
        "Al-Hassan, A.Y. and Hill, D.R. Islamic Technology"
      ],
      relatedInventions: ["noria", "windmill-water-pump", "force-pump"],
      tags: ["giant-structures", "water-power", "engineering-manuals"]
    },
    {
      id: "dike-polder-system",
      name: "Dutch Dike and Polder System",
      alternateNames: ["Polder", "Water board system"],
      civilization: "dutch",
      region: "Low Countries (Netherlands, Belgium)",
      dateInvented: 1200,
      datePrecision: "century",
      category: "flood-control",
      subcategory: "land-reclamation",
      description: "A comprehensive system of dikes, pumps, and water management institutions that created land from sea and lake beds.",
      technicalDetails: {
        polderArea: "~50% of Netherlands below sea level or flood-prone",
        componentSystem: ["Ring dikes around polders", "Drainage ditches to sumps", "Windmills/pumps to lift water out", "Boezem (holding canals)", "Sluices to sea"],
        institutionalInnovation: "Water boards (waterschappen) - democratic governing bodies predating national democracy"
      },
      engineerNotes: "The Dutch didn't just build dikes—they created an entirely new relationship between land and water. A polder is land BELOW the surrounding water level, kept dry only through continuous pumping. If pumping stops, the polder floods—permanently. This existential reality forced Dutch society to develop sophisticated water governance (water boards) that operated democratically centuries before political democracy. The saying 'God created the world, but the Dutch created the Netherlands' isn't much of an exaggeration. About half the country would flood without constant engineering intervention. As an engineer, I find it profound: they chose to live in an ongoing battle with water, and so far, they're winning.",
      modernRelevance: "Dutch water engineering expertise is exported worldwide. The Delta Works (20th century) and 'Room for the River' program (21st century) continue the tradition.",
      stillInUse: true,
      useLocations: ["Netherlands (essential national infrastructure)"],
      sources: [
        "van de Ven, G.P. Man-made Lowlands",
        "TeBrake, W.H. Taming the Waterwolf"
      ],
      relatedInventions: ["windmill-water-pump", "sluice-gate", "canal-lock"],
      tags: ["land-reclamation", "existential-engineering", "governance", "continuous-operation"]
    },
    {
      id: "spanish-acequias",
      name: "Acequia (Spanish-Islamic Irrigation)",
      alternateNames: ["Acequia madre", "Community ditch"],
      civilization: "islamic-iberian",
      region: "Al-Andalus (Spain) → American Southwest",
      dateInvented: 800,
      datePrecision: "century",
      category: "irrigation",
      subcategory: "community-canal",
      description: "Community-managed irrigation canals combining Islamic water engineering with Spanish legal traditions, later transplanted to the Americas.",
      technicalDetails: {
        origin: "Al-Andalus (Islamic Spain), 8th century",
        legalFramework: "Tribunal de las Aguas (Valencia water court, est. 960 CE)",
        americanAdaptation: "Brought to New Mexico and California by Spanish colonists",
        stillOperating: "Hundreds of acequias in New Mexico"
      },
      engineerNotes: "The acequia system combines Islamic water engineering with Roman legal concepts and local Spanish adaptation. The Valencia Water Tribunal has met weekly since 960 CE to adjudicate irrigation disputes—over 1,000 years of continuous operation. When Spanish colonists came to the American Southwest, they brought acequia technology that matched the arid conditions. Today, hundreds of acequias still operate in New Mexico, managed by 'mayordomos' (ditch masters) who allocate water and coordinate maintenance. It's living medieval water technology functioning in the 21st century—and working better than many modern centralized systems because users have direct investment in maintaining the shared resource.",
      modernRelevance: "Acequias are legally protected in New Mexico as cultural resources. They're studied as models of community-based natural resource management.",
      stillInUse: true,
      useLocations: ["New Mexico (hundreds operating)", "Southern Colorado", "Spain (Valencia)"],
      sources: [
        "Glick, T.F. Irrigation and Society in Medieval Valencia",
        "Rivera, J.A. Acequia Culture: Water, Land, and Community in the Southwest"
      ],
      relatedInventions: ["qanat", "falaj-omani"],
      tags: ["community-management", "water-rights", "cultural-heritage", "still-operating"]
    },
    {
      id: "steam-pump",
      name: "Newcomen Steam Engine (Mine Pump)",
      alternateNames: ["Atmospheric engine", "Fire engine"],
      civilization: "british",
      region: "England",
      dateInvented: 1712,
      datePrecision: "year",
      category: "water-lifting",
      subcategory: "steam-powered",
      description: "The first practical steam engine, developed to pump water from coal mines, initiating the Industrial Revolution.",
      technicalDetails: {
        inventor: "Thomas Newcomen",
        firstInstallation: "1712 at Dudley Castle coal mine",
        principle: "Atmospheric pressure pushes piston when steam condenses in cylinder",
        pumpingCapacity: "10 gallons per stroke from 150+ feet deep",
        efficiency: "~1% (very inefficient but still revolutionary)"
      },
      engineerNotes: "The Newcomen engine marks the boundary between ancient and modern water engineering. For millennia, every water-lifting device used human, animal, water, or wind power. Suddenly, coal could pump water. The engine was developed to solve a specific problem: deep coal mines flood, and no previous technology could keep them dry. Despite only ~1% thermal efficiency (later improved by Watt), the Newcomen engine worked continuously without rest, weather dependence, or labor disputes. Within decades, hundreds were pumping mines throughout Britain. This wasn't just a new pump—it was a new relationship between energy and water that would transform civilization.",
      modernRelevance: "The Newcomen engine's descendants include all steam turbines, power plants, and pumping stations. The principle of using heat energy for water management remains fundamental.",
      stillInUse: false,
      preservedExamples: ["Working replica at Black Country Living Museum", "Static displays in various museums"],
      sources: [
        "Rolt, L.T.C. and Allen, J.S. The Steam Engine of Thomas Newcomen",
        "Hills, R.L. Power from Steam"
      ],
      relatedInventions: ["watt-steam-engine", "force-pump"],
      tags: ["industrial-revolution", "steam-power", "mining", "paradigm-shift"]
    },
    {
      id: "london-sewers",
      name: "London Victorian Sewers",
      alternateNames: ["Bazalgette sewers"],
      civilization: "british",
      region: "London, England",
      dateInvented: 1865,
      datePrecision: "year",
      category: "drainage",
      subcategory: "combined-sewer",
      description: "A comprehensive sewer system built in response to cholera epidemics and the 'Great Stink,' still serving London today.",
      technicalDetails: {
        engineer: "Joseph Bazalgette",
        constructionPeriod: "1859-1875",
        totalLength: "1,100 miles (1,770 km) of sewers",
        interceptorSewers: "82 miles of main brick tunnels",
        pumping: "4 major pumping stations",
        designCapacity: "Based on population of 4 million (London now 9 million)"
      },
      engineerNotes: "Bazalgette's sewers saved more lives than any military victory in British history. Before 1858, London's waste went into cesspits or the Thames—the same river supplying drinking water. Cholera killed 40,000 Londoners in three epidemics. The 'Great Stink' of 1858 (hot summer, low river, accumulated sewage) finally forced Parliament to act—they were directly downwind. Bazalgette designed for a population of 4 million but overbuilt for 6 million 'just in case.' London is now 9 million, and his sewers still function. The lesson: infrastructure overbuilding isn't waste—it's investment in an unknown future. This is the system that inspired my career in SWMM modeling.",
      modernRelevance: "Bazalgette's sewers still handle 60% of London's wastewater. The Thames Tideway Tunnel (under construction) is the first major upgrade since Victorian times.",
      stillInUse: true,
      useLocations: ["London (primary system)"],
      sources: [
        "Halliday, S. The Great Stink of London",
        "Cook, G.C. The First Hospital Sewage System in London: St. Thomas'"
      ],
      relatedInventions: ["cloaca-maxima", "combined-sewer-system"],
      tags: ["public-health", "urban-infrastructure", "overbuilt", "SWMM-relevant"]
    },
    {
      id: "aswan-dam",
      name: "Aswan High Dam",
      alternateNames: ["Sadd el-Aali"],
      civilization: "modern-egypt",
      region: "Egypt",
      dateInvented: 1970,
      datePrecision: "year",
      category: "dam",
      subcategory: "mega-dam",
      description: "A massive rockfill dam controlling the Nile's floods and providing hydroelectric power—but with significant environmental tradeoffs.",
      technicalDetails: {
        constructionPeriod: "1960-1970",
        height: "111 meters",
        length: "3,830 meters at crest",
        reservoirVolume: "132 km³ (Lake Nasser)",
        hydroelectricCapacity: "2,100 MW (12 turbines)",
        relocatedPeople: "100,000+ Nubians",
        rescuedMonuments: "Abu Simbel temples moved to higher ground"
      },
      engineerNotes: "The Aswan High Dam represents both the triumph and tragedy of mega-dam engineering. On one hand, it ended the annual flood cycle that had defined Egyptian civilization for 5,000 years—no more famine from low floods or destruction from high floods. It generates electricity for a nation. But it also stopped the silt that fertilized the delta (now farmers need artificial fertilizer), is causing delta erosion and saltwater intrusion, and drowned ancient Nubia under Lake Nasser. Every engineering decision has consequences. The dam's 50+ year history offers lessons about large-scale water infrastructure that are still being processed.",
      modernRelevance: "Ethiopia's Grand Renaissance Dam upstream is now challenging Egyptian water security. The politics of Nile water are a direct consequence of the High Dam establishing Egypt's reliance on controlled flow.",
      stillInUse: true,
      useLocations: ["Aswan, Egypt"],
      sources: [
        "Waterbury, J. Hydropolitics of the Nile Valley",
        "Abu-Zeid, M.A. and El-Shibini, F.Z. Egypt's High Aswan Dam"
      ],
      relatedInventions: ["nilometer", "shaduf"],
      tags: ["mega-dam", "tradeoffs", "unintended-consequences", "geopolitics"]
    },
    {
      id: "drip-irrigation",
      name: "Modern Drip Irrigation",
      alternateNames: ["Trickle irrigation", "Micro-irrigation"],
      civilization: "israeli",
      region: "Israel (modern development)",
      dateInvented: 1959,
      datePrecision: "year",
      category: "irrigation",
      subcategory: "micro-irrigation",
      description: "A water-efficient irrigation system delivering water directly to plant roots through networks of tubes and emitters.",
      technicalDetails: {
        inventor: "Simcha Blass (Israeli engineer)",
        principle: "Slow, targeted water delivery minimizes evaporation and runoff",
        efficiency: "90-95% (vs. 50-60% for flood irrigation)",
        components: ["Main line", "Sub-main", "Laterals", "Emitters (drippers)", "Filters", "Pressure regulators"],
        waterSavings: "30-50% compared to conventional irrigation"
      },
      engineerNotes: "Simcha Blass noticed a tree growing larger than its neighbors—investigating, he found a slow water leak near its roots. This observation led to modern drip irrigation. The insight was counter-intuitive: giving plants LESS water MORE precisely produces better results than flooding fields. Israel, a water-scarce country, became an agricultural exporter through this technology. The engineering challenges were significant: emitters must deliver uniform flow despite pressure variations and must resist clogging from particles or minerals. Modern systems use pressure-compensating emitters and sophisticated filtration. Drip irrigation is humanity's most water-efficient large-scale irrigation technology.",
      modernRelevance: "Drip irrigation is now used worldwide, especially in water-scarce regions. Israel exports drip technology to over 100 countries.",
      stillInUse: true,
      useLocations: ["Worldwide agricultural use", "Landscaping", "Greenhouses"],
      sources: [
        "Postel, S. Pillar of Sand: Can the Irrigation Miracle Last?",
        "Blass, S. Drip Irrigation: Origins and Development"
      ],
      relatedInventions: ["qanat", "shaduf", "sprinkler-irrigation"],
      tags: ["water-efficiency", "modern-innovation", "agriculture", "precision"]
    },
    {
      id: "desalination",
      name: "Reverse Osmosis Desalination",
      alternateNames: ["RO desalination", "Seawater desalination"],
      civilization: "modern",
      region: "Global (developed in USA, widely used in Middle East)",
      dateInvented: 1959,
      datePrecision: "year",
      category: "water-treatment",
      subcategory: "desalination",
      description: "Technology that removes salt from seawater using semi-permeable membranes, making ocean water drinkable.",
      technicalDetails: {
        principle: "High-pressure water forced through membranes that block salt molecules",
        typicalPressure: "55-70 bar (800-1000 psi)",
        energyUse: "3-4 kWh per cubic meter (modern plants)",
        recoveryRate: "40-50% of seawater converted to freshwater",
        largestPlant: "Ras Al Khair, Saudi Arabia (1 million m³/day)"
      },
      engineerNotes: "Desalination seemed like science fiction to ancient engineers—turning the ocean into drinking water. Now it's routine. The breakthrough came with reverse osmosis membranes that allow water molecules through while blocking salt. The engineering challenges were immense: membranes must withstand high pressure, resist fouling from marine organisms, and last for years in salt water. Modern plants recover energy from the rejected brine stream, cutting energy use by 50% compared to early designs. Israel now gets 70% of its domestic water from desalination. We've made the ocean a freshwater source—something our ancestors couldn't imagine.",
      modernRelevance: "Desalination provides drinking water for 300+ million people worldwide. As freshwater sources deplete, desalination is becoming essential infrastructure for coastal cities.",
      stillInUse: true,
      useLocations: ["Middle East (dominant)", "Israel", "Singapore", "Australia", "California", "Mediterranean"],
      sources: [
        "Fritzmann, C. et al. State-of-the-art of reverse osmosis desalination",
        "Elimelech, M. and Phillip, W.A. The Future of Seawater Desalination"
      ],
      relatedInventions: ["qanat", "roman-aqueduct"],
      tags: ["modern-technology", "energy-intensive", "game-changer", "climate-adaptation"]
    },
    {
      id: "minoan-flush-toilet",
      name: "Minoan Flush Toilet",
      alternateNames: ["Knossos toilets"],
      civilization: "minoan",
      region: "Crete (Palace of Knossos)",
      dateInvented: -1700,
      datePrecision: "century",
      category: "sanitation",
      subcategory: "toilet",
      description: "The first known flush toilets, using rainwater collected on palace roofs to wash waste into drainage systems.",
      technicalDetails: {
        location: "Palace of Knossos, Crete",
        mechanism: "Rainwater or poured water washes waste into terracotta drains",
        drainSize: "Some drain pipes large enough to walk through",
        connectedTo: "Sophisticated palace drainage system"
      },
      engineerNotes: "The Minoans had flush toilets 3,700 years ago—and then humanity forgot how to make them for millennia. At Knossos, toilets connected to terracotta drain pipes (some large enough for maintenance access) that carried waste away from the palace. Water from roof collection cisterns provided the 'flush.' The drainage system included settling chambers and grease traps—technologies we didn't see again until the 19th century. When Knossos fell around 1450 BCE, this knowledge vanished. The Romans, Greeks, and medieval Europe used pit latrines and chamber pots. The modern flush toilet wasn't reinvented until the 1590s (Sir John Harington) and not widely adopted until the 1800s.",
      modernRelevance: "The Minoan system demonstrates that advanced sanitation is a choice, not an inevitability. Civilizational knowledge can be lost for millennia.",
      stillInUse: false,
      preservedExamples: ["Palace of Knossos archaeological site (Crete)"],
      sources: [
        "Graham, J.W. The Palaces of Crete",
        "Shaw, J.W. Minoan Architecture: Materials and Techniques"
      ],
      relatedInventions: ["cloaca-maxima", "great-bath-mohenjo-daro"],
      tags: ["sanitation", "lost-technology", "palace-engineering"]
    },
    {
      id: "minoan-terracotta-pipes",
      name: "Minoan Terracotta Pipe System",
      alternateNames: ["Knossos water system"],
      civilization: "minoan",
      region: "Crete",
      dateInvented: -1900,
      datePrecision: "century",
      category: "water-transport",
      subcategory: "piping",
      description: "Interlocking terracotta pipes that distributed water throughout Minoan palaces and removed wastewater.",
      technicalDetails: {
        material: "Fired terracotta",
        design: "Tapered sections that interlock (male-female joints)",
        sizes: "Various, from small supply to large drainage",
        sealant: "Clay or lime mortar at joints",
        features: "Includes settling chambers, grease traps, inspection points"
      },
      engineerNotes: "Minoan terracotta pipes are engineering marvels. The tapered design (each section slightly narrower at one end) created self-sealing joints—water pressure pushed the pipes tighter together. Some drainage pipes were large enough for a person to enter for cleaning. They understood that pipe systems need maintenance access, settling chambers to capture sediment, and proper gradients for gravity flow. The sophistication suggests centuries of refinement before the palace period. When I walk through Knossos and see these 4,000-year-old pipes, I'm looking at work that any modern plumber would recognize.",
      modernRelevance: "The Minoan pipe design principle (tapered interlocking sections) appears in modern drain pipe systems. Their understanding of system maintenance anticipated modern infrastructure practices.",
      stillInUse: false,
      preservedExamples: ["Palace of Knossos", "Phaistos", "Malia"],
      sources: [
        "Evans, A. The Palace of Minos",
        "Angelakis, A.N. and Spyridakis, S.V. Minoan Water Engineering"
      ],
      relatedInventions: ["roman-aqueduct", "cloaca-maxima"],
      tags: ["piping", "palace-engineering", "maintenance-design"]
    }
  ]
};

export function getExpertInventionById(id: string): ExpertInvention | undefined {
  return expertInventionsDatabase.inventions.find(inv => inv.id === id);
}

export function getExpertInventionsByCivilization(civilization: string): ExpertInvention[] {
  return expertInventionsDatabase.inventions.filter(inv => 
    inv.civilization.toLowerCase() === civilization.toLowerCase()
  );
}

export function getExpertInventionsByCategory(category: string): ExpertInvention[] {
  return expertInventionsDatabase.inventions.filter(inv => 
    inv.category.toLowerCase() === category.toLowerCase()
  );
}

export function getInventionsStillInUse(): ExpertInvention[] {
  return expertInventionsDatabase.inventions.filter(inv => inv.stillInUse);
}

export function searchExpertInventions(query: string): ExpertInvention[] {
  const lowerQuery = query.toLowerCase();
  return expertInventionsDatabase.inventions.filter(inv =>
    inv.name.toLowerCase().includes(lowerQuery) ||
    inv.description.toLowerCase().includes(lowerQuery) ||
    inv.engineerNotes.toLowerCase().includes(lowerQuery) ||
    inv.tags?.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    inv.alternateNames?.some(name => name.toLowerCase().includes(lowerQuery))
  );
}

export function formatYear(year: number): string {
  if (year < 0) {
    return `${Math.abs(year)} BCE`;
  }
  return `${year} CE`;
}
