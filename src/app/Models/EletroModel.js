const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const EletroSchema = new Schema({
    id: ObjectId,
    nome: String,
    tipo: String,
    preco: Number,
});

const EletroModel = mongoose.model('Eletro', EletroSchema);

module.exports = EletroModel;