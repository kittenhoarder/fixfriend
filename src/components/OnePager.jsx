import { forwardRef } from 'react'
import { THESIS, GAP, ACQUIRERS, DEALS, MARKET_MODEL } from '../data/content'
import SynthAgentLogo from './ui/SynthAgentLogo'

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  bg:      '#08090b',
  surface: '#0f1013',
  surface2:'#161719',
  border:  '#1e222a',
  text:    '#f5f3ef',
  text2:   '#c8c2b8',
  text3:   '#8e897f',
  amber:   '#f97316',
  blue:    '#3b82f6',
  green:   '#22c55e',
  red:     '#ef4444',
  indigo:  '#818cf8',
}

const mono  = '"Courier New", "SF Mono", "JetBrains Mono", monospace'
const serif = 'Georgia, "Times New Roman", serif'
const sans  = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'

// ─── Small primitives ─────────────────────────────────────────────────────────
const EL = ({ children, color = C.text3, mb = '8px', style = {} }) => (
  <div style={{ fontSize: '7.5px', fontWeight: 700, color, letterSpacing: '0.15em', fontFamily: mono, marginBottom: mb, textTransform: 'uppercase', ...style }}>
    {children}
  </div>
)

const Hr = ({ m = '11px 0' }) => (
  <div style={{ borderTop: `1px solid ${C.border}`, margin: m }} />
)

const Bullet = ({ children, color = C.amber }) => (
  <div style={{ display: 'flex', gap: '7px', marginBottom: '4px', alignItems: 'flex-start' }}>
    <span style={{ color, fontSize: '9px', flexShrink: 0, marginTop: '2px', fontFamily: mono }}>→</span>
    <span style={{ fontSize: '9.5px', color: C.text2, lineHeight: 1.45 }}>{children}</span>
  </div>
)

