import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";

import models from "./models";

const types = fileLoader(path.join(__dirname, "./schema"));
const typeDefs = mergeTypes(types);

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

const graphqlEndpoint = "/graphql";

app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema }));

app.use("/graphiql", graphiqlExpress({ endpointURL: graphqlEndpoint }));

models.sequelize.sync().then(() => {
  app.listen(8081);
});
