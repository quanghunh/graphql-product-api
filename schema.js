const { gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    id: Int!
    name: String!
    price: Int!
    category: Category
  }

  type Category {
    id: Int!
    name: String!
    products: [Product!]!
  }

  input ProductInput {
    name: String!
    price: Int!
    categoryId: Int
  }

  type Query {
    products: [Product!]!
    product(id: Int!): Product
  }

  type Mutation {
    createProduct(input: ProductInput!): Product!
    deleteProduct(id: Int!): Boolean!
    updateProduct(id: Int!, input: ProductInput!): Product!
  }
`;

module.exports = typeDefs;
