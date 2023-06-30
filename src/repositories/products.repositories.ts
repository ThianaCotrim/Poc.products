import { Products } from "protocols"
import { db } from "../database/database.connection"

export function createProducts({name, descricao, valor, image}){
    const newProducts = db.query(`INSERT INTO products 
    ("name", "descricao", "valor", "image") VALUES ($1, $2, $3, $4)`, [name, descricao, valor, image])

    return newProducts
}

export async function getProducts(){
    const productsall = await db.query(`SELECT * FROM products`)
    return productsall.rows
}

export async function deleteProducts(id: number){
    const deleteProducts = await db.query<Products>(`DELETE FROM products WHERE id=$1`, [id])
    return deleteProducts
}
