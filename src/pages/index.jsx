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
      
      <main className={styles.main}>
        <div className={styles.container}>
            <h1 className={styles.title}>Net Mapper</h1>
            <br />
            <p className={styles.text}>
              Welcome to Network Mapper online tool. <br />
              It is an online web interface for a command line tool <code className={styles.code}>nmap</code>. <br />
              Let&apos;s map the network together.
            </p>
            <br />
            <br />
            <Link href="/ScanPage"><Button btnLabel="Let's map the network" /></Link>
        </div>
      </main>
    </>
  )
}
