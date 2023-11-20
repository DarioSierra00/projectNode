const express = require('express')
const { validateFields } = require('../middlewares/validation-fields')
const { check } = require('express-validator')
const { addMarca, getMarcaById, getMarca, editMarca, deleteMarca } = require('../controllers/marca')
const router = express.Router()

router
.route('/')

.get(getMarca)

.post([
    check('nombre','El nombre no debe estar vacío').notEmpty(),
    check('nombre','El nombre debe ser un string').isString(),
    validateFields
],addMarca)


router
.route('/:id')

.get([
    check('id','no es un id valido').isMongoId()
],getMarcaById)

.put([
    check('nombre','El nombre no debe estar vacío').notEmpty(),
    check('nombre','El nombre debe ser un string').isString(),
    validateFields
],editMarca)

.delete([
    check('id','no es un id valido').isMongoId()
],deleteMarca)

module.exports = router;