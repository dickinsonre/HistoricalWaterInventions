# 8 Additional Water Flow Simulations

Excellent work on the existing four! Here are 8 more historically significant water systems that would integrate perfectly with your existing UI pattern:

---

## New Simulation Tabs to Add

```
┌─────────────┬───────────────┬─────────────────┬───────────────────┬─────────────────┐
│ Roman       │ Persian       │ Inverted        │ Ancient           │ Archimedes      │
│ Aqueduct    │ Qanat         │ Siphon          │ Reservoir         │ Screw       ◄NEW│
├─────────────┴───────────────┴─────────────────┴───────────────────┴─────────────────┤
│ Noria       │ Cloaca        │ Stepped         │ Subak             │                 │
│ Wheel   ◄NEW│ Maxima    ◄NEW│ Spillway    ◄NEW│ Irrigation    ◄NEW│                 │
└─────────────┴───────────────┴─────────────────┴───────────────────┴─────────────────┘
```

---

## 1️⃣ Archimedes Screw

**Origin:** Ancient Greece/Egypt, 3rd century BCE

```
Prompt for your app:

Add an "Archimedes Screw" tab showing a helical screw inside an inclined tube.
The screw rotates to lift water from a lower reservoir to a higher channel.

SVG visualization:
- Inclined tube at 30-45° angle from horizontal
- Helical spiral inside (show as repeating curved segments)
- Water pockets trapped between spiral flights
- Lower end submerged in water source
- Upper end discharging into irrigation channel
- Animate the spiral rotating, moving water pockets upward

Parameters:
- Screw Angle: 20° to 60°, default 37°
- Rotation Speed: 10 to 60 RPM, default 30
- Screw Diameter: 0.3 to 1.0m, default 0.5m
- Pitch (flight spacing): 0.2 to 0.8m, default 0.4m

Physics displayed:
- Flow Rate: Q = η × π × D² × p × n / 4 (where η=efficiency, D=diameter, p=pitch, n=RPM)
- Lift Height: H = L × sin(θ)
- Theoretical efficiency: ~70-80%

Info text: "Helical pump attributed to Archimedes (287-212 BCE). Still used today for 
pumping water, grain, and wastewater due to gentle handling and self-priming capability."
```

### SVG Structure for Archimedes Screw
```jsx
const ArchimedesScrew = ({ angle, rotationAngle, flowRate }) => (
  <svg viewBox="0 0 600 300" className="simulation-svg">
    {/* Background */}
    <defs>
      <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4a90d9" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="#2563eb" stopOpacity="0.9"/>
      </linearGradient>
      <linearGradient id="tubeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8b7355"/>
        <stop offset="100%" stopColor="#6b5344"/>
      </linearGradient>
    </defs>
    
    {/* Lower water source */}
    <rect x="20" y="220" width="150" height="80" fill="url(#waterGrad)" rx="5"/>
    <text x="95" y="270" textAnchor="middle" fill="#fff" fontSize="12">Source</text>
    
    {/* Upper discharge channel */}
    <rect x="430" y="40" width="150" height="30" fill="url(#waterGrad)" rx="3"/>
    <text x="505" y="60" textAnchor="middle" fill="#fff" fontSize="12">Discharge →</text>
    
    {/* Inclined tube housing */}
    <g transform={`rotate(-${angle}, 100, 260)`}>
      {/* Outer tube */}
      <rect x="80" y="240" width="380" height="50" fill="url(#tubeGrad)" rx="25"/>
      <rect x="85" y="245" width="370" height="40" fill="#1a1a2e" rx="20"/>
      
      {/* Rotating screw - animated */}
      <g transform={`rotate(${rotationAngle}, 270, 265)`}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <ellipse
            key={i}
            cx={100 + i * 45}
            cy={265}
            rx="20"
            ry="15"
            fill="#c9a86c"
            stroke="#8b7355"
            strokeWidth="2"
            transform={`rotate(${i * 45}, ${100 + i * 45}, 265)`}
          />
        ))}
      </g>
      
      {/* Water pockets (animated with rotation) */}
      {[0, 2, 4, 6].map((i) => (
        <ellipse
          key={`water-${i}`}
          cx={120 + i * 45 + (rotationAngle % 90) * 0.5}
          cy={268}
          rx="12"
          ry="8"
          fill="#4a90d9"
          opacity="0.7"
        />
      ))}
    </g>
    
    {/* Labels */}
    <text x="300" y="290" textAnchor="middle" fill="#8892b0" fontSize="11">
      Rotation: {Math.round(rotationAngle)}° | Flow: {flowRate.toFixed(1)} L/min
    </text>
  </svg>
);
```

