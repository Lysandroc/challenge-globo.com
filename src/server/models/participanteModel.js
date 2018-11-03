import mongoose, { Types } from 'mongoose';

const { ObjectId } = Types;

// Overwrite method that return BJSON
ObjectId.prototype.valueOf = function bjsonToString() {
  return this.toString();
};

const ParticipanteSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  tipoDocumento: { type: String, default: 'participante' },
}, { timestamps: true, collection: 'bbb2018' });

module.exports = mongoose.model('Participante', ParticipanteSchema);
