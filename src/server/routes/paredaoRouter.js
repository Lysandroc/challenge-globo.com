import paredaoCtrl from '../controllers/paredaoCtrl';

module.exports = (router) => {
  // Adicionar um paredao
  router
    .route('/addParedao').post(paredaoCtrl.addParedao);

  // Consultar todos os paredoes
  router
    .route('/getAllParedoes').get(paredaoCtrl.getAllParedoes);

  // Consultar o último paredão
  router
    .route('/getLastestParedao').get(paredaoCtrl.getLastestParedao);

  // Consultar especifico paredão
  router
    .route('/getParedaoById/:id').get(paredaoCtrl.getParedaoById);
};
