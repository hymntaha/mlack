import express from 'express';
import bodyParser from 'body-parser';
import {graphqlExpress} from 'apollo-server-express';

const PORT = 8080;

const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress);
app.listen(PORT);
