import { Router, Request, Response } from "express";
import CompraController from "../controllers/CompraController";

const routes = Router()
const controller = new CompraController()

routes.post("/compra", controller.createCompra)
routes.get("/compra", controller.readAllCompra)
routes.delete("/compra/:id", controller.deleteCompra)
routes.delete("/compra/all", controller.deleteAllCompra)

routes.delete("/compra", (req: Request, res: Response) => { res.status(400).json({ message: "Informe o id da compra" })})

export default routes