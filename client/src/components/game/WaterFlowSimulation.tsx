import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Play, Pause, RotateCcw, Droplets, Gauge, ArrowDown, Info, Calculator, Eye, EyeOff, ChevronDown, ChevronUp, Ruler, Waves } from "lucide-react";

interface WaterParticle {
  progress: number;
  speed: number;
  size: number;
  opacity: number;
  yOffset: number;
}

type SimulationType = "aqueduct" | "qanat" | "siphon" | "reservoir" | "screw" | "noria" | "cloaca" | "spillway" | "subak" | "shafts" | "cascade" | "stepwell" | "dujiangyan" | "aztec-dike" | "chain-pump" | "shaduf" | "angkor-baray" | "venetian-cistern" | "inca-fountain" | "dutch-polder" | "hohokam" | "khettara";

const simulations: Record<SimulationType, {
  title: string;
  description: string;
  gradient: number;
  flowRate: number;
  pathPoints: { x: number; y: number }[];
}> = {
  aqueduct: {
    title: "Roman Aqueduct",
    description: "Gravity-fed water channel with precise 0.5% gradient carrying water from mountain springs to cities.",
    gradient: 0.5,
    flowRate: 1.2,
    pathPoints: [
      { x: 10, y: 20 }, { x: 25, y: 25 }, { x: 40, y: 30 },
      { x: 55, y: 35 }, { x: 70, y: 40 }, { x: 85, y: 45 }, { x: 95, y: 48 }
    ]
  },
  qanat: {
    title: "Persian Qanat",
    description: "Underground tunnel tapping mountain aquifer, gently sloping to deliver water to desert oasis.",
    gradient: 0.3,
    flowRate: 0.8,
    pathPoints: [
      { x: 10, y: 25 }, { x: 20, y: 50 }, { x: 30, y: 52 },
      { x: 50, y: 55 }, { x: 70, y: 58 }, { x: 85, y: 60 }, { x: 95, y: 62 }
    ]
  },
  siphon: {
    title: "Inverted Siphon",
    description: "Pressurized pipe crossing valleys—water descends, builds pressure, then rises on the other side.",
    gradient: 2.0,
    flowRate: 1.5,
    pathPoints: [
      { x: 10, y: 25 }, { x: 25, y: 30 }, { x: 40, y: 60 },
      { x: 55, y: 70 }, { x: 70, y: 55 }, { x: 85, y: 35 }, { x: 95, y: 30 }
    ]
  },
  reservoir: {
    title: "Ancient Reservoir",
    description: "Water storage system collecting seasonal rainfall, releasing controlled flow during dry periods.",
    gradient: 0.8,
    flowRate: 1.0,
    pathPoints: [
      { x: 10, y: 20 }, { x: 30, y: 25 }, { x: 35, y: 40 },
      { x: 40, y: 50 }, { x: 45, y: 50 }, { x: 60, y: 55 }, { x: 95, y: 65 }
    ]
  },
  screw: {
    title: "Archimedes Screw",
    description: "Helical pump attributed to Archimedes (287-212 BCE). Still used today for pumping water, grain, and wastewater.",
    gradient: 1.5,
    flowRate: 1.3,
    pathPoints: [
      { x: 10, y: 65 }, { x: 25, y: 55 }, { x: 40, y: 45 },
      { x: 55, y: 35 }, { x: 70, y: 28 }, { x: 85, y: 22 }, { x: 95, y: 18 }
    ]
  },
  noria: {
    title: "Noria Wheel",
    description: "Water-powered lifting wheel using river current. Syrian city of Hama still operates 2000-year-old norias.",
    gradient: 3.0,
    flowRate: 0.9,
    pathPoints: [
      { x: 10, y: 70 }, { x: 20, y: 55 }, { x: 30, y: 35 },
      { x: 40, y: 20 }, { x: 50, y: 15 }, { x: 70, y: 18 }, { x: 95, y: 22 }
    ]
  },
  cloaca: {
    title: "Cloaca Maxima",
    description: "One of the oldest sewer systems in the world, dating to 600 BCE. Sections remain in use today after 2,600 years in Rome.",
    gradient: 0.3,
    flowRate: 1.4,
    pathPoints: [
      { x: 10, y: 25 }, { x: 25, y: 28 }, { x: 40, y: 32 },
      { x: 55, y: 38 }, { x: 70, y: 45 }, { x: 85, y: 52 }, { x: 95, y: 60 }
    ]
  },
  spillway: {
    title: "Stepped Spillway",
    description: "Energy-dissipating spillway design prevents erosion at dam bases. Ancient stepped spillways at Marib Dam (Yemen, 750 BCE).",
    gradient: 4.0,
    flowRate: 1.8,
    pathPoints: [
      { x: 10, y: 15 }, { x: 20, y: 22 }, { x: 30, y: 30 },
      { x: 40, y: 38 }, { x: 50, y: 46 }, { x: 60, y: 54 }, { x: 70, y: 62 }, { x: 80, y: 68 }, { x: 95, y: 72 }
    ]
  },
  subak: {
    title: "Subak Irrigation",
    description: "UNESCO World Heritage Balinese water temple system. Coordinates planting schedules and water sharing since 9th century CE.",
    gradient: 1.2,
    flowRate: 0.7,
    pathPoints: [
      { x: 10, y: 15 }, { x: 25, y: 25 }, { x: 35, y: 32 },
      { x: 50, y: 40 }, { x: 65, y: 50 }, { x: 80, y: 58 }, { x: 95, y: 65 }
    ]
  },
  shafts: {
    title: "Qanat Shafts",
    description: "Vertical access and ventilation shafts spaced 20-50m apart allowed construction and maintenance of underground qanats.",
    gradient: 0.4,
    flowRate: 0.6,
    pathPoints: [
      { x: 10, y: 55 }, { x: 25, y: 45 }, { x: 35, y: 50 },
      { x: 50, y: 42 }, { x: 65, y: 48 }, { x: 80, y: 40 }, { x: 95, y: 55 }
    ]
  },
  cascade: {
    title: "Tank Cascade",
    description: "Ancient Sri Lanka built over 30,000 interconnected tanks. Cascade maximizes water use—runoff from one tank becomes supply for the next.",
    gradient: 2.5,
    flowRate: 1.1,
    pathPoints: [
      { x: 10, y: 12 }, { x: 20, y: 18 }, { x: 25, y: 25 },
      { x: 35, y: 32 }, { x: 45, y: 40 }, { x: 55, y: 48 }, { x: 65, y: 55 }, { x: 80, y: 62 }, { x: 95, y: 70 }
    ]
  },
  stepwell: {
    title: "Indian Stepwell",
    description: "Elaborate stepped wells (vav/baoli) of India provided year-round water access. Descending steps follow the water table.",
    gradient: 5.0,
    flowRate: 0.5,
    pathPoints: [
      { x: 10, y: 10 }, { x: 20, y: 20 }, { x: 30, y: 32 },
      { x: 40, y: 42 }, { x: 50, y: 52 }, { x: 60, y: 60 }, { x: 70, y: 68 }, { x: 80, y: 72 }, { x: 90, y: 72 }
    ]
  },
  dujiangyan: {
    title: "Dujiangyan Fish Mouth",
    description: "Ancient China's 2,270-year-old irrigation system (256 BCE). Fish Mouth divides Min River: 60% for flood discharge, 40% for irrigation.",
    gradient: 1.8,
    flowRate: 2.0,
    pathPoints: [
      { x: 5, y: 25 }, { x: 20, y: 30 }, { x: 35, y: 28 },
      { x: 45, y: 35 }, { x: 55, y: 42 }, { x: 65, y: 38 }, { x: 75, y: 45 }, { x: 90, y: 55 }
    ]
  },
  "aztec-dike": {
    title: "Aztec Nezahualcóyotl Dike",
    description: "16km stone dike (1449 CE) separating fresh western from saline eastern Lake Texcoco. Protected Tenochtitlan's chinampas.",
    gradient: 0.2,
    flowRate: 0.6,
    pathPoints: [
      { x: 5, y: 40 }, { x: 20, y: 42 }, { x: 35, y: 40 },
      { x: 50, y: 38 }, { x: 65, y: 42 }, { x: 80, y: 40 }, { x: 95, y: 38 }
    ]
  },
  "chain-pump": {
    title: "Chinese Chain Pump",
    description: "Dragon backbone water-lift (龙骨水车) from Han Dynasty (200 CE). Continuous chain of wooden pallets lifts water 3-5m.",
    gradient: 4.5,
    flowRate: 1.2,
    pathPoints: [
      { x: 10, y: 70 }, { x: 20, y: 62 }, { x: 30, y: 52 },
      { x: 40, y: 42 }, { x: 50, y: 32 }, { x: 60, y: 25 }, { x: 70, y: 20 }, { x: 85, y: 18 }, { x: 95, y: 20 }
    ]
  },
  shaduf: {
    title: "Egyptian Shaduf",
    description: "Counterweighted lever for lifting irrigation water (1500 BCE). A single operator lifts 2,500 liters/day up to 3m.",
    gradient: 2.5,
    flowRate: 0.4,
    pathPoints: [
      { x: 10, y: 65 }, { x: 25, y: 50 }, { x: 35, y: 35 },
      { x: 45, y: 28 }, { x: 55, y: 32 }, { x: 70, y: 38 }, { x: 85, y: 45 }, { x: 95, y: 52 }
    ]
  },
  "angkor-baray": {
    title: "Angkor Baray Reservoir",
    description: "Khmer Empire's massive reservoirs (800-1200 CE). West Baray stored 40 million m³, supporting 750,000 people.",
    gradient: 0.15,
    flowRate: 1.5,
    pathPoints: [
      { x: 5, y: 30 }, { x: 15, y: 32 }, { x: 30, y: 35 },
      { x: 45, y: 38 }, { x: 60, y: 42 }, { x: 75, y: 48 }, { x: 90, y: 55 }
    ]
  },
  "venetian-cistern": {
    title: "Venetian Cistern",
    description: "Venice built 6,000+ underground cisterns (800 CE onwards). Sloped campo pavements collected rain, sand-filtered through clay-lined chambers.",
    gradient: 0.8,
    flowRate: 0.3,
    pathPoints: [
      { x: 10, y: 15 }, { x: 20, y: 25 }, { x: 30, y: 38 },
      { x: 45, y: 48 }, { x: 55, y: 52 }, { x: 65, y: 52 }, { x: 80, y: 55 }, { x: 95, y: 58 }
    ]
  },
  "inca-fountain": {
    title: "Inca Fountain Cascade",
    description: "Machu Picchu's 16 fountains (1450 CE) fed by 749m stone-lined canal. Royal fountain first (25 L/min), common people last (10 L/min).",
    gradient: 2.4,
    flowRate: 0.8,
    pathPoints: [
      { x: 5, y: 12 }, { x: 15, y: 18 }, { x: 25, y: 26 },
      { x: 35, y: 34 }, { x: 45, y: 42 }, { x: 55, y: 50 }, { x: 65, y: 56 }, { x: 75, y: 62 }, { x: 85, y: 66 }, { x: 95, y: 70 }
    ]
  },
  "dutch-polder": {
    title: "Dutch Polder System",
    description: "Reclaimed land protected by dikes and drained by windmills (1200 CE onwards). Netherlands reclaimed 17% of its land from the sea.",
    gradient: 0.5,
    flowRate: 1.0,
    pathPoints: [
      { x: 5, y: 65 }, { x: 15, y: 58 }, { x: 25, y: 50 },
      { x: 40, y: 42 }, { x: 55, y: 35 }, { x: 70, y: 28 }, { x: 85, y: 22 }, { x: 95, y: 18 }
    ]
  },
  hohokam: {
    title: "Hohokam Canal System",
    description: "Pre-Columbian Arizona canals (300-1450 CE) stretched 800+ km. Largest ancient canal system in North America.",
    gradient: 0.4,
    flowRate: 1.1,
    pathPoints: [
      { x: 5, y: 22 }, { x: 20, y: 28 }, { x: 35, y: 35 },
      { x: 50, y: 42 }, { x: 65, y: 48 }, { x: 80, y: 55 }, { x: 95, y: 62 }
    ]
  },
  khettara: {
    title: "Moroccan Khettara",
    description: "North African qanat variant (800 CE) tapping Atlas Mountain aquifers. Underground galleries up to 15km long.",
    gradient: 0.25,
    flowRate: 0.7,
    pathPoints: [
      { x: 5, y: 28 }, { x: 15, y: 45 }, { x: 25, y: 48 },
      { x: 40, y: 52 }, { x: 55, y: 55 }, { x: 70, y: 58 }, { x: 85, y: 60 }, { x: 95, y: 62 }
    ]
  }
};

