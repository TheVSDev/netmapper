import styles from '@/web/styles/Home.module.css'

const Li = (props) => {
    const { name, href, ...otherProps } = props

    return (
        <li className={styles.navbarLi}><a href={ href } className={styles.navbarA}>{ name }</a></li>
    )
}

export default Li