// Imports
import styles from '@/web/styles/Form.module.css'

// Form function
const Form = () => {
    return (
        <>
            <form className={styles.formContainer}>
                <label>Command: </label>
                <br />
                <input type="text" name="command" className={styles.formField} />
                <br />
                <br />

                <label>Option 1: </label>
                <br />
                <select className={styles.formField}>
                    <option>----</option>
                    <option>-sV</option>
                </select>
                <br />
                <br />

                <label>Option 2: </label>
                <br />
                <select className={styles.formField}>
                    <option>----</option>
                    <option>--host-timeout</option>
                    <option>--min-rate</option>
                    <option>--max-rate</option>
                </select>
                <br />
                <br />

                <label>Number / Time: </label>
                <br />
                <input type="number" name="number" className={styles.formField} />
                <br />
                <br />

                <label>What are you mapping ? </label>
                <br />
                <input type="text" name="command" className={styles.formField} />
                <br />
                <br />

                <button className={styles.buttonRun}>Run</button>
            </form>
        </>
    )
}

export default Form
