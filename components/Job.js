
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
const Job = () => {
    return (
        <div className={styles.main}>
        <h1 className={styles.title}>
          Learn <span className={styles.textPrimaryColor}>What I Do</span>
        </h1>

        <div className={styles.grid}>
          <a href="https://google.com" className={styles.card}>
              <div className={styles.logoDiv}>
                <img
                    className={styles.logoTask}
                    src="/assets/marketing.png"
                ></img>
              </div>
            <h3 className={styles.subtitle}>Digital Marketing &rarr;</h3>
            <p className={styles.description}>Advanced in branding using digital. Love marketing and content generation  </p>
          </a>

          <a href="https://google.com" className={styles.card}>
              <div className={styles.logoDiv}>
                <img
                    className={styles.logoTask}
                    src="/assets/analyst.png"
                ></img>
              </div>
            <h3 className={styles.subtitle}>Data Analyst &rarr;</h3>
            <p className={styles.description}>Working on data. Review and analyst every collected data and visualize them to encourage stakeholder to giving more performance</p>
          </a>

          <a
            href="https://google.com"
            className={styles.card}
          >
            <div className={styles.logoDiv}>
                <img
                    className={styles.logoTask}
                    src="/assets/research.png"
                ></img>
            </div>
            <h3 className={styles.subtitle}>UX Researcher &rarr;</h3>
            <p className={styles.description}>Learn and research about user experiences when using application. Collecting feedback and giving impact</p>
          </a>

        </div>
        </div>
    )
}

export default Job