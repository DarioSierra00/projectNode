const Cliente = require('../models/clientes')
const Usuario = require('../models/usuario')


const existsEmailClient = async (email,{req}) =>{
    const emailDb = await Cliente.findOne({email});
    if(emailDb && emailDb.id !== req.params.id){
        throw new Error(`Email ${email} already exists in database`)
    }
}

const existsEmailUsuario = async (email,{req}) =>{
    const emailDb = await Usuario.findOne({email});
    if(emailDb && emailDb.id !== req.params.id){
        throw new Error(`Email ${email} already exists in database`)
    }
}

const existsUsername = async (username,{req}) =>{
    const usernameDb = await Usuario.findOne({username});
    if(usernameDb && usernameDb.username !== req.params.username){
        throw new Error(`User ${username} already exists in database`)
    }
}


module.exports = {existsEmailClient,existsEmailUsuario,existsUsername}