---

## 2️⃣ Noria Water Wheel

**Origin:** Ancient Middle East, ~200 BCE

```
Prompt for your app:

Add a "Noria Wheel" tab showing a large vertical water wheel with buckets/pots 
attached around the rim that scoop water from a river and dump it into an aqueduct.

SVG visualization:
- Large rotating wheel (diameter ~10m scale) mounted on a horizontal axle
- River/stream flowing at the bottom
- Ceramic pots or buckets attached around the wheel perimeter
- Pots fill at the bottom, empty at the top into an elevated channel
- Animate wheel rotation with water spilling from pots at apex
- Support structure (wooden frame)

Parameters:
- Wheel Diameter: 5 to 15m, default 10m
- Number of Buckets: 12 to 36, default 24
- Bucket Volume: 5 to 20L, default 10L
- Current Speed: 0.5 to 2.0 m/s, default 1.0 m/s

Physics displayed:
- Peripheral Speed: v = π × D × n
- Flow Rate: Q = buckets × volume × RPM × efficiency
- Lift Height: H ≈ D (wheel diameter)
- Power from current: P = 0.5 × ρ × A × v³

Info text: "Water-powered lifting wheel using river current. Syrian city of Hama 
still operates 2000-year-old norias on the Orontes River. Lifted water up to 20m 
without any external power input."
```

