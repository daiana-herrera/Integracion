const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');




const usuariosPost = async(req, res = response) => {
    
    const {  email, password } = req.body;
    const usuario = new Usuario({  email, password });
    console.log(usuario)

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await usuario.save();

      // Generar el JWT
      const token = await generarJWT( usuario.id );

    res.json({
        email:usuario.email,
        localId: usuario.localId ,
        expiresIn:usuario.expiresIn ,
        idToken: token
    });
}

module.exports = {
    usuariosPost
   
}