import conn from "../conn.js"

const Schema = conn.Schema;

const filmeSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        required: true
    }
})

const filme = conn.model("filme", filmeSchema);

export default filme;