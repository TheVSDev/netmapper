// Imports
import Head from "next/head"
import Link from "next/link"

import styles from "@/web/styles/Welcome.module.css"
import Button from "@/web/components/Button"
import Main from "@/web/components/Main"
import Title from "@/web/components/Title"

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

      <Main>
        <div className={styles.container}>
            <Title titleLabel="Net Mapper" />
            <br />
            <p className={styles.text}>
              Welcome to <span className={styles.underlineGradient}>Network Mapping</span> online tool. <br />
              It is an online web interface for a command line tool <code className={styles.code}>nmap</code>. <br />
              <span className={styles.underlineGradient}>Let&apos;s map the network together.</span> <br />
              <span className={styles.underlineWavy}>Sign in</span> your account to save your scans or if you don&apos;t have one, <span className={styles.underlineWavy}>create it</span>.
            </p>
            <br />
            <br /> 
            <Link href="/sign-in"><Button btnLabel="Log into your account" /></Link><br /><br />
            <Link href="/sign-up"><Button btnLabel="Create an account" /></Link><br /><br />
            <Link href="/scan-page"><Button btnLabel="Continue as a guest" /></Link>
        </div>
      </Main>
    </>
  )
}
