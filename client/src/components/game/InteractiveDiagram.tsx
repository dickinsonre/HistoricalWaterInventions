import { useState, useRef, useEffect } from "react";
import { ZoomIn, ZoomOut, RotateCcw, Info, Move } from "lucide-react";
import { Button } from "../ui/button";

interface DiagramHotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  definition: string;
}

interface InteractiveDiagramProps {
  src: string;
  alt: string;
  inventionId: string;
}

const diagramHotspots: Record<string, DiagramHotspot[]> = {
  "shaduf": [
    { id: "pole", x: 50, y: 30, label: "Beam", definition: "Wooden pole 3-5m long, balanced on the fulcrum" },
    { id: "counterweight", x: 25, y: 25, label: "Counterweight", definition: "Heavy mud or stone (15-20kg) to offset water weight" },
    { id: "bucket", x: 75, y: 70, label: "Bucket", definition: "Clay or leather container holding 10-20 liters" },
    { id: "pivot", x: 50, y: 45, label: "Fulcrum", definition: "Mud-brick pillar supporting the pivoting beam" },
  ],
  "nilometer": [
    { id: "column", x: 50, y: 50, label: "Measuring Column", definition: "Stone pillar marked with cubits (52.4cm units)" },
    { id: "steps", x: 30, y: 70, label: "Staircase", definition: "Access steps for priests to read water levels" },
    { id: "inlet", x: 70, y: 80, label: "Water Inlet", definition: "Channel connecting to the Nile River" },
  ],
  "qanat-plans": [
    { id: "mother-well", x: 15, y: 30, label: "Mother Well", definition: "Deep vertical shaft tapping into the aquifer" },
    { id: "tunnel", x: 50, y: 60, label: "Underground Channel", definition: "Gently sloping tunnel (0.5-1% grade) for gravity flow" },
    { id: "shaft", x: 35, y: 40, label: "Access Shaft", definition: "Vertical shafts every 20-50m for maintenance" },
    { id: "outlet", x: 85, y: 70, label: "Outlet", definition: "Surface exit point for irrigation or city water" },
  ],
  "aqueduct": [
    { id: "channel", x: 50, y: 20, label: "Water Channel", definition: "Stone-lined channel carrying water by gravity" },
    { id: "arches", x: 50, y: 60, label: "Arched Supports", definition: "Stone arches distributing weight efficiently" },
    { id: "gradient", x: 75, y: 30, label: "Gradient", definition: "Precise slope (1:200) for steady water flow" },
  ],
  "clepsydra": [
    { id: "vessel", x: 50, y: 40, label: "Water Vessel", definition: "Terracotta or bronze container for water" },
    { id: "hole", x: 50, y: 85, label: "Calibrated Hole", definition: "Precise 1-3mm opening for consistent drainage" },
    { id: "markings", x: 25, y: 50, label: "Time Markings", definition: "Graduated scale showing elapsed time" },
  ],
  "great-bath": [
    { id: "pool", x: 50, y: 50, label: "Main Pool", definition: "Brick-lined basin 12m x 7m x 2.4m deep" },
    { id: "waterproofing", x: 30, y: 70, label: "Bitumen Layer", definition: "Natural asphalt sealing between bricks" },
    { id: "drain", x: 80, y: 80, label: "Drainage System", definition: "Corbeled drain removing used water" },
    { id: "steps", x: 50, y: 30, label: "Entry Steps", definition: "Wide steps for ritual descent into water" },
  ],
  "stepwell": [
    { id: "steps", x: 30, y: 40, label: "Descending Steps", definition: "Multiple levels allowing access at any water level" },
    { id: "well", x: 70, y: 70, label: "Well Shaft", definition: "Deep vertical shaft reaching the water table" },
    { id: "pavilions", x: 50, y: 20, label: "Rest Pavilions", definition: "Covered platforms for shade and gathering" },
  ],
  "barays": [
    { id: "reservoir", x: 50, y: 50, label: "Reservoir", definition: "Massive artificial lake up to 8km x 2km" },
    { id: "embankment", x: 20, y: 40, label: "Earthen Dam", definition: "Raised earth walls containing water" },
    { id: "inlet", x: 80, y: 30, label: "River Diversion", definition: "Channels directing monsoon water inward" },
    { id: "outlet", x: 80, y: 70, label: "Irrigation Outlet", definition: "Controlled gates releasing water to fields" },
  ],
};

