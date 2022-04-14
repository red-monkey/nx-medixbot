import { ApolloServer } from 'apollo-server-express';
import { merge } from 'lodash';
import { dataSources } from '../datasources';
import { context } from '../utils';
import { authResolver, userResolver } from './resolvers';
import { AppSchema, AuthSchema, UserSchema } from './schemas';

const apolloServer = new ApolloServer({
  typeDefs: [AppSchema, AuthSchema, UserSchema],
  resolvers: merge(
    {
      Query: {},
      Mutation: {},
    },
    authResolver,
    userResolver
  ),
  mocks: true,
  mockEntireSchema: false,
  context,
  dataSources,
});

export default apolloServer;
