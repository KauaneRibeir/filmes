import "dotenv/config";
import e from "express";
import diretorRouter from "./routes/diretor.js"
import filmeRouter from "./routes/filme.js"
import produtoraRouter from "./routes/produtora.js"

const app = e();

app.use(e.json())

app.use("/diretor", diretorRouter)
app.use("/filme", filmeRouter)
app.use("/produtora", produtoraRouter)

app.listen(process.env.API_PORT, () => {
    console.log(`Server running in port ${process.env.API_PORT}`)
});