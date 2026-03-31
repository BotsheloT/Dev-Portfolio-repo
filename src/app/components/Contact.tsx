import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.left}>
        <h2 className={styles.heading}>
          Let&apos;s build something <em>worth seeing.</em>
        </h2>
        <p className={styles.sub}>
          I&apos;m currently open to freelance and short-term frontend projects. Whether you need
          a full build, a redesign, or an Angular specialist — let&apos;s talk.
        </p>
      </div>

      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/in/botshelotlhabanyane/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.icon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" stroke="#C4602A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="2" y="9" width="4" height="12" stroke="#C4602A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="4" cy="4" r="2" stroke="#C4602A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.linkText}>
            <span className={styles.linkLabel}>LinkedIn</span>
            <span className={styles.linkValue}>Botshelo Tlhabanyane</span>
          </div>
          <span className={styles.arrow}>→</span>
        </a>
      </div>
    </section>
  )
}
