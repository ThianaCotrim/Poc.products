import { Router } from "express";
import * as productsControllers from "../controllers/products.controllers"
import { validateSchema } from "../middlewares/validateSchema";
import { productsSchema } from "../schemas/products.schemas";

const productsRouter = Router();

productsRouter.get("/products", productsControllers.getProducts)
productsRouter.post("/products", validateSchema(productsSchema), productsControllers.createProducts)
productsRouter.put("/products/:id", productsControllers.editProducts)
productsRouter.delete("/products/:id", productsControllers.deleteProducts)

export default productsRouter