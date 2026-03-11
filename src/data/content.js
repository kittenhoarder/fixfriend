// All content sourced from fixfriend_artifacts.md.
// Do not modify dates, figures, or company details without updating the
// artifacts file first.

export const THESIS = {
  headline: 'THE MISSING WORKFLOW LAYER\nFOR VENUE CHANGE RESPONSE',
  subheadline:
    'FIXFriend turns venue change notices into rollout-ready change packs, certification workflows, and client-ready evidence for trading technology vendors. The product is positioned as a lean-exit wedge: a missing workflow layer that becomes strategically valuable to incumbents already serving this market.',
  stats: [
    {
      id: 'tenx',
      value: '10x',
      label: 'FASTER TO CHANGE PACK',
      detail: 'Same day, not 1–2 weeks of PM / engineering / QA coordination',
    },
    {
      id: 'discovery',
      value: '6',
      label: 'WEEK ACQUIRER DISCOVERY LOOP',
      detail: 'Product, corp-dev, advisor, and operator interviews shape the wedge',
    },
    {
      id: 'deals',
      value: '9',
      label: 'VERIFIED DEALS IN 12 MONTHS',
      detail: 'Trading infrastructure and exchange consolidation continues',
    },
  ],
  founderName: 'Owen E. Perry',
  founderTitle: 'Technical Product & Trading Technology Leader',
  founderSummary:
    '14 years in European electronic trading infrastructure. Technical product leader specialising in trading infrastructure at inflection points.',
  linkedinUrl: 'https://linkedin.com/in/oweneperry',
  buyerOneLiner:
    'FIXFriend turns venue change notices into rollout-ready change packs, certification workflows, and client-ready evidence for trading technology vendors.',
  acquirerOneLiner:
    'FIXFriend is the missing workflow layer between venue change, product update, and client rollout.',
  tenXClaim:
    'Same-day change assessment and certification prep instead of 1–2 weeks of PM, engineering, and QA coordination.',
  leanExitWhy:
    'This is not a scale-first SaaS story. It is a strategic attach wedge that becomes valuable if incumbents decide this workflow gap matters enough to buy, embed, or partner around.',
  evidenceTypes: [
    {
      label: 'Validated',
      tone: 'success',
      detail: 'Public-source facts, verified deals, and direct interview evidence.',
    },
    {
      label: 'Hypothesis',
      tone: 'warning',
      detail: 'Current beliefs about product shape, pricing, and strategic fit.',
    },
    {
      label: 'Open Question',
      tone: 'info',
      detail: 'What acquirer discovery still needs to answer.',
    },
  ],
  vcTldr: {
    title: 'LEAN EXIT IN ONE SCREEN',
    marketSummary:
      'Beachhead wedge: vendor-side change-response and certification workflow. Direct market is modest, but strategic attach value rises inside incumbent trading infrastructure stacks.',
    highlights: [
      'Lead with strategic fit, not standalone scale.',
      'First validation loop is acquirer discovery, not generic SaaS GTM.',
      'First 10 customers are design partners chosen for strategic relevance.',
    ],
    tier1Acquirers: [
      { name: 'ION Markets', fit: 'Owns venue-facing plumbing. Missing workflow layer for change-response and client rollout.' },
      { name: 'Broadridge', fit: 'Already owns connectivity, OMS, execution, and onboarding tooling. Missing the cross-party venue-change workflow.' },
      { name: 'Trading Technologies', fit: 'Multi-venue connectivity at scale. Same workflow gap exists between venue change, product update, and customer rollout.' },
      { name: 'SIX Group', fit: 'Venue and member certification complexity makes the wedge strategically relevant on the exchange side too.' },
    ],
  },
}

export const MARKET_NODES = {
  mifir: {
    id: 'mifir',
    label: 'MiFID 2 RTS 6',
    band: 'regulatory',
    title: 'MiFID 2 RTS 6 — Algorithmic Trading Controls',
    status: 'In force. Enforcement intensifying 2026.',
    statusColor: 'amber',
    body: 'Sets organisational requirements and systems-and-controls for algorithmic trading firms. Regulators are increasing scrutiny of how firms evidence compliance with these requirements.',
    implication:
      'Firms must demonstrate they have tested and validated their trading systems — including after protocol changes. Today this evidence is assembled manually and retroactively.',
  },
  aiact: {
    id: 'aiact',
    label: 'EU AI Act',
    band: 'regulatory',
    title: 'EU AI Act — High-Risk AI Obligations',
    status: 'High-risk obligations apply from August 2026.',
    statusColor: 'amber',
    note: 'Digital Omnibus proposal may push some deadlines to December 2027.',
    body: 'Comprehensive AI regulation requiring governance, documentation, and conformity assessment for high-risk AI systems. Financial sector AI (credit scoring, trading algorithms) explicitly in scope.',
    implication:
      'Firms using AI in trading must document and evidence their AI governance. Convergence with DORA and MiFIR creates compound compliance burden.',
  },
  dora: {
    id: 'dora',
    label: 'DORA',
    band: 'regulatory',
    title: 'DORA — Digital Operational Resilience Act',
    status: 'Active from Jan 2025. Enforcement deepening 2026.',
    statusColor: 'green',
    body: 'Mandates ICT risk management, incident reporting, and digital operational resilience testing for financial entities. ESMA and fellow ESAs jointly overseeing critical third-party ICT providers from 2026.',
    implication:
      'Protocol changes to trading systems are ICT changes. Firms need to evidence that these changes were managed, tested, and validated — continuously, not just at audit time.',
  },
  esma: {
    id: 'esma',
    label: 'ESMA 2026\nWork Programme',
    band: 'regulatory',
    title: 'ESMA 2026 Work Programme',
    status: 'Published October 2025. Execution underway.',
    statusColor: 'blue',
    priorities: [
      'Consolidated Tape Provider selection (derivatives)',
      'Critical third-party ICT provider oversight (joint with EBA, EIOPA)',
      'AI-powered supervisory tools and ESMA Data Platform rollout',
      'Supervisory convergence: Common Supervisory Actions, peer reviews',
      'Simplification and burden reduction (but not reduced scrutiny)',
    ],
    implication:
      'ESMA is building the infrastructure to supervise at scale using data and AI. Firms that cannot produce machine-readable compliance evidence will be at a disadvantage.',
  },
  venues: {
    id: 'venues',
    label: 'EU & UK Exchanges\n& Venues',
    band: 'supply',
    title: 'EU & UK Exchanges & Venues',
    venues: [
      'Eurex',
      'Deutsche Börse',
      'Euronext',
      'LSEG',
      'Nasdaq Nordic',
      'SIX',
      'BME',
      'Cboe Europe',
      'Aquis (SIX-owned)',
    ],
    body: 'Venues continuously publish updates to trading protocols — FIX specification changes, native API updates, market model changes, new order types, regulatory-driven field changes.',
    scale:
      'A typical multi-venue broker-dealer may be connected to 10–20+ venues. Each venue publishes multiple updates per year. Each update triggers a mandatory compliance cycle at every connected firm.',
  },
  trigger: {
    id: 'trigger',
    label: 'Protocol / Rule Update',
    band: 'trigger',
    title: 'Protocol / Rule Update — The Mandatory Trigger',
    status: '⚠ Mandatory compliance trigger for all connected firms',
    statusColor: 'amber',
    body: 'When a venue publishes a FIX specification change, a native API update, or a regulatory-driven protocol change, every connected vendor, service provider, and direct-connect firm has to respond. There is no opt-out.',
    implication:
      'Each trigger starts a manual cycle of triage, engineering, certification, client communication, and evidence production. The product wedge is not generic FIX automation; it is the missing workflow layer between the notice and a reliable rollout response.',
  },
  vendors: {
    id: 'vendors',
    label: 'Trading Tech\nVendors',
    band: 'intermediary',
    title: 'Trading Technology Vendors & Connectivity Providers',
    count: '~150–250 likely beachhead operators globally',
    includes:
      'OMS/EMS vendors, managed FIX providers, selected venues, testing/compliance adjacencies, and infrastructure teams that absorb venue changes for many downstream clients',
    body: 'This is where the lean-exit wedge sits. Vendors receive short-notice venue changes, coordinate research across product, engineering, QA, and customer teams, then absorb reputation risk when certification drags or venue-side issues surface late.',
    today:
      'Teams often add buffer just for communication and external QA loops. Change-response knowledge is fragmented across inboxes, specs, test packs, and client escalations.',
  },
  firms: {
    id: 'firms',
    label: 'End Clients /\nConnected Firms',
    band: 'demand',
    title: 'End Clients & Connected Trading Firms',
    count: '~1,500 multi-venue connected entities (sell-side focus)',
    includes:
      'Investment banks, broker-dealers, market makers, proprietary trading firms, hedge funds with direct market access (DMA)',
    body: 'Clients still feel the pain downstream: late rollouts, compressed certification windows, unclear communication, and support escalations when venue changes are misunderstood or venue-side defects surface in certification.',
    today:
      'They care about speed, confidence, and evidence, but they often rely on vendors and venues to coordinate the response.',
  },
  regulators: {
    id: 'regulators',
    label: 'Regulators',
    band: 'demand',
    title: 'EU & UK Regulators',
    eu: 'ESMA (pan-EU), BaFin (Germany), CONSOB (Italy), AMF (France), CSSF (Luxembourg), plus 20+ other national competent authorities',
    uk: 'FCA (post-Brexit, separate regime but overlapping requirements)',
    body: 'What they demand: Evidence that firms have adequate systems and controls. Evidence that changes to trading systems were properly managed. Evidence that connectivity to venues is certified and validated.',
    evolution:
      'Moving toward data-driven, AI-powered supervision. Common Supervisory Actions across member states. Peer reviews. On-site inspections. The bar for evidence quality is rising.',
  },
}

