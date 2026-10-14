import React, { useState, useRef, useEffect, useCallback } from 'react';

interface BeforeAfterModalProps {
  onClose: () => void;
  onInitiateUpgrade: () => void;
}

export const BeforeAfterModal: React.FC<BeforeAfterModalProps> = ({
  onClose,
  onInitiateUpgrade,
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50); // 0 to 100%
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);

  const handlePointerMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        handlePointerMove(e.clientX);
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isDraggingRef.current && e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX);
      }
    };
    const onEnd = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onEnd);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [handlePointerMove]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl rounded-xl bg-[#1b1b1f] border border-[#ff6b00]/50 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#3a322d]/50 bg-[#121316]">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#ff6b00]">compare</span>
            <div>
              <span className="font-space text-xs font-bold text-[#ffb693] uppercase tracking-wider block">
                Asset 03: The Paradigm Shift
              </span>
              <span className="text-xs text-[#e3e2e6]">
                Interactive Split Comparison: Legacy Wireframe vs. Radiant Architecture
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#a0a4b0] hover:text-white rounded hover:bg-[#292a2d] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Split Container */}
        <div className="p-6">
          <div className="text-center mb-4">
            <p className="text-xs text-[#a0a4b0]">
              Drag the central divider horizontally to inspect the architectural contrast.
            </p>
          </div>

          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[500px] rounded-lg overflow-hidden border border-[#3a322d] select-none cursor-ew-resize bg-[#0d0e11]"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            {/* Background Layer: "After: Radiant Architecture" */}
            <div className="absolute inset-0 w-full h-full bg-[#121316] flex flex-col justify-between p-6 sm:p-8">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded bg-[#ff6b00] text-[#0d0e11] font-space text-xs font-bold uppercase tracking-wider">
                  AFTER: RADIANZZ STOREFRONT
                </span>
                <span className="font-space text-xs font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded border border-[#10B981]/30">
                  +340% CONVERSIONS
                </span>
              </div>

              <div className="my-auto text-left max-w-sm pl-4">
                <div className="text-[#ff6b00] text-xs font-space font-semibold uppercase mb-1">
                  High-Converting Architecture
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-space text-[#e3e2e6] leading-tight">
                  Luminous Luxury Experience
                </div>
                <ul className="mt-4 space-y-2 text-xs text-[#e3e2e6]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#10B981] text-[16px]">check_circle</span>
                    <span>0.6s sub-second edge rendering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#10B981] text-[16px]">check_circle</span>
                    <span>1-click tokenized checkout (+44% cart recovery)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#10B981] text-[16px]">check_circle</span>
                    <span>AI dynamic bundles (+38% AOV lift)</span>
                  </li>
                </ul>
              </div>

              <div className="text-xs text-[#a0a4b0] font-space">
                Headless React + Edge CDN Engine
              </div>
            </div>

            {/* Clipped Layer: "Before: Legacy Stagnation" */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden bg-[#222428] border-r border-[#ff6b00] flex flex-col justify-between p-6 sm:p-8"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded bg-[#343538] text-[#a0a4b0] font-space text-xs font-bold uppercase tracking-wider">
                  BEFORE: LEGACY STORE
                </span>
              </div>

              <div className="my-auto text-left max-w-sm pr-4 opacity-75 grayscale">
                <div className="text-[#EF4444] text-xs font-space font-semibold uppercase mb-1">
                  High Friction Wireframe
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-space text-[#a0a4b0] leading-tight">
                  Stagnant Monolith
                </div>
                <ul className="mt-4 space-y-2 text-xs text-[#a0a4b0]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#EF4444] text-[16px]">cancel</span>
                    <span>4.2s slow mobile load (53% bounce)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#EF4444] text-[16px]">cancel</span>
                    <span>7-step checkout with form friction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#EF4444] text-[16px]">cancel</span>
                    <span>Outdated aesthetic leaking luxury buyers</span>
                  </li>
                </ul>
              </div>

              <div className="text-xs text-[#a0a4b0] font-space">
                Legacy Monolithic Template
              </div>
            </div>

            {/* Vertical Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#ff6b00] shadow-[0_0_12px_#ff6b00]"
              style={{ left: `${sliderPos}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#ff6b00] text-[#0d0e11] flex items-center justify-center shadow-lg font-bold text-xs">
                ⇄
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar & Action Trigger */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#3a322d]/40">
            <div className="flex items-center gap-4 text-xs">
              <span className="text-[#a0a4b0]">Migration Window:</span>
              <span className="font-space font-bold text-[#ffb693]">3 to 5 Weeks Turnaround</span>
              <span className="text-[#a0a4b0]">•</span>
              <span className="text-[#a0a4b0]">Zero Downtime Guarantee</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onInitiateUpgrade();
              }}
              className="w-full sm:w-auto bg-[#ff6b00] hover:bg-[#fd8b00] text-[#0d0e11] font-space text-xs font-bold px-6 py-3 rounded-sm transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Initiate Paradigm Shift Migration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
