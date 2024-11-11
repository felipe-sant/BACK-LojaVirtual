import { Request, Response } from 'express'
import Produto from '../models/ProdutoSchema'

export default class ProdutoController {
    // { nome: string, preco: number }
    public async createProduto(req: Request, res: Response) {
        const { nome, preco } = req.body
        try {
            const novoProduto = new Produto({ nome, preco })
            await novoProduto.save()
            res.status(201).json(novoProduto)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro ao criar produto' })
        }
    }

    public async readAllProduto(_: Request, res: Response) {
        try {
            const produtos = await Produto.find()
            res.status(200).json(produtos)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro ao buscar produtos' })
        }
    }

    public async readProduto(req: Request, res: Response) {
        const { id } = req.params
        try {
            const produto = await Produto.findById(id)
            res.status(200).json(produto)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro ao ler produto' })
        }
    }

    // { nome: string, preco: number }
    public async updateProduto(req: Request, res: Response) {
        const { id } = req.params
        const { nome, preco } = req.body
        try {
            const produtoAtualizado = await Produto.findByIdAndUpdate(id, { nome, preco }, { new: true })
            res.status(200).json(produtoAtualizado)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro ao atualizar produto' })
        }
    }

    public async deleteProduto(req: Request, res: Response) {
        const { id } = req.params
        try {
            await Produto.findByIdAndDelete(id)
            res.status(204).send()
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro ao deletar produto' })
        }
    }

    public async deleteAllProduto(_: Request, res: Response) {
        try {
            await Produto.deleteMany({})
            res.status(204).send()
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro ao deletar produtos' })
        }
    }
}