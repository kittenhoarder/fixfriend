/**
 * Acquirer Portal — Content Configuration
 *
 * All copy lives here. Components reference content keys only, never hardcoded
 * strings, so account-specific versions can be forked by swapping this file.
 */

// ── Hero Section ──────────────────────────────────────────────────────────────

export const HERO = {
  eyebrow: 'CONFIDENTIAL — STRATEGIC ACQUISITION BRIEF',
  headline: 'The Workflow Control Layer for Change in Capital Markets',
  subheadline:
    'SynthAgents automates the change-response loop that incumbent vendors have built workarounds for, but never productised — compressing weeks of manual coordination into bounded autonomous execution with a continuous audit trail.',
  ctaLabel: 'Request Data Room Access',
  ctaEmail: '',
  confidentialityNote:
    'This document is strictly confidential and intended solely for the named recipient. Do not distribute.',
}

// ── Suite Overview Section ────────────────────────────────────────────────────

export const SUITE = {
  eyebrow: 'PRODUCT SUITE',
  narrativeParagraph:
    'FIXFriend, DataRights, and Declare are three focused workflow products built on a shared agent runtime — SynthAgents. Each product does one job well: ingest a dense operational artifact, surface what matters, generate a reviewed output, and deliver it into the systems teams already use. Together they own the full change-intelligence loop for trading technology and market-data operations: detect a change, assess its impact and cost, execute a response, then attest compliance. No single incumbent owns all four steps. That gap is the acquisition thesis.',
  synergyCallout:
    'Detect change → Assess impact & cost → Execute response → Attest compliance. The suite closes the loop that every trading technology team currently closes manually.',
  products: [
    {
      id: 'fixfriend',
      name: 'FIXFriend',
      status: 'live',
      tagline: 'Venue change response & certification workflow',
      ipSummary:
        'Proprietary venue-notice extraction pipeline; structured change-pack schema normalising FIX specs, broker bulletins, and venue portals into a single reviewed artifact format; Expoty context core that compounds institutional memory across every change processed.',
      revenueLever:
        '€22.5K pilot → €120K ACV production → €150K–€250K+ expansion. Attaches to any connectivity or OMS install as a workflow upsell. At target account density under acquirer distribution: €500K–€1.5M ARR within 24 months without new sales infrastructure.',
      integrationAngle:
        'Delivers outputs into Jira, Confluence, Slack, Teams, Git, and email — no new toolchain required. Designed to slot directly onto Broadridge/BTCS, ION/Fidessa, or TT connectivity installs as a bounded workflow layer above existing FIX infrastructure.',
    },
    {
      id: 'datarights',
      name: 'DataRights',
      status: 'in-development',
      tagline: 'Market-data rights & cost-impact assessment',
      ipSummary:
        'Licensed-entitlement graph model mapping data usage to required rights; incremental cost delta engine that prices the gap between current and required entitlements; structured open-question audit trail for vendor negotiation and internal sign-off.',
      revenueLever:
        'Natural compliance upsell to any acquirer in the market-data billing, reporting, or OMS space. Every firm consuming market data faces recurring entitlement review cycles — DataRights converts ad-hoc manual assessment into a governed annual workflow.',
      integrationAngle:
        'Feeds entitlement snapshots directly into the Declare attestation layer, creating a closed evidence chain from data usage to signed declaration. Augments existing MDM and DROIT-adjacent platforms without replacing them.',
    },
    {
      id: 'declare',
      name: 'Declare',
      status: 'roadmap',
      tagline: 'Declaration, attestation & audit-evidence workflows',
      ipSummary:
        'Structured evidence schema for regulatory declaration and attestation; automated workflow engine routing declarations to the correct internal signatory; continuous audit-trail export in machine-readable format for regulatory submission and internal governance.',
      revenueLever:
        'DORA (in force January 2025) and MiFID II RTS 6 mandate continuous, evidenced control over ICT changes and trading systems. Declare converts a retroactive scramble into a recurring SaaS workflow — recurring evidence-storage and audit-export fees on top of workflow licence.',
      integrationAngle:
        'Receives structured inputs from FIXFriend change packs and DataRights entitlement snapshots, closing the compliance loop from change detection to signed attestation in a single governed pipeline.',
    },
    {
      id: 'synthagent',
      name: 'SynthAgent Platform',
      status: 'live',
      tagline: 'Bounded agentic execution for structured change domains',
      ipSummary:
        'Seven-agent orchestration architecture (Monitor, Source, Impact, Planning, Execution, Comms, Audit) with domain-scoped execution rules; sandboxed execution with a hard UAT gate — never writes to production; Expoty context core providing semantic retrieval with immutable source IDs and timestamps.',
      revenueLever:
        'Platform licence for an acquirer to embed agent primitives across their product portfolio. Each new workflow domain — connectivity change, data rights, attestation, regulatory reporting — is a new SKU on the same runtime, expanding TAM without rebuilding infrastructure.',
      integrationAngle:
        "Deployable on-prem, in a managed cloud environment, or as an embedded agent runtime within an acquirer's existing platform. Model routing is configurable and auditable; no dependency on a single external AI provider.",
    },
  ],
}

