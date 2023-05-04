import styles from "@/web/styles/Form.module.css"

const FormField = (props) => {
    const { inputType, inputName, inputPlaceholder, ...otherProps } = props
    return (
        <input type={inputType} name={inputName} placeholder={inputPlaceholder} className={styles.formField} />
    )
}

export default FormField