import { gql } from 'apollo-server-express';

export default gql`
  enum EUserRole {
    admin
    patient
    doctor
  }
  enum EGender {
    female
    male
  }
  enum EUserAccountStatus {
    opened
    closed
    unverified
  }
  # Queries
  # type Query {}
  # Mutations
  # type Mutation {}
`;
