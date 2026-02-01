# Historical Mystery - Water Inventions Explorer

## Overview

Historical Mystery is a 2D interactive educational game exploring humanity's water innovations throughout history. Players explore **73 civilizations** across 6 continents, discover **256+ water inventions** spanning 40,000+ years, and learn about the genius of hydraulic engineering across ages. Features an interactive world map with realistic Earth background, comprehensive encyclopedia with URL-based navigation, SWMM5 export functionality with **68+ downloadable hydraulic simulation models** (copy-to-clipboard to avoid antivirus issues), educational mini-games, and expert commentary from Robert Dickinson (50+ years water engineering experience).

## Theme: Ancient Waters

The game showcases how water shaped human civilization through:
- **73 Civilizations**: Ancient Egypt, Mesopotamia, Indus Valley, Medieval India, Ancient Greece, Roman Empire, Ancient China, Ancient Persia, Khmer Empire, Cambodia, Inca Empire, Aboriginal Australia, Ancient Korea, Great Zimbabwe, Nan Madol, Modern Japan (G-Cans), Siam (Thailand), Hawaiian, Ethiopian Highlands, Sahel Africa, Engaruka, Chamorro, Dutch Netherlands, Burma/Myanmar, Vietnam, Pre-Roman Europe, Philippines, Singapore, Malaysia, UAE, Israel, Yemen, Bangladesh, Al-Andalus, Oman, Venice, Silk Road, Amazon Basin, Mississippian Cahokia, Hohokam, Pacific Northwest, Siberia-Yakutia, Inuit Arctic, Swahili Coast, Kongo Kingdom, Mali-Timbuktu, Borneo, Papua New Guinea, Pre-Roman Iberia, Basque Country, Celtic Europe, Gaul, Germanic Europe, Etruscan, Viking, Imperial & Soviet Russia, Morocco, and more
- **256+ Water Inventions**: Aqueducts, stepwells, irrigation, klongs, qanats, terraces, reservoirs, canals, moats, flood control, G-Cans, ondol heating, fish traps, tanada, suikinkutsu, barays, floating gardens, inverted siphons, orifice controls, hydraulic mining, terp mounds, bog iron extraction, timber trackways, cuniculi tunnels, Cloaca Maxima, clinker longships, portage systems, Soviet canals, Water Computer, khettaras, and more
- **Time Periods**: Ancient (40,000-500 BCE), Classical (500 BCE-500 CE), Medieval (500-1400 CE), Modern (1400 CE-Present)
- **SWMM5/ICM Models**: 68+ hydraulic simulation models compatible with EPA SWMM5 and importable into InfoWorks ICM via File → Import → SWMM

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for the user interface
- **React Router** for URL-based navigation
- **Tailwind CSS** with custom "Ancient Waters" color palette
- **Zustand** for state management across game components
- **React Query** for server state management and API calls

### Color Palette (Ancient Waters)
```css
--deep-ocean: #1a3a52;      /* Headers, Footer */
--river-blue: #2e5c8a;      /* Primary brand color */
--cerulean: #4a90c2;        /* Buttons, links */
--aqua: #7bb3d9;            /* Highlights */
--parchment: #f5f0e1;       /* Background */
--aged-paper: #e8dcc8;      /* Cards */
--terracotta: #c17f4e;      /* Accent elements */
--gold: #c9a227;            /* Premium content */
```

### Typography
- **Headings**: Cinzel font for historical feel
- **Body**: Source Sans Pro for readability
- **UI Elements**: Inter for clean modern UI

### Backend Architecture
- **Express.js** with TypeScript for the REST API server
- **Vite** development server integration with HMR support
- **Memory-based storage** with interface abstraction for future database migration
- **Session-based game progress tracking**

## Key Features

### Interactive World Map
- 2D world map with realistic Earth background
- Civilization markers positioned at actual geographic coordinates
- Continent-based filtering (Africa, Asia, Europe, Americas, Pacific)
- Click civilization count or globe icon to scroll to grid view
- Hover effects showing civilization details

### Smart Search
- Large, accessible search bar with autocomplete
- Search inventions, civilizations, eras, and technology types
- Instant navigation to invention or civilization pages
- Real-time filtering as you type

