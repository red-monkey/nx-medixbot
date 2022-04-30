import { gql } from 'apollo-server-express';

export default gql`
  scalar Upload
  enum EUserRole {
    admin
    patient
    doctor
  }
  enum EGender {
    female
    male
    others
  }
  enum EUserAccountStatus {
    opened
    closed
    unverified
  }
  enum EAvailabilityStatus {
    available
    unavailable
  }
  enum EAppointmentStatus {
    Completed
    Pending
    Canceled
    Missed
  }
  enum EMembership {
    Referrer
    Partner
    Employer
    Family
  }
  type TNormalResponse {
    message: String!
  }
  type TUploadedFileResponse {
    filename: String!
    mimetype: String!
    encoding: String!
    url: String!
  }
  # Queries
  # type Query{}
  # Mutations
  # type Mutation {}
`;
