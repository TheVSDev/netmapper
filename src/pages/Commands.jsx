// Imports
import NavBar from "@/web/components/NavBar"
import styles from '@/web/styles/Home.module.css'
import Footer from '@/web/components/Footer'

// Commands function
const Commands = () => {
    return (
        <>
            <main className={styles.main}>
                <NavBar/>
                <h1>Commands</h1>
            </main>
            <Footer />
        </>
    )
}

export default Commands