### SWMM5/ICM Invention Models
- 66+ hydraulic simulation models compatible with EPA SWMM5 and InfoWorks ICM
- Import into ICM via File → Import → SWMM for advanced 1D/2D modeling
- Copy-to-clipboard functionality (avoids antivirus false positives)
- Download all models as combined .txt file
- Covers Roman aqueducts, qanats, siphons, orifices, reservoirs, and more
- Technical specs: node counts, link counts, complexity indicators
- Educational use for understanding ancient hydraulic engineering

### Invention Detail Pages
- Technical diagrams for every invention (140+ diagrams)
- Tagline, key facts, and technical specifications
- Expert commentary from Robert Dickinson
- Historical sources and references
- Related inventions and discovery tags
- SWMM5 model indicator with copy button

### Civilization Pages
- Overview of water challenges and solutions
- List of all inventions from that civilization
- Expert insights on water engineering philosophy
- Modern legacy and relevance
- Geographic and historical context

### UI Components
- **GameUI**: Water-themed HUD with progress indicators
- **QuickSearchBar**: Large autocomplete search for inventions and civilizations
- **TimeTravel**: Auto-playback mode through history with speed controls
- **ChallengeModes**: Timeline Puzzle and Geography Quest mini-games
- **Inventory**: Water invention collection viewer with category and rarity filters
- **ProgressTracker**: Exploration progress by civilization and era
- **Achievements**: 12+ badges across Explorer, Scholar, Collector, Time Traveler categories
- **ComparisonTool**: Side-by-side comparison of water inventions
- **FeaturedDiscoveries**: Curated highlights with "Why This Matters" context
- **SWMM5Models**: Modal for downloading/copying hydraulic simulation models

### Data Structure
- **Regions**: 74 civilizations with era, date range, position, color
- **Locations**: Historical sites with coordinates and historical context
- **Artifacts**: Water inventions with category, rarity, year, significance
- **Categories**: irrigation, aqueduct, water-lifting, sanitation, dam, water-clock, fountain, canal
- **Rarities**: common, rare, epic, legendary
- **Diagrams**: 152+ technical illustrations in /diagrams/ folder

## Recent Additions

### Etruscan Civilization (900-90 BCE)
- **Cuniculi Drainage Tunnels** (Legendary): 50+ km at Veii, some still draining after 2,500 years
- **Cloaca Maxima** (Legendary): World's oldest infrastructure still in use - 2,600 years
- **Rock-Cut Cisterns** (Epic): Orvieto's 1,200+ cisterns carved into rock
- **Sacred Water Architecture** (Rare): Temple spring complexes, divine portals
- **Agricultural Terracing** (Common): Tuscany wine landscapes shaped 2,700 years ago
- **Urban Water Networks** (Epic): Template for Roman colonial cities

### Viking Civilization (700-1200 CE)
- **Clinker-Built Longships** (Legendary): Ocean crossing 500 years before Columbus
- **Shipboard Freshwater Systems** (Epic): Charred casks, rain catchment, strict rationing
- **Navigational Water Reading** (Legendary): Found Vinland without instruments
- **Fjord Harbor Engineering** (Rare): 40m naust boathouses at tidal boundaries
- **Portage & River Systems** (Epic): Baltic to Black Sea via ship-carrying
- **Arctic Ice Technology** (Rare): 400-year Greenland colony survival
- **Horizontal Watermills** (Common): Still operating in Faeroes after 1,000 years

### Pre-Roman & Early Medieval European Civilizations
- **Pre-Roman Iberia** (3 inventions): Tartessian Hydraulic Mining, Iberian Cisterns, Celtiberian Irrigation
- **Basque Country** (4 inventions): Water Mills (Errota), Iron Forges (Burdinola), Tidal Fish Traps, Mountain Irrigation
- **Celtic Europe** (4 inventions): Sacred Springs (Nemeton), Oppida Water Systems, Timber Trackways, Field Drainage
- **Gaul** (3 inventions): River Navigation, Viticulture Water Systems, Thermal Springs
- **Germanic Europe** (5 inventions): Terp Mounds, Bog Iron Extraction, Sacred Wells, Log Boats, Salt Works

