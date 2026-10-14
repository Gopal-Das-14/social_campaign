import React, { useState } from 'react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [pinging, setPinging] = useState(false);
  const [latency, setLatency] = useState(14);
  const [logs, setLogs] = useState<string[]>([
    '[INIT] RADIANZZ Edge Cluster v4.2 booting...',
    '[CORE] Headless runtime initialized in 12ms.',
    '[CDN] Edge Cache Pre-warmed (99.4% hit ratio).',
    '[SECURITY] TLS 1.3 / HTTP/3 handshake verified.',
    '[TELEMETRY] Core Web Vitals: LCP 0.6s | CLS 0.000 | FID 12ms.',
    '[NODE] Active: US-EAST, EU-CENTRAL, AP-EAST.',
  ]);

  if (!isOpen) return null;

  const runPingTest = () => {
    setPinging(true);
    setTimeout(() => {
      const newLatency = Math.floor(10 + Math.random() * 8);
      setLatency(newLatency);
      setLogs((prev) => [
        ...prev,
        `[PING] Probed edge gateway: ${newLatency}ms round-trip (P99 18ms).`,
      ]);
      setPinging(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl rounded-xl bg-[#0d0e11] border border-[#ff6b00]/40 shadow-2xl overflow-hidden my-8 font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#3a322d]/70 bg-[#121316]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
            <span className="w-3 h-3 rounded-full bg-[#10B981]" />
            <span className="font-space text-xs text-[#a0a4b0] ml-2">
              radianzz-edge-terminal://diagnostics
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#a0a4b0] hover:text-white p-1"
          >
            ✕
          </button>
        </div>

        {/* Telemetry Status Strip */}
        <div className="p-5 border-b border-[#3a322d]/40 bg-[#16171b] grid grid-cols-2 sm:grid-cols-4 gap-4 text-[#e3e2e6]">
          <div>
            <div className="text-[10px] text-[#a0a4b0] uppercase">Latency</div>
            <div className="text-base font-bold text-[#ff6b00] font-space">{latency}ms</div>
          </div>
          <div>
            <div className="text-[10px] text-[#a0a4b0] uppercase">Core Vitals</div>
            <div className="text-base font-bold text-[#10B981] font-space">LCP 0.6s</div>
          </div>
          <div>
            <div className="text-[10px] text-[#a0a4b0] uppercase">Cache Hit</div>
            <div className="text-base font-bold text-[#ffb693] font-space">99.4%</div>
          </div>
          <div>
            <div className="text-[10px] text-[#a0a4b0] uppercase">Node Status</div>
            <div className="text-base font-bold text-[#10B981] font-space flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span>ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Console Log Area */}
        <div className="p-5 bg-[#0d0e11] text-[#a0a4b0] space-y-1.5 h-64 overflow-y-auto custom-scroll">
          {logs.map((log, index) => (
            <div key={index} className="flex gap-2">
              <span className="text-[#ff6b00] select-none">&gt;</span>
              <span
                className={
                  log.includes('[PING]')
                    ? 'text-[#ffb693]'
                    : log.includes('Vitals')
                    ? 'text-[#10B981]'
                    : 'text-[#e3e2e6]'
                }
              >
                {log}
              </span>
            </div>
          ))}
          {pinging && (
            <div className="text-[#ff6b00] animate-pulse">&gt; Transmitting edge probe packet...</div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3 border-t border-[#3a322d]/40 bg-[#121316] flex justify-between items-center">
          <span className="text-[11px] text-[#a0a4b0]">
            RADIANZZ ARCHITECTURE SYSTEM ENGINE
          </span>
          <button
            onClick={runPingTest}
            disabled={pinging}
            className="px-3 py-1.5 rounded-sm bg-[#ff6b00] hover:bg-[#fd8b00] text-[#0d0e11] font-space text-xs font-bold transition-colors cursor-pointer disabled:opacity-50"
          >
            {pinging ? 'Probing...' : 'Probe Edge Latency'}
          </button>
        </div>
      </div>
    </div>
  );
};
