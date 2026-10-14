import React, { useState } from 'react';

interface PreFilledData {
  visitors?: number;
  currentRevenue?: number;
  projectedRevenue?: number;
  recoveredCapital?: number;
}

interface PartnershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  preFilledData?: PreFilledData | null;
}

export const PartnershipModal: React.FC<PartnershipModalProps> = ({
  isOpen,
  onClose,
  preFilledData,
}) => {
  const [company, setCompany] = useState('');
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [gmvTier, setGmvTier] = useState('$250k - $1M / mo');
  const [focusAreas, setFocusAreas] = useState<string[]>([
    'Checkout Friction & Cart Recovery',
  ]);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleFocus = (area: string) => {
    if (focusAreas.includes(area)) {
      setFocusAreas(focusAreas.filter((a) => a !== area));
    } else {
      setFocusAreas([...focusAreas, area]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-2xl rounded-xl bg-[#1b1b1f] border border-[#ff6b00]/40 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#3a322d]/50 bg-[#121316]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00]" />
            <span className="font-space text-xs font-bold text-[#ffb693] tracking-widest uppercase">
              INITIATE PARTNERSHIP BRIEF
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#a0a4b0] hover:text-white rounded hover:bg-[#292a2d] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#ff6b00]/20 text-[#ff6b00] flex items-center justify-center mx-auto border border-[#ff6b00]/40">
              <span
                className="material-symbols-outlined text-[36px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
            </div>

            <div>
              <h3 className="font-space text-2xl font-bold text-[#e3e2e6] uppercase">
                Diagnostic Brief Received
              </h3>
              <p className="mt-2 text-sm text-[#a0a4b0] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#e3e2e6]">{company || 'Partner'}</strong>.
                Our Principal Conversion Architect is analyzing your storefront ({url || 'your brand'})
                and will deliver your preliminary audit dossier to{' '}
                <strong className="text-[#ffb693]">{email || 'your email'}</strong> within 24 hours.
              </p>
            </div>

            {preFilledData?.recoveredCapital && (
              <div className="p-4 rounded-lg bg-[#292a2d]/50 border border-[#ff6b00]/30 max-w-md mx-auto text-left">
                <span className="font-space text-[11px] text-[#ffb693] uppercase font-bold block mb-1">
                  Attached Conversion Target:
                </span>
                <span className="font-space text-xl font-bold text-[#ff6b00]">
                  +{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(preFilledData.recoveredCapital)} / year
                </span>
                <p className="text-[11px] text-[#a0a4b0] mt-1">
                  We will prioritize the +44% cart recovery and 0.6s edge velocity modules.
                </p>
              </div>
            )}

            <div className="pt-4 border-t border-[#3a322d]/40 flex justify-center">
              <button
                onClick={handleReset}
                className="bg-[#ff6b00] hover:bg-[#fd8b00] text-[#0d0e11] font-space text-xs font-bold px-6 py-3 rounded-sm transition-all cursor-pointer"
              >
                Return to Campaign Showcase
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="px-2.5 py-0.5 rounded-sm bg-[#ff6b00]/10 border border-[#ff6b00]/30 font-space text-[10px] text-[#ffb693] uppercase tracking-widest inline-block mb-2">
                Available Q2/Q3 Engagements
              </span>
              <h3 className="font-space text-xl sm:text-2xl font-medium text-[#e3e2e6] uppercase">
                Book Diagnostic Growth Audit
              </h3>
              <p className="text-xs text-[#a0a4b0] mt-1">
                Direct engagement with our senior design and headless engineering team.
              </p>
            </div>

            {/* If prefilled from calculator */}
            {preFilledData?.recoveredCapital && (
              <div className="p-3 rounded bg-[#ff6b00]/10 border border-[#ff6b00]/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#ffb693] font-space">
                  <span className="material-symbols-outlined text-[18px]">calculate</span>
                  <span>Attached Model: +${Math.round(preFilledData.recoveredCapital).toLocaleString()}/yr target</span>
                </div>
                <span className="text-[10px] font-bold text-[#10B981] font-space">SYNCED</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-space text-xs uppercase tracking-wider text-[#e3e2e6] mb-1.5 font-semibold">
                  Company / Brand Name *
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Lumina Goods Co."
                  className="w-full bg-[#0d0e11] border border-[#3a322d] rounded-sm px-3.5 py-2.5 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#ff6b00]"
                />
              </div>

              <div>
                <label className="block font-space text-xs uppercase tracking-wider text-[#e3e2e6] mb-1.5 font-semibold">
                  Storefront / Website URL *
                </label>
                <input
                  type="text"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://brand.com"
                  className="w-full bg-[#0d0e11] border border-[#3a322d] rounded-sm px-3.5 py-2.5 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#ff6b00]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-space text-xs uppercase tracking-wider text-[#e3e2e6] mb-1.5 font-semibold">
                  Executive Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="founder@brand.com"
                  className="w-full bg-[#0d0e11] border border-[#3a322d] rounded-sm px-3.5 py-2.5 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#ff6b00]"
                />
              </div>

              <div>
                <label className="block font-space text-xs uppercase tracking-wider text-[#e3e2e6] mb-1.5 font-semibold">
                  Current Monthly GMV
                </label>
                <select
                  value={gmvTier}
                  onChange={(e) => setGmvTier(e.target.value)}
                  className="w-full bg-[#0d0e11] border border-[#3a322d] rounded-sm px-3.5 py-2.5 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#ff6b00]"
                >
                  <option>$50k - $250k / mo</option>
                  <option>$250k - $1M / mo</option>
                  <option>$1M - $5M / mo</option>
                  <option>$5M+ / mo (Enterprise)</option>
                </select>
              </div>
            </div>

            {/* Strategic Priorities */}
            <div>
              <label className="block font-space text-xs uppercase tracking-wider text-[#e3e2e6] mb-2 font-semibold">
                Primary Transformation Objectives
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Checkout Friction & Cart Recovery',
                  'Headless Edge Migration (0.6s)',
                  'Obsidian Luxury Visual Rebrand',
                  'AI Personalization & Dynamic Bundles',
                ].map((area) => {
                  const isChecked = focusAreas.includes(area);
                  return (
                    <button
                      type="button"
                      key={area}
                      onClick={() => toggleFocus(area)}
                      className={`p-2.5 rounded-sm border text-left text-xs font-space transition-all cursor-pointer flex items-center justify-between ${
                        isChecked
                          ? 'bg-[#292a2d] border-[#ff6b00] text-[#ffb693]'
                          : 'bg-[#121316] border-[#3a322d]/60 text-[#a0a4b0] hover:text-[#e3e2e6]'
                      }`}
                    >
                      <span>{area}</span>
                      <span className="material-symbols-outlined text-[16px]">
                        {isChecked ? 'check_box' : 'check_box_outline_blank'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block font-space text-xs uppercase tracking-wider text-[#e3e2e6] mb-1.5 font-semibold">
                Additional Context / Questions (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Target launch deadline, current platform (Shopify Plus, Magento, Custom)..."
                className="w-full bg-[#0d0e11] border border-[#3a322d] rounded-sm p-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#ff6b00]"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#3a322d]/40">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 font-space text-xs text-[#a0a4b0] hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#ff6b00] hover:bg-[#fd8b00] text-[#0d0e11] font-space text-xs font-bold px-6 py-2.5 rounded-sm shadow-lg transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
              >
                <span>Submit Diagnostic Brief</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
