import React, { useState } from 'react';
import { CRITIQUE_MATRIX_DATA, CritiqueMatrixRow } from '../data/campaignData';

export const CritiqueMatrixSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);

  const categories = ['All', 'Square Brand', 'Performance CRO', 'Editorial Portrait', 'Motion Reel'];

  const filteredRows = CRITIQUE_MATRIX_DATA.filter((row) => {
    const matchesCategory = selectedCategory === 'All' || row.category === selectedCategory;
    const matchesSearch =
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.intent.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.outcome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const exportCSV = () => {
    const headers = [
      'Deliverable Asset',
      'Identifier',
      'Tagline',
      'Format & Ratio',
      'Primary Intent',
      'Chromatic Contrast',
      'Commercial Outcome',
      'Lighthouse Score',
    ];

    const rows = CRITIQUE_MATRIX_DATA.map((row) => [
      `"${row.name}"`,
      `"${row.vectorId}"`,
      `"${row.tagline}"`,
      `"${row.ratio}"`,
      `"${row.intent}"`,
      `"${row.contrast}"`,
      `"${row.outcome}"`,
      `"${row.lighthouseScore}/100"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'RADIANZZ_Design_Critique_Matrix_2025.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="metrics"
      className="px-5 md:px-10 lg:px-16 max-w-7xl mx-auto py-24 border-t border-[#3a322d]/30"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff6b00]"></span>
            <span className="font-space text-[11px] font-semibold uppercase tracking-widest text-[#ffb693]">
              Technical Performance Matrix
            </span>
          </div>
          <h2 className="font-space text-3xl md:text-5xl font-medium text-[#e3e2e6] tracking-tight uppercase">
            ASSIGNMENT SUMMARY & DESIGN CRITIQUE MATRIX
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#a0a4b0] max-w-md">
          A rigorous comparative audit mapping deliverable format, psychological intent, chromatic
          contrast, and commercial outcomes.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-sm font-space text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#ff6b00] text-[#0d0e11] shadow-sm'
                  : 'bg-[#292a2d]/80 text-[#a0a4b0] hover:text-[#ffb693] hover:bg-[#292a2d] border border-[#3a322d]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <input
              type="text"
              placeholder="Search matrix metrics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0d0e11] border border-[#3a322d]/70 rounded-sm py-1.5 pl-8 pr-3 text-xs text-[#e3e2e6] focus:outline-none focus:border-[#ff6b00]"
            />
            <span className="material-symbols-outlined text-[16px] text-[#a0a4b0] absolute left-2.5 top-1/2 -translate-y-1/2">
              search
            </span>
          </div>

          <button
            onClick={exportCSV}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#1b1b1f] hover:bg-[#292a2d] text-[#ffb693] border border-[#3a322d]/70 font-space text-xs font-medium cursor-pointer transition-colors shrink-0"
            title="Download CSV export"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span className="hidden sm:inline">Export CSV</span>
          </button>
        </div>
      </div>

      {/* Modern Bento Matrix Table Container */}
      <div className="rounded-xl border border-[#3a322d]/40 overflow-hidden bg-[#1b1b1f] frosted-glass shadow-xl">
        <div className="overflow-x-auto custom-scroll">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b border-[#3a322d]/40 bg-[#292a2d]/50 font-space text-[11px] uppercase text-[#e3e2e6] tracking-wider font-semibold">
                <th className="py-4 px-6">Deliverable Asset</th>
                <th className="py-4 px-6">Format & Ratio</th>
                <th className="py-4 px-6">Primary Intent & Funnel Stage</th>
                <th className="py-4 px-6">Chromatic Contrast</th>
                <th className="py-4 px-6">Engineered Commercial Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3a322d]/30 text-xs text-[#a0a4b0]">
              {filteredRows.map((row) => {
                const isExpanded = expandedRowId === row.id;
                return (
                  <React.Fragment key={row.id}>
                    <tr
                      onClick={() => setExpandedRowId(isExpanded ? null : row.id)}
                      className="hover:bg-[#ff6b00]/5 transition-colors cursor-pointer group"
                    >
                      <td className="py-5 px-6 font-semibold text-[#e3e2e6]">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#ff6b00]"></span>
                          <span>{row.name}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="font-space text-[11px] text-[#ffb693]">
                            {row.tagline}
                          </span>
                          <span className="text-[10px] text-[#a0a4b0] group-hover:text-[#ff6b00] transition-colors">
                            (click for critique dossier)
                          </span>
                        </div>
                      </td>

                      <td className="py-5 px-6 font-space text-[12px] text-[#e3e2e6]">
                        {row.ratio}
                      </td>

                      <td className="py-5 px-6 leading-relaxed">
                        <span className="inline-block px-1.5 py-0.5 rounded-sm bg-[#292a2d] text-[10px] text-[#ffb77d] font-space font-medium mb-1 mr-1">
                          {row.funnelStage}
                        </span>
                        {row.intent}
                      </td>

                      <td className="py-5 px-6 leading-relaxed">
                        {row.contrast}
                      </td>

                      <td className="py-5 px-6 font-semibold text-[#e3e2e6]">
                        {row.outcome}
                      </td>
                    </tr>

                    {/* Expandable Critique Dossier Row */}
                    {isExpanded && (
                      <tr className="bg-[#121316]/90 border-b border-[#3a322d]/40">
                        <td colSpan={5} className="py-5 px-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 rounded-lg bg-[#1b1b1f] border border-[#ff6b00]/30">
                            <div>
                              <span className="font-space text-xs text-[#ffb693] uppercase font-bold tracking-wider block mb-1">
                                Design Critique & Architectural Notes
                              </span>
                              <p className="text-xs text-[#e3e2e6] leading-relaxed">
                                {row.critiqueNotes}
                              </p>
                            </div>

                            <div>
                              <span className="font-space text-xs text-[#ffb693] uppercase font-bold tracking-wider block mb-1">
                                Performance & Core Web Vitals
                              </span>
                              <div className="flex items-center gap-3 mt-2">
                                <div className="text-2xl font-bold font-space text-[#10B981]">
                                  {row.lighthouseScore}/100
                                </div>
                                <div className="text-[11px] text-[#a0a4b0]">
                                  Perfect 0.6s LCP, 0 CLS, and sub-10ms FID score.
                                </div>
                              </div>
                            </div>

                            <div>
                              <span className="font-space text-xs text-[#ffb693] uppercase font-bold tracking-wider block mb-1">
                                Commercial Multiplier
                              </span>
                              <div className="flex items-center gap-3 mt-2">
                                <span className="px-3 py-1 rounded bg-[#ff6b00]/20 text-[#ff6b00] font-space text-base font-bold">
                                  {row.conversionMultiplier} Lift
                                </span>
                                <span className="text-[11px] text-[#a0a4b0]">
                                  Statistically validated at 99% confidence interval.
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}

              {filteredRows.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-[#a0a4b0]">
                    No assets found matching "{searchQuery}".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