export const MARKET_DEFAULT_DETAIL = {
  title: 'The European Market Chain',
  body: 'Click any node on the map to explore the detail. The lean-exit story now shows the missing vendor layer between venue changes and downstream clients. That is where FIXFriend aims to live: between the notice, the rollout response, and the evidence trail.',
  hint: 'Start with the amber trigger node, then move into the vendor layer to see the strategic wedge.',
}

export const GAP = {
  today: {
    title: 'TODAY',
    subtitle: 'The manual venue-change scramble',
    tint: 'red',
    steps: [
      {
        number: '01',
        title: 'VENUE NOTICE LANDS',
        detail: 'Received via email, portal, PDF, or support contact. No standard format.',
        time: null,
      },
      {
        number: '02',
        title: 'CROSS-TEAM TRIAGE',
        detail: 'Product, engineering, QA, and client teams figure out what actually changed.',
        time: '1–3 days',
      },
      {
        number: '03',
        title: 'PROTOCOL FRAGMENTATION RESEARCH',
        detail: 'Message dictionaries, custom tags, and workflow-specific exceptions have to be understood manually.',
        time: '2–5 days',
      },
      {
        number: '04',
        title: 'TESTING & CERTIFICATION COORDINATION',
        detail: 'Teams rebuild test packs, chase credentials, and become external QA for venue-side issues.',
        time: '2–5 days',
      },
      {
        number: '05',
        title: 'CLIENT ROLLOUT & SUPPORT',
        detail: 'Communication buffers get added because engineering confidence and venue turnaround are uncertain.',
        time: null,
      },
      {
        number: '06',
        title: 'EVIDENCE & COMMUNICATION RECONSTRUCTED',
        detail:
          'Emails, tickets, test logs, and client updates are stitched together after the fact. Incomplete. Expensive. Reputation risk lingers.',
        time: null,
        highlight: true,
      },
    ],
    total: '1–2 WEEKS TO A RELIABLE CHANGE PACK',
    risk: 'Vendors add delivery buffer just for communication and venue-side QA churn. The cost is not only engineering time; it is slower rollout, client frustration, and reputational drag.',
  },
  automated: {
    title: 'WITH FIXFRIEND',
    subtitle: 'Supervised venue-change response workflow',
    tint: 'blue',
    steps: [
      {
        number: '01',
        title: 'SPEC UPDATE DETECTED',
        detail: 'FIXFriend ingests venue notices, specs, and deadlines from the channels teams already monitor.',
        time: null,
      },
      {
        number: '02',
        title: 'IMPACT MAPPED',
        detail: 'FIXFriend links the change to relevant products, configurations, test packs, and downstream client workflows.',
        time: 'Minutes',
      },
      {
        number: '03',
        title: 'CHANGE PACK ASSEMBLED',
        detail: 'Engineering-ready requirements, rollout notes, and certification tasks are created in one supervised package.',
        time: 'Minutes',
      },
      {
        number: '04',
        title: 'CERTIFICATION RUNBOOK READY',
        detail: 'Validation steps, dependencies, and evidence expectations are queued before the window compresses.',
        time: 'Hours',
      },
      {
        number: '05',
        title: 'CLIENT ROLLOUT MATERIALS READY',
        detail: 'Client-facing summaries and internal approval records are generated alongside the technical response.',
        time: null,
      },
      {
        number: '06',
        title: 'CONTINUOUS AUDIT TRAIL',
        detail:
          'Evidence, approvals, and timeline context remain live as the work happens. Teams do not have to reconstruct the story later.',
        time: null,
        highlight: true,
      },
    ],
    total: 'SAME DAY TO CERTIFICATION-READY CHANGE PACK',
    summary:
      'FIXFriend is the missing workflow layer between venue change, product update, certification, and client rollout. The work still happens. The chaos disappears.',
  },
}

