import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import GuidedStoryGraph from './GuidedStoryGraph'
import { STORY_GRAPH_MERMAID } from '../data/fullGraphMermaid'

function withSinglePeriod(text) {
  return `${String(text).trim().replace(/[.!?]+$/u, '')}.`
}

function StoryChip({ children, tone = 'accent' }) {
  const toneStyles = {
    accent: {
      color: 'var(--text-primary)',
    },
    amber: {
      color: 'var(--amber)',
    },
    success: {
      color: 'var(--status-success)',
    },
  }

  return (
    <span
      className="inline-flex items-center text-[0.92rem] font-semibold leading-relaxed md:text-[0.98rem]"
      style={toneStyles[tone]}
    >
      {children}
    </span>
  )
}

export default function InvestorStoryOverlay({
  open,
  story,
  activeIndex,
  onClose,
  onNext,
  onPrev,
  theme = 'dark',
}) {
  if (!open) return null

  const slide = story.slides[activeIndex]
  const isFirst = activeIndex === 0
  const isLast = activeIndex === story.slides.length - 1
  const compactHeadline = slide.id === 'buyers' || slide.id === 'exit'
  const progressLabel = `${String(activeIndex + 1).padStart(2, '0')} / ${String(story.slides.length).padStart(2, '0')}`

  return (
    <div
      className="fixed inset-0 z-[80] flex min-h-screen w-full items-stretch justify-center px-2 py-2 md:px-6 md:py-6"
      style={{ backgroundColor: 'rgba(5, 5, 5, 0.88)', backdropFilter: 'blur(12px)' }}
      role="dialog"
      aria-modal="true"
      aria-label="Investor walkthrough"
    >
      <div
        className="panel-shell flex min-h-0 w-full max-w-7xl flex-col overflow-hidden border"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(249, 115, 22, 0.08), transparent 28%), radial-gradient(circle at 85% 12%, rgba(59, 130, 246, 0.08), transparent 24%), var(--bg-elevated)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <header
          className="flex items-center justify-between gap-2 border-b px-3 py-2 md:px-5 md:py-2"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <div className="min-w-0 flex-1 truncate pr-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: 'var(--amber)' }}>
              Investor walkthrough:
            </span>{' '}
            <span className="text-[13px] leading-tight md:text-sm" style={{ color: 'var(--text-secondary)' }}>
              {slide.question}
            </span>
          </div>

          <div className="flex items-center gap-1.5 md:gap-2">
            <button
              type="button"
              onClick={onPrev}
              disabled={isFirst}
              className="button-outline inline-flex h-9 items-center gap-1 px-2 text-xs disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Back</span>
            </button>

            <div className="hidden items-center gap-1 md:flex">
              {story.slides.map((item, index) => (
                <span
                  key={item.id}
                  className="h-1.5 w-6"
                  style={{
                    backgroundColor: index <= activeIndex ? 'var(--amber)' : 'var(--border-subtle)',
                    opacity: index <= activeIndex ? 1 : 0.7,
                  }}
                />
              ))}
            </div>

            <div
              className="border px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] md:hidden"
              style={{
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--surface3)',
              }}
            >
              {progressLabel}
            </div>

            <button
              type="button"
              onClick={isLast ? onClose : onNext}
              className="button-accent inline-flex h-9 items-center gap-1 px-2.5 text-xs font-semibold"
            >
              <span>{isLast ? 'Done' : 'Next'}</span>
              {!isLast ? <ArrowRight size={14} /> : null}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="button-outline inline-flex h-9 items-center gap-1 px-2 text-xs"
              aria-label="Close walkthrough"
            >
              <X size={14} />
              <span className="hidden sm:inline">Close</span>
            </button>
          </div>
        </header>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3 md:px-6 md:py-4 lg:overflow-hidden">
            <section className="flex min-h-0 min-w-0 flex-col gap-2 md:gap-2.5">
              <div className="min-w-0">
                <h2
                  className={`max-w-[18ch] font-serif leading-[0.9] md:max-w-none ${compactHeadline ? 'text-[1.65rem] md:text-[2.35rem]' : 'text-[2rem] md:text-[2.65rem]'}`}
                  style={{ color: 'var(--text-primary)' }}
                >
                  {slide.headline}
                </h2>

                <div
                  className="mt-1.5 max-w-5xl text-[0.92rem] leading-relaxed md:mt-2 md:max-w-none md:text-[0.98rem]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span>{slide.body}</span>

                  {slide.chips.length ? (
                    <>
                      {slide.chips.map((chip, index) => (
                        <span key={chip}>
                          <span>{index === 0 ? ' ' : ' '}</span>
                          <StoryChip
                            tone={index === 0 ? 'amber' : index === slide.chips.length - 1 ? 'success' : 'accent'}
                          >
                            {withSinglePeriod(chip)}
                          </StoryChip>
                        </span>
                      ))}
                    </>
                  ) : null}

                  {slide.diagramFocus?.callouts?.length ? (
                    <>
                      {slide.diagramFocus.callouts.map((callout, index) => (
                        <span key={callout}>
                          <span>{index >= 0 || slide.chips.length ? ' ' : ''}</span>
                          <span
                            className={index === 0 ? 'font-medium' : ''}
                            style={{
                              color: index === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                            }}
                          >
                            {withSinglePeriod(callout)}
                          </span>
                        </span>
                      ))}
                    </>
                  ) : null}
                </div>
              </div>

              <div className="min-w-0">
                <GuidedStoryGraph
                  diagram={STORY_GRAPH_MERMAID}
                  theme={theme}
                  focus={slide.diagramFocus}
                  mode="guided"
                  showToolbar={false}
                  showCallouts={false}
                  minHeight="clamp(12rem, 42vh, 26rem)"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
