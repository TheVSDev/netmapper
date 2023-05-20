// Imports
import Head from "next/head"
import * as yup from "yup"
import { useState } from "react"

import Main from "@/web/components/Main"
import NavBar from "@/web/components/NavBar"
import Form from "@/web/components/Form"
import FormField from "@/web/components/FormField"
import SubmitButton from "@/web/components/SubmitButton"
import Footer from "@/web/components/Footer"
import Radio from "@/web/components/Radio"
import api from "@/web/services/api"

// Form attributes
const initialValues = {
  ip: "",
  scanOption: undefined,
  options: {
    maxRetries: "",
    maxRate: "",
    maxTimeout: "",
  },
}

const validationSchema = yup.object().shape({
  ip: yup.string().required("IP is required").label("Username"),
})


// ScanPage function
const ScanPage = () => {
  const [newResult, setNewResult] = useState()
  const handleSubmit = async (values) => {
    const {
      data: { result },
    } = await api.post("/command", values)
    setNewResult(result)
  }

    return (
        <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.svg" />
            <title>Net Mapper</title>
          </Head>
          
          <Main>
            <NavBar />
            <br />
            <Form 
              title="Net Mapper" 
              initialValues={initialValues} 
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              >
                <label>What are you mapping ? </label>
                <br />
                <FormField type="text" name="ip" placeholder="IP" />

                <Radio radioName="scanOption" radioValue="-sV" radioLabel="-sV" />
                <Radio radioName="scanOption" radioValue="-sS" radioLabel="-sS" />
                <br />
                <br />

                <label>Max Retries:</label>
                <FormField type="number" name="options.maxRetries" placeholder="Max Retries" />
                <br />

                <label>Max Rate:</label>
                <FormField type="number" name="options.maxRate" placeholder="Max Rate" />
                <br />

                <label>Host Timeout:</label>
                <FormField type="number" name="options.hostTimeout" placeholder="Host Timeout" />
                <br />
                <br />


                <SubmitButton submitValue="Run Scan" />
            </Form>
            <br />
              <section className="mx-auto mt-6 flex flex-col w-3">
                <span>{newResult}</span>
              </section>
          </Main>
          <Footer />
        </>
      )
}

export default ScanPage