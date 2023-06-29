import express, { Request, Response, json } from "express";
import httpStatus from "http-status";
import productsRouter from "./routers/products.routers";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(httpStatus.OK)
});

app.use(productsRouter)

const port: number = parseInt(process.env.PORT) || 5000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})