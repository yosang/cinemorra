import styles from "./Spinner.module.css"

/**
 * @description A simple css animated spinner
 * @returns {JSX.Element}
 */
export default function Spinner({size}:{size: number}) {
    return <span className={styles.spinny} style={{ width: size, height: size}} />
}