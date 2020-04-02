import express from 'express';
import bodyParser from 'body-parser';
import expressGraphQL from 'express-graphql';
import {GraphQLSchema} from 'graphql';
import {GraphQLBooksQuery} from "./GraphQLBooksQuery";

const booksQuery = new GraphQLBooksQuery();
const port = process.env.PORT || 8080;
const serviceName = process.env.SERVICE_NAME || "book-service";
const app = express();

app.use(bodyParser.json());

const schema = new GraphQLSchema({
    query: booksQuery.query
});


app.use('/api/v1/books', expressGraphQL({
    schema: schema,
    graphiql: true
}));


app.listen(port, () => {
    console.log(`${serviceName} listening on port ${port}`);
});
