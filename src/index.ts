import { ApolloServer, gql } from "apollo-server-express";
import compression from "compression";
import cookieParser from "cookie-parser";
import express from "express";
import { merge } from "lodash";
import { resolvers as bookResolver, typeDef as Book } from "./schema/book";

const APP_PORT = process.env.PORT || 4000;

const Query = gql`
  type Query {
    _empty: String
  }
`;

const resolvers = {};

const server = new ApolloServer({
  typeDefs: [Query, Book],
  resolvers: merge(resolvers, bookResolver),
  context: ({ req, res }) => ({ req, res }),
});

const app = express();

app.use(cookieParser());
app.use(compression);

server.applyMiddleware({ app });

app.listen(APP_PORT, () => {
  console.log(
    `GraphQL server is ready at http://localhost:${APP_PORT}${server.graphqlPath}`
  );
});
