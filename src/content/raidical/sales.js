// Raidical portal content. Keep section edits local to this file.

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
