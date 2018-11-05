
import Paredao from '../../../models/paredaoModel';
import Participante from '../../../models/participanteModel';

export const resolver = {
  Query: {
    async getLastestParedao() {
      const r = await Paredao.findOne({ tipoDocumento: 'paredao' })
        .sort({ createdAt: -1 })
        .populate('participantes')
        .exec();
      return r;
    },
  },
  Mutation: {
    async createParedao(root, { input }) {
      // Precisa melhorar a modelagem para armazenar o historico dos votos de cada paredao
      input.participantes.forEach(({ _id }) => {
        // Participante.findOneAndUpdate({ _id }, { quantidadeVotosUltimoParedao: 0 }, () => {});
        Participante.findOneAndUpdate({ _id }, { quantidadeVotosUltimoParedao: 0 }).exec();
      });

      const { _id } = await new Paredao(input).save();
      const r = await Paredao.findOne({ _id })
        .sort({ createdAt: -1 })
        .populate('participantes')
        .exec();
      return r;
    },
    async deleteParedao(root, { _id }) {
      const r = await Paredao.findOneAndRemove({ _id });
      return r;
    }
  }
};

export default resolver;
