import { gql } from 'apollo-server-express';

export default gql`
  type TClinic {
    id: ID
    name: String
    description: String
    hospital: THospital
  }
  input ICreateClinic {
    name: String!
    description: String!
    hospital: ID!
  }
  type TPaginatedClinics {
    results: [TClinic]!
    page: Int!
    limit: Int!
    totalPages: Int!
    totalResults: Int!
  }

  input IUpdateClinic {
    name: String
    description: String
    image: ID
  }

  # Queries
  type Query {
    getClinic(clinicId: ID!): TClinic
    getClinics(limit: Int, page: Int): TPaginatedClinics!
  }

  # Mutations
  type Mutation {
    createClinic(data: ICreateClinic!): TClinic
    updateClinic(clinicId: ID!, data: IUpdateClinic!): TClinic
    deleteClinic(clinicId: ID!): String!
  }
`;
