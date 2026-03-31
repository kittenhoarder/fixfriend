// Raidical portal content. Keep section edits local to this file.

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

export const THESIS = {
  headline: 'THE WORKFLOW CONTROL LAYER\nFOR CONTINUOUS CHANGE',
  subheadline:
    'FIXFriend starts with venue-driven change response as the first wedge, then fits around the change pain strategic acquirers care about most. Agents do bounded development work, structure human-actionable outputs in existing channels, stay inside sandbox, test, and UAT, and leave a continuous audit trail behind.',
  stats: [
    {
      id: 'cycle',
      value: 'Days',
      label: 'Time to bounded change pack',
      detail: 'Not several weeks or months of cross-party coordination for bounded cases',
    },
    {
      id: 'discovery',
      value: '6',
      label: 'Week acquirer discovery loop',
      detail: 'Product, corp-dev, advisor, and operator interviews shape the wedge and any pivot',
    },
    {
      id: 'markets',
      value: '24/5+',
      label: 'Continuous-market signal',
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
