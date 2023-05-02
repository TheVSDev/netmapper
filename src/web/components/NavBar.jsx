// Imports
import Link from "next/link"

import styles from '@/web/styles/Navbar.module.css'

// NavBar function
function NavBar() {
  return (
    <ul className={styles.navbarUl}>
      <li className={styles.navbarLi}>
        <Link className={styles.navbarA} href="/ScanPage">Home</Link>
      </li>
      <li className={styles.navbarLi}>
        <Link className={styles.navbarA} href="/History">History</Link>
      </li>
      <li className={styles.navbarLi}>
        <Link className={styles.navbarA} href="/Commands">Commands</Link>
      </li>
  </ul>

  )
}

export default NavBar
