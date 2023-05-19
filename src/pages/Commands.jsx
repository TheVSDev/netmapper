// Imports
import Head from "next/head"

import NavBar from "@/web/components/NavBar"
import styles from "@/web/styles/Home.module.css"
import Footer from "@/web/components/Footer"
import Title from "@/web/components/Title"

// Commands function
const Commands = () => {
    return (
        <>
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.svg" />
              <title>Net Mapper</title>
            </Head>
            
            <main className={styles.main}>
                <NavBar/>
                <Title titleLabel="Commands" />
            </main>
            <Footer />
        </>
    )
}

export default Commands