// ── Investment Thesis Section ─────────────────────────────────────────────────

export const THESIS = {
  eyebrow: 'WHY NOW',
  headline: 'Three converging forces make 2025–2026 the acquisition window',
  pillars: [
    {
      id: 'regulatory',
      label: 'Regulatory Tailwind',
      icon: 'Scale',
      stat: 'MiFID II RTS 6 + DORA (in force Jan 2025) + EU AI Act (Aug 2026): three overlapping mandates requiring continuous, machine-readable evidence of control over trading systems — with personal liability up to €1M for senior management under DORA.',
      detail:
        'DORA entered application on 17 January 2025 with no transition period. Every protocol change is now a regulated ICT event requiring documented management, testing, and validation. MiFID II RTS 6 independently requires evidence of system testing after protocol changes. The EU AI Act adds a third governance layer from August 2026. Firms that cannot produce continuous, structured compliance evidence are already exposed — and the manual workarounds in place today do not scale.',
    },
    {
      id: 'market',
      label: 'Market Timing',
      icon: 'TrendingUp',
      stat: 'Trading technology software: USD 11.3B market (2024) growing at 20% CAGR through 2032. ~9,000 regulated operators globally. €900M TAM for automated change-readiness at target ACV.',
      detail:
        'The beachhead is vendor-side change response: ~800–1,200 multi-venue connected sell-side firms in EU/UK/US, each managing 5–30 venue relationships and 25–60 change events per year. Each change event currently takes several weeks of manual coordination across product, engineering, QA, and compliance. The same loop applies to market-data operations (DataRights) and attestation (Declare), expanding the addressable opportunity without requiring a different buyer or distribution channel.',
    },
    {
      id: 'ip',
      label: 'IP Moat',
      icon: 'Lock',
      stat: 'Proprietary venue-notice corpus + Expoty context core = 18-month head start on any greenfield build, compounding with every change processed.',
      detail:
        'The structural advantage is not the agent orchestration — it is the indexed, normalised corpus of venue notices, FIX specs, and change history that makes the impact and planning agents domain-accurate from day one. Every change processed adds to institutional memory. A new entrant starts cold; SynthAgents starts with every prior change already indexed and retrievable. General-purpose agent platforms (Tines, Workato) lack the domain schema, autonomy rules, and evidence-chain architecture required for regulated capital markets environments.',
    },
  ],
}

// ── Per-Product Deep Dive Section ─────────────────────────────────────────────

export const PRODUCTS_DEEP_DIVE = {
  eyebrow: 'PRODUCT DETAIL',
  intro:
    'Four products, one shared runtime. The strategic value is not any single product in isolation — it is the closed loop they form together, and the agent platform that powers them. An acquirer embedding SynthAgents gains the runtime, the corpus, and three production-ready workflow SKUs with a combined compliance footprint no point solution can match.',
  defensibilityLabels: {
    high: 'High defensibility',
    medium: 'Medium defensibility',
    low: 'Early-stage moat',
  },
  defensibility: {
    fixfriend: {
      score: 4,
      note: 'Driven by the Expoty context core and normalised venue-notice corpus. Change classification accuracy compounds with volume — a new entrant starts cold; FIXFriend starts with every prior change already indexed.',
    },
    datarights: {
      score: 3,
      note: 'Entitlement graph model is structurally sound but data network effects build more slowly than change-response corpus effects. Defensibility increases as more entitlement reviews are processed and benchmarked.',
    },
    declare: {
      score: 3,
      note: 'Schema and workflow architecture are differentiated; regulatory enforcement deepening (DORA, MiFID II RTS 6) creates structural demand. Moat strengthens when downstream from FIXFriend and DataRights — the closed loop is harder to replicate than any single attestation product.',
    },
    synthagent: {
      score: 4,
      note: 'Purpose-built for regulated capital markets: hard UAT boundary, domain-scoped autonomy rules, immutable audit chain. General-purpose orchestration platforms cannot satisfy these constraints without significant custom build.',
    },
  },
}

