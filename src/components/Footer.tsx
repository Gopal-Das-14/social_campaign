import React from 'react';

interface FooterProps {
  onOpenTerminal: () => void;
  onOpenBrandKit: () => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenTerminal,
  onOpenBrandKit,
  onOpenAudit,
}) => {
  return (
    <footer className="w-full bg-[#0d0e11] border-t border-[#3a322d]/30">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-5 md:px-10 lg:px-16 py-12 max-w-7xl mx-auto gap-8">
        {/* Brand & Manifesto Summary */}
        <div className="flex flex-col gap-2 max-w-md">
          <div className="flex items-center gap-2">
            <span className="font-space text-2xl font-bold tracking-wider text-[#e3e2e6]">
              RADIANZZ
            </span>
            <span className="text-[#ffb693] font-space text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-sm bg-[#292a2d] border border-[#3a322d]/60">
              STUDIO
            </span>
          </div>
          <p className="text-xs text-[#a0a4b0] leading-relaxed">
            Digital architecture at the intersection of design, technology, and commercial velocity.
            Bespoke craftsmanship engineered for measurable revenue.
          </p>
        </div>

        {/* Links from JSON */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 items-center">
          <button
            onClick={onOpenBrandKit}
            className="text-[#a0a4b0] font-space text-xs hover:text-[#ffb693] transition-colors cursor-pointer"
          >
            Design Manifesto
          </button>
          <a
            href="#visual-assets"
            className="text-[#a0a4b0] font-space text-xs hover:text-[#ffb693] transition-colors"
          >
            Capabilities Index
          </a>
          <button
            onClick={onOpenTerminal}
            className="text-[#a0a4b0] font-space text-xs hover:text-[#ffb693] transition-colors cursor-pointer"
          >
            Security & Protocol
          </button>
          <button
            onClick={onOpenAudit}
            className="text-[#a0a4b0] font-space text-xs hover:text-[#ffb693] transition-colors cursor-pointer"
          >
            Terms of Engagement
          </button>
          <button
            onClick={onOpenTerminal}
            className="text-[#ff6b00] font-space text-xs font-bold hover:text-[#ffb693] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[14px]">terminal</span>
            <span>Terminal Access</span>
          </button>
        </div>
      </div>

      {/* Copyright Sub-strip */}
      <div className="w-full border-t border-[#3a322d]/20 py-6 px-5 md:px-10 lg:px-16 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-[#a0a4b0]/70 font-space text-[11px] gap-4">
        <div>© 2025 RADIANZZ DIGITAL ARCHITECTURE. ALL RIGHTS RESERVED.</div>
        <div className="flex items-center gap-4">
          <span>LATENCY: 14MS</span>
          <span>•</span>
          <span>SECURITY: ENCRYPTED EDGE</span>
          <span>•</span>
          <span className="text-[#ff6b00] font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-pulse"></span>
            NODE: ACTIVE
          </span>
        </div>
      </div>
    </footer>
  );
};
