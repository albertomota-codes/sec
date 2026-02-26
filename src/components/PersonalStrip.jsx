// Update your name, role, and links here (see CLAUDE.md → Personal Data)
const PERSON = {
  name:     'Alberto Mota',
  role:     'Developer',
  github:   'https://github.com/albertomota-codes',
  linkedin: '#',          // replace with your LinkedIn URL
  email:    'mailto:',    // replace with your email
}

export default function PersonalStrip() {
  return (
    <header className="personal-strip">
      <div className="identity">
        <span className="name">{PERSON.name}</span>
        <span className="sep">·</span>
        <span className="role">{PERSON.role}</span>
      </div>
      <nav className="strip-links">
        <a href={PERSON.github}   className="strip-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={PERSON.linkedin} className="strip-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={PERSON.email}    className="strip-link">Email</a>
      </nav>
    </header>
  )
}
