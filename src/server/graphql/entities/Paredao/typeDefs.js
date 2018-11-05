export const typeDefs = `
  scalar Date

  extend type Query {
    getLastestParedao: Paredao
  }
  type Paredao {
    _id: ID!
    tempoInicio: String!
    tempoFim: String!
    participantes: [Participante]
  }
  input Participantes {
    _id: String!
  }
  input ParedaoInput {
    tempoInicio: String!
    tempoFim: String!
    participantes: [Participantes]
  }
  extend type Mutation {
    createParedao(input: ParedaoInput) : Paredao
    deleteParedao(_id: ID!) : Paredao
   }
`;

export default typeDefs;
