export interface GPU {
  slug: string;
  name: string;
  brand: 'NVIDIA' | 'AMD' | 'Intel';
  series: string;
  architecture: string;
  releaseDate: string;
  msrp: number;
  currentPrice: number;
  vram: number;
  vramType: string;
  busWidth: number;
  baseClock: number;
  boostClock: number;
  cudaCores?: number;
  streamProcessors?: number;
  xeCores?: number;
  rayTracingCores?: number;
  tensorCores?: number;
  tdp: number;
  recommendedPSU: number;
  powerConnector: string;
  displayOutputs: string;
  maxResolution: string;
  // Benchmark scores (relative, out of 100)
  benchmarks: {
    gaming1080p: number;
    gaming1440p: number;
    gaming4k: number;
    rayTracing: number;
    productivity: number;
    aiMl: number;
  };
  // Use case ratings (1-10)
  ratings: {
    gaming: number;
    contentCreation: number;
    aiWorkloads: number;
    mining: number;
    valueForMoney: number;
    powerEfficiency: number;
  };
  tier: 'flagship' | 'high-end' | 'mid-range' | 'budget' | 'entry';
  summary: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
  imageUrl?: string;
}

export const gpus: GPU[] = [
  // ═══════════════════════════════════════════
  // NVIDIA RTX 50-Series (Blackwell)
  // ═══════════════════════════════════════════
  {
    slug: 'nvidia-rtx-5090',
    name: 'NVIDIA GeForce RTX 5090',
    brand: 'NVIDIA',
    series: 'RTX 50-Series',
    architecture: 'Blackwell',
    releaseDate: '2025-01-30',
    msrp: 1999,
    currentPrice: 2199,
    vram: 32,
    vramType: 'GDDR7',
    busWidth: 512,
    baseClock: 2017,
    boostClock: 2407,
    cudaCores: 21760,
    rayTracingCores: 170,
    tensorCores: 680,
    tdp: 575,
    recommendedPSU: 1000,
    powerConnector: '1x 16-pin (600W)',
    displayOutputs: '3x DP 2.1, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 100, gaming1440p: 100, gaming4k: 100, rayTracing: 100, productivity: 100, aiMl: 100 },
    ratings: { gaming: 10, contentCreation: 10, aiWorkloads: 10, mining: 7, valueForMoney: 5, powerEfficiency: 6 },
    tier: 'flagship',
    summary: 'The absolute pinnacle of consumer GPU performance. The RTX 5090 is NVIDIA\'s Blackwell-architecture flagship, delivering unmatched 4K and 8K gaming, the best ray tracing performance available, and incredible AI/ML acceleration with 32GB of GDDR7 memory.',
    pros: ['Unmatched performance in every category', '32GB GDDR7 on 512-bit bus', 'Best ray tracing and DLSS 4 support', 'Exceptional AI/ML performance', 'Multi-generation frame generation'],
    cons: ['Extremely expensive at $1,999 MSRP', 'Very high power consumption (575W TDP)', 'Requires beefy PSU and case', 'Overkill for 1080p gaming', 'Difficult to find at MSRP'],
    bestFor: ['4K/8K gaming enthusiasts', 'Professional content creators', 'AI researchers and ML engineers', 'No-compromise builds'],
  },
  {
    slug: 'nvidia-rtx-5080',
    name: 'NVIDIA GeForce RTX 5080',
    brand: 'NVIDIA',
    series: 'RTX 50-Series',
    architecture: 'Blackwell',
    releaseDate: '2025-01-30',
    msrp: 999,
    currentPrice: 1099,
    vram: 16,
    vramType: 'GDDR7',
    busWidth: 256,
    baseClock: 2010,
    boostClock: 2617,
    cudaCores: 10752,
    rayTracingCores: 84,
    tensorCores: 336,
    tdp: 360,
    recommendedPSU: 850,
    powerConnector: '1x 16-pin (600W)',
    displayOutputs: '3x DP 2.1, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 90, gaming1440p: 91, gaming4k: 88, rayTracing: 87, productivity: 85, aiMl: 78 },
    ratings: { gaming: 9, contentCreation: 9, aiWorkloads: 8, mining: 7, valueForMoney: 7, powerEfficiency: 8 },
    tier: 'high-end',
    summary: 'The RTX 5080 delivers near-flagship performance at half the price of the 5090. With 16GB of GDDR7 and Blackwell architecture, it excels at 4K gaming with DLSS 4 and offers excellent ray tracing performance for high-end builds.',
    pros: ['Excellent 4K gaming performance', 'DLSS 4 with multi-frame generation', 'Great ray tracing capabilities', 'More reasonable power draw than 5090', '16GB GDDR7 sufficient for most tasks'],
    cons: ['Still expensive at $999', 'Half the VRAM of 5090', 'Narrower 256-bit bus', 'Availability issues at launch'],
    bestFor: ['High-end 4K gaming', 'Content creation workflows', 'VR gaming', 'Enthusiast builds under $1,000'],
  },
  {
    slug: 'nvidia-rtx-5070-ti',
    name: 'NVIDIA GeForce RTX 5070 Ti',
    brand: 'NVIDIA',
    series: 'RTX 50-Series',
    architecture: 'Blackwell',
    releaseDate: '2025-03-06',
    msrp: 749,
    currentPrice: 799,
    vram: 16,
    vramType: 'GDDR7',
    busWidth: 256,
    baseClock: 1980,
    boostClock: 2452,
    cudaCores: 8960,
    rayTracingCores: 70,
    tensorCores: 280,
    tdp: 300,
    recommendedPSU: 750,
    powerConnector: '1x 16-pin (600W)',
    displayOutputs: '3x DP 2.1, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 85, gaming1440p: 86, gaming4k: 80, rayTracing: 80, productivity: 78, aiMl: 72 },
    ratings: { gaming: 9, contentCreation: 8, aiWorkloads: 7, mining: 6, valueForMoney: 7, powerEfficiency: 8 },
    tier: 'high-end',
    summary: 'The RTX 5070 Ti bridges the gap between the 5070 and 5080, offering stellar 1440p and strong 4K performance with DLSS 4. It\'s the sweet spot for gamers who want Blackwell features without the flagship price.',
    pros: ['Strong 1440p and 4K performance', 'DLSS 4 support', '16GB GDDR7 memory', 'Reasonable 300W TDP', 'Good ray tracing performance'],
    cons: ['Price premium over 5070', 'Incremental gain over 5070', 'Still uses 256-bit bus'],
    bestFor: ['1440p high-refresh gaming', '4K gaming with DLSS', 'Streaming and content creation', 'Balanced high-end builds'],
  },
  {
    slug: 'nvidia-rtx-5070',
    name: 'NVIDIA GeForce RTX 5070',
    brand: 'NVIDIA',
    series: 'RTX 50-Series',
    architecture: 'Blackwell',
    releaseDate: '2025-03-06',
    msrp: 549,
    currentPrice: 599,
    vram: 12,
    vramType: 'GDDR7',
    busWidth: 192,
    baseClock: 1962,
    boostClock: 2512,
    cudaCores: 6144,
    rayTracingCores: 48,
    tensorCores: 192,
    tdp: 250,
    recommendedPSU: 650,
    powerConnector: '1x 8-pin or 1x 16-pin',
    displayOutputs: '3x DP 2.1, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 82, gaming1440p: 80, gaming4k: 68, rayTracing: 72, productivity: 70, aiMl: 60 },
    ratings: { gaming: 8, contentCreation: 8, aiWorkloads: 6, mining: 6, valueForMoney: 8, powerEfficiency: 9 },
    tier: 'mid-range',
    summary: 'NVIDIA claims RTX 4090-level performance at $549. The RTX 5070 brings Blackwell architecture to the mid-range with DLSS 4 frame generation, making it the most compelling value proposition in the new lineup.',
    pros: ['RTX 4090-class performance (with DLSS 4)', 'Excellent price-to-performance', 'Low 250W TDP', 'DLSS 4 multi-frame generation', 'Great for 1440p gaming'],
    cons: ['Only 12GB VRAM', '192-bit memory bus', 'VRAM may limit future titles', 'Performance claims rely heavily on DLSS'],
    bestFor: ['1440p gaming', 'Value-conscious enthusiasts', 'First-time builders', 'Compact builds'],
  },
  {
    slug: 'nvidia-rtx-5060-ti',
    name: 'NVIDIA GeForce RTX 5060 Ti',
    brand: 'NVIDIA',
    series: 'RTX 50-Series',
    architecture: 'Blackwell',
    releaseDate: '2025-07-10',
    msrp: 399,
    currentPrice: 419,
    vram: 16,
    vramType: 'GDDR7',
    busWidth: 128,
    baseClock: 1890,
    boostClock: 2452,
    cudaCores: 4608,
    rayTracingCores: 36,
    tensorCores: 144,
    tdp: 180,
    recommendedPSU: 550,
    powerConnector: '1x 8-pin',
    displayOutputs: '3x DP 2.1, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 75, gaming1440p: 70, gaming4k: 52, rayTracing: 60, productivity: 60, aiMl: 45 },
    ratings: { gaming: 8, contentCreation: 7, aiWorkloads: 5, mining: 5, valueForMoney: 9, powerEfficiency: 9 },
    tier: 'mid-range',
    summary: 'The RTX 5060 Ti is the mainstream sweet spot of the Blackwell generation, offering 16GB of GDDR7 at a $399 price point. DLSS 4 dramatically extends its reach into 1440p territory and makes it a compelling 1080p powerhouse.',
    pros: ['16GB VRAM at $399', 'Very low power consumption', 'Excellent 1080p performance', 'DLSS 4 support', 'No adapter needed — single 8-pin'],
    cons: ['Narrow 128-bit bus', '4K gaming limited', 'Fewer CUDA cores', 'Raw rasterization modest vs higher tiers'],
    bestFor: ['1080p high-refresh gaming', '1440p gaming with DLSS', 'Budget-conscious builders', 'SFF/compact builds'],
  },
  {
    slug: 'nvidia-rtx-5060',
    name: 'NVIDIA GeForce RTX 5060',
    brand: 'NVIDIA',
    series: 'RTX 50-Series',
    architecture: 'Blackwell',
    releaseDate: '2025-08-15',
    msrp: 299,
    currentPrice: 309,
    vram: 8,
    vramType: 'GDDR7',
    busWidth: 128,
    baseClock: 1850,
    boostClock: 2370,
    cudaCores: 3072,
    rayTracingCores: 24,
    tensorCores: 96,
    tdp: 150,
    recommendedPSU: 500,
    powerConnector: '1x 8-pin',
    displayOutputs: '3x DP 2.1, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 65, gaming1440p: 55, gaming4k: 35, rayTracing: 48, productivity: 48, aiMl: 32 },
    ratings: { gaming: 7, contentCreation: 6, aiWorkloads: 4, mining: 4, valueForMoney: 9, powerEfficiency: 9 },
    tier: 'budget',
    summary: 'The most affordable Blackwell GPU brings DLSS 4 and ray tracing to the sub-$300 segment. With 8GB GDDR7 and efficient power draw, it\'s the entry ticket to current-gen gaming technology.',
    pros: ['Under $300', 'DLSS 4 capable', 'Very low power draw', 'Solid 1080p performer', 'Good for esports titles'],
    cons: ['Only 8GB VRAM', 'Struggles at 1440p native', 'Limited ray tracing', 'Not for content creation'],
    bestFor: ['Budget gaming builds', 'Esports gaming', 'HTPC builds', 'First gaming PC'],
  },

  // ═══════════════════════════════════════════
  // NVIDIA RTX 40-Series (Ada Lovelace)
  // ═══════════════════════════════════════════
  {
    slug: 'nvidia-rtx-4090',
    name: 'NVIDIA GeForce RTX 4090',
    brand: 'NVIDIA',
    series: 'RTX 40-Series',
    architecture: 'Ada Lovelace',
    releaseDate: '2022-10-12',
    msrp: 1599,
    currentPrice: 1799,
    vram: 24,
    vramType: 'GDDR6X',
    busWidth: 384,
    baseClock: 2235,
    boostClock: 2520,
    cudaCores: 16384,
    rayTracingCores: 128,
    tensorCores: 512,
    tdp: 450,
    recommendedPSU: 850,
    powerConnector: '1x 16-pin (600W)',
    displayOutputs: '3x DP 1.4a, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 88, gaming1440p: 89, gaming4k: 85, rayTracing: 85, productivity: 88, aiMl: 82 },
    ratings: { gaming: 10, contentCreation: 10, aiWorkloads: 9, mining: 8, valueForMoney: 6, powerEfficiency: 7 },
    tier: 'flagship',
    summary: 'The previous-gen flagship remains an incredible GPU. The RTX 4090 with 24GB GDDR6X and Ada Lovelace architecture still delivers outstanding performance across all workloads, often available at better prices than the new RTX 5090.',
    pros: ['Still incredibly powerful', '24GB VRAM', 'Mature driver support', 'Better availability than 50-series', 'Excellent for professional workloads'],
    cons: ['No DLSS 4 support', 'Superseded by RTX 5090', 'Still very expensive', 'High power draw', 'Large physical size'],
    bestFor: ['4K gaming', 'AI/ML workloads', 'Professional 3D rendering', 'Those who want proven hardware'],
  },
  {
    slug: 'nvidia-rtx-4080-super',
    name: 'NVIDIA GeForce RTX 4080 SUPER',
    brand: 'NVIDIA',
    series: 'RTX 40-Series',
    architecture: 'Ada Lovelace',
    releaseDate: '2024-01-31',
    msrp: 999,
    currentPrice: 899,
    vram: 16,
    vramType: 'GDDR6X',
    busWidth: 256,
    baseClock: 2290,
    boostClock: 2550,
    cudaCores: 10240,
    rayTracingCores: 80,
    tensorCores: 320,
    tdp: 320,
    recommendedPSU: 750,
    powerConnector: '1x 16-pin (600W)',
    displayOutputs: '3x DP 1.4a, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 82, gaming1440p: 83, gaming4k: 76, rayTracing: 78, productivity: 80, aiMl: 68 },
    ratings: { gaming: 9, contentCreation: 9, aiWorkloads: 7, mining: 7, valueForMoney: 7, powerEfficiency: 8 },
    tier: 'high-end',
    summary: 'The RTX 4080 SUPER offers excellent 4K gaming performance with 16GB VRAM. As 50-series cards arrive, the 4080 SUPER presents strong value on the used market for those who don\'t need the latest generation.',
    pros: ['Excellent 4K gaming', 'Mature drivers', 'Dropping prices', '16GB VRAM', 'Good power efficiency'],
    cons: ['No DLSS 4', 'Being superseded', 'Still $900+', '256-bit bus'],
    bestFor: ['4K gaming', 'Content creation', 'Those seeking deals on last gen'],
  },
  {
    slug: 'nvidia-rtx-4070-ti-super',
    name: 'NVIDIA GeForce RTX 4070 Ti SUPER',
    brand: 'NVIDIA',
    series: 'RTX 40-Series',
    architecture: 'Ada Lovelace',
    releaseDate: '2024-01-24',
    msrp: 799,
    currentPrice: 749,
    vram: 16,
    vramType: 'GDDR6X',
    busWidth: 256,
    baseClock: 2340,
    boostClock: 2610,
    cudaCores: 8448,
    rayTracingCores: 66,
    tensorCores: 264,
    tdp: 285,
    recommendedPSU: 700,
    powerConnector: '1x 16-pin (600W)',
    displayOutputs: '3x DP 1.4a, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 78, gaming1440p: 79, gaming4k: 68, rayTracing: 72, productivity: 72, aiMl: 60 },
    ratings: { gaming: 8, contentCreation: 8, aiWorkloads: 6, mining: 6, valueForMoney: 7, powerEfficiency: 8 },
    tier: 'high-end',
    summary: 'The RTX 4070 Ti SUPER is a strong 1440p and capable 4K card with 16GB VRAM. Prices are dropping as 50-series arrives, making it an attractive option for those who want high-end Ada Lovelace performance.',
    pros: ['Strong 1440p performance', '16GB VRAM', 'Prices dropping', 'Mature platform', 'Reasonable power draw'],
    cons: ['Superseded by 5070 Ti', 'No DLSS 4', 'Still $700+'],
    bestFor: ['1440p high-refresh gaming', '4K gaming with DLSS 3', 'Value hunters'],
  },
  {
    slug: 'nvidia-rtx-4070-super',
    name: 'NVIDIA GeForce RTX 4070 SUPER',
    brand: 'NVIDIA',
    series: 'RTX 40-Series',
    architecture: 'Ada Lovelace',
    releaseDate: '2024-01-17',
    msrp: 599,
    currentPrice: 549,
    vram: 12,
    vramType: 'GDDR6X',
    busWidth: 192,
    baseClock: 1980,
    boostClock: 2475,
    cudaCores: 7168,
    rayTracingCores: 56,
    tensorCores: 224,
    tdp: 220,
    recommendedPSU: 650,
    powerConnector: '1x 8-pin or 1x 16-pin',
    displayOutputs: '3x DP 1.4a, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 74, gaming1440p: 72, gaming4k: 58, rayTracing: 64, productivity: 65, aiMl: 50 },
    ratings: { gaming: 8, contentCreation: 7, aiWorkloads: 5, mining: 5, valueForMoney: 8, powerEfficiency: 9 },
    tier: 'mid-range',
    summary: 'The RTX 4070 SUPER remains one of the best value GPUs in the Ada Lovelace lineup. Excellent at 1440p and capable at 4K with DLSS 3, it\'s an outstanding choice as prices continue to decrease.',
    pros: ['Great 1440p gaming', 'Excellent power efficiency', 'Falling prices', 'DLSS 3 support', 'Compact designs available'],
    cons: ['Only 12GB VRAM', '192-bit bus', 'No DLSS 4', 'Superseded by RTX 5070'],
    bestFor: ['1440p gaming', 'Value-focused builds', 'SFF builds', 'Previous-gen bargain hunters'],
  },
  {
    slug: 'nvidia-rtx-4060-ti',
    name: 'NVIDIA GeForce RTX 4060 Ti',
    brand: 'NVIDIA',
    series: 'RTX 40-Series',
    architecture: 'Ada Lovelace',
    releaseDate: '2023-05-24',
    msrp: 399,
    currentPrice: 369,
    vram: 8,
    vramType: 'GDDR6',
    busWidth: 128,
    baseClock: 2310,
    boostClock: 2535,
    cudaCores: 4352,
    rayTracingCores: 34,
    tensorCores: 136,
    tdp: 160,
    recommendedPSU: 550,
    powerConnector: '1x 8-pin',
    displayOutputs: '3x DP 1.4a, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 65, gaming1440p: 58, gaming4k: 38, rayTracing: 50, productivity: 50, aiMl: 35 },
    ratings: { gaming: 7, contentCreation: 6, aiWorkloads: 4, mining: 4, valueForMoney: 7, powerEfficiency: 9 },
    tier: 'mid-range',
    summary: 'A solid 1080p card that handles 1440p with DLSS 3. The 8GB VRAM is its main limitation in 2026, but at current prices below MSRP, it offers decent value for budget-conscious gamers.',
    pros: ['Low power consumption', 'Good 1080p performance', 'Compact form factor', 'Prices below MSRP', 'DLSS 3 support'],
    cons: ['Only 8GB VRAM', '128-bit bus bottleneck', 'Struggles at 1440p native', 'Aging in 2026'],
    bestFor: ['1080p gaming on a budget', 'Small form factor PCs', 'HTPC builds'],
  },
  {
    slug: 'nvidia-rtx-4060',
    name: 'NVIDIA GeForce RTX 4060',
    brand: 'NVIDIA',
    series: 'RTX 40-Series',
    architecture: 'Ada Lovelace',
    releaseDate: '2023-06-29',
    msrp: 299,
    currentPrice: 279,
    vram: 8,
    vramType: 'GDDR6',
    busWidth: 128,
    baseClock: 1830,
    boostClock: 2460,
    cudaCores: 3072,
    rayTracingCores: 24,
    tensorCores: 96,
    tdp: 115,
    recommendedPSU: 500,
    powerConnector: '1x 8-pin',
    displayOutputs: '3x DP 1.4a, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 58, gaming1440p: 48, gaming4k: 28, rayTracing: 40, productivity: 42, aiMl: 28 },
    ratings: { gaming: 7, contentCreation: 5, aiWorkloads: 3, mining: 3, valueForMoney: 8, powerEfficiency: 10 },
    tier: 'budget',
    summary: 'The most popular GPU by market share. The RTX 4060 is the gateway to ray tracing and DLSS 3 at a budget-friendly price. Best suited for 1080p gaming where it delivers smooth framerates in most titles.',
    pros: ['Very affordable', 'Incredibly power efficient (115W)', 'DLSS 3 support', 'Most popular GPU sold', 'Tiny cards available'],
    cons: ['8GB VRAM limiting', '128-bit bus', 'Not great at 1440p', 'Modest raw performance'],
    bestFor: ['Budget 1080p gaming', 'First gaming PC', 'Laptop replacements', 'Extremely power-limited builds'],
  },

  // ═══════════════════════════════════════════
  // AMD RX 9000-Series (RDNA 4)
  // ═══════════════════════════════════════════
  {
    slug: 'amd-rx-9070-xt',
    name: 'AMD Radeon RX 9070 XT',
    brand: 'AMD',
    series: 'RX 9000-Series',
    architecture: 'RDNA 4',
    releaseDate: '2025-03-12',
    msrp: 549,
    currentPrice: 579,
    vram: 16,
    vramType: 'GDDR6',
    busWidth: 256,
    baseClock: 1679,
    boostClock: 2620,
    streamProcessors: 4096,
    rayTracingCores: 64,
    tdp: 300,
    recommendedPSU: 750,
    powerConnector: '2x 8-pin',
    displayOutputs: '3x DP 2.1, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 80, gaming1440p: 78, gaming4k: 65, rayTracing: 68, productivity: 68, aiMl: 45 },
    ratings: { gaming: 8, contentCreation: 7, aiWorkloads: 5, mining: 6, valueForMoney: 9, powerEfficiency: 8 },
    tier: 'high-end',
    summary: 'AMD\'s RDNA 4 flagship delivers RTX 4080-class performance at $549. The RX 9070 XT is the value king of this generation, offering 16GB VRAM and excellent rasterization performance, though ray tracing still trails NVIDIA.',
    pros: ['Outstanding price-to-performance', '16GB VRAM at $549', 'Excellent rasterization', 'RDNA 4 ray tracing improvements', 'Strong 1440p and 4K performance'],
    cons: ['Ray tracing behind NVIDIA', 'No DLSS (uses FSR 4)', 'FSR quality debated vs DLSS', 'Higher power draw than expected', 'Software ecosystem less mature'],
    bestFor: ['1440p and 4K gaming', 'Value-focused high-end builds', 'Linux users', 'Those who prioritize rasterization'],
  },
  {
    slug: 'amd-rx-9070',
    name: 'AMD Radeon RX 9070',
    brand: 'AMD',
    series: 'RX 9000-Series',
    architecture: 'RDNA 4',
    releaseDate: '2025-03-12',
    msrp: 499,
    currentPrice: 509,
    vram: 16,
    vramType: 'GDDR6',
    busWidth: 256,
    baseClock: 1554,
    boostClock: 2494,
    streamProcessors: 3584,
    rayTracingCores: 56,
    tdp: 250,
    recommendedPSU: 650,
    powerConnector: '2x 8-pin',
    displayOutputs: '3x DP 2.1, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 75, gaming1440p: 73, gaming4k: 58, rayTracing: 60, productivity: 62, aiMl: 38 },
    ratings: { gaming: 8, contentCreation: 7, aiWorkloads: 4, mining: 6, valueForMoney: 9, powerEfficiency: 8 },
    tier: 'mid-range',
    summary: 'The RX 9070 offers near-9070 XT performance for $50 less, making it one of the best value GPUs available. 16GB VRAM ensures longevity, and RDNA 4 brings meaningful improvements to ray tracing.',
    pros: ['Excellent value at $499', '16GB VRAM', 'Close to 9070 XT performance', 'Lower power than XT', 'Great for 1440p'],
    cons: ['Still behind NVIDIA in ray tracing', 'FSR 4 vs DLSS 4 debate', 'Slightly slower than XT in demanding titles'],
    bestFor: ['1440p gaming', 'Value-focused builds', 'Those who want 16GB VRAM on a budget'],
  },
  {
    slug: 'amd-rx-9060-xt',
    name: 'AMD Radeon RX 9060 XT',
    brand: 'AMD',
    series: 'RX 9000-Series',
    architecture: 'RDNA 4',
    releaseDate: '2025-09-15',
    msrp: 329,
    currentPrice: 339,
    vram: 16,
    vramType: 'GDDR6',
    busWidth: 128,
    baseClock: 1520,
    boostClock: 2400,
    streamProcessors: 2048,
    rayTracingCores: 32,
    tdp: 150,
    recommendedPSU: 550,
    powerConnector: '1x 8-pin',
    displayOutputs: '3x DP 2.1, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 62, gaming1440p: 55, gaming4k: 35, rayTracing: 42, productivity: 45, aiMl: 22 },
    ratings: { gaming: 7, contentCreation: 6, aiWorkloads: 3, mining: 5, valueForMoney: 10, powerEfficiency: 9 },
    tier: 'budget',
    summary: 'The RX 9060 XT is the budget king, offering 16GB VRAM at $329 — a rarity at this price point. Excellent for 1080p and decent 1440p gaming with FSR 4, it demolishes the competition on value per dollar.',
    pros: ['16GB VRAM at $329', 'Best value GPU available', 'Great 1080p performance', 'Low power consumption', 'FSR 4 support'],
    cons: ['128-bit bus limits bandwidth', 'Modest 4K performance', 'Ray tracing is basic', 'Less mature software stack'],
    bestFor: ['Budget gaming', '1080p high-refresh', 'Those who need VRAM on a budget', 'Linux gaming'],
  },

  // ═══════════════════════════════════════════
  // AMD RX 7000-Series (RDNA 3)
  // ═══════════════════════════════════════════
  {
    slug: 'amd-rx-7900-xtx',
    name: 'AMD Radeon RX 7900 XTX',
    brand: 'AMD',
    series: 'RX 7000-Series',
    architecture: 'RDNA 3',
    releaseDate: '2022-12-13',
    msrp: 999,
    currentPrice: 799,
    vram: 24,
    vramType: 'GDDR6',
    busWidth: 384,
    baseClock: 1855,
    boostClock: 2499,
    streamProcessors: 6144,
    rayTracingCores: 96,
    tdp: 355,
    recommendedPSU: 800,
    powerConnector: '2x 8-pin',
    displayOutputs: '3x DP 2.1, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 80, gaming1440p: 80, gaming4k: 72, rayTracing: 65, productivity: 72, aiMl: 42 },
    ratings: { gaming: 9, contentCreation: 8, aiWorkloads: 5, mining: 7, valueForMoney: 8, powerEfficiency: 7 },
    tier: 'high-end',
    summary: 'The previous-gen AMD flagship is now available at significant discounts. With 24GB VRAM and strong rasterization, the 7900 XTX is a compelling option for those who want lots of VRAM at a reasonable price.',
    pros: ['24GB VRAM', 'Excellent rasterization', 'Significant price drops', 'Great for 4K', 'No expensive adapter needed'],
    cons: ['Weaker ray tracing than NVIDIA', 'No FSR 4', 'Being superseded by RDNA 4', 'Higher power draw'],
    bestFor: ['4K gaming on a budget', 'VRAM-heavy workloads', 'Content creation', 'Linux users'],
  },
  {
    slug: 'amd-rx-7900-gre',
    name: 'AMD Radeon RX 7900 GRE',
    brand: 'AMD',
    series: 'RX 7000-Series',
    architecture: 'RDNA 3',
    releaseDate: '2024-02-27',
    msrp: 549,
    currentPrice: 479,
    vram: 16,
    vramType: 'GDDR6',
    busWidth: 256,
    baseClock: 1880,
    boostClock: 2245,
    streamProcessors: 5120,
    rayTracingCores: 80,
    tdp: 260,
    recommendedPSU: 700,
    powerConnector: '2x 8-pin',
    displayOutputs: '3x DP 2.1, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 72, gaming1440p: 70, gaming4k: 58, rayTracing: 55, productivity: 60, aiMl: 35 },
    ratings: { gaming: 8, contentCreation: 7, aiWorkloads: 4, mining: 6, valueForMoney: 9, powerEfficiency: 8 },
    tier: 'mid-range',
    summary: 'The "Golden Rabbit Edition" is a hidden gem — 16GB VRAM with strong 1440p and capable 4K performance at under $500. One of the best value propositions in the current market for rasterization-focused gamers.',
    pros: ['Incredible value under $500', '16GB VRAM', 'Strong 1440p gaming', 'Reasonable power draw', 'Capable 4K with FSR'],
    cons: ['Ray tracing trails NVIDIA', 'Limited availability in some regions', 'No FSR 4'],
    bestFor: ['1440p gaming on a budget', '4K gaming with FSR', 'Value hunters'],
  },
  {
    slug: 'amd-rx-7800-xt',
    name: 'AMD Radeon RX 7800 XT',
    brand: 'AMD',
    series: 'RX 7000-Series',
    architecture: 'RDNA 3',
    releaseDate: '2023-09-06',
    msrp: 499,
    currentPrice: 449,
    vram: 16,
    vramType: 'GDDR6',
    busWidth: 256,
    baseClock: 1295,
    boostClock: 2430,
    streamProcessors: 3840,
    rayTracingCores: 60,
    tdp: 263,
    recommendedPSU: 700,
    powerConnector: '2x 8-pin',
    displayOutputs: '3x DP 2.1, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 70, gaming1440p: 68, gaming4k: 52, rayTracing: 50, productivity: 55, aiMl: 30 },
    ratings: { gaming: 8, contentCreation: 6, aiWorkloads: 3, mining: 5, valueForMoney: 9, powerEfficiency: 8 },
    tier: 'mid-range',
    summary: 'The RX 7800 XT is a fan-favorite 1440p GPU with 16GB VRAM. At current discounted prices it delivers outstanding value and has proven itself as a reliable workhorse for mainstream gaming.',
    pros: ['16GB VRAM', 'Excellent 1440p performance', 'Great value at current prices', 'Proven reliability', 'Good Linux support'],
    cons: ['Weaker ray tracing', 'Being superseded', 'No FSR 4', 'Limited 4K capability'],
    bestFor: ['1440p gaming', 'Budget-conscious builds', 'Linux gaming'],
  },
  {
    slug: 'amd-rx-7600',
    name: 'AMD Radeon RX 7600',
    brand: 'AMD',
    series: 'RX 7000-Series',
    architecture: 'RDNA 3',
    releaseDate: '2023-05-25',
    msrp: 269,
    currentPrice: 239,
    vram: 8,
    vramType: 'GDDR6',
    busWidth: 128,
    baseClock: 1720,
    boostClock: 2655,
    streamProcessors: 2048,
    rayTracingCores: 32,
    tdp: 165,
    recommendedPSU: 550,
    powerConnector: '1x 8-pin',
    displayOutputs: '3x DP 2.1, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 55, gaming1440p: 42, gaming4k: 22, rayTracing: 32, productivity: 38, aiMl: 18 },
    ratings: { gaming: 7, contentCreation: 5, aiWorkloads: 2, mining: 4, valueForMoney: 9, powerEfficiency: 8 },
    tier: 'budget',
    summary: 'The RX 7600 is one of the most affordable GPUs capable of modern gaming. At under $250, it handles 1080p gaming well and makes an excellent entry point into PC gaming.',
    pros: ['Very affordable', 'Good 1080p gaming', 'Low power consumption', 'Compact cards available', 'Great for esports'],
    cons: ['Only 8GB VRAM', '128-bit bus', 'Struggles beyond 1080p', 'Limited future-proofing'],
    bestFor: ['Budget 1080p gaming', 'Esports titles', 'First gaming PC', 'HTPC builds'],
  },

  // ═══════════════════════════════════════════
  // Intel Arc (Battlemage)
  // ═══════════════════════════════════════════
  {
    slug: 'intel-arc-b580',
    name: 'Intel Arc B580',
    brand: 'Intel',
    series: 'Arc B-Series',
    architecture: 'Battlemage (Xe2)',
    releaseDate: '2024-12-12',
    msrp: 249,
    currentPrice: 249,
    vram: 12,
    vramType: 'GDDR6',
    busWidth: 192,
    baseClock: 1800,
    boostClock: 2670,
    xeCores: 20,
    rayTracingCores: 20,
    tdp: 190,
    recommendedPSU: 600,
    powerConnector: '1x 8-pin',
    displayOutputs: '3x DP 2.0, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 58, gaming1440p: 48, gaming4k: 28, rayTracing: 38, productivity: 42, aiMl: 25 },
    ratings: { gaming: 7, contentCreation: 5, aiWorkloads: 3, mining: 2, valueForMoney: 10, powerEfficiency: 7 },
    tier: 'budget',
    summary: 'Intel\'s Battlemage B580 disrupted the budget GPU market with 12GB VRAM at $249. It competes directly with the RTX 4060 and RX 7600, often winning on price-to-performance, though driver maturity remains a consideration.',
    pros: ['12GB VRAM at $249', 'Competitive with RTX 4060', 'XeSS upscaling support', 'Great value proposition', 'AV1 encoding'],
    cons: ['Driver maturity concerns', 'Less game optimization', 'No DLSS or FSR', 'Limited ecosystem', 'Newer brand in GPU space'],
    bestFor: ['Budget gaming', 'Those who want more VRAM for less', '1080p gaming', 'Media encoding'],
  },
  {
    slug: 'intel-arc-b570',
    name: 'Intel Arc B570',
    brand: 'Intel',
    series: 'Arc B-Series',
    architecture: 'Battlemage (Xe2)',
    releaseDate: '2025-01-16',
    msrp: 219,
    currentPrice: 219,
    vram: 10,
    vramType: 'GDDR6',
    busWidth: 160,
    baseClock: 1750,
    boostClock: 2500,
    xeCores: 18,
    rayTracingCores: 18,
    tdp: 150,
    recommendedPSU: 500,
    powerConnector: '1x 8-pin',
    displayOutputs: '3x DP 2.0, 1x HDMI 2.1',
    maxResolution: '7680x4320 (8K)',
    benchmarks: { gaming1080p: 50, gaming1440p: 40, gaming4k: 20, rayTracing: 30, productivity: 35, aiMl: 20 },
    ratings: { gaming: 6, contentCreation: 5, aiWorkloads: 2, mining: 2, valueForMoney: 9, powerEfficiency: 8 },
    tier: 'entry',
    summary: 'The most affordable Battlemage GPU at $219 with 10GB VRAM. The Arc B570 targets the entry-level segment and delivers surprising performance for its price, making it a solid choice for budget-conscious gamers.',
    pros: ['Very affordable at $219', '10GB VRAM — exceptional at this price', 'Good 1080p gaming', 'Low power consumption', 'AV1 encode/decode'],
    cons: ['Entry-level performance', 'Driver concerns', 'Limited ray tracing', 'Narrow 160-bit bus'],
    bestFor: ['Entry-level gaming', 'Students on a budget', 'HTPC builds', 'Media PCs'],
  },
];

