import { Request, Response } from 'express'
import Compra from '../models/CompraSchema'

export default class CompraController {
    // { data: Date, produtos: []{ nome:string, preco:string } }
    public async createCompra(req: Request, res: Response) {
        const { data, produtos } = req.body
        try {
            const novaCompra = new Compra({ data, produtos })
            await novaCompra.save()
            res.status(201).json(novaCompra)
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar compra' })
        }
    }

    public async readAllCompra(_: Request, res: Response) {
        try {
            const compras = await Compra.find()
            res.json(compras)
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar compras' })
        }
    }
}