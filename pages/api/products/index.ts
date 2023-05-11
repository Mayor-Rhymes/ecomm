

import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/config/db'

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse
){

 

    if(req.method === "GET") {

        const products = await prisma.product.findMany()

        if(!products) return res.status(404).json({message: "You are not authorized to access this data"})

        if(products.length == 0) return res.status(201).json({message: "You have no products"})

        res.status(200).json({message: "Products fetched successfully", products})

    } else if(req.method === "POST") {

        const {name, category, quantity, price, image} = req.body

        if(!name || !category || !quantity || !price || !image) {

           return res.status(400).json({message: "Please enter all required data"})
        } 

        const product = await prisma.product.create({
            data: {

                name,
                category,
                quantity: Number(quantity),
                price: Number(price),
                image,
                inStock: true

            }
        })


        if(!product) {

            return res.status(400).json({message: "Product could not be created"})
        }

        res.status(200).json({message: "Product successfully created", product})
    }




}