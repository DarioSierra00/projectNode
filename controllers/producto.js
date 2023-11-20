const Producto = require('../models/producto');

const addProduct = async (req,res) =>{
    const product = req.body;

    const newProduct = new Producto(product)

    try {
        await newProduct.save();
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const getProduct = async (req,res) =>{
    try {
        const product = await Producto.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const getProductById = async (req,res) =>{
    const id = req.params.id;
    try {
        const product = await Producto.findById(id)
        if(product){
            res.status(200).json(product)
        }
        else{
            res.status(400).json("Id errónea")
        }
    } catch (error) {
        res.status(500).json({message : error})

    }
}

const editProduct = async (req,res) =>{
    const id = req.params.id;
    const body = req.body;
    try {
        const productoEditado = await Producto.findByIdAndUpdate(id,body);
        if(productoEditado){
            res.status(200).json(productoEditado)
        }
        else{
            res.status(400).json("Id errónea")
        }
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const deleteProduct = async (req,res) =>{
    const id = req.params.id;
    
    try {
        const producto = await Producto.findByIdAndDelete(id)
        res.status(200).json(producto)
    } catch (error) {
        res.status(500).json({message : error})
    }
}

module.exports = {getProduct,getProductById,addProduct,editProduct,deleteProduct}