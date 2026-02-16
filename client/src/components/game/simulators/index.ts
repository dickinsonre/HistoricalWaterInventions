export { default as ShadufSimulator } from './ShadufSimulator';
export { default as ArchimedesScrewSimulator } from './ArchimedesScrewSimulator';
export { default as WaterClockSimulator } from './WaterClockSimulator';
export { default as NoriaWheelSimulator } from './NoriaWheelSimulator';
export { default as ShishiOdoshiSimulator } from './ShishiOdoshiSimulator';
export { default as QanatSimulator } from './QanatSimulator';
export { default as RomanAqueductSimulator } from './RomanAqueductSimulator';
export { default as SakiaSimulator } from './SakiaSimulator';
export { default as ChainPumpSimulator } from './ChainPumpSimulator';
export { default as WindmillPumpSimulator } from './WindmillPumpSimulator';

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
  },
  {
    id: 'qanat',
    name: 'Qanat Underground Tunnel',
    civilization: 'Ancient Persia',
    period: '~1000 BCE',
    difficulty: 'Medium',
    description: 'Gravity-fed underground channel tapping mountain aquifers',
    icon: '🕳️'
  },
  {
    id: 'roman-aqueduct',
    name: 'Roman Aqueduct',
    civilization: 'Ancient Rome',
    period: '~300 BCE',
    difficulty: 'Medium',
    description: 'Gravity-fed stone channel carrying water across valleys',
    icon: '🏛️'
  },
  {
    id: 'sakia',
    name: 'Sakia Waterwheel',
    civilization: 'Ancient Egypt',
    period: '~400 BCE',
    difficulty: 'Easy',
    description: 'Ox-powered geared waterwheel lifting water for irrigation',
    icon: '🐂'
  },
  {
    id: 'chain-pump',
    name: 'Chain Pump (翻車)',
    civilization: 'Han Dynasty China',
    period: '~200 BCE',
    difficulty: 'Medium',
    description: 'Square-pallet chain lifting water through inclined tube',
    icon: '⛓️'
  },
  {
    id: 'windmill-pump',
    name: 'Dutch Windmill Pump',
    civilization: 'Netherlands',
    period: '~1400 CE',
    difficulty: 'Medium',
    description: 'Wind-powered screw pump draining polders below sea level',
    icon: '🌬️'
  }
];
