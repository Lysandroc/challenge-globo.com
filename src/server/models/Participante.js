const mongoose = require('mongoose');

const participantesSchema = new mongoose.Schema({
  cpf: { type: String, unique: true },
  nome: String
}, { timestamps: true });

console.log(participantesSchema);
