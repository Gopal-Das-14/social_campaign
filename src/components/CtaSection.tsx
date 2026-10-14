import React from 'react';

interface CtaSectionProps {
  onOpenAudit: () => void;
  onOpenBrandKit: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onOpenAudit,
  onOpenBrandKit,
}) => {
  return (
    <section id="inquire" className="px-5 md:px-10 lg:px-16 max-w-7xl mx-auto py-20">
      <div className="relative overflow-hidden rounded-xl bg-[#1b1b1f] border border-[#ff6b00]/30 p-8 md:p-16 frosted-glass text-center max-w-5xl mx-auto">
        {/* Diffused Amber Halo Background */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#ff6b00]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="px-3 py-1 rounded-sm bg-[#ff6b00]/10 border border-[#ff6b00]/30 font-space text-[12px] font-semibold text-[#ffb693] uppercase tracking-widest inline-block mb-4">
            INITIATE PARTNERSHIP
          </span>

          <h2 className="font-space text-3xl md:text-5xl font-medium text-[#e3e2e6] tracking-tight uppercase leading-tight">
            Ready to turn your website into a revenue engine?
          </h2>

          <p className="mt-4 text-base md:text-lg text-[#a0a4b0] leading-relaxed">
            Accepting select enterprise migrations and high-growth DTC engagements for Q3/Q4. Let us
            diagnose your conversion leakages.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ff6b00] hover:bg-[#fd8b00] text-[#0d0e11] font-space text-xs font-bold px-6 py-4 rounded-sm transition-all duration-200 active:scale-95 shadow-lg tracking-wider cursor-pointer"
            >
              <span>Book Growth Audit</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>

            <button
              onClick={onOpenBrandKit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#3a322d] hover:border-[#ff6b00] text-[#e3e2e6] hover:text-[#ffb693] font-space text-xs font-semibold px-6 py-4 rounded-sm transition-all duration-200 active:scale-95 tracking-wider cursor-pointer"
            >
              <span>Download Brand Kit</span>
              <span className="material-symbols-outlined text-[18px]">file_download</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
