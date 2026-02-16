# Historical Mystery - Water Inventions Explorer

## Overview

Historical Mystery is a 2D interactive educational game focused on exploring humanity's water innovations. The game allows players to discover 1,110+ water inventions across 210 civilizations spanning 300,000+ years. Its main purpose is to educate users about water engineering throughout history using an interactive world map, a comprehensive encyclopedia, and downloadable hydraulic simulation models. It also features educational mini-games, expert commentary, academic citation tools, and deep-linked URLs for sharing/citing. The project aims to provide an engaging platform to learn how water shaped human civilization.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript
- **React Router** for URL-based navigation
- **Tailwind CSS** with a custom "Ancient Waters" color palette
- **Zustand** for state management
- **React Query** for server state management and API calls

### Color Palette (Ancient Waters)
- `--deep-ocean` (Headers, Footer)
- `--river-blue` (Primary brand color)
- `--cerulean` (Buttons, links)
- `--aqua` (Highlights)
- `--parchment` (Background)
- `--aged-paper` (Cards)
- `--terracotta` (Accent elements)
- `--gold` (Premium content)

### Typography
- **Headings**: Cinzel
- **Body**: Source Sans Pro
- **UI Elements**: Inter

### Backend Architecture
- **Express.js** with TypeScript for the REST API
- **Vite** development server with HMR
- **Memory-based storage** with an interface abstraction for future database migration
- **Session-based game progress tracking**

### Key Features

#### Interactive World Map
- 2D map with realistic Earth background.
- Civilization markers at geographic coordinates.
- Continent-based filtering.
- Hover effects for civilization details.

#### Smart Search
- Accessible search bar with autocomplete.
- Searches inventions, civilizations, eras, and technology types.
- Instant navigation and real-time filtering.

#### SWMM5/ICM Invention Models
- 106 unique hydraulic simulation models compatible with EPA SWMM5 and InfoWorks ICM (with 320+ invention mappings).
- Copy-to-clipboard functionality to avoid antivirus issues.
- Option to download all models as a combined .txt file.
- Covers a wide range of ancient hydraulic engineering examples.

#### Invention Detail Pages
- Technical diagrams for each invention (140+ diagrams).
- Includes tagline, key facts, technical specifications, expert commentary, historical sources, and related inventions.
- SWMM5 model indicator with copy button.
- **References & Citations** section with type-coded badges (Academic Paper, Archaeological Report, Museum Collection, Book, UNESCO Heritage, Journal Article) for ~60 key inventions.

#### Civilization Pages
- Overviews of water challenges and solutions specific to each civilization.
- Lists of inventions from that civilization.
- Expert insights, modern legacy, and historical context.

#### UI Components
- **GameUI**: Water-themed HUD.
- **QuickSearchBar**: Search for inventions and civilizations.
- **TimeTravel**: Auto-playback mode for history exploration.
- **ChallengeModes**: Mini-games.
- **Inventory**: Water invention collection viewer.
- **ProgressTracker**: Tracks exploration progress.
- **Achievements**: Badge system.
- **ComparisonTool**: Side-by-side comparison with dual modes (Inventions and Civilizations), search in dropdowns, technology focus analysis, shared technology insights, and clickable navigation to invention details.
- **FeaturedDiscoveries**: Curated highlights.
- **SWMM5Models**: Modal for model downloads.
- **TimelineSlider**: Interactive slider spanning 40,000 years with auto-play and overlap mode.
- **InventionTags**: 20 clickable discovery tags (#irrigation, #floodcontrol, etc.) for cross-civilization search.
- **TechnologyTrees**: Visual tech progression trees (7 paths: Water Lifting, Irrigation, Aqueducts, Sanitation, Dams, Water Clocks, Canals).
- **QuizSystem**: 6 quiz modes (Civilization, Era, Invention, Category, Geography, Mixed Challenge) with timer and scoring.
- **DiffusionMap**: Technology diffusion visualization showing geographic spread of 8 key technologies over time.

### Data Structure
- **Regions**: 139 civilizations with era, date range, position, color.
- **Locations**: Historical sites with coordinates and context.
- **Artifacts**: Water inventions with category, rarity, year, significance.
- **Categories**: irrigation, aqueduct, water-lifting, sanitation, dam, water-clock, fountain, canal.
- **Rarities**: common, rare, epic, legendary.
- **Diagrams**: 152+ technical illustrations.

## External Dependencies

- **React**
- **React Router**
- **Tailwind CSS**
- **Zustand**
- **React Query**
- **Express.js**
- **Vite**
- **EPA SWMM5** (for model compatibility)
- **InfoWorks ICM** (for model import)