### Roman Engineering Additions
- **Roman Inverted Siphon**: Pressurized pipes crossing 123m valleys under 12 atmospheres pressure
- **Quinaria Orifice Control**: Calibrated bronze orifices for fair water distribution and taxation

### Southeast Asian & Pacific Additions
- **Borneo Indigenous Civilizations** (6 inventions): Longhouses, Bamboo Aqueducts, Peat Canals, Floating Rice, Tagal System, Fish Traps
- **Papua New Guinea** (7 inventions): Kuk Swamp (UNESCO), Highland Terraces, Taro Pondfields, Sepik Fish Traps, Sago Processing, Stilt Villages, Atoll Rainwater

## File Structure

```
client/src/
├── App.tsx                 # Main app with React Router
├── index.css               # Ancient Waters color palette
├── components/
│   └── game/
│       ├── WorldMapView.tsx    # 2D world map with civilization markers
│       ├── CivilizationDetail.tsx  # Civilization page
│       ├── InventionDetail.tsx     # Invention page with diagrams
│       ├── QuickSearchBar.tsx      # Large autocomplete search
│       ├── SWMM5Models.tsx         # SWMM5 export modal
│       ├── Inventory.tsx           # Invention collection
│       ├── ProgressTracker.tsx     # Exploration progress
│       ├── Achievements.tsx        # Badge system
│       └── TimelineFilter.tsx      # Era/category filters
├── data/
│   ├── gameData.ts             # 72 civilizations, 220+ inventions
│   ├── inventionDetails.ts     # Diagram mappings and details
│   ├── expertInventions.ts     # Expert commentary database
│   └── expertCivilizations.ts  # Civilization expert analysis
└── lib/
    ├── swmm5Export.ts          # SWMM5 model generation
    └── stores/
        ├── useGameState.tsx    # Game phase management
        ├── useProgress.tsx     # Progress tracking
        ├── useInventory.tsx    # Collection management
        └── useAudio.tsx        # Sound management
```

## Changelog

- February 01, 2026: SWMM5 Showcase & Enhanced Search
  - Added SWMM5Showcase component with 10 featured hydraulic models on main page
  - Enhanced QuickSearchBar with 9 category filters (All, Irrigation, Aqueducts, Canals, Dams, Sanitation, Fountains, Water Lifting, Clocks)
  - Category badges displayed in search results
  - 153 technical diagrams verified (100% coverage for key inventions)
  - Copy-to-clipboard and download buttons for each model
- February 01, 2026: Etruscan & Viking civilizations expansion
  - Added Etruscan civilization (6 inventions): Cuniculi tunnels, Cloaca Maxima, rock-cut cisterns, sacred water, terracing, urban networks
  - Added Viking civilization (7 inventions): Clinker longships, freshwater management, water reading navigation, fjord harbors, portage systems, Arctic ice tech, watermills
  - Generated 12 new technical diagrams
  - Total now: 74 civilizations, 235+ inventions
- February 01, 2026: Pre-Roman European civilizations expansion
  - Added 5 new civilizations: Pre-Roman Iberia, Basque Country, Celtic Europe, Gaul, Germanic Europe
  - Added 19 new inventions with diagrams
  - Added Roman Inverted Siphon and Quinaria Orifice Control
  - Generated 10 new technical diagrams
  - Updated continent mappings and world map coordinates
- February 01, 2026: Borneo and Papua New Guinea expansion
  - Added 2 new civilizations with 13 inventions
  - Kuk Swamp UNESCO World Heritage site featured
- February 01, 2026: SWMM5 antivirus fix
  - Changed to copy-to-clipboard as primary method
  - Download all creates single .txt file to avoid false positives
- February 01, 2026: UI improvements
  - Increased search bar size for better readability
  - Added Globe icon for scrolling to civilizations grid
  - Fixed page scrolling with proper overflow handling
- February 01, 2026: Comprehensive invention template expansion
  - Generated 140+ technical diagrams for ALL inventions (100% coverage)
  - Enhanced InventionPage with tagline, key fact, technical specs, and sources
  - URL-based navigation system: /civilization/invention/details routes
- January 31, 2026: Major update - Water Inventions theme
  - Added "Ancient Waters" color palette and typography
  - Implemented Achievement system with 12 badges
  - Added Timeline filtering by era and technology type
- July 08, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.
