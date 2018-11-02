import participanteRouter from './participanteRouter';
import paredaoRouter from './paredaoRouter';

module.exports = (router) => {
  participanteRouter(router);
  paredaoRouter(router);
};
