import { useEffect, useRef, useState } from 'react'

export const TRANSITION_STATES = {
  idle: 'idle',
  exiting: 'exiting',
  entering: 'entering',
}

export function getNextTransitionState(currentState, event) {
  if (event === 'navigate' && currentState === TRANSITION_STATES.idle) {
    return TRANSITION_STATES.exiting
  }

  if (event === 'animation-end' && currentState === TRANSITION_STATES.exiting) {
    return TRANSITION_STATES.entering
  }

  if (event === 'animation-end' && currentState === TRANSITION_STATES.entering) {
    return TRANSITION_STATES.idle
  }

  return currentState
}

export function useSectionTransition(initialSectionId) {
  const [activeSectionId, setActiveSectionId] = useState(initialSectionId)
  const [visibleSectionId, setVisibleSectionId] = useState(initialSectionId)
  const [transitionState, setTransitionState] = useState(TRANSITION_STATES.idle)
  const transitionRef = useRef(null)

  useEffect(() => {
    if (activeSectionId === visibleSectionId) return
    if (transitionState !== TRANSITION_STATES.idle) return
    setTransitionState(getNextTransitionState(transitionState, 'navigate'))
  }, [activeSectionId, visibleSectionId, transitionState])

  const handleTransitionEnd = (event) => {
    if (event.target !== transitionRef.current) return

    if (transitionState === TRANSITION_STATES.exiting) {
      setVisibleSectionId(activeSectionId)
      setTransitionState(getNextTransitionState(transitionState, 'animation-end'))
      return
    }

    if (transitionState === TRANSITION_STATES.entering) {
      setTransitionState(getNextTransitionState(transitionState, 'animation-end'))
    }
  }

  return {
    activeSectionId,
    visibleSectionId,
    transitionState,
    transitionRef,
    setActiveSectionId,
    handleTransitionEnd,
  }
}
