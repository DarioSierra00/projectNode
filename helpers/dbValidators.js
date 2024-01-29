const Cliente = require('../models/clientes')

const existsEmail = async (email,{req}) =>{
    const emailDb = await Cliente.findOne({email});
    if(emailDb && emailDb.id !== req.params.id){
        throw new Error(`Email ${email} already exists in database`)
    }
}

module.exports = {existsEmail}