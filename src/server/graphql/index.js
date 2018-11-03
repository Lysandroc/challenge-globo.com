import { makeExecutableSchema } from 'graphql-tools';
import participanteResolver from './resolvers/participanteResolver';
import participanteType from './types/participanteType';

module.exports = makeExecutableSchema({
  typeDefs: participanteType,
  resolvers: participanteResolver
});
