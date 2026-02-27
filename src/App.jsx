import { useState } from 'react'
import PersonalStrip from './components/PersonalStrip'
import Breathing from './components/Breathing'
import JournalPrompt from './components/JournalPrompt'
import MoodTracker from './components/MoodTracker'

const TABS = [
  { id: 'breathe', label: 'Breathe' },
  { id: 'journal', label: 'Journal' },
  { id: 'mood',    label: 'Mood'    },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('breathe')

  return (
    <div className="app">
      <PersonalStrip />
      <main className="main">
        <nav className="tab-nav">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="feature-area">
          {activeTab === 'breathe' && <Breathing />}
          {activeTab === 'journal' && <JournalPrompt />}
          {activeTab === 'mood'    && <MoodTracker />}
        </div>
      </main>
    </div>
  )
}
