import { gql } from 'apollo-server-express';

export default gql`
  type TUser {
    id: ID
    name: String
    surname: String
    email: String
    gender: EGender
    role: EUserRole
    accountStatus: Boolean
  }
  type TPaginatedUsers {
    results: [TUser]!
    page: Int!
    limit: Int!
    totalPages: Int!
    totalResults: Int!
  }
  input IUpdateUser {
    name: String
    surname: String
    email: String
    gender: EGender
    role: EUserRole
    password: String
  }
  # Queries
  type Query {
    user(userId: ID!): TUser
    users(role: EUserRole, limit: Int, page: Int): TPaginatedUsers!
  }
  # Mutations
  type Mutation {
    createUser(
      name: String!
      surname: String!
      email: String!
      gender: EGender
      role: EUserRole
    ): TUser
    updateUser(userId: ID!, data: IUpdateUser!): TUser
    deleteUser(userId: ID!): String!
  }
`;