export const ACQUIRERS = [
  {
    tier: 1,
    tierLabel: 'TRADING INFRASTRUCTURE VENDORS',
    tierSubtitle: 'Highest strategic fit',
    tierColor: 'green',
    acquirers: [
      {
        id: 'ion',
        logoKey: 'ion',
        name: 'ION Markets',
        ownership: 'Private',
        ownershipDetail: 'Controlled by Andrea Pignataro · Dublin',
        revenue: '$2.3B+',
        oneliner: 'OMS/EMS stack — Fidessa, Broadway Technology',
        decisionSpeed: 'fast',
        owns: 'OMS/EMS stack (Fidessa, Broadway Technology), trading infrastructure across fixed income and derivatives. ~13,000 employees. $6B+ debt.',
        missing: 'Autonomous change-control agent. No system sources specs, diffs, and acts.',
        recentMA: 'Historically highly acquisitive (Broadway Technology, Fidessa, DASH Financial, Clarus FT)',
        fit: 'ION owns the plumbing but not the agent layer. FIXFriend bolts directly onto their existing client base.',
      },
      {
        id: 'broadridge',
        logoKey: 'broadridge',
        name: 'Broadridge',
        ownership: 'Public',
        ownershipDetail: 'NYSE: BR',
        revenue: '$5B+',
        oneliner: 'Connectivity · OMS (Itiviti/BTCS) · Execution (CQG)',
        decisionSpeed: 'medium',
        owns: 'Connectivity, order management (Itiviti, 2021 — now BTCS: Broadridge Trading and Connectivity Solutions). Within BTCS: Tbricks (EMS), VeriFIX (FIX onboarding and testing; test cases built manually, no AI automation), managed FIX service, NYFIX. Execution (CQG, announced Feb 2026), fund distribution (Acolin, 2025).',
        missing: 'Autonomous change-control agent. VeriFIX supports FIX onboarding and testing but test cases are built manually; there is no agent that sources specs, diffs, and acts.',
        recentMA: 'CQG (6 Feb 2026, expected close June 2026), Acolin (2025), Signal (2025)',
        fit: 'Broadridge owns connectivity → OMS → execution. The autonomous agent layer is missing. Founder worked at both Itiviti and Broadridge — including directly with Tbricks and the BTCS stack — and knows the gap firsthand.',
      },
      {
        id: 'murex',
        logoKey: 'murex',
        name: 'Murex',
        ownership: 'Private',
        ownershipDetail: 'Founder-led',
        revenue: 'Undisclosed',
        revenueNote: 'estimates $500M–$2B',
        oneliner: 'MX.3 cross-asset trading & risk platform · 60,000+ users',
        decisionSpeed: 'fast',
        owns: 'MX.3 — dominant cross-asset trading and risk platform. 60,000+ users across 65+ countries. 3,400 employees.',
        missing: 'Autonomous agent for venue connectivity changes. MX.3 clients connect to multiple venues; protocol changes are a pain point with no agent to source, diff, and act.',
        recentMA: 'Selective. Primarily organic growth and strategic partnerships (AWS, Publicis Sapient).',
        fit: 'Murex clients are exactly the firms that suffer from manual FIX compliance cycles. Embedding the FIXFriend agent into MX.3 is a natural extension.',
      },
      {
        id: 'tt',
        logoKey: 'tt',
        name: 'Trading Technologies',
        ownership: 'Private',
        ownershipDetail: '7RIDGE / Thoma Bravo-backed',
        revenue: 'Undisclosed',
        oneliner: 'Derivatives execution · 100+ exchanges · Best Sell-Side OMS 2025/26',
        decisionSpeed: 'fast',
        owns: 'Derivatives execution infrastructure, multi-venue connectivity, compliance & trade surveillance, TCA. SaaS platform connecting to 100+ exchanges.',
        missing: 'Autonomous agent for venue connectivity change-control.',
        recentMA: '7RIDGE acquired TT Dec 2021. Thoma Bravo invested July 2025 (closed Q4 2025). Abel Noser Solutions (Aug 2023). Cboe holds a live exit option (exercisable since Jan 2025, not yet exercised).',
        fit: 'TT connects traders to 100+ exchanges. Every venue protocol change affects their clients. An autonomous change-control agent is an upsell to existing client base.',
      },
    ],
  },
  {
    tier: 2,
    tierLabel: 'EXCHANGE GROUPS',
    tierSubtitle: 'Venue operators with certification bottlenecks',
    tierColor: 'blue',
    acquirers: [
      {
        id: 'six',
        logoKey: 'six',
        name: 'SIX Group',
        ownership: 'Private',
        ownershipDetail: 'Owned by Swiss banks',
        revenue: '~CHF 1.6B',
        oneliner: 'SIX Swiss Exchange · BME · Aquis · 16 EU/UK markets',
        decisionSpeed: 'fast',
        owns: 'SIX Swiss Exchange, BME (Spain), Aquis (16 EU/UK markets, acquired July 2025). Data, post-trade, payments.',
        missing: 'Autonomous agent for member certification at pan-European scale.',
        recentMA: 'Aquis Exchange (closed 1 July 2025, ~£207M), Worldline EDM business (2025)',
        fit: 'SIX now operates the most venue-diverse exchange group in Europe. Every member connecting to their venues goes through certification. The FIXFriend agent automates this at exchange scale.',
      },
      {
        id: 'dbg',
        logoKey: 'deutsche-boerse',
        name: 'Deutsche Börse',
        ownership: 'Public',
        ownershipDetail: 'Frankfurt Stock Exchange',
        revenue: '€4B+',
        oneliner: 'Eurex · Xetra · Clearstream · SimCorp',
        decisionSpeed: 'slow',
        owns: 'Eurex, Xetra, Clearstream, ISS, SimCorp. Full exchange value chain.',
        missing: 'Autonomous agent for member-facing change-control.',
        recentMA: 'SimCorp (2023, €3.9B)',
        fit: 'Strategic but slower path. Eurex members face the same certification pain. Deutsche Börse has the resources but longer decision cycles.',
      },
      {
        id: 'euronext',
        logoKey: 'euronext',
        name: 'Euronext',
        ownership: 'Public',
        ownershipDetail: 'Pan-European exchange',
        revenue: '€1.5B+',
        oneliner: 'Paris · Amsterdam · Brussels · Dublin · Lisbon · Oslo · Milan',
        decisionSpeed: 'slow',
        owns: 'Pan-European exchange across 7 markets. Post-trade via Euronext Clearing.',
        missing: 'Autonomous agent for harmonised member change-control across 7 markets.',
        recentMA: 'Borsa Italiana group (2021), Euronext Clearing launch.',
        fit: "Euronext's multi-market structure means members deal with multiple protocol variations. Compliance harmonisation is a real operational need.",
      },
    ],
  },
  {
    tier: 3,
    tierLabel: 'REGTECH / COMPLIANCE ADJACENCY',
    tierSubtitle: 'Same buyer, adjacent problem',
    tierColor: 'indigo',
    acquirers: [
      {
        id: 'kaizen',
        logoKey: 'kaizen',
        name: 'Kaizen Reporting',
        ownership: 'PE-backed',
        ownershipDetail: 'Guidepost Growth Equity · £42M round Nov 2024',
        revenue: 'Private',
        oneliner: 'Regulatory reporting accuracy testing · transaction surveillance',
        decisionSpeed: 'fast',
        owns: 'Regulatory reporting accuracy testing, transaction surveillance.',
        missing: 'Autonomous agent for protocol change management and venue connectivity.',
        recentMA: 'PE-backed growth (Guidepost Growth Equity, £42M round November 2024).',
        fit: 'Kaizen already sells compliance tooling to trading firms. FIXFriend is a natural product extension — same buyer (Head of Compliance / Head of Electronic Trading), adjacent problem.',
      },
      {
        id: 'smartstream',
        logoKey: 'smartstream',
        name: 'SmartStream Technologies',
        ownership: 'Sovereign wealth-backed',
        ownershipDetail: 'DIFC/ICD-owned',
        revenue: '~£43M',
        revenueNote: 'FY2023',
        oneliner: 'Reconciliation · post-trade controls · 1,500+ clients',
        decisionSpeed: 'medium',
        owns: 'Reconciliation, post-trade controls, reference data management. 1,500+ clients including 70+ of world\'s top 100 banks.',
        missing: 'Autonomous agent for front-office / connectivity change-control.',
        recentMA: 'Selective acquirer in post-trade space.',
        fit: 'SmartStream owns post-trade evidence and control. FIXFriend owns pre-trade / connectivity evidence and control. Complementary.',
      },
      {
        id: 'exactpro',
        logoKey: 'exactpro',
        name: 'Exactpro',
        ownership: 'Private',
        ownershipDetail: 'Independent specialist',
        revenue: 'Private',
        oneliner: 'Testing & QA for exchanges and trading venues',
        decisionSpeed: 'fast',
        owns: 'Testing and QA for exchanges and trading venues. Functional and performance testing of trading systems.',
        missing: 'Autonomous agent for continuous change-control. Exactpro does project-based testing, not ongoing agent-driven automation.',
        recentMA: 'Growing through organic expansion.',
        fit: 'Exactpro tests trading systems. The FIXFriend agent automates the ongoing change-control triggered by protocol changes. Potential acqui-hire or product integration.',
      },
    ],
  },
  {
    tier: 4,
    tierLabel: 'LONG-SHOT / STRATEGIC OPTIONALITY',
    tierSubtitle: 'Lower probability; optional expansion path',
    tierColor: 'indigo',
    acquirers: [
      {
        id: 'nasdaq',
        logoKey: 'nasdaq',
        name: 'NASDAQ',
        ownership: 'Public',
        ownershipDetail: 'NASDAQ: NDAQ',
        revenue: '$6B+',
        oneliner: 'Exchange · Market Technology · Adenza (risk/regtech)',
        decisionSpeed: 'slow',
        owns: 'US and Nordic exchanges. Market Technology: trade surveillance (SMARTS), compliance, matching/clearing tech. Adenza ($10.5B, 2023): risk and regtech for banks and asset managers.',
        missing: 'Autonomous agent for connectivity-layer change-control (protocol change, venue certification). Adenza is risk/reg; NASDAQ surveillance is trade surveillance, not spec-change agents.',
        recentMA: 'Adenza (2023, $10.5B). Digesting; divesting Nordic power futures to Euronext.',
        fit: 'NASDAQ already sells compliance and surveillance to sell-side firms. The FIXFriend agent\'s protocol/connectivity change-control is an adjacent layer. Long shot while they integrate Adenza; optional if they later extend into venue-certification agents.',
      },
      {
        id: 'lseg',
        logoKey: 'lseg',
        name: 'LSEG',
        ownership: 'Public',
        ownershipDetail: 'London Stock Exchange Group',
        revenue: '£8B+',
        oneliner: 'LSE · Refinitiv · data · post-trade',
        decisionSpeed: 'slow',
        owns: 'London Stock Exchange, Refinitiv (data, analytics, trading), FTSE Russell, LCH, post-trade (e.g. Axoni acquisition). Serves sell-side and buy-side globally.',
        missing: 'Autonomous agent for venue connectivity change-control.',
        recentMA: 'Axoni post-trade tech (2024). Refinitiv (2021). Selective, large deals.',
        fit: 'LSEG owns trading venues, Refinitiv data, and post-trade tech. An autonomous change-control agent for venue connectivity is a niche they don\'t currently serve. Possible tuck-in if they build out a broader agent/workflow suite.',
      },
      {
        id: 'cboe',
        logoKey: 'cboe',
        name: 'Cboe Global Markets',
        ownership: 'Public',
        ownershipDetail: 'Cboe: CBOE',
        revenue: '$4B+',
        oneliner: 'Cboe options · equities · Europe · BIDS · TT stake',
        decisionSpeed: 'medium',
        owns: 'Cboe Options, Cboe US/European equities, BIDS Trading (block ATS), investment in Trading Technologies (7RIDGE). Trade Alert, Hanweck, FT Options (data/analytics).',
        missing: 'Autonomous agent for member-facing protocol and connectivity change-control.',
        recentMA: 'BIDS Trading (2020). Trade Alert (2020). Investment in TT via 7RIDGE (2021).',
        fit: 'Cboe has bought trading and analytics tools and has a stake in TT. Member certification and connectivity compliance could become relevant; today they\'re not visibly building in this niche.',
      },
      {
        id: 'factset',
        logoKey: 'factset',
        name: 'FactSet',
        ownership: 'Public',
        ownershipDetail: 'NYSE: FDS',
        revenue: '$2B+',
        oneliner: 'Data · research · LiquidityBook (OMS) · AI compliance suite',
        decisionSpeed: 'medium',
        owns: 'Workstation, data, research, portfolio analytics. LiquidityBook (2025): OMS/IBOR. AI compliance suite (KYC, AML, risk) for banking clients.',
        missing: 'Autonomous agent for connectivity and protocol-change management. Compliance suite is KYC/AML/risk, not venue certification agents.',
        recentMA: 'LiquidityBook (Feb 2025, ~$246M). Building out compliance and execution workflows.',
        fit: 'FactSet is adding execution (LiquidityBook) and compliance (AI suite). The FIXFriend agent\'s connectivity change-control targets the same institutions. Possible add-on if they expand agent-driven compliance into trading infrastructure.',
      },
    ],
  },
]