### SVG Structure for Noria Wheel
```jsx
const NoriaWheel = ({ rotationAngle, bucketCount, fillLevels }) => {
  const radius = 100;
  const centerX = 300;
  const centerY = 150;
  
  return (
    <svg viewBox="0 0 600 350" className="simulation-svg">
      {/* River flowing at bottom */}
      <rect x="0" y="250" width="600" height="100" fill="#1e3a5f"/>
      {/* Animated water flow lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1={-50 + (i * 150) + (rotationAngle % 150)}
          y1="280"
          x2={50 + (i * 150) + (rotationAngle % 150)}
          y2="280"
          stroke="#4a90d9"
          strokeWidth="2"
          opacity="0.5"
        />
      ))}
      <text x="50" y="320" fill="#4a90d9" fontSize="12">→ River Current</text>
      
      {/* Elevated aqueduct/channel at top */}
      <rect x="380" y="30" width="200" height="25" fill="#8b7355" rx="3"/>
      <rect x="385" y="35" width="190" height="15" fill="#4a90d9" opacity="0.8"/>
      <text x="480" y="70" textAnchor="middle" fill="#8892b0" fontSize="11">
        To Irrigation →
      </text>
      
      {/* Support structure */}
      <line x1="200" y1="250" x2="250" y2="150" stroke="#6b5344" strokeWidth="8"/>
      <line x1="400" y1="250" x2="350" y2="150" stroke="#6b5344" strokeWidth="8"/>
      <rect x="240" y="140" width="120" height="20" fill="#8b7355"/>
      
      {/* Main wheel */}
      <g transform={`rotate(${rotationAngle}, ${centerX}, ${centerY})`}>
        {/* Wheel rim */}
        <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#6b5344" strokeWidth="12"/>
        <circle cx={centerX} cy={centerY} r={radius - 8} fill="none" stroke="#c9a86c" strokeWidth="4"/>
        
        {/* Spokes */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45) * Math.PI / 180;
          return (
            <line
              key={`spoke-${i}`}
              x1={centerX}
              y1={centerY}
              x2={centerX + radius * Math.cos(angle)}
              y2={centerY + radius * Math.sin(angle)}
              stroke="#8b7355"
              strokeWidth="4"
            />
          );
        })}
        
        {/* Hub */}
        <circle cx={centerX} cy={centerY} r="15" fill="#6b5344"/>
        <circle cx={centerX} cy={centerY} r="8" fill="#4a4a5a"/>
        
        {/* Buckets around rim */}
        {Array.from({ length: bucketCount }).map((_, i) => {
          const angle = (i * (360 / bucketCount)) * Math.PI / 180;
          const bx = centerX + (radius + 15) * Math.cos(angle);
          const by = centerY + (radius + 15) * Math.sin(angle);
          const bucketAngle = (i * (360 / bucketCount));
          
          // Fill level based on position (full at bottom, empty at top)
          const normalizedAngle = ((bucketAngle - rotationAngle) % 360 + 360) % 360;
          const fillPercent = normalizedAngle > 180 ? 
            Math.min(1, (normalizedAngle - 180) / 90) : 
            Math.max(0, 1 - normalizedAngle / 90);
          
          return (
            <g key={`bucket-${i}`} transform={`translate(${bx}, ${by})`}>
              {/* Bucket container */}
              <path
                d="M-8,-12 L-10,8 L10,8 L8,-12 Z"
                fill="#cd853f"
                stroke="#8b4513"
                strokeWidth="1"
              />
              {/* Water in bucket */}
              {fillPercent > 0.1 && (
                <rect
                  x="-8"
                  y={8 - fillPercent * 18}
                  width="16"
                  height={fillPercent * 18}
                  fill="#4a90d9"
                  opacity="0.8"
                />
              )}
            </g>
          );
        })}
      </g>
      
      {/* Water pouring at top (when bucket tips) */}
      <path
        d={`M${centerX + 80},${centerY - radius - 10} Q${centerX + 100},${centerY - radius + 20} ${centerX + 120},50`}
        fill="none"
        stroke="#4a90d9"
        strokeWidth="4"
        strokeDasharray="8,4"
        opacity="0.7"
      />
    </svg>
  );
};
```

---

## 3️⃣ Cloaca Maxima (Sewer System)

**Origin:** Ancient Rome, 6th century BCE

```
Prompt for your app:

Add a "Cloaca Maxima" tab showing the ancient Roman sewer system - an arched 
underground tunnel carrying wastewater and stormwater to the Tiber River.

SVG visualization:
- Cross-section view of a large arched stone tunnel (semi-circular arch)
- Water flowing along the bottom (variable depth based on flow)
- Stone block construction visible in arch
- Multiple tributary connections entering from sides
- Outlet discharging into river at the end
- Particle animation showing debris/flow movement

Parameters:
- Main Tunnel Width: 2 to 5m, default 3.2m
- Channel Slope: 0.1% to 1.0%, default 0.3%
- Base Flow: 10 to 100 L/s, default 30 L/s
- Storm Inflow: 0 to 500 L/s, default 0 (slider to simulate storm)

Physics displayed:
- Manning's equation: Q = (1/n) × A × R^(2/3) × S^(1/2)
- Flow velocity based on depth
- Capacity percentage (surcharged warning if >100%)
- Time of concentration

Info text: "One of the oldest sewer systems in the world, dating to 600 BCE. 
The name means 'Greatest Sewer'. Sections remain in use today after 2,600 years. 
Combined stormwater and sanitary flows - a design still debated today."
```

