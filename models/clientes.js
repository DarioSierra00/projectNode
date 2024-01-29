const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cliente = new Schema({
    nombreCliente : {
        type: String,
        required:true
    },
    dni : {
        type: String,
        required:true
    },
    edad : {
        type:Number,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    }
})

module.exports = mongoose.model('Cliente', Cliente);