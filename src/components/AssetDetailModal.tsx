import React, { useState } from 'react';
import { VisualAsset } from '../data/campaignData';

interface AssetDetailModalProps {
  asset: VisualAsset | null;
  onClose: () => void;
}

export const AssetDetailModal: React.FC<AssetDetailModalProps> = ({ asset, onClose }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  if (!asset) return null;

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-5xl rounded-xl bg-[#1b1b1f] border border-[#ff6b00]/40 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#3a322d]/50 bg-[#121316]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00]" />
            <span className="font-space text-xs font-bold text-[#ffb693] tracking-wider uppercase">
              {asset.vectorId}
            </span>
            <span className="text-xs text-[#a0a4b0]">•</span>
            <span className="font-space text-xs text-[#e3e2e6] font-semibold">{asset.resolution}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#a0a4b0] hover:text-white rounded hover:bg-[#292a2d] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Modal Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[80vh] overflow-y-auto custom-scroll">
          {/* Visual Canvas Column */}
          <div className="lg:col-span-7 bg-[#0d0e11] p-6 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-[#3a322d]/40 relative">
            <div
              className={`relative overflow-hidden rounded-lg transition-transform duration-300 max-w-full ${
                isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
              title={isZoomed ? 'Click to zoom out' : 'Click to zoom in'}
            >
              <img
                src={asset.imageUrl}
                alt={asset.title}
                className="max-h-[500px] w-auto object-contain rounded"
                referrerPolicy="no-referrer"
              />

              {/* Hotspot Markers */}
              {!isZoomed &&
                asset.hotspots?.map((spot, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedHotspot(selectedHotspot === idx ? null : idx);
                    }}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center font-space text-[10px] font-bold transition-all cursor-pointer shadow-lg ${
                      selectedHotspot === idx
                        ? 'bg-white text-[#0d0e11] scale-125 ring-4 ring-[#ff6b00]'
                        : 'bg-[#ff6b00] text-[#0d0e11] hover:scale-110'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
            </div>

            {/* Hotspot Active Tooltip */}
            {selectedHotspot !== null && asset.hotspots && (
              <div className="mt-4 p-3 rounded bg-[#292a2d] border border-[#ff6b00]/60 text-left w-full max-w-md animate-fadeIn">
                <div className="flex items-center justify-between text-xs font-bold text-[#ffb693] font-space mb-1">
                  <span>
                    Hotspot {selectedHotspot + 1}: {asset.hotspots[selectedHotspot].title}
                  </span>
                  <button
                    onClick={() => setSelectedHotspot(null)}
                    className="text-[#a0a4b0] hover:text-white"
                  >
                    ×
                  </button>
                </div>
                <p className="text-xs text-[#e3e2e6]">
                  {asset.hotspots[selectedHotspot].note}
                </p>
              </div>
            )}

            <div className="mt-4 flex items-center justify-between w-full text-xs text-[#a0a4b0] font-space">
              <span>Click image to {isZoomed ? 'zoom out' : 'zoom in'}</span>
              <a
                href={asset.imageUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#ff6b00] hover:underline flex items-center gap-1"
              >
                <span>View Full-Res Asset</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Technical Specifications Column */}
          <div className="lg:col-span-5 p-6 space-y-6">
            <div>
              <h3 className="font-space text-xl font-bold text-[#e3e2e6] mb-1">
                {asset.title}
              </h3>
              <p className="font-space text-xs text-[#ffb693] font-semibold">{asset.subtitle}</p>
              <p className="mt-3 text-xs text-[#a0a4b0] leading-relaxed">
                {asset.detailedDescription}
              </p>
            </div>

            {/* Color Palette Tokens */}
            <div>
              <span className="font-space text-xs font-bold text-[#e3e2e6] uppercase tracking-wider block mb-2">
                Engineered Color Palette
              </span>
              <div className="grid grid-cols-2 gap-2">
                {asset.palette.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => copyHex(color.hex)}
                    className="flex items-center gap-2 p-2 rounded bg-[#121316] border border-[#3a322d]/60 hover:border-[#ff6b00]/60 transition-colors text-left cursor-pointer group"
                    title="Click to copy Hex code"
                  >
                    <span
                      className="w-5 h-5 rounded-sm border border-white/10 shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-medium text-[#e3e2e6] truncate">
                        {color.name}
                      </div>
                      <div className="text-[10px] font-mono text-[#a0a4b0] group-hover:text-[#ff6b00]">
                        {copiedHex === color.hex ? 'Copied!' : color.hex}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Render & Creative Directives */}
            <div className="space-y-3 pt-4 border-t border-[#3a322d]/40">
              <span className="font-space text-xs font-bold text-[#e3e2e6] uppercase tracking-wider block">
                Production Directives
              </span>

              <div className="text-xs space-y-2 text-[#a0a4b0]">
                <div>
                  <span className="text-[#ffb77d] font-space font-semibold">Lighting: </span>
                  {asset.specs.lighting}
                </div>
                <div>
                  <span className="text-[#ffb77d] font-space font-semibold">Rendering: </span>
                  {asset.specs.rendering}
                </div>
                <div>
                  <span className="text-[#ffb77d] font-space font-semibold">Typography: </span>
                  {asset.specs.typography}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="pt-4 border-t border-[#3a322d]/40">
              <div className="flex flex-wrap gap-1.5">
                {asset.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-sm bg-[#292a2d] text-[9px] font-space text-[#e3e2e6] uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
