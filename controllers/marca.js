const Marca = require('../models/marca');

const addMarca = async (req,res) =>{
    const marca = req.body;

    const newMarca = new Marca(marca)

    try {
        await newMarca.save();
        res.status(200).json(newMarca)
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const getMarca = async (req,res) =>{
    try {
        const marca = await Marca.find()
        res.status(200).json(marca)

    } catch (error) {
        res.status(500).json({message : error})
    }
}

const getMarcaById = async (req,res) =>{
    const id = req.params.id;
    try {
        const marca = await Marca.findById(id)
        if(marca){
            res.status(200).json(marca)
        }
        else{
            res.status(400).json("Id errónea")
        }
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const editMarca = async (req,res) =>{
    const id = req.params.id;
    const body = req.body;
    try {
        const marcaEditado = await Marca.findByIdAndUpdate(id,body);
        if(marcaEditado){
            res.status(200).json(marcaEditado)
        }
        else{
            res.status(400).json("Id errónea")
        }
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const deleteMarca = async (req,res) =>{
    const id = req.params.id;
    try {
        if(id){
            const marcaDel = await Marca.findByIdAndDelete(id);
            if(marcaDel != null){
                res.status(200).json(marcaDel);
            }else{
                res.status(400).json("Id errónea")
            }
        }
    } catch (error) {
        res.status(500).json({message : error})
    }
}

module.exports = {getMarca,getMarcaById,addMarca,editMarca,deleteMarca}