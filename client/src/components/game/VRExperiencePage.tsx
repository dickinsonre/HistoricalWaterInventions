import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Home, Glasses } from "lucide-react";
import VRExperience from "./VRExperience";

export default function VRExperiencePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--deep-ocean)] via-[var(--river-blue)] to-[var(--deep-ocean)] p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Glasses className="text-[var(--gold)]" size={32} />
            <div>
              <h1 className="font-heading text-3xl text-[var(--gold)]">VR Experience</h1>
              <p className="text-[var(--parchment)]/70">Immersive exploration of ancient water innovations</p>
            </div>
          </div>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--cerulean)]/50"
          >
            <Home size={18} className="mr-2" />
            Back to Map
          </Button>
        </div>

        <VRExperience />
      </div>
    </div>
  );
}
