import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/config/db";


export default async function handler(

    req: NextApiRequest,
    res: NextApiResponse
) {


    const {id} = req.query;


    if(req.method === "GET") {

        const product = await prisma.product.findUnique({
            where: {
                id: id as string
            }
        })

        if(!product) {
           
            return res.status(404).json({message: "Couldn't find product"})
            
        }

        res.status(200).json({message: "Product Found", product});
    }

}