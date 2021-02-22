import Head from 'next/head'
import Job from '../components/Job'
import Profile from '../components/Profile'
import Company from '../components/Company'
import Porto from '../components/Porto'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>John Doe Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile></Profile>
      <Job></Job>
      <Company></Company>
      

      {/* <main className={styles.main}>
        
      </main> */}

      <footer className={styles.footer}>
        John Doe 2021
      </footer>
    </div>
  )
}
