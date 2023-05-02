// Imports
import styles from '@/web/styles/Form.module.css'
import Button from '@/web/components/Button'

// Form function
const Form = (props) => {
    return (
        <>
            <form className={styles.formContainer} noValidate>
                <label>What are you mapping ? </label>
                <br />
                <input type="text" name="command" className={styles.formField} placeholder="IP" />
                <br />
                <br />

                <label>Option: </label>
                <br />
                <select className={styles.formField}>
                    <option>----</option>
                    <option>-sV</option>
                    <option>-sS</option>
                </select>
                <br />
                <br />

                <label>Max retries: </label>
                <br />
                <input type="number" name="number" className={styles.formField} placeholder="Max retries" />
                <br />
                <br />


                <Button btnLabel="Run Scan" />
            </form>
        </>
    )
}

export default Form