export default function InteractiveDiagram({ src, alt, inventionId }: InteractiveDiagramProps) {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [activeHotspot, setActiveHotspot] = useState<DiagramHotspot | null>(null);
  const [showLabels, setShowLabels] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const hotspots = diagramHotspots[inventionId] || [];

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 1));
  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom(prev => Math.min(Math.max(prev + delta, 1), 3));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoom > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ 
        x: e.touches[0].clientX - position.x, 
        y: e.touches[0].clientY - position.y 
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && zoom > 1 && e.touches.length === 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleZoomOut}
            disabled={zoom <= 1}
            className="water-card text-[var(--parchment)] h-8 w-8 p-0"
          >
            <ZoomOut size={14} />
          </Button>
          <span className="text-[var(--parchment)]/70 text-xs min-w-[40px] text-center">
            {Math.round(zoom * 100)}%
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleZoomIn}
            disabled={zoom >= 3}
            className="water-card text-[var(--parchment)] h-8 w-8 p-0"
          >
            <ZoomIn size={14} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="water-card text-[var(--parchment)] h-8 w-8 p-0"
          >
            <RotateCcw size={14} />
          </Button>
        </div>
        {hotspots.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowLabels(!showLabels)}
            className={`water-card text-[var(--parchment)] h-8 px-2 text-xs ${showLabels ? 'bg-[var(--gold)]/20' : ''}`}
          >
            <Info size={14} className="mr-1" />
            {showLabels ? 'Hide Labels' : 'Show Labels'}
          </Button>
        )}
      </div>

      <div 
        ref={containerRef}
        className="relative overflow-hidden rounded-lg border border-[var(--aqua)]/20 bg-[var(--deep-ocean)]/80"
        style={{ 
          cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
          touchAction: 'none'
        }}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div
          className="relative transition-transform duration-100"
          style={{
            transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
            transformOrigin: 'center center'
          }}
        >
          <img 
            src={src} 
            alt={alt}
            className="max-w-full h-auto max-h-[400px] object-contain mx-auto select-none"
            draggable={false}
          />

          {showLabels && hotspots.map((hotspot) => (
            <div
              key={hotspot.id}
              className="absolute cursor-pointer group"
              style={{ 
                left: `${hotspot.x}%`, 
                top: `${hotspot.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => setActiveHotspot(hotspot)}
              onMouseLeave={() => setActiveHotspot(null)}
              onClick={() => setActiveHotspot(activeHotspot?.id === hotspot.id ? null : hotspot)}
            >
              <div className="w-5 h-5 rounded-full bg-[var(--gold)] border-2 border-white shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-[10px] text-white font-bold">i</span>
              </div>

              {activeHotspot?.id === hotspot.id && (
                <div 
                  className="absolute z-50 bg-[var(--deep-ocean)] border border-[var(--gold)]/50 rounded-lg p-3 shadow-xl min-w-[200px] max-w-[280px]"
                  style={{
                    left: hotspot.x > 50 ? 'auto' : '100%',
                    right: hotspot.x > 50 ? '100%' : 'auto',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    marginLeft: hotspot.x > 50 ? 0 : '8px',
                    marginRight: hotspot.x > 50 ? '8px' : 0
                  }}
                >
                  <h4 className="text-[var(--gold)] font-heading text-sm mb-1">{hotspot.label}</h4>
                  <p className="text-[var(--parchment)]/90 text-xs leading-relaxed">{hotspot.definition}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {zoom > 1 && (
        <div className="absolute bottom-2 left-2 bg-[var(--deep-ocean)]/80 text-[var(--parchment)]/60 text-xs px-2 py-1 rounded flex items-center gap-1">
          <Move size={12} /> Drag to pan
        </div>
      )}

      <p className="text-center text-[var(--parchment)]/60 text-sm mt-2">
        {hotspots.length > 0 
          ? "Hover over gold markers for details • Scroll to zoom"
          : "Scroll or pinch to zoom • Drag to pan when zoomed"
        }
      </p>
    </div>
  );
}
