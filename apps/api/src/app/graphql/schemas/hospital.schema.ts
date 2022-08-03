import { gql } from 'apollo-server-express';

export default gql`
  type THospital {
    id: ID
    name: String
    description: String
    tracking_number: String
    country: String
    city: String
    district: String
    location: String
  }
  input ICreateHospital {
    name: String!
    description: String!
    tracking_number: String!
    country: String!
    city: String!
    district: String!
    location: String!
  }
  type TPaginatedHospital {
    results: [THospital]!
    page: Int!
    limit: Int!
    totalPages: Int!
    totalResults: Int!
  }

  input IUpdateHospital {
    name: String
    description: String
    tracking_number: String
    country: String
    city: String
    district: String
    location: String
  }

  # Queries
  type Query {
    getHospital(hospitalId: ID!): THospital
    getHospitals(limit: Int, page: Int): TPaginatedHospital!
  }

  # Mutations
  type Mutation {
    createHospital(data: ICreateHospital!): THospital
    updateHospital(hospitalId: ID!, data: IUpdateHospital!): THospital
    deleteHospital(hospitalId: ID!): String!
  }
`;
