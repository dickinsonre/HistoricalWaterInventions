import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { 
  FileCode, Download, Copy, Check, X, FileText, Table, 
  Code, Database, ChevronDown, ChevronUp, Info
} from "lucide-react";
import { generateExport, getExportExtension, downloadExport, ExportFormat } from "../../lib/civil3dExport";
import { generateSWMM5File } from "../../lib/swmm5Export";

interface ExportFormatsProps {
  inventionId: string;
  inventionName: string;
  civilization: string;
  onClose?: () => void;
}

const exportFormats: { 
  id: ExportFormat | 'swmm5'; 
  name: string; 
  description: string; 
  icon: typeof FileCode;
  software: string;
  extension: string;
}[] = [
  {
    id: 'swmm5',
    name: 'EPA SWMM5',
    description: 'Storm Water Management Model input file',
    icon: FileCode,
    software: 'EPA SWMM5, InfoWorks ICM',
    extension: '.inp'
  },
  {
    id: 'landxml',
    name: 'LandXML',
    description: 'Pipe networks and surfaces for Civil 3D',
    icon: FileText,
    software: 'AutoCAD Civil 3D, Bentley',
    extension: '.xml'
  },
  {
    id: 'dxf',
    name: 'AutoCAD DXF',
    description: 'Drawing exchange format with geometry',
    icon: Code,
    software: 'AutoCAD, Civil 3D, QGIS',
    extension: '.dxf'
  },
  {
    id: 'csv',
    name: 'Survey Points',
    description: 'CSV point file for surveying software',
    icon: Table,
    software: 'Civil 3D, Trimble, Topcon',
    extension: '.csv'
  },
  {
    id: 'script',
    name: 'Civil 3D Script',
    description: 'AutoCAD script to auto-build pipe network',
    icon: Database,
    software: 'AutoCAD Civil 3D 2020+',
    extension: '.scr'
  },
  {
    id: 'icm',
    name: 'InfoWorks ICM',
    description: 'CSV format for ICM import wizard',
    icon: FileCode,
    software: 'InfoWorks ICM, InfoDrainage',
    extension: '_ICM.csv'
  }
];

export default function ExportFormats({ inventionId, inventionName, civilization, onClose }: ExportFormatsProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [expandedFormat, setExpandedFormat] = useState<string | null>(null);
  const [previewContent, setPreviewContent] = useState<string | null>(null);

  const handleCopy = async (formatId: ExportFormat | 'swmm5') => {
    let content: string | null;
    if (formatId === 'swmm5') {
      content = generateSWMM5File(inventionId);
    } else {
      content = generateExport(inventionId, formatId, civilization, inventionName);
    }
    
    if (content) {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(content);
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = content;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        setCopiedFormat(formatId);
        setTimeout(() => setCopiedFormat(null), 2000);
      } catch (err) {
        console.error('Copy failed:', err);
      }
    }
  };

  const handleDownload = (formatId: ExportFormat | 'swmm5') => {
    const safeName = inventionName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_').substring(0, 50);
    let content: string | null;
    let extension: string;
    
    if (formatId === 'swmm5') {
      content = generateSWMM5File(inventionId);
      extension = '.inp';
    } else {
      content = generateExport(inventionId, formatId, civilization, inventionName);
      extension = getExportExtension(formatId);
    }
    
    if (content) {
      downloadExport(content, `${safeName}${extension}`);
    }
  };

  const handlePreview = (formatId: ExportFormat | 'swmm5') => {
    if (expandedFormat === formatId) {
      setExpandedFormat(null);
      setPreviewContent(null);
      return;
    }
    
    let content: string | null;
    if (formatId === 'swmm5') {
      content = generateSWMM5File(inventionId);
    } else {
      content = generateExport(inventionId, formatId, civilization, inventionName);
    }
    
    setExpandedFormat(formatId);
    setPreviewContent(content ? content.substring(0, 1500) + (content.length > 1500 ? '\n\n... (truncated)' : '') : null);
  };

  return (
    <Card className="water-card max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col">
      <CardContent className="p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-heading text-xl text-[var(--gold)]">Export: {inventionName}</h3>
            <p className="text-sm text-[var(--parchment)]/70">Choose format for hydraulic modeling software</p>
          </div>
          {onClose && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-[var(--parchment)] hover:bg-[var(--cerulean)]/30"
            >
              <X size={20} />
            </Button>
          )}
        </div>

        <div className="bg-[var(--deep-ocean)]/60 rounded-lg p-3 mb-4 border border-[var(--aqua)]/20">
          <div className="flex items-start gap-2">
            <Info size={16} className="text-[var(--aqua)] mt-0.5 flex-shrink-0" />
            <p className="text-sm text-[var(--parchment)]/80">
              Export to professional hydraulic modeling software. All formats include node coordinates, 
              pipe dimensions, and hydraulic parameters derived from historical data.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {exportFormats.map(format => {
            const Icon = format.icon;
            const isCopied = copiedFormat === format.id;
            const isExpanded = expandedFormat === format.id;
            
            return (
              <div 
                key={format.id}
                className="bg-[var(--deep-ocean)]/40 rounded-lg border border-[var(--aqua)]/20 overflow-hidden"
              >
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--cerulean)]/20 flex items-center justify-center">
                        <Icon size={20} className="text-[var(--cerulean)]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-[var(--parchment)]">{format.name}</span>
                          <span className="text-xs px-2 py-0.5 rounded bg-[var(--gold)]/20 text-[var(--gold)]">
                            {format.extension}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--parchment)]/60">{format.description}</p>
                        <p className="text-xs text-[var(--aqua)]/70 mt-0.5">{format.software}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handlePreview(format.id)}
                        className="text-[var(--parchment)]/70 hover:bg-[var(--cerulean)]/20"
                      >
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleCopy(format.id)}
                        className="bg-[var(--deep-ocean)] hover:bg-[var(--cerulean)]/30 text-[var(--parchment)] border border-[var(--cerulean)]/50"
                      >
                        {isCopied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleDownload(format.id)}
                        className="bg-[var(--cerulean)] hover:bg-[var(--cerulean)]/80 text-white"
                      >
                        <Download size={14} />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {isExpanded && previewContent && (
                  <div className="border-t border-[var(--aqua)]/20 p-3 bg-black/30">
                    <pre className="text-xs text-[var(--parchment)]/70 overflow-x-auto whitespace-pre-wrap font-mono max-h-48 overflow-y-auto">
                      {previewContent}
                    </pre>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-4 p-3 bg-[var(--terracotta)]/10 rounded-lg border border-[var(--terracotta)]/30">
          <p className="text-xs text-[var(--parchment)]/70">
            <strong className="text-[var(--terracotta)]">Pro Tip:</strong> Use "Copy" to paste directly into software 
            to avoid antivirus false positives. For Civil 3D: Import LandXML via Toolspace → Import LandXML.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
