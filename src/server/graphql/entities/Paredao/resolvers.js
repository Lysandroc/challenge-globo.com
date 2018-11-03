
import Paredao from '../../../models/paredaoModel';

module.exports = {
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
      const newObj = await new Paredao(input).save();
      return newObj;
    },
    async deleteParedao(root, { _id }) {
      const r = await Paredao.findOneAndRemove({ _id });
      return r;
    }
  }
};
