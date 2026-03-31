import { useEffect, useMemo, useRef, useState } from 'react'
import { Download, Loader } from 'lucide-react'
import {
  THESIS,
  LEAN_EXIT_CASE,
  BUSINESS_MODEL_CANVAS,
  VALIDATION_PLAN,
  MARKET_MODEL,
  PRODUCT_OPERATING_MODEL,
  PRODUCT_CONTEXT_CORE,
} from '../content/raidical/downloads'

async function generatePDF(el, filename) {
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
  pdf.save(filename)
}

function BaseDocument({ title, subtitle, children, compact = false }) {
  const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  const styles = useMemo(() => ({
    page: {
      width: '794px',
      height: '1123px',
      backgroundColor: '#0b0b0c',
      color: '#f5f3ef',
      fontFamily: "'Manrope', system-ui, sans-serif",
      padding: compact ? '32px 40px 32px' : '44px 48px 40px',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
    },
    glow1: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '340px',
      height: '280px',
      background: 'radial-gradient(ellipse at top left, rgba(249,115,22,0.16), transparent 70%)',
      pointerEvents: 'none',
    },
    glow2: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: '320px',
      height: '260px',
      background: 'radial-gradient(ellipse at top right, rgba(59,130,246,0.14), transparent 70%)',
      pointerEvents: 'none',
    },
    content: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: compact ? '14px' : '20px',
    },
    brand: {
      fontFamily: "'Instrument Serif', Georgia, serif",
      fontSize: '28px',
      lineHeight: 1,
      marginBottom: '6px',
    },
    badge: {
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '0.16em',
      color: '#f97316',
      border: '1px solid rgba(249,115,22,0.3)',
      background: 'rgba(249,115,22,0.08)',
      padding: '4px 8px',
      display: 'inline-block',
    },
    meta: {
      fontSize: '10px',
      color: '#8e897f',
      textAlign: 'right',
      lineHeight: 1.5,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
    title: {
      fontFamily: "'Instrument Serif', Georgia, serif",
      fontSize: compact ? '24px' : '28px',
      lineHeight: 1.05,
      marginBottom: compact ? '6px' : '8px',
      maxWidth: compact ? '600px' : '620px',
    },
    subtitle: {
      fontSize: compact ? '10px' : '11px',
      lineHeight: 1.5,
      color: '#c8c2b8',
      maxWidth: '640px',
      marginBottom: compact ? '14px' : '18px',
    },
    divider: {
      height: '1px',
      background: 'linear-gradient(90deg, rgba(249,115,22,0.5), rgba(59,130,246,0.35), transparent)',
      marginBottom: compact ? '14px' : '18px',
    },
    footer: {
      marginTop: 'auto',
      paddingTop: compact ? '12px' : '16px',
      borderTop: '1px solid #20242a',
      fontSize: '9px',
      color: '#8e897f',
      display: 'flex',
      justifyContent: 'space-between',
    },
  }), [compact])

  return (
    <div style={styles.page}>
      <div style={styles.glow1} />
      <div style={styles.glow2} />
      <div style={styles.content}>
        <div style={styles.header}>
          <div>
            <div style={styles.brand}>FIXFriend</div>
            <div style={styles.badge}>LEAN EXIT BRIEF</div>
          </div>
          <div style={styles.meta}>
            <div>{today}</div>
            <div>VC-facing · acquirer lens</div>
          </div>
        </div>
        <div style={styles.title}>{title}</div>
        <div style={styles.subtitle}>{subtitle}</div>
        <div style={styles.divider} />
        {children}
        <div style={styles.footer}>
          <span>FIXFriend · Confidential</span>
          <span>{THESIS.linkedinUrl.replace('https://', '')}</span>
        </div>
      </div>
    </div>
  )
}

function Label({ children }) {
  return (
    <div
      style={{
        fontSize: '10px',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: '#f97316',
        fontWeight: 700,
        marginBottom: '8px',
      }}
    >
      {children}
    </div>
  )
}

function Panel({ children, minHeight }) {
  return (
    <div
      style={{
        border: '1px solid #20242a',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.02), transparent), #111214',
        padding: '14px',
        minHeight,
      }}
    >
      {children}
    </div>
  )
}

