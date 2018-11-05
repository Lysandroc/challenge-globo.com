const typeDefs = `
  scalar Date

  extend type Query {
    getLastestParedao: Paredao
  }
  type Paredao {
    _id: ID!
    tempoInicio: Date!
    tempoFim: Date!
    participantes: [Participante]
  }
  input ParedaoInput {
    nome: String!
    idade: Int
   }
  extend type Mutation {
    createParedao(input: ParedaoInput) : Paredao
    deleteParedao(_id: ID!) : Paredao
   }
`;

module.exports = typeDefs;
