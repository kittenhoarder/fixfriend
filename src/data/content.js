// All content sourced from fixfriend_artifacts.md.
// Do not modify dates, figures, or company details without updating the
// artifacts file first.

export const THESIS = {
  headline: 'THE COMPLIANCE EVIDENCE GAP\nIN EUROPEAN TRADING INFRASTRUCTURE',
  subheadline:
    'A lean-exit startup building automated protocol change-control and compliance evidence for electronic trading firms. This site lays out the thesis, market, and potential acquirers.',
  stats: [
    {
      id: 'regulatory',
      value: '3',
      label: 'REGULATORY FORCES CONVERGING',
      detail: 'DORA · MiFID 2 RTS 6 · EU AI Act',
    },
    {
      id: 'deals',
      value: '5',
      label: 'VERIFIED DEALS IN 12 MONTHS',
      detail: 'Billions $  in trading infrastructure M&A',
    },
    {
      id: 'firms',
      value: '~1,500',
      label: 'TARGET FIRMS',
      detail: 'Multi-venue connected entities',
    },
  ],
  founderName: 'Owen E. Perry',
  founderTitle: 'Technical Product & Trading Technology Leader',
  founderSummary:
    '14 years in European electronic trading infrastructure. Technical product leader specialising in trading infrastructure at inflection points.',
  linkedinUrl: 'https://www.linkedin.com/in/owenperry/',
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
    body: 'When a venue publishes a FIX specification change, a native API update, or a regulatory-driven protocol change, every connected firm must respond. There is no opt-out.',
    implication:
      'Each trigger starts a 2–4 week manual cycle: assess impact, implement changes, certify, deploy, and produce evidence. With 50–200+ triggers per year across a typical firm\'s venue connections, this is a chronic operational burden.',
  },
  firms: {
    id: 'firms',
    label: 'Electronic\nTrading Firms',
    band: 'demand',
    title: 'Electronic Trading Firms',
    count: '~1,500 multi-venue connected entities (sell-side focus)',
    includes:
      'Investment banks, broker-dealers, market makers, proprietary trading firms, hedge funds with direct market access (DMA)',
    body: 'Every protocol change at every connected venue triggers a compliance cycle: read the spec delta, assess impact, modify gateway configuration, test, certify, deploy, produce evidence for audit.',
    today:
      '2–4 weeks per change. Manual. Recurring. Evidence reconstructed retroactively when the regulator asks. Production incidents when changes are missed or misimplemented.',
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
  body: 'Click any node on the map to explore the detail. The chain runs from regulatory mandates at the top, through exchanges publishing protocol updates, to the trigger that forces compliance cycles at every connected trading firm — and the regulators who demand evidence of compliance.',
  hint: 'Start with the regulatory band at the top, or click the amber trigger node at the centre.',
}

