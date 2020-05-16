const {buildSchema} = require('graphql')

module.exports = buildSchema(`
  type User{
  name: String!
  age: Int!
  }

  type TestType{
  count: Int!
  users: [User!]!
  }
  
  type Todo{
  id: ID!
  title: String!
  done: boolean!
  createdAt: String
  updatedAt: String
  }

  type Query {
    test: TestType!
    getTodos: [Todo!]!
  }
`)