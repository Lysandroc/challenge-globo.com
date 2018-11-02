import Participante from '../models/participanteModel';

module.exports.getAllParticipantes = (req, res, next) => {
  Participante.find({ tipoDocumento: 'participante' }, (err, participantes) => {
    if (err) {
      res.send(err);
    } else if (!participantes) {
      res.send(204);
    } else {
      res.send(participantes);
    }
    next();
  });
};

module.exports.getParticipanteById = (req, res, next) => {
  Participante.findById(req.params.id).then((err, participante) => {
    if (err) {
      res.send(err);
    } else if (!participante) {
      res.send(204);
    } else {
      res.send(participante);
    }
  }).catch(next);
};

module.exports.addParticipante = (req, res, next) => {
  if (req.body.tipoDocumento !== 'participante') {
    res.send('documento inválido.');
    next();
  }

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
