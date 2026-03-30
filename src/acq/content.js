/**
 * Acquirer Portal — Content Configuration
 *
 * All copy lives here. Components reference content keys only, never hardcoded
 * strings, so account-specific versions can be forked by swapping this file.
 */

// ── Hero Section ──────────────────────────────────────────────────────────────

export const HERO = {
  eyebrow: 'CONFIDENTIAL — STRATEGIC ACQUISITION BRIEF',
  headline: 'FIXFriend — Agentic Change Layer for Electronic Trading Infrastructure',
  subheadline:
    'FIXFriend proactively surfaces context and executes change in a controlled, sandboxed, auditable way — compressing the 2–4 week manual venue-change cycle into bounded autonomous execution with a continuous evidence chain that incumbent vendors have built workarounds for, but never productised.',
  ctaLabel: 'Request Data Room Access',
  ctaEmail: '',
  confidentialityNote:
    'This document is strictly confidential and intended solely for the named recipient. Do not distribute.',
}

// ── Suite Overview Section ────────────────────────────────────────────────────

export const SUITE = {
  eyebrow: 'PRODUCT',
  narrativeParagraph:
    'FIXFriend operates in two modes: proactively surfacing the context teams need before they know they need it, and then executing change in a controlled, sandboxed way with a continuous evidence chain built in. The gap incumbents have never closed is not the execution tooling — it is the layer that proactively organises context from scattered systems, classifies what matters, and then works on it in a governed, auditable way. FIXFriend is that layer.',
  synergyCallout:
    'Discover context → Classify impact → Execute change → Govern evidence. One product. Continuous control.',
  futuresNote:
    'DataRights (market-data rights assessment) and Declare (attestation workflows) are expansion modules in development.',
  products: [
    {
      id: 'discover',
      name: 'Discover',
      status: 'live',
      tagline: 'Proactive context sourcing and impact classification',
      ipSummary:
        'Monitor agent continuously watches venue portals, email digests, and regulatory feeds. Source agent fetches specs; Expoty context core retrieves prior decisions, code context, and test artifacts into a shared working bundle before teams know they need it. Impact agent classifies minor vs. major with deterministic gates and model reasoning.',
      revenueLever:
        'Eliminates 2–4 weeks of manual context assembly per change event across 25–60 venue changes per year per firm. The earlier in the cycle a team knows what a change means for them, the lower the remediation cost.',
    },
    {
      id: 'execute',
      name: 'Execute',
      status: 'live',
      tagline: 'Controlled, sandboxed change execution',
      ipSummary:
        'Minor changes run autonomously inside UAT: requirements, branch plan, regression pack, Jira tickets, Slack summaries, audit evidence — generated and delivered without manual intervention. Major changes escalate as structured project bundles with source evidence and decision logs. Hard UAT boundary — never writes to production.',
      revenueLever:
        '60–70% of venue changes qualify as minor and run fully automated. Major changes surface early as structured projects rather than late as certification failures. Either way, weeks of coordination compress to days.',
    },
    {
      id: 'govern',
      name: 'Govern',
      status: 'live',
      tagline: 'Continuous, immutable audit trail',
      ipSummary:
        'Every source, decision, test result, environment boundary, and escalation reason is logged with immutable timestamps and provenance IDs via Expoty. DORA (in force January 2025) and MiFID II RTS 6 require continuous evidenced control over ICT changes — FIXFriend creates that evidence live, not retroactively.',
      revenueLever:
        'Audit evidence is a by-product of execution, not a separate project. Eliminates the retroactive stitching that delays every regulatory review and turns a personal-liability exposure (DORA: up to €1M for senior management) into a closed, continuous record.',
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
        'The structural advantage is not the agent orchestration — it is the indexed, normalised corpus of venue notices, FIX specs, and change history that makes the impact and planning agents domain-accurate from day one. Every change processed adds to institutional memory. A new entrant starts cold; FIXFriend starts with every prior change already indexed and retrievable. General-purpose agent platforms (Tines, Workato) lack the domain schema, autonomy rules, and evidence-chain architecture required for regulated capital markets environments.',
    },
  ],
}

// ── Per-Product Deep Dive Section ─────────────────────────────────────────────

export const PRODUCTS_DEEP_DIVE = {
  eyebrow: 'PRODUCT DETAIL',
  intro:
    'FIXFriend is one product with three interlocking capabilities. The strategic value for an acquirer is not the agent orchestration — it is the normalised venue-notice corpus, the Expoty context core, and the domain-scoped execution rules that make FIXFriend accurate from day one and compound with every change processed. A new entrant starts cold; FIXFriend starts with every prior change already indexed.',
  defensibilityLabels: {
    high: 'High defensibility',
    medium: 'Medium defensibility',
    low: 'Early-stage moat',
  },
  defensibility: {
    discover: {
      score: 4,
      note: 'Driven by the Expoty context core and normalised venue-notice corpus. Context retrieval accuracy compounds with volume — a new entrant starts with no indexed history; FIXFriend starts with every prior change, decision, and test artifact already retrievable.',
    },
    execute: {
      score: 4,
      note: 'Domain-scoped autonomy rules (no data-model change, no workflow change, high source confidence, tests pass) and the hard UAT boundary are purpose-built for regulated capital markets. General-purpose orchestration platforms cannot satisfy these constraints without significant custom build.',
    },
    govern: {
      score: 5,
      note: 'Immutable source provenance and continuous evidence creation are structural requirements under DORA (in force January 2025) and MiFID II RTS 6. FIXFriend creates this evidence as a by-product of execution — no retroactive stitching, no separate project. Hardest capability to replicate at the same governance standard.',
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
  { id: 'suite', label: 'PRODUCT' },
  { id: 'thesis', label: 'WHY NOW' },
  { id: 'products', label: 'HOW IT WORKS' },
  { id: 'financials', label: 'FINANCIALS' },
  { id: 'landscape', label: 'LANDSCAPE' },
]
