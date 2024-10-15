import { Router, Request, Response } from "express";
import compra from "./compra";
import produto from "./produto"

const routes = Router()

routes.use("/", compra)
routes.use("/", produto)

routes.use((req: Request, res: Response) => {
    res.status(404).json({ message: 'Not found' })
})

export default routes