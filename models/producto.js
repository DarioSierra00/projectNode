const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Producto = new Schema({
    tipoProducto : {
        type: String,
        required:true
    },
    precio : {
        type : Number,
        required:true
    },
    nombre : {
        type : String,
        required:true
    }
})

module.exports = mongoose.model('Producto', Producto);