import styles from "@/web/styles/Form.module.css"

const Radio = (props) => {
  const { radioName, radioValue, radioLabel } = props

  return (
    <>
      <input type="radio" name={radioName} className={styles.radio} value={radioValue} />
      <label className={styles.radioLabel}>{radioLabel}</label>
    </>
  )
}

export default Radio
