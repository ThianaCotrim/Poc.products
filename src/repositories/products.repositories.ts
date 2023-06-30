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

export async function editProducts({id, name, descricao, valor, image}: Products){
    const updateProducts = await db.query<Products>(`UPDATE products SET
        name = CASE WHEN $1::text IS NULL THEN name ELSE $1::text END, 
        descricao = CASE WHEN $2::text IS NULL THEN descricao ELSE $2::text END, 
        valor = CASE WHEN $3::text IS NULL THEN valor ELSE $3::text END, 
        image = CASE WHEN $4::text IS NULL THEN image ELSE $4::text END
        WHERE id = $5;`, [name, descricao, valor, image, id])

        return updateProducts

}

export async function deleteProducts(id: number){
    const deleteProducts = await db.query<Products>(`DELETE FROM products WHERE id=$1`, [id])
    return deleteProducts
}
