// Imports
import Head from 'next/head'

import styles from '@/web/styles/Home.module.css'
import NavBar from "@/web/components/NavBar"
import Form from "@/web/components/Form"

// Home function
export default function Home() {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <title>Net Mapper</title>
      </Head>
      
      <main className={styles.main}>
        <NavBar />
        <h1>Net Mapper</h1>
        <br />
        <Form />
      </main>
      <footer className={styles.footer}>
        <span>Created By SPASIC Veljko | &copy; All rights reserved.</span>
      </footer>
    </>
  )
}
