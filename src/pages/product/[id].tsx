import { useRouter } from "next/router";

export default function ProductDetailPage() {
    const { query } = useRouter();
    return (
        <>
            <h1>Detail Product</h1>
            <p>Product : { query.id }</p>
        </>
    );
}