# FIXFriend — Investor Artifacts & Source of Truth Content

This file is the canonical source for all factual content in the FIXFriend
interactive acquisition thesis explorer. All dates, revenue figures, company
details, and regulatory language must match this file exactly.

---

## Regulatory Environment

### MiFIR / RTS 6
- Status: In force. Enforcement intensifying 2026.
- Scope: Organisational requirements and systems-and-controls for algorithmic
  trading firms.
- Key implication: Firms must demonstrate they have tested and validated their
  trading systems — including after protocol changes. Today this evidence is
  assembled manually and retroactively.

### EU AI Act
- Status: High-risk obligations apply from August 2026.
- Risk: Digital Omnibus proposal may push some deadlines to December 2027.
- Scope: Comprehensive AI regulation requiring governance, documentation, and
  conformity assessment for high-risk AI systems. Financial sector AI
  (credit scoring, trading algorithms) explicitly in scope.
- Key implication: Firms using AI in trading must document and evidence their
  AI governance. Convergence with DORA and MiFIR creates compound compliance
  burden.

### DORA
- Status: In application since January 2025. Enforcement deepening 2026.
- Scope: Mandates ICT risk management, incident reporting, and digital
  operational resilience testing for financial entities. ESMA and fellow ESAs
  jointly overseeing critical third-party ICT providers from 2026.
- Key implication: Protocol changes to trading systems are ICT changes. Firms
  need to evidence that these changes were managed, tested, and validated —
  continuously, not just at audit time.

### ESMA 2026 Work Programme
- Status: Published October 2025. Execution underway.
- Key priorities:
  - Consolidated Tape Provider selection (derivatives)
  - Critical third-party ICT provider oversight (joint with EBA, EIOPA)
  - AI-powered supervisory tools and ESMA Data Platform rollout
  - Supervisory convergence: Common Supervisory Actions, peer reviews
  - Simplification and burden reduction (but not reduced scrutiny)
- Key implication: ESMA is building the infrastructure to supervise at scale
  using data and AI. Firms that cannot produce machine-readable compliance
  evidence will be at a disadvantage.

---

## Market Chain

### EU & UK Exchanges & Venues
- Entities: Eurex, Deutsche Börse, Euronext, LSEG, Nasdaq Nordic, SIX, BME,
  Cboe Europe, Aquis (now SIX-owned)
- What happens: Venues continuously publish updates to trading protocols (FIX
  specification changes, native API updates, market model changes, new order
  types, regulatory-driven field changes).
- Scale: A typical multi-venue broker-dealer may be connected to 10–20+ venues.
  Each venue publishes multiple updates per year. Each update triggers a
  mandatory compliance cycle at every connected firm.

### Electronic Trading Firms
- Count: ~800–1,200 multi-venue connected entities (sell-side focus)
- Includes: Investment banks, broker-dealers, market makers, proprietary trading
  firms, hedge funds with direct market access (DMA)
- The problem: Every protocol change at every connected venue triggers a
  compliance cycle: read the spec delta, assess impact, modify gateway
  configuration, test, certify, deploy, produce evidence for audit.
- Today: 2–4 weeks per change. Manual. Recurring. Evidence reconstructed
  retroactively when the regulator asks. Production incidents when changes are
  missed or misimplemented.

### EU & UK Regulators
- EU: ESMA (pan-EU), BaFin (Germany), CONSOB (Italy), AMF (France), CSSF
  (Luxembourg), plus 20+ other national competent authorities
- UK: FCA (post-Brexit, separate regime but overlapping requirements)
- What they demand: Evidence that firms have adequate systems and controls.
  Evidence that changes to trading systems were properly managed. Evidence that
  connectivity to venues is certified and validated.
- How they're evolving: Moving toward data-driven, AI-powered supervision.
  Common Supervisory Actions across member states. Peer reviews. On-site
  inspections. The bar for evidence quality is rising.

---

## Acquirer Universe

### TIER 1 — TRADING INFRASTRUCTURE VENDORS

