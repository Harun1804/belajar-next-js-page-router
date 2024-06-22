import styles from "@/pages/product/Product.module.scss";
import {ProductType} from "@/types/product.type";

export default function ServerPage(props: { products: ProductType[]}) {
    const { products} = props;
    return (
        <div className={styles.product}>
            <h1 className={styles.product_title}>Product</h1>
            <div className={styles.product_content}>
                {products.length > 0 ? (
                    <>
                        {products.map((product: ProductType) => (
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

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/products");
    const response = await res.json();

    return {
        props: {
            products: response.data
        }
    }
}