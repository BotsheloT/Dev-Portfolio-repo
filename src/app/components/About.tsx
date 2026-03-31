import styles from './About.module.css'

const facts = [
  { label: 'Based in',      value: 'Johannesburg, South Africa — open to remote collaboration worldwide' },
  { label: 'Started coding', value: '2022 — first project built and deployed to Vercel using Next.js' },
  { label: 'Currently',     value: 'Frontend developer working with enterprise Angular applications' },
  { label: 'Strengths',     value: 'Responsive builds · Component architecture · Designer collaboration · Legacy code refactoring' },
]

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="section-header">
        <span className="section-num">01</span>
        <h2 className="section-title">About me</h2>
        <div className="section-line" />
      </div>

      <div className={styles.grid}>
        <div>
          <p className={styles.pull}>
            &ldquo;I grew up fighting over computer time with my sisters — and I&apos;ve never stopped
            loving what computers can do.&rdquo;
          </p>
          <div className={styles.body}>
            <p>
              I&apos;m Botshelo, a frontend developer born and raised in Johannesburg. My relationship
              with tech started early — in primary school I had a natural feel for computers and their
              programmes, something that stood out even then. A friend introduced me to web development
              and the idea that you could build things people actually use on the internet, and I was hooked.
            </p>
            <p>
              I started out learning Next.js and JavaScript, built my first deployed project in 2022, and
              have since worked across Angular enterprise applications, business management tools, and
              automotive marketing platforms. I enjoy the problem-solving side of frontend just as much
              as the craft of making something look and feel right.
            </p>
            <p>
              I work well with designers — I understand design intent and I&apos;m precise in how I
              translate it to code. I&apos;m collaborative by nature, direct about what I think, and
              I take ownership of what I ship.
            </p>
          </div>
        </div>

        <div className={styles.facts}>
          {facts.map((f) => (
            <div key={f.label} className={styles.fact}>
              <div className={styles.factLabel}>{f.label}</div>
              <div className={styles.factValue}>{f.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
