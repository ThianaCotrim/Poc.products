import { Request, Response } from "express";
import * as productsService from "../services/products.services";
import { Products } from "protocols";
import httpStatus from "http-status";


export function createProducts(req: Request, res: Response){

    const products = req.body as Products
    productsService.createProducts(products)

    res.sendStatus(httpStatus.CREATED)
}

export async function getProducts(req: Request, res: Response){

    const products = await productsService.getProducts()
    res.send(products)

}

export function editProducts(req: Request, res: Response){

}

export function deleteProducts(req: Request, res: Response){
    
}