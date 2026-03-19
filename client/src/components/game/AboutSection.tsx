import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { X, Droplets, User, Award, ExternalLink, MapPin, Clock, BookOpen, Globe, Lightbulb, FileCode, Scale, Compass, Database, Layers } from "lucide-react";
import { gameData, getAllArtifacts } from "../../data/gameData";

interface AboutSectionProps {
  onClose: () => void;
}

export default function AboutSection({ onClose }: AboutSectionProps) {
  const totalCivs = gameData.regions.length;
  const totalInventions = getAllArtifacts().length;

  return (
    <Card className="water-card max-w-2xl w-full max-h-[85vh] overflow-hidden">
      <CardContent className="p-6 overflow-y-auto max-h-[85vh]">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Droplets className="text-[var(--aqua)]" size={24} />
            <h2 className="font-heading text-2xl text-[var(--gold)]">About Historical Mystery</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
          >
            <X size={20} />
          </Button>
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-gradient-to-r from-[var(--cerulean)]/20 to-[var(--river-blue)]/20 rounded-lg border border-[var(--aqua)]/30">
            <h3 className="font-heading text-xl text-[var(--parchment)] mb-2">What Is This?</h3>
            <p className="text-[var(--parchment)]/90 text-sm leading-relaxed">
              Historical Mystery is the world's most comprehensive interactive encyclopedia of water engineering history. 
              Explore {totalCivs} civilizations and {totalInventions}+ water inventions spanning over 2.8 million years—from 
              Homo habilis lakeside camps to modern mega-infrastructure. Every invention includes technical details, 
              expert commentary, and downloadable hydraulic simulation models.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/20 text-center">
              <Globe className="text-[var(--aqua)] mx-auto mb-1" size={20} />
              <h4 className="font-heading text-[var(--aqua)] text-lg">{totalCivs}</h4>
              <p className="text-[var(--parchment)]/60 text-xs">Civilizations</p>
            </div>
            <div className="p-3 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--gold)]/20 text-center">
              <Lightbulb className="text-[var(--gold)] mx-auto mb-1" size={20} />
              <h4 className="font-heading text-[var(--gold)] text-lg">{totalInventions}+</h4>
              <p className="text-[var(--parchment)]/60 text-xs">Inventions</p>
            </div>
            <div className="p-3 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--cerulean)]/20 text-center">
              <FileCode className="text-[var(--cerulean)] mx-auto mb-1" size={20} />
              <h4 className="font-heading text-[var(--cerulean)] text-lg">153+</h4>
              <p className="text-[var(--parchment)]/60 text-xs">SWMM5 Models</p>
            </div>
            <div className="p-3 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--terracotta)]/20 text-center">
              <Clock className="text-[var(--terracotta)] mx-auto mb-1" size={20} />
              <h4 className="font-heading text-[var(--terracotta)] text-lg">300K+</h4>
              <p className="text-[var(--parchment)]/60 text-xs">Years Covered</p>
            </div>
          </div>

          <div className="p-4 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/20">
            <div className="flex items-center gap-2 mb-3">
              <Database className="text-[var(--aqua)]" size={18} />
              <h4 className="font-heading text-[var(--aqua)]">Methodology & Scope</h4>
            </div>
            <div className="space-y-2 text-sm text-[var(--parchment)]/80">
              <p>
                Every civilization entry is compiled from peer-reviewed archaeological research, UNESCO World Heritage 
                documentation, museum archives, and primary historical sources. Hydraulic models are built using 
                EPA SWMM5 specifications and can be imported into InfoWorks ICM and Autodesk Civil 3D.
              </p>
              <p>
                Coverage spans all inhabited continents—from the water management of Aboriginal Australians (60,000+ years ago) 
                to 21st-century smart water networks. Each invention includes technical specifications, expert commentary 
                from a 50-year water engineering veteran, and links to academic citations.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/20">
            <h4 className="font-heading text-[var(--aqua)] mb-3">Key Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[var(--gold)] mt-0.5 flex-shrink-0" />
                <p className="text-[var(--parchment)]/80">
                  <strong className="text-[var(--parchment)]">Interactive World Map</strong> with clickable civilization markers
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Compass size={14} className="text-[var(--cerulean)] mt-0.5 flex-shrink-0" />
                <p className="text-[var(--parchment)]/80">
                  <strong className="text-[var(--parchment)]">Timeline Explorer</strong> spanning 2.8 million+ years
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Scale size={14} className="text-[var(--terracotta)] mt-0.5 flex-shrink-0" />
                <p className="text-[var(--parchment)]/80">
                  <strong className="text-[var(--parchment)]">Comparison Tool</strong> for side-by-side analysis
                </p>
              </div>
              <div className="flex items-start gap-2">
                <FileCode size={14} className="text-[var(--cerulean)] mt-0.5 flex-shrink-0" />
                <p className="text-[var(--parchment)]/80">
                  <strong className="text-[var(--parchment)]">SWMM5/ICM/Civil 3D</strong> hydraulic model exports
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Layers size={14} className="text-[var(--aqua)] mt-0.5 flex-shrink-0" />
                <p className="text-[var(--parchment)]/80">
                  <strong className="text-[var(--parchment)]">Technology Trees</strong> showing innovation pathways
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Award size={14} className="text-[var(--gold)] mt-0.5 flex-shrink-0" />
                <p className="text-[var(--parchment)]/80">
                  <strong className="text-[var(--parchment)]">Quiz System</strong> with 6 challenge modes
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/20">
            <h4 className="font-heading text-[var(--aqua)] mb-3">How To Use</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--gold)] mt-0.5 flex-shrink-0" />
                <p className="text-[var(--parchment)]/80">
                  <strong className="text-[var(--parchment)]">Explore the Map:</strong> Click on civilization markers 
                  to learn about each region's water engineering achievements.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Droplets size={16} className="text-[var(--aqua)] mt-0.5 flex-shrink-0" />
                <p className="text-[var(--parchment)]/80">
                  <strong className="text-[var(--parchment)]">Discover Inventions:</strong> Click on water inventions 
                  to see detailed explanations, technical diagrams, and expert commentary.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-[var(--cerulean)] mt-0.5 flex-shrink-0" />
                <p className="text-[var(--parchment)]/80">
                  <strong className="text-[var(--parchment)]">Filter & Search:</strong> Filter by era and region, or use 
                  the search bar to find any of {totalInventions}+ inventions instantly.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen size={16} className="text-[var(--terracotta)] mt-0.5 flex-shrink-0" />
                <p className="text-[var(--parchment)]/80">
                  <strong className="text-[var(--parchment)]">Cite & Export:</strong> Use the "Cite This" button on any 
                  invention for academic citations, and export hydraulic models to SWMM5, ICM, or Civil 3D.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--gold)]/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--cerulean)] to-[var(--deep-ocean)] flex items-center justify-center">
                <User size={24} className="text-[var(--aqua)]" />
              </div>
              <div>
                <h4 className="font-heading text-[var(--gold)]">Created by Robert Dickinson</h4>
                <p className="text-[var(--parchment)]/60 text-xs">50+ years in water infrastructure modeling</p>
              </div>
            </div>
            <p className="text-[var(--parchment)]/80 text-sm mb-3">
              Autodesk/Innovyze veteran with decades of experience in hydraulic modeling, water infrastructure design, 
              and EPA SWMM5 development. This project combines a lifetime of engineering expertise with a passion for 
              preserving and sharing the story of humanity's relationship with water.
            </p>
            <blockquote className="italic text-[var(--parchment)]/90 text-sm px-4 py-2 border-l-4 border-[var(--gold)] bg-[var(--deep-ocean)]/40">
              "Ancient engineers solved problems we still face today. Their ingenuity inspires modern hydraulic design."
            </blockquote>
          </div>

          <div className="p-4 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/20">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="text-[var(--aqua)]" size={18} />
              <h4 className="font-heading text-[var(--aqua)]">Why Water History Matters</h4>
            </div>
            <p className="text-[var(--parchment)]/80 text-sm leading-relaxed">
              Water didn't just shape history—it enabled civilization itself. Every ancient society had to solve 
              the same fundamental challenges: getting clean water to people, removing waste, controlling floods, 
              and irrigating crops. Understanding how they succeeded (and sometimes failed) helps us build 
              better, more sustainable water systems today.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center pt-4 border-t border-[var(--aqua)]/20">
            <a 
              href="https://swmm5.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-[var(--cerulean)] hover:text-[var(--aqua)] transition-colors"
            >
              <ExternalLink size={14} />
              swmm5.org
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
