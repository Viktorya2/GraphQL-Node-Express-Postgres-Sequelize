import 'dotenv/config'; // configure environment in .env file
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import types from './src/schema';
import resolvers from './src/resolvers';
import cors from 'cors';

const server = new ApolloServer({
  typeDefs: types,
  resolvers,
  context: '',
});

const app = express();
app.use(cors());
server.applyMiddleware({ app });

app.listen({ port: 4001 }, () =>
  console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`)
);
