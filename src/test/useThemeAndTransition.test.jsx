import { fireEvent, render, screen } from '@testing-library/react'
import { getNextTransitionState, useSectionTransition } from '../shared/navigation/useSectionTransition'
import { toggleTheme, useTheme } from '../shared/theme/useTheme'

function ThemeProbe() {
  const [theme, setTheme] = useTheme('dark')

  return (
    <button type="button" onClick={() => setTheme(toggleTheme(theme))}>
      {theme}
    </button>
  )
}

function TransitionProbe() {
  const {
    activeSectionId,
    visibleSectionId,
    transitionState,
    transitionRef,
    setActiveSectionId,
    handleTransitionEnd,
  } = useSectionTransition('overview')

  return (
    <div>
      <button type="button" onClick={() => setActiveSectionId('market')}>
        move
      </button>
      <div data-testid="transition-state">
        {activeSectionId}:{visibleSectionId}:{transitionState}
      </div>
      <div ref={transitionRef} data-testid="transition-node" onAnimationEnd={handleTransitionEnd} />
    </div>
  )
}

describe('theme and transition utilities', () => {
  it('persists the selected theme and updates the document attribute', () => {
    render(<ThemeProbe />)

    fireEvent.click(screen.getByRole('button', { name: 'dark' }))

    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
    expect(window.localStorage.getItem('fixfriend-theme')).toBe('light')
  })

  it('marks the section as exiting when navigation changes the active section', () => {
    render(<TransitionProbe />)

    fireEvent.click(screen.getByRole('button', { name: 'move' }))
    expect(screen.getByTestId('transition-state')).toHaveTextContent('market:overview:exiting')
  })

  it('exposes deterministic transition state helpers', () => {
    expect(getNextTransitionState('idle', 'navigate')).toBe('exiting')
    expect(getNextTransitionState('exiting', 'animation-end')).toBe('entering')
    expect(getNextTransitionState('entering', 'animation-end')).toBe('idle')
  })
})
