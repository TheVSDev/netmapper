// Imports
import NavBar from "@/web/components/Navbar"
import styles from '@/web/styles/Home.module.css'
import Footer from '@/web/components/Footer'

// History function
const History = () => {
    return (
        <>
            <main className={styles.main}>
                <NavBar />
                <h1>History</h1>
            </main>
            <Footer />
        </>
    )
}

export default History