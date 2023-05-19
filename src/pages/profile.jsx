// Imports
import Head from "next/head"

import styles from "@/web/styles/Home.module.css"
import Title from "@/web/components/Title"
import NavBar from "@/web/components/NavBar"
import Footer from "@/web/components/Footer"

const Profile = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
                <title>Net Mapper</title>
            </Head>
            <main className={styles.main}>
                <NavBar />
                <Title titleLabel="Profile" />
            </main>
            <Footer />
        </>
    )
}

export default Profile