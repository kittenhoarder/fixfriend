import { ArrowRight, Linkedin } from 'lucide-react'
import {
  BRAND,
  CONTINUOUS_CHANGE_SIGNALS,
  INTERVIEW_TRACKER,
  SALES_FUNNEL,
  THESIS,
} from '../../data/content'
import LeanExitDownloads from '../LeanExitDownloads'
import FoundingTeam from '../ui/FoundingTeam'
import FIXFriendLogo from '../ui/FIXFriendLogo'
import NarrativeSection from '../ui/NarrativeSection'
import ProofStack from '../ui/ProofStack'
import StatusPill from '../ui/StatusPill'

const panelShell = {
  background:
    'linear-gradient(135deg, rgba(249,115,22,0.1), transparent 28%), linear-gradient(315deg, rgba(59,130,246,0.08), transparent 36%), var(--surface)',
}

function ProductRow({ product }) {
  return (
    <article
      className="rounded-lg border p-4"
      style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-[1.4rem] leading-none" style={{ color: 'var(--text-primary)' }}>
            {product.name}
          </h3>
          <p
            className="font-mono text-[11px] uppercase tracking-[0.14em] mt-2"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {product.tagline}
          </p>
        </div>
        <StatusPill tone={product.statusTone}>{product.status}</StatusPill>
      </div>

      <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-secondary)' }}>
        {product.description}
      </p>
    </article>
  )
}

function StatStrip() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {THESIS.stats.map((stat) => (
        <article
          key={stat.id}
          className="rounded-lg border p-4"
          style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}
        >
          <div className="font-serif text-[2rem] leading-none" style={{ color: 'var(--text-primary)' }}>
            {stat.value}
          </div>
          <div
            className="font-mono text-[11px] uppercase tracking-[0.14em] mt-3"
            style={{ color: 'var(--amber)' }}
          >
            {stat.label}
          </div>
          <p className="text-sm leading-relaxed mt-2" style={{ color: 'var(--text-secondary)' }}>
            {stat.detail}
          </p>
        </article>
      ))}
    </div>
  )
}

