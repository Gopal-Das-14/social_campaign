import React, { useState } from 'react';

interface RevenueCalculatorSectionProps {
  onPreFillAudit: (calculatedData: {
    visitors: number;
    currentRevenue: number;
    projectedRevenue: number;
    recoveredCapital: number;
  }) => void;
}

export const RevenueCalculatorSection: React.FC<RevenueCalculatorSectionProps> = ({
  onPreFillAudit,
}) => {
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(75000);
  const [currentCr, setCurrentCr] = useState<number>(1.8);
  const [aov, setAov] = useState<number>(120);

  // Baseline calculations
  const currentOrders = Math.floor(monthlyVisitors * (currentCr / 100));
  const currentMonthlyRevenue = currentOrders * aov;

  // RADIANZZ Architecture lifts:
  // Conservative benchmark: +120% conversion throughput surge on full migration
  // +38% AOV lift via smart AI bundling
  const projectedCr = +(currentCr * 2.2).toFixed(2);
  const projectedAov = +(aov * 1.38).toFixed(0);
  const projectedOrders = Math.floor(monthlyVisitors * (projectedCr / 100));
  const projectedMonthlyRevenue = projectedOrders * projectedAov;
  const monthlyIncremental = projectedMonthlyRevenue - currentMonthlyRevenue;
  const annualIncremental = monthlyIncremental * 12;

  const handleApplyToBrief = () => {
    onPreFillAudit({
      visitors: monthlyVisitors,
      currentRevenue: currentMonthlyRevenue,
      projectedRevenue: projectedMonthlyRevenue,
      recoveredCapital: annualIncremental,
    });
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section
      id="roi-calculator"
      className="px-5 md:px-10 lg:px-16 max-w-7xl mx-auto py-24 border-t border-[#3a322d]/30"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff6b00]"></span>
            <span className="font-space text-[11px] font-semibold uppercase tracking-widest text-[#ffb693]">
              Diagnostic Tooling
            </span>
          </div>
          <h2 className="font-space text-3xl md:text-5xl font-medium text-[#e3e2e6] tracking-tight uppercase">
            CONVERSION ROI & REVENUE LEAKAGE CALCULATOR
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#a0a4b0] max-w-md">
          Model how headless speed (0.6s) and frictionless checkout architecture (+44% cart recovery)
          compound into transacted capital.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Controls Column */}
        <div className="lg:col-span-6 rounded-xl bg-[#1b1b1f] border border-[#3a322d]/40 p-6 md:p-8 frosted-glass flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-space text-xs uppercase tracking-wider text-[#e3e2e6] font-semibold">
                  Monthly Store Visitors
                </label>
                <span className="font-space font-bold text-sm text-[#ff6b00] tabular-nums">
                  {monthlyVisitors.toLocaleString()} sessions
                </span>
              </div>
              <input
                type="range"
                min={5000}
                max={500000}
                step={5000}
                value={monthlyVisitors}
                onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                className="w-full accent-[#ff6b00] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#a0a4b0] mt-1 font-space">
                <span>5K</span>
                <span>250K</span>
                <span>500K</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-space text-xs uppercase tracking-wider text-[#e3e2e6] font-semibold">
                  Current Conversion Rate (CR)
                </label>
                <span className="font-space font-bold text-sm text-[#ff6b00] tabular-nums">
                  {currentCr}%
                </span>
              </div>
              <input
                type="range"
                min={0.5}
                max={6.0}
                step={0.1}
                value={currentCr}
                onChange={(e) => setCurrentCr(Number(e.target.value))}
                className="w-full accent-[#ff6b00] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#a0a4b0] mt-1 font-space">
                <span>0.5% (Severe leakage)</span>
                <span>3.0% (Average)</span>
                <span>6.0% (Elite)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-space text-xs uppercase tracking-wider text-[#e3e2e6] font-semibold">
                  Average Order Value (AOV)
                </label>
                <span className="font-space font-bold text-sm text-[#ff6b00] tabular-nums">
                  ${aov}
                </span>
              </div>
              <input
                type="range"
                min={20}
                max={600}
                step={5}
                value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
                className="w-full accent-[#ff6b00] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#a0a4b0] mt-1 font-space">
                <span>$20</span>
                <span>$300</span>
                <span>$600</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#3a322d]/40 flex items-center justify-between">
            <div>
              <span className="text-xs text-[#a0a4b0] block font-space">Current Monthly Baseline:</span>
              <span className="text-lg font-bold font-space text-[#e3e2e6]">
                {formatCurrency(currentMonthlyRevenue)}
              </span>
            </div>
            <button
              onClick={handleApplyToBrief}
              className="bg-[#292a2d] hover:bg-[#ff6b00] hover:text-[#0d0e11] text-[#ffb693] font-space text-xs font-bold px-4 py-2.5 rounded-sm transition-all border border-[#ff6b00]/30 cursor-pointer"
            >
              Attach to Brief Inquiry
            </button>
          </div>
        </div>

        {/* Output Diagnostics Column */}
        <div className="lg:col-span-6 rounded-xl bg-gradient-to-br from-[#1b1b1f] to-[#121316] border border-[#ff6b00]/30 p-6 md:p-8 frosted-glass flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[#ff6b00]">trending_up</span>
              <span className="font-space text-xs font-bold text-[#ff6b00] uppercase tracking-wider">
                Projected Capital Expansion
              </span>
            </div>
            <h3 className="font-space text-xl md:text-2xl font-medium text-[#e3e2e6] mb-4">
              RADIANZZ Architecture Performance Forecast
            </h3>

            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-[#292a2d]/40 border border-[#3a322d]">
                <span className="text-[11px] text-[#a0a4b0] uppercase font-space block">
                  Projected CR
                </span>
                <span className="text-xl md:text-2xl font-bold font-space text-[#ffb693]">
                  {projectedCr}%
                </span>
                <span className="text-[10px] text-[#10B981] block mt-1">+120% Throughput</span>
              </div>

              <div className="p-4 rounded-lg bg-[#292a2d]/40 border border-[#3a322d]">
                <span className="text-[11px] text-[#a0a4b0] uppercase font-space block">
                  Projected AOV
                </span>
                <span className="text-xl md:text-2xl font-bold font-space text-[#ffb693]">
                  ${projectedAov}
                </span>
                <span className="text-[10px] text-[#10B981] block mt-1">+38% Smart AI Bundles</span>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#ff6b00]/10 border border-[#ff6b00]/30 mb-6">
              <div className="text-xs text-[#ffb693] font-space font-semibold uppercase tracking-wider">
                Unrealized Annualized Revenue Recoverable:
              </div>
              <div className="text-3xl md:text-4xl font-extrabold font-space text-[#ff6b00] tracking-tight mt-1">
                +{formatCurrency(annualIncremental)} / year
              </div>
              <p className="text-xs text-[#a0a4b0] mt-2">
                Based on eliminating cart abandonment friction, edge sub-second loading (0.6s), and
                frictionless 1-click tokenized checkout.
              </p>
            </div>
          </div>

          <button
            onClick={handleApplyToBrief}
            className="w-full bg-[#ff6b00] hover:bg-[#fd8b00] text-[#0d0e11] font-space text-xs font-bold py-3.5 rounded-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Lock In This Conversion Architecture</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};