// ── Financials Section ────────────────────────────────────────────────────────

export const FINANCIALS = {
  eyebrow: 'FINANCIAL SNAPSHOT',
  currentArr:
    'Pre-revenue — first paid pilots targeting Q3 2026. Financial model built to reach break-even at 3 active production contracts (€360K ARR).',
  projectedArr: {
    month12:
      '€210K revenue (4 pilots + 3 production conversions) — 12-month base case under founder-led distribution',
    month24:
      '€500K–€1.5M ARR under acquirer distribution, leveraging an existing connectivity or OMS install base without incremental sales infrastructure',
  },
  exitMultipleRange: '8–12× ARR — anchored by comparable trading technology acquisitions in the same buyer set',
  compDeals: [
    {
      name: 'Broadridge / Itiviti',
      multiple: '~10.2× revenue',
      year: '2021',
      note: 'Trading infrastructure and FIX connectivity platform (€2.1B on ~€210M revenue). Direct comp — same buyer, same connectivity layer FIXFriend attaches to.',
    },
    {
      name: 'SIX Group / Aquis Exchange',
      multiple: '~8.6× revenue',
      year: '2025',
      note: "£207M on £22.7M 2023 net revenue. Exchange infrastructure and multi-venue connectivity. Demonstrates SIX's willingness to pay strategic multiples for workflow-adjacent assets.",
    },
    {
      name: 'Trading Technologies / AxeTrading',
      multiple: 'Undisclosed',
      year: '2023',
      note: "Fixed income trading workflow bolted onto TT's multi-venue execution stack. Same acqui-product thesis: buy the workflow layer, distribute through existing connectivity reach.",
    },
  ],
  assumptions:
    'Pricing: €22.5K pilot / €120K ACV production / €150K–€250K+ expansion. Gross margin: 85%. Break-even: ~3 active production customers at €120K ACV. No new sales headcount required under acquirer distribution — attaches to existing account relationships in the acquirer\'s install base.',
}

// ── Acquirer Landscape Section ────────────────────────────────────────────────

