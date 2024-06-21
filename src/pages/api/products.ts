import {NextApiRequest, NextApiResponse} from "next";
import {getProducts} from "@/services/ProductService";

type Response = {
    status: boolean;
    statusCode: number;
    message: string;
    data: {}[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>,
){
    const products = await getProducts()

    const response: Response = {
        status: true,
        statusCode: 200,
        message: "Success",
        data: products
    }

    res.json(response)
}