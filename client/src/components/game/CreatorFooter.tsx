import { ExternalLink, Github } from "lucide-react";

export default function CreatorFooter() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 pointer-events-auto bg-gradient-to-t from-[var(--deep-ocean)] to-transparent pt-8 pb-4">
      <div className="max-w-4xl mx-auto px-4">
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
              href="https://github.com/dickinsonre/HistoricalWaterInventions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--aqua)] hover:text-[var(--gold)] transition-colors flex items-center gap-1"
            >
              <Github size={12} /> GitHub
            </a>
            <span className="text-[var(--parchment)]/40">•</span>
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
  );
}
