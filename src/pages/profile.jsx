// Imports
import Head from "next/head"

import Title from "@/web/components/Title"
import NavBar from "@/web/components/NavBar"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"

// Profile function
const Profile = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
                <title>Net Mapper</title>
            </Head>
            <Main>
                <NavBar />
                <Title titleLabel="Profile" />
            </Main>
            <Footer />
        </>
    )
}

export default Profile