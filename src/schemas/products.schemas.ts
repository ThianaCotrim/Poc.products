import Joi from "joi";
import { Products } from "protocols"

export const productsSchema = Joi.object<Products>({
    name: Joi.string().required(),
    descricao: Joi.string().required(),
    valor: Joi.string().required(),
    image: Joi.string().required(),
})