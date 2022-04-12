import { UserModel, TokenModel } from '@medixbot/models';
import { ApolloServer } from 'apollo-server-express';
import { merge } from 'lodash';
import { TokenDataSource, UserDataSource } from '../dataSources';
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
  context,
  dataSources: () => ({
    users: new UserDataSource(UserModel),
    tokens: new TokenDataSource(TokenModel),
  }),
});

export default apolloServer;
