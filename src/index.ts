import dotenv from "dotenv"
import express from "express"
import routes from "./routes/_index";
import cors from "cors"
import mongoose from "mongoose"

console.clear()

dotenv.config()

const PORT = process.env.PORT || 3000;
const app = express()
const MONGODB_URI = process.env.MONGODB_URI || ""

mongoose.connect(MONGODB_URI)
    .then(() => console.log("MongoDB conectado!"))
    .catch(err => console.log("Erro ao conectar ao MongoDB", err))

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})

app.use(routes)