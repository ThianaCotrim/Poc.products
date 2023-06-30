import { Router } from "express";
import * as productsControllers from "../controllers/products.controllers"

const productsRouter = Router();

productsRouter.get("/products", productsControllers.getProducts)
productsRouter.post("/products", productsControllers.createProducts)
productsRouter.put("/products", productsControllers.editProducts)
productsRouter.delete("/products/:id", productsControllers.deleteProducts)

export default productsRouter