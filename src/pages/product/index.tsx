import fetcher from "@/config/swr";
import useSWR from "swr";
import ProductView from "@/components/views/product-view";

export default function ProductPage () {
    const { data, error, isLoading } = useSWR("/api/products",fetcher);

    return (
        <ProductView products={data} />
    );
}