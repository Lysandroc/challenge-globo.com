import {
  makeExecutableSchema
} from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  type Participante {
    _id: ID!
    nome: String!
    idade: Int
  }
  type Query {
    allParticipantes: [Participante]
  }
`;

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
