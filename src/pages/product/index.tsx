import {useEffect, useState} from "react";
import styles from "./Product.module.scss"
import fetcher from "@/config/swr";
import useSWR from "swr";

type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
}

export default function ProductPage () {
    const { data, error, isLoading } = useSWR("/api/products",fetcher);

    return (
        <div className={styles.product}>
            <h1 className={styles.product_title}>Product</h1>
            <div className={styles.product_content}>
                {!isLoading ? (
                    <>
                        {data.data.map((product: Product) => (
                            <div key={product.id} className={styles.product_content_item}>
                                <div className={styles.product_content_item_image}>
                                    <img src={product.image} alt={product.name}/>
                                </div>
                                <h4 className={styles.product_content_item_name}>{product.name}</h4>
                                <div className={styles.product_content_item_category}>{product.category}</div>
                                <div className={styles.product_content_item_price}>
                                    {product.price.toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                    })}
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <div className={styles.product_content_skeleton}>
                        <div className={styles.product_content_skeleton_image}/>
                        <div className={styles.product_content_skeleton_name}/>
                        <div className={styles.product_content_skeleton_category}/>
                        <div className={styles.product_content_skeleton_price}/>
                    </div>
                )}
            </div>
        </div>
    );
}