**ION Markets**
- Ownership: Private (controlled by Andrea Pignataro). Headquartered in Dublin.
- Revenue: $2.3B+ (unified platform)
- Employees: ~13,000
- Debt: $6B+
- Owns: OMS/EMS stack (Fidessa, Broadway Technology), trading infrastructure
  across fixed income and derivatives.
- Missing: Compliance evidence layer. No automated change-control.
- Recent M&A: Historically highly acquisitive (Broadway Technology, Fidessa,
  DASH Financial, Clarus FT, etc.)
- Decision speed: Fast (private, acquisitive culture, Pignataro controls
  decision-making)
- FIXFriend fit: ION owns the plumbing but not the compliance evidence.
  FIXFriend bolts directly onto their existing client base.

**Broadridge Financial Solutions**
- Ownership: Public (NYSE: BR)
- Revenue: $5B+
- Owns: Connectivity, order management (Itiviti, acquired 2021), execution
  (CQG, announced Feb 2026), fund distribution (Acolin, 2025). Itiviti is
  known as BTCS (Broadridge Trading and Connectivity Solutions); within BTCS:
  Tbricks (EMS), VeriFIX (FIX onboarding and testing), managed FIX service,
  NYFIX (Broadridge-owned).
- Missing: Automated compliance validation and evidence. VeriFIX supports
  FIX onboarding and testing but test cases are built manually; no AI
  automation; no continuous automated change-control.
- Recent M&A: CQG (announced 6 Feb 2026, expected close June 2026), Acolin
  (2025), Signal (2025)
- Decision speed: Medium (public company, but active acquirer)
- FIXFriend fit: Completing the front-to-back stack. Broadridge owns
  connectivity → OMS → execution. Compliance evidence is the missing layer.
  Founder worked at both Itiviti and Broadridge — including directly with
  Tbricks and the BTCS stack — knows the gap firsthand.

**Itiviti / BTCS (Broadridge Trading and Connectivity Solutions)**
- Tbricks: EMS (execution management system). Founder worked directly with
  Tbricks, most intimately while at Broadridge.
- VeriFIX: FIX onboarding and testing platform. Test cases built manually;
  no AI automation.
- Managed FIX service; NYFIX (Broadridge-owned). Ullink, NYFIX, and Tbricks
  sit within BTCS.

**Murex**
- Ownership: Private (founder-led)
- Revenue: Undisclosed (estimates range $500M–$2B)
- Employees: 3,400
- Users: 60,000+ across 65+ countries
- Owns: MX.3 — dominant cross-asset trading and risk platform.
- Missing: Venue connectivity compliance. MX.3 clients connect to multiple
  venues; protocol changes are a pain point.
- Recent M&A: Selective. Primarily organic growth and strategic partnerships
  (AWS, Publicis Sapient).
- Decision speed: Fast (founder-led, no board/shareholder drag)
- FIXFriend fit: Murex clients are exactly the firms that suffer from manual FIX
  compliance cycles. Embedding FIXFriend into MX.3 is a natural extension.

**Trading Technologies**
- Ownership: Private (7RIDGE / Thoma Bravo-backed)
- Note: NOT BGC Group-owned. BGC entered an OMS usage agreement, not an
  acquisition.
- Owns: Derivatives execution infrastructure, multi-venue connectivity,
  compliance & trade surveillance, TCA. SaaS platform connecting to 100+
  exchanges. Won Best Sell-Side OMS 2025/2026.
- Missing: Compliance evidence automation for venue connectivity changes.
- Recent M&A: 7RIDGE acquired TT in Dec 2021. Thoma Bravo invested July 2025
  (closed Q4 2025). TT acquired Abel Noser Solutions (Aug 2023). Cboe holds a
  live exit option (exercisable since Jan 2025, not yet exercised).
- Decision speed: Fast (PE-backed, growth mandate)
- FIXFriend fit: TT connects traders to 100+ exchanges. Every venue protocol
  change affects their clients. Compliance automation is an upsell to existing
  client base.

### TIER 2 — EXCHANGE GROUPS

