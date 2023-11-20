const Marca = require('../models/marca');

const addMarca = async (req,res) =>{
    const marca = req.body;

    const newMarca = new Marca(marca)

    try {
        await newMarca.save();
        res.status(201).json(newMarca)
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const getMarca = async (req,res) =>{
    try {
        const marca = await Marca.find()
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const getMarcaById = async (req,res) =>{
    const id = req.params.id;
    try {
        const marca = await Marca.findById(id)
    } catch (error) {
        res.status(500).json({message : error})

    }
}

const editMarca = async (req,res) =>{
    const id = req.params.id;
    const body = req.body;
    try {
        if(id && body){
            await Marca.findByIdAndUpdate(id,body);
            const marcaActualizada = await getMarcaById(id)
            res.status(200).json(marcaActualizada)
        }
        
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const deleteMarca = async (req,res) =>{
    const id = req.params.id;
    
    try {
        await Marca.findByIdAndDelete(id)
    } catch (error) {
        res.status(500).json({message : error})
    }
}

module.exports = {getMarca,getMarcaById,addMarca,editMarca,deleteMarca}