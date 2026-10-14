export interface VisualAsset {
  id: string;
  vectorId: string;
  title: string;
  subtitle: string;
  format: string;
  ratio: string;
  resolution: string;
  imageUrl: string;
  detailedDescription: string;
  strategicPurpose: string;
  primaryIntent: string;
  chromaticContrast: string;
  commercialOutcome: string;
  tags: string[];
  hotspots?: { x: number; y: number; title: string; note: string }[];
  palette: { name: string; hex: string; role: string }[];
  specs: {
    lens?: string;
    lighting: string;
    rendering: string;
    typography: string;
  };
}

export const CAMPAIGN_ASSETS: VisualAsset[] = [
  {
    id: 'asset-01',
    vectorId: 'VECTOR IDENTIFIER: ASSET-01',
    title: 'Asset 01: The Conversion Diagnostic',
    subtitle: '“Does It Sell?”',
    format: '1:1 Square Format',
    ratio: '1:1 Square (1024x1024)',
    resolution: '1024 × 1024 px',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1WAOowqUTu0uGV4IG2BhT1q8xNBLuXoUh-AiVirj7MBOr2ZZXY236N1oE9g9cVHesle-rrSC_0-BqQ_C9pl3ZJB9vVvS_cjSZBSolL2_zRKCxvzAkfC-BNEvLjWsgi9GvVw90JTQZ_0U2PhdK7a73rJb91b0gKE1DU47a0ESotvDW-WIrxdr5DiwVQ_6xDLvycXMkALT9vWWkqKEis9ASjJRhnVlpCTye_F7-uxH2GDhYZb2xmYN6lxig',
    detailedDescription:
      'An ultra-clean modern design studio composition challenging conventional aesthetic-only web development. Positions high-contrast matte obsidian architectural podiums illuminated by radiant solar orange (#FF6B00) ambient backlighting. Demonstrates dual-device synchronization between desktop storefront and mobile checkout flow, directly addressing ecommerce decision-makers.',
    strategicPurpose:
      'Top-of-funnel brand hook addressing vanity design vs. actual gross margin and conversion throughput.',
    primaryIntent:
      'Top-of-Funnel Brand Disruption. Direct challenge to vanity agency redesigns.',
    chromaticContrast:
      'Obsidian (#0A0A0C) vs. Radiant Amber (#FF6B00) edge luminescence.',
    commercialOutcome:
      '+340% Initial Qualified Brief Inquiries from Ecommerce CXOs.',
    tags: [
      'E-COMMERCE DEVELOPMENT',
      'UI/UX DESIGN',
      'CUSTOM WEB DEV',
      'DIGITAL MARKETING',
      'AI SOLUTIONS',
    ],
    hotspots: [
      {
        x: 48,
        y: 22,
        title: 'Diagnostic Brand Hook',
        note: 'High-contrast typography immediately questions vanity metrics vs commercial profitability.',
      },
      {
        x: 68,
        y: 52,
        title: 'Dual-Device Synchronicity',
        note: 'Live desktop viewport synchronized with mobile frictionless checkout experience.',
      },
      {
        x: 16,
        y: 54,
        title: 'Core Capability Matrix',
        note: 'Precise taxonomy of enterprise headless dev, custom UX, and AI retention.',
      },
      {
        x: 16,
        y: 72,
        title: 'High-Intent CTA Trigger',
        note: 'Solar orange interactive vector driving immediate engagement.',
      },
    ],
    palette: [
      { name: 'Obsidian Void', hex: '#0A0A0C', role: 'Background Canvas' },
      { name: 'Solar Orange', hex: '#FF6B00', role: 'Primary Luminescence' },
      { name: 'Graphite Slate', hex: '#1F1F23', role: 'Architectural Podiums' },
      { name: 'Pristine Snow', hex: '#F4F4F6', role: 'Headline Typography' },
    ],
    specs: {
      lighting: 'Volumetric rim backlighting with 45° key light',
      rendering: 'Ultra-matte PBR shaders with glass refraction',
      typography: 'Space Grotesk 700 / Inter 400',
    },
  },
  {
    id: 'asset-02',
    vectorId: 'VECTOR IDENTIFIER: ASSET-02',
    title: 'Asset 02: Frictionless Checkout',
    subtitle: '“Abandoned Carts Are Expensive”',
    format: '1:1 Square Format',
    ratio: '1:1 Square (1024x1024)',
    resolution: '1024 × 1024 px',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1X-DtfzX2nTs2waSNeklWZFT6hNWIEdo84J1mchYwwDd06zjLz8jega_Q05KtN4ckUV4cRUAcIdyxlbXzJwh0rAxxpHOluZ6e1IkrqNY22FGEp5_NhHMMH8YZXDLuSVdGS6KT1_-gL43NnW2w4xNXkX-7GzgUdTqdY5rkFJJnn7_RPttiC83CCq5YtG1sqIYKWpOhvItOfF7_m_4cojQeiE4_lA-bXIB21JEVC7FUkw1jtMDBQnvFyI_g',
    detailedDescription:
      'Engineered specifically around cart abandonment and friction reduction. Features volumetric amber lighting casting dramatic silhouettes across chiseled basalt blocks, paired with floating frosted glassmorphism KPI badges indicating +44% Cart Recovery and +38% Average Order Value. Showcases 1-click checkout validation.',
    strategicPurpose:
      'Mid-funnel consideration targeting high-volume DTC and enterprise retailers leaking checkout revenue.',
    primaryIntent:
      'Mid-Funnel Pain Validation. Targets revenue leakage and abandonment angst.',
    chromaticContrast:
      'Textured Basalt steps with glowing volumetric amber underglow and frosted glass.',
    commercialOutcome:
      '+44% Cart Recovery & +38% Verified AOV Acceleration.',
    tags: [
      '1-CLICK CHECKOUT',
      'RETENTION ENGINE',
      'CONVERSION RATE CRO',
      'AI PERSONALIZATION',
    ],
    hotspots: [
      {
        x: 45,
        y: 20,
        title: 'Pain Point Validation',
        note: 'Highlights the single largest leak in consumer e-commerce pipelines: checkout friction.',
      },
      {
        x: 82,
        y: 35,
        title: '+38% AOV Surge',
        note: 'Dynamic bundle suggestions driven by client-side predictive AI.',
      },
      {
        x: 62,
        y: 47,
        title: '+44% Cart Recovery',
        note: 'Zero-redirect instant tokenized checkout protocol.',
      },
      {
        x: 28,
        y: 84,
        title: 'Frictionless Trigger',
        note: 'Solar orange direct conversion path button.',
      },
    ],
    palette: [
      { name: 'Basalt Charcoal', hex: '#16171B', role: 'Chiseled Foundation' },
      { name: 'Incandescent Amber', hex: '#FD8B00', role: 'Underglow Radiation' },
      { name: 'Frosted Glass', hex: 'rgba(255,255,255,0.08)', role: 'KPI Overlays' },
      { name: 'Off-White Ivory', hex: '#E3E2E6', role: 'Body Copy' },
    ],
    specs: {
      lighting: 'Under-stage solar floor illumination with soft shadow diffusion',
      rendering: 'Caustic refraction on frosted glass planes',
      typography: 'Space Grotesk Headline / Inter Numeric',
    },
  },
  {
    id: 'asset-03',
    vectorId: 'VECTOR IDENTIFIER: ASSET-03',
    title: 'Asset 03: The Paradigm Shift',
    subtitle: '“Same Business. Different Results.”',
    format: '3:4 Editorial Portrait',
    ratio: '3:4 Portrait (896x1200)',
    resolution: '896 × 1200 px',
    imageUrl:
      'https://lh3.googleusercontent.com/aida/AEtjO1Xmyr7QrprHVJG0XtnSx4IB_uHU1KK0j_bI1Tz1zXeL3x6VZ9bWDw74OcKtTV4j5qzNChfSb8q3MB51NXOfoPi_HnkEpygmXK3kOMXkFj9Ufdot1RKVRp8Wo-WdARtUFHUJxO6qsYS8x4oFEPPdm2rE8TCMNOeJYGNFnm-eTB46LYZ8tpJrIVWFFtUU5sS0QHvDWWhi2h8pZbQF4FqCCUNxVGRaWxrndDzpUKhwhkVx0vVo_OBA_NoD0kg',
    detailedDescription:
      'A high-contrast conceptual comparison juxtaposing a completely desaturated, monochrome legacy wireframe on the left against a luminous, sunlit radiant luxury e-commerce experience on the right. An energetic solar orange trajectory arrow guides user eye movement from stagnant failure to high-converting commercial vitality.',
    strategicPurpose:
      'Visual tear-down instantly dramatizing the business ROI of modern web architecture vs. legacy stagnation.',
    primaryIntent:
      'Tear-Down Conversion Proof. Concrete before-and-after psychological framing.',
    chromaticContrast:
      'High-Key Alabaster Light Studio vs. Desaturated Grayscale Wireframe.',
    commercialOutcome:
      'Direct proof mechanism establishing immediate agency ROI justification.',
    tags: [
      'MODERN & FAST ARCHITECTURE',
      'MOBILE FIRST OPTIMIZATION',
      '+340% CONVERSIONS',
    ],
    hotspots: [
      {
        x: 50,
        y: 16,
        title: 'Contrast Framing',
        note: 'Dual-state contrast immediately breaks client complacency with their legacy site.',
      },
      {
        x: 30,
        y: 45,
        title: 'Before: Stagnant Legacy',
        note: 'Outdated & slow, high bounce rates, losing 60%+ mobile traffic.',
      },
      {
        x: 75,
        y: 45,
        title: 'After: High-Velocity Storefront',
        note: 'Modern headless stack, sub-second LCP, +340% conversion uplift.',
      },
      {
        x: 28,
        y: 88,
        title: 'Upgrade Pathway',
        note: 'Single click initiates seamless multi-phase migration blueprint.',
      },
    ],
    palette: [
      { name: 'Alabaster Studio', hex: '#F2F2F5', role: 'High-Key Light Surface' },
      { name: 'Desaturated Slate', hex: '#4B4D54', role: 'Legacy Failure Tone' },
      { name: 'Solar Energy', hex: '#FF6B00', role: 'Transformation Vector' },
      { name: 'Emerald Validation', hex: '#10B981', role: 'Proof Metrics' },
    ],
    specs: {
      lighting: 'Studio dual-temperature softbox lighting setup',
      rendering: 'Split-tone compositing with directional motion vector',
      typography: 'Space Grotesk Balanced / Inter Metrics',
    },
  },
];

