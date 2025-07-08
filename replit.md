# Enchanted History - Interactive 3D Adventure Game

## Overview

Enchanted History is a 3D interactive adventure game built with React Three Fiber and Express.js. Players explore historical regions like Ancient Egypt, discover artifacts, and progress through an immersive world map experience. The application combines modern web technologies with game mechanics to create an educational and engaging historical exploration experience.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for the user interface
- **React Three Fiber** for 3D rendering and scene management
- **@react-three/drei** for 3D utilities and components
- **Tailwind CSS** with custom design system using shadcn/ui components
- **Zustand** for state management across game components
- **React Query** for server state management and API calls

### Backend Architecture
- **Express.js** with TypeScript for the REST API server
- **Vite** development server integration with HMR support
- **Memory-based storage** with interface abstraction for future database migration
- **Session-based game progress tracking**

### Build System
- **Vite** for frontend bundling and development
- **esbuild** for server-side code compilation
- **TypeScript** compilation with strict mode enabled
- **ESM modules** throughout the application

## Key Components

### 3D Game World
- **WorldMap**: Main 3D scene containing regions and interactive elements
- **Region Components**: Clickable 3D objects representing historical periods
- **Location & Artifact Systems**: Interactive discovery mechanics
- **Camera Controller**: Smooth camera transitions and positioning
- **Lighting System**: Ambient and directional lighting with fog effects

### Game State Management
- **useGameState**: Manages current game phase and selections
- **useProgress**: Tracks player progress and unlocked content
- **useInventory**: Manages discovered artifacts collection
- **useAudio**: Handles background music and sound effects

### UI Components
- **GameUI**: Heads-up display with progress indicators
- **Inventory System**: Artifact collection and viewing
- **Progress Tracker**: Achievement and completion tracking
- **Responsive Design**: Mobile-friendly interface controls

## Data Flow

1. **Game Initialization**: 
   - Load saved progress from server
   - Initialize 3D scene with world map
   - Set up audio systems and controls

2. **Player Interaction**:
   - Click regions to explore historical periods
   - Discover locations within regions
   - Collect artifacts through 3D interactions
   - Progress automatically saved to server

3. **State Persistence**:
   - Game progress synced with backend API
   - Local storage for inventory and preferences
   - Session-based user identification

4. **Real-time Updates**:
   - Zustand stores provide reactive state updates
   - React Query handles server synchronization
   - 3D scene updates based on game state changes

## External Dependencies

### Core Framework Dependencies
- **React Three Fiber**: 3D rendering engine
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **Drizzle ORM**: Type-safe database operations
- **Radix UI**: Accessible component primitives
- **React Query**: Server state management

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Utility-first styling
- **ESLint/Prettier**: Code quality and formatting

### Game Assets
- **GLTF/GLB models**: 3D assets for regions and artifacts
- **Audio files**: Background music and sound effects
- **Texture maps**: Materials for 3D objects

## Deployment Strategy

### Development Mode
```bash
npm run dev          # Start development server with HMR
npm run db:push      # Push database schema changes
```

### Production Build
```bash
npm run build        # Build both client and server
npm start           # Start production server
```

### Database Management
- **Drizzle Kit**: Schema management and migrations
- **PostgreSQL**: Production database (Neon serverless)
- **Memory Storage**: Development fallback implementation

### Asset Optimization
- **Vite asset processing**: Optimized bundling for 3D models and textures
- **GLSL shader support**: Custom shaders for visual effects
- **Audio format support**: MP3, OGG, and WAV files

## Changelog

Changelog:
- July 08, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.