import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { X, Droplets, User, Award, ExternalLink, MapPin, Clock, BookOpen, Globe, Lightbulb } from "lucide-react";

interface AboutSectionProps {
  onClose: () => void;
}

export default function AboutSection({ onClose }: AboutSectionProps) {
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
              Historical Mystery is an interactive 3D exploration game that takes you on a journey through 
              5,000 years of water engineering history. Discover how ancient civilizations solved the same 
              water challenges we face today—and how their solutions still influence modern engineering.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/20">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="text-[var(--aqua)]" size={18} />
                <h4 className="font-heading text-[var(--aqua)]">44 Civilizations</h4>
              </div>
              <p className="text-[var(--parchment)]/70 text-xs">
                Egypt, Rome, Korea, Great Zimbabwe, Nan Madol, Japan, Aboriginal Australia, and more
              </p>
            </div>
            <div className="p-4 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/20">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="text-[var(--gold)]" size={18} />
                <h4 className="font-heading text-[var(--gold)]">130+ Inventions</h4>
              </div>
              <p className="text-[var(--parchment)]/70 text-xs">
                Aqueducts, ondol heating, Zai pits, G-Cans flood control, latte stones, and more
              </p>
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
                  to see detailed explanations of how they work and why they matter.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-[var(--cerulean)] mt-0.5 flex-shrink-0" />
                <p className="text-[var(--parchment)]/80">
                  <strong className="text-[var(--parchment)]">Filter by Era:</strong> Use the timeline filter to 
                  focus on specific time periods or invention categories.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Award size={16} className="text-[var(--terracotta)] mt-0.5 flex-shrink-0" />
                <p className="text-[var(--parchment)]/80">
                  <strong className="text-[var(--parchment)]">Earn Achievements:</strong> Track your progress 
                  and unlock badges as you explore more content.
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
              Autodesk/Innovyze veteran with decades of experience in hydraulic modeling and water infrastructure design.
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
