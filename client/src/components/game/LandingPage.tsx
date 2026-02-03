import { Globe, BookOpen, Clock, Gamepad2, ExternalLink, Droplets, MapPin, ChevronRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { gameData, getAllArtifacts } from "../../data/gameData";

interface LandingPageProps {
  onSelectJourney: (journey: "3d-world" | "encyclopedia" | "timeline" | "minigames") => void;
}

const FEATURED_INVENTIONS = [
  { name: "Roman Aqueducts", civ: "Ancient Rome", year: "312 BCE", fact: "Supplied 1 million people with 1 billion liters daily" },
  { name: "Rani ki Vav Stepwell", civ: "Medieval India", year: "1063 CE", fact: "7-story underground temple to water, UNESCO site" },
  { name: "Angkor Baray", civ: "Khmer Empire", year: "802 CE", fact: "53 million cubic meters - city-sized reservoirs" },
  { name: "Persian Qanats", civ: "Ancient Persia", year: "1000 BCE", fact: "Underground channels up to 70km long, still working" },
  { name: "G-Cans Tokyo", civ: "Modern Japan", year: "2006 CE", fact: "Cathedral-sized underground flood control system" },
];

export default function LandingPage({ onSelectJourney }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[var(--deep-ocean)] text-[var(--parchment)] flex flex-col">
      <header className="text-center py-12 px-4">
        <h1 className="font-heading text-4xl md:text-5xl text-[var(--gold)] mb-4">
          Historical Mystery
        </h1>
        <p className="text-xl text-[var(--aqua)] mb-2">
          Discover How Water Shaped Civilization
        </p>
        <p className="text-[var(--parchment)]/70 max-w-2xl mx-auto">
          Explore 92+ civilizations, 300+ water inventions across 6 continents and 40,000+ years. 
          From Aboriginal fish traps to Korean ondol to Nan Madol's mysterious canals.
        </p>
      </header>

      <main className="flex-1 px-4 pb-8">
        <section className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl text-center text-[var(--parchment)] mb-8">
            Choose Your Journey
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card 
              className="water-card cursor-pointer hover:border-[var(--gold)] transition-all hover:scale-105 group"
              onClick={() => onSelectJourney("3d-world")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--river-blue)] flex items-center justify-center group-hover:bg-[var(--cerulean)] transition-colors">
                  <Globe className="w-8 h-8 text-[var(--parchment)]" />
                </div>
                <h3 className="font-heading text-xl text-[var(--gold)] mb-2">
                  World Map Explorer
                </h3>
                <p className="text-[var(--parchment)]/80 text-sm mb-4">
                  Explore 92+ civilizations on an interactive map with 300+ water inventions
                </p>
                <span className="inline-block px-3 py-1 bg-[var(--cerulean)]/30 rounded-full text-xs text-[var(--aqua)] border border-[var(--aqua)]/30">
                  Interactive Map
                </span>
              </CardContent>
            </Card>

            <Card 
              className="water-card cursor-pointer hover:border-[var(--gold)] transition-all hover:scale-105 group"
              onClick={() => onSelectJourney("encyclopedia")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--river-blue)] flex items-center justify-center group-hover:bg-[var(--cerulean)] transition-colors">
                  <BookOpen className="w-8 h-8 text-[var(--parchment)]" />
                </div>
                <h3 className="font-heading text-xl text-[var(--gold)] mb-2">
                  Technology Encyclopedia
                </h3>
                <p className="text-[var(--parchment)]/80 text-sm mb-4">
                  Deep-dive into 80+ water technologies with technical details
                </p>
                <span className="inline-block px-3 py-1 bg-[var(--cerulean)]/30 rounded-full text-xs text-[var(--aqua)] border border-[var(--aqua)]/30">
                  Reference Guide
                </span>
              </CardContent>
            </Card>

            <Card 
              className="water-card cursor-pointer hover:border-[var(--gold)] transition-all hover:scale-105 group"
              onClick={() => onSelectJourney("timeline")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--river-blue)] flex items-center justify-center group-hover:bg-[var(--cerulean)] transition-colors">
                  <Clock className="w-8 h-8 text-[var(--parchment)]" />
                </div>
                <h3 className="font-heading text-xl text-[var(--gold)] mb-2">
                  Interactive Timeline
                </h3>
                <p className="text-[var(--parchment)]/80 text-sm mb-4">
                  See how water technology evolved across 8,000 years
                </p>
                <span className="inline-block px-3 py-1 bg-[var(--cerulean)]/30 rounded-full text-xs text-[var(--aqua)] border border-[var(--aqua)]/30">
                  Historical View
                </span>
              </CardContent>
            </Card>

            <Card 
              className="water-card cursor-pointer hover:border-[var(--gold)] transition-all hover:scale-105 group"
              onClick={() => onSelectJourney("minigames")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--terracotta)] flex items-center justify-center group-hover:bg-[var(--gold)] transition-colors">
                  <Gamepad2 className="w-8 h-8 text-[var(--parchment)]" />
                </div>
                <h3 className="font-heading text-xl text-[var(--gold)] mb-2">
                  Mini-Games
                </h3>
                <p className="text-[var(--parchment)]/80 text-sm mb-4">
                  Learn hydraulics through fun quizzes and challenges
                </p>
                <span className="inline-block px-3 py-1 bg-[var(--terracotta)]/30 rounded-full text-xs text-[var(--gold)] border border-[var(--gold)]/30">
                  Educational Games
                </span>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Visual Preview Section */}
        <section className="max-w-5xl mx-auto mt-12">
          <h2 className="font-heading text-xl text-center text-[var(--parchment)] mb-6">
            Discover What's Inside
          </h2>

          {/* Featured Diagram Preview */}
          <Card className="water-card mb-8">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-48 md:h-64 overflow-hidden rounded-l-lg">
                  <img 
                    src="/diagrams/aqueduct.png" 
                    alt="Roman Aqueduct Diagram" 
                    className="w-full h-full object-contain bg-[var(--aged-paper)] p-4"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <span className="text-[var(--terracotta)] text-xs uppercase tracking-wide mb-2">Featured Technology</span>
                  <h3 className="font-heading text-xl text-[var(--gold)] mb-2">Roman Aqueducts</h3>
                  <p className="text-[var(--parchment)]/80 text-sm mb-4">
                    Engineering marvels that supplied ancient Rome with 1 billion liters of fresh water daily. 
                    Built with precise gradients of 1:4800, these structures remain standing after 2,000 years.
                  </p>
                  <button 
                    onClick={() => onSelectJourney("3d-world")}
                    className="self-start px-4 py-2 bg-[var(--cerulean)] hover:bg-[var(--river-blue)] text-white rounded-lg text-sm transition-colors flex items-center gap-2"
                  >
                    Explore This Invention <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Featured Inventions */}
            <Card className="water-card md:col-span-2">
              <CardContent className="p-4">
                <h3 className="font-heading text-[var(--gold)] mb-4 flex items-center gap-2">
                  <Droplets size={18} className="text-[var(--aqua)]" />
                  Featured Water Inventions
                </h3>
                <div className="space-y-3">
                  {FEATURED_INVENTIONS.map((inv, i) => (
                    <div key={i} className="flex items-start gap-3 p-2 bg-[var(--deep-ocean)]/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-[var(--cerulean)]/30 flex items-center justify-center text-[var(--aqua)] text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[var(--parchment)] font-medium text-sm">{inv.name}</span>
                          <span className="text-[var(--parchment)]/40 text-xs">•</span>
                          <span className="text-[var(--aqua)] text-xs">{inv.civ}</span>
                          <span className="text-[var(--parchment)]/40 text-xs">•</span>
                          <span className="text-[var(--gold)] text-xs">{inv.year}</span>
                        </div>
                        <p className="text-[var(--parchment)]/70 text-xs mt-1">{inv.fact}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => onSelectJourney("3d-world")}
                  className="mt-4 text-[var(--aqua)] text-sm hover:text-[var(--gold)] transition-colors flex items-center gap-1"
                >
                  Explore all 300+ inventions <ChevronRight size={14} />
                </button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="water-card">
              <CardContent className="p-4">
                <h3 className="font-heading text-[var(--gold)] mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-[var(--terracotta)]" />
                  What You'll Explore
                </h3>
                <div className="space-y-4">
                  <div className="text-center p-3 bg-[var(--deep-ocean)]/50 rounded-lg">
                    <div className="text-3xl font-heading text-[var(--gold)]">{gameData.regions.length}</div>
                    <div className="text-[var(--parchment)]/70 text-xs">Civilizations</div>
                  </div>
                  <div className="text-center p-3 bg-[var(--deep-ocean)]/50 rounded-lg">
                    <div className="text-3xl font-heading text-[var(--aqua)]">{getAllArtifacts().length}+</div>
                    <div className="text-[var(--parchment)]/70 text-xs">Water Inventions</div>
                  </div>
                  <div className="text-center p-3 bg-[var(--deep-ocean)]/50 rounded-lg">
                    <div className="text-3xl font-heading text-[var(--terracotta)]">6</div>
                    <div className="text-[var(--parchment)]/70 text-xs">Continents</div>
                  </div>
                  <div className="text-center p-3 bg-[var(--deep-ocean)]/50 rounded-lg">
                    <div className="text-3xl font-heading text-[var(--cerulean)]">40,000+</div>
                    <div className="text-[var(--parchment)]/70 text-xs">Years of History</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Regions Preview */}
          <Card className="water-card">
            <CardContent className="p-4">
              <h3 className="font-heading text-[var(--gold)] mb-4">Explore by Region</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { name: "Africa", count: 5, color: "bg-amber-500" },
                  { name: "Asia", count: 18, color: "bg-red-500" },
                  { name: "Europe", count: 8, color: "bg-blue-500" },
                  { name: "Americas", count: 5, color: "bg-green-500" },
                  { name: "Pacific", count: 6, color: "bg-teal-500" },
                ].map(region => (
                  <div 
                    key={region.name}
                    className="p-3 bg-[var(--deep-ocean)]/50 rounded-lg text-center hover:bg-[var(--river-blue)]/30 transition-colors cursor-pointer"
                    onClick={() => onSelectJourney("3d-world")}
                  >
                    <div className={`w-4 h-4 rounded-full ${region.color} mx-auto mb-2`} />
                    <div className="text-[var(--parchment)] text-sm font-medium">{region.name}</div>
                    <div className="text-[var(--parchment)]/60 text-xs">{region.count} civilizations</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-[var(--deep-ocean)] border-t border-[var(--aqua)]/20 py-6 px-4 mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--river-blue)] flex items-center justify-center text-[var(--parchment)] font-heading text-lg border-2 border-[var(--aqua)]/30">
                RD
              </div>
              <div>
                <p className="text-[var(--parchment)] text-sm">
                  Created by <strong className="text-[var(--gold)]">Robert Dickinson</strong>
                </p>
                <p className="text-[var(--parchment)]/60 text-xs">
                  50+ years in water infrastructure engineering
                </p>
              </div>
            </div>
            
            <p className="text-[var(--parchment)]/80 text-xs italic max-w-md hidden md:block">
              "Ancient engineers solved problems we still face today. This project connects 8,000 years of water wisdom to modern challenges."
            </p>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[var(--parchment)]/60">Also explore:</span>
              <a 
                href="https://swmm5.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--aqua)] hover:text-[var(--gold)] transition-colors flex items-center gap-1"
              >
                SWMM5.org <ExternalLink size={10} />
              </a>
              <span className="text-[var(--parchment)]/40">•</span>
              <a 
                href="/rainfall-tracker" 
                className="text-[var(--aqua)] hover:text-[var(--gold)] transition-colors"
              >
                Rainfall Tracker
              </a>
              <span className="text-[var(--parchment)]/40">•</span>
              <a 
                href="/network-school" 
                className="text-[var(--aqua)] hover:text-[var(--gold)] transition-colors"
              >
                Life at Network School
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
