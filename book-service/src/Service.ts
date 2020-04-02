import express from 'express';
import bodyParser from 'body-parser';

const books = [
    {id: 1, authorId: 1,  name: "Cassandra, The Definitive Guide"},
    {id: 2, authorId: 2,  name: "Node.js Design Patterns"},
    {id: 3, authorId: 3,  name: "Monolith to Microservices"},
    {id: 4, authorId: 4,  name: "Kubernetes Cookbook"},
    {id: 5, authorId: 5,  name: "Kakfa The Definitive Guide"},
    {id: 6, authorId: 6,  name: "Managing Risk and Information Security"},
    {id: 7, authorId: 7,  name: "Building Data Streaming Applications with Apache Kafka"},
    {id: 8, authorId: 8,  name: "Hands-On Microservices with Kubernetes"},
    {id: 9, authorId: 9,  name: "Mastering Distributed Tracing"},
    {id: 10, authorId: 10,  name: "Patterns of Enterprise Application Architecture"},
    {id: 11, authorId: 11,  name: "Clean Architecture"},
    {id: 12, authorId: 12,  name: "Microservices Patterns"},
    {id: 13, authorId: 13,  name: "Apache Kafka Cookbook"},
    {id: 14, authorId: 14,  name: "Microservices for the Enterprise"},
    {id: 15, authorId: 15,  name: "Terraform Up & Running"},
    {id: 16, authorId: 16,  name: "Enterprise Integration Patterns"},
    {id: 17, authorId: 17,  name: "Google Platform for Architects"},
    {id: 18, authorId: 18,  name: "Cloud Native DevOps with Kubernetes"},
    {id: 19, authorId: 19,  name: "Building Serverless Web Applications"},
    {id: 20, authorId: 20,  name: "Google Cloud Platform Cookbook"},
];

const port = process.env.PORT || 8080;
const serviceName = process.env.SERVICE_NAME || "book-service";
const app = express();

app.use(bodyParser.json());

app.get('/api/v1/books', function (req, res) {
    res.json({"books": books});
});

app.listen(port, () => {
    console.log(`${serviceName} listening on port ${port}`);
});