export default function OverviewSection({ onNavigate }) {
  const quodBuyer = SALES_FUNNEL.activeBuyers.find((buyer) => buyer.name === 'Quod Financial')
  const virtuBuyer = SALES_FUNNEL.activeBuyers.find((buyer) => buyer.name === 'Virtu Europe')
  const tomInterview = INTERVIEW_TRACKER.find((entry) => entry.id === 'tom-bloomberg')
  const igorInterview = INTERVIEW_TRACKER.find((entry) => entry.id === 'igor-broadridge-connectivity')

  const overviewProofs = {
    whatItIs: [
      {
        status: 'Interview-led',
        kind: 'Operator evidence',
        title: 'Delivery teams are blocked more by QA and context handoff than by raw coding.',
        quote: quodBuyer?.quotes?.[0],
        detail: quodBuyer?.note,
        attribution: `${quodBuyer?.name} · ${quodBuyer?.contact}`,
        why: 'The wedge is a controlled workflow layer that brings context, review, and evidence together around delivery, not another standalone AI feature.',
      },
      {
        status: 'Validated',
        kind: 'Workflow signal',
        title: 'The missing system is the working bundle around each change.',
        quote: igorInterview?.keyQuotes?.find((quote) => quote.label === 'Operational memory')?.text,
        detail:
          'The system has to hold the spec, the edge cases, the test evidence, and the decision trail in one place so teams do not rebuild the story by hand.',
        attribution: `${igorInterview?.name} · ${igorInterview?.company}`,
        why: 'That is the operating shape FIXFriend is selling: bounded workflow control, shared context, and proof attached to execution.',
      },
    ],
    whyNow: CONTINUOUS_CHANGE_SIGNALS.items.slice(0, 2).map((item) => ({
      status: 'Validated',
      kind: 'Market signal',
      title: item.title,
      detail: item.detail,
      sourceLabel: item.sourceLabel,
      sourceUrl: item.sourceUrl,
      why: 'This strengthens the “continuous change” argument: the environment is getting less forgiving, so response speed and evidence quality matter more.',
    })),
    wedgeCredibility: [
      {
        status: 'Interview-led',
        kind: 'Buyer signal',
        title: 'Larger firms already see the problem as structural and expensive.',
        quote: virtuBuyer?.quotes?.[0],
        detail: virtuBuyer?.note,
        attribution: `${virtuBuyer?.name} · ${virtuBuyer?.contact}`,
        why: 'The argument is not generic workflow pain. The cost sits in external dependencies, fragmented evidence, and delayed readiness.',
      },
      {
        status: 'Interview-led',
        kind: 'Operator signal',
        title: 'The first real signal often arrives too late and through the wrong channel.',
        quote: tomInterview?.keyQuotes?.find((quote) => quote.label === 'Communication drag')?.text,
        detail:
          'Teams are still dealing with fragmented change intake, missing source material, and repeated recovery work before they can even decide what the change means.',
        attribution: `${tomInterview?.name} · ${tomInterview?.company}`,
        why: 'That makes venue-change response a credible wedge: it is recurring, bounded enough to automate in parts, and painful enough to justify budget.',
      },
    ],
  }

  return (
    <section className="min-h-full px-5 py-16 lg:py-20 w-full" style={{ paddingTop: '72px' }}>
      <div className="content-rail max-w-5xl mx-auto space-y-14">
        <article className="panel-shell overflow-hidden p-6 md:p-8" style={panelShell}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <StatusPill tone="success">Internal VC brief</StatusPill>
              <StatusPill tone="info">Research-led narrative</StatusPill>
              <StatusPill tone="warning">Vendor-side wedge</StatusPill>
            </div>

            <header className="grid gap-6 md:grid-cols-[auto,1fr] md:items-start">
              <div
                className="flex h-16 w-16 items-center justify-center border"
                style={{
                  borderColor: 'var(--accent-border-soft)',
                  background: 'linear-gradient(135deg, rgba(249,115,22,0.18), rgba(59,130,246,0.08))',
                  color: 'var(--amber)',
                }}
              >
                <FIXFriendLogo size={44} />
              </div>

              <div className="space-y-4">
                <div
                  className="font-mono text-xs uppercase tracking-[0.18em]"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  SynthAgents / PRDCTV.WORK
                </div>
                <h1
                  className="font-serif leading-[0.9]"
                  style={{ fontSize: 'clamp(3rem, 8vw, 5.2rem)', color: 'var(--text-primary)' }}
                >
                  FIXFriend
                </h1>
                <p
                  className="font-serif text-[1.25rem] sm:text-[1.5rem] leading-snug"
                  style={{ color: 'var(--accent)' }}
                >
                  {THESIS.headline.replace('\n', ' ')}
                </p>
                <p className="text-base sm:text-[1.05rem] leading-relaxed max-w-4xl" style={{ color: 'var(--text-secondary)' }}>
                  {THESIS.subheadline}
                </p>
              </div>
            </header>

            <StatStrip />

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('leanExit')}
                className="button-accent inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold"
              >
                Read the lean-exit case
                <ArrowRight size={15} />
              </button>
              <button
                onClick={() => onNavigate('product')}
                className="button-outline inline-flex items-center gap-2 px-4 py-3 text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                See the product
              </button>
              <button
                onClick={() => onNavigate('financials')}
                className="button-outline inline-flex items-center gap-2 px-4 py-3 text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                Review financials
              </button>
              <a
                href={THESIS.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-outline inline-flex items-center gap-2 px-4 py-3 text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Linkedin size={14} />
                Owen on LinkedIn
              </a>
            </div>
          </div>
        </article>

        <div className="max-w-5xl mx-auto space-y-14">
          <NarrativeSection
            eyebrow="What it is"
            title="A bounded workflow-control system, not another vague AI layer."
            lead={THESIS.buyerOneLiner}
          >
            <div className="space-y-4 max-w-4xl">
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {THESIS.acquirerOneLiner} The promise is deliberately narrow: monitor the change, recover the working context, decide whether it stays inside the autonomous UAT lane, and leave a usable evidence trail behind as the work moves.
              </p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                That is why the message needs to stay simple. The value is not “AI for trading ops.” The value is that a repeated operational mess becomes a controlled workflow with clear boundaries.
              </p>
            </div>

            <ProofStack
              items={overviewProofs.whatItIs}
              intro="The strongest evidence here is interview-led: the workflow gap sits in QA, handoff quality, and fragmented context."
            />
          </NarrativeSection>

          <NarrativeSection
            eyebrow="Why now"
            title="The market is moving toward continuous change, not slower release cycles."
            lead="The wedge matters now because operating windows are stretching, post-trade infrastructure is widening, and teams still have to prove control as they absorb change."
          >
            <div className="space-y-4 max-w-4xl">
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {CONTINUOUS_CHANGE_SIGNALS.intro}
              </p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {THESIS.tenXClaim}
              </p>
            </div>

            <ProofStack
              items={overviewProofs.whyNow}
              intro="Public-source research reinforces the same point the interviews suggest: readiness windows are tightening and manual coordination becomes more expensive when the environment keeps shifting."
            />
          </NarrativeSection>

          <NarrativeSection
            eyebrow="Why this wedge"
            title="The wedge is credible because the pain is recurring, the scope is bounded, and the product can expand from one controlled workflow."
            lead="FIXFriend is the live product. The broader SynthAgents portfolio shows where adjacent workflow automation can expand once the initial wedge is proven."
          >
            <div className="space-y-4">
              {BRAND.products.map((product) => (
                <ProductRow key={product.id} product={product} />
              ))}
            </div>

            <ProofStack
              items={overviewProofs.wedgeCredibility}
              intro="The underlying research shows named buyers, named operator pain, and a reason this looks more like a capability larger firms would want to buy or embed than a feature demo."
            />
          </NarrativeSection>

          <NarrativeSection
            eyebrow="Where to go next"
            title="Follow the argument in detail without losing the thread."
            lead="The deeper pages should now read as one connected case: product, research, economics, and strategic fit."
          >
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('leanExit')}
                className="button-accent inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold"
              >
                Lean exit brief
                <ArrowRight size={15} />
              </button>
              <button
                onClick={() => onNavigate('sales')}
                className="button-outline inline-flex items-center gap-2 px-4 py-3 text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                Sales and buyer proof
              </button>
              <button
                onClick={() => onNavigate('market')}
                className="button-outline inline-flex items-center gap-2 px-4 py-3 text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                Market research
              </button>
            </div>

            <div className="rounded-lg border p-5" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface)' }}>
              <div className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--text-tertiary)' }}>
                Documents
              </div>
              <p className="text-sm leading-relaxed mt-3 mb-4" style={{ color: 'var(--text-secondary)' }}>
                Keep the documents available, but let them support the narrative instead of competing with it.
              </p>
              <LeanExitDownloads />
            </div>

            <FoundingTeam
              compact
              className="pt-2"
              intro="Team credibility matters here because the incubator and VC audience is judging whether the wedge, the market read, and the execution path are grounded in real operator context."
            />
          </NarrativeSection>
        </div>
      </div>
    </section>
  )
}
