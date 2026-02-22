import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft, Play, Beaker, Info, X, Waves } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";
import LanguageSelector from "./LanguageSelector";
import { 
  ShadufSimulator, 
  ArchimedesScrewSimulator, 
  WaterClockSimulator, 
  NoriaWheelSimulator,
  ShishiOdoshiSimulator,
  QanatSimulator,
  RomanAqueductSimulator,
  SakiaSimulator,
  ChainPumpSimulator,
  WindmillPumpSimulator,
  DamReservoirSimulator,
  IrrigationCanalSimulator,
  CisternRainwaterSimulator,
  SiphonPipelineSimulator,
  FloodControlLeveeSimulator,
  DesalinationSimulator,
  StepwellSimulator,
  WaterFiltrationSimulator,
  FogCollectorSimulator,
  TidalFishTrapSimulator,
  availableSimulators 
} from "./simulators";

type SimulatorId = 'shaduf' | 'archimedes-screw' | 'water-clock' | 'noria-wheel' | 'shishi-odoshi' | 'qanat' | 'roman-aqueduct' | 'sakia' | 'chain-pump' | 'windmill-pump' | 'dam-reservoir' | 'irrigation-canal' | 'cistern-rainwater' | 'siphon-pipeline' | 'flood-control-levee' | 'desalination' | 'stepwell' | 'water-filtration' | 'fog-collector' | 'tidal-fish-trap';

const simulatorComponents: Record<SimulatorId, React.ComponentType<{ onClose?: () => void }>> = {
  'shaduf': ShadufSimulator,
  'archimedes-screw': ArchimedesScrewSimulator,
  'water-clock': WaterClockSimulator,
  'noria-wheel': NoriaWheelSimulator,
  'shishi-odoshi': ShishiOdoshiSimulator,
  'qanat': QanatSimulator,
  'roman-aqueduct': RomanAqueductSimulator,
  'sakia': SakiaSimulator,
  'chain-pump': ChainPumpSimulator,
  'windmill-pump': WindmillPumpSimulator,
  'dam-reservoir': DamReservoirSimulator,
  'irrigation-canal': IrrigationCanalSimulator,
  'cistern-rainwater': CisternRainwaterSimulator,
  'siphon-pipeline': SiphonPipelineSimulator,
  'flood-control-levee': FloodControlLeveeSimulator,
  'desalination': DesalinationSimulator,
  'stepwell': StepwellSimulator,
  'water-filtration': WaterFiltrationSimulator,
  'fog-collector': FogCollectorSimulator,
  'tidal-fish-trap': TidalFishTrapSimulator,
};

export default function SimulatorHub() {
  const navigate = useNavigate();
  const t = useTranslation();
  const [activeSimulator, setActiveSimulator] = useState<SimulatorId | null>(null);

  const renderSimulator = () => {
    if (!activeSimulator) return null;
    const Component = simulatorComponents[activeSimulator];
    return Component ? <Component onClose={() => setActiveSimulator(null)} /> : null;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Very Easy': return 'text-green-400 bg-green-400/10';
      case 'Easy': return 'text-blue-400 bg-blue-400/10';
      case 'Medium-Easy': return 'text-yellow-400 bg-yellow-400/10';
      case 'Medium': return 'text-orange-400 bg-orange-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="fixed inset-0 bg-[var(--parchment)] overflow-y-auto z-10">
      <div className="bg-[var(--deep-ocean)] text-[var(--parchment)] p-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/')}
            className="text-[var(--parchment)] hover:bg-[var(--river-blue)]"
          >
            <ArrowLeft size={16} className="mr-1" />
            {t.nav.back}
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl font-cinzel text-[var(--gold)]">{t.simulator.title}</h1>
            <p className="text-[var(--parchment)]/70 text-sm">{t.simulator.subtitle}</p>
          </div>
          <LanguageSelector />
          <Beaker size={32} className="text-[var(--gold)]" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <Info size={20} className="text-[var(--gold)] mt-0.5" />
            <div>
              <h3 className="text-[var(--deep-ocean)] font-medium mb-1">Learn by Doing</h3>
              <p className="text-[var(--deep-ocean)]/70 text-sm">
                Each simulator models real physics from ancient water technologies. Adjust parameters like counterweights, 
                flow rates, and dimensions to understand how these ingenious inventions worked. See real-time results 
                including flow rates, efficiency, and mechanical advantage.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableSimulators.map((sim) => (
            <Card 
              key={sim.id} 
              className="bg-[var(--aged-paper)] border-[var(--terracotta)]/30 hover:border-[var(--gold)] transition-colors cursor-pointer group"
              onClick={() => setActiveSimulator(sim.id as SimulatorId)}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{sim.icon}</span>
                  <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(sim.difficulty)}`}>
                    {sim.difficulty}
                  </span>
                </div>
                <h3 className="text-[var(--deep-ocean)] font-cinzel text-lg mb-1">{sim.name}</h3>
                <p className="text-[var(--deep-ocean)]/60 text-xs mb-2">
                  {sim.civilization} • {sim.period}
                </p>
                <p className="text-[var(--deep-ocean)]/80 text-sm mb-3">{sim.description}</p>
                <Button 
                  size="sm" 
                  className="w-full bg-[var(--cerulean)] hover:bg-[var(--cerulean)]/80 group-hover:bg-[var(--gold)] group-hover:text-[var(--deep-ocean)] transition-colors"
                >
                  <Play size={14} className="mr-1" />
                  {t.simulator.launch}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/mannings-n')}
            className="border-[var(--cerulean)]/40 text-[var(--deep-ocean)] hover:bg-[var(--cerulean)]/10"
          >
            <Waves size={14} className="mr-2 text-[var(--cerulean)]" />
            Manning's n Coefficient Reference & Calculator
          </Button>
        </div>

        <div className="mt-4 text-center text-[var(--deep-ocean)]/60 text-sm">
          <p>20 interactive simulators — explore ancient & modern hydraulic engineering!</p>
        </div>
      </div>

      {activeSimulator && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-start justify-center z-50 p-4 overflow-y-auto"
          onClick={() => setActiveSimulator(null)}
        >
          <div 
            className="w-full max-w-4xl my-4"
            onClick={(e) => e.stopPropagation()}
          >
            {renderSimulator()}
          </div>
        </div>
      )}
    </div>
  );
}