const COLORS = {
  deepOcean: "#0a1628",
  riverBlue: "#1a3a5c",
  cerulean: "#0077b6",
  aqua: "#48cae4",
  parchment: "#f0e6d3",
  terracotta: "#c2703e",
  gold: "#d4a843",
  water: "rgba(72, 202, 228, 0.7)",
  waterLight: "rgba(72, 202, 228, 0.3)",
  waterGlow: "rgba(0, 119, 182, 0.5)",
  channel: "rgba(194, 112, 62, 0.6)",
  channelDark: "rgba(194, 112, 62, 0.9)",
  pressureHigh: "#ef4444",
  pressureMed: "#f59e0b",
  pressureLow: "#22c55e",
  egl: "#f59e0b",
  hgl: "#22c55e",
};

export default function WaterFlowSimulation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const crossSectionCanvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const particlesRef = useRef<WaterParticle[]>([]);
  const timeRef = useRef(0);

  const [activeSimulation, setActiveSimulation] = useState<SimulationType>("aqueduct");
  const [isPlaying, setIsPlaying] = useState(true);
  const [flowMultiplier, setFlowMultiplier] = useState(1);
  const [gradientMultiplier, setGradientMultiplier] = useState(1);
  const [channelWidth, setChannelWidth] = useState(1.5);
  const [channelDepth, setChannelDepth] = useState(0.8);
  const [manningsN, setManningsN] = useState(0.015);
  const [showPhysics, setShowPhysics] = useState(true);
  const [showEnergyLines, setShowEnergyLines] = useState(true);
  const [showCrossSection, setShowCrossSection] = useState(true);
  const [showSimSelector, setShowSimSelector] = useState(false);

  const baseSim = simulations[activeSimulation];

  const physics = useMemo(() => {
    const slope = baseSim.gradient * gradientMultiplier / 100;
    const area = channelWidth * channelDepth;
    const wetPerimeter = channelWidth + 2 * channelDepth;
    const hydraulicRadius = area / wetPerimeter;
    const velocity = (1 / manningsN) * Math.pow(hydraulicRadius, 2 / 3) * Math.pow(Math.max(slope, 0.0001), 0.5);
    const effectiveVelocity = velocity * flowMultiplier;
    const discharge = effectiveVelocity * area;
    const froudeNumber = effectiveVelocity / Math.sqrt(9.81 * channelDepth);
    const reynoldsNumber = (effectiveVelocity * hydraulicRadius * 998) / 0.001;
    const velocityHead = (effectiveVelocity * effectiveVelocity) / (2 * 9.81);
    const specificEnergy = channelDepth + velocityHead;
    const headLossPerMeter = slope;
    const channelLength = 100;
    const totalElevationDrop = slope * channelLength;
    const startElevation = 10;
    const endElevation = startElevation - totalElevationDrop;

    const pressureAtBottom = 998 * 9.81 * channelDepth;
    const pressureHead = channelDepth;
    const totalHead = startElevation + velocityHead + pressureHead;

    const powerDissipated = 998 * 9.81 * discharge * headLossPerMeter * channelLength;

    return {
      velocity: effectiveVelocity,
      discharge,
      froudeNumber,
      reynoldsNumber,
      hydraulicRadius,
      velocityHead,
      specificEnergy,
      pressureHead,
      totalHead,
      startElevation,
      endElevation,
      headLossPerMeter,
      pressureAtBottom,
      powerDissipated,
      area,
      wetPerimeter,
      slope,
      flowRegime: froudeNumber < 0.95 ? "Subcritical" : froudeNumber > 1.05 ? "Supercritical" : "Critical",
    };
  }, [baseSim.gradient, gradientMultiplier, flowMultiplier, channelWidth, channelDepth, manningsN]);

  const adjustedPathPoints = useMemo(() => {
    return baseSim.pathPoints.map((p) => {
      const baseY = baseSim.pathPoints[0].y;
      const adjustedY = baseY + (p.y - baseY) * gradientMultiplier;
      return { x: p.x, y: Math.min(Math.max(adjustedY, 5), 78) };
    });
  }, [baseSim.pathPoints, gradientMultiplier]);

  const interpolatePath = useCallback((progress: number) => {
    const points = adjustedPathPoints;
    const totalSegments = points.length - 1;
    const segmentProgress = progress * totalSegments;
    const segmentIndex = Math.min(Math.floor(segmentProgress), totalSegments - 1);
    const localProgress = segmentProgress - segmentIndex;
    const p1 = points[segmentIndex];
    const p2 = points[segmentIndex + 1];
    return {
      x: p1.x + (p2.x - p1.x) * localProgress,
      y: p1.y + (p2.y - p1.y) * localProgress,
    };
  }, [adjustedPathPoints]);

  useEffect(() => {
    particlesRef.current = [];
  }, [activeSimulation]);

  const drawMainCanvas = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number, time: number) => {
    ctx.clearRect(0, 0, w, h);

    const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
    skyGrad.addColorStop(0, COLORS.deepOcean);
    skyGrad.addColorStop(0.6, COLORS.riverBlue);
    skyGrad.addColorStop(1, "#0d2137");
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, w, h);

    const toCanvasX = (pct: number) => (pct / 100) * w;
    const toCanvasY = (pct: number) => (pct / 80) * h;
    const pts = adjustedPathPoints;

    ctx.strokeStyle = COLORS.channelDark;
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(toCanvasX(pts[0].x), toCanvasY(pts[0].y) + 8);
    for (let i = 1; i < pts.length; i++) {
      ctx.lineTo(toCanvasX(pts[i].x), toCanvasY(pts[i].y) + 8);
    }
    ctx.stroke();

    ctx.strokeStyle = COLORS.channel;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(toCanvasX(pts[0].x), toCanvasY(pts[0].y));
    for (let i = 1; i < pts.length; i++) {
      ctx.lineTo(toCanvasX(pts[i].x), toCanvasY(pts[i].y));
    }
    ctx.stroke();

    ctx.strokeStyle = COLORS.channelDark;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(toCanvasX(pts[0].x), toCanvasY(pts[0].y) - 6);
    for (let i = 1; i < pts.length; i++) {
      ctx.lineTo(toCanvasX(pts[i].x), toCanvasY(pts[i].y) - 6);
    }
    ctx.stroke();

    if (showEnergyLines) {
      const startY = pts[0].y;
      const endY = pts[pts.length - 1].y;
      const vHead = Math.min(physics.velocityHead * 3, 8);

      ctx.strokeStyle = COLORS.egl;
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 4]);
      ctx.beginPath();
      for (let i = 0; i < pts.length; i++) {
        const frac = i / (pts.length - 1);
        const baseY = startY + (endY - startY) * frac;
        const eglY = baseY - 12 - vHead;
        if (i === 0) ctx.moveTo(toCanvasX(pts[i].x), toCanvasY(eglY));
        else ctx.lineTo(toCanvasX(pts[i].x), toCanvasY(eglY));
      }
      ctx.stroke();

      ctx.strokeStyle = COLORS.hgl;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < pts.length; i++) {
        const frac = i / (pts.length - 1);
        const baseY = startY + (endY - startY) * frac;
        const hglY = baseY - 12;
        if (i === 0) ctx.moveTo(toCanvasX(pts[i].x), toCanvasY(hglY));
        else ctx.lineTo(toCanvasX(pts[i].x), toCanvasY(hglY));
      }
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.font = "10px Inter, sans-serif";
      ctx.fillStyle = COLORS.egl;
      ctx.fillText("EGL (Energy Grade Line)", toCanvasX(pts[0].x) + 4, toCanvasY(startY - 12 - vHead) - 4);
      ctx.fillStyle = COLORS.hgl;
      ctx.fillText("HGL (Hydraulic Grade Line)", toCanvasX(pts[0].x) + 4, toCanvasY(startY - 12) - 4);
    }

    const particles = particlesRef.current;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const pos = interpolatePath(p.progress);
      const cx = toCanvasX(pos.x);
      const cy = toCanvasY(pos.y) + p.yOffset;

      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, p.size * 2.5);
      glow.addColorStop(0, `rgba(72, 202, 228, ${p.opacity * 0.8})`);
      glow.addColorStop(0.5, `rgba(0, 119, 182, ${p.opacity * 0.3})`);
      glow.addColorStop(1, "rgba(0, 119, 182, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, p.size * 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(72, 202, 228, ${p.opacity})`;
      ctx.beginPath();
      ctx.arc(cx, cy, p.size, 0, Math.PI * 2);
      ctx.fill();
    }

    const pressureColor = physics.froudeNumber < 0.95 ? COLORS.pressureLow :
      physics.froudeNumber > 1.05 ? COLORS.pressureHigh : COLORS.pressureMed;

    const midIdx = Math.floor(pts.length / 2);
    const midX = toCanvasX(pts[midIdx].x);
    const midY = toCanvasY(pts[midIdx].y);
    const barHeight = Math.min(30, physics.pressureHead * 20);

    ctx.fillStyle = pressureColor + "40";
    ctx.fillRect(midX - 3, midY - barHeight - 6, 6, barHeight);
    ctx.fillStyle = pressureColor;
    ctx.fillRect(midX - 3, midY - barHeight - 6, 6, 2);

    ctx.font = "bold 10px Inter, sans-serif";
    ctx.fillStyle = COLORS.parchment;
    ctx.textAlign = "left";
    ctx.fillText(`${(physics.pressureAtBottom / 1000).toFixed(1)} kPa`, midX + 8, midY - barHeight / 2 - 6);
    ctx.textAlign = "start";

    ctx.font = "11px Inter, sans-serif";
    ctx.fillStyle = COLORS.parchment + "aa";
    ctx.fillText("▼ Source", toCanvasX(pts[0].x), toCanvasY(pts[0].y) - 14);
    ctx.fillText("Destination ▶", toCanvasX(pts[pts.length - 1].x) - 75, toCanvasY(pts[pts.length - 1].y) - 14);

    ctx.font = "bold 12px 'Inter', sans-serif";
    ctx.fillStyle = COLORS.aqua;
    ctx.fillText(`v = ${physics.velocity.toFixed(2)} m/s`, w - 140, 20);
    ctx.fillText(`Q = ${(physics.discharge * 1000).toFixed(0)} L/s`, w - 140, 38);
    ctx.fillStyle = pressureColor;
    ctx.fillText(`Fr = ${physics.froudeNumber.toFixed(3)}`, w - 140, 56);
  }, [adjustedPathPoints, interpolatePath, showEnergyLines, physics]);

  const drawCrossSection = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = COLORS.deepOcean;
    ctx.fillRect(0, 0, w, h);

    const margin = 30;
    const channelDrawWidth = Math.min(w - margin * 2, 140);
    const channelDrawHeight = Math.min(h - margin * 2, 100);
    const cx = w / 2;
    const bottomY = h - margin;
    const depthRatio = channelDepth / (channelDepth + 0.5);
    const waterHeight = channelDrawHeight * depthRatio;
    const wallLeft = cx - channelDrawWidth / 2;
    const wallRight = cx + channelDrawWidth / 2;

    ctx.fillStyle = COLORS.channel;
    ctx.fillRect(wallLeft - 6, bottomY - channelDrawHeight, 6, channelDrawHeight);
    ctx.fillRect(wallRight, bottomY - channelDrawHeight, 6, channelDrawHeight);
    ctx.fillRect(wallLeft - 6, bottomY, channelDrawWidth + 12, 6);

    const waterGrad = ctx.createLinearGradient(0, bottomY - waterHeight, 0, bottomY);
    waterGrad.addColorStop(0, "rgba(72, 202, 228, 0.4)");
    waterGrad.addColorStop(0.5, "rgba(0, 119, 182, 0.6)");
    waterGrad.addColorStop(1, "rgba(0, 119, 182, 0.8)");
    ctx.fillStyle = waterGrad;
    ctx.fillRect(wallLeft, bottomY - waterHeight, channelDrawWidth, waterHeight);

    const waterSurfaceY = bottomY - waterHeight;
    ctx.strokeStyle = COLORS.aqua;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(wallLeft, waterSurfaceY);
    for (let x = wallLeft; x <= wallRight; x += 2) {
      const wave = Math.sin((x - wallLeft) * 0.1 + timeRef.current * 3) * 2 * Math.min(physics.velocity, 3);
      ctx.lineTo(x, waterSurfaceY + wave);
    }
    ctx.stroke();

    const pressureSteps = 5;
    for (let i = 0; i <= pressureSteps; i++) {
      const frac = i / pressureSteps;
      const yPos = waterSurfaceY + frac * waterHeight;
      const pressure = 998 * 9.81 * frac * channelDepth;
      const arrowLen = 8 + frac * 25;

      ctx.strokeStyle = `rgba(239, 68, 68, ${0.3 + frac * 0.5})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(wallLeft + 10, yPos);
      ctx.lineTo(wallLeft + 10 + arrowLen, yPos);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(wallLeft + 10 + arrowLen, yPos);
      ctx.lineTo(wallLeft + 5 + arrowLen, yPos - 3);
      ctx.moveTo(wallLeft + 10 + arrowLen, yPos);
      ctx.lineTo(wallLeft + 5 + arrowLen, yPos + 3);
      ctx.stroke();

      if (i > 0 && i % 2 === 0) {
        ctx.font = "9px Inter, sans-serif";
        ctx.fillStyle = COLORS.parchment + "bb";
        ctx.fillText(`${(pressure / 1000).toFixed(1)}kPa`, wallLeft + 14 + arrowLen, yPos + 3);
      }
    }

    ctx.font = "10px Inter, sans-serif";
    ctx.fillStyle = COLORS.aqua;
    ctx.textAlign = "center";

    ctx.save();
    ctx.translate(wallLeft - 16, bottomY - waterHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(`d = ${channelDepth.toFixed(2)}m`, 0, 0);
    ctx.restore();

    ctx.fillText(`w = ${channelWidth.toFixed(2)}m`, cx, bottomY + 20);

    ctx.font = "bold 10px Inter, sans-serif";
    ctx.fillStyle = COLORS.gold;
    ctx.fillText("Cross Section", cx, 16);
    ctx.textAlign = "start";
  }, [channelWidth, channelDepth, physics.velocity]);

  useEffect(() => {
    if (!isPlaying) return;

    const animate = () => {
      timeRef.current += 0.016;

      const spawnRate = Math.ceil(flowMultiplier * 2);
      const speedBase = 0.003 * baseSim.flowRate * flowMultiplier * gradientMultiplier;
      for (let i = 0; i < spawnRate; i++) {
        if (particlesRef.current.length < 150) {
          particlesRef.current.push({
            progress: Math.random() * 0.02,
            speed: speedBase + Math.random() * speedBase * 0.5,
            size: 2 + Math.random() * 3,
            opacity: 0.6 + Math.random() * 0.4,
            yOffset: (Math.random() - 0.5) * 6,
          });
        }
      }

      particlesRef.current = particlesRef.current
        .map(p => ({ ...p, progress: p.progress + p.speed }))
        .filter(p => p.progress < 1);

      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const rect = canvas.getBoundingClientRect();
          if (canvas.width !== rect.width * 2 || canvas.height !== rect.height * 2) {
            canvas.width = rect.width * 2;
            canvas.height = rect.height * 2;
            ctx.scale(2, 2);
          }
          drawMainCanvas(ctx, rect.width, rect.height, timeRef.current);
        }
      }

      if (showCrossSection) {
        const csCanvas = crossSectionCanvasRef.current;
        if (csCanvas) {
          const ctx = csCanvas.getContext("2d");
          if (ctx) {
            const rect = csCanvas.getBoundingClientRect();
            if (csCanvas.width !== rect.width * 2 || csCanvas.height !== rect.height * 2) {
              csCanvas.width = rect.width * 2;
              csCanvas.height = rect.height * 2;
              ctx.scale(2, 2);
            }
            drawCrossSection(ctx, rect.width, rect.height);
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isPlaying, drawMainCanvas, drawCrossSection, showCrossSection, baseSim.flowRate, flowMultiplier, gradientMultiplier]);

  const simKeys = Object.keys(simulations) as SimulationType[];

  return (
    <Card className="water-card">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Waves className="text-[var(--aqua)]" size={24} />
            <h3 className="font-heading text-lg sm:text-xl text-[var(--gold)]">Water Flow Physics Simulator</h3>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={() => setShowEnergyLines(!showEnergyLines)}
              className={`text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 ${showEnergyLines ? 'bg-[var(--cerulean)]/20' : ''}`}
              title="Toggle Energy/Hydraulic Grade Lines">
              <Ruler size={16} />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setShowCrossSection(!showCrossSection)}
              className={`text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 ${showCrossSection ? 'bg-[var(--cerulean)]/20' : ''}`}
              title="Toggle Cross Section View">
              {showCrossSection ? <Eye size={16} /> : <EyeOff size={16} />}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsPlaying(!isPlaying)}
              className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30">
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => { particlesRef.current = []; }}
              className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30">
              <RotateCcw size={16} />
            </Button>
          </div>
        </div>

        <div className="relative mb-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowSimSelector(!showSimSelector)}
            className="w-full justify-between water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border-[var(--aqua)]/30"
          >
            <span className="flex items-center gap-2">
              <Droplets size={14} className="text-[var(--aqua)]" />
              {baseSim.title}
            </span>
            {showSimSelector ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </Button>
          {showSimSelector && (
            <div className="absolute z-30 w-full mt-1 bg-[var(--deep-ocean)] border border-[var(--aqua)]/30 rounded-lg max-h-48 overflow-y-auto shadow-xl">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 p-2">
                {simKeys.map(type => (
                  <Button
                    key={type}
                    variant={activeSimulation === type ? "default" : "ghost"}
                    size="sm"
                    onClick={() => { setActiveSimulation(type); setShowSimSelector(false); }}
                    className={`text-xs justify-start ${activeSimulation === type
                      ? "bg-[var(--cerulean)] text-white"
                      : "text-[var(--parchment)]/80 hover:bg-[var(--cerulean)]/20"}`}
                  >
                    {simulations[type].title}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3 flex-col lg:flex-row">
          <div className="flex-1 min-w-0">
            <canvas
              ref={canvasRef}
              className="w-full rounded-lg border border-[var(--aqua)]/30"
              style={{ height: "220px" }}
            />
          </div>
          {showCrossSection && (
            <div className="w-full lg:w-48 flex-shrink-0">
              <canvas
                ref={crossSectionCanvasRef}
                className="w-full rounded-lg border border-[var(--aqua)]/30"
                style={{ height: "220px" }}
              />
            </div>
          )}
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--parchment)]/70 flex items-center gap-1">
                <Gauge size={12} className="text-[var(--cerulean)]" /> Flow Rate
              </span>
              <span className="text-xs text-[var(--aqua)] font-mono">{(flowMultiplier * 100).toFixed(0)}%</span>
            </div>
            <input type="range" min="0.2" max="3" step="0.05" value={flowMultiplier}
              onChange={e => setFlowMultiplier(parseFloat(e.target.value))}
              className="w-full accent-[var(--cerulean)] h-1.5" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--parchment)]/70 flex items-center gap-1">
                <ArrowDown size={12} className="text-[var(--gold)]" /> Gradient
              </span>
              <span className="text-xs text-[var(--gold)] font-mono">{(baseSim.gradient * gradientMultiplier).toFixed(2)}%</span>
            </div>
            <input type="range" min="0.1" max="3" step="0.05" value={gradientMultiplier}
              onChange={e => setGradientMultiplier(parseFloat(e.target.value))}
              className="w-full accent-[var(--gold)] h-1.5" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--parchment)]/70 flex items-center gap-1">
                <Ruler size={12} className="text-[var(--terracotta)]" /> Channel Width
              </span>
              <span className="text-xs text-[var(--terracotta)] font-mono">{channelWidth.toFixed(2)}m</span>
            </div>
            <input type="range" min="0.5" max="5" step="0.1" value={channelWidth}
              onChange={e => setChannelWidth(parseFloat(e.target.value))}
              className="w-full accent-[var(--terracotta)] h-1.5" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--parchment)]/70 flex items-center gap-1">
                <ArrowDown size={12} className="text-[var(--aqua)]" /> Water Depth
              </span>
              <span className="text-xs text-[var(--aqua)] font-mono">{channelDepth.toFixed(2)}m</span>
            </div>
            <input type="range" min="0.1" max="3" step="0.05" value={channelDepth}
              onChange={e => setChannelDepth(parseFloat(e.target.value))}
              className="w-full accent-[var(--aqua)] h-1.5" />
          </div>
          <div className="space-y-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--parchment)]/70 flex items-center gap-1">
                <Droplets size={12} className="text-[var(--parchment)]/50" /> Roughness (n)
              </span>
              <span className="text-xs text-[var(--parchment)]/70 font-mono">{manningsN.toFixed(3)}</span>
            </div>
            <input type="range" min="0.008" max="0.05" step="0.001" value={manningsN}
              onChange={e => setManningsN(parseFloat(e.target.value))}
              className="w-full accent-gray-400 h-1.5" />
            <div className="flex justify-between text-[8px] text-[var(--parchment)]/40">
              <span>Smooth glass</span>
              <span>Rough stone</span>
            </div>
          </div>
        </div>

        {showPhysics && (
          <div className="mt-4 p-3 bg-[var(--deep-ocean)]/80 rounded-lg border border-[var(--gold)]/30">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Calculator size={16} className="text-[var(--gold)]" />
                <h4 className="font-heading text-sm text-[var(--gold)]">Real-Time Hydraulic Calculations</h4>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowPhysics(false)}
                className="text-[var(--parchment)]/50 hover:bg-[var(--cerulean)]/20 h-6 w-6 p-0">
                <ChevronUp size={14} />
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-xs">
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/50">Velocity</p>
                <p className="text-[var(--aqua)] font-mono text-sm">{physics.velocity.toFixed(3)} m/s</p>
                <p className="text-[var(--parchment)]/30 mt-0.5">v = (1/n)R^⅔S^½</p>
              </div>
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/50">Discharge</p>
                <p className="text-[var(--aqua)] font-mono text-sm">{(physics.discharge * 1000).toFixed(1)} L/s</p>
                <p className="text-[var(--parchment)]/30 mt-0.5">Q = v × A</p>
              </div>
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/50">Froude Number</p>
                <p className={`font-mono text-sm ${physics.flowRegime === 'Subcritical' ? 'text-green-400' : physics.flowRegime === 'Supercritical' ? 'text-red-400' : 'text-yellow-400'}`}>
                  {physics.froudeNumber.toFixed(4)}
                </p>
                <p className="text-[var(--parchment)]/30 mt-0.5">Fr = v/√(gd) → {physics.flowRegime}</p>
              </div>
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/50">Reynolds ×10³</p>
                <p className="text-[var(--aqua)] font-mono text-sm">{(physics.reynoldsNumber / 1000).toFixed(1)}</p>
                <p className="text-[var(--parchment)]/30 mt-0.5">Re = vRρ/μ</p>
              </div>
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/50">Velocity Head</p>
                <p className="text-[var(--aqua)] font-mono text-sm">{physics.velocityHead.toFixed(4)} m</p>
                <p className="text-[var(--parchment)]/30 mt-0.5">hᵥ = v²/2g</p>
              </div>
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/50">Pressure Head</p>
                <p className="text-[var(--aqua)] font-mono text-sm">{physics.pressureHead.toFixed(3)} m</p>
                <p className="text-[var(--parchment)]/30 mt-0.5">p/γ = depth</p>
              </div>
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/50">Specific Energy</p>
                <p className="text-[var(--aqua)] font-mono text-sm">{physics.specificEnergy.toFixed(4)} m</p>
                <p className="text-[var(--parchment)]/30 mt-0.5">E = d + v²/2g</p>
              </div>
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/50">Hydraulic Radius</p>
                <p className="text-[var(--aqua)] font-mono text-sm">{physics.hydraulicRadius.toFixed(4)} m</p>
                <p className="text-[var(--parchment)]/30 mt-0.5">R = A/P</p>
              </div>
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/50">Bottom Pressure</p>
                <p className="text-[var(--aqua)] font-mono text-sm">{(physics.pressureAtBottom / 1000).toFixed(2)} kPa</p>
                <p className="text-[var(--parchment)]/30 mt-0.5">P = ρgd</p>
              </div>
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/50">Flow Area</p>
                <p className="text-[var(--aqua)] font-mono text-sm">{physics.area.toFixed(3)} m²</p>
                <p className="text-[var(--parchment)]/30 mt-0.5">A = w × d</p>
              </div>
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/50">Total Head</p>
                <p className="text-[var(--aqua)] font-mono text-sm">{physics.totalHead.toFixed(3)} m</p>
                <p className="text-[var(--parchment)]/30 mt-0.5">H = z + p/γ + v²/2g</p>
              </div>
              <div className="bg-[var(--river-blue)]/30 p-2 rounded">
                <p className="text-[var(--parchment)]/50">Power Loss</p>
                <p className="text-[var(--aqua)] font-mono text-sm">{physics.powerDissipated.toFixed(1)} W</p>
                <p className="text-[var(--parchment)]/30 mt-0.5">P = ρgQhₗ</p>
              </div>
            </div>
            <p className="mt-2 text-[9px] text-[var(--parchment)]/40 italic">
              Manning's equation for open channel flow · Bernoulli's principle for energy conservation · n = {manningsN.toFixed(3)} (Manning's roughness) · ρ = 998 kg/m³ · g = 9.81 m/s²
            </p>
          </div>
        )}

        {!showPhysics && (
          <Button variant="outline" size="sm" onClick={() => setShowPhysics(true)}
            className="mt-3 border-[var(--gold)]/30 text-[var(--parchment)] hover:bg-[var(--gold)]/10 w-full">
            <Calculator size={14} className="mr-2 text-[var(--gold)]" />
            Show Hydraulic Calculations
          </Button>
        )}

        <div className="mt-3 p-2 bg-[var(--deep-ocean)]/60 rounded-lg border border-[var(--aqua)]/20">
          <div className="flex items-start gap-2">
            <Info size={14} className="text-[var(--aqua)] mt-0.5 flex-shrink-0" />
            <p className="text-xs text-[var(--parchment)]/80">{baseSim.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
