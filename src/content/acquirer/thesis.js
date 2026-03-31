// Acquirer portal content. Keep section edits local to this file.

export const THESIS = {
  eyebrow: 'WHY NOW',
  headline: 'Three converging forces make 2025–2026 the acquisition window',
  pillars: [
    {
      id: 'regulatory',
      label: 'Regulatory Tailwind',
      icon: 'Scale',
      stat: 'MiFID II RTS 6 + DORA (in force Jan 2025) + EU AI Act (Aug 2026): three overlapping mandates requiring continuous, machine-readable evidence of control over trading systems — with personal liability up to €1M for senior management under DORA.',
      detail:
        'DORA entered application on 17 January 2025 with no transition period. Every protocol change is now a regulated ICT event requiring documented management, testing, and validation. MiFID II RTS 6 independently requires evidence of system testing after protocol changes. The EU AI Act adds a third governance layer from August 2026. Firms that cannot produce continuous, structured compliance evidence are already exposed — and the manual workarounds in place today do not scale.',
    },
    {
      id: 'market',
      label: 'Market Timing',
      icon: 'TrendingUp',
      stat: 'Trading technology software: USD 11.3B market (2024) growing at 20% CAGR through 2032. ~9,000 regulated operators globally. €900M TAM for automated change-readiness at target ACV.',
      detail:
        'The beachhead is vendor-side change response: ~800–1,200 multi-venue connected sell-side firms in EU/UK/US, each managing 5–30 venue relationships and 25–60 change events per year. Each change event currently takes several weeks of manual coordination across product, engineering, QA, and compliance. The same loop applies to market-data operations (DataRights) and attestation (Declare), expanding the addressable opportunity without requiring a different buyer or distribution channel.',
    },
    {
      id: 'ip',
      label: 'IP Moat',
      icon: 'Lock',
      stat: 'Proprietary venue-notice corpus + Expoty context core = 18-month head start on any greenfield build, compounding with every change processed.',
      detail:
        'The structural advantage is not the agent orchestration — it is the indexed, normalised corpus of venue notices, FIX specs, and change history that makes the impact and planning agents domain-accurate from day one. Every change processed adds to institutional memory. A new entrant starts cold; FIXFriend starts with every prior change already indexed and retrievable. General-purpose agent platforms (Tines, Workato) lack the domain schema, autonomy rules, and evidence-chain architecture required for regulated capital markets environments.',
    },
  ],
}

// ── Per-Product Deep Dive Section ─────────────────────────────────────────────
