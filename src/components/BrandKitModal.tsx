import React, { useState } from 'react';

interface BrandKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandKitModal: React.FC<BrandKitModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const brandSpecJson = {
    brand: 'RADIANZZ DIGITAL ARCHITECTURE',
    year: '2025',
    palette: {
      canvas: '#0A0A0C',
      surface: '#121316',
      surfaceElevated: '#1F1F23',
      primaryLuminescence: '#FF6B00',
      secondaryAmber: '#FD8B00',
      radiantDawn: '#FFB871',
      textHighEmphasis: '#F4F4F6',
      textMuted: '#9EA2AE',
    },
    typography: {
      display: 'Space Grotesk (Weights: 500, 600, 700)',
      body: 'Inter (Weights: 400, 500)',
      numerals: 'Space Grotesk Tabular Nums',
    },
    assets: [
      {
        vector: 'ASSET-01',
        title: 'The Conversion Diagnostic',
        aspect: '1:1',
      },
      {
        vector: 'ASSET-02',
        title: 'Frictionless Checkout',
        aspect: '1:1',
      },
      {
        vector: 'ASSET-03',
        title: 'The Paradigm Shift',
        aspect: '3:4',
      },
      {
        vector: 'REEL-01',
        title: 'Kinetic Brand & All-Services Reel',
        aspect: '9:16',
      },
    ],
  };

  const handleDownloadJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(brandSpecJson, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'RADIANZZ_Brand_Architecture_Kit.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleCopySpec = () => {
    navigator.clipboard.writeText(JSON.stringify(brandSpecJson, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-2xl rounded-xl bg-[#1b1b1f] border border-[#ff6b00]/40 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#3a322d]/50 bg-[#121316]">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#ff6b00]">style</span>
            <span className="font-space text-xs font-bold text-[#ffb693] uppercase tracking-wider">
              RADIANZZ Brand & Design System Kit
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#a0a4b0] hover:text-white rounded hover:bg-[#292a2d] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto custom-scroll">
          <div>
            <h3 className="font-space text-xl font-bold text-[#e3e2e6] uppercase">
              Obsidian & Solar Luminescence Specification
            </h3>
            <p className="text-xs text-[#a0a4b0] mt-1 leading-relaxed">
              Export the exact color tokens, typography scales, and campaign vector specifications used
              across all RADIANZZ 2025 brand deliverables.
            </p>
          </div>

          {/* Color Palettes Swatches */}
          <div>
            <span className="font-space text-xs uppercase text-[#ffb77d] font-semibold block mb-2">
              Core Color Swatches
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { name: 'Obsidian Void', hex: '#0A0A0C' },
                { name: 'Solar Orange', hex: '#FF6B00' },
                { name: 'Radiant Amber', hex: '#FD8B00' },
                { name: 'Radiant Dawn', hex: '#FFB871' },
              ].map((swatch) => (
                <div
                  key={swatch.hex}
                  className="p-2.5 rounded bg-[#121316] border border-[#3a322d] flex flex-col gap-1.5"
                >
                  <div
                    className="w-full h-8 rounded-sm border border-white/10"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <div className="text-[11px] font-space font-medium text-[#e3e2e6] truncate">
                    {swatch.name}
                  </div>
                  <div className="text-[10px] font-mono text-[#ffb693]">{swatch.hex}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography Preview */}
          <div className="p-4 rounded-lg bg-[#121316] border border-[#3a322d]">
            <span className="font-space text-xs uppercase text-[#ffb77d] font-semibold block mb-1">
              Typography Pairings
            </span>
            <div className="space-y-1 text-xs">
              <div className="font-space text-base text-[#e3e2e6] font-bold">
                Space Grotesk — Headlines, Numbers, Vector IDs
              </div>
              <div className="text-xs text-[#a0a4b0]">
                Inter — Body Copy, Case Study Prose, Long-Form Technical Annotations
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#3a322d]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={handleCopySpec}
              className="w-full sm:w-auto px-4 py-2.5 rounded-sm bg-[#292a2d] hover:bg-[#343538] text-xs font-space text-[#e3e2e6] transition-colors border border-[#3a322d] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">content_copy</span>
              <span>{copied ? 'Copied JSON to Clipboard!' : 'Copy Spec JSON'}</span>
            </button>

            <button
              onClick={handleDownloadJSON}
              className="w-full sm:w-auto px-6 py-2.5 rounded-sm bg-[#ff6b00] hover:bg-[#fd8b00] text-[#0d0e11] text-xs font-space font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Download Brand Kit JSON</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
