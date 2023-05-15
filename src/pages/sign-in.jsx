// Imports
import Head from "next/head"
import * as yup from "yup"

import SubmitButton from "@/web/components/SubmitButton.jsx"
import styles from "@/web/styles/Home.module.css"
import NavBar from "@/web/components/NavBar"
import Form from "@/web/components/Form"
import FormField from "@/web/components/FormField"
import Footer from "@/web/components/Footer"

// Form attributes
const initialValues = {
  username: "",
  password: "",
}

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required").label("Username"),
  password: yup.string().min(8).required("Password is required").label("Password"),
})

// SignIn function
const SignIn = () => {
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
        <Form
          title="Sign In"
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <label>Username:</label>
          <FormField
            name="username"
            type="text"
            placeholder="Enter your username"
            label="Username"
          />
          <br />
          <label>Password:</label>
          <FormField
            name="password"
            type="password"
            placeholder="Enter your password"
            label="Password"
          />
          <br />
          <br />
          <SubmitButton submitValue="Log in" />
        </Form>
      </main>
      <Footer />
    </>
  )
}

export default SignIn
