const typeDefs = `
  extend type Query {
    getParticipanteById(_id: ID!): Participante
    getAllParticipantes: [Participante]
  }
  type Participante {
    _id: ID!
    nome: String!
    idade: Int
  }
  input ParticipanteInput {
    nome: String!
    idade: Int
   }
  extend type Mutation {
    createParticipante(input: ParticipanteInput) : Participante
    updateParticipante(_id: ID!, input: ParticipanteInput): Participante
    deleteParticipante(_id: ID!) : Participante
   }
`;

module.exports = typeDefs;
