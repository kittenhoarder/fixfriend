// Core market and company facts are maintained in fixfriend_artifacts.md and
// supplemented with current public-source links embedded below when the site
// needs fresher acquirer research.

export const THESIS = {
  headline: 'THE WORKFLOW CONTROL LAYER\nFOR CONTINUOUS CHANGE',
  subheadline:
    'FIXFriend starts with venue-driven change response as the first wedge, then fits around the change pain strategic acquirers care about most. Agents do bounded development work, structure human-actionable outputs in existing channels, stay inside sandbox, test, and UAT, and leave a continuous audit trail behind.',
  stats: [
    {
      id: 'cycle',
      value: 'Days',
      label: 'TIME TO BOUNDED CHANGE PACK',
      detail: 'Not several weeks or months of cross-party coordination for bounded cases',
    },
    {
      id: 'discovery',
      value: '6',
      label: 'WEEK ACQUIRER DISCOVERY LOOP',
      detail: 'Product, corp-dev, advisor, and operator interviews shape the wedge and any pivot',
    },
    {
      id: 'markets',
      value: '24/5+',
      label: 'CONTINUOUS-MARKET SIGNAL',
      detail: 'Extended hours and clearing windows increase the need for constant-change readiness',
    },
  ],
  founderName: 'Owen E. Perry · Chris Starns · Varsha Jaiswal',
  founderTitle: 'Founding team',
  founderSummary:
    'A founding team combining trading technology, venture strategy, and scalable engineering to turn change chaos into controlled execution.',
  linkedinUrl: 'https://linkedin.com/in/oweneperry',
  buyerOneLiner:
    'FIXFriend turns venue change notices into bounded autonomous execution, coordinated human projects, and audit-ready evidence inside the systems teams already use.',
  acquirerOneLiner:
    'FIXFriend is a workflow-control layer for change in systems, starting with venue change response and designed to fit around incumbent operating pain.',
  tenXClaim:
    'Bounded cases move to days instead of several weeks or months because FIXFriend compresses coordination, context recovery, and evidence assembly before the cross-party loop stalls.',
  leanExitWhy:
    'This is a lean-exit story built through strategic-fit discovery: use venue change as the first wedge, learn where acquirers feel the deepest operational pain, and pivot the product boundary around that signal instead of forecasting too far ahead.',
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
      'Beachhead wedge: vendor-side change response and certification workflow. The broader category is automation around change in systems, but venue change stays the first concrete proof point.',
    highlights: [
      'Lead with strategic-acquirer pain, not exit forecasting.',
      'First validation loop is buyer and acquirer discovery, not generic SaaS GTM.',
      'Use venue change as the first wedge, then pivot if another change domain shows stronger pull.',
    ],
    tier1Acquirers: [
      { name: 'ION Markets', fit: 'Owns venue-facing plumbing. Missing workflow layer for change-response and client rollout.' },
      { name: 'Broadridge', fit: 'Already owns connectivity, OMS, execution, and onboarding tooling. Missing the cross-party venue-change workflow.' },
      { name: 'Trading Technologies', fit: 'Multi-venue connectivity at scale. Same workflow gap exists between venue change, product update, and customer rollout.' },
      { name: 'SIX Group', fit: 'Venue and member certification complexity makes the wedge strategically relevant on the exchange side too.' },
    ],
  },
}

export const FOUNDERS = [
  {
    name: 'Owen E. Perry',
    title: 'Founder, product & sales',
    summary:
      '14 years in European electronic trading infrastructure, building and shipping revenue-critical systems at ISVs, fintechs, and trading participants. BSc from the University of San Francisco; PGDip from Queen Mary University of London.',
    linkLabel: 'LinkedIn',
    linkUrl: 'https://linkedin.com/in/oweneperry',
  },
  {
    name: 'Chris Starns',
    title: 'Co-founder, ops & strats',
    summary:
      'Venture strategist helping startups and large brands launch new products and services, with hard-won experience from building, exiting, and shipping multiple startup projects. BSc from Nottingham Trent University in Business & Entrepreneurship.',
    linkLabel: 'LinkedIn',
    linkUrl: 'https://www.linkedin.com/in/chris-starns/',
  },
  {
    name: 'Varsha Jaiswal',
    title: 'Co-founder, engineering',
    summary:
      '7+ years building and scaling SaaS platforms and distributed systems, with a focus on reliable delivery and pragmatic engineering execution. MSc Computer Science from Queen Mary University of London.',
    linkLabel: 'LinkedIn',
    linkUrl: 'https://www.linkedin.com/in/varshajaiswal/',
  },
]

export const CONTINUOUS_CHANGE_SIGNALS = {
  title: 'Continuous-change signals',
  intro:
    'The implication is not that every market is already trading around the clock. It is that operating windows are stretching, post-trade infrastructure is extending, and workflow automation is moving deeper into communications-heavy processes. Systems have to absorb change continuously and prove control while they do it.',
  items: [
    {
      title: 'Extended-hours trading',
      detail:
        'Nasdaq is preparing for a 24-hour trading day, which pushes infrastructure teams toward longer operational readiness and faster change handling.',
      sourceLabel: 'Nasdaq',
      sourceUrl: 'https://www.nasdaq.com/newsroom/nasdaqs-view-road-24-hour-trading',
    },
    {
      title: 'Post-trade windows are widening too',
      detail:
        'DTCC is extending NSCC clearing hours to support extended trading, which means operational compression is moving beyond the venue session itself.',
      sourceLabel: 'DTCC',
      sourceUrl: 'https://www.dtcc.com/news/2025/march/18/dtccs-nscc-to-increase-clearing-hours-to-support-extended-trading',
    },
    {
      title: 'Infrastructure must handle constant change',
      detail:
        'A-Team frames continuous markets as an infrastructure problem of constant change, shorter recovery windows, and operating resilience rather than a simple market-hours story.',
      sourceLabel: 'A-Team Insight',
      sourceUrl: 'https://a-teaminsight.com/blog/modernising-for-continuous-markets-why-infrastructure-must-be-built-for-constant-change/?brand=tti',
    },
    {
      title: 'Workflow automation is spreading',
      detail:
        'Recent post-trade automation moves show more demand for systems that replace exception-heavy manual work with structured, auditable workflows.',
      sourceLabel: 'A-Team on Broadridge / DeepSee',
      sourceUrl: 'https://a-teaminsight.com/blog/broadridge-deepens-ai-push-with-minority-investment-in-deepsee-to-transform-post-trade-operations/?brand=ati',
    },
  ],
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
    count: '~150–250 direct vendor-side wedge accounts globally',
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
    count: '~1,500–2,250 high-change operators in the first-sellable SAM',
    includes:
      'Investment banks, broker-dealers, market makers, proprietary trading firms, hedge funds with direct market access (DMA)',
    body: 'This broader direct SAM includes broker-dealers, market makers, proprietary firms, and other connected operators that absorb recurring venue and system change. They still feel the pain downstream: late rollouts, compressed certification windows, unclear communication, and support escalations when venue changes are misunderstood or venue-side defects surface in certification.',
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
  body: 'Click any node on the map to explore the detail. The market thesis shows the missing vendor layer between venue changes and downstream clients. That is the first wedge. The broader product lives between the notice, the human response, and the evidence trail wherever systems have to absorb constant change safely.',
  hint: 'Start with the amber trigger node, then move into the vendor layer to see the strategic wedge.',
}

