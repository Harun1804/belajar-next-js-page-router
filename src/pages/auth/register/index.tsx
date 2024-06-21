import Link from "next/link";

export default function LoginPage() {
    return (
        <div>
            <h1>Register Page</h1>
            <p>Sudah punya account klik <Link href={'/auth/login'}>disini</Link> </p>
        </div>
    );
}