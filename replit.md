# Historical Mystery - Water Inventions Explorer

## Overview

Historical Mystery is a 3D interactive adventure game focused on humanity's water innovations throughout history. Players explore 8 ancient civilizations, discover 25+ water inventions from 6000 BCE to present, and learn about the genius of ancient hydraulic engineering. The application features the "Ancient Waters" visual theme with gamification elements including achievements and progress tracking.

## Theme: Ancient Waters

The game showcases how water shaped human civilization through:
- **8 Civilizations**: Ancient Egypt, Mesopotamia, Indus Valley, Ancient Greece, Roman Empire, Ancient China, Islamic Golden Age, Mesoamerica
- **25+ Water Inventions**: Aqueducts, irrigation systems, water-lifting devices, sanitation, dams, water clocks, fountains, canals
- **Time Periods**: Ancient (6000-500 BCE), Classical (500 BCE-500 CE), Medieval (500-1400 CE)

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for the user interface
- **React Three Fiber** for 3D rendering and scene management
- **@react-three/drei** for 3D utilities and components
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

## Key Components

### 3D Game World
- **WorldMap**: Main 3D scene with water-themed background and 8 civilization regions
- **Region Components**: Dodecahedron shapes representing civilizations with era-based coloring
- **Location Components**: Octahedron markers for historical sites
- **Artifact Components**: Icosahedron water inventions with rarity-based coloring
- **Lighting System**: Ocean-themed ambient lighting with fog effects

### Game State Management
- **useGameState**: Manages current game phase and selections
- **useProgress**: Tracks player progress, unlocked regions, explored locations
- **useInventory**: Manages discovered water invention collection
- **useAudio**: Handles background music and sound effects

### UI Components
- **GameUI**: Water-themed HUD with progress indicators
- **Inventory**: Water invention collection viewer with category and rarity filters
- **ProgressTracker**: Exploration progress by civilization and era
- **Achievements**: 12+ badges across Explorer, Scholar, Collector, Time Traveler categories
- **TimelineFilter**: Era and technology type filtering system

### Data Structure
- **Regions**: 8 civilizations with era, date range, position, color
- **Locations**: Historical sites with coordinates and historical context
- **Artifacts**: Water inventions with category, rarity, year, significance
- **Categories**: irrigation, aqueduct, water-lifting, sanitation, dam, water-clock, fountain, canal
- **Rarities**: common, rare, epic, legendary

## Game Features

### Exploration
- Click regions to unlock civilizations
- Explore locations within each civilization
- Discover water inventions with historical significance
- Progress automatically saved across devices

### Achievement System
- **Explorer Badges**: Water Seeker, Aqua Explorer, Global Citizen, Master Explorer
- **Scholar Badges**: History Buff, Professor
- **Collector Badges**: Curator, Archivist
- **Time Traveler Badges**: Ancient Visitor, Classical Scholar, Medieval Wanderer, Time Master

### Timeline Filtering
- Filter by era: Ancient, Classical, Medieval, Modern
- Filter by technology type: 8 categories of water inventions
- View all 25+ inventions with detailed historical information

## External Dependencies

### Core Framework Dependencies
- **React Three Fiber**: 3D rendering engine
- **@react-three/drei**: 3D utilities (Text, useTexture, etc.)
- **Radix UI**: Accessible component primitives
- **React Query**: Server state management
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Utility-first styling
- **Google Fonts**: Cinzel, Source Sans Pro, Inter

## File Structure

```
client/src/
├── App.tsx                 # Main app with 3D canvas
├── index.css               # Ancient Waters color palette
├── components/
│   └── game/
│       ├── WorldMap.tsx    # 3D world with water theme
│       ├── Region.tsx      # Civilization markers
│       ├── Location.tsx    # Historical site markers
│       ├── Artifact.tsx    # Water invention objects
│       ├── GameUI.tsx      # Main HUD
│       ├── Inventory.tsx   # Invention collection
│       ├── ProgressTracker.tsx  # Exploration progress
│       ├── Achievements.tsx     # Badge system
│       └── TimelineFilter.tsx   # Era/category filters
├── data/
│   └── gameData.ts         # 8 civilizations, 25+ inventions
└── lib/stores/
    ├── useGameState.tsx    # Game phase management
    ├── useProgress.tsx     # Progress tracking
    ├── useInventory.tsx    # Collection management
    └── useAudio.tsx        # Sound management
```

## Changelog

- January 31, 2026: Major update - Water Inventions theme
  - Added "Ancient Waters" color palette and typography
  - Expanded to 8 civilizations (added Mesopotamia, Indus Valley, China, Islamic Golden Age, Mesoamerica)
  - Added 25+ water inventions with categories and historical context
  - Implemented Achievement system with 12 badges
  - Added Timeline filtering by era and technology type
  - Updated all UI components with water-themed styling
- July 08, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.