const express = require('express');
const router = express.Router(); 
const {getProduct,getProductById,addProduct,editProduct,deleteProduct} = require('../controllers/producto');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validation-fields');

router
.route('/')

.get(getProduct)


.post([
    check('tipoProducto','El tipoProducto no debe estar vacío').notEmpty(),
    check('tipoProducto','El tipoProducto debe ser un string').isString(),
    check('precio','El precio debe ser un numero').isInt(),
    check('nombre','El nombre no debe estar vacío').notEmpty(),
    check('nombre','El nombre no debe estar vacío').isString(),
    validateFields
],addProduct)

router
.route('/:id')

.get([
    check('id','no es un id valido').isMongoId()
],getProductById)

.put([
    check('tipoProducto','El tipoProducto no debe estar vacío').notEmpty(),
    check('tipoProducto','El tipoProducto debe ser un string').isString(),
    check('precio','El precio debe ser un numero').isInt(),
    check('nombre','El nombre no debe estar vacío').notEmpty(),
    check('nombre','El nombre no debe estar vacío').isString(),
    validateFields
],editProduct)


.delete([

],deleteProduct)

module.exports = router;