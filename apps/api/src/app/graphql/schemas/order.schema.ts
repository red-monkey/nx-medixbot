import { gql } from 'apollo-server-express';

export default gql`
  type TOrderItems {
    name: String
    quantity: Float
    image: String
    price: Float
    product: TProduct
  }
  type TShippingAddress {
    address: String
    city: String
    postcode: String
    country: String
  }
  type TPaymentResult {
    id: String
    status: String
    update_time: String
    email_address: String
  }

  type TOrder {
    id: ID
    user: TUser
    orderItems: TOrderItems
    shippingAddress: TShippingAddress
    paymentMethod: String
    paymentResult: TPaymentResult
    taxPrice: Float
    shippingPrice: Float
    totalPrice: Float
    isPaid: Boolean
    paidAt: String
    isDelivered: Boolean
    deliveredAt: String
  }

  input IOrderItem {
    name: String
    quantity: Float
    image: String
    price: Float
  }

  input IShippingAddress {
    address: String
    city: String
    postcode: String
    country: String
  }

  input ICreateOrder {
    orderItems: IOrderItem
    shippingAddress: IShippingAddress
    paymentMethod: String
    itemsPrice: Float
    taxPrice: Float
    shippingPrice: Float
    totalPrice: Float
  }

  type TPaginatedOrders {
    results: [TOrder]!
    page: Int!
    limit: Int!
    totalPages: Int!
    totalResults: Int!
  }

  input IUpdateOrder {
    orderItems: IOrderItem
    shippingAddress: IShippingAddress
    paymentMethod: String
    itemsPrice: Float
    taxPrice: Float
    shippingPrice: Float
    totalPrice: Float
  }

  # Queries
  type Query {
    getOrder(orderId: ID!): TOrder
    getOrders(limit: Int, page: Int): TPaginatedOrders!
    getMyOrders: [TOrder!]!
  }

  # Mutations
  type Mutation {
    createOrder(data: ICreateOrder!): TOrder
    updateOrder(orderId: ID!, data: IUpdateOrder!): TOrder
    updateOrderToDelivered(orderId: ID!): TOrder!
    updateOrderToPaid(orderId: ID!): TOrder
  }
`;
