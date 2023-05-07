// Imports
import Head from 'next/head'

import styles from '@/web/styles/Home.module.css'
import NavBar from "@/web/components/NavBar"
import Form from "@/web/components/Form"
import FormField from "@/web/components/FormField"
import Button from "@/web/components/Button"
import Footer from '@/web/components/Footer'

const initialValues = {
    username: "",
    email: "",
    password: "",
}

// SignUp function
const SignUp = () => {
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
            <Form title="Sign up" initialValues={initialValues}>
                <label>Username:</label>
                <br />
                <FormField inputType="text" inputName="username" inputPlaceholder="Username" />
                <br />

                <label>Email:</label>
                <br />
                <FormField inputType="email" inputName="email" inputPlaceholder="Email" />
                <br />

                <label>Password:</label>
                <FormField inputType="password" inputName="password" inputPlaceholder="Password" />
                <br />
                <br />
                <br />


                <Button btnLabel="Create account" />
            </Form>
          </main>
          <Footer />
        </>
      )
}

export default SignUp