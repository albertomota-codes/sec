import { useState, useEffect, useRef } from 'react'
import { prompts } from '../data/prompts'

function getToday() {
  return new Date().toISOString().split('T')[0]
}

function getPromptForDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  const start = new Date(date.getFullYear(), 0, 0)
  const dayOfYear = Math.floor((date - start) / 86400000)
  return prompts[dayOfYear % prompts.length]
}

function loadEntry(dateStr) {
  return localStorage.getItem(`journal-${dateStr}`) ?? ''
}

function saveEntry(dateStr, text) {
  localStorage.setItem(`journal-${dateStr}`, text)
}

function shiftDate(dateStr, delta) {
  const d = new Date(dateStr)
  d.setDate(d.getDate() + delta)
  return d.toISOString().split('T')[0]
}

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  })
}

export default function JournalPrompt() {
  const today = getToday()
  const [date, setDate] = useState(today)
  const [text, setText] = useState(() => loadEntry(today))
  const [saved, setSaved] = useState(true)
  const saveTimer = useRef(null)

  useEffect(() => {
    setText(loadEntry(date))
    setSaved(true)
  }, [date])

  useEffect(() => {
    return () => clearTimeout(saveTimer.current)
  }, [])

  const handleChange = (e) => {
    const val = e.target.value
    setText(val)
    setSaved(false)
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => {
      saveEntry(date, val)
      setSaved(true)
    }, 800)
  }

  const goBack    = () => setDate(d => shiftDate(d, -1))
  const goForward = () => setDate(d => shiftDate(d, +1))
  const isToday   = date === today

  return (
    <div className="journal">
      <p className="journal-prompt">"{getPromptForDate(date)}"</p>

      <textarea
        className="journal-textarea"
        value={text}
        onChange={handleChange}
        placeholder="Write freely…"
        spellCheck={false}
      />

      <div className="journal-footer">
        <div className="journal-date-nav">
          <button className="journal-date-btn" onClick={goBack}>←</button>
          <span>{isToday ? 'Today' : formatDate(date)}</span>
          <button className="journal-date-btn" onClick={goForward} disabled={isToday}>→</button>
        </div>
        <span>{saved ? 'saved' : 'saving…'}</span>
      </div>
    </div>
  )
}
