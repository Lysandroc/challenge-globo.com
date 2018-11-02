import participanteCtrl from '../controllers/participanteCtrl';

module.exports = (router) => {
  // Lista de todos os participantes atuais.
  router
    .route('/getAllParticipantes').get(participanteCtrl.getAllParticipantes);

  // Buscar por participante especifico
  router
    .route('/getParticipanteById/:id').get(participanteCtrl.getParticipanteById);

  // Adicionar um participante
  router
    .route('/addParticipante').post(participanteCtrl.addParticipante);
};
