// Acquirer portal content. Keep section edits local to this file.

export const SUITE = {
  eyebrow: 'PRODUCT',
  narrativeParagraph:
    'FIXFriend operates in two modes: proactively surfacing the context teams need before they know they need it, and then executing change in a controlled, sandboxed way with a continuous evidence chain built in. The gap incumbents have never closed is not the execution tooling — it is the layer that proactively organises context from scattered systems, classifies what matters, and then works on it in a governed, auditable way. FIXFriend is that layer.',
  synergyCallout:
    'Discover context → Classify impact → Execute change → Govern evidence. One product. Continuous control.',
  futuresNote:
    'DataRights (market-data rights assessment) and Declare (attestation workflows) are expansion modules in development.',
  products: [
    {
      id: 'discover',
      name: 'Discover',
      status: 'live',
      tagline: 'Proactive context sourcing and impact classification',
      ipSummary:
        'Monitor agent continuously watches venue portals, email digests, and regulatory feeds. Source agent fetches specs; Expoty context core retrieves prior decisions, code context, and test artifacts into a shared working bundle before teams know they need it. Impact agent classifies minor vs. major with deterministic gates and model reasoning.',
      revenueLever:
        'Eliminates 2–4 weeks of manual context assembly per change event across 25–60 venue changes per year per firm. The earlier in the cycle a team knows what a change means for them, the lower the remediation cost.',
    },
    {
      id: 'execute',
      name: 'Execute',
      status: 'live',
      tagline: 'Controlled, sandboxed change execution',
      ipSummary:
        'Minor changes run autonomously inside UAT: requirements, branch plan, regression pack, Jira tickets, Slack summaries, audit evidence — generated and delivered without manual intervention. Major changes escalate as structured project bundles with source evidence and decision logs. Hard UAT boundary — never writes to production.',
      revenueLever:
        '60–70% of venue changes qualify as minor and run fully automated. Major changes surface early as structured projects rather than late as certification failures. Either way, weeks of coordination compress to days.',
    },
    {
      id: 'govern',
      name: 'Govern',
      status: 'live',
      tagline: 'Continuous, immutable audit trail',
      ipSummary:
        'Every source, decision, test result, environment boundary, and escalation reason is logged with immutable timestamps and provenance IDs via Expoty. DORA (in force January 2025) and MiFID II RTS 6 require continuous evidenced control over ICT changes — FIXFriend creates that evidence live, not retroactively.',
      revenueLever:
        'Audit evidence is a by-product of execution, not a separate project. Eliminates the retroactive stitching that delays every regulatory review and turns a personal-liability exposure (DORA: up to €1M for senior management) into a closed, continuous record.',
    },
  ],
}

// ── Investment Thesis Section ─────────────────────────────────────────────────
