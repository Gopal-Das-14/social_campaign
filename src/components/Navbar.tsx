import React, { useState } from 'react';

interface NavbarProps {
  onOpenAudit: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Work', href: 'overview' },
    { label: 'Expertise', href: 'deliverables' },
    { label: 'Deliverables', href: 'visual-assets' },
    { label: 'Reel', href: 'video-reel' },
    { label: 'Metrics', href: 'metrics' },
    { label: 'Calculator', href: 'roi-calculator' },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#121316]/85 backdrop-blur-md border-b border-[#3a322d]/40">
      <div className="flex justify-between items-center w-full px-5 md:px-10 lg:px-16 max-w-7xl mx-auto h-20">
        {/* Brand Logo / Wordmark */}
        <a
          href="#overview"
          onClick={(e) => handleLinkClick(e, 'overview')}
          className="flex items-center gap-3 group shrink-0"
        >
          <span className="w-8 h-8 rounded-sm bg-[#ff6b00] flex items-center justify-center text-[#0d0e11] shadow-sm group-hover:scale-105 transition-transform duration-200">
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              bolt
            </span>
          </span>
          <div className="flex flex-col">
            <span className="font-space text-lg font-bold uppercase tracking-widest text-[#e3e2e6]">
              RADIANZZ
            </span>
            <span className="font-space text-[9px] tracking-widest text-[#ffb693] font-semibold">
              DESIGN • TECH • GROWTH
            </span>
          </div>
        </a>

        {/* Desktop Navigation Anchors */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-[#a0a4b0] hover:text-[#ffb693] font-space text-[12px] font-semibold tracking-widest uppercase transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Trailing Action Pill & Primary CTA */}
        <div className="flex items-center gap-3">
          {/* Live Status Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#292a2d]/80 border border-[#3a322d]/60">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b00]"></span>
            </span>
            <span className="font-space text-[11px] uppercase tracking-wider text-[#e3e2e6] font-medium">
              Available Q2/Q3
            </span>
          </div>

          {/* Primary Action CTA */}
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 bg-[#ff6b00] hover:bg-[#fd8b00] text-[#0d0e11] font-space text-[11px] font-bold px-4 py-2.5 rounded-sm transition-all duration-200 active:scale-95 shadow-md tracking-wider cursor-pointer whitespace-nowrap"
          >
            <span>Initiate Brief</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#e3e2e6] hover:text-[#ff6b00] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1b1b1f] border-b border-[#3a322d]/60 px-6 py-5 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-[#e3e2e6] hover:text-[#ff6b00] font-space text-sm tracking-wider uppercase py-2 border-b border-[#292a2d]/40 flex justify-between items-center"
            >
              <span>{item.label}</span>
              <span className="material-symbols-outlined text-[16px] text-[#ff6b00]">
                chevron_right
              </span>
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between">
            <span className="font-space text-xs text-[#a0a4b0]">Status: Available Q2/Q3</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="bg-[#ff6b00] text-[#0d0e11] font-space text-xs font-bold px-3 py-1.5 rounded-sm"
            >
              Book Growth Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