export const DEALS = [
  {
    id: 'cinven-objectway',
    logoKey: 'cinven',
    date: '7 Aug 2025',
    dateSort: '2025-08-07',
    acquirer: 'Cinven',
    target: 'Objectway',
    status: 'Closed Nov 2025',
    acquirerType: 'Private Equity',
    timeline: '~3 months',
    dealLogic:
      'Majority stake in wealth management software. 250+ financial institution clients. Accelerate growth via M&A. First investment from Cinven\'s new mid-market strategy.',
    pattern:
      'PE firms moving fast in European financial software. Private capital sees regulatory compliance automation as a growth enabler.',
    relevance: null,
  },
  {
    id: 'iress',
    logoKey: 'iress',
    date: 'Aug 2025',
    dateSort: '2025-08-15',
    acquirer: 'Blackstone / Thoma Bravo',
    target: 'IRESS',
    status: 'In play',
    acquirerType: 'Private Equity',
    timeline: 'Active',
    dealLogic:
      'Trading and wealth software. ~AU$600M revenue. UK EBITDA up 43% YoY. Core business is trading & market data — directly relevant to venue connectivity compliance.',
    pattern:
      'Any acquirer of IRESS inherits a business where venue connectivity compliance is a daily operational reality. Compliance tooling strengthens the acquisition value.',
    relevance:
      'Blackstone and Thoma Bravo both circling. Additional unnamed parties engaged.',
  },
  {
    id: 'six-aquis',
    logoKey: 'six',
    date: 'Nov 2024 → Jul 2025',
    dateSort: '2025-07-01',
    acquirer: 'SIX Group',
    target: 'Aquis Exchange',
    status: 'Closed 1 Jul 2025',
    acquirerType: 'Private (Swiss bank-owned)',
    timeline: '~8 months',
    dealValue: '~£207M',
    dealLogic:
      'Create pan-European exchange innovator. 15% aggregated market share. 16 capital markets. Only exchange group with listing venues in Switzerland, EU, and UK.',
    pattern:
      'Exchange consolidation directly amplifies the problem FIXFriend solves. More venues under one roof = more certification complexity for members.',
    relevance:
      'SIX now operates multiple venues with different protocols. Member certification across all venues is a massive operational bottleneck.',
  },
  {
    id: 'arcesium-limina',
    logoKey: 'arcesium',
    date: '2 Feb 2026',
    dateSort: '2026-02-02',
    acquirer: 'Arcesium',
    target: 'Limina',
    status: 'Closed',
    acquirerType: 'Private (D.E. Shaw / Blackstone / JP Morgan-backed)',
    timeline: 'Fast (weeks)',
    dealLogic:
      'Create front-to-back operating platform for asset managers. Integrate Limina\'s portfolio & order management with Arcesium\'s middle/back-office.',
    pattern:
      'Demonstrates front-to-back consolidation logic. Limina handles investment mandate compliance (portfolio limits, concentration). FIXFriend handles connectivity-layer compliance (protocol changes, venue certification). Different domains, same M&A rationale.',
    relevance: null,
  },
  {
    id: 'broadridge-cqg',
    logoKey: 'broadridge',
    date: '6 Feb 2026',
    dateSort: '2026-02-06',
    acquirer: 'Broadridge',
    target: 'CQG',
    status: 'Expected close Jun 2026',
    acquirerType: 'Public (NYSE: BR)',
    timeline: '~4 months',
    dealLogic:
      'Add execution management, algos, analytics to existing OMS/connectivity stack. Third major acquisition in front-to-back buildout — after Itiviti (2021) and Acolin (2025).',
    pattern:
      'Broadridge now owns connectivity → order management → execution. Still missing: automated compliance validation and evidence across venue connections.',
    relevance:
      "Founder's edge: Owen Perry worked at both Itiviti and Broadridge, including directly with Tbricks and the BTCS stack (VeriFIX, NYFIX). Knows the gap firsthand.",
  },
  {
    id: 'marketaxess-rfqhub',
    logoKey: 'marketaxess',
    date: 'May 2025',
    dateSort: '2025-05-12',
    acquirer: 'MarketAxess',
    target: 'RFQ-hub',
    status: 'Closed',
    acquirerType: 'Public (NASDAQ: MKTX)',
    timeline: '~1 month',
    dealLogic:
      'Acquire 90% of RFQ-hub, a multi-asset RFQ platform for derivatives, structured products and ETFs. Expand electronic trading protocols and distribution via MarketAxess\'s global client network.',
    pattern:
      'Electronic trading protocol consolidation. RFQ-hub adds protocol and connectivity breadth; venue and protocol change management remains a compliance and operational burden for clients.',
    relevance: null,
  },
  {
    id: 'kkr-osttra',
    logoKey: 'kkr',
    date: 'Oct 2025',
    dateSort: '2025-10-10',
    acquirer: 'KKR',
    target: 'OSTTRA',
    status: 'Closed',
    acquirerType: 'Private Equity',
    timeline: '~6 months',
    dealValue: '~$3.1B',
    dealLogic:
      'Acquire post-trade solutions provider from S&P Global and CME Group. OSTTRA handles trade processing, lifecycle management and optimization across rates, FX, credit and equities.',
    pattern:
      'Post-trade infrastructure consolidation. Larger stacks mean more touchpoints and protocol dependencies; compliance evidence and change-control remain critical across the trade lifecycle.',
    relevance: null,
  },
  {
    id: 'six-baymarkets',
    logoKey: 'six',
    date: '25 Nov 2025',
    dateSort: '2025-11-25',
    acquirer: 'SIX Group',
    target: 'Baymarkets',
    status: 'Closed',
    acquirerType: 'Private (Swiss bank-owned)',
    timeline: '~3 months',
    dealLogic:
      'Strengthen pan-European clearing. Baymarkets (Oslo) provides clearing platform technology; SIX integrates clearing capabilities across derivatives and multiple asset classes.',
    pattern:
      'Exchange and clearing consolidation. SIX now operates multiple venues and clearing systems; member certification and connectivity compliance scale with each new platform.',
    relevance:
      'SIX already acquired Aquis (deal on timeline). More venues and clearing systems under one roof amplifies certification and protocol evidence needs.',
  },
  {
    id: 'tt-opengamma',
    logoKey: 'tt',
    date: '17 Dec 2025',
    dateSort: '2025-12-17',
    acquirer: 'Trading Technologies',
    target: 'OpenGamma',
    status: 'Closed',
    acquirerType: 'Private',
    timeline: '~2 months',
    dealLogic:
      'Integrate margin and capital optimization analytics into TT\'s execution and clearing stack. OpenGamma serves buy-side and sell-side; TT gains hedge fund and energy sector reach.',
    pattern:
      'Front-to-back derivatives stack. TT adds margin analytics to execution and clearing; compliance and evidence around protocol changes and venue certification remain manual.',
    relevance: null,
  },
]