export const GAP = {
  today: {
    title: 'TODAY',
    subtitle: 'The manual compliance cycle',
    tint: 'red',
    steps: [
      {
        number: '01',
        title: 'VENUE PUBLISHES SPEC UPDATE',
        detail: 'Received via email, portal, or PDF. No standard format.',
        time: null,
      },
      {
        number: '02',
        title: 'COMPLIANCE TEAM REVIEWS',
        detail: 'Manual assessment of impact.',
        time: '1–3 days',
      },
      {
        number: '03',
        title: 'ENGINEERING IMPLEMENTS CHANGES',
        detail: 'Gateway configuration, message mapping.',
        time: '3–10 days',
      },
      {
        number: '04',
        title: 'UAT & CERTIFICATION',
        detail: 'Manual test execution against venue certification environment.',
        time: '3–7 days',
      },
      {
        number: '05',
        title: 'PRODUCTION DEPLOYMENT',
        detail: 'Change deployed. Risk of production incidents.',
        time: null,
      },
      {
        number: '06',
        title: 'EVIDENCE ASSEMBLY (WHEN AUDITED)',
        detail:
          'Evidence reconstructed retroactively from emails, tickets, test logs. Often weeks after the change. Incomplete. Expensive.',
        time: null,
        highlight: true,
      },
    ],
    total: '2–4 WEEKS PER CHANGE, PER VENUE, AT MINIMUM',
    risk: 'With 10–20 venue connections and multiple changes per venue per year, a typical sell-side firm faces 50–200+ compliance cycles annually. Each one is manual. Each one carries production risk and audit risk.',
  },
  automated: {
    title: 'WITH FIXFRIEND',
    subtitle: 'Automated protocol change-control',
    tint: 'blue',
    steps: [
      {
        number: '01',
        title: 'SPEC UPDATE DETECTED',
        detail: 'Automated ingestion. Parsed and normalised.',
        time: null,
      },
      {
        number: '02',
        title: 'IMPACT ASSESSMENT',
        detail: 'Automated diff against current gateway configuration.',
        time: 'Minutes',
      },
      {
        number: '03',
        title: 'CHANGE RECOMMENDATION',
        detail: 'Proposed configuration changes with validation rules.',
        time: 'Minutes',
      },
      {
        number: '04',
        title: 'AUTOMATED TESTING',
        detail: 'Continuous validation against venue certification environments.',
        time: 'Hours',
      },
      {
        number: '05',
        title: 'CERTIFIED DEPLOYMENT',
        detail: 'Evidence generated at point of change. Audit-ready.',
        time: null,
      },
      {
        number: '06',
        title: 'CONTINUOUS EVIDENCE',
        detail:
          'Compliance evidence produced continuously and stored. Available instantly when regulator asks. Machine-readable.',
        time: null,
        highlight: true,
      },
    ],
    total: 'HOURS, NOT WEEKS. CONTINUOUS, NOT RETROACTIVE.',
    summary:
      'FIXFriend is the missing automation layer between venue protocol changes and compliance evidence. No one owns this layer today.',
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
        missing: 'Compliance evidence layer. No automated change-control.',
        recentMA: 'Historically highly acquisitive (Broadway Technology, Fidessa, DASH Financial, Clarus FT)',
        fit: 'ION owns the plumbing but not the compliance evidence. FIXFriend bolts directly onto their existing client base.',
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
        missing: 'Automated compliance validation and evidence. VeriFIX supports FIX onboarding and testing but test cases are built manually; there is no continuous automated change-control layer.',
        recentMA: 'CQG (6 Feb 2026, expected close June 2026), Acolin (2025), Signal (2025)',
        fit: 'Broadridge owns connectivity → OMS → execution. Compliance evidence is the missing layer. Founder worked at both Itiviti and Broadridge — including directly with Tbricks and the BTCS stack — and knows the gap firsthand.',
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
        missing: 'Venue connectivity compliance. MX.3 clients connect to multiple venues; protocol changes are a pain point.',
        recentMA: 'Selective. Primarily organic growth and strategic partnerships (AWS, Publicis Sapient).',
        fit: 'Murex clients are exactly the firms that suffer from manual FIX compliance cycles. Embedding FIXFriend into MX.3 is a natural extension.',
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
        missing: 'Compliance evidence automation for venue connectivity changes.',
        recentMA: '7RIDGE acquired TT Dec 2021. Thoma Bravo invested July 2025 (closed Q4 2025). Abel Noser Solutions (Aug 2023). Cboe holds a live exit option (exercisable since Jan 2025, not yet exercised).',
        fit: 'TT connects traders to 100+ exchanges. Every venue protocol change affects their clients. Compliance automation is an upsell to existing client base.',
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
        missing: 'Automated member certification tooling at pan-European scale.',
        recentMA: 'Aquis Exchange (closed 1 July 2025, ~£207M), Worldline EDM business (2025)',
        fit: 'SIX now operates the most venue-diverse exchange group in Europe. Every member connecting to their venues goes through certification. FIXFriend automates this at exchange scale.',
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
        missing: 'Member-facing compliance automation tools.',
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
        missing: 'Harmonised member compliance tooling across 7 markets.',
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
        missing: 'Protocol change management and venue connectivity compliance.',
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
        missing: 'Front-office / connectivity compliance automation.',
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
        missing: 'Continuous automated compliance evidence. Exactpro does project-based testing, not ongoing automation.',
        recentMA: 'Growing through organic expansion.',
        fit: 'Exactpro tests trading systems. FIXFriend automates the ongoing compliance testing triggered by protocol changes. Potential acqui-hire or product integration.',
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
        missing: 'Connectivity-layer compliance evidence (protocol change, venue certification). Adenza is risk/reg; NASDAQ surveillance is trade surveillance, not spec-change automation.',
        recentMA: 'Adenza (2023, $10.5B). Digesting; divesting Nordic power futures to Euronext.',
        fit: 'NASDAQ already sells compliance and surveillance to sell-side firms. FIXFriend\'s protocol/connectivity evidence is an adjacent layer. Long shot while they integrate Adenza; optional if they later extend into venue-certification tooling.',
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
        missing: 'Dedicated connectivity compliance evidence tooling for venue protocol changes.',
        recentMA: 'Axoni post-trade tech (2024). Refinitiv (2021). Selective, large deals.',
        fit: 'LSEG owns trading venues, Refinitiv data, and post-trade tech. Compliance evidence for venue connectivity is a niche they don\'t currently serve. Possible tuck-in if they build out a broader compliance/workflow suite.',
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
        missing: 'Member-facing protocol and connectivity compliance automation.',
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
        missing: 'Connectivity and protocol-change compliance evidence. Compliance suite is KYC/AML/risk, not venue certification.',
        recentMA: 'LiquidityBook (Feb 2025, ~$246M). Building out compliance and execution workflows.',
        fit: 'FactSet is adding execution (LiquidityBook) and compliance (AI suite). FIXFriend\'s connectivity compliance evidence targets the same institutions. Possible add-on if they expand compliance into trading infrastructure.',
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
    'FIXFriend exists because I have spent a career watching this problem compound — and I know exactly who will pay to solve it.',
  linkedinUrl: 'https://www.linkedin.com/in/owenperry/',
}

export const NAV_TABS = [
  { id: 'thesis', label: 'THESIS', icon: 'Home' },
  { id: 'market', label: 'MARKET', icon: 'Globe' },
  { id: 'definition', label: 'DEFINITION', icon: 'BookOpen' },
  { id: 'gap', label: 'GAP', icon: 'AlertTriangle' },
  { id: 'product', label: 'PRODUCT', icon: 'Package' },
  { id: 'acquirers', label: 'ACQUIRERS', icon: 'Crosshair' },
  { id: 'dealflow', label: 'DEAL FLOW', icon: 'TrendingUp' },
]

// Week 1 content: Market Definition & Market Size
export const DEFINITION = {
  origin: {
    title: 'Origin',
    body: "I've spent over a decade inside electronic trading infrastructure — at Nasdaq operating live European markets, and at multiple institutional trading solution companies supporting FIX-based trading systems for Tier-1/2/3 institutions. I've personally managed highly interconnected trading systems and have encountered this precise problem personally, multiple times over my career. The pattern with this problem was this: every protocol change triggered the same manual cycle. Someone read the PDF. Tests were rebuilt. Many times the specifications differed from the software implementation. Evidence was assembled retroactively. The problem was absorbed into engineering headcount and never automated.\n\nThat's the gap FIXFriend is built to close. But I hold the idea loosely. The core insight — that verification in electronic trading remains manual despite enormous system complexity — is what I'm confident in. The exact form the solution takes will be shaped by what I learn from the market.\n\nOne live constraint is that regulated trading firms are cautious about deploying AI inside their infrastructure. Local deployment addresses the data sovereignty concern, but adoption friction is real and I'm not pretending otherwise. The opportunity may be in the workflow layer above the systems, not inside them. I'm currently testing where the boundary sits.",
  },
  marketDefinition: {
    title: 'Market Definition',
    body: 'Modern financial markets are fully electronic. Trading firms connect directly to exchanges through standardized messaging gateways that transmit every order placed in the market.\n\nThese connections are regulated access points to public markets. Firms cannot trade without maintaining them.\n\nRegulators require firms to demonstrate that trading systems remain safe after every infrastructure change.\n\nToday, this verification process is still largely manual.\n\nFIXFriend defines a missing category:\n\n**→ Continuous verification and maintenance of market connectivity controls.**\n\nFIXFriend **begins** as compliance automation and **expands** into the operational control plane governing how trading firms deploy, validate, and maintain trading infrastructure.',
  },
  marketSize: {
    title: 'Market Size',
    entry: {
      label: 'Entry Market',
      body: 'Organizations operating regulated electronic market connectivity globally ≈ 6,000.\n\nTypical annual license: €50k–€200k (blended €75k).\n\n**Entry TAM:** 6,000 × €75k ≈ **€450M**\n\nThis represents protocol verification and market access control automation.',
    },
    expansion: {
      label: 'Expansion Market',
      body: 'Once embedded, FIXFriend expands into broader electronic trading infrastructure lifecycle automation, including testing governance, release management, configuration control, and supervised development workflows.',
    },
    sam: 'High-automation firms (~25%) ≈ 1,500 entities → **€112M**.',
    som: "FIXFriend's objective is rapid strategic embed rather than maximum market penetration. Target: 10–25 institutional customers, €1M–€2M ARR, deployment across multiple venues per client. At this stage, FIXFriend becomes operationally embedded within trading change-control workflows, creating high switching costs and strategic acquisition relevance.",
  },
}

// Week 1 content: Product description
export const PRODUCT_CONTENT = {
  solution: {
    title: 'The FIXFriend Solution',
    intro: 'FIXFriend introduces an automated change‑control layer for trading infrastructure.\n\nA locally deployed system that:',
    bullets: [
      'monitors exchange specification updates',
      'detects semantic protocol changes',
      'maps downstream system impact',
      'generates regression tests',
      'executes validation workflows',
      'produces audit‑ready compliance evidence',
    ],
    supervised: {
      title: 'Supervised Development Automation',
      body: "Compliance evidence is the entry point, not the ceiling. Once protocol changes are identified and validated, FIXFriend generates the implementation artifacts engineering teams need: configuration updates, regression tests, validation scenarios, and proposed gateway change sets. All outputs enter an approval workflow — engineers review before anything is deployed. This is not autonomous operation. It is supervised automation that reduces repetitive maintenance work while preserving full auditability and human control. Over time, gateway maintenance shifts from manual interpretation toward continuously validated infrastructure.",
    },
  },
  whatCustomersBuy: {
    title: 'What Customers Buy',
    label: 'Continuous Market Access Control Evidence',
    body: 'A standardized output showing: detected changes, affected systems, executed validation, control verification status, required remediation. This replaces manual evidence production already required by regulation.',
  },
  targetBuyer: {
    title: 'Target Buyer & Economic Logic',
    primary: 'Head of Electronic Trading / Trading Technology Lead',
    budget: 'FIXFriend does not create new budget. It reallocates existing spend: trading infrastructure engineering, QA automation, and operational risk management. The buyer is not approving a new line item — they are replacing a cost they already carry, unreliably, with a system that produces the same output continuously and automatically.',
    triggers: ['Production incident', 'Failed exchange certification', 'Regulatory audit', 'Departure of key engineer'],
  },
}

export const PRODUCT_PANIC_SCENARIO = {
  title: 'Protocol Panic',
  subtitle:
    'Play the incident. A venue publishes a mandatory FIX change and the certification window closes in 9 days.',
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
        label: 'Compliance evidence pack',
        detail: 'Controls, approvals, test outputs, and cert trail.',
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
      'Engineering has to interpret the change manually.',
      'Evidence is left to the end, where audit risk compounds.',
    ],
  },
  fixfriend: {
    runbook: [
      {
        id: 'diff',
        label: 'Semantic diff parsed',
        value: 'Mandatory field change normalized and tagged by venue + message type.',
      },
      {
        id: 'impact',
        label: 'Impacted assets mapped',
        value: 'Gateway config, cert suite, and evidence controls linked automatically.',
      },
      {
        id: 'tests',
        label: 'Validation queued',
        value: 'Regression pack generated with venue certification checklist attached.',
      },
      {
        id: 'evidence',
        label: 'Evidence generated',
        value: 'Change record, approvals, and certification proof assembled continuously.',
      },
    ],
    outcomes: [
      'Hours instead of weeks.',
      'Audit-ready evidence at the point of change.',
      'Human review preserved before anything ships.',
    ],
  },
}
