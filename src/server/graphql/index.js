import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
import { typeDefs as Participante, resolvers as participanteResolvers } from './entities/Participante';
import { typeDefs as Paredao, resolvers as paredaoResolvers } from './entities/Paredao';

const Query = `
  type Query {
    _empty: String
  }
`;

const resolvers = {};

module.exports = makeExecutableSchema({
  typeDefs: [Query, Participante, Paredao],
  resolvers: merge(resolvers, participanteResolvers, paredaoResolvers),
});
