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
  input ITime {
    hour: Int
    min: Int
    period: String
  }
  input IAvailability {
    day: Int
    times: [ITime]
  }
  input IDocument {
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
  type TPatient {
    info: TUser
  }
  input IUpdateUser {
    name: String
    surname: String
    email: String
    tel: String
    gender: EGender
    dateOfBirth: String
    country: String
    city: String
    address: String
    languages: [String]
  }
  input IUpdateDoctor {
    domain: String
    about: String
    documents: [IDocument]
    availability: [IAvailability]
    unAvailability: [String]
  }
  # Queries
  type Query {
    me: TUser
    user(userId: ID!): TUser
    users(userRole: EUserRole, limit: Int, page: Int): TPaginatedUsers!
    doctor(userId: ID!): TDoctor
    doctors(limit: Int, page: Int): TDoctorList!
    patient(userId: ID!): TPatient
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
    updateAccount(data: IUpdateUser!): TUser
    updateDoctorInfo(data: IUpdateDoctor!): String!
    deleteUser(userId: ID!): String!
  }
`;
