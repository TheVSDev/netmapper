import styles from "@/web/styles/Button.module.css"

const Button = (props) => {
    const { btnLabel } = props

    return (
        <button className={styles.button}>{btnLabel}</button>
    )
}

export default Button