import styles from "@/web/styles/Button.module.css"

const SubmitButton = (props) => {
    const { submitValue } = props

    return (
        <input type="submit" className={styles.button} value={submitValue} />
    )
}

export default SubmitButton