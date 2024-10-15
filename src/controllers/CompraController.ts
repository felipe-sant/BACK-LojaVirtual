import { Request, Response } from 'express'

export default class CompraController {
    public async createCompra(req: Request, res: Response) {
        res.status(200).json({ message: 'Compra criada' })
    }

    public async readAllCompra(req: Request, res: Response) {
        res.status(200).json({ message: 'Compra lida' })
    }

    public async deleteCompra(req: Request, res: Response) {
        const { id } = req.params
        try {
            res.status(200).json({ message: `Compra com id ${id} deletada` })
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar compra' })
        }
    }

    public async deleteAllCompra(req: Request, res: Response) {
        res.status(200).json({ message: 'Compra deletada' })
    }
}