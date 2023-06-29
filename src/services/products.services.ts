import { Products } from "../protocols"
import * as productsControllers from "../repositories/products.repositories"

export function createProducts(products: Products){
    return productsControllers.createProducts(products);
}

export function getProducts(){
    return productsControllers.getProducts()
}

