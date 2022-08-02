import { gql } from 'apollo-server-express';

export default gql`
  type TLabTest {
    id: ID
    institutionName: String
    processName: String
    result: String
    resultUnit: String
    referenceValue: String
    data: String
    patient: TUser
    doctor: TUser
  }
  input ICreateLabTest {
    institutionName: String
    processName: String
    result: String
    resultUnit: String
    referenceValue: String
    data: String
    patientRef: ID
  }
  type TPaginatedLabTests {
    results: [TLabTest]!
    page: Int!
    limit: Int!
    totalPages: Int!
    totalResults: Int!
  }

  input IUpdateLabTest {
    institutionName: String
    processName: String
    result: String
    resultUnit: String
    referenceValue: String
    data: String
    patientRef: ID
  }

  # Queries
  type Query {
    getLabTest(labTestId: ID!): TLabTest
    getLabTests(limit: Int, page: Int): TPaginatedLabTests!
  }

  # Mutations
  type Mutation {
    createLabTest(data: ICreateLabTest!): TLabTest
    updateLabTest(labTestId: ID!, data: IUpdateLabTest!): TLabTest
    deleteLabTest(labTestId: ID!): String!
  }
`;
