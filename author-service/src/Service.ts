import express from 'express';
import bodyParser from 'body-parser';

const authors = [
    {id: 1, name: "Jeff Carpenter"},
    {id: 2, name: "Mario Casciaro"},
    {id: 3, name: "Sam NewMan"},
    {id: 4, name: "Hideto Saito"},
    {id: 5, name: "Neha Narkhede"},
    {id: 6, name: "Malkom Harkins"},
    {id: 7, name: "Manish Kumar"},
    {id: 8, name: "Gigi Sayfan"},
    {id: 9, name: "Yuri Shkuro"},
    {id: 10, name: "Martin Fowler"},
    {id: 11, name: "Robert C. Martin"},
    {id: 12, name: "Chris Richardson"},
    {id: 13, name: "Raúl Estrada"},
    {id: 14, name: "Kaun Indrasiri"},
    {id: 15, name: "Yevgeniy Brikman"},
    {id: 16, name: "Gregor Hohpe"},
    {id: 17, name: "Vitthal Srinivasan"},
    {id: 18, name: "John Arundel"},
    {id: 19, name: "Diego Zanon"},
    {id: 20, name: "Leforie Rajan PS"}
];

const port = process.env.PORT || 8080;
const serviceName = process.env.SERVICE_NAME || "author-service";
const app = express();

app.use(bodyParser.json());

app.get('/api/v1/authors', function (req, res) {
    res.json({"books": authors});
});

app.listen(port, () => {
    console.log(`${serviceName} listening on port ${port}`);
});



