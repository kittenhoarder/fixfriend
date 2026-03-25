// Core market and company facts are maintained in fixfriend_artifacts.md and
// supplemented with current public-source links embedded below when the site
// needs fresher acquirer research.

export const THESIS = {
  headline: 'THE MISSING WORKFLOW LAYER\nFOR VENUE CHANGE RESPONSE',
  subheadline:
    'FIXFriend gives trading technology vendors same-day, certification-ready change packs for minor venue updates — and a structured escalation path for major ones. Built to win on workflow. Positioned to sell strategically.',
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
    'FIXFriend turns venue change notices into autonomous minor-change execution, coordinated major-change projects, and audit-ready evidence for trading technology vendors.',
  acquirerOneLiner:
    'FIXFriend is the workflow and context layer between venue change, UAT execution, and client rollout.',
  tenXClaim:
    'Same-day UAT-ready change bundles for minor venue updates instead of 1–2 weeks of PM, engineering, and QA coordination.',
  leanExitWhy:
    'This is not a scale-first SaaS story. It is a wedge-first go-to-market: win the workflow directly, then keep open the strategic paths to partner, embed, or sell into larger platforms.',
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
      'First validation loop is buyer and acquirer discovery, not generic SaaS GTM.',
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
    body: 'This is where the initial wedge sits. Vendors receive short-notice venue changes, coordinate research across product, engineering, QA, and customer teams, then absorb reputation risk when certification drags or venue-side issues surface late.',
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
  body: 'Click any node on the map to explore the detail. The market thesis shows the missing vendor layer between venue changes and downstream clients. That is where FIXFriend aims to live: between the notice, the rollout response, and the evidence trail.',
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
    subtitle: 'Agent-operated venue-change response system',
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
        detail: 'Engineering-ready requirements, rollout notes, and certification tasks are created in one UAT-ready bundle.',
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

export const ACQUIRER_PAGE_OVERVIEW = {
  title: 'Targets, Proof, and Current Market Flow',
  summary:
    'This page combines the target list and the market proof. The job is to show which firms are consolidating, how they appear to buy, and who is most likely to sponsor a small strategic acquisition.',
  bullets: [
    'Tier 1 and Tier 2 carry the deepest research because they sit closest to the workflow FIXFriend actually improves.',
    'Recent deals matter as pattern evidence, not as proof that FIXFriend is already positioned for purchase.',
    'When sourcing or adviser involvement is inferred rather than disclosed, the card says so explicitly.',
  ],
  marketFlow: [
    'Broadridge completed Acolin on January 6, 2026 and announced CQG on February 6, 2026.',
    'Trading Technologies acquired OpenGamma on December 17, 2025 after earlier expansion into fixed income through AxeTrading.',
    'SIX completed Aquis on July 1, 2025 and acquired Baymarkets on November 25, 2025.',
    'Deutsche Börse announced Allfunds on January 21, 2026 and the remaining ISS STOXX minority stake on February 11, 2026.',
  ],
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
        ownershipDetail: 'Founder-controlled',
        revenue: '$2.3B+',
        oneliner: 'OMS, EMS, and capital-markets workflow assets at scale',
        decisionSpeed: 'fast',
        owns: 'Fidessa, Broadway Technology, DASH, Clarus, and a broad workflow stack across front, middle, and post-trade capital-markets operations.',
        missing: 'No visible product layer owns venue notices, context recovery, certification coordination, and evidence generation as one response workflow.',
        strategicFit: 'ION already owns the plumbing. FIXFriend would sit above that stack as a thin venue-change response layer rather than another core platform.',
        howTheyBuy: 'Founder-led and centralized. Public sources show repeated control acquisitions in adjacent workflow businesses, but the exact sourcing route is not disclosed in the linked materials.',
        sourcingConfidence: 'Needs further diligence',
        recentDeals: [
          { label: 'Prelios', detail: 'Closed July 19, 2024 through X3, an ION subsidiary, for EUR 1.35bn.' },
          { label: 'Clarus Financial Technology', detail: 'Acquired September 10, 2021 to deepen cleared derivatives and post-trade capabilities.' },
        ],
        decisionMakers: [
          { name: 'Andrea Pignataro', role: 'Founder and CEO', note: 'Likely final sponsor on strategic acquisitions.' },
          { name: 'Carlo Purassanta', role: 'EVP, Strategy and Corporate Development', note: 'Direct corporate development lead named publicly by ION.' },
        ],
        sourceLinks: [
          { label: 'ION closes Prelios acquisition', url: 'https://iongroup.com/press-release/group/ion-group-announces-closing-of-prelios-acquisition/' },
          { label: 'ION appoints Carlo Purassanta', url: 'https://iongroup.com/press-release/corporates/carlo-purassanta-appointed-executive-vice-president-strategy-and-corporate-development-at-ion/' },
          { label: 'ION acquires Clarus', url: 'https://iongroup.com/press-release/markets/ion-acquires-clarus-financial-technology/' },
        ],
      },
      {
        id: 'broadridge',
        logoKey: 'broadridge',
        name: 'Broadridge',
        ownership: 'Public',
        ownershipDetail: 'NYSE: BR',
        revenue: '$5B+',
        oneliner: 'Connectivity, OMS, onboarding, execution, and distribution',
        decisionSpeed: 'medium',
        owns: 'Connectivity and order management through BTCS, including Itiviti, ULLINK, Tbricks, VeriFIX, managed FIX services, and NYFIX. Execution is expanding through CQG. Distribution expanded through Acolin.',
        missing: 'VeriFIX covers onboarding and testing, but there is still no agent layer that sources specs, classifies change, coordinates minor versus major work, and preserves live evidence across the workflow.',
        strategicFit: 'Broadridge is the cleanest stack fit. Connectivity, OMS, execution, onboarding, and distribution are already there; FIXFriend would add response orchestration rather than another core system.',
        howTheyBuy: 'The public signal is relationship-led platform expansion. Broadridge announced a strategic integration with CQG in November 2025 and followed with a full acquisition agreement on February 6, 2026.',
        sourcingConfidence: 'Relationship-led',
        recentDeals: [
          { label: 'Acolin', detail: 'Completed January 6, 2026 to expand fund distribution infrastructure.' },
          { label: 'CQG', detail: 'Acquisition announced February 6, 2026 after a prior strategic integration announcement in November 2025.' },
        ],
        decisionMakers: [
          { name: 'Chris Perry', role: 'President', note: 'Official bio states he oversees international expansion and corporate development.' },
          { name: 'Frank Troise', role: 'President, BTCS and Head of Global Technology and Operations', note: 'Most directly connected to the stack where FIXFriend would attach.' },
          { name: 'Tim Gokey', role: 'Chief Executive Officer', note: 'Likely executive approver for strategic tuck-ins.' },
        ],
        sourceLinks: [
          { label: 'Broadridge leadership team', url: 'https://www.broadridge.com/our-leadership-team' },
          { label: 'Broadridge completes Acolin', url: 'https://www.broadridge.com/press-release/2026/broadridge-completes-acquisition-of-acolin' },
          { label: 'Broadridge to acquire CQG', url: 'https://www.broadridge.com/press-release/2026/broadridge-enters-into-agreement-to-acquire-cqg' },
          { label: 'Broadridge and CQG strategic integration', url: 'https://www.broadridge.com/press-release/2025/broadridge-and-cqg-enter-into-strategic-technology-integration-agreement' },
          { label: 'Broadridge completes Itiviti acquisition', url: 'https://www.prnewswire.com/news-releases/broadridge-completes-acquisition-of-itiviti-301312894.html' },
        ],
      },
      {
        id: 'murex',
        logoKey: 'murex',
        name: 'Murex',
        ownership: 'Private',
        ownershipDetail: 'Founder-led',
        revenue: 'Undisclosed',
        revenueNote: 'estimates remain wide',
        oneliner: 'MX.3 trading, risk, collateral, and MXSaaS platform',
        decisionSpeed: 'fast',
        owns: 'MX.3 across trading, risk, collateral, treasury, and investment management, with a strong managed-services and cloud migration push through MXSaaS.',
        missing: 'The pain exists in the client base, but public evidence still points more to organic build and partnerships than to active acquisitions in this niche.',
        strategicFit: 'This is a fit story more than an M&A-pattern story. Murex faces the right workflow problem, but the public acquisition signal is weak.',
        howTheyBuy: 'Publicly, Murex currently looks independence-led and partnership-led. The official signal is organic expansion around MX.3 and MXSaaS rather than visible acquisitions.',
        sourcingConfidence: 'Needs further diligence',
        recentDeals: [
          { label: 'AWS collaboration', detail: 'Announced September 29, 2025 as a strategic multi-year collaboration to scale managed services.' },
          { label: 'Alveo partnership', detail: 'Announced March 5, 2024 to strengthen data-rich investment-management workflows.' },
        ],
        decisionMakers: [
          { name: 'Elias Eddé', role: 'Chief Executive Officer', note: 'Current operating leader and likely sponsor if M&A posture changes.' },
          { name: 'Maroun Eddé', role: 'Executive Chairman', note: 'Still central to strategic direction and governance.' },
        ],
        sourceLinks: [
          { label: 'Murex governance transition', url: 'https://www.murex.com/en/news/murex-elias-edde-takes-ceo-role-financial-technology-leader-governance-transition-maroun-edde' },
          { label: 'Murex and AWS collaboration', url: 'https://www.murex.com/en/news/murex-announces-strategic-multi-year-global-aws-collaboration-agreement-accelerate-ambitious' },
          { label: 'Murex and Alveo partnership', url: 'https://www.murex.com/en/news/murex-alveo-partner-provide-comprehensive-data-driven-ims-solution' },
        ],
      },
      {
        id: 'tt',
        logoKey: 'tt',
        name: 'Trading Technologies',
        ownership: 'Private',
        ownershipDetail: '7RIDGE-backed',
        revenue: 'Undisclosed',
        oneliner: 'Execution, analytics, compliance, and multi-asset workflow expansion',
        decisionSpeed: 'fast',
        owns: 'Derivatives execution infrastructure, multi-venue connectivity, compliance and surveillance tooling, and a growing analytics layer across listed and OTC workflows.',
        missing: 'The platform reaches 100+ exchanges, but FIXFriend’s venue-change coordination layer is still absent from the stack.',
        strategicFit: 'TT already knows how to buy adjacent workflow technology. FIXFriend fits as a small control product inside a platform that already lives close to the venue edge.',
        howTheyBuy: 'Executive-sponsored platform expansion backed by sponsor capital. Public acquisitions show targeted product and analytics tuck-ins; adviser involvement on larger deals is plausible but not disclosed in the linked sources.',
        sourcingConfidence: 'Needs further diligence',
        recentDeals: [
          { label: 'OpenGamma', detail: 'Acquired December 17, 2025 to add margin and capital optimization analytics.' },
          { label: 'AxeTrading', detail: 'Acquired January 12, 2023 to accelerate multi-asset expansion into fixed income.' },
        ],
        decisionMakers: [
          { name: 'Justin Llewellyn-Jones', role: 'Chief Executive Officer', note: 'Most visible executive sponsor for platform expansion.' },
          { name: 'Jason Shaffer', role: 'Chief Technology and Product Officer', note: 'Likely product-side sponsor for adjacent workflow acquisitions.' },
          { name: 'Roger Mills', role: 'Chief Financial Officer', note: 'Likely part of the acquisition and integration committee; ownership-side mapping still merits one more diligence pass.' },
        ],
        sourceLinks: [
          { label: 'TT acquires OpenGamma', url: 'https://tradingtechnologies.com/news-releases/trading-technologies-acquires-opengamma-leader-in-margin-and-capital-optimization-analytics/' },
          { label: 'TT CEO transition', url: 'https://tradingtechnologies.com/news-releases/trading-technologies-promotes-justin-llewellyn-jones-to-ceo-keith-todd-to-deputy-chairman/' },
          { label: 'TT management team', url: 'https://tradingtechnologies.com/about-us/meet-the-team/' },
          { label: 'TT acquires AxeTrading', url: 'https://tradingtechnologies.com/news-releases/trading-technologies-acquires-axetrading-further-accelerating-multi-asset-class-expansion-with-major-move-into-fixed-income-markets/' },
        ],
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
        ownershipDetail: 'Swiss bank-owned',
        revenue: '~CHF 1.6B',
        oneliner: 'Exchanges, post-trade, and pan-European market structure buildout',
        decisionSpeed: 'fast',
        owns: 'SIX Swiss Exchange, BME, Aquis, post-trade infrastructure, and securities services spanning multiple European market structures.',
        missing: 'No visible product layer automates member-facing certification, protocol evidence, and cross-venue change response at group scale.',
        strategicFit: 'SIX is now one of the clearest exchange-side fits. More venues and more post-trade technology mean more member certification complexity.',
        howTheyBuy: 'Executive-led exchange and post-trade expansion. Public releases show a direct pattern of buying core market-structure assets and integrating them into the group platform.',
        sourcingConfidence: 'Publicly disclosed',
        recentDeals: [
          { label: 'Aquis Exchange', detail: 'Completed July 1, 2025, extending SIX across 16 EU and UK markets.' },
          { label: 'Baymarkets', detail: 'Acquired November 25, 2025 to modernize clearing technology.' },
        ],
        decisionMakers: [
          { name: 'Bjørn Sibbern', role: 'Chief Executive Officer', note: 'Primary executive sponsor for group strategy.' },
          { name: 'Tomas Kindler', role: 'Global Head Exchanges', note: 'Likely venue-side sponsor for exchange and certification workflow gaps.' },
          { name: 'Daniel Schmucki', role: 'Chief Financial Officer', note: 'Likely part of major transaction approval.' },
        ],
        sourceLinks: [
          { label: 'SIX completes acquisition of Aquis', url: 'https://www.six-group.com/en/newsroom/media-releases/2025/20250701-completion-acquisition-aquis.html' },
          { label: 'SIX acquires Baymarkets', url: 'https://www.six-group.com/en/newsroom/media-releases/2025/20251125-baymarkets-acquisition.html' },
          { label: 'SIX executive board', url: 'https://www.six-group.com/en/company/governance/executive-board.html' },
          { label: 'SIX board of directors', url: 'https://www.six-group.com/en/company/governance/board-of-directors.html' },
        ],
      },
      {
        id: 'dbg',
        logoKey: 'deutsche-boerse',
        name: 'Deutsche Börse',
        ownership: 'Public',
        ownershipDetail: 'ETR: DB1',
        revenue: '€4B+',
        oneliner: 'Exchange, clearing, index, software, and investment-management infrastructure',
        decisionSpeed: 'slow',
        owns: 'Eurex, Xetra, Clearstream, ISS STOXX, SimCorp, and a broad investment-management software and data stack.',
        missing: 'The strategic fit is credible, but the path is formal and slower. No public signal suggests a push into small workflow acquisitions around venue certification.',
        strategicFit: 'The problem exists inside the Eurex ecosystem, but this is a longer-cycle public-company path rather than a fast tuck-in target.',
        howTheyBuy: 'Formal public-company M&A with stated value-accretive logic. The linked sources support disciplined strategic acquisitions; adviser mix is not disclosed here and should be treated as inference.',
        sourcingConfidence: 'Needs further diligence',
        recentDeals: [
          { label: 'Allfunds Group', detail: 'Recommended acquisition agreement announced January 21, 2026.' },
          { label: 'ISS STOXX minority stake', detail: 'Agreed February 11, 2026 to acquire the remaining 20% minority stake from General Atlantic.' },
        ],
        decisionMakers: [
          { name: 'Stephan Leithner', role: 'Chief Executive Officer', note: 'Top-level strategic sponsor.' },
          { name: 'Jens Schulte', role: 'Chief Financial Officer', note: 'Likely central to transaction evaluation.' },
          { name: 'Christian Kromann', role: 'Executive Board, Investment Management Solutions', note: 'Relevant for software and workflow adjacencies.' },
        ],
        sourceLinks: [
          { label: 'Deutsche Börse and Allfunds agreement', url: 'https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Deutsche-B-rse-Group-and-Allfunds-Group-Sign-Agreement-on-Recommended-Acquisition-of-Allfunds-Group-4914918' },
          { label: 'Deutsche Börse acquires ISS STOXX minority stake', url: 'https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Deutsche-B-rse-Group-to-Acquire-General-Atlantic-s-Minority-Stake-in-ISS-STOXX-4948682' },
          { label: 'Deutsche Börse executive board', url: 'https://www.deutsche-boerse.com/dbg-en/about-us/deutsche-boerse-group/executive-board' },
        ],
      },
      {
        id: 'euronext',
        logoKey: 'euronext',
        name: 'Euronext',
        ownership: 'Public',
        ownershipDetail: 'Pan-European exchange',
        revenue: '€1.5B+',
        oneliner: 'Federal market infrastructure model with active strategic development',
        decisionSpeed: 'medium',
        owns: 'Pan-European cash, derivatives, clearing, and software infrastructure across multiple national markets.',
        missing: 'There is clear strategic-development capacity, but the specific fit to venue-change workflow still needs proof through direct conversations.',
        strategicFit: 'Euronext has the right structural problem: multiple markets, multiple protocol variants, and a public M&A machine that already integrates recurring infrastructure businesses.',
        howTheyBuy: 'Strategy-led M&A is visible publicly, including a named strategic-development and M&A lead. The federal model makes small infrastructure tuck-ins plausible when they fit the broader platform.',
        sourcingConfidence: 'Publicly disclosed',
        recentDeals: [
          { label: 'Admincontrol', detail: 'Completed May 13, 2025 to add recurring software revenue.' },
          { label: 'ATHEX Group', detail: 'Successful tender announced November 19, 2025, reaching about 74.25% of voting rights.' },
        ],
        decisionMakers: [
          { name: 'Stéphane Boujnah', role: 'Chief Executive Officer and Chairman of the Managing Board', note: 'Visible top-level sponsor for strategic direction.' },
          { name: 'Camille Beudin', role: 'Chief Diversification Officer', note: 'Publicly identified with strategic development and M&A.' },
          { name: 'Giorgio Modica', role: 'Chief Financial Officer', note: 'Likely part of evaluation and approval.' },
        ],
        sourceLinks: [
          { label: 'Euronext full-year 2025 results', url: 'https://www.euronext.com/en/investor-relations/financial-information/news/euronext-publishes-q4-and-full-year-2025-results' },
          { label: 'Euronext and Admincontrol announcement', url: 'https://www.euronext.com/sites/default/files/2025-03/20250313_Euronext%20Admincontrol%20announcement.pdf' },
          { label: 'Euronext announces success of ATHEX exchange offer', url: 'https://www.euronext.com/en/investor-relations/financial-information/news/euronext-announces-success-voluntary-share-exchange' },
          { label: 'Euronext to acquire Nasdaq Nordic power futures business', url: 'https://www.euronext.com/en/about/media/euronext-press-releases/euronext-acquire-nasdaqs-nordic-power-futures-business' },
          { label: 'Euronext managing board', url: 'https://www.euronext.com/en/investor-relations/corporate-governance/managing-board' },
        ],
      },
    ],
  },
  {
    tier: 3,
    tierLabel: 'REGTECH / COMPLIANCE ADJACENCY',
    tierSubtitle: 'Same buyer, lighter probability',
    tierColor: 'indigo',
    acquirers: [
      {
        id: 'kaizen',
        logoKey: 'kaizen',
        name: 'Kaizen Reporting',
        ownership: 'PE-backed',
        ownershipDetail: 'Guidepost Growth Equity',
        revenue: 'Private',
        oneliner: 'Regulatory reporting testing and surveillance',
        decisionSpeed: 'fast',
        owns: 'Regulatory reporting accuracy testing, control evidence, and transaction surveillance.',
        missing: 'Adjacent buyer, but not the core venue-change workflow owner today.',
        strategicFit: 'Possible adjacency play if FIXFriend is framed as evidence and control infrastructure rather than exchange workflow.',
      },
      {
        id: 'smartstream',
        logoKey: 'smartstream',
        name: 'SmartStream Technologies',
        ownership: 'Sovereign wealth-backed',
        ownershipDetail: 'ICD-owned',
        revenue: '~£43M',
        revenueNote: 'FY2023',
        oneliner: 'Reconciliation, controls, and post-trade operations',
        decisionSpeed: 'medium',
        owns: 'Reconciliation, post-trade controls, and reference data management.',
        missing: 'Still further from front-office venue-change response than Tier 1 or Tier 2 targets.',
        strategicFit: 'More plausible as a control-adjacency conversation than as a primary acquirer target.',
      },
      {
        id: 'exactpro',
        logoKey: 'exactpro',
        name: 'Exactpro',
        ownership: 'Private',
        ownershipDetail: 'Independent specialist',
        revenue: 'Private',
        oneliner: 'Testing and QA for exchanges and trading venues',
        decisionSpeed: 'fast',
        owns: 'Testing and QA services for exchanges, venues, and trading systems.',
        missing: 'Strong on testing, weaker on owning the full workflow from notice to rollout to evidence.',
        strategicFit: 'Best treated as product adjacency, integration path, or talent-rich partner target.',
      },
      {
        id: 'quod',
        logoKey: 'quod',
        name: 'Quod Financial',
        ownership: 'Private',
        ownershipDetail: 'Founder-led / independent',
        revenue: 'Undisclosed',
        oneliner: 'Multi-asset OMS, EMS, SOR, and pre-trade automation',
        decisionSpeed: 'medium',
        owns: 'Multi-asset OMS/OEMS, smart order routing, algorithmic execution, pre-trade automation, auditability, and broad front-to-middle-office trading workflows.',
        missing: 'No visible layer owns venue notices, context recovery, certification coordination, and evidence generation as one dedicated response workflow.',
        strategicFit: 'Quod is a real product fit. FIXFriend would attach naturally to an OMS/EMS and automation stack already used by banks, brokers, and liquidity providers.',
        howTheyBuy: 'Publicly, Quod looks product-led and expansion-led rather than visibly acquisitive. Strategic fit is strong, but public evidence for acquisition pace or financing appetite is limited and should be treated as diligence work, not assumption.',
        sourcingConfidence: 'Needs further diligence',
        recentDeals: [
          { label: 'Co-CEO transition', detail: 'Medan Gabbay was appointed Co-CEO effective March 21, 2025, signaling a broader leadership structure as the company scales.' },
          { label: 'North American expansion', detail: 'Quod announced a New York head-of-sales hire in July 2024, which supports expansion intent but not a disclosed M&A pattern.' },
        ],
        decisionMakers: [
          { name: 'Ali Pichvai', role: 'Co-CEO and Founder', note: 'Most likely top-level sponsor if Quod ever pursues a strategic tuck-in.' },
          { name: 'Medan Gabbay', role: 'Co-CEO', note: 'Deep product and commercial operator with current leadership authority across the platform.' },
        ],
        sourceLinks: [
          { label: 'Quod homepage and product overview', url: 'https://www.quodfinancial.com/' },
          { label: 'Quod OMS overview', url: 'https://www.quodfinancial.com/order-management-system-oms/' },
          { label: 'Quod Equities O/EMS overview', url: 'https://www.quodfinancial.com/markets/equities-oms/' },
          { label: 'Medan Gabbay appointed Co-CEO', url: 'https://www.quodfinancial.com/medan-gabbay-co-ceo-appointment/' },
          { label: 'Quod news and press', url: 'https://www.quodfinancial.com/resources/news-press/' },
          { label: 'Quod about us', url: 'https://www.quodfinancial.com/about-us/' },
        ],
      },
    ],
  },
  {
    tier: 4,
    tierLabel: 'LONG-SHOT / OPTIONALITY',
    tierSubtitle: 'Lower probability and longer cycles',
    tierColor: 'indigo',
    acquirers: [
      {
        id: 'nasdaq',
        logoKey: 'nasdaq',
        name: 'NASDAQ',
        ownership: 'Public',
        ownershipDetail: 'NASDAQ: NDAQ',
        revenue: '$6B+',
        oneliner: 'Exchange, market tech, surveillance, and Adenza',
        decisionSpeed: 'slow',
        owns: 'Exchanges, surveillance, matching and clearing technology, and the Adenza risk and regtech stack.',
        missing: 'Not visibly building the specific venue-change workflow layer FIXFriend addresses.',
        strategicFit: 'Strategically relevant, but not a near-term target while digestion of larger acquisitions continues.',
      },
      {
        id: 'lseg',
        logoKey: 'lseg',
        name: 'LSEG',
        ownership: 'Public',
        ownershipDetail: 'London Stock Exchange Group',
        revenue: '£8B+',
        oneliner: 'Exchange, data, post-trade, and workflow distribution',
        decisionSpeed: 'slow',
        owns: 'Trading venues, Refinitiv, FTSE Russell, LCH, and post-trade technology.',
        missing: 'The gap is visible, but the likely buy path is long and selective.',
        strategicFit: 'Optional long-range fit if LSEG pushes further into agent-assisted operational workflows.',
      },
      {
        id: 'factset',
        logoKey: 'factset',
        name: 'FactSet',
        ownership: 'Public',
        ownershipDetail: 'NYSE: FDS',
        revenue: '$2B+',
        oneliner: 'Data, analytics, OMS, and compliance adjacencies',
        decisionSpeed: 'medium',
        owns: 'Research, analytics, LiquidityBook, and a growing compliance tooling footprint.',
        missing: 'Still one step removed from the venue-certification problem.',
        strategicFit: 'Interesting only if the compliance and workflow thesis broadens materially.',
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
  { id: 'overview', label: 'OVERVIEW', icon: 'Home', group: 'buyer' },
  { id: 'product', label: 'PRODUCT', icon: 'Package', group: 'buyer' },
  { id: 'sales', label: 'SALES', icon: 'Target', group: 'buyer' },
  { id: 'financials', label: 'FINANCIALS', icon: 'LineChart', group: 'buyer' },
  { id: 'operations', label: 'OPERATIONS', icon: 'Settings', group: 'buyer' },
  { id: 'market', label: 'MARKET', icon: 'Globe', group: 'strategy' },
  { id: 'leanExit', label: 'LEAN EXIT', icon: 'Briefcase', group: 'strategy' },
  { id: 'acquirers', label: 'ACQUIRERS', icon: 'Crosshair', group: 'strategy' },
  { id: 'definition', label: 'DEFINITION', icon: 'BookOpen', group: 'strategy' },
]

export const BRAND = {
  studio: {
    name: 'PRDCTV.WORK',
    tagline: 'Builds focused software that turns complexity into clear action.',
    about: 'prdctv.work started from a simple observation: most people and teams are not short on information, tools, or ambition. They are short on clarity — a clear view of what matters, what to do next, and what can be ignored.',
  },
  umbrella: {
    name: 'SynthAgents',
    tagline: 'Helps capital markets teams turn operational complexity into clear, reviewed action.',
    description: 'SynthAgents is the product umbrella within PRDCTV.WORK focused on capital markets operational workflows. Each product does one job well: ingest a dense artifact, surface what matters, generate a reviewed output, and deliver it into the systems teams already use.',
  },
  mvpDefinition: 'We convert dense external and internal control artifacts into reviewed operational actions, evidence packs, and system-of-record updates for trading technology and market-data teams.',
  positioningStatement: 'The workflow control layer between operational artifacts and governed execution in capital markets.',
  products: [
    {
      id: 'fixfriend',
      name: 'FIXFriend',
      status: 'live',
      statusTone: 'success',
      tagline: 'Change-readiness workflow for trading technology teams.',
      description: 'Turns external venue notices, FIX specs, and broker bulletins into reviewed impact briefs, readiness packs, and Jira/Slack delivery — with a full audit trail.',
    },
    {
      id: 'datarights',
      name: 'DataRights',
      status: 'in development',
      statusTone: 'info',
      tagline: 'Market-data rights and cost-impact assessment.',
      description: 'Before a team buys, reuses, or automates against market data, DataRights tells them what rights they need, what the incremental cost will be, and what questions still need answering.',
    },
    {
      id: 'declare',
      name: 'Declare',
      status: 'roadmap',
      statusTone: 'neutral',
      tagline: 'Declaration, attestation, and audit-evidence workflows.',
      description: 'The operating system for classifying, declaring, and defending market-data usage — turning declaration scramble and audit prep into a governed, repeatable workflow.',
    },
  ],
}

export const FINANCIAL_MODEL = {
  currency: '€',
  startingCash: 400000,
  totalRevenue12M: 210000,
  totalBurn12M: -118500,
  endingCash: 281500,
  avgMonthlyBurn: 2842,
  breakEvenCustomers: 3,
  breakEvenArr: 360000,
  months: [
    { label: 'Apr 26', pilotsNew: 0, pilotRev: 0, prodActive: 0, prodRev: 0, totalRev: 0, cogs: 0, grossProfit: 0, founder: 12000, engineering: 5000, aiCloud: 1500, travel: 1500, software: 500, ga: 1200, legal: 6000, misc: 500, totalOpex: 28200, ebitda: -28200, openingCash: 400000, closingCash: 371800 },
    { label: 'May 26', pilotsNew: 0, pilotRev: 0, prodActive: 0, prodRev: 0, totalRev: 0, cogs: 0, grossProfit: 0, founder: 12000, engineering: 5000, aiCloud: 1600, travel: 1500, software: 500, ga: 1200, legal: 0, misc: 500, totalOpex: 22300, ebitda: -22300, openingCash: 371800, closingCash: 349500 },
    { label: 'Jun 26', pilotsNew: 0, pilotRev: 0, prodActive: 0, prodRev: 0, totalRev: 0, cogs: 0, grossProfit: 0, founder: 12000, engineering: 5000, aiCloud: 1700, travel: 1500, software: 500, ga: 1200, legal: 0, misc: 500, totalOpex: 22400, ebitda: -22400, openingCash: 349500, closingCash: 327100 },
    { label: 'Jul 26', pilotsNew: 1, pilotRev: 22500, prodActive: 0, prodRev: 0, totalRev: 22500, cogs: 3375, grossProfit: 19125, founder: 12000, engineering: 5000, aiCloud: 1800, travel: 1500, software: 500, ga: 1200, legal: 0, misc: 500, totalOpex: 22500, ebitda: -3375, openingCash: 327100, closingCash: 323725 },
    { label: 'Aug 26', pilotsNew: 0, pilotRev: 0, prodActive: 0, prodRev: 0, totalRev: 0, cogs: 0, grossProfit: 0, founder: 12000, engineering: 5000, aiCloud: 1900, travel: 1500, software: 500, ga: 1200, legal: 0, misc: 500, totalOpex: 22600, ebitda: -22600, openingCash: 323725, closingCash: 301125 },
    { label: 'Sep 26', pilotsNew: 1, pilotRev: 22500, prodActive: 0, prodRev: 0, totalRev: 22500, cogs: 3375, grossProfit: 19125, founder: 12000, engineering: 5000, aiCloud: 2000, travel: 1500, software: 500, ga: 1200, legal: 0, misc: 500, totalOpex: 22700, ebitda: -3575, openingCash: 301125, closingCash: 297550 },
    { label: 'Oct 26', pilotsNew: 0, pilotRev: 0, prodActive: 1, prodRev: 10000, totalRev: 10000, cogs: 1500, grossProfit: 8500, founder: 12000, engineering: 7000, aiCloud: 2100, travel: 2500, software: 500, ga: 1200, legal: 0, misc: 500, totalOpex: 25800, ebitda: -17300, openingCash: 297550, closingCash: 280250 },
    { label: 'Nov 26', pilotsNew: 1, pilotRev: 22500, prodActive: 1, prodRev: 10000, totalRev: 32500, cogs: 4875, grossProfit: 27625, founder: 12000, engineering: 7000, aiCloud: 2200, travel: 2500, software: 500, ga: 1200, legal: 0, misc: 500, totalOpex: 25900, ebitda: 1725, openingCash: 280250, closingCash: 281975 },
    { label: 'Dec 26', pilotsNew: 0, pilotRev: 0, prodActive: 2, prodRev: 20000, totalRev: 20000, cogs: 3000, grossProfit: 17000, founder: 12000, engineering: 7000, aiCloud: 2300, travel: 2500, software: 500, ga: 1200, legal: 0, misc: 500, totalOpex: 26000, ebitda: -9000, openingCash: 281975, closingCash: 272975 },
    { label: 'Jan 27', pilotsNew: 0, pilotRev: 0, prodActive: 2, prodRev: 20000, totalRev: 20000, cogs: 3000, grossProfit: 17000, founder: 12000, engineering: 7000, aiCloud: 2400, travel: 2500, software: 500, ga: 1200, legal: 0, misc: 500, totalOpex: 26100, ebitda: -9100, openingCash: 272975, closingCash: 263875 },
    { label: 'Feb 27', pilotsNew: 1, pilotRev: 22500, prodActive: 3, prodRev: 30000, totalRev: 52500, cogs: 7875, grossProfit: 44625, founder: 12000, engineering: 7000, aiCloud: 2500, travel: 2500, software: 500, ga: 1200, legal: 0, misc: 500, totalOpex: 26200, ebitda: 18425, openingCash: 263875, closingCash: 282300 },
    { label: 'Mar 27', pilotsNew: 0, pilotRev: 0, prodActive: 3, prodRev: 30000, totalRev: 30000, cogs: 4500, grossProfit: 25500, founder: 12000, engineering: 7000, aiCloud: 2600, travel: 2500, software: 500, ga: 1200, legal: 0, misc: 500, totalOpex: 26300, ebitda: -800, openingCash: 282300, closingCash: 281500 },
  ],
  pricing: [
    {
      tier: 'Pilot',
      amount: '€22.5K',
      rawAmount: 22500,
      duration: '4–8 weeks',
      detail: 'Fixed fee for one workflow and one team. No commitment beyond the pilot. Designed to prove value fast on a live artifact.',
      budgetOwner: 'Head of Operations / Head of Connectivity',
    },
    {
      tier: 'Production',
      amount: '€120K ACV',
      rawAmount: 120000,
      duration: 'Annual contract',
      detail: 'Departmental deployment at €10K/month equivalent. Covers recurring workflow delivery, evidence archive, and downstream system integrations.',
      budgetOwner: 'COO / Trading Technology Product Owner',
    },
    {
      tier: 'Expansion',
      amount: '€150K–€250K+',
      rawAmount: 200000,
      duration: 'Multi-workflow',
      detail: 'Add workflows (DataRights, Declare), additional sources, teams, or delivery channels. Land-and-expand path within a single account.',
      budgetOwner: 'COO / CFO / Head of Market Data',
    },
  ],
  costs: [
    { label: 'Founder / leadership', monthly: '€12,000', note: 'Fixed across 12 months' },
    { label: 'Engineering / product build', monthly: '€5K–€7K', note: 'Steps up in month 7 as production workload grows' },
    { label: 'AI / cloud infrastructure', monthly: '€1.5K + €100/mo growth', note: 'Scales with usage as production customers onboard' },
    { label: 'Travel / sales', monthly: '€1.5K–€2.5K', note: 'Increases in H2 as pipeline activity builds' },
    { label: 'Software / tools', monthly: '€500', note: 'Fixed' },
    { label: 'G&A / accounting / insurance', monthly: '€1,200', note: 'Fixed' },
    { label: 'One-off legal / setup', monthly: '€6,000 in month 1', note: 'Non-recurring' },
    { label: 'Misc. contingency', monthly: '€500', note: 'Fixed' },
  ],
  breakEven: {
    fixedOpex: 297000,
    avgAcv: 120000,
    grossMargin: 0.85,
    contributionPerCustomer: 102000,
    customers: 3,
    arr: 360000,
    interpretation: 'If pilots validate the workflow and 4–5 production customers are attainable, the model supports a credible early commercial case.',
  },
  baseCase: [
    'Model assumes 4 paid pilots and 3 production conversions inside 12 months.',
    'Base case is intentionally lean; it supports validation before scaling headcount.',
    'At €90K ACV and 85% gross margin, break-even is roughly 4 active production customers.',
    'This is a venture screen model, not a GAAP forecast.',
  ],
}

export const COMPETITOR_BENCHMARKS = [
  {
    name: 'Zapier',
    category: 'Horizontal automation',
    pricing: 'Professional $19.99/mo; Team $69/mo; Enterprise custom',
    implication: 'Shows the low-end self-serve floor, not enterprise control software.',
    gap: 'No domain intelligence, no evidence grounding, no audit trail for regulated workflows.',
    sourceUrl: 'https://zapier.com/pricing',
  },
  {
    name: 'Tines',
    category: 'Workflow automation',
    pricing: 'Community free; Starter / Business / Enterprise editions; AI credits at $0.01 each',
    implication: 'Usage and edition packaging is relevant; enterprise pricing remains custom.',
    gap: 'General-purpose; lacks capital-markets domain context and governed review workflow.',
    sourceUrl: 'https://explained.tines.com/en/articles/9620399-understanding-tines-pricing-and-packaging',
  },
  {
    name: 'Workato',
    category: 'Enterprise automation',
    pricing: 'Platform edition fee + usage fee + add-ons',
    implication: 'Supports value-based enterprise pricing posture.',
    gap: 'Integration layer only; no artifact interpretation, no human review loop, no evidence pack.',
    sourceUrl: 'https://docs.workato.com/pricing.html',
  },
  {
    name: 'ProcessUnity',
    category: 'TPRM / control workflow',
    pricing: 'Emerging enterprise pricing starts at $25,000',
    implication: 'Useful lower bound for compliance / control workflow pricing.',
    gap: 'Third-party risk focus; not built for trading tech change cycles or FIX/market-data artifacts.',
    sourceUrl: 'https://info.processunity.com/third-party-risk-management-emerging-enterprises.html',
  },
  {
    name: 'OneTrust',
    category: 'Risk / compliance platform',
    pricing: 'Custom; claims 227% 3-year ROI, 7-month payback',
    implication: 'Supports value-based ROI-led enterprise sell.',
    gap: 'Privacy and data governance focus; not designed for trading operations change readiness.',
    sourceUrl: 'https://www.onetrust.com/pricing/',
  },
  {
    name: 'Duco',
    category: 'Financial data automation',
    pricing: 'Two enterprise agreements totalled over $27M in total contract value',
    implication: 'Budget signal that large financial-operations automation deals exist.',
    gap: 'Data reconciliation focus; SynthAgents targets the change-readiness and governance workflow layer.',
    sourceUrl: 'https://du.co/duco-announces-record-financial-year-and-two-major-new-enterprise-agreements/',
  },
]

export const SALES_FUNNEL = {
  stages: [
    { label: 'Target accounts', count: 60, convRate: null, note: 'Warm intros + direct outreach' },
    { label: 'Replies / engagement', count: 30, convRate: '50%', note: 'Response or engagement' },
    { label: 'Discovery calls', count: 18, convRate: '60%', note: 'Calls with buyer or key user' },
    { label: 'Qualified pain confirmed', count: 10, convRate: '56%', note: 'Problem is real and budget-adjacent' },
    { label: 'Demos shown', count: 8, convRate: '80%', note: 'Presentation layer shown' },
    { label: 'Pilot proposals', count: 5, convRate: '63%', note: 'Scoped proposal delivered' },
    { label: 'Paid pilots', count: 4, convRate: '80%', note: 'Base case in forecast' },
    { label: 'Production conversions', count: 3, convRate: '75%', note: 'Base case in forecast' },
  ],
  firstRevenue: {
    pilotRevenue: 90000,
    annualizedProductionRevenue: 360000,
    implied12MRevenue: 210000,
    note: 'Implied 12M revenue if all converted day 1',
  },
  strategy: [
    {
      label: 'Targeted outreach over wide net',
      detail: 'High-signal warm introductions and direct outreach to named accounts in trading technology, market data, and adjacent fintech. Quality of conversation over volume of contacts.',
    },
    {
      label: "Owen's network",
      detail: '14 years of European electronic trading infrastructure relationships. Direct access to trading technology managers, FIX connectivity leads, and senior operational roles at Tier-1 firms.',
    },
    {
      label: 'Industry events and conferences',
      detail: 'On-sites with banks, brokers, trading firms, and venues. TradeTech, FIX Trading Community events, industry networking. Face-to-face builds trust faster than digital outreach alone.',
    },
    {
      label: 'Awards and trend-riding',
      detail: 'Pursue relevant fintech and trading technology awards early. Credibility signals matter in financial services. Ride the AI-in-trading-ops curiosity wave to shorten the trust-building cycle.',
    },
    {
      label: 'Land and expand',
      detail: 'Solve one high-value problem visibly. Trading firms have many problems; demonstrate rapid understanding and adaptation, then grow ARR through additional workflows and teams within the same account.',
    },
  ],
  activeBuyers: [
    {
      name: 'Virtu Financial Europe',
      contact: 'CEO',
      type: 'Key buyer',
      status: 'Discovery call completed',
      statusTone: 'success',
      note: 'Conversation on organisational problems and potential fit. Virtu Financial Europe is the European subsidiary, not the global entity.',
    },
    {
      name: 'Bjorn Haggstrom',
      contact: 'Former EMEA Manager, trading software',
      type: 'Key user / advisor',
      status: 'Discovery call completed',
      statusTone: 'success',
      note: 'Provided insights on product fit and go-to-market challenges from a trading software distribution perspective.',
    },
    {
      name: 'LA-based Investment Manager',
      contact: 'Chief of Staff',
      type: 'Key user',
      status: 'Call scheduled',
      statusTone: 'warning',
      note: '$100B AUM. Scheduled call pending — strong signal of institutional interest beyond European trading technology.',
    },
  ],
  awareness: 'On-sites, events, network introductions, and awards to build early credibility.',
  interest: 'Targeted discovery calls with buyers and key users to confirm pain and budget adjacency.',
  conversion: 'Pilot proposal → paid pilot → production contract. Fast value proof, then annual commitment.',
  retention: 'Land-and-expand: additional workflows, teams, and sources within the same account to grow ARR.',
}

export const OPERATIONS_MODEL = {
  headline: 'Built to move fast, learn faster, and operate with discipline.',
  subheadline: 'Revenue-ready infrastructure from day one. Lean team, rapid iteration, and a delivery model designed for the compliance expectations of financial services buyers.',
  pillars: [
    {
      title: 'Rapid change and iteration',
      icon: 'Zap',
      items: [
        'Weekly discovery cadence — buyer conversations, product validation, and pivot-readiness built into the operating rhythm.',
        'Hypothesis-led development: ship the smallest version that tests the assumption, review evidence, decide next.',
        'No feature roadmap longer than one cycle. If buyer signal changes, the plan changes.',
        'Founder-led product and sales in parallel. Discovery informs product; product informs discovery.',
        'Mermaid-diagram-first architecture review. Visualise before you build.',
      ],
    },
    {
      title: 'Revenue infrastructure',
      icon: 'TrendingUp',
      items: [
        'Pilot-first commercial motion. €22.5K fixed fee for 4–8 weeks to prove value on a live artifact.',
        'Production conversion path to €120K ACV. Departmental deployment with monthly equivalent of €10K.',
        'Expansion to €150K–€250K+ through additional workflows (DataRights, Declare) and teams.',
        'Jira and Slack delivery adapters in production. Evidence page and PDF export as standard.',
        'Pricing logic anchored to value: one avoided change-cycle failure justifies the annual contract.',
        'Target accounts tracked, pipeline staged, and conversion rate monitored from week one.',
      ],
    },
    {
      title: 'Governance and buyer trust',
      icon: 'ShieldCheck',
      items: [
        'Every workflow run preserves a full audit trail: source artifacts, evidence sections, review state, delivery events.',
        'Human review gate before any downstream delivery. No autonomous production action without approval.',
        'Evidence page and PDF artifact generated on every completed run for governance and audit.',
        'Designed for bank-friendly deployment postures: controlled environments, local processing where required.',
        'Compliance-aware output language. The system identifies its confidence level and flags what is inferred.',
        'GDPR and data-handling awareness built into artifact processing from the start.',
      ],
    },
  ],
}

// Week 1 content: Market Definition & Market Size
export const DEFINITION = {
  origin: {
    title: 'Origin',
    body: "Repeated exposure to the same failure mode across trading ops, vendor platforms, and client rollout work: venue notices arrive, context is fragmented, evidence rebuilds late. The pain is real and recurring. The thesis stays narrow — venue-change response is a product gap worth proving, selling into directly, and positioning for strategic ownership.",
  },
  marketDefinition: {
    title: 'Market Definition',
    body: 'Modern market access depends on venue-driven change response: interpreting notices, understanding protocol nuance, coordinating certification, and getting clients through rollout safely.\n\nIncumbents already own key parts of the stack, including connectivity, onboarding, testing, and reporting. The gap is not generic FIX automation.\n\n**FIXFriend defines a narrower wedge: an agent-operated venue-change response system for trading technology vendors.**\n\nIt handles minor changes through UAT-ready outputs, escalates major changes into structured human work, and leaves evidence behind as the response happens.',
  },
  marketSize: {
    title: 'Market Size',
    entry: {
      label: 'Beachhead Market',
      body: 'Target wedge: OMS/EMS vendors, managed FIX and connectivity providers, selected venues, and testing or compliance adjacencies that repeatedly absorb venue change-response work.\n\nWorking model: ~150–250 reachable operators globally at €100k–€200k ARR.\n\n**Beachhead market:** ≈ **€15M–€50M**.\n\nThis is deliberately narrower than the broader trading-firm TAM. It is the part FIXFriend can sell into first and the part most likely to matter in a strategic outcome.',
    },
    attach: {
      label: 'Strategic Attach View',
      body: 'The upside is not only direct ARR. If FIXFriend attaches to an incumbent platform, the value is attach revenue plus faster rollout, lower support load, and stronger client stickiness across the installed base.',
    },
    expansion: {
      label: 'Broader Expansion',
      body: 'If the wedge proves strategic, it can expand into broader trading-infrastructure lifecycle automation: certification tooling, release governance, change communication, configuration control, and non-production development workflows.',
    },
    sam: 'Working wedge: **40–80 high-fit operators** in Europe and the US before channel expansion.',
    som: 'Near-term objective: 5–10 design partners, 3–5 paid pilots, and €1M–€3M ARR potential before platform-scale distribution or a strategic transaction.',
    methodology: [
      'Start with the narrow beachhead, not the broadest possible end market.',
      'Model direct ARR separately from strategic attach value inside incumbent installed bases.',
      'Treat pricing as a hypothesis until discovery confirms the buyer, budget owner, and deployment scope.',
    ],
  },
}

export const PRODUCT_WORKFLOW_STAGES = [
  {
    id: 'trigger',
    label: 'Trigger',
    today: 'A venue notice lands through email, portal, PDF, or a relationship channel. Teams start from an inconsistent source pack.',
    todayDrag: 'Drag: source sprawl starts immediately.',
    fixfriend: 'FIXFriend watches the same channels, captures the notice, timestamps the source, and opens one canonical change record.',
    fixfriendImpact: 'Outcome: one entry point instead of inbox hunting.',
  },
  {
    id: 'triage',
    label: 'Triage',
    today: 'Product, engineering, QA, and client teams all need different answers. Owners hand work across functions before anyone knows the full impact.',
    todayDrag: 'Drag: context switching and owner handoff latency.',
    fixfriend: 'FIXFriend maps the notice to impacted products, configurations, tests, and downstream workflows before routing owners.',
    fixfriendImpact: 'Outcome: teams start with scoped impact, not guesswork.',
  },
  {
    id: 'context',
    label: 'Context Recovery',
    today: 'Specs, message dictionaries, past tickets, and venue exceptions are recovered manually from scattered systems.',
    todayDrag: 'Drag: protocol nuance is rediscovered each time.',
    fixfriend: 'Expoty retrieves the relevant specs, prior changes, code context, tests, and decisions into a shared working bundle.',
    fixfriendImpact: 'Outcome: reusable context replaces repeated archaeology.',
  },
  {
    id: 'certification',
    label: 'Certification',
    today: 'Teams rebuild test packs, chase credentials, and absorb venue-side defects late in the window.',
    todayDrag: 'Drag: venue-side bounce-back and certification churn.',
    fixfriend: 'FIXFriend prepares the UAT branch plan, regression pack, validation runbook, and escalation path before the window compresses.',
    fixfriendImpact: 'Outcome: same-day certification-ready preparation for minor changes.',
  },
  {
    id: 'rollout',
    label: 'Rollout',
    today: 'Client communication lags because technical confidence, venue readiness, and owner alignment are still moving targets.',
    todayDrag: 'Drag: communication buffer gets priced into delivery.',
    fixfriend: 'Client-facing notes, internal approvals, and owner routing are generated alongside the technical response.',
    fixfriendImpact: 'Outcome: rollout materials move with the work, not after it.',
  },
  {
    id: 'evidence',
    label: 'Evidence',
    today: 'Evidence is stitched together after the fact from emails, tickets, test logs, and client updates.',
    todayDrag: 'Drag: expensive reconstruction and lingering reputation risk.',
    fixfriend: 'Evidence, decisions, and timeline context stay live as the work happens, with immutable source references attached.',
    fixfriendImpact: 'Outcome: the audit trail is created continuously instead of rebuilt later.',
  },
]

// Week 1 content: Product description
export const PRODUCT_CONTENT = {
  solution: {
    title: 'FIXFriend, In Product Terms',
    intro: 'FIXFriend is an agent-operated venue-change response system for trading technology vendors.\n\nIt is built to:',
    bullets: [
      'monitor venue notices, portals, and digests for change signals',
      'retrieve specs and related context through Expoty, then pursue missing documentation when needed',
      'classify changes with rules-first gates into autonomous minor work or coordinated major work',
      'generate UAT branches, regression packs, update notes, workflow tickets, and owner routing for minor changes',
      'publish evidence into Jira, Confluence or Notion, Slack, Git, and audit logs',
      'keep every autonomous action inside sandbox, test, or UAT environments',
    ],
    boundary: {
      title: 'Autonomous In UAT, Coordinated At The Boundary',
      body: 'Minor changes can run without human intervention up to UAT-ready outputs. Major changes stop the autonomous lane and open a structured human project. FIXFriend never deploys to production, never writes production config, and never acts in live production environments.',
    },
  },
  whatCustomersBuy: {
    title: 'What Customers Buy',
    label: 'Faster Change Response, Less Coordination Drag',
    body: 'Buyers are not paying for a generic model. They are paying for a system that sources the spec, closes coordination gaps, creates UAT-ready outputs in existing tools, and preserves the evidence trail while the work happens.',
  },
  targetBuyer: {
    title: 'Target Buyer & Economic Logic',
    primary: 'Head of Product / Head of Connectivity / Head of Electronic Trading',
    budget: 'FIXFriend does not require a brand-new budget line. It reallocates spend already buried in product coordination, certification effort, support escalation, and delayed client rollout.',
    triggers: ['Short-notice venue change', 'Certification bottleneck', 'Client rollout delay', 'Repeated support escalation'],
  },
  painPoints: [
    'Communication breaks first: the notice, deadline, and impact are spread across too many people and systems.',
    'Specs are hard to source consistently across portals, emails, PDFs, and venue websites.',
    'Protocol fragmentation means standard FIX still hides asset-class and venue-specific nuance.',
    'Testing is expensive because vendors either build simulators or depend on venue cooperation.',
    'Connectivity setup still creates delay: internet, VPN, private lines, and x-connects change the response path.',
    'Vendors become external QA for venues and absorb the reputation cost when releases slip.',
  ],
}

export const PRODUCT_OPERATING_MODEL = {
  summary:
    'FIXFriend runs two lanes. Minor venue changes are handled autonomously through UAT-ready outputs. Major changes become structured human work with source provenance and escalation evidence attached.',
  principles: [
    'Workflow-first externally, multi-agent internally.',
    'Human out of the loop only for minor changes in sandbox, test, or UAT.',
    'All outputs land inside tools teams already use.',
  ],
  lanes: {
    minor: {
      label: 'Autonomous minor-change lane',
      summary:
        'When the spec is available, source confidence is high, and the change does not alter data models or business workflows, FIXFriend generates the working bundle automatically.',
      trigger: 'Spec found, rules-first gate passes, UAT-only execution path available',
      steps: [
        'Monitor agent detects the venue notice and hands the source request to the source agent.',
        'Source agent fetches the spec bundle and uses Expoty to recover related tickets, code paths, tests, and prior decisions.',
        'Impact agent classifies the change as minor using deterministic gates plus model reasoning.',
        'Planning and execution agents emit requirements, UAT branch plan, regression pack, update docs, Jira tickets, Slack summary, and audit evidence.',
      ],
      outputs: [
        'Requirements bundle',
        'UAT branch and implementation plan',
        'Regression tests and results',
        'Update docs and explainer',
        'Jira tickets and owner routing',
        'Structured Slack message',
        'Audit log with spec sources',
      ],
      metrics: [
        { label: 'Human approvals', value: '0 before UAT', tone: 'success' },
        { label: 'Environment', value: 'Sandbox / UAT', tone: 'info' },
        { label: 'Evidence', value: 'Live', tone: 'success' },
      ],
      result:
        'Minor venue changes become same-day UAT-ready bundles instead of manual coordination projects.',
    },
    major: {
      label: 'Coordinated major-change lane',
      summary:
        'When the change affects data models, business workflows, certification dependencies, or source confidence, FIXFriend stops autonomous execution and opens a coordinated project for humans.',
      trigger: 'Data model or workflow impact, missing source confidence, unresolved publisher outreach, or failed UAT regression',
      steps: [
        'Source agent either recovers the spec or records publisher outreach when documentation is not fetchable.',
        'Impact agent flags the change as major because the rules-first gate fails.',
        'Planning agent creates a coordinated project bundle instead of autonomous execution outputs.',
        'Comms and audit agents route owners, link sources, explain the blocker, and preserve the evidence trail for the human project.',
      ],
      outputs: [
        'Escalation project page',
        'Jira epic and owner tags',
        'Confluence or Notion brief',
        'Blocked-state Slack summary',
        'Publisher outreach log',
        'Audit bundle and decision record',
      ],
      metrics: [
        { label: 'Execution', value: 'Paused', tone: 'warning' },
        { label: 'Environment', value: 'No prod path', tone: 'danger' },
        { label: 'Outcome', value: 'Human-coordinated', tone: 'info' },
      ],
      result:
        'Major changes are surfaced early with structured coordination instead of being discovered late through broken tests or client escalations.',
    },
  },
}

export const PRODUCT_AGENT_SYSTEM = [
  {
    name: 'Monitor agent',
    role: 'Watches venue notifications, portals, websites, and email digests for spec-change signals.',
  },
  {
    name: 'Source agent',
    role: 'Fetches specs and supporting docs. If documentation is not fetchable, it opens publisher outreach and logs the attempt.',
  },
  {
    name: 'Impact agent',
    role: 'Applies deterministic autonomy gates and uses model reasoning to classify the change and explain why.',
  },
  {
    name: 'Planning agent',
    role: 'Creates requirements, implementation tasks, branch plans, test plans, and owner routing.',
  },
  {
    name: 'Execution agent',
    role: 'Runs branch preparation, regression packs, and evidence capture in sandboxed environments, test environments, or UAT only.',
  },
  {
    name: 'Comms agent',
    role: 'Publishes structured Jira, Confluence or Notion, and Slack outputs with links, explainers, and tags.',
  },
  {
    name: 'Audit agent',
    role: 'Stores source provenance, outreach attempts, decisions, test outputs, and escalation reasons.',
  },
]

export const PRODUCT_CONTEXT_CORE = {
  title: 'Expoty context core',
  summary:
    'Expoty is the shared retrieval layer for the agent system. It lets agents recover the relevant specs, history, code context, tests, and prior decisions without dragging the whole stack into every prompt.',
  bullets: [
    'Indexes specs, prior tickets, code references, test artifacts, and workflow history in one retrieval layer.',
    'Lets specialist agents query only the context they need instead of carrying every tool and every prompt at once.',
    'Connects semantic retrieval back to immutable source IDs, snapshots, and timestamps for auditability.',
    'Compounds over time as more venue changes, outcomes, and decisions become searchable institutional memory.',
  ],
  hardBoundary:
    'Expoty is the context core, but canonical source files and outputs remain attached to immutable source records so the audit trail stays deterministic.',
}

export const PRODUCT_OUTPUTS = [
  {
    name: 'Jira tickets',
    detail: 'Requirements, tasks, escalation epics, and owner routing appear in the existing delivery workflow.',
  },
  {
    name: 'Confluence or Notion',
    detail: 'Update docs, explainer bundles, and escalation briefs are published with source links and decisions.',
  },
  {
    name: 'Slack summaries',
    detail: 'Structured notifications link to sources, branches, tickets, tests, and tagged system owners.',
  },
  {
    name: 'Git and UAT branches',
    detail: 'Minor changes emit UAT branch plans and implementation context without touching production.',
  },
  {
    name: 'Regression packs and results',
    detail: 'Existing and update-specific tests run in sandbox or UAT and attach results directly to the change bundle.',
  },
  {
    name: 'Audit log',
    detail: 'Every output references source provenance, decision lineage, outreach attempts, and environment boundaries.',
  },
]

export const PRODUCT_AUTONOMY_RULES = {
  minorTitle: 'Autonomous if all are true',
  minor: [
    'No data-model change is required.',
    'No business-workflow change is required.',
    'No new connectivity topology or environment dependency is introduced.',
    'Source confidence is high and the required spec bundle is available.',
    'Regression and update tests pass in sandbox, test, or UAT.',
  ],
  majorTitle: 'Escalate if any are true',
  major: [
    'A data-model or schema change is required.',
    'A business-workflow or certification process changes materially.',
    'Source confidence is low or publisher outreach remains unresolved.',
    'Regression, update tests, or environment checks fail.',
    'The change would require a production write or live rollout decision.',
  ],
  hardBoundary:
    'Autonomous actions stop at UAT. FIXFriend never deploys to production, never writes production config, and never acts in live production environments.',
}

export const PRODUCT_MERMAID_DIAGRAMS = {
  minor: {
    title: 'Minor Change Autopilot',
    subtitle:
      'Sequence from venue notice to Expoty retrieval to UAT-ready outputs and live audit evidence.',
    diagram: `sequenceDiagram
      autonumber
      participant Venue as Venue / Spec Publisher
      participant Monitor as Monitor Agent
      participant Source as Source Agent
      participant Expoty as Expoty Context Core
      participant Impact as Impact Agent
      participant Plan as Planning Agent
      participant Exec as Execution Agent
      participant Comms as Comms Agent
      participant Audit as Audit Agent

      Venue->>Monitor: Notice, portal update, or website change
      Monitor->>Source: Fetch source bundle
      Source->>Expoty: Retrieve related specs, tickets, code, tests, decisions
      Source-->>Audit: Source IDs, timestamps, hashes
      Source->>Impact: Canonical source bundle
      Note over Impact: Minor if no data-model or workflow change<br/>and source confidence is high
      Impact->>Plan: Minor classification + rationale
      Plan->>Exec: UAT branch plan, regression pack, update tasks
      Note over Exec: Sandbox / test / UAT only<br/>Never prod
      Exec-->>Audit: Test outputs and execution evidence
      Plan->>Comms: Jira, Confluence or Notion, Slack bundle
      Comms-->>Audit: Links, owner tags, explanation
      Audit-->>Venue: Provenance-backed decision trail ready
    `,
  },
  major: {
    title: 'Major Change Escalation',
    subtitle:
      'Rules-first gate that halts autonomous execution and opens a structured human project.',
    diagram: `flowchart TD
      A[Venue notice captured] --> B[Source agent fetches spec bundle]
      B --> C{Rules-first autonomy gate}
      C -->|Missing spec or low confidence| D[Publisher outreach opened and logged]
      C -->|Data-model change| E[Escalate]
      C -->|Business-workflow change| E
      C -->|New connectivity dependency| E
      C -->|Regression fails in UAT| E
      D --> E
      E --> F[Create Jira epic and owner routing]
      E --> G[Publish Confluence or Notion brief]
      E --> H[Send blocked-state Slack summary]
      E --> I[Attach source provenance and decision log]
      I --> J[Human-led project in sandbox / UAT only]
      J --> K[Never prod without separate human release path]
    `,
  },
  architecture: {
    title: 'Agent System + Expoty Core',
    subtitle:
      'Specialist agents stay narrow while Expoty carries the shared semantic context across the workflow.',
    diagram: `graph LR
      V[Venues, portals, websites, email] --> M[Monitor agent]
      M --> S[Source agent]
      S --> X[(Expoty context core)]
      D[(Canonical sources and snapshots)] --> S
      X --> I[Impact agent]
      X --> P[Planning agent]
      X --> E[Execution agent]
      X --> C[Comms agent]
      I --> P
      P --> E
      P --> C
      E --> W[(Git / UAT branches<br/>Regression results)]
      C --> Y[(Jira / Confluence or Notion / Slack)]
      S --> A[Audit agent]
      I --> A
      E --> A
      C --> A
      D --> A
      A --> Z[(Decision log and provenance trail)]
      N[Never prod<br/>Sandbox / test / UAT only] --> E
    `,
  },
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
  tam: {
    label: 'TAM',
    value: '€450M',
    detail:
      'Broader trading-infrastructure lifecycle automation opportunity if the workflow expands beyond the initial wedge.',
  },
  sam: {
    label: 'SAM',
    value: '€15M–€50M',
    detail:
      'Beachhead wedge: ~150–250 reachable operators globally × €100k–€200k ARR for vendor-side change response.',
  },
  som: {
    label: 'SOM',
    value: '€1M–€3M',
    detail:
      'Initial reachable objective before strategic embed or acquisition: 5–10 design partners and 3–5 paid pilots.',
  },
  strategicAttach: {
    label: 'Strategic Attach',
    value: 'Platform leverage',
    detail:
      'If FIXFriend plugs into incumbent platforms, strategic value comes from attach revenue plus faster client rollout, lower support load, and stronger stickiness.',
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
      title: 'Monitoring + source ingestion',
      reason: 'The wedge starts by watching the channels teams already rely on and pulling the source package automatically.',
    },
    {
      title: 'Fetch fallback and publisher outreach',
      reason: 'If the documentation is not fetchable, the product has to pursue it and log the attempt without waiting on humans.',
    },
    {
      title: 'Rules-first autonomy gate',
      reason: 'Minor versus major classification is the core trust boundary for the entire system.',
    },
    {
      title: 'UAT bundle generation and workflow outputs',
      reason: 'Minor changes need requirements, UAT branches, tests, docs, tickets, Slack summaries, and audit evidence to appear automatically.',
    },
    {
      title: 'Audit trail with source citations',
      reason: 'The workflow has to stay provenance-backed and audit-ready from day one.',
    },
  ],
  v2: [
    {
      title: 'Historical venue-change backtesting',
      reason: 'Lets the product prove the autonomy model against prior changes before expanding live usage.',
    },
    {
      title: 'Certification dependency tracking',
      reason: 'Captures delays caused by venue-side readiness and environment setup.',
    },
    {
      title: 'Publisher relationship intelligence',
      reason: 'Improves how missing or broken documentation is recovered and routed over time.',
    },
  ],
  future: [
    {
      title: 'Partner and platform embed APIs',
      reason: 'Matters once strategic attach becomes the dominant route to scale.',
    },
    {
      title: 'Multi-party workflow analytics',
      reason: 'Turns operational activity into a management and M&A insight layer.',
    },
    {
      title: 'Broader non-prod workflow automation',
      reason: 'Expand only after the autonomy boundary is trusted and clearly bounded.',
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
    whatTheyDo: 'Own the workflow and context layer: monitor notices, recover specs through Expoty, classify minor versus major changes, emit UAT-ready outputs, and preserve provenance-backed evidence.',
    gap: 'Must still prove that the autonomous-minor and coordinated-major model is strategic enough to buy or embed rather than build internally.',
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
    'FIXFriend wins on operational value first — same-day change packs, less coordination drag. If the wedge is strategically relevant to incumbents, it becomes a target. That is the lean exit thesis: prove the workflow, then keep the strategic paths open.',
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
        'Vendor-side autonomous minor-change handling is the strongest initial wedge.',
        'The right buyer will pay for faster rollout and lower support drag before they pay for AI by itself.',
        'A workflow and context layer is more strategically interesting than a narrow point solution.',
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
      'FIXFriend turns venue change notices into autonomous minor-change execution, coordinated major-change projects, and audit-ready evidence for trading technology vendors.',
    acquirerOneLiner:
      'FIXFriend is the workflow and context layer between venue change, UAT execution, and client rollout.',
    tenX:
      'Same-day UAT-ready change bundles for minor venue updates instead of 1–2 weeks of PM, engineering, and QA coordination.',
    quantifiedFrom: '1–2 weeks',
    quantifiedTo: 'Same day',
    quantifiedLabel: 'Time to a UAT-ready change bundle',
  },
  scope: {
    evidence: 'Hypothesis',
    does: [
      'Monitor venue changes across existing channels and pursue missing documentation automatically.',
      'Use Expoty as the shared context core for specs, prior decisions, code context, and test history.',
      'Autonomously emit UAT branches, regression packs, update docs, Jira tickets, Slack summaries, and audit evidence for minor changes.',
      'Escalate major changes into structured human projects with source provenance and decision lineage attached.',
    ],
    doesNot: [
      'Replace FIX engines or OMS / EMS infrastructure.',
      'Normalize every protocol dialect into one universal standard.',
      'Replace venue simulators or venue-side testing environments.',
      'Deploy autonomously to production, write production config, or act in live environments.',
    ],
  },
  whyBought: {
    evidence: 'Hypothesis',
    points: [
      'Reduces rollout friction and support drag around venue changes by automating the minor cases that consume time constantly.',
      'Turns a painful multi-team workflow into a differentiated attach product with provenance-backed execution.',
      'Improves client stickiness by making incumbent platforms easier to keep current inside existing Jira, docs, Slack, and UAT workflows.',
      'Expoty compounds strategic value by turning each resolved venue change into reusable context for the next one.',
    ],
  },
}

export const INTERVIEW_TRACKER = [
  {
    id: 'tom-bloomberg',
    name: 'Tom',
    role: 'Senior engineer, EMS / connectivity (Broadway → Bloomberg)',
    company: 'Bloomberg',
    date: '2026-02',
    channel: 'Video call',
    userType: 'Vendor engineer / workflow owner',
    buyerInfluence: 'High — shapes estimates and feasibility, but not the contract signatory',
    economicBuyerSignal: 'Indirect — Bloomberg is a potential long-range acquirer archetype',
    painRatings: {
      communication: 'High',
      protocolFragmentation: 'High',
      testingAndSimulation: 'High',
      connectivityAndEnvironment: 'Medium',
      planningUncertainty: 'Medium',
      evidenceAndCertification: 'High',
    },
    currentSolutions: [
      'Manual relationship-driven communication with venues and clients',
      'Internal simulators for selected flows',
      'Per-venue normalisation logic and ad-hoc buffers in project plans',
    ],
    budgetAuthority: 'Influencer',
    workflowStages: ['trigger', 'triage', 'context', 'certification', 'rollout', 'evidence'],
    keyQuotes: [
      {
        label: 'Flagship',
        painPoint: 'protocolFragmentation',
        workflowStage: 'context',
        text:
          'We would receive a spec and probably end up finding bugs in the venue implementation, especially in the D2C space, so our cycle is much longer.',
      },
      {
        label: 'Communication drag',
        painPoint: 'communication',
        workflowStage: 'trigger',
        text:
          'Half the time the first real signal is a client forwarding a venue email that never came to us directly.',
      },
      {
        label: 'API sprawl',
        painPoint: 'protocolFragmentation',
        workflowStage: 'context',
        text:
          'FIX is supposed to be standard, but in practice you are juggling a dozen flavours and hundreds of custom tags just to get to “hello world”.',
      },
      {
        label: 'External QA',
        painPoint: 'testingAndSimulation',
        workflowStage: 'certification',
        text:
          'On some D2C integrations we effectively became the venue’s external QA team — we find the edge cases, they patch, and the clock keeps ticking.',
      },
      {
        label: 'Time-to-market buffer',
        painPoint: 'planningUncertainty',
        workflowStage: 'rollout',
        text:
          'With some venues we automatically pad the plan by a couple of weeks just for communication and iteration. Everyone pays that tax.',
      },
    ],
    followUp: [
      'Quantify how often certification windows slip because of venue-side defects versus internal delays.',
      'Understand how Bloomberg’s internal AI tools are starting to touch estimation and certification docs.',
    ],
  },
  {
    id: 'jim-nasdaq-vol-trader',
    name: 'Jim',
    role: 'Volatility trader & former Senior Director, European Equity Derivatives',
    company: 'NASDAQ (then), current buy-side desk',
    date: '2026-02',
    channel: 'Video call',
    userType: 'Desk-level user / risk owner',
    buyerInfluence: 'High — sets urgency and pushes for fixes, but not platform budget owner',
    economicBuyerSignal: 'Medium — reinforces why exchange groups and execution platforms care about rollout speed and reliability',
    painRatings: {
      communication: 'High',
      protocolFragmentation: 'Medium',
      testingAndSimulation: 'Medium',
      connectivityAndEnvironment: 'Medium',
      planningUncertainty: 'High',
      evidenceAndCertification: 'Medium',
    },
    currentSolutions: [
      'Over-provisioned buffers around major venue changes in risk and limits',
      'Manual playbooks and runbooks for big release weekends',
      'Escalation to senior venue and vendor contacts when slippage threatens P&L',
    ],
    budgetAuthority: 'Influencer',
    workflowStages: ['certification', 'rollout', 'evidence'],
    keyQuotes: [
      {
        label: 'Strategy delay',
        painPoint: 'planningUncertainty',
        workflowStage: 'rollout',
        text:
          'From the desk’s perspective, every month we wait for a new venue feature is a month we are running yesterday’s playbook against today’s market.',
      },
      {
        label: 'Operational risk',
        painPoint: 'communication',
        workflowStage: 'trigger',
        text:
          'What scares me is not ugly tooling; it’s when a protocol change slips through late and we’re effectively trading with half the instrumentation we thought we had.',
      },
      {
        label: 'Certification bottlenecks',
        painPoint: 'testingAndSimulation',
        workflowStage: 'certification',
        text:
          'Certification feels like a black box — we hear “waiting on venue” or “QA found something odd” and all we can do is push harder on the timeline.',
      },
      {
        label: 'Exchange-side view',
        painPoint: 'evidenceAndCertification',
        workflowStage: 'evidence',
        text:
          'On the exchange side I saw how much energy goes into member certification, but we still struggled to get clean, comparable evidence from all our vendors.',
      },
    ],
    followUp: [
      'Quantify P&L impact of delayed feature rollouts on the volatility desk.',
      'Clarify which parts of the certification flow traders would trust an agent system to touch.',
    ],
  },
  {
    id: 'arkady-squarepoint',
    name: 'Arkady',
    role: 'Business Analyst, electronic trading / quantitative strategies',
    company: 'Squarepoint',
    date: '2026-02',
    channel: 'Video call',
    userType: 'Workflow and requirements owner between quants, engineers, and trading',
    buyerInfluence: 'High — defines workflows and owns the backlog, strong internal champion',
    economicBuyerSignal: 'Indirect — confirms buy-side demand for better venue-change governance',
    painRatings: {
      communication: 'Medium',
      protocolFragmentation: 'High',
      testingAndSimulation: 'High',
      connectivityAndEnvironment: 'Medium',
      planningUncertainty: 'High',
      evidenceAndCertification: 'High',
    },
    currentSolutions: [
      'Jira/Confluence templates for venue-change epics and tasks',
      'Spreadsheet-based matrices mapping venues, symbols, and strategy impact',
      'Hand-built regression packs maintained per venue and per strategy family',
    ],
    budgetAuthority: 'Influencer',
    workflowStages: ['triage', 'context', 'certification', 'evidence'],
    keyQuotes: [
      {
        label: 'Requirements churn',
        painPoint: 'protocolFragmentation',
        workflowStage: 'context',
        text:
          'Most of my life is translating a dense spec into something quants and engineers can actually act on, and then re-translating it when the venue tweaks the behaviour mid-stream.',
      },
      {
        label: 'Backlog impact',
        painPoint: 'planningUncertainty',
        workflowStage: 'triage',
        text:
          'A single venue change can spawn an entire mini-backlog: config, risk checks, strategy edge cases, regression coverage, client comms. None of that shows up in the original email.',
      },
      {
        label: 'Evidence burden',
        painPoint: 'evidenceAndCertification',
        workflowStage: 'evidence',
        text:
          'When compliance ask “prove we tested this properly”, we are stitching together Jira, logs, and screenshots. It is never one place, and it is never fun.',
      },
      {
        label: 'Ad-hoc tooling',
        painPoint: 'testingAndSimulation',
        workflowStage: 'certification',
        text:
          'For some venues we ended up with a parallel universe of internal test harnesses just to be confident we were still talking the same language.',
      },
    ],
    followUp: [
      'Test whether an agent-generated change pack would be trusted as the first draft of a Jira epic and regression scope.',
      'Understand how much of the current evidence pack could be automated from existing logs and artifacts.',
    ],
  },
]

export const PAIN_MATRIX = {
  axes: {
    x: 'Frequency of occurrence',
    y: 'Pain / impact on delivery',
  },
  items: [
    {
      id: 'communication',
      label: 'Communication & change management',
      frequency: 'High',
      impact: 'High',
      summary:
        'Notices land in the wrong inboxes, internal handoff is slow, and deadlines arrive before teams share a single view of what changed.',
      interviewSupport: ['tom-bloomberg', 'jim-nasdaq-vol-trader', 'arkady-squarepoint'],
    },
    {
      id: 'protocolFragmentation',
      label: 'API / protocol fragmentation',
      frequency: 'High',
      impact: 'High',
      summary:
        'Standard FIX hides venue- and asset-class-specific nuance behind custom tags and behaviours; each integration feels bespoke.',
      interviewSupport: ['tom-bloomberg', 'arkady-squarepoint'],
    },
    {
      id: 'testingAndCertification',
      label: 'Testing & certification',
      frequency: 'Medium–High',
      impact: 'High',
      summary:
        'Vendors either build simulators or lean on venues for test credentials, then absorb external QA work and certification churn.',
      interviewSupport: ['tom-bloomberg', 'jim-nasdaq-vol-trader', 'arkady-squarepoint'],
    },
    {
      id: 'connectivityAndEnvironment',
      label: 'Connectivity & environment setup',
      frequency: 'Medium',
      impact: 'Medium',
      summary:
        'Internet, VPN, cross-connects, and non-prod environments add latency and uncertainty to change windows, especially across many venues.',
      interviewSupport: ['tom-bloomberg'],
    },
    {
      id: 'planningUncertainty',
      label: 'Planning uncertainty',
      frequency: 'High',
      impact: 'High',
      summary:
        'Short-notice venue changes collide with long product roadmaps; teams add buffer time and still miss windows.',
      interviewSupport: ['tom-bloomberg', 'jim-nasdaq-vol-trader', 'arkady-squarepoint'],
    },
    {
      id: 'evidenceAndCertification',
      label: 'Evidence & audit trail',
      frequency: 'Medium',
      impact: 'High',
      summary:
        'Evidence for regulators, venues, and clients is reconstructed after the fact from scattered systems instead of created continuously.',
      interviewSupport: ['tom-bloomberg', 'jim-nasdaq-vol-trader', 'arkady-squarepoint'],
    },
  ],
  wedgeExplanation:
    'FIXFriend focuses first on the intersection of high-frequency, high-impact pains: communication, protocol fragmentation, testing & certification, planning uncertainty, and evidence. Minor-change UAT bundles plus live evidence sit in that top-right corner.',
}

export const BUYER_DECISION_PROCESS = {
  title: 'Product buyer decision flow',
  steps: [
    'Users (engineers, analysts, traders) feel repeated pain during venue-driven changes and raise incidents or post-mortems.',
    'Workflow owners like Arkady and senior engineers like Tom turn incidents into patterns and articulate the recurring workflow gap.',
    'A buyer — typically Head of Connectivity, Head of Product, or Head of Electronic Trading — sponsors an experiment or pilot to reduce drag and risk.',
    'Risk, compliance, and legal review how the workflow, evidence trail, and autonomy boundaries interact with existing controls.',
    'If the pilot proves faster change response and cleaner evidence without new risk, the buyer extends adoption across more venues, products, or desks.',
  ],
}

export const ECONOMIC_BUYER_DECISION_PROCESS = {
  title: 'Economic buyer (acquirer) decision flow',
  steps: [
    'Strategic and product leaders at incumbents observe recurring certification drag, support burden, and rollout friction across their installed base.',
    'Corp-dev and business owners see that the gap sits between products they already own: connectivity, OMS/EMS, testing, and onboarding.',
    'Operator interviews like Tom, Jim, and Arkady confirm that the pain is structural, not just a tooling preference.',
    'Incumbents compare internal build versus buy, weighing time-to-market, access to workflow insight, and potential attach revenue.',
    'If FIXFriend can prove adoption with relevant vendors and show attach value to an incumbent stack, buy-or-embed becomes more attractive than building yet another internal point tool.',
  ],
}
