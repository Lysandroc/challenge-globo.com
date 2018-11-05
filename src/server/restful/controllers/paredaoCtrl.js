import Paredao from '../../models/paredaoModel';
import Participante from '../../models/participanteModel';

module.exports.addParedao = (req, res, next) => {
  if (req.body.tipoDocumento !== 'paredao') {
    res.send('documento inválido.');
    next();
  }

  // Precisa melhorar a modelagem para armazenar o historico dos votos de cada paredao
  req.body.participantes.forEach(({ _id }) => {
    Participante.findOneAndUpdate({ _id }, { quantidadeVotosUltimoParedao: 0 }, () => {});
  });

  new Paredao(req.body).save((err, newParedao) => {
    if (err) {
      res.send(err);
    } else if (!newParedao) {
      res.send(204);
    } else {
      res.send(newParedao);
    }
    next();
  });
};

module.exports.getAllParedoes = (req, res, next) => {
  Paredao.find({ tipoDocumento: 'paredao' }, (err, paredoes) => {
    if (err) {
      res.send(err);
    } else if (!paredoes) {
      res.send(204);
    } else {
      res.send(paredoes);
    }
    next();
  });
};

module.exports.getLastestParedao = (req, res, next) => {
  Paredao.findOne({}).sort({ createdAt: -1 })
    .populate('participantes')
    .exec((err, ultimoParedao) => {
      if (err) {
        res.send(err);
      } else if (!ultimoParedao) {
        res.send(204);
      } else {
        res.send(ultimoParedao);
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
