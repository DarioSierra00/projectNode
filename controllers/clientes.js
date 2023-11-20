const Cliente = require('../models/clientes');

const addCliente = async (req,res) =>{
    const cliente = req.body;

    const newCliente = new Cliente(cliente)

    try {
        await newCliente.save();
        res.status(201).json(newCliente)
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const getCliente = async (req,res) =>{
    try {
        const cliente = await Cliente.find()
        res.status(200).json(cliente)
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const getClienteById = async (req,res) =>{
    const id = req.params.id;
    try {
        const cliente = await Cliente.findById(id)
        if(cliente){
            res.status(200).json(cliente)
        }
        else{
            res.status(400).json("Id errónea")
        }
    } catch (error) {
        res.status(500).json({message : error})

    }
}

const editCliente = async (req,res) =>{
    const id = req.params.id;
    const body = req.body;
    try {
        const clienteEditado = await Cliente.findByIdAndUpdate(id,body);
        if(clienteEditado){
            res.status(200).json(clienteEditado)
        }
        else{
            res.status(400).json("Id errónea")
        }
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const deleteCliente = async (req,res) =>{
    const id = req.params.id;
    
    try {
        const cliente = await Cliente.findByIdAndDelete(id)
        res.status(200).json(cliente)
    } catch (error) {
        res.status(500).json({message : error})
    }
}

module.exports = {getCliente,getClienteById,addCliente,editCliente,deleteCliente}