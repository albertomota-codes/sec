import { useState, useEffect, useRef } from 'react'

const CYCLE = [
  { label: 'breathe in',  duration: 4000 },
  { label: 'hold',        duration: 4000 },
  { label: 'breathe out', duration: 6000 },
]

export default function Breathing() {
  const [running,  setRunning]  = useState(false)
  const [phaseIdx, setPhaseIdx] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!running) return
    timerRef.current = setTimeout(() => {
      setPhaseIdx(i => (i + 1) % CYCLE.length)
    }, CYCLE[phaseIdx].duration)
    return () => clearTimeout(timerRef.current)
  }, [running, phaseIdx])

  const handleToggle = () => {
    if (running) {
      clearTimeout(timerRef.current)
      setRunning(false)
    } else {
      setPhaseIdx(0)
      setRunning(true)
    }
  }

  // Transition props driven by phase
  const isExpanded = phaseIdx === 0 || phaseIdx === 1
  const transitionDuration = phaseIdx === 0 ? 4 : phaseIdx === 2 ? 6 : 0.4

  const ringStyle = running
    ? {
        transform: isExpanded ? 'scale(1)' : 'scale(0.58)',
        opacity: isExpanded ? 0.2 : 0.08,
        transition: `transform ${transitionDuration}s ease-in-out, opacity ${transitionDuration}s ease-in-out`,
      }
    : { transform: 'scale(0.72)', opacity: 0.13 }

  const coreStyle = running
    ? {
        transform: isExpanded ? 'scale(1)' : 'scale(0.62)',
        opacity: isExpanded ? 0.58 : 0.3,
        transition: `transform ${transitionDuration}s ease-in-out, opacity ${transitionDuration}s ease-in-out`,
      }
    : { transform: 'scale(0.8)', opacity: 0.38 }

  return (
    <div className="breathing">
      <div className="breath-circle-wrap">
        <div className="breath-ring" style={ringStyle} />
        <div className="breath-core" style={coreStyle} />
      </div>

      <p className="breath-phase">
        {running ? CYCLE[phaseIdx].label : ''}
      </p>

      <div className="breath-controls">
        <button className="breath-toggle" onClick={handleToggle}>
          {running ? 'stop' : 'begin'}
        </button>
      </div>
    </div>
  )
}
