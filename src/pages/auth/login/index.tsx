import Link from "next/link";
import {useRouter} from "next/router";
import styles from "./Login.module.scss";

export default function LoginPage() {
    const { push } = useRouter();

    function handleLogin() {
        push('/product');
    }

    return (
        <div className={styles.login}>
            <h1 className="text-3xl">Login Page</h1>
            <button onClick={handleLogin}>Submit</button>
            <p style={{color: 'red', border: '1px solid black', borderRadius: '20px'}}>Belum punya account klik <Link href={'/auth/register'}>disini</Link> </p>
        </div>
    );
}