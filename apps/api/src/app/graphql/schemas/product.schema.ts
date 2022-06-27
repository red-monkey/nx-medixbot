import { gql } from 'apollo-server-express';

export default gql`

  type TReview {
    name: String, 
    rating: Float,
    comment: String,
    user: TUser
  }
  
   input ICreateReview {
    productRef:ID
    name: String, 
    rating: Float,
    comment: String,
  }
  type TProduct {
    id: ID
    name: String
    user: TUser
    image: String
    brand: String
    category:TCategory
    description: String
    reviews: [TReview]
    rating: Float
    numReviews:Float
    price: Float
    countInStock:Float
  }
   
  input ICreateProduct {
    name: String
    image: Upload
    brand: String
    categoryRef:ID
    description: String
    price: Float
    countInStock:Float
  }


  type TPaginatedProducts {
    results: [TProduct]!
    page: Int!
    limit: Int!
    totalPages: Int!
    totalResults: Int!
  }

  input IUpdateProduct {
    name: String
    image: Upload
    brand: String
    categoryRef:ID
    description: String
    price: Float
    rating: Float
    countInStock:Float
  }

  # Queries
  type Query {
    getProduct(productId: ID!): TProduct
    getProducts(limit: Int, page: Int): TPaginatedProducts!
    getTopProducts():[TProduct]!
  }

  # Mutations
  type Mutation {
    createProduct(data: ICreateProduct!): TProduct
    createProductReview(productId: ID!,data: ICreateReview!):String
    updateProduct(productId: ID!,data: IUpdateProduct!): TProduct
    deleteProduct(productId: ID!): String!
  }
`;
