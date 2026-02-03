const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'swmm5-models');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const swmm5ExportPath = path.join(__dirname, '..', 'client', 'src', 'lib', 'swmm5Export.ts');
const content = fs.readFileSync(swmm5ExportPath, 'utf8');

const modelsMatch = content.match(/export const SWMM5_MODELS[\s\S]*?= \{([\s\S]*?)\n\};/);
if (!modelsMatch) {
  console.error('Could not find SWMM5_MODELS in file');
  process.exit(1);
}

function generateSWMM5Content(model) {
  const params = model.parameters || {};
  const length = params.length || 1000;
  const slope = params.slope || 0.001;
  const flowRate = params.flowRate || 1.0;
  const roughness = params.roughness || 0.015;
  const channelWidth = params.channelWidth || 2;
  const channelDepth = params.channelDepth || 1;

  return `[TITLE]
;;Project Title/Notes
${model.name}
${model.description}
Civilization: ${model.civilization}
Period: ${model.period}
Engineering Notes: ${model.engineeringNotes || 'N/A'}

[OPTIONS]
;;Option             Value
FLOW_UNITS           CMS
INFILTRATION         HORTON
FLOW_ROUTING         DYNWAVE
LINK_OFFSETS         DEPTH
MIN_SLOPE            0.0001
ALLOW_PONDING        NO
SKIP_STEADY_STATE    NO

START_DATE           01/01/2024
START_TIME           00:00:00
REPORT_START_DATE    01/01/2024
REPORT_START_TIME    00:00:00
END_DATE             01/02/2024
END_TIME             00:00:00
SWEEP_START          01/01
SWEEP_END            12/31
DRY_DAYS             0
REPORT_STEP          00:05:00
WET_STEP             00:05:00
DRY_STEP             01:00:00
ROUTING_STEP         0:00:30
RULE_STEP            00:00:00

INERTIAL_DAMPING     PARTIAL
NORMAL_FLOW_LIMITED  BOTH
FORCE_MAIN_EQUATION  H-W
VARIABLE_STEP        0.75
LENGTHENING_STEP     0
MIN_SURFAREA         1.14
MAX_TRIALS           8
HEAD_TOLERANCE       0.0015
SYS_FLOW_TOL         5
LAT_FLOW_TOL         5
MINIMUM_STEP         0.5
THREADS              1

[EVAPORATION]
;;Data Source    Parameters
;;-------------- ----------------
CONSTANT         0.0
DRY_ONLY         NO

[JUNCTIONS]
;;Name           Elevation  MaxDepth   InitDepth  SurDepth   Aponded   
;;-------------- ---------- ---------- ---------- ---------- ----------
J1               10.0       ${channelDepth * 2}          0          0          0         
J2               ${10 - (length * slope / 1000)}       ${channelDepth * 2}          0          0          0         

[OUTFALLS]
;;Name           Elevation  Type       Stage Data       Gated    Route To        
;;-------------- ---------- ---------- ---------------- -------- ----------------
Out1             ${10 - (length * slope / 500)}       FREE                        NO                       

[CONDUITS]
;;Name           From Node        To Node          Length     Roughness  InOffset   OutOffset  InitFlow   MaxFlow   
;;-------------- ---------------- ---------------- ---------- ---------- ---------- ---------- ---------- ----------
C1               J1               J2               ${length}        ${roughness}       0          0          ${flowRate}          0         
C2               J2               Out1             ${length / 2}        ${roughness}       0          0          ${flowRate}          0         

[XSECTIONS]
;;Link           Shape        Geom1            Geom2      Geom3      Geom4      Barrels    Culvert   
;;-------------- ------------ ---------------- ---------- ---------- ---------- ---------- ----------
C1               RECT_OPEN    ${channelDepth}              ${channelWidth}          0          0          1                    
C2               RECT_OPEN    ${channelDepth}              ${channelWidth}          0          0          1                    

[INFLOWS]
;;Node           Constituent      Time Series      Type     Mfactor  Sfactor  Baseline Pattern
;;-------------- ---------------- ---------------- -------- -------- -------- -------- --------
J1               FLOW             ""               FLOW     1.0      1.0      ${flowRate}      

[TIMESERIES]
;;Name           Date       Time       Value     
;;-------------- ---------- ---------- ----------

[REPORT]
;;Reporting Options
SUBCATCHMENTS ALL
NODES ALL
LINKS ALL

[TAGS]

[MAP]
DIMENSIONS 0.000 0.000 10000.000 10000.000
Units      Meters

[COORDINATES]
;;Node           X-Coord            Y-Coord           
;;-------------- ------------------ ------------------
J1               1000.000           5000.000          
J2               5000.000           5000.000          
Out1             9000.000           5000.000          

[VERTICES]
;;Link           X-Coord            Y-Coord           
;;-------------- ------------------ ------------------

[LABELS]
;;X-Coord          Y-Coord            Label           
1000.000           6000.000           "${model.name}"             

[BACKDROP]
FILE       ""
DIMENSIONS 0.000 0.000 10000.000 10000.000
`;
}

const modelEntries = [];
const modelRegex = /'([a-z][a-z0-9-]*)'\s*:\s*\{([^}]+name:[^}]+)\}/g;
let match;

while ((match = modelRegex.exec(modelsMatch[1])) !== null) {
  const id = match[1];
  const block = match[0];
  
  const nameMatch = block.match(/name:\s*['"]([^'"]+)['"]/);
  const descMatch = block.match(/description:\s*['"]([^'"]+)['"]/);
  const civMatch = block.match(/civilization:\s*['"]([^'"]+)['"]/);
  const periodMatch = block.match(/period:\s*['"]([^'"]+)['"]/);
  const notesMatch = block.match(/engineeringNotes:\s*['"]([^'"]+)['"]/);
  
  const lengthMatch = block.match(/length:\s*([0-9.]+)/);
  const slopeMatch = block.match(/slope:\s*([0-9.]+)/);
  const flowMatch = block.match(/flowRate:\s*([0-9.]+)/);
  const roughMatch = block.match(/roughness:\s*([0-9.]+)/);
  const widthMatch = block.match(/channelWidth:\s*([0-9.]+)/);
  const depthMatch = block.match(/channelDepth:\s*([0-9.]+)/);
  
  if (nameMatch) {
    modelEntries.push({
      id,
      name: nameMatch ? nameMatch[1] : id,
      description: descMatch ? descMatch[1] : '',
      civilization: civMatch ? civMatch[1] : 'Unknown',
      period: periodMatch ? periodMatch[1] : 'Unknown',
      engineeringNotes: notesMatch ? notesMatch[1] : '',
      parameters: {
        length: lengthMatch ? parseFloat(lengthMatch[1]) : 1000,
        slope: slopeMatch ? parseFloat(slopeMatch[1]) : 0.001,
        flowRate: flowMatch ? parseFloat(flowMatch[1]) : 1.0,
        roughness: roughMatch ? parseFloat(roughMatch[1]) : 0.015,
        channelWidth: widthMatch ? parseFloat(widthMatch[1]) : 2,
        channelDepth: depthMatch ? parseFloat(depthMatch[1]) : 1
      }
    });
  }
}

console.log(`Found ${modelEntries.length} SWMM5 models`);

modelEntries.forEach(model => {
  const filename = `${model.id}.inp`;
  const filepath = path.join(outputDir, filename);
  const content = generateSWMM5Content(model);
  fs.writeFileSync(filepath, content);
  console.log(`  Created: ${filename}`);
});

console.log(`\nAll ${modelEntries.length} SWMM5 .inp files saved to: ${outputDir}`);
