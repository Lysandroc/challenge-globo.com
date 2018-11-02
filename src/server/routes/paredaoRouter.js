import paredaoCtrl from '../controllers/paredaoCtrl';

module.exports = (router) => {
  // Adicionar um paredao
  router
    .route('/addParedao').post(paredaoCtrl.addParedao);

  // Consultar todos os paredoes
  router
    .route('/getAllParedoes').get(paredaoCtrl.getAllParedao);

  // Consultar especifico paredao
  router
    .route('/getParedaoById/:id').get(paredaoCtrl.getParedaoById);
};
