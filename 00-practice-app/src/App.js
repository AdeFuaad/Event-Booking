const express = require('express');
const applyMiddleware = require('./config/middleware');
const connectDB = require('./config/database');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const dotenv = require('dotenv');

const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');

dotenv.config();

const app = express();

// Allow cross-origin requests
app.use(cors());

connectDB(); // Connect to the database

applyMiddleware(app); // Apply middleware functions

// Other server setup code...

// Set up GraphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true, // Set to 'false' in production
  }),
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
