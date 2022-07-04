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
  medicineImageResolver,
  categoryResolver,
  productResolver,
  orderResolver,
} from './resolvers';
import {
  AppSchema,
  AuthSchema,
  UserSchema,
  BlogSchema,
  AppointmentSchema,
  MedecineImageSchema,
  CategorySchema,
  ProductSchema,
  OrderSchema,
} from './schemas';

const apolloServer = new ApolloServer({
  typeDefs: [
    AppSchema,
    AuthSchema,
    UserSchema,
    BlogSchema,
    AppointmentSchema,
    MedecineImageSchema,
    CategorySchema,
    ProductSchema,
    OrderSchema,
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
    appointmentResolver,
    medicineImageResolver,
    categoryResolver,
    productResolver,
    orderResolver
  ),
  mocks: true,
  mockEntireSchema: false,
  context,
  dataSources,
  introspection: true,
});

export default apolloServer;
