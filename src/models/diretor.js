import conn from "../conn.js"

const Schema = conn.Schema;

const diretorSchema = new Schema({
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    }
})

const diretor = conn.model("diretor", diretorSchema);

export default diretor;