### SVG Structure for Cloaca Maxima
```jsx
const CloacaMaxima = ({ flowRate, depth, stormInflow, particlePositions }) => {
  const tunnelWidth = 320;
  const tunnelHeight = 160;
  const waterDepth = Math.min(depth, tunnelHeight * 0.7);
  const capacityPercent = (waterDepth / (tunnelHeight * 0.7)) * 100;
  
  return (
    <svg viewBox="0 0 600 300" className="simulation-svg">
      {/* Underground background */}
      <rect x="0" y="0" width="600" height="300" fill="#2a1810"/>
      
      {/* Soil layers */}
      <rect x="0" y="0" width="600" height="40" fill="#3d2817"/>
      <rect x="0" y="40" width="600" height="30" fill="#4a3520"/>
      
      {/* Street level indication */}
      <rect x="0" y="0" width="600" height="15" fill="#5a4a3a"/>
      <text x="300" y="10" textAnchor="middle" fill="#a08060" fontSize="10">
        ─── Street Level (Via) ───
      </text>
      
      {/* Main tunnel arch */}
      <g transform="translate(140, 70)">
        {/* Stone blocks forming arch */}
        <path
          d={`M0,${tunnelHeight} 
              L0,${tunnelHeight * 0.4} 
              Q${tunnelWidth/2},-30 ${tunnelWidth},${tunnelHeight * 0.4}
              L${tunnelWidth},${tunnelHeight} Z`}
          fill="#4a4035"
          stroke="#6b5a4a"
          strokeWidth="3"
        />
        
        {/* Inner tunnel space */}
        <path
          d={`M15,${tunnelHeight - 10} 
              L15,${tunnelHeight * 0.45} 
              Q${tunnelWidth/2},-15 ${tunnelWidth - 15},${tunnelHeight * 0.45}
              L${tunnelWidth - 15},${tunnelHeight - 10} Z`}
          fill="#1a1510"
        />
        
        {/* Stone block lines */}
        {[0.2, 0.4, 0.6, 0.8].map((t, i) => (
          <line
            key={i}
            x1={tunnelWidth * t - 20}
            y1={tunnelHeight * 0.3}
            x2={tunnelWidth * t + 20}
            y2={tunnelHeight * 0.1}
            stroke="#6b5a4a"
            strokeWidth="1"
            opacity="0.5"
          />
        ))}
        
        {/* Water flowing at bottom */}
        <path
          d={`M20,${tunnelHeight - 10} 
              L20,${tunnelHeight - 10 - waterDepth} 
              Q${tunnelWidth/2},${tunnelHeight - 15 - waterDepth - 5} 
              ${tunnelWidth - 20},${tunnelHeight - 10 - waterDepth}
              L${tunnelWidth - 20},${tunnelHeight - 10} Z`}
          fill={capacityPercent > 80 ? "#5a4030" : "#3a5060"}
          opacity="0.8"
        />
        
        {/* Flow particles */}
        {particlePositions.map((pos, i) => (
          <circle
            key={i}
            cx={20 + pos.x}
            cy={tunnelHeight - 15 - pos.y * waterDepth * 0.5}
            r="3"
            fill={pos.type === 'debris' ? "#6b5a4a" : "#5a7a9a"}
            opacity="0.6"
          />
        ))}
        
        {/* Tributary inlet on side */}
        <ellipse
          cx="40"
          cy={tunnelHeight * 0.5}
          rx="15"
          ry="20"
          fill="#1a1510"
          stroke="#4a4035"
          strokeWidth="2"
        />
        <text x="40" y={tunnelHeight * 0.5 + 5} textAnchor="middle" fill="#8892b0" fontSize="8">
          Inlet
        </text>
        
        {/* Water drops from inlet during storm */}
        {stormInflow > 0 && (
          <g>
            <circle cx="45" cy={tunnelHeight * 0.6} r="2" fill="#4a90d9"/>
            <circle cx="38" cy={tunnelHeight * 0.7} r="2" fill="#4a90d9"/>
            <circle cx="50" cy={tunnelHeight * 0.75} r="2" fill="#4a90d9"/>
          </g>
        )}
      </g>
      
      {/* Outlet to Tiber */}
      <g transform="translate(500, 150)">
        <path d="M0,0 L80,20 L80,80 L0,60 Z" fill="#3a3025"/>
        <path d="M5,5 L75,23 L75,75 L5,57 Z" fill="#1a1510"/>
        <text x="40" y="90" textAnchor="middle" fill="#8892b0" fontSize="10">
          → To Tiber
        </text>
        {/* Outflow */}
        <path
          d={`M75,${40 - waterDepth * 0.2} L95,${45 - waterDepth * 0.1}`}
          stroke="#4a90d9"
          strokeWidth={waterDepth * 0.1}
          opacity="0.7"
        />
      </g>
      
      {/* Capacity indicator */}
      <g transform="translate(20, 250)">
        <rect x="0" y="0" width="150" height="20" fill="#2a2520" rx="3"/>
        <rect 
          x="2" 
          y="2" 
          width={Math.min(146, capacityPercent * 1.46)} 
          height="16" 
          fill={capacityPercent > 80 ? "#c94040" : "#4a90d9"} 
          rx="2"
        />
        <text x="75" y="14" textAnchor="middle" fill="#fff" fontSize="10">
          Capacity: {capacityPercent.toFixed(0)}%
        </text>
      </g>
      
      {/* Warning for surcharge */}
      {capacityPercent > 90 && (
        <text x="300" y="280" textAnchor="middle" fill="#ff6b6b" fontSize="12" fontWeight="bold">
          ⚠️ SURCHARGE WARNING - Flow Backing Up!
        </text>
      )}
    </svg>
  );
};
```

