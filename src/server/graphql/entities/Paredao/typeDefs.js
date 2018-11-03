const typeDefs = `
  extend type Query {
    getLastestParedao: [Paredao]
  }

  type Paredao {
    _id: ID!
    tempoInicio: Date!
    tempoFim: Date!
    participantes: [Participante]
  }
`;

module.exports = typeDefs;
