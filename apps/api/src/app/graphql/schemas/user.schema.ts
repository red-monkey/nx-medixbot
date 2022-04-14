import { gql } from 'apollo-server-express';

export default gql`
  type TUser {
    id: ID
    name: String
    surname: String
    email: String
    tel: String
    gender: EGender
    userRole: EUserRole
    accountStatus: EUserAccountStatus
    registeredWith: String
    dateOfBirth: String
    country: String
    city: String
    address: String
    languages: [String]
  }
  type TPaginatedUsers {
    results: [TUser]!
    page: Int!
    limit: Int!
    totalPages: Int!
    totalResults: Int!
  }
  type TDoctorList {
    results: [TDoctor]!
    page: Int!
    limit: Int!
    totalPages: Int!
    totalResults: Int!
  }
  type TTime {
    hour: Int
    min: Int
    period: String
  }
  type TAvailability {
    day: Int
    times: [TTime]
  }
  type TDocument {
    type: String
    url: String
  }
  type TDoctor {
    info: TUser
    domain: String
    about: String
    documents: [TDocument]
    availability: [TAvailability]
    unAvailability: [String]
  }
  input IUpdateUser {
    name: String
    surname: String
    email: String
    gender: EGender
    userRole: EUserRole
    password: String
  }
  # Queries
  type Query {
    me: TUser
    user(userId: ID!): TUser
    users(userRole: EUserRole, limit: Int, page: Int): TPaginatedUsers!
  }
  # Mutations
  type Mutation {
    createUser(
      name: String!
      surname: String!
      email: String!
      gender: EGender
      userRole: EUserRole
    ): TUser
    updateUser(userId: ID!, data: IUpdateUser!): TUser
    deleteUser(userId: ID!): String!
  }
`;
