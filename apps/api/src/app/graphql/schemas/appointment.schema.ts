import { gql } from 'apollo-server-express';

export default gql`
  type TAppointment {
    id: ID
    dateTime: String
    conditions: String
    symptoms: [String]
    patient: TUser
    doctor: TUser
    status: EAppointmentStatus
    doctorJoinAt: String
    patientJoinAt: String
    doctorQuitAt: String
    patientQuitAt: String
  }
  type TPaginatedAppointment {
    results: [TAppointment]!
    page: Int!
    limit: Int!
    totalPages: Int!
    totalResults: Int!
  }
  input addAppointmentBodyInput {
    dateTime: String!
    conditions: String
    symptoms: [String!]
    doctorRef: ID!
  }
  # Queries
  type Query {
    appointment(appointmentId: ID): TAppointment
  }
  # Mutations
  type Mutation {
    makeAppointment(data: addAppointmentBodyInput!): TAppointment
  }
`;
