// Imports
import Head from 'next/head'

import styles from '@/web/styles/Home.module.css'
import NavBar from "@/web/components/NavBar"
import Form from "@/web/components/Form"
import FormField from "@/web/components/FormField"
import Button from "@/web/components/Button"
import Footer from '@/web/components/Footer'


const initialValues = {
  ip: "",
  option: undefined,
  maxRetries: undefined,
}


// ScanPage function
const ScanPage = () => {
    return (
        <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.svg" />
            <title>Net Mapper</title>
          </Head>
          
          <main className={styles.main}>
            <NavBar />
            <br />
            <Form title="Net Mapper" initialValues={initialValues}>
                <label>What are you mapping ? </label>
                <br />
                <FormField inputType="text" inputName="ip" inputPlaceholder="IP" />
                <br />
                <br />

                <label>Option: </label>
                <br />
                <select className={styles.formField} name="option">
                    <option>----</option>
                    <option value="-sV">-sV</option>
                    <option value="-sS">-sS</option>
                </select>
                <br />
                <br />

                <label>Max retries: </label>
                <br />
                <FormField inputType="number" inputName="maxRetries" inputPlaceholder="Max Retries" />
                <br />
                <br />


                <Button btnLabel="Run Scan" />
            </Form>
          </main>
          <Footer />
        </>
      )
}

export default ScanPage