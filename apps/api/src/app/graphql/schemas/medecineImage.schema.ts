import { gql } from 'apollo-server-express';

export default gql`
  type TMedecineImage {
    id: ID
    date: String
    hospital_name: String
    comment: String
    report: String
    image: String
    user: TUser
  }
  input ICreateMedecineImage {
    date: String
    hospital_name: String
    comment: String
    report: String
    image: Upload
    user: ID!
  }
  type TPaginatedMedecineImage {
    results: [TMedecineImage]!
    page: Int!
    limit: Int!
    totalPages: Int!
    totalResults: Int!
  }

  input IUpdateMedecineImage {
    id: ID
    date: String
    hospital_name: String
    comment: String
    report: String
    image: Upload
    user: ID!
  }

  # Queries
  type Query {
    getMedecineImage(medecineImageId: ID!): TMedecineImage
    getMedecineImages(limit: Int, page: Int): TPaginatedMedecineImage!
  }

  # Mutations
  type Mutation {
    createMedecineImage(data: ICreateMedecineImage!): TMedecineImage
    updateMedecineImage(data: IUpdateMedecineImage!): TMedecineImage
    deleteMedecineImage(medecineImageId: ID!): String!
  }
`;
