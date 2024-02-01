const express = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validation-fields');
const { login } = require('../controllers/usuario');
const router = express.Router()

router
.route("/")
.post([
    check('email', "El email no existe en base de datos").isString(),
    check("password", "La contraseña no es correcta").isString(),
    validateFields
],login)

module.exports = router;