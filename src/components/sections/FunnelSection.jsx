import { SALES_FUNNEL } from '../../content/raidical/sales'
import NarrativeSection from '../ui/NarrativeSection'
import ProofStack from '../ui/ProofStack'
import SectionLayout from '../ui/SectionLayout'

function FunnelBar({ stage, maxCount }) {
  const width = Math.max(12, (stage.count / maxCount) * 100)

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="font-serif text-[1.2rem] leading-none" style={{ color: 'var(--text-primary)' }}>
            {stage.label}
          </div>
          <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
            {stage.note}
          </div>
        </div>
        <div className="flex items-center gap-3">
          {stage.convRate ? (
            <span
              className="font-mono text-[11px] px-2 py-1 border"
              style={{ color: 'var(--accent)', borderColor: 'var(--accent-border-soft)', backgroundColor: 'var(--accent-softer)' }}
            >
              {stage.convRate}
            </span>
          ) : null}
          <span className="font-serif text-[1.6rem] leading-none" style={{ color: 'var(--text-primary)' }}>
            {stage.count}
          </span>
        </div>
      </div>

      <div className="h-4 w-full" style={{ backgroundColor: 'var(--surface2)' }}>
        <div
          className="h-full"
          style={{
            width: `${width}%`,
            background: 'linear-gradient(90deg, rgba(249,115,22,0.34), rgba(59,130,246,0.24))',
            borderLeft: '2px solid var(--amber)',
          }}
        />
      </div>
    </div>
  )
}

function RevenueCallout({ label, value }) {
  return (
    <div className="rounded-lg border p-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}>
      <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--text-tertiary)' }}>
        {label}
      </div>
      <div className="font-serif text-[1.9rem] leading-none mt-3" style={{ color: 'var(--text-primary)' }}>
        {value}
      </div>
    </div>
  )
}

export default function FunnelSection() {
  const { stages, strategy, activeBuyers, awareness, interest, conversion, retention } = SALES_FUNNEL
  const maxCount = stages[0].count

  const buyerProof = activeBuyers.slice(0, 2).map((buyer) => ({
    status: buyer.status,
    kind: buyer.type,
    title: buyer.name,
    detail: buyer.note,
    quote: buyer.quotes?.[0],
    attribution: buyer.contact,
    why: 'These are not generic discovery conversations. They show the team is hearing the same buying constraints and workflow pain from named market participants.',
  }))

  const executionProof = activeBuyers.slice(2).map((buyer) => ({
    status: buyer.status,
    kind: buyer.type,
    title: buyer.name,
    detail: buyer.note,
    quote: buyer.quotes?.[0],
    attribution: buyer.contact,
    why: 'These conversations show that interviews are actively shaping the go-to-market motion rather than sitting beside it as disconnected research.',
  }))

  return (
    <SectionLayout label="SALES" mobileNav headerProps={{ compact: true }}>
      <div className="content-rail px-6 py-8 max-w-6xl mx-auto space-y-14">
        <NarrativeSection
          eyebrow="Pipeline read"
          title="The funnel is narrow on purpose: high-signal accounts, tight qualification, and a visible path to paid pilots."
          lead="The sales motion is intentionally narrow: fewer accounts, higher signal, and a conversion path that fits the product, the market, and the trust requirements of financial-services buyers."
        >
          <div className="rounded-lg border p-5 space-y-4" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}>
            {stages.map((stage) => (
              <FunnelBar key={stage.label} stage={stage} maxCount={maxCount} />
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <RevenueCallout label="Pilot revenue (4 pilots × €22.5K)" value="€90,000" />
            <RevenueCallout label="Annualised production (3 customers × €120K)" value="€360,000" />
            <RevenueCallout label="Implied 12M revenue (base case)" value="€210,000" />
          </div>

          <ProofStack
            items={buyerProof}
            intro="The strongest proof here is named buyer and operator feedback. It shows the team is already hearing what blocks adoption, what creates trust, and where the workflow pain is real enough to budget against."
          />
        </NarrativeSection>

        <NarrativeSection
          eyebrow="Go-to-market"
          title="The motion is relationship-led, research-backed, and designed to prove value fast."
          lead="A broad, content-led SaaS funnel would be the wrong read for FIXFriend. The GTM model is targeted outreach, fast problem diagnosis, and a paid pilot that proves one bounded workflow before asking for a wider rollout."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {[
              { title: 'Awareness', body: awareness },
              { title: 'Interest', body: interest },
              { title: 'Conversion', body: conversion },
              { title: 'Retention', body: retention },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-lg border p-4"
                style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--amber)' }}>
                  {item.title}
                </div>
                <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <div className="space-y-3">
            {strategy.map((item, index) => (
              <article
                key={item.label}
                className="rounded-lg border p-4"
                style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-7 w-7 items-center justify-center border font-mono text-[11px]"
                    style={{ borderColor: 'var(--accent-border-soft)', color: 'var(--accent)', backgroundColor: 'var(--accent-softer)' }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-serif text-[1.3rem] leading-none" style={{ color: 'var(--text-primary)' }}>
                      {item.label}
                    </h3>
                    <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </NarrativeSection>

        <NarrativeSection
          eyebrow="Active proof"
          title="The interview pipeline is already shaping the commercial story."
          lead="The same conversations that validate the pain are also shaping how the team packages the wedge, where trust barriers sit, and where larger firms would rather buy than build."
        >
          <ProofStack
            items={executionProof}
            intro="The live conversation set matters because it shows the current GTM path is being informed by real operator and strategic signals rather than hypothetical ICP slides."
          />
        </NarrativeSection>
      </div>
    </SectionLayout>
  )
}
