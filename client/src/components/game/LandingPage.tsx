import { Globe, BookOpen, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface LandingPageProps {
  onSelectJourney: (journey: "3d-world" | "encyclopedia" | "timeline") => void;
}

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
          Explore 21 civilizations, 62+ water inventions in 3D, and 80+ technologies in our encyclopedia. 
          From ancient shaduf to Roman aqueducts to modern mega-dams.
        </p>
      </header>

      <main className="flex-1 px-4 pb-8">
        <section className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl text-center text-[var(--parchment)] mb-8">
            Choose Your Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
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
                  Explore 21 civilizations on an interactive map with 62+ water inventions
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
          </div>
        </section>
      </main>

      <footer className="bg-[var(--deep-ocean)] border-t border-[var(--aqua)]/20 py-6 px-4">
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
