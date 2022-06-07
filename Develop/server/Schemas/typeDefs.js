const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: user
  }

  type Mutation {
    login(email: string, password: string): auth

    addUser(username: string, email: string, password: string): auth

    saveBook(newBook: InputBook): user

    removeBook(bookId: id): user
  }

  type User {
    _id: id

    username: string

    email: string

    bookCount: int

    savedBooks: [book]
  }

  type Book {
    bookId: id

    authors: [string]

    description: string

    title: string

    image: png

    link: string
  }
`;
