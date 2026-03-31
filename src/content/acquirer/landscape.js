// Acquirer portal content. Keep section edits local to this file.

export const LANDSCAPE = {
  eyebrow: 'ACQUIRER LANDSCAPE',
  intro:
    'Strategic fit is strongest where an acquirer already owns the connectivity or OMS layer and is missing the workflow control surface above it. The pattern across all tier-1 and tier-2 acquirers is the same: they have bought the plumbing, but the compliance evidence layer — the layer that proves the plumbing responded correctly to every change — has never been productised.',
  tiers: [
    {
      tier: 1,
      label: 'Tier 1 — Highest Strategic Fit',
      description:
        'Vendors that own venue-facing connectivity infrastructure at scale. FIXFriend attaches directly onto their existing client base with no new distribution investment. Highest urgency, shortest sales cycle, clearest stack fit.',
      acquirers: [
        {
          name: 'ION Markets',
          category: 'Trading infrastructure / OMS-EMS-post-trade',
          fitRationale:
            "ION owns Fidessa, Broadway Technology, DASH, and Clarus FT — the OMS/EMS stack across front, middle, and post-trade. Revenue $2.3B+, 13,000+ employees. What ION does not own is the compliance evidence layer: no automated change-control, no workflow above the connectivity plumbing. FIXFriend bolts directly onto ION's client base. Founder Pignataro controls decisions and moves fast.",
          combinedValue:
            "ION + FIXFriend = end-to-end change lifecycle from venue notice to certified deployment, sold into ION's existing accounts at zero incremental distribution cost. Transforms a manual cost centre embedded in every ION client into a recurring ARR line.",
          status: 'active',
        },
        {
          name: 'Broadridge Financial Solutions',
          category: 'Connectivity / OMS / execution (NYSE: BR)',
          fitRationale:
            "Broadridge's BTCS division owns Itiviti (connectivity), Tbricks (EMS), VeriFIX (FIX onboarding/testing), NYFIX, and CQG (execution, closing June 2026). Connectivity → OMS → execution is now complete. The gap is automated compliance validation and evidence across venue connections. The founder worked directly within Itiviti and Broadridge's BTCS stack — product fit and acquirer relationship are both personally validated.",
          combinedValue:
            'Broadridge + FIXFriend = the complete BTCS value proposition: connectivity, execution, and the change-response layer that makes every venue rollout auditable. Immediate upsell path to 10,000+ BTCS clients. Fastest time-to-revenue of any acquirer scenario.',
          status: 'active',
        },
      ],
    },
    {
      tier: 2,
      label: 'Tier 2 — Strong Strategic Fit',
      description:
        'Exchange groups and multi-venue operators for whom member certification complexity is a direct operational bottleneck. Strong strategic fit; acquisition framing is product-to-platform rather than pure workflow upsell.',
      acquirers: [
        {
          name: 'SIX Group',
          category: 'Exchange operator / post-trade / securities services',
          fitRationale:
            'SIX acquired Aquis Exchange (July 2025, £207M) and Baymarkets (November 2025), giving it the most venue-diverse exchange portfolio in Europe. More venues under one roof means more certification complexity for members. SIX has the acquisition appetite — three deals in 12 months — and a direct strategic motive: tooling that reduces member certification friction improves SIX\'s own onboarding and rollout velocity.',
          combinedValue:
            "SIX + FIXFriend = the first exchange group to offer members an automated certification workflow alongside connectivity. Reduces SIX's own certification backlog while creating a new product revenue stream attached to its venue infrastructure.",
          status: 'active',
        },
        {
          name: 'Trading Technologies',
          category: 'Derivatives execution / multi-venue connectivity (7RIDGE / Thoma Bravo–backed)',
          fitRationale:
            'TT connects to 100+ exchanges and added OpenGamma (December 2025) for margin analytics. The acquisition pattern is consistent: buy adjacent workflow tech, distribute through existing connectivity reach. PE-backed with a growth mandate — fast decisions, clear thesis for bolt-on acquisitions that extend the platform without requiring new distribution infrastructure.',
          combinedValue:
            'TT + FIXFriend = a compliance workflow layer deployed across 100+ exchange connections simultaneously. Every TT client managing venue protocol updates gets automated change-response as a platform feature rather than a custom integration project.',
          status: 'active',
        },
      ],
    },
    {
      tier: 3,
      label: 'Tier 3 — Opportunistic / Complementary',
      description:
        'Compliance-adjacent software businesses for whom the strategic fit is complementary — the same buyer, adjacent problem, and a natural path to combined product positioning.',
      acquirers: [
        {
          name: 'Kaizen Reporting',
          category: 'RegTech / regulatory reporting accuracy (PE-backed: Guidepost Growth Equity)',
          fitRationale:
            "Kaizen owns regulatory reporting accuracy testing and transaction surveillance — the same Head of Compliance buyer as FIXFriend, solving an adjacent problem. Received £42M PE backing in November 2024 with a growth mandate. FIXFriend adds upstream protocol change management that Kaizen's clients need before the data feeding Kaizen's testing even arrives.",
          combinedValue:
            'Kaizen + FIXFriend = a connected compliance stack: protocol change management upstream, reporting accuracy testing downstream. Same buyer, same budget cycle, two problems resolved through one vendor relationship.',
          status: 'active',
        },
      ],
    },
  ],
}

// ── Navigation tabs for AcqApp ────────────────────────────────────────────────