export interface ReelBeat {
  id: string;
  timeRange: string;
  startSec: number;
  endSec: number;
  label: string;
  headline: string;
  subtext: string;
  metrics: string;
  accentColor: string;
}

export const REEL_BEATS: ReelBeat[] = [
  {
    id: 'beat-1',
    timeRange: '00 - 03s',
    startSec: 0,
    endSec: 3.75,
    label: 'The Problem',
    headline: 'SLOW STOREFRONTS BLEED REVENUE',
    subtext: '4.2s mobile load time causes 53% immediate abandonment before first impression.',
    metrics: '-53% Bounce Dropoff',
    accentColor: '#EF4444',
  },
  {
    id: 'beat-2',
    timeRange: '03 - 07s',
    startSec: 3.75,
    endSec: 7.5,
    label: 'UI Redesign',
    headline: 'OBSIDIAN LUXURY MEETS CONVERSION CRO',
    subtext: 'Chiseled architecture, frictionless navigation, and deliberate psychological hierarchies.',
    metrics: '+340% Intent Uplift',
    accentColor: '#FF6B00',
  },
  {
    id: 'beat-3',
    timeRange: '07 - 11s',
    startSec: 7.5,
    endSec: 11.25,
    label: 'Tech & AI',
    headline: 'HEADLESS EDGE RUNTIME & PREDICTIVE AI',
    subtext: '0.6s global edge latency with smart personalized bundle engines.',
    metrics: '0.6s Global Edge Vitals',
    accentColor: '#FD8B00',
  },
  {
    id: 'beat-4',
    timeRange: '11 - 15s',
    startSec: 11.25,
    endSec: 15.0,
    label: 'Revenue Surge',
    headline: 'IDEAS ➔ DESIGN ➔ TECH ➔ GROWTH',
    subtext: 'Turn browsers into loyal repeat customers. Over $42M+ transacted capital scaled.',
    metrics: '$42M+ Revenue Scaled',
    accentColor: '#10B981',
  },
];

