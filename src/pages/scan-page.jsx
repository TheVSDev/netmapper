// Imports
import Head from "next/head"
import * as yup from "yup"

import styles from "@/web/styles/Home.module.css"
import NavBar from "@/web/components/NavBar"
import Form from "@/web/components/Form"
import FormField from "@/web/components/FormField"
import Button from "@/web/components/Button"
import Footer from "@/web/components/Footer"
import Radio from "@/web/components/Radio"

// Form attributes
const initialValues = {
  ip: "",
  option: undefined,
  maxRetries: undefined,
}

const validationSchema = yup.object().shape({
  ip: yup.string().required("IP is required").label("Username"),
})


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
            <Form title="Net Mapper" initialValues={initialValues} validationSchema={validationSchema}>
                <label>What are you mapping ? </label>
                <br />
                <FormField type="text" name="ip" placeholder="IP" />

                <Radio radioName="scanOption" radioValue="-sV" radioLabel="-sV" />
                <Radio radioName="scanOption" radioValue="-sS" radioLabel="-sS" />
                <br />
                <br />

                <label>Max Retries:</label>
                <FormField type="number" name="maxRetries" placeholder="Max Retries" />
                <br />

                <label>Max Rate:</label>
                <FormField type="number" name="maxRate" placeholder="Max Rate" />
                <br />

                <label>Host Timeout:</label>
                <FormField type="number" name="hostTimeout" placeholder="Host Timeout" />
                <br />
                <br />


                <Button btnLabel="Run Scan" />
            </Form>
            <br />
          </main>
          <Footer />
        </>
      )
}

export default ScanPage