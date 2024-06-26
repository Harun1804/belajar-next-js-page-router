import {ProductType} from "@/types/product.type";
import ProductView from "@/components/views/product-view";

export default function ServerPage(props: { products: ProductType[]}) {
    const { products} = props;
    return (
        <ProductView products={products}/>
    );
}

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/products");
    const response = await res.json();

    return {
        props: {
            products: response.data
        }
    }
}