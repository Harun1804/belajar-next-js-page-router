import styles from "@/styles/404.module.scss"
import {useRouter} from "next/router";

export default function NotFoundPage () {
    const { push } = useRouter()

    function handleBack() {
        push('/')
    }

    return (
        <div className={styles.error}>
            <img src="/assets/img/404.png" alt="Not Found" className={styles.error_image}/>
            <h1>Halaman Tidak Ditemukan</h1>
            <button className={styles.error_button} onClick={handleBack}>Kembali</button>
        </div>
    )
}