function CompactPanel({ children }) {
  return (
    <div
      style={{
        borderTop: '1px solid #20242a',
        padding: '10px 0 4px',
      }}
    >
      {children}
    </div>
  )
}

function LeanExitOnePagerDocument() {
  return (
    <BaseDocument
      title="The workflow-control layer for continuous change"
      subtitle={THESIS.subheadline}
      compact
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>

        {/* Panel 1: Wedge + 10x */}
        <CompactPanel>
          <Label>The Wedge</Label>
          <div style={{ fontSize: '15px', lineHeight: 1.3, marginBottom: '6px' }}>
            {LEAN_EXIT_CASE.wedge.buyerOneLiner}
          </div>
          <div style={{ fontSize: '11px', color: '#c8c2b8', lineHeight: 1.5, marginBottom: '12px' }}>
            {LEAN_EXIT_CASE.wedge.acquirerOneLiner}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: '12px', borderTop: '1px solid #20242a', paddingTop: '10px' }}>
            <div>
              <div style={{ fontSize: '9px', color: '#8e897f', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3px' }}>From</div>
              <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '22px' }}>{LEAN_EXIT_CASE.wedge.quantifiedFrom}</div>
            </div>
            <div>
              <div style={{ fontSize: '9px', color: '#8e897f', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3px' }}>To</div>
              <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '22px', color: '#22c55e' }}>{LEAN_EXIT_CASE.wedge.quantifiedTo}</div>
            </div>
            <div>
              <div style={{ fontSize: '9px', color: '#8e897f', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3px' }}>Measured as</div>
              <div style={{ fontSize: '11px', lineHeight: 1.4, color: '#c8c2b8' }}>{LEAN_EXIT_CASE.wedge.quantifiedLabel}</div>
            </div>
          </div>
        </CompactPanel>

        {/* Panel 2: Business logic + Operating model top row, Market model across bottom */}
        <CompactPanel>
          <Label>Business, Operating & Market</Label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '10px' }}>
            <div>
              <div style={{ fontSize: '9px', color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Business Logic</div>
              {[
                ['Buyer', 'Head of Product / Connectivity / Electronic Trading'],
                ['Pilot', '€25k–€50k'],
                ['ARR', '€100k–€200k'],
                ['Distribution', 'Direct design partners, then platform attach'],
              ].map(([k, v]) => (
                <div key={k} style={{ fontSize: '10px', lineHeight: 1.5, color: '#c8c2b8', marginBottom: '3px' }}>
                  <strong style={{ color: '#f5f3ef' }}>{k}:</strong> {v}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '9px', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Operating Boundary</div>
              {[
                [PRODUCT_OPERATING_MODEL.lanes.minor.label, 'autonomous in sandbox / UAT'],
                [PRODUCT_OPERATING_MODEL.lanes.major.label, 'coordinated human project'],
                ['Boundary', 'never touches production'],
                ['Context core', PRODUCT_CONTEXT_CORE.title],
              ].map(([k, v]) => (
                <div key={k} style={{ fontSize: '10px', lineHeight: 1.5, color: '#c8c2b8', marginBottom: '3px' }}>
                  <strong style={{ color: '#f5f3ef' }}>{k}:</strong> {v}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '9px', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Market Model</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '8px' }}>
              {[MARKET_MODEL.tam, MARKET_MODEL.sam, MARKET_MODEL.som, MARKET_MODEL.strategicAttach].map((item) => (
                <div key={item.label} style={{ borderTop: '1px solid #20242a', paddingTop: '6px' }}>
                  <div style={{ fontSize: '9px', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</div>
                  <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '15px', lineHeight: 1.1 }}>{item.value}</div>
                  <div style={{ fontSize: '8.5px', color: '#8e897f', lineHeight: 1.3 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </CompactPanel>

        {/* Panel 3: Why this could be bought — 2-column bullet grid */}
        <CompactPanel>
          <Label>Why This Could Be Bought</Label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {LEAN_EXIT_CASE.whyBought.points.map((point) => (
              <div key={point} style={{ display: 'flex', gap: '8px' }}>
                <span style={{ color: '#3b82f6', flexShrink: 0 }}>•</span>
                <span style={{ fontSize: '11px', color: '#c8c2b8', lineHeight: 1.5 }}>{point}</span>
              </div>
            ))}
          </div>
        </CompactPanel>

        {/* Panel 4: Validation — assumption + timeline left, metrics + triggers right */}
        <CompactPanel>
          <Label>Validation Plan</Label>
          <div style={{ display: 'grid', gridTemplateColumns: '1.9fr 1.05fr 1.05fr', gap: '12px' }}>
            <div>
              <div style={{ fontSize: '10.5px', lineHeight: 1.4, color: '#c8c2b8', marginBottom: '8px' }}>
                <strong style={{ color: '#f5f3ef' }}>Riskiest assumption:</strong> {VALIDATION_PLAN.riskiestAssumption}
              </div>
              {VALIDATION_PLAN.timeline.slice(0, 2).map((item) => (
                <div key={item.label} style={{ marginBottom: '6px' }}>
                  <div style={{ fontSize: '9px', color: '#f97316', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item.label}</div>
                  <div style={{ fontSize: '11px', color: '#f5f3ef', marginTop: '1px' }}>{item.focus}</div>
                  <div style={{ fontSize: '9.5px', lineHeight: 1.35, color: '#c8c2b8' }}>{item.detail}</div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '9px', color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Success Metrics</div>
              {VALIDATION_PLAN.successMetrics.map((item) => (
                <div key={item} style={{ display: 'flex', gap: '6px', marginBottom: '4px' }}>
                  <span style={{ color: '#22c55e', fontSize: '8.5px', flexShrink: 0 }}>•</span>
                  <span style={{ fontSize: '9px', color: '#c8c2b8', lineHeight: 1.35 }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '9px', color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Pivot Triggers</div>
              {VALIDATION_PLAN.pivotTriggers.map((item) => (
                <div key={item} style={{ display: 'flex', gap: '6px', marginBottom: '4px' }}>
                  <span style={{ color: '#f97316', fontSize: '8.5px', flexShrink: 0 }}>•</span>
                  <span style={{ fontSize: '9px', color: '#c8c2b8', lineHeight: 1.35 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </CompactPanel>

      </div>
    </BaseDocument>
  )
}

function BusinessModelCanvasDocument() {
  const cardStyle = {
    border: '1px solid #20242a',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.02), transparent), #111214',
    padding: '14px',
    minHeight: '140px',
  }

  return (
    <BaseDocument
      title="Business Model Canvas"
      subtitle="A compact operating view of the wedge-first business."
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', alignContent: 'start', flex: 1 }}>
        {[
          ['Customer Segments', BUSINESS_MODEL_CANVAS.customerSegments],
          ['Value Proposition', [BUSINESS_MODEL_CANVAS.valueProp]],
          ['Channels', BUSINESS_MODEL_CANVAS.channels],
          ['Revenue Streams', BUSINESS_MODEL_CANVAS.revenueStreams],
          ['Cost Structure', BUSINESS_MODEL_CANVAS.costStructure],
        ].map(([label, rows]) => (
          <div key={label} style={cardStyle}>
            <Label>{label}</Label>
            {rows.map((row) => (
              <div key={row} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                <span style={{ color: '#3b82f6' }}>•</span>
                <span style={{ fontSize: '11px', color: '#c8c2b8', lineHeight: 1.5 }}>{row}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </BaseDocument>
  )
}

function ValidationPlanDocument() {
  return (
    <BaseDocument
      title="Validation Experiment Plan"
      subtitle="The first loop tests direct customer pull, strategic-acquirer pain, and how similar deals actually get bought."
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '14px', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <Panel>
            <Label>Riskiest Assumption</Label>
            <div style={{ fontSize: '14px', lineHeight: 1.45 }}>{VALIDATION_PLAN.riskiestAssumption}</div>
          </Panel>

          <Panel>
            <Label>Hypothesis</Label>
            <div style={{ fontSize: '11px', color: '#c8c2b8', lineHeight: 1.6 }}>{VALIDATION_PLAN.hypothesis}</div>
          </Panel>

          <Panel minHeight="420px">
            <Label>Timeline</Label>
            {VALIDATION_PLAN.timeline.map((item) => (
              <div key={item.label} style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '10px', color: '#f97316', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{item.label}</div>
                <div style={{ fontSize: '12px', color: '#f5f3ef', marginTop: '2px' }}>{item.focus}</div>
                <div style={{ fontSize: '11px', color: '#c8c2b8', lineHeight: 1.5 }}>{item.detail}</div>
              </div>
            ))}
          </Panel>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <Panel>
            <Label>Success Metrics</Label>
            {VALIDATION_PLAN.successMetrics.map((item) => (
              <div key={item} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                <span style={{ color: '#22c55e' }}>•</span>
                <span style={{ fontSize: '11px', color: '#c8c2b8', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </Panel>
          <Panel>
            <Label>Pivot Triggers</Label>
            {VALIDATION_PLAN.pivotTriggers.map((item) => (
              <div key={item} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                <span style={{ color: '#f97316' }}>•</span>
                <span style={{ fontSize: '11px', color: '#c8c2b8', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </Panel>
        </div>
      </div>
    </BaseDocument>
  )
}

function DownloadButton({ label, loading, onClick, accent = 'var(--amber)' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="button-outline inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold w-full"
      style={{
        borderColor: 'rgba(249,115,22,0.35)',
        color: loading ? 'var(--text-tertiary)' : accent,
        letterSpacing: '0.08em',
        background: 'linear-gradient(135deg, rgba(249,115,22,0.07), rgba(59,130,246,0.04))',
      }}
    >
      {loading ? <Loader size={13} className="animate-spin" /> : <Download size={13} />}
      {loading ? 'GENERATING PDF…' : label}
    </button>
  )
}

export default function LeanExitDownloads() {
  const leanExitRef = useRef(null)
  const canvasRef = useRef(null)
  const validationRef = useRef(null)
  const [activeDoc, setActiveDoc] = useState(null)

  const documentMap = useMemo(() => ({
    'lean-exit': { ref: leanExitRef, filename: 'FIXFriend-Lean-Exit-OnePager.pdf', Component: LeanExitOnePagerDocument },
    canvas: { ref: canvasRef, filename: 'FIXFriend-Business-Model-Canvas.pdf', Component: BusinessModelCanvasDocument },
    validation: { ref: validationRef, filename: 'FIXFriend-Validation-Plan.pdf', Component: ValidationPlanDocument },
  }), [])

  function handleDownload(key) {
    if (activeDoc) return
    setActiveDoc(key)
  }

  const activeDocument = activeDoc ? documentMap[activeDoc] : null

  useEffect(() => {
    if (!activeDocument?.ref.current) return

    let cancelled = false
    const frame = window.requestAnimationFrame(() => {
      void generatePDF(activeDocument.ref.current, activeDocument.filename)
        .finally(() => {
          if (!cancelled) {
            setActiveDoc(null)
          }
        })
    })

    return () => {
      cancelled = true
      window.cancelAnimationFrame(frame)
    }
  }, [activeDocument])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <DownloadButton
          label="DOWNLOAD LEAN EXIT ONE-PAGER · PDF"
          loading={activeDoc === 'lean-exit'}
          onClick={() => handleDownload('lean-exit')}
        />
        <DownloadButton
          label="DOWNLOAD BUSINESS MODEL CANVAS · PDF"
          loading={activeDoc === 'canvas'}
          onClick={() => handleDownload('canvas')}
          accent="var(--accent)"
        />
        <DownloadButton
          label="DOWNLOAD VALIDATION PLAN · PDF"
          loading={activeDoc === 'validation'}
          onClick={() => handleDownload('validation')}
          accent="var(--status-success)"
        />
      </div>

      {activeDocument ? (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: '-9999px',
            left: '-9999px',
            zIndex: -1,
            pointerEvents: 'none',
          }}
        >
          <div ref={activeDocument.ref}>
            <activeDocument.Component />
          </div>
        </div>
      ) : null}
    </>
  )
}
