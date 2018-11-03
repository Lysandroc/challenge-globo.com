
import Participante from '../models/participanteModel';

module.exports = {
  Query: {
    async allParticipantes() {
      const r = await Participante.find({ tipoDocumento: 'participante' }).exec();
      return r || [];
    }
  }
};
