import { Products } from "../protocols"
import * as productsControllers from "../repositories/products.repositories"

export async function createProducts(products: Products){
    return productsControllers.createProducts(products);
}

export function getProducts(){
    return productsControllers.getProducts()
}

export function editProducts({id, name, descricao, valor, image}){
    return productsControllers.editProducts({
        id,
        name, 
        descricao,
        valor,
        image,
    })
}

export async function deleteProducts(id: number){
    return productsControllers.deleteProducts(id)
}

