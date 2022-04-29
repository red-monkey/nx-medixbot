import { gql } from 'apollo-server-express';

export default gql`
  type TTokenFormat {
    token: String!
    expires: String!
  }
  type TToken {
    access: TTokenFormat!
    refresh: TTokenFormat!
  }
  type TAuthSuccess {
    user: TUser!
    tokens: TToken!
  }
  input IRegisterUser {
    fullName: String!
    email: String
    tel: String
    gender: EGender!
    dateOfBirth: String
    country: String
    city: String
    state: String
    postCode: String
    languages: [String]
    password: String!
    membership: EMembership
    profileImage: Upload
  }
  # Queries
  # Mutations
  extend type Mutation {
    register(data: IRegisterUser!): TAuthSuccess!
    login(username: String!, password: String!): TAuthSuccess!
    logout(refreshToken: String!): TNormalResponse!
    refreshTokens(refreshToken: String!): TToken!
    forgotPassword(email: String!): TNormalResponse!
    resetPassword(token: String!, password: String!): TNormalResponse!
    sendVerificationEmail: TNormalResponse!
  }
`;