**SIX Group**
- Ownership: Private (owned by Swiss banks)
- Revenue: ~CHF 1.6B
- Owns: SIX Swiss Exchange, BME (Spain), Aquis (16 EU/UK markets, acquired
  July 2025). Data, post-trade, payments.
- Missing: Automated member certification tooling at pan-European scale.
- Recent M&A: Aquis Exchange (closed 1 July 2025, ~£207M), Worldline EDM
  business (2025)
- Decision speed: Fast (private, well-capitalised, proven acquirer)
- FIXFriend fit: SIX now operates the most venue-diverse exchange group in
  Europe. Every member connecting to their venues goes through certification.
  FIXFriend automates this at exchange scale — both for SIX internally and as a
  service to their members.

**Deutsche Börse**
- Ownership: Public
- Revenue: €4B+
- Owns: Eurex, Xetra, Clearstream, ISS, SimCorp. Full exchange value chain.
- Missing: Member-facing compliance automation tools.
- Recent M&A: SimCorp (2023, €3.9B)
- Decision speed: Slow (large public company, complex governance)
- FIXFriend fit: Strategic but slower path. Eurex members face the same
  certification pain. Deutsche Börse has the resources but longer decision
  cycles.

**Euronext**
- Ownership: Public
- Revenue: €1.5B+
- Owns: Pan-European exchange (Paris, Amsterdam, Brussels, Dublin, Lisbon, Oslo,
  Milan). Post-trade via Euronext Clearing.
- Missing: Harmonised member compliance tooling across 7 markets.
- Recent M&A: Borsa Italiana group (2021), Euronext Clearing launch.
- Decision speed: Slow–Medium (public, but has shown willingness to invest in
  technology)
- FIXFriend fit: Euronext's multi-market structure means members deal with
  multiple protocol variations. Compliance harmonisation is a real operational
  need.

### TIER 3 — REGTECH / COMPLIANCE ADJACENCY

**Kaizen Reporting**
- Ownership: PE-backed (Guidepost Growth Equity, £42M round November 2024)
- Revenue: Private (undisclosed)
- Owns: Regulatory reporting accuracy testing, transaction surveillance.
- Missing: Protocol change management and venue connectivity compliance.
- Recent M&A: PE-backed growth.
- Decision speed: Fast (PE-backed, growth-focused)
- FIXFriend fit: Kaizen already sells compliance tooling to trading firms.
  FIXFriend is a natural product extension — same buyer (Head of Compliance /
  Head of Electronic Trading), adjacent problem.

**SmartStream Technologies**
- Ownership: DIFC/ICD-owned (sovereign wealth). NOT simply "private."
- Revenue: ~£43M (FY2023)
- Clients: 1,500+ including 70+ of world's top 100 banks.
- Owns: Reconciliation, post-trade controls, reference data management.
- Missing: Front-office / connectivity compliance automation.
- Recent M&A: Selective acquirer in post-trade space.
- Decision speed: Medium (sovereign wealth-backed, but established in fintech
  M&A)
- FIXFriend fit: SmartStream owns post-trade evidence and control. FIXFriend
  owns pre-trade / connectivity evidence and control. Complementary.

**Exactpro**
- Ownership: Private
- Owns: Testing and QA for exchanges and trading venues. Functional and
  performance testing of trading systems.
- Missing: Continuous automated compliance evidence (Exactpro does project-based
  testing, not ongoing automation).
- Recent M&A: Growing through organic expansion.
- Decision speed: Fast (private, specialist)
- FIXFriend fit: Exactpro tests trading systems. FIXFriend automates the ongoing
  compliance testing triggered by protocol changes. Potential acqui-hire or
  product integration.

---

## Verified M&A Deals (Last 12 Months)

### Broadridge → CQG
- Announced: 6 February 2026
- Status: Expected close Q4 fiscal (June 2026)
- Timeline: ~4 months
- Acquirer type: Public (NYSE: BR)
- Deal logic: Add execution management, algos, analytics to existing
  OMS/connectivity stack. Third major acquisition in front-to-back buildout
  (after Itiviti 2021, Acolin 2025).