export const LANDSCAPE = {
  eyebrow: 'ACQUIRER LANDSCAPE',
  intro:
    'Strategic fit is strongest where an acquirer already owns the connectivity or OMS layer and is missing the workflow control surface above it. The pattern across all tier-1 and tier-2 acquirers is the same: they have bought the plumbing, but the compliance evidence layer — the layer that proves the plumbing responded correctly to every change — has never been productised.',
  tiers: [
    {
      tier: 1,
      label: 'Tier 1 — Highest Strategic Fit',
      description:
        'Vendors that own venue-facing connectivity infrastructure at scale. FIXFriend attaches directly onto their existing client base with no new distribution investment. Highest urgency, shortest sales cycle, clearest stack fit.',
      acquirers: [
        {
          name: 'ION Markets',
          category: 'Trading infrastructure / OMS-EMS-post-trade',
          fitRationale:
            "ION owns Fidessa, Broadway Technology, DASH, and Clarus FT — the OMS/EMS stack across front, middle, and post-trade. Revenue $2.3B+, 13,000+ employees. What ION does not own is the compliance evidence layer: no automated change-control, no workflow above the connectivity plumbing. FIXFriend bolts directly onto ION's client base. Founder Pignataro controls decisions and moves fast.",
          combinedValue:
            "ION + FIXFriend = end-to-end change lifecycle from venue notice to certified deployment, sold into ION's existing accounts at zero incremental distribution cost. Transforms a manual cost centre embedded in every ION client into a recurring ARR line.",
          status: 'active',
        },
        {
          name: 'Broadridge Financial Solutions',
          category: 'Connectivity / OMS / execution (NYSE: BR)',
          fitRationale:
            "Broadridge's BTCS division owns Itiviti (connectivity), Tbricks (EMS), VeriFIX (FIX onboarding/testing), NYFIX, and CQG (execution, closing June 2026). Connectivity → OMS → execution is now complete. The gap is automated compliance validation and evidence across venue connections. The founder worked directly within Itiviti and Broadridge's BTCS stack — product fit and acquirer relationship are both personally validated.",
          combinedValue:
            'Broadridge + FIXFriend = the complete BTCS value proposition: connectivity, execution, and the change-response layer that makes every venue rollout auditable. Immediate upsell path to 10,000+ BTCS clients. Fastest time-to-revenue of any acquirer scenario.',
          status: 'active',
        },
      ],
    },
    {
      tier: 2,
      label: 'Tier 2 — Strong Strategic Fit',
      description:
        'Exchange groups and multi-venue operators for whom member certification complexity is a direct operational bottleneck. Strong strategic fit; acquisition framing is product-to-platform rather than pure workflow upsell.',
      acquirers: [
        {
          name: 'SIX Group',
          category: 'Exchange operator / post-trade / securities services',
          fitRationale:
            'SIX acquired Aquis Exchange (July 2025, £207M) and Baymarkets (November 2025), giving it the most venue-diverse exchange portfolio in Europe. More venues under one roof means more certification complexity for members. SIX has the acquisition appetite — three deals in 12 months — and a direct strategic motive: tooling that reduces member certification friction improves SIX\'s own onboarding and rollout velocity.',
          combinedValue:
            "SIX + FIXFriend = the first exchange group to offer members an automated certification workflow alongside connectivity. Reduces SIX's own certification backlog while creating a new product revenue stream attached to its venue infrastructure.",
          status: 'active',
        },
        {
          name: 'Trading Technologies',
          category: 'Derivatives execution / multi-venue connectivity (7RIDGE / Thoma Bravo–backed)',
          fitRationale:
            'TT connects to 100+ exchanges and added OpenGamma (December 2025) for margin analytics. The acquisition pattern is consistent: buy adjacent workflow tech, distribute through existing connectivity reach. PE-backed with a growth mandate — fast decisions, clear thesis for bolt-on acquisitions that extend the platform without requiring new distribution infrastructure.',
          combinedValue:
            'TT + FIXFriend = a compliance workflow layer deployed across 100+ exchange connections simultaneously. Every TT client managing venue protocol updates gets automated change-response as a platform feature rather than a custom integration project.',
          status: 'active',
        },
      ],
    },
    {
      tier: 3,
      label: 'Tier 3 — Opportunistic / Complementary',
      description:
        'Compliance-adjacent software businesses for whom the strategic fit is complementary — the same buyer, adjacent problem, and a natural path to combined product positioning.',
      acquirers: [
        {
          name: 'Kaizen Reporting',
          category: 'RegTech / regulatory reporting accuracy (PE-backed: Guidepost Growth Equity)',
          fitRationale:
            "Kaizen owns regulatory reporting accuracy testing and transaction surveillance — the same Head of Compliance buyer as FIXFriend, solving an adjacent problem. Received £42M PE backing in November 2024 with a growth mandate. FIXFriend adds upstream protocol change management that Kaizen's clients need before the data feeding Kaizen's testing even arrives.",
          combinedValue:
            'Kaizen + FIXFriend = a connected compliance stack: protocol change management upstream, reporting accuracy testing downstream. Same buyer, same budget cycle, two problems resolved through one vendor relationship.',
          status: 'active',
        },
      ],
    },
  ],
}

// ── Navigation tabs for AcqApp ────────────────────────────────────────────────

export const ACQ_NAV_TABS = [
  { id: 'hero', label: 'OVERVIEW' },
  { id: 'suite', label: 'SUITE' },
  { id: 'thesis', label: 'WHY NOW' },
  { id: 'products', label: 'PRODUCTS' },
  { id: 'financials', label: 'FINANCIALS' },
  { id: 'landscape', label: 'LANDSCAPE' },
]
