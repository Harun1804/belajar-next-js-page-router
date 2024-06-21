import {collection, getDocs} from "firebase/firestore/lite";
import firestore from "@/config/database";

const document: string = "products";

export async function getProducts() {
    const productCollection = collection(firestore, document);
    const productSnapshot = await getDocs(productCollection);
    return productSnapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    });
}