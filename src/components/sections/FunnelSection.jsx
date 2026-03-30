import { SALES_FUNNEL } from '../../data/content'
import SectionLayout from '../ui/SectionLayout'
import StatusPill from '../ui/StatusPill'

function FunnelBar({ stage, maxCount }) {
  const width = Math.max(8, (stage.count / maxCount) * 100)
  return (
    <div className="flex items-center gap-4">
      <div className="w-36 shrink-0 text-right">
        <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{stage.label}</span>
      </div>
      <div className="flex-1 flex items-center gap-3">
        <div
          className="flex items-center justify-between px-3 py-2 transition-all"
          style={{
            width: `${width}%`,
            minWidth: '60px',
            background: 'linear-gradient(90deg, rgba(249,115,22,0.3), rgba(59,130,246,0.2))',
            borderLeft: '2px solid var(--amber)',
          }}
        >
          <span className="font-serif text-lg leading-none" style={{ color: 'var(--text-primary)' }}>
            {stage.count}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {stage.convRate && (
            <span
              className="font-mono text-[10px] px-1.5 py-0.5 border"
              style={{ color: 'var(--accent)', borderColor: 'var(--accent-border-soft)', backgroundColor: 'var(--accent-softer)', letterSpacing: '0.1em' }}
            >
              {stage.convRate}
            </span>
          )}
          <span className="text-xs hidden md:block" style={{ color: 'var(--text-tertiary)' }}>{stage.note}</span>
        </div>
      </div>
    </div>
  )
}

export default function FunnelSection() {
  const { stages, strategy, activeBuyers, awareness, interest, conversion, retention } = SALES_FUNNEL
  const maxCount = stages[0].count

  return (
    <SectionLayout label="SALES" mobileNav headerProps={{ compact: true }}>
      <div className="content-rail px-6 py-8 max-w-6xl mx-auto space-y-10">

          {/* Funnel */}
          <div>
            <p className="font-mono text-[10px] tracking-widest mb-6" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.16em' }}>
              PIPELINE FUNNEL — FORECAST BASE CASE
            </p>
            <div
              className="p-6 border space-y-3"
              style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
            >
              {stages.map((stage) => (
                <FunnelBar key={stage.label} stage={stage} maxCount={maxCount} />
              ))}
            </div>
          </div>

          {/* First revenue logic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Pilot revenue (4 pilots × €22.5K)', value: '€90,000' },
              { label: 'Annualised production (3 customers × €120K)', value: '€360,000' },
              { label: 'Implied 12M revenue (base case)', value: '€210,000' },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 border"
                style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
              >
                <p className="font-mono text-[10px] tracking-wider mb-2" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.12em' }}>
                  {item.label}
                </p>
                <p className="font-serif text-2xl" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
              </div>
            ))}
          </div>

          {/* Funnel stages narrative */}
          <div>
            <p className="font-mono text-[10px] tracking-widest mb-4" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.16em' }}>
              FUNNEL STRATEGY
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { stage: 'AWARENESS', copy: awareness, tone: 'var(--text-tertiary)', border: 'var(--border-subtle)' },
                { stage: 'INTEREST', copy: interest, tone: 'var(--accent)', border: 'var(--accent-border-soft)' },
                { stage: 'CONVERSION', copy: conversion, tone: 'var(--status-success)', border: 'var(--status-success)' },
                { stage: 'RETENTION', copy: retention, tone: 'var(--amber)', border: 'var(--amber)' },
              ].map((item) => (
                <div
                  key={item.stage}
                  className="p-4 border-l-2 border"
                  style={{ borderLeftColor: item.tone, borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
                >
                  <p className="font-mono text-[10px] tracking-widest mb-2" style={{ color: item.tone, letterSpacing: '0.16em' }}>
                    {item.stage}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.copy}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Go-to-market strategy */}
          <div>
            <p className="font-mono text-[10px] tracking-widest mb-4" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.16em' }}>
              GO-TO-MARKET APPROACH
            </p>
            <div className="space-y-3">
              {strategy.map((item, i) => (
                <div
                  key={i}
                  className="p-4 border flex gap-4 items-start"
                  style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
                >
                  <div
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center border font-mono text-[11px]"
                    style={{ borderColor: 'var(--amber)', color: 'var(--amber)' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>{item.label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active buyer conversations */}
          <div>
            <p className="font-mono text-[10px] tracking-widest mb-4" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.16em' }}>
              ACTIVE BUYER CONVERSATIONS
            </p>
            <p className="text-sm leading-relaxed mb-4 max-w-4xl" style={{ color: 'var(--text-secondary)' }}>
              Interview evidence from trading-tech operators, buyers, and product leaders shows the same recurring pattern:
              fragmented context, certification drag, external dependency risk, and expensive evidence rebuilds.
            </p>
            <div className="space-y-4">
              {activeBuyers.map((buyer, i) => (
                <article
                  key={i}
                  className="p-5 border"
                  style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="font-serif text-xl leading-none mb-1" style={{ color: 'var(--text-primary)' }}>
                        {buyer.name}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                        {buyer.contact} · {buyer.type}
                      </p>
                    </div>
                    <StatusPill tone={buyer.statusTone}>{buyer.status}</StatusPill>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {buyer.note}
                  </p>
                  {buyer.quotes?.length ? (
                    <div className="mt-4 space-y-3">
                      {buyer.quotes.map((quote) => (
                        <div
                          key={quote}
                          className="pl-3 border-l-2"
                          style={{ borderColor: 'var(--border-subtle)' }}
                        >
                          <p className="text-sm italic leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                            &ldquo;{quote}&rdquo;
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

        </div>
    </SectionLayout>
  )
}
