// Raidical portal content. Keep section edits local to this file.

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

export const MARKET_DEFAULT_DETAIL = {
  title: 'The European Market Chain',
  body: 'Click any node on the map to explore the detail. The market thesis shows the missing vendor layer between venue changes and downstream clients. That is the first wedge. The broader product lives between the notice, the human response, and the evidence trail wherever systems have to absorb constant change safely.',
  hint: 'Start with the amber trigger node, then move into the vendor layer to see the strategic wedge.',
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
