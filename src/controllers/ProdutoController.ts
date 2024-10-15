import { Request, Response } from 'express'

export default class ProdutoController {
    public async createProduto(req: Request, res: Response) {
        res.status(200).json({ message: 'Produto criado' })
    }

    public async readAllProduto(req: Request, res: Response) {
        res.status(200).json({ message: 'Produto lido' })
    }

    public async readProduto(req: Request, res: Response) {
        const { id } = req.params
        try {
            res.status(200).json({ message: `Produto com id ${id} lido` })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro ao ler produto' })
        }
    }

    public async updateProduto(req: Request, res: Response) {
        const { id } = req.params
        try {
            res.status(200).json({ message: `Produto com id ${id} atualizado` })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro ao atualizar produto' })
        }
    }

    public async deleteProduto(req: Request, res: Response) {
        const { id } = req.params
        try {
            res.status(200).json({ message: `Produto com id ${id} deletado` })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro ao deletar produto' })
        }
    }

    public async deleteAllProduto(req: Request, res: Response) {
        res.status(200).json({ message: 'Produto deletado' })
    }
}