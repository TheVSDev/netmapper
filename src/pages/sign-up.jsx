// Imports
import Head from "next/head"
import * as yup from "yup"
import { useRouter } from "next/router.js"

import styles from "@/web/styles/Home.module.css"
import NavBar from "@/web/components/NavBar"
import Footer from "@/web/components/Footer"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import SubmitButton from "@/web/components/SubmitButton.jsx"
import api from "@/web/services/api.js"

// Form attributes
const initialValues = {
  username: "",
  email: "",
  password: "",
}

const validationSchema = yup.object().shape({
  username: yup.string().min(1).required("Username is required").label("Name"),
  email: yup.string().email().required("E-mail is required").label("E-mail"),
  password: yup
  .string()
  .min(8)
  .matches(/^.*(?=.*[0-9]+).*$/, "Password must contain a number")
  .matches(
    /^.*(?=.*\p{Ll}+).*$/u,
    "Password must contain a lower case letter"
  )
  .matches(
    /^.*(?=.*\p{Lu}+).*$/u,
    "Password must contain a upper case letter"
  )
  .matches(
    /^.*(?=.*[^0-9\p{L}]+).*$/u,
    "Password must contain a special character"
  )
  .required("Password is required")
  .label("Password"),
})

// SignUp function
const SignUp = () => {
  const router = useRouter()
  const handleSubmit = async (values) => {
    try {
      await api.post("/sign-up", values)

      router.push("/sign-in")
    } catch (err) {
      //
    }
  }

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
          title="Sign Up"
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <label>Username:</label>
          <FormField name="username" placeholder="jdoe" label="Username" />
          <br />
          <label>E-mail:</label>
          <FormField
            name="email"
            type="email"
            placeholder="johndoe@omail.com"
            label="E-mail"
          />
          <br />
          <label>Password:</label>
          <FormField
            name="password"
            type="password"
            placeholder="Pa$$w0rd"
            label="Password"
          />
          <br />
          <br />
          <SubmitButton submitValue="Create account" />
        </Form>
      </main>
      <Footer />
    </>
  )
}

export default SignUp
