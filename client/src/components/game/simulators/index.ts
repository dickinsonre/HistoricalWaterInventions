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
export { default as DamReservoirSimulator } from './DamReservoirSimulator';
export { default as IrrigationCanalSimulator } from './IrrigationCanalSimulator';
export { default as CisternRainwaterSimulator } from './CisternRainwaterSimulator';
export { default as SiphonPipelineSimulator } from './SiphonPipelineSimulator';
export { default as FloodControlLeveeSimulator } from './FloodControlLeveeSimulator';
export { default as DesalinationSimulator } from './DesalinationSimulator';
export { default as StepwellSimulator } from './StepwellSimulator';
export { default as WaterFiltrationSimulator } from './WaterFiltrationSimulator';
export { default as FogCollectorSimulator } from './FogCollectorSimulator';
export { default as TidalFishTrapSimulator } from './TidalFishTrapSimulator';

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
  },
  {
    id: 'dam-reservoir',
    name: 'Dam & Reservoir',
    civilization: 'Ancient Yemen',
    period: '~750 BCE',
    difficulty: 'Medium',
    description: 'Control water storage and release for flood management and irrigation',
    icon: '🏗️'
  },
  {
    id: 'irrigation-canal',
    name: 'Irrigation Canal Network',
    civilization: 'Hohokam',
    period: '~600 CE',
    difficulty: 'Medium',
    description: 'Branching canal system with sluice gates distributing water to fields',
    icon: '🌾'
  },
  {
    id: 'cistern-rainwater',
    name: 'Cistern Rainwater Collector',
    civilization: 'Ancient Carthage',
    period: '~500 BCE',
    difficulty: 'Easy',
    description: 'Roof catchment and underground cistern for rainwater harvesting',
    icon: '🏺'
  },
  {
    id: 'siphon-pipeline',
    name: 'Inverted Siphon Pipeline',
    civilization: 'Pergamon',
    period: '~200 BCE',
    difficulty: 'Medium-Easy',
    description: 'Pressurized pipeline crossing valleys using inverted siphon principle',
    icon: '🔄'
  },
  {
    id: 'flood-control-levee',
    name: 'Flood Control Levee',
    civilization: 'Ancient Mesopotamia',
    period: '~3000 BCE',
    difficulty: 'Easy',
    description: 'Earthen embankments protecting settlements from seasonal river floods',
    icon: '🛡️'
  },
  {
    id: 'desalination',
    name: 'Reverse Osmosis Desalination',
    civilization: 'Modern Era',
    period: '~1960 CE',
    difficulty: 'Medium',
    description: 'Membrane-based seawater purification using high-pressure filtration',
    icon: '🧪'
  },
  {
    id: 'stepwell',
    name: 'Stepwell (Vav)',
    civilization: 'Medieval India',
    period: '~1063 CE',
    difficulty: 'Easy',
    description: 'Ornate inverted pyramid structure with steps descending to water table',
    icon: '🪜'
  },
  {
    id: 'water-filtration',
    name: 'Sand & Gravel Filtration',
    civilization: 'Ancient Egypt',
    period: '~1500 BCE',
    difficulty: 'Very Easy',
    description: 'Multi-layer filtration using sand, gravel, and charcoal for clean water',
    icon: '🫗'
  },
  {
    id: 'fog-collector',
    name: 'Fog Net Collector',
    civilization: 'Chile/Morocco',
    period: '~1980 CE',
    difficulty: 'Easy',
    description: 'Mesh nets harvesting water from fog in arid coastal regions',
    icon: '🌫️'
  },
  {
    id: 'tidal-fish-trap',
    name: 'Tidal Fish Trap',
    civilization: 'Aboriginal Australia',
    period: '~4600 BCE',
    difficulty: 'Easy',
    description: 'Stone wall enclosures using tidal cycles to trap fish — older than the Pyramids',
    icon: '🐟'
  }
];