---

## 4️⃣ Stepped Spillway

**Origin:** Various ancient civilizations (Persia, Rome, Sri Lanka)

```
Prompt for your app:

Add a "Stepped Spillway" tab showing a dam spillway with energy-dissipating steps.
Water cascades down the steps, demonstrating hydraulic jumps and energy dissipation.

SVG visualization:
- Series of descending steps (8-12 steps)
- Water flowing over each step creating small hydraulic jumps
- Aeration shown as bubbles/white water on each step
- Pool at bottom for energy dissipation
- Dam face on one side
- Animate water particles cascading down

Parameters:
- Step Height: 0.3 to 1.0m, default 0.5m
- Step Length: 0.5 to 2.0m, default 1.0m
- Number of Steps: 6 to 15, default 10
- Flow Rate: 1 to 20 m³/s/m, default 5

Physics displayed:
- Energy dissipation: ΔE = Σ(step losses)
- Froude number at each step
- Critical depth calculation
- Nappe flow vs skimming flow regime

Info text: "Energy-dissipating spillway design prevents erosion at dam bases. 
Ancient stepped spillways at Marib Dam (Yemen, 750 BCE) and Sri Lankan tanks 
(300 BCE) show remarkable engineering sophistication. Modern dams use the same principle."
```

---

## 5️⃣ Subak Irrigation System

**Origin:** Bali, Indonesia, ~9th century CE

```
Prompt for your app:

Add a "Subak System" tab showing the Balinese cooperative irrigation system with 
terraced rice paddies and water temple distribution nodes.

SVG visualization:
- Mountain source at top with spring
- Series of descending rice terraces (curved to show contour)
- Water temples (small structures) at key distribution points
- Branching channels with control weirs
- Multiple paddies receiving water simultaneously
- Show fair distribution principle (equal flow division)

Parameters:
- Number of Terraces: 4 to 12, default 8
- Total Flow Available: 50 to 200 L/s, default 100
- Number of Farmers: 4 to 20, default 10
- Planting Phase: slider for crop water demand cycle

Physics displayed:
- Flow per farmer: Q_total / n_farmers
- Terrace holding capacity
- Evapotranspiration losses
- Equity ratio (actual vs fair share)

Info text: "UNESCO World Heritage social-ecological system. The water temple 
(Pura Ulun Danu) coordinates planting schedules and water sharing among 
thousands of farmers without central authority. Demonstrates how hydraulic 
engineering and social organization intertwine."
```

