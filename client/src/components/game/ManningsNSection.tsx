import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft, Droplets, Calculator, BookOpen, Search, Waves, ArrowRight, Zap, Info } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "../../hooks/useTranslation";

interface ManningMaterial {
  material: string;
  nMin: number;
  nTypical: number;
  nMax: number;
  category: string;
  ancientUse?: string;
  inventionLink?: { civilization: string; invention: string };
  color: string;
}

const MANNING_DATA: ManningMaterial[] = [
  { material: "Glass / Smooth Plastic", nMin: 0.009, nTypical: 0.010, nMax: 0.013, category: "Modern", color: "#60a5fa", ancientUse: "Modern lab channels" },
  { material: "Smooth Concrete", nMin: 0.010, nTypical: 0.013, nMax: 0.015, category: "Modern", color: "#818cf8" },
  { material: "Finished Concrete", nMin: 0.011, nTypical: 0.015, nMax: 0.017, category: "Modern", color: "#a78bfa" },
  { material: "Cut Stone / Dressed Masonry", nMin: 0.013, nTypical: 0.015, nMax: 0.017, category: "Ancient", color: "#f59e0b", ancientUse: "Roman aqueducts, Inca fountains", inventionLink: { civilization: "roman-empire", invention: "aqueduct" } },
  { material: "Brick-lined Channel", nMin: 0.012, nTypical: 0.015, nMax: 0.018, category: "Ancient", color: "#f97316", ancientUse: "Indus Valley drains, Roman sewers", inventionLink: { civilization: "indus-valley", invention: "great-bath" } },
  { material: "Smooth Metal (Cast Iron)", nMin: 0.010, nTypical: 0.013, nMax: 0.015, category: "Modern", color: "#94a3b8" },
  { material: "Terracotta / Clay Pipe", nMin: 0.011, nTypical: 0.014, nMax: 0.017, category: "Ancient", color: "#c2703e", ancientUse: "Minoan pipes, Greek water systems" },
  { material: "Rubble Masonry", nMin: 0.017, nTypical: 0.025, nMax: 0.030, category: "Ancient", color: "#d97706", ancientUse: "Qanat tunnels, khettara channels", inventionLink: { civilization: "persian-empire", invention: "qanat-plans" } },
  { material: "Rough Stone / Unfinished Rock", nMin: 0.025, nTypical: 0.030, nMax: 0.035, category: "Ancient", color: "#b45309", ancientUse: "Egyptian irrigation ditches", inventionLink: { civilization: "ancient-egypt", invention: "shaduf" } },
  { material: "Earth Channel (Clean)", nMin: 0.018, nTypical: 0.022, nMax: 0.025, category: "Natural", color: "#65a30d", ancientUse: "Hohokam canals, Subak irrigation" },
  { material: "Earth Channel (Grassy)", nMin: 0.025, nTypical: 0.030, nMax: 0.035, category: "Natural", color: "#16a34a", ancientUse: "Traditional irrigation ditches" },
  { material: "Earth Channel (Weedy)", nMin: 0.030, nTypical: 0.035, nMax: 0.040, category: "Natural", color: "#15803d", ancientUse: "Abandoned ancient channels" },
  { material: "Natural Stream (Clean)", nMin: 0.025, nTypical: 0.030, nMax: 0.033, category: "Natural", color: "#0ea5e9" },
  { material: "Natural Stream (Stones/Weeds)", nMin: 0.030, nTypical: 0.035, nMax: 0.040, category: "Natural", color: "#0284c7" },
  { material: "Mountain Torrent (Cobbles)", nMin: 0.040, nTypical: 0.050, nMax: 0.070, category: "Natural", color: "#0369a1" },
  { material: "Floodplain (Pasture)", nMin: 0.025, nTypical: 0.035, nMax: 0.050, category: "Natural", color: "#22c55e" },
  { material: "Floodplain (Heavy Timber)", nMin: 0.080, nTypical: 0.100, nMax: 0.160, category: "Natural", color: "#166534" },
  { material: "Wood Plank (Smooth)", nMin: 0.010, nTypical: 0.012, nMax: 0.015, category: "Ancient", color: "#a16207", ancientUse: "Water clocks, wooden flumes" },
  { material: "Bamboo / Reed-lined", nMin: 0.020, nTypical: 0.025, nMax: 0.030, category: "Ancient", color: "#ca8a04", ancientUse: "Southeast Asian irrigation" },
  { material: "Bitumen-sealed Brick", nMin: 0.012, nTypical: 0.015, nMax: 0.018, category: "Ancient", color: "#78716c", ancientUse: "Mesopotamian canals, Great Bath waterproofing", inventionLink: { civilization: "indus-valley", invention: "great-bath" } },
];

