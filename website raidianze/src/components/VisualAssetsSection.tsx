import React from 'react';
import { CAMPAIGN_ASSETS, VisualAsset } from '../data/campaignData';

interface VisualAssetsSectionProps {
  onInspectAsset: (asset: VisualAsset) => void;
  onOpenBeforeAfter: () => void;
  selectedTagFilter?: string | null;
  onClearTagFilter?: () => void;
}

export const VisualAssetsSection: React.FC<VisualAssetsSectionProps> = ({
  onInspectAsset,
  onOpenBeforeAfter,
  selectedTagFilter,
  onClearTagFilter,
}) => {
  const filteredAssets = selectedTagFilter
    ? CAMPAIGN_ASSETS.filter((asset) =>
        asset.tags.some(
          (t) => t.toLowerCase() === selectedTagFilter.toLowerCase()
        )
      )
    : CAMPAIGN_ASSETS;

  return (
    <section id="visual-assets" className="px-5 md:px-10 lg:px-16 max-w-7xl mx-auto py-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff6b00]"></span>
            <span className="font-space text-[11px] font-semibold uppercase tracking-widest text-[#ffb693]">
              Creative Deliverables Dossier
            </span>
          </div>
          <h2 className="font-space text-3xl md:text-5xl font-medium text-[#e3e2e6] tracking-tight uppercase">
            CURATED VISUAL ASSETS (03 ITEMS)
          </h2>
        </div>
        <div className="flex flex-col md:items-end gap-2">
          <p className="text-sm md:text-base text-[#a0a4b0] max-w-md md:text-right">
            Each asset engineered as a customer-facing conversion vector, blending obsidian luxury
            with solar amber visual energy.
          </p>
          {selectedTagFilter && (
            <div className="flex items-center gap-2 bg-[#292a2d] px-3 py-1 rounded-sm border border-[#ff6b00]/40">
              <span className="text-xs text-[#a0a4b0]">Filtered by:</span>
              <span className="text-xs font-bold text-[#ffb693] font-space">{selectedTagFilter}</span>
              <button
                onClick={onClearTagFilter}
                className="text-xs text-[#ff6b00] hover:text-white ml-2 underline cursor-pointer"
              >
                Clear
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Asset 01: The Conversion Diagnostic */}
      {filteredAssets.some((a) => a.id === 'asset-01') && (
        <article className="mb-24 rounded-xl bg-[#1b1b1f] border border-[#3a322d]/40 p-6 md:p-10 frosted-glass glow-solar-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Media Container */}
            <div className="lg:col-span-6 relative group overflow-hidden rounded-lg border border-[#3a322d]/60 bg-[#0d0e11]">
              <div className="aspect-square w-full relative">
                <img
                  src={CAMPAIGN_ASSETS[0].imageUrl}
                  alt="RADIANZZ Creative Asset 01: The Conversion Diagnostic campaign visual poster"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Overlay Metadata Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-sm bg-[#0d0e11]/90 backdrop-blur-md border border-[#3a322d]/60 font-space text-[12px] font-semibold text-[#ffb693] uppercase tracking-wider">
                  1:1 Square Format • Brand Anchor
                </span>
              </div>

              {/* Interactive Inspect Hover Trigger */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                <button
                  onClick={() => onInspectAsset(CAMPAIGN_ASSETS[0])}
                  className="bg-[#ff6b00] hover:bg-[#fd8b00] text-[#0d0e11] font-space text-xs font-bold px-4 py-2.5 rounded-sm shadow-xl flex items-center gap-2 cursor-pointer transform translate-y-2 group-hover:translate-y-0 transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                  <span>Inspect Hotspots & Color Palette</span>
                </button>
              </div>
            </div>

            {/* Editorial & Strategic Breakdown */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="font-space text-xs font-bold text-[#ff6b00] tracking-widest uppercase mb-2">
                  {CAMPAIGN_ASSETS[0].vectorId}
                </div>
                <h3 className="font-space text-2xl md:text-3xl text-[#e3e2e6] font-medium leading-snug">
                  {CAMPAIGN_ASSETS[0].title} ({CAMPAIGN_ASSETS[0].subtitle})
                </h3>

                <div className="mt-6 space-y-5">
                  <div>
                    <h4 className="font-space text-xs uppercase text-[#ffb77d] tracking-wider mb-1.5 font-semibold">
                      Detailed Description
                    </h4>
                    <p className="text-sm md:text-base text-[#a0a4b0] leading-relaxed">
                      {CAMPAIGN_ASSETS[0].detailedDescription}
                    </p>
                  </div>
                  <div className="pt-2">
                    <h4 className="font-space text-xs uppercase text-[#ffb77d] tracking-wider mb-1.5 font-semibold">
                      Strategic Purpose
                    </h4>
                    <p className="text-sm md:text-base text-[#a0a4b0] leading-relaxed">
                      {CAMPAIGN_ASSETS[0].strategicPurpose}
                    </p>
                  </div>
                </div>
              </div>

              {/* Deliverable Chips */}
              <div className="mt-8 pt-6 border-t border-[#3a322d]/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-space text-xs text-[#a0a4b0] uppercase tracking-wider font-semibold">
                    Key Deliverables Included:
                  </span>
                  <button
                    onClick={() => onInspectAsset(CAMPAIGN_ASSETS[0])}
                    className="text-xs font-space text-[#ff6b00] hover:text-[#ffb693] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Technical Specs</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {CAMPAIGN_ASSETS[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-sm bg-[#292a2d] border border-[#3a322d]/50 font-space text-[10px] text-[#e3e2e6] tracking-wider uppercase font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* Asset 02: Frictionless Checkout */}
      {filteredAssets.some((a) => a.id === 'asset-02') && (
        <article className="mb-24 rounded-xl bg-[#1b1b1f] border border-[#3a322d]/40 p-6 md:p-10 frosted-glass glow-solar-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Editorial Breakdown First (Asymmetrical Stagger) */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-between">
              <div>
                <div className="font-space text-xs font-bold text-[#ff6b00] tracking-widest uppercase mb-2">
                  {CAMPAIGN_ASSETS[1].vectorId}
                </div>
                <h3 className="font-space text-2xl md:text-3xl text-[#e3e2e6] font-medium leading-snug">
                  {CAMPAIGN_ASSETS[1].title} ({CAMPAIGN_ASSETS[1].subtitle})
                </h3>

                <div className="mt-6 space-y-5">
                  <div>
                    <h4 className="font-space text-xs uppercase text-[#ffb77d] tracking-wider mb-1.5 font-semibold">
                      Detailed Description
                    </h4>
                    <p className="text-sm md:text-base text-[#a0a4b0] leading-relaxed">
                      {CAMPAIGN_ASSETS[1].detailedDescription}
                    </p>
                  </div>
                  <div className="pt-2">
                    <h4 className="font-space text-xs uppercase text-[#ffb77d] tracking-wider mb-1.5 font-semibold">
                      Strategic Purpose
                    </h4>
                    <p className="text-sm md:text-base text-[#a0a4b0] leading-relaxed">
                      {CAMPAIGN_ASSETS[1].strategicPurpose}
                    </p>
                  </div>
                </div>
              </div>

              {/* Deliverable Chips & Performance Callouts */}
              <div className="mt-8 pt-6 border-t border-[#3a322d]/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-space text-xs text-[#a0a4b0] uppercase tracking-wider font-semibold">
                    Key Deliverables Included:
                  </span>
                  <button
                    onClick={() => onInspectAsset(CAMPAIGN_ASSETS[1])}
                    className="text-xs font-space text-[#ff6b00] hover:text-[#ffb693] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect Friction Diagnostics</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {CAMPAIGN_ASSETS[1].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-sm bg-[#292a2d] border border-[#3a322d]/50 font-space text-[10px] text-[#e3e2e6] tracking-wider uppercase font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Media Container */}
            <div className="lg:col-span-6 order-1 lg:order-2 relative group overflow-hidden rounded-lg border border-[#3a322d]/60 bg-[#0d0e11]">
              <div className="aspect-square w-full relative">
                <img
                  src={CAMPAIGN_ASSETS[1].imageUrl}
                  alt="RADIANZZ Creative Asset 02: Frictionless Checkout campaign visual poster"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Overlay Metadata Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-sm bg-[#0d0e11]/90 backdrop-blur-md border border-[#3a322d]/60 font-space text-[12px] font-semibold text-[#ffb693] uppercase tracking-wider">
                  1:1 Square Format • Performance CRO
                </span>
              </div>

              {/* Interactive Inspect Hover Trigger */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                <button
                  onClick={() => onInspectAsset(CAMPAIGN_ASSETS[1])}
                  className="bg-[#ff6b00] hover:bg-[#fd8b00] text-[#0d0e11] font-space text-xs font-bold px-4 py-2.5 rounded-sm shadow-xl flex items-center gap-2 cursor-pointer transform translate-y-2 group-hover:translate-y-0 transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                  <span>Inspect Hotspots & Color Palette</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* Asset 03: The Paradigm Shift (3:4 Ratio) */}
      {filteredAssets.some((a) => a.id === 'asset-03') && (
        <article className="rounded-xl bg-[#1b1b1f] border border-[#3a322d]/40 p-6 md:p-10 frosted-glass glow-solar-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Media Container (Portrait 3:4) */}
            <div className="lg:col-span-5 relative group overflow-hidden rounded-lg border border-[#3a322d]/60 bg-[#0d0e11] flex justify-center">
              <div className="w-full max-w-[420px] aspect-[3/4] relative">
                <img
                  src={CAMPAIGN_ASSETS[2].imageUrl}
                  alt="RADIANZZ Creative Asset 03: The Paradigm Shift editorial portrait campaign poster"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Overlay Metadata Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-sm bg-[#0d0e11]/90 backdrop-blur-md border border-[#3a322d]/60 font-space text-[12px] font-semibold text-[#ffb693] uppercase tracking-wider">
                  3:4 Editorial Portrait • Light Mode Split
                </span>
              </div>

              {/* Interactive Inspect Hover Trigger */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2 items-center justify-center p-4">
                <button
                  onClick={onOpenBeforeAfter}
                  className="bg-[#ff6b00] hover:bg-[#fd8b00] text-[#0d0e11] font-space text-xs font-bold px-4 py-2.5 rounded-sm shadow-xl flex items-center gap-2 cursor-pointer transform translate-y-2 group-hover:translate-y-0 transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">compare</span>
                  <span>Interactive Before / After Split Slider</span>
                </button>
                <button
                  onClick={() => onInspectAsset(CAMPAIGN_ASSETS[2])}
                  className="bg-[#292a2d] hover:bg-[#343538] text-white font-space text-xs font-medium px-4 py-2 rounded-sm border border-[#3a322d] flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">info</span>
                  <span>Asset Technical Specs</span>
                </button>
              </div>
            </div>

            {/* Editorial & Strategic Breakdown */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="font-space text-xs font-bold text-[#ff6b00] tracking-widest uppercase mb-2">
                  {CAMPAIGN_ASSETS[2].vectorId}
                </div>
                <h3 className="font-space text-2xl md:text-3xl text-[#e3e2e6] font-medium leading-snug">
                  {CAMPAIGN_ASSETS[2].title} ({CAMPAIGN_ASSETS[2].subtitle})
                </h3>

                <div className="mt-6 space-y-5">
                  <div>
                    <h4 className="font-space text-xs uppercase text-[#ffb77d] tracking-wider mb-1.5 font-semibold">
                      Detailed Description
                    </h4>
                    <p className="text-sm md:text-base text-[#a0a4b0] leading-relaxed">
                      {CAMPAIGN_ASSETS[2].detailedDescription}
                    </p>
                  </div>
                  <div className="pt-2">
                    <h4 className="font-space text-xs uppercase text-[#ffb77d] tracking-wider mb-1.5 font-semibold">
                      Strategic Purpose
                    </h4>
                    <p className="text-sm md:text-base text-[#a0a4b0] leading-relaxed">
                      {CAMPAIGN_ASSETS[2].strategicPurpose}
                    </p>
                  </div>
                </div>

                {/* Live Before/After Tool Quick Callout */}
                <div className="mt-6 p-4 rounded-lg bg-[#292a2d]/40 border border-[#3a322d] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#ff6b00]">compare_arrows</span>
                    <span className="text-xs text-[#e3e2e6]">
                      Experience the legacy wireframe vs radiant storefront transformation.
                    </span>
                  </div>
                  <button
                    onClick={onOpenBeforeAfter}
                    className="text-xs font-space font-bold text-[#ff6b00] hover:text-[#ffb693] underline cursor-pointer shrink-0"
                  >
                    Open Slider Tool
                  </button>
                </div>
              </div>

              {/* Deliverable Chips */}
              <div className="mt-8 pt-6 border-t border-[#3a322d]/30">
                <span className="block font-space text-xs text-[#a0a4b0] uppercase tracking-wider mb-3 font-semibold">
                  Key Deliverables Included:
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-sm bg-[#292a2d] border border-[#3a322d]/50 font-space text-[10px] text-[#e3e2e6] font-medium tracking-wider">
                    MODERN & FAST ARCHITECTURE
                  </span>
                  <span className="px-2.5 py-1 rounded-sm bg-[#292a2d] border border-[#3a322d]/50 font-space text-[10px] text-[#e3e2e6] font-medium tracking-wider">
                    MOBILE FIRST OPTIMIZATION
                  </span>
                  <span className="px-2.5 py-1 rounded-sm bg-[#292a2d] border border-[#ff6b00]/50 font-space text-[10px] text-[#ff6b00] font-bold tracking-wider">
                    +340% CONVERSIONS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      )}
    </section>
  );
};
