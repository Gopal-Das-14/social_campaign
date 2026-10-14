import React from 'react';

interface HeroSectionProps {
  onOpenAudit: () => void;
  onExploreDeliverables: () => void;
  onSelectTag?: (tag: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAudit,
  onExploreDeliverables,
  onSelectTag,
}) => {
  const disciplines = [
    { label: 'DIGITAL MARKETING', tag: 'DIGITAL MARKETING' },
    { label: 'UI/UX ARCHITECTURE', tag: 'UI/UX DESIGN' },
    { label: 'AI INTEGRATION', tag: 'AI SOLUTIONS' },
    { label: 'CRO ENGINEERING', tag: 'CONVERSION RATE CRO' },
  ];

  return (
    <section
      id="overview"
      className="relative px-5 md:px-10 lg:px-16 max-w-7xl mx-auto pt-10 pb-20 border-b border-[#3a322d]/30"
    >
      {/* Ambient Solar Background Halo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#ff6b00]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative z-10 flex flex-col items-start max-w-5xl">
        {/* Category Pill & Review Indicator */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="px-2.5 py-1 rounded-sm bg-[#292a2d] border border-[#3a322d] font-space text-[11px] font-semibold text-[#ffb693] tracking-widest uppercase">
            Creative Showcase
          </span>
          <span className="text-[#a0a4b0]">•</span>
          <span className="font-space text-[12px] text-[#a0a4b0] font-medium tracking-wider">
            ASSIGNMENT REVIEW DOSSIER [CAMPAIGN 2025]
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-space text-3xl sm:text-5xl md:text-6xl font-medium text-[#e3e2e6] tracking-tight uppercase max-w-4xl leading-[1.12]">
          DIGITAL ARCHITECTURE THAT{' '}
          <span className="text-[#ff6b00] underline decoration-[#ff6b00]/40 underline-offset-8">
            RADIATES REVENUE.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base md:text-lg text-[#a0a4b0] max-w-3xl leading-relaxed">
          A comprehensive creative assignment showcase presenting brand transformation systems,
          high-converting digital storefronts, and performance marketing collateral for RADIANZZ.
        </p>

        {/* Strategic Discipline Chips */}
        <div className="mt-8 flex flex-wrap gap-2.5 items-center">
          {disciplines.map((item) => (
            <button
              key={item.label}
              onClick={() => onSelectTag?.(item.tag)}
              className="px-3 py-1.5 rounded-sm bg-[#292a2d]/70 border border-[#3a322d]/70 font-space text-[11px] font-semibold text-[#a0a4b0] hover:text-[#ffb693] hover:border-[#ff6b00]/60 hover:bg-[#292a2d] transition-all cursor-pointer tracking-wider"
              title={`Filter deliverables by ${item.label}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Quick Statistics Counter Strip */}
        <div className="mt-14 w-full grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-[#3a322d]/30">
          <div className="p-6 rounded-lg bg-[#1b1b1f] border border-[#3a322d]/40 frosted-glass glow-solar-hover">
            <div className="font-space text-3xl md:text-4xl font-bold text-[#ff6b00] tracking-tight">
              +340%
            </div>
            <div className="font-space text-[11px] uppercase text-[#a0a4b0] mt-1 tracking-widest font-semibold">
              Avg CR Surge
            </div>
            <p className="text-xs text-[#a0a4b0]/80 mt-2 leading-relaxed">
              Conversion throughput uplift across DTC and enterprise ecommerce migrations.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#1b1b1f] border border-[#3a322d]/40 frosted-glass glow-solar-hover">
            <div className="font-space text-3xl md:text-4xl font-bold text-[#e3e2e6] tracking-tight">
              0.6s
            </div>
            <div className="font-space text-[11px] uppercase text-[#a0a4b0] mt-1 tracking-widest font-semibold">
              Sub-second Speed
            </div>
            <p className="text-xs text-[#a0a4b0]/80 mt-2 leading-relaxed">
              Headless edge-rendered runtime with pristine Google Lighthouse core web vitals.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#1b1b1f] border border-[#3a322d]/40 frosted-glass glow-solar-hover">
            <div className="font-space text-3xl md:text-4xl font-bold text-[#ffb77d] tracking-tight">
              $42M+
            </div>
            <div className="font-space text-[11px] uppercase text-[#a0a4b0] mt-1 tracking-widest font-semibold">
              Revenue Scaled
            </div>
            <p className="text-xs text-[#a0a4b0]/80 mt-2 leading-relaxed">
              Cumulative transacted capital generated through engineered conversion architectures.
            </p>
          </div>
        </div>

        {/* Quick action buttons row */}
        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <button
            onClick={onExploreDeliverables}
            className="inline-flex items-center gap-2 bg-[#ff6b00] hover:bg-[#fd8b00] text-[#0d0e11] font-space text-xs font-bold px-5 py-3 rounded-sm transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>Explore 03 Curated Deliverables</span>
            <span className="material-symbols-outlined text-[18px]">south</span>
          </button>
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 border border-[#3a322d] hover:border-[#ff6b00] text-[#e3e2e6] hover:text-[#ffb693] font-space text-xs font-medium px-5 py-3 rounded-sm transition-all cursor-pointer"
          >
            <span>Diagnose Your Conversion Leakages</span>
            <span className="material-symbols-outlined text-[18px]">query_stats</span>
          </button>
        </div>
      </div>
    </section>
  );
};
