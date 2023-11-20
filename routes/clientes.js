const express = require('express')
const { getCliente, addCliente, getClienteById, editCliente, deleteCliente } = require('../controllers/clientes')
const { route } = require('./producto')
const { validateFields } = require('../middlewares/validation-fields')
const { check } = require('express-validator')
const router = express.Router()

router
.route('/')

.get(getCliente)

.post([
    check('nombreCliente','El nombreCliente no debe estar vacío').notEmpty(),
    check('nombreCliente','El nombreCliente debe ser un string').isString(),
    check('edad','El edad debe ser un numero').isInt(),
    check('genero','El genero no debe estar vacío').notEmpty(),
    check('genero','El genero no debe estar vacío').isString(),
    validateFields
],addCliente)


router
.route('/:id')

.get([
    check('id','no es un id valido').isMongoId()
],getClienteById)

.put([
    check('nombreCliente','El nombreCliente no debe estar vacío').notEmpty(),
    check('nombreCliente','El nombreCliente debe ser un string').isString(),
    check('edad','El edad debe ser un numero').isInt(),
    check('genero','El genero no debe estar vacío').notEmpty(),
    check('genero','El genero no debe estar vacío').isString(),
    validateFields
],editCliente)

.delete([
    check('id','no es un id valido').isMongoId()
],deleteCliente)

module.exports = router;