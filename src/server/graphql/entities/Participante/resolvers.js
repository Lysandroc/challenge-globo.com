
import Participante from '../../../models/participanteModel';

module.exports = {
  Query: {
    async getParticipanteById(root, { _id }) {
      const r = await Participante.findById(_id);
      return r;
    },
    async getAllParticipantes() {
      const r = await Participante.find({ tipoDocumento: 'participante' }).exec();
      return r || [];
    }
  },
  Mutation: {
    async createParticipante(root, { input }) {
      const newObj = await new Participante(input).save();
      return newObj;
    },
    async updateParticipante(root, { _id, input }) {
      const r = await Participante.findOneAndUpdate({ _id }, input, {
        new: true
      });
      return r;
    },
    async deleteParticipante(root, { _id }) {
      const r = await Participante.findOneAndRemove({ _id });
      return r;
    }
  }
};
