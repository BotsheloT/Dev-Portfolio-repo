import styles from './Approach.module.css'

const items = [
  {
    num: '01',
    title: 'Design-first thinking',
    desc: "I work closely with designers, translating Figma files into pixel-accurate Angular components. I understand design intent — not just what it looks like, but why it was built that way.",
  },
  {
    num: '02',
    title: 'Modular by default',
    desc: 'Every component I build is reusable, typed, and maintainable. Clean architecture means projects can grow without becoming a burden to work on.',
  },
  {
    num: '03',
    title: 'Responsive always',
    desc: "Mobile isn't an afterthought — it's where I start. I build and test across breakpoints so every user, on every device, gets the right experience.",
  },
]

export default function Approach() {
  return (
    <section className={`section ${styles.approach}`} id="approach">
      <div className="section-header">
        <span className="section-num">04</span>
        <h2 className="section-title">How I work</h2>
        <div className="section-line" />
      </div>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.num} className={styles.item}>
            <div className={styles.num}>{item.num}</div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
