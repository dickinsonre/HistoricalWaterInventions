export interface WaterSimModel {
  id: string;
  name: string;
  year: number;
  developer: string;
  firstBecause: string;
  statusToday: string;
  category: string;
  ancientConnection?: string;
}

export const waterSimCategories = [
  "Urban Drainage & Stormwater",
  "River & Flood Modeling",
  "Integrated Catchment Modeling",
  "Water Distribution",
  "Groundwater",
  "Water Quality",
  "Hydrologic/Watershed Models",
  "Coastal & Ocean",
  "Hydraulic Design",
  "Real-Time & AI",
  "Specialized & Emerging",
  "The SWMM Family Tree"
];

export const waterSimModels: WaterSimModel[] = [
  {
    id: "epa-swmm",
    name: "EPA SWMM",
    year: 1971,
    developer: "Metcalf & Eddy / UF / CDM / EPA",
    firstBecause: "First comprehensive urban stormwater model. Linked rainfall → runoff → sewer flow → receiving water quality in one model. Created because the Clean Water Act demanded tools to understand urban drainage. Robert Dickinson co-authored versions 3, 4, and 5.",
    statusToday: "Active — SWMM 5.2.4 (2023). Most widely used stormwater model in the world. Open source. Free.",
    category: "Urban Drainage & Stormwater",
    ancientConnection: "Minoan flush toilet → SWMM sanitary sewer modeling"
  },
  {
    id: "wallingford-wassp",
    name: "Wallingford Procedure / WASSP",
    year: 1981,
    developer: "Wallingford (UK)",
    firstBecause: "First standardized urban drainage design method. Combined hydrological design methods with computer simulation. Created the framework later commercial models were built upon.",
    statusToday: "Evolved into HydroWorks (1993) → InfoWorks CS (1998) → InfoWorks ICM (2009)",
    category: "Urban Drainage & Stormwater"
  },
  {
    id: "mouse",
    name: "MOUSE (MOdelling of Urban SEwers)",
    year: 1985,
    developer: "DHI (Danish Hydraulic Institute)",
    firstBecause: "First commercial urban drainage software with GUI. Made sewer modeling accessible to practicing engineers, not just researchers.",
    statusToday: "Evolved into MIKE URBAN → MIKE+",
    category: "Urban Drainage & Stormwater"
  },
  {
    id: "infoworks-cs",
    name: "InfoWorks CS (Collection Systems)",
    year: 1998,
    developer: "Wallingford Software / HR Wallingford",
    firstBecause: "First integrated urban drainage model with GIS-based interface. Combined sewer hydraulics, hydrology, and water quality in a map-based environment.",
    statusToday: "Evolved into InfoWorks ICM (2009)",
    category: "Urban Drainage & Stormwater"
  },
  {
    id: "xp-swmm",
    name: "XP-SWMM",
    year: 1984,
    developer: "XP Software (Australia)",
    firstBecause: "First graphical interface wrapper around SWMM engine. Made SWMM accessible via point-and-click instead of text file editing.",
    statusToday: "Still active — XP Solutions",
    category: "Urban Drainage & Stormwater"
  },
  {
    id: "pcswmm",
    name: "PCSWMM",
    year: 1984,
    developer: "CHI (Computational Hydraulics International)",
    firstBecause: "First PC-based SWMM interface. Brought SWMM from mainframes to personal computers. Later added GIS integration and optimization tools.",
    statusToday: "Still active — CHI Water",
    category: "Urban Drainage & Stormwater"
  },
  {
    id: "sewergems",
    name: "SewerGEMS",
    year: 2003,
    developer: "Bentley Systems (Haestad Methods)",
    firstBecause: "First sewer model fully integrated into CAD/GIS platforms. Ran inside MicroStation and ArcGIS.",
    statusToday: "Active — part of Bentley OpenFlows",
    category: "Urban Drainage & Stormwater"
  },
  {
    id: "hydroworks",
    name: "HydroWorks",
    year: 1993,
    developer: "Wallingford Software (HR Wallingford)",
    firstBecause: "First Windows-based urban drainage model from Wallingford. Brought the Wallingford Procedure into the GUI era with network visualization, real-time simulation, and integrated hydrology. The commercial bridge between WASSP and InfoWorks.",
    statusToday: "Evolved into InfoWorks CS (1998) → InfoWorks ICM (2009). No longer sold separately.",
    category: "Urban Drainage & Stormwater",
    ancientConnection: "Roman Cloaca Maxima sewer design → HydroWorks urban sewer simulation"
  },
  {
    id: "hec-1",
    name: "HEC-1 (Flood Hydrograph Package)",
    year: 1968,
    developer: "US Army Corps of Engineers (HEC)",
    firstBecause: "First standardized flood hydrograph model. Computed runoff from rainfall using unit hydrograph methods. The foundation of US flood analysis for 30+ years.",
    statusToday: "Superseded by HEC-HMS (1998)",
    category: "River & Flood Modeling"
  },
  {
    id: "hec-2",
    name: "HEC-2 (Water Surface Profiles)",
    year: 1966,
    developer: "US Army Corps of Engineers",
    firstBecause: "First standardized river water surface profile model. Became THE tool for FEMA floodplain mapping. Used for every flood insurance study in America.",
    statusToday: "Superseded by HEC-RAS (1995)",
    category: "River & Flood Modeling"
  },
  {
    id: "hec-ras",
    name: "HEC-RAS (River Analysis System)",
    year: 1995,
    developer: "US Army Corps of Engineers",
    firstBecause: "First free river model combining steady, unsteady, and sediment transport. Added 2D modeling in version 5.0 (2016). Now the most widely used river model worldwide.",
    statusToday: "Active — HEC-RAS 6.5 (2024). Dominant river/flood model globally. Free.",
    category: "River & Flood Modeling",
    ancientConnection: "Dujiangyan fish mouth → HEC-RAS river diversion"
  },
  {
    id: "mike-11",
    name: "MIKE 11",
    year: 1987,
    developer: "DHI (Denmark)",
    firstBecause: "First commercial 1D river model with water quality. Combined hydraulics with advection-dispersion modeling.",
    statusToday: "Evolved into MIKE HYDRO River / MIKE+",
    category: "River & Flood Modeling"
  },
  {
    id: "isis-flood-modeller",
    name: "ISIS (now Flood Modeller)",
    year: 1996,
    developer: "HR Wallingford / Halcrow",
    firstBecause: "First UK-standard 1D river model. Used for Environment Agency flood mapping.",
    statusToday: "Now Flood Modeller (Jacobs)",
    category: "River & Flood Modeling"
  },
  {
    id: "tuflow",
    name: "TUFLOW",
    year: 1990,
    developer: "BMT (Australia)",
    firstBecause: "First practical 2D flood model for engineering use. Pioneered 1D-2D coupling (pipes + overland flow). Became the global standard for 2D urban flooding.",
    statusToday: "Active — TUFLOW 2023. Dominant 2D flood model in many countries.",
    category: "River & Flood Modeling"
  },
  {
    id: "lisflood-fp",
    name: "LISFLOOD-FP",
    year: 2000,
    developer: "University of Bristol (Paul Bates)",
    firstBecause: "First large-scale 2D flood model for continental/global mapping. Enabled flood mapping of entire countries and continents.",
    statusToday: "Active — used for global flood mapping by FEMA, EU, World Bank",
    category: "River & Flood Modeling"
  },
  {
    id: "anuga",
    name: "ANUGA",
    year: 2005,
    developer: "Geoscience Australia",
    firstBecause: "First open-source 2D hydrodynamic model for tsunami and flood. Developed after the 2004 Indian Ocean tsunami. Python-based.",
    statusToday: "Active — open source. Used across Australasia.",
    category: "River & Flood Modeling"
  },
  {
    id: "infoworks-icm",
    name: "InfoWorks ICM (Integrated Catchment Modeling)",
    year: 2009,
    developer: "Innovyze (now Autodesk)",
    firstBecause: "First fully integrated catchment model combining sewer networks (1D), overland flow (2D), river channels (1D), and water quality in one platform. Rain falls on a surface, flows overland, enters sewers, floods if overwhelmed, and flows to rivers — all in one simulation.",
    statusToday: "Active — Autodesk InfoWorks ICM 2025. Industry standard for integrated modeling.",
    category: "Integrated Catchment Modeling"
  },
  {
    id: "mike-flood",
    name: "MIKE FLOOD",
    year: 2003,
    developer: "DHI",
    firstBecause: "First coupled 1D-2D flood model from a major vendor. Coupled MIKE 11 (1D rivers) with MIKE 21 (2D surface) for integrated flood modeling.",
    statusToday: "Evolved into MIKE+ (2019)",
    category: "Integrated Catchment Modeling"
  },
  {
    id: "mike-she",
    name: "MIKE SHE",
    year: 1977,
    developer: "DHI / Institute of Hydrology / SOGREAH",
    firstBecause: "First physically-based distributed hydrological model. Simulated the entire water cycle: precipitation, evapotranspiration, overland flow, channel flow, unsaturated zone, and groundwater — all in one model.",
    statusToday: "Active — MIKE SHE. Used for integrated water resource studies.",
    category: "Integrated Catchment Modeling"
  },
  {
    id: "swmm-5-rewrite",
    name: "SWMM 5 (Complete C Rewrite)",
    year: 2004,
    developer: "EPA / CDM (Robert Dickinson, Lewis Rossman)",
    firstBecause: "First complete rewrite of SWMM in C with modern architecture. 35 years after SWMM 1, rebuilt from scratch with Windows GUI, object-oriented data model. The CRADA between EPA and CDM that Robert Dickinson led.",
    statusToday: "Active — SWMM 5.2.4. The platform everything else builds on.",
    category: "Integrated Catchment Modeling"
  },
  {
    id: "epanet",
    name: "EPANET",
    year: 1993,
    developer: "EPA (Lewis Rossman)",
    firstBecause: "First free, open-source water distribution model. Simulated pressure, flow, water age, and chlorine residual in pipe networks. Same developer as SWMM 5.",
    statusToday: "Active — EPANET 2.2 (2020). Most widely used water distribution model. Free. Open source.",
    category: "Water Distribution",
    ancientConnection: "Roman Castellum Divisorium → EPANET pressure/flow analysis"
  },
  {
    id: "watergems",
    name: "WaterGEMS",
    year: 1999,
    developer: "Haestad Methods (now Bentley)",
    firstBecause: "First water distribution model integrated with GIS/CAD. Built on EPANET's engine but added geospatial capabilities and scenario management.",
    statusToday: "Active — Bentley OpenFlows WaterGEMS",
    category: "Water Distribution"
  },
  {
    id: "infoworks-ws",
    name: "InfoWorks WS (Water Supply)",
    year: 2002,
    developer: "Wallingford Software",
    firstBecause: "First water distribution model with transient analysis built in. Combined steady-state and water hammer analysis in one platform.",
    statusToday: "Evolved into InfoWorks WS Pro → Autodesk InfoWorks WS Pro",
    category: "Water Distribution"
  },
  {
    id: "infowater",
    name: "InfoWater",
    year: 2003,
    developer: "MWH Soft / Innovyze",
    firstBecause: "First water distribution model built directly inside ArcGIS. Instead of importing/exporting GIS data, the model lived inside the GIS — edit a pipe in ArcMap and it updated the hydraulic model instantly. Built on the EPANET engine but added ArcGIS integration, demand forecasting, and optimization.",
    statusToday: "Evolved into InfoWater Pro (2021) under Autodesk. Legacy InfoWater still used by many utilities.",
    category: "Water Distribution",
    ancientConnection: "Roman aqueduct network management → InfoWater pressure zone optimization"
  },
  {
    id: "infowater-pro",
    name: "InfoWater Pro",
    year: 2021,
    developer: "Autodesk (acquired Innovyze)",
    firstBecause: "First cloud-connected water distribution model with digital twin capabilities. Moved InfoWater from desktop ArcGIS to a standalone platform with real-time SCADA integration, AI-driven demand prediction, and collaboration tools. Part of Autodesk's water infrastructure digital twin strategy.",
    statusToday: "Active — Autodesk InfoWater Pro 2025. Part of Autodesk Water Infrastructure suite alongside InfoWorks ICM and InfoWorks WS Pro.",
    category: "Water Distribution",
    ancientConnection: "Nabataean water distribution networks → InfoWater Pro digital twin modeling"
  },
  {
    id: "kypipe",
    name: "KYPIPE",
    year: 1974,
    developer: "University of Kentucky (Don Wood)",
    firstBecause: "First pipe network analysis program for PCs. Preceded EPANET by 19 years. Thousands of utilities used it before free modeling was available.",
    statusToday: "Still available — KYPipe LLC",
    category: "Water Distribution"
  },
  {
    id: "modflow",
    name: "MODFLOW",
    year: 1984,
    developer: "USGS (McDonald & Harbaugh)",
    firstBecause: "First modular 3D groundwater flow model. Solved the groundwater flow equation using finite differences. Became THE global standard for groundwater modeling.",
    statusToday: "Active — MODFLOW 6 (2017). Dominant groundwater model worldwide. Free.",
    category: "Groundwater",
    ancientConnection: "Persian qanat gradient → MODFLOW groundwater modeling"
  },
  {
    id: "mt3dms",
    name: "MT3DMS",
    year: 1990,
    developer: "University of Alabama (Chunmiao Zheng)",
    firstBecause: "First 3D groundwater contaminant transport model compatible with MODFLOW. Essential for Superfund site cleanups.",
    statusToday: "Active — MT3D-USGS (2016)",
    category: "Groundwater"
  },
  {
    id: "feflow",
    name: "FEFLOW",
    year: 1979,
    developer: "DHI-WASY (Hans-Jorg Diersch)",
    firstBecause: "First finite-element groundwater model. More flexible than MODFLOW's finite-difference grid. Strong in mining, geothermal, and coastal groundwater.",
    statusToday: "Active — FEFLOW 8 (DHI)",
    category: "Groundwater"
  },
  {
    id: "tough2",
    name: "TOUGH2",
    year: 1991,
    developer: "Lawrence Berkeley National Lab",
    firstBecause: "First model for multiphase flow in fractured rock. Simulated water, steam, gas, and heat in fractured porous media. Essential for geothermal reservoir modeling and nuclear waste disposal.",
    statusToday: "Active — TOUGH3 (2017). Used for geothermal, CO2 sequestration.",
    category: "Groundwater"
  },
  {
    id: "qual2e",
    name: "QUAL2E",
    year: 1985,
    developer: "EPA",
    firstBecause: "First standardized stream water quality model. Simulated dissolved oxygen, BOD, nutrients, and temperature. Foundation of US water quality regulation.",
    statusToday: "Superseded by QUAL2K (2003)",
    category: "Water Quality"
  },
  {
    id: "wasp",
    name: "WASP (Water Quality Analysis Simulation)",
    year: 1983,
    developer: "EPA (Manhattan College)",
    firstBecause: "First generalized water quality model for rivers, lakes, and estuaries. Used for Great Lakes, Chesapeake Bay, and hundreds of other water bodies.",
    statusToday: "Active — WASP 8.4 (2024). EPA's primary water quality model.",
    category: "Water Quality"
  },
  {
    id: "ce-qual-w2",
    name: "CE-QUAL-W2",
    year: 1986,
    developer: "US Army Corps of Engineers",
    firstBecause: "First 2D (longitudinal-vertical) water quality model for reservoirs and estuaries. Simulated temperature stratification, dissolved oxygen, algae, and nutrients.",
    statusToday: "Active — CE-QUAL-W2 v4.5 (2023)",
    category: "Water Quality"
  },
  {
    id: "efdc",
    name: "EFDC (Environmental Fluid Dynamics Code)",
    year: 1992,
    developer: "Virginia Institute of Marine Science (John Hamrick)",
    firstBecause: "First 3D hydrodynamic + water quality model for estuaries. Used for Chesapeake Bay, Tampa Bay, and coastal waters worldwide.",
    statusToday: "Active — EFDC+ (DSI). Used for major estuary studies globally.",
    category: "Water Quality"
  },
  {
    id: "stanford-watershed",
    name: "Stanford Watershed Model (SWM)",
    year: 1966,
    developer: "Stanford University (Norman Crawford & Ray Linsley)",
    firstBecause: "First comprehensive continuous watershed simulation model. THE ancestor of all hydrologic models. Everything that came after built on this foundation.",
    statusToday: "Evolved into HSPF (1980)",
    category: "Hydrologic/Watershed Models"
  },
  {
    id: "hspf",
    name: "HSPF (Hydrological Simulation Program - Fortran)",
    year: 1980,
    developer: "EPA / USGS",
    firstBecause: "First model combining hydrology AND water quality at the watershed scale. Added nonpoint source pollutant loading. Used for TMDL studies nationwide.",
    statusToday: "Active — incorporated into BASINS. Still used for TMDLs.",
    category: "Hydrologic/Watershed Models"
  },
  {
    id: "hec-hms",
    name: "HEC-HMS (Hydrologic Modeling System)",
    year: 1998,
    developer: "US Army Corps of Engineers",
    firstBecause: "First modern event-based and continuous hydrologic model with GUI. Replaced HEC-1. Added continuous simulation, gridded rainfall, soil moisture accounting. Free.",
    statusToday: "Active — HEC-HMS 4.11 (2023). Global standard for flood hydrology. Free.",
    category: "Hydrologic/Watershed Models"
  },
  {
    id: "swat",
    name: "SWAT (Soil and Water Assessment Tool)",
    year: 1994,
    developer: "USDA (Jeff Arnold)",
    firstBecause: "First watershed model designed for agricultural water management. Simulated crop growth, irrigation, pesticide transport, and nutrient loading. Most widely used agricultural watershed model.",
    statusToday: "Active — SWAT+ (2023). 5,000+ journal papers cite SWAT.",
    category: "Hydrologic/Watershed Models"
  },
  {
    id: "vic",
    name: "VIC (Variable Infiltration Capacity)",
    year: 1994,
    developer: "University of Washington (Dennis Lettenmaier)",
    firstBecause: "First large-scale land surface hydrologic model for climate studies. Used in IPCC climate assessments. Enabled the first global drought and flood projections under climate change.",
    statusToday: "Active — VIC 5. Used for global climate-water projections.",
    category: "Hydrologic/Watershed Models"
  },
  {
    id: "topmodel",
    name: "TOPMODEL",
    year: 1979,
    developer: "Lancaster University (Keith Beven & Mike Kirkby)",
    firstBecause: "First topography-based hydrologic model. Introduced 'equifinality' — multiple parameter sets producing similar results. Changed how we think about model uncertainty.",
    statusToday: "Concept still influential. TOPMODEL spawned a philosophy of modeling.",
    category: "Hydrologic/Watershed Models"
  },
  {
    id: "adcirc",
    name: "ADCIRC",
    year: 1992,
    developer: "University of Notre Dame / UNC (Joannes Westerink & Rick Luettich)",
    firstBecause: "First unstructured-mesh coastal circulation model. THE model for hurricane storm surge forecasting in the US. Used for FEMA flood mapping.",
    statusToday: "Active — ADCIRC v55. Used for every US hurricane forecast.",
    category: "Coastal & Ocean"
  },
  {
    id: "mike-21",
    name: "MIKE 21",
    year: 1984,
    developer: "DHI",
    firstBecause: "First commercial 2D coastal/marine model. Simulated waves, currents, sediment transport, and water quality in coastal waters.",
    statusToday: "Active — MIKE 21 / MIKE+",
    category: "Coastal & Ocean"
  },
  {
    id: "swan",
    name: "SWAN (Simulating WAves Nearshore)",
    year: 1993,
    developer: "Delft University of Technology",
    firstBecause: "First third-generation spectral wave model for coastal waters. Free. Open source. Widely used for coastal engineering design.",
    statusToday: "Active — SWAN 41.45 (2023). Standard nearshore wave model. Free.",
    category: "Coastal & Ocean"
  },
  {
    id: "delft3d",
    name: "Delft3D",
    year: 1993,
    developer: "Deltares (Netherlands)",
    firstBecause: "First integrated coastal-river-morphology model. Combined hydrodynamics, waves, sediment, morphology, and water quality. Open source since 2011.",
    statusToday: "Active — Delft3D / Delft3D Flexible Mesh. Open source.",
    category: "Coastal & Ocean"
  },
  {
    id: "fvcom",
    name: "FVCOM",
    year: 2003,
    developer: "University of Massachusetts (Changsheng Chen)",
    firstBecause: "First unstructured-grid ocean model with wetting/drying. Handled complex coastlines, islands, and tidal flats.",
    statusToday: "Active — FVCOM 5. Used by NOAA and universities.",
    category: "Coastal & Ocean"
  },
  {
    id: "hy-8",
    name: "HY-8 (Culvert Analysis)",
    year: 1987,
    developer: "FHWA",
    firstBecause: "First standardized culvert hydraulics program. Every road crossing in America analyzed with HY-8 or its methods. Free.",
    statusToday: "Active — HY-8 v7.8 (2022). Free.",
    category: "Hydraulic Design"
  },
  {
    id: "hec-22",
    name: "HEC-22 (Urban Drainage Design Manual)",
    year: 1984,
    developer: "FHWA / HEC",
    firstBecause: "First standardized urban drainage design manual with software. Every street drainage system in America designed using these methods.",
    statusToday: "Active — HEC-22 3rd Edition (2009). National standard.",
    category: "Hydraulic Design"
  },
  {
    id: "flow-3d",
    name: "FLOW-3D",
    year: 1985,
    developer: "Flow Science (C.W. Hirt)",
    firstBecause: "First commercial 3D CFD model for free-surface flow. Used Volume of Fluid (VOF) method for spillways, hydraulic structures, dam breaks.",
    statusToday: "Active — FLOW-3D HYDRO 2024. Industry standard for hydraulic structure design.",
    category: "Hydraulic Design"
  },
  {
    id: "openfoam",
    name: "OpenFOAM (water applications)",
    year: 2004,
    developer: "OpenCFD / ESI Group",
    firstBecause: "First open-source CFD framework widely used for water. General-purpose with multiphase flow capability. Free. Open source.",
    statusToday: "Active — OpenFOAM v2312. Free. Massive community.",
    category: "Hydraulic Design"
  },
  {
    id: "mike-operations",
    name: "MIKE Operations",
    year: 1998,
    developer: "DHI",
    firstBecause: "First commercial real-time flood forecasting system. Combined hydrological models with real-time data feeds for operational flood warning.",
    statusToday: "Active — MIKE Operations. Used by dozens of countries for flood forecasting.",
    category: "Real-Time & AI"
  },
  {
    id: "epa-canary",
    name: "EPA-CANARY",
    year: 2009,
    developer: "EPA",
    firstBecause: "First water distribution contamination warning system. Used time-series analysis to detect contamination events in real-time. Post-9/11 water security driven.",
    statusToday: "Active — CANARY. Deployed at US water utilities.",
    category: "Real-Time & AI"
  },
  {
    id: "google-flood-hub",
    name: "Google Flood Hub",
    year: 2021,
    developer: "Google Research",
    firstBecause: "First AI-powered global flood forecasting system. ML models predict flooding in real-time for 80+ countries. Reaches 460 million people. No physics — pure AI trained on historical data.",
    statusToday: "Active — expanding coverage. Reaching millions who had no flood warning before.",
    category: "Real-Time & AI",
    ancientConnection: "Aboriginal songline water maps → Google Flood Hub AI"
  },
  {
    id: "digital-twin-water",
    name: "Digital Twin (Water Utility)",
    year: 2018,
    developer: "Multiple (Innovyze/Autodesk, Bentley, DHI)",
    firstBecause: "First real-time digital twin of water infrastructure. Continuous simulation updated with live sensor data. Predicted pipe failures, optimized operations, detected leaks.",
    statusToday: "Active — rapidly expanding. Major utilities adopting digital twins.",
    category: "Real-Time & AI"
  },
  {
    id: "floodnet-iot",
    name: "FloodNet / IoT Flood Sensors",
    year: 2020,
    developer: "Multiple (academic + startup)",
    firstBecause: "First low-cost distributed flood sensor networks. Arduino/Raspberry Pi-based sensors at $50-500 vs $10,000+ for traditional gauges. Citizen science meets hydrology.",
    statusToday: "Active — expanding rapidly. Democratizing flood monitoring.",
    category: "Real-Time & AI",
    ancientConnection: "Nilometer flood monitoring → Real-time IoT flood sensors"
  },
  {
    id: "swmm-lid-module",
    name: "EPA SWMM LID Module",
    year: 2010,
    developer: "EPA (Lewis Rossman, Michael Tryby)",
    firstBecause: "First green infrastructure simulation in a major stormwater model. Added bioretention, permeable pavement, rain barrels, green roofs. Changed stormwater practice worldwide.",
    statusToday: "Active — integrated into SWMM 5.1+. Transformed stormwater design.",
    category: "Specialized & Emerging"
  },
  {
    id: "pcswmm-srtc",
    name: "PCSWMM SRTC",
    year: 2005,
    developer: "CHI Water",
    firstBecause: "First automated SWMM calibration tool. Sensitivity-based Radio Tuning Calibration made calibration accessible to practitioners.",
    statusToday: "Active — integrated into PCSWMM",
    category: "Specialized & Emerging"
  },
  {
    id: "watergap",
    name: "WaterGAP",
    year: 1996,
    developer: "University of Kassel (Petra Doll)",
    firstBecause: "First global water resources model. Simulated water availability and use for every river basin on Earth. Used by UN, World Bank, and IPCC.",
    statusToday: "Active — WaterGAP 2.2. Foundation of global water scarcity analysis.",
    category: "Specialized & Emerging"
  },
  {
    id: "weap",
    name: "WEAP (Water Evaluation and Planning)",
    year: 1988,
    developer: "Stockholm Environment Institute",
    firstBecause: "First scenario-based water planning model. Integrated supply, demand, water quality, and policy. Free for developing-country users.",
    statusToday: "Active — WEAP 2024. Used in 170+ countries.",
    category: "Specialized & Emerging",
    ancientConnection: "Hammurabi's Water Code → WEAP water allocation model"
  },
  {
    id: "sewer-behar",
    name: "SEWER (Behar, France)",
    year: 1968,
    developer: "SOGREAH (France)",
    firstBecause: "First European sewer simulation model. Preceded SWMM by 3 years. Used Saint-Venant equations for dynamic sewer flow.",
    statusToday: "Historical — concepts absorbed into later models.",
    category: "Specialized & Emerging"
  },
  {
    id: "lukyanov-water-integrator",
    name: "Lukyanov Water Integrator",
    year: 1936,
    developer: "Vladimir Lukyanov (USSR)",
    firstBecause: "First water-powered analog computer. Used water flow through glass tubes to solve partial differential equations. The machine used WATER to solve equations about WATER.",
    statusToday: "Historical — replaced by digital computers. A few survive in museums.",
    category: "Specialized & Emerging",
    ancientConnection: "Lukyanov Water Computer → Every digital water model"
  },
  {
    id: "swmm-i",
    name: "SWMM I",
    year: 1971,
    developer: "John Lager, William Smith, Richard Field",
    firstBecause: "First comprehensive urban stormwater model. Period.",
    statusToday: "Foundation for all subsequent SWMM versions",
    category: "The SWMM Family Tree"
  },
  {
    id: "swmm-ii",
    name: "SWMM II",
    year: 1975,
    developer: "Wayne Huber, James Heaney, Miguel Medina",
    firstBecause: "First dynamic wave (EXTRAN) hydraulics for sewers.",
    statusToday: "Superseded by SWMM III",
    category: "The SWMM Family Tree"
  },
  {
    id: "swmm-iii",
    name: "SWMM III",
    year: 1981,
    developer: "Wayne Huber, Robert Dickinson, Stephen Nix",
    firstBecause: "First standardized, widely distributed SWMM version.",
    statusToday: "Superseded by SWMM IV",
    category: "The SWMM Family Tree"
  },
  {
    id: "swmm-iv",
    name: "SWMM IV",
    year: 1988,
    developer: "Wayne Huber, Robert Dickinson, Larry Roesner, John Aldrich",
    firstBecause: "First PC-compatible SWMM with groundwater.",
    statusToday: "Superseded by SWMM 5.0",
    category: "The SWMM Family Tree"
  },
  {
    id: "swmm-5-0",
    name: "SWMM 5.0",
    year: 2004,
    developer: "Lewis Rossman, Robert Dickinson, Carl Chan",
    firstBecause: "First complete C rewrite with GUI and modern architecture.",
    statusToday: "Foundation for current SWMM 5.x series",
    category: "The SWMM Family Tree"
  },
  {
    id: "swmm-5-0-019",
    name: "SWMM 5.0.019",
    year: 2010,
    developer: "Lewis Rossman, Michael Tryby",
    firstBecause: "First LID (green infrastructure) in SWMM.",
    statusToday: "Expanded in SWMM 5.1+",
    category: "The SWMM Family Tree"
  },
  {
    id: "swmm-5-1",
    name: "SWMM 5.1",
    year: 2014,
    developer: "Lewis Rossman, Michelle Simon",
    firstBecause: "First expanded LID with rooftop disconnection.",
    statusToday: "Superseded by SWMM 5.2",
    category: "The SWMM Family Tree"
  },
  {
    id: "swmm-5-2",
    name: "SWMM 5.2",
    year: 2022,
    developer: "Lewis Rossman (final release), Michelle Simon",
    firstBecause: "First with variable-speed pumps and street inlets.",
    statusToday: "Current major version",
    category: "The SWMM Family Tree"
  },
  {
    id: "swmm-5-2-4",
    name: "SWMM 5.2.4",
    year: 2023,
    developer: "Michelle Simon, Michael Tryby, Caleb Buahin",
    firstBecause: "Current production release. Rossman retired.",
    statusToday: "Current production release",
    category: "The SWMM Family Tree"
  },
  {
    id: "swmm-5-plus",
    name: "SWMM5+",
    year: 2025,
    developer: "Caleb Buahin, Ben Hodges, Charles Rowney (NCIMM)",
    firstBecause: "Next generation: open-source governance, multi-platform.",
    statusToday: "In development — next generation SWMM",
    category: "The SWMM Family Tree"
  },
  {
    id: "pyswmm",
    name: "PySWMM",
    year: 2016,
    developer: "Bryant McDonnell, Katherine Ratliff, Abhiram Mullapudi",
    firstBecause: "First Python wrapper for SWMM5 engine. Enables scripted real-time control, optimization, machine learning integration, and automated scenario testing — all through Python. Opened SWMM to the data science and AI communities.",
    statusToday: "Active — PySWMM 1.5+ (2024). Open source on GitHub. Growing community. Companion tools: swmmio, swmmtoolbox. Used in research worldwide for real-time control and reinforcement learning applications.",
    category: "The SWMM Family Tree",
    ancientConnection: "Ancient sluice gate operators making real-time flow decisions → PySWMM real-time control rules"
  }
];

