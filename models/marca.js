const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Marca = new Schema({
    nombre : {
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Marca', Marca);