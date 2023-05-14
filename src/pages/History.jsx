// Imports
import Head from "next/head"

import NavBar from "@/web/components/Navbar"
import styles from "@/web/styles/Home.module.css"
import Footer from "@/web/components/Footer"

// History function
const History = () => {
    return (
        <>
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.svg" />
              <title>Net Mapper</title>
            </Head>
            
            <main className={styles.main}>
                <NavBar />
                <h1>History</h1>
            </main>
            <Footer />
        </>
    )
}

export default History