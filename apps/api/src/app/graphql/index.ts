import { ApolloServer } from 'apollo-server-express';
import { GraphQLUpload } from 'graphql-upload';
import { merge } from 'lodash';
import { dataSources } from '../datasources';
import { context } from '../utils';
import {
  authResolver,
  blogResolver,
  userResolver,
  appointmentResolver,
} from './resolvers';
import {
  AppSchema,
  AuthSchema,
  UserSchema,
  BlogSchema,
  AppointmentSchema,
} from './schemas';

const apolloServer = new ApolloServer({
  typeDefs: [AppSchema, AuthSchema, UserSchema, BlogSchema, AppointmentSchema],
  resolvers: merge(
    {
      Query: {},
      Mutation: {},
      Upload: GraphQLUpload,
    },
    authResolver,
    userResolver,
    blogResolver,
    appointmentResolver
  ),
  mocks: true,
  mockEntireSchema: false,
  context,
  dataSources,
  introspection: true,
});

export default apolloServer;
