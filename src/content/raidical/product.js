// Raidical portal content. Keep section edits local to this file.

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
