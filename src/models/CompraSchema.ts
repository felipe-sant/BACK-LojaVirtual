import mongoose from 'mongoose'

const CompraSchema = new mongoose.Schema({
    data: { type: Date, required: true },
    produtos: { type: Array, required: true },
})

const Compra = mongoose.model('compras', CompraSchema)

export default Compra;