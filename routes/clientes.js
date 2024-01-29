const express = require('express')
const { getCliente, addCliente, getClienteById, editCliente, deleteCliente } = require('../controllers/clientes')
const { route } = require('./producto')
const { validateFields } = require('../middlewares/validation-fields')
const { check } = require('express-validator')
const {existsEmail} = require('../helpers/dbValidators')
const router = express.Router()

router
.route('/')

.get(getCliente)

.post([
    check('nombreCliente','El nombreCliente no debe estar vacío').notEmpty(),
    check('nombreCliente','El nombreCliente debe ser un string').isString(),
    check('edad','El edad debe ser un numero').isInt(),
    check('email','El genero no debe estar vacío').notEmpty(),
    check('email','El genero no debe estar vacío').isString(),
    check('email').custom(existsEmail),
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
    check('email','El genero no debe estar vacío').notEmpty(),
    check('email','El genero no debe estar vacío').isString(),
    check('email').custom(existsEmail),
    validateFields
],editCliente)

.delete([
    check('id','no es un id valido').isMongoId()
],deleteCliente)

module.exports = router;