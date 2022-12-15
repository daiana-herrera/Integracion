
const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarCampos,
    validarJWT,
} = require('../middlewares');


const {  emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');

const { 
        usuariosPost,
        } = require('../controllers/usuarios');

const router = Router();


router.post('/signup',[
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom( emailExiste ),
    validarCampos
], usuariosPost );

module.exports = router;