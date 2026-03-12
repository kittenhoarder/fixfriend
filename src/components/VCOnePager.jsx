import { useRef, useState } from 'react'
import { Download, Loader } from 'lucide-react'
import { THESIS, ACQUIRERS, PRODUCT_CONTENT, MARKET_MODEL } from '../data/content'

// ─── Download trigger ────────────────────────────────────────────────────────
async function generatePDF(el) {
  const { default: html2canvas } = await import('html2canvas')
  const { jsPDF } = await import('jspdf')

  const canvas = await html2canvas(el, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#0b0b0c',
    logging: false,
    width: el.scrollWidth,
    height: el.scrollHeight,
    windowWidth: el.scrollWidth,
    windowHeight: el.scrollHeight,
  })

  const imgData = canvas.toDataURL('image/jpeg', 0.95)
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const pdfW = pdf.internal.pageSize.getWidth()
  const pdfH = pdf.internal.pageSize.getHeight()
  pdf.addImage(imgData, 'JPEG', 0, 0, pdfW, pdfH)
  pdf.save('FIXFriend-Lean-Exit-VC-OnePager.pdf')
}

// ─── The actual one-pager layout ─────────────────────────────────────────────
function OnePagerDocument() {
  const tier1 = ACQUIRERS[0]
  const bullets = PRODUCT_CONTENT.solution.bullets

  const styles = {
    page: {
      width: '794px',        // A4 at 96dpi
      height: '1123px',
      backgroundColor: '#0b0b0c',
      fontFamily: "'Manrope', 'Inter', system-ui, sans-serif",
      color: '#f5f3ef',
      position: 'relative',
      overflow: 'hidden',
      padding: '44px 48px 36px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
    },
    // decorative grid
    gridOverlay: {
      position: 'absolute',
      inset: 0,
      backgroundImage:
        'linear-gradient(rgba(255,255,255,0.024) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.024) 1px, transparent 1px)',
      backgroundSize: '48px 48px',
      pointerEvents: 'none',
      zIndex: 0,
    },
    glow1: {
      position: 'absolute',
      top: 0, left: 0,
      width: '340px', height: '260px',
      background: 'radial-gradient(ellipse at top left, rgba(249,115,22,0.16), transparent 68%)',
      pointerEvents: 'none', zIndex: 0,
    },
    glow2: {
      position: 'absolute',
      top: 0, right: 0,
      width: '280px', height: '220px',
      background: 'radial-gradient(ellipse at top right, rgba(59,130,246,0.14), transparent 68%)',
      pointerEvents: 'none', zIndex: 0,
    },
    content: { position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' },

    // Header
    header: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '22px' },
    logoRow: { display: 'flex', alignItems: 'center', gap: '12px' },
    logoIcon: { color: '#f97316', width: '36px', height: '36px' },
    productName: { fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '26px', fontWeight: 400, letterSpacing: '-0.03em', color: '#f5f3ef', lineHeight: 1 },
    tagBadge: {
      fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em',
      color: '#f97316', border: '1px solid rgba(249,115,22,0.32)',
      padding: '3px 8px', background: 'rgba(249,115,22,0.08)',
      alignSelf: 'flex-start', marginTop: '2px',
    },
    headerRight: { textAlign: 'right' },
    headerDate: { fontSize: '9px', color: '#8e897f', letterSpacing: '0.1em', textTransform: 'uppercase' },
    headerLabel: { fontSize: '9px', color: '#8e897f', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' },

    divider: { height: '1px', background: 'linear-gradient(90deg, rgba(249,115,22,0.5), rgba(59,130,246,0.3), transparent)', marginBottom: '20px' },

    // Hero
    hero: { marginBottom: '20px' },
    heroHeadline: {
      fontFamily: "'Instrument Serif', Georgia, serif",
      fontSize: '28px', fontWeight: 400, lineHeight: 1.05,
      letterSpacing: '-0.02em', color: '#f5f3ef',
      marginBottom: '8px',
    },
    heroAccent: { color: '#3b82f6' },
    heroSub: { fontSize: '11px', lineHeight: 1.55, color: '#c8c2b8', maxWidth: '580px' },

    // Stats row
    statsRow: { display: 'flex', gap: '10px', marginBottom: '20px' },
    statBox: {
      flex: 1, padding: '10px 12px',
      background: 'linear-gradient(135deg, #111214, #18191d)',
      border: '1px solid #20242a',
      position: 'relative', overflow: 'hidden',
    },
    statVal: { fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '22px', color: '#f5f3ef', lineHeight: 1, marginBottom: '4px' },
    statLabel: { fontSize: '8px', fontWeight: 700, color: '#f97316', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '3px' },
    statDetail: { fontSize: '9px', color: '#8e897f' },

    // Two columns
    cols: { display: 'flex', gap: '14px', flex: 1 },
    colLeft: { flex: '1 1 54%', display: 'flex', flexDirection: 'column', gap: '14px' },
    colRight: { flex: '1 1 44%', display: 'flex', flexDirection: 'column', gap: '14px' },

    // Panel
    panel: {
      background: 'linear-gradient(180deg, rgba(255,255,255,0.014), transparent), #111214',
      border: '1px solid #20242a',
      padding: '12px 14px',
    },
    panelLabel: { fontSize: '8px', fontWeight: 700, letterSpacing: '0.16em', color: '#f97316', textTransform: 'uppercase', marginBottom: '8px' },
    panelTitle: { fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '13px', color: '#f5f3ef', marginBottom: '6px' },
    panelText: { fontSize: '10px', lineHeight: 1.55, color: '#c8c2b8' },

    // Problem vs Solution
    splitRow: { display: 'flex', gap: '8px' },
    splitBox: { flex: 1, padding: '10px 12px', border: '1px solid #20242a' },
    splitBoxRed: { background: 'rgba(239,68,68,0.06)', borderColor: 'rgba(239,68,68,0.2)' },
    splitBoxBlue: { background: 'rgba(59,130,246,0.06)', borderColor: 'rgba(59,130,246,0.22)' },
    splitLabel: { fontSize: '8px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '5px' },
    splitLabelRed: { color: '#ef4444' },
    splitLabelBlue: { color: '#3b82f6' },
    splitText: { fontSize: '9.5px', lineHeight: 1.5, color: '#c8c2b8' },
    splitTime: { fontSize: '10px', fontWeight: 700, marginTop: '6px' },
    splitTimeRed: { color: '#ef4444' },
    splitTimeBlue: { color: '#22c55e' },

    // Bullets
    bulletItem: { display: 'flex', alignItems: 'flex-start', gap: '6px', marginBottom: '4px' },
    bulletDot: { width: '5px', height: '5px', borderRadius: '50%', background: '#f97316', marginTop: '4px', flexShrink: 0 },
    bulletText: { fontSize: '10px', lineHeight: 1.5, color: '#c8c2b8' },

    // Acquirers
    acquirerRow: { display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '7px', paddingBottom: '7px', borderBottom: '1px solid #20242a' },
    acquirerRowLast: { display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: 0 },
    acquirerBadge: {
      fontSize: '9px', fontWeight: 700, letterSpacing: '0.08em',
      color: '#22c55e', padding: '2px 6px',
      border: '1px solid rgba(34,197,94,0.3)',
      background: 'rgba(34,197,94,0.08)',
      whiteSpace: 'nowrap', flexShrink: 0, marginTop: '1px',
    },
    acquirerName: { fontSize: '11px', fontWeight: 700, color: '#f5f3ef', marginBottom: '2px' },
    acquirerFit: { fontSize: '9.5px', color: '#c8c2b8', lineHeight: 1.45 },

    // Market
    marketRow: { display: 'flex', gap: '8px', marginBottom: '8px' },
    marketBox: { flex: 1, padding: '8px 10px', background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.18)' },
    marketBoxLabel: { fontSize: '8px', fontWeight: 700, color: '#3b82f6', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '3px' },
    marketBoxVal: { fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '15px', color: '#f5f3ef', marginBottom: '2px' },
    marketBoxSub: { fontSize: '9px', color: '#8e897f' },

    // Founder
    founderBox: {
      padding: '10px 14px',
      background: 'linear-gradient(135deg, rgba(249,115,22,0.07), rgba(59,130,246,0.05))',
      border: '1px solid rgba(249,115,22,0.2)',
    },
    founderName: { fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '15px', color: '#f5f3ef', marginBottom: '2px' },
    founderTitle: { fontSize: '9px', color: '#8e897f', marginBottom: '6px' },
    founderText: { fontSize: '9.5px', lineHeight: 1.5, color: '#c8c2b8' },
    founderCareer: { fontSize: '9px', color: '#8e897f', marginTop: '5px' },

    // Footer
    footer: {
      marginTop: 'auto',
      paddingTop: '14px',
      borderTop: '1px solid #20242a',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    footerLeft: { fontSize: '9px', color: '#8e897f' },
    footerRight: { fontSize: '9px', color: '#3b82f6', letterSpacing: '0.04em' },
  }

  const today = new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })

  return (
    <div style={styles.page}>
      {/* Decorative overlays */}
      <div style={styles.gridOverlay} />
      <div style={styles.glow1} />
      <div style={styles.glow2} />

      <div style={styles.content}>
        {/* ── Header ── */}
        <div style={styles.header}>
          <div>
            <div style={styles.logoRow}>
              {/* FIXFriend insect icon (inline SVG) */}
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={styles.logoIcon} fill="currentColor">
                <path d="M175.656 22.375l-48.47 82.094c-23.017 4.384-43.547 11.782-60.124 22.374-24.436 15.613-40.572 37.414-45.5 67.875-4.79 29.62 1.568 68.087 24.125 116.093 93.162 22.88 184.08-10.908 257.25-18.813 37.138-4.012 71.196-.898 96.344 22.97 22.33 21.19 36.21 56.808 41.908 113.436 29.246-35.682 44.538-69.065 49.343-99.594 5.543-35.207-2.526-66.97-20.31-95.593-8.52-13.708-19.368-26.618-32-38.626l14.217-33-41.218 10.625c-8.637-6.278-17.765-12.217-27.314-17.782l-7.03-59.782-38.157 37.406c-12.418-5.186-25.184-9.804-38.158-13.812l-8.375-71.28-57.625 56.5c-9.344-1.316-18.625-2.333-27.812-2.97l-31.094-78.125zM222 325.345c-39.146 7.525-82.183 14.312-127.156 11.686 47.403 113.454 207.056 224.082 260.125 87-101.18 33.84-95.303-49.595-132.97-98.686z" />
              </svg>
              <div>
                <div style={styles.productName}>FIXFriend</div>
                <div style={styles.tagBadge}>LEAN EXIT BRIEF</div>
              </div>
            </div>
          </div>
          <div style={styles.headerRight}>
            <div style={styles.headerDate}>{today}</div>
            <div style={styles.headerLabel}>Prepared for Raidical</div>
          </div>
        </div>

        <div style={styles.divider} />

        {/* ── Hero ── */}
        <div style={styles.hero}>
          <div style={styles.heroHeadline}>
            An Agent Layer for{' '}
            <span style={styles.heroAccent}>System Change</span>
          </div>
          <div style={styles.heroSub}>
            {THESIS.subheadline}
          </div>
        </div>

        {/* ── Stats ── */}
        <div style={styles.statsRow}>
          {THESIS.stats.map((s) => (
            <div key={s.id} style={styles.statBox}>
              <div style={styles.statVal}>{s.value}</div>
              <div style={styles.statLabel}>{s.label}</div>
              <div style={styles.statDetail}>{s.detail}</div>
            </div>
          ))}
        </div>

        {/* ── Two columns ── */}
        <div style={styles.cols}>

          {/* LEFT */}
          <div style={styles.colLeft}>

            {/* Problem vs Solution */}
            <div style={styles.panel}>
              <div style={styles.panelLabel}>The Problem & Solution</div>
              <div style={styles.splitRow}>
                <div style={{ ...styles.splitBox, ...styles.splitBoxRed }}>
                  <div style={{ ...styles.splitLabel, ...styles.splitLabelRed }}>Today — Manual</div>
                  <div style={styles.splitText}>
                    Venue publishes a change. Clients, vendors, and venues chase impact across specs, runtime behavior, testing, and evidence by hand.
                  </div>
                  <div style={{ ...styles.splitTime, ...styles.splitTimeRed }}>WEEKS TO MONTHS PER CHANGE</div>
                </div>
                <div style={{ ...styles.splitBox, ...styles.splitBoxBlue }}>
                  <div style={{ ...styles.splitLabel, ...styles.splitLabelBlue }}>FIXFriend — Agent</div>
                  <div style={styles.splitText}>
                    Agent monitors the source channel, diffs against live system context, structures the work, and emits a continuous audit trail in existing tools.
                  </div>
                  <div style={{ ...styles.splitTime, ...styles.splitTimeBlue }}>DAYS FOR BOUNDED CASES</div>
                </div>
              </div>
            </div>

            {/* What the agent does */}
            <div style={styles.panel}>
              <div style={styles.panelLabel}>The FIXFriend Agent</div>
              <div style={styles.panelTitle}>Human-in-the-Loop Autonomous Agent</div>
              {bullets.slice(0, 5).map((b, i) => (
                <div key={i} style={styles.bulletItem}>
                  <div style={styles.bulletDot} />
                  <div style={styles.bulletText}>{b}</div>
                </div>
              ))}
              <div style={{ ...styles.bulletItem, marginTop: '4px' }}>
                <div style={styles.bulletDot} />
                <div style={styles.bulletText}>
                  <strong style={{ color: '#f5f3ef' }}>Target buyer:</strong>{' '}
                  {PRODUCT_CONTENT.targetBuyer.primary} — reallocates existing engineering &amp; compliance spend.
                </div>
              </div>
            </div>

            {/* Regulatory tail-wind */}
            <div style={styles.panel}>
              <div style={styles.panelLabel}>Regulatory Tailwinds</div>
              {[
                { label: 'DORA', text: 'Active Jan 2025 — ICT change evidence required continuously.' },
                { label: 'MiFID 2 RTS 6', text: 'Algo trading controls; enforcement intensifying 2026.' },
                { label: 'EU AI Act', text: 'High-risk AI obligations apply Aug 2026.' },
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', gap: '7px', marginBottom: i < 2 ? '5px' : 0 }}>
                  <span style={{ fontSize: '9px', fontWeight: 700, color: '#f97316', whiteSpace: 'nowrap', paddingTop: '1px' }}>{r.label}</span>
                  <span style={{ fontSize: '9.5px', color: '#c8c2b8', lineHeight: 1.4 }}>{r.text}</span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT */}
          <div style={styles.colRight}>

            {/* Market size */}
            <div style={styles.panel}>
              <div style={styles.panelLabel}>Market Opportunity</div>
              <div style={styles.marketRow}>
                <div style={styles.marketBox}>
                  <div style={styles.marketBoxLabel}>Entry TAM</div>
                  <div style={styles.marketBoxVal}>{MARKET_MODEL.tam.value}</div>
                  <div style={styles.marketBoxSub}>~9,000 operators × ~€100k</div>
                </div>
                <div style={styles.marketBox}>
                  <div style={styles.marketBoxLabel}>SAM</div>
                  <div style={styles.marketBoxVal}>{MARKET_MODEL.sam.value}</div>
                  <div style={styles.marketBoxSub}>1,500–2,250 high-change operators</div>
                </div>
              </div>
              <div style={{ fontSize: '9.5px', color: '#c8c2b8', lineHeight: 1.5 }}>
                <strong style={{ color: '#f5f3ef' }}>Target SOM:</strong> 20–40 institutional customers, {MARKET_MODEL.som.value} ARR, with strategic embed upside for acquisition. FIXFriend becomes operationally embedded in trading change-control workflows, creating high switching costs and acquisition relevance.
              </div>
            </div>

            {/* Tier-1 Acquirers */}
            <div style={styles.panel}>
              <div style={styles.panelLabel}>Tier-1 Acquirer Fit</div>
              {tier1.acquirers.map((a, i) => (
                <div key={a.id} style={i < tier1.acquirers.length - 1 ? styles.acquirerRow : styles.acquirerRowLast}>
                  <span style={styles.acquirerBadge}>T1</span>
                  <div>
                    <div style={styles.acquirerName}>{a.name}</div>
                    <div style={styles.acquirerFit}>{THESIS.vcTldr.tier1Acquirers.find(x => x.name === a.name)?.fit || a.oneliner}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Founder */}
            <div style={styles.founderBox}>
              <div style={styles.panelLabel}>Founder</div>
              <div style={styles.founderName}>Owen E. Perry</div>
              <div style={styles.founderTitle}>Technical Product &amp; Trading Technology Leader</div>
              <div style={styles.founderText}>{THESIS.founderSummary}</div>
              <div style={styles.founderCareer}>
                FactSet · Nasdaq OMX · Itiviti · Quod Financial · Broadridge · AiX (acq.) · Tradeteq (acq.)
              </div>
            </div>

            {/* Deal flow signal */}
            <div style={styles.panel}>
              <div style={styles.panelLabel}>5 Verified Deals — 12 Months</div>
              <div style={styles.panelText}>
                Active M&amp;A in the sector: Broadridge↔CQG, SIX↔Aquis (~£207M), KKR↔OSTTRA (~$3.1B), TT↔OpenGamma, Arcesium↔Limina. Exchange consolidation amplifies the problem FIXFriend solves — more venues, more protocol complexity per member.
              </div>
            </div>

          </div>
        </div>

        {/* ── Footer ── */}
        <div style={styles.footer}>
          <div style={styles.footerLeft}>
            FIXFriend · Confidential · For Raidical incubator use only · {today}
          </div>
          <div style={styles.footerRight}>linkedin.com/in/oweneperry</div>
        </div>
      </div>
    </div>
  )
}

// ─── Exported: download button + hidden render target ────────────────────────
export default function VCOnePagerDownload() {
  const pagerRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const handleDownload = async () => {
    if (!pagerRef.current || loading) return
    setLoading(true)
    try {
      await generatePDF(pagerRef.current)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* ── Download button ── */}
      <button
        onClick={handleDownload}
        disabled={loading}
        className="button-outline inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold w-full justify-center"
        style={{
          borderColor: 'rgba(249,115,22,0.35)',
          color: loading ? 'var(--text-tertiary)' : 'var(--amber)',
          letterSpacing: '0.1em',
          background: 'linear-gradient(135deg, rgba(249,115,22,0.07), rgba(59,130,246,0.04))',
          transition: 'all 170ms cubic-bezier(0.22,1,0.36,1)',
          cursor: loading ? 'wait' : 'pointer',
        }}
      >
        {loading ? (
          <Loader size={13} className="animate-spin" />
        ) : (
          <Download size={13} />
        )}
        {loading ? 'GENERATING PDF…' : 'DOWNLOAD VC ONE-PAGER  ·  PDF'}
      </button>

      {/* ── Hidden A4 render target (off-screen) ── */}
      <div
        style={{
          position: 'fixed',
          top: '-9999px',
          left: '-9999px',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      >
        <div ref={pagerRef}>
          <OnePagerDocument />
        </div>
      </div>
    </>
  )
}