export const ABOUT = {
  name: 'Owen Perry',
  title: 'Technical Product & Trading Technology Leader',
  career: ['FactSet', 'Nasdaq OMX', 'Itiviti', 'Ai eXchange (AiX, acquired)', 'Quod Financial', 'Broadridge', 'Onyx Capital Group', 'Tradeteq (acquired)', 'Bermuda Commercial Bank'],
  summary:
    '14 years in European electronic trading infrastructure. Built, stabilised, and shipped revenue-critical trading systems for Tier-1 banks, exchanges, and fintech. Contributed to acquisition outcomes by clarifying platform strategy and market positioning.',
  experience: [
    'Operated live trading systems at Nasdaq OMX in Stockholm',
    'Managed mission-critical trading systems at Itiviti (Nordic banking clients)',
    'Delivered Tier-1 trading programmes at Broadridge; worked directly with Tbricks (EMS) and the BTCS stack, most intimately while at Broadridge',
    'Led complex OMS/EMS deployments at Quod Financial',
    'Led product at Tradeteq through to acquisition',
    'Built and launched AiX, a conversational AI trading platform acquired by Blockchain.com',
  ],
  closing:
    'FIXFriend exists because I have spent a career watching this problem compound — and I know it can be solved by an agent that does what engineers currently do manually.',
  linkedinUrl: 'https://linkedin.com/in/oweneperry',
}

export const NAV_TABS = [
  { id: 'thesis', label: 'THESIS', icon: 'Home' },
  { id: 'leanExit', label: 'LEAN EXIT', icon: 'Briefcase' },
  { id: 'market', label: 'MARKET', icon: 'Globe' },
  { id: 'gap', label: 'GAP', icon: 'AlertTriangle' },
  { id: 'product', label: 'PRODUCT', icon: 'Package' },
  { id: 'definition', label: 'DEFINITION', icon: 'BookOpen' },
  { id: 'acquirers', label: 'ACQUIRERS', icon: 'Crosshair' },
  { id: 'dealflow', label: 'DEAL FLOW', icon: 'TrendingUp' },
]

