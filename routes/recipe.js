const Router = require ('express');
const { save, fetch} = require ('../controllers/recipe');
const { validarCampos} = require ('../middlewares/validar-campos');


const routes = Router ();

routes.put('/save',[
  validarCampos
], save);

routes.get('/fetch',[
  validarCampos
], fetch)

module.exports = routes;