- Gap that remains: Broadridge now owns connectivity → order management →
  execution. Still missing: automated compliance validation and evidence across
  venue connections.
- Founder's edge: Owen Perry worked at both Itiviti and Broadridge. Knows the
  gap firsthand.

### SIX Group → Aquis Exchange
- Announced: November 2024
- Closed: 1 July 2025
- Timeline: ~8 months
- Acquirer type: Private (Swiss bank-owned)
- Deal value: ~£207M
- Deal logic: Create pan-European exchange innovator. 15% aggregated market
  share. 16 capital markets. Only exchange group with listing venues in
  Switzerland, EU, and UK.
- Gap that remains: SIX now operates multiple venues with different protocols.
  Member certification across all venues is a massive operational bottleneck.
- Why it matters: Exchange consolidation directly amplifies the problem
  FIXFriend solves. More venues under one roof = more certification complexity
  for members.

### Arcesium → Limina
- Announced: 2 February 2026
- Closed: Completed (weeks)
- Timeline: Fast (weeks)
- Acquirer type: Private (D.E. Shaw / Blackstone / JP Morgan-backed)
- Deal logic: Create front-to-back operating platform for asset managers.
  Integrate Limina's portfolio & order management with Arcesium's
  middle/back-office.
- Pattern evidence: Demonstrates front-to-back consolidation logic. Limina
  handles investment mandate compliance (portfolio limits, concentration).
  FIXFriend handles connectivity-layer compliance (protocol changes, venue
  certification). Different domains, same M&A rationale.
- Note: Limina does portfolio-level mandate compliance, NOT FIX protocol
  compliance. Do not describe it as completing a compliance lifecycle with
  FIXFriend.

### Cinven → Objectway
- Announced: 7 August 2025
- Closed: November 2025
- Timeline: ~3 months
- Acquirer type: Private Equity (Cinven) — first investment from Cinven's new
  mid-market strategy
- Deal logic: Majority stake in wealth management software. 250+ financial
  institution clients. Accelerate growth via M&A.
- Pattern evidence: PE firms moving fast in European financial software. Private
  capital sees regulatory compliance automation as a growth enabler.

### IRESS — Active Acquisition Target
- Status: In play since August 2025
- Interested parties: Blackstone, Thoma Bravo, additional unnamed third parties
- Revenue: ~AU$600M
- UK performance: EBITDA up 43% YoY
- Deal logic: Trading and wealth software. Core business is trading & market
  data — directly relevant to venue connectivity compliance.
- Pattern evidence: Any acquirer of IRESS inherits a business where venue
  connectivity compliance is a daily operational reality. Compliance tooling
  strengthens the acquisition target's value.

---

## About the Founder

**Owen Perry**
Technical Product & Trading Technology Leader

Career path: Nasdaq → Itiviti → Broadridge → Quod Financial → Tradeteq
(acquired)

14 years in European electronic trading infrastructure. Built, stabilised, and
shipped revenue-critical trading systems for Tier-1 banks, exchanges, and
fintech. Contributed to acquisition outcomes by clarifying platform strategy
and market positioning.

Direct experience with the compliance evidence gap:
- Operated live trading systems at Nasdaq OMX in Stockholm
- Managed mission-critical trading systems at Itiviti (Nordic banking clients)
- Delivered Tier-1 trading programmes at Broadridge (European markets)
- Led complex OMS/EMS deployments at Quod Financial
- Led product at Tradeteq through to acquisition
- Built and launched AiX, a conversational AI trading platform acquired by Blockchain.com

FIXFriend exists because Owen Perry spent a career watching this problem
compound — and knows exactly who will pay to solve it.

---

## Lean-Exit Revision

### Core framing
- Audience: VCs, with an acquirer-discovery lens
- Strategic frame: Lean exit, not standalone venture-scale first
- Buyer-language line: FIXFriend turns venue change notices into rollout-ready
  change packs, certification workflows, and client-ready evidence for trading
  technology vendors.
- Acquirer-language line: FIXFriend is the missing workflow layer between venue
  change, product update, and client rollout.
