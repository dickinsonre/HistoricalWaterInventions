export { default as ShadufSimulator } from './ShadufSimulator';
export { default as ArchimedesScrewSimulator } from './ArchimedesScrewSimulator';
export { default as WaterClockSimulator } from './WaterClockSimulator';
export { default as NoriaWheelSimulator } from './NoriaWheelSimulator';
export { default as ShishiOdoshiSimulator } from './ShishiOdoshiSimulator';

export const availableSimulators = [
  {
    id: 'shaduf',
    name: 'Shaduf',
    civilization: 'Ancient Egypt',
    period: '~1550 BCE',
    difficulty: 'Very Easy',
    description: 'Lever-based water lifting device with counterweight',
    icon: '⚖️'
  },
  {
    id: 'archimedes-screw',
    name: 'Archimedes Screw',
    civilization: 'Ancient Greece',
    period: '~250 BCE',
    difficulty: 'Very Easy',
    description: 'Rotating helix that lifts water through enclosed tube',
    icon: '🔩'
  },
  {
    id: 'water-clock',
    name: 'Water Clock (Clepsydra)',
    civilization: 'Ancient Egypt',
    period: '~1500 BCE',
    difficulty: 'Easy',
    description: 'Time-keeping device using regulated water flow',
    icon: '⏰'
  },
  {
    id: 'noria-wheel',
    name: 'Noria Water Wheel',
    civilization: 'Islamic Golden Age',
    period: '~800 CE',
    difficulty: 'Easy',
    description: 'Current-powered wheel with buckets for lifting water',
    icon: '🎡'
  },
  {
    id: 'shishi-odoshi',
    name: 'Shishi-odoshi (Deer Scarer)',
    civilization: 'Ancient Japan',
    period: '~1600 CE',
    difficulty: 'Very Easy',
    description: 'Bamboo tipping device creating rhythmic sounds',
    icon: '🎋'
  }
];
