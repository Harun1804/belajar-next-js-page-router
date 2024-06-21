import {useEffect, useState} from "react";
import axios from "axios";

type Product = {
    id: number;
    name: string;
    price: number;
    size: string;
}

export default function ProductPage () {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("/api/products")
            .then((response) => {
                setProducts(response.data.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])
    return (
        <div>
            <div>Product Page</div>
            {products.map((product: Product) => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
}