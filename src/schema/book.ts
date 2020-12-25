import { gql } from "apollo-server-express";
import express from "express";

export const typeDef = gql`
  extend type Query {
    books: Book
  }

  type Book {
    title: String!
  }
`;

export const resolvers = {
  Query: {
    books: (parent: any, args: any, context: any) => {
      var _req: express.Request = context.req;

      return {
        title: `This is a book!, url: ${_req.baseUrl}`,
      };
    },
  },
};
