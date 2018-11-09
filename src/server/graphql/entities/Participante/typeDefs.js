export const typeDefs = `
  extend type Query {
    ParticipanteById(_id: ID!): Participante
    getAllParticipantes: [Participante]
  }
  type Participante {
    _id: ID!
    nome: String!
    idade: Int
    quantidadeVotosUltimoParedao: Int
  }
  input ParticipanteInput {
    nome: String!
    idade: Int
    quantidadeVotosUltimoParedao: Int
  }
  extend type Mutation {
    createParticipante(input: ParticipanteInput) : Participante
    incrementVotosParedaoParticipante(_id: ID!) : Participante
    updateParticipante(_id: ID!, input: ParticipanteInput): Participante
    deleteParticipante(_id: ID!) : Participante
   }
`;

export default typeDefs;
