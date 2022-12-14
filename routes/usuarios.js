
const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarCampos,
    validarJWT,
} = require('../middlewares');


const {  emailExiste } = require('../helpers/db-validators');

const { usuariosGet,
        
        usuariosPost,
        
        usuariosPatch } = require('../controllers/usuarios');

const router = Router();


router.get('/', usuariosGet );

router.post('/',[
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom( emailExiste ),
    validarCampos
], usuariosPost );

router.patch('/', usuariosPatch );





module.exports = router;