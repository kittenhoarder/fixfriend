// Raidical portal content. Keep section edits local to this file.

export { BRAND } from './navigation'
export { INTERVIEW_TRACKER } from './definition'
export { SALES_FUNNEL } from './sales'

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

export const INVESTOR_STORY = {
  cta: {
    eyebrow: 'INVESTOR WALKTHROUGH',
    title: 'Walk me through it',
    body:
      'A 60-second story for investors who are new to this world: the problem, the autopilot wedge, why customers pay, and why infrastructure buyers care.',
    kicker: 'FIXFriend is the autopilot for painful system change.',
  },
  slides: [
    {
      id: 'change',
      question: 'What big thing is changing?',
      headline: 'The pipes keep changing.',
      body:
        'Rules, exchanges, and system connections keep moving, and teams have to keep up.',
      chips: ['More change', 'Longer operating windows', 'Tighter controls'],
      diagramFocus: {
        mode: 'fit',
        viewport: { zoom: 0.7564, x: -366.46, y: 102.19 },
        clusters: ['ENV', 'INGRESS'],
        nodes: ['RULES', 'EXCHANGES', 'SPEC_PORTALS', 'EMAIL_DIGESTS', 'WEBSITES', 'SUPPORT_THREADS', 'CHANGE_SIGNAL'],
        edges: [
          'RULES_TO_SIGNAL',
          'EXCHANGES_TO_SIGNAL',
          'SPEC_PORTALS_TO_SIGNAL',
          'EMAIL_DIGESTS_TO_SIGNAL',
          'WEBSITES_TO_SIGNAL',
          'SUPPORT_THREADS_TO_SIGNAL',
        ],
        padding: { x: 84, y: 72 },
        callouts: [
          'Change now comes from more than one place.',
          'The pressure is growing before the work even starts.',
        ],
      },
    },
    {
      id: 'manual',
      question: 'Why is the current way broken?',
      headline: 'Companies still handle this by hand.',
      body: 'People chase answers across email, chat, tickets, docs, and tests.',
      chips: ['Slow', 'Error-prone', 'Expensive'],
      diagramFocus: {
        mode: 'fit',
        viewport: { zoom: 0.8716, x: -919.9, y: -223.99 },
        clusters: ['CHAIN'],
        nodes: [
          'CHANGE_SIGNAL',
          'MANUAL_HANDOFFS',
          'VENDORS',
          'CLIENTS',
          'REGULATORS',
          'DELAYS',
          'BROKEN_HANDOFFS',
          'SUPPORT_FIRES',
          'SAFE_RELEASE_DRAG',
          'RETRO_EVIDENCE',
        ],
        edges: [
          'SIGNAL_TO_MANUAL',
          'MANUAL_TO_VENDORS',
          'VENDORS_TO_CLIENTS',
          'CLIENTS_TO_REGULATORS',
          'MANUAL_TO_DELAYS',
          'MANUAL_TO_BROKEN_HANDOFFS',
          'CLIENTS_TO_SUPPORT_FIRES',
          'CLIENTS_TO_SAFE_RELEASE_DRAG',
          'CLIENTS_TO_RETRO_EVIDENCE',
          'REGULATORS_TO_RETRO_EVIDENCE',
        ],
        padding: { x: 84, y: 80 },
        callouts: [
          'Teams rebuild the same context by hand.',
          'Evidence gets reconstructed after the fact.',
        ],
      },
    },
    {
      id: 'autopilot',
      question: 'What is FIXFriend in one sentence?',
      headline: 'FIXFriend is the autopilot that does the work.',
      body:
        'It hunts for what changed, builds local context inside the customer system, and delivers a test-ready work pack.',
      chips: ['Autonomous hunt', 'Local system context', 'Test/UAT only'],
      diagramFocus: {
        mode: 'fit',
        viewport: { zoom: 0.5905, x: 24.13, y: 5.15 },
        clusters: ['INGRESS', 'PRODUCT'],
        nodes: [
          'CHANGE_SIGNAL',
          'SPEC_PORTALS',
          'EMAIL_DIGESTS',
          'WEBSITES',
          'SUPPORT_THREADS',
          'FIXFRIEND',
          'CUSTOMER_CONTEXT',
          'TEST_UAT_PACK',
          'AUDIT_EVIDENCE',
        ],
        edges: [
          'SPEC_PORTALS_TO_FIXFRIEND',
          'EMAIL_DIGESTS_TO_FIXFRIEND',
          'WEBSITES_TO_FIXFRIEND',
          'SUPPORT_THREADS_TO_FIXFRIEND',
          'SIGNAL_TO_FIXFRIEND',
          'FIXFRIEND_TO_CONTEXT',
          'CONTEXT_TO_PACK',
          'PACK_TO_AUDIT',
        ],
        padding: { x: 88, y: 76 },
        callouts: [
          'FIXFriend hunts for what changed.',
          'It builds context inside the customer system.',
          'It delivers a test-ready work pack.',
        ],
      },
    },
    {
      id: 'adoption',
      question: 'Why can teams adopt it fast?',
      headline: 'It does not ask teams to change how they work.',
      body:
        'Questions happen in normal channels, outputs land in normal tools, and human approvals stay in Slack, Teams, or similar chat.',
      chips: ['No new dashboard', 'No workflow retraining', 'Human gates stay in chat'],
      diagramFocus: {
        mode: 'fit',
        viewport: { zoom: 0.6745, x: 22.75, y: -197.88 },
        clusters: ['PRODUCT'],
        nodes: ['FIXFRIEND', 'NORMAL_TOOLS', 'CHAT_APPROVALS', 'TEST_UAT_PACK', 'NEVER_PROD', 'AUDIT_EVIDENCE'],
        edges: [
          'FIXFRIEND_TO_CONTEXT',
          'CONTEXT_TO_PACK',
          'PACK_TO_TOOLS',
          'TOOLS_TO_CHAT',
          'PACK_TO_AUDIT',
          'CHAT_TO_AUDIT',
          'NEVER_PROD_TO_PACK',
        ],
        padding: { x: 92, y: 82 },
        callouts: [
          'No new dashboard.',
          'No workflow retraining.',
          'Human approvals stay in normal chat.',
          'Code stays in test/UAT only.',
        ],
      },
    },
    {
      id: 'payment',
      question: 'Why will customers pay?',
      headline: 'Customers already pay for this pain.',
      body:
        'They pay in delays, broken handoffs, support fires, and slow safe releases. FIXFriend cuts that waste.',
      chips: ['Less delay', 'Less coordination chaos', 'Faster safe delivery'],
      diagramFocus: {
        mode: 'fit',
        viewport: { zoom: 0.6201, x: -240.83, y: -133.21 },
        clusters: ['CHAIN', 'PRODUCT'],
        nodes: [
          'MANUAL_HANDOFFS',
          'DELAYS',
          'BROKEN_HANDOFFS',
          'SUPPORT_FIRES',
          'SAFE_RELEASE_DRAG',
          'FIXFRIEND',
          'TEST_UAT_PACK',
          'AUDIT_EVIDENCE',
        ],
        edges: [
          'SIGNAL_TO_MANUAL',
          'MANUAL_TO_DELAYS',
          'MANUAL_TO_BROKEN_HANDOFFS',
          'CLIENTS_TO_SUPPORT_FIRES',
          'CLIENTS_TO_SAFE_RELEASE_DRAG',
          'SIGNAL_TO_FIXFRIEND',
          'FIXFRIEND_TO_CONTEXT',
          'CONTEXT_TO_PACK',
          'PACK_TO_AUDIT',
        ],
        padding: { x: 98, y: 84 },
        callouts: [
          'They already pay for delay, chaos, and support fire drills.',
          'FIXFriend turns that into controlled delivery.',
        ],
      },
    },
    {
      id: 'buyers',
      question: 'Why is this strategically buyable?',
      headline: 'The companies that own the pipes will want the autopilot layer.',
      body:
        'It sits on top of existing infrastructure and makes it faster, safer, and stickier.',
      chips: ['Strategic attach', 'Faster rollout', 'More control'],
      diagramFocus: {
        mode: 'fit',
        viewport: { zoom: 0.6465, x: 198.05, y: -123.27 },
        clusters: ['PRODUCT', 'ACQUIRERS'],
        nodes: ['FIXFRIEND', 'BROADRIDGE', 'TT', 'ION', 'SIX'],
        edges: [
          'FIXFRIEND_TO_BROADRIDGE',
          'FIXFRIEND_TO_TT',
          'FIXFRIEND_TO_ION',
          'FIXFRIEND_TO_SIX',
        ],
        padding: { x: 112, y: 88 },
        callouts: [
          'Broadridge: owns workflow plumbing.',
          'TT: close to the trading edge.',
          'ION: owns core pipes.',
          'SIX: runs market infrastructure.',
        ],
      },
      buyers: [
        {
          name: 'Broadridge',
          fit: 'Owns major workflow plumbing. Adds the autopilot layer.',
        },
        {
          name: 'Trading Technologies',
          fit: 'Already near the trading edge. Improves rollout speed.',
        },
        {
          name: 'ION',
          fit: 'Owns core pipes. Adds orchestration on top.',
        },
        {
          name: 'SIX',
          fit: 'Runs market infrastructure. Helps manage change at scale.',
        },
      ],
    },
    {
      id: 'exit',
      question: 'Why is this a lean-exit opportunity now?',
      headline: 'Start small. Solve a painful wedge. Become strategically obvious.',
      body:
        'FIXFriend starts with one painful change problem, proves fast adoption by fitting existing workflows, and becomes a natural tuck-in for infrastructure owners.',
      chips: ['Small wedge', 'Fast proof', 'Strategic buyer pull'],
      diagramFocus: {
        mode: 'full',
        viewport: { zoom: 0.546, x: 16.63, y: 3.09 },
        clusters: ['ENV', 'INGRESS', 'CHAIN', 'PRODUCT', 'ACQUIRERS'],
        nodes: [],
        edges: [],
        padding: { x: 72, y: 72 },
        callouts: [
          'Start with one painful wedge.',
          'Prove fast adoption.',
          'Become strategically obvious.',
        ],
      },
    },
  ],
}

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
