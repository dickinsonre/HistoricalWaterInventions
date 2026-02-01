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
  },
  {
    name: "Alum coagulation treatment",
    category: "Water treatment",
    civilizations: ["Egypt"],
    period_BCE_CE: "c. 1500 BCE",
    primary_uses: ["Drinking water purification", "Sediment removal"],
    key_principle: "Adding potassium aluminum sulfate causes suspended particles to clump together and settle.",
    notes: "First known chemical water treatment in history; principle still used in modern water treatment plants."
  },
  {
    name: "Sanskrit purification methods",
    category: "Water treatment",
    civilizations: ["India"],
    period_BCE_CE: "c. 1500 BCE",
    primary_uses: ["Drinking water treatment", "Medical applications"],
    key_principle: "Multiple techniques: boiling, solar heating, heated iron immersion, sand/gravel filtration, and plant-based clarifiers.",
    notes: "Documented in Sus'ruta Samhita; earliest known comprehensive water treatment manual using Strychnos potatorum seeds."
  },
  {
    name: "Amunas water collection",
    category: "Groundwater recharge",
    civilizations: ["Pre-Incan (Peru)"],
    period_BCE_CE: "c. 500 CE",
    primary_uses: ["Dry season water supply", "Groundwater storage"],
    key_principle: "Mountain channels direct wet-season water into permeable soil for slow release during dry months.",
    notes: "Being restored in modern Lima; Peru investing $24 million to address water scarcity using this ancient technique."
  },
  {
    name: "Nilometer flood prediction",
    category: "Water measurement",
    civilizations: ["Egypt"],
    period_BCE_CE: "c. 3000 BCE",
    primary_uses: ["Flood prediction", "Tax assessment", "Agricultural planning"],
    key_principle: "Marked columns, stairways, or wells measure Nile water levels to predict annual flood magnitude.",
    notes: "One of earliest examples of predictive analytics; critical for calculating agricultural yields and taxes."
  },
  {
    name: "Great Bath of Mohenjo-daro",
    category: "Public bathing",
    civilizations: ["Indus Valley"],
    period_BCE_CE: "c. 2500 BCE",
    primary_uses: ["Ritual bathing", "Public hygiene"],
    key_principle: "Waterproof tank using bitumen sealant between bricks, fed by wells with complex drainage.",
    notes: "Earliest known public water tank; measured 12m x 7m x 2.4m, held approximately 21,600 gallons."
  },
  {
    name: "Mesopotamian canal systems",
    category: "Irrigation",
    civilizations: ["Mesopotamia"],
    period_BCE_CE: "c. 6000 BCE onward",
    primary_uses: ["Large-scale irrigation", "River water diversion"],
    key_principle: "Network of primary and secondary canals divert river water to agricultural fields using gravity.",
    notes: "Among the earliest large-scale civil engineering projects; enabled the rise of Sumerian city-states."
  },
  {
    name: "Chorobates leveling tool",
    category: "Surveying equipment",
    civilizations: ["Rome"],
    period_BCE_CE: "c. 300 BCE - 400 CE",
    primary_uses: ["Aqueduct construction", "Gradient measurement"],
    key_principle: "Water-filled channel on wooden frame provides precise horizontal reference for establishing slopes.",
    notes: "Enabled Romans to maintain precise aqueduct gradients over distances of 80+ kilometers."
  },
  {
    name: "Hydraulic concrete (opus caementicium)",
    category: "Construction material",
    civilizations: ["Rome"],
    period_BCE_CE: "c. 300 BCE - 400 CE",
    primary_uses: ["Aqueduct construction", "Harbor building", "Cisterns"],
    key_principle: "Volcanic ash (pite) mixed with lime creates concrete that sets underwater and resists seawater.",
    notes: "Revolutionary material enabling massive hydraulic infrastructure; some Roman concrete structures still standing after 2000 years."
  },
  {
    name: "Maya sand filtration",
    category: "Water treatment",
    civilizations: ["Maya"],
    period_BCE_CE: "c. 500 BCE",
    primary_uses: ["Rainwater purification", "Reservoir water treatment"],
    key_principle: "Sandboxes filter water as it flows from catchment areas into storage reservoirs.",
    notes: "Tikal's elaborate system included paved catchment areas, channels, and sand filtration before giant reservoirs."
  },
  {
    name: "Strychnos potatorum seed clarification",
    category: "Water treatment",
    civilizations: ["India"],
    period_BCE_CE: "c. 1500 BCE onward",
    primary_uses: ["Water clarification", "Turbidity removal"],
    key_principle: "Seeds rubbed on inside of water vessels release proteins that bind suspended particles.",
    notes: "Natural coagulant still used in rural India today; documented in ancient Sanskrit medical texts."
  },
  {
    name: "Ctesibius feedback water clock",
    category: "Mechanical timekeeping",
    civilizations: ["Greece (Alexandria)"],
    period_BCE_CE: "c. 270 BCE",
    primary_uses: ["Precision timekeeping", "Astronomical observation"],
    key_principle: "Float-controlled valve maintains constant water level, ensuring uniform flow rate and accurate time measurement.",
    notes: "First known use of feedback control in mechanical systems; housed in Tower of the Winds in Athens."
  },
  {
    name: "Tower of the Winds water clock",
    category: "Monumental timekeeping",
    civilizations: ["Greece"],
    period_BCE_CE: "c. 50 BCE",
    primary_uses: ["Public timekeeping", "Weather observation"],
    key_principle: "Mechanized clepsydra with astronomical displays powered by regulated water flow.",
    notes: "Octagonal marble tower in Athens combined water clock, sundials, and weather vane; still standing today."
  },
  {
    name: "Yakhchal (ice house)",
    category: "Water storage and cooling",
    civilizations: ["Persia"],
    period_BCE_CE: "c. 400 BCE",
    primary_uses: ["Ice storage", "Food preservation", "Desert cooling"],
    key_principle: "Domed structures with thick heat-resistant walls use evaporative cooling to make and store ice year-round.",
    notes: "Stored ice in desert climates for food preservation and desserts like faloodeh; some structures still stand in Yazd and Kerman."
  },
  {
    name: "Baray reservoir system",
    category: "Large-scale storage",
    civilizations: ["Khmer Empire (Cambodia)"],
    period_BCE_CE: "c. 9th-12th century CE",
    primary_uses: ["Monsoon water storage", "Year-round irrigation", "Urban water supply"],
    key_principle: "Massive rectangular reservoirs with automated overflow weirs and interconnected canal networks store seasonal floods.",
    notes: "West Baray measured 8km x 2.2km; supported 200,000-1 million inhabitants at Angkor with sophisticated automated spillways."
  },
  {
    name: "Neak Poan hospital temple",
    category: "Medicinal water systems",
    civilizations: ["Khmer Empire (Cambodia)"],
    period_BCE_CE: "c. 12th century CE",
    primary_uses: ["Healing rituals", "Medicinal bathing", "Water therapy"],
    key_principle: "Island temple with five interconnected basins using infiltration/exfiltration hydraulics for medicinal water flow.",
    notes: "Combined water engineering with healthcare; water flowed through central basin to peripheral healing pools. Still used in rain ceremonies."
  },
  {
    name: "Nubian shadouf",
    category: "Water lifting",
    civilizations: ["Nubia", "Egypt"],
    period_BCE_CE: "c. 3000 BCE or earlier",
    primary_uses: ["Irrigation", "River water lifting"],
    key_principle: "Counterbalanced lever device for lifting water from river to irrigation channels.",
    notes: "First mechanical application of the lever principle, predating Greek mechanics by millennia; evolved into multi-stage systems."
  },
  {
    name: "Eskale (Saqia) water wheel",
    category: "Water lifting and power",
    civilizations: ["Nubia (Kingdom of Kush)"],
    period_BCE_CE: "c. 1000 BCE or earlier",
    primary_uses: ["Automated irrigation", "Continuous water lifting"],
    key_principle: "Animal-powered waterwheel with perpendicular gear transmission; buckets on rotating ropes lift water continuously.",
    notes: "World's first automated machine; used wooden gears and oxen power. Water distribution managed with social equity systems for widows and elders."
  },
  {
    name: "Bampenh Reach automated spillway",
    category: "Flow control",
    civilizations: ["Khmer Empire (Cambodia)"],
    period_BCE_CE: "c. 9th-12th century CE",
    primary_uses: ["Automated water distribution", "Seasonal flow management"],
    key_principle: "Spillway system automatically directs water to different channels based on seasonal flow levels.",
    notes: "Sophisticated hydraulic automation at Angkor; directed monsoon waters without human intervention."
  },
  {
    name: "Qanat maintenance shaft system",
    category: "Groundwater conveyance",
    civilizations: ["Persia"],
    period_BCE_CE: "c. 1000-800 BCE",
    primary_uses: ["Tunnel ventilation", "Maintenance access", "Debris removal"],
    key_principle: "Vertical shafts at regular intervals provide access for construction, maintenance, and ventilation of underground tunnels.",
    notes: "Tax exemptions granted to families maintaining qanats for up to 5 generations; over 30,000 qanats still function in Iran."
  },
  {
    name: "Assyrian stone aqueduct to Nineveh",
    category: "Water supply and conveyance",
    civilizations: ["Assyria"],
    period_BCE_CE: "c. 691 BCE",
    primary_uses: ["Urban water supply", "Palace gardens"],
    key_principle: "Constructed masonry channels and bridge structures to move water from source areas to cities by gravity.",
    notes: "Early monumental aqueduct engineering; supplied Nineveh including possibly the Hanging Gardens."
  },
  {
    name: "Eupalinos Tunnel",
    category: "Water supply and conveyance",
    civilizations: ["Greece"],
    period_BCE_CE: "6th century BCE",
    primary_uses: ["Urban water supply", "Siege-proof water access"],
    key_principle: "Underground tunnel dug from both ends meeting in the middle using geometric calculations.",
    notes: "1,036 meters long on Samos; remarkable surveying achievement. First tunnel excavated from both ends using geometry."
  },
  {
    name: "Roman settling tanks",
    category: "Water treatment",
    civilizations: ["Rome"],
    period_BCE_CE: "4th century BCE - 5th century CE",
    primary_uses: ["Sediment removal", "Water clarification"],
    key_principle: "Water held in tanks allows suspended particles to settle before distribution.",
    notes: "Part of aqueduct system; water quality improved before reaching distribution tanks (castella)."
  },
  {
    name: "Roman castella (distribution tanks)",
    category: "Urban water distribution",
    civilizations: ["Rome"],
    period_BCE_CE: "4th century BCE - 5th century CE",
    primary_uses: ["Flow regulation", "Water distribution"],
    key_principle: "Central tanks divided aqueduct flow into multiple secondary lines serving different districts.",
    notes: "Featured calibrated outlets; regulated water allocation to public fountains, baths, and private connections."
  },
  {
    name: "Dholavira stepped reservoirs",
    category: "Water collection and storage",
    civilizations: ["Indus Valley"],
    period_BCE_CE: "3rd-2nd millennium BCE",
    primary_uses: ["Rainwater storage", "Monsoon capture", "Urban water security"],
    key_principle: "Network of dams, channels, and stone-lined reservoirs captured seasonal flows with stepped access.",
    notes: "UNESCO World Heritage Site; sophisticated system sustained urban center in arid Kutch region."
  },
  {
    name: "Indus Valley brick-lined wells",
    category: "Water collection",
    civilizations: ["Indus Valley"],
    period_BCE_CE: "3rd millennium BCE",
    primary_uses: ["Household water supply", "Public water access"],
    key_principle: "Numerous standardized brick-lined shafts provided distributed groundwater access throughout cities.",
    notes: "Mohenjo-daro had over 700 wells; integrated with bathing rooms and drainage systems."
  },
  {
    name: "Pont du Gard aqueduct bridge",
    category: "Water supply and conveyance",
    civilizations: ["Rome"],
    period_BCE_CE: "c. 19 BCE",
    primary_uses: ["Valley crossing", "Water transport"],
    key_principle: "Three-tier stone arch bridge carried water channel across river valley using precise gradients.",
    notes: "UNESCO World Heritage Site; 49 meters tall, supplied Nîmes with 200,000 cubic meters daily."
  },
  {
    name: "Greek public fountains",
    category: "Urban water distribution",
    civilizations: ["Greece"],
    period_BCE_CE: "6th century BCE onward",
    primary_uses: ["Public water access", "Social gathering"],
    key_principle: "Monumental fountain houses (krene) provided communal water access from spring-fed supplies.",
    notes: "Centers of civic life; featured multiple spouts and decorative architecture."
  },
  {
    name: "Roman thermae heating systems",
    category: "Water heating",
    civilizations: ["Rome"],
    period_BCE_CE: "1st century BCE - 5th century CE",
    primary_uses: ["Public bathing", "Heated water supply"],
    key_principle: "Hypocaust underfloor heating and water circulation provided multiple temperature pools.",
    notes: "Massive public baths like Caracalla served thousands daily; combined engineering with social institution."
  },
  {
    name: "Persian wind catcher (Badgir)",
    category: "Passive cooling",
    civilizations: ["Persia"],
    period_BCE_CE: "c. 3000 BCE onward",
    primary_uses: ["Building ventilation", "Qanat cooling", "Food storage"],
    key_principle: "Tall towers catch wind and direct it down into buildings, often over qanat water for evaporative cooling.",
    notes: "Combined with qanats and yakhchals to create remarkably cool indoor spaces in desert climates."
  },
  {
    name: "Angkor automated spillway",
    category: "Flow control",
    civilizations: ["Khmer Empire (Cambodia)"],
    period_BCE_CE: "9th-12th century CE",
    primary_uses: ["Seasonal water distribution", "Flood control"],
    key_principle: "Weirs automatically direct water to different channels based on seasonal flow levels.",
    notes: "Bampenh Reach spillway automatically managed monsoon waters without human intervention."
  },
  {
    name: "Meroe iron production water systems",
    category: "Industrial water use",
    civilizations: ["Nubia (Kingdom of Kush)"],
    period_BCE_CE: "c. 300 BCE - 350 CE",
    primary_uses: ["Iron smelting", "Industrial cooling"],
    key_principle: "Water channeled for quenching hot iron and cooling smelting operations.",
    notes: "Meroe was one of Africa's largest iron production centers; water essential for metalworking."
  },
  {
    name: "Nabataean cistern systems",
    category: "Water collection and storage",
    civilizations: ["Nabataea (Petra)"],
    period_BCE_CE: "4th century BCE - 106 CE",
    primary_uses: ["Desert water storage", "Urban water supply"],
    key_principle: "Rock-cut cisterns collected rainwater runoff in arid terrain.",
    notes: "Petra supported 30,000 people in the desert through sophisticated water harvesting."
  },
  {
    name: "Incan hydraulic engineering",
    category: "Mountain water management",
    civilizations: ["Inca Empire"],
    period_BCE_CE: "1438-1533 CE",
    primary_uses: ["Terrace irrigation", "Ceremonial fountains"],
    key_principle: "Stone channels conducted water down mountain slopes to agricultural terraces.",
    notes: "Machu Picchu had 16 fountains fed by a 749-meter canal from a mountain spring."
  },
  {
    name: "Moray agricultural laboratory",
    category: "Experimental irrigation",
    civilizations: ["Inca Empire"],
    period_BCE_CE: "c. 1400 CE",
    primary_uses: ["Crop experimentation", "Microclimate creation"],
    key_principle: "Concentric circular terraces with irrigation created different temperature zones.",
    notes: "Temperature difference of 15°C between top and bottom; tested crops for different climates."
  },
  {
    name: "Tipón royal estate water system",
    category: "Ceremonial water engineering",
    civilizations: ["Inca Empire"],
    period_BCE_CE: "15th century CE",
    primary_uses: ["Garden irrigation", "Ceremonial fountains"],
    key_principle: "Precisely cut stone channels and fountains demonstrated mastery over water.",
    notes: "Wall fountains and channels still flow today; some researchers call it 'Incan hydraulic engineering museum.'"
  },
  {
    name: "Ab-anbar (Persian cistern)",
    category: "Urban water storage",
    civilizations: ["Persia"],
    period_BCE_CE: "c. 500 BCE onward",
    primary_uses: ["Public water supply", "Community reservoir"],
    key_principle: "Domed underground tanks stored water from qanats; wind catchers cooled the water.",
    notes: "Some ab-anbars stored up to 3,000 cubic meters; served entire neighborhoods for months."
  },
  {
    name: "Khmer temple moats",
    category: "Ritual and practical water",
    civilizations: ["Khmer Empire (Cambodia)"],
    period_BCE_CE: "9th-13th century CE",
    primary_uses: ["Temple symbolism", "Water storage", "Microclimate creation"],
    key_principle: "Rectangular moats surrounding temples represented cosmic oceans and stored water.",
    notes: "Angkor Wat moat is 1.5km x 1.3km; represented the mythical ocean surrounding Mount Meru."
  },
  {
    name: "Polynesian fresh water lenses",
    category: "Groundwater management",
    civilizations: ["Polynesia"],
    period_BCE_CE: "c. 1000 CE onward",
    primary_uses: ["Island water supply", "Well construction"],
    key_principle: "Fresh water floats on denser salt water in coral islands; shallow wells tap this lens.",
    notes: "Indigenous understanding of Ghyben-Herzberg freshwater lenses on atolls."
  },
  {
    name: "Sri Lankan tank cascade system",
    category: "Interconnected reservoirs",
    civilizations: ["Ancient Sri Lanka"],
    period_BCE_CE: "c. 3rd century BCE onward",
    primary_uses: ["Irrigation", "Flood control", "Groundwater recharge"],
    key_principle: "Chains of tanks connected by spillways; overflow from upper tanks feeds lower ones.",
    notes: "Over 30,000 ancient tanks; some cascades include 40+ interconnected reservoirs."
  },
  {
    name: "Bisokotuwa sluice technology",
    category: "Flow control",
    civilizations: ["Ancient Sri Lanka"],
    period_BCE_CE: "c. 3rd century BCE",
    primary_uses: ["Reservoir outlet control", "Sediment management"],
    key_principle: "Stone chamber with valved outlets reduces pressure and controls discharge from reservoirs.",
    notes: "Sophisticated valve system predated similar European technology by over 1,500 years."
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
