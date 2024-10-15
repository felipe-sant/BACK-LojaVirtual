import dotenv from "dotenv"
import express from "express"
import routes from "./routes/_index";
import cors from "cors"

console.clear()

dotenv.config()

const PORT = process.env.PORT || 3000;
const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})

app.use(routes)