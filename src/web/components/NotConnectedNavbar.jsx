// Imports
import Link from "next/link"

import styles from "@/web/styles/Navbar.module.css"

// NavBar function
function NavBar() {
  return (
    <ul className={styles.navbarUl}>
      <li className={styles.navbarLi}>
        <Link className={styles.navbarA} href="/">NETMAPPER</Link>
      </li>
      <li className={styles.navbarLiSign}>
        <Link className={styles.navbarA} href="/sign-up">Sign up</Link>
      </li>
      <li className={styles.navbarLiSign}>
        <Link className={styles.navbarA} href="/sign-in">Sign in</Link>
      </li>
  </ul>

  )
}

export default NavBar