export const ancientModernConnections = [
  { ancient: "Sumerian canal design", modern: "SWMM dynamic wave routing", connection: "Solving Saint-Venant equations — Sumerians solved them physically, SWMM solves them computationally" },
  { ancient: "Roman Castellum Divisorium", modern: "EPANET pressure/flow analysis", connection: "Distributing water through a pipe network" },
  { ancient: "Persian qanat gradient", modern: "MODFLOW groundwater modeling", connection: "Understanding subsurface water movement" },
  { ancient: "Aboriginal songline water maps", modern: "Google Flood Hub AI", connection: "Mapping water knowledge across vast landscapes" },
  { ancient: "Nilometer flood monitoring", modern: "Real-time IoT flood sensors", connection: "Measuring water levels to predict floods" },
  { ancient: "Hammurabi's Water Code", modern: "WEAP water allocation model", connection: "Allocating water between competing users" },
  { ancient: "Minoan flush toilet", modern: "SWMM sanitary sewer modeling", connection: "Managing wastewater flow" },
  { ancient: "Dujiangyan fish mouth", modern: "HEC-RAS river diversion", connection: "Dividing river flow at a bifurcation" },
  { ancient: "Tikal zeolite filtration", modern: "EPA water quality models", connection: "Understanding water treatment processes" },
  { ancient: "Lukyanov Water Computer", modern: "Every digital water model", connection: "Using computation to solve water problems" }
];