// ═══════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════

export function getGPUBySlug(slug: string): GPU | undefined {
  return gpus.find(g => g.slug === slug);
}

export function getGPUsByBrand(brand: GPU['brand']): GPU[] {
  return gpus.filter(g => g.brand === brand);
}

export function getGPUsByTier(tier: GPU['tier']): GPU[] {
  return gpus.filter(g => g.tier === tier);
}

export function getGPUsBySeries(series: string): GPU[] {
  return gpus.filter(g => g.series === series);
}

export function getSimilarGPUs(gpu: GPU, limit = 4): GPU[] {
  return gpus
    .filter(g => g.slug !== gpu.slug)
    .map(g => ({
      gpu: g,
      score:
        Math.abs(g.currentPrice - gpu.currentPrice) * -0.01 +
        (g.tier === gpu.tier ? 10 : 0) +
        Math.abs(g.benchmarks.gaming1440p - gpu.benchmarks.gaming1440p) * -0.1,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(g => g.gpu);
}

export function getTopComparisons(): { gpu1: GPU; gpu2: GPU; slug: string }[] {
  const pairs: [string, string][] = [
    ['nvidia-rtx-5090', 'nvidia-rtx-4090'],
    ['nvidia-rtx-5080', 'nvidia-rtx-5070-ti'],
    ['nvidia-rtx-5070', 'amd-rx-9070-xt'],
    ['nvidia-rtx-5070-ti', 'amd-rx-9070-xt'],
    ['amd-rx-9070-xt', 'amd-rx-9070'],
    ['nvidia-rtx-5060-ti', 'amd-rx-9060-xt'],
    ['nvidia-rtx-5070', 'nvidia-rtx-4070-ti-super'],
    ['nvidia-rtx-5060', 'intel-arc-b580'],
    ['amd-rx-9070-xt', 'nvidia-rtx-4080-super'],
    ['intel-arc-b580', 'amd-rx-7600'],
    ['nvidia-rtx-5080', 'nvidia-rtx-4090'],
    ['nvidia-rtx-4060', 'amd-rx-7600'],
    ['nvidia-rtx-5060-ti', 'nvidia-rtx-4060-ti'],
    ['amd-rx-7900-xtx', 'nvidia-rtx-4080-super'],
    ['amd-rx-7800-xt', 'amd-rx-7900-gre'],
    ['nvidia-rtx-5070', 'nvidia-rtx-4070-super'],
    ['intel-arc-b580', 'nvidia-rtx-4060'],
    ['amd-rx-9060-xt', 'nvidia-rtx-4060-ti'],
    ['nvidia-rtx-5090', 'nvidia-rtx-5080'],
    ['amd-rx-9070', 'nvidia-rtx-5060-ti'],
  ];

  return pairs
    .map(([s1, s2]) => {
      const gpu1 = getGPUBySlug(s1);
      const gpu2 = getGPUBySlug(s2);
      if (!gpu1 || !gpu2) return null;
      return { gpu1, gpu2, slug: `${s1}-vs-${s2}` };
    })
    .filter((p): p is NonNullable<typeof p> => p !== null);
}

export function getAllComparisonSlugs(): string[] {
  return getTopComparisons().map(c => c.slug);
}

export function getBrandColor(brand: GPU['brand']): string {
  switch (brand) {
    case 'NVIDIA': return '#76b900';
    case 'AMD': return '#ed1c24';
    case 'Intel': return '#0071c5';
  }
}

export function getTierLabel(tier: GPU['tier']): string {
  switch (tier) {
    case 'flagship': return 'Flagship';
    case 'high-end': return 'High-End';
    case 'mid-range': return 'Mid-Range';
    case 'budget': return 'Budget';
    case 'entry': return 'Entry-Level';
  }
}

export function formatPrice(price: number): string {
  return `$${price.toLocaleString()}`;
}
