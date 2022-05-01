import { gql } from 'apollo-server-express';

export default gql`
  type TBlog {
    id: ID
    name: String
    description: String
    image: String
  }
  type TPaginatedBlogs {
    results: [TBlog]!
    page: Int!
    limit: Int!
    totalPages: Int!
    totalResults: Int!
  }

  input IUpdateBlog {
    name: String
    description: String
    image: Upload
  }

  # Queries
  type Query {
    getBlog(blogId: ID!): TBlog
    getBlogs(limit: Int, page: Int): TPaginatedBlogs!
  }

  # Mutations
  type Mutation {
    createBlog(name: String!, description: String!): TBlog
    updateBlog(data: IUpdateBlog!): TBlog
    deleteBlog(blogId: ID!): String!
  }
`;
