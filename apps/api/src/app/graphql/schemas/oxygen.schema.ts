import { gql } from 'apollo-server-express';

export default gql`
  type TOxygenSaturationLevel {
    id: ID
    level: Float
    patient: TUser
    date: String
    time: String
  }
  input IOxygenLevelInput {
    level: Float!
    patient: ID!
    date: String!
    time: String!
  }
  type TPaginatedOxygenSaturationLevel {
    results: [TOxygenSaturationLevel]!
    page: Int!
    limit: Int!
    totalPages: Int!
    totalResults: Int!
  }

  # Queries
  type Query {
    getOxygenSaturationLevel(levelId: ID!): TOxygenSaturationLevel
    getMyOxygenSaturationLevels(
      limit: Int
      page: Int
    ): TPaginatedOxygenSaturationLevel!
  }

  # Mutations
  type Mutation {
    createOxygenSaturationLevel(
      data: IOxygenLevelInput!
    ): TOxygenSaturationLevel
    updateOxygenSaturationLevel(
      levelId: ID!
      data: IOxygenLevelInput!
    ): TOxygenSaturationLevel
    deleteOxygenSaturationLevel(levelId: ID!): String!
  }
`;
