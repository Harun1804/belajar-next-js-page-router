import {useRouter} from "next/router";

export default function ShopPage () {
    const { query } = useRouter();

    return (
        <div>
            <h1>Shop Page</h1>
            <p>Path: {query.slug ? query.slug[0] : 'Tidak ada kategori'}</p>
        </div>
    );
}