- 10x claim: Same-day change assessment and certification prep instead of 1–2
  weeks of PM, engineering, and QA coordination.

### Evidence labels used in the site
- Validated: public-source facts, verified deals, direct interview evidence
- Hypothesis: current beliefs about pricing, wedge shape, and strategic fit
- Open Question: what founder discovery still needs to answer

### Lean-exit wedge
- Primary operating wedge: vendor-side change-response and certification
  workflow
- Includes: OMS/EMS vendors, managed FIX/connectivity providers, selected
  venues, testing/compliance adjacencies
- The wedge is NOT:
  - a replacement FIX engine
  - a universal protocol normalisation layer
  - a venue simulator replacement
  - an autonomous production deployer

### Updated market model
- Beachhead market:
  - Working model: ~150–250 reachable operators globally × €100k–€200k ARR
  - Range: ~€15M–€50M
- Strategic attach view:
  - Value comes from attach revenue plus lower rollout drag, lower support load,
    and stronger client stickiness if embedded into incumbent platforms
- Broader expansion:
  - Broader trading-firm TAM remains meaningful, but is secondary to the narrow
    lean-exit wedge
- Working wedge/SAM:
  - 40–80 high-fit operators in Europe and the US before channel expansion
- Lean-exit SOM objective:
  - 5–10 design partners
  - 3–5 paid pilots
  - €1M–€3M ARR potential before strategic embed or acquisition

### Business defaults
- Economic buyer:
  - Head of Product
  - Head of Connectivity
  - Head of Electronic Trading
- Revenue model:
  - paid design partner / pilot: €25k–€50k
  - annual platform contract: €100k–€200k ARR
  - optional integration / professional services

### Interview-backed pain points to foreground
- Communication and short-notice change management are the first bottleneck
- FIX / protocol fragmentation is real even inside “standardized” workflows
- Testing and certification are expensive and relationship-heavy
- Connectivity setup still creates real delay and dependency
- Vendors can become the venue's effective external QA layer

### Validation plan
- Riskiest assumption:
  - This workflow gap is strategic enough for an incumbent or likely acquirer to
    care about as a product gap, not just a useful feature
- 6-week loop:
  - Week 1–2: 8–10 acquirer-side product/connectivity interviews
  - Week 2–4: 4–6 corp-dev, strategy, former corp-dev, or sector M&A advisor
    interviews
  - Week 3–5: 4–6 operator back-testing interviews
  - Week 6: choose the wedge to keep or pivot
- Success metrics:
  - 2+ recurring strategic pain patterns
  - 1 clear internal sponsor role per archetype
  - 1 credible buy / partner / embed path
  - 1 paid pilot or strong design-partner commitment
- Pivot triggers:
  - acquirers call it tactical, not strategic
  - only one archetype shows urgency
  - the pain is stronger venue-side or testing-side than vendor-side

### Public-source guardrails
- Broadridge FIX Technology and Client Connectivity Services:
  - Shows incumbents already market onboarding, testing, and certification
    support
  - Source:
    https://www.broadridge.com/capability/front-office-solutions/connectivity/fix-technology-and-client-connectivity-services
- Trading Technologies Global Network:
  - Confirms connectivity spans Internet, extranet private lines, and direct
    connect
  - Source:
    https://tradingtechnologies.com/infrastructure/global-network/
- Tradeweb Integration:
  - Shows integration support and multiple integration routes already exist
  - Source:
    https://www.tradeweb.com/our-markets/institutional/integration/
- Kaizen Accuracy on Demand:
  - Shows adjacent testing / assurance spend exists
  - Source:
    https://www.kaizenreporting.com/solutions/reportshield/accuracy-on-demand-regulatory-reporting-testing/
- Exactpro ClearTH:
  - Shows protocol-aware testing tooling exists already
  - Source:
    https://exactpro.com/test-tools/clearth

### Explicit inference
- The whitespace is NOT generic FIX automation.
- The whitespace is the cross-party workflow and evidence layer for
  venue-driven change response.
