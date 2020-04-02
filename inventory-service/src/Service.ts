import express from 'express';
import bodyParser from 'body-parser';

const inventory = [
    {bookId: 1, quantity: 20},
    {bookId: 2, quantity: 46},
    {bookId: 3, quantity: 67},
    {bookId: 4, quantity: 22},
    {bookId: 5, quantity: 35},
    {bookId: 6, quantity: 2},
    {bookId: 7, quantity: 12},
    {bookId: 8, quantity: 66},
    {bookId: 9, quantity: 43},
    {bookId: 10, quantity: 41},
    {bookId: 11, quantity: 87},
    {bookId: 12, quantity: 11},
    {bookId: 13, quantity: 43},
    {bookId: 14, quantity: 34},
    {bookId: 15, quantity: 53},
    {bookId: 16, quantity: 51},
    {bookId: 17, quantity: 4},
    {bookId: 18, quantity: 3},
    {bookId: 19, quantity: 5},
    {bookId: 20, quantity: 76}
];

const port = process.env.PORT || 8080;
const serviceName = process.env.SERVICE_NAME || "inventory-service";
const app = express();

app.use(bodyParser.json());

app.get('/api/v1/inventory', function (req, res) {
    res.json({"books": inventory});
});

app.listen(port, () => {
    console.log(`${serviceName} listening on port ${port}`);
});



