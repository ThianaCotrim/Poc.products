import { Request, Response } from "express";
import * as productsService from "../services/products.services";
import { Products } from "protocols";
import httpStatus from "http-status";


export async function createProducts(req: Request, res: Response){

    const {name, descricao, valor, image} = req.body as Products
    await productsService.createProducts({
        name, 
        descricao,
        valor,
        image
    })
    res.sendStatus(httpStatus.CREATED)
}

export async function getProducts(req: Request, res: Response){

    const products = await productsService.getProducts()
    res.send(products)
}

export async function editProducts(req: Request, res: Response){

    const {id} = req.params
    const {name, descricao, valor, image} = req.body as Products
    await productsService.editProducts({ 
        id,
        name, 
        descricao,
        valor,
        image
    })
    res.sendStatus(httpStatus.OK)
}

export async function deleteProducts(req: Request, res: Response){
    const id: number = Number(req.params.id);

    await productsService.deleteProducts(id)
    res.sendStatus(httpStatus.OK)

}