export interface CritiqueMatrixRow {
  id: string;
  name: string;
  vectorId: string;
  tagline: string;
  format: string;
  resolution: string;
  ratio: string;
  intent: string;
  funnelStage: 'Top-of-Funnel' | 'Mid-Funnel' | 'Bottom-of-Funnel' | 'Full-Funnel';
  contrast: string;
  outcome: string;
  critiqueNotes: string;
  lighthouseScore: number;
  conversionMultiplier: string;
  category: 'Square Brand' | 'Performance CRO' | 'Editorial Portrait' | 'Motion Reel';
}

export const CRITIQUE_MATRIX_DATA: CritiqueMatrixRow[] = [
  {
    id: 'row-1',
    name: 'Asset 01: The Conversion Diagnostic',
    vectorId: 'ASSET-01',
    tagline: '“Does It Sell?”',
    format: '1:1 Square Poster',
    resolution: '1024 × 1024',
    ratio: '1:1',
    intent: 'Top-of-Funnel Brand Disruption. Direct challenge to vanity agency redesigns.',
    funnelStage: 'Top-of-Funnel',
    contrast: 'Obsidian (#0A0A0C) vs. Radiant Amber (#FF6B00) edge luminescence.',
    outcome: '+340% Initial Qualified Brief Inquiries from Ecommerce CXOs.',
    critiqueNotes:
      'Flawless geometric podium framing. Isolates the core decision-maker friction point: aesthetic beauty without commercial velocity is dead capital.',
    lighthouseScore: 98,
    conversionMultiplier: '3.4x',
    category: 'Square Brand',
  },
  {
    id: 'row-2',
    name: 'Asset 02: Frictionless Checkout',
    vectorId: 'ASSET-02',
    tagline: '“Abandoned Carts Are Expensive”',
    format: '1:1 Square Poster',
    resolution: '1024 × 1024',
    ratio: '1:1',
    intent: 'Mid-Funnel Pain Validation. Targets revenue leakage and abandonment angst.',
    funnelStage: 'Mid-Funnel',
    contrast: 'Textured Basalt steps with glowing volumetric amber underglow and frosted glass.',
    outcome: '+44% Cart Recovery & +38% Verified AOV Acceleration.',
    critiqueNotes:
      'Heavy emotional resonant copywriting paired with tangible numeric proof chips. Frosted glassmorphism elevates perceived technical craftsmanship.',
    lighthouseScore: 99,
    conversionMultiplier: '1.44x',
    category: 'Performance CRO',
  },
  {
    id: 'row-3',
    name: 'Asset 03: The Paradigm Shift',
    vectorId: 'ASSET-03',
    tagline: '“Same Business. Different Results.”',
    format: '3:4 Editorial Portrait',
    resolution: '896 × 1200',
    ratio: '3:4',
    intent: 'Tear-Down Conversion Proof. Concrete before-and-after psychological framing.',
    funnelStage: 'Bottom-of-Funnel',
    contrast: 'High-Key Alabaster Light Studio vs. Desaturated Grayscale Wireframe.',
    outcome: 'Direct proof mechanism establishing immediate agency ROI justification.',
    critiqueNotes:
      'Psychological juxtaposition removes all ambiguity. The bright radiant storefront physically pulls the eye rightward toward the action button.',
    lighthouseScore: 97,
    conversionMultiplier: '3.4x',
    category: 'Editorial Portrait',
  },
  {
    id: 'row-4',
    name: 'Reel 01: Kinetic All-Services Reel',
    vectorId: 'REEL-01',
    tagline: '“Ideas ➔ Design ➔ Tech ➔ Growth”',
    format: '9:16 Vertical Motion',
    resolution: '1080 × 1920',
    ratio: '9:16',
    intent: 'Rapid Awareness & Social Proof. Built for algorithm-accelerated hooks.',
    funnelStage: 'Full-Funnel',
    contrast: 'Dynamic 60 FPS motion bursts, phosphor orange glyphs, deep graphite backgrounds.',
    outcome: '>82% 3-Second Hook Retention and high viral algorithmic amplification.',
    critiqueNotes:
      'Exact 3.75s quadruplet pacing matched to human dopamine reward cycles. Eliminates all ad fatigue through relentless value delivery.',
    lighthouseScore: 100,
    conversionMultiplier: '2.8x',
    category: 'Motion Reel',
  },
];
