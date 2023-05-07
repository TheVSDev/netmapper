// Imports
import Head from 'next/head'
import Link from "next/link"

import styles from '@/web/styles/Welcome.module.css'
import Button from '@/web/components/Button'

// Welcome function
export default function Welcome() {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <title>Net Mapper</title>
      </Head>
      

        <div className={styles.box}>
              <div className={styles.waveOne}></div>
              <div className={styles.waveTwo}></div>
              <div className={styles.waveThree}></div>
        </div>

      <main className={styles.main}>
        <div className={styles.container}>
            <h1 className={styles.title}>Net Mapper</h1>
            <br />
            <p className={styles.text}>
              Welcome to Network Mapper online tool. <br />
              It is an online web interface for a command line tool <code className={styles.code}>nmap</code>. <br />
              Let&apos;s map the network together. <br />
              Sign in your account and if you don&apos;t have one, create it.
            </p>
            <br />
            <br /> 
            <Link href="/scan-page"><Button btnLabel="Let's map the network" /></Link><br /><br />
            <Link href="/sign-in"><Button btnLabel="Log into your account" /></Link><br /><br />
            <Link href="/sign-up"><Button btnLabel="Create an account" /></Link>
        </div>
      </main>
    </>
  )
}
