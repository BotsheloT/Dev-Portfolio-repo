import styles from './Skills.module.css'

const skills = [
  {
    name: 'Angular',
    desc: 'Primary framework — component architecture, RxJS, services, routing, and working with both modern and legacy codebases.',
  },
  {
    name: 'TypeScript',
    desc: 'Strongly typed code across all Angular and Next.js projects. Interfaces, generics, and type-safe API integration.',
  },
  {
    name: 'Next.js & React',
    desc: 'Used for personal projects and portfolio builds. Comfortable with the React component model, hooks, and Next.js routing.',
  },
  {
    name: 'SCSS & CSS',
    desc: 'Responsive layouts, design system integration, and style refactoring. Comfortable with both custom and utility-based styling.',
  },
  {
    name: 'REST APIs',
    desc: 'Connecting frontends to backend services — HTTP clients, error handling, and working with typed API responses.',
  },
  {
    name: 'i18n / Localisation',
    desc: 'Implemented multi-language support in production — including Portuguese for an enterprise client onboarding in 2023.',
  },
  {
    name: 'HTML & JavaScript',
    desc: 'Solid fundamentals. The foundation everything else is built on — semantic markup, DOM, and vanilla JS when needed.',
  },
  {
    name: 'Git',
    desc: 'Version control, branching strategies, pull requests, and working collaboratively in team repositories.',
  },
  {
    name: 'Figma & design collab',
    desc: 'Reading and implementing Figma designs accurately. Comfortable working alongside designers to translate visuals to code.',
  },
]

export default function Skills() {
  return (
    <section className={`section ${styles.skillsSection}`} id="skills">
      <div className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">Skills & tools</h2>
        <div className="section-line" />
      </div>
      <div className={styles.grid}>
        {skills.map((s) => (
          <div key={s.name} className={styles.item}>
            <span className={styles.dot} />
            <div className={styles.name}>{s.name}</div>
            <div className={styles.desc}>{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