// Week 1 content: Market Definition & Market Size
export const DEFINITION = {
  origin: {
    title: 'Origin',
    body: "I've spent over a decade inside electronic trading infrastructure — at Nasdaq operating live markets and inside vendor platforms that had to absorb venue changes on behalf of clients. The pattern was consistent: short-notice notices land, teams chase context across product, engineering, QA, and client channels, and the organisation reconstructs evidence only after the fact.\n\nFIXFriend starts from that observation, but the framing here is deliberately lean-exit. The goal is not to pretend this is already a giant standalone category. The goal is to show that a repeatable workflow gap exists in a market full of incumbents, and that solving it could become strategically valuable to one of them.\n\nThat is why the current thesis is vendor-first and acquirer-aware. The wedge may refine or pivot as more is learned from likely buyers, likely acquirers, and the people who actually coordinate change-response today.",
  },
  marketDefinition: {
    title: 'Market Definition',
    body: 'Modern market access depends on venue-driven change-response: interpreting notices, understanding protocol nuance, coordinating testing, and getting clients through rollout safely.\n\nExisting vendors already own important pieces of the stack: connectivity, onboarding, testing, and reporting. The missing category is not “generic FIX automation.”\n\nFIXFriend defines a narrower wedge:\n\n**→ A supervised venue-change response workflow for trading technology vendors.**\n\nIt begins as a change-pack, certification, and evidence layer, then expands only if discovery shows adjacent workflows are strategically important.',
  },
  marketSize: {
    title: 'Market Size',
    entry: {
      label: 'Beachhead Market',
      body: 'Target wedge: OMS/EMS vendors, managed FIX/connectivity providers, selected venues, and testing/compliance adjacencies that repeatedly absorb venue change-response work.\n\nWorking model: ~150–250 reachable operators globally × €100k–€200k ARR.\n\n**Beachhead market:** ≈ **€15M–€50M**.\n\nThis is intentionally narrower than the broader trading-firm TAM. It is the wedge most likely to matter in a lean-exit path.',
    },
    attach: {
      label: 'Strategic Attach View',
      body: 'The lean-exit upside is not just direct ARR. If FIXFriend plugs into an incumbent platform, the value is attach revenue plus lower rollout drag, lower support load, and stronger client stickiness across an installed base.',
    },
    expansion: {
      label: 'Broader Expansion',
      body: 'If the wedge proves strategic, it expands into broader trading infrastructure lifecycle automation: release governance, certification tooling, change communication, configuration control, and supervised development workflows.',
    },
    sam: 'Working wedge: **40–80 high-fit operators** in Europe and the US before channel expansion.',
    som: 'Lean-exit objective: 5–10 design partners, 3–5 paid pilots, and €1M–€3M ARR potential before strategic embed or acquisition.',
    methodology: [
      'Start with the narrow beachhead, not the broadest possible end market.',
      'Model direct ARR separately from strategic attach value inside incumbent installed bases.',
      'Treat pricing as a hypothesis until discovery confirms the buyer, budget owner, and deployment scope.',
    ],
  },
}

// Week 1 content: Product description
export const PRODUCT_CONTENT = {
  solution: {
    title: 'The FIXFriend Workflow Layer',
    intro: 'FIXFriend is a supervised venue-change response workflow for trading technology vendors.\n\nIt is designed to:',
    bullets: [
      'source venue notices and spec deltas from the channels teams already monitor',
      'map the impact across product, configuration, certification, and client workflows',
      'turn fragmented context into an engineering-ready change pack',
      'queue certification and validation tasks before deadlines compress',
      'produce client-ready evidence and communication alongside the technical response',
      'keep the workflow supervised, visible, and reviewable at every stage',
    ],
    supervised: {
      title: 'Human-Supervised Change Response',
      body: 'FIXFriend is not a black-box autopilot. It creates the response package, links the right evidence, and keeps approvals visible, but humans stay in control of release decisions, venue coordination, and deployment boundaries.',
    },
  },
  whatCustomersBuy: {
    title: 'What Customers Buy',
    label: 'Rollout-Ready Change Packs With Continuous Evidence',
    body: 'Buyers are not paying for a generic model. They are paying for a workflow layer that turns venue change into a faster, more reliable internal response and a clearer client rollout. The audit trail is created as work happens instead of being rebuilt later.',
  },
  targetBuyer: {
    title: 'Target Buyer & Economic Logic',
    primary: 'Head of Product / Head of Connectivity / Head of Electronic Trading',
    budget: 'FIXFriend does not need a brand-new budget category to make sense. It reallocates spend already buried in product coordination, certification effort, support escalation, and delayed client rollout.',
    triggers: ['Short-notice venue change', 'Certification bottleneck', 'Client rollout delay', 'Repeated support escalation'],
  },
  painPoints: [
    'Communication breaks first: the notice, deadline, and impact are spread across too many people and systems.',
    'Protocol fragmentation means “standardised FIX” still hides asset-class and venue-specific nuance.',
    'Testing is expensive because vendors either build simulators or depend on venue cooperation.',
    'Connectivity setup still creates delay: Internet, VPN, private lines, and x-connects all change the response path.',
    'Vendors become external QA for venues and absorb the reputation cost when releases slip.',
  ],
}

export const PRODUCT_PANIC_SCENARIO = {
  title: 'Protocol Panic',
  subtitle:
    'Replay the incident. A venue publishes a mandatory FIX change and your team has to brief engineering, QA, and client rollout before the certification window closes.',
  manual: {
    alerts: [
      {
        id: 'spec-delta',
        title: 'Eurex T7 FIX delta',
        detail: 'Tag 25016 becomes mandatory for algo orders. Certification closes Friday.',
        severity: 'critical',
        correct: true,
      },
      {
        id: 'ops-digest',
        title: 'Ops digest',
        detail: 'Routine venue maintenance summary. No client action required.',
        severity: 'low',
        correct: false,
      },
      {
        id: 'market-color',
        title: 'Market color',
        detail: 'Liquidity recap from yesterday’s session.',
        severity: 'low',
        correct: false,
      },
    ],
    systems: [
      {
        id: 'gateway',
        label: 'Order gateway config',
        detail: 'Session dictionaries, tag validation, and routing rules.',
        correct: true,
      },
      {
        id: 'cert-pack',
        label: 'Certification regression pack',
        detail: 'Venue scenarios must be rebuilt and rerun.',
        correct: true,
      },
      {
        id: 'evidence-pack',
        label: 'Client / evidence pack',
        detail: 'Controls, approvals, test outputs, client summary, and cert trail.',
        correct: true,
      },
      {
        id: 'sales-dashboard',
        label: 'Sales dashboard',
        detail: 'Not on the critical path for this venue change.',
        correct: false,
      },
      {
        id: 'marketing-site',
        label: 'Marketing site copy',
        detail: 'Completely unrelated noise.',
        correct: false,
      },
    ],
    pressureMoments: [
      'Inbox alert arrives with a hard venue certification deadline.',
      'Product, engineering, QA, and client teams all need different answers quickly.',
      'If the venue-side release is imperfect, your team becomes the external QA layer.',
    ],
  },
  fixfriend: {
    runbook: [
      {
        id: 'diff',
        label: 'Semantic diff parsed',
        value: 'Agent parses and normalizes mandatory field change by venue + message type.',
      },
      {
        id: 'impact',
        label: 'Impacted assets mapped',
        value: 'Agent maps gateway config, cert suite, client comms, and evidence controls automatically.',
      },
      {
        id: 'tests',
        label: 'Validation queued',
        value: 'Agent generates regression pack with venue certification checklist attached.',
      },
      {
        id: 'evidence',
        label: 'Evidence generated',
        value: 'Agent assembles change record, approvals, and certification proof continuously.',
      },
    ],
    outcomes: [
      'The response package is assembled while the notice is still fresh.',
      'Humans stay in control while the coordination burden drops sharply.',
      'Client rollout and evidence stay aligned with the technical response.',
    ],
  },
}

