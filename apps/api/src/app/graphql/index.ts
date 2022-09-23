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
  hospitalResolver,
  clinicResolver,
  oxygenResolver,
  glucoseResolver,
  breathingRateResolver,
  sleepResolver,
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
  HospitalSchema,
  ClinicSchema,
  OxygenSaturationLevelSchema,
  SleepSchema,
  BreathingRateSchema,
  GlucoseLevelSchema,
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
    HospitalSchema,
    ClinicSchema,
    OxygenSaturationLevelSchema,
    SleepSchema,
    BreathingRateSchema,
    GlucoseLevelSchema,
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
    labTestResolver,
    hospitalResolver,
    clinicResolver,
    oxygenResolver,
    glucoseResolver,
    breathingRateResolver,
    sleepResolver
  ),
  mocks: true,
  mockEntireSchema: false,
  context,
  dataSources,
  introspection: true,
});

export default apolloServer;