export const GAP = {
  today: {
    title: 'TODAY',
    subtitle: 'Manual coordination and evidence rebuilds',
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
        detail: 'Client, vendor, venue, product, engineering, and QA teams all need different answers before the real impact is even clear.',
        time: '2–7 days',
      },
      {
        number: '03',
        title: 'PROTOCOL FRAGMENTATION RESEARCH',
        detail: 'Message dictionaries, custom tags, and the gap between what the spec says and how the flow actually behaves have to be understood manually.',
        time: '1–3 weeks',
      },
      {
        number: '04',
        title: 'TESTING & CERTIFICATION COORDINATION',
        detail: 'Teams rebuild test packs, chase credentials, find bugs mid-stream, and often wait on venue-side fixes before certification can continue.',
        time: '1–6 weeks',
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
    total: 'SEVERAL WEEKS TO MONTHS FOR A RELIABLE CHANGE PACK',
    risk: 'The slowness is not only engineering implementation. It sits in communication chains, spec-versus-runtime drift, venue-side bug turnaround, and evidence rebuilds after the fact.',
  },
  automated: {
    title: 'WITH FIXFRIEND',
    subtitle: 'Agent-operated change-response control layer',
    tint: 'blue',
    steps: [
      {
        number: '01',
        title: 'CHANGE SIGNALS DETECTED EARLY',
        detail:
          'FIXFriend continuously polls connected workspaces and external sources, fuses weak signals, and opens one canonical change record before teams start inbox hunting.',
        time: null,
      },
      {
        number: '02',
        title: 'IMPACT MAPPED',
        detail: 'FIXFriend links the change to relevant products, configurations, test packs, and downstream client workflows.',
        time: 'Hours',
      },
      {
        number: '03',
        title: 'CHANGE PACK ASSEMBLED',
        detail: 'Engineering-ready requirements, rollout notes, UAT tasks, and channel-ready comms are created in one bounded working bundle.',
        time: '1–2 days',
      },
      {
        number: '04',
        title: 'CERTIFICATION RUNBOOK READY',
        detail: 'Validation steps, dependencies, and evidence expectations are queued before the window compresses.',
        time: '1–3 days',
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
    total: 'DAYS TO A BOUNDED CHANGE PACK',
    summary:
      'FIXFriend is the workflow-control layer between change notice, human action, certification readiness, and evidence. Bounded cases move faster. Long-running external dependencies become visible earlier and stay structured.',
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
        howTheyBuy: 'Founder-led and centralized. As of March 2026, the public picture still points to tightly controlled strategic buying in adjacent workflow businesses, while current markets leadership remains harder to verify through official ION pages than through trade press and org-chart sources.',
        sourcingConfidence: 'Needs further diligence',
        recentDeals: [
          { label: 'Prelios', detail: 'Closed July 19, 2024 through X3, an ION subsidiary, for EUR 1.35bn.' },
          { label: 'Clarus Financial Technology', detail: 'Acquired September 10, 2021 to deepen cleared derivatives and post-trade capabilities.' },
        ],
        decisionMakers: [
          { name: 'Andrea Pignataro', role: 'Founder and CEO', note: 'Still the likely final sponsor for strategic acquisitions; confirmed through current ION corporate materials as of March 2026.' },
          { name: 'Silvio Oliviero', role: 'Head of Corporate Development and Chief Executive Officer for Markets', note: 'Risk.net reported this remit in April 2025; ION still lacks a clean public leadership page for the role, so this is verified through trade press and org-chart sources as of March 2026.' },
        ],
        sourceLinks: [
          { label: 'ION closes Prelios acquisition (Andrea Pignataro current sponsor signal)', url: 'https://iongroup.com/press-release/group/ion-group-announces-closing-of-prelios-acquisition/' },
          { label: 'Risk.net reports Silvio Oliviero as ION markets CEO and corp-dev lead (Apr 2025)', url: 'https://www.risk.net/people/7961384/caramanli-quits-ion-destination-unknown' },
          { label: 'The Org lists Silvio Oliviero in corporate development at ION (checked Mar 2026)', url: 'https://theorg.com/org/ion-group/org-chart/silvio-oliviero' },
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
          { name: 'Chris Perry', role: 'President', note: 'Verified on Broadridge’s leadership page as of March 2026; his remit still includes international expansion and corporate development.' },
          { name: 'Vincent G. Roux', role: 'Senior Vice President, Global Head of Corporate Development', note: 'Verified on Broadridge’s leadership page as of March 2026; the cleanest current corp-dev contact for a tuck-in discussion.' },
          { name: 'Frank Troise', role: 'President, BTCS and Head of Global Technology and Operations', note: 'Verified on Broadridge’s leadership page as of March 2026; still closest to the trading/connectivity stack where FIXFriend would attach.' },
        ],
        sourceLinks: [
          { label: 'Broadridge leadership team (Chris Perry, Vincent G. Roux, Frank Troise checked Mar 2026)', url: 'https://www.broadridge.com/our-leadership-team' },
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
          { name: 'Elias Eddé', role: 'Chief Executive Officer', note: 'Verified through Murex’s governance-transition announcement as of March 2026; current operating leader and likely sponsor if M&A posture changes.' },
          { name: 'Maroun Eddé', role: 'Executive Chairman', note: 'Verified through the same governance-transition announcement as of March 2026; still central to strategic direction and governance.' },
        ],
        sourceLinks: [
          { label: 'Murex governance transition (Elias Eddé and Maroun Eddé checked Mar 2026)', url: 'https://www.murex.com/en/news/murex-elias-edde-takes-ceo-role-financial-technology-leader-governance-transition-maroun-edde' },
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
          { name: 'Justin Llewellyn-Jones', role: 'Chief Executive Officer', note: 'Verified on TT’s management page as of March 2026; the most visible executive sponsor for platform expansion.' },
          { name: 'Jason Shaffer', role: 'Chief Technology and Product Officer', note: 'Verified on TT’s management page as of March 2026; still the clearest product-side sponsor for adjacent workflow acquisitions.' },
          { name: 'Chris Heffernan', role: 'EVP and Managing Director, Fixed Income', note: 'Verified on TT’s management page and recent fixed-income releases as of March 2026; a better workflow-adjacent sponsor than the finance function for FIXFriend.' },
        ],
        sourceLinks: [
          { label: 'TT acquires OpenGamma', url: 'https://tradingtechnologies.com/news-releases/trading-technologies-acquires-opengamma-leader-in-margin-and-capital-optimization-analytics/' },
          { label: 'TT CEO transition', url: 'https://tradingtechnologies.com/news-releases/trading-technologies-promotes-justin-llewellyn-jones-to-ceo-keith-todd-to-deputy-chairman/' },
          { label: 'TT management team (Justin Llewellyn-Jones, Jason Shaffer, Chris Heffernan checked Mar 2026)', url: 'https://tradingtechnologies.com/about-us/meet-the-team/' },
          { label: 'TT fixed-income release quoting Chris Heffernan', url: 'https://tradingtechnologies.com/news-releases/trading-technologies-wins-editors-choice-award-for-outstanding-market-data-services-provider-fixed-income-in-the-trades-leaders-in-trading-2024-awards/' },
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
          { name: 'Bjørn Sibbern', role: 'Chief Executive Officer', note: 'Verified through SIX governance materials and the 2024 annual report as of March 2026; primary executive sponsor for group strategy.' },
          { name: 'Tomas Kindler', role: 'Global Head Exchanges', note: 'Verified through SIX governance materials and the 2024 annual report as of March 2026; the clearest venue-side sponsor for exchange and certification workflow gaps.' },
          { name: 'David Brupbacher', role: 'Head IT and Member of the Executive Board', note: 'Verified through SIX’s March 2024 appointment release and the 2024 annual report as of March 2026; closer to implementation and integration risk than the finance seat.' },
        ],
        sourceLinks: [
          { label: 'SIX completes acquisition of Aquis', url: 'https://www.six-group.com/en/newsroom/media-releases/2025/20250701-completion-acquisition-aquis.html' },
          { label: 'SIX acquires Baymarkets', url: 'https://www.six-group.com/en/newsroom/media-releases/2025/20251125-baymarkets-acquisition.html' },
          { label: 'SIX executive board (Bjørn Sibbern, Tomas Kindler, David Brupbacher checked Mar 2026)', url: 'https://www.six-group.com/en/company/governance/executive-board.html' },
          { label: 'SIX annual report 2024 organizational structure', url: 'https://www.six-group.com/dam/download/company/report/annual/2024/six-annual-report-2024-en.pdf' },
          { label: 'SIX appoints David Brupbacher to executive board', url: 'https://www.six-group.com/en/newsroom/media-releases/2024/20240308-six-exb-mutation.html' },
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
          { name: 'Stephan Leithner', role: 'Chief Executive Officer', note: 'Verified on Deutsche Börse executive materials as of March 2026; top-level strategic sponsor.' },
          { name: 'Thomas Book', role: 'Member of the Executive Board, Trading and Clearing', note: 'Verified on Deutsche Börse management pages as of March 2026; closest public executive owner to Eurex and the venue workflow problem.' },
          { name: 'Christoph Böhm', role: 'Chief Information Officer / Chief Operating Officer', note: 'Verified by Deutsche Börse’s December 2025 board-mandate extension as of March 2026; the strongest technology and operations sponsor for workflow-control software.' },
        ],
        sourceLinks: [
          { label: 'Deutsche Börse and Allfunds agreement', url: 'https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Deutsche-B-rse-Group-and-Allfunds-Group-Sign-Agreement-on-Recommended-Acquisition-of-Allfunds-Group-4914918' },
          { label: 'Deutsche Börse acquires ISS STOXX minority stake', url: 'https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Deutsche-B-rse-Group-to-Acquire-General-Atlantic-s-Minority-Stake-in-ISS-STOXX-4948682' },
          { label: 'Deutsche Börse executive board (Stephan Leithner checked Mar 2026)', url: 'https://www.deutsche-boerse.com/dbg-en/about-us/deutsche-boerse-group/executive-board' },
          { label: 'Deutsche Börse market data management page for Thomas Book', url: 'https://www.mds.deutsche-boerse.com/mds-en/about-us/management' },
          { label: 'Deutsche Börse extends Christoph Böhm board mandate (Dec 2025)', url: 'https://www.deutsche-boerse.com/dbg-en/media/news-stories/press-releases/Supervisory-Board-of-Deutsche-B-rse-AG-Extends-Executive-Board-Mandate-of-Christoph-B-hm-4839418' },
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
        howTheyBuy: 'Strategy-led M&A is visible publicly. As of March 2026, Camille Beudin remains the clearest named strategic-development contact even after moving into the chief diversification role, and the federal model still makes small infrastructure tuck-ins plausible when they fit the broader platform.',
        sourcingConfidence: 'Publicly disclosed',
        recentDeals: [
          { label: 'Admincontrol', detail: 'Completed May 13, 2025 to add recurring software revenue.' },
          { label: 'ATHEX Group', detail: 'Successful tender announced November 19, 2025, reaching about 74.25% of voting rights.' },
        ],
        decisionMakers: [
          { name: 'Stéphane Boujnah', role: 'Chief Executive Officer and Chairman of the Managing Board', note: 'Verified on Euronext governance materials as of March 2026; visible top-level sponsor for strategic direction.' },
          { name: 'Camille Beudin', role: 'Chief Diversification Officer', note: 'Verified on Euronext governance materials and 2025 company materials as of March 2026; still publicly tied to strategic development and M&A even after the title change.' },
          { name: 'Anthony Attia', role: 'Global Head of Derivatives and Post-Trade', note: 'Verified in recent 2025-2026 Euronext releases as of March 2026; much closer than finance to the venue, clearing, and certification workflow FIXFriend addresses.' },
        ],
        sourceLinks: [
          { label: 'Euronext full-year 2025 results', url: 'https://www.euronext.com/en/investor-relations/financial-information/news/euronext-publishes-q4-and-full-year-2025-results' },
          { label: 'Euronext and Admincontrol announcement', url: 'https://www.euronext.com/sites/default/files/2025-03/20250313_Euronext%20Admincontrol%20announcement.pdf' },
          { label: 'Euronext announces success of ATHEX exchange offer', url: 'https://www.euronext.com/en/investor-relations/financial-information/news/euronext-announces-success-voluntary-share-exchange' },
          { label: 'Euronext to acquire Nasdaq Nordic power futures business', url: 'https://www.euronext.com/en/about/media/euronext-press-releases/euronext-acquire-nasdaqs-nordic-power-futures-business' },
          { label: 'Euronext managing board (Stéphane Boujnah and Camille Beudin checked Mar 2026)', url: 'https://www.euronext.com/en/investor-relations/corporate-governance/managing-board' },
          { label: 'Euronext release quoting Anthony Attia as global head of derivatives and post-trade', url: 'https://www.euronext.com/en/about/media/euronext-press-releases/euronext-and-clearstream-launch-partnership-further-strengthen' },
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
          { name: 'Ali Pichvai', role: 'Co-CEO and Founder', note: 'Still current as of March 2026: Quod’s March 17, 2025 co-CEO announcement names him as Co-CEO and founder, and his March 3, 2026 authored article confirms he remains active even though the current About page spotlights other operators.' },
          { name: 'Medan Gabbay', role: 'Co-CEO', note: 'Verified through Quod’s March 17, 2025 announcement and current About page as of March 2026; deep product and commercial operator with current leadership authority across the platform.' },
          { name: 'Ben Ernest-Jones', role: 'Chief Product & Technology Officer', note: 'Verified on Quod’s current About page and recent 2026 article byline as of March 2026; the strongest product-side sponsor for workflow-control discussions.' },
        ],
        sourceLinks: [
          { label: 'Quod homepage and product overview', url: 'https://www.quodfinancial.com/' },
          { label: 'Quod OMS overview', url: 'https://www.quodfinancial.com/order-management-system-oms/' },
          { label: 'Quod Equities O/EMS overview', url: 'https://www.quodfinancial.com/markets/equities-oms/' },
          { label: 'Quod announces Medan Gabbay as Co-CEO and names Ali Pichvai as Co-CEO and founder', url: 'https://www.quodfinancial.com/medan-gabbay-co-ceo-appointment/' },
          { label: 'Quod About page (Medan Gabbay and Ben Ernest-Jones checked Mar 2026)', url: 'https://www.quodfinancial.com/about-us/' },
          { label: 'Ali Pichvai authored Quod article on 3 Mar 2026', url: 'https://www.quodfinancial.com/ai-cambrian-explosion-software/' },
          { label: 'Quod news and press', url: 'https://www.quodfinancial.com/resources/news-press/' },
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
    tagline: 'Builds software to transform complexity into action.',
    about: 'prdctv.work started from a simple observation: most people and teams are not short on information, tools, or ambition. They are short on clarity — a clear view of what matters, what to do next, and what can be ignored.',
  },
  umbrella: {
    name: 'FIXFriend',
    tagline: 'Turning trading tech ops complexity into clear action.',
    description: 'FIXFriend is the product within PRDCTV.WORK focused on capital markets operational workflows. Proactively surfaces context, classifies impact, and executes change in a controlled, auditable way — delivering into the systems teams already use.',
  },
  mvpDefinition: 'Institutional trading firms must continuously update and manage software to enable ongoing operations and comply with strict regulations. This is a time consuming and complex manual process.',
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
  ],
  expansionNote: 'DataRights and Declare are expansion modules in development.',
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
      detail: 'Add additional sources, teams, or delivery channels. Land-and-expand path within a single account.',
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
    name: 'Duco',
    category: 'Financial data automation',
    pricing: 'Enterprise / custom; public pricing tool',
    implication: 'Shows regulated financial-operations software sustaining serious enterprise ACV.',
    gap: 'Operational data automation and reconciliation, not a venue-change response or evidence layer.',
    sourceUrl: 'https://pricingtool.duco.eu/',
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
      name: 'Virtu Europe',
      contact: 'David Furlong, CEO',
      type: 'Economic buyer',
      status: 'Discovery completed',
      statusTone: 'success',
      note: 'Validated that the pain is structural and expensive, not just workflow friction. The biggest constraints sit in external infrastructure, especially exchange constraints, market data fees, and post-trade fragmentation.',
      quotes: [
        'The biggest problems are usually external. Internal systems are fine until the exchange, market data, or post-trade landscape becomes the constraint.',
        'You do not put a new vendor into a sensitive workflow unless it is already proven, bounded, and auditable.',
      ],
    },
    {
      name: 'Quod Financial',
      contact: 'Ben Ernest-Jones, CPO',
      type: 'Product buyer / strategic signal',
      status: 'Interview + follow-up completed',
      statusTone: 'success',
      note: 'Validated that QA and handoff quality are bigger delivery bottlenecks than coding itself. Strong signal that vendors want agentic development, but are blocked by fragmented context across meetings, chat, email, and team knowledge.',
      quotes: [
        'QA is the primary bottleneck, not coding.',
        'We are still copying and pasting context between meetings, chat, email, and AI tools instead of giving the system one working bundle.',
      ],
    },
    {
      name: 'Bjorn Haggstrom',
      contact: 'Former EMEA Customer Success & Operations leader',
      type: 'Operator / strategic advisor',
      status: 'Interview + MVP demo completed',
      statusTone: 'success',
      note: 'Validated recurring pain in software instability, complex upgrades, and lack of client self-service. Also signaled that the capability is likely more compelling as an embedded or acquired workflow layer than as a broad standalone platform.',
      quotes: [
        'The recurring pains are software instability, complex upgrades, and lack of client self-service.',
        'This looks more like something a larger firm would buy to get the capability faster than build internally.',
      ],
    },
    {
      name: 'WCM Investment Management',
      contact: 'Miles, Chief of Staff',
      type: 'Key user',
      status: 'Call scheduled',
      statusTone: 'warning',
      note: '$100B+ AUM. Scheduled call pending — strong signal of institutional interest beyond European trading technology.',
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
        'Expansion to €150K–€250K+ through additional teams, sources, and delivery channels.',
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
    body: "Repeated exposure to the same failure mode across trading ops, vendor platforms, and client rollout work: change lands, context is fragmented, and evidence rebuilds late. Venue-driven change response is the first concrete wedge because the pain is real, recurring, and acquirer-relevant.\n\nThe broader thesis is automation around change in systems. FIXFriend starts with venue change, then learns from acquirer conversations which adjacent change domain carries the strongest strategic pull.",
  },
  marketDefinition: {
    title: 'Market Definition',
    body: 'FIXFriend is a **B2B workflow-control layer for venue-driven and adjacent system change in electronic trading infrastructure across the US, UK, and Europe**, sold first into connectivity-heavy operators.\n\nModern market access depends on venue-driven change response: interpreting notices, understanding protocol nuance, coordinating certification, and getting clients through rollout safely.\n\nIncumbents already own key parts of the stack, including connectivity, onboarding, testing, and reporting. The gap is not generic FIX automation.\n\n**FIXFriend defines a narrower wedge: an agent-operated change-response control layer for trading technology vendors, brokers, market makers, and selected venue operators, starting with venue change.**\n\nIt handles bounded minor changes through UAT-ready outputs, escalates major changes into structured human work, lands outputs in existing tools and channels, and leaves evidence behind as the response happens.',
  },
  marketSize: {
    title: 'Market Size',
    entry: {
      label: 'Beachhead Market',
      body: 'Week 3 shifts the model from a narrow vendor-only estimate to a proof-backed upper bound for the operator universe, then narrows into the first sellable segment.\n\nTop-down core market input: **3,249 FINRA-registered US broker-dealer firms + about 3,500 FCA MiFID investment firms + 2,290 EU investment firms** in the latest EBA / ESMA prudential report.\n\nThat yields a core regulated operator universe of **about 9,000 firms** across the US, UK, and Europe. At a directional **€100k ACV**, that supports a **TAM of about €900M**.\n\nThe first sellable segment is the higher-change-intensity slice: brokers, market makers, vendors, venues, and testing / compliance adjacencies with repeated multi-venue change burden.',
    },
    attach: {
      label: 'Strategic Attach View',
      body: 'The upside is not only direct ARR. If FIXFriend attaches to an incumbent platform, the value is attach revenue plus faster change handling, lower support load, and stronger client stickiness across the installed base.',
    },
    expansion: {
      label: 'Direct SAM And First SOM',
      body: 'Direct SAM is the high-change slice of roughly **1,500–2,250 operators** across brokers, market makers, vendors, venues, and workflow adjacencies where venue and system change is frequent enough to justify workflow-control spend. At **€150k–€200k ARR**, that supports a **SAM of about €225M–€450M**.\n\nNear-term SOM remains execution-focused rather than theoretical: **20–40 customers at €150k–€200k ARR**, or roughly **€3M–€8M ARR**, before any partner distribution or incumbent embed.',
    },
    sam: 'Working SAM: **1,500–2,250 high-change operators** across the US, UK, and Europe.',
    som: 'Near-term objective: **20–40 paying customers** at **€150k–€200k ARR**, or about **€3M–€8M ARR**.',
    methodology: [
      'Use a proof-backed upper bound for the regulated operator base: FINRA, FCA, and EBA / ESMA firm counts.',
      'Price TAM at a conservative platform-style entry ACV of about €100k, not the long-run fully loaded enterprise price.',
      'Concentrate SAM on the high-change operators where multi-venue change, certification, and evidence drag are structural.',
      'Keep direct ARR separate from strategic attach value inside incumbent installed bases.',
    ],
  },
}

export const PRODUCT_WORKFLOW_STAGES = [
  {
    id: 'trigger',
    label: 'Trigger',
    today: 'A venue notice lands through email, portal, PDF, or a relationship channel. Teams start from an inconsistent source pack.',
    todayDrag: 'Drag: source sprawl starts immediately.',
    fixfriend:
      'FIXFriend continuously polls connected workspaces and external sources, hunts for context and weak signals, timestamps what it finds, and opens one canonical change record from fragmented evidence.',
    fixfriendImpact: 'Outcome: change is surfaced before humans have to assemble the source pack by hand.',
  },
  {
    id: 'triage',
    label: 'Triage',
    today: 'Product, engineering, QA, and client teams all need different answers. Owners hand work across functions before anyone knows the full impact.',
    todayDrag: 'Drag: context switching and owner handoff latency.',
    fixfriend:
      'FIXFriend correlates the detected signal with impacted products, configurations, tests, and downstream workflows before routing owners.',
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
    fixfriendImpact: 'Outcome: bounded cases reach certification-ready preparation in days instead of several weeks or months.',
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
    intro: 'FIXFriend is an agent-operated change-response system for trading technology vendors, starting with venue change as the first wedge.\n\nIt is built to:',
    bullets: [
      'continuously poll connected workspaces and external sources for change signals',
      'retrieve specs and related context through Expoty, then pursue missing documentation when needed',
      'classify changes with rules-first gates into autonomous minor work or coordinated major work',
      'generate UAT branches, regression packs, update notes, workflow tickets, and owner routing for bounded minor changes',
      'publish evidence into Jira, Confluence or Notion, Slack, Teams, email, Git, and audit logs',
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
    body: 'Buyers are not paying for a generic model. They are paying for a system that sources the spec, closes coordination gaps, creates UAT-ready outputs in existing tools and channels, and preserves the evidence trail while the work happens.',
  },
  targetBuyer: {
    title: 'Target Buyer & Economic Logic',
    primary: 'Head of Product / Head of Connectivity / Head of Electronic Trading',
    budget: 'FIXFriend does not require a brand-new budget line. It reallocates spend already buried in product coordination, certification effort, support escalation, and delayed client rollout.',
    triggers: ['Short-notice venue change', 'Certification bottleneck', 'Client rollout delay', 'Repeated support escalation'],
  },
  painPoints: [
    'Communication breaks first: the notice, deadline, and impact move across clients, vendors, venues, and internal teams before anyone has one canonical view.',
    'Specs are hard to source consistently across portals, emails, PDFs, and venue websites.',
    'What the spec says and how the flow actually behaves often diverge, so teams rediscover runtime reality mid-project.',
    'Protocol fragmentation means standard FIX still hides asset-class and venue-specific nuance.',
    'Testing is expensive because vendors either build simulators or depend on venue cooperation, and bugs are often discovered mid-stream.',
    'Connectivity setup still creates delay: internet, VPN, private lines, and x-connects change the response path.',
    'Vendors become external QA for venues and absorb the reputation cost when releases slip.',
  ],
}

export const PRODUCT_OPERATING_MODEL = {
  summary:
    'FIXFriend runs two lanes. Bounded minor changes are handled autonomously through UAT-ready outputs. Major changes become structured human work with source provenance and escalation evidence attached.',
  principles: [
    'Workflow-first externally, multi-agent internally.',
    'Human out of the loop only for minor changes in sandbox, test, or UAT.',
    'All outputs land inside tools and channels teams already use.',
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
        'Planning and execution agents emit requirements, UAT branch plan, regression pack, update docs, Jira tickets, channel-ready summaries, and audit evidence.',
      ],
      outputs: [
        'Requirements bundle',
        'UAT branch and implementation plan',
        'Regression tests and results',
        'Update docs and explainer',
        'Jira tickets and owner routing',
        'Structured channel summary',
        'Audit log with spec sources',
      ],
      metrics: [
        { label: 'Human approvals', value: '0 before UAT', tone: 'success' },
        { label: 'Environment', value: 'Sandbox / UAT', tone: 'info' },
        { label: 'Evidence', value: 'Live', tone: 'success' },
      ],
      result:
        'Bounded minor changes become days-scale UAT-ready bundles instead of manual coordination projects that drag through several weeks or months.',
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
        'Blocked-state channel summary',
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
    role: 'Publishes structured Jira, Confluence or Notion, Slack, Teams, and email outputs with links, explainers, and tags.',
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
    name: 'Slack, Teams, and email summaries',
    detail: 'Structured notifications link to sources, branches, tickets, tests, and tagged system owners without forcing a new comms tool.',
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
      'Sequence from continuous polling and context hunting to UAT-ready outputs and live audit evidence.',
    diagram: `sequenceDiagram
      autonumber
      participant Spaces as Slack, Jira, Teams, Email, Portals, Docs
      participant Venue as Venue / Spec Publisher
      participant Monitor as Monitor Agent
      participant Source as Source Agent
      participant Expoty as Expoty Context Core
      participant Impact as Impact Agent
      participant Plan as Planning Agent
      participant Exec as Execution Agent
      participant Comms as Comms Agent
      participant Audit as Audit Agent

      loop Continuous polling
        Spaces->>Monitor: Workspace activity, tickets, messages, docs, digests
        Venue->>Monitor: Notice, portal update, website delta, spec change
      end
      Monitor->>Source: Correlate weak signals and open canonical change record
      Source->>Expoty: Retrieve related specs, tickets, code, tests, decisions
      Source-->>Audit: Source IDs, timestamps, hashes
      Source->>Impact: Canonical source bundle + recovered context
      Note over Impact: Minor if no data-model or workflow change<br/>and source confidence is high
      Impact->>Plan: Minor classification + rationale
      Plan->>Exec: UAT branch plan, regression pack, update tasks
      Note over Exec: Sandbox / test / UAT only<br/>Never prod
      Exec-->>Audit: Test outputs and execution evidence
      Plan->>Comms: Jira, docs, and channel bundle
      Comms-->>Audit: Links, owner tags, explanation
      Audit-->>Spaces: Provenance-backed decision trail ready
    `,
  },
  major: {
    title: 'Major Change Escalation',
    subtitle:
      'Proactive discovery feeds a rules-first gate that halts autonomy early and opens a structured human project.',
    diagram: `flowchart TD
      A[Continuous polling across Slack, Jira, Teams, email, portals, docs, websites] --> B[Signals fused into one canonical change record]
      B --> C[Source agent assembles spec and context bundle]
      C --> D{Rules-first autonomy gate}
      D -->|Missing spec or low confidence| E[Publisher outreach opened and logged]
      D -->|Data-model change| F[Escalate]
      D -->|Business-workflow change| F
      D -->|New connectivity dependency| F
      D -->|Risky delta surfaced early| F
      E --> F
      F --> G[Create Jira epic and owner routing]
      F --> H[Publish Confluence or Notion brief]
      F --> I[Send blocked-state channel summary]
      F --> J[Attach source provenance and decision log]
      J --> K[Human-led project in sandbox / UAT only]
      K --> L[Never prod without separate human release path]
    `,
  },
  architecture: {
    title: 'Agent System + Expoty Core',
    subtitle:
      'Specialist agents stay narrow while FIXFriend continuously polls connected systems and Expoty carries the shared semantic context across the workflow.',
    diagram: `graph LR
      V[Slack, Jira, Teams, Email, Portals, Websites, Docs] --> M[Monitor agent]
      M --> R[Signal fusion and context hunting]
      R --> S[Source agent]
      S --> X[(Expoty context core)]
      D[(Canonical sources, snapshots, prior decisions)] --> S
      X --> I[Impact agent]
      X --> P[Planning agent]
      X --> E[Execution agent]
      X --> C[Comms agent]
      I --> P
      P --> E
      P --> C
      E --> W[(Git / UAT branches<br/>Regression results)]
      C --> Y[(Jira / Docs / Slack / Teams / Email)]
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
    value: '€900M',
    detail:
      'About 9,000 regulated operators across the US, UK, and Europe at a directional €100k platform ACV.',
  },
  sam: {
    label: 'SAM',
    value: '€225M–€450M',
    detail:
      'High-change-intensity slice: roughly 1,500–2,250 operators at €150k–€200k ARR.',
  },
  som: {
    label: 'SOM',
    value: '€3M–€8M',
    detail:
      'Initial reachable objective before partner distribution: 20–40 customers at €150k–€200k ARR.',
  },
  strategicAttach: {
    label: 'Strategic Attach',
    value: 'Platform leverage',
    detail:
      'If FIXFriend plugs into incumbent platforms, strategic value comes from attach revenue plus faster client rollout, lower support load, and stronger stickiness.',
  },
  methodology: [
    'TAM starts with proof-backed operator counts from FINRA, the FCA, and the EBA / ESMA prudential report.',
    'Use a directional entry ACV of about €100k for TAM and a fuller €150k–€200k workflow ACV for SAM and SOM.',
    'SAM narrows to the higher-change operators where venue and system change is constant enough to justify dedicated workflow-control spend.',
    'Separate direct ARR from strategic attach value; do not hide both inside one TAM number.',
  ],
}

export const MARKET_SIZE_INPUTS = [
  {
    label: 'US broker-dealer firms',
    value: '3,249',
    detail: 'FINRA 2025 Industry Snapshot registered firms as of December 31, 2024.',
    sourceLabel: 'FINRA 2025 Industry Snapshot',
    sourceUrl: 'https://www.finra.org/rules-guidance/guidance/reports-studies/2025-industry-snapshot',
  },
  {
    label: 'UK MiFID investment firms',
    value: '~3,500',
    detail: 'FCA says IFPR covers about 3,500 MiFID investment firms it prudentially regulates in the UK.',
    sourceLabel: 'FCA IFPR implementation observations',
    sourceUrl: 'https://www.fca.org.uk/news/news-stories/fca-publishes-final-report-ifpr-implementation-observations',
  },
  {
    label: 'EU investment firms',
    value: '2,290',
    detail: 'EBA / ESMA annual prudential-framework report, table 2, as of December 31, 2023.',
    sourceLabel: 'EBA / ESMA prudential framework report',
    sourceUrl: 'https://www.eba.europa.eu/publications-and-media/press-releases/eba-and-esma-publish-annual-report-prudential-framework-investment-firms',
  },
  {
    label: 'Core operator universe',
    value: '~9,000',
    detail: 'Proof-backed upper bound for the US, UK, and Europe core market before segment filtering.',
    sourceLabel: 'Derived from FINRA + FCA + EBA / ESMA',
    sourceUrl: '',
  },
]

export const BUSINESS_MODEL_CANVAS = {
  customerSegments: [
    'OMS / EMS vendors and managed connectivity providers',
    'Broker-dealers and market makers with heavy multi-venue change load',
    'Selected venue operators',
    'Testing and compliance adjacencies',
  ],
  valueProp:
    'Turn change notices into bounded execution packs, structured human workflows, and client-ready evidence without rebuilding the story by hand.',
  channels: [
    'Founder-led warm intros',
    'Design-partner outreach around live venue-change pain',
    'Industry events and thought leadership',
    'Partner and platform distribution after discovery confirms the first wedge',
  ],
  revenueStreams: [
    'Paid design partner or pilot: €35k–€75k',
    'Annual platform contract: €150k–€250k ARR',
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
      reason: 'Minor changes need requirements, UAT branches, tests, docs, tickets, channel-ready summaries, and audit evidence to appear automatically.',
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
      reason: 'Expand only after discovery confirms the next change domain and the autonomy boundary is trusted.',
    },
  ],
}

export const PRICING_TRACKER = [
  {
    name: 'BLS software developer wage',
    signal: 'Median annual wage $133,080 in May 2024.',
    logic: 'Anchors the engineering portion of the manual change-response cost base that FIXFriend is designed to compress.',
    evidence: 'Validated',
    sourceLabel: 'BLS Software Developers, QA Analysts, and Testers',
    sourceUrl: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm',
  },
  {
    name: 'BLS software QA wage',
    signal: 'Median annual wage $102,610 in May 2024.',
    logic: 'Supports the claim that repeated regression and certification work already carries specialist labor cost before any venue-side delay is counted.',
    evidence: 'Validated',
    sourceLabel: 'BLS Software Developers, QA Analysts, and Testers',
    sourceUrl: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm',
  },
  {
    name: 'BLS systems analyst wage',
    signal: 'Median annual wage $103,790 in May 2024.',
    logic: 'Supports the workflow-analysis and change-interpretation labor that sits between the venue notice and the engineering task.',
    evidence: 'Validated',
    sourceLabel: 'BLS Computer Systems Analysts',
    sourceUrl: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-systems-analysts.htm',
  },
  {
    name: 'BLS technology manager wage',
    signal: 'Median annual wage $171,200 in May 2024.',
    logic: 'Supports the management and sign-off layer that buyers are already paying for in change, risk, and rollout coordination.',
    evidence: 'Validated',
    sourceLabel: 'BLS Computer and Information Systems Managers',
    sourceUrl: 'https://www.bls.gov/ooh/management/computer-and-information-systems-managers.htm',
  },
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
    signal: 'Pilot €35k–€75k, then €150k–€250k ARR + optional services.',
    logic: 'Fits a workflow product priced as a fraction of recoverable engineering, QA, analysis, and management cost rather than as a lightweight seat tool.',
    evidence: 'Hypothesis',
    sourceLabel: 'Current operating hypothesis',
    sourceUrl: '',
  },
]

export const UNIT_ECONOMICS = {
  title: 'Proof-backed unit economics',
  intro:
    'The economic case is labor reallocation first, strategic attach upside second. Pricing should stay below the annual cost of the repeated manual workflow it removes.',
  roleWages: [
    {
      label: 'Software developer',
      value: '$133,080',
      sourceLabel: 'BLS Software Developers',
      sourceUrl: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm',
    },
    {
      label: 'Software QA analyst',
      value: '$102,610',
      sourceLabel: 'BLS QA Analysts and Testers',
      sourceUrl: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm',
    },
    {
      label: 'Computer systems analyst',
      value: '$103,790',
      sourceLabel: 'BLS Computer Systems Analysts',
      sourceUrl: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-systems-analysts.htm',
    },
    {
      label: 'Technology manager',
      value: '$171,200',
      sourceLabel: 'BLS CIS Managers',
      sourceUrl: 'https://www.bls.gov/ooh/management/computer-and-information-systems-managers.htm',
    },
  ],
  workflowModel: [
    'Representative manual cycle: 2 weeks of analyst time, 2 weeks of developer time, 2 weeks of QA time, and 1 week of manager oversight.',
    'Using BLS median wages, that is about $16k of direct labor per change cycle before overhead or venue-side delay.',
    'At 25 cycles per year, the direct labor base is already about $400k; at 50 cycles, it is about $800k.',
  ],
  pricingLogic: [
    'That labor base supports an enterprise workflow price of about €150k–€250k ARR while still leaving room for buyer ROI.',
    'Pilot pricing of €35k–€75k keeps the first proof step below full-platform commitment and matches a design-partner motion.',
    'If FIXFriend becomes an attach product inside an incumbent stack, strategic value expands beyond direct savings into stickiness, rollout speed, and lower support load.',
  ],
  viability: [
    '20 customers at €150k ARR is about €3M ARR.',
    '40 customers at €200k ARR is about €8M ARR.',
    'The first 10 stay founder-led and high-touch; efficiency improves materially once partner or platform distribution exists.',
  ],
}

export const VALIDATION_PLAN = {
  riskiestAssumption:
    'The change-response workflow gap is strategic enough that incumbents and likely acquirers see it as a product gap, not just a useful feature.',
  hypothesis:
    'If acquirers consistently frame venue-driven change response as part of a broader, cross-functional system-change pain that is hard to internalise quickly, then FIXFriend can earn strategic value as the workflow-control layer.',
  timeline: [
    {
      label: 'Week 1–2',
      focus: 'Product and connectivity interviews',
      detail: '8–10 conversations with leaders closest to rollout, onboarding, certification, and recurring change workflows.',
    },
    {
      label: 'Week 2–4',
      focus: 'Corp-dev, strategy, and M&A interviews',
      detail: '4–6 conversations on how similar acquisitions are sourced, sponsored, evaluated, and pushed through internal process.',
    },
    {
      label: 'Week 3–5',
      focus: 'Operator back-testing',
      detail: 'Replay 2 historical venue changes with product, QA, or connectivity operators to test if FIXFriend materially reduces coordination drag and ambiguity.',
    },
    {
      label: 'Week 6',
      focus: 'Wedge decision',
      detail: 'Choose whether to stay vendor-first on venue change or pivot to the adjacent change domain acquirers describe most consistently.',
    },
  ],
  successMetrics: [
    '2+ recurring strategic pain patterns across likely acquirers.',
    '1 clear internal sponsor role per acquirer archetype.',
    '1 credible buy / partner / embed path that beats internal build.',
    '1 clear read on how the M&A path is sourced and approved.',
    '1 paid pilot or strong design-partner commitment.',
  ],
  pivotTriggers: [
    'Acquirers describe the product as tactical, not strategic.',
    'Only one acquirer archetype shows real urgency.',
    'Another change domain consistently tests as more urgent than venue change.',
    'Pain is stronger on venue-side or testing-side than on vendor-side.',
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
    'Target design partners whose workflows also matter to likely acquirers, especially high-change brokers, market makers, and vendors.',
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
  'Which change domain beyond venue response shows the strongest repeated pain?',
  'Is the strongest wedge vendor-side, venue-side, or testing/regtech adjacency?',
  'How much of the problem is workflow versus missing technical tooling?',
]

export const LEAN_EXIT_CASE = {
  intro:
    'FIXFriend starts with operational value first: compress bounded change-response work from several weeks or months to days, while making long-running dependencies visible earlier. The lean-exit thesis is built through strategic-fit discovery: learn where acquirers feel the deepest change pain, understand how they buy, and let that signal shape the wedge.',
  evidenceOverview: [
    {
      label: 'Validated',
      tone: 'success',
      items: [
        'Interview evidence points to communication, certification, and protocol fragmentation as recurring pain.',
        'Public incumbents already cover onboarding, testing, and connectivity, which sharpens the differentiation bar.',
        'Verified sector deals show continued consolidation across trading infrastructure and exchanges.',
        'Extended trading and clearing windows strengthen the need for systems built for continuous change.',
      ],
    },
    {
      label: 'Hypothesis',
      tone: 'warning',
      items: [
        'Vendor-side motion is the cleanest opening wedge, but the commercial SAM is broader than vendors alone.',
        'The right buyer will pay for lower coordination drag, earlier impact clarity, and live evidence before they pay for AI by itself.',
        'A workflow and context layer for change in systems is more strategically interesting than a narrow point solution.',
      ],
    },
    {
      label: 'Open Question',
      tone: 'info',
      items: [
        'Which acquirer archetype feels this gap most intensely?',
        'What evidence would make buy-or-embed more attractive than internal build?',
        'Which product boundary creates the strongest strategic fit?',
        'Which adjacent change domain should pull the wedge beyond venue response?',
      ],
    },
  ],
  wedge: {
    evidence: 'Hypothesis',
    buyerOneLiner:
      'FIXFriend turns venue change notices into bounded autonomous execution, coordinated major-change projects, and audit-ready evidence for trading technology vendors.',
    acquirerOneLiner:
      'FIXFriend is a workflow-control layer for change in systems, starting with venue change and designed to fit around incumbent pain.',
    tenX:
      'Bounded cases move to days instead of several weeks or months because FIXFriend compresses coordination, context recovery, and evidence assembly before the cross-party loop stalls.',
    quantifiedFrom: 'Several weeks to months',
    quantifiedTo: 'Days for bounded cases',
    quantifiedLabel: 'Time to a bounded change pack',
  },
  scope: {
    evidence: 'Hypothesis',
    does: [
      'Monitor venue changes across existing channels and pursue missing documentation automatically.',
      'Use Expoty as the shared context core for specs, prior decisions, code context, and test history.',
      'Autonomously emit UAT branches, regression packs, update docs, Jira tickets, channel summaries, and audit evidence for bounded minor changes.',
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
      'Reduces rollout friction and support drag around venue changes by automating the bounded cases that consume time constantly.',
      'Turns a painful multi-team workflow into a differentiated attach product with provenance-backed execution.',
      'Improves client stickiness by making incumbent platforms easier to keep current inside existing Jira, docs, Slack, Teams, email, and UAT workflows.',
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
        label: 'Market structure drag',
        painPoint: 'planningUncertainty',
        workflowStage: 'rollout',
        text:
          'The issue is rarely the trade idea. It is the delay created when the venue, the protocol, or the release window changes faster than the desk can absorb it.',
      },
      {
        label: 'External dependency risk',
        painPoint: 'communication',
        workflowStage: 'trigger',
        text:
          'The painful part is that the first real risk is often outside the desk. Once exchange or vendor change lands late, the whole rollout becomes a coordination problem.',
      },
      {
        label: 'Evidence trust',
        painPoint: 'testingAndSimulation',
        workflowStage: 'certification',
        text:
          'A change is only real once the evidence is good enough for risk, operations, and the desk to trust it. Until then, everyone is still waiting.',
      },
      {
        label: 'Cost of slippage',
        painPoint: 'evidenceAndCertification',
        workflowStage: 'evidence',
        text:
          'By the time you add the buffer, the rework, and the sign-off loop, a small venue delay turns into a real cost item.',
      },
    ],
    followUp: [
      'Quantify P&L impact of delayed feature rollouts on the volatility desk.',
      'Clarify which parts of the certification flow traders would trust an agent system to touch.',
    ],
  },
  {
    id: 'igor-broadridge-connectivity',
    name: 'Igor',
    role: 'Principal Software Engineer & Market Connectivity Specialist',
    company: 'Broadridge',
    date: '2026-02',
    channel: 'Video call',
    userType: 'Connectivity engineer / integration owner',
    buyerInfluence: 'High — influences vendor selection and implementation feasibility',
    economicBuyerSignal: 'Indirect — validates the technical pain behind buy-versus-build decisions',
    painRatings: {
      communication: 'Medium',
      protocolFragmentation: 'High',
      testingAndSimulation: 'High',
      connectivityAndEnvironment: 'High',
      planningUncertainty: 'Medium',
      evidenceAndCertification: 'High',
    },
    currentSolutions: [
      'Venue-specific adapters and exception handling around standard FIX flows',
      'Manual review of specs, release notes, and edge-case behavior before implementation',
      'Regression harnesses and test credentials maintained per venue',
    ],
    budgetAuthority: 'Influencer',
    workflowStages: ['trigger', 'context', 'certification', 'evidence'],
    keyQuotes: [
      {
        label: 'Protocol nuance',
        painPoint: 'protocolFragmentation',
        workflowStage: 'context',
        text:
          'FIX is the starting point, not the answer. The real work is always in the venue quirks, session behaviour, and tag-level exceptions.',
      },
      {
        label: 'Environment friction',
        painPoint: 'connectivityAndEnvironment',
        workflowStage: 'trigger',
        text:
          'The time sink is often getting the same setup in test, UAT, and production so everyone is looking at the same thing.',
      },
      {
        label: 'Testing drag',
        painPoint: 'testingAndSimulation',
        workflowStage: 'certification',
        text:
          'A lot of the project time disappears into setup, credentials, and repeated edge-case testing rather than the actual implementation.',
      },
      {
        label: 'Operational memory',
        painPoint: 'evidenceAndCertification',
        workflowStage: 'evidence',
        text:
          'What teams really need is a way to capture the spec, the exceptions, and the proof in one place instead of reconstructing it each time.',
      },
    ],
    followUp: [
      'Check whether a structured change pack would reduce the back-and-forth during implementation reviews.',
      'Validate how much of the evidence trail could be generated from existing logs and release artifacts.',
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
        label: 'Context fragmentation',
        painPoint: 'protocolFragmentation',
        workflowStage: 'context',
        text:
          'Most of the work is translating a dense venue note into something quants, engineers, and trading can all act on without losing the edge cases.',
      },
      {
        label: 'Backlog multiplication',
        painPoint: 'planningUncertainty',
        workflowStage: 'triage',
        text:
          'A single change notice turns into config, risk checks, regression scope, and client comms. That extra work is never visible in the first email.',
      },
      {
        label: 'Evidence reconstruction',
        painPoint: 'evidenceAndCertification',
        workflowStage: 'evidence',
        text:
          'When compliance asks for proof, we are still stitching together Jira, logs, and screenshots after the fact.',
      },
      {
        label: 'Automation opportunity',
        painPoint: 'testingAndSimulation',
        workflowStage: 'certification',
        text:
          'If AI can draft the first pass with the right context attached, it would remove a lot of the coordination overhead before testing even starts.',
      },
    ],
    followUp: [
      'Test whether an agent-generated change pack would be trusted as the first draft of a Jira epic and regression scope.',
      'Understand how much of the current evidence pack could be automated from existing logs and artifacts.',
    ],
  },
  {
    id: 'david-furlong-virtu',
    name: 'David Furlong',
    role: 'CEO',
    company: 'Virtu Europe',
    date: '2026-03',
    channel: 'Discovery call',
    userType: 'Economic buyer / strategic signal',
    buyerInfluence: 'High — strategic buyer signal and structural pain validation',
    economicBuyerSignal: 'High — validates external infrastructure cost and control burden',
    painRatings: {
      communication: 'High',
      protocolFragmentation: 'Medium',
      testingAndSimulation: 'Medium',
      connectivityAndEnvironment: 'Medium',
      planningUncertainty: 'High',
      evidenceAndCertification: 'High',
    },
    currentSolutions: [
      'Heavier diligence before introducing new vendors into sensitive workflows',
      'Relying on external infrastructure teams and manual oversight across exchange, market data, and post-trade constraints',
      'Structured internal review before anything touches a live rollout',
    ],
    budgetAuthority: 'Economic buyer',
    workflowStages: ['strategy', 'triage', 'evidence'],
    keyQuotes: [
      {
        label: 'External constraint',
        painPoint: 'communication',
        workflowStage: 'triage',
        text:
          'The biggest problems are usually external. Internal systems are fine until the exchange, market data, or post-trade landscape becomes the constraint.',
      },
      {
        label: 'Trust boundary',
        painPoint: 'evidenceAndCertification',
        workflowStage: 'evidence',
        text:
          'You do not put a new vendor into a sensitive workflow unless it is already proven, bounded, and auditable.',
      },
    ],
    followUp: [
      'Quantify the cost of external infrastructure constraints across trading and post-trade workflows.',
      'Test how much proof is needed before an internal team trusts a new workflow layer.',
    ],
  },
  {
    id: 'ben-ernest-jones-quod',
    name: 'Ben Ernest-Jones',
    role: 'Chief Product & Technology Officer',
    company: 'Quod Financial',
    date: '2026-03',
    channel: 'Discovery call',
    userType: 'Product buyer / strategic signal',
    buyerInfluence: 'High — strong product-side sponsor and workflow owner signal',
    economicBuyerSignal: 'Medium — validates buyer urgency around QA, handoff, and context fragmentation',
    painRatings: {
      communication: 'High',
      protocolFragmentation: 'Medium',
      testingAndSimulation: 'High',
      connectivityAndEnvironment: 'Medium',
      planningUncertainty: 'High',
      evidenceAndCertification: 'Medium',
    },
    currentSolutions: [
      'Meetings, chat threads, email, and AI tools stitched together manually',
      'QA and handoff reviews spread across multiple systems and people',
      'Ad hoc context gathering before development and testing',
    ],
    budgetAuthority: 'Influencer',
    workflowStages: ['triage', 'context', 'certification'],
    keyQuotes: [
      {
        label: 'Bottleneck',
        painPoint: 'testingAndSimulation',
        workflowStage: 'certification',
        text: 'QA is the primary bottleneck, not coding.',
      },
      {
        label: 'Fragmented context',
        painPoint: 'communication',
        workflowStage: 'triage',
        text:
          'We are still copying and pasting context between meetings, chat, email, and AI tools instead of giving the system one working bundle.',
      },
    ],
    followUp: [
      'See whether a bundled working context would reduce QA and handoff delays.',
      'Test if the team would trust AI-assisted output once the context is assembled in one place.',
    ],
  },
  {
    id: 'bjorn-haggstrom',
    name: 'Bjorn Haggstrom',
    role: 'Former EMEA Customer Success & Operations leader',
    company: 'Independent operator / advisor',
    date: '2026-02',
    channel: 'Demo + interview',
    userType: 'Operator / strategic advisor',
    buyerInfluence: 'Medium — validates operational pain and acquisition-fit signal',
    economicBuyerSignal: 'Medium — suggests the capability may be bought as a workflow layer rather than built',
    painRatings: {
      communication: 'Medium',
      protocolFragmentation: 'Medium',
      testingAndSimulation: 'Medium',
      connectivityAndEnvironment: 'Medium',
      planningUncertainty: 'High',
      evidenceAndCertification: 'High',
    },
    currentSolutions: [
      'Experience-led client support and manual upgrade coordination',
      'Ad hoc process fixes for software instability and complex releases',
      'Workarounds instead of a systematic client self-service layer',
    ],
    budgetAuthority: 'Influencer',
    workflowStages: ['context', 'certification', 'rollout'],
    keyQuotes: [
      {
        label: 'Recurring pain',
        painPoint: 'planningUncertainty',
        workflowStage: 'rollout',
        text: 'The recurring pains are software instability, complex upgrades, and lack of client self-service.',
      },
      {
        label: 'Acquisition signal',
        painPoint: 'evidenceAndCertification',
        workflowStage: 'context',
        text: 'This looks more like something a larger firm would buy to get the capability faster than build internally.',
      },
    ],
    followUp: [
      'Test which parts of the workflow are most suitable for an embedded capability.',
      'See how much of the upgrade and support burden can be compressed into a repeatable workflow.',
    ],
  },
  {
    id: 'miles-asset-manager',
    name: 'Miles',
    role: 'Asset manager',
    company: 'WCM Investment Management',
    date: '2026-03',
    channel: 'TBD',
    userType: 'Pending interview',
    buyerInfluence: 'Unknown',
    economicBuyerSignal: 'Unknown',
    painRatings: {},
    currentSolutions: [],
    budgetAuthority: 'TBD',
    workflowStages: [],
    status: 'Call scheduled',
    note: 'Chief of Staff at a $100B+ AUM asset manager. Planned conversation to test whether the same workflow-control pain shows up in asset-management operating and change workflows, outside the trading software vendor lens.',
    followUp: ['Discovery call scheduled.'],
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
      interviewSupport: ['tom-bloomberg', 'igor-broadridge-connectivity', 'arkady-squarepoint'],
    },
    {
      id: 'testingAndCertification',
      label: 'Testing & certification',
      frequency: 'Medium–High',
      impact: 'High',
      summary:
        'Vendors either build simulators or lean on venues for test credentials, then absorb external QA work and certification churn.',
      interviewSupport: ['tom-bloomberg', 'jim-nasdaq-vol-trader', 'igor-broadridge-connectivity', 'arkady-squarepoint'],
    },
    {
      id: 'connectivityAndEnvironment',
      label: 'Connectivity & environment setup',
      frequency: 'Medium',
      impact: 'Medium',
      summary:
        'Internet, VPN, cross-connects, and non-prod environments add latency and uncertainty to change windows, especially across many venues.',
      interviewSupport: ['tom-bloomberg', 'igor-broadridge-connectivity'],
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
      interviewSupport: ['tom-bloomberg', 'jim-nasdaq-vol-trader', 'igor-broadridge-connectivity', 'arkady-squarepoint'],
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
