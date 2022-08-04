import { gql } from 'apollo-server-express';

export default gql`
  enum EppointmentStatus {
    Completed
    Pending
    Canceled
    Missed
  }

  type TAppointment {
    id: ID
    date: String
    time: String
    country: String
    city: String
    district: String
    hospital: THospital
    conditions: String
    clinic: TClinic
    symptoms: [String]
    patient: TUser
    doctor: TUser
    status: EAppointmentStatus
    doctorJoinAt: String
    patientJoinAt: String
    doctorQuitAt: String
    patientQuitAt: String
  }
  input ICreateAppointment {
    date: String!
    time: String!
    conditions: String
    country: String
    city: String
    district: String
    hospital: ID!
    clinic: ID!
    symptoms: [String!]
    doctor: ID!
  }
  type TPaginatedAppointment {
    results: [TAppointment]!
    page: Int!
    limit: Int!
    totalPages: Int!
    totalResults: Int!
  }

  input IUpdateAppointment {
    date: String
    time: String
    conditions: String
    country: String
    city: String
    district: String
    hospital: ID
    clinic: ID
    symptoms: [String]
    doctor: ID
  }

  # type agoraRTMTokenType {
  #   appID: String
  #   uid: Int
  #   agoraRTMToken: String
  #   expirationTimeInSeconds: Int
  # }
  # type SessionOuput {
  #   appID: String!
  #   channel: String!
  #   uid: Int!
  #   agoraToken: String!
  #   expirationTimeInSeconds: Int!
  #   agoraRTMToken: agoraRTMTokenType
  # }
  # type startSessionOutput {
  #   tokens: SessionOuput!
  #   appointment: TAppointment!
  # }

  # Queries
  type Query {
    getAppointment(appointmentId: ID!): TAppointment
    getAppointments(limit: Int, page: Int): TPaginatedAppointment!
    getMyAppointments: TPaginatedAppointment

  }

  # Mutations
  type Mutation {
    makeAppointment(data: ICreateAppointment!): TAppointment
    updateAppointment(
      appointmentId: ID!
      data: IUpdateAppointment!
    ): TAppointment
    deleteAppointment(appointmentId: ID!): String!
    updateAppointmentStatus(
      appointmentId: ID!
      newStatus: EAppointmentStatus!
    ): TAppointment
  }
`;