export const MARKET_MODEL = {
  beachhead: {
    label: 'Beachhead',
    value: '€15M–€50M',
    detail:
      'Working model: ~150–250 reachable operators globally × €100k–€200k ARR.',
  },
  strategicAttach: {
    label: 'Strategic Attach',
    value: 'Platform leverage',
    detail:
      'If FIXFriend plugs into incumbent platforms, strategic value comes from attach revenue plus faster client rollout, lower support load, and stronger stickiness.',
  },
  expansion: {
    label: 'Broader Expansion',
    value: '€450M',
    detail:
      'The broader trading-firm opportunity remains meaningful, but the lean-exit path starts with the narrower vendor wedge first.',
  },
  methodology: [
    'Count the narrow beachhead first: vendors, managed connectivity providers, selected venues, and testing/compliance adjacencies.',
    'Separate direct ARR from strategic attach value; do not hide both inside one TAM number.',
    'Treat pricing and reachable account count as hypotheses to be tightened through buyer and acquirer discovery.',
  ],
}

export const BUSINESS_MODEL_CANVAS = {
  customerSegments: [
    'OMS / EMS vendors',
    'Managed FIX and connectivity providers',
    'Selected venue operators',
    'Testing and compliance adjacencies',
  ],
  valueProp:
    'Turn venue change notices into rollout-ready change packs, certification workflows, and client-ready evidence without rebuilding the story by hand.',
  channels: [
    'Founder-led warm intros',
    'Design-partner outreach around live venue-change pain',
    'Industry events and thought leadership',
    'Partner and platform distribution after the first wedge is proven',
  ],
  revenueStreams: [
    'Paid design partner or pilot: €25k–€50k',
    'Annual platform contract: €100k–€200k ARR',
    'Optional integration and professional services',
  ],
  costStructure: [
    'Founder-led discovery and implementation',
    'Protocol parsing and workflow product development',
    'Customer integration and support',
    'High-signal travel, events, and partner development',
  ],
}

export const FEATURE_PRIORITIES = {
  mvp: [
    {
      title: 'Venue notice ingestion',
      reason: 'The wedge starts when teams are still staring at inboxes, portals, and PDFs.',
    },
    {
      title: 'Impact mapping across product, config, and cert workflows',
      reason: 'This is where manual coordination currently burns time.',
    },
    {
      title: 'Change-pack generation',
      reason: 'Engineering and product need one response package instead of fragmented context.',
    },
    {
      title: 'Evidence and approval trail',
      reason: 'The workflow has to stay supervised and audit-ready from day one.',
    },
  ],
  v2: [
    {
      title: 'Client rollout communication templates',
      reason: 'Differentiates FIXFriend from technical-only tooling and lowers support drag.',
    },
    {
      title: 'Certification dependency tracking',
      reason: 'Captures delays caused by venue-side readiness and environment setup.',
    },
    {
      title: 'Historical venue-change backtesting',
      reason: 'Helps prove strategic value before a live embedded rollout.',
    },
  ],
  future: [
    {
      title: 'Partner / platform embed APIs',
      reason: 'Matters once strategic attach becomes the dominant route to scale.',
    },
    {
      title: 'Multi-party workflow analytics',
      reason: 'Turns operational activity into a management and M&A insight layer.',
    },
    {
      title: 'Selective automation of repetitive certification steps',
      reason: 'Only after the workflow layer is trusted and clearly bounded.',
    },
  ],
}

export const PRICING_TRACKER = [
  {
    name: 'Broadridge FIX / connectivity services',
    signal: 'Enterprise platform sale; public pricing not disclosed.',
    logic: 'Supports the view that buyers already accept large enterprise workflows when they remove operational burden.',
    evidence: 'Validated',
    sourceLabel: 'Broadridge FIX Technology and Client Connectivity Services',
    sourceUrl: 'https://www.broadridge.com/capability/front-office-solutions/connectivity/fix-technology-and-client-connectivity-services',
  },
  {
    name: 'Tradeweb integration support',
    signal: 'Integration is strategic and relationship-heavy; pricing is not public.',
    logic: 'Supports the view that workflow and support costs are real even when the budget is hidden inside a broader relationship.',
    evidence: 'Validated',
    sourceLabel: 'Tradeweb Integration',
    sourceUrl: 'https://www.tradeweb.com/our-markets/institutional/integration/',
  },
  {
    name: 'Kaizen testing / assurance',
    signal: 'Adjacent assurance spend exists; public pricing not disclosed.',
    logic: 'Supports pricing FIXFriend as an enterprise workflow and assurance layer, not a seat-based tool.',
    evidence: 'Validated',
    sourceLabel: 'Kaizen Accuracy on Demand',
    sourceUrl: 'https://www.kaizenreporting.com/solutions/reportshield/accuracy-on-demand-regulatory-reporting-testing/',
  },
  {
    name: 'Exactpro protocol-aware testing',
    signal: 'Testing tooling already commands specialist enterprise spend.',
    logic: 'Confirms FIXFriend must price against high-value workflow pain, not generic developer tooling.',
    evidence: 'Validated',
    sourceLabel: 'Exactpro ClearTH',
    sourceUrl: 'https://exactpro.com/test-tools/clearth',
  },
  {
    name: 'FIXFriend pricing hypothesis',
    signal: 'Pilot €25k–€50k, then €100k–€200k ARR + optional services.',
    logic: 'Matches a narrow enterprise wedge with design-partner and strategic-attach potential.',
    evidence: 'Hypothesis',
    sourceLabel: 'Current operating hypothesis',
    sourceUrl: '',
  },
]

export const VALIDATION_PLAN = {
  riskiestAssumption:
    'This workflow gap is strategic enough for an incumbent or likely acquirer to care about as a product gap, not just a useful feature.',
  hypothesis:
    'If likely acquirers repeatedly describe venue-driven change response as painful, cross-functional, and hard to internalise quickly, then a vendor-side workflow layer can become strategically valuable.',
  timeline: [
    {
      label: 'Week 1–2',
      focus: 'Acquirer-side product and connectivity interviews',
      detail: 'Run 8–10 conversations with leaders closest to product rollout, venue onboarding, or client certification.',
    },
    {
      label: 'Week 2–4',
      focus: 'Corp-dev, strategy, and M&A advisor interviews',
      detail: 'Run 4–6 conversations to learn how similar acquisitions are sourced, sponsored, and evaluated.',
    },
    {
      label: 'Week 3–5',
      focus: 'Operator back-testing',
      detail: 'Replay 2 historical venue changes with product, QA, or connectivity operators to test whether FIXFriend output is materially useful.',
    },
    {
      label: 'Week 6',
      focus: 'Wedge decision',
      detail: 'Choose whether to stay vendor-first or pivot toward venue-side or testing/regtech adjacency.',
    },
  ],
  successMetrics: [
    '2+ recurring strategic pain patterns across likely acquirers.',
    '1 clear internal sponsor role per acquirer archetype.',
    '1 credible buy / partner / embed path that is more attractive than internal build.',
    '1 paid pilot or strong design-partner commitment.',
  ],
  pivotTriggers: [
    'Acquirers describe the product as tactical, not strategic.',
    'Only one archetype shows real urgency.',
    'The pain is stronger on venue-side or testing-side than vendor-side.',
  ],
}

