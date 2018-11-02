const mongoose = require('mongoose');

const ParedaoSchema = new mongoose.Schema({
  dia: { type: Date, unique: true, default: new Date() },
  tipoDocumento: { type: String, default: 'paredao' },
  participantes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Participante'
    }
  ],
}, { timestamps: true, collection: 'bbb2018' });

module.exports = mongoose.model('ParedaoSchema', ParedaoSchema);