// ─── The A4 document ─────────────────────────────────────────────────────────
export const OnePager = forwardRef(function OnePager(_, ref) {
  const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  const tier1 = ACQUIRERS[0].acquirers
  const topDeals = DEALS.filter(d =>
    ['broadridge-cqg', 'six-aquis', 'kkr-osttra', 'tt-opengamma', 'arcesium-limina'].includes(d.id)
  ).slice(0, 5)
  // Short WHY FAST-PATH texts from vcTldr (maintained in content.js)
  const shortFitMap = Object.fromEntries(
    (THESIS.vcTldr?.tier1Acquirers || []).map(a => [a.name, a.fit])
  )

  return (
    <div
      ref={ref}
      style={{
        width: '794px',
        height: '1123px',
        backgroundColor: C.bg,
        color: C.text,
        fontFamily: sans,
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      {/* ── Ambient glows ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '320px', height: '220px', pointerEvents: 'none',
        background: 'radial-gradient(ellipse at top left, rgba(249,115,22,0.15), transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '260px', height: '180px', pointerEvents: 'none',
        background: 'radial-gradient(ellipse at top right, rgba(59,130,246,0.12), transparent 70%)',
      }} />

      {/* ── Header ── */}
      <div style={{
        height: '48px',
        backgroundColor: C.surface,
        borderBottom: `1px solid ${C.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 30px',
        flexShrink: 0,
        position: 'relative', zIndex: 2,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Insect icon */}
          <SynthAgentLogo style={{ width: '20px', height: '20px', color: C.amber }} />
          <span style={{ fontFamily: serif, fontSize: '16px', color: C.text, letterSpacing: '-0.01em' }}>FIXFriend</span>
          <span style={{ width: '1px', height: '12px', backgroundColor: C.border, display: 'inline-block' }} />
          <span style={{ fontSize: '8px', fontWeight: 700, color: C.amber, letterSpacing: '0.15em', fontFamily: mono }}>LEAN EXIT BRIEF</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '8px', color: C.text3, letterSpacing: '0.1em', fontFamily: mono }}>PREPARED FOR RAIDICAL</span>
          <span style={{ width: '1px', height: '10px', backgroundColor: C.border, display: 'inline-block' }} />
          <span style={{ fontSize: '8px', color: C.text3, letterSpacing: '0.08em', fontFamily: mono }}>CONFIDENTIAL · {today}</span>
        </div>
      </div>

      {/* ── Content body ── */}
      <div style={{ padding: '20px 30px 0', boxSizing: 'border-box', position: 'relative', zIndex: 1 }}>

        {/* Hero */}
        <div style={{ marginBottom: '10px' }}>
          <div style={{ fontFamily: serif, fontSize: '33px', lineHeight: 1.0, color: C.text }}>
            AN AGENT LAYER
          </div>
          <div style={{ fontFamily: serif, fontSize: '33px', lineHeight: 1.0, color: C.amber, marginBottom: '8px' }}>
            FOR SYSTEM CHANGE
          </div>
          <p style={{ fontSize: '10.5px', lineHeight: 1.5, color: C.text2, maxWidth: '620px', margin: 0 }}>
            An agent-operated control layer that starts with venue specifications, diffs against client systems,
            structures actionable work in existing channels, and leaves a continuous audit trail that compliance
            can review and intercept at any point.
          </p>
        </div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '9px', marginBottom: '13px' }}>
          {[
            { value: '3', label: 'REGULATORY FORCES', sub: 'DORA · MiFID 2 RTS 6 · EU AI Act' },
            { value: '9', label: 'VERIFIED M&A DEALS', sub: 'Trading infrastructure · 12 months' },
            { value: '~9,000', label: 'CORE OPERATORS', sub: 'US · UK · EU regulated base' },
          ].map((s, i) => (
            <div key={i} style={{
              backgroundColor: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: '3px',
              padding: '9px 12px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(90deg, ${C.amber}, transparent)` }} />
              <div style={{ fontFamily: serif, fontSize: '20px', lineHeight: 1, color: C.text, marginBottom: '3px' }}>{s.value}</div>
              <div style={{ fontSize: '7.5px', fontWeight: 700, color: C.amber, letterSpacing: '0.12em', fontFamily: mono, marginBottom: '2px' }}>{s.label}</div>
              <div style={{ fontSize: '8.5px', color: C.text3 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        <Hr m="0 0 12px" />

        {/* ── Two columns ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '12px' }}>

          {/* LEFT COL */}
          <div>
            {/* Problem vs Solution */}
            <EL>The Problem</EL>
            {GAP.today.steps.slice(0, 5).map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '7px', marginBottom: '4px', alignItems: 'flex-start' }}>
                <span style={{
                  width: '15px', height: '15px', minWidth: '15px',
                  backgroundColor: 'rgba(239,68,68,0.1)',
                  border: '1px solid rgba(239,68,68,0.24)',
                  borderRadius: '2px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '7px', color: C.red, fontFamily: mono,
                }}>0{i + 1}</span>
                <span style={{ fontSize: '9px', color: C.text2, lineHeight: 1.4 }}>
                  {step.title}{step.time ? <span style={{ color: C.text3 }}> · {step.time}</span> : null}
                </span>
              </div>
            ))}
            <div style={{
              marginTop: '6px', padding: '6px 9px',
              backgroundColor: 'rgba(239,68,68,0.07)',
              border: '1px solid rgba(239,68,68,0.18)',
              borderRadius: '2px',
              fontSize: '8px', fontWeight: 700, color: C.red, fontFamily: mono, letterSpacing: '0.04em',
            }}>WEEKS TO MONTHS · 50–200+ CYCLES PER YEAR</div>

            <div style={{ marginTop: '10px' }}>
              <EL color={C.blue}>With FIXFriend — Agent-Driven</EL>
              {GAP.automated.steps.slice(0, 5).map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '7px', marginBottom: '4px', alignItems: 'flex-start' }}>
                  <span style={{
                    width: '15px', height: '15px', minWidth: '15px',
                    backgroundColor: 'rgba(59,130,246,0.1)',
                    border: '1px solid rgba(59,130,246,0.24)',
                    borderRadius: '2px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '7px', color: C.blue, fontFamily: mono,
                  }}>0{i + 1}</span>
                  <span style={{ fontSize: '9px', color: C.text2, lineHeight: 1.4 }}>
                    {step.title}{step.time ? <span style={{ color: C.green }}> · {step.time}</span> : null}
                  </span>
                </div>
              ))}
              <div style={{
                marginTop: '6px', padding: '6px 9px',
                backgroundColor: 'rgba(59,130,246,0.07)',
                border: '1px solid rgba(59,130,246,0.18)',
                borderRadius: '2px',
                fontSize: '8px', fontWeight: 700, color: C.blue, fontFamily: mono, letterSpacing: '0.04em',
              }}>DAYS FOR BOUNDED CASES · CONTINUOUS, NOT RETROACTIVE</div>
            </div>
          </div>

          {/* RIGHT COL */}
          <div>
            {/* Market */}
            <EL>Market Opportunity</EL>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '7px', marginBottom: '8px' }}>
              {[
                { val: MARKET_MODEL.tam.value, lbl: 'TAM', sub: '~9,000 operators' },
                { val: MARKET_MODEL.sam.value, lbl: 'SAM', sub: '1,500–2,250 high-change operators' },
                { val: MARKET_MODEL.som.value, lbl: 'SOM ARR', sub: '20–40 customers' },
              ].map((m, i) => (
                <div key={i} style={{
                  backgroundColor: C.surface2, border: `1px solid ${C.border}`,
                  borderRadius: '2px', padding: '7px 6px', textAlign: 'center',
                }}>
                  <div style={{ fontFamily: serif, fontSize: '14px', color: C.amber, marginBottom: '2px' }}>{m.val}</div>
                  <div style={{ fontSize: '7px', fontWeight: 700, color: C.text, letterSpacing: '0.09em', fontFamily: mono, marginBottom: '1px' }}>{m.lbl}</div>
                  <div style={{ fontSize: '7.5px', color: C.text3 }}>{m.sub}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '8.5px', color: C.text3, lineHeight: 1.4, margin: '0 0 9px' }}>
              Entry: venue-change response and change-control. Expansion: adjacent system-change workflows discovered through acquirer conversations.
            </p>

            {/* Regulatory */}
            <EL>Regulatory Tailwinds</EL>
            {[
              { name: 'DORA', status: 'Active Jan 2025', color: C.green, body: 'ICT change management & continuous evidence required. Protocol changes = ICT changes.' },
              { name: 'MiFID 2 RTS 6', status: 'Enforcement ↑ 2026', color: '#f59e0b', body: 'Firms must evidence trading system controls after every protocol change.' },
              { name: 'EU AI Act', status: 'High-risk: Aug 2026', color: C.blue, body: 'AI governance for trading algorithms. Converges with DORA — compound burden.' },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', gap: '7px', marginBottom: '6px', alignItems: 'flex-start' }}>
                <div style={{ width: '2px', minHeight: '24px', backgroundColor: r.color, borderRadius: '1px', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '1px' }}>
                    <span style={{ fontSize: '9.5px', fontWeight: 700, color: C.text }}>{r.name}</span>
                    <span style={{ fontSize: '7.5px', color: r.color, fontFamily: mono }}>{r.status}</span>
                  </div>
                  <p style={{ fontSize: '8.5px', color: C.text2, lineHeight: 1.4, margin: 0 }}>{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Hr m="0 0 12px" />

        {/* ── Tier 1: full-width fast-path acquirer table ── */}
        <div style={{ marginBottom: '10px' }}>
          <EL mb="5px">Primary Fast-Path Acquirers</EL>
          <div style={{ fontSize: '7.5px', color: C.text3, marginBottom: '6px', fontFamily: mono, letterSpacing: '0.06em' }}>
            Trading infrastructure vendors · missing the autonomous agent layer
          </div>
          {/* Column headers */}
          <div style={{ display: 'grid', gridTemplateColumns: '130px 68px 1fr', borderBottom: `1px solid ${C.border}`, paddingBottom: '4px', marginBottom: '1px' }}>
            {['COMPANY', 'REVENUE', 'WHY FAST-PATH'].map(h => (
              <div key={h} style={{ fontSize: '7px', fontWeight: 700, color: C.text3, letterSpacing: '0.12em', fontFamily: mono }}>{h}</div>
            ))}
          </div>
          {/* One row per Tier 1 acquirer */}
          {tier1.map((a, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '130px 68px 1fr', borderBottom: `1px solid ${C.border}`, padding: '5px 0' }}>
              <div style={{ fontSize: '9.5px', fontWeight: 600, color: C.text }}>{a.name}</div>
              <div style={{ fontSize: '8.5px', color: C.text3 }}>{a.revenue}</div>
              <div style={{ fontSize: '8.5px', color: C.text2, lineHeight: 1.4 }}>{shortFitMap[a.name] || a.fit}</div>
            </div>
          ))}
        </div>

        {/* ── Tier 2/3 + M&A (compact 2-col) ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '12px' }}>
          <div>
            <EL mb="5px">Further Acquirer Tiers</EL>
            {[
              { tier: 'TIER 2 — Exchange Groups', color: C.blue, names: 'SIX Group · Deutsche Börse · Euronext' },
              { tier: 'TIER 3 — RegTech Adjacency', color: C.indigo, names: 'Kaizen Reporting · SmartStream · Exactpro' },
            ].map((t, i) => (
              <div key={i} style={{ marginBottom: '6px' }}>
                <div style={{ fontSize: '7.5px', fontWeight: 700, color: t.color, letterSpacing: '0.1em', fontFamily: mono, marginBottom: '2px' }}>{t.tier}</div>
                <div style={{ fontSize: '9.5px', color: C.text2 }}>{t.names}</div>
              </div>
            ))}
            <div style={{
              marginTop: '6px', padding: '6px 9px',
              backgroundColor: 'rgba(249,115,22,0.06)',
              border: '1px solid rgba(249,115,22,0.18)',
              borderRadius: '2px',
            }}>
              <div style={{ fontSize: '8px', fontWeight: 700, color: C.amber, fontFamily: mono, marginBottom: '3px', letterSpacing: '0.08em' }}>FOUNDER EDGE</div>
              <p style={{ fontSize: '8.5px', color: C.text2, lineHeight: 1.4, margin: 0 }}>
                Worked at Itiviti &amp; Broadridge — directly with Tbricks, VeriFIX &amp; NYFIX inside the BTCS stack. Knows the gap firsthand.
              </p>
            </div>
          </div>

          <div>
            <EL>Recent M&amp;A Signal · 9 Deals · 12 Months</EL>
            {topDeals.map((d, i) => (
              <div key={i} style={{ display: 'flex', gap: '6px', marginBottom: '5px', alignItems: 'flex-start' }}>
                <span style={{ color: C.amber, fontSize: '9px', flexShrink: 0, marginTop: '1px', fontFamily: mono }}>→</span>
                <div>
                  <div style={{ fontSize: '9.5px', fontWeight: 600, color: C.text, lineHeight: 1.3 }}>
                    {d.acquirer} / {d.target}
                    {d.dealValue ? <span style={{ fontWeight: 400, color: C.text3 }}> · {d.dealValue}</span> : null}
                  </div>
                  <div style={{ fontSize: '8px', color: C.text3, lineHeight: 1.3 }}>{d.date} · {d.status}</div>
                </div>
              </div>
            ))}
            <p style={{ fontSize: '8px', color: C.text3, lineHeight: 1.4, margin: '5px 0 0' }}>
              Exchange consolidation amplifies the problem FIXFriend solves: more venues → more protocol complexity → more certification burden per member.
            </p>
          </div>
        </div>

        <Hr m="0 0 11px" />

        {/* ── Founder ── */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
          <div style={{ flex: 1 }}>
            <EL mb="5px">Founder</EL>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '4px' }}>
              <span style={{ fontFamily: serif, fontSize: '16px', color: C.text }}>Owen E. Perry</span>
              <span style={{ fontSize: '9px', color: C.text3 }}>Technical Product &amp; Trading Technology Leader</span>
            </div>
            <p style={{ fontSize: '9px', color: C.text2, lineHeight: 1.5, margin: 0 }}>
              14 years in European electronic trading infrastructure. FactSet · Nasdaq OMX · Itiviti · Quod Financial · Broadridge · Tradeteq (acq.) · AiX (acq. Blockchain.com). Delivered Tier-1 trading programmes and contributed to acquisition outcomes. FIXFriend exists because I have spent a career watching this problem compound — and I know it can be solved by an agent that does what engineers currently do manually.
            </p>
          </div>
          <div style={{
            backgroundColor: C.surface,
            border: `1px solid ${C.border}`,
            borderLeft: `2px solid ${C.amber}`,
            borderRadius: '3px',
            padding: '9px 13px',
            flexShrink: 0,
            minWidth: '155px',
          }}>
            <div style={{ fontSize: '7.5px', color: C.text3, marginBottom: '5px', fontFamily: mono, letterSpacing: '0.1em' }}>CONNECT</div>
            <div style={{ fontSize: '9.5px', color: C.blue, fontWeight: 600, marginBottom: '3px' }}>linkedin.com/in/oweneperry</div>
            <div style={{ fontSize: '8px', color: C.text3 }}>Open to VC, strategic, and M&amp;A conversations.</div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '32px',
        borderTop: `1px solid ${C.border}`,
        backgroundColor: C.surface,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 30px',
      }}>
        <span style={{ fontSize: '8px', color: C.text3, fontFamily: mono, letterSpacing: '0.07em' }}>
          FIXFRIEND · AUTONOMOUS AGENT FOR FIX PROTOCOL CHANGES
        </span>
        <span style={{ fontSize: '8px', color: C.text3, fontFamily: mono, letterSpacing: '0.07em' }}>
          PREPARED FOR RAIDICAL · CONFIDENTIAL · {new Date().getFullYear()}
        </span>
      </div>
    </div>
  )
})
