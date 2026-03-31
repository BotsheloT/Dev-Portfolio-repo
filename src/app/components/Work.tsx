import styles from './Work.module.css'

interface Project {
  year: string
  label: string
  title: string
  desc: string
  highlights: string[]
  tags: string[]
}

const projects: Project[] = [
  {
    year: '2023 – 2024',
    label: 'Enterprise SaaS · Business management',
    title: 'SME business management platform',
    desc: 'A business management tool for small to medium enterprises. I joined to modernise the frontend — migrating an Angular 12 codebase to align with an updated visual identity, handling client-requested features, and onboarding a new enterprise client by adding full Portuguese localisation.',
    highlights: [
      'Refactored legacy Angular 12 styles to match a new design system',
      'Implemented i18n Portuguese language support for a new enterprise client',
      'Delivered ongoing feature work based on direct client requests',
    ],
    tags: ['Angular 12', 'TypeScript', 'SCSS', 'i18n / localisation', 'Legacy refactoring'],
  },
  {
    year: '2024 – Present',
    label: 'Automotive · Marketing platform',
    title: 'Automotive product campaign pages',
    desc: "Frontend work for an automotive client's EV platform. My role was to build and update pages for specific marketing campaigns, and to help reduce technical debt across the codebase — improving maintainability for the team going forward.",
    highlights: [
      'Built and updated campaign-specific landing pages',
      'Identified and removed technical debt from existing codebase',
      'Collaborated with the wider team on system-wide improvements',
    ],
    tags: ['Angular', 'TypeScript', 'SCSS', 'Technical debt', 'Campaign pages'],
  },
  {
    year: '2022',
    label: 'Personal project · Portfolio',
    title: 'First deployed portfolio site',
    desc: 'Built as a learning project to get hands-on with Next.js and the full deployment pipeline. The goal was simple: learn by doing — build something real and ship it to a live URL.',
    highlights: [
      'Learned and applied Next.js from scratch',
      'Deployed to Vercel — first live production project',
    ],
    tags: ['Next.js', 'JavaScript', 'Vercel'],
  },
]

export default function Work() {
  return (
    <section className={`section ${styles.work}`} id="work">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">Selected work</h2>
        <div className="section-line" />
      </div>

      <div className={styles.grid}>
        {/* Featured full-width card — first two projects side by side */}
        <div className={`${styles.card} ${styles.full}`}>
          {projects.slice(0, 2).map((p) => (
            <div key={p.title}>
              <p className={styles.year}>{p.year}</p>
              <p className={styles.label}>{p.label}</p>
              <h3 className={`${styles.title} ${styles.titleLg}`}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <ul className={styles.highlights}>
                {p.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
              <div className={styles.tags}>
                {p.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Third project */}
        <div className={styles.card}>
          <p className={styles.year}>{projects[2].year}</p>
          <p className={styles.label}>{projects[2].label}</p>
          <h3 className={styles.title}>{projects[2].title}</h3>
          <p className={styles.desc}>{projects[2].desc}</p>
          <ul className={styles.highlights}>
            {projects[2].highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
          <div className={styles.tags}>
            {projects[2].tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
          </div>
        </div>

        {/* Open to work card */}
        <div className={styles.availableCard}>
          <div>
            <p className={styles.availableLabel}>Currently available</p>
            <h3 className={styles.availableTitle}>Open to freelance & short-term projects</h3>
            <p className={styles.availableDesc}>
              Looking to collaborate on frontend builds, redesigns, or Angular projects. I bring
              both technical precision and a strong eye for how design translates to code.
            </p>
          </div>
          <a href="#contact" className={styles.availableCta}>Get in touch →</a>
        </div>
      </div>
    </section>
  )
}