const ANCIENT_INVENTION_MANNINGS: Array<{
  invention: string;
  civilization: string;
  nValue: number;
  material: string;
  description: string;
  link: string;
}> = [
  { invention: "Roman Aqueduct", civilization: "Roman Empire", nValue: 0.015, material: "Cut stone / opus caementicium", description: "Precisely fitted stone channels with hydraulic cement lining", link: "/roman-empire/aqueduct" },
  { invention: "Persian Qanat", civilization: "Ancient Persia", nValue: 0.025, material: "Rough-hewn rock tunnel", description: "Hand-dug underground channels through alluvial deposits", link: "/persian-empire/qanat-plans" },
  { invention: "Egyptian Shaduf Canal", civilization: "Ancient Egypt", nValue: 0.030, material: "Earthen canal", description: "Unlined irrigation ditches along the Nile floodplain", link: "/ancient-egypt/shaduf" },
  { invention: "Cloaca Maxima", civilization: "Roman Empire", nValue: 0.018, material: "Tufa stone / brick arch", description: "One of the oldest sewer systems, 2,600+ years in use", link: "/roman-empire/cloaca-maxima" },
  { invention: "Great Bath Drains", civilization: "Indus Valley", nValue: 0.015, material: "Fired brick with bitumen seal", description: "Precisely laid brick drains with waterproof bitumen coating", link: "/indus-valley/great-bath" },
  { invention: "Subak Irrigation", civilization: "Bali / Indonesia", nValue: 0.028, material: "Stone-lined earth channel", description: "UNESCO World Heritage water temple terraced irrigation", link: "/bali/subak" },
  { invention: "Inca Fountain Cascade", civilization: "Inca Empire", nValue: 0.020, material: "Dressed granite channels", description: "16 precision-carved stone fountains at Machu Picchu", link: "/inca-empire/inca-fountain" },
  { invention: "Angkor Baray", civilization: "Khmer Empire", nValue: 0.025, material: "Earth embankment channels", description: "Massive reservoir system supporting 750,000+ people", link: "/khmer-empire/barays" },
  { invention: "Noria Wheel Channel", civilization: "Syria / Middle East", nValue: 0.022, material: "Stone-masonry aqueduct", description: "Elevated channels distributing water from river-powered wheels", link: "/medieval-islamic/noria" },
  { invention: "Hohokam Canal", civilization: "Hohokam", nValue: 0.028, material: "Compacted earth", description: "800+ km pre-Columbian canal network in Arizona desert", link: "/hohokam/hohokam-canal" },
  { invention: "Dujiangyan System", civilization: "Ancient China", nValue: 0.025, material: "Bamboo cages with stones", description: "2,270-year-old irrigation system still in use today", link: "/ancient-china/dujiangyan" },
  { invention: "Venetian Cistern", civilization: "Venice", nValue: 0.020, material: "Brick & stone filtration", description: "6,000+ underground sand-filter cisterns for rainwater", link: "/venice/venetian-cistern" },
];

const CATEGORIES = ["All", "Ancient", "Modern", "Natural"] as const;

