
import Participante from '../../../models/participanteModel';

export const resolver = {
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
      const r = await new Participante(input).save();
      return r;
    },
    async updateParticipante(root, { _id, input }) {
      const r = await Participante.findOneAndUpdate({ _id }, input, {
        new: true
      });
      return r;
    },
    async incrementVotosParedaoParticipante(root, { _id }) {
      const r = await Participante.findOneAndUpdate({ _id },
        { $inc: { quantidadeVotosUltimoParedao: 1 } },
        { new: true });
      return r;
    },
    async deleteParticipante(root, { _id }) {
      const r = await Participante.findOneAndRemove({ _id });
      return r;
    }
  }
};

export default resolver;
