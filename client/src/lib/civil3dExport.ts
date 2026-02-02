import { SWMM5_MODELS, inventionToSwmmModel } from './swmm5Export';

interface SWMMNode {
  id: string;
  x: number;
  y: number;
  invertElev: number;
  maxDepth: number;
}

interface SWMMConduit {
  id: string;
  fromNode: string;
  toNode: string;
  length: number;
  roughness: number;
  diameter: number;
}

interface ParsedModel {
  title: string;
  nodes: SWMMNode[];
  conduits: SWMMConduit[];
}

function generateModelData(inventionId: string): ParsedModel {
  const mappedKey = inventionToSwmmModel[inventionId] || inventionId;
  const model = SWMM5_MODELS[mappedKey];
  
  const title = model?.name || inventionId.replace(/-/g, ' ');
  const params = model?.parameters || {
    length: 1000,
    slope: 0.002,
    flowRate: 0.5,
    channelWidth: 1.5,
    channelDepth: 1.0,
    roughness: 0.025
  };

  const length = params.length || 1000;
  const slope = params.slope || 0.002;
  const channelWidth = params.channelWidth || 1.5;
  const channelDepth = params.channelDepth || 2.0;
  const roughness = params.roughness || 0.013;
  
  const nodeCount = Math.min(Math.max(3, Math.ceil(length / 200)), 10);
  const nodes: SWMMNode[] = [];
  const conduits: SWMMConduit[] = [];

  for (let i = 0; i < nodeCount; i++) {
    const progress = i / (nodeCount - 1);
    nodes.push({
      id: i === 0 ? 'Source' : i === nodeCount - 1 ? 'Outlet' : `Junction_${i}`,
      x: 1000 + progress * length,
      y: 5000 + Math.sin(progress * Math.PI) * 100,
      invertElev: 100 - progress * length * slope,
      maxDepth: channelDepth
    });
  }

  for (let i = 0; i < nodeCount - 1; i++) {
    conduits.push({
      id: `Conduit_${i + 1}`,
      fromNode: nodes[i].id,
      toNode: nodes[i + 1].id,
      length: length / (nodeCount - 1),
      roughness: roughness,
      diameter: channelWidth
    });
  }

  return { title, nodes, conduits };
}

