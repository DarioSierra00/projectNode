const express = require('express');
const { getUser, addUser, getUserById, editUser, deleteUser } = require('../controllers/usuario');
const { existsEmailUsuario, existsUsername } = require('../helpers/dbValidators');
const { validateFields } = require('../middlewares/validation-fields');
const { check } = require('express-validator');
const router = express.Router()

router
.route('/')

.get(getUser)

.post([
    check('email','El email debe ser un string').isString(),
    check('username','El username debe ser string').isString(),
    check('name','El nombre no debe estar vacío').isString(),
    check('role','El role no debe estar vacío').isString(),
    check('password','El password no debe estar vacío').isString(),
    check('email').custom(existsEmailUsuario),
    check('username').custom(existsUsername),
    validateFields
],addUser)


router
.route('/:id')

.get([
    check('id','no es un id valido').isMongoId()
],getUserById)

.put([
    check('email','El email debe ser un string').isString(),
    check('username','El username debe ser string').isString(),
    check('name','El nombre no debe estar vacío').isString(),
    check('role','El role no debe estar vacío').isString(),
    check('password','El password no debe estar vacío').isString(),
    check('email').custom(existsEmailUsuario),
    check('username').custom(existsUsername),
    validateFields
],editUser)

.delete([
    check('id','no es un id valido').isMongoId()
],deleteUser)

module.exports = router;