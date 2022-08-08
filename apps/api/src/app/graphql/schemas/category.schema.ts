import { gql } from 'apollo-server-express';

export default gql`
  type TCategory {
    id: ID
    name: String
    description: String
  }
  input ICreateCategory {
    name: String
    description: String
  }
  type TPaginatedCategories {
    results: [TCategory]!
    page: Int!
    limit: Int!
    totalPages: Int!
    totalResults: Int!
  }

  input IUpdateCategory {
    name: String
    description: String
  }

  # Queries
  type Query {
    getCategory(categoryId: ID!): TCategory
    getCategories(limit: Int, page: Int): TPaginatedCategories!
  }

  # Mutations
  type Mutation {
    createCategory(data: ICreateCategory!): TCategory
    updateCategory(categoryId: ID!, data: IUpdateCategory!): TCategory
    deleteCategory(categoryId: ID!): String!
  }
`;
