import { gql } from 'apollo-server-express';

export default gql`
  type TSleep {
    id: ID
    position: String
    Duration: String
    patient: TUser
    date: String
  }
  input ISleepInput {
    position: String
    Duration: String
    patient: ID!
    date: String
  }
  type TPaginatedSleep {
    results: [TSleep]!
    page: Int!
    limit: Int!
    totalPages: Int!
    totalResults: Int!
  }

  # Queries
  type Query {
    getSleepData(sleepId: ID!): TSleep
    getMySleepsData(limit: Int, page: Int): TPaginatedSleep!
  }

  # Mutations
  type Mutation {
    createSleepData(data: ISleepInput!): TSleep
    updateSleepData(sleepId: ID!, data: ISleepInput!): TSleep
    deleteSleepData(sleepId: ID!): String!
  }
`;
