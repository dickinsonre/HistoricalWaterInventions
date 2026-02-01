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
