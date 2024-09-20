import conn from "../conn.js"

const Schema = conn.Schema;

const produtoraSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    }
})

const produtora = conn.model("produtora", produtoraSchema);

export default produtora;