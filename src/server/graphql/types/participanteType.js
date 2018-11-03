const typeDefs = `
  type Participante {
    _id: ID!
    nome: String!
    idade: Int
  }
  type Query {
    getParticipanteById(_id: ID!): Participante
    getAllParticipantes: [Participante]
  }
  input ParticipanteInput {
    nome: String!
    idade: Int
   }
  type Mutation {
    createParticipante(input: ParticipanteInput) : Participante
    updateParticipante(_id: ID!, input: ParticipanteInput): Participante
    deleteParticipante(_id: ID!) : Participante
   }
  `;

module.exports = typeDefs;
