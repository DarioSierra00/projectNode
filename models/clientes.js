const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cliente = new Schema({
    nombreCliente : {
        type: String,
        required:true
    },
    genero : {
        type: String,
        required:true
    },
    edad : {
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Cliente', Cliente);