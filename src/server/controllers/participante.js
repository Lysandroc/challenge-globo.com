import Participante from '../models/Participante';

module.exports.getAllParticipantes = (req, res, next) => {
  Participante.find({}, (err, participantes) => {
    if (err) {
      res.send(err);
    } else if (!participantes) {
      res.send(400);
    } else {
      res.send(participantes);
    }
  });
};

module.exports.getParticipanteById = (req, res, next) => {
  Participante.findById(req.params.id).then((err, participante) => {
    if (err) {
      res.send(err);
    } else if (!participante) {
      res.send(400);
    } else {
      res.send(participante);
    }
  }).catch(next);
};

module.exports.addParticipantes = (req, res, next) => {
  new Participante(req.body).save((err, newParticipante) => {
    if (err) {
      res.send(err);
    } else if (!newParticipante) {
      res.send(400);
    } else {
      res.send(newParticipante);
    }
    next();
  });
};