export const COMPETITION_MATRIX = [
  {
    name: 'Manual status quo',
    evidence: 'Validated',
    whatTheyDo: 'Humans coordinate notices, specs, testing, and client communication across inboxes and tickets.',
    gap: 'Slow, relationship-driven, hard to evidence, and fragile when venue-side issues surface late.',
    sourceLabel: 'Interview with Tom, Bloomberg',
    sourceUrl: '',
  },
  {
    name: 'Broadridge',
    evidence: 'Validated',
    whatTheyDo: 'Connectivity, onboarding, FIX services, testing, and broader trading stack capabilities.',
    gap: 'Strong platform coverage, but the cross-party venue-change workflow still appears fragmented across functions and products.',
    sourceLabel: 'Broadridge FIX Technology and Client Connectivity Services',
    sourceUrl: 'https://www.broadridge.com/capability/front-office-solutions/connectivity/fix-technology-and-client-connectivity-services',
  },
  {
    name: 'Tradeweb',
    evidence: 'Validated',
    whatTheyDo: 'Integration support, multiple integration routes, and venue-side developer interaction.',
    gap: 'Supports integration, but does not solve the vendor-side workflow burden when changes arrive with short notice or venue-side issues bounce back.',
    sourceLabel: 'Tradeweb Integration',
    sourceUrl: 'https://www.tradeweb.com/our-markets/institutional/integration/',
  },
  {
    name: 'Kaizen',
    evidence: 'Validated',
    whatTheyDo: 'Testing and assurance in adjacent reporting/compliance workflows.',
    gap: 'Adjacent buyer and adjacent spend, but not focused on venue-driven product rollout and certification coordination.',
    sourceLabel: 'Kaizen Accuracy on Demand',
    sourceUrl: 'https://www.kaizenreporting.com/solutions/reportshield/accuracy-on-demand-regulatory-reporting-testing/',
  },
  {
    name: 'Exactpro',
    evidence: 'Validated',
    whatTheyDo: 'Protocol-aware testing and specialist QA tooling.',
    gap: 'Testing capability is strong, but it does not own the full workflow from notice to product update to client-ready evidence.',
    sourceLabel: 'Exactpro ClearTH',
    sourceUrl: 'https://exactpro.com/test-tools/clearth',
  },
  {
    name: 'FIXFriend',
    evidence: 'Hypothesis',
    whatTheyDo: 'Own the workflow layer: notice ingestion, impact mapping, change-pack assembly, certification readiness, and client/evidence outputs.',
    gap: 'Must still prove that this wedge is strategic enough to buy or embed rather than build internally.',
    sourceLabel: 'Current thesis',
    sourceUrl: '',
  },
]

export const GTM_PLAYBOOK = {
  first10: [
    'Founder-led warm intros through Nasdaq, Itiviti, Broadridge, Bloomberg, and venue relationships.',
    'Use a sample historical venue-change teardown to prove insight before asking for a pilot.',
    'Target design partners whose workflows also matter to likely acquirers.',
    'Prioritise accounts where communication and certification pain is already visible, not generic innovation interest.',
  ],
  next100: [
    'Use case-study-led outbound once one wedge is proven.',
    'Distribute through partners, incumbents, consultancies, or testing/compliance adjacencies instead of building a heavy direct-sales machine.',
    'Publish thought leadership on certification drag, venue-change fragmentation, and rollout readiness.',
    'Use events such as FIX EMEA and FIA IDX for concentrated relationship-building, not broad funnel volume.',
  ],
  costs: [
    'Targeted founder travel and conference attendance instead of paid media.',
    'High-touch design-partner sales motion for the first 10.',
    'Low CAC expectation only becomes realistic once attach-to-platform distribution exists.',
  ],
}

export const OPEN_QUESTIONS = [
  'Who really sponsors these acquisitions: business-unit leader, corp-dev, founder/CEO, or advisor?',
  'What proof makes this look strategic rather than tactical?',
  'Is the strongest wedge vendor-side, venue-side, or testing/regtech adjacency?',
  'How much of the problem is workflow versus missing technical tooling?',
]

export const LEAN_EXIT_CASE = {
  intro:
    'FIXFriend is framed as a narrow workflow wedge with strategic value if incumbents decide the gap between venue change, product update, certification, and client rollout is worth buying, embedding, or partnering around.',
  evidenceOverview: [
    {
      label: 'Validated',
      tone: 'success',
      items: [
        'Interview evidence points to communication, certification, and protocol fragmentation as recurring pain.',
        'Public incumbents already cover onboarding, testing, and connectivity, which sharpens the differentiation bar.',
        'Verified sector deals show continued consolidation across trading infrastructure and exchanges.',
      ],
    },
    {
      label: 'Hypothesis',
      tone: 'warning',
      items: [
        'Vendor-side change-response is the strongest initial wedge.',
        'The right buyer will pay for faster rollout and lower support drag before they pay for AI by itself.',
        'A workflow layer is more strategically interesting than a narrow point solution.',
      ],
    },
    {
      label: 'Open Question',
      tone: 'info',
      items: [
        'Which acquirer archetype feels this gap most intensely?',
        'What evidence would make buy-or-embed more attractive than internal build?',
        'Which product boundary creates the strongest strategic fit?',
      ],
    },
  ],
  wedge: {
    evidence: 'Hypothesis',
    buyerOneLiner:
      'FIXFriend turns venue change notices into rollout-ready change packs, certification workflows, and client-ready evidence for trading technology vendors.',
    acquirerOneLiner:
      'FIXFriend is the missing workflow layer between venue change, product update, and client rollout.',
    tenX:
      'Same-day change assessment and certification prep instead of 1–2 weeks of PM, engineering, and QA coordination.',
    quantifiedFrom: '1–2 weeks',
    quantifiedTo: 'Same day',
    quantifiedLabel: 'Time to a certification-ready change pack',
  },
  scope: {
    evidence: 'Hypothesis',
    does: [
      'Ingest venue changes from the channels teams already monitor.',
      'Map impact across products, configurations, certification tasks, and client workflows.',
      'Create change packs that engineering, QA, and rollout teams can use immediately.',
      'Produce client-ready evidence and approval context as the work happens.',
    ],
    doesNot: [
      'Replace FIX engines or OMS / EMS infrastructure.',
      'Normalize every protocol dialect into one universal standard.',
      'Replace venue simulators or venue-side testing environments.',
      'Auto-deploy production changes without human approval.',
    ],
  },
  whyBought: {
    evidence: 'Hypothesis',
    points: [
      'Reduces rollout friction and support drag around venue changes.',
      'Turns a painful multi-team workflow into a differentiated attach product.',
      'Improves client stickiness by making incumbent platforms easier to keep current.',
      'Fits beside existing onboarding, testing, and compliance capabilities rather than replacing them.',
    ],
  },
}
