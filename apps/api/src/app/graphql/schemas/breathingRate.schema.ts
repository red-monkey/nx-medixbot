import { gql } from 'apollo-server-express';

export default gql`
  type TBreathingData {
    id: ID
    value: Float
    patient: TUser
    date: String
    time: String
  }
  input IBreathingInput {
    value: Float
    patient: ID!
    date: String
    time: String
  }
  type TPaginatedBreathingData {
    results: [TBreathingData]!
    page: Int!
    limit: Int!
    totalPages: Int!
    totalResults: Int!
  }

  # Queries
  type Query {
    getBreathingData(breathingId: ID!): TBreathingData
    getMyBreathingData(limit: Int, page: Int): TPaginatedBreathingData!
  }

  # Mutations
  type Mutation {
    createBreathingData(data: IBreathingInput!): TBreathingData
    updateBreathingData(
      breathingId: ID!
      data: IBreathingInput!
    ): TBreathingData
    deleteBreathingData(breathingId: ID!): String!
  }
`;
