import { Router, Request, Response } from "express";
import ProdutoController from "../controllers/ProdutoController";

const routes = Router()
const controller = new ProdutoController()

routes.post("/produto", controller.createProduto)
routes.get("/produtos", controller.readAllProduto)
routes.get("/produto/:id", controller.readProduto)
routes.put("/produto/:id", controller.updateProduto)
routes.delete("/produto/:id", controller.deleteProduto)
routes.delete("/produto/all", controller.deleteAllProduto)

routes.put("/produto", (req: Request, res: Response) => { res.status(400).json({ message: "Informe o id do produto" })})
routes.delete("/produto", (req: Request, res: Response) => { res.status(400).json({ message: "Informe o id do produto" })})

export default routes