export default function ManningsNSection() {
  const navigate = useNavigate();
  const t = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [calcN, setCalcN] = useState(0.015);
  const [calcSlope, setCalcSlope] = useState(0.5);
  const [calcWidth, setCalcWidth] = useState(1.5);
  const [calcDepth, setCalcDepth] = useState(0.8);
  const [highlightedN, setHighlightedN] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"reference" | "calculator" | "inventions">("reference");

  const filteredData = useMemo(() => {
    return MANNING_DATA.filter(item => {
      const matchCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchSearch = searchTerm === "" ||
        item.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.ancientUse && item.ancientUse.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  const calcResults = useMemo(() => {
    const slopeDecimal = calcSlope / 100;
    const area = calcWidth * calcDepth;
    const wetPerimeter = calcWidth + 2 * calcDepth;
    const hydraulicRadius = area / wetPerimeter;
    const velocity = (1 / calcN) * Math.pow(hydraulicRadius, 2 / 3) * Math.pow(Math.max(slopeDecimal, 0.00001), 0.5);
    const discharge = velocity * area;
    const froudeNumber = velocity / Math.sqrt(9.81 * calcDepth);
    const flowRegime = froudeNumber < 1 ? "Subcritical" : froudeNumber > 1 ? "Supercritical" : "Critical";
    return { velocity, discharge, froudeNumber, flowRegime, hydraulicRadius, area, wetPerimeter };
  }, [calcN, calcSlope, calcWidth, calcDepth]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    let time = 0;
    const particles: Array<{ x: number; y: number; speed: number; size: number }> = [];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * W,
        y: 80 + Math.random() * 60,
        speed: 0.5 + Math.random() * 1.5,
        size: 2 + Math.random() * 3,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      time += 0.016;

      const speedFactor = Math.max(0.1, (1 / calcN) * 0.015);

      ctx.fillStyle = "#1a3a5c";
      ctx.fillRect(0, 60, W, 80);

      ctx.strokeStyle = "#c2703e";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, 60);
      ctx.lineTo(W, 60);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, 140);
      ctx.lineTo(W, 140);
      ctx.stroke();

      const roughnessLines = Math.floor(calcN * 800);
      ctx.strokeStyle = "rgba(194, 112, 62, 0.4)";
      ctx.lineWidth = 1;
      for (let i = 0; i < roughnessLines; i++) {
        const x = (i / roughnessLines) * W;
        const bumpHeight = Math.sin(x * 0.5 + i) * calcN * 200;
        ctx.beginPath();
        ctx.moveTo(x, 140);
        ctx.lineTo(x + 3, 140 - Math.abs(bumpHeight));
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, 60);
        ctx.lineTo(x + 3, 60 + Math.abs(bumpHeight));
        ctx.stroke();
      }

      particles.forEach(p => {
        p.x += p.speed * speedFactor;
        if (p.x > W + 10) p.x = -10;

        const wobble = Math.sin(time * 3 + p.x * 0.05) * 3;
        ctx.beginPath();
        ctx.arc(p.x, p.y + wobble, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(72, 202, 228, ${0.4 + Math.sin(time + p.x) * 0.2})`;
        ctx.fill();
      });

      ctx.fillStyle = "#d4a843";
      ctx.font = "bold 12px Inter";
      ctx.textAlign = "left";
      ctx.fillText(`n = ${calcN.toFixed(3)}`, 10, 25);
      ctx.fillStyle = "#48cae4";
      ctx.fillText(`v = ${calcResults.velocity.toFixed(2)} m/s`, 10, 42);

      ctx.fillStyle = "rgba(212, 168, 67, 0.6)";
      ctx.font = "10px Inter";
      ctx.textAlign = "center";
      const label = calcN <= 0.013 ? "Smooth Surface" : calcN <= 0.020 ? "Moderate Roughness" : calcN <= 0.030 ? "Rough Channel" : "Very Rough";
      ctx.fillText(label, W / 2, H - 8);

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [calcN, calcResults.velocity]);

  const getNColor = (n: number) => {
    if (n <= 0.013) return "text-blue-400";
    if (n <= 0.020) return "text-green-400";
    if (n <= 0.030) return "text-yellow-400";
    if (n <= 0.040) return "text-orange-400";
    return "text-red-400";
  };

  const getNBgColor = (n: number) => {
    if (n <= 0.013) return "bg-blue-400/10 border-blue-400/30";
    if (n <= 0.020) return "bg-green-400/10 border-green-400/30";
    if (n <= 0.030) return "bg-yellow-400/10 border-yellow-400/30";
    if (n <= 0.040) return "bg-orange-400/10 border-orange-400/30";
    return "bg-red-400/10 border-red-400/30";
  };

  return (
    <div className="fixed inset-0 bg-[var(--parchment)] overflow-y-auto z-10">
      <div className="bg-[var(--deep-ocean)] text-[var(--parchment)] p-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="text-[var(--parchment)] hover:bg-[var(--river-blue)]"
          >
            <ArrowLeft size={16} className="mr-1" />
            {t.nav.back}
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl font-cinzel text-[var(--gold)]">Manning's n Coefficient</h1>
            <p className="text-[var(--parchment)]/70 text-sm">Surface roughness in ancient and modern water channels</p>
          </div>
          <LanguageSelector />
          <Waves size={32} className="text-[var(--gold)]" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <Card className="bg-[var(--deep-ocean)] border-[var(--gold)]/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <BookOpen size={28} className="text-[var(--gold)] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-cinzel text-[var(--gold)] mb-2">What is Manning's n?</h2>
                <p className="text-[var(--parchment)]/90 leading-relaxed mb-3">
                  Manning's n is a coefficient that represents the roughness of a channel surface. It is one of the most important parameters in open channel hydraulics. A <span className="text-blue-400 font-semibold">lower n value</span> means a smoother surface where water flows faster, while a <span className="text-orange-400 font-semibold">higher n value</span> means a rougher surface that slows the water down.
                </p>
                <p className="text-[var(--parchment)]/90 leading-relaxed mb-4">
                  Ancient engineers didn't know the formula, but they <em>understood the principle</em> intuitively. Romans polished their aqueduct channels (n ≈ 0.015) to maximize flow. Persian qanat builders accepted rougher tunnels (n ≈ 0.025) because the underground location prevented evaporation. Each civilization's choice of channel material directly affected how much water they could deliver.
                </p>

                <div className="bg-[var(--river-blue)]/40 rounded-lg p-4 border border-[var(--gold)]/20">
                  <h3 className="text-[var(--gold)] font-heading text-sm mb-2">Manning's Equation</h3>
                  <div className="text-center py-3">
                    <span className="text-[var(--aqua)] font-mono text-xl">
                      V = (1/n) × R<sup>2/3</sup> × S<sup>1/2</sup>
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3 text-xs">
                    <div className="bg-[var(--deep-ocean)]/60 p-2 rounded">
                      <span className="text-[var(--aqua)] font-mono font-bold">V</span>
                      <span className="text-[var(--parchment)]/70 ml-1">= Flow velocity (m/s)</span>
                    </div>
                    <div className="bg-[var(--deep-ocean)]/60 p-2 rounded">
                      <span className="text-[var(--gold)] font-mono font-bold">n</span>
                      <span className="text-[var(--parchment)]/70 ml-1">= Roughness coefficient</span>
                    </div>
                    <div className="bg-[var(--deep-ocean)]/60 p-2 rounded">
                      <span className="text-[var(--terracotta)] font-mono font-bold">R</span>
                      <span className="text-[var(--parchment)]/70 ml-1">= Hydraulic radius (m)</span>
                    </div>
                    <div className="bg-[var(--deep-ocean)]/60 p-2 rounded">
                      <span className="text-green-400 font-mono font-bold">S</span>
                      <span className="text-[var(--parchment)]/70 ml-1">= Channel slope</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {(["reference", "calculator", "inventions"] as const).map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab
                ? "bg-[var(--gold)] text-[var(--deep-ocean)] hover:bg-[var(--gold)]/80 font-semibold"
                : "border-[var(--gold)]/30 text-[var(--deep-ocean)] hover:bg-[var(--gold)]/10"
              }
            >
              {tab === "reference" && <><BookOpen size={14} className="mr-1" /> Reference Table</>}
              {tab === "calculator" && <><Calculator size={14} className="mr-1" /> Interactive Calculator</>}
              {tab === "inventions" && <><Droplets size={14} className="mr-1" /> Ancient Inventions</>}
            </Button>
          ))}
        </div>

        {activeTab === "reference" && (
          <Card className="bg-[var(--deep-ocean)] border-[var(--gold)]/30">
            <CardContent className="p-6">
              <h2 className="text-lg font-cinzel text-[var(--gold)] mb-4">Manning's n Reference Table</h2>

              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                  <Search size={16} className="text-[var(--parchment)]/50" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search materials..."
                    className="flex-1 bg-[var(--river-blue)]/30 text-[var(--parchment)] border border-[var(--aqua)]/20 rounded px-3 py-1.5 text-sm placeholder:text-[var(--parchment)]/30 focus:outline-none focus:border-[var(--gold)]/50"
                  />
                </div>
                <div className="flex gap-1">
                  {CATEGORIES.map((cat) => (
                    <Button
                      key={cat}
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-xs ${selectedCategory === cat
                        ? "bg-[var(--gold)]/20 text-[var(--gold)] border-[var(--gold)]/50"
                        : "text-[var(--parchment)]/60 border-[var(--parchment)]/20 hover:border-[var(--gold)]/30"
                      }`}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--gold)]/30">
                      <th className="text-left text-[var(--gold)] py-2 px-3 font-heading">Material</th>
                      <th className="text-center text-[var(--gold)] py-2 px-2 font-heading">n (min)</th>
                      <th className="text-center text-[var(--gold)] py-2 px-2 font-heading">n (typical)</th>
                      <th className="text-center text-[var(--gold)] py-2 px-2 font-heading">n (max)</th>
                      <th className="text-left text-[var(--gold)] py-2 px-3 font-heading hidden sm:table-cell">Category</th>
                      <th className="text-left text-[var(--gold)] py-2 px-3 font-heading hidden md:table-cell">Ancient Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((item, i) => (
                      <tr
                        key={i}
                        className={`border-b border-[var(--parchment)]/10 transition-colors cursor-pointer ${
                          highlightedN === item.nTypical ? "bg-[var(--gold)]/10" : "hover:bg-[var(--river-blue)]/30"
                        }`}
                        onClick={() => {
                          setCalcN(item.nTypical);
                          setHighlightedN(item.nTypical);
                          setTimeout(() => setHighlightedN(null), 2000);
                        }}
                      >
                        <td className="py-2 px-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                            <span className="text-[var(--parchment)]/90">{item.material}</span>
                          </div>
                        </td>
                        <td className={`text-center py-2 px-2 font-mono ${getNColor(item.nMin)}`}>{item.nMin.toFixed(3)}</td>
                        <td className={`text-center py-2 px-2 font-mono font-bold ${getNColor(item.nTypical)}`}>{item.nTypical.toFixed(3)}</td>
                        <td className={`text-center py-2 px-2 font-mono ${getNColor(item.nMax)}`}>{item.nMax.toFixed(3)}</td>
                        <td className="py-2 px-3 hidden sm:table-cell">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            item.category === "Ancient" ? "bg-[var(--gold)]/20 text-[var(--gold)]" :
                            item.category === "Modern" ? "bg-[var(--cerulean)]/20 text-[var(--cerulean)]" :
                            "bg-green-500/20 text-green-400"
                          }`}>
                            {item.category}
                          </span>
                        </td>
                        <td className="py-2 px-3 text-[var(--parchment)]/60 text-xs hidden md:table-cell">
                          {item.ancientUse || "—"}
                          {item.inventionLink && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/${item.inventionLink!.civilization}/${item.inventionLink!.invention}`);
                              }}
                              className="ml-1 h-5 px-1 text-[var(--cerulean)] hover:text-[var(--aqua)] text-[10px]"
                            >
                              View <ArrowRight size={10} />
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex flex-wrap gap-3 text-xs text-[var(--parchment)]/50">
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-400" /> n ≤ 0.013 (Very Smooth)</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-400" /> 0.013 – 0.020 (Smooth)</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-400" /> 0.020 – 0.030 (Moderate)</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange-400" /> 0.030 – 0.040 (Rough)</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-400" /> n &gt; 0.040 (Very Rough)</div>
              </div>

              <p className="mt-3 text-[10px] text-[var(--parchment)]/40 italic">
                Click any row to load its n value into the interactive calculator. Values from Chow (1959), FHWA HEC-15, and EPA SWMM5 documentation.
              </p>
            </CardContent>
          </Card>
        )}

        {activeTab === "calculator" && (
          <Card className="bg-[var(--deep-ocean)] border-[var(--gold)]/30">
            <CardContent className="p-6">
              <h2 className="text-lg font-cinzel text-[var(--gold)] mb-4">Interactive Manning's Equation Calculator</h2>

              <div className="mb-4 rounded-lg overflow-hidden border border-[var(--aqua)]/20">
                <canvas
                  ref={canvasRef}
                  width={600}
                  height={160}
                  className="w-full h-auto bg-[var(--deep-ocean)]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs text-[var(--parchment)]/70 flex items-center gap-1">
                      <Droplets size={12} className="text-[var(--gold)]" /> Manning's n
                    </label>
                    <span className={`text-sm font-mono font-bold ${getNColor(calcN)}`}>{calcN.toFixed(3)}</span>
                  </div>
                  <input
                    type="range" min="0.008" max="0.10" step="0.001" value={calcN}
                    onChange={(e) => setCalcN(parseFloat(e.target.value))}
                    className="w-full accent-[var(--gold)] h-2"
                  />
                  <div className="flex justify-between text-[8px] text-[var(--parchment)]/40">
                    <span>Glass (0.008)</span>
                    <span>Floodplain (0.100)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs text-[var(--parchment)]/70 flex items-center gap-1">
                      <Zap size={12} className="text-[var(--terracotta)]" /> Slope (%)
                    </label>
                    <span className="text-sm font-mono text-[var(--terracotta)]">{calcSlope.toFixed(2)}%</span>
                  </div>
                  <input
                    type="range" min="0.01" max="5.0" step="0.01" value={calcSlope}
                    onChange={(e) => setCalcSlope(parseFloat(e.target.value))}
                    className="w-full accent-[var(--terracotta)] h-2"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs text-[var(--parchment)]/70">Channel Width</label>
                    <span className="text-sm font-mono text-[var(--aqua)]">{calcWidth.toFixed(1)} m</span>
                  </div>
                  <input
                    type="range" min="0.3" max="10" step="0.1" value={calcWidth}
                    onChange={(e) => setCalcWidth(parseFloat(e.target.value))}
                    className="w-full accent-[var(--aqua)] h-2"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs text-[var(--parchment)]/70">Water Depth</label>
                    <span className="text-sm font-mono text-[var(--cerulean)]">{calcDepth.toFixed(2)} m</span>
                  </div>
                  <input
                    type="range" min="0.1" max="5" step="0.05" value={calcDepth}
                    onChange={(e) => setCalcDepth(parseFloat(e.target.value))}
                    className="w-full accent-[var(--cerulean)] h-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <div className={`p-3 rounded-lg border ${getNBgColor(calcN)}`}>
                  <p className="text-[var(--parchment)]/50 text-xs">Velocity</p>
                  <p className="text-[var(--aqua)] font-mono text-lg font-bold">{calcResults.velocity.toFixed(3)}</p>
                  <p className="text-[var(--parchment)]/30 text-[10px]">m/s</p>
                </div>
                <div className="p-3 rounded-lg border bg-[var(--river-blue)]/20 border-[var(--aqua)]/20">
                  <p className="text-[var(--parchment)]/50 text-xs">Discharge</p>
                  <p className="text-[var(--aqua)] font-mono text-lg font-bold">{(calcResults.discharge * 1000).toFixed(1)}</p>
                  <p className="text-[var(--parchment)]/30 text-[10px]">L/s</p>
                </div>
                <div className="p-3 rounded-lg border bg-[var(--river-blue)]/20 border-[var(--aqua)]/20">
                  <p className="text-[var(--parchment)]/50 text-xs">Froude #</p>
                  <p className={`font-mono text-lg font-bold ${
                    calcResults.flowRegime === "Subcritical" ? "text-green-400" :
                    calcResults.flowRegime === "Supercritical" ? "text-red-400" : "text-yellow-400"
                  }`}>{calcResults.froudeNumber.toFixed(3)}</p>
                  <p className="text-[var(--parchment)]/30 text-[10px]">{calcResults.flowRegime}</p>
                </div>
                <div className="p-3 rounded-lg border bg-[var(--river-blue)]/20 border-[var(--aqua)]/20">
                  <p className="text-[var(--parchment)]/50 text-xs">Hydraulic R</p>
                  <p className="text-[var(--aqua)] font-mono text-lg font-bold">{calcResults.hydraulicRadius.toFixed(3)}</p>
                  <p className="text-[var(--parchment)]/30 text-[10px]">m</p>
                </div>
                <div className="p-3 rounded-lg border bg-[var(--river-blue)]/20 border-[var(--aqua)]/20">
                  <p className="text-[var(--parchment)]/50 text-xs">Flow Area</p>
                  <p className="text-[var(--aqua)] font-mono text-lg font-bold">{calcResults.area.toFixed(2)}</p>
                  <p className="text-[var(--parchment)]/30 text-[10px]">m²</p>
                </div>
                <div className="p-3 rounded-lg border bg-[var(--river-blue)]/20 border-[var(--aqua)]/20">
                  <p className="text-[var(--parchment)]/50 text-xs">Daily Volume</p>
                  <p className="text-[var(--aqua)] font-mono text-lg font-bold">{(calcResults.discharge * 86400 / 1000).toFixed(0)}</p>
                  <p className="text-[var(--parchment)]/30 text-[10px]">m³/day</p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-[var(--river-blue)]/20 rounded-lg border border-[var(--gold)]/20">
                <div className="flex items-start gap-2">
                  <Info size={14} className="text-[var(--gold)] mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-[var(--parchment)]/80">
                    <p className="mb-1">
                      <strong className="text-[var(--gold)]">How it works:</strong> Move the Manning's n slider to see how surface roughness changes water velocity and flow rate. A channel with n = 0.010 (smooth concrete) carries <em>3× more water</em> than the same channel with n = 0.030 (rough earth).
                    </p>
                    <p>
                      The animation above shows water particles speeding up or slowing down in real time as you change the roughness. The bumps on the channel walls represent surface texture.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { label: "Roman Aqueduct", n: 0.015, slope: 0.2, width: 1.2, depth: 0.8 },
                  { label: "Persian Qanat", n: 0.025, slope: 0.1, width: 1.0, depth: 0.6 },
                  { label: "Egyptian Canal", n: 0.030, slope: 0.1, width: 2.0, depth: 0.5 },
                ].map((preset) => (
                  <Button
                    key={preset.label}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setCalcN(preset.n);
                      setCalcSlope(preset.slope);
                      setCalcWidth(preset.width);
                      setCalcDepth(preset.depth);
                    }}
                    className="border-[var(--gold)]/30 text-[var(--parchment)] hover:bg-[var(--gold)]/10 text-xs"
                  >
                    {preset.label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "inventions" && (
          <Card className="bg-[var(--deep-ocean)] border-[var(--gold)]/30">
            <CardContent className="p-6">
              <h2 className="text-lg font-cinzel text-[var(--gold)] mb-2">Manning's n in Ancient Water Inventions</h2>
              <p className="text-[var(--parchment)]/60 text-sm mb-4">
                See how different ancient civilizations used different materials — and therefore different roughness values — in their water systems. Click any card to explore that invention.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ANCIENT_INVENTION_MANNINGS.map((inv, i) => (
                  <div
                    key={i}
                    className="bg-[var(--river-blue)]/30 rounded-lg border border-[var(--aqua)]/20 p-4 hover:border-[var(--gold)]/50 transition-colors cursor-pointer group"
                    onClick={() => navigate(inv.link)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-[var(--parchment)] font-heading text-sm group-hover:text-[var(--gold)] transition-colors">
                        {inv.invention}
                      </h3>
                      <span className={`font-mono text-sm font-bold px-2 py-0.5 rounded ${getNBgColor(inv.nValue)} ${getNColor(inv.nValue)}`}>
                        n={inv.nValue}
                      </span>
                    </div>
                    <p className="text-[var(--parchment)]/50 text-xs mb-2">{inv.civilization}</p>
                    <p className="text-[var(--parchment)]/70 text-xs mb-3">{inv.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--terracotta)] text-[10px] italic">{inv.material}</span>
                      <ArrowRight size={14} className="text-[var(--parchment)]/30 group-hover:text-[var(--gold)] transition-colors" />
                    </div>

                    <div className="mt-3 bg-[var(--deep-ocean)]/60 rounded h-2 overflow-hidden">
                      <div
                        className="h-full rounded transition-all duration-500"
                        style={{
                          width: `${Math.min(100, (inv.nValue / 0.040) * 100)}%`,
                          backgroundColor: inv.nValue <= 0.015 ? "#60a5fa" : inv.nValue <= 0.020 ? "#4ade80" : inv.nValue <= 0.025 ? "#facc15" : "#fb923c",
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-[8px] text-[var(--parchment)]/30 mt-1">
                      <span>Smooth</span>
                      <span>Rough</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-[var(--river-blue)]/20 rounded-lg border border-[var(--gold)]/20">
                <h3 className="text-[var(--gold)] font-heading text-sm mb-2">Why Does Roughness Matter?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[var(--parchment)]/80">
                  <div>
                    <p className="text-[var(--gold)] font-semibold mb-1">Flow Capacity</p>
                    <p>Smoother channels deliver more water per unit area. Roman engineers polished stone linings to maximize throughput over 50+ km aqueducts.</p>
                  </div>
                  <div>
                    <p className="text-[var(--gold)] font-semibold mb-1">Erosion Control</p>
                    <p>Rougher surfaces slow water, reducing erosion. Ancient Persians used the natural rock of qanat tunnels to limit scouring at gentle slopes.</p>
                  </div>
                  <div>
                    <p className="text-[var(--gold)] font-semibold mb-1">SWMM5 Modeling</p>
                    <p>Each invention's roughness value is used in its SWMM5 hydraulic model. You can export these models from the invention detail pages.</p>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/simulators")}
                className="mt-4 border-[var(--gold)]/30 text-[var(--parchment)] hover:bg-[var(--gold)]/10"
              >
                <Waves size={14} className="mr-2 text-[var(--gold)]" />
                Open Water Flow Simulators
              </Button>
            </CardContent>
          </Card>
        )}

        <Card className="bg-[var(--deep-ocean)] border-[var(--gold)]/30">
          <CardContent className="p-6">
            <h2 className="text-lg font-cinzel text-[var(--gold)] mb-3">How Manning's n Connects to Interactive Diagrams</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[var(--parchment)]/80">
              <div className="bg-[var(--river-blue)]/20 rounded-lg p-4 border border-[var(--aqua)]/20">
                <h3 className="text-[var(--aqua)] font-heading text-sm mb-2">In the Interactive Diagrams</h3>
                <p className="mb-2">
                  Each invention's interactive diagram includes labeled hotspots showing key components. The Manning's n value appears on channel and conduit components, showing the roughness of the actual historical materials used.
                </p>
                <p className="text-[var(--parchment)]/60 text-xs">
                  For example, the Qanat diagram's "Underground Channel" hotspot shows n = 0.025 for its rough-hewn rock tunnel.
                </p>
              </div>
              <div className="bg-[var(--river-blue)]/20 rounded-lg p-4 border border-[var(--aqua)]/20">
                <h3 className="text-[var(--aqua)] font-heading text-sm mb-2">In the Physics Simulators</h3>
                <p className="mb-2">
                  The Water Flow Simulator and individual simulators (Roman Aqueduct, Qanat, Irrigation Canal) all use Manning's equation with adjustable n values. You can see in real time how changing roughness affects velocity, discharge, and flow regime.
                </p>
                <p className="text-[var(--parchment)]/60 text-xs">
                  Try the Irrigation Canal simulator — it has a full Manning's n slider from smooth concrete to rough earth.
                </p>
              </div>
              <div className="bg-[var(--river-blue)]/20 rounded-lg p-4 border border-[var(--aqua)]/20">
                <h3 className="text-[var(--aqua)] font-heading text-sm mb-2">In SWMM5 Export Models</h3>
                <p className="mb-2">
                  Every SWMM5 model includes the correct Manning's n value for that invention's conduit. When you copy or download a model, the roughness coefficient is already set based on historical materials.
                </p>
                <p className="text-[var(--parchment)]/60 text-xs">
                  153 models across 216 civilizations, each with calibrated roughness values.
                </p>
              </div>
              <div className="bg-[var(--river-blue)]/20 rounded-lg p-4 border border-[var(--aqua)]/20">
                <h3 className="text-[var(--aqua)] font-heading text-sm mb-2">In the Cross-Section View</h3>
                <p className="mb-2">
                  The Water Flow Simulator's cross-section canvas shows the channel geometry — width, depth, and wetted perimeter — that directly feeds into Manning's equation along with the n coefficient.
                </p>
                <p className="text-[var(--parchment)]/60 text-xs">
                  The cross-section updates live as you change dimensions and roughness.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
