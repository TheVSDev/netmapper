// Imports
import Head from "next/head"

import NavBar from "@/web/components/Navbar"
import Main from "@/web/components/Main"
import Footer from "@/web/components/Footer"
import Title from "@/web/components/Title"

// History function
const History = () => {
    return (
        <>
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.svg" />
              <title>Net Mapper</title>
            </Head>
            
            <Main>
                <NavBar />
                <Title titleLabel="History" />
            </Main>
            <Footer />
        </>
    )
}

export default History