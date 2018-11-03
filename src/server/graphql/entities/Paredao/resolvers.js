
import Paredao from '../../../models/paredaoModel';

module.exports = {
  Query: {
    async getLastestParedao() {
      const r = await Paredao.findOne({})
        .sort({ createdAt: -1 })
        .populate('participantes')
        .exec();
      return r;
    },
  },
  // Mutation: {
  // async createParticipante(root, { input }) {
  //   const newObj = await new Participante(input).save();
  //   return newObj;
  // },
  // async updateParticipante(root, { _id, input }) {
  //   const r = await Participante.findOneAndUpdate({ _id }, input, {
  //     new: true
  //   });
  //   return r;
  // },
  // async deleteParticipante(root, { _id }) {
  //   const r = await Participante.findOneAndRemove({ _id });
  //   return r;
  // }
  // }
};