export function generateLandXML(inventionId: string, civilization: string): string {
  const model = generateModelData(inventionId);
  const timestamp = new Date().toISOString().split('T')[0];
  
  const structuresXml = model.nodes.map(node => `
        <Struct name="${node.id}">
          <Center>${node.y.toFixed(3)} ${node.x.toFixed(3)}</Center>
          <StructGeom>
            <CircStruct diameter="${node.maxDepth.toFixed(2)}"/>
          </StructGeom>
          <Invert elev="${node.invertElev.toFixed(2)}">
            <Feature name="MaxDepth" code="${node.maxDepth.toFixed(2)}"/>
          </Invert>
        </Struct>`).join('\n');

  const pipesXml = model.conduits.map(conduit => `
        <Pipe name="${conduit.id}" 
              refStart="${conduit.fromNode}" 
              refEnd="${conduit.toNode}">
          <CircPipe diameter="${conduit.diameter.toFixed(2)}" length="${conduit.length.toFixed(1)}"/>
          <Feature name="Roughness" code="${conduit.roughness.toFixed(4)}"/>
        </Pipe>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<LandXML xmlns="http://www.landxml.org/schema/LandXML-1.2" 
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://www.landxml.org/schema/LandXML-1.2 http://www.landxml.org/schema/LandXML-1.2/LandXML-1.2.xsd"
         version="1.2" 
         date="${timestamp}"
         time="12:00:00">
         
  <Units>
    <Metric linearUnit="meter" areaUnit="squareMeter" volumeUnit="cubicMeter"/>
  </Units>
  
  <Application name="Historical Mystery Water Innovations" 
               manufacturer="BobSWMM" 
               version="1.0">
    <Author createdBy="Robert Dickinson - 50+ Years Water Engineering"/>
  </Application>
  
  <Project name="${model.title}">
    <Feature name="Civilization" code="${civilization}"/>
    <Feature name="SourceFormat" code="SWMM5_INP"/>
    <Feature name="ExportDate" code="${timestamp}"/>
    <Feature name="Application" code="Historical Mystery Water Innovations Explorer"/>
  </Project>
  
  <PipeNetworks>
    <PipeNetwork name="${model.title.replace(/\s+/g, '_')}" pipeNetType="storm">
      <Structs>
${structuresXml}
      </Structs>
      
      <Pipes>
${pipesXml}
      </Pipes>
    </PipeNetwork>
  </PipeNetworks>
  
  <Surfaces>
    <Surface name="${model.title}_Terrain">
      <Definition surfType="TIN">
        <Pnts>
${model.nodes.map((n, i) => `          <P id="${i + 1}">${n.y.toFixed(3)} ${n.x.toFixed(3)} ${(n.invertElev + n.maxDepth).toFixed(2)}</P>`).join('\n')}
        </Pnts>
      </Definition>
    </Surface>
  </Surfaces>
</LandXML>`;
}

export function generateDXF(inventionId: string): string {
  const model = generateModelData(inventionId);
  
  let entities = '';
  
  model.nodes.forEach(node => {
    entities += `  0
CIRCLE
  8
STRUCTURES
 10
${node.x.toFixed(4)}
 20
${node.y.toFixed(4)}
 30
${node.invertElev.toFixed(4)}
 40
${(node.maxDepth / 2).toFixed(4)}
`;
    
    entities += `  0
TEXT
  8
LABELS
 10
${(node.x + 5).toFixed(4)}
 20
${(node.y + 5).toFixed(4)}
 30
0.0
 40
10.0
  1
${node.id} (El: ${node.invertElev.toFixed(1)}m)
`;
  });

  model.conduits.forEach(conduit => {
    const fromNode = model.nodes.find(n => n.id === conduit.fromNode);
    const toNode = model.nodes.find(n => n.id === conduit.toNode);
    if (fromNode && toNode) {
      entities += `  0
LINE
  8
PIPES
 10
${fromNode.x.toFixed(4)}
 20
${fromNode.y.toFixed(4)}
 30
${fromNode.invertElev.toFixed(4)}
 11
${toNode.x.toFixed(4)}
 21
${toNode.y.toFixed(4)}
 31
${toNode.invertElev.toFixed(4)}
`;
    }
  });

  return `  0
SECTION
  2
HEADER
  9
$ACADVER
  1
AC1015
  9
$INSBASE
 10
0.0
 20
0.0
 30
0.0
  0
ENDSEC
  0
SECTION
  2
TABLES
  0
TABLE
  2
LAYER
 70
3
  0
LAYER
  2
STRUCTURES
 70
0
 62
5
  6
CONTINUOUS
  0
LAYER
  2
PIPES
 70
0
 62
3
  6
CONTINUOUS
  0
LAYER
  2
LABELS
 70
0
 62
7
  6
CONTINUOUS
  0
ENDTAB
  0
ENDSEC
  0
SECTION
  2
ENTITIES
${entities}  0
ENDSEC
  0
EOF
`;
}

export function generateCSVPoints(inventionId: string): string {
  const model = generateModelData(inventionId);
  
  let csv = 'Point_ID,Northing,Easting,Elevation,Description,Structure_Type,Max_Depth\n';
  
  model.nodes.forEach((node, index) => {
    const structType = node.id === 'Source' ? 'INLET' : 
                       node.id === 'Outlet' ? 'OUTLET' : 'JUNCTION';
    csv += `${index + 1},${node.y.toFixed(3)},${node.x.toFixed(3)},${node.invertElev.toFixed(3)},${node.id},${structType},${node.maxDepth.toFixed(2)}\n`;
  });
  
  return csv;
}

export function generateCivil3DScript(inventionId: string, inventionName: string): string {
  const model = generateModelData(inventionId);
  const safeName = inventionName.replace(/[^a-zA-Z0-9]/g, '_');
  
  let script = `; Auto-generated Civil 3D Script for ${model.title}
; Generated from Historical Mystery Water Innovations App
; Compatible with AutoCAD Civil 3D 2020+
; Run via: SCRIPT command in Civil 3D

; ============================================
; CREATE PIPE NETWORK
; ============================================
_AeccCreatePipeNetwork
${safeName}_Network
_Enter
_Enter

; ============================================
; ADD STRUCTURES (NODES)
; ============================================
`;

  model.nodes.forEach(node => {
    script += `
; Add structure: ${node.id}
_AeccAddStructure
${node.id}
${node.x.toFixed(2)},${node.y.toFixed(2)}
${node.invertElev.toFixed(2)}
${node.maxDepth.toFixed(2)}
_Enter
`;
  });

  script += `
; ============================================
; ADD PIPES (CONDUITS)
; ============================================
`;

  model.conduits.forEach(conduit => {
    script += `
; Add pipe: ${conduit.id}
_AeccAddPipe
${conduit.id}
${conduit.fromNode}
${conduit.toNode}
${conduit.diameter.toFixed(2)}
${conduit.length.toFixed(2)}
_Enter
`;
  });

  script += `
; ============================================
; ZOOM TO EXTENTS
; ============================================
_ZOOM
_Extents

; ============================================
; SAVE DRAWING
; ============================================
_QSAVE

; Script completed successfully
; Model: ${model.title}
; Nodes: ${model.nodes.length}
; Pipes: ${model.conduits.length}
`;

  return script;
}

export function generateICMCSV(inventionId: string): string {
  const model = generateModelData(inventionId);
  
  let nodesCSV = 'ID,X,Y,Ground_Level,Chamber_Roof,Chamber_Floor,Shaft_Type\n';
  model.nodes.forEach(node => {
    const groundLevel = node.invertElev + node.maxDepth + 1;
    nodesCSV += `${node.id},${node.x.toFixed(3)},${node.y.toFixed(3)},${groundLevel.toFixed(3)},${(node.invertElev + node.maxDepth).toFixed(3)},${node.invertElev.toFixed(3)},CIRCULAR\n`;
  });
  
  nodesCSV += '\n--- CONDUITS ---\n';
  nodesCSV += 'ID,US_Node,DS_Node,Shape,Width,Height,Length,Roughness\n';
  model.conduits.forEach(conduit => {
    nodesCSV += `${conduit.id},${conduit.fromNode},${conduit.toNode},CIRCULAR,${conduit.diameter.toFixed(3)},${conduit.diameter.toFixed(3)},${conduit.length.toFixed(2)},${conduit.roughness.toFixed(4)}\n`;
  });
  
  return nodesCSV;
}

export function downloadExport(content: string, filename: string): void {
  const dataUri = 'data:text/plain;charset=utf-8,' + encodeURIComponent(content);
  const link = document.createElement('a');
  link.href = dataUri;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export type ExportFormat = 'landxml' | 'dxf' | 'csv' | 'script' | 'icm';

export function generateExport(inventionId: string, format: ExportFormat, civilization: string = 'Ancient', inventionName: string = ''): string {
  switch (format) {
    case 'landxml':
      return generateLandXML(inventionId, civilization);
    case 'dxf':
      return generateDXF(inventionId);
    case 'csv':
      return generateCSVPoints(inventionId);
    case 'script':
      return generateCivil3DScript(inventionId, inventionName || inventionId);
    case 'icm':
      return generateICMCSV(inventionId);
    default:
      return '';
  }
}

export function getExportExtension(format: ExportFormat): string {
  switch (format) {
    case 'landxml':
      return '.xml';
    case 'dxf':
      return '.dxf';
    case 'csv':
      return '.csv';
    case 'script':
      return '.scr';
    case 'icm':
      return '_ICM.csv';
    default:
      return '.txt';
  }
}
