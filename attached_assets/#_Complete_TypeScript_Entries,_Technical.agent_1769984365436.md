# Complete TypeScript Entries, Technical Specifications, SWMM5 Models & Diagrams

## 1. Russian Civilization TypeScript Entries

```typescript
// ============================================================
// RUSSIAN CIVILIZATION - COMPLETE TYPESCRIPT ENTRY
// ============================================================

// Add to civilizations array
const russianCivilization: Civilization = {
  id: "russian-empire",
  name: "Russian Empire & Soviet Union",
  era: "medieval" as Era, // spans medieval to modern
  period: "862 CE - Present",
  region: "europe",
  description: "From Varangian river traders to Soviet megaprojects, Russian water engineering spans over a millennium of adapting to extreme climates, vast distances, and challenging geography. The civilization mastered permafrost, connected five seas through canals, and even built computers that ran on water.",
  inventionCount: 12,
  coordinates: { lat: 55.7558, lng: 37.6173 }, // Moscow center
  color: "#C41E3A", // Russian red
  mapPosition: { x: 68, y: 18 }
};

// ============================================================
// INVENTIONS ARRAY
// ============================================================

const russianInventions: Invention[] = [
  
  // ----------------------------------------------------------
  // 1. VARANGIAN PORTAGE SYSTEM
  // ----------------------------------------------------------
  {
    id: "varangian-portage",
    name: "Varangian Portage System (Volok)",
    civilizationId: "russian-empire",
    period: "8th-11th Century CE",
    era: "medieval",
    category: "transport",
    rarity: "rare",
    description: "The Varangians (Vikings in Russia) developed an extensive network of river routes connected by portages (voloki) that enabled trade from the Baltic to Constantinople and Baghdad. These engineered pathways included log rollers, cleared corridors, and seasonal water management.",
    
    technicalSpecs: {
      dimensions: "Routes spanning 2,000+ km",
      materials: ["Timber rollers", "Cleared forest corridors", "Temporary dams"],
      capacity: "Ships up to 40 tons transported overland",
      engineering: "Gradient analysis, seasonal water level exploitation"
    },
    
    howItWorks: `
      THE VOLOK (PORTAGE) SYSTEM:
      
      1. ROUTE SELECTION
         - Identify rivers flowing in desired directions
         - Map shortest overland connections between watersheds
         - Survey terrain for minimum gradient paths
      
      2. CORRIDOR PREPARATION
         - Clear trees in 20-30m wide strips
         - Grade soil to reduce obstacles
         - Place parallel log rollers at intervals
         - Establish waystation settlements (pogosts)
      
      3. SHIP TRANSPORT
         - Unload cargo at portage start
         - Roll ship hull on greased log rollers
         - Teams of 20-40 men pull with ropes
         - Reload cargo at destination waterway
      
      4. WATER LEVEL MANAGEMENT
         - Time crossings with spring floods
         - Use temporary brush dams to raise water
         - Navigate shallow sections with poled flatboats
      
      Major Routes:
      ├── Volga Route: Baltic → Volga → Caspian → Persia
      ├── Dnieper Route: Baltic → Dnieper → Black Sea → Constantinople
      └── Northern Route: Baltic → Northern Dvina → White Sea
    `,
    
    whyItMattered: "Created the economic foundation for Kievan Rus, the first major Russian state. Enabled trade in furs, slaves, amber, and Byzantine luxury goods. The portage settlements grew into major cities including Smolensk, Novgorod, and eventually Moscow.",
    
    challenges: [
      "Moving 15-ton ships across 5-10 km of land",
      "Navigating rapids and shallow summer rivers",
      "Protection from hostile tribes along routes",
      "Seasonal limitations (spring high water best)"
    ],
    
    legacy: "The portage routes determined the location of Russia's major cities. The concept of connecting watersheds through portages evolved directly into canal-building ambitions that would culminate in Soviet megaprojects a millennium later.",
    
    robertsNote: "Every time I model urban drainage in Moscow, I remember that this city exists because Vikings needed a place to rest while dragging ships between rivers. The entire Russian state grew from water transportation logistics.",
    
    swmmRelevance: "Models seasonal flow variations, overland flow routing, and the hydraulic principles of watershed connectivity",
    
    coordinates: { lat: 58.5213, lng: 31.2718 }, // Novgorod
    
    images: [],
    
    diagramDescription: `
      VARANGIAN TRADE ROUTES DIAGRAM
      ┌─────────────────────────────────────────────────────────────┐
      │                    BALTIC SEA                               │
      │                        │                                    │
      │            ┌───────────┴───────────┐                       │
      │            ▼                       ▼                       │
      │      [NOVGOROD]              [STARAYA LADOGA]              │
      │            │                       │                       │
      │            │    ═══ VOLOK ═══     │                       │
      │            │    (Log Rollers)      │                       │
      │            ▼                       ▼                       │
      │      [SMOLENSK]             [VOLGA HEADWATERS]            │
      │            │                       │                       │
      │    DNIEPER │               VOLGA   │                       │
      │     RIVER  │               RIVER   │                       │
      │            ▼                       ▼                       │
      │        [KIEV]              [BULGAR]                        │
      │            │                       │                       │
      │            ▼                       ▼                       │
      │      BLACK SEA              CASPIAN SEA                    │
      │            │                       │                       │
      │            ▼                       ▼                       │
      │    CONSTANTINOPLE            PERSIA/BAGHDAD               │
      │                                                            │
      │  ════════════════════════════════════════════════════════ │
      │  PORTAGE DETAIL:                                          │
      │                                                            │
      │    River A ~~~●━━━━━━━━━━━━━━━●~~~ River B                │
      │              ↑                ↑                            │
      │         Unload            Reload                          │
      │              └───────┬───────┘                            │
      │                      │                                    │
      │         [Log Rollers on Cleared Path]                     │
      │         ○═══○═══○═══○═══○═══○═══○                         │
      │              ←── Ship on Rollers ──→                      │
      │                                                            │
      └─────────────────────────────────────────────────────────────┘
    `
  },

  // ----------------------------------------------------------
  // 2. LUKYANOV WATER INTEGRATOR
  // ----------------------------------------------------------
  {
    id: "water-integrator",
    name: "Lukyanov Water Integrator Computer",
    civilizationId: "russian-empire",
    period: "1936 CE",
    era: "modern",
    category: "measurement",
    rarity: "legendary",
    description: "Vladimir Lukyanov invented the world's first computer capable of solving partial differential equations using water flow through interconnected tubes. The machine used principles of fluid dynamics to physically model heat transfer, concrete curing, and other complex phenomena.",
    
    technicalSpecs: {
      dimensions: "2m × 3m × 1.5m typical installation",
      materials: ["Glass tubes", "Precision valves", "Calibrated tanks", "Water"],
      capacity: "Solve systems of PDEs in real-time",
      engineering: "Hydraulic resistance = mathematical coefficient"
    },
    
    howItWorks: `
      WATER INTEGRATOR OPERATING PRINCIPLES:
      
      1. PHYSICAL-MATHEMATICAL ANALOGY
         - Water level in tanks = variable values
         - Flow rate between tanks = rate of change (derivatives)
         - Tube resistance = equation coefficients
         - Tank capacity = integration constants
      
      2. SYSTEM COMPONENTS
         ┌──────────────────────────────────────┐
         │  INPUT TANKS: Set initial conditions │
         │       ↓                              │
         │  TUBE NETWORK: Coefficients encoded  │
         │       ↓                              │
         │  INTEGRATION TANKS: Compute integrals│
         │       ↓                              │
         │  OUTPUT TANKS: Read solutions        │
         └──────────────────────────────────────┘
      
      3. EQUATION ENCODING
         - Adjust tube diameters for coefficients
         - Set valve positions for boundary conditions
         - Tank heights represent initial values
         - Time evolution = physical water flow
      
      4. READING SOLUTIONS
         - Measure water levels at intervals
         - Record on calibrated scales
         - Plot solution curves directly
         - Accuracy: ±2-3% of analytical solutions
      
      5. APPLICATIONS SOLVED
         - Heat conduction in concrete (original purpose)
         - Thermal stress in dam construction
         - Ground temperature distributions
         - Permafrost thawing predictions
    `,
    
    whyItMattered: "Enabled Soviet engineers to solve complex thermal problems for massive construction projects decades before digital computers were available. Used extensively in dam construction, permafrost engineering, and industrial processes throughout the Soviet era.",
    
    challenges: [
      "Maintaining precise water temperatures",
      "Preventing evaporation during long computations",
      "Calibrating resistance networks accurately",
      "Scaling results to real-world dimensions"
    ],
    
    legacy: "Used in Soviet engineering until the 1980s, long after digital computers were available, because engineers trusted its physical intuition. Represents a philosophical bridge between physical modeling and computational simulation—the ancestor of modern CFD and SWMM.",
    
    robertsNote: "This is essentially a physical SWMM model! Lukyanov used actual fluid mechanics to compute solutions to differential equations. When I run a SWMM simulation, I'm doing digitally what this machine did with real water. It's the most literal possible example of 'computational fluid dynamics.'",
    
    swmmRelevance: "Direct ancestor of numerical hydraulic modeling. Demonstrates that fluid behavior can represent mathematical solutions—the core principle underlying SWMM's routing algorithms.",
    
    coordinates: { lat: 55.7558, lng: 37.6173 }, // Moscow
    
    images: [],
    
    diagramDescription: `
      LUKYANOV WATER INTEGRATOR SCHEMATIC
      ┌─────────────────────────────────────────────────────────────┐
      │                                                             │
      │   MATHEMATICAL EQUATION:  ∂²T/∂x² = (1/α)(∂T/∂t)          │
      │   (Heat Conduction - Fourier's Equation)                   │
      │                                                             │
      │   PHYSICAL ANALOG:                                          │
      │                                                             │
      │   [T₁]     [T₂]     [T₃]     [T₄]     [T₅]                │
      │    │        │        │        │        │                   │
      │    ├────R───┼────R───┼────R───┼────R───┤                   │
      │    │        │        │        │        │                   │
      │   ─┴─      ─┴─      ─┴─      ─┴─      ─┴─                  │
      │   │C│      │C│      │C│      │C│      │C│                  │
      │   ─┬─      ─┬─      ─┬─      ─┬─      ─┬─                  │
      │    │        │        │        │        │                   │
      │   ═╧════════╧════════╧════════╧════════╧═                  │
      │                 COMMON BASELINE                             │
      │                                                             │
      │   WHERE:                                                    │
      │   [Tₙ] = Water tanks (height = temperature value)          │
      │   R = Tube resistance (∝ thermal conductivity)             │
      │   C = Tank capacity (∝ thermal mass)                       │
      │                                                             │
      │   ─────────────────────────────────────────────────────    │
      │                                                             │
      │   FULL INSTALLATION LAYOUT:                                │
      │                                                             │
      │   ┌─────────┐    ┌─────────────────┐    ┌─────────┐       │
      │   │ INPUT   │    │   TUBE MATRIX   │    │ OUTPUT  │       │
      │   │ TANKS   │───▶│   (Equation     │───▶│ TANKS   │       │
      │   │         │    │   Coefficients) │    │         │       │
      │   │ ▓▓▓▓▓▓▓ │    │   ╔═══╦═══╦═══╗ │    │ ▓▓▓     │       │
      │   │ ▓▓▓▓▓   │    │   ║   ║   ║   ║ │    │ ▓▓▓▓▓   │       │
      │   │ ▓▓▓     │    │   ╠═══╬═══╬═══╣ │    │ ▓▓▓▓    │       │
      │   └─────────┘    │   ║   ║   ║   ║ │    └─────────┘       │
      │                  │   ╚═══╩═══╩═══╝ │                      │
      │   Initial        └─────────────────┘    Solution          │
      │   Conditions                            Curves            │
      │                                                             │
      │   READING SCALE:                                           │
      │   ┌────┬────┬────┬────┬────┐                               │
      │   │100°│ 80°│ 60°│ 40°│ 20°│  ← Calibrated to °C          │
      │   └────┴────┴────┴────┴────┘                               │
      │                                                             │
      └─────────────────────────────────────────────────────────────┘
    `
  },

  // ----------------------------------------------------------
  // 3. WHITE SEA-BALTIC CANAL (BELOMOR)
  // ----------------------------------------------------------
  {
    id: "belomor-canal",
    name: "White Sea-Baltic Canal (Belomorkanal)",
    civilizationId: "russian-empire",
    period: "1931-1933 CE",
    era: "modern",
    category: "transport",
    rarity: "epic",
    description: "A 227-kilometer canal connecting the White Sea to the Baltic Sea through Lake Onega. Built in just 20 months using primarily manual labor, it features 19 locks, 15 dams, and 49 other hydraulic structures. One of the first Soviet megaprojects and part of the Unified Deep Water System.",
    
    technicalSpecs: {
      dimensions: "227 km length, 3.65m minimum depth, 36m bottom width",
      materials: ["Timber crib locks", "Earth dams", "Granite spillways"],
      capacity: "3,000-ton vessels (originally), upgraded to 5,000-ton",
      engineering: "19 locks with total lift of 102 meters"
    },
    
    howItWorks: `
      BELOMOR CANAL HYDRAULIC SYSTEM:
      
      1. ROUTE PROFILE (North to South)
         ┌──────────────────────────────────────────┐
         │                                          │
         │  WHITE SEA (0m)                          │
         │       ↓                                  │
         │  Northern Slope: 7 locks ascending       │
         │       ↓                                  │
         │  WATERSHED SUMMIT: +102m elevation       │
         │       ↓                                  │
         │  Southern Slope: 12 locks descending     │
         │       ↓                                  │
         │  LAKE ONEGA → Baltic Sea                 │
         │                                          │
         └──────────────────────────────────────────┘
      
      2. LOCK OPERATION
         - Chamber dimensions: 135m × 14.3m
         - Gate type: Timber miter gates
         - Fill time: 8-12 minutes per lock
         - Transit time: 10-15 hours full passage
      
      3. WATER SUPPLY
         - Summit level fed by natural lakes
         - Povenets reservoir regulates flow
         - Seasonal water management critical
         - Ice operation: November-April closed
      
      4. STRUCTURAL INNOVATIONS
         - Timber crib construction (not concrete)
         - Minimal excavation through rock
         - Natural lakes incorporated as reaches
         - Earth dams with clay cores
      
      5. MODERN UPGRADES
         - Concrete lock rehabilitation (1970s-2000s)
         - Depth increased to 4m
         - Electronic control systems
         - Year-round navigation attempted
    `,
    
    whyItMattered: "Provided strategic naval access between Baltic and Arctic fleets, essential for WWII defense. Demonstrated Soviet capability for massive infrastructure projects. Reduced shipping distance from Leningrad to Arkhangelsk by 4,000 km.",
    
    challenges: [
      "Extreme speed of construction (20 months)",
      "Limited machinery—primarily manual labor",
      "Harsh subarctic climate",
      "Complex geology (granite, marshland, permafrost)",
      "Ethical issues: constructed using forced labor"
    ],
    
    legacy: "First link in the Unified Deep Water System that eventually connected five seas. Set template for Soviet canal construction methods. Remains in active use, carrying 400,000+ tons annually. A controversial monument to both engineering achievement and human cost.",
    
    robertsNote: "When modeling this system in SWMM, the 19-lock staircase is fascinating—each lock is essentially a storage node with controlled outlets. The timber crib construction shows how much can be achieved with limited materials when you understand hydraulic principles.",
    
    swmmRelevance: "Lock systems model as storage nodes with pump curves or rating curves. The summit reservoir demonstrates critical water balance calculations for canal operation.",
    
    coordinates: { lat: 64.5283, lng: 34.7683 }, // Belomorsk
    
    images: [],
    
    diagramDescription: `
      WHITE SEA-BALTIC CANAL PROFILE
      ┌─────────────────────────────────────────────────────────────┐
      │                                                             │
      │  LONGITUDINAL PROFILE (227 km total)                       │
      │                                                             │
      │  Elevation                                                  │
      │  (meters)                                                   │
      │     ▲                                                       │
      │ 110─┤                    ┌─────┐                           │
      │     │                   /       \  SUMMIT                   │
      │ 100─┤              ┌───┘  102m   └───┐                     │
      │     │             /                   \                     │
      │  90─┤           ┌┘                     └┐                  │
      │     │          ↗                         ↘                 │
      │  80─┤        ┌┘   7 LOCKS                 └┐  12 LOCKS    │
      │     │       ↗     (ASCENDING)               ↘ (DESCENDING)│
      │  70─┤     ┌┘                                  └┐           │
      │     │    ↗                                      ↘          │
      │  60─┤  ┌┘                                        └┐        │
      │     │ ↗                                            ↘       │
      │  50─┤┘                                              └┐     │
      │     │                                                 ↘    │
      │  40─┤                                                  └┐  │
      │     │                                                    ↘ │
      │  30─┤                                                     └│
      │     │                                                      │
      │  20─┤                                                      │
      │     │                                                      │
      │  10─┤                                                      │
      │     │                                                      │
      │   0─┼────────────────────────────────────────────────────▶│
      │     │                                                      │
      │     WHITE                                        LAKE      │
      │     SEA                                          ONEGA     │
      │     ↓                                              ↓       │
      │   [═══]                                          [═══]     │
      │                                                            │
      │  ═══════════════════════════════════════════════════════  │
      │                                                            │
      │  LOCK DETAIL (Typical):                                    │
      │                                                            │
      │       UPPER POOL                    LOWER POOL             │
      │      ~~~~~~~~~~~~                  ~~~~~~~~~~~~            │
      │   ════╗        ╔════════════════╗        ╔════             │
      │       ║  GATE  ║    CHAMBER     ║  GATE  ║                 │
      │       ║   ▼    ║   135m × 14m   ║   ▼    ║                 │
      │   ════╝   │    ╚════════════════╝   │    ╚════             │
      │           │          +7m            │                      │
      │           └──── LIFT PER LOCK ──────┘                      │
      │                                                            │
      └─────────────────────────────────────────────────────────────┘
    `
  },

  // ----------------------------------------------------------
  // 4. MOSCOW-VOLGA CANAL
  // ----------------------------------------------------------
  {
    id: "moscow-volga-canal",
    name: "Moscow-Volga Canal (Moscow Canal)",
    civilizationId: "russian-empire",
    period: "1932-1937 CE",
    era: "modern",
    category: "transport",
    rarity: "epic",
    description: "A 128-kilometer canal that brings Volga River water to Moscow, solving the city's chronic water shortage. Features 11 locks, 8 hydroelectric stations, and transformed Moscow into a 'Port of Five Seas' by connecting it to the White, Baltic, Caspian, Azov, and Black Seas.",
    
    technicalSpecs: {
      dimensions: "128 km length, 5.5m depth, 85m surface width",
      materials: ["Reinforced concrete", "Granite facing", "Steel gates"],
      capacity: "Ships to 5,000 tons; water supply 1.8 billion m³/year",
      engineering: "38m total lift; 8 hydroelectric stations totaling 50 MW"
    },
    
    howItWorks: `
      MOSCOW CANAL SYSTEM OPERATION:
      
      1. WATER SUPPLY FUNCTION
         - Volga water pumped 38m uphill to Moscow
         - Provides 60% of Moscow's drinking water
         - Flow: 60 m³/second average
         - Reservoir storage: 800 million m³
      
      2. LOCK STAIRCASE
         Northern Slope (Volga to Summit):
         ├── Lock 1: Ivankovo (+8m)
         ├── Lock 2: (+7m)
         ├── Lock 3: (+8m)
         ├── Lock 4: (+8m)
         └── Lock 5: (+7m) ═══ SUMMIT REACH
         
         Southern Slope (Summit to Moscow):
         ├── Lock 6: (-8m)
         ├── Lock 7: (-8m)
         ├── Lock 8: (-8m)
         ├── Lock 9: (-8m)
         └── Locks 10-11: Moscow River connection
      
      3. PUMPING SYSTEM
         - Ivankovo Pumping Station: 3 × 30 MW
         - Water lifted against natural gradient
         - Hydropower on descent recovers energy
         - Net energy: roughly balanced
      
      4. RESERVOIR CASCADE
         ┌─────────────────────────────────────┐
         │  IVANKOVO (Moscow Sea)              │
         │  ├── Area: 327 km²                  │
         │  ├── Volume: 1.12 km³               │
         │  └── Created by dam on Volga        │
         │                                      │
         │  KLYAZMA → PYALOVSKOYE → IKSHA     │
         │  (Chain of regulating reservoirs)   │
         │                                      │
         │  KHIMKI                             │
         │  └── Moscow terminal reservoir       │
         └─────────────────────────────────────┘
      
      5. NAVIGATION SEASONS
         - Open: Late April to Early November
         - Ice-free period: ~200 days
         - Winter: Channel frozen, pumping continues
    `,
    
    whyItMattered: "Transformed Moscow from a city with inadequate water into a major port. The canal's water supply function saved millions during WWII when besieged Leningrad couldn't receive Volga water. Enabled Moscow's growth to 12+ million residents.",
    
    challenges: [
      "Pumping water 38m uphill against gravity",
      "Maintaining pressure head for city distribution",
      "Coordinating navigation with water supply",
      "Managing ice in northern sections"
    ],
    
    legacy: "Moscow Canal proved that massive infrastructure could serve multiple purposes: navigation, water supply, hydropower, and flood control. Its multi-function design influenced Soviet water planning for decades.",
    
    robertsNote: "The Moscow Canal is essentially a giant pump-and-treat system. In SWMM terms, it's a forced main lifting water from the Volga to a summit reservoir, then gravity-flowing to consumers. The lock operation for navigation adds complexity—it's water supply and transport infrastructure combined.",
    
    swmmRelevance: "Models pump stations, reservoir routing, multiple-purpose operation rules, and gravity vs. pumped flow transitions",
    
    coordinates: { lat: 56.7324, lng: 37.1842 }, // Dubna (canal start)
    
    images: [],
    
    diagramDescription: `
      MOSCOW-VOLGA CANAL SYSTEM
      ┌─────────────────────────────────────────────────────────────┐
      │                                                             │
      │  SYSTEM SCHEMATIC:                                         │
      │                                                             │
      │       VOLGA RIVER                                          │
      │  ════════════╗                                             │
      │              ║                                              │
      │         [IVANKOVO DAM]                                     │
      │              ║                                              │
      │       ╔══════╩══════╗                                      │
      │       ║  IVANKOVO   ║ ◄── "Moscow Sea"                    │
      │       ║  RESERVOIR  ║     327 km² surface                  │
      │       ╚══════╦══════╝                                      │
      │              ║                                              │
      │    ┌─────────╨─────────┐                                   │
      │    │  PUMPING STATION  │ 90 MW (lifts 38m)                │
      │    └─────────╥─────────┘                                   │
      │              ║                                              │
      │        LOCK 1 ╠═╗                                          │
      │              ║  ║                                           │
      │        LOCK 2 ╠═╣ NORTHERN SLOPE                          │
      │              ║  ║ (5 locks ascending)                       │
      │        LOCK 3 ╠═╣                                          │
      │              ║  ║                                           │
      │        LOCK 4 ╠═╣                                          │
      │              ║  ║                                           │
      │        LOCK 5 ╠═╝                                          │
      │              ║                                              │
      │    ══════════╬══════════  SUMMIT REACH (+38m)             │
      │              ║                                              │
      │        LOCK 6 ╠═╗                                          │
      │              ║  ║                                           │
      │        LOCK 7 ╠═╣ SOUTHERN SLOPE                          │
      │              ║  ║ (5 locks descending)                      │
      │        LOCK 8 ╠═╣                                          │
      │              ║  ║                                           │
      │        LOCK 9 ╠═╝                                          │
      │              ║                                              │
      │       ╔══════╩══════╗                                      │
      │       ║   KHIMKI    ║                                      │
      │       ║  RESERVOIR  ║ ◄── Terminal storage                │
      │       ╚══════╦══════╝                                      │
      │              ║                                              │
      │    ┌─────────╨─────────┐                                   │
      │    │  WATER TREATMENT  │ 60% of Moscow supply             │
      │    └─────────╥─────────┘                                   │
      │              ║                                              │
      │       ════╦══╩══╦════                                      │
      │           ║     ║                                          │
      │       [MOSCOW RIVER]                                       │
      │                                                             │
      │  ─────────────────────────────────────────────────────────│
      │  WATER BALANCE:                                            │
      │  ┌─────────────┬───────────────────┐                      │
      │  │ INPUT       │ 1.8 billion m³/yr │                      │
      │  │ To City     │ 1.2 billion m³/yr │                      │
      │  │ Lockage     │ 0.3 billion m³/yr │                      │
      │  │ Evap/Other  │ 0.3 billion m³/yr │                      │
      │  └─────────────┴───────────────────┘                      │
      │                                                             │
      └─────────────────────────────────────────────────────────────┘
    `
  },

  // ----------------------------------------------------------
  // 5. VOLGA-DON CANAL
  // ----------------------------------------------------------
  {
    id: "volga-don-canal",
    name: "Volga-Don Ship Canal",
    civilizationId: "russian-empire",
    period: "1948-1952 CE",
    era: "modern",
    category: "transport",
    rarity: "epic",
    description: "A 101-kilometer canal connecting Europe's two largest rivers—the Volga and Don—completing the five-sea connection. Features 13 locks, 3 reservoirs, and monumental Stalinist architecture at its entrance.",
    
    technicalSpecs: {
      dimensions: "101 km length, 3.5m depth, 38m bottom width",
      materials: ["Reinforced concrete", "Steel gates", "Granite monuments"],
      capacity: "5,000-ton vessels, 16.5 million tons/year",
      engineering: "13 locks; 88m total lift Volga side, 44m descent Don side"
    },
    
    howItWorks: `
      VOLGA-DON CANAL OPERATION:
      
      1. GEOGRAPHIC CHALLENGE
         - Volga flows to Caspian (below sea level)
         - Don flows to Black Sea (sea level)
         - Watershed divide: 88m above Volga, 44m above Don
         - Canal crosses divide via lock staircase
      
      2. LOCK CONFIGURATION
         Volga Side (9 locks, ascending 88m):
         ├── Locks 1-9: Climb from Volga level
         └── Total lift: 88 meters
         
         SUMMIT: Tsimlyansk Reservoir
         
         Don Side (4 locks, descending 44m):
         ├── Locks 10-13: Descend to Don level
         └── Total drop: 44 meters
      
      3. WATER SUPPLY
         - Tsimlyansk Reservoir: 23.9 km³ volume
         - Provides water for lockage and irrigation
         - Don River supplies summit level
         - Volga side requires upward pumping
      
      4. FIVE-SEA CONNECTION COMPLETED
         ┌─────────────────────────────────────┐
         │  WHITE SEA (Belomor)                │
         │       ↓                              │
         │  BALTIC SEA (Ladoga-Baltic)         │
         │       ↓                              │
         │  CASPIAN SEA (Volga)                │
         │       ↓                              │
         │  ════ VOLGA-DON CANAL ════          │
         │       ↓                              │
         │  SEA OF AZOV (Don)                  │
         │       ↓                              │
         │  BLACK SEA                          │
         └─────────────────────────────────────┘
      
      5. NAVIGATION
         - Transit time: 10-12 hours
         - Season: April-November
         - Traffic: 5,000+ vessel transits/year
    `,
    
    whyItMattered: "Completed a 2,000-year dream—connecting the Volga and Don rivers (first attempted by Turks in 1569, Peter the Great in 1696). Enabled ships to sail from St. Petersburg to Rostov-on-Don, from the Arctic to the Mediterranean.",
    
    challenges: [
      "Asymmetric elevation (88m vs 44m lifts)",
      "Semi-arid climate at summit",
      "Water supply from finite Don River",
      "Post-WWII resource constraints"
    ],
    
    legacy: "The canal's completion was a propaganda triumph, announced on Stalin's birthday. Its monumental architecture (including a 40m Lenin statue) contrasts with the functional Belomor Canal. Still carries significant cargo including oil, grain, and construction materials.",
    
    robertsNote: "The asymmetric lock layout is hydraulically interesting—more locks on the Volga side because it's lower relative to the divide. In SWMM, you'd model this as a summit reservoir with different outlet configurations on each side. The water balance depends entirely on Don River inflows.",
    
    swmmRelevance: "Models asymmetric lock systems, summit reservoir water balance, and multi-slope canal hydraulics",
    
    coordinates: { lat: 48.7194, lng: 44.5089 }, // Volgograd
    
    images: [],
    
    diagramDescription: `
      VOLGA-DON CANAL PROFILE
      ┌─────────────────────────────────────────────────────────────┐
      │                                                             │
      │  CROSS-SECTION (101 km):                                   │
      │                                                             │
      │  Elevation                                                  │
      │     ▲                                                       │
      │     │                    ╔═══════════════╗                  │
      │  88m┤        ┌──────────╢  TSIMLYANSK   ╟──────────┐       │
      │     │       ╱           ║  RESERVOIR    ║           ╲      │
      │  80m┤      ╱            ╚═══════════════╝            ╲     │
      │     │     ╱ Lock 9                         Lock 10    ╲    │
      │  70m┤    ╱                                             ╲   │
      │     │   ╱ Lock 8                              Lock 11   ╲  │
      │  60m┤  ╱                                                 ╲ │
      │     │ ╱ Lock 7                                   Lock 12  ╲│
      │  50m┤╱                                                     │
      │     │ Lock 6                                        Lock 13│
      │  44m┤─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─│
      │     │ Lock 5                                    DON RIVER  │
      │  30m┤                                           ~~~~~~~~~~│
      │     │ Lock 4                                               │
      │  20m┤                                                      │
      │     │ Lock 3                                               │
      │  10m┤ Lock 2                                               │
      │     │ Lock 1                                               │
      │   0m┼══════════════════════════════════════════════════════│
      │     │ VOLGA                                                │
      │ -28m│ (Caspian = -28m below sea level)                    │
      │     │                                                      │
      │     └──────────────────────────────────────────────────────│
      │      ◄──── 9 LOCKS ────►│◄───── 4 LOCKS ────►             │
      │          (88m rise)     │    (44m descent)                 │
      │                                                             │
      │  ═══════════════════════════════════════════════════════  │
      │                                                             │
      │  FIVE-SEA CONNECTION:                                      │
      │                                                             │
      │    ┌───────────┐                                           │
      │    │ WHITE SEA │                                           │
      │    └─────┬─────┘                                           │
      │          │ Belomor Canal                                   │
      │    ┌─────▼─────┐                                           │
      │    │  BALTIC   │                                           │
      │    └─────┬─────┘                                           │
      │          │ Volga-Baltic                                    │
      │    ┌─────▼─────┐      ┌───────────┐                       │
      │    │  CASPIAN  │──────│  VOLGA    │                       │
      │    └───────────┘      └─────┬─────┘                       │
      │                            │ ◄── Volga-Don Canal          │
      │                       ┌─────▼─────┐                       │
      │                       │    DON    │                       │
      │                       └─────┬─────┘                       │
      │                       ┌─────▼─────┐    ┌───────────┐      │
      │                       │ AZOV SEA  │────│ BLACK SEA │      │
      │                       └───────────┘    └───────────┘      │
      │                                                             │
      └─────────────────────────────────────────────────────────────┘
    `
  },

  // ----------------------------------------------------------
  // 6. PETER THE GREAT'S LADOGA CANAL
  // ----------------------------------------------------------
  {
    id: "ladoga-canal",
    name: "Ladoga Bypass Canal (Peter's Canal)",
    civilizationId: "russian-empire",
    period: "1719-1731 CE",
    era: "medieval",
    category: "transport",
    rarity: "rare",
    description: "A 117-kilometer canal bypassing the stormy Lake Ladoga, connecting the Neva and Volkhov rivers. Russia's first major canal project, ordered by Peter the Great to create a safe route for grain and timber shipments to the new capital of St. Petersburg.",
    
    technicalSpecs: {
      dimensions: "117 km length, 2.1m depth, 21m width",
      materials: ["Earth embankments", "Timber locks", "Stone facing"],
      capacity: "Small river barges",
      engineering: "Minimal locks—largely level route along lakeshore"
    },
    
    howItWorks: `
      LADOGA CANAL FUNCTION:
      
      1. PROBLEM SOLVED
         - Lake Ladoga = Europe's largest lake
         - Severe storms sink hundreds of boats annually
         - Critical supply route to St. Petersburg
         - Needed protected passage along shore
      
      2. CANAL ALIGNMENT
         ┌─────────────────────────────────────────┐
         │                                          │
         │        LAKE LADOGA                      │
         │      (Stormy, Dangerous)                │
         │  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       │
         │  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       │
         │                                          │
         │  ═══════════════════════════════════   │
         │  CANAL (Safe Passage Along Shore)       │
         │  ═══════════════════════════════════   │
         │                                          │
         │  NEVA R. ←───────────────────→ VOLKHOV │
         │                                          │
         └─────────────────────────────────────────┘
      
      3. ENGINEERING CHALLENGES
         - Soft lakeshore soils
         - High water table
         - Timber pile foundations
         - Peter personally supervised design
      
      4. CONSTRUCTION
         - Started 1719, finished 1731
         - Peter died (1725) before completion
         - Employed 30,000+ workers
         - High casualty rate from disease
      
      5. LATER EXPANSIONS
         - New Ladoga Canal (1861-1866): 110 km
         - Deeper, wider, handles steamships
         - Old canal partially abandoned
    `,
    
    whyItMattered: "Demonstrated Russia could execute European-scale engineering. Enabled reliable supply of food and materials to St. Petersburg. Established Russian canal engineering traditions that culminated in Soviet megaprojects 200 years later.",
    
    challenges: [
      "Swampy, unstable terrain",
      "Harsh climate limiting construction season",
      "Lack of experienced engineers",
      "High worker mortality"
    ],
    
    legacy: "First of Russia's major canal projects. Peter's personal involvement made canal-building a matter of national prestige. The route remains in use today, continuously upgraded over 300 years.",
    
    robertsNote: "Peter's Canal is fascinating because it solves a problem by avoidance—rather than crossing the lake or improving ships, build alongside it. This 'bypass' philosophy influenced later Russian canal routing decisions.",
    
    swmmRelevance: "Models lake-adjacent channel routing, wave protection structures, and groundwater infiltration in high water table environments",
    
    coordinates: { lat: 60.0500, lng: 32.0000 }, // Lake Ladoga shore
    
    images: [],
    
    diagramDescription: `
      LADOGA CANAL SYSTEM
      ┌─────────────────────────────────────────────────────────────┐
      │                                                             │
      │  PLAN VIEW:                                                 │
      │                                                             │
      │           N                                                 │
      │           ▲                                                 │
      │           │                                                 │
      │    ┌──────┴──────┐                                         │
      │    │             │                                         │
      │    │   LAKE      │                                         │
      │    │  LADOGA     │                                         │
      │    │             │                                         │
      │    │ ≈≈≈≈≈≈≈≈≈≈ │ ◄── Stormy waters                       │
      │    │ ≈≈≈≈≈≈≈≈≈≈ │     (100+ ships lost/year)              │
      │    │ ≈≈≈≈≈≈≈≈≈≈ │                                         │
      │    │             │                                         │
      │    └──────┬──────┘                                         │
      │           │                                                 │
      │  ═══╦═════╧═════════════════════════════════════════╦═══  │
      │     ║              LADOGA CANAL                      ║     │
      │     ║          (Protected passage)                   ║     │
      │     ║              117 km                            ║     │
      │  ═══╩═══════════════════════════════════════════════╩═══  │
      │     │                                               │      │
      │     │                                               │      │
      │ ┌───▼───┐                                     ┌─────▼────┐│
      │ │ NEVA  │                                     │ VOLKHOV  ││
      │ │ RIVER │                                     │  RIVER   ││
      │ └───┬───┘                                     └────┬─────┘│
      │     │                                              │      │
      │     ▼                                              │      │
      │ ┌───────────────┐                           ┌──────▼─────┐│
      │ │ ST. PETERSBURG │◄── Grain, timber ────────│  MOSCOW    ││
      │ │  (New Capital) │    supplies from         │  INTERIOR  ││
      │ └───────────────┘    the interior           └────────────┘│
      │                                                             │
      │  ════════════════════════════════════════════════════════ │
      │                                                             │
      │  CROSS SECTION:                                            │
      │                                                             │
      │        Lake Ladoga                                         │
      │  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈                           │
      │  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈                           │
      │           │                                                │
      │           │ Embankment                                     │
      │      ╔════╧════╗                                           │
      │      ║ CANAL   ║ ← 21m wide, 2m deep                      │
      │      ║ ~~~~~~~ ║                                           │
      │      ╚════╤════╝                                           │
      │           │                                                │
      │      ░░░░░│░░░░░  Shore                                   │
      │                                                             │
      └─────────────────────────────────────────────────────────────┘
    `
  },

  // ----------------------------------------------------------
  // 7. VOLGA CASCADE DAMS
  // ----------------------------------------------------------
  {
    id: "volga-cascade",
    name: "Volga-Kama Cascade",
    civilizationId: "russian-empire",
    period: "1930s-1980s CE",
    era: "modern",
    category: "storage",
    rarity: "legendary",
    description: "A system of 11 major dams and reservoirs transforming Europe's largest river into a staircase of regulated lakes. The cascade provides 40+ GW of hydropower, irrigation for millions of hectares, and navigation depth throughout the 3,500 km river system.",
    
    technicalSpecs: {
      dimensions: "11 reservoirs; total storage 182 km³",
      materials: ["Concrete gravity dams", "Earth-fill dams", "Steel turbines"],
      capacity: "40,000+ MW hydroelectric; 3.5m navigation depth",
      engineering: "Navigation locks at each dam; fish ladders (mostly ineffective)"
    },
    
    howItWorks: `
      VOLGA CASCADE SYSTEM:
      
      1. DAM/RESERVOIR SEQUENCE (Upstream to Downstream)
         ┌─────────────────────────────────────────────┐
         │  1. RYBINSK (1941)     - 25.4 km³          │
         │  2. GORKY (1955)       - 8.7 km³           │
         │  3. CHEBOKSARY (1980)  - 5.7 km³           │
         │  4. KUIBYSHEV (1955)   - 57.3 km³ ★LARGEST│
         │  5. SARATOV (1967)     - 12.4 km³          │
         │  6. VOLGOGRAD (1958)   - 31.5 km³          │
         │                                             │
         │  KAMA RIVER TRIBUTARIES:                   │
         │  7. KAMA (1954)        - 12.2 km³          │
         │  8. VOTKINSK (1961)    - 9.4 km³           │
         │  9. NIZHNEKAMSK (1979) - 2.9 km³           │
         │  10. PAVLOVSK (1959)   - 1.4 km³           │
         │                                             │
         │  Total: ~180 km³ (3× Lake Erie volume)     │
         └─────────────────────────────────────────────┘
      
      2. HYDROELECTRIC OUTPUT
         - Total installed: 10,500 MW
         - Annual generation: 40+ TWh
         - Largest station: Volgograd (2,650 MW)
      
      3. NAVIGATION FUNCTION
         - Minimum depth: 3.5m maintained
         - Lock dimensions: 290m × 30m typical
         - Transit time: 7-10 days St. Petersburg to Astrakhan
      
      4. IRRIGATION SUPPLY
         - 5 million hectares irrigated
         - Volga-Don Canal fed from system
         - Municipal water for 60 million people
      
      5. ECOLOGICAL IMPACT
         - Sturgeon spawning reduced 90%+
         - Water temperature altered
         - Flooded area: 22,000 km²
         - 700+ settlements relocated
    `,
    
    whyItMattered: "Transformed the Volga from a seasonal, flood-prone river into a regulated waterway. Powered Soviet industrialization. Created the world's largest reservoir system. However, came at enormous environmental and human cost.",
    
    challenges: [
      "Relocating millions of people",
      "Irreversible ecological damage to sturgeon",
      "Managing cascade during floods and droughts",
      "Coordinating hydropower vs navigation vs irrigation"
    ],
    
    legacy: "The cascade remains Russia's hydraulic backbone, but is increasingly seen as an ecological catastrophe. Modern debates focus on minimum ecological flows and whether some dams should be removed. A cautionary tale of Soviet gigantism.",
    
    robertsNote: "Modeling the Volga Cascade in SWMM requires treating each reservoir as a storage node with controlled outflows. The operational rules—balancing power generation, navigation levels, flood control, and downstream releases—are incredibly complex. It's essentially the world's largest SWMM model in real life.",
    
    swmmRelevance: "Cascade routing, reservoir operations, minimum flow requirements, multi-purpose dam operation rules",
    
    coordinates: { lat: 53.2000, lng: 50.1500 }, // Kuibyshev Reservoir
    
    images: [],
    
    diagramDescription: `
      VOLGA-KAMA CASCADE PROFILE
      ┌─────────────────────────────────────────────────────────────┐
      │                                                             │
      │  LONGITUDINAL PROFILE (3,530 km):                          │
      │                                                             │
      │  Elevation                                                  │
      │  (meters)                                                   │
      │     ▲                                                       │
      │ 200─┤ SOURCE                                               │
      │     │ (Valdai Hills)                                       │
      │     │    ╲                                                  │
      │ 150─┤     ╲                                                │
      │     │      ╲                                               │
      │     │       ╲___                                           │
      │ 100─┤           ╲___[RYBINSK]                              │
      │     │               ╲___                                   │
      │     │                   ╲___[GORKY]                        │
      │  50─┤                       ╲___[CHEBOKSARY]              │
      │     │                           ╲___                       │
      │     │                               ╲___[KUIBYSHEV]       │
      │   0─┤                                   ╲___[SARATOV]     │
      │     │                                       ╲___           │
      │     │                                           ╲[VOLGOGRAD]
      │ -28─┤                                            ╲___      │
      │     │                                                ╲___  │
      │     │                                               CASPIAN│
      │     └──────────────────────────────────────────────────────│
      │        0      500    1000    1500    2000    2500    3530  │
      │                      Distance (km)                         │
      │                                                             │
      │  ═════════════════════════════════════════════════════════│
      │                                                             │
      │  DAM CROSS-SECTION (Typical):                              │
      │                                                             │
      │        ▼ Reservoir (Full Pool)                             │
      │  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈                         │
      │       ╔═══════════════════════════╗                       │
      │       ║                           ║                       │
      │       ║      CONCRETE DAM         ║                       │
      │       ║   ┌─────────────────┐     ║                       │
      │       ║   │  POWERHOUSE     │     ║                       │
      │       ║   │  [⚡] [⚡] [⚡]   │     ║                       │
      │       ║   │  Turbines       │     ║                       │
      │       ║   └────────┬────────┘     ║                       │
      │       ║            │              ║                       │
      │  ═════╬════════════╪══════════════╬═════                  │
      │       ║   LOCK     │   SPILLWAY   ║                       │
      │       ║  ┌─────┐   │   ┌─────┐    ║                       │
      │       ║  │ ▓▓▓ │   │   │     │    ║                       │
      │       ║  │ ▓▓▓ │   ▼   │ ≈≈≈ │    ║  ◄── Tailwater       │
      │  ─────╨──┴─────┴───────┴─────┴────╨─────                  │
      │                                                             │
      │  CASCADE STATISTICS:                                       │
      │  ┌────────────────┬────────────────────┐                  │
      │  │ Total Storage  │ 182 km³            │                  │
      │  │ Power Capacity │ 10,500 MW          │                  │
      │  │ Annual Output  │ 40+ TWh            │                  │
      │  │ Navigation     │ 3.5m minimum depth │                  │
      │  │ Flooded Area   │ 22,000 km²         │                  │
      │  │ Relocated      │ 700+ settlements   │                  │
      │  └────────────────┴────────────────────┘                  │
      │                                                             │
      └─────────────────────────────────────────────────────────────┘
    `
  },

  // ----------------------------------------------------------
  // 8. FIRE-FIGHTING FOAM (1902)
  // ----------------------------------------------------------
  {
    id: "firefighting-foam",
    name: "Fire-Fighting Foam",
    civilizationId: "russian-empire",
    period: "1902 CE",
    era: "modern",
    category: "industrial",
    rarity: "rare",
    description: "Invented by Russian engineer Aleksandr Loran, fire-fighting foam revolutionized the suppression of oil and chemical fires by combining water with foam-producing agents. The foam blankets burning liquids, cutting off oxygen supply while the water content provides cooling.",
    
    technicalSpecs: {
      dimensions: "Variable—foam generators produce 100-1000 L/min",
      materials: ["Water", "Foam concentrate (protein, synthetic)", "Air"],
      capacity: "Expansion ratios 5:1 to 1000:1 depending on type",
      engineering: "Proportioning systems, aspirating nozzles"
    },
    
    howItWorks: `
      FIRE-FIGHTING FOAM PRINCIPLES:
      
      1. FOAM FORMATION
         Water + Concentrate + Air → Foam
         
         ┌─────────────────────────────────────┐
         │  WATER ────┐                        │
         │            │                        │
         │            ▼                        │
         │  ┌─────────────────┐               │
         │  │  PROPORTIONER   │ ◄── Concentrate│
         │  │     3-6%        │               │
         │  └────────┬────────┘               │
         │           │                        │
         │           ▼                        │
         │  ┌─────────────────┐               │
         │  │  FOAM NOZZLE    │ ◄── Air       │
         │  │  (Aspirating)   │               │
         │  └────────┬────────┘               │
         │           │                        │
         │           ▼                        │
         │       FINISHED FOAM                │
         │     ○ ○ ○ ○ ○ ○ ○                 │
         │    ○ ○ ○ ○ ○ ○ ○ ○                │
         │     ○ ○ ○ ○ ○ ○ ○                 │
         └─────────────────────────────────────┘
      
      2. FIRE SUPPRESSION MECHANISM
         - Foam blanket separates fuel from oxygen
         - Water content cools fuel surface
         - Vapor suppression prevents reignition
         - Foam drainage continues cooling
      
      3. FOAM TYPES
         ├── Protein: From animal protein, excellent heat resistance
         ├── Synthetic: AFFF (Aqueous Film-Forming Foam)
         ├── High-Expansion: 200:1 to 1000:1 ratio for flooding
         └── Alcohol-Resistant: For polar solvent fires
      
      4. APPLICATION METHODS
         - Gentle application (roll onto surface)
         - Rain-down (high angle spray)
         - Subsurface injection (tank fires)
         - High-expansion flooding (warehouses)
    `,
    
    whyItMattered: "Water alone is ineffective or dangerous on oil fires (spreads burning fuel). Foam enabled safe suppression of industrial fires, making petroleum industry operations much safer. Standard equipment on every fire truck worldwide.",
    
    challenges: [
      "Maintaining foam stability at high temperatures",
      "Environmental concerns with PFAS-based foams",
      "Proportioning accuracy under field conditions",
      "Foam breakdown on hot surfaces"
    ],
    
    legacy: "Fire-fighting foam has saved countless lives and protected critical infrastructure. However, PFAS chemicals in some foam types are now recognized as environmental pollutants. Modern development focuses on fluorine-free alternatives.",
    
    robertsNote: "From a hydraulics perspective, foam is fascinating—it's a water-based system with dramatically altered flow properties. The expansion ratio and drainage rate determine how long the foam blanket persists. It's essentially controlled water application with an air multiplier.",
    
    swmmRelevance: "Models foam drainage as specialized runoff with altered density and viscosity; containment berms as storage nodes",
    
    coordinates: { lat: 55.7558, lng: 37.6173 }, // Moscow
    
    images: [],
    
    diagramDescription: `
      FIRE-FIGHTING FOAM SYSTEM
      ┌─────────────────────────────────────────────────────────────┐
      │                                                             │
      │  FOAM PRODUCTION SYSTEM:                                   │
      │                                                             │
      │    WATER SUPPLY                FOAM CONCENTRATE            │
      │    (Municipal)                 (3-6% Tank)                 │
      │         │                           │                      │
      │         │                           │                      │
      │         ▼                           ▼                      │
      │    ┌─────────────────────────────────────┐                │
      │    │         PROPORTIONING UNIT          │                │
      │    │  ┌─────────────────────────────┐   │                │
      │    │  │    VENTURI EDUCTOR         │   │                │
      │    │  │    ════╦════               │   │                │
      │    │  │        ║                    │   │                │
      │    │  │   Water║Concentrate        │   │                │
      │    │  │    ───►╠◄───               │   │                │
      │    │  │        ║                    │   │                │
      │    │  │        ▼                    │   │                │
      │    │  │   Mixed Solution           │   │                │
      │    │  └─────────────────────────────┘   │                │
      │    └──────────────┬──────────────────────┘                │
      │                   │                                        │
      │                   ▼                                        │
      │    ┌─────────────────────────────────────┐                │
      │    │         FOAM NOZZLE                 │                │
      │    │  ┌─────────────────────────────┐   │                │
      │    │  │   ┌─────────────────────┐   │   │                │
      │    │  │   │    ASPIRATOR        │   │   │                │
      │    │  │   │    ○ ○ ○ ○ ○        │◄──│───│── AIR         │
      │    │  │   │   ○ ○ ○ ○ ○ ○       │   │   │                │
      │    │  │   │    ○ ○ ○ ○ ○        │   │   │                │
      │    │  │   └────────┬────────────┘   │   │                │
      │    │  └────────────┼────────────────┘   │                │
      │    └───────────────┼────────────────────┘                │
      │                    │                                       │
      │                    ▼                                       │
      │    ┌───────────────────────────────────────┐              │
      │    │          FIRE SUPPRESSION             │              │
      │    │                                       │              │
      │    │    ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○          │              │
      │    │   ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○         │◄── FOAM      │
      │    │    ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○          │    BLANKET   │
      │    │   ═══════════════════════════        │              │
      │    │   🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥          │◄── FUEL     │
      │    │   ═══════════════════════════        │    SURFACE   │
      │    │        (Fire Smothered)              │              │
      │    └───────────────────────────────────────┘              │
      │                                                             │
      │  FOAM EXPANSION RATIOS:                                    │
      │  ┌────────────────┬───────────────────────┐               │
      │  │ Low Expansion  │ 2:1 to 20:1           │               │
      │  │ Medium         │ 20:1 to 200:1         │               │
      │  │ High Expansion │ 200:1 to 1000:1       │               │
      │  └────────────────┴───────────────────────┘               │
      │                                                             │
      └─────────────────────────────────────────────────────────────┘
    `
  },

  // ----------------------------------------------------------
  // 9. ST. PETERSBURG FLOOD BARRIER
  // ----------------------------------------------------------
  {
    id: "petersburg-dam",
    name: "Saint Petersburg Flood Barrier",
    civilizationId: "russian-empire",
    period: "1979-2011 CE",
    era: "modern",
    category: "flood_control",
    rarity: "legendary",
    description: "A 25.4-kilometer dam complex protecting St. Petersburg from Baltic Sea storm surges. The barrier spans the Gulf of Finland with six water-flow openings, two navigation channels, and a flood gate system capable of stopping 5-meter storm surges.",
    
    technicalSpecs: {
      dimensions: "25.4 km length; gates up to 22m high",
      materials: ["Reinforced concrete", "Steel gates", "Rock-fill sections"],
      capacity: "Protects against 1-in-1000-year surge events",
      engineering: "Segment gates, navigation locks, tunnel drainage"
    },
    
    howItWorks: `
      ST. PETERSBURG FLOOD BARRIER:
      
      1. FLOOD THREAT
         - St. Petersburg at sea level on Neva delta
         - Baltic storm surges reach 4+ meters
         - 300+ recorded floods since 1703
         - Most destructive: 1824 (4.21m), 1924 (3.69m)
      
      2. BARRIER CONFIGURATION
         ┌─────────────────────────────────────────┐
         │                                         │
         │         GULF OF FINLAND                 │
         │         (Baltic Sea)                    │
         │                                         │
         │  ════════╦═══╦═══╦═══╦═══╦═══╦════════│
         │          ║   ║   ║   ║   ║   ║         │
         │          ║   ║   ║   ║   ║   ║         │
         │  NORTH   ║ D ║ D ║ D ║ D ║ D ║  SOUTH  │
         │  SECTION ║ 1 ║ 2 ║ 3 ║ 4 ║ 5 ║ SECTION │
         │  (dam)   ║   ║   ║   ║   ║   ║  (dam)  │
         │          ╠═══╬═══╬═══╬═══╬═══╣         │
         │          ║   S1  ║   S2  ║            │
         │          ║ (Ship)║ (Ship)║            │
         │          ╚═══════╩═══════╝            │
         │                                         │
         │          NEVA BAY                      │
         │          (Protected)                   │
         │                                         │
         │     ═════════════════════════          │
         │          ST. PETERSBURG                │
         │                                         │
         └─────────────────────────────────────────┘
         
         D1-D5: Flow-Through Sections with segment gates
         S1-S2: Ship Navigation Openings with lock gates
      
      3. GATE TYPES
         - Segment gates: Rotate up from bottom (64 gates)
         - Navigation gates: Vertical lift (2 openings)
         - Closure time: 1.5-3 hours full barrier
      
      4. OPERATIONS
         - Normal: Gates open for navigation/flow
         - Warning: Monitor Baltic weather systems
         - Closure: Activated ~40 times per year
         - Emergency: Full closure for major storms
      
      5. PERFORMANCE
         - First operational use: 2011
         - Closed 23 times in first year
         - Prevented €1+ billion in damages per event
         - Navigation traffic: 25,000 vessels/year
    `,
    
    whyItMattered: "St. Petersburg is Russia's second city and former capital with irreplaceable cultural heritage. The barrier protects 5 million people and countless treasures including the Hermitage, Winter Palace, and historic canals.",
    
    challenges: [
      "Construction delays (32 years total)",
      "Environmental concerns about Neva Bay stagnation",
      "Coordinating navigation with flood protection",
      "Operating in Baltic ice conditions"
    ],
    
    legacy: "One of the world's largest flood barriers, comparable to the Thames Barrier and Dutch Delta Works. Demonstrates Russia's continued capability for megascale hydraulic engineering. Symbol of protecting national heritage from climate change impacts.",
    
    robertsNote: "The St. Petersburg barrier is essentially a giant control structure for SWMM purposes—rating curves for each gate section, storage routing for Neva Bay, and real-time control based on sea level forecasts. The challenge is modeling 25 km of varying cross-sections with multiple independently operated gates.",
    
    swmmRelevance: "Storm surge barriers, gate operating rules, storage routing in tidal systems, real-time control logic",
    
    coordinates: { lat: 59.9923, lng: 29.9000 }, // Flood barrier location
    
    images: [],
    
    diagramDescription: `
      ST. PETERSBURG FLOOD BARRIER
      ┌─────────────────────────────────────────────────────────────┐
      │                                                             │
      │  PLAN VIEW (25.4 km barrier):                              │
      │                                                             │
      │     ════════════════════════════════════════════════       │
      │                    GULF OF FINLAND                         │
      │            (Storm Surge Source - up to 5m)                 │
      │     ════════════════════════════════════════════════       │
      │                                                             │
      │  KOTLIN │        │    │                  │         │ LISIY │
      │  ISLAND │   D1   │ S1 │       D2         │   S2    │  NOS  │
      │    ●────╬════════╬════╬══════════════════╬═════════╬────●  │
      │         │        │    │                  │         │       │
      │    Dam  │ Gates  │Ship│      Gates       │  Ship   │  Dam  │
      │  (rock) │  (11)  │Gate│       (10)       │  Gate   │(rock) │
      │         │        │    │                  │         │       │
      │         │  1.1km │200m│      5.5 km      │  200m   │       │
      │         │        │    │                  │         │       │
      │     ════════════════════════════════════════════════       │
      │                    NEVA BAY                                │
      │               (Protected Water)                            │
      │     ════════════════════════════════════════════════       │
      │                         │                                  │
      │                         │ Neva River                       │
      │                         ▼                                  │
      │              ┌─────────────────────┐                      │
      │              │   ST. PETERSBURG    │                      │
      │              │   🏛️ Hermitage       │                      │
      │              │   🏛️ Winter Palace   │                      │
      │              │   Population: 5M    │                      │
      │              └─────────────────────┘                      │
      │                                                             │
      │  ─────────────────────────────────────────────────────────│
      │                                                             │
      │  CROSS-SECTION (Gate Section):                             │
      │                                                             │
      │    GULF SIDE                          BAY SIDE             │
      │  ≈≈≈≈≈≈≈≈≈≈≈≈                       ≈≈≈≈≈≈≈≈≈≈≈≈          │
      │         Normal Water Level                                 │
      │  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─       │
      │  ≈≈≈≈≈≈≈≈≈╔═══════╗≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈          │
      │  ≈≈≈≈≈≈≈≈≈║ GATE  ║≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈          │
      │  ≈≈≈≈≈≈≈≈≈║(open) ║≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈          │
      │      ─────╨───────╨─────                                   │
      │      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ FOUNDATION                       │
      │                                                             │
      │  DURING SURGE (Gate Closed):                               │
      │  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈                                       │
      │  ≈≈ Surge +4m ≈≈≈≈≈≈≈≈≈                    Normal level   │
      │  ≈≈≈≈≈≈≈≈≈╔═══════════╗─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─       │
      │  ≈≈≈≈≈≈≈≈≈║ GATE     ║≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈          │
      │  ≈≈≈≈≈≈≈≈≈║ RAISED   ║≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈          │
      │      ─────╨──────────╨─────                                │
      │      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                                 │
      │                                                             │
      │  SEGMENT GATE MECHANISM:                                   │
      │         ┌───────────┐                                      │
      │         │   GATE    │ ─┐                                   │
      │         │  (Steel)  │  │ Rotates up                       │
      │         └───────────┘  │ from bottom                      │
      │              ◄─────────┘                                   │
      │         ════○════════  Pivot Point                        │
      │                                                             │
      └─────────────────────────────────────────────────────────────┘
    `
  },

  // ----------------------------------------------------------
  // 10. PERMAFROST ENGINEERING
  // ----------------------------------------------------------
  {
    id: "permafrost-engineering",
    name: "Permafrost Foundation Engineering",
    civilizationId: "russian-empire",
    period: "1930s CE - Present",
    era: "modern",
    category: "infrastructure",
    rarity: "epic",
    description: "Russia pioneered the engineering science of building on permafrost—permanently frozen ground that underlies 65% of Russian territory. Techniques include thermosyphon cooling, pile foundations, and ventilated crawl spaces that maintain frozen conditions while supporting structures.",
    
    technicalSpecs: {
      dimensions: "Foundations to 15m depth in permafrost",
      materials: ["Steel piles", "Thermosyphons (ammonia/freon)", "Ventilated gravel"],
      capacity: "Buildings to 12+ stories on permafrost",
      engineering: "Ground temperature maintenance below -2°C"
    },
    
    howItWorks: `
      PERMAFROST CONSTRUCTION PRINCIPLES:
      
      1. THE PERMAFROST CHALLENGE
         - Frozen ground is stable (concrete-hard)
         - Thawed ground becomes unstable mush
         - Buildings generate heat → thaw foundation
         - Solution: Keep permafrost frozen!
      
      2. THERMOSYPHON COOLING
         ┌─────────────────────────────────────┐
         │                                     │
         │  BUILDING (Heat Source)             │
         │     ████████████████████            │
         │     ████████████████████            │
         │  ───┬───┬───┬───┬───┬───           │
         │     │   │   │   │   │   ◄── Raised │
         │     │   │   │   │   │       Floor   │
         │  ═══╪═══╪═══╪═══╪═══╪═══           │
         │     │   │   │   │   │   ◄── Piles  │
         │     │╔═╗│╔═╗│╔═╗│╔═╗│╔═╗            │
         │     │║T║│║T║│║T║│║T║│║T║◄── Thermo- │
         │     │║H║│║H║│║H║│║H║│║H║   syphons  │
         │     │╚═╝│╚═╝│╚═╝│╚═╝│╚═╝            │
         │  ░░░░░░░░░░░░░░░░░░░░░░░            │
         │     PERMAFROST (kept frozen)        │
         │  ░░░░░░░░░░░░░░░░░░░░░░░            │
         │                                     │
         └─────────────────────────────────────┘
         
         Thermosyphon Operation:
         - Sealed pipe with ammonia/freon
         - Winter: Cold air extracts heat
         - Summer: Vapor rises, stores cold
         - Net effect: Ground stays frozen
      
      3. PILE FOUNDATION SYSTEMS
         - Steel pipe piles driven into permafrost
         - Freeze-back time: 2-4 weeks
         - Adfreeze bond: pile frozen to soil
         - Load capacity: 50-200 tons per pile
      
      4. VENTILATED CRAWL SPACE
         ┌─────────────────────────────────────┐
         │      BUILDING FLOOR                 │
         │  ════════════════════════           │
         │      ↑ Cold Air ↑                   │
         │  ←══════════════════════→           │
         │      CRAWL SPACE                    │
         │      (Ventilated, unheated)         │
         │  ════════════════════════           │
         │      PERMAFROST SURFACE             │
         │  ░░░░░░░░░░░░░░░░░░░░░░░            │
         └─────────────────────────────────────┘
         - 1-2m air gap below building
         - Natural ventilation in winter
         - Insulates ground from building heat
      
      5. WATER/SEWER IN PERMAFROST
         - Utilidors: Insulated above-ground conduits
         - Heat-traced pipes: Prevent freezing
         - Centralized water points: Reduce piping
    `,
    
    whyItMattered: "Enabled construction of cities like Norilsk, Yakutsk, and pipeline infrastructure across Siberia and the Arctic. Without permafrost engineering, resource extraction and habitation in northern Russia would be impossible.",
    
    challenges: [
      "Climate warming destabilizing permafrost",
      "Monitoring ground temperature continuously",
      "Repairing foundations under sinking buildings",
      "Maintaining infrastructure over vast distances"
    ],
    
    legacy: "Russian permafrost engineering techniques are used worldwide in Alaska, Canada, and Scandinavia. Climate change is now the greatest threat—rising temperatures are causing permafrost degradation that damages infrastructure built using Soviet-era methods.",
    
    robertsNote: "From a SWMM perspective, permafrost creates a nearly impermeable layer that fundamentally changes infiltration and groundwater behavior. Active layer hydrology—the seasonal freeze-thaw zone above permafrost—is incredibly complex to model.",
    
    swmmRelevance: "Models seasonal infiltration changes, frozen ground conditions, active layer hydrology, and utilidor drainage systems",
    
    coordinates: { lat: 62.0355, lng: 129.6755 }, // Yakutsk
    
    images: [],
    
    diagramDescription: `
      PERMAFROST FOUNDATION SYSTEMS
      ┌─────────────────────────────────────────────────────────────┐
      │                                                             │
      │  TEMPERATURE PROFILE:                                      │
      │                                                             │
      │  Temp (°C)  -30    -20    -10     0    +10   +20          │
      │              │      │      │      │      │      │          │
      │  ──────────┬─┴──────┴──────┴──────┼──────┴──────┴─         │
      │            │                      │                        │
      │  AIR  SUMMER                      │   +20°C ───────○       │
      │       WINTER        -40°C ○───────│                        │
      │  ══════════╧══════════════════════╧════════════════        │
      │  ACTIVE LAYER        │         THAWS │                     │
      │  (0-3m)              │        SUMMER │                     │
      │                      ○───────────────│ 0°C at bottom       │
      │  ──────────────────────────────────────────────────        │
      │                      │               │                     │
      │  PERMAFROST          │  ALWAYS       │                     │
      │  (3m - 600m+)    ○───│───────────────│ -5°C                │
      │                      │               │                     │
      │  ──────────────────────────────────────────────────        │
      │                                                             │
      │  ═════════════════════════════════════════════════════════│
      │                                                             │
      │  BUILDING FOUNDATION OPTIONS:                              │
      │                                                             │
      │  OPTION 1: Ventilated Crawl Space                          │
      │  ┌─────────────────────────────────────┐                   │
      │  │     ████████ BUILDING ████████      │                   │
      │  │     ════════════════════════════    │ ← Insulated floor │
      │  │          ↑     ↑     ↑               │                   │
      │  │     ←── COLD AIR FLOW ──→           │ ← Open crawl     │
      │  │     ════════════════════════════    │                   │
      │  │     ░░░░░░░ PERMAFROST ░░░░░░░      │ ← Stays frozen   │
      │  └─────────────────────────────────────┘                   │
      │                                                             │
      │  OPTION 2: Thermosyphon Piles                              │
      │  ┌─────────────────────────────────────┐                   │
      │  │     ████████ BUILDING ████████      │                   │
      │  │     ───┬───────┬───────┬───         │                   │
      │  │        │       │       │            │ ← Raised 1-2m     │
      │  │        │╔═══╗  │╔═══╗  │╔═══╗       │                   │
      │  │        │║ T ║  │║ T ║  │║ T ║       │ ← Thermosyphons  │
      │  │        │║ H ║  │║ H ║  │║ H ║       │                   │
      │  │        │║ E ║  │║ E ║  │║ E ║       │                   │
      │  │        │║ R ║  │║ R ║  │║ R ║       │                   │
      │  │        │║ M ║  │║ M ║  │║ M ║       │                   │
      │  │        │║ O ║  │║ O ║  │║ O ║       │                   │
      │  │     ░░░│╚═══╝░░│╚═══╝░░│╚═══╝░░░    │ ← Permafrost     │
      │  │     ░░░░░░░░░░░░░░░░░░░░░░░░░░░     │   kept frozen     │
      │  └─────────────────────────────────────┘                   │
      │                                                             │
      │  THERMOSYPHON DETAIL:                                      │
      │  ┌───────────────────────────┐                             │
      │  │    WINTER    │   SUMMER   │                             │
      │  │              │            │                             │
      │  │    COLD     │            │                             │
      │  │    AIR      │    ○       │                             │
      │  │     │       │   ╱│╲      │ ← Vapor rises               │
      │  │     ▼       │  ╱ │ ╲     │                             │
      │  │  ┌─────┐    │ ┌─────┐   │                             │
      │  │  │░░░░░│←───┼─│     │   │ ← Heat rejected             │
      │  │  │░░░░░│    │ │     │   │   to cold air               │
      │  │  │░░░░░│    │ │     │   │                             │
      │  │  └─────┘    │ └─────┘   │                             │
      │  │  RADIATOR   │  PASSIVE  │                             │
      │  │  (active)   │ (stored)  │                             │
      │  └─────────────┴───────────┘                             │
      │                                                             │
      └─────────────────────────────────────────────────────────────┘
    `
  },

  // ----------------------------------------------------------
  // 11. SIBERIAN RIVER DIVERSION (UNBUILT)
  // ----------------------------------------------------------
  {
    id: "siberian-diversion",
    name: "Siberian Rivers Diversion Project (Unbuilt)",
    civilizationId: "russian-empire",
    period: "1960s-1980s CE (Proposed)",
    era: "modern",
    category: "transport",
    rarity: "legendary",
    description: "The most ambitious water project ever conceived: diverting north-flowing Siberian rivers (Ob, Irtysh) southward to irrigate Central Asia. Would have moved 25 km³/year over 2,500 km. Cancelled in 1986 due to environmental concerns and cost.",
    
    technicalSpecs: {
      dimensions: "2,500 km main canal; 200m width; 16m depth (proposed)",
      materials: ["Earth-moving on unprecedented scale", "Nuclear excavation considered"],
      capacity: "25-60 km³/year water transfer (proposed)",
      engineering: "Multiple pump stations totaling 10+ GW (proposed)"
    },
    
    howItWorks: `
      PROPOSED SIBERIAN RIVERS DIVERSION:
      
      1. THE WATER IMBALANCE
         ┌─────────────────────────────────────────┐
         │                                         │
         │  SIBERIA: Excess water                  │
         │  - Ob River: 400 km³/year to Arctic    │
         │  - Cold climate, low evaporation       │
         │  - Sparse population                    │
         │                                         │
         │  CENTRAL ASIA: Water deficit           │
         │  - Aral Sea shrinking (irrigation)     │
         │  - Hot climate, high evaporation       │
         │  - Cotton/agriculture demands          │
         │                                         │
         │  IDEA: Move water from surplus to      │
         │        deficit regions                  │
         │                                         │
         └─────────────────────────────────────────┘
      
      2. PROPOSED ROUTE (Main Canal)
         ┌─────────────────────────────────────────┐
         │                                         │
         │        ARCTIC OCEAN                    │
         │            ▲                            │
         │            │ (North-flowing)           │
         │        ┌───┴───┐                       │
         │        │  OB   │                       │
         │        │ RIVER │                       │
         │        └───┬───┘                       │
         │            │                            │
         │     ═══════╪═══════  DIVERSION DAM     │
         │            │                            │
         │            ▼ (Diverted south)          │
         │     ┌──────────────┐                   │
         │     │   MAIN      │                    │
         │     │   CANAL     │ 2,500 km           │
         │     │   200m wide │                    │
         │     └──────┬──────┘                    │
         │            │                            │
         │     ───────┼─────── TURGAI GAP        │
         │            │        (Watershed divide) │
         │            ▼                            │
         │     ┌──────────────┐                   │
         │     │  ARAL SEA   │                    │
         │     │  (Refilled) │                    │
         │     └──────────────┘                   │
         │                                         │
         │        CENTRAL ASIA                    │
         │                                         │
         └─────────────────────────────────────────┘
      
      3. ENGINEERING CHALLENGES
         - Lift water 100m over watershed divide
         - Power: 10-12 GW pumping capacity
         - Excavation: 4-6 km³ of earth
         - Nuclear excavation proposed (!)
         - Construction: 20-30 years
         - Cost: $40-100 billion (1980s dollars)
      
      4. ENVIRONMENTAL CONCERNS
         - Reduced Arctic freshwater inflows
         - Potential climate change effects
         - Destruction of Siberian ecosystems
         - Uncertain impacts on Arctic ice
      
      5. CANCELLATION (1986)
         - Glasnost enabled open debate
         - Scientists warned of Arctic impact
         - Cost concerns during economic decline
         - Project shelved indefinitely
    `,
    
    whyItMattered: "Represents peak Soviet ambition to reshape nature on continental scales. Its cancellation marked a turning point in environmental awareness in the USSR. The Aral Sea continued shrinking, becoming one of the world's worst ecological disasters—which the diversion might have prevented.",
    
    challenges: [
      "Scale unprecedented in human history",
      "Arctic ecosystem unknown impacts",
      "Energy requirements enormous",
      "International (Kazakh/Uzbek) coordination"
    ],
    
    legacy: "The unbuilt project remains a symbol of Soviet hubris but also of environmental awakening. Climate change and continuing Central Asian water crises have revived discussions—Russia has periodically reconsidered modified versions.",
    
    robertsNote: "As a thought experiment for SWMM modelers: how would you even begin to model a system that moves 25 km³/year across 2,500 km? It would require treating entire river basins as single nodes. The project's cancellation may have been wise, but the hydraulic engineering challenges are fascinating to contemplate.",
    
    swmmRelevance: "Theoretical exercise in continental-scale water balance, inter-basin transfer, and extreme pump station sizing",
    
    coordinates: { lat: 60.0000, lng: 70.0000 }, // Ob River region
    
    images: [],
    
    diagramDescription: `
      SIBERIAN RIVERS DIVERSION (PROPOSED)
      ┌─────────────────────────────────────────────────────────────┐
      │                                                             │
      │  CONTINENTAL SCALE WATER TRANSFER (Proposed 1960s-1980s)   │
      │                                                             │
      │                    ARCTIC OCEAN                            │
      │  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈   │
      │         ▲                    ▲                             │
      │         │ Ob River           │ Yenisei River              │
      │         │ (400 km³/yr)       │ (600 km³/yr)               │
      │         │                    │                             │
      │    ┌────┴────┐          ┌────┴────┐                       │
      │    │  TOBOLSK │          │ NORILSK │                       │
      │    └────┬────┘          └─────────┘                       │
      │         │                                                  │
      │  ═══════╬═══════════════════════════════════════════════  │
      │         ║ ← DIVERSION DAM                                 │
      │         ║   (Proposed)                                     │
      │         ║                                                  │
      │         ▼                                                  │
      │    ╔════════════════════════════════════════════════╗     │
      │    ║            MAIN TRANSFER CANAL                  ║     │
      │    ║           2,500 km × 200m × 16m                ║     │
      │    ║           Capacity: 25-60 km³/year             ║     │
      │    ╚════════════════════════════════════════════════╝     │
      │         │                                                  │
      │    ─────┼───────────────────────────────────────────────  │
      │         │     TURGAI GAP (Watershed Divide)               │
      │         │     +100m lift required                         │
      │    ─────┼───────────────────────────────────────────────  │
      │         │                                                  │
      │         ▼                                                  │
      │    ┌─────────────────────────────────────────┐            │
      │    │              ARAL SEA                   │            │
      │    │         (Would be refilled)             │            │
      │    │                                         │            │
      │    │    ┌───────┐         ┌───────┐        │            │
      │    │    │ COTTON│         │ COTTON│        │            │
      │    │    │ FIELDS│         │ FIELDS│        │            │
      │    │    └───────┘         └───────┘        │            │
      │    │         UZBEKISTAN / KAZAKHSTAN       │            │
      │    └─────────────────────────────────────────┘            │
      │                                                             │
      │  ═══════════════════════════════════════════════════════  │
      │                                                             │
      │  ENGINEERING REQUIREMENTS:                                 │
      │  ┌──────────────────────────────────────────────────┐     │
      │  │ Excavation        │ 4-6 km³ of earth             │     │
      │  │ Pumping Power     │ 10-12 GW capacity            │     │
      │  │ Construction Time │ 20-30 years                  │     │
      │  │ Cost (1980s)      │ $40-100 billion              │     │
      │  │ Water Transfer    │ 25-60 km³/year               │     │
      │  └──────────────────────────────────────────────────┘     │
      │                                                             │
      │  WHY CANCELLED (1986):                                     │
      │  ┌──────────────────────────────────────────────────┐     │
      │  │ ✗ Unknown Arctic ecosystem impacts              │     │
      │  │ ✗ Potential global climate effects              │     │
      │  │ ✗ Enormous cost during economic decline         │     │
      │  │ ✗ Glasnost enabled scientific opposition        │     │
      │  └──────────────────────────────────────────────────┘     │
      │                                                             │
      │  MODERN STATUS: Periodically reconsidered                  │
      │                                                             │
      └─────────────────────────────────────────────────────────────┘
    `
  },

  // ----------------------------------------------------------
  // 12. ARAL SEA RESCUE (PARTIAL)
  // ----------------------------------------------------------
  {
    id: "aral-sea-dam",
    name: "Kokaral Dam (North Aral Rescue)",
    civilizationId: "russian-empire",
    period: "2005 CE",
    era: "modern",
    category: "restoration",
    rarity: "rare",
    description: "A 13-kilometer dam separating the North Aral Sea from the dying South Aral, allowing the northern section to recover. A rare success story in reversing one of the world's worst ecological disasters, funded by the World Bank and Kazakhstan.",
    
    technicalSpecs: {
      dimensions: "13 km length, 6m height, concrete/earth construction",
      materials: ["Concrete spillway", "Earth-fill dam", "Riprap protection"],
      capacity: "Raises North Aral by 4m; holds 27 km³",
      engineering: "Spillway releases excess to South Aral"
    },
    
    howItWorks: `
      KOKARAL DAM & NORTH ARAL RECOVERY:
      
      1. THE ARAL SEA DISASTER
         ┌─────────────────────────────────────────┐
         │                                         │
         │  1960: Aral Sea = 68,000 km²           │
         │  2000: Aral Sea = 17,000 km²           │
         │  Loss: 75% of surface area             │
         │  Cause: Irrigation diversion of        │
         │         Amu Darya and Syr Darya        │
         │                                         │
         │  ┌─────────────────────────────────┐   │
         │  │     1960                        │   │
         │  │  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈    │   │
         │  │  ≈≈≈≈≈≈ ARAL SEA ≈≈≈≈≈≈≈≈≈≈    │   │
         │  │  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈    │   │
         │  │  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈    │   │
         │  └─────────────────────────────────┘   │
         │                                         │
         │  ┌─────────────────────────────────┐   │
         │  │     2000                        │   │
         │  │        ≈≈≈ NORTH ≈≈≈           │   │
         │  │           (Small)               │   │
         │  │                                  │   │
         │  │        ≈≈≈ SOUTH ≈≈≈           │   │
         │  │         (Shrinking)             │   │
         │  │           ≈≈≈≈≈                 │   │
         │  └─────────────────────────────────┘   │
         │                                         │
         └─────────────────────────────────────────┘
      
      2. THE KOKARAL DAM SOLUTION
         ┌─────────────────────────────────────────┐
         │                                         │
         │      SYR DARYA RIVER                   │
         │           │                             │
         │           ▼                             │
         │  ┌─────────────────────────────┐       │
         │  │     NORTH ARAL SEA         │       │
         │  │  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈  │       │
         │  │  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈  │       │
         │  │  ≈≈≈≈≈ (Recovering) ≈≈≈≈≈  │       │
         │  │  ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈  │       │
         │  └────────────┬────────────────┘       │
         │               │                        │
         │  ═════════════╪════════════════        │
         │       KOKARAL DAM (13 km)              │
         │  ═════════════╪════════════════        │
         │               │ Spillway overflow      │
         │               ▼                        │
         │  ┌─────────────────────────────┐       │
         │  │     SOUTH ARAL SEA         │       │
         │  │      (Still dying)          │       │
         │  │  ≈≈≈                   ≈≈≈  │       │
         │  │    ≈≈≈               ≈≈≈    │       │
         │  │      (Split into lobes)     │       │
         │  └─────────────────────────────┘       │
         │                                         │
         └─────────────────────────────────────────┘
      
      3. RESULTS (2005-Present)
         - North Aral water level: rose 4+ meters
         - Surface area: increased 50%
         - Salinity: dropped from 30 to 17 g/L
         - Fish returned: flounder, carp, pike-perch
         - Aralsk port: water within 10 km again
         - Climate: local temperatures moderated
      
      4. LIMITATIONS
         - South Aral continues shrinking
         - Uzbekistan lacks funding for similar dam
         - Total Aral recovery impossible without
           major irrigation changes
    `,
    
    whyItMattered: "Proved that ecological disasters can be partially reversed with modest investment. The Kokaral Dam cost ~$86 million but restored fisheries, improved health conditions, and provided hope for one of the world's most damaged ecosystems.",
    
    challenges: [
      "Managing expectations (South Aral still dying)",
      "Maintaining dam in harsh desert conditions",
      "Balancing water between North Aral and irrigation",
      "International coordination with Uzbekistan"
    ],
    
    legacy: "The Kokaral Dam demonstrates that even catastrophic environmental damage can sometimes be ameliorated. It offers a model for other degraded water bodies worldwide. However, the full Aral Sea will likely never be restored.",
    
    robertsNote: "The Kokaral Dam is basically a giant weir that raises the water level in one basin while allowing overflow to another. In SWMM terms, it's a storage node with a spillway—simple hydraulics solving a massive ecological problem.",
    
    swmmRelevance: "Models lake level management, spillway hydraulics, storage-discharge relationships, and water balance in closed basins",
    
    coordinates: { lat: 46.2500, lng: 59.5000 }, // Kokaral Dam location
    
    images: [],
    
    diagramDescription: `
      KOKARAL DAM & ARAL SEA PARTIAL RECOVERY
      ┌─────────────────────────────────────────────────────────────┐
      │                                                             │
      │  ARAL SEA TIMELINE:                                        │
      │                                                             │
      │  1960                    2000                    2010+      │
      │  ┌────────────┐         ┌────────────┐         ┌──────────┐│
      │  │≈≈≈≈≈≈≈≈≈≈≈≈│         │  ≈≈NORTH≈≈ │         │≈≈NORTH≈≈ ││
      │  │≈≈≈≈≈≈≈≈≈≈≈≈│         │            │         │≈≈≈≈≈≈≈≈≈≈││
      │  │≈≈≈ ARAL ≈≈≈│    →    │════════════│    →    │══ DAM ═══││
      │  │≈≈≈ SEA ≈≈≈≈│         │            │         │          ││
      │  │≈≈≈≈≈≈≈≈≈≈≈≈│         │  ≈ SOUTH ≈ │         │  ≈ ≈ ≈   ││
      │  │≈≈≈≈≈≈≈≈≈≈≈≈│         │      ≈     │         │    ≈     ││
      │  └────────────┘         └────────────┘         └──────────┘│
      │   68,000 km²            17,000 km²           North: +50%  │
      │                                               recovered    │
      │                                                             │
      │  ═════════════════════════════════════════════════════════│
      │                                                             │
      │  KOKARAL DAM DETAIL:                                       │
      │                                                             │
      │        SYR DARYA RIVER                                     │
      │             │                                               │
      │             ▼ (Inflow: 14 km³/year avg)                    │
      │  ┌───────────────────────────────────────────┐            │
      │  │                                           │            │
      │  │         NORTH ARAL SEA                   │            │
      │  │   ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈    │            │
      │  │   ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈    │            │
      │  │   ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈    │            │
      │  │   ≈≈≈≈≈≈≈≈≈  Volume: 27 km³ ≈≈≈≈≈≈≈≈≈   │            │
      │  │   ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈    │            │
      │  │                                           │            │
      │  └─────────────────────┬─────────────────────┘            │
      │                        │                                   │
      │  ══════════════════════╪═══════════════════════════       │
      │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓       │
      │  ▓▓▓ KOKARAL DAM ▓▓▓▓▓▓║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓       │
      │  ▓▓▓ 13 km long ▓▓▓▓▓▓▓║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓       │
      │  ▓▓▓ 6 m height ▓▓▓▓▓▓▓║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓       │
      │  ══════════════════════╬═══════════════════════════       │
      │                        │ SPILLWAY                          │
      │                        │ (Overflow to South)               │
      │                        ▼                                   │
      │  ┌─────────────────────────────────────────────┐          │
      │  │                                             │          │
      │  │            SOUTH ARAL SEA                  │          │
      │  │        (Continuing to shrink)              │          │
      │  │                                             │          │
      │  │          ≈≈≈≈≈                ≈≈≈≈         │          │
      │  │            ≈≈≈              ≈≈≈            │          │
      │  │         (Western)        (Eastern)         │          │
      │  │           Lobe             Lobe            │          │
      │  │                                             │          │
      │  └─────────────────────────────────────────────┘          │
      │                                                             │
      │  RECOVERY STATISTICS:                                      │
      │  ┌────────────────────────────────────────────────┐       │
      │  │ Parameter           │ Before Dam │ After Dam  │       │
      │  ├────────────────────────────────────────────────┤       │
      │  │ Water Level         │  38m ASL   │  42m ASL   │       │
      │  │ Surface Area        │  2,550 km² │  3,300 km² │       │
      │  │ Salinity           │  30 g/L    │  17 g/L    │       │
      │  │ Fish Species       │  Minimal   │  15+ spp   │       │
      │  │ Fishing Industry   │  Collapsed │  Recovering│       │
      │  │ Cost               │  N/A       │  $86M      │       │
      │  └────────────────────────────────────────────────┘       │
      │                                                             │
      └─────────────────────────────────────────────────────────────┘
    `
  }
];

// ============================================================
// COORDINATE ENTRIES FOR MAP
// ============================================================

const russianCoordinates: MapCoordinate[] = [
  {
    id: "novgorod",
    name: "Novgorod (Varangian Trade Hub)",
    lat: 58.5213,
    lng: 31.2718,
    region: "europe",
    civilizationId: "russian-empire"
  },
  {
    id: "moscow-canal-start",
    name: "Moscow Canal (Dubna)",
    lat: 56.7324,
    lng: 37.1842,
    region: "europe",
    civilizationId: "russian-empire"
  },
  {
    id: "belomor-start",
    name: "Belomor Canal (Belomorsk)",
    lat: 64.5283,
    lng: 34.7683,
    region: "europe",
    civilizationId: "russian-empire"
  },
  {
    id: "volga-don-start",
    name: "Volga-Don Canal (Volgograd)",
    lat: 48.7194,
    lng: 44.5089,
    region: "europe",
    civilizationId: "russian-empire"
  },
  {
    id: "ladoga-canal",
    name: "Ladoga Canal (Lake Ladoga)",
    lat: 60.0500,
    lng: 32.0000,
    region: "europe",
    civilizationId: "russian-empire"
  },
  {
    id: "kuibyshev-reservoir",
    name: "Kuibyshev Reservoir (Largest in Cascade)",
    lat: 53.2000,
    lng: 50.1500,
    region: "europe",
    civilizationId: "russian-empire"
  },
  {
    id: "petersburg-dam",
    name: "St. Petersburg Flood Barrier",
    lat: 59.9923,
    lng: 29.9000,
    region: "europe",
    civilizationId: "russian-empire"
  },
  {
    id: "yakutsk",
    name: "Yakutsk (Permafrost Engineering Center)",
    lat: 62.0355,
    lng: 129.6755,
    region: "asia",
    civilizationId: "russian-empire"
  },
  {
    id: "kokaral-dam",
    name: "Kokaral Dam (Aral Sea)",
    lat: 46.2500,
    lng: 59.5000,
    region: "asia",
    civilizationId: "russian-empire"
  }
];
```

---

## 2. Expanded Maya/Aztec Technical Specifications

```typescript
// ============================================================
// MESOAMERICA EXPANSION - TECHNICAL SPECIFICATIONS
// ============================================================

// Update existing Mesoamerica civilization
const mesoamericaExpanded: Civilization = {
  id: "mesoamerica",
  name: "Mesoamerica (Maya, Aztec, Olmec)",
  era: "medieval" as Era,
  period: "1200 BCE - 1521 CE",
  region: "americas",
  description: "Mesoamerican civilizations developed some of history's most ingenious water management systems, from Maya zeolite water purification to Aztec dual aqueducts. They transformed swamps into productive farmland, separated freshwater from brackish lakes, and built cities that rivaled any in the world for cleanliness and water supply reliability.",
  inventionCount: 12, // Expanded from 3
  coordinates: { lat: 19.4326, lng: -99.1332 },
  color: "#228B22",
  mapPosition: { x: 22, y: 38 }
};

const mesoamericaInventionsExpanded: Invention[] = [

  // ----------------------------------------------------------
  // EXISTING INVENTIONS (ENHANCED)
  // ----------------------------------------------------------

  {
    id: "chinampa-system",
    name: "Chinampa Floating Garden System",
    civilizationId: "mesoamerica",
    period: "1200 CE - 1521 CE",
    era: "medieval",
    category: "agriculture",
    rarity: "legendary",
    description: "Artificial islands built in Lake Texcoco for intensive agriculture. Chinampas are not truly 'floating' but are raised beds anchored by willow trees, with canal access for irrigation and transport. This system produced 6-7 crops annually and fed the 200,000+ population of Tenochtitlan.",

    technicalSpecs: {
      dimensions: "Typical plot: 30m × 2.5m; total system: 9,000+ hectares",
      materials: ["Lake-bed mud", "Aquatic vegetation", "Willow trees (ahuejote)", "Woven reed fences"],
      capacity: "Yield: 3,000+ kg maize/hectare (4× European yields)",
      engineering: "Self-irrigating via capillary action from surrounding canals"
    },

    howItWorks: `
      CHINAMPA CONSTRUCTION AND OPERATION:

      1. SITE SELECTION
         - Shallow lake areas (1-3m depth)
         - Protected from wind and waves
         - Access to canal network

      2. CONSTRUCTION SEQUENCE
         ┌─────────────────────────────────────────┐
         │ │
         │  STEP 1: Stake boundary │
         │  ════════════════════════════ │
         │  │ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ │ ◄── Stakes  │
         │  │ │ │
         │  │ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ │ │
         │  ════════════════════════════ │
         │ │
         │  STEP 2: Weave reed fence (chinamitl)  │
         │  ╔═══════════════════════════╗ │
         │  ║▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒║ │
         │  ║▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒║ │
         │  ╚═══════════════════════════╝ │
         │ │
         │  STEP 3: Layer materials │
         │  ┌─────────────────────────┐ │
         │  │░░░░░░ TOPSOIL ░░░░░░░░░│ ← Fertile│
         │  │▓▓▓▓▓▓ MUD/MUCK ▓▓▓▓▓▓▓▓│ ← Lake   │
         │  │≈≈≈≈≈≈ VEGETATION ≈≈≈≈≈≈│ ← Aquatic│
         │  │▓▓▓▓▓▓ MUD/MUCK ▓▓▓▓▓▓▓▓│ ← Repeat │
         │  │▒▒▒▒▒▒ REED BASE ▒▒▒▒▒▒▒│ ← Foundation
         │  └─────────────────────────┘ │
         │  ≈≈≈≈≈≈ WATER LEVEL ≈≈≈≈≈≈≈ │
         │ │
         │  STEP 4: Plant willow trees (anchor)   │
         │ │
         │     🌳────────────────────────🌳 │
         │     │    CHINAMPA SURFACE    │ │
         │     │  ┌──┬──┬──┬──┬──┬──┐   │ │
         │     │  │🌿│🌽│🌿│🌽│🌿│🌽│   │ │
         │     │  └──┴──┴──┴──┴──┴──┘   │ │
         │     🌳────────────────────────🌳 │
         │ │
         └─────────────────────────────────────────┘

      3. WATER MANAGEMENT
         - Canals: 2-3m wide between chinampas
         - Water level: Maintained ~30cm below surface
         - Capillary rise: Soil wicks water upward
         - No pumping needed—passive irrigation

      4. CROP ROTATION
         - Maize: Primary crop
         - Beans: Nitrogen fixation
         - Squash: Ground cover, moisture retention
         - Tomatoes, chiles, flowers: Cash crops
         - Seedlings: Started in floating nurseries

      5. NUTRIENT CYCLING
         - Canal muck: Dredged and applied to surface
         - Aquatic plants: Composted between rows
         - Human waste: Collected and processed
         - Fish: Raised in canals, provide fertilizer

      6. YIELDS
         - 6-7 harvests per year (no winter)
         - 3,000-4,000 kg/hectare maize
         - Supported 200,000+ urban population
    `,

    whyItMattered: "Chinampas were the most productive agricultural system in pre-industrial history, yielding 4× European cropland. They allowed the Aztecs to build a city of 200,000+ people in the middle of a lake, making Tenochtitlan larger than any European city of its time.",

    challenges: [
      "Maintaining correct water levels",
      "Preventing salinization from lake water",
      "Controlling aquatic weeds and pests",
      "Seasonal flooding from rainy season"
    ],

    legacy: "Chinampas still exist today in Xochimilco, a UNESCO World Heritage Site. They demonstrate sustainable intensification principles now being studied for modern applications. The technique shows how 'waste' materials (muck, weeds) can become productive resources.",

    robertsNote: "Chinampas are essentially a groundwater-fed irrigation system. The water table is maintained at optimal depth for capillary rise—no pumping, no pipes, no energy. In SWMM terms, you'd model the canal network as a storage system with controlled outlets, and the chinampas as permeable surfaces with high infiltration rates.",

    swmmRelevance: "Models groundwater-surface water interaction, canal storage networks, and capillary rise irrigation",

    coordinates: { lat: 19.2866, lng: -99.0931 }, // Xochimilco

    images: [],

    diagramDescription