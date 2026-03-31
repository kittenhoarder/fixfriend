// Raidical portal content. Keep section edits local to this file.

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

export const OPEN_QUESTIONS = [
  'Who really sponsors these acquisitions: business-unit leader, corp-dev, founder/CEO, or advisor?',
  'What proof makes this look strategic rather than tactical?',
  'Which change domain beyond venue response shows the strongest repeated pain?',
  'Is the strongest wedge vendor-side, venue-side, or testing/regtech adjacency?',
  'How much of the problem is workflow versus missing technical tooling?',
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
