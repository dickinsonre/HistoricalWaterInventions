export interface HistoricalTechnology {
  name: string;
  category: string;
  civilizations: string[];
  period_BCE_CE: string;
  primary_uses: string[];
  key_principle: string;
  notes: string;
}

export const historicalTechnologies: HistoricalTechnology[] = [
  {
    name: "Irrigation canals and dikes",
    category: "Conveyance and irrigation",
    civilizations: ["Mesopotamia"],
    period_BCE_CE: "c. 6000–3000 BCE",
    primary_uses: ["Irrigation", "Flood control"],
    key_principle: "Earthen canals, levees, and gates divert and distribute river water to agricultural fields.",
    notes: "Developed along the Tigris and Euphrates to support large-scale agriculture and manage seasonal floods."
  },
  {
    name: "Early sewer pipes and brick drains",
    category: "Sanitation and sewers",
    civilizations: ["Mesopotamia"],
    period_BCE_CE: "c. 4000–2000 BCE",
    primary_uses: ["Wastewater conveyance", "Urban drainage"],
    key_principle: "Clay pipes and covered brick channels carry wastewater away from buildings and public spaces.",
    notes: "Used near temples and palaces to improve hygiene and reduce standing wastewater in early cities."
  },
  {
    name: "Wells and soak pits",
    category: "Water supply and drainage",
    civilizations: ["Mesopotamia", "Indus Valley"],
    period_BCE_CE: "c. 3000–2000 BCE",
    primary_uses: ["Potable supply", "Local drainage"],
    key_principle: "Excavated vertical shafts intercept groundwater or infiltrate wastewater into permeable soil.",
    notes: "Often lined with brick or stone to prevent collapse and improve water quality."
  },
  {
    name: "Sand and lime clarification",
    category: "Water treatment",
    civilizations: ["Indus Valley"],
    period_BCE_CE: "c. 3000–2000 BCE",
    primary_uses: ["Drinking water treatment"],
    key_principle: "Use of sand beds and lime or similar minerals to promote settling of suspended solids.",
    notes: "Represents one of the earliest known attempts to chemically and physically clarify water."
  },
  {
    name: "Basin irrigation",
    category: "Irrigation and flood management",
    civilizations: ["Egypt"],
    period_BCE_CE: "c. 3000–1000 BCE",
    primary_uses: ["Irrigation", "Floodplain management"],
    key_principle: "Embanked basins capture annual river floods and slowly release water for crops.",
    notes: "Depended on the predictable Nile flood; required embankments, feeder canals, and regulating structures."
  },
  {
    name: "Shaduf",
    category: "Water lifting",
    civilizations: ["Egypt", "Mesopotamia"],
    period_BCE_CE: "c. 2000–1500 BCE",
    primary_uses: ["Irrigation", "Small-scale lifting"],
    key_principle: "A pivoted beam with a counterweight allows a person to lift water in a bucket from a lower to a higher level.",
    notes: "Increased the area that could be irrigated above the natural floodplain."
  },
  {
    name: "Water wheel (sāqiya / noria)",
    category: "Water lifting and power",
    civilizations: ["Egypt", "Persia", "Rome", "China"],
    period_BCE_CE: "c. 1000 BCE–500 CE",
    primary_uses: ["Irrigation", "Urban supply", "Mechanical power"],
    key_principle: "Rotating wheel with attached containers or paddles lifts water or converts flow energy into mechanical work.",
    notes: "Variants included animal-driven and stream-driven wheels for irrigation and milling."
  },
  {
    name: "Coagulation and settling with alum-like minerals",
    category: "Water treatment",
    civilizations: ["Egypt"],
    period_BCE_CE: "c. 1500–500 BCE",
    primary_uses: ["Drinking water treatment"],
    key_principle: "Addition of minerals (alum, iron salts) causes suspended particles to flocculate and settle.",
    notes: "Improved clarity and reduced turbidity of water from the Nile and other sources."
  },
  {
    name: "Household filtration and boiling",
    category: "Water treatment",
    civilizations: ["Egypt", "India", "Greece"],
    period_BCE_CE: "c. 1500–300 BCE",
    primary_uses: ["Drinking water treatment"],
    key_principle: "Passing water through sand, gravel, cloth, and boiling or sun exposure to improve quality.",
    notes: "Included use of porous jars, cloth filters, solar heating, and charcoal or sand media."
  },
  {
    name: "Stepwells",
    category: "Storage and access",
    civilizations: ["India"],
    period_BCE_CE: "c. 600 BCE–1200 CE",
    primary_uses: ["Water storage", "Community access", "Climate moderation"],
    key_principle: "Deep masonry wells with stepped access allow people to reach fluctuating water levels.",
    notes: "Provided both water and cool communal spaces in arid and monsoon climates."
  },
  {
    name: "Qanat",
    category: "Groundwater conveyance",
    civilizations: ["Persia", "Middle East", "North Africa"],
    period_BCE_CE: "c. 1000–500 BCE",
    primary_uses: ["Urban supply", "Irrigation"],
    key_principle: "Gently sloping underground tunnel taps an aquifer in uplands and conveys water by gravity to lower lands.",
    notes: "Minimized evaporation and allowed permanent settlements in arid regions."
  },
  {
    name: "Minoan terracotta pipe networks",
    category: "Water supply and sewerage",
    civilizations: ["Minoan (Crete)"],
    period_BCE_CE: "c. 2000–1500 BCE",
    primary_uses: ["Potable supply", "Sewerage", "Storm drainage"],
    key_principle: "Jointed terracotta pipes distribute water under gravity and convey waste away from palaces.",
    notes: "Included pressure-capable sections, drains, and early flush toilets at sites like Knossos."
  },
  {
    name: "Greek aqueducts",
    category: "Long-distance conveyance",
    civilizations: ["Greece"],
    period_BCE_CE: "c. 600–200 BCE",
    primary_uses: ["Urban supply", "Public fountains", "Baths"],
    key_principle: "Gravity channels, tunnels, and pipes carry water from springs to cities over long distances.",
    notes: "Used tunnels, cut-and-cover conduits, and settling structures to maintain water quality."
  },
  {
    name: "Hippocratic cloth filter",
    category: "Water treatment",
    civilizations: ["Greece"],
    period_BCE_CE: "c. 5th century BCE",
    primary_uses: ["Drinking water treatment"],
    key_principle: "Water is poured through a cloth bag to strain visible impurities before boiling.",
    notes: "An early documented point-of-use filtration method associated with Hippocrates."
  },
  {
    name: "Water mill",
    category: "Hydropower",
    civilizations: ["Greece", "Rome", "China"],
    period_BCE_CE: "c. 3rd century BCE–500 CE",
    primary_uses: ["Mechanical power", "Grinding grain", "Industrial processes"],
    key_principle: "Flowing water turns a wheel that transmits rotational energy to machinery.",
    notes: "One of the first large-scale conversions of water energy into mechanical work."
  },
  {
    name: "Roman aqueducts",
    category: "Long-distance conveyance",
    civilizations: ["Rome"],
    period_BCE_CE: "c. 4th century BCE–4th century CE",
    primary_uses: ["Urban supply", "Baths", "Fountains"],
    key_principle: "Combination of gravity channels, bridges, tunnels, and siphons transports water from distant springs to cities.",
    notes: "Extensive systems with multiple parallel lines and large terminal reservoirs and distribution tanks."
  },
  {
    name: "Roman distribution networks",
    category: "Urban water distribution",
    civilizations: ["Rome"],
    period_BCE_CE: "c. 1st century BCE–4th century CE",
    primary_uses: ["Public supply", "Private supply"],
    key_principle: "Reservoirs and castellum dividers split aqueduct flow into branch channels and pipes feeding neighborhoods and users.",
    notes: "Included lead and ceramic pipes with legal controls on tap sizes and connections."
  },
  {
    name: "Roman public baths and latrines",
    category: "Sanitation and hygiene",
    civilizations: ["Rome"],
    period_BCE_CE: "c. 2nd century BCE–4th century CE",
    primary_uses: ["Public hygiene", "Waste conveyance"],
    key_principle: "Continuous water flow flushes latrines and bath effluent into sewers and downstream water bodies.",
    notes: "Integrated with aqueducts and sewers like the Cloaca Maxima for centralized wastewater removal."
  },
  {
    name: "Cloaca Maxima and trunk sewers",
    category: "Urban drainage and sewerage",
    civilizations: ["Rome"],
    period_BCE_CE: "c. 6th–1st century BCE",
    primary_uses: ["Storm drainage", "Wastewater conveyance"],
    key_principle: "Large masonry tunnels collect runoff and sewage from smaller drains and discharge to rivers.",
    notes: "Initially built for drainage of low-lying areas; later used as combined sewers."
  },
  {
    name: "Inverted siphon aqueduct sections",
    category: "Pressurized conveyance",
    civilizations: ["Greece", "Rome"],
    period_BCE_CE: "c. 3rd century BCE–3rd century CE",
    primary_uses: ["Crossing valleys", "Maintaining aqueduct alignment"],
    key_principle: "Closed pipes descend and ascend across depressions, operating under pressure while preserving upstream hydraulic grade.",
    notes: "Allowed aqueducts to cross valleys without high bridges or long detours."
  },
  {
    name: "Irrigation canals and terraces",
    category: "Irrigation",
    civilizations: ["China", "Mesoamerica", "Andes"],
    period_BCE_CE: "c. 3000 BCE–1500 CE",
    primary_uses: ["Agricultural irrigation", "Erosion control"],
    key_principle: "Contour-aligned channels and terracing slow runoff, promote infiltration, and distribute water to crops.",
    notes: "Terraced hillsides with integrated canals increased arable land and stabilized slopes."
  },
  {
    name: "Bamboo piping",
    category: "Water conveyance",
    civilizations: ["China"],
    period_BCE_CE: "c. 1000 BCE–1000 CE",
    primary_uses: ["Local supply", "Irrigation"],
    key_principle: "Hollowed bamboo sections joined into pipelines convey water by gravity from springs and streams.",
    notes: "Lightweight and rapidly renewable material for small-diameter conduits."
  },
  {
    name: "Ancient dams and levees",
    category: "Storage and flood control",
    civilizations: ["Mesopotamia", "Egypt", "China", "Persia"],
    period_BCE_CE: "c. 3000 BCE–500 CE",
    primary_uses: ["Flood control", "Irrigation storage", "Navigation"],
    key_principle: "Earthen and masonry structures impound or deflect river flows to protect land and store water.",
    notes: "Early large-scale hydraulic infrastructure such as levee systems and reservoir dams."
  },
  {
    name: "Cisterns and rock-cut reservoirs",
    category: "Storage",
    civilizations: ["Mediterranean", "Middle East"],
    period_BCE_CE: "c. 1500 BCE–1500 CE",
    primary_uses: ["Urban storage", "Fortress supply"],
    key_principle: "Excavated or built tanks capture rainfall, runoff, or aqueduct water for later use.",
    notes: "Often covered to limit evaporation and contamination; examples under cities and fortifications."
  },
  {
    name: "Large vaulted urban cisterns",
    category: "Urban storage",
    civilizations: ["Byzantine"],
    period_BCE_CE: "c. 4th–15th century CE",
    primary_uses: ["City water storage"],
    key_principle: "Subterranean vaulted chambers store large volumes of aqueduct water within cities.",
    notes: "The Basilica Cistern in Istanbul is a prominent example."
  },
  {
    name: "Minoan palace drainage system",
    category: "Urban drainage and sewerage",
    civilizations: ["Minoan (Crete)"],
    period_BCE_CE: "c. 2000–1400 BCE",
    primary_uses: ["Stormwater drainage", "Wastewater conveyance", "Toilet flushing"],
    key_principle: "Network of stone channels and terracotta conduits, partly covered and partly open-topped, collects runoff and household wastewater and discharges it downslope away from the palace.",
    notes: "Stormwater from courts and roofs, greywater from baths, and toilet wastes were routed into a common drainage network that protected the multi-story complexes from flooding and unsanitary ponding."
  },
  {
    name: "Knossos stormwater runoff system",
    category: "Storm drainage",
    civilizations: ["Minoan (Crete)"],
    period_BCE_CE: "c. 1900–1400 BCE",
    primary_uses: ["Stormwater interception", "Flood risk reduction"],
    key_principle: "Surface channels in paved courts collect intense rainfall, route it into zigzag conduits with intermediate basins, and then into larger buried drains leading off the hill.",
    notes: "The system reflects awareness of short, intense Mediterranean storms and the need to avoid erosion of the palace foundations."
  },
  {
    name: "Terracotta drainage pipes",
    category: "Drainage conduits",
    civilizations: ["Minoan (Crete)"],
    period_BCE_CE: "c. 2000–1400 BCE",
    primary_uses: ["Stormwater conveyance", "Wastewater drainage", "Water supply"],
    key_principle: "Segmented terracotta conduits, often conical or rectangular, joined with flanged ends and mortar, convey water under gravity in closed or semi-closed sections.",
    notes: "Quality of manufacture and jointing is comparable to later classical systems and allowed some pressurized or near-pressurized operation in parts of the network."
  },
  {
    name: "Minoan flush-type toilets and drains",
    category: "Sanitation and drainage",
    civilizations: ["Minoan (Crete)"],
    period_BCE_CE: "c. 1700–1400 BCE",
    primary_uses: ["Human waste disposal"],
    key_principle: "Latrine seats located over vertical or sloping drains are cleared by poured water, which carries waste into the palace drainage system.",
    notes: "These installations are among the earliest known examples of water-assisted toilet drainage in the Western world."
  },
  {
    name: "Rainwater harvesting to cisterns via drains",
    category: "Rainwater harvesting and drainage",
    civilizations: ["Minoan (Crete)"],
    period_BCE_CE: "c. 1900–1400 BCE",
    primary_uses: ["Non-potable supply", "Supplemental potable use", "Palace water security"],
    key_principle: "Roof and courtyard runoff captured by surface channels and terracotta pipes is routed into storage cisterns before overflow continues to the drainage network.",
    notes: "This linkage between drainage and storage allowed palaces to buffer seasonal variability while still managing peak flows."
  },
  {
    name: "Copper drainage pipes",
    category: "Drainage conduits",
    civilizations: ["Egypt"],
    period_BCE_CE: "c. 2400 BCE",
    primary_uses: ["Temple drainage", "Pyramid drainage"],
    key_principle: "Copper pipes used for wastewater removal in monumental architecture.",
    notes: "Found in the Pyramid of Sahure, representing early metal plumbing technology."
  },
  {
    name: "Square-pallet chain pump (Dragon backbone)",
    category: "Water lifting",
    civilizations: ["China"],
    period_BCE_CE: "c. 200 BCE - 200 CE",
    primary_uses: ["Irrigation", "Field drainage"],
    key_principle: "Continuous chain with paddles lifts water through an inclined trough using human or animal power.",
    notes: "Labor-saving device that could irrigate large areas efficiently."
  },
  {
    name: "Chultuns (underground reservoirs)",
    category: "Water storage",
    civilizations: ["Maya"],
    period_BCE_CE: "c. 1000 BCE - 1500 CE",
    primary_uses: ["Water storage", "Rainwater collection", "Ritual use"],
    key_principle: "Bell-shaped underground cisterns carved into limestone store rainwater for dry seasons.",
    notes: "Essential for Maya cities in areas without permanent water sources."
  },
  {
    name: "Puquios (Nazca aqueducts)",
    category: "Groundwater conveyance",
    civilizations: ["Nazca (Peru)"],
    period_BCE_CE: "c. 400 BCE - 600 CE",
    primary_uses: ["Irrigation", "Urban supply"],
    key_principle: "Spiral-well and tunnel systems tap underground aquifers and bring water to the surface.",
    notes: "Innovative solution for one of the driest deserts on Earth."
  },
  {
    name: "Water clock (Clepsydra)",
    category: "Timekeeping",
    civilizations: ["Egypt", "Babylon", "Greece", "Rome", "China"],
    period_BCE_CE: "c. 1500 BCE - 1100 CE",
    primary_uses: ["Night timekeeping", "Religious rituals", "Court proceedings", "Astronomy"],
    key_principle: "Regulated water flow measures time intervals; evolved from simple outflow vessels to complex gear-driven mechanisms.",
    notes: "Demonstrates how water technology served diverse purposes beyond supply and sanitation."
  },
  {
    name: "Su Song astronomical clock tower",
    category: "Mechanical timekeeping",
    civilizations: ["China"],
    period_BCE_CE: "1088 CE",
    primary_uses: ["Astronomical observation", "Imperial timekeeping"],
    key_principle: "Water-powered escapement mechanism drives rotating armillary sphere and celestial globe.",
    notes: "One of the most sophisticated water-powered machines of the medieval world."
  },
  {
    name: "Cenote water systems",
    category: "Natural water access",
    civilizations: ["Maya"],
    period_BCE_CE: "c. 1000 BCE - 1500 CE",
    primary_uses: ["Water supply", "Sacred rituals", "Urban foundation"],
    key_principle: "Natural limestone sinkholes provide access to underground water table.",
    notes: "Many Maya cities were deliberately founded near cenotes; they served both practical and spiritual purposes."
  },
  {
    name: "Saqiya (Persian Wheel)",
    category: "Water lifting and power",
    civilizations: ["Persia", "Egypt", "Islamic World"],
    period_BCE_CE: "c. 500-300 BCE onward",
    primary_uses: ["Deep well irrigation", "Agricultural expansion"],
    key_principle: "Right-angle gearing converts horizontal animal motion to vertical rotary lifting using pot garland or compartmentalized rim.",
    notes: "Revolutionary for using animal power instead of human labor, allowing irrigation of significantly more land than shaduf teams."
  },
  {
    name: "Series shaduf system",
    category: "Water lifting",
    civilizations: ["Egypt", "Mesopotamia"],
    period_BCE_CE: "c. 2000 BCE onward",
    primary_uses: ["High-elevation irrigation", "Terrace farming"],
    key_principle: "Multiple shadufs arranged in stepped sequence lift water progressively higher through intermediate basins.",
    notes: "Allowed irrigation of upper terraces during dry season; a team of workers could lift water 10+ meters in stages."
  },
  {
    name: "Noria of Hama",
    category: "Water lifting and power",
    civilizations: ["Syria", "Islamic World"],
    period_BCE_CE: "c. 1000 BCE - present",
    primary_uses: ["Automated irrigation", "Urban water supply"],
    key_principle: "River current drives large paddle wheel that lifts water to elevated aqueduct without fuel or labor.",
    notes: "Monumental norias at Hama reach 20+ meters diameter; early example of water-powered automation operating continuously."
  },
  {
    name: "Assyrian water screw",
    category: "Water lifting",
    civilizations: ["Assyria"],
    period_BCE_CE: "c. 705-681 BCE",
    primary_uses: ["Garden irrigation", "Palace water supply"],
    key_principle: "Bronze helical screw in cylinder lifts water continuously; predates Archimedes by 400 years.",
    notes: "Cuneiform inscriptions from Sennacherib's palace at Nineveh describe bronze screws cast using lost-wax technique for the Hanging Gardens."
  },
  {
    name: "Tympanum water wheel",
    category: "Water lifting",
    civilizations: ["Rome", "Greece"],
    period_BCE_CE: "c. 300 BCE - 400 CE",
    primary_uses: ["Mining drainage", "Irrigation"],
    key_principle: "Hollow compartmentalized wheel rim traps water at bottom and discharges near axle at top.",
    notes: "Extremely robust design limited to half wheel diameter lift; used extensively in Roman mining operations."
  },
  {
    name: "Lost-wax bronze casting for hydraulics",
    category: "Manufacturing technology",
    civilizations: ["Assyria", "Egypt", "Greece"],
    period_BCE_CE: "c. 2500 BCE onward",
    primary_uses: ["Pump components", "Pipe fittings", "Valve manufacturing"],
    key_principle: "Wax model coated in clay creates precise mold for casting complex bronze mechanical parts.",
    notes: "Enabled manufacture of precision water-lifting components; essential for Assyrian water screws and later Greek mechanisms."
  },
  {
    name: "Right-angle gear transmission",
    category: "Mechanical engineering",
    civilizations: ["Persia", "Greece", "Rome"],
    period_BCE_CE: "c. 500 BCE onward",
    primary_uses: ["Power conversion", "Water lifting", "Milling"],
    key_principle: "Meshing wooden pegs convert horizontal rotary motion to vertical plane for water lifting.",
    notes: "Fundamental mechanical innovation enabling animal-powered irrigation and industrial water mills."
  }
];

export const technologyCategories = [
  "Conveyance and irrigation",
  "Sanitation and sewers",
  "Water supply and drainage",
  "Water treatment",
  "Irrigation and flood management",
  "Water lifting",
  "Water lifting and power",
  "Storage and access",
  "Groundwater conveyance",
  "Water supply and sewerage",
  "Long-distance conveyance",
  "Hydropower",
  "Urban water distribution",
  "Sanitation and hygiene",
  "Urban drainage and sewerage",
  "Pressurized conveyance",
  "Irrigation",
  "Water conveyance",
  "Storage and flood control",
  "Storage",
  "Urban storage"
];
