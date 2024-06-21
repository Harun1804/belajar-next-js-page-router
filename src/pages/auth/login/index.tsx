import Link from "next/link";
import {useRouter} from "next/router";

export default function LoginPage() {
    const { push } = useRouter();

    function handleLogin() {
        push('/product');
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Submit</button>
            <p>Belum punya account klik <Link href={'/auth/register'}>disini</Link> </p>
        </div>
    );
}