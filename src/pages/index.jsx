import Head from 'next/head'
import styles from '@/web/styles/Home.module.css'
import Li from "@/web/components/Li"


export default function Home(props) {

  const { name, href, ...otherProps } = props

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <title>Net Mapper</title>
      </Head>
      
      <main className={styles.main}>
        <ul className={styles.navbarUl}>
          <Li name="Home" href="#" />
          <Li name="History" href="#" />
        </ul>
        <h1>Net Mapper</h1>
      </main>
    </>
  )
}
