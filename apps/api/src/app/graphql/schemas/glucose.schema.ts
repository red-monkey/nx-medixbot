import { gql } from 'apollo-server-express';

export default gql`
  type TGlucose {
    id: ID
    value: Float
    patient: TUser
    date: String
    time: String
  }
  input IGlucoseInput {
    value: Float!
    patient: ID!
    date: String!
    time: String!
  }
  type TPaginatedGlucose {
    results: [TGlucose]!
    page: Int!
    limit: Int!
    totalPages: Int!
    totalResults: Int!
  }

  # Queries
  type Query {
    getGlucoseTest(glucoseId: ID!): TGlucose
    getMyGlucoseTests(limit: Int, page: Int): TPaginatedGlucose!
  }

  # Mutations
  type Mutation {
    createGlucoseTest(data: IGlucoseInput!): TGlucose
    updateGlucoseTest(glucoseId: ID!, data: IGlucoseInput!): TGlucose
    deleteGlucoseTest(glucoseId: ID!): String!
  }
`;
