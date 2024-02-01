const User = require("../models/usuario")

const addUser = async (req,res) =>{
    const user = req.body;
    const bcryptjs = require("bcryptjs")

    const salt = bcryptjs.genSaltSync();
    encryptedPassword = bcryptjs.hashSync( user.password, salt);
    const newUser = new User({email : user.email, username : user.username, name : user.name, role : "USER_ROLE", password : encryptedPassword, active : true})

    try {
        await newUser.save();
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const getUser = async (req,res) =>{
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const getUserById = async (req,res) =>{
    const id = req.params.id;
    try {
        const user = await User.findById(id)
        if(user){
            res.status(200).json(user)
        }
        else{
            res.status(400).json("Id errónea")
        }
    } catch (error) {
        res.status(500).json({message : error})

    }
}

const editUser = async (req,res) =>{
    const id = req.params.id;
    const body = req.body;
    try {
        const userEditado = await User.findByIdAndUpdate(id,body);
        if(userEditado){
            res.status(200).json(userEditado)
        }
        else{
            res.status(400).json("Id errónea")
        }
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const deleteUser = async (req,res) =>{
    const id = req.params.id;
    
    try {
        const user = await User.findByIdAndDelete(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message : error})
    }
}

module.exports = {addUser,getUser,getUserById,editUser,deleteUser}