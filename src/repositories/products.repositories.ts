import { Products } from "protocols"
import { db } from "../database/database.connection"

const allproducts: Products[] = [
    {name: "Geladeira", descricao: "Usado, e a porta não fecha", valor: "250", image:"https://photos.enjoei.com.br/vendo-geladeira-usada-consul-branca-cra30-261-lts-220-volts/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xMDgxNDIxNC81ZTQ2MTQzY2VkYjg1ZDY4M2JjMDM4Nzg4MGViMjg0MC5qcGc"},
    {name: "Fogão", descricao: "Usado, só funciona 2 bocas", valor: "190", image:"https://d2297a7qukasmq.cloudfront.net/8696654d-783a-4926-a264-4eb3e0d1cb2e/dd3a.jpeg"}
]

export function createProducts(products: Products){
    return allproducts.push(products)
}

export async function getProducts(){
    const productsall = await db.query(`SELECT * FROM products`)
    return productsall.rows
    // return allproducts
}
