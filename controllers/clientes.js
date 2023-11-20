const Cliente = require('../models/clientes');

const addCliente = async (req,res) =>{
    const cliente = req.body;

    const newCliente = new Cliente(cliente)

    try {
        await newCliente.save();
        res.status.json(201).json(newCliente)
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const getCliente = async (req,res) =>{
    try {
        const cliente = await Cliente.find()
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const getClienteById = async (req,res) =>{
    const id = req.params.id;
    try {
        const cliente = await Cliente.findById(id)
    } catch (error) {
        res.status(500).json({message : error})

    }
}

const editCliente = async (req,res) =>{
    const id = req.params.id;
    const body = req.body;
    try {
        if(id && body){
            await Cliente.findByIdAndUpdate(id,body);
        }
        
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const deleteMarca = async (req,res) =>{
    const id = req.params.id;
    
    try {
        await Cliente.findByIdAndDelete(id)
    } catch (error) {
        res.status(500).json({message : error})
    }
}

module.exports = {getCliente,getClienteById,addCliente,editCliente,deleteMarca}