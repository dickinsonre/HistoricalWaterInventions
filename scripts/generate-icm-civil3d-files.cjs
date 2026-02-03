const fs = require('fs');
const path = require('path');

const icmDir = path.join(__dirname, '..', 'icm-models');
const civil3dDir = path.join(__dirname, '..', 'civil3d-models');

[icmDir, civil3dDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const swmm5ExportPath = path.join(__dirname, '..', 'client', 'src', 'lib', 'swmm5Export.ts');
const content = fs.readFileSync(swmm5ExportPath, 'utf8');

const modelsMatch = content.match(/export const SWMM5_MODELS[\s\S]*?= \{([\s\S]*?)\n\};/);
if (!modelsMatch) {
  console.error('Could not find SWMM5_MODELS in file');
  process.exit(1);
}

function generateICMContent(model) {
  const params = model.parameters || {};
  const length = params.length || 1000;
  const slope = params.slope || 0.001;
  const flowRate = params.flowRate || 1.0;
  const roughness = params.roughness || 0.015;
  const channelWidth = params.channelWidth || 2;
  const channelDepth = params.channelDepth || 1;

  return `<?xml version="1.0" encoding="UTF-8"?>
<ICMExchange version="1.0">
  <Model>
    <Name>${escapeXml(model.name)}</Name>
    <Description>${escapeXml(model.description)}</Description>
    <Civilization>${escapeXml(model.civilization)}</Civilization>
    <Period>${escapeXml(model.period)}</Period>
    <EngineeringNotes>${escapeXml(model.engineeringNotes || '')}</EngineeringNotes>
    <CreatedBy>Robert Dickinson - Historical Water Inventions</CreatedBy>
    <Units>Metric</Units>
  </Model>
  
  <Nodes>
    <Node id="J1" type="Manhole">
      <X>1000.0</X>
      <Y>5000.0</Y>
      <GroundLevel>12.0</GroundLevel>
      <ChamberFloor>10.0</ChamberFloor>
      <ChamberArea>3.14</ChamberArea>
    </Node>
    <Node id="J2" type="Manhole">
      <X>5000.0</X>
      <Y>5000.0</Y>
      <GroundLevel>${12 - (length * slope / 1000)}</GroundLevel>
      <ChamberFloor>${10 - (length * slope / 1000)}</ChamberFloor>
      <ChamberArea>3.14</ChamberArea>
    </Node>
    <Node id="Out1" type="Outfall">
      <X>9000.0</X>
      <Y>5000.0</Y>
      <GroundLevel>${12 - (length * slope / 500)}</GroundLevel>
      <InvertLevel>${10 - (length * slope / 500)}</InvertLevel>
      <OutfallType>Free</OutfallType>
    </Node>
  </Nodes>
  
  <Links>
    <Link id="C1" type="Conduit">
      <USNode>J1</USNode>
      <DSNode>J2</DSNode>
      <Length>${length}</Length>
      <Shape>Rectangular</Shape>
      <Width>${channelWidth}</Width>
      <Height>${channelDepth}</Height>
      <Roughness type="Manning">${roughness}</Roughness>
      <USInvert>10.0</USInvert>
      <DSInvert>${10 - (length * slope / 1000)}</DSInvert>
    </Link>
    <Link id="C2" type="Conduit">
      <USNode>J2</USNode>
      <DSNode>Out1</DSNode>
      <Length>${length / 2}</Length>
      <Shape>Rectangular</Shape>
      <Width>${channelWidth}</Width>
      <Height>${channelDepth}</Height>
      <Roughness type="Manning">${roughness}</Roughness>
      <USInvert>${10 - (length * slope / 1000)}</USInvert>
      <DSInvert>${10 - (length * slope / 500)}</DSInvert>
    </Link>
  </Links>
  
  <Inflows>
    <Inflow node="J1">
      <Type>Constant</Type>
      <FlowRate unit="m3/s">${flowRate}</FlowRate>
    </Inflow>
  </Inflows>
  
  <SimulationParameters>
    <StartDate>2024-01-01</StartDate>
    <EndDate>2024-01-02</EndDate>
    <TimeStep>30</TimeStep>
    <RoutingMethod>DynamicWave</RoutingMethod>
  </SimulationParameters>
</ICMExchange>
`;
}

function generateCivil3DContent(model) {
  const params = model.parameters || {};
  const length = params.length || 1000;
  const slope = params.slope || 0.001;
  const flowRate = params.flowRate || 1.0;
  const roughness = params.roughness || 0.015;
  const channelWidth = params.channelWidth || 2;
  const channelDepth = params.channelDepth || 1;

  return `<?xml version="1.0" encoding="UTF-8"?>
<StormAndSanitaryAnalysis version="2024">
  <ProjectInfo>
    <Name>${escapeXml(model.name)}</Name>
    <Description>${escapeXml(model.description)}</Description>
    <Client>Historical Water Inventions Project</Client>
    <Engineer>Robert Dickinson</Engineer>
    <Civilization>${escapeXml(model.civilization)}</Civilization>
    <HistoricalPeriod>${escapeXml(model.period)}</HistoricalPeriod>
    <Notes>${escapeXml(model.engineeringNotes || '')}</Notes>
    <Units>Metric</Units>
    <FlowUnits>CMS</FlowUnits>
  </ProjectInfo>
  
  <AnalysisOptions>
    <FlowRouting>DynamicWave</FlowRouting>
    <InfiltrationMethod>Horton</InfiltrationMethod>
    <LinkOffsetConvention>Depth</LinkOffsetConvention>
    <MinSlope>0.0001</MinSlope>
  </AnalysisOptions>
  
  <TimeSettings>
    <StartDate>01/01/2024</StartDate>
    <StartTime>00:00:00</StartTime>
    <EndDate>01/02/2024</EndDate>
    <EndTime>00:00:00</EndTime>
    <ReportingStep>00:05:00</ReportingStep>
    <RoutingStep>00:00:30</RoutingStep>
  </TimeSettings>
  
  <Structures>
    <Structure id="J1" type="Junction">
      <Easting>1000.000</Easting>
      <Northing>5000.000</Northing>
      <RimElevation>12.000</RimElevation>
      <InvertElevation>10.000</InvertElevation>
      <MaxDepth>${channelDepth * 2}</MaxDepth>
      <InitialDepth>0.000</InitialDepth>
    </Structure>
    <Structure id="J2" type="Junction">
      <Easting>5000.000</Easting>
      <Northing>5000.000</Northing>
      <RimElevation>${12 - (length * slope / 1000)}</RimElevation>
      <InvertElevation>${10 - (length * slope / 1000)}</InvertElevation>
      <MaxDepth>${channelDepth * 2}</MaxDepth>
      <InitialDepth>0.000</InitialDepth>
    </Structure>
    <Structure id="Out1" type="Outfall">
      <Easting>9000.000</Easting>
      <Northing>5000.000</Northing>
      <InvertElevation>${10 - (length * slope / 500)}</InvertElevation>
      <OutfallType>FREE</OutfallType>
      <Gated>NO</Gated>
    </Structure>
  </Structures>
  
  <Pipes>
    <Pipe id="C1">
      <FromStructure>J1</FromStructure>
      <ToStructure>J2</ToStructure>
      <Length>${length}</Length>
      <Shape>RECT_OPEN</Shape>
      <Rise>${channelDepth}</Rise>
      <Span>${channelWidth}</Span>
      <ManningsN>${roughness}</ManningsN>
      <UpstreamInvert>10.000</UpstreamInvert>
      <DownstreamInvert>${10 - (length * slope / 1000)}</DownstreamInvert>
      <Material>Stone/Masonry</Material>
    </Pipe>
    <Pipe id="C2">
      <FromStructure>J2</FromStructure>
      <ToStructure>Out1</ToStructure>
      <Length>${length / 2}</Length>
      <Shape>RECT_OPEN</Shape>
      <Rise>${channelDepth}</Rise>
      <Span>${channelWidth}</Span>
      <ManningsN>${roughness}</ManningsN>
      <UpstreamInvert>${10 - (length * slope / 1000)}</UpstreamInvert>
      <DownstreamInvert>${10 - (length * slope / 500)}</DownstreamInvert>
      <Material>Stone/Masonry</Material>
    </Pipe>
  </Pipes>
  
  <Inflows>
    <DirectInflow structure="J1">
      <Constituent>FLOW</Constituent>
      <BaselineFlow>${flowRate}</BaselineFlow>
      <ScaleFactor>1.0</ScaleFactor>
    </DirectInflow>
  </Inflows>
</StormAndSanitaryAnalysis>
`;
}

function escapeXml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
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

console.log(`Found ${modelEntries.length} models\n`);

console.log('Generating ICM Exchange files...');
modelEntries.forEach(model => {
  const filename = `${model.id}.icmx`;
  const filepath = path.join(icmDir, filename);
  const content = generateICMContent(model);
  fs.writeFileSync(filepath, content);
});
console.log(`  Created ${modelEntries.length} ICM files in icm-models/\n`);

console.log('Generating Civil 3D SSA files...');
modelEntries.forEach(model => {
  const filename = `${model.id}.xml`;
  const filepath = path.join(civil3dDir, filename);
  const content = generateCivil3DContent(model);
  fs.writeFileSync(filepath, content);
});
console.log(`  Created ${modelEntries.length} Civil 3D files in civil3d-models/\n`);

console.log(`Total: ${modelEntries.length * 2} files generated`);
console.log(`  - ${modelEntries.length} ICM Exchange files (.icmx)`);
console.log(`  - ${modelEntries.length} Civil 3D SSA files (.xml)`);
