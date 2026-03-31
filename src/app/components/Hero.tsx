import styles from './Hero.module.css'

const skills = [
  { label: 'Angular', highlight: true },
  { label: 'TypeScript', highlight: true },
  { label: 'Next.js', highlight: true },
  { label: 'React', highlight: false },
  { label: 'REST APIs', highlight: false },
  { label: 'SCSS', highlight: false },
  { label: 'i18n', highlight: false },
  { label: 'Figma', highlight: false },
  { label: 'Git', highlight: false },
]

const stats = [
  { number: '3+', label: 'Years experience' },
  { number: '3',  label: 'Projects shipped' },
  { number: 'JHB', label: 'Johannesburg, SA' },
  { number: 'Open', label: 'To freelance' },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div>
          <p className={styles.tag}>Frontend Developer · Angular & Next.js</p>
          <h1 className={styles.name}>
            Building interfaces that <em>work</em> and <em>feel</em> right.
          </h1>
          <p className={styles.bio}>
            I build responsive, component-driven web applications — from enterprise tools to
            marketing pages. I care about clean code, good design, and the experience of every
            user who touches what I build.
          </p>
          <a href="#contact" className={styles.cta}>
            Let&apos;s work together
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statNumber}>{s.number}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
        <div className={styles.skillsRow}>
          {skills.map((s) => (
            <span key={s.label} className={`${styles.skillTag} ${s.highlight ? styles.hi : ''}`}>
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
