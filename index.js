import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";

import models from "./models";

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, "./schema")));
const resolvers = mergeTypes(fileLoader(path.join(__dirname, "./resolvers")));

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

const graphqlEndpoint = "/graphql";

app.use(
  graphqlEndpoint,
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: {
      models,
      user: { id: 1 }
    }
  })
);

app.use("/graphiql", graphiqlExpress({ endpointURL: graphqlEndpoint }));

models.sequelize.sync().then(() => {
  app.listen(8081);
});