---

## 6️⃣ Roman Inverted Siphon

**Origin:** Ancient Rome (existing in your app, but here's enhanced version)

```
Enhanced prompt if you want to upgrade the existing one:

Enhance the "Inverted Siphon" to show:
- Valley cross-section profile
- Inlet header tank (castellum) at high side
- Multiple parallel lead/terracotta pipes descending into valley
- Lowest point with maximum pressure indication
- Outlet header rising to slightly lower elevation
- Pressure head visualization at each point

Add parameters:
- Valley Depth: 20 to 100m, default 50m
- Pipe Diameter: 0.15 to 0.5m, default 0.25m
- Number of Pipes: 1 to 9, default 3
- Head Loss Factor: slider for pipe roughness

Physics displayed:
- Maximum pressure: P = ρgh (at valley bottom)
- Velocity: from continuity
- Pipe stress: pressure × diameter / (2 × wall thickness)
- Energy grade line visualization
```

---

## 7️⃣ Qanat Vertical Shaft System

**Origin:** Ancient Persia (existing, but cross-section enhancement)

```
Enhanced prompt for Persian Qanat:

Add a mode showing the vertical access/ventilation shafts:
- Series of vertical shafts from surface to tunnel level
- Spacing typically 20-50m apart
- Spoil mounds (kahriz) around each shaft opening
- Show how these allowed construction and maintenance
- Airflow pattern through shafts (natural ventilation)

New visualization mode: Toggle between "Profile View" (current) and "Shaft View"

Shaft View parameters:
- Shaft Spacing: 20 to 100m, default 35m
- Shaft Diameter: 0.8 to 2.0m, default 1.0m
- Total Length: 1 to 50km, default 5km

Display:
- Total number of shafts
- Construction labor estimate
- Maintenance access points
- Ventilation airflow pattern
```

---

## 8️⃣ Tank Cascade System

**Origin:** Ancient Sri Lanka, ~300 BCE

```
Prompt for your app:

Add a "Tank Cascade" tab showing the interconnected reservoir system of ancient 
Sri Lanka - a series of small tanks connected so overflow from one feeds the next.

SVG visualization:
- Hillside with 4-6 connected tanks at different elevations
- Each tank has: 
  - Embankment (bund)
  - Sluice gate (sōrowwa) for controlled release
  - Spillway for overflow to next tank
  - Biso Kotuwa (valve pit) at one tank
- Forest catchment at top
- Paddy fields receiving water at bottom
- Show how water cascades through the system

Parameters:
- Number of Tanks: 3 to 8, default 5
- Catchment Rainfall: 0 to 100 mm/day, default 10
- Tank Storage (each): 10,000 to 100,000 m³, default 30,000
- Release Rate: 0 to 100%, default 20%

Physics displayed:
- Cascade efficiency = output / input
- Storage-yield relationship  
- Spillway flow: Q = C × L × H^1.5
- Safe yield during drought

Info text: "Ancient Sri Lankan hydraulic civilization built over 30,000 
interconnected tanks. The cascade maximizes water use - runoff from one tank 
becomes supply for the next. Biso Kotuwa valve pits controlled sluice releases 
using ingenious pressure-balancing chambers."
```

### SVG Structure for Tank Cascade
```jsx
const TankCascade = ({ tankLevels, flowRates, rainfallIntensity }) => {
  const tanks = [
    { x: 100, y: 50, width: 80, maxDepth: 40, name: "Tank 1 (Upper)" },
    { x: 180, y: 100, width: 90, maxDepth: 45, name: "Tank 2" },
    { x: 250, y: 150, width: 100, maxDepth: 50, name: "Tank 3 (w/ Biso Kotuwa)" },
    { x: 340, y: 210, width: 110, maxDepth: 55, name: "Tank 4" },
    { x: 440, y: 260, width: 100, maxDepth: 50, name: "Tank 5 (Lower)" },
  ];
  
  return (
    <svg viewBox="0 0 600 350" className="simulation-svg">
      {/* Hillside background */}
      <path
        d="M0,350 L0,100 Q100,20 200,60 Q350,30 500,80 L600,60 L600,350 Z"
        fill="#2d4a3a"
        opacity="0.3"
      />
      
      {/* Forest at top */}
      {[50, 80, 120, 160, 200].map((x, i) => (
        <path
          key={i}
          d={`M${x},${60 + i * 5} L${x - 10},${80 + i * 5} L${x + 10},${80 + i * 5} Z`}
          fill="#1a3a2a"
        />
      ))}
      <text x="100" y="45" fill="#5a8a6a" fontSize="10">Catchment Forest</text>
      
      {/* Rainfall animation */}
      {rainfallIntensity > 0 && Array.from({ length: Math.floor(rainfallIntensity / 10) }).map((_, i) => (
        <line
          key={i}
          x1={50 + i * 30 + Math.random() * 20}
          y1={20 + Math.random() * 30}
          x2={55 + i * 30 + Math.random() * 20}
          y2={35 + Math.random() * 30}
          stroke="#4a90d9"
          strokeWidth="1"
          opacity="0.6"
        />
      ))}
      
      {/* Tanks */}
      {tanks.map((tank, i) => {
        const level = tankLevels[i] || 0.5;
        const waterDepth = tank.maxDepth * level;
        const isOverflowing = level > 0.95;
        
        return (
          <g key={i}>
            {/* Embankment (bund) */}
            <path
              d={`M${tank.x - 10},${tank.y + tank.maxDepth} 
                  L${tank.x - 5},${tank.y} 
                  L${tank.x + tank.width + 5},${tank.y}
                  L${tank.x + tank.width + 10},${tank.y + tank.maxDepth} Z`}
              fill="#6b5344"
              stroke="#4a3a2a"
              strokeWidth="2"
            />
            
            {/* Tank basin */}
            <rect
              x={tank.x}
              y={tank.y}
              width={tank.width}
              height={tank.maxDepth}
              fill="#1a2a3a"
            />
            
            {/* Water level */}
            <rect
              x={tank.x + 2}
              y={tank.y + tank.maxDepth - waterDepth}
              width={tank.width - 4}
              height={waterDepth}
              fill="#3a6a9a"
              opacity="0.8"
            />
            
            {/* Sluice gate */}
            <rect
              x={tank.x + tank.width - 8}
              y={tank.y + tank.maxDepth - 15}
              width="6"
              height="15"
              fill="#8b7355"
            />
            
            {/* Biso Kotuwa indicator for tank 3 */}
            {i === 2 && (
              <g>
                <rect
                  x={tank.x + tank.width - 20}
                  y={tank.y + tank.maxDepth - 25}
                  width="12"
                  height="25"
                  fill="#5a4a3a"
                  stroke="#8b7355"
                />
                <text 
                  x={tank.x + tank.width - 14} 
                  y={tank.y + tank.maxDepth + 15} 
                  textAnchor="middle"
                  fill="#c9a86c" 
                  fontSize="8"
                >
                  Biso Kotuwa
                </text>
              </g>
            )}
            
            {/* Overflow spillway (if overflowing) */}
            {isOverflowing && i < tanks.length - 1 && (
              <path
                d={`M${tank.x + tank.width + 5},${tank.y} 
                    Q${tank.x + tank.width + 30},${tank.y + 20}
                    ${tanks[i + 1].x - 5},${tanks[i + 1].y}`}
                fill="none"
                stroke="#4a90d9"
                strokeWidth="3"
                strokeDasharray="5,3"
              />
            )}
            
            {/* Flow channel to next tank (controlled release) */}
            {i < tanks.length - 1 && (
              <path
                d={`M${tank.x + tank.width},${tank.y + tank.maxDepth - 10}
                    L${tanks[i + 1].x},${tanks[i + 1].y + 5}`}
                fill="none"
                stroke={flowRates[i] > 0 ? "#4a90d9" : "#3a4a5a"}
                strokeWidth={flowRates[i] > 0 ? 2 : 1}
                strokeDasharray={flowRates[i] > 0 ? "none" : "4,4"}
              />
            )}
            
            {/* Tank label */}
            <text
              x={tank.x + tank.width / 2}
              y={tank.y + tank.maxDepth + 12}
              textAnchor="middle"
              fill="#8892b0"
              fontSize="9"
            >
              {tank.name}
            </text>
            
            {/* Level percentage */}
            <text
              x={tank.x + tank.width / 2}
              y={tank.y + tank.maxDepth / 2}
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
            >
              {Math.round(level * 100)}%
            </text>
          </g>
        );
      })}
      
      {/* Paddy fields at bottom */}
      <g transform="translate(480, 320)">
        {[0, 30, 60, 90].map((x, i) => (
          <rect
            key={i}
            x={x}
            y="0"
            width="25"
            height="15"
            fill="#4a7a4a"
            stroke="#3a5a3a"
          />
        ))}
        <text x="60" y="25" textAnchor="middle" fill="#8892b0" fontSize="9">
          Rice Paddies
        </text>
      </g>
    </svg>
  );
};
```

---

## Implementation Priority Order

Based on educational value and visual interest:

| | | Priority | Simulation | Why | Complexity | |  |
|----------|------------|-----|------------|
| | | 1 | **Archimedes Screw** | Iconic, still used today, great animation | Medium | |  |
| | | 2 | **Noria Wheel** | Dramatic visual, self-powered, beautiful animation | Medium-High | |  |
| | | 3 | **Tank Cascade** | Systems thinking, water management networks | Medium | |  |
| | | 4 | **Cloaca Maxima** | Connects to modern stormwater (SWMM relevance) | Medium | |  |
| | | 5 | **Stepped Spillway** | Energy concepts, dam safety | Low-Medium | |  |
| | | 6 | **Subak System** | Social-ecological, UNESCO heritage | Medium | |  |
| | | 7 | **Enhanced Qanat** | Builds on existing | Low | |  |
| | | 8 | **Enhanced Siphon** | Builds on existing | Low | |  |

---

## Quick Add Prompt for All 8

Copy this into your Replit app to add all tabs at once:

```
Add 8 new simulation tabs to the Interactive Water Flow Simulation:

1. "Archimedes Screw" - Rotating helical pump lifting water up an inclined tube
2. "Noria Wheel" - Large river-powered wheel with buckets scooping and dumping water
3. "Cloaca Maxima" - Roman arched sewer tunnel cross-section with flow depth
4. "Stepped Spillway" - Dam spillway with cascading steps for energy dissipation
5. "Subak System" - Balinese terraced irrigation with water temple distribution
6. "Tank Cascade" - Sri Lankan interconnected reservoir system
7. "Qanat Shafts" - Cross-section showing vertical access/ventilation shafts
8. "Siphon Pressure" - Enhanced siphon showing pressure head at valley bottom

Each should have:
- Animated SVG visualization matching existing style
- 3-4 adjustable parameters with sliders
- Calculated physics metrics
- Historical info text at bottom

Use the same dark blue/teal color scheme and UI layout as existing simulations.
```

---

Would you like me to:
1. **Provide complete React code for any specific simulation?**
2. **Create the physics calculation functions for all 8?**
3. **Design the parameter panel layout for consistency?**
4. **Add SWMM5 export features to each simulation?**