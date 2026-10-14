/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VisualAssetsSection } from './components/VisualAssetsSection';
import { ReelPlayerSection } from './components/ReelPlayerSection';
import { CritiqueMatrixSection } from './components/CritiqueMatrixSection';
import { RevenueCalculatorSection } from './components/RevenueCalculatorSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { AssetDetailModal } from './components/AssetDetailModal';
import { BeforeAfterModal } from './components/BeforeAfterModal';
import { PartnershipModal } from './components/PartnershipModal';
import { BrandKitModal } from './components/BrandKitModal';
import { TerminalModal } from './components/TerminalModal';
import { VisualAsset } from './data/campaignData';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isBrandKitModalOpen, setIsBrandKitModalOpen] = useState(false);
  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false);
  const [isBeforeAfterModalOpen, setIsBeforeAfterModalOpen] = useState(false);
  const [selectedAssetForInspection, setSelectedAssetForInspection] = useState<VisualAsset | null>(null);
  const [tagFilter, setTagFilter] = useState<string | null>(null);

  const [preFilledAuditData, setPreFilledAuditData] = useState<{
    visitors?: number;
    currentRevenue?: number;
    projectedRevenue?: number;
    recoveredCapital?: number;
  } | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreFillAudit = (data: {
    visitors: number;
    currentRevenue: number;
    projectedRevenue: number;
    recoveredCapital: number;
  }) => {
    setPreFilledAuditData(data);
    setIsAuditModalOpen(true);
  };

  const handleFilterByTag = (tag: string) => {
    setTagFilter(tag);
    handleNavigate('visual-assets');
  };

  return (
    <div className="min-h-screen bg-[#121316] text-[#e3e2e6] selection:bg-[#ff6b00] selection:text-[#0d0e11] overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar
        onOpenAudit={() => setIsAuditModalOpen(true)}
        onNavigate={handleNavigate}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection
          onOpenAudit={() => setIsAuditModalOpen(true)}
          onExploreDeliverables={() => handleNavigate('visual-assets')}
          onSelectTag={handleFilterByTag}
        />

        {/* Visual Assets (03 Items) */}
        <div id="deliverables">
          <VisualAssetsSection
            onInspectAsset={(asset) => setSelectedAssetForInspection(asset)}
            onOpenBeforeAfter={() => setIsBeforeAfterModalOpen(true)}
            selectedTagFilter={tagFilter}
            onClearTagFilter={() => setTagFilter(null)}
          />
        </div>

        {/* Campaign Video Reel (01 Reel) */}
        <ReelPlayerSection />

        {/* Assignment Summary & Design Critique Matrix */}
        <CritiqueMatrixSection />

        {/* Conversion ROI & Leakage Diagnostic Engine */}
        <RevenueCalculatorSection onPreFillAudit={handlePreFillAudit} />

        {/* Obsidian & Amber Call To Action */}
        <CtaSection
          onOpenAudit={() => setIsAuditModalOpen(true)}
          onOpenBrandKit={() => setIsBrandKitModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setIsTerminalModalOpen(true)}
        onOpenBrandKit={() => setIsBrandKitModalOpen(true)}
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      {/* Modals & Overlays */}
      <AssetDetailModal
        asset={selectedAssetForInspection}
        onClose={() => setSelectedAssetForInspection(null)}
      />

      {isBeforeAfterModalOpen && (
        <BeforeAfterModal
          onClose={() => setIsBeforeAfterModalOpen(false)}
          onInitiateUpgrade={() => setIsAuditModalOpen(true)}
        />
      )}

      <PartnershipModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        preFilledData={preFilledAuditData}
      />

      <BrandKitModal
        isOpen={isBrandKitModalOpen}
        onClose={() => setIsBrandKitModalOpen(false)}
      />

      <TerminalModal
        isOpen={isTerminalModalOpen}
        onClose={() => setIsTerminalModalOpen(false)}
      />
    </div>
  );
}
