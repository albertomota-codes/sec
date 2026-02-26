import { useState } from 'react'

const MOODS = [
  { emoji: '✨', label: 'radiant',   color: '#f6e05e' },
  { emoji: '😌', label: 'calm',      color: '#a8c5b5' },
  { emoji: '🥰', label: 'grateful',  color: '#f4a7b9' },
  { emoji: '🤔', label: 'reflective',color: '#b5a8c5' },
  { emoji: '😔', label: 'low',       color: '#c5b5a8' },
  { emoji: '😤', label: 'tense',     color: '#e8a8a8' },
  { emoji: '😴', label: 'tired',     color: '#a8b5c5' },
]

function getToday() {
  return new Date().toISOString().split('T')[0]
}

function loadHistory() {
  try { return JSON.parse(localStorage.getItem('mood-history') ?? '{}') }
  catch { return {} }
}

function saveHistory(history) {
  localStorage.setItem('mood-history', JSON.stringify(history))
}

function last30Days() {
  const days = []
  for (let i = 29; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    days.push(d.toISOString().split('T')[0])
  }
  return days
}

export default function MoodTracker() {
  const today = getToday()
  const [history, setHistory] = useState(loadHistory)

  const todayEntry   = history[today]
  const [selected, setSelected] = useState(todayEntry?.mood ?? null)
  const [note, setNote]         = useState(todayEntry?.note ?? '')

  const isSaved = todayEntry != null
    && todayEntry.mood === selected
    && todayEntry.note === note

  const handleSave = () => {
    if (selected === null) return
    const updated = { ...history, [today]: { mood: selected, note } }
    setHistory(updated)
    saveHistory(updated)
  }

  const days = last30Days()

  return (
    <div className="mood">
      <p className="mood-heading">How are you today?</p>

      <div className="mood-options">
        {MOODS.map((m, i) => (
          <button
            key={m.label}
            className={`mood-option ${selected === i ? 'selected' : ''}`}
            onClick={() => setSelected(i)}
          >
            <span className="mood-emoji">{m.emoji}</span>
            <span className="mood-label">{m.label}</span>
          </button>
        ))}
      </div>

      <div className="mood-note-wrap">
        <textarea
          className="mood-note"
          value={note}
          onChange={e => setNote(e.target.value)}
          placeholder="A note to yourself… (optional)"
        />
      </div>

      <button
        className="mood-save-btn"
        onClick={handleSave}
        disabled={selected === null || isSaved}
      >
        {isSaved ? 'saved' : 'save'}
      </button>

      <p className="mood-history-heading">Last 30 days</p>
      <div className="mood-calendar">
        {days.map(dateStr => {
          const entry = history[dateStr]
          return (
            <div
              key={dateStr}
              className={`mood-day ${entry ? '' : 'empty'}`}
              title={entry
                ? `${dateStr}: ${MOODS[entry.mood].label}${entry.note ? ' — ' + entry.note : ''}`
                : dateStr}
              style={entry ? { background: MOODS[entry.mood].color + '55' } : {}}
            >
              {entry ? MOODS[entry.mood].emoji : ''}
            </div>
          )
        })}
      </div>
    </div>
  )
}
