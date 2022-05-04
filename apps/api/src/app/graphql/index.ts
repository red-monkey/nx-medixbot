import { ApolloServer } from 'apollo-server-express';
import { GraphQLUpload } from 'graphql-upload';
import { merge } from 'lodash';
import { dataSources } from '../datasources';
import { context } from '../utils';
import {
  authResolver,
  blogResolver,
  userResolver,
  foodRecognitionResolver,
} from './resolvers';
import {
  AppSchema,
  AuthSchema,
  UserSchema,
  BlogSchema,
  foodRecognitionSchema,
} from './schemas';

const apolloServer = new ApolloServer({
  typeDefs: [
    AppSchema,
    AuthSchema,
    UserSchema,
    BlogSchema,
    foodRecognitionSchema,
  ],
  resolvers: merge(
    {
      Query: {},
      Mutation: {},
      Upload: GraphQLUpload,
    },
    authResolver,
    userResolver,
    blogResolver,
    foodRecognitionResolver
  ),
  mocks: true,
  mockEntireSchema: false,
  context,
  dataSources,
  introspection: true,
});

export default apolloServer;
