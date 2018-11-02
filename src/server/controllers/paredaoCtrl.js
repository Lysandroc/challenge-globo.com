import Paredao from '../models/paredaoModel';

module.exports.addParedao = (req, res, next) => {
  new Paredao(req.body).save((err, newParedao) => {
    if (err) {
      res.send(err);
    } else if (!newParedao) {
      res.send(400);
    } else {
      res.send(newParedao);
    }
    next();
  });
};

module.exports.getAllParedao = (req, res, next) => {
  Paredao.find({ tipoDocumento: 'paredao' }, (err, paredoes) => {
    if (err) {
      res.send(err);
    } else if (!paredoes) {
      res.send(400);
    } else {
      res.send(paredoes);
    }
    next();
  });
};

module.exports.getParedaoById = (req, res, next) => {
  Paredao.findById(req.params.id).then((err, paredao) => {
    if (err) {
      res.send(err);
    } else if (!paredao) {
      res.send(400);
    } else {
      res.send(paredao);
    }
  }).catch(next);
};
