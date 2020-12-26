import { gql } from "apollo-server-express";
import { v4 as uuidv4 } from "uuid";
import db from "../db";

export const typeDef = gql`
  extend type Query {
    users: [User]
  }

  extend type Mutation {
    addUser(username: String!, password: String!, email: String!): User!
  }

  type User {
    id: Int!
    username: String!
    password: String!
    email: String!
  }
`;
export const resolvers = {
  Query: {
    users: (): any[] => {
      return [];
    },
  },
  Mutation: {
    addUser: async (_: any, args: any) => {
      var uuid: string = uuidv4();

      const [id] = await db("users")
        .insert({
          username: args.username,
          password: args.password,
          email: args.email,
          salt: uuid,
        })
        .returning(["id"]);

      return {
        id: id,
        username: args.username,
        password: args.password,
        email: args.email,
      };
    },
  },
};
