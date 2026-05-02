import styles from "./Spinner.module.css"

export default function Spinner({size}:{size: number}) {
    return <span className={styles.spinny} style={{ width: size, height: size}} />
}