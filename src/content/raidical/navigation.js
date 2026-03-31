// Raidical portal content. Keep section edits local to this file.

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
