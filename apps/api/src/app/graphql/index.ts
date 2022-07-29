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
  medicineImageResolver,
  categoryResolver,
  productResolver,
  orderResolver,
  appointmentResolver,
  labTestResolver,
} from './resolvers';
import {
  AppSchema,
  AuthSchema,
  UserSchema,
  BlogSchema,
  foodRecognitionSchema,
  AppointmentSchema,
  MedecineImageSchema,
  CategorySchema,
  ProductSchema,
  OrderSchema,
  LabTestSchema,
} from './schemas';

const apolloServer = new ApolloServer({
  typeDefs: [
    AppSchema,
    AuthSchema,
    UserSchema,
    BlogSchema,
    foodRecognitionSchema,
    AppointmentSchema,
    MedecineImageSchema,
    CategorySchema,
    ProductSchema,
    OrderSchema,
    LabTestSchema,
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
    foodRecognitionResolver,
    appointmentResolver,
    medicineImageResolver,
    categoryResolver,
    productResolver,
    orderResolver,
    labTestResolver
  ),
  mocks: true,
  mockEntireSchema: false,
  context,
  dataSources,
  introspection: true,
});

export default apolloServer;
